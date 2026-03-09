// variáveis
const num = document.querySelector('#num'); // num escrito
const desc = document.querySelector('#desc') // descrição
const pokemonimg = document.querySelector('#pokemonImg'); // imagem do pokémon
const txtnum = document.querySelector('input#txtnum'); //txt caixa de pesquisa
const nome = document.querySelector('#nome')


// listas
const pokedex = [
  "bulbasaur","ivysaur","venusaur",
  "charmander","charmeleon","charizard",
  "squirtle","wartortle","blastoise",
  "caterpie","metapod","butterfree",
  "weedle","kakuna","beedrill",
  "pidgey","pidgeotto","pidgeot",
  "rattata","raticate",
  "spearow","fearow",
  "ekans","arbok",
  "pikachu","raichu",
  "sandshrew","sandslash",
  "nidoran-f","nidorina","nidoqueen",
  "nidoran-m","nidorino","nidoking",
  "clefairy","clefable",
  "vulpix","ninetales",
  "jigglypuff","wigglytuff",
  "zubat","golbat",
  "oddish","gloom","vileplume",
  "paras","parasect",
  "venonat","venomoth",
  "diglett","dugtrio",
  "meowth","persian",
  "psyduck","golduck",
  "mankey","primeape",
  "growlithe","arcanine",
  "poliwag","poliwhirl","poliwrath",
  "abra","kadabra","alakazam",
  "machop","machoke","machamp",
  "bellsprout","weepinbell","victreebel",
  "tentacool","tentacruel",
  "geodude","graveler","golem",
  "ponyta","rapidash",
  "slowpoke","slowbro",
  "magnemite","magneton",
  "farfetchd",
  "doduo","dodrio",
  "seel","dewgong",
  "grimer","muk",
  "shellder","cloyster",
  "gastly","haunter","gengar",
  "onix",
  "drowzee","hypno",
  "krabby","kingler",
  "voltorb","electrode",
  "exeggcute","exeggutor",
  "cubone","marowak",
  "hitmonlee","hitmonchan",
  "lickitung",
  "koffing","weezing",
  "rhyhorn","rhydon",
  "chansey",
  "tangela",
  "kangaskhan",
  "horsea","seadra",
  "goldeen","seaking",
  "staryu","starmie",
  "mr-mime",
  "scyther",
  "jynx",
  "electabuzz",
  "magmar",
  "pinsir",
  "tauros",
  "magikarp","gyarados",
  "lapras",
  "ditto",
  "eevee","vaporeon","jolteon","flareon",
  "porygon",
  "omanyte","omastar",
  "kabuto","kabutops",
  "aerodactyl",
  "snorlax",
  "articuno","zapdos","moltres",
  "dratini","dragonair","dragonite",
  "mewtwo",
  "mew"
];
const descricoes = [
  "Bulbasaur pode ser visto cochilando sob a luz do sol. Ao absorver os raios solares, a semente em suas costas cresce progressivamente.", // 001
  "Há um bulbo nas costas deste Pokémon. Para suportar seu peso, as pernas e o tronco de Ivysaur tornam-se grossos e fortes.", // 002
  "Existe uma flor grande nas costas de Venusaur. Diz-se que a flor assume cores vivas se receber nutrição e luz solar em abundância.", // 003
  "A chama que queima na ponta de sua cauda é uma indicação de suas emoções. A chama oscila quando Charmander está se divertindo.", // 004
  "Charmeleon persegue seus oponentes usando suas garras afiadas. Se encontrar um inimigo forte, ele se torna agressivo e a chama em sua cauda brilha azul-esbranquiçada.", // 005
  "Ele voa pelo céu em busca de oponentes poderosos. Cospe um fogo tão quente que é capaz de derreter rochas, mas nunca sopra chamas em um adversário mais fraco.", // 006
  "O casco de Squirtle não serve apenas para proteção. Sua forma arredondada e as ranhuras na superfície ajudam a minimizar a resistência na água, permitindo que ele nade em altas velocidades.", // 007
  "É amplamente reconhecido como um símbolo de longevidade. Se o seu casco tiver algas, aquele Wartortle é muito velho.", // 008
  "Blastoise possui canhões de água que brotam de seu casco. Eles são muito precisos e podem disparar jatos de água com força suficiente para perfurar o aço grosso.", // 009
  "Caterpie tem um apetite voraz. Ele pode devorar folhas maiores que seu corpo diante de seus olhos. De suas antenas, libera um odor terrível para repelir inimigos.", // 010
  "O casco que cobre o corpo deste Pokémon é duro como uma placa de aço. Metapod permanece imóvel para que as entranhas macias dentro da casca estejam prontas para a evolução.", // 011
  "Em batalha, ele bate as asas em alta velocidade para liberar poeira altamente tóxica no ar. Suas asas são protegidas por uma camada repelente à água.", // 012
  "Weedle tem um olfato extremamente agudo. Ele é capaz de distinguir seus tipos favoritos de folhas daqueles que não gosta apenas farejando com seu grande nariz vermelho.", // 013
  "Embora seja quase incapaz de se mover, ele pode estender seu ferrão venenoso para atacar intrusos que se aproximam de seu casulo.", // 014
  "Beedrill é extremamente territorial. Ninguém deve jamais se aproximar de seu ninho — por segurança. Se irritados, eles atacarão em um enxame furioso.", // 015
  "Pidgey tem um senso de direção muito agudo. É capaz de retornar infalivelmente ao seu ninho, não importa quão longe ele seja removido de seu ambiente familiar.", // 016
  "As garras de seus pés são muito desenvolvidas. Ele pode carregar presas como Exeggcute para seu ninho a quilômetros de distância.", // 017
  "Ao caçar, Pidgeot voa rente à superfície da água em alta velocidade para capturar presas incautas como Magikarp.", // 018
  "Rattata é extremamente cauteloso. Mesmo quando está dormindo, ele move constantemente as orelhas para ouvir ao redor. Ele pode fazer seu ninho em qualquer lugar.", // 019
  "Seus dentes traseiros crescem continuamente. Para mantê-los desgastados, ele rói pedras e troncos. Pode até roer as paredes de casas de tijolos.", // 020
  "Spearow tem um grito muito alto que pode ser ouvido a um quilômetro de distância. Se seu grito ecoar pela área, é um sinal de que eles estão avisando uns aos outros sobre o perigo.", // 021
  "Fearow é reconhecido pelo seu pescoço longo e bico alongado. Eles são perfeitamente moldados para capturar presas no solo ou na água.", // 022
  "Ekans se enrola em espiral enquanto descansa. Assumir esta posição permite que ele responda rapidamente a uma ameaça de qualquer direção com sua cabeça erguida.", // 023
  "Diz-se que os padrões ferozes em sua barriga variam de região para região. Arbok usa esses padrões para intimidar os adversários antes de atacá-los.", // 024
  "Sempre que Pikachu encontra algo novo, ele o atinge com uma descarga elétrica. Se você encontrar uma fruta queimada, é sinal de que este Pokémon perdeu o controle de sua energia.", // 025
  "Se as bolsas elétricas em suas bochechas ficarem excessivamente carregadas, Raichu planta sua cauda no chão para liberar eletricidade, causando marcas de queimadura na terra.", // 026
  "O corpo de Sandshrew é configurado para absorver água sem desperdício, permitindo que ele sobreviva em desertos áridos. Ele se enrola para se proteger de ataques.", // 027
  "Sandslash é coberto por espinhos duros que são extensões endurecidas de sua pele. Ele usa esses espinhos para se proteger e para atacar inimigos enquanto rola.", // 028
  "Embora pequena, suas glândulas venenosas tornam Nidoran fêmea perigosa. O chifre em sua cabeça libera uma toxina potente se ela se sentir ameaçada.", // 029
  "Quando está com sua família ou amigos, Nidorina retrai seus espinhos para não ferir ninguém. Ela fica nervosa rapidamente se separada do grupo.", // 030
  "O corpo de Nidoqueen é coberto por escamas extremamente duras. Ela usa seu corpo robusto para bloquear ataques e proteger seus filhotes com a própria vida.", // 031
  "Suas orelhas grandes funcionam como sensores. O chifre na cabeça de Nidoran macho libera um veneno poderoso ao menor toque no oponente.", // 032
  "Nidorino tem um temperamento violento. Ele gosta de exibir sua força e usa seu chifre, que é mais duro que diamante, para perfurar rochas.", // 033
  "Nidoking usa sua cauda poderosa em combate para esmagar a espinha da presa. Uma vez que ele entra em fúria, é quase impossível detê-lo.", // 034
  "Com seu comportamento adorável e amigável, Clefairy é um Pokémon muito popular. Acredita-se que eles vivam em montanhas remotas e dancem em noites de lua cheia.", // 035
  "Clefable se move saltando suavemente, como se estivesse voando. Seus passos leves permitem que ele caminhe sobre a água. É um Pokémon muito tímido e raro de se ver.", // 036
  "Enquanto é jovem, Vulpix tem apenas uma cauda branca. À medida que cresce e recebe amor de seu treinador, a cauda se divide em seis belas pontas avermelhadas.", // 037
  "Diz-se que cada uma de suas nove caudas detém um poder místico diferente. Ninetales é extremamente inteligente e pode viver por mil anos.", // 038
  "Quando este Pokémon canta, ele nunca para para respirar. Se o inimigo não dormir logo, Jigglypuff continuará cantando até ficar sem ar.", // 039
  "Wigglytuff tem uma pele fina, mas extremamente elástica. Ele pode inflar seu corpo inspirando ar para intimidar oponentes ou apenas para flutuar suavemente.", // 040
  "Zubat não possui olhos, então ele emite ondas ultrassônicas pela boca para verificar o ambiente. Isso permite que ele voe com precisão em cavernas escuras.", // 041
  "Golat adora beber o sangue de criaturas vivas. Ele é ativo na escuridão da noite e ataca silenciosamente pelas costas para morder o pescoço da presa.", // 042
  "Durante o dia, Oddish se enterra no solo para absorver nutrientes usando o corpo inteiro. Diz-se que quanto mais fértil o solo, mais brilhantes suas folhas ficam.", // 043
  "O que parece ser baba saindo de sua boca é, na verdade, um néctar doce que ele usa para atrair presas. No entanto, o cheiro é terrível para os humanos.", // 044
  "Vileplume tem as maiores pétalas do mundo. Ele as usa para atrair presas e então espalha esporos tóxicos para imobilizá-las antes de se alimentar.", // 045
  "Paras nasce com dois cogumelos nas costas chamados tochukaso. À medida que o Pokémon cresce, os cogumelos se alimentam dos nutrientes do hospedeiro.", // 046
  "O cogumelo nas costas de Parasect assumiu o controle do corpo do inseto. Ele prefere lugares úmidos e escuros, onde o fungo pode crescer melhor.", // 047
  "Diz-se que os olhos de Venonat funcionam como radares. Eles são compostos por milhares de lentes minúsculas que permitem que ele veja claramente no escuro.", // 048
  "As escamas em suas asas liberam diferentes tipos de pó dependendo da cor. Escamas escuras são venenosas, enquanto escamas claras causam paralisia.", // 049
  "Diglett vive a poucos centímetros abaixo do solo. Ele deixa um rastro de terra remexida por onde passa e é muito sensível à luz solar.", // 050
  "Dugtrio são, na verdade, trigêmeos que surgiram de um único corpo. Eles cooperam perfeitamente para cavar túneis a profundidades de até 100 quilômetros.", // 051
  "Meowth adora objetos brilhantes e redondos. Ele vaga pelas ruas à noite para coletar moedas perdidas e outras bugigangas reluzentes para seu tesouro.", // 052
  "Persian tem um temperamento muito instável. Ele pode ser dócil em um momento e atacar com garras afiadas no próximo sem qualquer aviso.", // 053
  "Psyduck é constantemente atormentado por dores de cabeça. Quando a dor se torna intensa, ele começa a usar poderes psicocinéticos sem querer.", // 054
  "Golduck é um nadador excepcional. Ele é frequentemente visto nadando elegantemente em lagos e rios, sendo confundido com a criatura mítica Kappa.", // 055
  "Mankey vive em colônias nas copas das árvores. Se um deles ficar bravo, todo o bando entra em fúria sem motivo aparente.", // 056
  "Primeape está sempre furioso. Mesmo quando está dormindo, ele pode acordar irritado e começar a perseguir qualquer um que cruze seu caminho.", // 057
  "Growlithe é um Pokémon muito amigável e leal. Ele latirá ferozmente para qualquer intruso para proteger seu território e seu treinador.", // 058
  "Arcanine é admirado por sua beleza e velocidade. Diz-se que ele corre tão rápido que parece estar voando. É considerado um Pokémon lendário na China antiga.", // 059
  "Poliwag tem uma pele muito fina, tanto que é possível ver seus órgãos em espiral através dela. Ele prefere nadar a caminhar devido às suas pernas instáveis.", // 060
  "A superfície do corpo de Poliwhirl está sempre úmida e oleosa com um fluido viscoso. Graças a isso, ele pode facilmente escapar das garras de qualquer inimigo.", // 061
  "Poliwrath tem músculos extremamente desenvolvidos que nunca se cansam. Ele pode atravessar o oceano nadando apenas com o movimento de suas pernas.", // 062
  "Abra dorme dezoito horas por dia. Mesmo dormindo, ele pode sentir a presença de inimigos e se teletransportar para um lugar seguro instantaneamente.", // 063
  "Kadabra emite ondas alfa poderosas que causam dores de cabeça em quem estiver por perto. Ele sempre segura uma colher de prata para amplificar seus poderes psíquicos.", // 064
  "O cérebro de Alakazam nunca para de crescer, tornando sua cabeça muito pesada. Ele usa seus poderes psicocinéticos para sustentar o próprio corpo.", // 065
  "Machop treina constantemente para dominar todos os tipos de artes marciais. Ele pode levantar um Graveler inteiro com apenas um braço.", // 066
  "O corpo de Machoke é tão poderoso que ele usa um cinturão de economia de energia para manter seus músculos sob controle e evitar danos colaterais.", // 067
  "Com seus quatro braços, Machamp pode atacar de ângulos inimagináveis. Ele pode lançar socos em uma velocidade incrível, disparando até 500 por segundo.", // 068
  "Bellsprout prefere ambientes quentes e úmidos. Ele planta seus pés no chão para absorver água, mas se vir uma presa, ataca rapidamente com suas vinhas.", // 069
  "Weepinbell se pendura em galhos de árvores usando o gancho em sua cauda. Se ele se mover enquanto dorme, pode acabar caindo no chão.", // 070
  "Victreebel atrai presas com um aroma doce de mel. Uma vez que a vítima entra em sua boca, é dissolvida instantaneamente por ácidos gástricos potentes.", // 071
  "Tentacool é composto majoritariamente por água. Ele flutua à deriva nas correntes oceânicas e usa seus dois tentáculos venenosos para pescar.", // 072
  "Tentacruel tem 80 tentáculos que podem ser estendidos livremente. Ele imobiliza a presa em uma rede de tentáculos antes de usar seu veneno.", // 073
  "Geodude é comumente encontrado em trilhas de montanha. Como ele se parece com uma pedra, as pessoas frequentemente tropeçam nele sem querer.", // 074
  "Graveler desce montanhas rolando. Ele não se importa com os obstáculos no caminho, esmagando qualquer coisa que impeça seu progresso.", // 075
  "Golem é conhecido por causar terremotos quando rola. Ele troca de pele uma vez por ano, e sua casca velha se quebra e cai no chão.", // 076
  "Ponyta nasce com pernas fracas, mas elas se tornam incrivelmente fortes conforme ele corre para acompanhar seus pais. Sua crina de fogo cresce após o nascimento.", // 077
  "Rapidash é muito competitivo. Se avistar algo movendo-se rápido, ele tentará ultrapassar em uma corrida, atingindo velocidades de até 240 km/h.", // 078
  "Slowpoke é tão lento que leva cinco segundos para sentir dor após ser mordido. Ele passa o dia pescando com sua cauda em rios e lagos.", // 079
  "Slowbro é um Slowpoke que teve um Shellder mordendo sua cauda. O veneno do Shellder flui pelo corpo de Slowbro, tornando-o imune à dor física.", // 080
  "Magnemite flutua no ar emitindo ondas eletromagnéticas. Ele é atraído por fontes de eletricidade e frequentemente causa curtos-circuitos em cidades.", // 081
  "Magneton é formado por três Magnemite que se uniram através de uma forte força magnética. Eles podem causar tempestades magnéticas se estiverem em grupo.", // 082
  "Farfetch'd é sempre visto carregando um talo de alho-poró. Ele o usa como espada para cortar inimigos e também como material para construir seu ninho.", // 083
  "As duas cabeças de Doduo nunca dormem ao mesmo tempo. Enquanto uma descansa, a outra permanece em vigília para detectar predadores próximos.", // 084
  "Dodrio tem três cabeças, representando alegria, tristeza e raiva. Ele pode correr em alta velocidade pelas planícies, mesmo com um terreno difícil.", // 085
  "Seel vive em icebergs cercados por águas geladas. Ele usa o chifre em sua cabeça para quebrar o gelo espesso e subir à superfície para respirar.", // 086
  "Dewgong adora cochilar no gelo extremamente frio. Seu corpo branco como a neve o camufla contra predadores enquanto ele descansa.", // 087
  "Grimer surgiu de lodo poluído em rios. Por onde ele passa, o solo se torna estéril e nenhuma planta consegue crescer por anos.", // 088
  "Muk é tão tóxico que até suas pegadas contêm veneno. O cheiro que ele exala é tão forte que pode causar desmaios em pessoas despreparadas.", // 089
  "Shellder fecha sua concha para se proteger de ataques. Ele usa sua língua longa para cavar na areia do fundo do mar e procurar comida.", // 090
  "Cloyster é capaz de disparar espinhos de seu casco duro. Nem mesmo um míssil pode quebrar sua concha, que é mais resistente que o diamante.", // 091
  "Gastly é composto quase inteiramente de gás. Ele envolve seus oponentes com seu corpo gasoso e os coloca para dormir sem que percebam.", // 092
  "Haunter gosta de se esconder em paredes e observar as pessoas. Ele lamberá as vítimas com sua língua gasosa para roubar sua energia vital.", // 093
  "Gengar se esconde nas sombras das pessoas à noite. Se você sentir um calafrio repentino, é sinal de que um Gengar está por perto rindo de você.", // 094
  "Onix tem um ímã em seu cérebro que serve como bússola. Ele cava túneis no subsolo a uma velocidade de 80 quilômetros por hora enquanto se alimenta de rochas.", // 095
  "Drowzee lembra onde cada pessoa dorme e quais sonhos ela teve. Ele prefere comer sonhos divertidos e ignora pesadelos se tiver escolha.", // 096
  "Hypno carrega um pêndulo que ele balança para hipnotizar inimigos. Evite olhar nos olhos deste Pokémon, ou você pode acabar servindo às suas vontades.", // 097
  "Krabby vive em buracos cavados em praias arenosas. Se ele ficar sem comida, começará a comer a areia para absorver os nutrientes nela contidos.", // 098
  "A pinça maior de Kingler possui uma força de 10.000 cavalos de potência. No entanto, por ser muito pesada, ele muitas vezes tem dificuldade em movê-la.", // 099
  "Voltorb foi descoberto pela primeira vez em fábricas que produziam Pokébolas. Ele é extremamente instável e explode ao menor impacto ou vibração.", // 100
  "Electrode armazena uma quantidade enorme de eletricidade dentro de seu corpo. Ele explode deliberadamente para se divertir ou para afastar inimigos.", // 101
  "Exeggcute consiste em seis ovos que mantêm uma conexão telepática. Se um deles for separado do grupo, os outros se reunirão rapidamente para resgatá-lo.", // 102
  "Dizem que Exeggutor veio dos trópicos. Cada uma de suas cabeças pensa de forma independente, mas elas nunca brigam entre si.", // 103
  "Cubone usa o crânio de sua mãe falecida como uma máscara. Seus gritos ecoam dentro do crânio, criando uma melodia triste e solitária.", // 104
  "Marowak superou a tristeza pela perda da mãe e se tornou um guerreiro valente. Ele usa ossos como bumerangues para atacar seus inimigos.", // 105
  "Hitmonlee pode estender suas pernas para o dobro do comprimento original. Ele é conhecido como o 'Mestre dos Chutes' devido à sua precisão incrível.", // 106
  "Hitmonchan possui o espírito de um boxeador que treinou para o campeonato mundial. Ele soca tão rápido que seus punhos parecem invisíveis.", // 107
  "Lickitung tem uma língua que é duas vezes maior que seu corpo. Ele a usa para limpar a si mesmo e para paralisar oponentes com uma lambida.", // 108
  "Koffing armazena gases tóxicos dentro de seu corpo fino. Se ele for atingido por fogo, os gases podem explodir violentamente.", // 109
  "Weezing é formado quando dois Koffing se fundem devido à poluição. Ele vive em áreas urbanas, alimentando-se de lixo e fumaça tóxica.", // 110
  "Rhyhorn tem um corpo coberto por uma armadura de pedra. Ele é um pouco lento intelectualmente, esquecendo por que começou a correr assim que atinge o alvo.", // 111
  "Rhydon foi o primeiro Pokémon a ser descoberto. Sua pele é tão dura que ele pode viver em magma fervente sem sofrer qualquer queimadura.", // 112
  "Chansey é um Pokémon gentil que compartilha seus ovos nutritivos com pessoas e Pokémon feridos. Ela traz felicidade para quem a captura.", // 113
  "Tangela é coberto por vinhas azuis que nunca param de crescer. Ninguém sabe como é a verdadeira aparência deste Pokémon por baixo da vegetação.", // 114
  "Kangaskhan carrega seu filhote em uma bolsa na barriga. Ela nunca deixa o filhote sair até que ele seja capaz de se proteger sozinho.", // 115
  "Horsea constrói seu ninho em corais. Se sentir perigo, ele solta uma tinta preta densa de sua boca para confundir o atacante e fugir.", // 116
  "Seadra tem barbatanas e ossos afiados que contêm veneno. Ele dorme enrolando sua cauda em corais para evitar ser levado pelas correntes marinhas.", // 117
  "Goldeen é conhecido como a rainha das águas devido à sua barbatana caudal elegante. Ele usa seu chifre para perfurar rochas e fazer ninhos.", // 118
  "Seaking faz furos em rochas no leito do rio para depositar seus ovos. Ele protegerá seu ninho com a própria vida contra qualquer intruso.", // 119
  "Staryu tem um núcleo vermelho no centro do corpo que brilha à noite. Ele pode regenerar qualquer membro perdido em questão de horas.", // 120
  "Starmie emite sinais de rádio de seu núcleo para o espaço sideral. Por causa de seu corpo geométrico, muitas pessoas acreditam que ele veio de outro planeta.", // 121
  "Mr. Mime é um mestre da pantomima. Ele pode criar paredes invisíveis solidificando o ar com o movimento de seus dedos.", // 122
  "Scyther é incrivelmente rápido e suas foices podem cortar troncos grossos com um único golpe. Ele se camufla na grama alta para caçar.", // 123
  "Jynx caminha ritmicamente como se estivesse dançando. Ela fala uma linguagem que soa como a fala humana, mas ninguém ainda conseguiu traduzi-la.", // 124
  "Electabuzz é frequentemente encontrado perto de usinas elétricas. Ele se alimenta de eletricidade e brilha intensamente quando está carregado.", // 125
  "Magmar nasce em vulcões ativos. Seu corpo queima com um calor laranja constante, e ele cospe chamas para curar suas próprias feridas.", // 126
  "Pinsir usa seus grandes chifres para prender o oponente com uma força tremenda. Se ele não conseguir esmagar o inimigo, ele o arremessará longe.", // 127
  "Tauros é um Pokémon violento e cheio de energia. Ele chicoteia a si mesmo com suas três caudas para aumentar sua fúria antes de atacar.", // 128
  "Magikarp é conhecido por ser o Pokémon mais fraco e patético do mundo. No entanto, ele é capaz de sobreviver em qualquer tipo de água poluída.", // 129
  "Gyarados é extremamente destrutivo. Uma vez que ele aparece em um local, ele pode reduzir cidades inteiras a cinzas em um estado de fúria cega.", // 130
  "Lapras é um Pokémon de bom coração que gosta de transportar pessoas em suas costas. Ele é muito inteligente e pode entender a fala humana.", // 131
  "Ditto pode reorganizar sua estrutura celular para se transformar em qualquer coisa que veja. No entanto, ele volta ao normal quando começa a rir.", // 132
  "Eevee tem uma composição genética irregular que permite que ele se adapte a qualquer ambiente, evoluindo de várias formas diferentes.", // 133
  "Vaporeon sofreu uma mutação que lhe deu nadadeiras e guelras. Ele pode derreter seu corpo na água, tornando-se completamente invisível.", // 134
  "Jolteon armazena íons negativos na atmosfera para lançar relâmpagos de 10.000 volts. Seus pelos se tornam agulhas afiadas quando ele fica bravo.", // 135
  "Flareon armazena ar em seu corpo e o aquece em uma bolsa de fogo a mais de 1.600 graus antes de expeli-lo como chamas intensas.", // 136
  "O primeiro Pokémon do mundo a ser criado por código de computador. Ele pode se mover livremente no ciberespaço e não precisa respirar.", // 137
  "Omanyte é um Pokémon fóssil que foi regenerado de um casco antigo. Ele nada nas profundezas do oceano movendo seus tentáculos.", // 138
  "Omastar possui tentáculos poderosos que usa para capturar presas. Seu casco tornou-se tão pesado que ele teve dificuldade em caçar, levando à sua extinção.", // 139
  "Kabuto é um Pokémon que viveu no fundo do mar há milhões de anos. Ele possui um segundo par de olhos em suas costas para vigiar enquanto se esconde.", // 140
  "Kabutops evoluiu para viver em terra firme. Ele usa suas garras afiadas para cortar presas e drenar seus fluidos vitais.", // 141
  "Aerodactyl era o rei dos céus na era pré-histórica. Ele tem dentes afiados como serras que podem rasgar qualquer tipo de carne ou couro.", // 142
  "Snorlax passa a maior parte do dia dormindo e o resto comendo. Ele precisa de 400 quilos de comida por dia para se sentir satisfeito.", // 143
  "Articuno é uma ave lendária que pode controlar o gelo. Diz-se que ele aparece para pessoas que estão perdidas em montanhas nevadas para guiá-las.", // 144
  "Zapdos é uma ave lendária que vive em nuvens de tempestade. Ele ganha energia quando é atingido por raios durante tempestades elétricas.", // 145
  "Moltres é uma ave lendária que tem o poder de controlar o fogo. Diz-se que sua aparência indica a chegada prematura da primavera.", // 146
  "Dratini é tão raro que por muito tempo foi considerado um Pokémon mítico. Ele troca de pele constantemente à medida que cresce.", // 147
  "Dragonair exala uma aura mística de seu corpo. Diz-se que ele tem o poder de mudar o clima ao seu redor usando as esferas em seu pescoço e cauda.", // 148
  "Dragonite é um Pokémon extremamente bondoso que ajuda marinheiros perdidos em tempestades. Ele pode dar a volta ao mundo em apenas 16 horas.", // 149
  "Mewtwo foi criado a partir do DNA de Mew através de experimentos genéticos cruéis. Ele possui os poderes psíquicos mais devastadores do mundo.", // 150
  "Mew possui o mapa genético de todos os Pokémon existentes. Por ser capaz de ficar invisível à vontade, ele raramente é visto por humanos." // 151
];




let shiny = 'Pokémon' //Define se mostrará a versão padrão ('Pokémon') ou a shiny ('Shiny')
let dexnumber = 1 // valor do numdex em variável





function buscar() {
    dexnumber = Number(txtnum.value)
    atualizarinfo()
}

// atualizar o valor do número na página
function atualizarinfo () {
    let numerostring = dexnumber.toString()

    num.innerHTML = `${dexnumber}#`.padStart(4, 0) // O '.padStart' preenche o início do texto até bater a quantidade de caracteres exata


    if (dexnumber >= 1 && dexnumber <= 151) {
        nome.innerHTML = pokedex[dexnumber - 1] // mudar o nome do pokémon de acordo com o número da variável 'dexnumber'
        pokemonimg.src = `/Images/${shiny}/pk (${numerostring}).png` //Troca a imagem do pokémon
        desc.innerHTML = `${descricoes[dexnumber - 1]}`
    } else {
        nome.innerHTML = 'Não descoberto'
        pokemonimg.src = '/Images/Icons/Missingno_image.png'
        desc.innerHTML = 'Estamos pesquisando mais sobre outros pokémon.'
    }
}

//botar de próximo número
function mais() {
    dexnumber++
    if (dexnumber > 151 ) {
    dexnumber = 1
    }
    atualizarinfo()
}

//botão de número anterior
function menos() {
    dexnumber--

    if (dexnumber <= 0) {
    dexnumber = 151
    }
    atualizarinfo()
}





atualizarinfo()