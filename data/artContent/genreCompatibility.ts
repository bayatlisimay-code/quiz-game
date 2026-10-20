import type { AuthoredSet } from './sourceAuthoring';
import type { SemanticEvidence } from '../../src/quizEngine/assessmentTypes';

type Review = Readonly<{
  work: string; value: string; verdict: 'valid' | 'invalid'; url: string; locator: string;
}>;

// Work-specific assertions, never disjoint genre classes or complete genre sets.
// A critical reading can support an additional classification; its existence
// prevents using that classification as a distractor, even when noncanonical.
const literature: readonly Review[] = [
  {work:'moby-dick',value:'psychological',verdict:'valid',url:'https://www.gutenberg.org/ebooks/2701',locator:'About this eBook, Subject field Psychological fiction, alongside Sea stories. The automatically generated summary is not evidence.'},
  {work:'moby-dick',value:'adventure',verdict:'valid',url:'https://www.gutenberg.org/ebooks/2701',locator:'About this eBook, Subject field Adventure stories, alongside Sea stories. These are non-exclusive classifications, not a complete set.'},
  {work:'dracula',value:'gothic',verdict:'valid',url:'https://www.gutenberg.org/ebooks/345',locator:'About this eBook, Subject field Gothic fiction, alongside Epistolary fiction. The automatically generated summary is not evidence.'},
  {work:'dracula',value:'vampire-fiction',verdict:'valid',url:'https://www.gutenberg.org/ebooks/345',locator:'About this eBook, Subject field Vampires -- Fiction. A supported additional subject/genre classification, not the only legitimate label.'},
  {work:'dracula',value:'horror',verdict:'valid',url:'https://www.gutenberg.org/ebooks/345',locator:'About this eBook, Subject field Horror tales, alongside Epistolary fiction and Gothic fiction. These classifications can coexist.'},
  {work:'maltese-falcon',value:'love-story',verdict:'valid',url:'https://www.arts.gov/initiatives/nea-big-read/maltese-falcon',locator:'NEA Big Read overview explicitly recognises the novel as a thriller, love story and dark dry comedy in addition to detective fiction. Preserve the legitimate love-story alternative.'},
  {work:'maltese-falcon',value:'family-saga',verdict:'invalid',url:'https://www.arts.gov/initiatives/nea-big-read/maltese-falcon',locator:'Introduction specifies the six-day San Francisco investigation, December 5–10, 1928, and describes the murders and competing claims to the statuette. Work-specific comparison: the organising narrative is this short criminal investigation, not the lives of successive family generations. A relative appearing in a crime plot does not make the original book a family saga.'},
  {work:'maltese-falcon',value:'science-fiction',verdict:'invalid',url:'https://www.arts.gov/initiatives/nea-big-read/maltese-falcon',locator:'Introduction and Hammett and Detective Fiction sections: six-day 1928 San Francisco private investigation, urban realism, ordinary murders and deception concerning a statuette. Work-specific feature comparison: neither scientific speculation nor speculative technology organises this original narrative. This is not a claim that detective fiction in general cannot overlap science fiction.'},
  {work:'pride-prejudice',value:'bildungsroman',verdict:'valid',url:'https://academicworks.cuny.edu/gc_etds/3579/',locator:'Anne E. McFadden, The Remnants of Harmonious Bildungs (2019), dissertation abstract: explicitly offers Pride and Prejudice as an example fulfilling the Classical Bildungsroman requirements.'},
  {work:'frankenstein',value:'bildungsroman',verdict:'valid',url:'https://english.umd.edu/research-innovation/journals/paper-shell-review/paper-shell-review-spring-2019/monstrously-alone',locator:'Monstrously Alone: Foreclosed Social Development in Mary Shelley’s Frankenstein (2019), opening and argument: follows Isabelle Bour in identifying the novel’s experiment with the Bildungsroman genre. This supported critical reading is not the sole classification.'},
  {work:'pride-prejudice',value:'epistolary',verdict:'invalid',url:'https://qualifications.pearson.com/content/dam/pdf/International-GCSE/English-Literature/2023/Exam-materials/4wet2-01-rms-20240822.pdf',locator:'Printed page 53 / PDF page index 52, question 18 AO2 Form/Structure: explicitly distinguishes the novel from an epistolary novel despite its approximately forty letters. Refers to the published original, not a conjectural earlier manuscript or an epistolary adaptation.'},
  {work:'pride-prejudice',value:'sea-story',verdict:'invalid',url:'https://janeaustens.house/jane-austen/novels/pride-and-prejudice/',locator:'Novel account: setting among landed gentry in southern England; narrative centres on the Bennet daughters’ courtship, inheritance and marriages. Work-specific comparison: this land-based courtship plot is not a narrative centred on seafaring. This is an inference from the documented setting and central action, not exclusion by the Love story label.'},
  {work:'pride-prejudice',value:'science-fiction',verdict:'invalid',url:'https://janeaustens.house/jane-austen/novels/pride-and-prejudice/',locator:'Novel account: contemporary southern-English gentry, inheritance, courtship and marriage are the organising action. Compare the same museum’s Jane Austen biography (https://janeaustens.house/jane-austen/), which identifies realistic characters, situations and events, with Merriam-Webster science fiction (https://www.merriam-webster.com/dictionary/science%20fiction): central impact of actual or imagined science. No scientific speculation structures this original novel; this work-specific source-feature inference does not declare all realism disjoint from science fiction.'},
];

const theatre: readonly Review[] = [
  {work:'fences',value:'memory-play',verdict:'invalid',url:'https://www.scr.org/media/20hn2f55/fencesguide.pdf',locator:'South Coast Repertory dramaturgical guide, PDF page 6, scene-by-scene chronology: the action advances from Friday night in 1957 through subsequent mornings, weeks and months to an eight-years-later final scene. Its presentation is not a character’s recollection reconstructing the staged past, unlike the memory-play definition and Tom’s framing in The Glass Menagerie. Troy recounting earlier experiences does not turn this forward-moving original stage structure into a memory play.'},
  {work:'fences',value:'absurd',verdict:'invalid',url:'https://www.scr.org/media/20hn2f55/fencesguide.pdf',locator:'PDF pages 2, 5–6: socially and historically situated family conflict, Kushner’s account of direct social realist drama despite the magical element, and coherent chronological action. Compare the documented Theatre of the Absurd definition in theatreGenres: disrupted language and narrative staging difficulty in finding meaning. This original play’s intelligible causal family conflict and historically specific social argument do not instantiate that dramatic form. Work-specific structure comparison, not blanket disjointness of realism and absurdism; Gabriel’s symbolism alone is not an absurdist classification.'},
  {work:'fences',value:'realist-drama',verdict:'valid',url:'https://www.scr.org/media/20hn2f55/fencesguide.pdf',locator:'PDF page 5: Kushner identifies the social realist dramatic tradition while explicitly acknowledging Wilson’s magical elements. Realist drama is an additional supported description, not an exclusive category.'},
  {work:'antigone',value:'comedy',verdict:'invalid',url:'https://www.bloomsbury.com/uk/antigone-9781350510449/',locator:'Publisher commentary describes the irreconcilable family/city conflict and deep tragedy. Jebb’s original-play commentary (Perseus 1999.04.0023) explains the burial action and deaths of Antigone, Haemon and Eurydice, ending in Creon’s desolation. Work-specific dramatic-structure comparison: this original play is not organised as comedy. Incidental comic speech does not constitute a comedy classification; no general tragedy/comedy disjointness is asserted.'},
  {work:'hamlet',value:'tragedy',verdict:'valid',url:'https://www.folger.edu/explore/shakespeares-works/hamlet/',locator:'Introduction identifies the work as a revenge tragedy; the tragedy parent remains a valid classification, not an incorrect alternative.'},
  {work:'cyrano',value:'comedy',verdict:'valid',url:'https://www.bard.org/study-guides/a-romantic-melodrama/',locator:'Utah Shakespeare Festival literary study: records the author’s heroic comedy designation, alongside romantic comedy and tragicomedy readings. The broader comedy classification is supported, not exclusive.'},
  {work:'cyrano',value:'tragicomedy',verdict:'valid',url:'https://www.bard.org/study-guides/a-romantic-melodrama/',locator:'Opening paragraph explicitly records tragicomedy among the work’s classifications. The title is also described as heroic comedy; neither can be treated as false.'},
  {work:'cyrano',value:'tragedy',verdict:'valid',url:'https://www.bard.org/study-guides/heroic-comedy-or-romantic-tragedy/',locator:'Festival literary study explicitly recognises romantic tragedy as a classification despite Rostand’s heroic comedy designation; preserve the critical alternative.'},
  {work:'school-scandal',value:'comedy',verdict:'valid',url:'https://www.bloomsbury.com/UK/author/richard-brinsley-sheridan/',locator:'Biography identifies The School for Scandal as a comedy of manners; the comedy parent remains valid.'},
  {work:'antigone',value:'revenge-tragedy',verdict:'invalid',url:'https://www.perseus.tufts.edu/hopper/text?doc=Perseus%3Atext%3A1999.04.0023',locator:'Richard C. Jebb, Commentary on Sophocles: Antigone, Introduction and opening-scene commentary: Antigone’s organising action is burial of Polyneices in defiance of Creon’s edict, not avenging his death. Compare the required main revenge motive in the Cambridge/PMLA revenge-play definition already sourced in theatreGenres. Work-specific motive comparison; deaths, punishment or hostility alone do not establish revenge tragedy.'},
];

/** Append evidence without mutating any teaching record, priority or stage. */
export function addGenreCompatibility(set: AuthoredSet, domain: 'literature' | 'theatre'): void {
  const reviews = domain === 'literature' ? literature : theatre;
  for (const review of reviews) {
    const concept = set.concepts.find(c => c.partId === 'p2' && c.semantic?.subject?.id === `work:${review.work}`);
    if (!concept) continue;
    set.evidence.push({
      id:`genre-comparison:${domain}:${review.work}:${review.value}`,kind:'assertion',
      predicateId:concept.relation,subjectId:`work:${review.work}`,valueId:`${domain === 'literature' ? 'literary' : 'theatre'}-genre:${review.value}`,
      qualifiers:concept.semantic?.qualifiers ?? {},verdict:review.verdict,sourceUrl:review.url,locator:review.locator,
      reviewStatus:'verified',reviewedBy:'Codex — source and work-feature comparison (not independent human editorial approval)',reviewedAt:'2026-10-20',
    } satisfies SemanticEvidence);
  }
  // "Drama" is unqualified in the current records/questions. It cannot be
  // silently narrowed to a licensor's category meaning serious non-comedy.
  if (domain === 'theatre') for (const concept of set.concepts.filter(c => c.partId === 'p2')) {
    if (concept.semantic?.value?.id === 'theatre-genre:drama') continue;
    set.evidence.push({
      id:`genre-broad-drama:${concept.id}`,kind:'assertion',predicateId:concept.relation,
      subjectId:concept.semantic!.subject!.id!,valueId:'theatre-genre:drama',qualifiers:concept.semantic?.qualifiers ?? {},verdict:'valid',
      sourceUrl:'https://www.merriam-webster.com/dictionary/drama',locator:'Drama, noun sense 1a: a composition in verse or prose telling a story through action and dialogue, typically for theatrical performance. The original stage work documented by this teaching record meets that broad form. Serious-play sense 1b is narrower, but no visible or semantic source-field scope restricts the current question to it. This positive prevents using Drama as false for comedy, tragicomedy, memory plays or absurdist plays.',
      reviewStatus:'verified',reviewedBy:'Codex — definition and original stage-work comparison (not independent human editorial approval)',reviewedAt:'2026-10-20',
    });
  }
}
