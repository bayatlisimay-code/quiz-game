import { literarySource as s, pg, novelSet, type LiteraryWork } from './literaryAuthoring';
const loc='https://www.loc.gov/exhibits/books-that-shaped-america/1850-to-1900.html';
const genre=(label:string,id:string,n:number)=>({label,id,source:pg(n)});
export const classicNovels:readonly LiteraryWork[]=[
 {id:'pride-prejudice',title:'Pride and Prejudice',author:'Jane Austen',authorId:'person:jane-austen',source:pg(1342),priority:5,genre:genre('Love story','love-story',1342),publication:{year:1813,source:s('https://janeaustens.house/jane-austen/novels/pride-and-prejudice/','Publication paragraph: January 1813; earlier First Impressions manuscript is not publication','Jane Austen’s House')}},
 {id:'jane-eyre',title:'Jane Eyre',author:'Charlotte Brontë',authorId:'person:charlotte-bronte',source:pg(1260),priority:5,genre:genre('Bildungsroman','bildungsroman',1260),publication:{year:1847,source:s('https://upload.wikimedia.org/wikipedia/commons/5/53/Jane_Eyre_%28IA_janeeyre00broniala%29.pdf','Facsimile of first-edition title page: Currer Bell, Smith Elder, 1847; author identity corroborated by Brontë Museum novels page','Digitised first edition')}},
 {id:'wuthering-heights',title:'Wuthering Heights',author:'Emily Brontë',authorId:'person:emily-bronte',source:pg(768),priority:5,genrePriority:4,genre:genre('Psychological fiction','psychological',768),publication:{year:1847,source:s('https://shop.bl.uk/blogs/blog-post/wuthering-heights-making-a-first-edition-facsimile','Opening: original publication 1847, two volumes with Agnes Grey as third; do not use museum’s 1848 review sentence as first-publication evidence','British Library')}},
 {id:'frankenstein',title:'Frankenstein',author:'Mary Shelley',authorId:'person:mary-shelley',source:pg(84),priority:5,genre:genre('Science fiction','science-fiction',84),publication:{year:1818,source:s('https://shelleygodwinarchive.org/contents/frankenstein/','Opening: three-volume novel published 1 January 1818; manuscript 1816–17 and revised 1831 edition distinguished','Shelley-Godwin Archive')}},
 {id:'dracula',title:'Dracula',author:'Bram Stoker',authorId:'person:bram-stoker',source:pg(345),priority:5,genre:genre('Epistolary fiction','epistolary',345),publication:{year:1897,source:s('https://bramstoker.org/novels/05dracula.html','Publication Details: first UK edition, Archibald Constable, 1897','Bram Stoker bibliography')}},
 {id:'moby-dick',title:'Moby-Dick',author:'Herman Melville',authorId:'person:herman-melville',source:pg(2701),priority:5,genre:genre('Sea story','sea-story',2701),publication:{year:1851,source:s('https://www.melville.org/hmmoby.htm','British edition The Whale, 18 October 1851; American edition later in the same year','Melville bibliography')}},
 {id:'scarlet-letter',title:'The Scarlet Letter',author:'Nathaniel Hawthorne',authorId:'person:nathaniel-hawthorne',source:pg(25344),priority:4,genrePriority:3,genre:genre('Historical fiction','historical',25344),publication:{year:1850,source:s(loc,'The Scarlet Letter section and first-edition caption (019.02.00), not 1941 illustrated edition','Library of Congress')}},
 {id:'huckleberry-finn',title:'Adventures of Huckleberry Finn',author:'Mark Twain',authorId:'person:mark-twain',source:pg(76),priority:4,genre:genre('Adventure story','adventure',76),publication:{year:1884,scope:'British debut; US: 1885.',source:s(loc,'Huckleberry Finn: London Chatto & Windus 1884 (030.00.00), contrasted with New York 1885 (030.01.00)','Library of Congress')}},
 {id:'little-women',title:'Little Women (Part One)',author:'Louisa May Alcott',authorId:'person:louisa-may-alcott',source:pg(514),priority:4,genre:genre('Domestic fiction','domestic',514),publication:{year:1868,scope:'Part One.',source:s(loc,'Little Women: first edition 1868; Roberts Brothers caption (027.01.00)','Library of Congress')}},
 {id:'don-quixote',title:'Don Quixote (Part One)',author:'Miguel de Cervantes',authorId:'person:miguel-de-cervantes',source:pg(996),priority:3,genre:genre('Picaresque fiction','picaresque',996),publication:{year:1605,scope:'First Spanish part.',source:s('https://www.bne.es/es/colecciones/cervantes/ingenioso-hidalgo-don-quixote-mancha','Primera edición de la primera parte; Juan de la Cuesta, 1605','Biblioteca Nacional de España')}},
 {id:'treasure-island',title:'Treasure Island',author:'Robert Louis Stevenson',authorId:'person:robert-louis-stevenson',source:pg(120),priority:3,genrePriority:5,genre:genre('Sea story','sea-story',120),publication:{year:1881,scope:'Serial debut; book: 1883.',source:s('https://stevensonmuseum.org/robert-louis-stevenson/the-works/','Treasure Island: first published 1881, book 1883; timeline specifies Young Folks 1881–82','Robert Louis Stevenson Museum')}},
];
// Genre-only staging: Treasure Island joins Moby-Dick as interchangeable Adventure fiction targets in A.
// The Scarlet Letter moves to C, preserving the core Gothic/science-fiction introductions. The same existing
// evidence supports A/B/C quartets with at least three distinct targets, without denying The Moonstone's
// historical classification. Author/publication facts stay put; Jane Eyre keeps her other lessons.
const moonstone:LiteraryWork={id:'moonstone',title:'The Moonstone',author:'Wilkie Collins',authorId:'person:wilkie-collins',source:pg(155),priority:5,
 genre:{label:'Detective fiction',id:'detective',source:s('https://www.penguinrandomhouse.com/books/260151/the-moonstone-by-wilkie-collins/','Publisher description: an early model of the detective novel in which Sergeant Cuff investigates the theft of a diamond; quotes T. S. Eliot calling it the first, longest and best of modern English detective novels','Penguin Random House')}};
const genreLessonNovels=classicNovels.map(w=>w.id==='jane-eyre'?moonstone:w);
export const literatureClassicsSet=novelSet('l1',classicNovels,genreLessonNovels);
// Positive overlaps are retained even though they cannot be used as distractors.
// These are additional supported answers to the same facts, not extra teaching
// facts or evidence that other unlisted classifications are false.
for(const [id,genreId,url,locator] of [
 ['jane-eyre','love-story','https://www.gutenberg.org/ebooks/1260','About this eBook, Subject fields explicitly include both Love stories and Bildungsromans; not the automatically generated summary.'],
 ['wuthering-heights','love-story','https://www.gutenberg.org/ebooks/768','About this eBook, Subject fields include both Love stories and Psychological fiction; not an endorsement of the characters’ harmful relationships.'],
 ['frankenstein','epistolary','https://romantic-circles.org/editions/frankenstein/192.html','Frankenstein scholarly edition, note 192 (LETTER): identifies the epistolary mode of the novel alongside its other forms.'],
] as const){
 const target=literatureClassicsSet.concepts.find(c=>c.id===`art_literature_l1_p2_${id}`);
 if(!target)continue;
 literatureClassicsSet.evidence.push({id:`reviewed-genre-overlap:${id}:${genreId}`,kind:'assertion',predicateId:target.relation,
  subjectId:target.semantic!.subject!.id!,valueId:`literary-genre:${genreId}`,qualifiers:{},verdict:'valid',sourceUrl:url,locator,
  reviewStatus:'verified',reviewedBy:'Codex — source-classification comparison (not independent human editorial approval)',reviewedAt:'2026-10-20',
 });
}
