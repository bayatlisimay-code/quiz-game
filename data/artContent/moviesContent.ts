import { moviesGenreEvidence } from './moviesGenreEvidence';
import { moviesCompatibility } from './moviesCompatibility';
import { moviesFilms } from './moviesFilms';
import { moviesDirectors } from './moviesDirectors';
import { moviesAnimation } from './moviesAnimation';
import { moviesAwards } from './moviesAwards';
import { moviesCharacters } from './moviesCharacters';
import { moviesGenres } from './moviesGenres';
import { moviesTerms } from './moviesTerms';
import { moviesSourceReviews as reviews } from './moviesSourceReviews';
import { moviesFact, moviesSource, moviesId, moviesPriority } from './moviesAuthoring';
import { joinSets, type AuthoredSet, type SourceFact } from './sourceAuthoring';
import { scheduleArtLearning } from './learningPriorities';

const person=(name:string)=>`person:${moviesId(name)}`;
const film=(name:string,year:number)=>`film:${moviesId(name)}:${year}`;
const reason=(i:number)=>i<11?'General-knowledge anchor; reinforce across the related teaching parts.':'Retained reserve; excluded from reviews unless explicitly introduced.';
function fact(level:string,part:'p1'|'p2'|'p4',id:string,field:string,index:number,input:Omit<SourceFact,'subtopic'|'level'|'part'|'id'|'priority'|'priorityReason'|'source'|'reviewedAt'>):AuthoredSet {
 const r=reviews[`${level}:${id}:${field}`]??reviews[`${level}:${id}`];
 return moviesFact({...input,level,part,id,priority:moviesPriority(index),priorityReason:reason(index),source:moviesSource(r)},!!r?.checkedFields.includes(field));
}
const certain=(role:string)=>({attribution:{role,status:'certain' as const}});
const finite=(valueId:string,reason:string)=>({valueIds:[valueId],reason});
const year=(level:string,part:'p1'|'p2'|'p4',id:string,index:number,name:string,identity:string,value:number,field:string)=>fact(level,part,id,field,index,{
 subject:name,subjectId:identity,subjectType:'work',answer:String(value),answerId:`year:${value}`,answerType:'date',
 qualifiers:{event:'release'},scope:'Original release year of this specified film, not a later reissue.',contract:{event:'release'},temporal:{start:value,end:value,calendar:'gregorian-proleptic'},
 completeField:finite(`year:${value}`,'The source dates the original release of this film to this calendar year.'),
});
const filmSets=Object.entries(moviesFilms).flatMap(([level,rows])=>rows.flatMap(([id,title,date,director,genre],i)=>{
 const identity=film(title,date),name=`${title} (${date})`;
 return [fact(level,'p1',id,'director',i,{subject:name,subjectId:identity,subjectType:'work',answer:director,answerId:person(director),answerType:'person',
 qualifiers:{role:'director',attributionStatus:'certain'},scope:'Credited director of this specified film.',contract:certain('director'),completeField:finite(person(director),'The cited film credits list this director; production and writing are different roles.')}),
 fact(level,'p2',id,'genre',i,{subject:name,subjectId:identity,subjectType:'work',answer:genre,answerId:`movie-genre:${moviesId(genre)}`,answerType:'category',qualifiers:{},scope:''}),
 year(level,'p4',id,i,`${title} — ${director}`,identity,date,'release')];
}));
const directorSets=Object.entries(moviesDirectors).flatMap(([level,rows])=>rows.flatMap(([id,name,country,notable,notableYear,first,firstYear],i)=>{
 const countryId=`country:${moviesId(country)}`;
 return [fact(level,'p1',id,'birth',i,{subject:name,subjectId:person(name),subjectType:'person',answer:country,answerId:countryId,answerType:'country',qualifiers:{countryConvention:'present-day'},scope:'Present-day country containing the documented birthplace.',contract:{geography:'present-day'},completeField:finite(countryId,'The documented birthplace lies in this present-day country; citizenship and ancestry are separate.')}),
 fact(level,'p2',id,'notable',i,{subject:name,subjectId:person(name),subjectType:'person',answer:`${notable} (${notableYear})`,answerId:film(notable,notableYear),answerType:'work',qualifiers:{role:'director'},scope:'Direction credit on the specified feature, not a claim about a complete filmography.'}),
 fact(level,'p4',id,'first',i,{subject:name,subjectId:person(name),subjectType:'person',answer:`${first} (${firstYear})`,answerId:film(first,firstYear),answerType:'work',qualifiers:{firstWorkCriterion:'first-feature-directed'},scope:'First feature directed, including a credited co-directed feature; shorts and television episodes are separate.',contract:{firstWork:{criterion:'first-feature-directed',wellEstablished:true}},completeField:finite(film(first,firstYear),'The source explicitly identifies this as the filmmaker’s first feature, not the earliest title in our catalogue.')})];
}));
const animationPartners:Readonly<Record<string,readonly string[]>>={
 'shrek':['Pacific Data Images'],
 'chicken-run':['DreamWorks Animation','Pathé'],
 'song-of-the-sea':['Melusine Productions','The Big Farm','Superprod','Nørlum'],
 'secret-of-kells':['Les Armateurs','Vivi Film'],
 'persepolis':['Pumpkin 3D'],
 'the-triplets':['Production Champion','Vivi Film','France 3 Cinéma','RGP France'],
 'spider-verse':['Sony Pictures Animation'],
};
const characterClues:Readonly<Record<string,string>>={
 'toy-story':'The toy who fears being replaced by Buzz Lightyear',
 'spirited-away':'The girl who works in a magical bathhouse to save her parents',
 'shrek':'Shrek’s talkative travelling companion, voiced by Eddie Murphy',
 'chicken-run':'The hen who leads the flock’s escape attempts',
 'coraline':'Coraline’s young neighbour and friend in her new home',
 'song-of-the-sea':'Ben’s younger sister, who can turn into a seal',
 'wall-e':'The sleek search robot sent to Earth',
 'my-neighbor-totoro':'Mei’s sister, who moves with her to the countryside',
 'kung-fu-panda':'The noodle-loving dreamer chosen as the Dragon Warrior',
 'boxtrolls':'The orphan boy raised by underground, box-wearing creatures',
 'secret-of-kells':'The young orphan who helps complete the Book of Kells',
 'frozen':'Anna’s sister, whose ice powers freeze Arendelle',
 'spider-verse':'The Brooklyn teenager who becomes a new Spider-Man',
 'iron-giant':'The boy who befriends a giant robot from space',
 'the-triplets':'Champion’s grandmother, who sets out to rescue him',
 'wolfwalkers':'The apprentice hunter who befriends Mebh in Ireland',
 'your-name':'The country schoolgirl who swaps bodies with Taki',
 'persepolis':'The girl whose childhood in Iran is based on the filmmaker’s life',
};
const animationSets=moviesAnimation.flatMap(([id,title,date,studio,character],i)=>{
 const identity=film(title,date),name=`${title} (${date})`;
 return [fact('l4','p1',id,'studio',i,{subject:name,subjectId:identity,subjectType:'work',answer:studio,answerId:`studio:${moviesId(studio)}`,answerType:'institution',qualifiers:{role:'animation studio',attributionStatus:'certain'},scope:'Animation production studio, not merely the film’s distributor.',contract:certain('animation studio'),completeField:{valueIds:[studio,...(animationPartners[id]??[])].map(x=>`studio:${moviesId(x)}`),reason:'The checked film production credits identify the animation studio and listed co-producing animation partners; distribution is a separate role.'}}),
 fact('l4','p2',id,'character',i,{subject:name,subjectId:identity,subjectType:'work',answer:character,answerId:`character:${identity}:${moviesId(character)}`,answerType:'character',qualifiers:{workId:identity,characterClue:characterClues[id]??'Pending descriptive clue'},scope:characterClues[id]??'Pending descriptive clue',contract:{scope:{text:characterClues[id]??'Pending descriptive clue',qualifierKeys:['workId','characterClue'],visibility:'learner'}},...(characterClues[id]?{completeField:finite(`character:${identity}:${moviesId(character)}`,'The source identifies this uniquely described character; this is not a complete list of the film’s characters.')}:{})}),year('l4','p4',id,i,title,identity,date,'release')];
});
const awardSets=moviesAwards.flatMap(([id,name,country,prize,foundation,kind],i)=>{
 const subjectId=`film-institution:${id}`,countryId=`country:${moviesId(country)}`,decade=Math.floor(foundation/10)*10;
 const shared={subject:name,subjectId,subjectType:'institution' as const};
 return [fact('l8','p1',id,'country',i,{...shared,answer:country,answerId:countryId,answerType:'country',qualifiers:{institutionType:kind,countryConvention:'present-day'},scope:'Country where the named award or festival is based.',contract:{institutionType:kind,geography:'present-day'},completeField:finite(countryId,'This names the home country of the event, not the countries of eligible films.')}),
 fact('l8','p2',id,'prize',i,{...shared,answer:prize,answerId:`film-prize:${id}:${moviesId(prize)}`,answerType:'term',qualifiers:{institutionType:kind},scope:'Main feature-film competition prize or top film category, rather than all awards given.',contract:{institutionType:kind},completeField:finite(`film-prize:${id}:${moviesId(prize)}`,'The cited award rules name the top main-competition film prize; acting, honorary and subsidiary categories are separate.')} ),
 fact('l8','p4',id,'foundation',id==='cannes'?15:id==='iffi'?1:i,{...shared,...(id==='cannes'?{subject:'Cannes Film Festival (planned pre-war launch)'}:{}),answer:`${decade}s`,answerId:`decade:${decade}`,answerType:'period',qualifiers:{institutionType:kind,event:'foundation',datePrecision:'decade',...(id==='cannes'?{foundationBasis:'planned-prewar-launch'}:{})},scope:'Founding decade of the named event, not the year its present prize was introduced.',contract:{institutionType:kind,event:'foundation'},temporal:{start:decade,end:decade+9,calendar:'gregorian-proleptic'},completeField:finite(`decade:${decade}`,'The documented founding year falls within this ten-year interval.')})];
});
const characterSets=moviesCharacters.flatMap(([id,name,title,date,actor,relationshipScope,other,kind],i)=>{
 const workId=film(title,date),subjectId=`character:${workId}:${moviesId(name)}`,subject=`${name} — ${title} (${date})`;
 return [fact('l9','p1',id,'movie',i,{subject:id==='amalie'?'The Parisian waitress played by Audrey Tautou':name,subjectId,subjectType:'character',answer:`${title} (${date})`,answerId:workId,answerType:'work',qualifiers:{workId},scope:'The specified film portrayal; later sequels and other adaptations are separate.'}),
 fact('l9','p2',id,'actor',i,{subject,subjectId,subjectType:'character',answer:actor,answerId:person(actor),answerType:'person',qualifiers:{workId,role:'performer',attributionStatus:'certain'},scope:'The credited screen portrayal in this specified film.',contract:certain('performer'),completeField:finite(person(actor),'The cited cast credit identifies this performer in the named portrayal; other adaptations are separate.')}),
 fact('l9','p4',id,'relationship',i,{subject,subjectId,subjectType:'character',answer:other,answerId:`character:${workId}:${moviesId(other)}`,answerType:'character',qualifiers:{workId,relationship:kind,relationshipScope},scope:relationshipScope,contract:{scope:{text:relationshipScope,qualifierKeys:['workId','relationship','relationshipScope'],visibility:'learner'},association:{kind,workId,spoilerFree:true}},completeField:finite(`character:${workId}:${moviesId(other)}`,'The source names the single character in this specific relationship, not all associates of the protagonist.')})];
});
const definition=(level:string,part:'p1'|'p2'|'p4',rows:readonly (readonly [string,string,string])[])=>rows.map(([id,name,meaning],i)=>fact(level,part,id,'definition',i,{
 subject:name,subjectId:level==='l2'?`movie-genre:${id}`:`film-term:${part}:${id}`,subjectType:level==='l2'?'category':'term',answer:meaning,answerId:`film-meaning:${level}:${part}:${id}`,answerType:'meaning',qualifiers:{sense:`film:${level}:${part}`},scope:'Defining meaning in this filmmaking context; different techniques or roles may coexist.'
}));
const genreSets=moviesGenres.flatMap(([id,name,,title,date,director],i)=>[
 fact('l2','p2',id,'example',i,{subject:name,subjectId:`movie-genre:${id}`,subjectType:'category',answer:`${title} (${date})`,answerId:film(title,date),answerType:'work',qualifiers:{creditId:person(director),creditBasis:'named-director'},scope:`A feature directed by ${director}.`,contract:{focus:{kind:'example-credit',identity:person(director),label:director,action:'directed'}}}),
 fact('l2','p4',id,'director',i,{subject:name,subjectId:`movie-genre:${id}`,subjectType:'category',answer:director,answerId:person(director),answerType:'person',qualifiers:{projectId:film(title,date),creditAction:'directed'},scope:'The director of the named example film, not an exclusive genre association.',completeField:finite(person(director),'The cited named film’s director credit, not the whole genre, is the complete assessed field.'),contract:{focus:{kind:'project-credit',identity:film(title,date),label:`${title} (${date})`,action:'directed'}}}),
]);
const all=joinSets([...filmSets,...directorSets,...animationSets,...awardSets,...characterSets,...definition('l2','p1',moviesGenres.map(([id,name,meaning])=>[id,name,meaning])),...genreSets,...Object.entries(moviesTerms).flatMap(([part,rows])=>definition('l5',part as 'p1'|'p2'|'p4',rows))]);
/** Full authoring catalogue. Deliberately not imported by activeArtContent until all release gates pass. */
export const moviesContent:AuthoredSet=moviesGenreEvidence(moviesCompatibility({...all,concepts:scheduleArtLearning(all.concepts)}));
export const moviesTeachingContent:AuthoredSet={concepts:moviesContent.concepts.filter(c=>(c.learning?.reinforcementPriority??0)>=3),evidence:moviesContent.evidence};
export const moviesReserveConcepts=moviesContent.concepts.filter(c=>(c.learning?.reinforcementPriority??0)<3);
