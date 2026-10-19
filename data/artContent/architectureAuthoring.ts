import { joinSets, sourceFact, type AuthoredSet, type Source } from './sourceAuthoring';
export type Building = Readonly<{id:string;title:string;credit:string;creditId:string;country:string;source:Source;clue:string;priority:number;collaboration?:string;acceptedCreditIds?:readonly string[]}>;
export function authorBuildings(level:string,works:readonly Building[]):AuthoredSet {
 return joinSets(works.flatMap(w=>(['p1','p2','p4'] as const).map(part=>{
  const workId=`architecture:${w.id}`,recognition=part==='p1',creator=part==='p2';
  const answer=recognition?w.title:creator?w.credit:w.country;
  const answerId=recognition?workId:creator?w.creditId:`country:${w.country}`;
  return sourceFact({subtopic:'architecture',level,part,id:w.id,subject:recognition?`Description of ${w.id}`:w.title,
   subjectId:recognition?`description:${workId}:v1`:workId,subjectType:recognition?'stimulus':'work',answer,answerId,
   answerType:recognition?'work':creator?(w.creditId.startsWith('group:')?'group':'person'):'country',source:w.source,
   priority:w.priority,priorityReason:w.priority===5?'Anchor work for its period and region; reinforce the architectural attribution and place.':'Adds a distinct building type, region or architectural approach beyond the anchor works.',
   qualifiers:recognition?{}:creator?{role:'architect',attributionStatus:'certain',assessmentScope:'principal-catalogue-credit'}:{countryConvention:'present-day'},
   scope:creator?`${w.source.learnerLabel ?? w.source.label}; named architectural credit.${w.collaboration?` ${w.collaboration}`:''}`:recognition?'':'Present-day borders.',
   description:recognition?w.clue:undefined,
   contract:creator?{attribution:{role:'architect',status:'certain',verb:'credited'}}:part==='p4'?{geography:'present-day'}:undefined,
   completeField:{...(creator?{valueTypes:['person','group'] as const}:{}),valueIds:creator?[answerId,...(w.acceptedCreditIds??[])]:[answerId],reason:recognition?'The described named work/version is identified by the cited institutional account.':creator?'The complete named principal architectural credit under the displayed source scope; not every engineer, contractor, interior designer or later alteration.':'The specific immovable work is located in this present-day country; not all countries in a serial heritage listing.'},
  });
 })));
}
