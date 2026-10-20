import { classicNovels } from './literatureClassics';
import { literaryFact, literarySource as s } from './literaryAuthoring';
import { joinSets } from './sourceAuthoring';
type Row=readonly [workId:string,id:string,name:string,otherId:string,other:string,relationship:string,kind:'family'|'companionship',pg:number,locator:string];
export const literaryCharacterRows:readonly Row[]=[
 ['pride-prejudice','elizabeth-bennet','Elizabeth Bennet','jane-bennet','Jane Bennet','Her elder sister','family',1342,'Chapters 1–4: Jane as eldest daughter; Elizabeth and Jane’s sisterly conversation'],
 ['jane-eyre','jane-eyre','Jane Eyre','sarah-reed','Mrs Reed','Her aunt at Gateshead','family',1260,'Opening Gateshead chapters: Jane’s aunt Mrs Reed, widow of Jane’s maternal uncle'],
 ['wuthering-heights','catherine-earnshaw','Catherine Earnshaw','hindley-earnshaw','Hindley Earnshaw','Her biological brother','family',768,'Chapters 4–5: old Earnshaw’s son Hindley and daughter Catherine; Heathcliff fostered separately'],
 ['frankenstein','victor-frankenstein','Victor Frankenstein','william-frankenstein','William Frankenstein','His youngest brother','family',84,'Family account: Ernest the older of Victor’s two younger brothers; William the youngest; distinguish the unnamed creature'],
 ['dracula','lucy-westenra','Lucy Westenra','mrs-westenra','Mrs Westenra','Her mother','family',345,'Letters and diary entries distinguish Lucy from her mother Mrs Westenra'],
 ['moby-dick','ishmael','Ishmael','queequeg','Queequeg','His bed-sharing companion at the Spouter-Inn','companionship',2701,'Chapters 3–4, The Spouter-Inn and The Counterpane; shared bed and ensuing friendship, not all shipmates'],
 ['scarlet-letter','hester-prynne','Hester Prynne','pearl','Pearl','Her daughter','family',25344,'Chapter 6, Pearl; named child of Hester; paternal identity is not assessed'],
 ['huckleberry-finn','huckleberry-finn','Huckleberry Finn','pap-finn','Pap Finn','His father','family',76,'Chapters 5–6: Huck’s father, called Pap; Jim is his companion rather than father'],
 ['little-women','jo-march','Jo March','meg-march','Meg March','Her elder sister','family',514,'Chapter 1: Meg eldest, Jo next, Beth and Amy younger'],
 ['don-quixote','don-quixote','Don Quixote','sancho-panza','Sancho Panza','His named squire','companionship',996,'Part I, chapter 7 onward: Sancho recruited as squire; not a complete list of companions'],
 ['treasure-island','jim-hawkins','Jim Hawkins','mrs-hawkins','Mrs Hawkins','His mother','family',120,'Chapters 1–4: Jim’s parents run the Admiral Benbow; his mother accompanies him to the chest'],
];
export const literatureCharacterSet=joinSets(literaryCharacterRows.flatMap(([workId,id,name,otherId,other,relationship,kind,n,locator],i)=>(['p1','p2','p4'] as const).map(part=>{
 const w=classicNovels.find(w=>w.id===workId)!,work=part==='p1',creator=part==='p2',role='original creator',valueId=work?`work:${workId}`:creator?w.authorId:`character:${workId}:${otherId}`;
 return literaryFact({subtopic:'literature',level:'l8',part,id,subject:work?(id==='ishmael'?'Ishmael, the Pequod sailor':name):`${name} (${w.title})`,subjectId:`character:${workId}:${id}`,subjectType:'character',answer:work?w.title:creator?w.author:other,answerId:valueId,answerType:work?'work':creator?'person':'character',source:s(`https://www.gutenberg.org/ebooks/${n}`,`${locator}; original author field and full primary text`,'Original novel text'),qualifiers:work?{occurrence:'narrative-character',text:'original-novel'}:creator?{role,attributionStatus:'certain',workId:`work:${workId}`}:{workId:`work:${workId}`,relationship:kind,relationshipScope:relationship},scope:work?'Original narrative, excluding allusions and adaptations.':creator?'Original novel text.':`${relationship}.`,priority:i<6?5:i<9?4:3,priorityReason:'Connect a named character with the original work, writer and a specific introductory relationship.',contract:creator?{attribution:{role,status:'certain',verb:'credited'}}:work?undefined:{association:{kind,workId:`work:${workId}`,spoilerFree:true}},
  ...(!work?{completeField:{valueIds:[valueId],reason:creator?'Original novel’s author credit, distinct from narrators and later adaptations.':`The cited narrative establishes the specific singular relationship: ${relationship.toLowerCase()}. This does not close the broader set of relatives, friends or companions.`}}:{}),
 });
})));
// Explicit original-narrative comparisons against these specific original novels. These
// are reviewed character identities in primary texts, never exhaustive lists of
// every work/adaptation featuring a person or matching a name. Biblical Ishmael
// is distinct from the Pequod sailor, whose visible clue disambiguates him.
const originalNovelReviews:Readonly<Record<string,readonly string[]>>={
 'elizabeth-bennet':['jane-eyre','wuthering-heights','frankenstein','dracula','moby-dick','scarlet-letter','huckleberry-finn','little-women','don-quixote','treasure-island'],
 'jane-eyre':['pride-prejudice','wuthering-heights','frankenstein','dracula','moby-dick','scarlet-letter','huckleberry-finn','little-women','don-quixote','treasure-island'],
 'catherine-earnshaw':['pride-prejudice','jane-eyre','frankenstein','dracula','moby-dick','scarlet-letter','huckleberry-finn','little-women','don-quixote','treasure-island'],
 'victor-frankenstein':['pride-prejudice','jane-eyre','wuthering-heights','dracula','moby-dick','scarlet-letter','huckleberry-finn','little-women','don-quixote','treasure-island'],
 'lucy-westenra':['pride-prejudice','jane-eyre','wuthering-heights','frankenstein','moby-dick','scarlet-letter','huckleberry-finn','little-women','don-quixote','treasure-island'],
 'ishmael':['pride-prejudice','jane-eyre','wuthering-heights','frankenstein','dracula','scarlet-letter','huckleberry-finn','little-women','don-quixote','treasure-island'],
 'hester-prynne':['pride-prejudice','jane-eyre','wuthering-heights','frankenstein','dracula','moby-dick','huckleberry-finn','little-women','don-quixote','treasure-island'],
 'huckleberry-finn':['pride-prejudice','jane-eyre','wuthering-heights','frankenstein','dracula','moby-dick','scarlet-letter','little-women','don-quixote','treasure-island'],
 'jo-march':['pride-prejudice','jane-eyre','wuthering-heights','frankenstein','dracula','moby-dick','scarlet-letter','huckleberry-finn','don-quixote','treasure-island'],
 'don-quixote':['pride-prejudice','jane-eyre','wuthering-heights','frankenstein','dracula','moby-dick','scarlet-letter','huckleberry-finn','little-women','treasure-island'],
 'jim-hawkins':['pride-prejudice','jane-eyre','wuthering-heights','frankenstein','dracula','moby-dick','scarlet-letter','huckleberry-finn','little-women','don-quixote'],
};
for(const [id,rejectedWorks] of Object.entries(originalNovelReviews)){
 const target=literatureCharacterSet.concepts.find(c=>c.id===`art_literature_l8_p1_${id}`)!;
 const origin=literaryCharacterRows.find(row=>row[1]===id)!;
 for(const workId of rejectedWorks){
  const candidate=literaryCharacterRows.find(row=>row[0]===workId)!;
  const novel=classicNovels.find(w=>w.id===workId)!;
  literatureCharacterSet.evidence.push({id:`reviewed-original-novel:${id}:${workId}`,kind:'assertion',predicateId:target.relation,
   subjectId:target.semantic!.subject!.id!,valueId:`work:${workId}`,qualifiers:target.semantic!.qualifiers!,verdict:'invalid',
   sourceUrl:`https://www.gutenberg.org/cache/epub/${candidate[7]}/pg${candidate[7]}-images.html`,
   locator:`Original narrative of ${novel.title}, distinguished from editorial prefaces and literary allusions: ${target.subject} is not an acting character in this novel. Compare this character's original narrative identity at https://www.gutenberg.org/ebooks/${origin[7]} (${origin[8]}). This certificate compares these specific original texts; it does not infer all possible appearances from the teaching dataset.`,
   reviewStatus:'verified',reviewedBy:'Codex — primary-novel character comparison (not independent human editorial approval)',reviewedAt:'2026-10-19',
  });
 }
}
