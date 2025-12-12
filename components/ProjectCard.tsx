import { Project } from '@/config/projects.config';

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="border border-terminal-gray bg-terminal-dark rounded-lg overflow-hidden hover:border-terminal-cyan transition-colors">
      {/* Terminal window header */}
      <div className="bg-terminal-gray/20 px-4 py-2 flex items-center gap-2 border-b border-terminal-gray">
        <div className="flex gap-2">
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
        </div>
        <span className="text-terminal-gray text-xs ml-2">describe.sh --project {project.id}</span>
      </div>

      {/* Terminal content */}
      <div className="p-6">
        <h3 className="text-xl text-terminal-green mb-2 font-bold">
          {project.name}
        </h3>

        <p className="text-foreground mb-4 leading-relaxed">
          {project.description}
        </p>

        {/* Tech stack badges */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tech.map((tech) => (
            <span
              key={tech}
              className="text-xs px-2 py-1 bg-terminal-dark border border-terminal-gray text-terminal-amber rounded"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Status and link */}
        <div className="flex items-center justify-between">
          <span className="text-xs text-terminal-gray">
            status: <span className="text-terminal-green">{project.status}</span>
          </span>
          <a
            href={project.url}
            className="text-terminal-cyan hover:text-terminal-green hover:underline transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            Visit Project →
          </a>
        </div>
      </div>
    </div>
  );
}
