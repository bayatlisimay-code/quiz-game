import type { AuthoredSet } from './sourceAuthoring';
import type { SemanticEvidence } from '../../src/quizEngine/assessmentTypes';

type Primary = readonly [label: string, value: string, url?: string, locator?: string];
// Final editorial decisions, 2026-10-20. This overlay preserves the original
// records and every original evidence assertion; only the active answer changes.
export const approvedGenrePrimaries: Readonly<Record<string, Primary>> = {
 'oklahoma':['Musical','musical','https://www.concordtheatricals.com/p/44839/rodgers-hammersteins-oklahoma','Previously approved reserve classification: licensed original Rodgers and Hammerstein full-length musical, with its score and musical numbers; not Green Grow the Lilacs or the film adaptation.'],
 'pride-prejudice':['Novel of manners','novel-manners','https://shop.bl.uk/products/pride-and-prejudice-signature-gilded-edition','Synopsis explicitly identifies a novel of manners, with courtship and social judgements.'],
 'jane-eyre':['Bildungsroman (coming-of-age fiction)','bildungsroman'],
 'moonstone':['Detective fiction','detective','https://www.penguinrandomhouse.com/books/260151/the-moonstone-by-wilkie-collins/','Publisher description: an early model of the detective novel in which Sergeant Cuff investigates the theft of a diamond; Britannica also calls it one of the first English detective novels.'],
 'wuthering-heights':['Gothic fiction','gothic','https://www.bronte.org.uk/about-the-brontes/the-bronte-novels','Emily Brontë section: nightmarish Gothic elements; genre-defining classic. Psychological fiction remains valid.'],
 'frankenstein':['Science fiction','science-fiction'],
 'dracula':['Gothic fiction','gothic','https://www.gutenberg.org/ebooks/345','About this eBook, Subject Gothic fiction alongside Horror tales and Epistolary fiction. Not the generated summary.'],
 'moby-dick':['Adventure fiction','adventure','https://assets.penguinrandomhouse.com/book-resumes/MelvilleHerman_MobyDick_20241031.pdf','Book description: adventure, whaling lore and social commentary. Sea story remains valid.'],
 'scarlet-letter':['Historical fiction','historical'],
 'huckleberry-finn':['Adventure fiction','adventure'],
 'little-women':['Bildungsroman (coming-of-age fiction)','bildungsroman','https://www.gutenberg.org/ebooks/514','About this eBook, Subject Bildungsromans and Domestic fiction; Part One maturation is assessed, not later Part Two events.'],
 'don-quixote':['Satirical fiction','satire','https://cvc.cervantes.es/ensenanza/quijote_aula/unidad_02/construir_10.asp','Literary parody of chivalric books and its social critical purpose; Part One. Satirical fiction describes the sustained comic/parodic mode, not a claim that all other genre readings are false.'],
 'treasure-island':['Adventure fiction','adventure','https://penguinrandomhousehighereducation.com/book/?isbn=9780140437683','Scholarly edition description explicitly identifies the quintessential adventure story.'],
 'great-gatsby':['Modernist novel','modernist','https://www.cambridge.org/core/books/abs/cambridge-companion-to-f-scott-fitzgerald/great-art-small-art-and-modernist-cachet/B9BE748753C881A32D64774E5577A565','Public chapter abstract: Fitzgerald aligned Gatsby with international modernism, while retaining relatively conventional fiction and ordinary readers; modernist tradition does not exclude tragic or psychological readings.'],
 'fahrenheit-451':['Dystopian fiction','dystopian','https://www.simonandschuster.com/books/Fahrenheit-451/Ray-Bradbury/9781451673319','About the Book: dystopian future, banned books and Montag’s challenge to that society. Science fiction remains valid.'],
 'their-eyes-watching-god':['Bildungsroman (coming-of-age fiction)','bildungsroman'],
 'joy-luck-club':['Family saga','family-saga'],
 'maltese-falcon':['Detective fiction','detective'],
 'house-mango-street':['Bildungsroman (coming-of-age fiction)','bildungsroman'],
 'my-antonia':['Bildungsroman (coming-of-age fiction)','bildungsroman'],
 'farewell-arms':['War fiction','war','https://www.arts.gov/initiatives/nea-big-read/farewell-arms','Overview: Frederic Henry’s service, retreat and desertion during World War I intertwined with the tragic love story; war is sustained organising action, not a passing mention.'],
 'riders-purple-sage':['Western','western'],
 'wonderful-wizard-oz':['Fantasy','fantasy'],
 'red-harvest':['Detective fiction','detective'],
 'hamlet':['Revenge tragedy','revenge-tragedy'],
 'antigone':['Greek tragedy','greek-tragedy','https://assets.cambridge.org/97805211/34781/frontmatter/9780521134781_frontmatter.pdf','Antigone edition description explicitly identifies Greek tragedy; Sophocles’ original, not a later adaptation.'],
 'tartuffe':['Comedy','comedy'],
 'importance-earnest':['Comedy of manners','comedy-manners','https://www.bloomsbury.com/uk/importance-of-being-earnest-9781474260756/','Student edition description: comedy of manners and satire. Comedy and farce remain compatible.'],
 'dolls-house':['Realist drama','realist-drama'],
 'cyrano':['Heroic comedy','heroic-comedy'],
 'bacchae':['Greek tragedy','greek-tragedy'],
 'school-scandal':['Comedy of manners','comedy-manners'],
 'she-stoops-conquer':['Comedy','comedy'],
 'doctor-faustus':['Tragedy','tragedy'],
 'tempest':['Shakespearean romance','romance'],
 'our-town':['Drama','drama'],
 'waiting-godot':['Tragicomedy','tragicomedy'],
 'glass-menagerie':['Memory play','memory-play'],
 'birthday-party':['Comedy of menace','comedy-menace','https://www.hampsteadtheatre.com/news/2020/october/harold-pinter-and-the-1950s-british-stage/','The Birthday Party and Irving Wardle’s comedy-of-menace term in the producing theatre’s historical account.'],
 'raisin-sun':['Realist drama','realist-drama','https://teachers.yale.edu/curriculum/units/2007/1/9/3','Reproduced Hansberry interview: genuine realism, explicitly distinguished from naturalism.'],
 'fences':['Tragedy','tragedy','https://www.theoldglobe.org/globalassets/pdfs/programs/2026/fences-2026-final-web.pdf','Director interview discusses tragedy and Troy’s hubris; social realism and symbolic elements remain compatible.'],
 'rosencrantz-guildenstern':['Absurdist drama','absurd','https://groveatlantic.com/book/rosencrantz-guildenstern-are-dead/','Edition and critical account identify absurdist tragicomedy; dramatic comedy is retained as a valid alternative.'],
 'top-girls':['Feminist drama','feminist-drama','https://www.encyclopedia.com/arts/educational-magazines/top-girls','Encyclopedia.com entry: Top Girls is a feminist drama with fantasy elements, set in contemporary times, with a non-linear form mixing past and present.'],
 'master-harold':['Realist drama','realist-drama','https://www.encyclopedia.com/arts/educational-magazines/master-harold-and-boys','Encyclopedia.com entry, Style section: the one-act, autobiographical play subscribes to the school of realism; its characters’ actions and dialogue closely resemble real life. The same entry says it is not overtly a drama of political protest.'],
 'bald-soprano':['Absurdist drama','absurd'],
 'crucible':['Historical drama','historical','https://arthurmillersociety.net/millers-works/','The Crucible account: dramatisation of the Salem witch trials, with a political parallel to McCarthyism, not a literal 1950s setting.'],
};

export function applyApprovedGenrePrimaries(set: AuthoredSet): AuthoredSet {
 const evidence = [...set.evidence];
 const concepts = set.concepts.map(c => {
  if (!['genre_of_novel','genre_of_play'].includes(c.relation)) return c;
  const work = c.semantic?.subject?.id?.replace(/^work:/,'');
  const primary = work && approvedGenrePrimaries[work];
  if (!primary) throw new Error(`Unreviewed active genre: ${c.id}`);
  const [label, value, url, locator] = primary;
  const original = set.evidence.find(e => c.assessment!.evidenceIds.includes(e.id))!;
  const valueId = `${c.subtopicId === 'literature' ? 'literary' : 'theatre'}-genre:${value}`;
  const id = `approved-primary:${c.id}`;
  evidence.push({id,kind:'assertion',predicateId:c.relation,subjectId:c.semantic!.subject!.id!,valueId,
   qualifiers:c.semantic!.qualifiers ?? {},verdict:'valid',sourceUrl:url ?? original.sourceUrl,
   locator:locator ?? original.locator,reviewStatus:'verified',reviewedAt:'2026-10-20',
   reviewedBy:'Codex source comparison (not independent human source certification); final primary selected by user editorial review',
  } satisfies SemanticEvidence);
  return {...c,object:label,semantic:{...c.semantic!,value:{...c.semantic!.value!,id:valueId}},
   assessment:{...c.assessment!,evidenceIds:[id]}};
 });
 addReviewedGenreEvidence({concepts,evidence});
 return {concepts,evidence};
}

// Work-specific positives survive a primary change. Form and tradition labels
// remain compatible; this list is neither exhaustive nor a source of negatives.
const additionalPositives = [
 ['jane-eyre','gothic','https://www.penguinrandomhouse.com/books/669992/dracula-by-bram-stoker/','Edition description places Jane Eyre and Dracula among Gothic literature.'],
 ['frankenstein','gothic','https://shop.bl.uk/products/frankenstein-1','British Library edition describes the Gothic novel; science fiction remains primary.'],
 ['frankenstein','horror','https://www.gutenberg.org/ebooks/84','About this eBook, Subject Horror tales; not the generated summary.'],
 ['great-gatsby','tragedy','https://www.arts.gov/initiatives/nea-big-read/great-gatsby','NEA overview: tragic love story; tragic-novel interpretation remains compatible with modernist tradition.'],
 ['great-gatsby','love-story','https://www.arts.gov/initiatives/nea-big-read/great-gatsby','NEA overview explicitly identifies a tragic love story; not necessarily commercial romance.'],
 ['waiting-godot','absurd','https://livingarchive.royalcourttheatre.com/plays/waiting-for-godot/','Work discussion: tragicomic design and Theatre of the Absurd tradition.'],
 ['rosencrantz-guildenstern','tragicomedy','https://groveatlantic.com/book/rosencrantz-guildenstern-are-dead/','Critical account explicitly identifies absurdist tragicomedy.'],
] as const;
function addReviewedGenreEvidence(set: AuthoredSet): void {
 const append = (c: AuthoredSet['concepts'][number], value: string, verdict: 'valid'|'invalid', url: string, locator: string, key: string) => {
  set.evidence.push({id:`final-genre:${key}:${c.id}:${value}`,kind:'assertion',predicateId:c.relation,
   subjectId:c.semantic!.subject!.id!,valueId:`${c.subtopicId==='literature'?'literary':'theatre'}-genre:${value}`,
   qualifiers:c.semantic!.qualifiers ?? {},verdict,sourceUrl:url,locator,reviewStatus:'verified',reviewedAt:'2026-10-20',
   reviewedBy:'Codex — source and precisely scoped work comparison; not independent human editorial certification'});
 };
 for (const [work,value,url,locator] of additionalPositives) {
  const c=set.concepts.find(c=>['genre_of_novel','genre_of_play'].includes(c.relation)&&c.semantic?.subject?.id===`work:${work}`);
  if(c) append(c,value,'valid',url,locator,'positive');
 }
 // Greek tragedy here names the original ancient Greek theatrical tradition,
 // not any later play with tragic features or a modern Greek-language staging.
 // These original-work dates/languages are individually documented, rather
 // than inferred from missing classifications or a disjoint genre taxonomy.
 const originalWorks = [
  ['hamlet','https://www.folger.edu/explore/shakespeares-works/hamlet/','Shakespeare’s English Renaissance play, composed around 1600; not an original ancient Greek tragedy. Classical influence does not change its original historical theatrical tradition.'],
  ['tartuffe','https://www.gutenberg.org/ebooks/28488','Original Molière French comedy; seventeenth-century French theatrical work, not the ancient Greek tragic tradition.'],
  ['importance-earnest','https://www.bloomsbury.com/uk/importance-of-being-earnest-9781474260756/','Wilde’s English comedy of manners, first staged in 1895; not an original ancient Greek tragedy.'],
  ['dolls-house','https://ibsen.uio.no/DRINNL_Du%7Cintro_performance.html','Ibsen’s modern Scandinavian play, premiered Copenhagen in 1879; not an original ancient Greek tragedy.'],
  ['cyrano','https://www.reseau-canope.fr/edutheque-theatre-en-acte/oeuvre/edmond-rostand/cyrano-de-bergerac.html','Rostand’s French heroic comedy of 1897; not an original ancient Greek tragedy. Romantic tragic readings remain valid.'],
  ['school-scandal','https://www.bloomsbury.com/UK/author/richard-brinsley-sheridan/','Sheridan’s English comedy of manners, opened 1777; not an original ancient Greek tragedy.'],
  ['she-stoops-conquer','https://www.gutenberg.org/files/383/383-h/383-h.htm','Goldsmith’s original English comedy, 1773 title page; not an original ancient Greek tragedy.'],
  ['doctor-faustus','https://www.gutenberg.org/ebooks/779','Marlowe’s English tragedy in the 1604 quarto; Renaissance rather than original ancient Greek dramatic tradition. Tragedy remains true.'],
  ['tempest','https://www.folger.edu/explore/shakespeares-works/the-tempest/','Shakespeare’s English romance, around 1611; not an original ancient Greek tragedy. Historic comedy and later tragicomic readings remain valid.'],
 ] as const;
 for (const [work,url,locator] of originalWorks) {
  const c=set.concepts.find(c=>c.relation==='genre_of_play'&&c.semantic?.subject?.id===`work:${work}`);
  if(c)append(c,'greek-tragedy','invalid',url,`${locator} Category sense: ancient Greek tragedy, Cambridge Companion to Greek Tragedy (https://www.cambridge.org/core/books/the-cambridge-companion-to-greek-tragedy/57636964B37CA6A04DCEACF8253B611E), book description and original historical theatrical context. This does not assert that later plays cannot share Greek tragic structures.`,'historical-tradition');
 }
 // The revenge-tragedy definition requires vengeance to drive the main
 // action. These comparisons use the complete original dramatic action, not
 // absence from a catalogue and not a general comedy/tragedy exclusion.
 const nonRevengeActions = [
  ['cyrano','https://www.bard.org/study-guides/a-romantic-melodrama/','The documented main action is Cyrano’s concealed love and his courtship on Christian’s behalf, ending in Roxane’s recognition. Duels and resentment are not the organising pursuit of vengeance.'],
  ['dolls-house','https://www.gutenberg.org/ebooks/2542','Original text, Acts I–III: Nora’s concealed loan, Krogstad’s blackmail and her final decision to leave organise the action. Krogstad’s threats are instrumental pressure, not a central revenge quest structuring the whole play.'],
  ['importance-earnest','https://www.gutenberg.org/ebooks/844','Original play, Acts I–III: invented identities, two courtships and the recognition of Jack’s parentage end in marriage reconciliation. No pursuit of vengeance drives the main dramatic action.'],
  ['tartuffe','https://www.gutenberg.org/ebooks/28488','Original five-act comedy: the household exposes an impostor’s religious hypocrisy and appropriation of Orgon’s property; the royal intervention restores the family. Retaliatory threats are subordinate to this exposure plot, not a tragedy organised around a revenge quest.'],
 ] as const;
 for (const [work,url,locator] of nonRevengeActions) {
  const c=set.concepts.find(c=>c.relation==='genre_of_play'&&c.semantic?.subject?.id===`work:${work}`);
  if(c)append(c,'revenge-tragedy','invalid',url,`${locator} Compared with the required main revenge motive in the PMLA definition already sourced in theatreGenres; incidental hostility or a revenge subplot is insufficient.`,'required-main-action');
 }
 const antigone=set.concepts.find(c=>c.relation==='genre_of_play'&&c.semantic?.subject?.id==='work:antigone');
 if(antigone)append(antigone,'comedy-manners','invalid','https://www.perseus.tufts.edu/hopper/text?doc=Perseus%3Atext%3A1999.04.0023',
  'Jebb, Antigone commentary, introduction and burial action: fatal conflict over the burial edict and Creon’s desolation, not a comedy satirising fashionable social manners. This is a refinement of the existing work-specific non-comedy certificate: a comedy of manners must itself be a comedy (https://www.merriam-webster.com/dictionary/comedy%20of%20manners). Incidental wit does not supply that comic dramatic structure.','comic-subtype');
}
