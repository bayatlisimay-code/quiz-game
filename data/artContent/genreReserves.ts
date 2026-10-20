import { literarySource } from './literaryAuthoring';
import { joinSets, sourceFact } from './sourceAuthoring';

// Source-verified reserves only. Deliberately NOT imported by activeArtContent:
// approval of a classification is not approval to insert it into a teaching plan.
// Any future selection still requires negative evidence and joint matching proof.
export const genreReserveFacts = joinSets([
 sourceFact({reviewedAt:'2026-10-20',subtopic:'literature',level:'l1',part:'p2',id:'nineteen-eighty-four',
  subject:'Nineteen Eighty-Four',subjectId:'work:nineteen-eighty-four',subjectType:'work',
  answer:'Dystopian fiction',answerId:'literary-genre:dystopian',answerType:'category',
  source:literarySource('https://news.yale.edu/2017/03/10/why-has-dystopian-genre-made-comeback-yale-professor-weighs','Orwell’s Nineteen Eighty-Four discussed in the dystopian tradition by a Yale specialist.','Yale University'),
  qualifiers:{},scope:'',priority:3,priorityReason:'Unscheduled reserve: widely recognised dystopian novel; no active replacement yet justified.'}),
 sourceFact({reviewedAt:'2026-10-20',subtopic:'theatre',level:'l1',part:'p2',id:'oklahoma',
  subject:'Oklahoma!',subjectId:'work:oklahoma',subjectType:'work',
  answer:'Musical',answerId:'theatre-genre:musical',answerType:'category',
  source:literarySource('https://www.concordtheatricals.com/p/44839/rodgers-hammersteins-oklahoma','Licensed original Rodgers and Hammerstein work: full-length musical, score and musical numbers; not the source play Green Grow the Lilacs.','Concord Theatricals'),
  qualifiers:{},scope:'',priority:3,priorityReason:'Unscheduled reserve: recognised musical form; insertion requires complete assessment compatibility.'}),
]);
