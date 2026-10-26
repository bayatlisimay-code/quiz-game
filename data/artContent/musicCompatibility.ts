import type { Concept } from '../../src/quizEngine/conceptTypes';
import type { SemanticEvidence } from '../../src/quizEngine/assessmentTypes';
import type { AuthoredSet, Source } from './sourceAuthoring';
import { musicEvidence } from './musicAuthoring';

/** Content review of the named releases, not an artist's complete repertoire.
 * These cohorts were checked for shared lead credits; guest/cover appearances
 * on other recordings cannot be inferred false from this list. */
export function musicCreditEvidence(set: AuthoredSet): AuthoredSet {
  const evidence = [...set.evidence];
  const anchors = new Map(evidence.map(e => [e.id,e]));
  const source = (c: Concept): Source | undefined => {
    if (c.assessment?.reviewStatus !== 'verified') return;
    const e = anchors.get(c.assessment.evidenceIds[0]);
    return e?.sourceUrl ? {url:e.sourceUrl,locator:e.locator,label:'Checked Music credit'} : undefined;
  };
  const creditRelations = ['example_of_notable_song_by_solo_artist','example_of_notable_song_by_band','example_of_notable_composition_by_composer'];
  // A guest duet does not cease to be a valid performance by its other singer.
  const sharedLeads: Readonly<Record<string,readonly string[]>> = {
    'salif-keita': ['cesaria-evora'],
  };
  for (const relation of creditRelations) for (const level of ['l2','l3','l4','l6','l7']) {
    const cohort = set.concepts.filter(c=>c.relation===relation && c.levelId===level && source(c));
    for (const target of cohort) for (const candidate of cohort) {
      if (target===candidate) continue;
      const a = source(target)!, b = source(candidate)!;
      const targetId = target.id.split('_').at(-1)!, candidateId = candidate.id.split('_').at(-1)!;
      const shared = sharedLeads[candidateId]?.includes(targetId);
      evidence.push(musicEvidence(target,candidate,shared ? 'valid':'invalid',b,
        relation==='example_of_notable_composition_by_composer'
          ? `Credit comparison with ${a.url}: the identified composition is credited to ${candidate.subject}, not ${target.subject}. This concerns composing this work, not arranging or performing it.`
          : shared
            ? `The identified release has both ${candidate.subject} and ${target.subject} as lead vocalists. Preserve the joint credit.`
            : `Lead-credit comparison with ${a.url}: the identified release/version is credited to ${candidate.subject}, not ${target.subject}, as the main recording artist. No claim is made that ${target.subject} never covered the song or participated in another version.`));
    }
  }
  const instrumentWrong: Readonly<Record<string, readonly string[]>> = {
    guitar: ['Woodwind','Brass','Percussion','Keyboard','Free-reed'],
    violin: ['Woodwind','Brass','Percussion','Keyboard','Free-reed'],
    piano: ['Woodwind','Brass','Free-reed'],
    flute: ['Strings','Brass','Percussion','Keyboard','Free-reed'],
    trumpet: ['Strings','Woodwind','Percussion','Keyboard','Free-reed'],
    'drum-kit': ['Strings','Woodwind','Brass','Keyboard','Free-reed'],
    saxophone: ['Strings','Brass','Percussion','Keyboard','Free-reed'],
    cello: ['Woodwind','Brass','Percussion','Keyboard','Free-reed'],
    harp: ['Woodwind','Brass','Percussion','Keyboard','Free-reed'],
    sitar: ['Woodwind','Brass','Percussion','Keyboard','Free-reed'],
    clarinet: ['Strings','Brass','Percussion','Keyboard','Free-reed'],
    accordion: ['Strings','Brass','Percussion'],
    kora: ['Woodwind','Brass','Percussion','Keyboard','Free-reed'],
    oud: ['Woodwind','Brass','Percussion','Keyboard','Free-reed'],
    tabla: ['Strings','Woodwind','Brass','Keyboard','Free-reed'],
    djembe: ['Strings','Woodwind','Brass','Keyboard','Free-reed'],
    'pipe-organ': ['Strings','Brass','Percussion'],
    marimba: ['Strings','Woodwind','Brass','Free-reed'],
  };
  const extraTypes: Readonly<Record<string, readonly string[]>> = {piano:['Strings','Percussion'],accordion:['Keyboard']};
  const types = set.concepts.filter(c=>c.relation==='type_of_instrument');
  for (const target of types) {
    const a = source(target); if (!a) continue;
    const id = target.id.split('_').at(-1)!;
    const seen = new Set<string>();
    for (const candidate of types) {
      const b = source(candidate); if (!b || seen.has(candidate.semantic!.value!.id!)) continue;
      const verdict = extraTypes[id]?.includes(candidate.object) ? 'valid' : instrumentWrong[id]?.includes(candidate.object) ? 'invalid' : undefined;
      if (!verdict) continue;
      seen.add(candidate.semantic!.value!.id!);
      evidence.push(musicEvidence(target,candidate,verdict,a,
        `Construction/family comparison with ${b.url}: ${target.subject} — ${target.object}; ${candidate.subject} — ${candidate.object}. ${verdict==='valid' ? 'Both classifications explicitly apply; keyboard, struck-string and free-reed descriptions can overlap.' : 'The documented playing mechanism does not meet this alternative family definition. This is a conventional instrument-family comparison, not a claim no unusual playing technique exists.'}`));
    }
  }
  // Historical eras, not a universal mutually-exclusive style taxonomy.
  const periods = set.concepts.filter(c=>c.relation==='historical_period_of_composer');
  const periodWrong: Readonly<Record<string, readonly string[]>> = {
    bach:['Classical','Romantic','20th-century music'],
    mozart:['Baroque','Romantic','20th-century music'],
    chopin:['Baroque','20th-century music'],
    tchaikovsky:['Baroque','Classical','20th-century music'],
    gershwin:['Baroque','Classical','Romantic'],
    vivaldi:['Classical','Romantic','20th-century music'],
    debussy:['Baroque','Classical'],
    grieg:['Baroque','Classical'],
    takemitsu:['Baroque','Classical','Romantic'],
    stravinsky:['Baroque','Classical'],
    haydn:['Baroque','Romantic','20th-century music'],
    handel:['Classical','Romantic','20th-century music'],
    beethoven:['Baroque','20th-century music'],
    schubert:['Baroque','20th-century music'],
    sibelius:['Baroque','Classical'],
    dvorak:['Baroque','Classical'],
    'clara-schumann':['Baroque','Classical','20th-century music'],
    'florence-price':['Baroque','Classical'],
  };
  const periodAdditional: Readonly<Record<string,readonly string[]>> = {
    grieg:['20th-century music'],sibelius:['20th-century music'],dvorak:['20th-century music'],
    beethoven:['Classical','Romantic'],
  };
  for (const target of periods) {
    const a = source(target); if (!a) continue;
    const id = target.id.split('_').at(-1)!;
    const seen = new Set<string>();
    for (const candidate of periods) {
      if (!source(candidate) || seen.has(candidate.object)) continue;
      const verdict = periodAdditional[id]?.includes(candidate.object) ? 'valid' : periodWrong[id]?.includes(candidate.object) ? 'invalid' : undefined;
      if (!verdict) continue;
      seen.add(candidate.object);
      evidence.push(musicEvidence(target,candidate,verdict,a,
        `Era comparison: ${target.subject} is taught in ${target.object}; ${candidate.object} ${verdict==='valid' ? 'also overlaps the documented career or is a recognised part of the combined period answer.' : 'is outside the documented historical teaching era of this career. Classical denotes the historical period, not the broad classical-music tradition.'}`));
    }
  }
  // A pianist/harpist must remain acceptable for either documented instrument.
  const piano = set.concepts.find(c=>c.id==='art_music_l8_p4_piano');
  const harpist = set.concepts.find(c=>c.id==='art_music_l8_p4_harp');
  if (piano && harpist && source(harpist)) evidence.push(musicEvidence(piano,harpist,'valid',source(harpist)!,
    'The credited Carnegie Hall performance explicitly names Alice Coltrane on piano and harp.'));
  // Independently documented secondary associations remain positive. This is
  // not a closed genre list and supplies no negative comparisons.
  const alsoValid: Readonly<Record<string,readonly string[]>> = {
    'stevie-wonder':['Rock','Pop','Jazz','Reggae','Funk'],
    beyonce:['Country'],'johnny-cash':['Rock','Gospel'],
    'nina-simone':['Gospel','Blues','Folk','Pop','Classical'],
    'nusrat-fateh-ali-khan':['Folk'],'dolly-parton':['Pop','Bluegrass'],
  };
  for (const target of set.concepts.filter(c=>c.relation==='genre_associated_with_solo_artist')) {
    const a=source(target); if (!a) continue;
    const id=target.id.split('_').at(-1)!;
    for (const genre of alsoValid[id] ?? []) {
      const genreId=genre.toLowerCase().replace(/[^a-z0-9]+/g,'-');
      evidence.push({predicateId:target.relation,subjectId:target.semantic!.subject!.id!,qualifiers:target.semantic!.qualifiers??{},reviewStatus:'verified',reviewedAt:'2026-10-26',reviewedBy:'Codex — Music source comparison (not independent human editorial certification)',
        id:`music-secondary-genre:${id}:${genreId}`,kind:'assertion',valueId:`music-genre:${genreId}`,verdict:'valid',
        sourceUrl:a.url,locator:`${a.locator}. Documented secondary association: ${genre}. Primary teaching does not exclude this answer.`});
    }
  }
  // The visible named recording artist is part of the exact assessed claim,
  // following the existing literary genre/byline example-credit contract.
  // Distinct credited primary recordings fail that artist requirement even
  // when the song could legitimately fit more than one genre.
  const genreRecordings=set.concepts.filter(c=>c.relation==='example_of_song_in_music_genre' && source(c));
  for (const target of genreRecordings) for (const candidate of genreRecordings) {
    if (target===candidate || !target.assessment?.focus || !candidate.assessment?.focus ||
      target.assessment.music?.creditedEntityId===candidate.assessment.music?.creditedEntityId) continue;
    const a=source(target)!, b=source(candidate)!;
    evidence.push(musicEvidence(target,candidate,'invalid',b,
      `Named primary-recording credit comparison with ${a.url}: the question explicitly asks for a recording by ${target.assessment.focus.label}. This specified recording is credited to ${candidate.assessment.focus.label}, not that named act. No genre classification is denied; without the named-artist qualifier this comparison remains unverified.`));
  }
  const genreArtists=set.concepts.filter(c=>c.relation==='notable_artist_of_genre' && source(c));
  for (const target of genreArtists) for (const candidate of genreArtists) {
    if (target===candidate || target.semantic!.value!.id===candidate.semantic!.value!.id || !target.assessment?.focus) continue;
    const a=source(target)!;
    evidence.push(musicEvidence(target,candidate,'invalid',a,
      `This question visibly names ${target.assessment.focus.label}. Its primary recording act is ${target.object}, not ${candidate.object}. This is the named recording credit, not an exclusion of ${candidate.object} from ${target.subject}. Without the recording qualifier this comparison is not certified.`));
  }
  addMusicEditorialComparisons(set.concepts, evidence);
  return {...set,evidence};
}

// User decisions from “Continue Music Integration & Resolve Remaining 9 Quiz
// Shortages”, 2026-10-26, applied to docs/art-music-editorial-approval.md.
// A wrong answer concerns the principal career or notable playing, not every
// genre performed or instrument touched. Unlisted alternatives stay unknown.
// Obsolete Brazilian popular music comparisons were removed, not substituted.
const genre = (...names: string[]) => names.map(n => `music-genre:${n}`);
const player = (...names: string[]) => names.map(n => `person:${n}`);
const manualEditorialWrong: Readonly<Record<string, Readonly<Record<string, readonly string[]>>>> = {
  l2_p4: {
    'bob-marley': genre('chanson','qawwali'),
    'elvis-presley': genre('qawwali','opera'),
    'edith-piaf': genre('qawwali','afrobeat','opera','salsa','country'),
    'nusrat-fateh-ali-khan': genre('chanson','afrobeat','opera','salsa'),
    'fela-kuti': genre('chanson','qawwali','opera','salsa'),
    'maria-callas': genre('chanson','qawwali','afrobeat','salsa','country'),
    'celine-dion': genre('qawwali','afrobeat'),
    'celia-cruz': genre('chanson','qawwali','afrobeat','opera','country'),
    'mercedes-sosa': genre('qawwali','afrobeat','opera','salsa'),
    'johnny-cash': genre('chanson','opera','salsa'),
    'miriam-makeba': genre('opera','country'),
  },
  l6_p4: {
    'stevie-wonder': genre('arabic-classical-music','fado'),
    'dolly-parton': genre('arabic-classical-music','new-age','fado'),
    'umm-kulthum': genre('country','new-age','fado','mandopop'),
    'enya': genre('country','arabic-classical-music','fado','mandopop'),
    'amalia-rodrigues': genre('country','arabic-classical-music','new-age'),
    'cesaria-evora': genre('country','arabic-classical-music'),
    'stromae': genre('arabic-classical-music','new-age'),
    'angelique-kidjo': genre('arabic-classical-music','new-age'),
    'bjork': genre('arabic-classical-music','mandopop'),
    'teresa-teng': genre('arabic-classical-music','new-age'),
  },
  l8_p4: {
    guitar: player('itzhak-perlman','james-galway','louis-armstrong','yo-yo-ma','ravi-shankar'),
    violin: player('jimi-hendrix','james-galway','louis-armstrong','yo-yo-ma','ravi-shankar'),
    piano: player('james-galway','louis-armstrong'),
    flute: player('jimi-hendrix','itzhak-perlman','louis-armstrong'),
    trumpet: player('jimi-hendrix','itzhak-perlman','james-galway','yo-yo-ma'),
    'drum-kit': player('itzhak-perlman','james-galway'),
    saxophone: player('jimi-hendrix','itzhak-perlman'),
    cello: player('jimi-hendrix','itzhak-perlman','louis-armstrong','ravi-shankar'),
    harp: player('jimi-hendrix','itzhak-perlman'),
    sitar: player('jimi-hendrix','itzhak-perlman','yo-yo-ma'),
    clarinet: player('jimi-hendrix','itzhak-perlman'),
  },
};
// Not in the approval document: João Gilberto replaces Caetano Veloso's genre
// placement, so his pool was selected separately rather than inherited. The
// Bossa nova reverses are the minimum the B/C matching quartets need; each was
// checked against the artist's principal career rather than substituted for
// the withdrawn Brazilian popular music comparison. All eight were approved by
// the user on 2026-10-26.
const claudeSelectedWrong: Readonly<Record<string, Readonly<Record<string, readonly string[]>>>> = {
  l6_p4: {
    'joao-gilberto': genre('country','arabic-classical-music','new-age','mandopop'),
    'dolly-parton': genre('bossa-nova'), 'umm-kulthum': genre('bossa-nova'), 'enya': genre('bossa-nova'),
    'teresa-teng': genre('bossa-nova'),
  },
};

function addMusicEditorialComparisons(concepts: readonly Concept[], evidence: SemanticEvidence[]): void {
  const request = '“Continue Music Integration & Resolve Remaining 9 Quiz Shortages”, 2026-10-26';
  for (const [pools, selected] of [[manualEditorialWrong, false], [claudeSelectedWrong, true]] as const)
  for (const [placement, subjects] of Object.entries(pools)) {
    const [level, part] = placement.split('_');
    for (const [id, wrong] of Object.entries(subjects)) {
      const concept = concepts.find(c => c.id === `art_music_${level}_${part}_${id}`);
      if (!concept) throw new Error(`Missing Music editorial subject ${placement}:${id}`);
      const subjectId = concept.semantic!.subject!.id!;
      const anchor = evidence.find(e => concept.assessment!.evidenceIds.includes(e.id))!;
      for (const valueId of wrong) {
        // Never override a known positive with a manual negative.
        if (evidence.some(e => e.kind === 'assertion' && e.predicateId === concept.relation && e.subjectId === subjectId &&
          e.valueId === valueId && e.verdict === 'valid')) continue;
        evidence.push({
          id: `manual-editorial:2026-10-26:music:${placement}:${id}:${valueId}`, kind: 'assertion',
          predicateId: concept.relation, subjectId, valueId, qualifiers: concept.semantic?.qualifiers ?? {}, verdict: 'invalid',
          sourceUrl: anchor.sourceUrl,
          locator: selected
            ? `Manual editorial approval: user request “Approve all 8 Claude-selected incorrect genre comparisons”, 2026-10-26; ${concept.subject} → ${valueId}: approved incorrect alternative, selected by Claude Code under ${request} for the João Gilberto → Bossa nova replacement (outside the principal career, ${concept.object}). The linked source documents the positive association only; it is not external verification of this exclusion.`
            : `Manual editorial approval: user request ${request}; ${concept.subject} → ${valueId}: approved incorrect alternative for the principal career or notable playing in this question. The linked source documents the positive association only; it is not external verification of this exclusion.`,
          reviewStatus: 'verified',
          reviewedBy: 'User — manual editorial approval (not external source verification)',
          reviewedAt: '2026-10-26',
        });
      }
    }
  }
}
