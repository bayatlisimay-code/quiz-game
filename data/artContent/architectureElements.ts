import { reviewedCohort, reviewedDefinitions, type ReviewedTerm } from './reviewedDefinitions';
const getty='https://www.getty.edu/education/teachers/classroom_resources/curricula/art_architecture/downloads/arch_vocabulary.pdf';
const pitt='https://sites.pitt.edu/~medart/menuglossary/';
const r=(id:string,term:string,meaning:string,url:string,locator:string,priority:number):ReviewedTerm=>({id,term,meaning,source:{url,locator,label:'Architectural vocabulary'},priority});
const terms:readonly ReviewedTerm[]=[
 r('column','Column','An upright architectural post supporting or decorating a building.',getty,'p1 Column; structural and attached decorative uses',5),
 r('capital','Capital','The top portion of a column.',getty,'p1 Capital; distinguish column as whole from its top',5),
 r('arch','Arch','A curved architectural span over an opening.',getty,'p1 Arch; may be semicircular or pointed',5),
 r('lintel','Lintel','A horizontal beam spanning an opening between supports.',pitt+'lintel.htm','Opening definition; flat horizontal spanning beam',5),
 r('pediment','Classical pediment','A triangular gable above a classical entablature.',getty,'p1 Pediment; qualified triangular classical sense, not every later curved or broken variant',5),
 r('clerestory','Clerestory','An upper windowed storey rising above adjoining roofs.',pitt+'clerestory.htm','Opening definition: upper story, windows above adjacent roofs',5),
 r('entablature','Classical entablature','The assembly of architrave, frieze and cornice above classical columns.',getty,'p1 Entablature',4),
 r('cornice','Classical cornice','The upper band above a frieze and below a pediment.',getty,'p1 Cornice; entablature sense',4),
 r('frieze','Classical frieze','The broad entablature band above the architrave and below the cornice.',getty,'p1 Frieze; architectural rather than any decorative band',4),
 r('apse','Apse','A semicircular or polygonal extension at the end of a building.', pitt+'apse.htm','Opening definition: vaulted extension, generally circular or polygonal',3),
 r('hemispherical-dome','Hemispherical dome','A half-sphere roof over a circular base.',getty,'p1 Dome; explicitly hemispherical sense, not all dome profiles',3),
];
export const architectureElementSet=reviewedDefinitions('architecture','l5','p1',terms,reviewedCohort(terms.map(t=>t.id),
 'Reviewed distinct elements: upright post, top, flat/curved span, triangular gable, windowed storey, end extension and roof. Whole entablature versus constituent bands remains unknown.', ['cornice|entablature','entablature|frieze']));
