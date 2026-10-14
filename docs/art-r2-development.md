# R2 development delivery

This integration is for the existing eight rights-reviewed staging images only.
It does not approve additional content, production image bindings or a production
CDN. Cloudflare explicitly limits `r2.dev` to development/testing:
https://developers.cloudflare.com/r2/buckets/public-buckets/

## Secure local setup

From the worktree that will run Metro:

```sh
node scripts/art-r2-upload.cjs --init-config
```

This creates `.r2.env.local` with mode 0600 and refuses to overwrite an existing
file. It is Git-ignored and is not a standard Expo environment file. Fill it
**locally in your editor**, never in chat, shell command arguments, a tracked
file or an `EXPO_PUBLIC_*` variable:

```text
R2_ACCOUNT_ID=
R2_ACCESS_KEY_ID=
R2_SECRET_ACCESS_KEY=
R2_BUCKET_NAME=quiz-game-art-images
R2_PUBLIC_BASE_URL=
```

Use the S3 API account ID/access key/secret shown for the bucket-restricted token,
not the general Cloudflare bearer API token. Set the public base to the exact
HTTPS Public Development URL origin shown in the bucket dashboard. The uploader
also accepts the same five names as offline process environment variables. It
does not load other dotenv files, execute shell assignments or log secret values.
If your editor changes file permissions, run `chmod 600 .r2.env.local`.

Keep this token restricted to Object Read & Write on `quiz-game-art-images`.
The uploader never changes bucket permissions, ACLs, CORS, public access or token
scope. Public delivery uses unsigned HTTPS GET only; writing requires signed
S3 requests. Never include this secret file in simulator fixtures, bundles,
receipts, screenshots or source-control patches.

## Dry run, upload and verification

```sh
node scripts/art-image-assets.cjs --check
node scripts/art-r2-upload.cjs --dry-run
node scripts/art-r2-upload.cjs --upload
node scripts/art-pilot-impact.cjs --development-images --attempts=20
```

Dry run validates the real registered identities, recognition bindings, actual
JPEG bytes, review/source hashes, Public Domain/CC0 policy, dimensions, crops and
metadata removal. It makes **no network requests**. Its Git-ignored receipt is
required for upload, and changes to bucket, delivery origin or staged bytes
require a new dry run. Authentication is only established by actual S3 requests.

The S3-compatible endpoint is fixed to the configured account's
`r2.cloudflarestorage.com` host, region `auto`, service `s3`, and configured bucket.
Only HEAD/GET/PUT for validated image keys are implemented; there is no listing,
deletion or bucket-management path. AWS SigV4 uses Node's existing cryptography
and HTTPS modules; its signing test matches AWS's published GET example:
https://docs.aws.amazon.com/AmazonS3/latest/developerguide/sig-v4-header-based-auth.html

Object keys are immutable and contain no artwork titles:

```text
art/v1/<opaque-image-id>/<full-derivative-sha256>.jpg
```

New objects use `If-None-Match: *`, JPEG content type, Content-MD5, SHA-256
metadata and `Cache-Control: public, max-age=31536000, immutable`. Existing
objects are fetched and compared, never blindly overwritten. Conditional-write
races also fetch and verify the winner. Conflicting bytes or metadata fail closed;
there is intentionally no force-overwrite flag. An existing-object repair needs
separate explicit approval. The metadata is future-friendly for controlled custom
domains; it does not turn `r2.dev` into a caching production CDN.

Each upload is verified by full authenticated GET **and** public HTTPS GET against
the locally checked SHA-256 and byte count, with JPEG content-type checks.
Redirects are not followed, response sizes are bounded and each network request
has an absolute timeout. Raw server error bodies and signed headers are never
printed. Upload failures may leave verified immutable objects in the bucket;
rerunning safely verifies/reuses them. No development registry is published until
**every** image passes. Original curation/license/source records stay unchanged.

## Development activation boundary

Successful upload generates `src/images/developmentRegistry.generated.json` with
public URLs, display dimensions/alt text, eligible license statuses and recognition
bindings only. A public-only verification receipt is stored in the ignored
`.art-r2-upload/` directory. Asset and binding approval is projected on temporary
copies for development; the authored curation records remain staging-only.

`runtimeRegistry.ts` selects this generated manifest only when `__DEV__` is true.
Release builds select the separate empty production registry, even if the
development manifest contains eight valid bindings. The app never imports the
uploader, secret file or S3 configuration. Existing owned-host and license checks,
contain sizing, factual matching and verified text fallbacks still apply.

For recognition these are p1 image bindings only; creator/date inscriptions must
not become hints in p2/p4. Ten other pilot originals still use text, and all eight
image-backed facts retain their verified descriptive fallback. On error/15-second
timeout, that clue is displayed; an image-only unavailable stimulus triggers the
existing safe quiz replanning/shortage path.

## Simulator verification

Use the existing iPhone 16e and cached Quiz Game app; no reinstall/reset is needed.
Follow `docs/ios-simulator-gameplay.md` for the matching worktree Metro port and
native launch override. Do not connect to the old server on 8081. Restart/reload
Metro after manifest activation so the new public registry is included.

If pilot prerequisites are locked, stop the app and back up its existing
AsyncStorage before applying a temporary prerequisite fixture. Archive the test
state and restore the original store byte-for-byte after stopping the app.
No committed route, progression bypass or simulator storage is required.

Verify Painting l2 and Sculpture l3 p1 A/B/C: intended images, readable labels,
exact composition, correct/incorrect feedback and four-pair permanently lockable
matching. Test unavailable-image and stalled-response behavior using reversible
development-only stimulus fixtures, then remove them. Automated fixture transport
tests are not proof of actual R2 authentication or native image loading.

Before production: use a controlled custom domain, check provider configuration,
complete final editorial/hosted asset review, run device failure/network checks,
and explicitly populate a separate production registry. This task never promotes
the public development URL into production.

## Executed validation (2026-10-14)

R2 authentication succeeded against the user-configured bucket after local secret
setup. A zero-network dry run qualified all eight staging assets. All eight were
uploaded and verified through authenticated S3 GET and public HTTPS GET; the
public-only generated manifest contains eight development bindings. Curation
records remain staging-only and release selection remains empty.

On the actual iPhone 16e (iOS 26.3), Painting l2 p1 A completed 8/8 with
3 MCQ / 2 TF / 2 options blanks / one four-pair matching exercise. School of
Athens and Arnolfini images loaded, preserved aspect ratios and graded correctly.
The wrong School of Athens–Birth of Venus match returned without locking; the
correct School of Athens match permanently locked green and the puzzle completed.
The transient red state was not captured in the screenshot timing.

Sculpture l3 p1 C completed 8/8 with 2 MCQ / 2 TF / 3 options blanks / one
four-pair matching exercise. The original Vatican Pietà image loaded correctly
in a certified false statement and an options blank. This seed's matching was
text-based; image-backed matching was observed in Painting. Other A/B/C variants
and all eight hosted bindings were checked through generation/transport validation,
not claimed as individually played native quizzes. Typed blanks are intentionally
unavailable for these identification records; their existing tests remain passing.

The first native launch used a stale Metro bundle cache. Restarting only the
worktree server with `--clear` and reloading fixed the entry resolution; no code,
dependency installation or native rebuild was needed. Existing servers were left
untouched. Temporary prerequisite fixtures were used, with the original
AsyncStorage backed up before launch. Full native release/accessibility/gesture
coverage and a production custom domain remain separate requirements.

A temporary, ungraded native component route tested a nonexistent R2 object and
reserved TEST-NET HTTPS addresses that stalled. The R2 error displayed the
verified School of Athens clue. After the component's 15-second timeout, the
stalled request with a clue displayed that same verified text; the image-only
probe emitted the recovery callback and stopped spinning. This verifies native
component recovery, not a full image-only quiz restart played end-to-end. The
probe route was removed. The app was stopped and original AsyncStorage file
hashes were restored exactly; temporary progression and test completions do not
remain. No simulator data or private credential values are tracked.
