import { definitionWording } from './learnerWording';
import { reviewedCohort, reviewedDefinitions, type ReviewedTerm } from './reviewedDefinitions';
const mf='https://cameo.mfa.org/wiki/';
const nps='https://www.nps.gov/articles/000/earthen-architecture-glossary-of-terms.htm';
const r=(id:string,term:string,meaning:string,url:string,locator:string,priority:number):ReviewedTerm=>({id,term,meaning,source:{url,locator,label:'Conservation glossary'},priority});
const terms:readonly ReviewedTerm[]=[
 r('concrete','Concrete','Aggregate hardened together with a cementitious binder.',mf+'Concrete','Description paragraphs1–2: aggregate, cement/lime, curing; not solely Portland cement',5),
 r('glass','Glass','A hard, brittle, non-crystalline material commonly made by fusing silica.',mf+'Glass','Description opening: amorphous inorganic material; conventional silica-based architectural glass sense',5),
 r('steel','Steel','An iron alloy containing carbon.',mf+'Steel','Description opening: iron alloy with carbon; percentages deliberately omitted due inconsistent table values',5),
 r('marble','Marble (geological sense)','Crystalline stone formed when limestone or dolomite is metamorphosed.',mf+'Marble','Description opening and commercial-name caveat; geological rather than stone-trade sense',5),
 r('granite','Granite','A coarse-grained igneous rock rich in quartz and feldspar.',mf+'Granite','Description opening; mineral constituents and geological type',5),
 r('gypsum','Gypsum','A mineral consisting of calcium sulfate dihydrate.',mf+'Calcium_sulfate%2C_dihydrate','Description and synonyms: gypsum; not plaster-of-Paris hemihydrate',5),
 r('slaked-lime','Slaked lime','Calcium hydroxide produced by adding water to quicklime.',mf+'Slaked_lime','Description: hydration of calcium oxide; distinguish air-slaked mixture',4),
 r('adobe','Adobe','A molded soil block hardened by drying in the sun.',nps,'Adobe section; sun-dried, not kiln-fired brick',4),
 r('mortar','Masonry mortar','A workable binding mixture used to join masonry units.', 'https://www.nps.gov/articles/000/sharing-the-mysteries-of-mortar.htm','Opening: aggregate, binder and water; use between stones/bricks; formulations vary',4),
 r('fired-clay-brick','Fired-clay brick','A shaped clay building block hardened in a kiln.', 'https://podcast.history.org/2005/10/10/firing-the-brick-kiln/','Master brickmaker interview: clay, water, drying, kiln firing; qualified fired-clay sense, not concrete brick',3),
 r('aluminium','Aluminium','A lightweight, silvery-white metallic element used in building alloys.', 'https://periodic-table.rsc.org/element/13/aluminum','Appearance and Uses: element Al, low density, construction alloys; not a claim pure metal is used for every building frame',3),
];
const materialSet=reviewedDefinitions('architecture','l5','p2',terms,reviewedCohort(terms.map(t=>t.id),
 'Reviewed defining substances and processing distinctions: metal/alloy, igneous/metamorphic stone, hydrated minerals, sun-dried/fired units and joining mix. Composite concrete versus mortar remains unknown.', ['concrete|mortar']));

export const architectureMaterialSet={...materialSet,concepts:materialSet.concepts.map((c,i)=>definitionWording(c,terms[i].id))};
