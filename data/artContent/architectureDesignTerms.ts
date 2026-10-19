import { reviewedCohort, reviewedDefinitions, type ReviewedTerm } from './reviewedDefinitions';
const drawings='https://openlab.citytech.cuny.edu/architecture-oer/course-by-week/lesson-3-introduction-to-architectural-drawings-elevations/';
const illinois='https://iopn.library.illinois.edu/pressbooks/designbuiltenvironment/back-matter/glossary/';
const r=(id:string,term:string,meaning:string,url:string,locator:string,priority:number):ReviewedTerm=>({id,term,meaning,source:{url,locator,label:'Architecture education'},priority});
const terms:readonly ReviewedTerm[]=[
 r('floor-plan','Floor plan','A horizontal cut showing a building’s layout from above.',drawings,'Plan paragraph; conventional horizontal cut, not roof view',5),
 r('section','Building section','A vertical cut revealing a building’s internal arrangement.',drawings,'Section paragraph; distinguish from exterior elevation',5),
 r('elevation','Elevation drawing','A straight-on representation of a building’s vertical surface.',drawings,'Elevation paragraph; external facade or internal wall',5),
 r('axis','Design axis','A reference line around which a composition is organised.',illinois,'Axis entry',5),
 r('proportion','Architectural proportion','Relationships among dimensions, quantities or parts.',illinois,'Proportion entry',5),
 r('circulation','Architectural circulation','Connected routes for moving through a building or group of spaces.', 'https://www.getty.edu/vow/AATFullDisplay?find=landscape&logic=AND&note=&subjectid=300056377','Scope note: continuous flow linking spaces; doors, corridors, stairs, elevators',5),
 r('hierarchy','Design hierarchy','Ranking parts of a composition by relative importance.',illinois,'Hierarchy entry: prioritization or ranking',4),
 r('parti','Parti','The basic organising idea behind a design.',illinois,'Parti entry',4),
 r('figure-ground','Figure–ground relationship','The perceived distinction between an object and its surrounding background.',illinois,'Figure/Ground entry; perceptual relation, not every specific drawing convention',4),
 r('axial-symmetry','Axial symmetry','A balanced arrangement on either side of a central axis.', 'https://www.getty.edu/vow/AATFullDisplay?find=deerskin&logic=AND&note=&subjectid=300168543','Scope note; axial symmetry, not the line itself',3),
 r('fenestration','Fenestration','The arrangement of windows in a building.', 'https://www.lehman.edu/public-art-bronx/glossary/','Fenestration entry; arrangement of windows',3),
];
export const architectureDesignTermSet=reviewedDefinitions('architecture','l9','p2',terms,reviewedCohort(terms.map(t=>t.id),
 'Reviewed distinct representation types and design concepts: cuts versus surface views, reference line versus balanced arrangement, dimensional relation, movement routes, priority, organising idea and openings.'));
