import genghiskhan from "@/assets/figure-genghiskhan.jpg";
import ashoka from "@/assets/figure-ashoka.jpg";
import cortes from "@/assets/figure-cortes.jpg";
import zizka from "@/assets/figure-zizka.jpg";
import sigurd from "@/assets/figure-sigurd.jpg";
import michael from "@/assets/figure-michael.jpg";
import tupac from "@/assets/figure-tupac.jpg";
import cromwell from "@/assets/figure-cromwell.jpg";
import attila from "@/assets/figure-attila.jpg";

export type Figure = {
  slug: string;
  name: string;
  title: string;
  era: string;
  lifespan: string;
  origin: string;
  image: string;
  tagline: string;
  bio: string[];
  highlights: { year: string; event: string }[];
};

export const figures: Figure[] = [
{
  slug: "genghis-khan",
  name: "Genghis Khan",
  title: "Founder of the Mongol Empire",
  era: "Medieval Era",
  lifespan: "1162 – 1227",
  origin: "Khentii Mountains, Mongolia",
  image: genghiskhan,
  tagline: "The conqueror who united the Mongol tribes and forged the largest contiguous empire in history.",
  bio: [
    "Genghis Khan, born Temujin, was the founder and first Great Khan of the Mongol Empire. Rising from a difficult childhood marked by tribal warfare, exile, and betrayal, he gradually united the nomadic Mongol tribes under his leadership through military skill, alliances, and political reform.",
    "In 1206, after consolidating power across the Mongolian steppes, Temujin was proclaimed 'Genghis Khan,' meaning universal ruler. From that point onward, he launched a series of military campaigns that transformed the Mongols into one of the most powerful forces in world history.",
    "Genghis Khan’s armies conquered vast territories across Asia, including parts of northern China, Central Asia, and Persia. His military success was built on exceptional mobility, disciplined cavalry tactics, psychological warfare, intelligence networks, and merit-based leadership uncommon for the era.",
    "Although his campaigns were often devastating and resulted in massive destruction and loss of life, Genghis Khan also promoted trade, communication, and religious tolerance throughout his empire. The expansion of the Mongol Empire strengthened connections between East and West, contributing to cultural exchange along the Silk Road.",
    "After his death in 1227, his descendants continued expanding the empire across Eurasia, creating the largest contiguous land empire in history. Genghis Khan remains one of the most influential and controversial figures in world history, remembered both as a brilliant strategist and as a conqueror whose campaigns reshaped entire civilizations."
  ],
  highlights: [
    { year: "1162", event: "Born as Temujin in the Mongolian steppes." },
    { year: "1180", event: "Begins uniting rival Mongol tribes under his leadership." },
    { year: "1206", event: "Proclaimed Genghis Khan and becomes ruler of the Mongols." },
    { year: "1211", event: "Launches campaigns against the Jin Dynasty in northern China." },
    { year: "1219", event: "Invades the Khwarezmian Empire in Central Asia." },
    { year: "1223", event: "Mongol forces achieve victory at the Battle of the Kalka River." },
    { year: "1227", event: "Dies during a campaign against the Western Xia dynasty." },
  ],
},

{
  slug: "ashoka-the-great",
  name: "Ashoka the Great",
  title: "Emperor of the Maurya Empire",
  era: "Classical Era",
  lifespan: "304 – 232 BCE",
  origin: "Pataliputra, Maurya Empire",
  image: ashoka,
  tagline: "The emperor who transformed conquest into a philosophy of peace and compassion.",
  bio: [
    "Ashoka the Great was the third ruler of the Maurya Empire and one of the most influential emperors in Indian history. He inherited one of the largest empires in the ancient world and expanded it further through military campaigns across the Indian subcontinent.",
    "Early in his reign, Ashoka pursued aggressive expansionist policies, culminating in the bloody conquest of Kalinga around 261 BCE. The immense suffering caused by the war profoundly affected him and became the turning point of his life.",
    "Following the Kalinga War, Ashoka embraced Buddhism and adopted a policy centered on nonviolence, ethical governance, and social welfare. He promoted religious tolerance, built roads and hospitals, planted trees for travelers, and encouraged compassion toward both humans and animals.",
    "Ashoka spread Buddhist teachings across Asia by supporting missionaries and religious institutions. Under his patronage, Buddhism expanded beyond India into regions such as Sri Lanka and Central Asia, laying the foundation for its later influence throughout East and Southeast Asia.",
    "His ideals and policies were recorded in a series of inscriptions known as the Edicts of Ashoka, carved onto rocks and pillars throughout his empire. These edicts remain among the most important historical sources for understanding ancient India and Ashoka’s philosophy of rule.",
    "Today, Ashoka is remembered as a symbol of wise and compassionate leadership. The Lion Capital of Ashoka became the national emblem of India, and the Ashoka Chakra appears at the center of the Indian national flag."
  ],
  highlights: [
    { year: "304 BCE", event: "Born in Pataliputra, capital of the Maurya Empire." },
    { year: "268 BCE", event: "Ascends the Mauryan throne." },
    { year: "261 BCE", event: "Conquers Kalinga in a devastating war." },
    { year: "260 BCE", event: "Embraces Buddhism after witnessing the horrors of war." },
    { year: "250 BCE", event: "Promotes Buddhist missions across Asia." },
    { year: "249 BCE", event: "Visits important Buddhist pilgrimage sites." },
    { year: "232 BCE", event: "Dies after a long and influential reign." },
  ],
},

{
  slug: "hernan-cortes",
  name: "Hernán Cortés",
  title: "Spanish Conquistador",
  era: "Early Modern Era",
  lifespan: "1485 – 1547",
  origin: "Medellín, Crown of Castile",
  image: cortes,
  tagline: "The conquistador whose campaign led to the fall of the Aztec Empire.",
  bio: [
    "Hernán Cortés was a Spanish conquistador best known for leading the expedition that resulted in the conquest of the Aztec Empire in the early 16th century. Born in Medellín in the Crown of Castile, he traveled to the Americas seeking wealth, status, and opportunity during the age of Spanish exploration.",
    "After participating in colonial efforts in Hispaniola and Cuba, Cortés organized an expedition to mainland Mexico in 1519. Defying orders from the governor of Cuba, he pushed inland and formed alliances with indigenous groups who opposed Aztec rule.",
    "Cortés eventually entered the Aztec capital of Tenochtitlan, where tensions with Emperor Moctezuma II escalated into open conflict. Despite facing setbacks, including the temporary expulsion of Spanish forces from the city, Cortés regrouped and launched a prolonged siege.",
    "In 1521, Tenochtitlan fell to the Spanish and their indigenous allies, marking the collapse of the Aztec Empire and the beginning of Spanish colonial dominance in much of Mesoamerica. The conquest dramatically reshaped the political, cultural, and demographic history of the Americas.",
    "Following his victories, Cortés was appointed governor and received noble titles from the Spanish crown. However, he later became involved in political disputes and gradually lost influence at court.",
    "Hernán Cortés remains one of the most controversial figures of the Age of Exploration. He is remembered both for his military achievements and for the violence, destruction, and colonial exploitation associated with the Spanish conquest of the Americas."
  ],
  highlights: [
    { year: "1485", event: "Born in Medellín in the Crown of Castile." },
    { year: "1504", event: "Travels to Hispaniola in the Caribbean." },
    { year: "1511", event: "Participates in the conquest of Cuba." },
    { year: "1519", event: "Meets Emperor Moctezuma II in Tenochtitlan." },
    { year: "1521", event: "Conquers Tenochtitlan and defeats the Aztec Empire." },
    { year: "1547", event: "Dies near Seville, Spain." },
  ],
},
{
  slug: "jan-zizka",
  name: "Jan Žižka",
  title: "Hussite General and Military Leader",
  era: "Medieval Era",
  lifespan: "1360 – 1424",
  origin: "Trocnov, Kingdom of Bohemia",
  image: zizka,
  tagline: "The undefeated Hussite commander who revolutionized medieval warfare.",
  bio: [
    "Jan Žižka was a Czech general and one of the most influential military commanders of the Middle Ages. Born in the Kingdom of Bohemia, he first gained experience as a mercenary and noble retainer before rising to prominence during the Hussite Wars.",
    "Žižka became a leading figure of the Hussite movement after the execution of religious reformer Jan Hus in 1415. Determined to defend Bohemian religious and political independence, he organized peasant militias into highly disciplined fighting forces capable of resisting the armies of the Holy Roman Empire and the Catholic crusades.",
    "He is best remembered for his innovative battlefield tactics, especially the use of heavily armored war wagons combined with firearms, crossbows, and mobile infantry formations. These strategies allowed his smaller armies to defeat larger and better-equipped opponents in battles such as Sudoměř, Vítkov Hill, Kutná Hora, and Deutschbrod.",
    "Despite losing one eye in his youth and eventually becoming completely blind later in life, Žižka continued commanding armies from the front lines. Under his leadership, the Hussite forces remained undefeated throughout his lifetime, earning him a reputation as one of history’s greatest military tacticians.",
    "Žižka died in 1424 during a military campaign, but his legacy endured through the continued Hussite resistance and his influence on later military doctrine. In Czech history, he remains a symbol of resilience, religious freedom, and national identity."
  ],
  highlights: [
    { year: "1360", event: "Born in Trocnov in the Kingdom of Bohemia." },
    { year: "1410", event: "Possibly fights in the Battle of Grunwald against the Teutonic Order." },
    { year: "1419", event: "Joins the Hussite movement after growing religious tensions in Bohemia." },
    { year: "1420", event: "Defeats crusader forces at the Battle of Vítkov Hill." },
    { year: "1421", event: "Leads successful campaigns using innovative war wagon tactics." },
    { year: "1424", event: "Dies during the Hussite Wars while still undefeated in battle." },
  ],
},

{
  slug: "sigurd-i",
  name: "Sigurd I Magnusson",
  title: "King of Norway",
  era: "Medieval Era",
  lifespan: "1090 – 1130",
  origin: "Norway",
  image: sigurd,
  tagline: "The crusader king who brought Norway into the wider medieval world.",
  bio: [
    "Sigurd I Magnusson, better known as Sigurd the Crusader, was King of Norway during the early 12th century and one of the most famous rulers of medieval Scandinavia. He was the son of King Magnus Barefoot and became co-king of Norway while still young.",
    "Sigurd is most remembered for leading the Norwegian Crusade between 1107 and 1111, becoming the first European king to personally participate in a crusade to the Holy Land. Along the journey, his fleet fought battles in the Iberian Peninsula, the Balearic Islands, and the Mediterranean against Muslim forces and pirates.",
    "After arriving in Jerusalem, Sigurd met King Baldwin I of Jerusalem and aided the Crusader states militarily. In recognition of his support, he received religious relics said to contain fragments associated with the True Cross, greatly increasing his prestige back in Norway.",
    "Upon returning home, Sigurd focused on strengthening the Norwegian kingdom through church construction, royal administration, and expanded ties with the rest of Christian Europe. His reign marked a period of increased international influence for Norway and greater integration into medieval European politics and religion.",
    "Although his later years were marked by political tensions and signs of mental instability described in medieval chronicles, Sigurd remained an influential figure in Norwegian history. His exploits during the crusades earned him the enduring title of 'the Crusader,' and he became one of Norway’s most legendary warrior kings."
  ],
  highlights: [
    { year: "1090", event: "Born as the son of King Magnus Barefoot." },
    { year: "1103", event: "Becomes co-king of Norway." },
    { year: "1107", event: "Launches the Norwegian Crusade toward the Holy Land." },
    { year: "1108", event: "Fights battles in the Iberian Peninsula and Mediterranean." },
    { year: "1110", event: "Arrives in Jerusalem and meets King Baldwin I." },
    { year: "1111", event: "Returns to Norway after completing the crusade." },
    { year: "1130", event: "Dies in Oslo, Norway." },
  ],
},
{
  slug: "michael-jackson",
  name: "Michael Jackson",
  title: "The King of Pop",
  era: "Modern Era",
  lifespan: "1958 – 2009",
  origin: "Gary, Indiana, United States",
  image: michael,
  tagline: "The global superstar who transformed modern pop music and entertainment.",
  bio: [
    "Michael Jackson was an American singer, songwriter, dancer, and entertainer widely regarded as one of the most influential figures in music history. Born in Gary, Indiana, he rose to fame as a child performer in the Jackson 5 alongside his brothers, quickly becoming the standout member of the group due to his remarkable voice and stage presence.",
    "In the 1970s, Jackson began a solo career that would redefine popular music. His albums 'Off the Wall,' 'Thriller,' and 'Bad' achieved unprecedented global success, blending pop, rock, funk, and R&B into a distinctive sound that reached audiences worldwide.",
    "Released in 1982, 'Thriller' became the best-selling album of all time and established Jackson as a worldwide cultural phenomenon. Its groundbreaking music videos for songs like 'Thriller,' 'Beat It,' and 'Billie Jean' revolutionized the music industry and helped turn MTV into a global force in entertainment.",
    "Jackson was also famous for his innovative dance style, including moves such as the moonwalk, robotic choreography, and highly synchronized live performances. His concerts drew enormous international audiences and set new standards for stage production and spectacle.",
    "Throughout his career, Jackson received countless awards and honors, including multiple Grammy Awards, American Music Awards, and inductions into the Rock and Roll Hall of Fame. Beyond music, he became a major cultural icon whose influence extended into fashion, dance, philanthropy, and global pop culture.",
    "Despite facing intense media scrutiny and controversy during his later years, Michael Jackson’s artistic legacy remained immense. His music continues to influence generations of performers, and he is remembered as one of the greatest entertainers in history."
  ],
  highlights: [
    { year: "1958", event: "Born in Gary, Indiana, United States." },
    { year: "1964", event: "Joins the Jackson 5 as a child performer." },
    { year: "1971", event: "Begins his solo recording career." },
    { year: "1979", event: "Releases the critically acclaimed album 'Off the Wall.'" },
    { year: "1982", event: "Releases 'Thriller,' the best-selling album of all time." },
    { year: "1983", event: "Debuts the moonwalk during a televised performance of 'Billie Jean.'" },
    { year: "1987", event: "Releases the hit album 'Bad.'" },
    { year: "1991", event: "Releases the album 'Dangerous.'" },
    { year: "2009", event: "Dies in Los Angeles, California." },
  ],
},
{
  slug: "tupac-shakur",
  name: "Tupac Shakur",
  title: "Rapper, Actor, and Activist",
  era: "Modern Era",
  lifespan: "1971 – 1996",
  origin: "East Harlem, New York City, United States",
  image: tupac,
  tagline: "The influential rapper whose music gave voice to struggle, inequality, and ambition.",
  bio: [
    "Tupac Shakur, also known by his stage names 2Pac and Makaveli, was an American rapper, actor, and activist widely regarded as one of the greatest and most influential artists in hip-hop history. Born in East Harlem, New York City, he grew up in a politically active family connected to the Black Panther movement.",
    "Shakur first gained attention in the early 1990s as a member of the hip-hop group Digital Underground before launching a successful solo career. His debut album, '2Pacalypse Now,' established him as a powerful and controversial voice addressing issues such as racism, poverty, violence, and police brutality.",
    "During the peak of his career, Tupac released acclaimed albums including 'Strictly 4 My N.I.G.G.A.Z.,' 'Me Against the World,' and 'All Eyez on Me.' His music blended emotional vulnerability, political commentary, storytelling, and aggressive lyricism, helping redefine the scope of rap music.",
    "Beyond music, Tupac also built a successful acting career with performances in films such as 'Juice,' 'Poetic Justice,' 'Above the Rim,' and 'Gridlock’d.' His charisma and screen presence demonstrated his versatility as an entertainer.",
    "Tupac became heavily associated with the East Coast–West Coast hip-hop rivalry of the 1990s, particularly after signing with Death Row Records. The rivalry, media controversies, and legal troubles surrounding his life made him one of the most talked-about celebrities of the era.",
    "On September 13, 1996, Tupac Shakur died in Las Vegas after being shot days earlier in a still-unsolved attack. Despite his short life, his cultural influence remains enormous, and he is remembered as one of the defining voices of modern hip-hop."
  ],
  highlights: [
    { year: "1971", event: "Born in East Harlem, New York City." },
    { year: "1991", event: "Releases debut album '2Pacalypse Now.'" },
    { year: "1992", event: "Stars in the film 'Juice.'" },
    { year: "1995", event: "Releases the acclaimed album 'Me Against the World.'" },
    { year: "1996", event: "Releases 'All Eyez on Me.'" },
    { year: "1996", event: "Dies in Las Vegas, Nevada." },
  ],
},

{
  slug: "oliver-cromwell",
  name: "Oliver Cromwell",
  title: "Lord Protector of the Commonwealth",
  era: "Early Modern Era",
  lifespan: "1599 – 1658",
  origin: "Huntingdon, England",
  image: cromwell,
  tagline: "The military leader who overthrew the English monarchy and ruled the Commonwealth.",
  bio: [
    "Oliver Cromwell was an English military commander and statesman who played a central role in the English Civil War and the temporary abolition of the monarchy. Born into a gentry family in Huntingdon, he initially lived as a minor landowner before entering politics as a Member of Parliament.",
    "During the English Civil War, Cromwell emerged as one of Parliament’s most capable military leaders. He organized the disciplined New Model Army, whose victories against Royalist forces proved decisive in defeating King Charles I.",
    "Following the execution of Charles I in 1649, England became a republic known as the Commonwealth. Cromwell led military campaigns in Ireland and Scotland, campaigns that remain deeply controversial due to the brutality and destruction associated with them.",
    "In 1653, Cromwell became Lord Protector, effectively ruling England, Scotland, and Ireland as a military-backed head of state. His government promoted certain forms of religious tolerance for Protestant groups while enforcing strict moral and social policies inspired by Puritan beliefs.",
    "Cromwell’s rule brought political stability after years of civil war, but critics accused him of authoritarianism and undermining parliamentary government. After his death in 1658, the Commonwealth rapidly weakened, and the monarchy was restored in 1660.",
    "Oliver Cromwell remains one of the most divisive figures in British history, viewed by some as a defender of parliamentary power and by others as a dictator responsible for harsh repression, especially in Ireland."
  ],
  highlights: [
    { year: "1599", event: "Born in Huntingdon, England." },
    { year: "1628", event: "Becomes a Member of Parliament." },
    { year: "1642", event: "Joins the Parliamentary forces during the English Civil War." },
    { year: "1645", event: "Helps lead the New Model Army to victory at Naseby." },
    { year: "1649", event: "King Charles I is executed and the Commonwealth is established." },
    { year: "1653", event: "Becomes Lord Protector of England, Scotland, and Ireland." },
    { year: "1658", event: "Dies in London." },
  ],
},

{
  slug: "attila-the-hun",
  name: "Attila the Hun",
  title: "Ruler of the Hunnic Empire",
  era: "Classical Era",
  lifespan: "c. 406 – 453",
  origin: "Pannonian Plain, Hunnic Empire",
  image: attila,
  tagline: "The feared conqueror who challenged both the Eastern and Western Roman Empires.",
  bio: [
    "Attila the Hun was the ruler of the Hunnic Empire from 434 until his death in 453 and one of the most feared military leaders of Late Antiquity. Under his rule, the Huns created a vast empire stretching across much of Central and Eastern Europe.",
    "Initially ruling jointly with his brother Bleda, Attila later became the sole leader of the Huns. He launched repeated campaigns against the Eastern Roman Empire, forcing Constantinople to pay enormous tributes in exchange for peace.",
    "Attila’s invasions devastated large parts of the Balkans and Gaul. In 451, he invaded Roman Gaul, leading to the famous Battle of the Catalaunian Plains, where a coalition of Roman and Visigothic forces halted his advance.",
    "The following year, Attila invaded Italy, capturing and destroying several cities. Although he threatened Rome itself, factors such as disease, famine, and logistical difficulties contributed to his withdrawal.",
    "Known in later Christian tradition as the 'Scourge of God,' Attila became a symbol of destruction and fear throughout Europe. However, historical sources also describe him as a capable diplomat and political strategist who maintained authority over a diverse tribal confederation.",
    "Attila died unexpectedly in 453 during his wedding celebrations. Shortly after his death, the Hunnic Empire fragmented, but his reputation endured in both European history and legend for centuries."
  ],
  highlights: [
    { year: "406", event: "Born into the ruling Hunnic dynasty." },
    { year: "434", event: "Becomes co-ruler of the Huns alongside his brother Bleda." },
    { year: "445", event: "Becomes sole ruler of the Hunnic Empire." },
    { year: "447", event: "Launches devastating campaigns against the Eastern Roman Empire." },
    { year: "451", event: "Invades Gaul and fights at the Battle of the Catalaunian Plains." },
    { year: "452", event: "Invades northern Italy and threatens Rome." },
    { year: "453", event: "Dies unexpectedly during his wedding celebrations." },
  ],
},
];

export const getFigure = (slug: string) => figures.find((f) => f.slug === slug);
