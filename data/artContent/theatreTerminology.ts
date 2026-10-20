import { reviewedCohort, reviewedDefinitions, type ReviewedTerm } from './reviewedDefinitions';
import type { TeachingPart } from '../artCurriculum';
import type { Source } from './sourceAuthoring';

const oldVic='https://oldvictheatreglossary.com/';
const dt='https://www.digitaltheatreplus.com/blog/theatre-glossary-definitions-everyone-should-know';
const ct='https://portal.ct.gov/-/media/sde/arts/guide-to-k12-program-development-in-the-arts/theatre-glossary.pdf';
const tsa='https://theatresafe.com.au/resources/glossary/';
const rsc='https://www.rsc.org.uk/about-us/how-we-make-theatre/';
type TermRow=readonly [id:string,term:string,meaning:string,url:string,locator:string,matchingMeaning?:string];
const roles:readonly TermRow[]=[
 ['actor','Actor','A performer portraying a character.',ct,'p1, Actor'],
 ['playwright','Playwright','A person who writes plays.',ct,'p3, Playwright'],
 ['director','Director','The person guiding the overall interpretation and staging.',rsc,'Working as a team; director takes charge of creating the production'],
 ['producer','Producer','The person organising a production and its financing.',ct,'p3, Producer'],
 ['dramaturg','Dramaturg','An advisor researching a play’s text and context.',ct,'p2, Dramaturg'],
 ['stage-manager','Stage manager','The person coordinating backstage work and performances.','https://www.rsc.org.uk/about-us/how-we-make-theatre/stage-management','Stage Manager; communication with departments and responsibility during performances'],
 ['understudy','Understudy','A performer prepared to cover another performer’s role.',ct,'p5, Understudy'],
 ['choreographer','Choreographer','The person arranging dance and movement.',oldVic,'Cast and Creatives; dance and crowd scenes'],
 ['dresser','Dresser','A costume-team member helping performers change clothes.',oldVic,'Cast and Creatives; costume changes'],
 ['casting-director','Casting director','The person helping select actors for roles.','https://www.rsc.org.uk/about-us/how-we-make-theatre/casting','Opening; working with director to assemble cast'],
 ['prompter','Prompter','Someone supplying forgotten lines to performers.',oldVic,'Off Stage; traditional prompter at prompt corner'],
];
const terms:readonly TermRow[]=[
 ['dialogue','Dialogue','Conversation between characters.',ct,'p2, Dialogue'],
 ['monologue','Monologue','An extended speech by one performer.',dt,'Voice & Movement, Monologue'],
 ['cue','Cue','A signal for the next action.',ct,'p2, Cue'],
 ['fourth-wall','Fourth wall','The imagined barrier between stage action and audience.',ct,'p2, Fourth Wall'],
 ['plot','Plot','The sequence of events in a play.',ct,'p3, Plot'],
 ['conflict','Conflict','The struggle driving a dramatic situation.',ct,'p2, Conflict'],
 ['scene','Scene','A division of a play or act.',ct,'p4, Scene'],
 ['subtext','Subtext','Meaning implied beneath the spoken words.',ct,'p4, Subtext'],
 ['off-book','Off book','Performing with lines memorised, without consulting the script.',oldVic,'Cast and Creatives; off book versus on book'],
 ['ensemble','Ensemble (cast)','The group of performers in a production.',oldVic,'Cast and Creatives; ensemble as performers or cast'],
 ['noises-off','Noises off','Sounds intended to be heard from offstage.',oldVic,'Off Stage; Noises off'],
];
const stage:readonly TermRow[]=[
 ['apron','Apron','Stage floor extending toward the audience beyond the curtain.',tsa,'Theatre, Apron'],
 ['wings','Wings','Concealed spaces beside the stage.',tsa,'Theatre, Wings'],
 ['proscenium','Proscenium','The frame separating stage and auditorium.',tsa,'Theatre, Proscenium'],
 ['orchestra-pit','Orchestra pit','A lowered space for musicians in front of the stage.',tsa,'Theatre, Orchestra pit'],
 ['fly-tower','Fly tower','Space above the stage for raised scenery and equipment.',tsa,'Theatre, Fly tower'],
 ['trapdoor','Trapdoor','An opening through the stage floor.',dt,'Parts of the Theatre, Trap Door'],
 ['revolve','Revolve','A rotating stage or stage section.',oldVic,'The Stage; revolve'],
 ['rake','Rake','A stage-floor slope rising away from the audience.',oldVic,'The Stage; raked stage'],
 ['legs','Legs','Narrow side curtains masking the wings.',oldVic,'The Stage; panels masking exits into wings'],
 ['auditorium','Auditorium','The seating area for the audience.',oldVic,'The Auditorium'],
 ['green-room','Green room','A space where performers relax offstage.',oldVic,'Back of House; green room'],
];
const performance:readonly TermRow[]=[
 ['articulation','Articulation','Clear formation of speech sounds.',dt,'Voice & Movement, Articulation'],
 ['blocking','Blocking','Planned positions and movements onstage.',dt,'Voice & Movement, Blocking; staging sense, not rejecting an improvisation offer'],
 ['improvisation','Improvisation','Creating speech or action spontaneously.',ct,'p3, Improvise; spontaneous and prepared forms distinguished'],
 ['gesture','Gesture','An expressive movement of the body.',ct,'p2, Gesture'],
 ['pitch','Pitch (voice)','How high or low a voice sounds.',dt,'Voice & Movement, Pitch'],
 ['projection','Projection (voice)','Carrying the voice clearly to distant listeners.',dt,'Voice & Movement, Projection (performance), not technical image projection'],
 ['mime','Mime','Communicating through movement without speech.',dt,'Voice & Movement, Mime'],
 ['objective','Objective','What a character wants to achieve.',ct,'p3, Objective'],
 ['obstacle','Obstacle','What prevents a character reaching a goal.',ct,'p3, Obstacle'],
 ['tableau','Tableau','A still picture formed by performers.',ct,'p4, Tableau'],
 ['motivation','Motivation','The reason behind a character’s action.',ct,'p3, Motivation'],
];
const craft:readonly TermRow[]=[
 ['follow-spot','Follow spot','A spotlight tracking a moving performer.',oldVic,'Lighting; follow spot'],
 ['gel','Lighting gel','A coloured filter placed in a light’s beam.',oldVic,'Lighting; gels'],
 ['fresnel','Fresnel lantern','A stage light producing a soft-edged beam.',oldVic,'Lighting; Fresnel lights'],
 ['barn-doors','Barn doors','Adjustable flaps shaping a stage light’s beam.',oldVic,'Lighting; barn doors'],
 ['strobe','Strobe','A light producing repeated brief flashes.',oldVic,'Lighting; strobe'],
 ['footlights','Footlights','Lights at stage-floor level illuminating performers from below.',oldVic,'Lighting; footlights; historical quicklime claim not used'],
 ['batten','Batten','An overhead bar supporting lights or scenery.',dt,'Technical Theatre, Batten'],
 ['light-board','Light board','The console controlling stage lighting.',dt,'Technical Theatre, Light Board'],
 ['sound-board','Sound board','The console controlling stage sound.',dt,'Technical Theatre, Sound Board'],
 ['projection','Projection (technical)','Casting an image onto a stage surface.',dt,'Technical Theatre, Projection; not vocal projection'],
 ['prompt-book','Prompt book','The master script recording staging and technical cues.',dt,'Technical Theatre, Prompt Book'],
];
const production:readonly TermRow[]=[
 ['audition','Audition','A performer’s tryout for a role.',ct,'p1, Audition'],
 ['rehearsal','Rehearsal','A session practising and developing a production.',oldVic,'Cast and Creatives; rehearsals and studio'],
 ['technical-rehearsal','Technical rehearsal','A rehearsal integrating lighting, sound and other technical elements.',dt,'Technical Theatre, Technical Rehearsal'],
 ['dress-rehearsal','Dress rehearsal','A full run with costumes and production elements.',dt,'Technical Theatre, Dress Rehearsal'],
 ['preview','Preview','A public performance before the official opening.',oldVic,'The Performance; previews before press night'],
 ['press-night','Press night','The official opening attended by invited critics.',oldVic,'The Performance; press night'],
 ['matinee','Matinee','A daytime performance.',oldVic,'The Performance; daytime, without imposing a universal start time'],
 ['get-in','Get-in (production)','Installing the set and equipment in a venue.',oldVic,'The Performance; get-in process, not the access-route sense'],
 ['strike','Strike','Dismantling the set after use.',oldVic,'The Performance; strike the set'],
 ['season','Season','A theatre’s programmed period of artistic activity.',oldVic,'Setting the Stage; annual output, dates not generalised'],
 ['interval','Interval','A scheduled break during a performance.',oldVic,'Off Stage; break (interval) and Back of House; continuation'],
];
function definitions(level:string,part:TeachingPart,rows:readonly TermRow[],unknown:readonly string[]=[]){
 const terms:ReviewedTerm[]=rows.map(([id,term,meaning,url,locator,matchingMeaning],i)=>({id,term,meaning,matchingMeaning,priority:i<6?5:i<9?4:3,source:{url,locator,label:url===oldVic?'Old Vic':url===dt?'Digital Theatre+':url===ct?'Connecticut education glossary':url===tsa?'Theatre Safe Australia':'RSC'} satisfies Source}));
 return reviewedDefinitions('theatre',level,part,terms,reviewedCohort(rows.map(t=>t[0]),'Reviewed the supplied defining functions: a personnel role, narrative device, spatial component, acting technique, technical device or production phase is distinguished by its stated function. This does not exclude shared duties or coexisting features.',unknown));
}
export const theatreTerminologySets=[
 definitions('l4','p1',roles),definitions('l4','p2',terms),definitions('l4','p4',stage),
 definitions('l8','p1',performance,['motivation|objective','motivation|obstacle','objective|obstacle','blocking|gesture','gesture|mime']),
 definitions('l8','p2',craft,['follow-spot|fresnel','fresnel|footlights','follow-spot|footlights']),
 definitions('l8','p4',production,['dress-rehearsal|rehearsal','rehearsal|technical-rehearsal','dress-rehearsal|technical-rehearsal','matinee|preview','matinee|press-night']),
];
