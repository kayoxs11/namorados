// app.js
// Lógica principal — Amanhecer na Presença (Casais)
//
// REGRAS:
//  1. Primeiro acesso em qualquer dispositivo → sempre exibe o Dia 1 (introdução).
//  2. A partir do segundo acesso, um devocional ALEATÓRIO é escolhido por dia.
//  3. A troca acontece todos os dias às 00:00 (meia-noite).
//     ──> Se a sua cliente quiser trocar às 05:00 basta alterar HORA_TROCA abaixo.
//  4. O índice do dia fica salvo no localStorage para não mudar durante o mesmo dia.
//  5. Um contador regressivo mostra quanto falta para a próxima troca.

// ─── CONFIGURAÇÃO ────────────────────────────────────────────────────────────
const HORA_TROCA = 0;   // 0 = meia-noite | altere para 5 se quiser às 05:00
const MINUTO_TROCA = 0; // minuto exato da troca

// Chaves do localStorage
const KEY_VISITED  = 'acd_casais_visited';   // se já visitou antes
const KEY_INDEX    = 'acd_casais_index';     // índice do devocional atual
const KEY_DATE     = 'acd_casais_date';      // string da data do devocional atual

// ─── UTILITÁRIOS ─────────────────────────────────────────────────────────────

/** Retorna um número aleatório inteiro entre min e max (inclusivos). */
function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

/** Retorna a string "YYYY-MM-DD" para hoje no fuso local. */
function dataHoje() {
  const d = new Date();
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
}

/** Formata a data de hoje para exibição. */
function dataFormatada() {
  return new Date().toLocaleDateString('pt-BR', {
    weekday: 'long',
    year:    'numeric',
    month:   'long',
    day:     'numeric'
  });
}

/** Retorna o dia do ano (1..365/366) no fuso local. */
function getDayOfYear() {
  const now = new Date();
  const start = new Date(now.getFullYear(), 0, 0);
  const diff = now - start;
  const oneDay = 1000 * 60 * 60 * 24;
  return Math.floor(diff / oneDay);
}

/**
 * Calcula os milissegundos até o próximo horário de troca (HORA_TROCA:MINUTO_TROCA).
 * Se já passou hoje, calcula para amanhã.
 */
function msAteProximaTroca() {
  const agora  = new Date();
  const troca  = new Date(agora);

  troca.setHours(HORA_TROCA, MINUTO_TROCA, 0, 0);

  if (troca <= agora) {
    // Já passou hoje → próxima troca é amanhã
    troca.setDate(troca.getDate() + 1);
  }

  return troca - agora;
}

// ─── EXIBIÇÃO ────────────────────────────────────────────────────────────────

/**
 * Renderiza o devocional de índice `index` no DOM.
 * @param {number} index  Índice no array DEVOCIONAIS
 */
function mostrarDevocional(index) {
  const d = DEVOCIONAIS[index];
  if (!d) return;

  const isIntroducao = !!d.introducao;

  // Badge e título
  document.getElementById('badge-dia').textContent         = `✦ Dia ${index + 1} de ${DEVOCIONAIS.length}`;
  document.getElementById('titulo-devocional').textContent  = d.titulo;

  // Data
  document.getElementById('data-hoje').textContent = dataFormatada();

  // Versículo — oculta bloco inteiro se for introdução
  const blocoVersiculo = document.getElementById('bloco-versiculo');
  if (isIntroducao) {
    blocoVersiculo.style.display = 'none';
  } else {
    blocoVersiculo.style.display = '';
    document.getElementById('versiculo-texto').textContent = d.versiculo;
    document.getElementById('versiculo-ref').textContent   = `— ${d.ref}`;
  }

  // Texto devocional
  document.getElementById('devocional-texto').textContent = d.texto;

  // Oração — oculta bloco inteiro se for introdução
  const blocoOracao = document.getElementById('bloco-oracao');
  if (isIntroducao || !d.oracao) {
    blocoOracao.style.display = 'none';
  } else {
    blocoOracao.style.display = '';
    document.getElementById('oracao-texto').textContent = d.oracao;
  }

  // Animação de entrada
  const card = document.getElementById('card-devocional');
  card.style.animation = 'none';
  void card.offsetHeight;                    // força reflow para reiniciar
  card.style.animation = 'fadeUp 0.6s ease both';
}

// ─── CONTADOR REGRESSIVO ─────────────────────────────────────────────────────

let intervaloContador = null;

/** Formata ms em "HH:MM:SS". */
function formatarTempo(ms) {
  if (ms <= 0) return '00:00:00';
  const totalSeg = Math.floor(ms / 1000);
  const h = Math.floor(totalSeg / 3600);
  const m = Math.floor((totalSeg % 3600) / 60);
  const s = totalSeg % 60;
  return [h, m, s].map(n => String(n).padStart(2, '0')).join(':');
}

function iniciarContador() {
  const el = document.getElementById('contador-tempo');
  if (!el) return;

  // Atualiza imediatamente
  el.textContent = formatarTempo(msAteProximaTroca());

  // Limpa intervalo anterior se houver
  if (intervaloContador) clearInterval(intervaloContador);

  intervaloContador = setInterval(() => {
    const restante = msAteProximaTroca();
    el.textContent = formatarTempo(restante);

    // Quando chegar a zero, troca o devocional automaticamente
    if (restante <= 1000) {
      clearInterval(intervaloContador);
      setTimeout(() => {
        trocarDevocionalDiario();
        iniciarContador(); // reinicia o contador para o próximo dia
      }, 1100);
    }
  }, 1000);
}

// ─── LÓGICA DE TROCA DIÁRIA ──────────────────────────────────────────────────

/**
 * Escolhe e exibe um novo devocional aleatório.
 * Salva no localStorage para que a mesma sessão/dia use o mesmo índice.
 * Garante que o índice 0 (introdução) não seja escolhido aleatoriamente.
 */
function trocarDevocionalDiario() {
  // Use o dia do ano como índice (Dia 1 -> índice 0). Garante que cada dia corresponda
  // a um devocional pré-definido no array `DEVOCIONAIS`.
  const dayIndex = getDayOfYear() - 1;
  const index = Math.max(0, Math.min(dayIndex, DEVOCIONAIS.length - 1));
  localStorage.setItem(KEY_INDEX, String(index));
  localStorage.setItem(KEY_DATE,  dataHoje());
  mostrarDevocional(index);
}

// ─── INICIALIZAÇÃO ───────────────────────────────────────────────────────────

(function init() {
  const jaVisitou = localStorage.getItem(KEY_VISITED);

  if (!jaVisitou) {
    // ── PRIMEIRO ACESSO ──
    // Exibe sempre o devocional de introdução (índice 0)
    localStorage.setItem(KEY_VISITED, 'true');
    localStorage.setItem(KEY_INDEX,   '0');
    localStorage.setItem(KEY_DATE,    dataHoje());
    mostrarDevocional(0);

  } else {
    // ── ACESSOS SEGUINTES ──
    const indexSalvo = localStorage.getItem(KEY_INDEX);
    const dateSalva  = localStorage.getItem(KEY_DATE);
    const hoje       = dataHoje();

    if (dateSalva === hoje && indexSalvo !== null) {
      // Mesmo dia → usa o devocional já sorteado hoje
      mostrarDevocional(parseInt(indexSalvo, 10));
    } else {
      // Dia novo → sorteia um devocional novo
      trocarDevocionalDiario();
    }
  }

  // Inicia o contador regressivo independentemente
  iniciarContador();
})();