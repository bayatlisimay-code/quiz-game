import type { AuthoredSet } from './sourceAuthoring';
import { moviesComparison, moviesId } from './moviesAuthoring';
import { moviesSourceReviews as reviews } from './moviesSourceReviews';

/** Work-specific source/feature comparisons, authored by Codex. These are
 * editorial inferences approved by the user on 2026-10-27, not direct
 * external verification of exclusions. Umbrellas → Comedy remains unknown. Unlisted comparisons stay unknown.
 * A positive alternative always wins: a conflict throws before registration. */
const comparisons:Readonly<Record<string,readonly [readonly string[],string]>> = {
  "l1_the-exorcist": [
    [
      "Science fiction",
      "Comedy",
      "Musical",
      "Romance",
      "Western"
    ],
    "The documented organising event is supernatural demonic possession in contemporary Washington, and the desperate attempt to save a child. Medical investigation fails to explain it. This is neither imagined scientific technology, a comic narrative, a sung story, a developing romantic relationship, nor a frontier story."
  ],
  "l1_star-wars": [
    [
      "Horror",
      "Comedy",
      "Musical"
    ],
    "The documented organising story is a young rebel’s space adventure against an empire, not an intentional fright film, a comic misadventure or storytelling through performed songs. Humour and romantic elements are acknowledged. Fantasy, Action, Adventure, Western and Romance are not declared incorrect."
  ],
  "l1_home-alone": [
    [
      "Science fiction",
      "Musical",
      "Romance",
      "Western"
    ],
    "The studio describes a comic Christmas home-invasion story in suburban Chicago, driven by a child’s traps and bumbling burglars, not speculative science, a sung narrative, a central love affair or a frontier conflict. Adventure and Family remain valid."
  ],
  "l1_the-sound-of-music": [
    [
      "Science fiction",
      "Horror",
      "Western"
    ],
    "The documented narrative follows a governess, the von Trapp family and escape from Nazism in Austria. Its love story and songs are retained; it is not imagined-science speculation, a fright-film narrative or a frontier story. Comedy is deliberately not excluded."
  ],
  "l1_titanic": [
    [
      "Science fiction",
      "Comedy",
      "Musical",
      "Western"
    ],
    "The studio describes Jack and Rose’s love affair during the historical Atlantic ship disaster. This is not imagined scientific technology, a comic narrative, storytelling through performed songs or a frontier Western. Drama, Action and Adventure remain valid; a horror/disaster reading is not excluded."
  ],
  "l1_seven-samurai": [
    [
      "Science fiction",
      "Horror",
      "Musical"
    ],
    "The cited account describes a historical village hiring warriors to defend against human bandits, told as an action drama, not speculative science, a fright-film narrative or a sung story. Its violence does not alone make it Horror. Drama and the relationship to Western cinema are not excluded."
  ],
  "l1_good-bad-ugly": [
    [
      "Science fiction",
      "Horror",
      "Musical",
      "Romance"
    ],
    "The documented story concerns three gunfighters and treasure during the American Civil War. Its frontier conflict is not imagined science, a fright-film narrative, a story told through songs or a central romantic relationship. Humour, action, adventure and wartime context are not excluded."
  ],
  "l1_umbrellas": [
    [
      "Science fiction",
      "Horror",
      "Western",
      "Action"
    ],
    "The cited account explicitly describes a sombre, entirely sung love story whose lovers are separated by the Algerian War and adult obligations. It is not speculative science, a fright-film, a frontier conflict or a physical-action spectacle. Comedy remains unverified; Romance and Drama remain valid."
  ],
  "l1_hangover": [
    [
      "Science fiction",
      "Horror",
      "Musical",
      "Western"
    ],
    "The source describes friends reconstructing a disastrous Las Vegas stag party and searching for the groom through comic/slapstick incidents. This is not imagined science, an intentional fright-film narrative, sung storytelling or a frontier story."
  ],
  "l1_raiders": [
    [
      "Science fiction",
      "Musical"
    ],
    "The studio describes a quest for a mystical biblical object against Nazi pursuers. The supernatural object is not imagined scientific technology, and the story is not told through performed songs. Romantic, horror, action and fantasy readings are not excluded."
  ],
  "l1_rear-window": [
    [
      "Science fiction",
      "Musical",
      "Western"
    ],
    "The source describes a photographer observing a contemporary New York murder mystery through his neighbours’ windows, not speculative science, a sung story or a frontier conflict. Its comedy, romance and drama readings are explicitly retained."
  ],
  "l6_interstellar": [
    [
      "Comedy",
      "Musical",
      "Western"
    ],
    "The studio describes a serious space expedition to find a future for humanity beyond a dying Earth. This is not a comic narrative, performed-song storytelling or a frontier Western. Adventure, Action and Drama remain valid; family love is not denied."
  ],
  "l6_grand-budapest": [
    [
      "Science fiction",
      "Musical",
      "Western",
      "Horror"
    ],
    "The documented comic caper concerns a concierge, his protege, a painting theft and a family inheritance amid interwar European politics. It is not imagined scientific technology, sung storytelling, a frontier Western or an intentional fright-film narrative. Its serious historical themes, adventure and fanciful style are not excluded."
  ],
  "l6_les-miserables": [
    [
      "Science fiction",
      "Comedy",
      "Western",
      "Horror"
    ],
    "The cited sung historical drama centres Valjean’s persecution, Fantine’s sacrifice and Cosette’s life in nineteenth-century France. This is not scientific speculation, a comic narrative, frontier conflict or a fright film. Comic supporting characters do not turn the organising tragedy into Comedy. Romance and Drama remain valid."
  ],
  "l6_unforgiven": [
    [
      "Science fiction",
      "Comedy",
      "Musical",
      "Romance"
    ],
    "The source explicitly describes a hard-edged and morally serious story of a retired gunfighter, revenge and the myths of the Old West. Its organising narrative is not scientific speculation, a comedy, sung storytelling or a developing love relationship."
  ],
  "l6_portrait": [
    [
      "Science fiction",
      "Comedy",
      "Musical",
      "Western",
      "Horror"
    ],
    "The director describes a love story between painter and model in eighteenth-century Brittany. This is not speculative science, a comic narrative, sung storytelling, a frontier Western or a fright film. Historical setting and Drama remain valid."
  ],
  "l6_dangal": [
    [
      "Science fiction",
      "Horror",
      "Western"
    ],
    "The cited sports drama follows a former wrestler training his daughters in contemporary India. It is not imagined scientific speculation, a fright-film narrative or a frontier Western. Comedy and Musical are deliberately not excluded merely because Drama is canonical."
  ],
  "l6_babadook": [
    [
      "Science fiction",
      "Musical",
      "Western",
      "Romance"
    ],
    "The source describes a mother and child subjected to a supernatural domestic threat. That threat is not explained through imagined scientific technology, sung storytelling, a frontier conflict or a developing romantic relationship. Drama, Thriller and supernatural Fantasy are not excluded."
  ],
  "l6_power-of-dog": [
    [
      "Science fiction",
      "Comedy",
      "Musical"
    ],
    "The cited psychological Western centres intimidation and hidden desires on a 1920s ranch. This is not imagined scientific speculation, a comic narrative or performed-song storytelling. Drama and other psychological readings are not excluded."
  ],
  "l6_inception": [
    [
      "Comedy",
      "Musical",
      "Western"
    ],
    "The source describes a serious dream-infiltration heist involving speculative technology, not a comic narrative, sung storytelling or a frontier Western. It explicitly acknowledges the love story, action, crime drama and fantasy elements."
  ],
  "l6_parasite": [
    [
      "Science fiction",
      "Musical",
      "Western"
    ],
    "The cited contemporary class-conflict story concerns a family gaining jobs in a wealthy household through fraud. It is not imagined scientific technology, performed-song storytelling or a frontier Western. Comedy, Thriller, Drama and horror readings are not excluded."
  ],
  "l6_crouching-tiger": [
    [
      "Science fiction",
      "Musical"
    ],
    "The documented historical martial-arts adventure involves swords, lovers and fantastical fighting, not imagined scientific technology or performed-song storytelling. Action, Romance and Fantasy remain valid."
  ],
  "l1_great-dictator": [
    [
      "Science fiction",
      "Horror",
      "Musical",
      "Western"
    ],
    "The cited film is an explicitly satirical and slapstick caricature of dictatorship and mistaken identity. Its organising form is political comedy, not imagined scientific speculation, an intentional fright film, storytelling through performed songs or a frontier Western. Serious persecution, music accompaniment and historical themes are not denied."
  ],
  "l1_evita": [
    [
      "Science fiction",
      "Horror",
      "Comedy",
      "Western"
    ],
    "The source describes a performed-song biography of Eva Peron’s rise and death in twentieth-century Argentina. Its dramatic, biographical and historical classifications remain valid. It is not imagined scientific speculation, an intentional fright film, a comic narrative or a frontier Western."
  ]
};
const validAlternatives:Readonly<Record<string,readonly string[]>> = {
  "l1_evita": [
    "Drama",
    "Biographical film",
    "Historical film"
  ],
  "l1_seven-samurai": [
    "Drama"
  ],
  "l1_titanic": [
    "Drama",
    "Action",
    "Adventure"
  ],
  "l1_umbrellas": [
    "Romance"
  ],
  "l1_rear-window": [
    "Romance",
    "Comedy",
    "Drama"
  ],
  "l1_harry-potter": [
    "Adventure",
    "Family"
  ],
  "l1_home-alone": [
    "Family"
  ],
  "l1_amelie": [
    "Romance"
  ],
  "l1_monsoon-wedding": [
    "Comedy"
  ],
  "l6_interstellar": [
    "Action",
    "Adventure"
  ],
  "l6_les-miserables": [
    "Drama"
  ],
  "l6_power-of-dog": [
    "Drama"
  ],
  "l6_parasite": [
    "Comedy",
    "Drama"
  ],
  "l6_crouching-tiger": [
    "Romance",
    "Fantasy",
    "Action"
  ],
  "l6_inception": [
    "Action",
    "Crime",
    "Drama",
    "Romance",
    "Fantasy"
  ],
  "l6_get-out": [
    "Comedy",
    "Thriller"
  ],
  "l6_pans-labyrinth": [
    "Horror",
    "Historical film"
  ],
  "l6_the-lunchbox": [
    "Romance"
  ],
  "l6_rrr": [
    "Adventure",
    "Fantasy"
  ],
  "l6_dangal": [
    "Sports film"
  ]
};
export function moviesGenreEvidence(set:AuthoredSet):AuthoredSet {
 const evidence=[...set.evidence];
 for(const c of set.concepts.filter(c=>c.relation==='genre_of_movie'&&c.assessment?.reviewStatus==='verified')){
  const id=c.id.split('_').at(-1)!,entry=comparisons[`${c.levelId}_${id}`];
  const review=reviews[`${c.levelId}:${id}:genre`]??reviews[`${c.levelId}:${id}`];
  if(!review?.checkedFields.includes('genre'))continue;
  for(const label of validAlternatives[`${c.levelId}_${id}`]??[]){
   const candidate={...c,object:label,semantic:{...c.semantic!,value:{id:`movie-genre:${moviesId(label)}`,entityType:'category' as const,caseSensitive:false}}};
   evidence.push(moviesComparison(c,candidate,'valid',review,`The checked film record also supports ${label}. The canonical teaching genre is not exclusive.`));
  }
  if(!entry)continue;
  for(const label of entry[0]){
   const valueId=`movie-genre:${moviesId(label)}`;
   if(valueId===c.semantic?.value?.id||evidence.some(e=>e.kind==='assertion'&&e.predicateId===c.relation&&e.subjectId===c.semantic?.subject?.id&&e.valueId===valueId&&e.verdict==='valid'))throw new Error(`Conflicting Movies comparison: ${c.subject} / ${label}`);
   const candidate={...c,object:label,semantic:{...c.semantic!,value:{id:valueId,entityType:'category' as const,caseSensitive:false}}};
   const assertion=moviesComparison(c,candidate,'invalid',review,
    `Source-feature editorial inference for ${c.subject} versus ${label}: ${entry[1]} Definition context: the checked ${label} meaning in the Movies genre lesson. This is a work-specific assessment, not a universal exclusion between genre labels.`);
   evidence.push({...assertion,id:`manual-editorial:2026-10-27:movies:${c.id}:${valueId}`,
    locator:`Manual editorial approval: user request “Approve the 85 comparisons classified Safe”, 2026-10-27. ${c.subject} versus ${label}. The linked source supports the film context, not external verification of this exclusion. Original AI rationale: ${entry[1]}`,
    reviewedBy:'User — manual editorial approval (not external source verification)',reviewedAt:'2026-10-27'});
  }
 }
 return {...set,evidence};
}
