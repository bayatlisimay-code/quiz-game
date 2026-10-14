# Art image policy and delivery workflow

## Final policy (2026-10-14)

For every Art subtopic, only verified **CC0** or **Public Domain digital images**
allowing commercial copying, modification and distribution without attribution
obligations are eligible. CC BY, CC BY-SA, noncommercial, editorial-only and
uncertain/conflicting rights are excluded. Artwork age alone never clears a
photograph of sculpture. Commons' CC0 metadata footer is not an image license.

`src/images/licensePolicy.ts` is shared by offline ingestion and the production
projection. `ImageLicense` permits only Public Domain, CC0 and unknown research
candidates. Unknown candidates cannot be staged or published. A separate
`stagingApproval` records the actual-image rights determination and reviewed source-byte hash, original-work
identity/version, collection, evidence links, reviewer/time, commercial and
modification/distribution permissions, no required attribution, absence of
unresolved restrictions, and pixel/leakage review. Structural validation cannot
prove historical truth or copyright ownership: the file-specific evidence must
actually be inspected. Reviewer here is Codex; no independent human or legal
endorsement is implied.

The reviewed licensing concerns the actual reproduction, not site-wide text or
metadata licenses. Specific conflicting copyright notices or commercial-use
restrictions block eligibility even when a Commons heading says Public Domain.
Keep all provenance internally, including explicit null for unknown photographers.
Do not imply institutional endorsement.

## Current pilot assets

Eight optimized derivatives are eligible for **local staging**. No image is
production-enabled: release selection still has zero bindings and zero owned
hosts. The R2 development manifest now has eight verified public bindings, used
only when `__DEV__` is true. Every pilot recognition question retains its verified
text clue. See `docs/art-r2-development.md` for uploads and executed native tests. Curation JSON and these derivatives are offline-only; there are no
runtime `require` imports of the staging JPEGs and no third-party delivery URLs.

| Asset | Work / digital source | Image rights | Derivative |
|---|---|---|---|
| pilot-001 | [artwork:ng186](https://commons.wikimedia.org/wiki/File:Arnolfini_Portrait.jpg) | public-domain | 950 × 1280; 210,598 bytes |
| pilot-004 | [artwork:ng1314](https://commons.wikimedia.org/wiki/File:Holbein-ambassadors.jpg) | public-domain | 960 × 947; 253,794 bytes |
| pilot-005 | [artwork:ng665](https://commons.wikimedia.org/wiki/File:Piero_della_Francesca_-_Battesimo_di_Cristo_%28National_Gallery%2C_London%29.jpg) | public-domain | 891 × 1280; 283,743 bytes |
| pilot-006 | [artwork:pinakothek-537](https://commons.wikimedia.org/wiki/File:Self-portrait_by_Albrecht_D%C3%BCrer.jpg) | public-domain | 939 × 1280; 244,500 bytes |
| pilot-010 | [artwork:vatican-school-of-athens](https://commons.wikimedia.org/wiki/File:Fotoreproductie_van_het_fresco_De_school_van_Athene_door_Rafa%C3%ABl_The_School_of_Athens_by_Raphael%2C_Vatican_%28titel_op_object%29%2C_RP-F-F01143-BW.jpg) | CC0 | 691 × 526; 105,760 bytes |
| pilot-003 | [artwork:vatican-pieta-original](https://commons.wikimedia.org/wiki/File:La_Piet%C3%A0_de_Michel-Ange_%2825901652585%29.jpg) | CC0 | 960 × 961; 363,476 bytes |
| pilot-008 | [artwork:opera-duomo-cantoria-messe](https://commons.wikimedia.org/wiki/File:Cantoria_Della_Robbia_OPA_Florence_10.jpg) | public-domain | 960 × 639; 174,512 bytes |
| pilot-009 | [artwork:pisa-baptistery-pulpit](https://commons.wikimedia.org/wiki/File:Pisa_Pulpito_del_Battistero_di_N.Pisano%2C_RP-F-F16906.jpg) | CC0 | 548 × 701; 104,638 bytes |

School of Athens and Pisa Pulpit use historical Rijksmuseum photographic scans,
not modern museum photographs. Explicit source-pixel crops remove album mounts
and printed answer captions, retaining the depicted works. These are not
runtime crops, fabricated descriptions, or artwork retouching. The archival
monochrome appearance is disclosed in provenance/alt text. Other derivatives
retain their source frames; `contentFit="contain"` preserves aspect ratios.
Image recognition bindings are limited to p1 identification records, so original
artist/date inscriptions do not leak answers to creator/date questions.

The former CC BY 3.0 David asset, binding and derivative have been removed from
the active pipeline. They remain recoverable from Git baseline
`5ed73133324bbbf99e5b44de35cc309a92c56975`. A PD-self alternative was found,
but Accademia's documented commercial-reproduction restrictions remain
unresolved; it is not approved. Arnolfini's file-specific Public Domain Mark,
structured image rights, identity NG186 and existing derivative were rechecked;
it now has explicit staging approval, without runtime approval.

Research of all 18 originals is recorded separately in
`research/art-pilot-candidates.json` (22 candidate files). Excluded candidates
are never passed to ingestion. Ten originals still have no eligible staged
image: Birth of Venus, Last Supper, Venus of Urbino, Mantegna's Lamentation,
Penitent Magdalene, Incredulity of Saint Thomas, David, Perseus, Saint Matthew
and Orcagna's Tabernacle. Reasons include restricted/conflicting rights,
unresolved commercial-reproduction clearance, replica identity or inadequate
full-work recognition framing. This is not a claim that no eligible image
exists anywhere. Verified text remains the production stimulus for all 18; development testing
uses the eight verified R2 images with their text fallbacks.

## Ingestion and validation

Use existing project dependencies; do not install an image library at runtime:

```sh
node scripts/art-image-assets.cjs --check
node scripts/art-image-assets.cjs --ingest IMAGE_ID --source /path/to/reviewed-download.jpg
node scripts/art-image-assets.cjs --build --hosts images.your-owned-domain --output /tmp/reviewed-image-registry.json
```

Every subtopic dataset in `art/*.json` is discovered deterministically. Ingestion
requires a prior source/pixel review, rejects restricted licenses and repeated
staging, and never searches, uploads or grants runtime approval. It uses the
existing Expo transitive `jimp-compact` dependency. Reviewed caption-removal
coordinates are checked against the downloaded source dimensions. Images are
never enlarged: longest side ≤1280, JPEG quality 82, ≤600,000 bytes per derivative.
Fresh pixel encoding strips EXIF/XMP, with opaque content-hashed filenames.
Input bytes must match the visual review’s source SHA-256 before decoding.
Downloaded-source and derivative SHA-256, dimensions, MIME and any crop are
recorded. Output bytes are checked before being written. Do not download huge
originals when a bounded thumbnail suffices. Do not place names/captions or
watermarks in recognition stimuli.

`--check` verifies actual bytes, identity bindings against production concepts,
rights-review structure, checksum, aspect ratio, explicit crop, metadata removal
and size. These automated checks support, but do not replace, source review.
Tests exercise the existing recognition component's contain sizing, load/error/
15-second timeout behavior and verified text fallback; real pilot generation and
matching are tested using **reserved-domain delivery fixtures**, never fake
production uploads or approvals.

## What is needed to activate production images

1. Provide a controlled HTTPS storage/CDN host and an authorized upload method.
   R2 development delivery is configured locally; a production custom domain
   and production release approval are still pending.
2. Upload the eight checked derivatives unchanged under immutable opaque keys.
   Verify downloaded hosted bytes against each staged SHA-256; check MIME,
   dimensions, access and mobile connectivity.
3. Record real `hosted` fields and final asset/binding review decisions and times.
   Staging approval does not imply hosting or release approval. Review the final
   hosted stimuli and historical monochrome choices on device.
4. Build an offline manifest with the explicit owned-host allowlist. The builder
   requires local/hosted checksum and dimensions to agree, validates the same
   PD/CC0 policy and recognition identities, and refuses an empty manifest.
5. Review and activate a separate production manifest in `selectRuntimeRegistry.ts`.
   Keep the `__DEV__` R2 manifest separate. Runtime
   resolution requires the projected PD/CC0 status and owned HTTPS URL. Do not
   use Commons, Flickr or museum hosts for production delivery.
6. Run pilot coverage and on-device load/failure/timeout/matching tests against
   the owned host. If loading fails, use the verified authored clue; if no valid
   clue exists, replan the ungraded quiz or report a shortage. Never grade an
   unavailable recognition stimulus.

Resolve the recorded reproduction restrictions or source a separately eligible
image before staging the remaining works. Do not enable attribution-requiring
images to increase coverage. No curriculum, facts, IDs, scoring or progression
changes are part of this licensing task.
