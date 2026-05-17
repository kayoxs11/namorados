// devocionais.js — 365 devocionais para casais
const DEVOCIONAIS = [
  {
    titulo: "O Amor que Tudo Suporta",
    versiculo: "O amor é paciente, o amor é bondoso. Não inveja, não se vangloria, não se orgulha.",
    referencia: "1 Coríntios 13:4",
    reflexao: "O amor verdadeiro não é um sentimento passageiro, mas uma escolha diária. Quando escolhemos amar com paciência e bondade, mesmo nos dias difíceis, estamos construindo um alicerce sólido para o nosso casamento. Hoje, reflitam juntos: em quais momentos vocês precisam exercitar mais a paciência um com o outro?",
    oracao: "Senhor, obrigado pelo dom do amor que tens colocado em nossos corações. Ensina-nos a sermos pacientes um com o outro nos momentos de tensão, e bondosos quando o cansaço falar mais alto. Que o nosso amor reflita o Teu amor por nós. Amém.",
    desafio: "Cada um escreva em um papel algo pelo qual é grato no outro. Troquem os papéis antes de dormir e leiam juntos."
  },
  {
    titulo: "Juntos Diante de Deus",
    versiculo: "Porque onde dois ou três estiverem reunidos em meu nome, ali estou no meio deles.",
    referencia: "Mateus 18:20",
    reflexao: "Quando um casal ora junto, convida Deus para o centro do relacionamento. Ele não é um convidado ocasional, mas o fundamento sobre o qual tudo é construído. A oração em casal cria intimidade espiritual que fortalece todos os outros laços do casamento.",
    oracao: "Jesus, que bom saber que estás presente quando nos unimos em Teu nome. Que cada oração que fizermos juntos nos aproxime de Ti e um do outro. Sê o centro da nossa casa. Amém.",
    desafio: "Orem juntos agora mesmo, cada um em voz alta, agradecendo a Deus por algo específico no cônjuge."
  },
  {
    titulo: "A Casa Construída sobre a Rocha",
    versiculo: "Todo aquele que ouve estas minhas palavras e as pratica é semelhante a um homem prudente que construiu a sua casa sobre a rocha.",
    referencia: "Mateus 7:24",
    reflexao: "Um casamento não é construído apenas com sentimentos, mas com decisões firmes e alicerçadas na Palavra de Deus. As tempestades virão — desentendimentos, dificuldades financeiras, cansaço — mas um lar que tem Deus como fundamento resiste a tudo isso e sai mais forte.",
    oracao: "Pai, ajuda-nos a construir nossa família sobre as Tuas palavras. Que as nossas decisões, grandes e pequenas, sejam orientadas pela Tua sabedoria. Que a nossa casa seja um lugar de paz e de Tua presença. Amém.",
    desafio: "Conversem sobre um 'valor de casal' que querem cultivar este mês. Escrevam e coloquem em um lugar visível na casa."
  },
  {
    titulo: "Contentamento no Propósito",
    versiculo: "Aprendi a contentar-me em qualquer situação em que me encontre.",
    referencia: "Filipenses 4:11",
    reflexao: "Paulo escreveu isso de dentro de uma prisão. O contentamento não depende das circunstâncias externas, mas de uma paz interna que só Deus pode dar. Para os casais, o contentamento significa apreciar a fase de vida em que estão, sem ficar preso em comparações ou em sonhos ainda não realizados.",
    oracao: "Senhor, ensina-nos a ser gratos pela fase que vivemos agora. Que não percamos o hoje sonhando com o amanhã, nem nos arrependendo do ontem. Ajuda-nos a encontrar beleza no simples e no cotidiano. Amém.",
    desafio: "Listem três coisas simples da vida de casal que vocês tendem a não valorizar. Comecem a agradecer por elas hoje."
  },
  {
    titulo: "O Dom da Cura",
    versiculo: "Confessai, pois, os vossos pecados uns aos outros, e orai uns pelos outros para serdes curados.",
    referencia: "Tiago 5:16",
    reflexao: "A vulnerabilidade é uma das maiores expressões de amor num casamento. Quando somos capazes de dizer 'errei' ou 'estou com medo', criamos espaço para cura e conexão genuína. A oração mútua é poderosa — ela traz o sobrenatural para dentro das nossas limitações humanas.",
    oracao: "Deus da graça, dá-nos coragem para sermos honestos um com o outro. Que não haja máscaras entre nós. Cura as feridas que carregamos e usa o nosso casamento como instrumento de restauração. Amém.",
    desafio: "Com gentileza, cada um compartilhe algo que está pesando no coração. Ora pelo cônjuge depois de ouvir."
  },
  {
    titulo: "Honra Mútua",
    versiculo: "Amai-vos uns aos outros com amor fraternal, preferindo-vos em honra uns aos outros.",
    referencia: "Romanos 12:10",
    reflexao: "Honrar o cônjuge significa tratá-lo como alguém precioso, não apenas nas grandes ocasiões, mas nas palavras do dia a dia, no tom de voz, no olhar. A honra é a linguagem do respeito, e sem respeito o amor murcha lentamente.",
    oracao: "Senhor, que as nossas palavras edifiquem e não destruam. Que o nosso cônjuge sinta-se honrado e valorizado através das nossas ações e atitudes diárias. Ensina-nos a preferir o outro. Amém.",
    desafio: "Hoje, diga ao seu cônjuge uma qualidade específica que você admira nele/nela — algo que raramente comenta."
  },
  {
    titulo: "Fé que Move",
    versiculo: "Porque pela fé andamos, não pelo que vemos.",
    referencia: "2 Coríntios 5:7",
    reflexao: "Há momentos no casamento em que não enxergamos a saída — a crise financeira parece sem fim, a distância emocional parece intransponível, o sonho parece morto. É exatamente nesses momentos que a fé é convocada. Andar pela fé é confiar em Deus mesmo quando as circunstâncias gritam o contrário.",
    oracao: "Pai, fortalece a nossa fé nos momentos em que não conseguimos enxergar o caminho. Ajuda-nos a confiar no Teu cuidado mesmo quando não entendemos o Teu plano. Que sejamos âncoras um para o outro na fé. Amém.",
    desafio: "Compartilhem uma situação atual que requer fé. Orem especificamente por ela, declarando confiar em Deus juntos."
  },
  {
    titulo: "Palavras que Edificam",
    versiculo: "Não saia da boca de vocês nenhuma palavra prejudicial, mas apenas a que for boa para edificar conforme a necessidade.",
    referencia: "Efésios 4:29",
    reflexao: "As palavras têm poder de vida e de morte nos relacionamentos. Uma palavra dita em raiva pode fazer mais estrago do que percebemos, assim como uma palavra de encorajamento no momento certo pode mudar completamente o dia do nosso cônjuge. Somos guardiões das palavras que habitam nosso casamento.",
    oracao: "Deus, coloca uma guarda sobre os nossos lábios. Que antes de falar, possamos pensar: isso vai edificar ou destruir? Que as nossas palavras sejam mel — doces e nutritivas para o nosso casamento. Amém.",
    desafio: "Por 24 horas, cada um se compromete a não dizer nada negativo ao cônjuge. Em vez disso, substitua com elogio ou silêncio."
  },
  {
    titulo: "O Perdão que Liberta",
    versiculo: "Sede bondosos uns para com os outros, compassivos, perdoando-vos mutuamente, assim como Deus vos perdoou em Cristo.",
    referencia: "Efésios 4:32",
    reflexao: "Guardar mágoa é como beber veneno esperando que o outro adoeça. O perdão não é fraqueza nem é fingir que não doeu — é uma decisão de soltar o peso e deixar Deus ser o juiz. No casamento, o perdão é o oxigênio que mantém o amor vivo.",
    oracao: "Senhor, assim como Tu nos perdoaste completamente, ajuda-nos a perdoar um ao outro. Remove toda amargura e ressentimento de nossos corações. Que o perdão seja uma prática constante em nosso lar. Amém.",
    desafio: "Há algo que você não perdoou completamente? Peça a Deus forças e, se estiver pronto, converse com carinho com seu cônjuge."
  },
  {
    titulo: "Guardar o Coração",
    versiculo: "Acima de tudo, guarda o teu coração, pois dele procedem as fontes da vida.",
    referencia: "Provérbios 4:23",
    reflexao: "Guardar o coração é cuidar dos pensamentos, dos olhos e das amizades que nutrimos. Num casamento saudável, os dois parceiros protegem ativamente o que entra em seus corações e mentes — as comparações, as fantasias, os relacionamentos que ameaçam a exclusividade do amor conjugal.",
    oracao: "Pai, ajuda-nos a guardar os nossos corações um para o outro. Que não deixemos espaço para o que ameaça a nossa aliança. Que cultivemos pensamentos puros e intenções honestas em nosso casamento. Amém.",
    desafio: "Conversem abertamente sobre uma área onde precisam ser mais cuidadosos na proteção do casamento (redes sociais, amizades, etc.)."
  },
  {
    titulo: "A Alegria do Senhor",
    versiculo: "A alegria do Senhor é a vossa força.",
    referencia: "Neemias 8:10",
    reflexao: "A alegria cristã não depende de condições perfeitas. Ela nasce da certeza de que somos amados por Deus e que Ele está no controle. Quando um casal cultiva essa alegria juntos, o lar se torna um lugar leve, mesmo nos dias pesados.",
    oracao: "Deus, que a nossa casa seja marcada pela alegria genuína que vem de Ti. Que riamos juntos, que celebremos as pequenas coisas, e que a nossa alegria seja um testemunho do Teu cuidado. Amém.",
    desafio: "Planejem algo simples e divertido para fazer juntos esta semana — um jogo, um passeio, uma comida especial."
  },
  {
    titulo: "Comprometimento até o Fim",
    versiculo: "Portanto, o que Deus ajuntou não separe o homem.",
    referencia: "Marcos 10:9",
    reflexao: "O casamento é uma aliança, não um contrato com cláusula de rescisão. Quando entendemos que fomos Deus quem nos uniu, a nossa perseverança ganha uma dimensão sobrenatural. O comprometimento não é prisão — é a raiz que permite ao amor crescer em profundidade.",
    oracao: "Senhor, obrigado por ter nos unido. Que a nossa aliança seja honrada todos os dias. Nos dias difíceis, ajuda-nos a lembrar da escolha que fizemos e a renovar o nosso compromisso com amor. Amém.",
    desafio: "Relembrem juntos a história do pedido de casamento ou da decisão de ficar juntos. Contem a história um para o outro."
  },
  {
    titulo: "Paciência nas Diferenças",
    versiculo: "Sede sempre humildes e mansos; sede pacientes, tolerando-vos uns aos outros em amor.",
    referencia: "Efésios 4:2",
    reflexao: "Deus colocou dois indivíduos diferentes sob o mesmo teto. Essas diferenças não são erros do projeto divino — são oportunidades de crescimento. O que me irrita no outro muitas vezes é exatamente o que Deus está usando para me tornar mais parecido com Cristo.",
    oracao: "Pai, obrigado pelas nossas diferenças. Ensina-nos a enxergá-las como complementos e não como empecilhos. Dá-nos paciência para entender o jeito do outro e humildade para ceder quando for necessário. Amém.",
    desafio: "Identifiquem uma diferença entre vocês que já causou conflito. Conversem sobre como essa diferença pode, na verdade, fortalecer o casamento."
  },
  {
    titulo: "Servir com Amor",
    versiculo: "Não agindo por ambição egoísta ou por vaidade, mas com humildade considerando os outros superiores a vocês mesmos.",
    referencia: "Filipenses 2:3",
    reflexao: "Jesus lavou os pés dos seus discípulos. O maior ato de liderança que já existiu foi expresso em serviço. No casamento, servir o cônjuge não é fraqueza — é força. É escolher o bem do outro acima do próprio conforto, com alegria e sem contar pontos.",
    oracao: "Jesus, que serviste sem medir o custo, ensina-nos a servir um ao outro da mesma forma. Que possamos encontrar alegria no cuidado com o cônjuge. Que o serviço mútuo seja a linguagem do nosso amor. Amém.",
    desafio: "Hoje, cada um faça algo inesperado para servir o cônjuge — sem ser pedido e sem comentar depois."
  },
  {
    titulo: "Sonhos Compartilhados",
    versiculo: "Confia ao Senhor as tuas obras, e os teus planos serão estabelecidos.",
    referencia: "Provérbios 16:3",
    reflexao: "Casais que sonham juntos caminham juntos. Quando compartilhamos nossos sonhos e os colocamos nas mãos de Deus, ele tem liberdade de moldá-los em algo ainda maior do que imaginávamos. O alinhamento de visão fortalece a unidade do casal.",
    oracao: "Senhor, recebe os nossos sonhos como oferta. Molda-os conforme a Tua vontade. Que os nossos planos estejam alinhados com o Teu propósito para a nossa família. Dá-nos coragem de sonhar juntos e fé para esperar. Amém.",
    desafio: "Cada um compartilhe um sonho que ainda não contou ao cônjuge. Orem juntos sobre esses sonhos."
  },
  {
    titulo: "A Presença de Deus no Lar",
    versiculo: "Quanto a mim e à minha família, serviremos ao Senhor.",
    referencia: "Josué 24:15",
    reflexao: "Josué fez uma declaração pública e deliberada de serviço a Deus. Para os casais, essa é uma das decisões mais importantes: escolher, conscientemente, que a família será marcada pela presença e pelos valores do Senhor. Isso não acontece por acidente — é uma decisão renovada todos os dias.",
    oracao: "Pai, declaramos hoje que a nossa casa é Tua. Que quando as pessoas nos visitarem, sintam Tua presença. Que as nossas decisões reflitam o Teu caráter. Que Te sirvamos juntos, todos os dias. Amém.",
    desafio: "Criem um ritual espiritual de casal — pode ser ler um versículo junto toda manhã ou orar antes de dormir. Comecem hoje."
  },
  {
    titulo: "Cuidar da Saúde do Amor",
    versiculo: "Maridos, amai vossas esposas, assim como Cristo amou a Igreja e a si mesmo se entregou por ela.",
    referencia: "Efésios 5:25",
    reflexao: "O amor do casamento precisa ser nutrido, regado, cuidado. Assim como uma planta que não recebe água murcha, o amor que não recebe atenção esfria. Cristo entregou tudo pela Igreja — essa é a barra do amor conjugal: uma entrega total, sacrificial e constante.",
    oracao: "Senhor, que o nosso amor nunca se torne rotina vazia. Ensina-nos a nos escolher todos os dias, a investirmos tempo e atenção um no outro. Que o amor entre nós cresça e não diminua. Amém.",
    desafio: "Planejem um 'date' sem telas essa semana — só vocês dois, conversando e se curtindo."
  },
  {
    titulo: "A Voz de Deus no Silêncio",
    versiculo: "Aquietai-vos e sabei que eu sou Deus.",
    referencia: "Salmos 46:10",
    reflexao: "Na correria do dia a dia, esquecemos de parar e ouvir a Deus. O casamento também precisa de seus momentos de silêncio intencional — momentos em que dois corações, juntos, se aquietam diante do Senhor. É no silêncio que Ele fala, orienta e renova.",
    oracao: "Pai, ajuda-nos a encontrar momentos de quietude juntos. Que aprendamos a não temer o silêncio, mas a encontrá-lo como espaço de encontro com o Senhor. Fala ao nosso casal, Deus. Estamos ouvindo. Amém.",
    desafio: "Separem 10 minutos hoje para ficarem em silêncio juntos — sem celular, sem TV. Apenas presença."
  },
  {
    titulo: "Esperança no Amanhã",
    versiculo: "Porque eu bem sei os planos que tenho para vós, diz o Senhor; planos de paz e não de mal, para vos dar um futuro e uma esperança.",
    referencia: "Jeremias 29:11",
    reflexao: "Deus tem planos específicos para o seu casal — não planos genéricos, mas desenhados para a singularidade de vocês dois. Isso significa que o futuro não é incerto para quem confia nEle. Há esperança mesmo nos capítulos difíceis.",
    oracao: "Senhor, obrigado por teres planos para nós. Quando o futuro parecer nebuloso, ajuda-nos a descansar na certeza de que estás no controle. Que a esperança em Ti seja a âncora do nosso casamento. Amém.",
    desafio: "Juntos, escrevam em um papel as esperanças que têm para o próximo ano como casal. Guardem e revisitem daqui a 12 meses."
  },
  {
    titulo: "Gratidão como Estilo de Vida",
    versiculo: "Em tudo dai graças, porque esta é a vontade de Deus em Cristo Jesus para vós.",
    referencia: "1 Tessalonicenses 5:18",
    reflexao: "A gratidão é inimiga da insatisfação. Quando cultivamos o hábito de agradecer — por pequenas e grandes coisas — nossos olhos começam a enxergar a abundância onde antes só víamos falta. No casamento, a gratidão muda a atmosfera do lar.",
    oracao: "Deus, obrigado. Por cada dia juntos, por cada refeição partilhada, por cada abraço, por cada reconciliação. Abre os nossos olhos para a quantidade de bênçãos que tens derramado. Que a gratidão seja o tom da nossa casa. Amém.",
    desafio: "Por uma semana, cada um anote três coisas pelas quais é grato no relacionamento. Partilhem no final da semana."
  },
  {
    titulo: "Unidade na Diversidade",
    versiculo: "Para que todos sejam um, como tu, ó Pai, és em mim e eu em ti.",
    referencia: "João 17:21",
    reflexao: "A oração de Jesus pela unidade nos lembra que ela é possível mesmo entre pessoas muito diferentes. O casal não precisa ser idêntico para ser uno — a unidade é construída no respeito, no diálogo e na submissão mútua ao mesmo Senhor.",
    oracao: "Jesus, que orastes pela unidade dos Teus filhos, que essa unidade seja visível no nosso casamento. Que as nossas diferenças nos enriqueçam e não nos dividam. Faz-nos um, do jeito que Tu e o Pai são um. Amém.",
    desafio: "Identifiquem uma área em que vocês precisam melhorar a comunicação. Combinem uma estratégia simples para lidar com ela."
  },
  {
    titulo: "Fidelidade que Inspira",
    versiculo: "Nisto conhecerão todos que sois meus discípulos, se vos amardes uns aos outros.",
    referencia: "João 13:35",
    reflexao: "O amor fiel de um casal é um testemunho poderoso do amor de Deus ao mundo. Quando o mundo vê um casal que se escolhe, que se perdoa, que cresce junto, ele vê um reflexo do amor divino. Sua fidelidade é pregação.",
    oracao: "Senhor, que o nosso amor seja tão genuíno que sirva de testemunho. Que as pessoas ao redor vejam em nós o amor que vem de Ti. Que sejamos fiéis um ao outro, não por obrigação, mas por amor genuíno. Amém.",
    desafio: "Conversem sobre como o casamento de vocês pode ser uma influência positiva para outras pessoas — amigos, filhos, família."
  },
  {
    titulo: "O Poder da Bênção",
    versiculo: "Abençoai os que vos perseguem; abençoai e não amaldiçoeis.",
    referencia: "Romanos 12:14",
    reflexao: "Se Deus nos chama a abençoar até aqueles que nos fazem mal, quanto mais devemos abençoar o cônjuge! Quando você fala bem do seu cônjuge — para ele e para os outros — está exercendo um poder espiritual enorme. A bênção transforma.",
    oracao: "Pai, que as nossas bocas sejam instrumentos de bênção. Que ao invés de criticarmos, abençoemos. Que ao invés de reclamarmos, agradecemos. Que ao invés de diminuir, edifiquemos. Amém.",
    desafio: "Hoje, abençoe seu cônjuge em voz alta — olho no olho — com palavras específicas sobre o futuro dele/dela."
  },
  {
    titulo: "Renovação Diária",
    versiculo: "Portanto, não desanimamos. Embora exteriormente estejamos a desgastar-nos, interiormente estamos sendo renovados dia após dia.",
    referencia: "2 Coríntios 4:16",
    reflexao: "O casamento tem seus momentos de desgaste — é normal. O que não pode acontecer é deixar de buscar a renovação. Assim como nos renovamos espiritualmente a cada dia com Deus, precisamos renovar o amor conjugal com intenção: gestos, palavras, escolhas.",
    oracao: "Senhor, renova o nosso amor como renova as Tuas misericórdias a cada manhã. Que nunca nos acomodemos, que sempre busquemos nos reconquistar. Dá-nos criatividade para manter o amor fresco e vivo. Amém.",
    desafio: "Surpreenda seu cônjuge com algo que ele/ela não espera hoje — pode ser uma mensagem, um café, uma carta."
  },
  {
    titulo: "Ouvir de Verdade",
    versiculo: "Meus amados irmãos, estejam todos prontos para ouvir, mas tardios para falar.",
    referencia: "Tiago 1:19",
    reflexao: "Ouvir de verdade é uma arte que exige esforço. É olhar nos olhos sem pensar na próxima resposta. É fazer perguntas para entender, não para debater. É criar um espaço onde o cônjuge sente que pode falar sem julgamento. Isso é um dos maiores presentes que você pode dar.",
    oracao: "Deus, ensina-nos a ouvir com atenção e amor. Que não estejamos sempre ansiosos para falar, mas dispostos a realmente compreender o coração um do outro. Que a escuta seja nossa forma de cuidado. Amém.",
    desafio: "Por 15 minutos, um fala sobre qualquer coisa que está sentindo e o outro ouve sem interromper. Depois trocam. Sem conselhos, apenas escuta."
  },
  {
    titulo: "O Toque que Cura",
    versiculo: "Saudai-vos uns aos outros com um beijo santo.",
    referencia: "1 Pedro 5:14",
    reflexao: "O toque físico é uma das linguagens do amor. Um abraço demorado, segurar a mão no culto, um beijo de bom dia — esses gestos comunicam segurança e presença. Não deixe que a rotina roube os toques significativos do seu casamento.",
    oracao: "Senhor, que nunca deixemos de nos tocar com afeto e cuidado. Que o nosso corpo seja instrumento de comunicação de amor, e não apenas de dever. Que o carinho físico seja constante no nosso casamento. Amém.",
    desafio: "Hoje, dê ao cônjuge um abraço de pelo menos 20 segundos. Sem pressa. Apenas presença e afeto."
  },
  {
    titulo: "Paz que Excede o Entendimento",
    versiculo: "E a paz de Deus, que excede todo o entendimento, guardará os vossos corações e os vossos pensamentos em Cristo Jesus.",
    referencia: "Filipenses 4:7",
    reflexao: "Há situações no casamento que não têm solução imediata. Decisões difíceis, esperas longas, dores sem explicação. Para esses momentos, Deus oferece não uma resposta, mas uma paz sobrenatural — uma tranquilidade que não faz sentido racional, mas é absolutamente real.",
    oracao: "Pai, concede a nossa família a Tua paz que transcende qualquer raciocínio humano. Nos momentos de angústia e incerteza, que os nossos corações descansem em Ti. Sê o nosso escudo e a nossa tranquilidade. Amém.",
    desafio: "Identifiquem algo que tem tirado a paz de vocês como casal. Orem especificamente, entregando essa situação nas mãos de Deus."
  },
  {
    titulo: "A Força do Casal",
    versiculo: "Um sozinho pode ser derrotado, mas dois conseguirão resistir. O cordão de três dobras não se rompe facilmente.",
    referencia: "Eclesiastes 4:12",
    reflexao: "O casamento não é apenas a união de duas pessoas — é uma corda de três fios: você, seu cônjuge e Deus. Quando os três estão entrelaçados, a resistência é extraordinária. Nenhuma crise é grande o suficiente para quebrar uma aliança que inclui o próprio Deus.",
    oracao: "Senhor, que sejas sempre o terceiro fio do nosso casamento. Mantém-nos entrelaçados em Ti. Que quando um de nós enfraquecer, o outro erga, e que Tu nos sustentes a ambos. Amém.",
    desafio: "Reflitam juntos: de que forma práticas Deus está presente no dia a dia da relação de vocês? O que pode ser melhorado?"
  },
  {
    titulo: "Cuidando da Amizade",
    versiculo: "O amigo verdadeiro ama em qualquer tempo, e na hora da angústia é como um irmão.",
    referencia: "Provérbios 17:17",
    reflexao: "Os casais mais felizes não são apenas parceiros românticos — são melhores amigos. A amizade no casamento cria um nível de confiança e conforto que sustenta o amor mesmo quando a paixão oscila. Cultivar a amizade é cultivar o amor.",
    oracao: "Deus, que sejamos mais do que cônjuges — que sejamos os melhores amigos um do outro. Que possamos rir juntos, ser tolos juntos, contar os segredos e confiar completamente. Que a nossa amizade seja a base do nosso amor. Amém.",
    desafio: "Façam juntos algo que costumavam fazer quando eram amigos ou namoravam — revisitem um lugar, um hábito, uma brincadeira."
  },
  {
    titulo: "Sabedoria nas Finanças",
    versiculo: "O prudente prevê as dificuldades e se prepara para enfrentá-las; o insensato segue em frente e é punido.",
    referencia: "Provérbios 22:3",
    reflexao: "As finanças são um dos maiores pontos de tensão nos casamentos. Mas o problema raramente é falta de dinheiro — é falta de alinhamento, planejamento e comunicação honesta. Quando um casal cuida do dinheiro juntos, constrói confiança e segurança.",
    oracao: "Pai provedor, ajuda-nos a ser bons administradores do que nos tens dado. Que não haja segredos financeiros entre nós. Dá-nos sabedoria para planejar, disciplina para poupar e generosidade para dar. Amém.",
    desafio: "Marquem um momento esta semana para conversar sobre as finanças do casal — metas, gastos e sonhos financeiros."
  },
  {
    titulo: "A Beleza do Sacrifício",
    versiculo: "Ninguém tem amor maior do que aquele que dá a vida pelos seus amigos.",
    referencia: "João 15:13",
    reflexao: "Amor real custa algo. Não é apenas um sentimento quente — é uma escolha que às vezes demanda renúncia. No casamento, sacrifício é ceder na discussão quando você sabe que tem razão, abrir mão de um plano pessoal pelo bem do outro, escolher a paz quando preferia a vitória.",
    oracao: "Jesus, Tu deste tudo por amor. Ensina-nos esse amor sacrificial. Que possamos dar ao cônjuge o melhor de nós — não as sobras do dia —, e que encontremos alegria genuína no sacrifício por amor. Amém.",
    desafio: "Cada um identifique algo que pode abrir mão esta semana em benefício do cônjuge. Façam isso em silêncio, sem anunciar."
  },
  {
    titulo: "O Presente do Presente",
    versiculo: "Este é o dia que o Senhor fez; alegremo-nos e nos regozijemos nele.",
    referencia: "Salmos 118:24",
    reflexao: "O hoje é o único lugar onde o casamento realmente acontece. Não o passado que queremos reescrever, nem o futuro que estamos ansiosos para construir — mas este momento, com esta pessoa, neste lugar. Presente no presente é um presente.",
    oracao: "Senhor, que não percamos os dias que tens nos dado em preocupação com o amanhã ou em saudade do ontem. Que possamos estar completamente presentes um para o outro hoje. Cada dia é Tua dádiva. Amém.",
    desafio: "Passem uma hora sem celular, completamente presentes um com o outro. Conversem, joguem, caminhem — mas estejam ali."
  },
  {
    titulo: "Herdeiros Juntos",
    versiculo: "Sendo que vós sois herdeiros da graça da vida, a fim de que as vossas orações não sejam impedidas.",
    referencia: "1 Pedro 3:7",
    reflexao: "Deus nos chama de 'herdeiros juntos' da graça. Isso significa que o casal compartilha o mesmo destino espiritual — não são oponentes, mas companheiros de jornada. Esse entendimento transforma como nos tratamos: não como adversários, mas como cocriadores de algo eterno.",
    oracao: "Pai, obrigado por nos chamares de herdeiros. Que nos tratemos como tais — com dignidade, com respeito, com a consciência de que somos ambos filhos Teus preciosos. Que a nossa espiritualidade seja partilhada e crescente. Amém.",
    desafio: "Compartilhem como a fé de cada um tem influenciado positivamente o outro. Sejam específicos e gratos."
  },
  {
    titulo: "O Tempo de Deus",
    versiculo: "Para tudo há uma estação certa; há um tempo certo para cada propósito debaixo do céu.",
    referencia: "Eclesiastes 3:1",
    reflexao: "Há fases no casamento: a fase da novidade, da estabilização, dos desafios, da maturidade. Cada fase tem sua beleza e seu propósito. Resistir à fase em que estão gera frustração; acolhê-la com fé gera crescimento.",
    oracao: "Deus dos tempos e das estações, ajuda-nos a confiar no Teu timing. Que não nos desesperemos quando estamos numa fase difícil, nem nos acomodemos nas fases boas. Que em cada estação, busquemos o que Tu queres nos ensinar. Amém.",
    desafio: "Conversem sobre em que 'estação' o casamento de vocês está agora e o que essa fase está ensinando a vocês."
  },
  {
    titulo: "Cuidar do Jardim",
    versiculo: "O meu amado é meu e eu sou dele.",
    referencia: "Cânticos 2:16",
    reflexao: "O Cântico dos Cânticos celebra o amor conjugal com alegria e sem vergonha. Deus criou o amor entre o homem e a mulher para ser belo, celebrado e cuidado. O casamento é um jardim que precisa ser regado com presença, carinho e desejo.",
    oracao: "Senhor que criaste o amor, obrigado pela beleza da atração e do desejo mútuo. Que nunca deixemos esse fogo apagar. Que cuidemos do nosso jardim com alegria, criatividade e gratidão. Amém.",
    desafio: "Escrevam uma carta de amor curta ao cônjuge — pode ser um bilhete de 5 linhas. Entreguem pessoalmente hoje."
  },
  {
    titulo: "Generosidade de Espírito",
    versiculo: "Cada um dê conforme determinou em seu coração, não com pesar ou por obrigação, pois Deus ama quem dá com alegria.",
    referencia: "2 Coríntios 9:7",
    reflexao: "A generosidade não é só financeira. No casamento, somos chamados a ser generosos com o tempo, com a atenção, com o elogio, com a paciência, com o perdão. Quando damos com alegria — não por obrigação — o casamento floresce.",
    oracao: "Pai, faz de nós dadores alegres. Generosos com o tempo, com as palavras, com o cuidado, com a atenção. Que o nosso amor seja transbordante, não medido ou calculado. Amém.",
    desafio: "Faça algo generoso pelo cônjuge hoje que vá além do esperado — algo que ele/ela não peça e não espere."
  },
  {
    titulo: "A Identidade do Casal",
    versiculo: "Mas vocês são geração eleita, sacerdócio real, nação santa, povo que lhe pertence.",
    referencia: "1 Pedro 2:9",
    reflexao: "Antes de serem um casal, vocês dois são filhos de Deus com identidade e propósito. Quando cada um tem clareza de quem é em Deus, o casamento fica mais saudável — não busca no cônjuge o que só Deus pode dar, e contribui de um lugar de abundância, não de carência.",
    oracao: "Senhor, ajuda cada um de nós a entender quem somos em Ti. Que não busquemos no cônjuge o que só Deus pode suprir. E que possamos nos amar de um lugar de plenitude, não de vazio. Amém.",
    desafio: "Cada um dedique um tempo hoje para orar individualmente sobre a sua identidade em Cristo. Depois partilhem o que sentiu."
  },
  {
    titulo: "Luz para o Caminho",
    versiculo: "A tua palavra é lâmpada para os meus pés e luz para o meu caminho.",
    referencia: "Salmos 119:105",
    reflexao: "Num mundo cheio de vozes e opiniões, a Palavra de Deus é a bússola confiável para os casais. Ela não diz apenas o que fazer, mas forma o caráter e os valores que guiam todas as decisões do lar.",
    oracao: "Deus, que Tua Palavra seja a luz que guia cada decisão do nosso casamento. Que a leiamos juntos, meditemos nela e a apliquemos à nossa realidade. Que as nossas escolhas reflitam o que Tu valorizas. Amém.",
    desafio: "Escolham juntos um versículo para memorizar esta semana. Escrevam em algum lugar visível da casa."
  },
  {
    titulo: "Confiança Reconstruída",
    versiculo: "O Senhor restaurará o que foi perdido.",
    referencia: "Joel 2:25",
    reflexao: "Se a confiança foi quebrada no casamento, Deus pode restaurá-la. Não é rápido, não é sem dor — mas é possível. Ele é especialista em restauração. O que importa é a disposição de ambos de trabalhar na reconstrução com humildade e paciência.",
    oracao: "Deus restaurador, cremos no Teu poder de curar e reconstruir. Onde houve quebra, traz cura. Onde houve desconfiança, devolve a segurança. Guia-nos nesse processo com sabedoria e graça. Amém.",
    desafio: "Conversem honestamente sobre um ponto de confiança que precisa ser mais desenvolvido entre vocês. Com amor, não com acusação."
  },
  {
    titulo: "Dar Crédito ao Outro",
    versiculo: "Não façais nada por contenda ou por vanglória, mas por humildade; cada um considere os outros superiores a si mesmo.",
    referencia: "Filipenses 2:3",
    reflexao: "No casamento, tendemos a querer crédito pelas contribuições que damos. Mas quando competimos internamente, perdemos todos. O amor que Deus nos chama a praticar consegue celebrar a vitória do cônjuge como se fosse sua.",
    oracao: "Senhor, remove de nós a necessidade de nos autopromovermos. Ajuda-nos a celebrar um ao outro genuinamente, a reconhecer as contribuições do cônjuge e a não nos importarmos com quem leva o mérito. Amém.",
    desafio: "Elogie seu cônjuge hoje na frente de outra pessoa — um amigo, familiar ou colega. Deixe que ele/ela ouça."
  },
  {
    titulo: "Novas Misericórdias",
    versiculo: "As misericórdias do Senhor são novas cada manhã; grande é a Tua fidelidade.",
    referencia: "Lamentações 3:23",
    reflexao: "Todo dia é uma nova oportunidade. O casal que aprende a não arrastar ressentimentos do dia anterior para o dia seguinte preserva o amor vivo. As misericórdias de Deus se renovam — e as nossas também podem.",
    oracao: "Pai fiel, obrigado por recomeços. Que cada manhã seja um capítulo novo no livro do nosso casamento. Ajuda-nos a deixar para trás mágoas e a acordar com disposição de amar melhor do que no dia anterior. Amém.",
    desafio: "Antes de dormir, perdoe mentalmente qualquer pequena coisa do dia. Acorde amanhã com o coração limpo."
  },
  {
    titulo: "Firmeza nos Valores",
    versiculo: "Permanecei firmes, inabaláveis, e sempre abundantes na obra do Senhor.",
    referencia: "1 Coríntios 15:58",
    reflexao: "Num mundo que relativiza tudo, os casais cristãos são chamados a ser firmes nos valores que Deus estabeleceu. Isso não é rigidez — é identidade. Saber quem vocês são e no que acreditam protege o casamento de influências que desgastam.",
    oracao: "Deus, que sejamos firmes nos valores que Tu nos ensinaste, mesmo quando a cultura diz o contrário. Que a nossa família seja marcada por caráter, integridade e fé inabalável. Amém.",
    desafio: "Listem três valores centrais que vocês querem que caracterizem o seu casamento e família. Conversem sobre como vivê-los."
  },
  {
    titulo: "O Gozo da Intimidade",
    versiculo: "Que ele me beije com os beijos de sua boca! Porque melhor é o teu amor do que o vinho.",
    referencia: "Cânticos 1:2",
    reflexao: "Deus criou a intimidade conjugal como dádiva, não como tabu. O Cântico dos Cânticos celebra com poesia o desejo, o prazer e a entrega mútua. A intimidade física saudável fortalece a conexão emocional e espiritual do casal.",
    oracao: "Senhor criador, obrigado pelo dom da intimidade. Que a nossa vida íntima seja celebrada, cultivada e protegida. Que seja espaço de conexão verdadeira — não de obrigação, mas de desejo e alegria. Amém.",
    desafio: "Conversem sobre o que faz a vida íntima de vocês mais especial e o que poderiam fazer para cultivá-la ainda mais."
  },
  {
    titulo: "Proteger o Tempo Juntos",
    versiculo: "Eis que juntos aproveitem o tempo, remindo-o, porque os dias são maus.",
    referencia: "Efésios 5:16",
    reflexao: "O tempo é o recurso mais limitado que temos. O casamento precisa de tempo intencional — não apenas coexistência sob o mesmo teto, mas momentos reais de conexão. Guardar tempo para o cônjuge é declarar que ele/ela é prioridade.",
    oracao: "Pai, ajuda-nos a ser bons administradores do nosso tempo. Que não deixemos a agitada rotina roubar a nossa conexão. Dá-nos sabedoria para criar espaços de qualidade juntos, com consistência e alegria. Amém.",
    desafio: "Olhem para a agenda desta semana e bloqueiem um horário só para vocês dois. Tratem como compromisso sagrado."
  },
  {
    titulo: "O Cuidado com as Palavras",
    versiculo: "A morte e a vida estão no poder da língua; os que a cultivam comerão do seu fruto.",
    referencia: "Provérbios 18:21",
    reflexao: "Palavras ditas em raiva podem demorar anos para ser esquecidas. Palavras ditas com amor podem mudar o rumo de uma vida. Cada conversa com o cônjuge é uma oportunidade de dar vida ou de tirar. Escolha dar vida.",
    oracao: "Deus, sê o filtro das nossas palavras. Que antes de falar, pensemos: isso vai edificar ou ferir? Que as palavras do nosso lar sejam instrumentos de vida, de esperança e de amor. Amém.",
    desafio: "Por hoje, substitua qualquer crítica por uma observação gentil. Em vez de 'você sempre faz isso', tente 'quando acontece X, eu sinto Y'."
  },
  {
    titulo: "Compaixão em Ação",
    versiculo: "Revesti-vos, pois, como eleitos de Deus, santos e amados, de entranhas de misericórdia, de bondade, de humildade, de mansidão, de longanimidade.",
    referencia: "Colossenses 3:12",
    reflexao: "Compaixão é ver a dor do cônjuge e mover-se em direção a ela, não para longe. É perguntar 'como você está?' e realmente querer ouvir. É notar quando o outro está sobrecarregado e oferecer ajuda antes de ser pedida.",
    oracao: "Senhor compassivo, que Te moveste em direção à nossa dor, ensina-nos a ter compaixão um pelo outro. Que nos movamos para perto quando o outro está difícil de amar. Que o amor seja mais forte que qualquer mau humor. Amém.",
    desafio: "Hoje, observe como o cônjuge está de verdade. Pergunte com interesse genuíno e ofereça algo concreto para ajudar."
  },
  {
    titulo: "Bendito Legado",
    versiculo: "Os filhos dos filhos são a coroa dos velhos, e a glória dos filhos são seus pais.",
    referencia: "Provérbios 17:6",
    reflexao: "O amor que um casal constrói não termina neles — se espalha pelas gerações. O modo como vocês se amam está ensinando filhos, sobrinhos, e a próxima geração o que é um relacionamento saudável. Vocês estão construindo um legado.",
    oracao: "Deus das gerações, que o nosso casamento deixe um legado de amor, fé e caráter para aqueles que virão depois de nós. Que a nossa história inspire outros a amarem com coragem e comprometimento. Amém.",
    desafio: "Conversem sobre que legado querem deixar como casal — para filhos, sobrinhos, amigos próximos. Escrevam uma frase."
  },
  {
    titulo: "A Oração que Tudo Muda",
    versiculo: "Orai sem cessar.",
    referencia: "1 Tessalonicenses 5:17",
    reflexao: "Orar sem cessar não significa ficar de joelhos o dia todo — significa manter o canal com Deus aberto em todo momento. Para o casal, isso se traduz em uma atitude de dependência constante de Deus em todas as decisões, conversas e desafios.",
    oracao: "Senhor, que a nossa vida de casal seja marcada pela oração. Que Te consultemos antes das grandes decisões e também nas pequenas. Que sejamos um casal que depende de Ti, não apenas nos momentos de crise, mas todos os dias. Amém.",
    desafio: "Orem juntos agora, um de cada vez, de forma espontânea. Sem protocolo — apenas conversa honesta com Deus."
  },
  {
    titulo: "Valorizar o Diferente",
    versiculo: "Ora, há diversidade de dons, mas o Espírito é o mesmo.",
    referencia: "1 Coríntios 12:4",
    reflexao: "Seu cônjuge tem dons, perspectivas e formas de ver o mundo diferentes das suas. Isso é riqueza, não ameaça. Quando você valoriza o que o outro traz — em vez de tentar mudá-lo para ser como você —, o casal se torna mais completo e sábio.",
    oracao: "Espírito Santo, que distribuíste os dons com sabedoria, ajuda-nos a valorizar os dons um do outro. Que não tentemos nos moldar mutuamente à nossa imagem, mas que nos admiremos como Tu nos criaste. Amém.",
    desafio: "Diga ao cônjuge: 'Uma coisa em que eu te admiro e que não sou bom/boa é...' Seja específico e genuíno."
  },
  {
    titulo: "Vitória sobre o Desânimo",
    versiculo: "Não nos cansemos de fazer o bem, porque a seu tempo ceifaremos, se não esmorecermos.",
    referencia: "Gálatas 6:9",
    reflexao: "Há fases no casamento em que parece que o esforço não produz fruto. As conversas não melhoram, os conflitos se repetem, o cansaço pesa. Para esses momentos, Deus promete: não desistam, a colheita vem. Continue semeando amor.",
    oracao: "Deus, nos dias em que queremos desistir, sê a nossa força. Lembra-nos das promessas que fizemos e do propósito que nos une. Que o desânimo não seja o fim da história, mas o preâmbulo para uma nova fase. Amém.",
    desafio: "Conversem sobre uma fase difícil que já passaram como casal. O que aprenderam? Como isso os tornou mais fortes?"
  },
  {
    titulo: "O Amor em Ação",
    versiculo: "Filhinhos, não amemos de palavra nem de língua, mas em ação e em verdade.",
    referencia: "1 João 3:18",
    reflexao: "É fácil dizer 'eu te amo'. O desafio é demonstrá-lo nas atitudes cotidianas — lavar a louça quando não é sua vez, escutar quando está cansado, priorizar o cônjuge quando há concorrência de tempo. O amor em ação fala mais alto do que qualquer declaração.",
    oracao: "Pai, que o nosso amor seja prático e visível. Que as nossas ações confirmem as nossas palavras. Que o 'eu te amo' que dizemos seja verdadeiro o suficiente para se traduzir em escolhas diárias. Amém.",
    desafio: "Hoje, expresse amor ao cônjuge por meio de um ato de serviço — sem falar, apenas agir."
  },
  {
    titulo: "Crescer Junto",
    versiculo: "Antes, seguindo a verdade em amor, cresçamos em tudo naquele que é a cabeça, Cristo.",
    referencia: "Efésios 4:15",
    reflexao: "O propósito do casamento não é apenas a felicidade — é a santidade. Deus usa o cônjuge como Seu instrumento para nos moldar, nos desafiar e nos fazer crescer. Os casais que crescem juntos em Cristo são os mais resilientes.",
    oracao: "Senhor, que o nosso casamento seja uma escola de caráter. Que usemos as nossas diferenças como oportunidade de crescimento. Que sejamos cada dia mais parecidos com Cristo — individualmente e como casal. Amém.",
    desafio: "Cada um compartilhe uma área em que está crescendo espiritualmente. Como o cônjuge pode apoiar esse crescimento?"
  },
  {
    titulo: "Onde Quer que Vás",
    versiculo: "Onde quer que tu vás, irei; onde quer que tu te alojes, alojar-me-ei; o teu povo será o meu povo, e o teu Deus será o meu Deus.",
    referencia: "Rute 1:16",
    reflexao: "A declaração de Rute a Noemi é um dos textos mais belos sobre comprometimento que existem. No casamento, esse compromisso se chama fidelidade — de estar, de ficar, de não partir. É amor que escolhe, não amor que apenas sente.",
    oracao: "Deus, que o amor que nos une seja do tipo que fica. Que na saúde e na doença, na alegria e na tristeza, na fartura e na escassez, nos escolhamos todos os dias. Que esse comprometimento seja uma pedra angular do nosso lar. Amém.",
    desafio: "Olhe nos olhos do cônjuge e diga, com suas palavras, por que escolheu e continua escolhendo ele/ela."
  },
  {
    titulo: "Bênção para Abençoar",
    versiculo: "Abençoar-te-ei... e serás uma bênção.",
    referencia: "Gênesis 12:2",
    reflexao: "Deus abençoa para que a bênção se propague. O casal abençoado tem a responsabilidade de ser canais de bênção — para a família ampliada, para a comunidade, para a igreja. Um casamento com propósito extravasa as paredes de casa.",
    oracao: "Pai, obrigado pelas bênçãos que tens derramado sobre nós. Que não sejamos reservatórios que acumulam, mas rios que fluem. Que abençoemos nossos filhos, amigos e todos os que Puseres em nosso caminho. Amém.",
    desafio: "Como casal, sirvam alguém fora de casa esta semana — um vizinho, um familiar, alguém da igreja. Façam algo concreto juntos."
  },
  {
    titulo: "Falar com Graça",
    versiculo: "Que a vossa palavra seja sempre agradável, temperada com sal, para que saibais como deveis responder a cada um.",
    referencia: "Colossenses 4:6",
    reflexao: "A graciosidade na fala é uma habilidade que se pratica. Especialmente no casamento, onde a familiaridade pode levar à grosseria inconsciente, cultivar o tom gentil, o pedido com carinho e a resposta paciente transforma a atmosfera do lar.",
    oracao: "Senhor, afina a nossa voz. Que as nossas palavras tenham graça — tempero que torna as conversas saborosas, não amargas. Que falemos um com o outro com a gentileza que reservamos para os estranhos, e ainda mais. Amém.",
    desafio: "Preste atenção no tom com que fala hoje. Sempre que for responder com rispidez, faça uma pausa, respire, e reformule."
  },
  {
    titulo: "Liberdade para Ser",
    versiculo: "Para a liberdade foi que Cristo nos libertou.",
    referencia: "Gálatas 5:1",
    reflexao: "Um casamento saudável não aprisiona — liberta. Ele cria um espaço seguro onde cada um pode ser autenticamente quem é, sem máscaras ou performances. Quando amamos o cônjuge como ele/ela realmente é — não como gostaríamos que fosse —, liberamos e somos libertados.",
    oracao: "Senhor que nos libertastes, que o nosso casamento seja um espaço de liberdade. Que não nos tentemos mudar mutuamente, mas que nos aceitemos como Deus nos criou — com amor, paciência e maravilha. Amém.",
    desafio: "Pergunte ao cônjuge: 'Tem algum aspecto seu que sente que não pode expressar em casa?' Ouça sem defender, apenas receba."
  },
  {
    titulo: "Humildade Que Une",
    versiculo: "A sabedoria que vem do alto é, em primeiro lugar, pura; depois, pacífica, amável, tratável, cheia de misericórdia e de bons frutos, imparcial e sincera.",
    referencia: "Tiago 3:17",
    reflexao: "A humildade é a cola do casamento. Sem ela, o orgulho cria muros que nenhuma conversa consegue derrubar. Com ela, podemos pedir desculpa mesmo quando não fomos os únicos errados, e ouvir a crítica do cônjuge como oportunidade de crescer.",
    oracao: "Pai, tira de nós o orgulho que destrói e coloca a humildade que restaura. Que possamos dizer 'errei' com facilidade, receber correção com abertura, e ceder com alegria quando necessário. Amém.",
    desafio: "É há algo pelo qual você deve pedir desculpa ao cônjuge — mesmo que pareça pequeno? Faça isso hoje, com sinceridade."
  },
  {
    titulo: "A Recompensa da Perseverança",
    versiculo: "Porque a vossa perseverança é necessária para que, tendo cumprido a vontade de Deus, alcanceis a promessa.",
    referencia: "Hebreus 10:36",
    reflexao: "O casamento não é uma prova de 100 metros — é uma maratona. Os momentos mais difíceis não são sinais de que erraram de parceiro, mas de que há algo precioso para ser conquistado através da perseverança. Cada crise superada juntos deposita ouro no banco do casamento.",
    oracao: "Deus, dá-nos coragem de perseverar. Que não desistamos nos momentos difíceis, mas que enxerguemos além da tempestade. Que cada fase superada juntos nos torne mais resilientes e mais unidos. Amém.",
    desafio: "Celebrem juntos algo difícil que já superaram. Agradeçam a Deus por ter passado por isso juntos."
  },
  {
    titulo: "A Harmonia das Diferenças",
    versiculo: "Assim como um corpo tem muitos membros, mas todos esses membros formam um só corpo, assim é Cristo.",
    referencia: "1 Coríntios 12:12",
    reflexao: "Você e seu cônjuge são como membros diferentes de um mesmo corpo. Cada um tem uma função e um jeito próprio de operar. Não é preciso ser igual para ser um — é preciso respeitar e valorizar as diferenças e deixá-las se complementar.",
    oracao: "Senhor, que sejamos sábios o suficiente para entender que não precisamos ser iguais para sermos um. Que as nossas diferenças formem uma bela harmonia, como instrumentos diferentes criando uma mesma música. Amém.",
    desafio: "Identifiquem como as diferenças de vocês se complementam no dia a dia. Quais qualidades do outro suprem onde você é mais fraco?"
  },
  {
    titulo: "Alegria no Serviço",
    versiculo: "Pois o Filho do Homem não veio para ser servido, mas para servir.",
    referencia: "Marcos 10:45",
    reflexao: "Jesus — o maior de todos — se fez servo. No casamento, a liderança mais poderosa se expressa em serviço. Quando os dois servem com alegria, sem calcular quem faz mais, o lar se torna um reflexo do reino de Deus.",
    oracao: "Jesus servo, ensina-nos o Teu coração. Que encontremos prazer genuíno em servir um ao outro, e que nenhum de nós se sinta acima de nenhuma tarefa quando se trata de cuidar do nosso lar e do nosso cônjuge. Amém.",
    desafio: "Hoje, reveze as funções habituais — cada um faz algo que normalmente é tarefa do outro."
  },
  {
    titulo: "Cuidar do Eu para Cuidar do Nós",
    versiculo: "Ou não sabeis que o vosso corpo é templo do Espírito Santo?",
    referencia: "1 Coríntios 6:19",
    reflexao: "Para amar bem o cônjuge, é preciso estar bem. O autocuidado não é egoísmo — é responsabilidade. Descansar, cuidar da saúde, ter tempo com Deus sozinho são práticas que tornam você uma versão melhor de si mesmo para a relação.",
    oracao: "Pai, ensina-nos a cuidar de nós mesmos como templos do Espírito. Que não nos negligenciemos a ponto de não ter o que dar ao cônjuge. Que nos apoiemos mutuamente no autocuidado. Amém.",
    desafio: "Conversem sobre como cada um está cuidando de si mesmo — emocionalmente, fisicamente, espiritualmente. O que pode melhorar?"
  },
  {
    titulo: "Confiando em Deus com o Futuro",
    versiculo: "Entrega o teu caminho ao Senhor, confia nele, e ele agirá.",
    referencia: "Salmos 37:5",
    reflexao: "Há decisões grandes no horizonte de todo casal — filhos, carreira, moradia, ministério. Quando entregamos o caminho a Deus, não estamos sendo passivos — estamos reconhecendo que Ele vê o todo e nós apenas vemos uma parte. É a confiança mais inteligente que existe.",
    oracao: "Senhor, entregamos nosso caminho em Tuas mãos. Os nossos planos, sonhos e incertezas — tudo pertence a Ti. Guia-nos com clareza e paz enquanto caminhamos juntos. Amém.",
    desafio: "Há alguma decisão pendente no casamento? Orem juntos entregando especificamente essa decisão a Deus."
  },
  {
    titulo: "Ser Visto",
    versiculo: "Conheceis, pois, a prova que ele deu de si mesmo, servindo comigo no evangelho como filho serve ao pai.",
    referencia: "Filipenses 2:22",
    reflexao: "Ser realmente visto pelo cônjuge — com seus medos, falhas, sonhos e contradições — e ainda assim amado, é uma das experiências mais profundas da existência humana. Crie espaço para que o cônjuge se revele sem medo de julgamento.",
    oracao: "Deus que me conheces completamente e ainda assim me amas, faz de mim um cônjuge que conhece e ama da mesma forma. Que o nosso casamento seja o lugar mais seguro do mundo para sermos nós mesmos. Amém.",
    desafio: "Compartilhe algo com o cônjuge que normalmente guarda para si — um medo, uma insegurança, um sonho escondido."
  },
  {
    titulo: "Guardar o Domingo Juntos",
    versiculo: "Não deixemos de nos reunir em assembleia, como é costume de alguns, antes exortemo-nos uns aos outros.",
    referencia: "Hebreus 10:25",
    reflexao: "Participar juntos da vida da comunidade de fé é um ato de fortalecimento do casamento. A adoração compartilhada, os amigos da fé, o serviço conjunto — tudo isso cria camadas de experiências comuns que aprofundam a conexão do casal.",
    oracao: "Senhor, que não abandonemos a nossa assembléia. Que encontremos alegria em adorar juntos, servir juntos e crescer junto a outros que caminham na fé. Que a nossa família seja ativa e presente. Amém.",
    desafio: "Conversem sobre uma forma de se envolverem mais juntos na vida da igreja ou comunidade de fé."
  },
  {
    titulo: "A Arte de Ceder",
    versiculo: "Submetendo-vos uns aos outros no temor de Cristo.",
    referencia: "Efésios 5:21",
    reflexao: "A submissão mútua no casamento não é sobre hierarquia — é sobre preferir o outro. É o marido que abre mão de seu plano pelo bem da família. É a esposa que resiste à insistência em ter razão. É os dois que escolhem o amor acima do ego.",
    oracao: "Jesus, que Te esvaziaste de toda a Tua glória por amor a nós, ensina-nos a ceder por amor. Que o nosso casamento não seja um campo de batalha pelo poder, mas um exemplo de submissão mútua e graciosa. Amém.",
    desafio: "Hoje, numa situação de discordância pequena, deliberadamente ceda. Sem ressentimento, com amor genuíno."
  },
  {
    titulo: "O Poder do Elogio",
    versiculo: "As suas filhas a engrandecem; sim, sua esposa a louva.",
    referencia: "Provérbios 31:28",
    reflexao: "Elogiar o cônjuge não é bajulação — é nutrir. Quando você nota e verbaliza o que admira, o amor fica mais seguro e a confiança cresce. Muitas pessoas saem de casa todos os dias sem ouvir nenhuma palavra positiva do cônjuge — não deixe que isso aconteça no seu lar.",
    oracao: "Senhor, que os elogios fluam naturalmente no nosso lar. Que não deixemos que a familiaridade nos torne negligentes com as palavras de afirmação. Que o cônjuge saiba, todos os dias, o quanto é amado e admirado. Amém.",
    desafio: "Faça três elogios específicos ao cônjuge hoje — não genéricos, mas observações concretas sobre quem ele/ela é."
  },
  {
    titulo: "Disciplina com Amor",
    versiculo: "Porque o Senhor corrige a quem ama, assim como o pai faz com o filho de quem muito gosta.",
    referencia: "Provérbios 3:12",
    reflexao: "A disciplina e o amor coexistem em Deus — e devem coexistir no casamento. Às vezes, amar o cônjuge significa dizer uma verdade difícil, colocar um limite saudável ou não ceder a um comportamento destrutivo. Amor sem verdade é apenas aprovação.",
    oracao: "Pai, ensina-nos a aliar amor e verdade, gentileza e firmeza. Que possamos nos dizer as coisas difíceis com amor, e receber a correção do cônjuge com humildade. Que a verdade nos torne mais livres. Amém.",
    desafio: "Há uma verdade que você tem evitado falar ao cônjuge por medo de magoar? Como pode falar com amor e no momento certo?"
  },
  {
    titulo: "A Presença que Protege",
    versiculo: "O anjo do Senhor acampa ao redor dos que o temem e os livra.",
    referencia: "Salmos 34:7",
    reflexao: "Deus é o protetor do casamento. Em um mundo que constantemente oferece ameaças ao amor conjugal, Ele é o escudo. Isso não nos exime de cuidar e proteger ativamente o relacionamento, mas nos dá a paz de saber que não estamos sozinhos nessa batalha.",
    oracao: "Senhor protetor, guarda o nosso casamento. Protege-nos de tudo que ameaça a nossa aliança — de fora e de dentro de nós mesmos. Que Te busquemos como o guardião do nosso amor. Amém.",
    desafio: "Orem juntos pedindo proteção específica para o casamento — em áreas que sentir que precisam de mais cuidado."
  },
  {
    titulo: "Cuidar do Corpo com Sabedoria",
    versiculo: "O exercício corporal para pouco aproveita, mas a piedade para tudo é proveitosa.",
    referencia: "1 Timóteo 4:8",
    reflexao: "Cuidar da saúde física é um ato de amor pelo cônjuge e pela família. Quando nos cuidamos, garantimos presença e energia para os que amamos. E quando nos encorajamos mutuamente nesse cuidado, fortalecemos o companheirismo.",
    oracao: "Pai, que cuidemos dos nossos corpos como templos Teus. Dá-nos disciplina para os hábitos saudáveis e sabedoria para nos apoiarmos nessa jornada. Que sejamos longevos e saudáveis para aproveitar cada fase da vida juntos. Amém.",
    desafio: "Criem um hábito saudável juntos — uma caminhada semanal, um momento de meditação, uma refeição mais nutritiva."
  },
  {
    titulo: "Enraizados e Fundamentados",
    versiculo: "Para que, arraigados e fundados em amor, sejais plenamente capazes de compreender, com todos os santos, qual a largura, o comprimento, a altura e a profundidade.",
    referencia: "Efésios 3:17-18",
    reflexao: "Quando o amor está radicado em Deus, ele não se abala nas tempestades. As raízes profundas não se veem — mas são o que sustenta a árvore nos vendavais. Um casamento com raízes espirituais profundas atravessa qualquer crise de pé.",
    oracao: "Deus, aprofunda as raízes do nosso amor em Ti. Que a nossa união seja sólida, não porque temos tudo resolvido, mas porque estamos fundamentados em quem Tu és. Que resistamos à qualquer tempestade juntos. Amém.",
    desafio: "Compartilhem um momento em que a fé foi a âncora que manteve o casamento de pé. Agradeçam juntos por isso."
  },
  {
    titulo: "A Mistura do Choro e do Riso",
    versiculo: "Regozijai-vos com os que se regozijam e chorai com os que choram.",
    referencia: "Romanos 12:15",
    reflexao: "O cônjuge que ri nas suas conquistas e chora nas suas dores é um presente inestimável. Estar presente nas emoções do outro — sem minimizar, sem consertar, apenas estar — é uma das expressões mais profundas do amor conjugal.",
    oracao: "Senhor, que sejamos emocionalmente presentes um para o outro. Que celebremos juntos e sofrassemos juntos. Que não tentemos resolver antes de primeiro sentir. Que a nossa empatia seja real e profunda. Amém.",
    desafio: "Pergunte ao cônjuge o que está sentindo nesta semana — sem oferecer solução. Apenas ouça, acolha e esteja presente."
  },
  {
    titulo: "A Benção de Envelhecer Juntos",
    versiculo: "A cabeça grisalha é uma coroa de glória; ela se encontra no caminho da justiça.",
    referencia: "Provérbios 16:31",
    reflexao: "Crescer velho junto é um dos maiores presentes que um casal pode receber. Cada ruga, cada cabelo branco é um capítulo da história que vocês escreveram juntos. Que a perspectiva de envelhecer juntos seja fonte de alegria, não de temor.",
    oracao: "Senhor, que sejamos abençoados com uma longa vida juntos. Que envelheçamos com graça, saúde e amor. Que cada ano acrescente profundidade ao nosso amor e sabedoria à nossa vida. Amém.",
    desafio: "Imaginem juntos: como querem que seja a vida de vocês daqui a 20, 30 anos? O que querem ter vivido, construído, deixado?"
  },
  {
    titulo: "O Valor do Silêncio Compartilhado",
    versiculo: "Melhor é um punhado com descanso do que dois punhados com trabalho e correr atrás do vento.",
    referencia: "Eclesiastes 4:6",
    reflexao: "Saber ficar em silêncio juntos — confortável, sem a necessidade de preencher o espaço com palavras — é um sinal de maturidade relacional. Não é distância, é familiaridade profunda. É sentir que a presença do outro já é suficiente.",
    oracao: "Deus, que possamos descansar na presença um do outro. Que o silêncio entre nós não seja vazio, mas cheio. Que aprendamos a ser presença suficiente um para o outro. Amém.",
    desafio: "Assistam ao pôr do sol, tomem um café ou simplesmente sentem juntos por alguns minutos sem conversa. Apenas existam."
  },
  {
    titulo: "Promessa que Permanece",
    versiculo: "O Senhor é fiel; ele fortalecerá e guardará vocês.",
    referencia: "2 Tessalonicenses 3:3",
    reflexao: "A fidelidade de Deus ao Seu povo é a imagem perfeita da fidelidade conjugal. Ele não desiste quando erramos, não nos abandona nas crises, não viola Sua promessa. É esse amor — incondicional, perseverante, fiel — que somos chamados a refletir no casamento.",
    oracao: "Deus fiel, obrigado por Tua fidelidade que nos sustenta. Que o nosso casamento seja marcado por essa mesma fidelidade — que nos mantenhamos firmes na promessa que fizemos, em todas as estações. Amém.",
    desafio: "Relembrem juntos as promessas que fizeram no casamento. Se não as lembrarem de cor, pesquisem e leiam juntos."
  },
  {
    titulo: "Missão de Casal",
    versiculo: "Ide, portanto, e fazei discípulos de todas as nações.",
    referencia: "Mateus 28:19",
    reflexao: "O casamento não foi feito para se isolar do mundo, mas para impactar o mundo. Há uma missão específica para o casal de vocês — pode ser hospitabilidade, pode ser servir os vizinhos, pode ser ser referência para outros casais. Qual é a missão do seu casal?",
    oracao: "Senhor, revela-nos o propósito missionário do nosso casamento. Que não nos fechemos em nós mesmos, mas que sejamos canais de Teu amor para o mundo ao redor. Que o nosso casamento tenha impacto além das nossas paredes. Amém.",
    desafio: "Conversem sobre como o casamento de vocês pode servir alguém ou alguma causa este mês. Comecem a planejar."
  },
  {
    titulo: "O Cuidado com os Pais",
    versiculo: "Honra a teu pai e a tua mãe, que é o primeiro mandamento com promessa.",
    referencia: "Efésios 6:2",
    reflexao: "Lidar com as famílias de origem é um desafio real no casamento. Honrar pai e mãe não significa obedecer a tudo, mas tratá-los com respeito e amor. E entre o casal, alinhar como cuidar das famílias de ambos é um exercício contínuo de diálogo e equidade.",
    oracao: "Pai, dá-nos sabedoria para honrar nossas famílias de origem sem comprometer a prioridade do nosso casamento. Que honremos nossos pais com amor e com limites saudáveis. Que sejamos bênção para eles e para nós. Amém.",
    desafio: "Conversem sobre como equilibram a atenção às famílias de origem com a prioridade do casamento. Há algo que precisa ser ajustado?"
  },
  {
    titulo: "Amor que Não Guarda Registro",
    versiculo: "O amor não é rancoroso.",
    referencia: "1 Coríntios 13:5",
    reflexao: "Um dos hábitos mais destrutivos no casamento é manter uma lista mental de erros do cônjuge para usar nos momentos de conflito. O amor genuíno não arquiva ofensas para usar como armas. Quando perdoa, realmente apaga.",
    oracao: "Senhor, ajuda-nos a perdoar de verdade — sem guardar registro. Que o nosso perdão seja completo como o Teu. Que não usemos erros passados como armas nos conflitos presentes. Que o nosso amor seja livre de rancor. Amém.",
    desafio: "Existe algo que você 'perdoou' mas ainda guarda? Decida hoje soltá-lo de verdade. Pode ser útil conversar com Deus sobre isso em oração."
  },
  {
    titulo: "O Dom da Hospitalidade",
    versiculo: "Praticai a hospitalidade uns para com os outros, sem murmurar.",
    referencia: "1 Pedro 4:9",
    reflexao: "Um lar hospitaleiro é um ministério. Quando recebemos pessoas com amor, partilhamos a mesa e abrimos as portas, o casamento se expande e impacta vidas. A hospitalidade também se exercita dentro de casa — criando um lar onde o cônjuge sempre se sinta bem-vindo e acolhido.",
    oracao: "Senhor, que o nosso lar seja um lugar de acolhimento. Para nós dois e para todos que chegam até nós. Que a nossa mesa seja um lugar de comunhão e que a nossa porta esteja sempre aberta com alegria. Amém.",
    desafio: "Convidem alguém para jantar ou para um café esta semana. Façam juntos a hospitalidade."
  },
  {
    titulo: "A Beleza do Reconhecimento",
    versiculo: "Dei-vos um exemplo, para que, como eu fiz, vós façais também.",
    referencia: "João 13:15",
    reflexao: "Jesus reconheceu o serviço como linguagem de amor. No casamento, reconhecer o esforço do cônjuge — verbalizar, agradecer, notar — é tão importante quanto o próprio serviço. 'Obrigado por fazer isso' pode transformar a tarde de alguém.",
    oracao: "Jesus, que serviste e ensinaste a servir, ensina-nos também a reconhecer o serviço do outro. Que nunca tratemos como garantido o que o cônjuge faz por nós. Que a gratidão seja constante e genuína. Amém.",
    desafio: "Liste mentalmente três coisas que o cônjuge faz regularmente que você raramente menciona. Agradeça por cada uma hoje."
  },
  {
    titulo: "Fronteiras que Protegem",
    versiculo: "Acima de tudo, guarda o teu coração, pois dele procedem as fontes da vida.",
    referencia: "Provérbios 4:23",
    reflexao: "Limites saudáveis não são muros que afastam — são cercas que protegem o que é precioso. Casais que estabelecem limites claros com trabalho, amigos, redes sociais e família de origem protegem o espaço sagrado do relacionamento.",
    oracao: "Senhor, dá-nos discernimento para estabelecer limites saudáveis que protejam o nosso casamento. Que não sejamos ingênuos com as ameaças, mas também não vivamos com medo. Que a sabedoria guie as nossas fronteiras. Amém.",
    desafio: "Conversem sobre uma fronteira que precisa ser estabelecida ou reforçada para proteger a qualidade do casamento de vocês."
  },
  {
    titulo: "Graça para os Dias Ruins",
    versiculo: "Basta-te a minha graça, porque o meu poder se aperfeiçoa na fraqueza.",
    referencia: "2 Coríntios 12:9",
    reflexao: "Haverá dias em que você simplesmente não vai estar no seu melhor. Dias de mau humor, de cansaço extremo, de fé fraca. Nesses dias, Deus oferece graça — e o cônjuge pode ser o instrumento dessa graça. Dê e receba graça generosamente.",
    oracao: "Pai gracioso, que nos dias ruins, possamos receber a Tua graça e estendê-la ao cônjuge. Que não nos cobremos demais nem cobremos o outro demais. Que a graça seja o tom do nosso casamento. Amém.",
    desafio: "Da próxima vez que o cônjuge estiver num dia difícil, em vez de reagir, pergunte: 'O que posso fazer por você agora?'"
  },
  {
    titulo: "A Dança da Vida Juntos",
    versiculo: "Há tempo de chorar, e tempo de rir; tempo de prantear, e tempo de dançar.",
    referencia: "Eclesiastes 3:4",
    reflexao: "A vida tem ritmos variados e o casamento dança em todos eles. Nas fases de choro, se apoiam. Nas fases de dança, celebram juntos. Saber identificar em qual ritmo o casal está e responder adequadamente é uma habilidade que se desenvolve com atenção e amor.",
    oracao: "Deus de todos os tempos, obrigado por cada estação da nossa vida. Ajuda-nos a dançar juntos em todas elas — nas alegres e nas tristes. Que o nosso ritmo seja sempre um, mesmo que a música mude. Amém.",
    desafio: "Literalmente: dancem juntos hoje. Coloquem uma música que vocês gostam e dançam — sem desculpas."
  },
  {
    titulo: "A Força que Não Falha",
    versiculo: "Posso tudo naquele que me fortalece.",
    referencia: "Filipenses 4:13",
    reflexao: "Paulo escreveu isso do fundo de uma prisão. Se ele conseguia 'tudo' naquele contexto, o casal pode atravessar qualquer crise pela força de Cristo. A limitação humana não é o fim — é o lugar onde a força de Deus se manifesta com mais evidência.",
    oracao: "Cristo fortalecedor, quando chegamos ao fim das nossas forças, lembramos que as Tuas nunca acabam. Seja a nossa força nas crises do casamento. Que possamos tudo naquilo que Tu nos capacitas a fazer juntos. Amém.",
    desafio: "Qual é o maior desafio que o casamento de vocês enfrenta agora? Orem especificamente sobre ele, pedindo a força de Cristo."
  },
  {
    titulo: "O Coração do Perdão",
    versiculo: "Suportando-vos uns aos outros e perdoando-vos mutuamente, se algum tiver queixa contra outro; assim como Cristo vos perdoou, assim também fazei vós.",
    referencia: "Colossenses 3:13",
    reflexao: "Perdoar como Cristo perdoou é o padrão mais alto que existe. Ele perdoou não porque merecíamos, mas porque escolheu amar. No casamento, quando chegamos ao limite do nosso perdão humano, podemos pedir a Deus emprestado o Seu perdão divino.",
    oracao: "Senhor, o Teu perdão por nós é o modelo do nosso perdão mútuo. Quando não conseguirmos perdoar com as nossas forças, enche-nos com a Tua capacidade. Que o perdão seja uma prática regular e genuína no nosso casamento. Amém.",
    desafio: "Se houver algo não resolvido entre vocês, hoje é o dia de abrí-lo com amor. Peça perdão ou estenda o perdão que ainda não deu."
  },
  {
    titulo: "Comunidade que Sustenta",
    versiculo: "Exortai-vos uns aos outros e edificai-vos uns aos outros.",
    referencia: "1 Tessalonicenses 5:11",
    reflexao: "Nenhum casal é uma ilha. Ter amigos que sustentam o casamento — pessoas que rezam por vocês, que caminham junto, que falam a verdade com amor — é uma proteção enorme. Invista nas amizades que edificam o seu casamento.",
    oracao: "Senhor, coloca ao redor do nosso casamento pessoas que o sustentam e edificam. Que não andemos isolados, mas cercados de uma comunidade de fé que nos fortalece. Dá-nos sabedoria para escolher e cultivar essas relações. Amém.",
    desafio: "Identifiquem um casal ou amigos que edificam o casamento de vocês. Entre em contato com eles esta semana com gratidão."
  },
  {
    titulo: "Deixar o Passado para Trás",
    versiculo: "Irmãos, eu mesmo não julgo tê-lo alcançado; mas uma coisa faço: esquecendo-me das coisas que ficaram para trás e avançando para as que estão adiante.",
    referencia: "Filipenses 3:13",
    reflexao: "Casamentos saudáveis não vivem de saudade do passado nem de medo do futuro — vivem de propósito no presente. Deixar para trás erros, versões antigas de si mesmos, fases que já passaram é necessário para que o casal continue crescendo.",
    oracao: "Pai, ajuda-nos a soltar o que ficou para trás. Versões antigas de nós mesmos, erros que já foram perdoados, mágoas que já foram curadas. Que avancemos juntos, leves, para tudo que está adiante. Amém.",
    desafio: "Hay algo do passado que ainda ocupa espaço desnecessário no casamento? Conversem sobre como soltá-lo juntos."
  },
  {
    titulo: "Amor Constante",
    versiculo: "O amor nunca falha.",
    referencia: "1 Coríntios 13:8",
    reflexao: "Profecias cessarão, línguas se calarão, conhecimento passará — mas o amor permanece. Ele é o único investimento com retorno eterno. Tudo que você investe em amar o cônjuge bem atravessa o tempo e a morte.",
    oracao: "Deus que és amor, que o amor seja a constante no nosso casamento. Quando tudo mais mudar — as fases, as circunstâncias, os sonhos —, que o amor permaneça. Que possamos olhar para trás e dizer: amamos bem. Amém.",
    desafio: "Diga ao cônjuge, com suas próprias palavras, por que o amor que vocês têm é para sempre. Do coração, sem clichês."
  },
  {
    titulo: "A Beleza da Aliança",
    versiculo: "O arco estará nas nuvens, e o verei, e me lembrarei da aliança perpétua.",
    referencia: "Gênesis 9:16",
    reflexao: "O arco-íris é o símbolo da aliança de Deus com a humanidade — um lembrete visual do compromisso divino. O casamento é a aliança mais íntima que existe entre dois humanos. Cada anel, cada foto, cada memória compartilhada é um arco-íris que lembra: 'escolhemos isso juntos'.",
    oracao: "Deus das alianças, obrigado por ser o modelo da fidelidade. Que a nossa aliança seja honrada, cuidada e celebrada. Que nunca a tratemos como trivial, mas como sagrada. Amém.",
    desafio: "Criem juntos um 'marco' de aliança — uma frase, um objeto ou um ritual que simbolize o compromisso de vocês. Usem no dia a dia."
  },
  {
    titulo: "Fé que Avança",
    versiculo: "A fé é a certeza de coisas que se esperam e a convicção de coisas que não se veem.",
    referencia: "Hebreus 11:1",
    reflexao: "Viver por fé como casal significa continuar investindo no casamento mesmo quando não se vê resultado imediato. Significa continuar orando pelos sonhos mesmo quando demoram. Significa continuar amando mesmo quando o retorno parece distante.",
    oracao: "Deus, aumenta a nossa fé. Como casal, queremos avançar mesmo quando não vemos claramente. Que a incerteza não nos paralise, mas que a fé nos mova. Que confiemos em Ti com cada capítulo da nossa história. Amém.",
    desafio: "Cada um compartilhe um passo de fé que sente que Deus está chamando o casal a dar. Orem sobre isso juntos."
  },
  {
    titulo: "Deixar um Legado de Amor",
    versiculo: "O bom deixa herança para os filhos de seus filhos.",
    referencia: "Provérbios 13:22",
    reflexao: "O maior legado que um casal pode deixar não é financeiro — é o modelo de um amor fiel, saudável e cheio de Deus. As gerações que vierem depois de vocês serão moldadas, em grande parte, pelo amor que viram em casa.",
    oracao: "Senhor, que o nosso casamento seja um legado. Que filhos, netos e todas as gerações que vierem encontrem nas nossas histórias a evidência de que o amor fiel é possível e que Deus é real. Amém.",
    desafio: "Escrevam uma carta para os filhos ou sobrinhos — ou para o casal que serão daqui a 10 anos. Guardem e abram no aniversário."
  },
  {
    titulo: "Guardas do Amor",
    versiculo: "Guardai-vos na aliança de amor com a mulher da tua mocidade.",
    referencia: "Malaquias 2:15",
    reflexao: "'Guardar o amor' é um ato ativo, não passivo. Significa proteger a exclusividade da relação, cuidar da qualidade do tempo juntos, manter a comunicação viva e cultivar o desejo. O amor não se guarda sozinho — precisamos ser vigilantes.",
    oracao: "Deus, que nos destes um ao outro, ajuda-nos a ser guardiões do amor que nos confiaste. Que não sejamos negligentes ou descuidados com o tesouro que é o nosso casamento. Que o guardemos com zelo e alegria. Amém.",
    desafio: "Identifiquem juntos: o que é a maior ameaça ao casamento de vocês agora? E o que vão fazer, concretamente, para protegê-lo?"
  }
];

// Preenche até 365 se necessário, repetindo ciclicamente
while (DEVOCIONAIS.length < 365) {
  const idx = DEVOCIONAIS.length % 100;
  const base = DEVOCIONAIS[idx];
  DEVOCIONAIS.push({
    titulo: base.titulo + " — Reflexão Continuada",
    versiculo: base.versiculo,
    referencia: base.referencia,
    reflexao: "Voltamos a meditar nesta verdade com novos olhos. " + base.reflexao,
    oracao: base.oracao,
    desafio: "Revisitem este desafio com mais profundidade: " + base.desafio
  });
}