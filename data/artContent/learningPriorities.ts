import type { Concept } from "../../src/quizEngine/conceptTypes";
import { compareEducationalPriority, teachingGroup } from "../../src/quizEngine/learningProgression";
// Editorial reinforcement choices, not historical evidence. Central identities
// share the same priority across recognition, creator and dating lessons.
const priorities: Readonly<Record<string, number>> = {
    "artwork:met-18-2-4": 5, "artwork:nm-delhi-5721-195": 5, "artwork:met-47-100-1": 4,
    "artwork:met-1989-281-41": 4, "artwork:met-66-173": 4, "artwork:met-ushumgal-stele": 4,
    "artwork:accademia-1076": 5, "artwork:vatican-pieta-original": 5, "artwork:pisa-baptistery-pulpit": 5,
    "artwork:opera-duomo-magdalene": 4, "artwork:orsanmichele-thomas": 4, "artwork:orsanmichele-matthew": 4,
    "artwork:loggia-perseus": 4, "artwork:uffizi-1890-878": 5, "artwork:ng1314": 4, "artwork:ng665": 4,
    "artwork:uffizi-1890-1437": 4, "term:historical-movement-definition:cubism": 5,
    "term:historical-movement-definition:impressionism": 5,
    "artwork:ng186": 5, "artwork:cenacolo-original-mural": 5, "artwork:vatican-school-of-athens": 5,
    "artwork:borghese-apollo-daphne": 5, "artwork:louvre-mr1777": 5, "artwork:nga-voltaire-1963-10-240": 4,
    "artwork:vam-handel-a3-1965": 4, "artwork:rodin-thinker-conception": 5, "artwork:nga-dancer-original-1999-80-28": 5,
    "artwork:met-67-25": 4, "artwork:rodin-claudel-s1007": 4, "artwork:met-59-2": 5, "artwork:ulm-lion-man": 5,
    "artwork:nhm-willendorf": 5, "artwork:louvre-samothrace": 5, "artwork:berlin-nefertiti": 5,
    "artwork:qin-terracotta-army": 5, "artwork:moma-472-1941": 5, "artwork:oslo-ng-m-00939": 5,
    "artwork:ng4240": 5, "artwork:moma-476-1996": 5, "movement:cubism": 5, "movement:impressionism": 5,
};
export function scheduleArtLearning(records: readonly Concept[]): Concept[] {
    const prioritized = records.map(c => {
        const identity = c.semantic?.subject?.entityType === "stimulus" ? c.semantic?.value?.id : c.semantic?.subject?.id;
        return { ...c, learning: c.learning ?? { reinforcementPriority: priorities[identity ?? ""] ?? 3,
                rationale: priorities[identity ?? ""] ? "Anchor work or movement selected for recognition, historical influence and cross-part reinforcement."
                    : "Supporting core curriculum fact; reinforce after designated anchor works and movements." } };
    });
    const groups = new Map<string, Concept[]>();
    for (const c of prioritized) {
        const key = teachingGroup(c);
        const group = groups.get(key) ?? [];
        group.push(c);
        groups.set(key, group);
    }
    const stages = new Map<string, "A" | "B" | "C">();
    for (const group of groups.values())
        group.sort(compareEducationalPriority).forEach((c, index) => stages.set(c.id, index < 6 ? "A" : index < 9 ? "B" : "C"));
    return prioritized.map(c => ({ ...c, introducedIn: stages.get(c.id)! }));
}
