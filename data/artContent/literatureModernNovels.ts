import { literarySource as s, pg, novelSet, type LiteraryWork } from './literaryAuthoring';
const nea=(slug:string,locator:string)=>s(`https://www.arts.gov/initiatives/nea-big-read/${slug}`,locator,'NEA Big Read');
const loc='https://www.loc.gov/exhibits/books-that-shaped-america/1900-to-1950.html';
type Row=readonly [id:string,title:string,author:string,authorId:string,year:number,source:ReturnType<typeof s>,genre:string,genreId:string,genreSource?:ReturnType<typeof s>,scope?:string];
const rows:readonly Row[]=[
 ['great-gatsby','The Great Gatsby','F. Scott Fitzgerald','f-scott-fitzgerald',1925,s(loc,'The Great Gatsby, original Scribner’s 1925 caption (048.00.00)','Library of Congress'),'Psychological fiction','psychological',pg(64317)],
 ['fahrenheit-451','Fahrenheit 451','Ray Bradbury','ray-bradbury',1953,nea('fahrenheit-451','By Ray Bradbury; Published 1953; overview explicitly science fiction'),'Science fiction','science-fiction'],
 ['their-eyes-watching-god','Their Eyes Were Watching God','Zora Neale Hurston','zora-neale-hurston',1937,nea('their-eyes-were-watching-god','Byline; first published 1937; discussion question 4 calls it a bildungsroman'),'Bildungsroman','bildungsroman'],
 ['joy-luck-club','The Joy Luck Club','Amy Tan','amy-tan',1989,nea('joy-luck-club','Byline; published 1989; overview: mother-daughter saga, interlocking stories read as a novel'),'Family saga','family-saga'],
 ['maltese-falcon','The Maltese Falcon','Dashiell Hammett','dashiell-hammett',1930,nea('maltese-falcon','Byline; published 1930; detective novel; introduction and author biography distinguish earlier serial stories'),'Detective fiction','detective',undefined,'First book edition; serial: 1929.'],
 ['house-mango-street','The House on Mango Street','Sandra Cisneros','sandra-cisneros',1984,nea('house-mango-street','Byline, Published 1984, coming-of-age classic and author’s novels list'),'Bildungsroman','bildungsroman'],
 ['my-antonia','My Ántonia','Willa Cather','willa-cather',1918,nea('my-antonia','By Willa Cather; Published 1918; discussion question 3: coming-of-age novel'),'Bildungsroman','bildungsroman'],
 ['farewell-arms','A Farewell to Arms','Ernest Hemingway','ernest-hemingway',1929,nea('farewell-arms','Third novel, 1929; World War I and tragic love story'),'Love story','love-story'],
 ['riders-purple-sage','Riders of the Purple Sage','Zane Grey','zane-grey',1912,s(loc,'Riders of the Purple Sage: originally published 1912, Western genre; not the exhibited 1940 reprint','Library of Congress'),'Western','western'],
 ['wonderful-wizard-oz','The Wonderful Wizard of Oz','L. Frank Baum','l-frank-baum',1900,s(loc,'Opening section: 1900; fantasy; original George M Hill edition (035.00.00)','Library of Congress'),'Fantasy','fantasy'],
 ['red-harvest','Red Harvest','Dashiell Hammett','dashiell-hammett',1929,s(loc,'Red Harvest: first novel; hard-boiled detective thriller; Knopf 1929 caption (052.00.00)','Library of Congress'),'Detective fiction','detective',undefined,'First book edition; earlier serial text was reworked.'],
];
// User-approved genre-only re-staging (Literature l5 rank 1, 2026-10-20): the Western moves into A and one of the
// two Bildungsroman works moves to B so the genre lesson has a safe matching quartet. Author and publication facts
// keep the row-order priority.
const genrePriorities:Readonly<Record<string,number>>={'riders-purple-sage':5,'house-mango-street':4};
export const modernNovels:readonly LiteraryWork[]=rows.map(([id,title,author,authorId,year,source,label,genreId,genreSource,scope],i)=>({id,title,author,authorId:`person:${authorId}`,source,priority:i<6?5:i<9?4:3,...(genrePriorities[id]===undefined?{}:{genrePriority:genrePriorities[id]}),genre:{label,id:genreId,source:genreSource??source},publication:{year,source,...(scope?{scope}:{})}}));
export const literatureModernNovelsSet=novelSet('l5',modernNovels);
