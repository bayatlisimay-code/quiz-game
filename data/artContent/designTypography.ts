import { reviewedCohort, reviewedDefinitions, type ReviewedTerm } from './reviewedDefinitions';
const adobe='https://student.cs.uwaterloo.ca/~cs200/Adobe/glossary.html';
const spacing='https://helpx.adobe.com/photoshop/using/line-character-spacing.html';
const r=(id:string,term:string,meaning:string,url:string,locator:string,priority:number):ReviewedTerm=>({id,term,meaning,source:{url,locator,label:'Adobe typography glossary'},priority});
const terms:readonly ReviewedTerm[]=[
 r('baseline','Baseline','The invisible line on which most letters sit.',adobe,'Baseline entry; descenders extend below it',5),
 r('cap-height','Cap height','The distance from the baseline to the top of capital letters.',adobe,'Cap height entry',5),
 r('x-height','X-height','The height of lowercase letters such as x, excluding ascenders.',adobe,'X-height entry; not capital height',5),
 r('leading','Leading','The vertical distance between successive lines’ baselines.',spacing,'Leading: measured baseline to baseline for Roman type',5),
 r('kerning','Kerning','Adjusting the space between a particular pair of characters.',spacing,'Kerning versus tracking; specific character pairs',5),
 r('tracking','Tracking','Adjusting spacing across a whole range of characters.',spacing,'Kerning versus tracking; selected range',5),
 r('ascender','Ascender','The part of a lowercase letter extending above its x-height.',adobe,'Ascender entry',4),
 r('descender','Descender','The part of a letter extending below the baseline.',adobe,'Descender entry',4),
 r('serif','Serif','A small finishing stroke at the end of a letter’s main stroke.',adobe,'Serif entry; letter feature, not a whole typeface classification',4),
 r('ligature','Ligature','Two or more letters combined into a single typographic character.',adobe,'Ligature entry; examples ff, ffl and ffi',3),
 r('point','Typographic point','A type-measurement unit equal to one seventy-second of an inch.',adobe,'Point entry; digital desktop-publishing point convention',3),
];
export const designTypographySet=reviewedDefinitions('design','l6','p1',terms,reviewedCohort(terms.map(t=>t.id),
 'Reviewed definitions distinguish reference lines/heights, spacing operations, letter parts, combined characters and units. Local pair spacing and range spacing retain separate operational definitions.'));
