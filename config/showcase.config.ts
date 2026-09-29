/**
 * The showcase: fifteen projects built with AI between 2025-09-04 and
 * 2026-09-04, in three tiers. Copy comes from docs/showcase.md, tightened to
 * the lengths the page uses. Screens come from public/showcase/<project>/;
 * terminal output is rendered from text rather than captured.
 */

/** The three frame shapes every screen on the page is cut to. */
export type Frame = 'desktop' | 'detail' | 'phone';

export type Tier = 'long' | 'tool' | 'small';

export interface Link {
  label: string;
  href: string;
}

/** One line of a terminal render: a command the reader typed, or output. */
export interface TermLine {
  cmd?: string;
  out?: string;
}

interface ScreenBase {
  /** What the screen shows, not what the project is. */
  alt: string;
  /** The visible mono tag under the screen: what the screen is. */
  tag: string;
  frame: Frame;
  /** The one screen in a stack the words are about. */
  live?: boolean;
  /** Rest tilt in degrees. */
  tilt: number;
}

export interface Capture extends ScreenBase {
  kind: 'capture';
  src: string;
}

export interface Render extends ScreenBase {
  kind: 'render';
  lines: TermLine[];
}

export type Screen = Capture | Render;

export interface Entry {
  id: string;
  tier: Tier;
  visibility: 'public' | 'private';
  /** The repo, when public. */
  repo?: string;
  /** Live URLs, when any. */
  live?: Link[];
  commits: number;
  /** The long builds show their stack in the meta line. */
  stack?: string[];
  problem: string;
  /** Three items for a long build, one for a tool, none for a small one. */
  hard: string[];
  screens: Screen[];
}

export interface FanScreen {
  src: string;
  alt: string;
  tag: string;
  frame: Frame;
  tilt: number;
}

export const TIER_LABELS: Record<Tier, string> = {
  long: 'The long builds',
  tool: 'The tools',
  small: 'The small ones',
};

const gh = (name: string) => `https://github.com/niftymonkey/${name}`;

/** The hero fan: one screen from each shape on the page, none of them live. */
export const fan: FanScreen[] = [
  {
    src: '/showcase/costs-portal/dashboard.png',
    alt: 'The costs-portal dashboard: a month total, project cards with sparklines, and the watchman panel',
    tag: 'costs-portal',
    frame: 'desktop',
    tilt: -5,
  },
  {
    src: '/showcase/md/reader.png',
    alt: 'The md reader showing a document with its outline rail and a code block',
    tag: 'md',
    frame: 'desktop',
    tilt: -3,
  },
  {
    src: '/showcase/boswell/chat.png',
    alt: 'A Boswell conversation, the assistant answering from what it remembers',
    tag: 'boswell',
    frame: 'desktop',
    tilt: 2,
  },
  {
    src: '/showcase/review-kit/capture.png',
    alt: 'The ReviewKit recording overlay: a waveform, a timer, and the live transcript',
    tag: 'review-kit',
    frame: 'phone',
    tilt: -4,
  },
  {
    src: '/showcase/the-cabinet/hungry-grave.png',
    alt: 'The Hungry Grave: a run replaying, rings of orbiting shots around the player',
    tag: 'the-cabinet',
    frame: 'desktop',
    tilt: 5,
  },
];

export const entries: Entry[] = [
  {
    id: 'boswell',
    tier: 'long',
    visibility: 'private',
    commits: 463,
    stack: ['Python 3.12', 'FastAPI', 'pgvector', 'Pipecat', 'Next.js 16'],
    problem:
      "Chat assistants forget you between sessions and run on someone else's servers. Boswell keeps a continuously distilled model of one person's life, on hardware they control, and surfaces things at the moment they matter.",
    hard: [
      'Deciding who a name refers to. The tiered resolver was torn out and rebuilt as a single pure function, and the substrate decision was written down.',
      'Making the memory admit what it does not know. Grounding, candor on failure, contradiction crosscheck, and fact supersession each needed their own decision record.',
      'Getting voice to work end to end: WebRTC through Docker NAT, a relay, barge-in, and client-owned turn ends took 27 commits and four research notes.',
    ],
    screens: [
      {
        kind: 'capture',
        src: '/showcase/boswell/chat.png',
        alt: 'The Boswell chat surface: the assistant answering questions about what it knows, with a cited memory underlined',
        tag: 'chat surface',
        frame: 'desktop',
        live: true,
        tilt: -1.5,
      },
      {
        kind: 'render',
        alt: 'One turn traced through extraction, resolution, retrieval, and the cited reply',
        tag: 'just audit-turn',
        frame: 'detail',
        tilt: -3,
        lines: [
          { cmd: 'just audit-turn cf352e95' },
          { out: '[utterance]' },
          { out: '  user_utterance (voice): Tell me about my friend R.' },
          { out: '[extraction]' },
          { out: '  entity f786f5a4  person  Mark Lozano' },
          { out: '  entity a9267990  person  R.' },
          { out: '  edge   d7c80738  friend  f786f5a4 -> a9267990' },
          { out: '[resolution]' },
          {
            out: '  bind      person/f2b0bb7fdfdaee040e734c86187d63d5bae56e21f6c17732bd0f88e094057a7f  entity=f786f5a4 matched=f786f5a4  first_person_anchor',
          },
          {
            out: '  bind      person/aa392d36bd86cef2f0fac485450602185be5ff071453ca350150236a18605f24  entity=a9267990 matched=a9267990  same_person_by_name',
          },
          { out: '[retrieval]' },
          { out: '  hits=8  relationships=100  entities: R., place, Mark, T., place, S., K., person' },
          { out: '[crosscheck]' },
          { out: '  no signal' },
          { out: '[reply]' },
          {
            out: '  [R.](boswell:turn/019f3dd1-758f-77b0-bb7b-913c263b94fd) is someone you\'ve known since you were about 23, so for over 25 years now. You two got along really well from the start. You have a similar sense of humor, like the same foods, and both love pie. You even had a stretch where you\'d celebrate "Pi Day" once a month at work, bringing in pie to share.',
          },
          { out: '' },
          {
            out: "  You've worked together at multiple companies over the years, more than anyone else in your current friend group. He's [entertaining, nice, and generous](boswell:turn/019f3dd1-758f-77b0-bb7b-913c263b94fd). He loves hosting events and seems to enjoy making people happy.",
          },
          { out: '' },
          {
            out: '  He has a [basement theater at his house](boswell:turn/019f3dd1-758f-77b0-bb7b-913c263b94fd) where you have movie night. He usually makes really good food for those gatherings, and the rest of you bring sides or desserts.',
          },
          { out: '' },
          {
            out: '  You two used to game together: World of Warcraft and EverQuest before that. His wife M. also played WoW with you guys, along with [S.](boswell:turn/019f3dcd-be51-7631-962a-f66ded1d7460). R. also rides motorcycles and has introduced other friends like K. and S. through that hobby.',
          },
        ],
      },
      {
        kind: 'capture',
        src: '/showcase/boswell/memory.png',
        alt: 'The memory browser: questions and grounded answers, each answer linked to the trace that surfaced it',
        tag: 'memory browser',
        frame: 'detail',
        tilt: 2.5,
      },
    ],
  },
  {
    id: 'champ-sage',
    tier: 'long',
    visibility: 'public',
    repo: gh('champ-sage'),
    commits: 424,
    stack: ['TypeScript', 'React 19', 'RxJS', 'Overwolf Electron', 'Whisper', 'evalite'],
    problem:
      'Every League companion app serves pre-computed tier lists that ignore your actual items, augments, and enemy team. Champ Sage is a voice-first coach for the game you are in right now.',
    hard: [
      'Riot exposes no augment data at all. Reaching the one API that sees augment offers forced a full migration off Tauri onto Overwolf Electron.',
      'That dependency then broke on roughly every League patch. A package guard now serves a corrected manifest at launch.',
      'The in-game overlay kept going blank or getting stuck. Fixes ran for months across compositor flushes, drag persistence, and renderer survivability.',
    ],
    screens: [
      {
        kind: 'capture',
        src: '/showcase/champ-sage/overlay.png',
        alt: 'The in-game overlay: three augment cards, each with a coaching verdict above it, and the coach answering a question in the corner',
        tag: 'in-game overlay · augment verdicts',
        frame: 'desktop',
        live: true,
        tilt: 1,
      },
      {
        kind: 'capture',
        src: '/showcase/champ-sage/champ-select.png',
        alt: 'The desktop app in champ select: your pick with a build direction and summoner spells, the enemy team still picking',
        tag: 'desktop window · champ select',
        frame: 'detail',
        tilt: -2.5,
      },
      {
        kind: 'capture',
        src: '/showcase/champ-sage/post-game.png',
        alt: 'The post-game review: three takeaways from the match, the coach-side timeline, and the final build matched six for six against the plan',
        tag: 'post-game review',
        frame: 'desktop',
        tilt: 2,
      },
    ],
  },
  {
    id: 'brief',
    tier: 'long',
    visibility: 'public',
    repo: gh('brief'),
    live: [{ label: 'live', href: 'https://brief.niftymonkey.dev' }],
    commits: 234,
    stack: ['Next.js 16', 'React 19', 'Vercel', 'WorkOS', 'AI SDK'],
    problem:
      'Long videos hide whether they are worth watching behind the watching. Brief turns a YouTube link into a timestamped, structured summary so you can decide to watch now, later, or never, and keeps every brief in a searchable library.',
    hard: [
      "Reading video frames meant downloading video bytes, which YouTube's terms name directly and its anti-bot enforcement blocks from datacenter IPs. The answer was to move that work to the user's machine.",
      'That pivot turned a standalone CLI into an authenticated thin client: device-flow login, token refresh, and a server-side LLM gateway with a usage ledger, about 30 commits plus several rounds of auth fixes.',
      'Collections came in as a full vertical slice: schema and constraints, API, UI, per-clip AI summaries, public share pages, and continuous playback across clips.',
    ],
    screens: [
      {
        kind: 'capture',
        src: '/showcase/brief/detail.png',
        alt: 'A brief: the video player, the gist, and the AI-generated chapters with timestamps',
        tag: 'a brief · chapters',
        frame: 'detail',
        live: true,
        tilt: -1,
      },
      {
        kind: 'capture',
        src: '/showcase/brief/library.png',
        alt: 'The library: search, tag filters, date filters, and a grid of briefs',
        tag: 'library · filters',
        frame: 'detail',
        tilt: 2.5,
      },
      {
        kind: 'render',
        alt: 'The brief CLI: whoami, then generate on a YouTube link, ending on the new brief’s URL',
        tag: 'the brief CLI',
        frame: 'detail',
        tilt: -2,
        lines: [
          { cmd: 'brief whoami' },
          { out: 'person@emailserver.com' },
          { out: '' },
          { cmd: 'brief generate https://www.youtube.com/watch?v=vsGwx28z4jk' },
          { out: 'Fetching transcript...' },
          { out: 'Generating brief on the server... (typically 5-15s)' },
          { out: 'https://brief.niftymonkey.dev/brief/b22ee8a1-d3ad-4625-a73a-4ebfd372049f' },
        ],
      },
    ],
  },
  {
    id: 'the-cabinet',
    tier: 'long',
    visibility: 'public',
    repo: gh('the-cabinet'),
    live: [
      { label: 'hungry-grave', href: 'https://hungry-grave.vercel.app' },
      { label: 'housewarming', href: 'https://housewarming.niftymonkey.dev' },
    ],
    commits: 224,
    stack: ['TypeScript', 'Vite', 'PixiJS 8', 'React 19', 'Upstash Redis'],
    problem:
      'My games had no shared home, and a repo per game costs an install, a tracker and a deploy each. One repo holds every game plus a launcher, and each game keeps its own stack.',
    hard: [
      "Proving a recorded run is the real run. A tape format, a witness fold, always-on invariants and a refusal rule took about twenty of the game's 47 decision records.",
      'Breaking the game into named modules without changing behavior: a 31-commit refactor plus a written proof that a 259-file change moved nothing.',
      'Keeping the launcher from importing game code, which would force one PixiJS version on every game. The answer is an iframe driven by an experimental DOMContainer.',
    ],
    screens: [
      {
        kind: 'capture',
        src: '/showcase/the-cabinet/hungry-grave.png',
        alt: "The Hungry Grave mid-run at full weapon levels, the window filled with the player's own projectiles",
        tag: 'The Hungry Grave',
        frame: 'desktop',
        live: true,
        tilt: -1.5,
      },
      {
        kind: 'capture',
        src: '/showcase/the-cabinet/housewarming.png',
        alt: 'The Housewarming title screen: the name above a single lit candle in the dark',
        tag: 'Housewarming',
        frame: 'detail',
        tilt: -3,
      },
      {
        kind: 'capture',
        src: '/showcase/the-cabinet/replay.png',
        alt: 'The replay route: a verified tape playing back at tick 9698, rings of orbiting shots around the player',
        tag: '#/replay · a tape at tick 9698',
        frame: 'detail',
        tilt: 2.5,
      },
    ],
  },
  {
    id: 'regimen',
    tier: 'long',
    visibility: 'public',
    repo: gh('regimen'),
    commits: 234,
    stack: ['TypeScript', 'Bun', 'SQLite', 'OpenTelemetry', 'Grafana Cloud'],
    problem:
      'Engineers judge their AI-assisted work on feel. Regimen captures what actually happened across Claude Code, Codex, Copilot, and Gemini into a local store, then tells the engineer where the work went wrong and whether their fixes helped.',
    hard: [
      'Four agent CLIs disagree on everything at the capture edge: hook file formats, event names, timestamp units, whether the payload even names the event.',
      'Three sibling repos were folded in as workspace packages, reversing an earlier multi-repo decision without breaking the sibling-path resolution the installer depends on.',
      "Assessment needs an LLM, and not every user has a spare key. Three judge backends: an API key, the claude CLI's own auth, and a seam that hands the prompt to the agent already in the room.",
    ],
    screens: [
      {
        kind: 'render',
        alt: 'regimen rollup: a colleague-voice read of 425 judged conversations, the one pattern behind most corrections, and a suggested habit',
        tag: 'regimen rollup',
        frame: 'desktop',
        live: true,
        tilt: 1,
        lines: [
          { cmd: 'regimen rollup' },
          { out: '' },
          {
            out: 'Hey, so quick gut-check on the last stretch since you asked: it went well overall. Most sessions land the thing you actually asked for, roughly three in five finish clean with no real back-and-forth needed, and only a small slice, about one in fourteen, really goes sideways.',
          },
          { out: '' },
          {
            out: 'When something does need fixing, there\'s one pattern behind almost all of it: you catching Claude stating something as settled fact before it actually checked. A branch it called "clean" that wasn\'t. A claim that a skill didn\'t exist when it did. A "yes it\'s fixed" before anyone re-ran the thing. Session 6acc6193b is a clean example: Claude declared three PRs mergeable and you had to stop it and ask "are you sure?" before it actually looked. Same shape in fa647718: an audit said "no issues" while a stale line in its own doc contradicted it, and you\'re the one who caught the mismatch. It\'s not that Claude is careless across the board, it clearly does good, careful work most of the time, it\'s that the moment of "I\'m done, here\'s the state" is where it gets ahead of the evidence.',
          },
          { out: '' },
          {
            out: 'My recommendation is that we add a small standing habit: before Claude reports something as verified or complete, it names how it checked, not just that it checked. That forces the "how do you know" step to happen before you have to ask it, instead of after.',
          },
          { out: '' },
          { out: 'The numbers behind this:' },
          { out: 'judged conversations: 425' },
          { out: '  accomplishment: accomplished 256, not-accomplished 31, partial 63' },
          { out: '  correction-cost: heavy 47, light 121, none 89' },
          { out: '  verification: accepted-unverified 64, nothing-to-verify 70, verified 205' },
        ],
      },
      {
        kind: 'render',
        alt: 'regimen status: four harnesses installed, the daemon running, 284 conversations awaiting assessment',
        tag: 'regimen status',
        frame: 'detail',
        tilt: -2.5,
        lines: [
          { cmd: 'regimen status' },
          { out: 'installed: regimen 1.0.0' },
          { out: '  codex: feedback, enforcement, guidance' },
          { out: '  claude: feedback, enforcement, guidance' },
          { out: '  copilot: feedback, enforcement, guidance' },
          { out: '  gemini: feedback, enforcement, guidance' },
          { out: 'feedback: enabled' },
          { out: 'daemon: running (pid 376)' },
          { out: 'last event: 2s ago' },
          { out: 'backlog: 857193 bytes' },
          { out: 'awaiting assessment: 284 conversations' },
        ],
      },
    ],
  },
  {
    id: 'md',
    tier: 'tool',
    visibility: 'public',
    repo: gh('md'),
    live: [{ label: 'live', href: 'https://md.niftymonkey.dev' }],
    commits: 117,
    problem:
      'Turn a markdown file into a legible shareable link, faster than a gist and more durable than a pastebin. The second audience is a coding agent that needs to publish and edit docs there as fluidly as it edits local files.',
    hard: [
      'an API an agent can drive without wasting context, with 409s that name every ambiguous match and its line.',
    ],
    screens: [
      {
        kind: 'capture',
        src: '/showcase/md/reader.png',
        alt: 'The md reader with the outline rail open beside a document with code blocks',
        tag: 'reader · outline rail',
        frame: 'desktop',
        live: true,
        tilt: -1.5,
      },
      {
        kind: 'capture',
        src: '/showcase/md/mermaid.png',
        alt: 'A document in the md reader, set wide, with a Mermaid flow diagram and a code block',
        tag: 'a doc with a diagram',
        frame: 'detail',
        tilt: 2.5,
      },
    ],
  },
  {
    id: 'pickai',
    tier: 'tool',
    visibility: 'public',
    repo: gh('pickai'),
    commits: 93,
    problem:
      "models.dev lists roughly 2,200 model identities, and most people pick the one name they have heard of. pickai takes a project's hard rules and what matters this week, then returns a short ordered list worth testing, with the reasoning attached.",
    hard: [
      'joining benchmark scores to catalog IDs mostly fails, which killed the planned built-in quality score.',
    ],
    screens: [
      {
        kind: 'capture',
        src: '/showcase/pickai/decision.png',
        alt: 'pickai with two capability rules applied, 854 of 1,738 models passing, ordered by rating',
        tag: 'rule rail · results table',
        frame: 'desktop',
        live: true,
        tilt: 1.5,
      },
      {
        kind: 'capture',
        src: '/showcase/pickai/model-panel.png',
        alt: 'One model expanded in pickai, showing scores with vote counts, capabilities, prices, and dates',
        tag: 'per-model panel',
        frame: 'detail',
        tilt: -2.5,
      },
    ],
  },
  {
    id: 'ai-consensus',
    tier: 'tool',
    visibility: 'public',
    repo: gh('ai-consensus'),
    live: [{ label: 'live', href: 'https://ai-consensus.niftymonkey.dev' }],
    commits: 79,
    problem:
      "One model's answer is one opinion. This sends a question to several models at once, lets them read each other and refine over rounds, and has an evaluator model decide when they have converged.",
    hard: [
      'making 200-plus OpenRouter models behave alike, and letting a user stop several streams mid-round.',
    ],
    screens: [
      {
        kind: 'capture',
        src: '/showcase/ai-consensus/run.png',
        alt: 'A run in progress: round 1 evaluating, three models answering the same question',
        tag: 'a run in progress',
        frame: 'desktop',
        live: true,
        tilt: -1.5,
      },
    ],
  },
  {
    id: 'niftymonkey.dev',
    tier: 'tool',
    visibility: 'public',
    repo: gh('niftymonkey.dev'),
    live: [{ label: 'live', href: 'https://niftymonkey.dev' }],
    commits: 78,
    problem:
      'My personal site. I want to be easier to learn from without becoming a content creator. It lists my projects as a terminal directory listing and holds a notebook of engineering writing worth keeping.',
    hard: [
      'a notebook that is a library, not a blog: superseded entries stay up with a forward pointer, and the banner reads as integrity, not a warning.',
    ],
    screens: [
      {
        kind: 'capture',
        src: '/showcase/niftymonkey-dev/home.png',
        alt: 'The niftymonkey.dev homepage: a whoami line and a directory listing of projects with permission strings',
        tag: 'ls -la ./projects/',
        frame: 'desktop',
        live: true,
        tilt: 1.5,
      },
      {
        kind: 'capture',
        src: '/showcase/niftymonkey-dev/notebook.png',
        alt: 'A notebook entry with two rated evidence cards and the contents rail',
        tag: 'a notebook entry',
        frame: 'detail',
        tilt: -2.5,
      },
    ],
  },
  {
    id: 'costs-portal',
    tier: 'tool',
    visibility: 'private',
    commits: 64,
    problem:
      '"What did this project cost me this month" used to mean checking five dashboards. This pulls Anthropic, OpenAI, OpenRouter, and the flat-fee SaaS tail into one project-first view on your own machine.',
    hard: [
      'storing provider admin keys locally without a cloud KMS, and making three billing shapes comparable.',
    ],
    screens: [
      {
        kind: 'capture',
        src: '/showcase/costs-portal/dashboard.png',
        alt: 'The costs-portal dashboard for one month: total, daily average, trend, project cards with sparklines, and the watchman and long arc panels',
        tag: 'dashboard · watchman',
        frame: 'desktop',
        live: true,
        tilt: -1.5,
      },
      {
        kind: 'capture',
        src: '/showcase/costs-portal/project.png',
        alt: "One project's detail page: this month's composition, six months of spend by source, and the SKU table",
        tag: 'project detail',
        frame: 'detail',
        tilt: 2.5,
      },
    ],
  },
  {
    id: 'review-kit',
    tier: 'tool',
    visibility: 'private',
    commits: 51,
    problem:
      'People forget what they did all year and then write a performance review from memory. ReviewKit captures accomplishments by voice or text as they happen, then turns the pile into goal-aligned review content.',
    hard: ['top-scoring models failed to return valid JSON, so the project grew a real eval funnel.'],
    screens: [
      {
        kind: 'capture',
        src: '/showcase/review-kit/landing.png',
        alt: 'The ReviewKit landing page: a title, a tagline, and a coming soon button',
        tag: 'landing page',
        frame: 'desktop',
        tilt: 1.5,
      },
      {
        kind: 'capture',
        src: '/showcase/review-kit/capture.png',
        alt: 'The ReviewKit recording overlay mid-recording: a live waveform, the timer at fourteen seconds, the transcript so far, and the stop button',
        tag: 'capture',
        frame: 'phone',
        live: true,
        tilt: -3,
      },
    ],
  },
  {
    id: 'idea-vault',
    tier: 'small',
    visibility: 'private',
    live: [{ label: 'live', href: 'https://idea-vault.niftymonkey.dev' }],
    commits: 41,
    problem:
      'App ideas start as a braindump and end as scattered text. This stores them in a structure you can scan, keep updating, and export as a build-ready prompt. The hard part was two encryption schemes with opposite trust assumptions in one app.',
    hard: [],
    screens: [
      {
        kind: 'capture',
        src: '/showcase/idea-vault/wizard.png',
        alt: 'The guided refine wizard on the Problem step, with an AI suggestion open under the editor',
        tag: 'refine wizard',
        frame: 'desktop',
        tilt: -1.5,
      },
    ],
  },
  {
    id: 'session-scribe',
    tier: 'small',
    visibility: 'public',
    repo: gh('session-scribe'),
    commits: 26,
    problem:
      'A D&D group finishes a session with a Teams transcript and a dice log and no record anyone wants to read. This turns both into a scene-by-scene narrative recap. A four-hour transcript will not fit one prompt, so generation runs in three passes.',
    hard: [],
    screens: [
      {
        kind: 'capture',
        src: '/showcase/session-scribe/generation.png',
        alt: 'Session Scribe mid-generation: extraction on scene 4 of 5, elapsed time, and the activity log',
        tag: 'generation in flight',
        frame: 'desktop',
        tilt: 1.5,
      },
    ],
  },
  {
    id: 'tool-radar',
    tier: 'small',
    visibility: 'public',
    repo: gh('tool-radar'),
    commits: 20,
    problem:
      'A hand-kept file of default tools went stale and got deleted. This is a catalog that refreshes itself: a weekly scheduled agent runs a written runbook and opens a PR. There is no UI. The showable artifacts are files.',
    hard: [],
    screens: [
      {
        kind: 'capture',
        src: '/showcase/tool-radar/radar.png',
        alt: 'The Tool Radar: 98 tools plotted on adopt, trial, assess, and hold rings across 23 areas',
        tag: 'the radar',
        frame: 'desktop',
        tilt: -1,
      },
    ],
  },
  {
    id: 'tts-bake-off',
    tier: 'small',
    visibility: 'public',
    repo: gh('tts-bake-off'),
    commits: 15,
    problem:
      'Picking a text-to-speech voice by reading spec sheets does not work. This renders one line across eight engines, local and cloud, so the choice gets made by ear. The engines cannot share a Python interpreter, so each gets its own warm worker.',
    hard: [],
    screens: [
      {
        kind: 'render',
        alt: 'say.py timed four times in a terminal: kokoro cold and warm, then omnivoice cold and warm',
        tag: 'say.py in a terminal',
        frame: 'desktop',
        tilt: 1,
        lines: [
          {
            cmd: 'time say.py --engine kokoro "Fifteen projects in a year. This one taught the rest of them to talk."',
          },
          { out: 'real    0m6.66s' },
          {
            cmd: 'time say.py --engine kokoro "Fifteen projects in a year. This one taught the rest of them to talk."',
          },
          { out: 'real    0m2.52s' },
          {
            cmd: 'time say.py --engine omnivoice "Fifteen projects in a year. This one taught the rest of them to talk."',
          },
          { out: 'real    0m36.00s' },
          {
            cmd: 'time say.py --engine omnivoice "Fifteen projects in a year. This one taught the rest of them to talk."',
          },
          { out: 'real    0m1.68s' },
        ],
      },
    ],
  },
];
