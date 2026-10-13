# Art image curation

Each subtopic JSON file is an empty `ImageCurationDataset` (schema version 1).
Types live in `src/images/types.ts`; these files are never imported by the app.
Keep asset provenance and per-concept identity approval separate. One approved
asset may serve several independently reviewed concept bindings.

Record real source identity, source/page URL, image creator (explicit null if
unknown), retrieval timestamp, rights/license evidence, archived evidence refs,
and review decisions. Pending, needs-review, and rejected entries require a
reason. Approved assets and bindings require reviewer and review timestamp.
Review the image reproduction and underlying artwork rights; approval of a
license does not establish that an image depicts the right subject.

Prefer Public Domain/CC0. CC BY requires stored and displayed credits, license
link, change information, and any required notices. Review alt text and credits
for answer leakage before enabling a binding for an exercise type.

No CDN has been selected. The runtime manifest and owned-host allowlist remain
empty. Never put source delivery URLs in the runtime manifest. Once hosting is
configured, upload approved derivatives to owned storage, record dimensions,
MIME type, storage key and SHA-256, then use `createRuntimeRegistry` offline to
project approved records. That helper expects typed/validated input, not arbitrary
JSON. Schema parsing, timestamp/license evidence verification, concept existence
checks, upload tooling, generation CLI, and release automation are deferred.
The projection rejects incomplete approved bindings and duplicate approved keys.

Use immutable hosted URLs. Validate actual bytes and licenses before release.
Recognition matching is supported only with an independently approved answer
identity binding, reviewed leakage controls, and a safe pairing matrix. Optional
illustrations remain presentation-only. Required recognition stimuli participate
in planning: verified authored text may replace a missing/failed image; otherwise
the ungraded quiz is replanned without that asset or reports a shortage.
Replacing a binding never changes concept IDs. See `docs/art-engine-upgrade.md`.

## Pilot ingestion workflow (2026-10-13)

Two locally staged derivatives now exist in `assets/staged-art/`. They are **not
runtime-approved bindings**. The painting candidate depicts NG186 (Jan van Eyck's
original oil-on-oak double portrait); its file-specific Commons page declares the
reproduction Public Domain Mark. The sculpture photograph depicts a detail of
the original Accademia marble David, not an exterior replica; photographer Jörg
Bittner Unna licenses this photograph CC BY 3.0. Commons' site-wide CC0 metadata
footer is not used as an image license. Source URLs, revision links, retrieval
times, identity references and rights notes are in the subtopic JSON datasets.
The sculpture's cultural-property/commercial reproduction clearance and its
answer-bearing credit title still require release review. No museum permission
or human editorial endorsement has been fabricated.

The earlier empty-dataset description above describes the original milestone;
the runtime registry/owned-host allowlist are still empty. Both pilot artworks
continue to use their verified authored identification clues in production.

Run with the project's existing Expo tooling dependencies:

```sh
node scripts/art-image-assets.cjs --check
node scripts/art-image-assets.cjs --ingest IMAGE_ID --source /path/to/reviewed-download.jpg
node scripts/art-image-assets.cjs --build --hosts images.your-owned-domain --output /tmp/reviewed-image-registry.json
```

Ingestion requires an existing candidate with an explicitly recorded file license;
it does not search for images, infer rights, upload, or grant approval. It decodes
the downloaded bytes, preserves the complete frame/aspect ratio, avoids upscaling,
limits the longest side to 1280 pixels and re-encodes at JPEG quality 82. Fresh
pixel encoding strips source EXIF/XMP (the decoder otherwise retains EXIF).
Opaque, content-hashed derivative filenames contain no artwork/creator names.
Original downloaded-byte and derivative SHA-256 values, original and output
dimensions and MIME type are recorded. Originals are not bundled into the app.
The script currently uses `jimp-compact`, already installed with Expo's image
utilities; it fails rather than installing tools if that dependency is unavailable.

`--check` validates recorded license/credit structure, timestamps, identities,
concept bindings, actual derivative bytes/checksums, dimensions, metadata removal
and the 600 KB budget. These checks detect inconsistency; they do not establish
copyright or historical truth. Source and visual review remain necessary.

For release: independently review identity, rights, required notices and the
recognition leakage implications of alt text, credits, links and visible image
inscriptions. Upload the checked derivative to immutable owned HTTPS storage;
verify the downloaded hosted bytes against its SHA-256. Record `hosted` fields
and explicit asset/binding review decisions. `--build` reuses the production
`createRuntimeRegistry` projection, rejects missing/mismatched local derivatives
and refuses an empty approved manifest. It writes only a new output file and
never silently overwrites or activates the app registry. Review the manifest and
wire it into `src/images/runtimeRegistry.ts` at release. Do not use Commons or
museum delivery URLs as production URLs. No owned host has been provisioned in
this task, and staged assets do not expand assessment capabilities.

Current optimized derivatives total about 325 KiB. The remaining 16 artwork
recognition records continue to use verified text; no image approval is implied.
