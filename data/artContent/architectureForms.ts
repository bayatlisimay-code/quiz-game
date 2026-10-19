import { reviewedCohort, reviewedDefinitions, type ReviewedTerm } from './reviewedDefinitions';
const roman='https://www.metmuseum.org/zh/-/media/files/learn/for-educators/publications-for-educators/roman.pdf';
const pagoda='https://www.getty.edu/vow/AATFullDisplay?find=&logic=AND&note=&subjectid=300004829';
const r=(id:string,term:string,meaning:string,url:string,locator:string,priority:number):ReviewedTerm=>({id,term,meaning,source:{url,locator,label:'Architectural glossary'},priority});
const terms:readonly ReviewedTerm[]=[
 r('basilica','Basilica (building form)','A long hall with a central nave, side aisles and often an apse.',roman,'Glossary: basilica; architectural form, not ecclesiastical honorary status',5),
 r('amphitheatre','Amphitheatre','An oval or circular arena surrounded by tiered seating.',roman,'Glossary: amphitheater; distinguish semi-circular theatre seating',5),
 r('stupa','Stupa','A dome-shaped Buddhist commemorative monument, often containing relics.',pagoda,'Scope note paragraph2: origin of pagoda in ancient Indian stupa',5),
 r('pagoda','Pagoda','A multistorey shrine tower, usually associated with a Buddhist temple.',pagoda,'Scope note paragraph1: multistoried shrine-like towers of stone, brick or wood',5),
 r('minaret','Minaret','A mosque tower traditionally associated with the call to prayer.', 'https://archeologie.culture.gouv.fr/mosquee-omeyyades/en/glossary/minaret','Glossary entry; tower and muezzin’s call',5),
 r('ziggurat','Ziggurat','A Mesopotamian temple tower built in successive raised stages.', 'https://whc.unesco.org/en/list/113/','Brief synthesis: Tchogha Zanbil Elamite holy city and stepped ziggurat; temple-tower form',5),
 r('rotunda','Rotunda','A round building, often covered by a dome.', 'https://data.fitzmuseum.cam.ac.uk/id/terminology/term-60288','Scope note: round inside and out, especially domed',4),
 r('atrium','Early Christian atrium','An entrance courtyard surrounded by covered passages before a church.', 'https://sites.pitt.edu/~medart/menuglossary/atrium.htm','Opening definition; explicitly church sense, not modern glazed interior atrium',4),
 r('cloister','Monastic cloister','A monastery’s quadrangular courtyard enclosed by covered walks.', 'https://sites.pitt.edu/~medart/menuglossary/cloister.htm','Opening definition; monastery quadrangle and covered passages',4),
 r('mausoleum','Mausoleum','A monumental tomb building housing one or more burials.', 'https://ahdictionary.com/word/search.html?q=mausoleum','Sense1: large stately tomb or building housing one or several tombs',3),
 r('aqueduct','Aqueduct','A bridge or channel carrying water over a distance.', 'https://www.pbs.org/wgbh/buildingbig/glossary.html','Aqueduct entry; water-conveying infrastructure, not every bridge',3),
];
export const architectureFormSet=reviewedDefinitions('architecture','l9','p1',terms,reviewedCohort(terms.map(t=>t.id),
 'Reviewed identifying spatial forms and functions, not mutually exclusive categories for every complex. Relic-bearing towers and entrance/monastic courts may overlap, so their partial descriptions remain unknown.', ['pagoda|stupa','atrium|cloister','mausoleum|stupa']));
