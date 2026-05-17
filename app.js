// app.js — Lógica principal do Devocional Diário para Casais

(function () {
  // ─── CHAVES NO localStorage ─────────────────────────
  const KEY_FIRST_VISIT   = 'devocional_first_visit_done';
  const KEY_SEQUENCE      = 'devocional_sequence';       // Array com a ordem embaralhada
  const KEY_CURRENT_IDX   = 'devocional_current_idx';   // Qual posição da sequência estamos
  const KEY_LAST_DATE     = 'devocional_last_date';      // Data (YYYY-MM-DD) da última exibição

  // ─── UTILITÁRIOS ───────────────────────────────────
  function todayStr() {
    // Usa data LOCAL do dispositivo (evita problema de fuso horário com UTC)
    const d   = new Date();
    const y   = d.getFullYear();
    const mo  = String(d.getMonth() + 1).padStart(2, '0');
    const day = String(d.getDate()).padStart(2, '0');
    return `${y}-${mo}-${day}`;
  }

  function shuffle(array) {
    // Fisher-Yates
    const a = array.slice();
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  function getDayOfYear(dateStr) {
    // Retorna o dia do ano (1–365/366) de uma data "YYYY-MM-DD"
    const d = new Date(dateStr + 'T12:00:00');
    const start = new Date(d.getFullYear(), 0, 0);
    const diff = d - start;
    return Math.floor(diff / 86400000);
  }

  // ─── LÓGICA DE SELEÇÃO DO DEVOCIONAL ───────────────
  function getDevocionalIndex() {
    const today = todayStr();
    const firstVisitDone = localStorage.getItem(KEY_FIRST_VISIT);

    // PRIMEIRA VEZ em qualquer dispositivo → mostra o devocional nº 0
    if (!firstVisitDone) {
      // Gera sequência embaralhada para todos os devocionais
      const sequence = shuffle(Array.from({ length: DEVOCIONAIS.length }, (_, i) => i));
      localStorage.setItem(KEY_FIRST_VISIT, 'true');
      localStorage.setItem(KEY_SEQUENCE, JSON.stringify(sequence));
      localStorage.setItem(KEY_CURRENT_IDX, '0');
      localStorage.setItem(KEY_LAST_DATE, today);
      return sequence[0];
    }

    // Já visitou antes: verifica se mudou o dia
    const lastDate = localStorage.getItem(KEY_LAST_DATE);
    const sequence = JSON.parse(localStorage.getItem(KEY_SEQUENCE) || '[]');
    const currentIdx = parseInt(localStorage.getItem(KEY_CURRENT_IDX) || '0', 10);

    if (lastDate === today) {
      // Mesmo dia → devolve o devocional atual sem avançar
      return sequence[currentIdx] !== undefined ? sequence[currentIdx] : 0;
    }

    // Novo dia → avança para o próximo devocional
    let sequenceToUse = sequence;
    let idx = currentIdx + 1;

    // Se não houver sequência válida ou se acabou a sequência, embaralha tudo de novo
    if (sequenceToUse.length !== DEVOCIONAIS.length || idx >= sequenceToUse.length) {
      sequenceToUse = shuffle(Array.from({ length: DEVOCIONAIS.length }, (_, i) => i));
      idx = 0;
    }

    localStorage.setItem(KEY_SEQUENCE, JSON.stringify(sequenceToUse));
    localStorage.setItem(KEY_CURRENT_IDX, String(idx));
    localStorage.setItem(KEY_LAST_DATE, today);
    return sequenceToUse[idx];
  }

  // ─── EXIBIÇÃO ──────────────────────────────────────
  function renderDevocional(devIdx) {
    const dev = DEVOCIONAIS[devIdx];
    if (!dev) return;

    // Número do dia no ano (para exibição)
    const dayNum = getDayOfYear(todayStr());

    // Elementos DOM
    document.getElementById('dayNumber').textContent =
      `DIA ${dayNum} DE 365`;

    document.getElementById('devocionalTitle').textContent = dev.titulo;
    document.getElementById('versiculoText').textContent  = dev.versiculo;
    document.getElementById('versiculoRef').textContent   = dev.referencia;
    document.getElementById('reflexaoText').textContent   = dev.reflexao;
    document.getElementById('oracaoText').textContent     = dev.oracao;
    document.getElementById('desafioText').textContent    = dev.desafio;

    // Barra de progresso
    const pct = Math.round((dayNum / 365) * 100);
    const bar = document.getElementById('progressBar');
    const lbl = document.getElementById('progressLabel');
    if (bar) bar.style.width = pct + '%';
    if (lbl) lbl.textContent = `Dia ${dayNum} de 365 — ${pct}% do ano`;

    // Timer em tempo real (atualiza a cada segundo)
    updateTimer();
    setInterval(updateTimer, 1000);
  }

  // ─── TIMER ATÉ MEIA-NOITE ──────────────────────────
  function updateTimer() {
    const now  = new Date();
    const next = new Date();
    next.setHours(24, 0, 0, 0);
    const diff = next - now;

    const h = String(Math.floor(diff / 3600000)).padStart(2, '0');
    const m = String(Math.floor((diff % 3600000) / 60000)).padStart(2, '0');
    const s = String(Math.floor((diff % 60000) / 1000)).padStart(2, '0');

    const el = document.getElementById('timerDisplay');
    if (el) el.textContent = `${h}:${m}:${s}`;

    // Data por extenso
    const dateEl = document.getElementById('timerDate');
    if (dateEl) {
      dateEl.textContent = now.toLocaleDateString('pt-BR', {
        weekday: 'long', day: 'numeric', month: 'long', year: 'numeric'
      });
    }

    // Se virou a meia-noite, recarrega a página para exibir novo devocional
    if (diff <= 1000) {
      setTimeout(() => location.reload(), 1200);
    }
  }

  // ─── INICIALIZA ────────────────────────────────────
  function init() {
    try {
      const idx = getDevocionalIndex();
      renderDevocional(idx);
    } catch (err) {
      console.error('Erro ao carregar devocional:', err);
      renderDevocional(0);
    }
  }

  // Aguarda DOM e dados
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();