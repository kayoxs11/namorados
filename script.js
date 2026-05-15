// devocionais.js
// 365 devocionais para casais — Amanhecer na Presença
// Dia 1 = introdução especial (sem versículo e sem oração)
// Dias 2–365 = devocionais completos

const DEVOCIONAIS = [

  /* ── DIA 1 — INTRODUÇÃO ─────────────────────────────────── */
  {
    titulo: "As Estações de Deus nas Nossas Vidas",
    introducao: true,   // flag usada pelo app.js para ocultar versículo e oração
    versiculo: "",
    ref: "",
    texto: `Há um tempo perfeito para todas as coisas. Assim como as estações se alternam com delicadeza e propósito, também a nossa vida passa por ciclos que moldam quem somos e quem estamos nos tornando. Cada flor que nasce, cada folha que cai, cada fruto que amadurece e cada silêncio do inverno carregam uma mensagem divina: Deus está presente em cada detalhe.

Este devocional nasce como um convite para que vocês caminhem pelas estações da alma com mais sensibilidade, fé e esperança. Aqui, vocês são lembrados de que não estão sós — o Deus que desenha a natureza com sabedoria é o mesmo que guia os passos de vocês com amor.

Há dias de florescer e dias de esperar. Há momentos de entrega e momentos de abundância.
E em cada um deles, Deus trabalha silenciosamente, preparando o coração de vocês para viver o propósito perfeito que Ele já planejou.

Enquanto percorrem estas páginas, permitam-se respirar fundo, desacelerar e ouvir a voz suave do Criador. Que cada reflexão toque a alma de vocês, renove a fé e fortaleça o espírito. Que vocês descubram, ao longo destes 365 dias, que as estações não são apenas fases — são processos de transformação divina.

Bem-vindos à jornada.
Que Deus fale com vocês em cada estação.`,
    oracao: ""
  },

  /* ── DIAS 2–365 ─────────────────────────────────────────── */

  {
    titulo: "O Amor Que Nos Une",
    versiculo: '"E sobre tudo isso, revesti-vos do amor, que é o vínculo da perfeição."',
    ref: "Colossenses 3:14",
    texto: "O amor que une um casal não é apenas sentimento — é escolha diária, vínculo que sustenta quando a emoção passa. Deus colocou em vocês a capacidade de amar de forma sobrenatural, porque o amor que vem d'Ele nunca esgota. Renovem hoje o compromisso de se escolherem, não apenas quando é fácil, mas especialmente quando é difícil.",
    oracao: "Pai, obrigado por nos unires. Que o amor que nos deste seja mais forte que qualquer diferença. Que nos escolhamos hoje e sempre. Amém."
  },
  {
    titulo: "Construindo Juntos",
    versiculo: '"Se o Senhor não edificar a casa, em vão trabalham os que a edificam."',
    ref: "Salmos 127:1",
    texto: "Todo casamento é uma construção. Tijolo por tijolo, dia a dia, conversa por conversa. Mas há uma fundação sem a qual tudo desmorona: a presença de Deus no centro do lar. Convidem-No para cada decisão — grande e pequena. O lar que Deus habita não é perfeito, mas é sustentado.",
    oracao: "Senhor, vem habitar em nosso lar. Que cada escolha que fizermos juntos Te honre. Que Tu sejas o fundamento de tudo que construímos. Amém."
  },
  {
    titulo: "Graça Para as Diferenças",
    versiculo: '"Sede bondosos uns para com os outros, misericordiosos, perdoando-vos mutuamente."',
    ref: "Efésios 4:32",
    texto: "Duas pessoas que se amam também se machucam — porque são humanas. A graça no casamento é reconhecer isso sem usar como arma. É pedir perdão antes de dormir. É ouvir sem já estar formulando a defesa. O perdão entre cônjuges é um dos atos mais poderosos que existem — ele imita o próprio coração de Deus.",
    oracao: "Pai, enche nosso casamento de graça. Que sejamos rápidos para pedir e oferecer perdão. Que nenhuma mágoa durma conosco. Amém."
  },
  {
    titulo: "Comunicação Que Cura",
    versiculo: '"Seja a vossa palavra sempre com graça, temperada com sal, para que saibais como deveis responder a cada um."',
    ref: "Colossenses 4:6",
    texto: "As palavras têm poder de construir ou demolir. No casamento, esse poder é ampliado — porque o cônjuge conhece exatamente onde você é vulnerável. Escolham hoje falar palavras que curam, que encorajam, que afirmam. Uma palavra gentil dita na hora certa pode mudar o dia inteiro do outro — e mudar vocês.",
    oracao: "Senhor, guarda nossas bocas. Que as palavras entre nós sejam de vida, não de morte. Que conversemos com graça, mesmo nas discussões. Amém."
  },
  {
    titulo: "Intimidade Verdadeira",
    versiculo: '"E os dois serão uma só carne. Assim, não são mais dois, mas uma só carne."',
    ref: "Mateus 19:5-6",
    texto: "A intimidade no casamento vai muito além do físico — é conhecer e ser conhecido por inteiro: medos, sonhos, vergonhas, esperanças. Deus criou o casamento para que dois seres humanos pudessem ser completamente transparentes um com o outro, sem medo. Cultivem essa intimidade profunda — ela é dom raro e precioso.",
    oracao: "Pai, que nossa intimidade seja real. Que possamos nos ver como somos, sem máscaras, e ainda assim escolher um ao outro. Amém."
  },
  {
    titulo: "Orar Juntos",
    versiculo: '"Onde dois ou três estiverem reunidos em meu nome, aí estou no meio deles."',
    ref: "Mateus 18:20",
    texto: "O casal que ora junto tem um terceiro na relação: Jesus. E Ele muda tudo. A oração conjunta não precisa ser longa nem eloquente — pode ser simples como segurar as mãos antes de dormir e agradecer. Mas essa prática simples cria um vínculo espiritual que nenhuma dificuldade consegue romper facilmente.",
    oracao: "Jesus, vem ao meio de nós quando oramos. Que nosso momento de oração juntos seja sagrado e constante. Amém."
  },
  {
    titulo: "Servir Um ao Outro",
    versiculo: '"Sede servos uns dos outros pelo amor."',
    ref: "Gálatas 5:13",
    texto: "Jesus lavou os pés dos discípulos. Esse ato não foi de humilhação — foi de amor radical. No casamento, servir o outro pode parecer pequeno: preparar o café, ouvir quando cansado, ceder na escolha do filme. Mas esses pequenos atos de serviço são a linguagem do amor que sustenta décadas.",
    oracao: "Senhor, que sejamos servos um do outro com alegria. Que nenhum de nós se coloque acima do outro, mas que ambos olhemos para baixo — para lavar os pés um do outro. Amém."
  },
  {
    titulo: "Confiança Que Liberta",
    versiculo: '"O amor tudo sofre, tudo crê, tudo espera, tudo suporta."',
    ref: "1 Coríntios 13:7",
    texto: "Confiança é a respiração do casamento. Quando ela falta, tudo fica sufocado. Construir confiança leva tempo, mas pode ser destruída em um momento. Por isso, cuide dela como o bem mais valioso da relação. Seja previsível no amor, consistente nas palavras, transparente nas ações. A confiança que vocês cultivam é o chão em que o amor cresce.",
    oracao: "Pai, que sejamos dignos de confiança um para o outro. Que nossa relação seja lugar seguro para os dois. Amém."
  },
  {
    titulo: "Honrar a Deus no Casamento",
    versiculo: '"Honroso seja o matrimônio em todos, e o leito sem mácula."',
    ref: "Hebreus 13:4",
    texto: "Deus se importa com o casamento de vocês — não apenas com a cerimônia, mas com o cotidiano. Quando honram um ao outro, honram a Deus. Quando escolhem fidelidade, honram a Deus. Quando cuidam da saúde da relação, honram a Deus. Que o amor de vocês seja testemunho vivo de que o casamento de Deus é bom.",
    oracao: "Senhor, que nosso casamento seja uma honra ao Teu nome. Que quem nos vê veja reflexo do Teu amor pela Igreja. Amém."
  },
  {
    titulo: "Paciência Como Prática",
    versiculo: '"Sede humildes, mansos e pacientes, suportando-vos uns aos outros em amor."',
    ref: "Efésios 4:2",
    texto: "Paciência no casamento não é tolerância passiva — é amor ativo que escolhe não reagir com o pior de si. Seu cônjuge tem hábitos que irritam. Você também tem. A paciência que Deus dá não é natural — é sobrenatural. É o fruto do Espírito que cresce quando você pede e pratica. Vale a pena cultivar.",
    oracao: "Espírito Santo, dá-nos paciência um com o outro. Que o amor que temos seja mais forte que as irritações pequenas do dia a dia. Amém."
  },
  {
    titulo: "O Dom da Alegria Partilhada",
    versiculo: '"Alegrai-vos com os que se alegram."',
    ref: "Romanos 12:15",
    texto: "Celebrar a vitória do outro sem inveja ou competição é sinal de amor maduro. Quando seu cônjuge recebe uma promoção, conquista um sonho, ou simplesmente tem um dia ótimo — a alegria dele é sua também. Cultivem o hábito de comemorar juntos as pequenas coisas. Isso cria memória afetiva que sustenta nos dias difíceis.",
    oracao: "Pai, que sejamos genuinamente felizes pelas conquistas um do outro. Que nossa alegria seja sempre compartilhada. Amém."
  },
  {
    titulo: "Chorar Junto Também É Amor",
    versiculo: '"Chorai com os que choram."',
    ref: "Romanos 12:15",
    texto: "Nem todos os momentos no casamento são de celebração. Há perdas, frustrações, dores. E uma das formas mais profundas de amor é simplesmente estar presente na dor do outro — sem tentar consertar, sem minimizar, apenas estar. Aprenda a sentar no chão com o seu cônjuge quando ele chora. Isso é amor como Cristo amou.",
    oracao: "Senhor, que sejamos presença uns para os outros nas dores. Que nenhum de nós precise carregar o peso sozinho. Amém."
  },
  {
    titulo: "Guarda do Coração do Casamento",
    versiculo: '"Sobre tudo o que se deve guardar, guarda o teu coração, porque dele procedem as saídas da vida."',
    ref: "Provérbios 4:23",
    texto: "O casamento precisa de proteção. Guardem o coração de vocês: cuidado com o que entra — conteúdos que idealizam outros relacionamentos, comparações, amizades que afastam ao invés de aproximar. Protejam o espaço sagrado que construíram. O que você protege, você mantém.",
    oracao: "Pai, ajuda-nos a guardar nosso casamento com cuidado. Que sejamos vigilantes com o que deixamos entrar em nossa relação. Amém."
  },
  {
    titulo: "Renovar o Amor",
    versiculo: '"As misericórdias do Senhor renovam-se cada manhã."',
    ref: "Lamentações 3:23",
    texto: "Assim como a misericórdia de Deus se renova toda manhã, o amor no casamento também pode ser renovado. Cada dia é uma chance de recomeço — de escolher o outro de novo, de ver com olhos frescos, de lembrar por que disseram 'sim'. Não esperem pelo sentimento. Renovem a escolha, e o sentimento seguirá.",
    oracao: "Senhor, renova nosso amor a cada manhã. Que nunca nos acostumemos ao ponto de deixar de nos escolher. Amém."
  },
  {
    titulo: "Fidelidade Como Fundação",
    versiculo: '"Que a misericórdia e a fidelidade não te abandonem."',
    ref: "Provérbios 3:3",
    texto: "Fidelidade não é apenas ausência de traição física — é presença total. É ter o coração do outro protegido nas suas mãos. É não nutrir emoções escondidas. É ser transparente com as amizades. A fidelidade plena cria uma fortaleza emocional ao redor do casamento que o mantém seguro.",
    oracao: "Pai, que nossa fidelidade seja completa — de corpo, mente e coração. Que o outro seja nosso único porto seguro. Amém."
  },
  {
    titulo: "Dois São Mais Fortes",
    versiculo: '"E, se alguém prevalecer contra um, os dois lhe resistirão; o cordão de três dobras não se rompe tão depressa."',
    ref: "Eclesiastes 4:12",
    texto: "Vocês não são apenas dois — são três: você, seu cônjuge, e Deus. E esse cordão triplo é praticamente inquebrável. Nos momentos em que a vida pressiona, lembrem que não precisam enfrentar sozinhos — têm um ao outro, e têm Deus. Unidos em propósito e fé, vocês são mais fortes do que qualquer força que tenta separá-los.",
    oracao: "Senhor, que sejas o terceiro fio do nosso cordão. Que nossa união com Ti nos faça fortes para qualquer batalha. Amém."
  },
  {
    titulo: "Respeito Como Linguagem de Amor",
    versiculo: '"Cada um de vós, porém, ame a sua esposa como a si mesmo; e a esposa reverencie o seu marido."',
    ref: "Efésios 5:33",
    texto: "Amor e respeito são necessidades profundas em cada cônjuge. Quando um se sente amado e o outro se sente respeitado, o ciclo positivo começa. Aprenda qual é a linguagem mais profunda do seu cônjuge — e alimente-a diariamente. Isso não é fórmula, é atenção e cuidado que se constroem ao longo do tempo.",
    oracao: "Pai, que eu aprenda a amar e respeitar meu cônjuge da forma que ele/ela mais precisa. Que meu amor seja prático e visível. Amém."
  },
  {
    titulo: "Perdoar Completamente",
    versiculo: '"Suportando-vos uns aos outros, e perdoando-vos mutuamente, se alguém tiver queixa contra outro; assim como Cristo vos perdoou, assim também fazei vós."',
    ref: "Colossenses 3:13",
    texto: "Perdão no casamento não é fingir que não doeu. É reconhecer a dor e ainda assim escolher não deixar que ela vire raiz de amargura. O padrão que Paulo coloca é alto: perdoar como Cristo perdoou — completamente, sem cobrar depois. Isso é sobrenatural. Por isso precisa de Deus para acontecer de verdade.",
    oracao: "Jesus, perdoa-nos pelos erros que cometemos um com o outro. E nos dá força para perdoarmos também, como fomos perdoados. Amém."
  },
  {
    titulo: "O Tempo de Qualidade",
    versiculo: '"Não vos inquieteis pelo dia de amanhã; o suficiente para cada dia é o seu próprio mal."',
    ref: "Mateus 6:34",
    texto: "Estar presente de corpo mas ausente de mente não é tempo de qualidade. No casamento, presença real é olhar nos olhos, deixar o telefone de lado, fazer perguntas com genuíno interesse. O tempo que vocês investem um no outro agora é o banco de memórias e afeto que sustentará o casamento nos momentos difíceis.",
    oracao: "Senhor, que sejamos verdadeiramente presentes um para o outro. Que o tempo que passamos juntos seja de qualidade e conexão real. Amém."
  },
  {
    titulo: "Cuidar da Saúde da Relação",
    versiculo: '"Examinai-vos a vós mesmos para ver se estais na fé; provai-vos a vós mesmos."',
    ref: "2 Coríntios 13:5",
    texto: "Assim como o corpo precisa de exames regulares, o casamento precisa de revisões periódicas. Perguntem um ao outro: Como estamos? O que tenho negligenciado? O que você precisa que não estou oferecendo? Esses check-ins de relacionamento não são sinal de fraqueza — são sinal de que vocês levam o amor a sério.",
    oracao: "Pai, que tenhamos a coragem de nos perguntar como estamos de verdade. Que nossa relação seja constantemente cuidada e renovada. Amém."
  },
  {
    titulo: "Brigar Bem",
    versiculo: '"Não se ponha o sol sobre a vossa ira."',
    ref: "Efésios 4:26",
    texto: "Todo casal discute. A questão não é se vão discutir, mas como vão discutir. Regras que protegem: sem gritar, sem insultos, sem trazer o passado que já foi perdoado, sem ameaças. O objetivo de uma discussão saudável não é vencer — é entender. Quando vocês brigam pela relação e não contra o outro, o casamento fica mais forte.",
    oracao: "Senhor, que nossas discussões sejam resolvidas antes do anoitecer. Que lutemos pelo nosso casamento, não um contra o outro. Amém."
  },
  {
    titulo: "Sonhos Compartilhados",
    versiculo: '"Onde não há visão, o povo perece."',
    ref: "Provérbios 29:18",
    texto: "Casais que sonham juntos têm um combustível poderoso para a relação. Qual é o sonho de vocês como casal — não apenas individual? Uma casa, uma viagem, um ministério, filhos? Sonhos compartilhados criam propósito conjunto e motivação para atravessar as temporadas difíceis. Sentem juntos hoje e conversem sobre o que sonham para o futuro.",
    oracao: "Pai, que tenhamos uma visão comum para nossa vida juntos. Inspira nossos sonhos e nos guia a realizá-los para a Tua glória. Amém."
  },
  {
    titulo: "A Linguagem do Toque",
    versiculo: '"O marido cumpra para com a mulher o dever conjugal, e da mesma forma a mulher para com o marido."',
    ref: "1 Coríntios 7:3",
    texto: "O toque físico é uma das cinco linguagens do amor — e para muitas pessoas, é a principal. Não apenas intimidade sexual, mas aperto de mão, abraço, beijo no rosto, toque no ombro. Essas pequenas expressões físicas de afeto comunicam presença, segurança e amor de formas que palavras às vezes não alcançam. Toquem-se com intenção hoje.",
    oracao: "Senhor, que nosso toque seja sempre gentil, respeitoso e cheio de afeto. Que nosso corpo seja instrumento de amor um para o outro. Amém."
  },
  {
    titulo: "Gratidão Pelo Cônjuge",
    versiculo: '"Em tudo dai graças, porque esta é a vontade de Deus em Cristo Jesus para convosco."',
    ref: "1 Tessalonicenses 5:18",
    texto: "É fácil listar o que o cônjuge não faz. Muito mais difícil — e poderoso — é listar o que ele faz. Gratidão muda perspectiva. Hoje, digam um ao outro pelo menos três coisas pelas quais são gratos na relação. Não precisa ser grande — pode ser o café que faz toda manhã, o abraço no fim do dia, a paciência nas discussões. Verbalize.",
    oracao: "Pai, obrigado pelo presente que é meu cônjuge. Abre meus olhos para enxergar o bem que ele/ela traz à minha vida. Amém."
  },
  {
    titulo: "Quando Um Está Fraco",
    versiculo: '"Carregai os fardos uns dos outros, e assim cumprireis a lei de Cristo."',
    ref: "Gálatas 6:2",
    texto: "Haverá temporadas em que um de vocês terá que carregar mais do que o outro. Doença, luto, ansiedade, crise profissional — momentos em que um está no chão e o outro precisa ser a força. Não guardem isso como dívida. Guardem como memória de amor. O que foi carregado em amor, um dia será carregado de volta.",
    oracao: "Senhor, que quando um estiver fraco, o outro seja fortalecido por Ti para carregar. Que nunca precisemos nos carregar sozinhos. Amém."
  },
  {
    titulo: "A Importância do Riso",
    versiculo: '"O coração alegre é um bom remédio."',
    ref: "Provérbios 17:22",
    texto: "Casais que riem juntos ficam juntos. O humor compartilhado cria cumplicidade, alivio o peso do cotidiano e acende o afeto. Não deixem a seriedade da vida matar a leveza que vocês cultivaram no começo. Riam das piadas internas, das situações ridículas, de si mesmos. O riso é cola relacional.",
    oracao: "Pai, que nossa casa seja cheia de alegria e de risadas. Que nunca percamos a leveza de estar juntos. Amém."
  },
  {
    titulo: "Investir na Amizade",
    versiculo: '"O amigo ama em todo o tempo, e o irmão é como um irmão nascido para a hora da angústia."',
    ref: "Provérbios 17:17",
    texto: "Antes de serem cônjuges, são amigos. E quando a paixão inicial se acomoda, é a amizade que sustenta o casamento. Cultivem essa amizade: façam coisas juntos que simplesmente divertem, conversem sobre temas além das obrigações domésticas, conheçam os sonhos e medos atuais um do outro. A amizade é o chão do amor duradouro.",
    oracao: "Senhor, que sejamos sempre os melhores amigos um do outro. Que nossa amizade cresça junto com nosso amor. Amém."
  },
  {
    titulo: "Falar Bem do Cônjuge",
    versiculo: '"A mulher virtuosa é a coroa do seu marido."',
    ref: "Provérbios 12:4",
    texto: "Como você fala do seu cônjuge na ausência dele? Para os amigos, para a família, nas redes sociais? As palavras que você usa sobre o outro constroem ou destroem a reputação dele — e a sua própria. O hábito de falar bem do cônjuge não é hipocrisia quando há problemas — é escolha de honrá-lo publicamente enquanto resolve em privado.",
    oracao: "Pai, que minhas palavras sobre meu cônjuge sejam sempre de honra. Que eu o/a eleve com as minhas palavras. Amém."
  },
  {
    titulo: "Deus No Centro",
    versiculo: '"Buscai primeiro o reino de Deus e a sua justiça, e todas essas coisas vos serão acrescentadas."',
    ref: "Mateus 6:33",
    texto: "Quando Deus está no centro do casamento, tudo mais encontra seu lugar. Finanças, filhos, profissão, conflitos — tudo é mais fácil de navegar quando o Norte é o mesmo: Deus. Casais que buscam juntos a Deus não apenas sobrevivem às tempestades — eles saem mais fortes delas. Façam de Deus a prioridade central da relação.",
    oracao: "Senhor, que Tu sejas o centro de tudo em nosso casamento. Que Te busquemos juntos acima de tudo. Amém."
  },
  {
    titulo: "Lidar com as Finanças Juntos",
    versiculo: '"Porque onde estiver o teu tesouro, lá estará também o teu coração."',
    ref: "Mateus 6:21",
    texto: "Dinheiro é uma das principais causas de conflito no casamento — não porque é importante demais, mas porque revela valores. Quando o casal alinha os valores financeiros, as discussões sobre dinheiro diminuem drasticamente. Planejem juntos, ouçam um ao outro sobre prioridades, e coloquem Deus como o Senhor das finanças de vocês.",
    oracao: "Pai, que tenhamos sabedoria financeira juntos. Que o dinheiro sirva ao nosso propósito e não controle nossa relação. Amém."
  },
  {
    titulo: "O Papel da Oração Intercessória",
    versiculo: '"Orai uns pelos outros para serdes curados."',
    ref: "Tiago 5:16",
    texto: "Orar pelo seu cônjuge — especialmente quando está irritado com ele — é um ato revolucionário. Quando você intercede por alguém, algo muda em você também. Você começa a vê-lo com os olhos de Deus — alguém que Ele ama profundamente, que está em processo, que precisa de graça tanto quanto você. Ore pelo seu cônjuge hoje.",
    oracao: "Senhor, cuida do/a meu/minha cônjuge hoje. Abençoa-o/a em cada área — saúde, emoções, propósito. Que ele/ela sinta Teu amor sobre ele/ela hoje. Amém."
  },
  {
    titulo: "Intimidade Espiritual",
    versiculo: '"E ele vos tornará a dar os primeiros temporais e as últimas chuvas, como antes."',
    ref: "Joel 2:23",
    texto: "Intimidade espiritual é o nível mais profundo de conexão que um casal pode ter. Vai além do físico e do emocional — é compartilhar a alma. Estudar a Palavra juntos, orar, adorar, servir juntos — essas práticas criam uma ligação que o mundo não consegue imitar. Invistam na dimensão espiritual do casamento.",
    oracao: "Espírito Santo, aprofunda nossa intimidade espiritual. Que nossa conexão com Deus nos aproxime um do outro. Amém."
  },
  {
    titulo: "Manter o Romance",
    versiculo: '"Eis que és formosa, amada minha; eis que és formosa."',
    ref: "Cantares 1:15",
    texto: "O Cântico dos Cânticos é um livro inteiro sobre romance no casamento — Deus não apenas tolera o amor romântico, Ele o criou e o celebra. Com o tempo, o romance precisa ser cultivado intencionalmente: datas, surpresas, cartas, gestos. Não espere ocasiões especiais para ser romântico. Crie ocasiões.",
    oracao: "Pai, que nosso romance nunca esfrie. Que continuemos a nos namorar mesmo depois de anos juntos. Amém."
  },
  {
    titulo: "Gerenciar as Expectativas",
    versiculo: '"A esperança adiada faz o coração adoecer."',
    ref: "Provérbios 13:12",
    texto: "Muitos conflitos no casamento nascem de expectativas não expressas. Você esperava que o outro soubesse sem que você dissesse. Ele esperava o mesmo de você. Expectativas silenciosas são ressentimentos em formação. Pratiquem a transparência: digam o que esperam, ouçam o que o outro espera, e negociem com amor.",
    oracao: "Senhor, ajuda-nos a comunicar nossas expectativas com clareza e gentileza. Que não deixemos que expectativas silenciosas criem mágoas desnecessárias. Amém."
  },
  {
    titulo: "Crescer Juntos na Fé",
    versiculo: '"Crescei na graça e no conhecimento de nosso Senhor e Salvador Jesus Cristo."',
    ref: "2 Pedro 3:18",
    texto: "Casais que crescem juntos na fé têm uma dimensão de relacionamento que vai além do que o mundo consegue oferecer. Estudar a Bíblia juntos, discutir o que Deus tem falado a cada um, servir em ministério juntos — essas experiências espirituais compartilhadas criam laços que enriquecem o casamento por décadas.",
    oracao: "Pai, que cresçamos juntos na fé. Que cada um inspire o outro a buscar mais de Ti. Amém."
  },
  {
    titulo: "Lidar com a Família Extensa",
    versiculo: '"Por isso, deixará o homem seu pai e sua mãe e se unirá à sua esposa."',
    ref: "Gênesis 2:24",
    texto: "Deixar pai e mãe não é abandono — é prioridade. O cônjuge vem primeiro, antes dos pais, antes dos sogros. Esse princípio bíblico não é fácil de aplicar em culturas onde a família extensa tem muita influência, mas é fundamental para a saúde do casamento. Respeitem suas famílias — mas construam um lar com fronteiras saudáveis.",
    oracao: "Senhor, que saibamos honrar nossas famílias sem abrir mão da unidade do nosso casamento. Que nossa prioridade seja um para o outro. Amém."
  },
  {
    titulo: "Paz no Lar",
    versiculo: '"E a paz de Deus, que excede todo o entendimento, guardará os vossos corações."',
    ref: "Filipenses 4:7",
    texto: "O lar deve ser o lugar mais seguro e pacífico para cada cônjuge. Se o trabalho é estressante, se o mundo é barulhento, o lar deve ser refúgio. Criem ativamente esse clima de paz — com menos barulho desnecessário, com acolhimento na chegada, com gentileza no tom de voz. A paz do lar é responsabilidade de ambos.",
    oracao: "Senhor, que nossa casa seja lugar de paz. Que quando um de nós entra pela porta, sinta que chegou a um lugar seguro. Amém."
  },
  {
    titulo: "O Tempo de Crise",
    versiculo: '"Porquanto nem a morte, nem a vida... nos poderá separar do amor de Deus."',
    ref: "Romanos 8:38-39",
    texto: "Todo casamento passa por crises. Doença, perda, infidelidade, dívida, conflito grave. A crise não é o fim — é o teste que revela a profundidade do que foi construído. Quando chegarem as crises, não fujam um do outro. Corram um para o outro, e corram juntos para Deus. É na crise que o amor real se prova.",
    oracao: "Pai, que nas crises nos movamos em direção um ao outro e em direção a Ti. Que as dificuldades nos aproximem em vez de nos separar. Amém."
  },
  {
    titulo: "O Cônjuge Como Presente",
    versiculo: '"Aquele que achou uma esposa achou o bem, e alcançou a benevolência do Senhor."',
    ref: "Provérbios 18:22",
    texto: "Seu cônjuge é presente de Deus para você. Não um presente perfeito — mas o presente certo, escolhido por Quem sabe o que você precisa para crescer, para amar, para se tornar quem Deus planejou. Quando olhar para ele/ela hoje, olhe com olhos de gratidão: esse ser humano, com todas as imperfeições, foi colocado na sua vida por amor.",
    oracao: "Pai, obrigado por me dares meu cônjuge. Que eu nunca perca a perspectiva de que ele/ela é Teu presente para mim. Amém."
  },
  {
    titulo: "Ciúme e Segurança",
    versiculo: '"O amor perfeito lança fora o medo."',
    ref: "1 João 4:18",
    texto: "O ciúme patológico vem do medo — medo de perder, de não ser suficiente, de ser substituído. E o medo, segundo João, é expulso pelo amor perfeito. Quando o amor no casamento é seguro, consistente e afirmativo, o ciúme perde o terreno para crescer. Criem um ambiente de segurança emocional onde o medo não encontra espaço.",
    oracao: "Senhor, expulsa o medo do nosso casamento. Que o amor perfeito que Tu és seja o fundamento da nossa segurança. Amém."
  },
  {
    titulo: "Admiração Recíproca",
    versiculo: '"Que formoso és, amado meu, e que amável!"',
    ref: "Cantares 1:16",
    texto: "Você conhece bem demais o seu cônjuge para ainda se admirar dele? O antídoto para o desprezo — o maior preditor de divórcio segundo pesquisas — é cultivar admiração ativa. Busque qualidades que você admira no outro. Verbalize. Lembre-se do que te impressionou nele quando se conheceram. A admiração alimenta o amor.",
    oracao: "Pai, renova minha admiração pelo/a meu/minha cônjuge. Que eu veja novamente as qualidades que me cativaram. Amém."
  },
  {
    titulo: "Assumir Responsabilidade",
    versiculo: '"Por que vês o argueiro no olho do teu irmão, e não atinas com a trave que está no teu olho?"',
    ref: "Mateus 7:3",
    texto: "É muito mais fácil ver os erros do cônjuge do que os próprios. No casamento, a disposição de dizer 'eu errei, foi culpa minha' — sem meio perdão ou transferência de culpa — é transformadora. Assumir responsabilidade pelos próprios erros é sinal de maturidade e abre espaço para a reconciliação genuína.",
    oracao: "Senhor, que eu seja rápido para reconhecer meus erros antes de apontar os do outro. Que a humildade seja prática no nosso casamento. Amém."
  },
  {
    titulo: "Renovar Votos Diariamente",
    versiculo: '"Farei contigo aliança eterna, a aliança das mercês fiéis prometidas a Davi."',
    ref: "Isaías 55:3",
    texto: "Os votos do casamento não foram ditos apenas no altar — são renovados em cada escolha que você faz. Quando escolhe ouvir ao invés de falar, quando prioriza o outro ao invés de si mesmo, quando perdoa ao invés de guardar rancor — você está renovando seus votos. O casamento é uma aliança viva, não apenas uma cerimônia passada.",
    oracao: "Pai, que renovemos nossos votos a cada dia com nossas ações. Que nosso casamento seja aliança viva e crescente. Amém."
  },
  {
    titulo: "O Ministério do Casal",
    versiculo: '"Servi ao Senhor com alegria."',
    ref: "Salmos 100:2",
    texto: "Um casal que serve juntos ao Senhor tem uma dimensão de propósito que vai além do lar. Podem servir na igreja, na comunidade, em missões, no ministério de aconselhamento de casais. Quando vocês colocam o amor de Deus em prática juntos, algo belo acontece — o casamento encontra propósito maior que ele mesmo.",
    oracao: "Senhor, mostra-nos como podemos servir juntos. Que nosso casamento tenha propósito além de nós mesmos. Amém."
  },
  {
    titulo: "Honrar as Diferenças",
    versiculo: '"Vós, porém, sois o corpo de Cristo, e seus membros, cada um em particular."',
    ref: "1 Coríntios 12:27",
    texto: "Vocês foram criados diferentes — e isso é proposital. As diferenças que irritam também completam. O que um não tem, o outro traz. Aprendam a honrar as diferenças ao invés de tentar moldá-las. Vocês não precisam ser iguais para serem complementares. Deus os criou distintos para que juntos fossem mais completos.",
    oracao: "Pai, que nossas diferenças nos complementem e não nos dividam. Que aprendamos a honrar no outro o que nos falta. Amém."
  },
  {
    titulo: "A Benção dos Filhos",
    versiculo: '"Eis que os filhos são herança do Senhor."',
    ref: "Salmos 127:3",
    texto: "Filhos são presente de Deus — não propriedade dos pais, mas herança confiada. Criá-los juntos, com unidade e consistência, é um dos maiores desafios e presentes do casamento. Que o amor que têm um pelo outro seja o solo em que seus filhos crescem seguros e amados. A melhor coisa que você pode fazer pelos seus filhos é amar seu cônjuge bem.",
    oracao: "Senhor, que criemos nossos filhos juntos, com sabedoria e amor. Que nossa unidade seja solo fértil para eles florescerem. Amém."
  },
  {
    titulo: "Resiliência Conjugal",
    versiculo: '"Tudo posso naquele que me fortalece."',
    ref: "Filipenses 4:13",
    texto: "Resiliência no casamento não é a ausência de dificuldades — é a capacidade de voltar depois de cada queda. Casais resilientes não desistem na primeira (nem na décima) crise. Eles aprenderam que o amor maduro não foge do problema — ele o enfrenta juntos, confia em Deus, e sai mais forte do outro lado.",
    oracao: "Senhor, que sejamos resilientes. Que quando caírmos, nos levantemos juntos. Que nenhuma dificuldade nos faça desistir. Amém."
  },
  {
    titulo: "Generosidade No Casamento",
    versiculo: '"Cada um contribua segundo propôs no seu coração... porque Deus ama ao que dá com alegria."',
    ref: "2 Coríntios 9:7",
    texto: "Generosidade no casamento não é só financeira — é generosidade de tempo, de atenção, de elogios, de toque, de espaço. O cônjuge generoso dá sem calcular retorno, sem manter placar, sem cobrar. Essa generosidade cria um ciclo de abundância relacional onde ambos se sentem nutridos e valorizados.",
    oracao: "Pai, que sejamos generosos um com o outro em tudo. Que o amor entre nós seja abundante e não escasso. Amém."
  },
  {
    titulo: "A Promessa de Amanhã",
    versiculo: '"Porque eu bem sei os planos que tenho a vosso respeito: planos de paz e não de mal, para vos dar um futuro e uma esperança."',
    ref: "Jeremias 29:11",
    texto: "Deus tem planos para vocês como casal — planos de bem, de futuro, de esperança. Mesmo quando o presente é difícil, o futuro está nas mãos de Quem é bom. Segurem um no outro com a mão, e segurem a mão de Deus com a outra. O futuro de vocês juntos está guardado com Ele.",
    oracao: "Pai, que confiemos no futuro que tens para nós. Que caminhemos juntos para o amanhã que planejaste com amor. Amém."
  },
  {
    titulo: "Cuidar do Outro",
    versiculo: '"Ninguém jamais odiou o seu próprio corpo; pelo contrário, alimenta-o e cuida dele."',
    ref: "Efésios 5:29",
    texto: "Assim como você cuida do próprio corpo — alimenta, descansa, cuida quando adoece — cuide do seu cônjuge. Pergunte como ele está de verdade. Perceba quando está sobrecarregado antes que ele precise pedir. Esteja atento aos sinais de cansaço, tristeza, solidão. Cuidar é amor em ação.",
    oracao: "Senhor, que sejamos atentos um ao outro. Que percebamos as necessidades do outro antes que precisem ser ditas. Amém."
  },
  {
    titulo: "A Arte de Ceder",
    versiculo: '"Não fazendo nada por contenda ou por vanglória, mas por humildade, estimando os outros superiores a vós mesmos."',
    ref: "Filipenses 2:3",
    texto: "Ceder não é fraqueza — é amor inteligente. Nem toda batalha precisa ser vencida. Às vezes a melhor escolha é abrir mão da razão para preservar a relação. Saber quando ceder — não por medo, mas por amor — é sinal de maturidade emocional e espiritual que poucos alcançam. Vale a pena aprender.",
    oracao: "Pai, que aprenda a ceder com amor e não com ressentimento. Que valorize mais a relação do que estar certo. Amém."
  },
  {
    titulo: "Herança Espiritual",
    versiculo: '"Mas quanto a mim e à minha casa, serviremos ao Senhor."',
    ref: "Josué 24:15",
    texto: "A decisão de servir a Deus como família é uma das mais poderosas que um casal pode tomar. Ela cria uma herança espiritual que passa de geração em geração. O que vocês decidem sobre fé hoje afeta os filhos, os netos, os que virão. Tomem essa decisão com seriedade e alegria — ela vale eternidade.",
    oracao: "Senhor, que nossa casa seja lugar onde Te servimos. Que a fé que cultivamos hoje seja herança para os que virão depois de nós. Amém."
  },
  {
    titulo: "Força na Fraqueza",
    versiculo: '"A minha graça te basta, porque o meu poder se aperfeiçoa na fraqueza."',
    ref: "2 Coríntios 12:9",
    texto: "Haverá momentos em que você não terá forças para ser o cônjuge que quer ser. Nesses momentos, a graça de Deus cobre o que você não consegue. Não finja força que não tem — seja honesto com o outro e com Deus. É exatamente na fraqueza assumida que o poder de Deus encontra espaço para operar.",
    oracao: "Pai, quando estivermos fracos, que Tua graça seja suficiente. Que possamos ser honestos sobre nossas fraquezas um com o outro. Amém."
  },
  {
    titulo: "A Beleza do Envelhecer Juntos",
    versiculo: '"As cãs são uma coroa de glória; acham-se no caminho da justiça."',
    ref: "Provérbios 16:31",
    texto: "Envelhecer juntos é um privilégio. Ter ao seu lado alguém que conheceu você jovem e escolheu continuar com você enquanto o tempo passou — isso é amor que provou ser real. Hoje, olhe para o futuro com esperança: os cabelos brancos de vocês, as histórias acumuladas, as memórias construídas. Que belo presente é o amor que dura.",
    oracao: "Senhor, que envelheçamos juntos com graça. Que cada ano nos aproxime mais de Ti e mais um do outro. Amém."
  },
  {
    titulo: "Amor Incondicional",
    versiculo: '"Porque Deus amou o mundo de tal maneira que deu o seu Filho unigênito."',
    ref: "João 3:16",
    texto: "O padrão de amor no casamento é o próprio amor de Deus — que deu o melhor que tinha sem garantia de retorno. Amor incondicional no casamento não significa tolerar qualquer coisa — significa que o comprometimento não é negociado a cada dificuldade. É um amor que diz: 'Eu fico — não porque é fácil, mas porque escolhi.'",
    oracao: "Pai, que nosso amor se aproxime cada vez mais do Teu. Que seja incondicional, persistente e transformador. Amém."
  },
  {
    titulo: "A Gratidão Como Hábito",
    versiculo: '"Que a paz de Cristo presida em vossos corações... e sede agradecidos."',
    ref: "Colossenses 3:15",
    texto: "A gratidão é um hábito que se constrói. Comece pequeno: toda manhã, pense em uma coisa pela qual é grato no seu cônjuge. Toda noite, diga em voz alta. Com o tempo, esse hábito transforma a lente pela qual você vê o outro — e transforma também o relacionamento. Casais gratos são casais mais felizes.",
    oracao: "Senhor, desenvolve em nós o hábito da gratidão um pelo outro. Que nunca nos acostumemos ao ponto de deixar de agradecer. Amém."
  },
  {
    titulo: "Travessias Juntos",
    versiculo: '"Quando atravessares as águas, eu serei contigo; e os rios não te submergirão."',
    ref: "Isaías 43:2",
    texto: "As travessias difíceis da vida — perda de emprego, morte de familiar, doença, mudança — são mais fáceis quando feitas juntos. E mais fáceis ainda quando feitas com Deus. Quando a água subir ao redor de vocês, não se soltem — segurem-se e segurem a Deus. As travessias compartilhadas criam as memórias mais profundas de um casamento.",
    oracao: "Pai, que atravessemos juntos as águas difíceis. Que nunca soltemos as mãos um do outro nem a Tua. Amém."
  },
  {
    titulo: "Louvar a Deus Juntos",
    versiculo: '"Cantai ao Senhor um cântico novo; cantai ao Senhor, toda a terra."',
    ref: "Salmos 96:1",
    texto: "Há algo transformador em adorar a Deus lado a lado com seu cônjuge — juntos diante do mesmo Criador que os fez e os uniu. Encontrem momentos de adoração conjunta, seja em casa ou na igreja. Quando adoram juntos, reafirmam que há algo maior que a relação de vocês que sustenta tudo: Deus mesmo.",
    oracao: "Senhor, que adoremos juntos com alegria. Que a adoração seja prática regular no nosso lar e na nossa vida. Amém."
  },
  {
    titulo: "O Valor do Silêncio Compartilhado",
    versiculo: '"Há um tempo de calar."',
    ref: "Eclesiastes 3:7",
    texto: "Não é preciso preencher todos os momentos com palavras. Há uma intimidade profunda no silêncio compartilhado — duas pessoas tão à vontade uma com a outra que não precisam performar. Saber ficar em silêncio juntos, sem desconforto, é sinal de maturidade relacional. Valorizem esses momentos tranquilos.",
    oracao: "Pai, que aprendamos a habitar o silêncio juntos com paz. Que nossa companhia seja suficiente sem precisar de barulho. Amém."
  },
  {
    titulo: "Fé Para o Impossível",
    versiculo: '"Para Deus todas as coisas são possíveis."',
    ref: "Mateus 19:26",
    texto: "Há situações no casamento que parecem impossíveis de restaurar. Feridas profundas, distâncias emocionais, anos de padrões destrutivos. Mas Deus especializa-se no impossível. Casamentos que foram declarados mortos têm sido restaurados pela graça de Deus. Não desistam antes de levarem o impossível a Quem pode restaurar.",
    oracao: "Senhor, cremos que nada é impossível para Ti. Restaura o que parece perdido em nosso casamento. Nada está além do Teu poder. Amém."
  },
  {
    titulo: "Um Legado de Amor",
    versiculo: '"O homem bom deixa herança para os filhos de seus filhos."',
    ref: "Provérbios 13:22",
    texto: "O amor que vocês cultivam hoje está construindo um legado que vai além de vocês dois. Como casam, como resolvem conflitos, como se tratam — tudo isso é ensinado silenciosamente para os filhos, que ensinará para os netos. O melhor legado que um casal pode deixar é um casamento onde o amor de Deus foi vivido de verdade.",
    oracao: "Pai, que nosso casamento deixe um legado de amor para as gerações que nos seguirão. Que nossa história inspire outros a amarem bem. Amém."
  },
  {
    titulo: "Cuidado com a Língua",
    versiculo: '"A morte e a vida estão no poder da língua."',
    ref: "Provérbios 18:21",
    texto: "As palavras mais perigosas que você pode ouvir vêm de quem mais te ama — porque são as que mais chegam fundo. E as mais curas também. Use sua língua para dar vida ao seu cônjuge: afirmação, encorajamento, admiração, gratidão. Essas palavras têm poder de construir autoestima, confiança e amor por décadas.",
    oracao: "Senhor, que nossa língua seja instrumento de vida um para o outro. Que as palavras que falamos edifiquem e não destruam. Amém."
  },
  {
    titulo: "Juntos na Missão",
    versiculo: '"Ide, portanto, e fazei discípulos de todas as nações."',
    ref: "Mateus 28:19",
    texto: "O casamento não é apenas para os dois — é uma plataforma de missão. Juntos, podem alcançar famílias que individualmente não alcançariam. Podem ser modelo de relacionamento saudável para um mundo que não sabe mais como amar. Seu casamento é missão em si mesmo.",
    oracao: "Pai, que nosso casamento seja instrumento da Tua missão no mundo. Que juntos alcancemos pessoas que cada um de nós não alcançaria sozinho. Amém."
  },
  {
    titulo: "A Esperança do Casal",
    versiculo: '"A esperança não envergonha, porque o amor de Deus está derramado em nossos corações."',
    ref: "Romanos 5:5",
    texto: "A esperança no casamento não é ingenuidade — é a certeza de que Deus está trabalhando mesmo quando você não vê. Esperança sustenta o amor nos momentos de seca emocional, nos períodos de distância, nas crises que parecem não ter fim. E essa esperança não decepciona — porque está fundada em Deus, não nas circunstâncias.",
    oracao: "Senhor, que a esperança no Teu amor seja a âncora do nosso casamento. Que nunca percamos a fé no que Tu podes fazer por nós. Amém."
  },
  {
    titulo: "Amor que Suporta",
    versiculo: '"O amor tudo suporta."',
    ref: "1 Coríntios 13:7",
    texto: "Suportar não é aguentar com resignação — é resistir com amor. É a capacidade de continuar amando mesmo quando o outro está no pior de si — no esgotamento, na irritabilidade, na tristeza. O amor que suporta não exige que o cônjuge esteja sempre no melhor para receber cuidado. Ele ama no pior também.",
    oracao: "Pai, que nosso amor suporte as temporadas difíceis. Que amemos um ao outro não apenas quando somos agradáveis, mas especialmente quando não somos. Amém."
  },
  {
    titulo: "Caminhar no Mesmo Propósito",
    versiculo: '"Andarão dois juntos, se não estiverem de acordo?"',
    ref: "Amós 3:3",
    texto: "Para o casal caminhar na mesma direção, precisa estar alinhado em propósito, valores e fé. Isso não acontece por acidente — é construído em conversas profundas, em orações conjuntas, em acordos sobre o que importa. Periodicamente, verifiquem: ainda estamos caminhando para o mesmo lugar? Se não, é hora de conversar.",
    oracao: "Senhor, que caminhemos alinhados em propósito e fé. Que nossa direção seja a mesma — em direção a Ti e um ao outro. Amém."
  },
  {
    titulo: "Deus Completa o Que Começou",
    versiculo: '"Aquele que em vós começou a boa obra, a aperfeiçoará até ao dia de Cristo Jesus."',
    ref: "Filipenses 1:6",
    texto: "Deus não desistiu do casamento de vocês. A mesma graça que começou essa relação a está sustentando e a está levando para frente. Nas temporadas em que parece que nada está avançando, lembrem: Deus é fiel para completar o que começou. Confiem nEle com o casamento de vocês — Ele é o melhor artesão de histórias de amor.",
    oracao: "Pai, obrigado por não desistires do nosso casamento. Completa a boa obra que começaste em nós. Confiamos em Ti. Amém."
  },

  /* --- Continuação dos devocionais para completar o ano --- */

  {
    titulo: "Amor Que Não Guarda Rancor",
    versiculo: '"O amor não se ressente do mal."',
    ref: "1 Coríntios 13:5",
    texto: "Guardar rancor é como beber veneno esperando que o outro morra. No casamento, o rancor acumulado transforma pequenas mágoas em montanhas. O amor maduro não mantém arquivo de erros. Quando perdoa, perdoa de verdade — sem recorrer ao passado nas próximas discussões. Essa é uma das disciplinas mais difíceis e mais libertadoras do casamento.",
    oracao: "Senhor, liberta-nos de qualquer rancor. Que o perdão que recebemos de Ti flua entre nós sem restrições. Amém."
  },
  {
    titulo: "Ser Ouvido e Ouvir",
    versiculo: '"Sede prontos para ouvir, tardios para falar."',
    ref: "Tiago 1:19",
    texto: "Uma das maiores queixas no casamento é: 'Ele não me ouve.' Ouvir de verdade — com atenção plena, sem formular a resposta enquanto o outro fala, sem minimizar o que é dito — é ato de amor profundo. Hoje, pratiquem ouvir um ao outro sem interromper. Sintam o que é ser verdadeiramente ouvido.",
    oracao: "Pai, que sejamos bons ouvintes um para o outro. Que cada um se sinta compreendido e valorizado em nossas conversas. Amém."
  },
  {
    titulo: "Oração pela Vida Sexual",
    versiculo: '"O marido não tem autoridade sobre o seu próprio corpo, mas a esposa; e também a esposa não tem autoridade sobre o seu próprio corpo, mas o marido."',
    ref: "1 Coríntios 7:4",
    texto: "Deus criou a sexualidade dentro do casamento como dom sagrado de conexão, prazer e renovação do vínculo. A vida sexual do casal não está fora da esfera espiritual — pode e deve ser levada a Deus em oração. Quando há dificuldades nessa área, busquem ajuda juntos, sem vergonha. Deus criou essa intimidade e deseja que ela seja boa.",
    oracao: "Senhor, que nossa intimidade física seja expressão do amor que temos um pelo outro. Que seja sagrada, prazerosa e conectante. Amém."
  },
  {
    titulo: "Lidar com a Pressão Externa",
    versiculo: '"Não vos conformeis com este século."',
    ref: "Romanos 12:2",
    texto: "A cultura empurra o casamento para padrões que não sustentam — comparações nas redes sociais, expectativas irreais de romantismo constante, ideias de que o amor 'perfeito' não tem conflito. Casais saudáveis aprendem a filtrar essas pressões e construir o casamento que Deus quer para eles, não o que a cultura diz que deveria ser.",
    oracao: "Pai, que não nos conformemos com o que o mundo diz sobre casamento. Que construamos o nosso segundo o Teu padrão. Amém."
  },
  {
    titulo: "A Decisão de Ficar",
    versiculo: '"Não te abandonarei, nem te deixarei."',
    ref: "Hebreus 13:5",
    texto: "Há um momento em todo casamento em que a decisão de ficar precisa ser consciente e renovada. Não apenas 'fico porque é difícil sair' — mas 'fico porque escolho, porque amo, porque acredito'. Essa decisão, tomada intencionalmente, é a que diferencia o casamento que dura do que se desfaz na primeira grande tormenta.",
    oracao: "Senhor, renovamos hoje a decisão de ficar. Que seja escolha consciente, baseada em amor e compromisso. Amém."
  },
  {
    titulo: "Alegria nas Pequenas Coisas",
    versiculo: '"Este é o dia que o Senhor fez; alegremo-nos e nos regozijemos nele."',
    ref: "Salmos 118:24",
    texto: "A maior parte do casamento é feita de dias comuns — não de viagens incríveis ou momentos épicos. A felicidade conjugal duradoura está em encontrar alegria nos dias simples: no café da manhã juntos, na conversa ao fim do dia, no caminhar de mãos dadas. Treine seus olhos para ver beleza no ordinário.",
    oracao: "Pai, que encontremos alegria nos dias simples juntos. Que o cotidiano compartilhado seja onde mais vemos Tua bênção. Amém."
  },
  {
    titulo: "Aprender com os Conflitos",
    versiculo: '"O ferro com ferro se afia, e o homem afia o rosto do seu amigo."',
    ref: "Provérbios 27:17",
    texto: "Os conflitos no casamento, quando tratados com maturidade, são oportunidades de aprendizado mútuo. Cada discussão bem resolvida revela algo sobre vocês dois que antes estava escondido — um gatilho, uma necessidade não atendida, uma expectativa oculta. Casais que aprendem a aprender com os conflitos se tornam cada vez mais resilientes.",
    oracao: "Senhor, que nossos conflitos nos ensinem e nos aproximem, não nos afastem. Que saibamos ouvir o que cada discussão está querendo nos dizer. Amém."
  },
  {
    titulo: "Apoio Nos Sonhos",
    versiculo: '"Confia ao Senhor as tuas obras, e os teus projetos serão estabelecidos."',
    ref: "Provérbios 16:3",
    texto: "Ser o maior torcedor do sonho do seu cônjuge é um dos presentes mais valiosos que você pode oferecer. Quando ele/ela fala de um sonho — por mais improvável que pareça — não minimize. Ouça, encoraje, ajude a planejar. O cônjuge que se sente apoiado nos sonhos é o cônjuge que se sente amado profundamente.",
    oracao: "Pai, que sejamos os maiores incentivadores um dos sonhos do outro. Que nossa relação seja solo fértil para os nossos propósitos crescerem. Amém."
  },
  {
    titulo: "Tempo de Descanso Juntos",
    versiculo: '"Vinde a mim, todos os que estais cansados e sobrecarregados, e eu vos aliviarei."',
    ref: "Mateus 11:28",
    texto: "Descansar juntos é diferente de simplesmente estarem no mesmo espaço. É parar, respirar, largar as obrigações e simplesmente ser — sem agenda, sem produtividade, sem pressão. Criem rituais de descanso juntos: um passeio sem destino, uma tarde de leitura juntos, um dia sem telas. O descanso compartilhado recarrega a relação.",
    oracao: "Senhor, que aprendamos a descansar juntos. Que encontremos em Ti e um no outro o alívio que o cansaço da vida exige. Amém."
  },
  {
    titulo: "A Cura do Passado",
    versiculo: '"O Senhor está perto dos que têm o coração partido."',
    ref: "Salmos 34:18",
    texto: "Muitos trazem para o casamento feridas do passado — infâncias difíceis, relacionamentos anteriores dolorosos, traumas não resolvidos. Essas feridas não desaparecem com o casamento — precisam ser tratadas. Que haja espaço no casamento de vocês para a cura mútua — com paciência, sem julgamento, com oração.",
    oracao: "Pai, cura as feridas do nosso passado que ainda afetam nosso presente. Que o amor entre nós seja parte do processo de cura que só Tu podes iniciar. Amém."
  },
  {
    titulo: "Crescer Através das Crises",
    versiculo: '"Considerai bem-aventurado quando passais por várias provações, sabendo que a prova da vossa fé produz paciência."',
    ref: "Tiago 1:2-3",
    texto: "Cada crise que o casal atravessa juntos e sobrevive os torna mais sábios, mais resistentes, mais unidos. Não é que as crises são boas em si mesmas — é que Deus pode usar até o que foi ruim para produzir algo bom. Os casamentos mais sólidos que existem geralmente são aqueles que atravessaram o fogo juntos.",
    oracao: "Senhor, que as crises que atravessamos nos tornem mais fortes e não nos destruam. Que o Teu propósito prevaleça em cada dificuldade. Amém."
  },
  {
    titulo: "A Palavra de Afirmação",
    versiculo: '"A palavra boa é como mel: doce para a alma e saúde para os ossos."',
    ref: "Provérbios 16:24",
    texto: "Palavras de afirmação têm poder de cura. Dizer 'você é incrível', 'fico feliz de ter você', 'sou muito grato(a) por você' — não como protocolo, mas com sinceridade — alimenta a alma do cônjuge de formas que outras coisas não conseguem. Se essa é a linguagem de amor do seu cônjuge, faça dela prática diária.",
    oracao: "Pai, que minhas palavras ao meu cônjuge sejam sempre de afirmação e vida. Que ele/ela saiba, pelas minhas palavras, o quanto é valorizado(a). Amém."
  },
  {
    titulo: "Encontrando Deus no Casamento",
    versiculo: '"Porque onde dois ou três estiverem reunidos em meu nome, aí estou no meio deles."',
    ref: "Mateus 18:20",
    texto: "O casamento é um dos lugares onde Deus mais Se revela. Na vulnerabilidade da intimidade, no serviço mútuo, no perdão praticado, no amor que escolhe continuar — Deus está presente. Quando vocês se amam bem, estão experimentando e exibindo algo da natureza de Deus. O casamento é escola de amor divino.",
    oracao: "Senhor, que Te encontremos um no outro. Que nosso amor seja janela para o Teu amor pelo mundo. Amém."
  },
  {
    titulo: "Jornada de Vida Juntos",
    versiculo: '"Pela fé, Abraão obedeceu, quando chamado para sair para um lugar que havia de receber por herança; e saiu sem saber para onde ia."',
    ref: "Hebreus 11:8",
    texto: "O casamento é uma jornada de fé — você não sabia exatamente onde chegaria quando começou. E à medida que avança, continuam sem saber o que o amanhã traz. Mas caminham com fé, juntos, tendo um ao outro e tendo Deus. E essa companhia transforma qualquer destino desconhecido em aventura digna de ser vivida.",
    oracao: "Pai, que caminhem juntos com fé. Que o desconhecido do futuro não nos assuste, porque Tu caminhas conosco. Amém."
  },
  {
    titulo: "Amor Que Edifica",
    versiculo: '"O amor edifica."',
    ref: "1 Coríntios 8:1",
    texto: "Edifica: constrói, fortalece, eleva. Isso é o que o amor genuíno faz ao cônjuge. Não o diminui, não o constrange, não o envergonha. Pergunta a si mesmo: o meu amor está construindo meu cônjuge ou o desgastando? Amor que edifica cuida da autoestima do outro, do sonho do outro, da saúde emocional do outro. Esse amor transforma.",
    oracao: "Senhor, que meu amor edifique meu cônjuge. Que ele/ela seja melhor por estar comigo. Amém."
  },
  {
    titulo: "Fé Que Move o Casamento",
    versiculo: '"A fé é o firme fundamento das coisas que se esperam."',
    ref: "Hebreus 11:1",
    texto: "Às vezes, no casamento, a fé precisa agir antes dos sentimentos. Você crê no cônjuge mesmo quando ele está errando. Você crê na restauração mesmo quando parece impossível. Você crê que Deus tem um propósito mesmo na dificuldade. Essa fé — não ingênua, mas fundamentada em quem Deus é — move montanhas conjugais.",
    oracao: "Pai, que tenhamos fé no Teu propósito para nosso casamento. Que crenças falsas ou a dor não nos impeçam de crer no que Tu podes fazer. Amém."
  },
  {
    titulo: "Cuidar do Jardim do Casamento",
    versiculo: '"O Senhor Deus tomou o homem e o colocou no jardim do Éden para o cultivar e guardar."',
    ref: "Gênesis 2:15",
    texto: "Um jardim não se cuida sozinho. Precisa de atenção, de rega, de poda, de trabalho constante. O casamento é igual. Se ignorado, esgota. Se cuidado diariamente — com pequenos atos de amor, de atenção, de serviço — floresce de formas que surpreendem. Vocês são jardineiros do amor um do outro. Cuide do jardim hoje.",
    oracao: "Senhor, que sejamos jardineiros cuidadosos do nosso casamento. Que nunca o negligenciemos a ponto de murchar. Amém."
  },
  {
    titulo: "O Presente do Compromisso",
    versiculo: '"Melhores são dois do que um, porque têm melhor paga do seu trabalho."',
    ref: "Eclesiastes 4:9",
    texto: "O compromisso no casamento é libertador — não aprisionador. Saber que o outro ficará mesmo nas piores fases cria uma segurança profunda que libera ambos para serem completamente autênticos. O 'eu fico' incondicional é o solo mais fértil para o crescimento pessoal e relacional. O compromisso não limita o amor — ele o libera.",
    oracao: "Pai, que nosso compromisso um com o outro seja sólido e libertador. Que nunca usemos o compromisso como prisão, mas como segurança. Amém."
  },
  {
    titulo: "Compaixão Pelo Cônjuge",
    versiculo: '"Sede todos de igual ânimo, compassivos, amorosos para com os irmãos, misericordiosos e humildes."',
    ref: "1 Pedro 3:8",
    texto: "Seu cônjuge está passando por algo difícil — mesmo que não esteja dizendo diretamente. Compaixão é a capacidade de se colocar no lugar do outro, de sentir junto, de não exigir que ele esteja bem quando não está. Olhe para o seu cônjuge hoje com olhos de compaixão: o que ele está carregando que você pode ajudar a aliviar?",
    oracao: "Senhor, que tenhamos compaixão verdadeira um pelo outro. Que saibamos carregar com gentileza o que o outro está passando. Amém."
  },
  {
    titulo: "O Valor da Lealdade",
    versiculo: '"Um amigo ama em todo o tempo, e como irmão se mostra na adversidade."',
    ref: "Provérbios 17:17",
    texto: "Lealdade no casamento é saber que o outro está do seu lado — não contra você — mesmo nas discussões, mesmo quando erra, mesmo diante de outras pessoas. É não trair o cônjuge em conversas com amigos ou família. É ser advogado do outro quando ele não está presente. Essa lealdade é rara e preciosa.",
    oracao: "Pai, que sejamos leais um ao outro em toda situação. Que o/a meu/minha cônjuge nunca duvide de que estou do lado dele/dela. Amém."
  },
  {
    titulo: "Quando a Paixão Diminui",
    versiculo: '"Eu tenho contra ti que deixaste o teu primeiro amor."',
    ref: "Apocalipse 2:4",
    texto: "É natural que a paixão inicial se transforme com o tempo — de intensidade arrebatadora para amor mais profundo e tranquilo. Mas há uma diferença entre amor maduro e amor esfriado. Se a paixão diminuiu ao ponto de indiferença, é sinal de alerta. O amor precisa ser alimentado com atenção, afeto e escolha consciente.",
    oracao: "Senhor, que nunca percamos o calor do nosso amor. Que quando esfriar, saibamos o que fazer para reacender. Amém."
  },
  {
    titulo: "A Bênção da Parceria",
    versiculo: '"Buscarei para ele uma auxiliadora que lhe seja idônea."',
    ref: "Gênesis 2:18",
    texto: "Deus criou a parceria conjugal como igualdade complementar — não hierarquia de valor, mas diversidade de função. Cada um traz o que o outro precisa. A parceria funciona quando ambos se veem como colaboradores de uma mesma missão, não como adversários em campos opostos. Trabalhem juntos, não um contra o outro.",
    oracao: "Pai, que sejamos verdadeiros parceiros. Que nos vejamos como colaboradores de uma mesma vida e missão. Amém."
  },
  {
    titulo: "Amor Que Não Desiste",
    versiculo: '"Tudo suporta, tudo crê, tudo espera, tudo sofre."',
    ref: "1 Coríntios 13:7",
    texto: "O amor descrito em 1 Coríntios 13 não desiste. Não é ingênuo — mas é persistente. Casais que duram não são necessariamente os que nunca quiseram desistir — são os que, quando quiseram, não desistiram. Quando a desistência parecer tentadora, lembrem-se de Quem nunca desistiu de vocês. E respirem. E escolham ficar.",
    oracao: "Senhor, que quando quisermos desistir, Tu nos segures. Que o amor que tens por nós nos inspire a continuar. Amém."
  },
  {
    titulo: "Um Coração Novo Para Amar",
    versiculo: '"Criar em mim um coração puro, ó Deus."',
    ref: "Salmos 51:10",
    texto: "Por vezes o coração cansa. O amor endurece pela mágoa repetida, pela decepção acumulada, pelo cansaço de tentar. Nessas horas, a oração mais honesta que um cônjuge pode fazer é: Deus, cria em mim um coração novo para amar. Ele pode fazer isso. Ele criou o coração antes — pode recriá-lo.",
    oracao: "Pai, cria em mim um coração novo para amar meu cônjuge. Remove o que endureceu e renova o que estava vivo. Amém."
  },
  {
    titulo: "A Prática da Gentileza",
    versiculo: '"A benignidade de Deus te guia ao arrependimento."',
    ref: "Romanos 2:4",
    texto: "A gentileza transforma. A gentileza de Deus leva as pessoas ao arrependimento — não a severidade. Da mesma forma, gentileza consistente no casamento transforma o cônjuge de formas que cobrança e crítica nunca alcançariam. Seja gentil hoje — no tom de voz, nas palavras escolhidas, no toque, na paciência.",
    oracao: "Senhor, que a gentileza seja marca do nosso casamento. Que nos tratemos com a delicadeza com que Tu nos tratas. Amém."
  },
  {
    titulo: "Caminhar no Perdão",
    versiculo: '"Quando estiverdes orando, perdoai, se tendes alguma coisa contra alguém."',
    ref: "Marcos 11:25",
    texto: "Jesus conecta oração e perdão diretamente. Você não pode ter uma vida de oração plena enquanto carrega ressentimento do cônjuge. E não pode ter um casamento pleno enquanto guarda mágoa no coração. O perdão que você oferece ao cônjuge abre o canal da graça de Deus sobre a relação de vocês. É espiritual — e é prático.",
    oracao: "Pai, que o perdão seja prática constante no nosso casamento. Que não deixemos que a mágoa bloqueie nossa oração nem nossa relação. Amém."
  },
  {
    titulo: "Festa e Celebração",
    versiculo: '"Ide, comei a vossa carne com alegria, e bebei o vosso vinho com bom ânimo."',
    ref: "Eclesiastes 9:7",
    texto: "Casais saudáveis celebram. Aniversários, conquistas, pequenas vitórias do cotidiano — tudo merece ser comemorado juntos. A celebração não é superficialidade — é gratidão corporificada. Quando celebram juntos, dizem ao outro: 'O que acontece contigo importa para mim. Tua alegria é minha alegria.' Celebrem hoje.",
    oracao: "Senhor, que sejamos celebradores da vida que nos deste juntos. Que encontremos razões diárias para comemorar. Amém."
  },
  {
    titulo: "Servindo à Mesa",
    versiculo: '"O Filho do Homem não veio para ser servido, mas para servir."',
    ref: "Mateus 20:28",
    texto: "O exemplo de Jesus é o padrão do casamento: servir. Não porque um é melhor ou mais importante — mas porque o amor autêntico se expressa em serviço. Quem cuida, quem prepara, quem limpa, quem organiza — esses atos cotidianos são atos de amor. Sirvam um ao outro com a mentalidade de Cristo.",
    oracao: "Jesus, que tenhamos Teu coração de servo um para o outro. Que servir seja nossa linguagem de amor mais falada. Amém."
  },
  {
    titulo: "O Presente da Reconciliação",
    versiculo: '"Portanto, se trouxeres a tua oferta ao altar e aí te lembrares de que teu irmão tem alguma coisa contra ti... vai primeiro reconciliar-te com teu irmão."',
    ref: "Mateus 5:23-24",
    texto: "Para Jesus, a reconciliação é prioridade até sobre o ato de adoração. Se há distância entre vocês, se há ressentimento não resolvido — isso precisa vir antes de tudo. A reconciliação no casamento não é fraqueza — é obediência. E ela abre portas que a mágoa mantinha fechadas.",
    oracao: "Senhor, que sejamos rápidos à reconciliação. Que nada — nem orgulho nem mágoa — nos impeça de nos reaproximarmos. Amém."
  },
  {
    titulo: "Deus Está Escrevendo Sua História",
    versiculo: '"O coração do homem planeja o seu caminho, mas o Senhor lhe dirige os passos."',
    ref: "Provérbios 16:9",
    texto: "A história de amor de vocês não começou por acidente — foi dirigida pela mão de Deus. E cada capítulo que se abre, mesmo os difíceis, está sob Sua soberania. Confiem que o Autor da vida sabe como conduzir a narrativa de vocês para um final que glorifica a Ele e abençoa a todos que os conhecem.",
    oracao: "Pai, confiamos a Tua mão a história do nosso casamento. Que sejas o Autor e o Consumador do amor que construímos. Amém."
  },
  {
    titulo: "Viver o Amor Hoje",
    versiculo: '"Este é o dia que o Senhor fez."',
    ref: "Salmos 118:24",
    texto: "Não esperem a situação perfeita para se amar bem. Amem hoje, com o que têm, onde estão. O casamento ideal não existe — existe o casal que decide amar bem apesar das imperfeições. Hoje é o único dia que vocês têm. Vivam-no com intenção, com afeto, com gratidão, com fé. O amor de hoje constrói o casamento de amanhã.",
    oracao: "Senhor, que amemos bem hoje. Não amanhã, não quando melhorar — hoje, com o que temos. Que este dia seja vivido com amor intencional. Amém."
  }
];