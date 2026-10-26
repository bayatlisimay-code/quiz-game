# Music — editorial comparison approvals

## Decision record — implemented 2026-10-26

The user approved this list in “Continue Music Integration & Resolve Remaining 9 Quiz Shortages”. Implementation: `manualEditorialWrong` / `claudeSelectedWrong` in `data/artContent/musicCompatibility.ts` (ids `manual-editorial:2026-10-26:music:*`), staging and replacement in `data/artContent/musicContent.ts`.

- **Staging applied:** L2/p4 Maria Callas → Opera introduced (A) and Shakira → Pop moved to reserve. Shakira's birth and song placements are unchanged. L6/p4 Umm Kulthum moves C → A and Björk A → C. 6/3/2 is preserved.
- **Replacement:** L6/p4 Caetano Veloso → Brazilian popular music is replaced by **João Gilberto → Bossa nova** (B stage). Source: jazz.com encyclopedia, with NBC News as the second source. Caetano's birth and recording facts are unchanged.
- **98 user-approved incorrect comparisons** are installed: L2 38, L6 26, L8 34. None was skipped for conflicting with a positive. Alice Coltrane → Piano and every documented secondary genre remain valid.
- **8 comparisons were removed:** Caetano's 4, plus Brazilian popular music for Dolly Parton, Umm Kulthum, Enya and Teresa Teng. Bossa nova was not automatically substituted.
- **8 Claude-selected comparisons, approved by the user on 2026-10-26** (“Approve all 8 Claude-selected incorrect genre comparisons”). They are recorded with the standard `reviewedBy: User — manual editorial approval (not external source verification)`, and their locator says “selected by Claude Code”:
  - João Gilberto ≠ Country, Arabic classical music, New age, Mandopop.
  - Dolly Parton, Umm Kulthum, Enya ≠ Bossa nova. These are the minimum needed for the L6/p4/B matching quartet.
  - **Teresa Teng ≠ Bossa nova.** This is required for L6/p4/C; without it C has no safe quartet. A search found no notable Bossa nova association, and her principal career is Mandopop.
- Question wording for these two relations: “Which music genre is {artist} known for?” and “Which musician is famous for playing the {instrument}?”. Both are worded as principal associations, not exhaustive claims.

The original proposal follows unchanged for reference.

---

**2026-10-26 (proposal, pre-approval). Proposals only. None of the incorrect comparisons below is implemented or verified.** Music is currently a draft outside the active registry: **141/150**, not release-ready. All existing positive evidence remains authoritative; an editorial decision must not override a documented valid alternative.

This is the focused proposed pool for the nine blocked variants, rather than six distractors per artist or a universal genre taxonomy: **106 subject-specific comparisons** (38 + 34 + 34). A wrong answer here means the alternative is unsuitable for the person's documented musical career in an ordinary general-knowledge question; it does not mean the person never tried an instrument, covered a song, or collaborated outside their main tradition.

Please approve, reject or edit individual rows. **Unapproved comparisons stay unknown.** If a proposed comparison has a documented positive classification, retain the positive and reject that negative. These proposals are editorial judgments, not claims that an external source explicitly certified an exclusion.

## Two separate selection/staging decisions

1. **L2/p4 only:** introduce **Maria Callas → Opera** from the existing reserve in place of **Shakira → Pop**. Keep Shakira's genre record in reserve and keep her birth-country/song placements unchanged. Other L2 genre introductions remain the same. This supplies an Opera target without changing anybody's canonical genre.
2. **L6/p4 only:** swap introduction stages for **Umm Kulthum → Arabic classical music (C → A)** and **Björk → Electronic (A → C)**. Keep both records and every other relation unchanged. This avoids relying on questionable Electronic/New age exclusions for Enya, or Electronic exclusions for Dolly Parton.

Neither proposal is applied. They retain six A, three B and two C introductions; all 18 authored records remain available. No new works or canonical genre changes are proposed.

## L2/p4 — 38 proposed incorrect genre associations

| Artist | Canonical genre | Proposed wrong genres |
|---|---|---|
| Bob Marley | Reggae | Chanson; Qawwali |
| Elvis Presley | Rock | Qawwali; Opera |
| Édith Piaf | Chanson | Qawwali; Afrobeat; Opera; Salsa; Country |
| Nusrat Fateh Ali Khan | Qawwali | Chanson; Afrobeat; Opera; Salsa |
| Fela Kuti | Afrobeat | Chanson; Qawwali; Opera; Salsa |
| Maria Callas | Opera | Chanson; Qawwali; Afrobeat; Salsa; Country |
| Céline Dion | Pop | Qawwali; Afrobeat |
| Celia Cruz | Salsa | Chanson; Qawwali; Afrobeat; Opera; Country |
| Mercedes Sosa | Folk | Qawwali; Afrobeat; Opera; Salsa |
| Johnny Cash | Country | Chanson; Opera; Salsa |
| Miriam Makeba | Jazz | Opera; Country |

**Deliberately excluded:** Folk for Nusrat; Rock for Cash; Pop for Elvis/Piaf; genre judgments about Shakira's French-language repertoire. These are not needed for this proposal and must not be inferred wrong.

Conditional matching groups:

| Variant | Four pairs | Six ordinary facts selected for the compatibility sketch |
|---|---|---|
| A | Piaf—Chanson; Nusrat—Qawwali; Fela—Afrobeat; Callas—Opera | Bob Marley, Elvis, Piaf, Nusrat, Fela, Callas (6 A) |
| B | Piaf—Chanson; Nusrat—Qawwali; Fela—Afrobeat; Celia—Salsa | Piaf, Nusrat, Fela (3 A); Céline, Celia, Mercedes (3 B) |
| C | Piaf—Chanson; Callas—Opera; Celia—Salsa; Cash—Country | Piaf, Callas (2 A); Celia, Mercedes (2 B); Cash, Makeba (2 C) |

## L6/p4 — 34 proposed incorrect genre associations

| Artist | Canonical genre | Proposed wrong genres |
|---|---|---|
| Stevie Wonder | Soul | Arabic classical music; Fado |
| Dolly Parton | Country | Arabic classical music; New age; Fado; Brazilian popular music |
| Umm Kulthum | Arabic classical music | Country; New age; Fado; Brazilian popular music; Mandopop |
| Enya | New age | Country; Arabic classical music; Fado; Brazilian popular music; Mandopop |
| Amália Rodrigues | Fado | Country; Arabic classical music; New age |
| Cesária Évora | Morna | Country; Arabic classical music |
| Stromae | Pop | Arabic classical music; New age |
| Angélique Kidjo | Afropop | Arabic classical music; New age |
| Caetano Veloso | Brazilian popular music | Country; Arabic classical music; New age; Mandopop |
| Björk | Electronic | Arabic classical music; Mandopop |
| Teresa Teng | Mandopop | Arabic classical music; New age; Brazilian popular music |

**Judgment needing particular attention:** Teresa Teng/Brazilian popular music is proposed as a career/tradition distinction, not a claim that she never performed a Brazilian-influenced arrangement. Reject it if the intended broad meaning includes her documented repertoire. It is needed for the proposed C matching group; do not certify it automatically.

**Deliberately excluded:** Electronic for Enya or Dolly; Pop for Stromae-related crossover artists; Fado for Cesária or Caetano; Country for Teresa; and all known secondary Stevie Wonder genres. No universal nationality or language rule is proposed.

| Variant | Four pairs | Six ordinary facts selected for the compatibility sketch |
|---|---|---|
| A | Dolly—Country; Umm—Arabic classical music; Enya—New age; Amália—Fado | Stevie, Dolly, Umm, Enya, Amália, Cesária (6 A) |
| B | Dolly—Country; Umm—Arabic classical music; Enya—New age; Caetano—Brazilian popular music | Dolly, Umm, Enya (3 A); Stromae, Angélique, Caetano (3 B) |
| C | Umm—Arabic classical music; Enya—New age; Caetano—Brazilian popular music; Teresa—Mandopop | Umm, Enya (2 A); Stromae, Caetano (2 B); Björk, Teresa (2 C) |

## L8/p4 — 34 proposed incorrect notable-instrument associations

These are instrument → musician questions. Each row below names the **question's instrument**, its correct artist and the proposed incorrect artist options. The judgments concern notable professional playing, not every instrument a person ever touched.

| Instrument asked about | Correct musician | Proposed wrong musicians |
|---|---|---|
| Guitar | Jimi Hendrix | Itzhak Perlman; James Galway; Louis Armstrong; Yo-Yo Ma; Ravi Shankar |
| Violin | Itzhak Perlman | Jimi Hendrix; James Galway; Louis Armstrong; Yo-Yo Ma; Ravi Shankar |
| Piano | Lang Lang | James Galway; Louis Armstrong |
| Flute | James Galway | Jimi Hendrix; Itzhak Perlman; Louis Armstrong |
| Trumpet | Louis Armstrong | Jimi Hendrix; Itzhak Perlman; James Galway; Yo-Yo Ma |
| Drum kit | Buddy Rich | Itzhak Perlman; James Galway |
| Saxophone | Charlie Parker | Jimi Hendrix; Itzhak Perlman |
| Cello | Yo-Yo Ma | Jimi Hendrix; Itzhak Perlman; Louis Armstrong; Ravi Shankar |
| Harp | Alice Coltrane | Jimi Hendrix; Itzhak Perlman |
| Sitar | Ravi Shankar | Jimi Hendrix; Itzhak Perlman; Yo-Yo Ma |
| Clarinet | Benny Goodman | Jimi Hendrix; Itzhak Perlman |

**Preserve:** Alice Coltrane/Piano remains verified valid. Bach's other instruments and all unlisted secondary-instrument questions stay outside this approval request.

| Variant | Four pairs | Six ordinary facts selected for the compatibility sketch |
|---|---|---|
| A | Hendrix—Guitar; Perlman—Violin; Galway—Flute; Armstrong—Trumpet | All six A musicians |
| B | Hendrix—Guitar; Perlman—Violin; Armstrong—Trumpet; Yo-Yo Ma—Cello | Hendrix, Perlman, Armstrong (3 A); Parker, Yo-Yo Ma, Alice (3 B) |
| C | Hendrix—Guitar; Perlman—Violin; Yo-Yo Ma—Cello; Ravi—Sitar | Hendrix, Perlman (2 A); Yo-Yo Ma, Alice (2 B); Ravi, Goodman (2 C) |

## What approval would and would not establish

A read-only structural check confirmed two proposed wrong targets per selected ordinary fact, both directions of the proposed four-pair comparisons, and the 6/3/2 origin counts for all nine sketches. All 106 alternatives resolve to existing identities, with zero conflicts against currently verified positive evidence. This does not establish that the proposed exclusions are factually correct. This is a **conditional compatibility sketch, not a passing generator result**. It does not certify the judgments or guarantee seeded runtime coverage. After approval, implement only approved work-specific assertions with manual-editorial provenance, apply approved staging choices, and rerun exact composition, matching and full progression checks. Keep any rejected/unknown comparisons unavailable.
