import { classicPlays, modernPlays } from './theatrePlays';
import { literaryFact, literarySource as s } from './literaryAuthoring';
import { joinSets } from './sourceAuthoring';
import { reviewedCohort, reviewedDefinitions } from './reviewedDefinitions';
const play=(id:string)=>[...classicPlays,...modernPlays].find(w=>w.id===id)!;
const mw=(id:string)=>s(`https://www.merriam-webster.com/dictionary/${encodeURIComponent(id)}`,'Dramatic-literature definition, not the colloquial sense','Merriam-Webster');
const romance=s('https://www.folger.edu/blogs/collation/whats-in-a-genre/','Romance plays: comedy and tragedy combined with fantastical features; overlapping genre metadata discussed explicitly','Folger Shakespeare Library');
const realism=s('https://www.open.edu/openlearn/mod/oucontent/view.php?id=1703&section=_glossary','Glossary: realism, representation broadly agreed to be true to life','Open University');
const farce=s('https://openbooks.library.umass.edu/earnestcommentary/chapter/1-1895-the-first-production/','Original reception: National Observer called Wilde a conscious and deliberate farceur; compare contemporary responses reproduced here','University of Massachusetts Amherst');
const rows=[
 ['comedy','Comedy','Drama treating its subject in an amusing or satirical way, often ending happily.','tartuffe',mw('comedy')],
 ['tragedy','Tragedy','Serious drama involving suffering or downfall; a revenge plot is not required.','antigone',mw('tragedy')],
 ['revenge-tragedy','Revenge tragedy','A tragedy whose main action is driven by the pursuit of vengeance.','hamlet',s('https://www.cambridge.org/core/journals/pmla/article/abs/relations-of-hamlet-to-contemporary-revenge-plays/F0BAF983D076794DC2C04431A0BF1F2D','Definition in abstract: leading motive revenge, with main action following its progress; distinguishes the subgenre from tragedy in general','PMLA / Cambridge University Press')],
 ['realist-drama','Realist drama','Drama presenting people and situations as recognisably true to life.','dolls-house',realism],
 ['romance','Dramatic romance','Drama combining comic and tragic elements with fantastical features.','tempest',romance],
 ['tragicomedy','Tragicomedy','Drama blending tragic and comic elements.','waiting-godot',mw('tragicomedy')],
 ['memory-play','Memory play','Drama whose presentation of past events is shaped by a character’s recollection.','glass-menagerie',play('glass-menagerie').genre.source],
 ['comedy-menace','Comedy of menace','Drama in which mundane, often comic conversation conceals threats and struggles for power.','birthday-party',s('https://www.goodmantheatre.org/artists/harold-pinter/','Genre account: domination and submission hidden in mundane conversations','Goodman Theatre')],
 ['absurd','Theatre of the Absurd','Drama using disrupted language and narrative to stage the difficulty of finding meaning.','bald-soprano',play('bald-soprano').genre.source],
 ['comedy-manners','Comedy of manners','Comedy satirising the manners and fashions of a particular social group.','school-scandal',mw('comedy of manners')],
 ['farce','Farce','Broad comedy built around exaggerated situations and improbable plots.','importance-earnest',mw('farce')],
] as const;
const terms=rows.map(([id,term,meaning,,source],i)=>({id,term,meaning,source,priority:i<6?5:i<9?4:3}));
const definitions=reviewedDefinitions('theatre','l2','p1',terms,[...reviewedCohort(terms.map(t=>t.id),'Distinguish these supplied defining meanings. A play may combine forms; parent, subtype and shared-feature comparisons remain unknown.',[
 'comedy|comedy-manners','comedy|farce','comedy|comedy-menace','comedy|tragicomedy','revenge-tragedy|tragedy','romance|tragicomedy','tragedy|tragicomedy','absurd|comedy-menace','absurd|farce','comedy-manners|farce','comedy|romance','comedy-menace|tragicomedy',
]),['tragedy','revenge-tragedy','Comparison concerns REQUIRED defining features: general tragedy does not require a revenge plot, whereas revenge tragedy requires vengeance to drive its main action. These two complete statements contradict one another about necessity. This does not deny that a revenge tragedy is also a tragedy.']]);
// The distinction about necessity must be visible in all forms, including
// matching. Merely rejecting a true parent-category description would be unsafe.
for(const concept of definitions.concepts){
 concept.semantic={...concept.semantic!,qualifiers:{...concept.semantic!.qualifiers,definitionBasis:'required-features'}};
 concept.assessment={...concept.assessment!,scope:{text:'Defining requirements.',qualifierKeys:['sense','definitionBasis'],visibility:'learner'}};
}
definitions.evidence=definitions.evidence.map(evidence=>({...evidence,qualifiers:{...evidence.qualifiers,definitionBasis:'required-features'}}));
const examples=joinSets(rows.map(([id,name,,workId],i)=>{const w=play(workId);return literaryFact({subtopic:'theatre',level:'l2',part:'p2',id,subject:name,subjectId:`theatre-genre:${id}`,subjectType:'category',answer:w.title,answerId:`work:${w.id}`,answerType:'work',source:id==='farce'?farce:w.genre.source,qualifiers:{creditId:w.authorId,creditBasis:'original-text-author'},scope:'Original play.',contract:{focus:{kind:'example-credit',identity:w.authorId,label:w.author}},priority:i<6?5:i<9?4:3,priorityReason:'Connect a form with a sourced play and its writer.'});}));
for(const [i,target] of examples.concepts.entries())for(const [j,candidate] of examples.concepts.entries())if(i!==j){
 const w=play(rows[j][3]),targetWork=play(rows[i][3]);if(w.authorId===targetWork.authorId)continue;
 examples.evidence.push({id:`theatre-genre-byline:${target.id}:${candidate.id}`,kind:'assertion',predicateId:target.relation,subjectId:target.semantic!.subject!.id!,valueId:candidate.semantic!.value!.id!,qualifiers:target.semantic!.qualifiers??{},verdict:'invalid',sourceUrl:w.source.url,locator:`${w.source.locator}. Original-text writer ${w.author}, not ${targetWork.author}; the visible named writer constraint is contradicted, without denying genre membership.`,reviewStatus:'verified',reviewedBy:'Codex — source-byline comparison (not independent human editorial approval)',reviewedAt:'2026-10-19'});
}
const writers=joinSets(rows.map(([id,name,,workId],i)=>{const w=play(workId);return literaryFact({subtopic:'theatre',level:'l2',part:'p4',id,subject:name,subjectId:`theatre-genre:${id}`,subjectType:'category',answer:w.author,answerId:w.authorId,answerType:'person',source:w.source,qualifiers:{projectId:`work:${w.id}`,creditAction:'wrote'},scope:'Original play.',contract:{focus:{kind:'project-credit',identity:`work:${w.id}`,label:w.title,action:'wrote'}},completeField:{valueIds:[w.authorId],reason:'The cited original writer of this named play, not a complete roster of playwrights associated with the form.'},priority:i<6?5:i<9?4:3,priorityReason:'Reinforce an original playwright through a specifically named contribution.'});}));
export const theatreGenreSets=[definitions,examples,writers];
