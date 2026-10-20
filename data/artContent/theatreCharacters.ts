import { literaryFact, literarySource as s } from './literaryAuthoring';
import { joinSets } from './sourceAuthoring';
type CharacterStudy=Readonly<{id:string;name:string;playId:string;play:string;writerId:string;writer:string;pg:number;locator:string;relative:string;relativeId:string;relationship:string}>;
export const theatreCharacterStudies:readonly CharacterStudy[]=[
 {id:'laertes',name:'Laertes',playId:'hamlet',play:'Hamlet',writerId:'william-shakespeare',writer:'William Shakespeare',pg:1524,locator:'Act I scene 3: Laertes and Ophelia address one another as sister and brother; Polonius enters as their father',relative:'Ophelia',relativeId:'ophelia',relationship:'His sister'},
 {id:'orgon',name:'Orgon',playId:'tartuffe',play:'Tartuffe',writerId:'moliere',writer:'Molière',pg:28488,locator:'Characters: Orgon, Elmire’s husband; Elmire, Orgon’s wife',relative:'Elmire',relativeId:'elmire',relationship:'His wife'},
 {id:'ismene',name:'Ismene',playId:'antigone',play:'Antigone',writerId:'sophocles',writer:'Sophocles',pg:31,locator:'Antigone, dramatis personae and opening dialogue: Ismene and Antigone as sisters; Ismene also occurs in Oedipus at Colonus, not claimed exclusive to this play',relative:'Antigone',relativeId:'antigone',relationship:'Her sister'},
 {id:'pentheus',name:'Pentheus',playId:'bacchae',play:'The Bacchae',writerId:'euripides',writer:'Euripides',pg:35173,locator:'Characters in the Play: Agave, mother of Pentheus; original Euripides distinguished from translator Gilbert Murray',relative:'Agave',relativeId:'agave',relationship:'His mother'},
 {id:'nora-helmer',name:'Nora Helmer',playId:'dolls-house',play:'A Doll’s House',writerId:'henrik-ibsen',writer:'Henrik Ibsen',pg:2542,locator:'Dramatis Personae: Torvald Helmer, Nora his wife; original Ibsen rather than translator Sharp',relative:'Torvald Helmer',relativeId:'torvald-helmer',relationship:'Her husband'},
 {id:'ranevskaya',name:'Lyubov Ranevskaya',playId:'cherry-orchard',play:'The Cherry Orchard',writerId:'anton-chekhov',writer:'Anton Chekhov',pg:7986,locator:'The Cherry Orchard, Characters: Lubov Andreyevna Ranevsky; Leonid Andreyevitch Gaev, her brother; spelling variants denote same people',relative:'Leonid Gayev',relativeId:'leonid-gayev',relationship:'Her brother'},
 {id:'lady-bracknell',name:'Lady Bracknell',playId:'importance-earnest',play:'The Importance of Being Earnest',writerId:'oscar-wilde',writer:'Oscar Wilde',pg:844,locator:'The Persons in the Play and Act I: Gwendolen Fairfax addresses Lady Bracknell as Mamma; daughter relationship disclosed immediately',relative:'Gwendolen Fairfax',relativeId:'gwendolen-fairfax',relationship:'Her daughter'},
 {id:'eliza-doolittle',name:'Eliza Doolittle',playId:'pygmalion',play:'Pygmalion',writerId:'george-bernard-shaw',writer:'George Bernard Shaw',pg:3825,locator:'Act II: Alfred Doolittle identifies Eliza as his daughter; the original play, not the musical adaptation',relative:'Alfred Doolittle',relativeId:'alfred-doolittle',relationship:'Her father'},
 {id:'sir-peter-teazle',name:'Sir Peter Teazle',playId:'school-scandal',play:'The School for Scandal',writerId:'richard-brinsley-sheridan',writer:'Richard Brinsley Sheridan',pg:1929,locator:'Act II scene 1: Sir Peter explicitly identifies Lady Teazle as his wife',relative:'Lady Teazle',relativeId:'lady-teazle',relationship:'His wife'},
 {id:'hardcastle',name:'Mr Hardcastle',playId:'she-stoops-conquer',play:'She Stoops to Conquer',writerId:'oliver-goldsmith',writer:'Oliver Goldsmith',pg:383,locator:'Dramatis Personae and Act I: Hardcastle and Miss Hardcastle; father–daughter conversation identifies Kate',relative:'Kate Hardcastle',relativeId:'kate-hardcastle',relationship:'His daughter'},
 {id:'barabas',name:'Barabas',playId:'jew-malta',play:'The Jew of Malta',writerId:'christopher-marlowe',writer:'Christopher Marlowe',pg:901,locator:'Dramatis Personae: Abigail, daughter of Barabas; Act I explicitly addresses her as daughter',relative:'Abigail',relativeId:'abigail',relationship:'His daughter'},
];
export const theatreCharacterSet=joinSets(theatreCharacterStudies.flatMap((w,i)=>(['p1','p2','p4'] as const).map(part=>{
 const work=part==='p1',creator=part==='p2',role='original playwright',workId=`work:${w.playId}`,subjectId=`character:${w.playId}:${w.id}`;
 return literaryFact({subtopic:'theatre',level:'l7',part,id:w.id,subject:work?w.name:`${w.name} (${w.play})`,subjectId,subjectType:'character',answer:work?w.play:creator?w.writer:w.relative,answerId:work?workId:creator?`person:${w.writerId}`:`character:${w.playId}:${w.relativeId}`,answerType:work?'work':creator?'person':'character',source:s(`https://www.gutenberg.org/files/${w.pg}/${w.pg}-h/${w.pg}-h.htm`,w.locator,'Original play text'),
  qualifiers:work?{occurrence:'named-stage-character',text:'original-play'}:creator?{role,attributionStatus:'certain',workId}:{workId,relationship:'family',kinship:w.relationship},scope:work?'Original play; named stage role.':creator?'Original play text.':`${w.relationship}.`,priority:i<6?5:i<9?4:3,priorityReason:'Identify a character, the original playwright and a relationship disclosed without a plot-ending spoiler.',
  contract:creator?{attribution:{role,status:'certain',verb:'credited'}}:work?undefined:{association:{kind:'family',workId,spoilerFree:true}},
  // Family is open in general; the visible father/mother/sister/spouse field
  // is the explicit singular relationship established by the cited script.
  ...(!work?{completeField:{valueIds:[creator?`person:${w.writerId}`:`character:${w.playId}:${w.relativeId}`],reason:creator?'Original-text writer credit, not translator or an author of a later adaptation.':`The script establishes the specific singular relationship ${w.relationship.toLowerCase()}; this is not a complete list of friends or family members.`}}:{}),
 });
})));
// These exclusions were checked against the actual named stage casts, not the
// teaching dataset. They make no claim about other plays, allusions, adaptations,
// or an exhaustive bibliography of a character. In particular Ismene's appearance
// in Oedipus at Colonus remains valid. Pygmalion has no front-matter cast roster in
// this edition and is deliberately not used as a negative certificate here.
const castExclusions:Readonly<Record<string,readonly string[]>>={
 hamlet:['orgon','ismene','pentheus','nora-helmer','ranevskaya','lady-bracknell','eliza-doolittle','sir-peter-teazle','hardcastle','barabas'],
 tartuffe:['laertes','ismene','pentheus','nora-helmer','ranevskaya','lady-bracknell','eliza-doolittle','sir-peter-teazle','hardcastle','barabas'],
 antigone:['laertes','orgon','pentheus','nora-helmer','ranevskaya','lady-bracknell','eliza-doolittle','sir-peter-teazle','hardcastle','barabas'],
 bacchae:['laertes','orgon','ismene','nora-helmer','ranevskaya','lady-bracknell','eliza-doolittle','sir-peter-teazle','hardcastle','barabas'],
 'dolls-house':['laertes','orgon','ismene','pentheus','ranevskaya','lady-bracknell','eliza-doolittle','sir-peter-teazle','hardcastle','barabas'],
 'cherry-orchard':['laertes','orgon','ismene','pentheus','nora-helmer','lady-bracknell','eliza-doolittle','sir-peter-teazle','hardcastle','barabas'],
 'importance-earnest':['laertes','orgon','ismene','pentheus','nora-helmer','ranevskaya','eliza-doolittle','sir-peter-teazle','hardcastle','barabas'],
 'school-scandal':['laertes','orgon','ismene','pentheus','nora-helmer','ranevskaya','lady-bracknell','eliza-doolittle','hardcastle','barabas'],
 'she-stoops-conquer':['laertes','orgon','ismene','pentheus','nora-helmer','ranevskaya','lady-bracknell','eliza-doolittle','sir-peter-teazle','barabas'],
 'jew-malta':['laertes','orgon','ismene','pentheus','nora-helmer','ranevskaya','lady-bracknell','eliza-doolittle','sir-peter-teazle','hardcastle'],
};
for(const [playId,excluded] of Object.entries(castExclusions)){
 const script=theatreCharacterStudies.find(w=>w.playId===playId)!;
 for(const id of excluded){
  const target=theatreCharacterSet.concepts.find(c=>c.partId==='p1'&&c.id===`art_theatre_l7_p1_${id}`)!;
  theatreCharacterSet.evidence.push({id:`reviewed-stage-cast:${id}:${playId}`,kind:'assertion',predicateId:target.relation,
   subjectId:target.semantic!.subject!.id!,valueId:`work:${playId}`,qualifiers:target.semantic!.qualifiers!,verdict:'invalid',
   sourceUrl:playId==='hamlet'?'https://www.folgerdigitaltexts.org/PDF/Ham.pdf':`https://www.gutenberg.org/cache/epub/${script.pg}/pg${script.pg}-images.html`,
   locator:`${script.play}: named stage cast (Dramatis Personae / Characters / Persons in the Play), scoped to this play rather than the other plays in a collected volume. Reviewed exclusion: ${target.subject} is not a named stage role in this script. Compare the original script establishing this character: ${theatreCharacterStudies.find(w=>w.id===id)!.locator}. Names and translation variants were compared as character identities, not mere spelling differences.`,
   reviewStatus:'verified',reviewedBy:'Codex — primary-script cast comparison (not independent human editorial approval)',reviewedAt:'2026-10-19',
  });
 }
}
