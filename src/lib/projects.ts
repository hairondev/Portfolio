export interface ProjectStat {
  value: string;
  label: string;
}

export interface Project {
  id: number;
  slug: string;
  title: string;
  type: string;
  role: string;
  tech: string[];
  description: string;
  overview: string;
  architecture: string;
  implementation: string;
  stats: ProjectStat[];
  accent: string;
  myRole: string[];
  images: string[];
  hoverImage: string;
  github: string;
  liveUrl: string;
  digitalBadge?: string;
}

const projects: Project[] = [
  {
    id: 1,
    slug: 'actualizacion-docente',
    title: 'Actualización Docente',
    type: 'Teacher Registration Platform',
    role: 'Full Stack Developer',
    tech: ['Laravel', 'Python', 'FastAPI', 'MySQL'],
    description:
      'A teacher-registration platform adopted as the Universidad Tecnológica de la Mixteca’s official system in 2025, with more than 100 educators enrolled in its first edition.',
    overview:
      'A digital platform for managing teacher registration, course enrollment, and progress. It replaced a manual process with a system built around the university’s academic workflow.',
    architecture:
      'A React and Laravel frontend communicates with modular REST APIs built with Python and FastAPI. MySQL stores registration and course progress data.',
    implementation:
      'Developed APIs for registration, enrollment, and progress tracking, connected the frontend to the backend, and used findings from an independent usability evaluation to identify friction in the course-enrollment workflow. An external team evaluated the platform with five active teachers; only 20% completed the enrollment task successfully.',
    stats: [
      { value: '100+', label: 'Educators in first edition' },
      { value: '2025', label: 'Adopted as official system' },
      { value: '3', label: 'Core academic workflows' },
    ],
    accent: '#D99A42',
    myRole: [
      'Led development of the teacher-registration platform.',
      'Built modular REST APIs with Python and FastAPI for registration, enrollment, and progress tracking.',
      'Connected a React and Laravel frontend to the Python backend and MySQL database.',
      'Used findings from an independent usability evaluation with five teachers to identify friction in the course-enrollment workflow.',
    ],
    images: ['/Projects/actualizacion_docente/login.png', '/Projects/actualizacion_docente/dashboard.png', '/Projects/actualizacion_docente/course.png'],
    hoverImage: '/Projects/actualizacion_docente/login.png',
    github: 'https://github.com/DaveRomel/actualizacion_docente',
    liveUrl: 'https://actualizacion_docente.utm.mx/',
  },
  {
    id: 2,
    slug: 'clearing',
    title: 'Clearing',
    type: 'Privacy-Focused Outdoor Exploration App',
    role: 'Mobile and Backend Developer',
    tech: ['Flutter', 'PWA', 'FastAPI', 'SQLite', 'Gemma'],
    description:
      'An outdoor exploration app that reveals map areas as people explore and verifies location-based photos with a locally run Gemma vision model.',
    overview:
      'Clearing encourages outdoor exploration through location-based discovery. Users reveal areas of a map by visiting places and taking photos, while image and location processing stays on a local backend.',
    architecture:
      'A Flutter progressive web app connects to a FastAPI backend running locally on a computer, with SQLite for data storage. The backend uses a locally run Gemma vision model to validate submitted photos; images and precise coordinates are not sent to a remote service.',
    implementation:
      'Connected photo validation and location data to the exploration flow. Ran the FastAPI backend and Gemma locally on a computer so submitted images and precise coordinates could be processed without a remote service.',
    stats: [
      { value: 'Local', label: 'Photo and location processing' },
      { value: 'Gemma', label: 'Locally run vision model' },
      { value: 'PWA', label: 'Flutter experience' },
    ],
    accent: '#6F9A68',
    myRole: [
      'Built the Flutter exploration experience as a progressive web app.',
      'Integrated a local FastAPI backend and SQLite database.',
      'Used a locally run Gemma vision model to verify exploration photos.',
      'Kept image and precise location processing local to support user privacy.',
    ],
    images: ['/Projects/clearing/welcome.PNG', '/Projects/clearing/problem.PNG', '/Projects/clearing/solution.PNG', '/Projects/clearing/register.PNG', '/Projects/clearing/challenge-active.PNG', '/Projects/clearing/challenge-completed.PNG', '/Projects/clearing/maps.PNG', '/Projects/clearing/journal.PNG', '/Projects/clearing/journal-entry.PNG'],
    hoverImage: '/Projects/clearing.svg',
    github: 'https://github.com/hairondev/cleaning_app',
    liveUrl: 'https://dev.to/hairon/clearing-an-outdoor-photo-journal-powered-by-local-gemma-59ok',
  },
  {
    id: 3,
    slug: 'plugcheck',
    title: 'PlugCheck',
    type: 'Minecraft Plugin Compatibility Checker',
    role: 'Full Stack Developer',
    tech: ['Next.js', 'TypeScript', 'Tailwind CSS', 'JSZip', 'Upstash Redis', 'Hangar API', 'Spiget API', 'Modrinth API'],
    description:
      'A web tool that checks Minecraft plugin compatibility across Hangar, SpigotMC, and Modrinth, including browser-side JAR inspection.',
    overview:
      'PlugCheck helps server owners compare a plugin’s supported versions with their chosen Minecraft version and platform. Results distinguish compatible, incompatible, unknown, and abandoned projects.',
    architecture:
      'A Next.js and TypeScript application queries Hangar, Spiget, and Modrinth. JSZip extracts plugin metadata in the browser, while Upstash Redis caches registry responses.',
    implementation:
      'Compatibility results account for differences between registries: Hangar and Modrinth provide Minecraft version data for comparison, while Spiget marks a found plugin as compatible because it provides no equivalent version data. “Unknown” means no exact match was found or a registry query failed; it does not mean incompatible. Projects are marked abandoned when their GitHub repository is archived or has had no activity for over 18 months; Spiget uses the resource’s last update date. JAR files remain in the browser, and only extracted metadata is sent to the API.',
    stats: [
      { value: '3', label: 'Plugin registries' },
      { value: 'Local', label: 'JAR parsing in browser' },
      { value: '73', label: 'Automated tests' },
    ],
    accent: '#88A649',
    myRole: [
      'Built the checker with Next.js and TypeScript.',
      'Integrated Hangar, Spiget, and Modrinth APIs to retrieve plugin metadata.',
      'Parsed JAR files in the browser and sent only extracted metadata to the API.',
      'Added Redis caching and 73 automated tests covering source resolution, unknown results, conflict detection, caching, and the Hangar, Spiget, and Modrinth clients.',
    ],
    images: ['/Projects/plugcheck/home.png', '/Projects/plugcheck/results.png'],
    hoverImage: '/Projects/plugcheck/home.png',
    github: 'https://github.com/hairondev/plugcheck',
    liveUrl: '',
  },
  {
    id: 4,
    slug: 'echoworld',
    title: 'EchoWorld',
    type: 'AI-Powered Narrative Adventure',
    role: 'Full Stack Developer',
    tech: ['React', 'Vite', 'Tailwind CSS', 'Node.js', 'Express', 'Socket.IO', 'Azure OpenAI', 'Azure AI Search', 'MongoDB Atlas'],
    description:
      'An adaptive narrative adventure that generates story scenes and choices from player decisions, grounded in the game’s world lore.',
    overview:
      'EchoWorld is a dark-fantasy adventure where an AI model generates narration and three choices from the current scene and the player’s decision. The model can improvise while using world lore and recent events to maintain narrative continuity.',
    architecture:
      'The React and Vite client sends player choices over Socket.IO to a Node.js and Express game engine, which manages each game as a session. The engine validates choices against the current scene and asks a narrative orchestrator to generate the next one. The orchestrator retrieves lore from Azure AI Search and includes it in prompts to Azure OpenAI. A scene counter sets each arc to ten scenes: the opening scene counts as the first, each choice increments the counter, and the final scene has no choices.',
    implementation:
      'The narrative orchestrator builds each search query from the current scene, the player’s choice, and the two most recent narrations, retrieves up to three lore passages, and combines them with decision history for the next prompt. The game engine keeps decisions and scenes in the active session in memory; MongoDB stores a session summary when a game ends or a disconnect is detected, so in-progress games cannot be resumed. Generated scenes are validated to contain three choices, while final scenes must contain none; fallback scenes keep the game moving if generation or validation fails.',
    stats: [
      { value: '10', label: 'Scenes per story arc' },
      { value: 'RAG', label: 'Lore-grounded generation' },
      { value: 'Live', label: 'Socket.IO game updates' },
    ],
    accent: '#8967B2',
    myRole: [
      'Built the adaptive narrative game flow with React, Node.js, Express, and Socket.IO.',
      'Integrated Azure OpenAI with Azure AI Search to ground generated scenes in world knowledge.',
      'Stored player sessions and story history in MongoDB Atlas.',
      'Developed the project for Microsoft Agents League, AI Skills Fest 2026.',
    ],
    images: ['/Projects/echoworld/menu.png', '/Projects/echoworld/choices.png', '/Projects/echoworld/storyend.png', '/Projects/echoworld/finish.png'],
    hoverImage: '/Projects/echoworld/menu.png',
    github: 'https://github.com/hairondev/EchoWorld',
    liveUrl: '',
    digitalBadge: '/Projects/echoworld/digitalBadge.png',
  },
    {
    id: 5,
    slug: 'usalab-website',
    title: 'UsaLab Website',
    type: 'Usability Lab Website',
    role: 'Web Developer',
    tech: ['Web Development', 'Usability', 'Human-Computer Interaction', 'FastAPI', 'Laravel', 'MySQL'],
    description:
      'The public website for UsaLab, the Universidad Tecnológica de la Mixteca’s usability and human-computer interaction laboratory.',
    overview:
      'A website introducing UsaLab’s usability work, services, research, events, and team, with information for organizations interested in user-centered design and testing.',
    architecture:
      'The Laravel frontend connects to a modular FastAPI backend. API routes handle users, projects, and contacts; models represent persisted data, and schemas define request and response payloads. The backend also includes authentication, database access, CORS configuration, and an email service.',
    implementation:
      'Implemented the FastAPI structure and modules for users, projects, and contacts, integrating authentication, database persistence, CORS, and email delivery. Also prepared and deployed the Laravel frontend to the university’s servers.',
    stats: [
      { value: 'UTM', label: 'University laboratory' },
      { value: 'HCI', label: 'Research focus' },
      { value: 'UX', label: 'Usability services' },
    ],
    accent: '#4E9C9A',
    myRole: [
      'Developed the FastAPI backend, including routes, models, schemas, database connection, authentication, CORS, and email delivery.',
      'Deployed the Laravel frontend to the university’s servers and configured it for the hosting environment.',
    ],
    images: ['/Projects/usalab/home.png', '/Projects/usalab/proyectos.png', '/Projects/usalab/instalaciones.png', '/Projects/usalab/concursos.png'],
    hoverImage: '/Projects/usalab/home.png',
    github: '',
    liveUrl: 'https://www.usalab.com.mx/',
  },
];
export function getAllProjects(): Project[] {
  return projects;
}
export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
export function getAdjacentProjects(slug: string): { prev?: Project; next?: Project } {
  const idx = projects.findIndex((p) => p.slug === slug);
  if (idx === -1) return {};
  return {
    prev: projects[(idx - 1 + projects.length) % projects.length],
    next: projects[(idx + 1) % projects.length],
  };
}
