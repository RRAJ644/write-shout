export const MENU_ITEMS: string[] = ['Scripts', 'Services']

export const TITLES = {
  HEADLINE: 'Stories That Sell, Scripts That Shine – Your Vision, My Pen!',
  SUB_HEADLINE:
    'Let’s turn your ideas into unforgettable screenplays that captivate audiences, win hearts, and drive success. Ready to create your next masterpiece?',
  RECENT_STORIES: 'Check My Recent Work',
  TIMELINES: {
    TITLE: 'Journey towards writing in hope of doing great projects',
    DESCRIPTION:
      'Embarking on my path to becoming a screenwriter, exploring creativity, storytelling, and the art of crafting compelling narratives.',
  },
  CTA_TEXT:
    'Transform intense moments into unforgettable stories. Let’s craft scripts that captivate and inspire.',
  STORY_TITLE: 'Writing Worlds Across Every Screen',
}
export interface RecentCard {
  url: string
  name: string
  title: string
  description: string
}

export const RECENT_CARDS: RecentCard[] = [
  {
    url: 'https://example.com',
    name: 'John Doe',
    title: 'Author Card Title 1',
    description: 'This is the first sample description.',
  },
  {
    url: 'https://example.com',
    name: 'Jane Smith',
    title: 'Author Card Title 2',
    description: 'This is the second sample description.',
  },
  {
    url: 'https://example.com',
    name: 'Alice Johnson',
    title: 'Author Card Title 3',
    description: 'This is the third sample description.',
  },
  {
    url: 'https://example.com',
    name: 'Bob Brown',
    title: 'Author Card Title 4',
    description: 'This is the fourth sample description.',
  },
  {
    url: 'https://example.com',
    name: 'Bob Brown',
    title: 'Author Card Title 4',
    description: 'This is the fourth sample description.',
  },
  {
    url: 'https://example.com',
    name: 'Bob Brown',
    title: 'Author Card Title 4',
    description: 'This is the fourth sample description.',
  },
]

export const MAIL: string = 'riturajsingh.17248@gmail.com'

export const ABOUT_DATA = []

export const HOVERED_LINKS = {
  SCRIPTS: {
    TYPES: ['Web Series', 'TV shows', 'Movies', 'Short Films'],
    ITEM: 'Scripts',
  },

  SERVICES: {
    TYPES: [
      'Film Screenwriting',
      'TV and Web Series Scriptwriting',
      'Commercial Scriptwriting',
      'Corporate Video Scripts',
      'Pitch Deck Script Assistance',
      'YouTube Scriptwriting',
      'Interactive Media Writing',
      'Dialogue Polishing',
      'Story Consultation',
      'Transmedia Storytelling',
      'Documentary Scriptwriting',
      'Voiceover Scripts',
    ],
    ITEM: 'Services',
  },
}

// SERVICES: {
//   TYPES: [
//     {
//       name: 'Film Screenwriting',
//       description:
//         'Specialized in feature-length films and short films, creating stories that captivate audiences on the big screen.',
//     },
//     {
//       name: 'TV and Web Series Scriptwriting',
//       description:
//         'Creating episodic content for web platforms and television, tailored to engage binge-worthy audiences and deliver compelling narratives across episodes.',
//     },
//     {
//       name: 'Commercial Scriptwriting',
//       description:
//         'Writing engaging scripts for TV and digital commercials to effectively promote brands and products.',
//     },
//     {
//       name: 'Corporate Video Scripts',
//       description:
//         'Crafting narratives for internal company videos, product launches, and training materials, ensuring clear and impactful communication.',
//     },
//     {
//       name: 'Pitch Deck Script Assistance',
//       description:
//         'Helping filmmakers and producers refine the narrative for their pitch presentations to capture attention and secure funding.',
//     },
//     {
//       name: 'YouTube Scriptwriting',
//       description:
//         'Writing for creators, ensuring their content remains engaging, concise, and aligned with their audience’s preferences.',
//     },
//     {
//       name: 'Interactive Media Writing',
//       description:
//         'Developing scripts for VR, AR, and other interactive media experiences, blending storytelling with innovative technology.',
//     },
//     {
//       name: 'Dialogue Polishing',
//       description:
//         'Refining character dialogues for authenticity and emotional impact, ensuring they resonate with the audience.',
//     },
//     {
//       name: 'Story Consultation',
//       description:
//         'Assisting with story development, structure, and narrative arcs to strengthen the overall impact of the script.',
//     },
//     {
//       name: 'Transmedia Storytelling',
//       description:
//         'Developing interconnected stories across multiple platforms such as film, games, and social media for cohesive and engaging narratives.',
//     },
//     {
//       name: 'Documentary Scriptwriting',
//       description:
//         'Writing scripts for documentaries, combining factual storytelling with emotional resonance to connect with viewers.',
//     },
//     {
//       name: 'Voiceover Scripts',
//       description:
//         'Creating impactful scripts for podcasts, audiobooks, and other audio-first content, tailored for immersive listening experiences.',
//     },
//   ],
//   ITEM: 'Services',
// },

export const GENRES: string[] = [
  'Action',
  'Comedy',
  'Drama',
  'Horror',
  'Romance',
  'Sci-Fi',
  'Thriller',
]

interface Character {
  name: string
  details: string
  motivation: string
}

interface PlotDetails {
  introduction: string
  risingAction: string
  climax: string
  fallingAction: string
  resolution: string
}

interface Writer {
  name: string
  description: string
}

interface Script {
  title: string
  storyline: string
  writtenBy: string
  genre: string
  language: string
  description: string
}

interface Characters {
  tab: string
  characterData: Character[]
}

interface Plot {
  tab: string
  plotDetails: PlotDetails
}

interface Summary {
  tab: string
  summaryDetails: string
}

interface Writers {
  tab: string
  writersDetails: Writer[]
}

export interface ScriptData {
  script: Script
  characters: Characters
  plot: Plot
  summary: Summary
  writers: Writers
}

export const SCRIPT_DATA: ScriptData[] = [
  {
    script: {
      title: 'The Adventure Begins',
      storyline:
        'A young hero embarks on a journey to save their village from an ancient curse.',
      writtenBy: 'John Doe',
      genre: 'Fantasy, Adventure',
      language: 'English',
      description:
        'A young hero embarks on a journey to save their village from an ancient curse.',
    },

    characters: {
      tab: 'Characters',
      characterData: [
        {
          name: 'Lia',
          details:
            'A brave young woman with a mysterious past, determined to break the curse on her village.',
          motivation:
            'To save her village and uncover the truth of her destiny.',
        },
        {
          name: 'Grath',
          details:
            'A skilled but reluctant warrior who is bound by an ancient prophecy to assist the hero.',
          motivation:
            'To honor the prophecy and protect his village from the curse.',
        },
      ],
    },

    plot: {
      tab: 'Plot',
      plotDetails: {
        introduction:
          'The village is suffering from a curse that has lasted for centuries, and the only hope lies in an ancient prophecy.',
        risingAction:
          'Lia discovers that she is the chosen one to break the curse, and she sets out on a perilous journey.',
        climax:
          'Lia and Grath confront the source of the curse, facing their deepest fears and the truth of their destinies.',
        fallingAction:
          'With the curse broken, the village begins to heal, and Lia comes to terms with her role as the hero.',
        resolution:
          'Lia returns home, knowing that her journey is only just beginning, as new threats loom on the horizon.',
      },
    },

    summary: {
      tab: 'Summary',
      summaryDetails:
        'Lia, a young woman chosen by prophecy, embarks on a perilous journey to break an ancient curse threatening her village, only to uncover deeper secrets about her own destiny.',
    },

    writers: {
      tab: 'Writers',
      writersDetails: [
        {
          name: 'John Doe',
          description:
            'Experienced fantasy writer with several published works in the adventure genre.',
        },
      ],
    },
  },
]

export const tabs: string[] = ['Script', 'Characters', 'Plot', 'Summary', 'Writers']
