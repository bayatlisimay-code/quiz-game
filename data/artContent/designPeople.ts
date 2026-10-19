import { designFieldStudies, fieldActivities, fieldProjectLabels, fieldProjectCredits } from './designFields';
import { joinSets, sourceFact, architectureDesignReview } from './sourceAuthoring';
import { negativeComparison } from './qualifiedContrasts';
import type { TemporalValue } from '../../src/quizEngine/assessmentTypes';
// These bounds describe the documented PROJECT, never a designer's entire career.
const activity:Readonly<Record<string,Readonly<{label:string;start:number;end:number}>>>= {
 type:{label:'1990s',start:1996,end:1996},graphic:{label:'1960s',start:1966,end:1966},fashion:{label:'1920s',start:1910,end:1971},
 product:{label:'1980s',start:1985,end:1985},furniture:{label:'1918–1923',start:1918,end:1923},interior:{label:'1920s',start:1926,end:1927},
 landscape:{label:'1970s',start:1970,end:1970},textile:{label:'1880s',start:1883,end:1883},exhibition:{label:'1920s',start:1927,end:1927},
 interaction:{label:'1960s',start:1962,end:1968},packaging:{label:'1910s',start:1915,end:1915},
};
const temporal=(id:string):TemporalValue=>{const a=activity[id];return {start:a.label.endsWith('s')?Number(a.label.slice(0,4)):a.start,end:a.label.endsWith('s')?Number(a.label.slice(0,4))+9:a.end,calendar:'gregorian-proleptic'};};
export const designPeopleSets=(['p1','p2','p4'] as const).map(part=>{
 const set=joinSets(designFieldStudies.map(f=>sourceFact({reviewedAt:'2026-10-18',
 subtopic:'design',level:'l4',part,id:f.id,subject:f.designer,subjectId:f.designerId,subjectType:f.designerId.startsWith('group:')?'group':'person',
 answer:part==='p1'?f.name:part==='p2'?f.work:activity[f.id].label,
 answerId:part==='p1'?`design-field:${f.id}`:part==='p2'?f.workId:`documented-activity:${activity[f.id].label}`,
 answerType:part==='p1'?'category':part==='p2'?(f.workId.startsWith('typeface:')?'typeface':'design'):'period',source:part==='p1'&&f.id==='landscape'?{url:'https://whc.unesco.org/en/list/1100/',label:'UNESCO',locator:'Authenticity: Burle Marx landscape designs and Copacabana beach redesign; paving AND planting preserve the landscape morphology. This assessment isolates physical outdoor-space planning, not the graphic pattern of pavement.'}:f.source,
 qualifiers:part==='p4'?{periodBasis:'documented-project-activity',projectId:f.workId}:part==='p1'?{projectId:f.workId,fieldBasis:'specific-design-activity'}:{creditId:f.designerId,creditBasis:'named-project-credit'},
 scope:part==='p4'?'This project, not the entire career.':part==='p1'?fieldActivities[f.id]:'Published original design credits.',
 priority:f.priority,priorityReason:'Reinforce a documented contribution rather than an exclusive career field or invented career dates.',
 ...(part==='p4'?{temporal:temporal(f.id)}:{}),
 contract:{factId:`${f.designerId}:${part}:documented-project:${f.workId}`,...(part!=='p2'?{focus:{kind:part==='p1'?'project-field' as const:'project-period' as const,identity:f.workId,label:fieldProjectLabels[f.id]}}:{})},
 })));
 if(part==='p1'){
  // Reviewed activity-specific contrasts, NOT transferred definition contrasts
  // or an exclusive taxonomy of designers. Product design remains a possible
  // parent field; graphic/textile, type/graphic, interior/exhibition and the
  // NLS project's documented furniture/environment contributions stay open.
  const incompatible:Readonly<Record<string,readonly string[]>>={
   type:['fashion','furniture','interior','landscape','textile','exhibition','packaging'],
   graphic:['fashion','furniture','interior','landscape','textile'],
   fashion:['type','graphic','furniture','interior','landscape','exhibition','interaction','packaging'],
   product:['type','fashion','furniture','landscape','textile','exhibition'],
   furniture:['type','fashion','landscape','textile','exhibition','packaging'],
   interior:['type','graphic','fashion','landscape','textile','packaging'],
   landscape:['type','fashion','furniture','interior','textile','packaging','graphic'],
   textile:['type','furniture','landscape','exhibition','packaging'],
   exhibition:['type','fashion','landscape','packaging'],
   interaction:['fashion','landscape','textile','packaging'],
   packaging:['type','fashion','furniture','interior','landscape','textile','exhibition'],
  };
  for(const [i,f] of designFieldStudies.entries())for(const otherId of incompatible[f.id]){
   const j=designFieldStudies.findIndex(other=>other.id===otherId),other=designFieldStudies[j];
   if(j<0||other.id==='product')throw new Error('Unreviewed field activity comparison');
   set.evidence.push(negativeComparison(set.concepts[i],set.concepts[j],f.id==='landscape'?{url:'https://whc.unesco.org/en/list/1100/',label:'UNESCO',locator:'Authenticity: Burle Marx landscape morphology in the redesign of Copacabana; paving and planting are the physical spaces being assessed, not their graphic motifs.'}:f.source,
    `The question isolates the documented activity: ${fieldActivities[f.id]} The project account identifies ${fieldProjectLabels[f.id]}, whereas the proposed field means ${other.meaning} (${other.definition.url}; ${other.definition.locator}). This specific activity is not that proposed activity: the distinction concerns the named work's medium, purpose and role, not everything the designer ever did. Shared and broader disciplines are deliberately left unknown.`));
  }
 }
 if(part==='p2')for(const [i,c] of set.concepts.entries())for(const [j,other] of set.concepts.entries()){
  const source=fieldProjectCredits[j];
  if(i!==j&&source.coverage!=='named-collective'&&!source.acceptedIds.includes(designFieldStudies[i].designerId))set.evidence.push(negativeComparison(c,other,source.source,
   `The named project design credit for ${source.label} is ${source.creditLabel}, not ${designFieldStudies[i].designer}. This concerns the source's original design role, not influence, collecting, commissioning, manufacture or other collaborations.`));
 }
 if(part==='p4')for(const [i,c] of set.concepts.entries()){
  const f=designFieldStudies[i],a=activity[f.id];
  set.evidence.push({...architectureDesignReview,reviewedAt:'2026-10-18',id:`project-activity-bound:${c.id}`,kind:'date-bound',predicateId:c.relation,subjectId:f.designerId,qualifiers:c.semantic!.qualifiers!,sourceUrl:f.source.url,
   locator:`${f.source.locator}. Bounds cover only the source-documented project dating, not every day its creator worked on or revised it (${a.start} to ${a.end}), never the full career. The circa1926 dress is NOT given invented exact bounds: its original House of Chanel design is bounded only by the source’s house founding1910 and Gabrielle Chanel’s death1971. The answer remains the approximate1920s project period, while1910s/1960s/1970s alternatives remain unknown. NLS activity spans1962–1968.`,start:a.start,end:a.end,calendar:'gregorian-proleptic'});
 }
 return set;
});
