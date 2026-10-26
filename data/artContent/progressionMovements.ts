import type { Concept } from "../../src/quizEngine/conceptTypes";
import type { SemanticEvidence } from "../../src/quizEngine/assessmentTypes";
import { paintingMovementSet } from "./paintingMovements";
import { expandTerms, type TermAddition } from "./termExpansion";
import { scopeWording } from "./learnerWording";
const ng="https://www.nationalgallery.org.uk/paintings/glossary/";
const rows=[
  {id:"rococo",term:"Rococo",definition:"An eighteenth-century style favouring asymmetry, curved forms and light, bright colours.",url:ng+"rococo",locator:"Rococo: France1715–1774; curving/asymmetrical natural forms and light colour",
    work:"Pilgrimage to the Isle of Cythera (Louvre version)",workId:"louvre-inv8525",workUrl:"https://collections.louvre.fr/en/ark:/53355/cl010061995",workLocator:"INV8525,1717,Watteau; fête galante reception piece. Rococo context: Met https://www.metmuseum.org/essays/antoine-watteau-1684-1721",
    pioneer:"Jean-Antoine Watteau",pioneerId:"jean-antoine-watteau",pioneerUrl:"https://www.metmuseum.org/essays/antoine-watteau-1684-1721",pioneerLocator:"1684–1721; opening explicitly credits lasting impact on Rococo's development in France and Europe"},
  {id:"neoclassicism",term:"Neoclassicism",definition:"A late-eighteenth- and early-nineteenth-century revival of classical artistic models.",url:ng+"neoclassical",locator:"Later18th/early19th-century conscious classical revival, public/didactic function",
    work:"The Oath of the Horatii (Louvre original)",workId:"louvre-inv3692",workUrl:"https://collections.louvre.fr/en/ark:/53355/cl010062239",workLocator:"Original Louvre commission; completed1785 despite1784 inscription/traditional dating; Neoclassical context https://www.nationalgallery.org.uk/artists/jacques-louis-david",
    pioneer:"Jacques-Louis David",pioneerId:"jacques-louis-david",pioneerUrl:"https://www.nationalgallery.org.uk/artists/jacques-louis-david",pioneerLocator:"1748–1825; leading French Neoclassical painter; fame in1780s with Oath of Horatii"},
  {id:"romanticism",term:"Romanticism",definition:"Early-nineteenth-century art stressing individuality, emotion, drama and the natural world.",url:ng+"romantic",locator:"Romantic: chiefly early19th-century; individuality, emotion, drama, affinity with nature",
    work:"Liberty Leading the People",workId:"louvre-liberty",workUrl:"https://www.louvre.fr/en/explore/visitor-trails/the-louvre-s-masterpieces/romanticism-topicality-sensuality",workLocator:"Liberty section calls Delacroix a great Romantic painter; subjectJuly1830 not1789; museum collection chronology https://collections.louvre.fr/album/2 gives1830",
    pioneer:"Eugène Delacroix",pioneerId:"eugene-delacroix",pioneerUrl:"https://www.louvre.fr/en/explore/visitor-trails/the-louvre-s-masterpieces/romanticism-topicality-sensuality",pioneerLocator:"Liberty section major Romantic figure; life1798–1863 https://www.metmuseum.org/art/collection/search/336048"},
  {id:"realism",term:"Realism",definition:"Nineteenth-century French painting of everyday life through direct, unidealized observation.",url:ng+"realist",locator:"Realist movement: Courbet/Millet, everyday naturalism, rejecting exotic/idealized subjects",
    work:"A Burial at Ornans",workId:"orsay-ornans",workUrl:"https://www.musee-orsay.fr/en/artworks/un-enterrement-ornans-924",workLocator:"Courbet; monumental painting forSalon1850–51; text explicitly calls it a manifesto of Realism",
    pioneer:"Gustave Courbet",pioneerId:"gustave-courbet",pioneerUrl:"https://www.metmuseum.org/essays/nineteenth-century-french-realism",pioneerLocator:"French Realism flourished fromabout1840, emerged aftermath1848; Courbet statement central; life1819–1877 https://www.nationalgallery.org.uk/paintings/glossary/realist"},
  {id:"fauvism",term:"Fauvism",definition:"Early-twentieth-century painting using vibrant, unnaturalistic colours and bold brushwork.",url:"https://www.metmuseum.org/essays/fauvism",locator:"Matisse/Derain summer1905Collioure,1905Salon; loose group rather than definitive programme",
    work:"Woman with a Hat",workId:"sfmoma-woman-hat",workUrl:"https://www.sfmoma.org/read/matisses-femme-au-chapeau-from-scandal-to-icon/",workLocator:"Matisse1905 original; 1905Salon GalleryVII; vivid colour and foundational Fauve controversy corroborated Met Fauvism essay",
    pioneer:"Henri Matisse",pioneerId:"henri-matisse",pioneerUrl:"https://www.metmuseum.org/essays/fauvism",pioneerLocator:"Matisse1869–1954; leader, introduced unnaturalistic colour withDerain1905"},
  {id:"surrealism",term:"Surrealism",definition:"A twentieth-century movement exploring dreams, the irrational and the unconscious.",url:"https://www.moma.org/momaorg/shared/flattened_pages/moma_learning/glossary/",locator:"Surrealism entry: Breton-led from1924throughWWII, subconscious rather than rationalism",
    work:"The Persistence of Memory",workId:"moma-162-1934",workUrl:"https://www.moma.org/collection/works/79018",workLocator:"Dalí1931; publication excerpt explicitly describes classic Surrealist ambition and dreamscape",
    pioneer:"Max Ernst",pioneerId:"max-ernst",pioneerUrl:"https://www.moma.org/artists/1752-max-ernst",pioneerLocator:"1891–1976; key member1920s, frottage invention a key contribution to Surrealism"},
] as const;
const baseDefinitions={concepts:paintingMovementSet.concepts.filter(c=>c.partId==="p1"),evidence:paintingMovementSet.evidence};
// Explicitly reviewed defining-meaning pairs; styles can coexist in a work.
const reviewed=["early-renaissance","baroque","impressionism","cubism","pop-art","rococo","neoclassicism","romanticism","realism","fauvism","surrealism"];
const definitionUnknown=new Set(["baroque|rococo","impressionism|realism","early-renaissance|neoclassicism","fauvism|impressionism","baroque|romanticism"]);
const definitionPairs=reviewed.flatMap((a,i)=>reviewed.slice(i+1).filter(b=>rows.some(m=>m.id===a||m.id===b)&&!definitionUnknown.has([a,b].sort().join("|"))).map(b=>[a,b,"Reviewed defining historical programme differs in period, aims and pictorial method; not an assertion that artworks cannot combine styles."] as const));
const definitions=expandTerms(baseDefinitions,rows satisfies readonly TermAddition[],definitionPairs);
const concepts:Concept[]=[...definitions.concepts],evidence:SemanticEvidence[]=[...definitions.evidence];
for(const part of ["p2","p4"] as const) {
  const original=paintingMovementSet.concepts.filter(c=>c.partId===part);
  const relation=original[0].relation,qualifiers={assessmentScope:"original-formative-historical-context"};
  const added=rows.map(m=>{
    const evidenceId=`movement-progression:${part}:${m.id}:positive`,object=part==="p2"?m.work:m.pioneer;
    const scope="The movement's original historical development; not later revivals, influences or appropriations. For Cubism, include foundational experiments.";
    const subjectId=`movement:${m.id}`,valueId=part==="p2"?`artwork:${m.workId}`:`person:${m.pioneerId}`;
    evidence.push({id:evidenceId,kind:"assertion",predicateId:relation,qualifiers,subjectId,valueId,verdict:"valid",sourceUrl:part==="p2"?m.workUrl:m.pioneerUrl,
      locator:part==="p2"?m.workLocator:m.pioneerLocator,reviewStatus:"verified",reviewedBy:"Codex — primary-source comparison (not independent human approval)",reviewedAt:"2026-10-15"});
    const c:Concept={id:`art_painting_l1_${part}_${m.id}`,topicId:"art",subtopicId:"painting",levelId:"l1",partId:part,relation,subject:m.term,object,difficulty:2,answerKind:"short",introducedIn:"C",
      learning:{reinforcementPriority:2,rationale:"Additional major movement; introduce after the preserved initial survey and reinforce established foundations first."},tags:["verified-art-content","historical-movements"],
      semantic:{subject:{id:subjectId,entityType:"category",caseSensitive:false},value:{id:valueId,entityType:part==="p2"?"work":"person",caseSensitive:false},qualifiers},
      assessment:{reviewStatus:"verified",answerLeakageReviewed:true,evidenceIds:[evidenceId],subjectType:"category",valueType:part==="p2"?"work":"person",factId:`movement:${m.id}:${relation}`,
        scope:{text:scope,qualifierKeys:["assessmentScope"]},presentation:{scope:{...scopeWording(scope,"Original historical development; not later revivals or influences.",[evidenceId]),reviewedAt:"2026-10-21"}}}};
    return c;
  });
  const all=[...original,...added];
  // Only these source-compared chronological exclusions are authorized. Close
  // contemporaries and stylistic influence remain unknown, including Rococo/
  // Baroque and Romanticism/Realism. Neither different labels nor absence of a
  // membership assertion certifies an incorrect option.
  const exclusions:readonly (readonly [string,string,string])[]=[
    ...rows.map(m=>[m.id,"early-renaissance","Masaccio and his1426panel precede the later movement's documented emergence; the later artist and original work postdate the fifteenth-century formative phase."] as const),
    ...rows.filter(m=>m.id!=="rococo").map(m=>[m.id,"baroque","Carracci's1600ceiling and death1609 precede the later movement's documented formation; the later work and artist postdate the original Roman Baroque development, not later borrowing."] as const),
    ...rows.filter(m=>part==="p2" || !["fauvism","surrealism"].includes(m.id)).map(m=>[m.id,"pop-art","The cited original work and initiating figure precede Pop art's1950s/1960s emergence; Warhol's1962work and birth1928 cannot belong to the earlier movement's original formation."] as const),
    ["neoclassicism","surrealism","David died1825 and the Oath was completed1785, before Surrealism's1924emergence; Ernst was born1891 and the1931painting postdates Neoclassicism's documented late18th/early19th-century original development."],
  ];
  for(const [a,b,reason] of exclusions) for(const [leftId,rightId] of [[a,b],[b,a]]) {
    const left=all.find(c=>c.semantic?.subject?.id===`movement:${leftId}`)!,right=all.find(c=>c.semantic?.subject?.id===`movement:${rightId}`)!;
    const source=rows.find(m=>m.id===a)!;
    const compared=[left,right].map(c=>[...paintingMovementSet.evidence,...evidence].find(e=>c.assessment?.evidenceIds.includes(e.id))).filter((e):e is SemanticEvidence=>!!e);
    evidence.push({id:`movement-progression:${part}:${leftId}:${rightId}:negative`,kind:"assertion",predicateId:relation,qualifiers,
      subjectId:left.semantic!.subject!.id!,valueId:right.semantic!.value!.id!,verdict:"invalid",sourceUrl:part==="p2"?source.workUrl:source.pioneerUrl,
      locator:`${part==="p2"?source.workLocator:source.pioneerLocator}. Movement scope: ${source.url} (${source.locator}). ${compared.map(e=>`Compared positive claim: ${e.sourceUrl} (${e.locator}).`).join(" ")} Chronological comparison of original formative contexts: ${reason}`,
      reviewStatus:"verified",reviewedBy:"Codex — primary-source chronological comparison (not independent human approval)",reviewedAt:"2026-10-15"});
  }
  concepts.push(...added);
}
export const progressionMovementSet={concepts,evidence};
