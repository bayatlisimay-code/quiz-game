// Approved Miro transcription, 2026-10-12. Configuration only; not factual evidence.
export const ART_CURRICULUM_VERSION = "art-miro-2026-10-13";
export type TeachingPart = "p1" | "p2" | "p4";
export type ArtCurriculumLevel = { readonly title: string; readonly relations: Readonly<Partial<Record<TeachingPart, string>>> };
export const artCurriculum: Readonly<Record<string, Readonly<Record<string, ArtCurriculumLevel>>>> = {
  "painting": {
    "l1": {
      "title": "Painting Styles & Movements",
      "relations": {
        "p1": "definition_of_painting_movement",
        "p2": "example_of_painting_movement",
        "p4": "pioneer_of_painting_movement"
      }
    },
    "l2": {
      "title": "Renaissance Painting",
      "relations": {
        "p1": "identification_of_painting",
        "p2": "painter_of_painting",
        "p4": "creation_date_of_painting"
      }
    },
    "l3": {
      "title": "Baroque & Rococo Painting",
      "relations": {
        "p1": "identification_of_painting",
        "p2": "painter_of_painting",
        "p4": "creation_date_of_painting"
      }
    },
    "l4": {
      "title": "Neoclassicism & Romanticism",
      "relations": {
        "p1": "identification_of_painting",
        "p2": "painter_of_painting",
        "p4": "creation_date_of_painting"
      }
    },
    "l5": {
      "title": "Painting Basics I",
      "relations": {
        "p1": "definition_of_painting_technique",
        "p2": "definition_of_painting_tool",
        "p4": "definition_of_painting_medium"
      }
    },
    "l6": {
      "title": "Realism & Impressionism",
      "relations": {
        "p1": "identification_of_painting",
        "p2": "painter_of_painting",
        "p4": "creation_date_of_painting"
      }
    },
    "l7": {
      "title": "Post-Impressionism & Modern Painting",
      "relations": {
        "p1": "identification_of_painting",
        "p2": "painter_of_painting",
        "p4": "creation_date_of_painting"
      }
    },
    "l8": {
      "title": "Contemporary Painting",
      "relations": {
        "p1": "identification_of_painting",
        "p2": "painter_of_painting",
        "p4": "creation_date_of_painting"
      }
    },
    "l9": {
      "title": "Painting Basics II",
      "relations": {
        "p1": "definition_of_painting_composition_term",
        "p2": "definition_of_color_theory_term",
        "p4": "definition_of_painting_visual_term"
      }
    },
    "l10": {
      "title": "Final Review / Mastery",
      "relations": {}
    }
  },
  "literature": {
    "l1": {
      "title": "Famous Novels I (Classics)",
      "relations": {
        "p1": "author_of_novel",
        "p2": "genre_of_novel",
        "p4": "first_publication_year_of_novel"
      }
    },
    "l2": {
      "title": "Literary Genres",
      "relations": {
        "p1": "definition_of_literary_genre",
        "p2": "example_of_literary_genre",
        "p4": "notable_author_of_genre"
      }
    },
    "l3": {
      "title": "Famous Novelists I (Classics)",
      "relations": {
        "p1": "notable_novel_of_author",
        "p2": "first_published_novel_of_author",
        "p4": "country_of_birth_of_novelist"
      }
    },
    "l4": {
      "title": "Famous Poems & Poetry Collections",
      "relations": {
        "p1": "poet_of_poem",
        "p2": "first_publication_year_of_poem",
        "p4": "poet_of_poetry_collection"
      }
    },
    "l5": {
      "title": "Famous Novels II (20th Century & Contemporary)",
      "relations": {
        "p1": "author_of_novel",
        "p2": "genre_of_novel",
        "p4": "first_publication_year_of_novel"
      }
    },
    "l6": {
      "title": "Famous Novelists II (20th Century & Contemporary)",
      "relations": {
        "p1": "notable_novel_of_author",
        "p2": "first_published_novel_of_author",
        "p4": "country_of_birth_of_novelist"
      }
    },
    "l7": {
      "title": "Short Stories & Novellas",
      "relations": {
        "p1": "author_of_short_fiction",
        "p2": "main_character_of_short_fiction",
        "p4": "first_publication_year_of_short_fiction"
      }
    },
    "l8": {
      "title": "Characters & Works",
      "relations": {
        "p1": "book_of_character",
        "p2": "author_of_character",
        "p4": "associated_character_in_same_work"
      }
    },
    "l9": {
      "title": "Ancient Literature, Mythology & Epics",
      "relations": {
        "p1": "identification_of_ancient_literary_work",
        "p2": "culture_or_tradition_of_ancient_work",
        "p4": "historical_period_of_ancient_work"
      }
    },
    "l10": {
      "title": "Final Review / Mastery",
      "relations": {}
    }
  },
  "movies": {
    "l1": {
      "title": "Famous Movies I",
      "relations": {
        "p1": "director_of_movie",
        "p2": "genre_of_movie",
        "p4": "release_year_of_movie"
      }
    },
    "l2": {
      "title": "Movie Genres & Forms",
      "relations": {
        "p1": "definition_of_movie_genre",
        "p2": "example_of_movie_genre",
        "p4": "notable_director_of_genre"
      }
    },
    "l3": {
      "title": "Famous Directors I",
      "relations": {
        "p1": "country_of_birth_of_director",
        "p2": "example_of_notable_movie_by_director",
        "p4": "first_feature_film_of_director"
      }
    },
    "l4": {
      "title": "Animated Films",
      "relations": {
        "p1": "animation_studio_of_movie",
        "p2": "character_of_animated_movie",
        "p4": "release_year_of_animated_movie"
      }
    },
    "l5": {
      "title": "Movie Basics",
      "relations": {
        "p1": "definition_of_filmmaking_role",
        "p2": "definition_of_film_term",
        "p4": "definition_of_filmmaking_technique"
      }
    },
    "l6": {
      "title": "Famous Movies II",
      "relations": {
        "p1": "director_of_movie",
        "p2": "genre_of_movie",
        "p4": "release_year_of_movie"
      }
    },
    "l7": {
      "title": "Famous Directors II",
      "relations": {
        "p1": "country_of_birth_of_director",
        "p2": "example_of_notable_movie_by_director",
        "p4": "first_feature_film_of_director"
      }
    },
    "l8": {
      "title": "Film Awards & Festivals",
      "relations": {
        "p1": "country_of_award_or_festival",
        "p2": "top_prize_of_award_or_festival",
        "p4": "founded_decade_of_award_or_festival"
      }
    },
    "l9": {
      "title": "Characters & Movies",
      "relations": {
        "p1": "movie_of_character",
        "p2": "actor_portraying_character",
        "p4": "associated_character_in_same_movie"
      }
    },
    "l10": {
      "title": "Final Review / Mastery",
      "relations": {}
    }
  },
  "music": {
    "l1": {
      "title": "Music Genres & Forms",
      "relations": {
        "p1": "definition_of_music_genre",
        "p2": "example_of_song_in_music_genre",
        "p4": "notable_artist_of_genre"
      }
    },
    "l2": {
      "title": "Famous Solo Artists I",
      "relations": {
        "p1": "country_of_birth_of_solo_artist",
        "p2": "example_of_notable_song_by_solo_artist",
        "p4": "genre_associated_with_solo_artist"
      }
    },
    "l3": {
      "title": "Famous Bands & Groups I",
      "relations": {
        "p1": "country_of_formation_of_band",
        "p2": "example_of_notable_song_by_band",
        "p4": "formation_year_of_band"
      }
    },
    "l4": {
      "title": "Famous Classical Composers",
      "relations": {
        "p1": "country_of_birth_of_composer",
        "p2": "example_of_notable_composition_by_composer",
        "p4": "historical_period_of_composer"
      }
    },
    "l5": {
      "title": "Music Basics I",
      "relations": {
        "p1": "definition_of_music_role",
        "p2": "definition_of_music_term",
        "p4": "definition_of_vocal_term"
      }
    },
    "l6": {
      "title": "Famous Solo Artists II",
      "relations": {
        "p1": "country_of_birth_of_solo_artist",
        "p2": "example_of_notable_song_by_solo_artist",
        "p4": "genre_associated_with_solo_artist"
      }
    },
    "l7": {
      "title": "Famous Bands & Groups II",
      "relations": {
        "p1": "country_of_formation_of_band",
        "p2": "example_of_notable_song_by_band",
        "p4": "formation_year_of_band"
      }
    },
    "l8": {
      "title": "Musical Instruments",
      "relations": {
        "p1": "definition_of_instrument_type",
        "p2": "type_of_instrument",
        "p4": "notable_musician_of_instrument"
      }
    },
    "l9": {
      "title": "Music Basics II",
      "relations": {
        "p1": "definition_of_music_notation_term",
        "p2": "definition_of_rhythm_term",
        "p4": "definition_of_pitch_term"
      }
    },
    "l10": {
      "title": "Final Review / Mastery",
      "relations": {}
    }
  },
  "design": {
    "l1": {
      "title": "Famous Designs",
      "relations": {
        "p1": "identification_of_design",
        "p2": "designed_by",
        "p4": "created_in_decade"
      }
    },
    "l2": {
      "title": "Design Fields",
      "relations": {
        "p1": "definition_of_design_field",
        "p2": "example_of_design_field",
        "p4": "notable_designer_of_field"
      }
    },
    "l3": {
      "title": "Design Movements",
      "relations": {
        "p1": "definition_of_design_movement",
        "p2": "example_of_design_movement",
        "p4": "pioneer_of_design_movement"
      }
    },
    "l4": {
      "title": "Famous Designers",
      "relations": {
        "p1": "design_field_of_designer",
        "p2": "known_for_design",
        "p4": "design_period_of_designer"
      }
    },
    "l5": {
      "title": "Design Principles",
      "relations": {
        "p1": "definition_of_design_principle",
        "p2": "definition_of_composition_term",
        "p4": "definition_of_color_design_term"
      }
    },
    "l6": {
      "title": "Typography & Type Design",
      "relations": {
        "p1": "definition_of_typography_term",
        "p2": "classification_of_typeface",
        "p4": "designer_of_typeface"
      }
    },
    "l7": {
      "title": "Graphic & Visual Design",
      "relations": {
        "p1": "identification_of_visual_design",
        "p2": "designer_of_visual_work",
        "p4": "creation_date_of_visual_work"
      }
    },
    "l8": {
      "title": "Product & Furniture Design",
      "relations": {
        "p1": "identification_of_product_design",
        "p2": "designer_of_product",
        "p4": "creation_date_of_product"
      }
    },
    "l9": {
      "title": "Brand Identity Design",
      "relations": {
        "p1": "identification_of_brand_identity",
        "p2": "designer_of_brand_identity",
        "p4": "introduction_year_of_brand_identity"
      }
    },
    "l10": {
      "title": "Final Review / Mastery",
      "relations": {}
    }
  },
  "architecture": {
    "l1": {
      "title": "Architectural Styles",
      "relations": {
        "p1": "definition_of_architectural_style",
        "p2": "example_of_architectural_style",
        "p4": "approximate_period_of_architectural_style"
      }
    },
    "l2": {
      "title": "Ancient Architecture & Civilizations",
      "relations": {
        "p1": "identification_of_architectural_work",
        "p2": "civilization_or_culture_of_architectural_work",
        "p4": "country_of_architectural_work"
      }
    },
    "l3": {
      "title": "Classical & Medieval Architecture",
      "relations": {
        "p1": "identification_of_architectural_work",
        "p2": "civilization_or_culture_of_architectural_work",
        "p4": "country_of_architectural_work"
      }
    },
    "l4": {
      "title": "Renaissance, Baroque & Neoclassical Architecture",
      "relations": {
        "p1": "identification_of_architectural_work",
        "p2": "architect_of_architectural_work",
        "p4": "country_of_architectural_work"
      }
    },
    "l5": {
      "title": "Architecture Basics I",
      "relations": {
        "p1": "definition_of_architectural_element",
        "p2": "definition_of_architectural_material",
        "p4": "definition_of_architectural_construction_technique"
      }
    },
    "l6": {
      "title": "19th-Century & Early Modern Architecture",
      "relations": {
        "p1": "identification_of_architectural_work",
        "p2": "architect_of_architectural_work",
        "p4": "country_of_architectural_work"
      }
    },
    "l7": {
      "title": "Modern Architecture",
      "relations": {
        "p1": "identification_of_architectural_work",
        "p2": "architect_of_architectural_work",
        "p4": "country_of_architectural_work"
      }
    },
    "l8": {
      "title": "Contemporary Architecture",
      "relations": {
        "p1": "identification_of_architectural_work",
        "p2": "architect_of_architectural_work",
        "p4": "country_of_architectural_work"
      }
    },
    "l9": {
      "title": "Architecture Basics II",
      "relations": {
        "p1": "definition_of_architectural_form",
        "p2": "definition_of_architectural_design_term",
        "p4": "definition_of_architectural_structural_term"
      }
    },
    "l10": {
      "title": "Final Review / Mastery",
      "relations": {}
    }
  },
  "sculpture": {
    "l1": {
      "title": "Prehistoric & Early Ancient Sculpture",
      "relations": {
        "p1": "identification_of_sculpture",
        "p2": "civilization_or_culture_of_sculpture",
        "p4": "historical_period_or_approximate_date_of_sculpture"
      }
    },
    "l2": {
      "title": "Ancient & Classical Sculpture",
      "relations": {
        "p1": "identification_of_sculpture",
        "p2": "civilization_or_culture_of_sculpture",
        "p4": "historical_period_or_approximate_date_of_sculpture"
      }
    },
    "l3": {
      "title": "Medieval & Renaissance Sculpture",
      "relations": {
        "p1": "identification_of_sculpture",
        "p2": "sculptor_of_sculpture",
        "p4": "creation_date_of_sculpture"
      }
    },
    "l4": {
      "title": "Baroque & Neoclassical Sculpture",
      "relations": {
        "p1": "identification_of_sculpture",
        "p2": "sculptor_of_sculpture",
        "p4": "creation_date_of_sculpture"
      }
    },
    "l5": {
      "title": "Sculpture Basics I",
      "relations": {
        "p1": "definition_of_sculpture_technique",
        "p2": "definition_of_sculpture_tool",
        "p4": "definition_of_sculpture_material"
      }
    },
    "l6": {
      "title": "19th-Century & Early Modern Sculpture",
      "relations": {
        "p1": "identification_of_sculpture",
        "p2": "sculptor_of_sculpture",
        "p4": "creation_date_of_sculpture"
      }
    },
    "l7": {
      "title": "Modern Sculpture",
      "relations": {
        "p1": "identification_of_sculpture",
        "p2": "sculptor_of_sculpture",
        "p4": "creation_date_of_sculpture"
      }
    },
    "l8": {
      "title": "Contemporary Sculpture",
      "relations": {
        "p1": "identification_of_sculpture",
        "p2": "sculptor_of_sculpture",
        "p4": "creation_date_of_sculpture"
      }
    },
    "l9": {
      "title": "Sculpture Basics II",
      "relations": {
        "p1": "definition_of_sculpture_form",
        "p2": "definition_of_sculpture_term",
        "p4": "definition_of_advanced_sculpture_process"
      }
    },
    "l10": {
      "title": "Final Review / Mastery",
      "relations": {}
    }
  },
  "theatre": {
    "l1": {
      "title": "Famous Plays I (Classics)",
      "relations": {
        "p1": "playwright_of_play",
        "p2": "genre_of_play",
        "p4": "period_or_year_of_play"
      }
    },
    "l2": {
      "title": "Theatre Genres & Forms",
      "relations": {
        "p1": "definition_of_theatre_genre",
        "p2": "example_of_theatre_genre",
        "p4": "notable_playwright_of_genre"
      }
    },
    "l3": {
      "title": "Famous Playwrights I (Classics)",
      "relations": {
        "p1": "country_of_birth_of_playwright",
        "p2": "example_of_notable_play_by_playwright",
        "p4": "first_play_of_playwright"
      }
    },
    "l4": {
      "title": "Theatre Basics I",
      "relations": {
        "p1": "definition_of_theatre_role",
        "p2": "definition_of_theatre_term",
        "p4": "definition_of_stage_element"
      }
    },
    "l5": {
      "title": "Famous Plays II (Modern & Contemporary)",
      "relations": {
        "p1": "playwright_of_play",
        "p2": "genre_of_play",
        "p4": "period_or_year_of_play"
      }
    },
    "l6": {
      "title": "Famous Playwrights II (Modern & Contemporary)",
      "relations": {
        "p1": "country_of_birth_of_playwright",
        "p2": "example_of_notable_play_by_playwright",
        "p4": "first_play_of_playwright"
      }
    },
    "l7": {
      "title": "Characters & Plays",
      "relations": {
        "p1": "play_of_character",
        "p2": "playwright_of_character",
        "p4": "associated_character_in_same_play"
      }
    },
    "l8": {
      "title": "Theatre Basics II (Performance & Stagecraft)",
      "relations": {
        "p1": "definition_of_performance_term",
        "p2": "definition_of_stagecraft_term",
        "p4": "definition_of_theatre_production_term"
      }
    },
    "l9": {
      "title": "Famous Theatre Venues & Stages",
      "relations": {
        "p1": "identification_of_theatre_venue",
        "p2": "country_of_theatre_venue",
        "p4": "historical_period_or_opening_year_of_theatre_venue"
      }
    },
    "l10": {
      "title": "Final Review / Mastery",
      "relations": {}
    }
  }
};
// Change this single flag after Design content/assets pass the same release checks.
export const artAvailability: Readonly<Record<string, "available" | "coming-soon">> = Object.freeze({ design: "coming-soon" });
export function teachingRelation(subtopic: string, level: string, part: string): string | undefined {
  return artCurriculum[subtopic]?.[level]?.relations[part as TeachingPart];
}
