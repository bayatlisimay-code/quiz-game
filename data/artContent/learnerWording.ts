import type { Concept } from "../../src/quizEngine/conceptTypes";
import type { ReviewedWording } from "../../src/quizEngine/assessmentTypes";

// Authored editorial forms, reviewed against the retained source definitions
// and their explicit meaning contrasts. Never a runtime summarisation rule.
// A matching descriptor identifies that meaning; it need not recite its history.
const definitions: Readonly<Record<string, readonly [text: string, matchingText?: string]>> = {
  "early-renaissance": ["A fifteenth-century classical revival with realistic figures and pictorial space.", "Fifteenth-century classical revival and realistic pictorial space."],
  baroque: ["A style with dramatic effects, diagonal compositions and pictorial illusion.", "Dramatic effects, diagonal compositions and pictorial illusion."],
  impressionism: ["A French movement exploring light and everyday life with bright, sketch-like brushwork.", "Light, everyday life and bright, sketch-like brushwork."],
  cubism: ["Picasso and Braque's movement using geometric planes and multiple viewpoints.", "Geometric planes and multiple viewpoints."],
  "pop-art": ["Art inspired by popular culture, mass media, advertising and consumer goods.", "Popular culture, advertising, media and consumer goods."],
  impasto: ["Thick paint that leaves raised marks."],
  glazing: ["Transparent paint layered over another colour without hiding it.", "Transparent paint layered without hiding the underlying colour."],
  sfumato: ["Gradual tonal transitions that soften contours."],
  "buon-fresco": ["Painting into wet plaster so pigment bonds with the wall.", "Painting into wet plaster."],
  easel: ["An upright support holding a painting."],
  palette: ["A board for holding and mixing paints."],
  brush: ["A handled brush for applying paint."],
  mahlstick: ["A padded rod that steadies the painter's hand."],
  "oil-paint": ["Pigment bound in a drying oil."],
  watercolour: ["Transparent paint with a water-soluble gum binder."],
  "egg-tempera": ["Pigment bound with egg yolk."],
  "acrylic-paint": ["Fast-drying paint with an acrylic polymer binder."],
  "linear-perspective": ["Pictured depth using lines converging towards vanishing points."],
  foreshortening: ["Depicting a body or object receding into picture space.", "Depicting a body or object receding in space."],
  "symmetrical-balance": ["Mirror-like visual weight on opposite sides of an axis.", "Mirror-like visual weight across an axis."],
  "asymmetrical-balance": ["Balanced visual weight with different arrangements on opposite sides.", "Balanced visual weight with different-sided arrangements."],
  hue: ["A colour's name or identity."],
  value: ["How light or dark a colour is."],
  intensity: ["How bright or dull a colour is."],
  "complementary-colours": ["Opposite colours on the traditional red–yellow–blue colour wheel."],
  line: ["A mark longer than it is wide."],
  shape: ["A flat, enclosed area with length and width."],
  "visual-texture": ["How a surface appears to feel."],
  "negative-space": ["Empty space around and between depicted objects."],
  chisel: ["A struck cutting edge for shaping stone."],
  rasp: ["A rough metal tool for smoothing carvings."],
  mallet: ["A striking tool that drives carving tools."],
  drill: ["A rotary tool for boring into stone."],
  bronze: ["A copper alloy with tin as its main addition.", "Copper alloy with tin as its main addition."],
  marble: ["Crystalline stone formed from metamorphosed limestone."],
  terracotta: ["Clay hardened by firing."],
  wax: ["Low-melting, water-repellent material that softens for reshaping."],
  torso: ["The central body, excluding head and limbs."],
  "equestrian-statue": ["A sculptural group showing a horse and rider."],
  bust: ["A sculptural portrait of head, neck, shoulders and upper chest.", "Sculptural portrait: head, neck, shoulders and upper chest."],
  relief: ["Sculpted forms projecting from a background surface."],
  mobile: ["Balanced sculptural components designed to move."],
  stabile: ["A stationary abstract sculpture."],
  maquette: ["A small, rough three-dimensional sketch for sculpture."],
  armature: ["A framework supporting a sculpture or model."],
  plinth: ["A solid base supporting a statue or memorial."],
  "chemical-patina": ["A mineral layer chemically formed on metal."],
  "lost-wax-casting": ["Casting metal into the mould space left by melted-out wax.", "Casting into mould space left by wax."],
  "sand-casting": ["Casting metal into a bound-sand mould formed around a rigid model.", "Casting into a bound-sand mould."],
  welding: ["Joining metal with heat that partly melts the parts.", "Joining metal by partly melting the parts."],
  chasing: ["Detailed cold-working to refine a cast metal surface."],
  carving: ["Removing material from a solid mass to shape it.", "Removing solid material to shape a form."],
  modelling: ["Building and shaping soft material, such as clay."],
  casting: ["Filling a mould with material that sets to its shape.", "Filling a mould with material that sets."],
  assembling: ["Joining separate objects into a three-dimensional work."],
};
const review = {
  reviewStatus: "verified" as const,
  reviewedBy: "Codex — editorial equivalence review (not independent human approval)",
  reviewedAt: "2026-10-14T16:56:42Z",
};
export function definitionWording(concept: Concept, termId: string): Concept {
  const short = definitions[termId];
  if (!short || !concept.assessment || !concept.semantic?.value?.id) return concept;
  return { ...concept, assessment: { ...concept.assessment, presentation: { ...concept.assessment.presentation, answer: {
    ...review, text: short[0], ...(short[1] ? { matchingText: short[1] } : {}), canonicalText: concept.object,
    valueId: concept.semantic.value.id, evidenceIds: concept.assessment.evidenceIds,
    rationale: "Reviewed against the source definition and existing meaning contrasts; preserves distinguishing meaning, not every detail of its exposition. Matching describes that same meaning. No new accepted typed forms or negatives.",
  } } } };
}
export function scopeWording(canonicalText: string, text: string, evidenceIds: readonly string[]): ReviewedWording {
  return { ...review, canonicalText, text, evidenceIds,
    rationale: "Retains the named source and assessed field. Object/version stays in the subject; dating uncertainty and casts stay in the full answer. Explicit event/context remains visible. Detailed evidence is unchanged." };
}
const sourceNames: Readonly<Record<string, string>> = {
  "Metropolitan Museum of Art": "Met", "Museum of Modern Art": "MoMA", "Musée du Louvre": "Louvre",
  "Victoria and Albert Museum": "V&A", "Natural History Museum Vienna": "Vienna Natural History Museum",
  "Staatliche Museen zu Berlin": "Berlin State Museums", "UNESCO World Heritage Centre": "UNESCO",
};
export function sourceLabel(source: string): string { return sourceNames[source] ?? source; }
// Explicitly reviewed replacements for repetitive instructions. A new or
// specific historical context is preserved verbatim until reviewed itself.
const datingContexts: Readonly<Record<string, string>> = {
  "Use the complete dating label for the stated version; model, replica and casting years must remain distinguished": "This version, including model and cast dates",
  "Use the full source dating label for the identified version; distinguish later casts, replacements and dedication dates": "This version; retain cast or replacement dates",
  "Use the source's stated period or approximate dating, not an invented exact year": "Preserve the approximate date or period",
  "Retain both the monument's completion and the specific museum bronze's later casting date": "Monument completion and this bronze's casting",
  "Model date and Orsay bronze cast date are distinct; the artist is not identified as the later foundry": "Model and this bronze's casting",
};
export function dateContextLabel(context: string | undefined): string {
  return context ? datingContexts[context] ?? context : "";
}
