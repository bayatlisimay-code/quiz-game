import { joinSets, sourceFact, architectureDesignReview, type Source, type AuthoredSet } from './sourceAuthoring';
export type DesignWork=Readonly<{id:string;title:string;designer:string;designerId:string;year:string;source:Source;clue:string;priority:number;acceptedCreatorIds?:readonly string[];dateSubject?:string}>;
export const designWork=(id:string,title:string,designer:string,designerId:string,year:string,url:string,label:string,locator:string,clue:string,priority:number,acceptedCreatorIds?:readonly string[]):DesignWork=>({id,title,designer,designerId,year,source:{url,label,locator},clue,priority,acceptedCreatorIds});

/** Original-design decades are a calendar partition, not stylistic cut-offs.
 * The caller supplies a verified single-year source label; uncertain or
 * cross-decade catalogue ranges cannot be rounded into this contract. */
export function authorDesignWorks(level:string,works:readonly DesignWork[],decades=false):AuthoredSet {
 return joinSets(works.flatMap(w=>(['p1','p2','p4'] as const).map(part=>{
 const recognition=part==='p1',creator=part==='p2',workId=`design:${w.id}`;
 if(decades && !/^\d{4}$/.test(w.year)) throw new Error(`Unqualified creation decade: ${w.id}`);
 const start=decades?Math.floor(Number(w.year)/10)*10:0, date=decades?`${start}s`:w.year;
 const answer=recognition?w.title:creator?w.designer:date;
 const answerId=recognition?workId:creator?w.designerId:decades?`decade:${start}`:`date:catalogue-label:${w.year}`;
 const result=sourceFact({subtopic:'design',level,part,id:w.id,subject:recognition?`Description of ${w.id}`:creator?w.title:w.dateSubject??w.title,
  subjectId:recognition?`description:${workId}:v1`:workId,subjectType:recognition?'stimulus':'design',answer,answerId,
  answerType:recognition?'design':creator?(w.designerId.startsWith('group:')?'group':'person'):decades?'period':'date',source:w.source,
  qualifiers:recognition?{}:creator?{role:'designer',attributionStatus:'certain',assessmentScope:'principal-catalogue-credit'}:decades?{event:'creation',datePrecision:'decade'}:{event:'creation',dateBasis:'catalogue-label'},
  scope:recognition?'':creator?`${w.source.label}; credited design, not manufacture.`:decades?`${w.source.label}; original design, not later manufacture.`:`${w.source.label}; this version’s full catalogue date.`,
  priority:w.priority,priorityReason:w.priority===5?'Anchor of industrial design; reinforce its distinguishing form, credited design and dating.':'Extends the chronology, materials and design approaches beyond the anchor objects.',
  contract:creator?{attribution:{role:'designer',status:'certain',verb:'credited'}}:!recognition?{event:'creation',...(decades?{response:{complete:true,forms:[date,`the ${date}`,`${start}’s`,`${start}'s`].map(text=>({text,caseSensitive:false}))}}:{dateInterpretation:'catalogue-label' as const})}:undefined,
  ...(!recognition&&!creator&&decades?{temporal:{start,end:start+9,calendar:'gregorian-proleptic' as const},aliases:[`the ${date}`,`${start}’s`,`${start}'s`]}:{}),
  description:recognition?w.clue:undefined,
  completeField:{...(creator?{valueTypes:['person','group'] as const}:{}),valueIds:creator?[answerId,...(w.acceptedCreatorIds??[])]:[answerId],reason:recognition?'The independently authored description identifies this cited named design among the supplied works.':creator?'Named designer credits (including individually credited members of a duo), distinguished from manufacturers; assessment is source-qualified.':decades?`The verified design year ${w.year} falls within the unique calendar decade ${start}–${start+9}. This is not a rounded uncertain date or a stylistic boundary.`:'The displayed account’s full recorded date label for this version, not every overlapping interval or later production date.'},
 });
 if(decades && part==='p4') result.evidence.push({...architectureDesignReview,id:`design-year-bound:${w.id}`,kind:'date-bound',predicateId:result.concepts[0].relation,subjectId:workId,qualifiers:{event:'creation',datePrecision:'decade'},sourceUrl:w.source.url,locator:`${w.source.locator}. Design-year label ${w.year}; standard calendar decade, not production date.`,start:Number(w.year),end:Number(w.year),calendar:'gregorian-proleptic'});
 return result;
 })));
}
