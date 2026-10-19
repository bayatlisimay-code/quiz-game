import { reviewedCohort, reviewedDefinitions, type ReviewedTerm } from './reviewedDefinitions';
const lab='https://www.pbs.org/wgbh/buildingbig/lab/forces_text.html',glossary='https://www.pbs.org/wgbh/buildingbig/glossary.html';
const r=(id:string,term:string,meaning:string,url:string,locator:string,priority:number):ReviewedTerm=>({id,term,meaning,source:{url,locator,label:'WGBH Building Big'},priority});
const terms:readonly ReviewedTerm[]=[
 r('compression','Compression','A squeezing force that tends to shorten a material.',lab,'Squeezing (Compression)',5),
 r('tension','Tension','A pulling force that tends to stretch a material.',lab,'Stretching (Tension)',5),
 r('shear','Shear','Forces tending to slide adjacent parts in opposite directions.',lab,'Sliding (Shear)',5),
 r('torsion','Torsion','An action that twists a structural member.',lab,'Twisting (Torsion)',5),
 r('cantilever','Cantilever','A projecting structure supported at only one end.',glossary,'Cantilever entry',5),
 r('truss','Truss','A rigid framework of connected triangular units.',glossary,'Truss entry; triangles resisting loads',5),
 r('bending','Bending','Curving a member, compressing one side and stretching the other.',lab,'Bending; combined compression and tension',4),
 r('buttress','Buttress','A support transferring force from a roof or wall to another support.',glossary,'Buttress entry',4),
 r('span','Structural span','The distance a structure extends between supports.',glossary,'Span entry; noun sense',4),
 r('pile','Foundation pile','A long member driven into soil to provide support.',glossary,'Pile entry; wooden, concrete or steel members driven into ground',3),
 r('stiffness','Structural stiffness','Resistance to changing shape under a load.',glossary,'Stiff and Rigid entries; not ultimate failure strength',3),
];
export const architectureStructureSet=reviewedDefinitions('architecture','l9','p4',terms,reviewedCohort(terms.map(t=>t.id),
 'Reviewed distinguishing loading actions, support arrangements, distance and deformation resistance. Bending includes tensile/compressive actions, so those partial descriptions remain unknown.', ['bending|compression','bending|tension']));
