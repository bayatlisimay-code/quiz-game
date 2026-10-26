import { musicCreditEvidence } from './musicCompatibility';
import { joinSets, type AuthoredSet } from './sourceAuthoring';
import { musicFact, musicSource, musicDefinitionSet, musicPriority, musicId, scheduleMusic } from './musicAuthoring';
import { musicTerms } from './musicTerms';
import { musicSoloArtists } from './musicSoloArtists';
import { musicBands } from './musicBands';
import { musicComposers } from './musicComposers';
import { musicGenres } from './musicGenres';
import { musicInstruments } from './musicInstruments';
import { musicSourceReviews as reviews } from './musicSourceReviews';

const priorityReason = (i: number) => i < 11 ? 'Recognisable anchor selected for general-knowledge value and safe progression.' : 'Additional reviewed reserve; only introduced teaching facts enter review.';
const reviewed = (id: string, field: string) => {
  const review = reviews[`${id}-${field}`] ?? reviews[id];
  return {source: musicSource(review), checked: !!review?.checkedFields.includes(field)};
};
const birth = (level: string, id: string, name: string, country: string, i: number) => {
  const r = reviewed(id, 'birth'), value = `country:${musicId(country)}`;
  return musicFact({level, part: 'p1', id, subject: name, subjectId: `person:${id}`, subjectType: 'person',
    answer: country, answerId: value, answerType: 'country', source: r.source,
    qualifiers: {countryConvention: 'present-day'}, scope: 'Country containing the documented birthplace today.',
    priority: musicPriority(i), priorityReason: priorityReason(i), contract: {geography: 'present-day'},
    completeField: {valueIds: [value], reason: 'The documented birthplace lies within this present-day country; citizenship and ancestry are separate questions.'},
  }, r.checked);
};
const recordings = (level: string, id: string, name: string, song: string, year: number, entity: 'person'|'group', i: number) => {
  const r = reviewed(id, 'song'), versionId = `recording:${id}:${musicId(song)}:studio`;
  return musicFact({level, part: 'p2', id, subject: name, subjectId: `${entity}:${id}`, subjectType: entity,
    answer: `${song} (${id === 'fela-kuti' ? '1976–77' : year} version)`, answerId: versionId, answerType: 'recording', source: r.source,
    qualifiers: {role: 'performer', versionId, assessmentScope: 'lead-recording-credit'}, scope: 'The named release’s main recording credit; later covers and songwriting are separate.',
    priority: musicPriority(i), priorityReason: priorityReason(i),
    contract: {music: {role: 'performer', versionId, creditedEntityId: `${entity}:${id}`,
      ...(['mercedes-sosa','johnny-cash','nina-simone','maria-callas','aretha-franklin','teresa-teng','dubliners'].includes(id) ? {isCover: true} : {})}},
  }, r.checked);
};
// User-approved genre-lesson decisions, 2026-10-26. Birth and recording
// placements keep the roster order; only the p4 genre introduction changes.
const genreStageSwaps: Readonly<Record<string, readonly [string, string]>> = {
  l2: ['shakira', 'maria-callas'], // Callas → Opera introduced; Shakira → Pop held in reserve.
  l6: ['bjork', 'umm-kulthum'], // Umm Kulthum C → A; Björk A → C.
};
// Bossa nova is clearer for a general audience than the broad Brazilian popular
// music label. Caetano Veloso's birth and recording facts are unchanged.
const genreReplacements: Readonly<Record<string, readonly [id: string, name: string, genre: string]>> = {
  'caetano-veloso': ['joao-gilberto', 'João Gilberto', 'Bossa nova'],
};
const soloSets = Object.entries(musicSoloArtists).flatMap(([level, artists]) => artists.flatMap(([rosterId, rosterName, country, rosterGenre, song, year], i) => {
  const [id, name, genre] = genreReplacements[rosterId] ?? [rosterId, rosterName, rosterGenre];
  const swap = genreStageSwaps[level], ids = artists.map(a => a[0]);
  const g = swap?.includes(rosterId) ? ids.indexOf(swap[swap[0] === rosterId ? 1 : 0]) : i;
  const r = reviewed(id, 'genre');
  return [birth(level, rosterId, rosterName, country, i), recordings(level, rosterId, rosterName, song, year, 'person', i),
    musicFact({level, part: 'p4', id, subject: name, subjectId: `person:${id}`, subjectType: 'person',
      answer: genre, answerId: `music-genre:${musicId(genre)}`, answerType: 'category', source: r.source,
      qualifiers: {}, scope: '', priority: musicPriority(g), priorityReason: priorityReason(g),
    }, r.checked)];
}));
const bandSets = Object.entries(musicBands).flatMap(([level, bands]) => bands.flatMap(([id, name, country, year, song, songYear], i) => {
  const r = reviewed(id, 'formation'), countryId = `country:${musicId(country)}`;
  return [musicFact({level, part: 'p1', id, subject: name, subjectId: `group:${id}`, subjectType: 'group',
    answer: country, answerId: countryId, answerType: 'country', source: r.source,
    qualifiers: {countryConvention: 'present-day'}, scope: 'Country where the group formed, rather than the members’ birthplaces.',
    priority: musicPriority(i), priorityReason: priorityReason(i), contract: {geography: 'present-day'},
    completeField: {valueIds: [countryId], reason: 'The cited formation place lies within this present-day country.'},
  }, r.checked), recordings(level, id, name, song, songYear, 'group', i),
  musicFact({level, part: 'p4', id, subject: name, subjectId: `group:${id}`, subjectType: 'group',
    answer: String(year), answerId: `year:${year}`, answerType: 'date', source: r.source,
    qualifiers: {event: 'formation'}, scope: 'The documented formation of the group, not its first hit or debut album.',
    priority: musicPriority(i), priorityReason: priorityReason(i), contract: {event: 'formation'},
    temporal: {start: year, end: year, calendar: 'gregorian-proleptic'},
    completeField: {valueIds: [`year:${year}`], reason: 'The source explicitly dates the band’s formation to this calendar year.'},
  }, r.checked)];
}));
const composerSets = musicComposers.flatMap(([id, name, country, period, composition], i) => {
  const work = reviewed(id, 'composition'), era = reviewed(id, 'period');
  const versionId = `composition:${id}:${musicId(composition)}`;
  return [birth('l4', id, name, country, i),
    musicFact({level: 'l4', part: 'p2', id, subject: name, subjectId: `person:${id}`, subjectType: 'person',
      answer: composition, answerId: versionId, answerType: 'composition', source: work.source,
      qualifiers: {role: 'composer', versionId}, scope: 'Composition credit, not the performer of a later recording.',
      priority: musicPriority(i), priorityReason: priorityReason(i),
      contract: {music: {role: 'composer', versionId, creditedEntityId: `person:${id}`}},
    }, work.checked),
    musicFact({level: 'l4', part: 'p4', id, subject: name, subjectId: `person:${id}`, subjectType: 'person',
      answer: period, answerId: `music-period:${musicId(period)}`, answerType: 'period', source: era.source,
      qualifiers: {sense: 'historical-era'}, scope: 'Historical musical period; Classical here means the period, not all art music.',
      priority: musicPriority(i), priorityReason: priorityReason(i),
    }, era.checked)];
});
const genreDefinitions = musicDefinitionSet('l1', 'p1', musicGenres.map(([id, name, meaning]) => [id, name, meaning]), reviews);
const genreSets = musicGenres.flatMap(([id, name, , song, performer, songYear], i) => {
  const recording = reviewed(`genre:${id}`, 'song'), artist = reviewed(`genre:${id}`, 'artist');
  const versionId = `recording:genre-${id}:${musicId(song)}:${musicId(performer)}`;
  const entity = ['reggae','hip-hop','jazz','electronic','gospel','salsa','afrobeat'].includes(id) ? 'group' : 'person';
  return [musicFact({level: 'l1', part: 'p2', id, subject: name, subjectId: `music-genre:${id}`, subjectType: 'category',
    answer: `${song} (${id === 'afrobeat' ? '1976–77' : songYear} version)`, answerId: versionId, answerType: 'recording', source: recording.source,
    qualifiers: {role: 'performer', versionId, creditId: `${entity}:${musicId(performer)}`, creditBasis: 'named-recording-artist'}, scope: `The specified studio recording credited to ${performer}.`,
    priority: musicPriority(i), priorityReason: priorityReason(i),
    contract: {focus: {kind: 'example-credit', identity: `${entity}:${musicId(performer)}`, label: performer}, music: {role: 'performer', versionId, creditedEntityId: `${entity}:${musicId(performer)}`}},
  }, recording.checked), musicFact({level: 'l1', part: 'p4', id, subject: name, subjectId: `music-genre:${id}`, subjectType: 'category',
    answer: performer, answerId: `${entity}:${musicId(performer)}`, answerType: entity, source: artist.source,
    qualifiers: {projectId: versionId, creditAction: 'recorded', ...(entity === 'group' ? {creditBasis: 'named-collective-project-credit'} : {})}, scope: 'The main act credited on this specified recording, not all artists in the genre.',
    contract: {focus: {kind: 'project-credit', identity: versionId, label: `${song} (${id === 'afrobeat' ? '1976–77' : songYear} version)`, action: 'recorded', ...(entity === 'group' ? {collectiveCredit: true} : {})}},
    priority: musicPriority(i), priorityReason: priorityReason(i),
  }, artist.checked)];
});
const instrumentDefinitions = musicDefinitionSet('l8', 'p1', musicInstruments.map(([id, name, meaning]) => [id, name, meaning]), reviews);
const instrumentSets = musicInstruments.flatMap(([id, name, , family, player], i) => {
  const classification = reviewed(`instrument:${id}`, 'type'), musician = reviewed(`instrument:${id}`, 'musician');
  return [musicFact({level: 'l8', part: 'p2', id, subject: name, subjectId: `instrument:${id}`, subjectType: 'category',
    answer: family, answerId: `instrument-family:${musicId(family)}`, answerType: 'category', source: classification.source,
    qualifiers: {sense: 'familiar-playing-family'}, scope: 'Familiar playing family; a keyboard is a playing interface, not a claim about its sound source.',
    priority: musicPriority(i), priorityReason: priorityReason(i),
  }, classification.checked), musicFact({level: 'l8', part: 'p4', id, subject: name, subjectId: `instrument:${id}`, subjectType: 'category',
    answer: player, answerId: `person:${musicId(player)}`, answerType: 'person', source: musician.source,
    qualifiers: {}, scope: '', priority: musicPriority(i), priorityReason: priorityReason(i),
  }, musician.checked)];
});
const termSets = Object.entries(musicTerms).map(([key, terms]) => {
  const [level, part] = key.split('_') as [string, 'p1'|'p2'|'p4'];
  return musicDefinitionSet(level, part, terms, reviews);
});
/** Complete draft inventory. Registration is deliberately separate until the
 * independent source and exact comparison passes clear every active claim. */
export const musicContent: AuthoredSet = musicCreditEvidence(scheduleMusic(joinSets([
  ...soloSets, ...bandSets, ...composerSets, genreDefinitions, ...genreSets,
  instrumentDefinitions, ...instrumentSets, ...termSets,
])));

/** The production learning contract introduces 11 of the 18 authored facts.
 * Reserves are retained here, but cannot enter review before being introduced. */
export const musicTeachingContent: AuthoredSet = {
  concepts: musicContent.concepts.filter(c => (c.learning?.reinforcementPriority ?? 0) >= 3),
  evidence: musicContent.evidence,
};
export const musicReserveConcepts = musicContent.concepts.filter(c => (c.learning?.reinforcementPriority ?? 0) < 3);
