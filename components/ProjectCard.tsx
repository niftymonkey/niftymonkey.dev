import { Project } from '@/config/projects.config';

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <a
      href={project.url}
      target="_blank"
      rel="noopener noreferrer"
      className="block hover:bg-terminal-gray/10 py-3 px-2 border-b border-terminal-gray/20 last:border-0 group"
    >
      <div className="flex items-center gap-4 mb-1">
        <span className="text-terminal-gray text-xs w-20 shrink-0">
          {project.status === 'live' && 'drwxr-xr-x'}
          {project.status === 'beta' && 'drwxr--r--'}
          {project.status === 'development' && 'drw-------'}
        </span>
        <span className="text-terminal-cyan group-hover:text-terminal-green font-bold">
          {project.id}/
        </span>
        <span className={`text-xs px-2 py-0.5 ml-auto ${
          project.status === 'live' ? 'text-terminal-green' :
          project.status === 'beta' ? 'text-terminal-cyan' :
          'text-terminal-amber'
        }`}>
          [{project.status}]
        </span>
      </div>
      <div className="ml-24 text-foreground text-sm mb-1">{project.description}</div>
      <div className="ml-24 text-terminal-amber text-xs">
        {project.tech.join(' | ')}
      </div>
    </a>
  );
}
