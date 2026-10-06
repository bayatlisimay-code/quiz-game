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
Matching remains text-only. Replacing or withdrawing an image only changes its
presentation binding, never the concept ID or quiz generation.
