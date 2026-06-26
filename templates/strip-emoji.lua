-- strip-emoji.lua
-- Filtro Pandoc para remover emojis e caracteres "AI fluff" de documentos acadêmicos
-- Mantém os .md originais intactos, mas gera docx/pdf limpos
--
-- Uso: pandoc entrada.md -o saida.docx --lua-filter=strip-emoji.lua

local function is_emoji(codepoint)
  -- Ranges de emoji comuns
  return codepoint >= 0x1F300 and codepoint <= 0x1F9FF  -- Símbolos diversos, pictogramas, emoticons, suplementos
      or codepoint >= 0x2600 and codepoint <= 0x27BF    -- Símbolos diversos, dingbats
      or codepoint >= 0xFE00 and codepoint <= 0xFE0F    -- Variação de seletor
      or codepoint >= 0x200D                            -- Zero-width joiner
      or codepoint >= 0x1FA00 and codepoint <= 0x1FA6F  -- Símbolos de xadrez
      or codepoint >= 0x1F780 and codepoint <= 0x1F7FF  -- Símbolos geométricos
      or codepoint >= 0x1F600 and codepoint <= 0x1F64F  -- Emoticons
      or codepoint >= 0x2702 and codepoint <= 0x27B0    -- Dingbats
      or codepoint >= 0x24C2 and codepoint <= 0x1F251   -- Símbolos diversos
      or codepoint == 0x00A9 or codepoint == 0x00AE     -- © e ®
end

local function strip_emojis(text)
  if not text then return text end
  local result = {}
  local i = 1
  while i <= #text do
    local byte = text:byte(i)
    local codepoint, len
    if byte < 128 then
      codepoint = byte
      len = 1
    elseif byte < 224 then
      codepoint = (byte - 192) * 64 + text:byte(i + 1) - 128
      len = 2
    elseif byte < 240 then
      codepoint = (byte - 224) * 4096 + (text:byte(i + 1) - 128) * 64 + text:byte(i + 2) - 128
      len = 3
    else
      codepoint = (byte - 240) * 262144 + (text:byte(i + 1) - 128) * 4096 + (text:byte(i + 2) - 128) * 64 + text:byte(i + 3) - 128
      len = 4
    end
    if not is_emoji(codepoint) then
      table.insert(result, text:sub(i, i + len - 1))
    end
    i = i + len
  end
  return table.concat(result)
end

-- Remove emojis de strings puras (Inline)
function Str(el)
  el.text = strip_emojis(el.text)
  return el
end

-- Remove emojis de cabeçalhos
function Header(el)
  if el.content then
    for _, item in ipairs(el.content) do
      if item.t == "Str" then
        item.text = strip_emojis(item.text)
      end
    end
  end
  return el
end

-- Remove linhas de "status" que parecem checklist/to-do (tipo "> **Status:** ✅ ...")
function BlockQuote(el)
  local cleaned = {}
  for _, block in ipairs(el.content) do
    if block.t == "Para" then
      local text = ""
      for _, item in ipairs(block.content) do
        if item.t == "Str" then
          text = text .. item.text .. " "
        elseif item.t == "Space" then
          text = text .. " "
        end
      end
      -- Remove blockquotes que são só status/checklist
      if text:match("^Status:") or text:match("^[✅❌🔄📌]") or text:match("Documento VIVO") then
        -- pula (remove)
      else
        table.insert(cleaned, block)
      end
    else
      table.insert(cleaned, block)
    end
  end
  if #cleaned == 0 then
    return {}
  end
  el.content = cleaned
  return el
end

return {
  { Str = Str },
  { Header = Header },
  { BlockQuote = BlockQuote }
}
