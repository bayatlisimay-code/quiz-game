import { reviewedCohort, reviewedDefinitions, type ReviewedTerm } from './reviewedDefinitions';
const pitt='https://sites.pitt.edu/~medart/menuglossary/', pbs='https://www.pbs.org/wgbh/buildingbig/glossary.html';
const r=(id:string,term:string,meaning:string,url:string,locator:string,priority:number):ReviewedTerm=>({id,term,meaning,source:{url,locator,label:'Construction terminology'},priority});
const terms:readonly ReviewedTerm[]=[
 r('post-lintel','Post-and-lintel construction','Supporting a horizontal beam on upright posts.',pitt+'lintel.htm','Lintel definition: horizontal member spanning two supports; construction-system sense',5),
 r('arch-building','Masonry arch construction','Spanning an opening with wedge-shaped masonry units arranged in a curve.',pitt+'voussoir.htm','Voussoir definition: wedge-shaped stones constructing an arch',5),
 r('barrel-vaulting','Barrel vaulting','Roofing a space with a continuous, tunnel-shaped arch.',pitt+'barrel.htm','Barrel/tunnel vault definition; continuous arched ceiling',5),
 r('rib-vaulting','Rib vaulting','Building a thin masonry vault within a framework of ribs.',pitt+'ribvault.htm','Opening definition; thin web within rib framework',5),
 r('timber-framing','Traditional timber framing','Joining large wooden posts and beams with interlocking joints and braces.', 'https://www.nps.gov/subjects/ncptt/upload/1996-22.pdf','Unit I Timber Frame History: opening definition; large timbers, posts, beams, interlocking joinery and braces',5),
 r('reinforced-concrete','Steel-reinforced concrete construction','Embedding steel bars or mesh in concrete to resist tension.',pbs,'Reinforced Concrete entry; not all reinforcement is prestressed',5),
 r('pre-tensioning','Pre-tensioning concrete','Tensioning reinforcement before the surrounding concrete hardens.',pbs,'Reinforced Concrete entry: pre-tensioned versus post-tensioned',4),
 r('post-tensioning','Post-tensioning concrete','Tensioning reinforcement after the surrounding concrete hardens.',pbs,'Reinforced Concrete entry: post-tensioned versus pre-tensioned',4),
 r('prefabrication','Prefabrication','Manufacturing building components before assembling them at their final site.', 'https://data.fitzmuseum.cam.ac.uk/id/terminology/term-28925','AAT scope note: substantial components produced before final on-site assembly',4),
 r('rammed-earth','Rammed-earth construction','Compacting damp earth in successive layers within supported formwork.', 'https://www.nps.gov/cagr/learn/management/auditorium.htm','Opening three construction paragraphs; technique, not a universal claim all rammed earth uses cement',3),
 r('dry-stone','Dry-stone construction','Building with fitted stones without mortar.', 'https://whc.unesco.org/en/list/364/','Brief Synthesis: dry-stone masonry of Great Zimbabwe; construction method, not every part of the site',3),
];
export const architectureConstructionSet=reviewedDefinitions('architecture','l5','p4',terms,reviewedCohort(terms.map(t=>t.id),
 'Reviewed defining assembly operations and reinforcement timing. Broader arch, vault and reinforced-concrete descriptions remain unknown for applicable subtypes.', ['arch-building|barrel-vaulting','arch-building|rib-vaulting','barrel-vaulting|rib-vaulting','pre-tensioning|reinforced-concrete','post-tensioning|reinforced-concrete']));
