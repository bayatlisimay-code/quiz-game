import { joinSets, sourceFact } from './sourceAuthoring';
import { negativeComparison } from './qualifiedContrasts';
// Textual Microsoft typography documentation; no font files or specimen images
// are downloaded. These are stated properties, not an exclusive taxonomy.
const faces = [
 ['arial','Arial','Sans serif','Robin Nicholas and Patricia Saunders','group:nicholas-saunders',5,'Overview and Designers: original 1982 Nicholas design, family developed with Saunders.'],
 ['calibri','Calibri','Sans serif','Lucas de Groot','person:lucas-de-groot',5,'Overview: de Groot, 2004; Latin design, not later Arabic, Armenian or Georgian additions.'],
 ['georgia','Georgia','Serif','Matthew Carter','person:matthew-carter',5,'Overview: Carter; Scotch Roman ancestry and horizontal top serifs.'],
 ['verdana','Verdana','Sans serif','Matthew Carter','person:matthew-carter',5,'Overview and Designers: Carter type design; Tom Rickner separately credited for hinting.'],
 ['consolas','Consolas','Monospaced','Lucas de Groot','person:lucas-de-groot',5,'Overview: all characters the same width; Designers: Luc(as) de Groot.'],
 ['impact','Impact','Bold condensed display type','Geoffrey Lee','person:geoffrey-lee',5,'Overview: Geoffrey Lee, issued 1965; bold condensed face.'],
 ['wingdings','Wingdings (original symbols)','Symbol typeface','Kris Holmes and Charles Bigelow','group:holmes-bigelow',4,'Overview: original Lucida Icons, Arrows and Stars, 1990–91; Holmes and Bigelow.'],
 ['gabriola','Gabriola','Display typeface','John Hudson','person:john-hudson',4,'Overview and Designers: decorative display typeface by John Hudson.'],
 ['comic-sans-ms','Comic Sans MS','Comic-style script','Vincent Connare','person:vincent-connare',4,'Overview and Connare first-person account: comic lettering script begun October 1994.'],
 ['trebuchet-ms','Trebuchet MS','Sans serif','Vincent Connare','person:vincent-connare',3,'Overview: designed and engineered 1996 by Connare; geometric and humanist sans-serif influences.'],
 ['cambria','Cambria','Serif','Jelle Bosma','person:jelle-bosma',3,'Overview: original text design by Jelle Bosma in 2004; multi-script engineering teams are separate.'],
] as const;
const classificationPriorities:Readonly<Record<string,number>>={wingdings:5,impact:4,cambria:4,'comic-sans-ms':3};
export const designTypefaceSets = (['p2','p4'] as const).map(part=>{const set=joinSets(faces.map(([id,title,category,designer,designerId,priority,locator])=>{
 const assessedCategory = part==='p2' && id==='arial' ? 'Sans-serif' : part==='p2' && category==='Sans serif' ? 'Proportional sans-serif text' : part==='p2' && category==='Serif' ? 'Proportional serif text' : category;
 // Introduce all four independently distinguished spacing/repertoire classes in A;
 // Cambria reinforces proportional serif in B, Trebuchet sans serif in C.
 // Decorative use remains non-exclusive and is not required to supply matching.
 const assessedPriority = part==='p2' ? (classificationPriorities[id] ?? priority) : priority;
 const originalScope = id==='arial'
  ? 'Microsoft account; initial and family-design credits, not later script additions or hinting.'
  : 'Microsoft account; original type design, not later script additions or hinting.';
 const type = designerId.startsWith('group:') ? 'group' as const : 'person' as const;
 const members = id==='arial' ? ['person:robin-nicholas','person:patricia-saunders'] : id==='wingdings' ? ['person:kris-holmes','person:charles-bigelow'] : [];
 return sourceFact({...(part==='p2'?{reviewedAt:'2026-10-18'}:{}),subtopic:'design',level:'l6',part,id,subject:part==='p2'&&id==='wingdings'?'Wingdings (original family)':title,subjectId:`typeface:${id}`,subjectType:'typeface',
  answer:part==='p2'?assessedCategory:designer,answerId:part==='p2'?`type-property:${assessedCategory.toLowerCase().replace(/ /g,'-')}`:designerId,
  answerType:part==='p2'?'category':type,source:{url:`https://learn.microsoft.com/en-us/typography/font-list/${id}`,label:'Microsoft typography',locator:part==='p2'?`${locator} Font information table: Fixed pitch=${id==='consolas'?'True':'False'}; Script Tags ${id==='wingdings'?'Zsym and Symbol character set':'Latn and Latin text code pages'}. Proportional means variable character widths, distinct from fixed-pitch monospacing. Classifications describe the original text or symbol design, not every display use.`:locator},
  qualifiers:part==='p2'?{}:{role:'designer',attributionStatus:'certain',creditScope:id==='arial'?'initial-and-family-design':'original-type-design'},
  scope:part==='p2'?'':originalScope,priority:assessedPriority,
  priorityReason:part==='p2'?'Reinforce familiar text faces, with explicit spacing distinctions and a symbol-font contrast; revisit the serif group in B and sans-serif group in C.':priority===5?'Widely encountered typeface; reinforce its original design and distinguishing property.':'Extends familiarity with decorative and text typography.',
  ...(part==='p4'?{completeField:{valueIds:[designerId,...members],valueTypes:['person','group'] as const,reason:id==='arial'?'The Overview distinguishes the initial Nicholas design from the family developed with Saunders; these qualified design credits exclude later multi-script production.':'Precisely scoped original-design credit stated in the Overview, not the entire later multi-script production team.'},contract:{attribution:{role:'designer',status:'certain',verb:'credited'}}}:{}),
 });
}));
 if(part==='p2'){
  const mono=set.concepts.find(c=>c.object==='Monospaced')!;
  const symbols=set.concepts.find(c=>c.object==='Symbol typeface')!;
  for(const [i,c] of set.concepts.entries()){
   const source={url:`https://learn.microsoft.com/en-us/typography/font-list/${faces[i][0]}`,label:'Microsoft typography',locator:'Font information table: Fixed pitch and Script Tags; Overview describes the actual character design.'};
   // The reviewed Fixed pitch=False field is explicit evidence against
   // monospacing, not an inference from the stored classification's absence.
   if(c!==mono)set.evidence.push(negativeComparison(c,mono,source,'Fixed pitch is explicitly False; therefore this family is not monospaced. Consolas is explicitly True. This does not exclude serif/sans-serif or display uses.'));
   if(c!==symbols)set.evidence.push(negativeComparison(c,symbols,source,'The source documents a Latin text alphabet (Latn script and Latin text code pages), contrasting Wingdings original icon/symbol character design (Zsym and Symbol character set). The claim concerns the typeface character design, not whether text fonts also contain individual symbols.'));
   for(const candidate of set.concepts)if((['Sans-serif','Proportional sans-serif text'].includes(c.object)&&candidate.object==='Proportional serif text')||(c.object==='Proportional serif text'&&['Sans-serif','Proportional sans-serif text'].includes(candidate.object)))set.evidence.push(negativeComparison(c,candidate,source,`${faces[i][6]} The stated Latin text design has ${c.object==='Proportional serif text'?'serifs':'no serifs'}; the proposed opposite serif-structure label contradicts that design. Spacing and intended uses are independent and remain open.`));
  }
  // These negatives follow from a reviewed property of the TARGET, not from
  // another font's label or the absence of a database membership. A compound
  // answer requires all its attributes: fixed-pitch Consolas cannot be
  // proportional, regardless of its own serif structure. Symbol fonts are not
  // classified as Latin text families merely because some icons include letters.
  for(const candidate of set.concepts){
   if(!['Proportional serif text','Proportional sans-serif text'].includes(candidate.object))continue;
   set.evidence.push(negativeComparison(mono,candidate,{url:'https://learn.microsoft.com/en-us/typography/font-list/consolas',label:'Microsoft typography',locator:'Overview: all characters have the same width; Font information table: Fixed pitch=True'},'The proposed compound classification requires proportional character widths. Consolas has fixed character widths, explicitly contradicting that required property. This does NOT claim that monospaced and serif/sans-serif classifications are exclusive.'));
   set.evidence.push(negativeComparison(symbols,candidate,{url:'https://learn.microsoft.com/en-us/typography/font-list/wingdings',label:'Microsoft typography',locator:'Overview: Lucida Icons, Arrows and Stars; Font information: Zsym script, Symbol character set'},'The proposed compound answer is a Latin text-family classification. The assessed original Wingdings repertoire consists of icons, arrows, ornaments and symbols, not a Latin text alphabet. Individual encircled numerals or decorative strokes do not make it a serif or sans-serif Latin text family.'));
  }
  const arial=set.concepts.find(c=>c.semantic!.subject!.id==='typeface:arial')!;
  const originalArial=set.evidence.find(e=>arial.assessment!.evidenceIds.includes(e.id))!;
  set.evidence.push({...originalArial,id:'accessibility:arial:proportional-sans-serif',kind:'assertion',
   subjectId:'typeface:arial',valueId:'type-property:proportional-sans-serif-text',verdict:'valid'});
  for(const c of set.concepts.filter(c=>c.object==='Proportional sans-serif text')){
   const original=set.evidence.find(e=>c.assessment!.evidenceIds.includes(e.id))!;
   set.evidence.push({...original,id:`accessibility:${c.id}:sans-serif`,kind:'assertion',
    subjectId:c.semantic!.subject!.id!,valueId:'type-property:sans-serif',verdict:'valid'});
  }
  // Preserve the two original compound-property certificates under their old
  // identities. They do not refute Arial's new, broader sans-serif answer.
  const compoundArial={...arial,object:'Proportional sans-serif text',semantic:{...arial.semantic!,value:{...arial.semantic!.value!,id:'type-property:proportional-sans-serif-text'}}};
  set.evidence.push(negativeComparison(mono,compoundArial,{url:'https://learn.microsoft.com/en-us/typography/font-list/consolas',label:'Microsoft typography',locator:'Overview: all characters have the same width; Font information table: Fixed pitch=True'},'The proposed compound classification requires proportional character widths. Consolas has fixed character widths, explicitly contradicting that required property. This does NOT claim that monospaced and serif/sans-serif classifications are exclusive.'));
  set.evidence.push(negativeComparison(symbols,compoundArial,{url:'https://learn.microsoft.com/en-us/typography/font-list/wingdings',label:'Microsoft typography',locator:'Overview: Lucida Icons, Arrows and Stars; Font information: Zsym script, Symbol character set'},'The proposed compound answer is a Latin text-family classification. The assessed original Wingdings repertoire consists of icons, arrows, ornaments and symbols, not a Latin text alphabet. Individual encircled numerals or decorative strokes do not make it a serif or sans-serif Latin text family.'));
  // Arial's broad answer does not exclude monospaced sans-serif faces.
  // No reciprocal negative from Consolas is asserted for that broad answer.
  // Source gives an explicit display USE for Arial. Never turn the absent
  // label in our one stored classification into proof that it is false.

 }
 return set;
});
