#!/usr/bin/env bun
// gerar-submissao.js - Gerador de Arquivos para Submissao UFRB
// Uso: bun run gerar-submissao.js <disciplina> <trilha> <atividade> [opcoes]
// Ex: bun run gerar-submissao.js fundamentos-si 1 avaliacao

import { $ } from "bun";
import { existsSync, mkdirSync, writeFileSync, statSync } from "fs";
import { join, resolve } from "path";

var CONFIG = {
  discente: {
    nome: "Deivison de Lima Santana",
    instituicao: "Universidade Federal do Reconcavo da Bahia - UFRB",
    centro: "Centro de Ciencia e Tecnologia - CETENS",
    curso: "Bacharelado em Sistemas de Informacao (EAD)",
    semestre: "2026.1",
  },
  disciplinas: {
    "fundamentos-si": {
      codigo: "GCETENS839",
      nome: "Fundamentos de Sistemas de Informacao",
      docente: "Daiana Conceicao Souza",
      trilhas: ["Alan Turing", "Ada Lovelace", "Grace Hopper", "John von Neumann", "Claude Shannon", "Donald Knuth", "Linus Torvalds"],
    },
    algoritmos: {
      codigo: "GCETENS841",
      nome: "Algoritmos e Programacao I",
      docente: "Luis Paulo Morais Conceicao",
      trilhas: ["Semana 1 (30/03 a 04/04)", "Semana 2 (06/04 a 11/04)", "Semana 3 (13/04 a 18/04)", "Semana 4 (20/04 a 25/04)", "Semana 5 (27/04 a 02/05)", "Semana 6 (04/05 a 09/05)", "Semana 7 (11/05 a 16/05)"],
    },
    logica: {
      codigo: "GCETENS842",
      nome: "Logica Matematica Discreta",
      docente: "-",
      trilhas: [],
    },
  },
  tipos_atividade: {
    avaliacao: { nome: "Avaliacao", slug: "avaliacao" },
    lista: { nome: "Lista de Exercicios", slug: "lista" },
    trabalho: { nome: "Trabalho", slug: "trabalho" },
    prova: { nome: "Prova", slug: "prova" },
    relatorio: { nome: "Relatorio", slug: "relatorio" },
  },
  formatos: {
    docx: { extensao: ".docx", descricao: "Word (.docx)" },
    pdf: { extensao: ".pdf", descricao: "PDF (.pdf)" },
    md: { extensao: ".md", descricao: "Markdown (.md)" },
  },
};

function showHelp() {
  var msg = "";
  msg += "\nGERADOR DE ARQUIVOS DE SUBMISSAO UFRB\n";
  msg += "Uso: bun run gerar-submissao.js <disciplina> <trilha> <atividade> [opcoes]\n";
  msg += "\nARGUMENTOS:\n";
  msg += "  disciplina   fundamentos-si | algoritmos | logica\n";
  msg += "  trilha       Numero da trilha (1-7)\n";
  msg += "  atividade    avaliacao | lista | trabalho | prova | relatorio\n";
  msg += "\nOPCOES:\n";
  msg += "  --format     docx (padrao) | pdf | md\n";
  msg += "  --output     Diretorio de saida (padrao: ./dist/)\n";
  msg += "  --title      Titulo personalizado\n";
  msg += "  --data       Data de entrega (DD/MM/AAAA)\n";
  msg += "\nPADRAO DE ARQUIVO:\n";
  msg += "  <codigo>-trilha-<N>-<tipo>-<aluno>.docx\n";
  msg += "  gcetens839-trilha-1-avaliacao-deivison-santana.docx\n";
  msg += "\nEXEMPLOS:\n";
  msg += "  bun run gerar-submissao.js fundamentos-si 1 avaliacao\n";
  msg += "  bun run gerar-submissao.js algoritmos 7 lista --format pdf\n";
  console.log(msg);
}

function slugify(text) {
  return text.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
}

function buildHeader(disc, trilhaNum, atividadeTipo, options) {
  var tipo = CONFIG.tipos_atividade[atividadeTipo] || { nome: atividadeTipo, slug: atividadeTipo };
  var trilhaNome = disc.trilhas[trilhaNum - 1] || ("Trilha " + trilhaNum);
  var dataEntrega = options.data || new Date().toLocaleDateString("pt-BR");
  var formato = CONFIG.formatos[options.format] || CONFIG.formatos.docx;
  var titulo = options.title || (disc.nome + " - " + tipo.nome);
  var d = CONFIG.discente;

  var h = "";
  h += "# " + titulo + "\n\n";
  h += "---\n\n";
  h += d.instituicao + "\n";
  h += d.centro + "\n";
  h += d.curso + "\n\n";
  h += "---\n\n";
  h += "DISCIPLINA: " + disc.codigo + " - " + disc.nome + "\n";
  h += "SEMESTRE: " + d.semestre + "\n";
  h += "TRILHA: " + trilhaNum + " - " + trilhaNome + "\n\n";
  h += "DOCENTE: " + disc.docente + "\n";
  h += "DISCENTE: " + d.nome + "\n\n";
  h += "ATIVIDADE: " + tipo.nome + " - " + titulo + "\n";
  h += "DATA DE ENTREGA: " + dataEntrega + "\n";
  h += "FORMATO: " + formato.descricao + "\n\n";
  h += "---\n\n";
  return h;
}

function buildBody(options) {
  var b = "";
  b += "## Respostas / Desenvolvimento\n\n";
  b += "*[Conteudo da atividade]*\n\n";
  b += "---\n\n";
  b += "## Referencias\n\n";
  b += "*[Referencias utilizadas]*\n\n";
  b += "---\n\n";
  b += "> Gerado em: " + new Date().toLocaleString("pt-BR") + "\n";
  b += "> Repositorio: Metodologia-EAD\n";
  return b;
}

async function main() {
  var args = process.argv.slice(2);

  if (args.length < 3 || args.includes("--help") || args.includes("-h")) {
    showHelp();
    process.exit(0);
  }

  var disciplina = args[0];
  var trilhaNum = parseInt(args[1]);
  var atividadeTipo = args[2];

  var options = { format: "docx", output: "dist", title: "", data: "" };
  for (var i = 3; i < args.length; i++) {
    switch (args[i]) {
      case "--format": options.format = args[++i]; break;
      case "--output": options.output = args[++i]; break;
      case "--title": options.title = args[++i]; break;
      case "--data": options.data = args[++i]; break;
    }
  }

  var disc = CONFIG.disciplinas[disciplina];
  if (!disc) {
    console.error("[ERRO] Disciplina nao encontrada: " + disciplina);
    console.error("  Disponiveis: " + Object.keys(CONFIG.disciplinas).join(", "));
    process.exit(1);
  }

  var tipo = CONFIG.tipos_atividade[atividadeTipo];
  if (!tipo) {
    console.error("[ERRO] Tipo nao encontrado: " + atividadeTipo);
    console.error("  Disponiveis: " + Object.keys(CONFIG.tipos_atividade).join(", "));
    process.exit(1);
  }

  var trilhaNome = disc.trilhas[trilhaNum - 1] || ("Trilha " + trilhaNum);
  var slugAluno = slugify(CONFIG.discente.nome);
  var formato = CONFIG.formatos[options.format] || CONFIG.formatos.docx;

  // Build filename
  var filename = disc.codigo.toLowerCase() + "-trilha-" + trilhaNum + "-" + tipo.slug + "-" + slugAluno + formato.extensao;

  // Create output dir
  var outputDir = resolve(options.output);
  if (!existsSync(outputDir)) mkdirSync(outputDir, { recursive: true });

  // Build content
  var fullContent = buildHeader(disc, trilhaNum, atividadeTipo, options) + buildBody(options);

  if (options.format === "md") {
    var filePath = join(outputDir, filename);
    writeFileSync(filePath, fullContent, "utf-8");
    console.log("[OK] Arquivo gerado: " + filePath);
  } else {
    // Write .md first
    var mdFilename = disc.codigo.toLowerCase() + "-trilha-" + trilhaNum + "-" + tipo.slug + "-" + slugAluno + ".md";
    var mdPath = join(outputDir, mdFilename);
    writeFileSync(mdPath, fullContent, "utf-8");

    // Try pandoc conversion
    var outPath = join(outputDir, filename);
    try {
      await $`pandoc ${mdPath} -o ${outPath}`.quiet();
      console.log("[OK] " + formato.descricao + " gerado: " + outPath);
    } catch (e) {
      console.log("[OK] Markdown gerado (pandoc nao disponivel para converter): " + mdPath);
      console.log("     Para converter manualmente: pandoc " + mdPath + " -o " + outPath);
    }
  }

  if (existsSync(join(outputDir, filename))) {
    var stats = statSync(join(outputDir, filename));
    console.log("     Tamanho: " + (stats.size / 1024).toFixed(1) + " KB");
  }
  console.log("     Arquivo: " + filename);
}

main().catch(console.error);
