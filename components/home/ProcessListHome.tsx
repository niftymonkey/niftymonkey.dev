'use client';

import { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import { projects, Project } from '@/config/projects.config';

const sortedProjects = [...projects].sort((a, b) => a.name.localeCompare(b.name));

type SortKey = 'name' | 'status' | 'tech';
type SortDir = 'asc' | 'desc';

function fakePid(id: string): number {
  let hash = 0;
  for (let i = 0; i < id.length; i++) hash = ((hash << 4) - hash + id.charCodeAt(i)) | 0;
  return (Math.abs(hash) % 99000) + 1000;
}

function statusToState(status: Project['status']): { char: string; label: string } {
  switch (status) {
    case 'live': return { char: 'R', label: 'running' };
    case 'beta': return { char: 'T', label: 'testing' };
    case 'development': return { char: 'B', label: 'building' };
  }
}

function statusColor(status: Project['status']): string {
  switch (status) {
    case 'live': return 'text-htop-green';
    case 'beta': return 'text-htop-cyan';
    case 'development': return 'text-htop-yellow';
  }
}

const ASCII_HEADER = `        _  __ _                               _                   _
  _ __ (_)/ _| |_ _   _ _ __ ___   ___  _ __ | | _____ _   _   __| | _____   __
 | '_ \\| | |_| __| | | | '_ \` _ \\ / _ \\| '_ \\| |/ / _ \\ | | | / _\` |/ _ \\ \\ / /
 | | | | |  _| |_| |_| | | | | | | (_) | | | |   <  __/ |_| || (_| |  __/\\ V /
 |_| |_|_|_|  \\__|\\__, |_| |_| |_|\\___/|_| |_|_|\\_\\___|\\__, (_)__,_|\\___| \\_/
                  |___/                                |___/`;

export function ProcessListHome() {
  const [sortKey, setSortKey] = useState<SortKey>('name');
  const [sortDir, setSortDir] = useState<SortDir>('asc');
  const [tickedIn, setTickedIn] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setTickedIn(true), 800);
    return () => clearTimeout(timer);
  }, []);

  const toggleSort = useCallback((key: SortKey) => {
    if (sortKey === key) {
      setSortDir((d) => (d === 'asc' ? 'desc' : 'asc'));
    } else {
      setSortKey(key);
      setSortDir(key === 'name' ? 'asc' : 'desc');
    }
  }, [sortKey]);

  const sorted = [...sortedProjects].sort((a, b) => {
    const dir = sortDir === 'asc' ? 1 : -1;
    switch (sortKey) {
      case 'name': return dir * a.name.localeCompare(b.name);
      case 'status': return dir * a.status.localeCompare(b.status);
      case 'tech': return dir * (a.tech.length - b.tech.length);
    }
  });

  const running = sortedProjects.filter(p => p.status === 'live').length;
  const testing = sortedProjects.filter(p => p.status === 'beta').length;
  const building = sortedProjects.filter(p => p.status === 'development').length;

  const SortHeader = ({ label, sortKeyVal }: { label: string; sortKeyVal: SortKey }) => (
    <button
      onClick={() => toggleSort(sortKeyVal)}
      className={`text-left hover:text-htop-green transition-colors ${sortKey === sortKeyVal ? 'text-htop-green' : 'text-htop-muted'}`}
    >
      {label}
      {sortKey === sortKeyVal && (
        <span className="ml-0.5">{sortDir === 'asc' ? '\u25b2' : '\u25bc'}</span>
      )}
    </button>
  );

  return (
    <div className="min-h-screen bg-htop-bg text-htop-text font-mono">
      <main className="max-w-5xl mx-auto px-6 pt-8 pb-24">
        <div className="flex flex-col lg:flex-row gap-8 mb-10">
          <pre className="text-htop-cyan text-xs leading-tight shrink-0 hidden md:block">{ASCII_HEADER}</pre>
          <h1 className="text-htop-cyan text-xl font-bold md:hidden">niftymonkey.dev</h1>
          <div className="text-base space-y-1.5">
            <div>
              <span className="text-htop-blue">Role:</span>{' '}
              <span className="text-htop-text">Software Engineer</span>
            </div>
            <div>
              <span className="text-htop-blue">Interests:</span>{' '}
              <span className="text-htop-text">AI, Observability, Automation</span>
            </div>
            <div>
              <span className="text-htop-blue">Tasks:</span>{' '}
              <span className="text-htop-text">{projects.length} total, </span>
              <span className="text-htop-green">{running} running</span>
              <span className="text-htop-text">, </span>
              <span className="text-htop-cyan">{testing} testing</span>
              <span className="text-htop-text">, </span>
              <span className="text-htop-yellow">{building} building</span>
            </div>
            <div className="flex gap-4 pt-2">
              <a
                href="https://github.com/niftymonkey"
                target="_blank"
                rel="noopener noreferrer"
                className="text-htop-cyan hover:text-htop-green transition-colors"
              >
                [github]
              </a>
              <Link href="/philosophy" className="text-htop-cyan hover:text-htop-green transition-colors">
                [philosophy]
              </Link>
            </div>
          </div>
        </div>

        <div className="border border-htop-muted/30 rounded overflow-hidden">
          <div className="grid grid-cols-[60px_1fr_100px_60px] gap-4 px-4 py-2.5 bg-htop-surface text-sm font-bold border-b border-htop-muted/30 min-w-[550px]">
            <span className="text-htop-muted">PID</span>
            <SortHeader label="COMMAND" sortKeyVal="name" />
            <SortHeader label="STATE" sortKeyVal="status" />
            <SortHeader label="DEPS" sortKeyVal="tech" />
          </div>

          {sorted.map((project) => {
            const pid = fakePid(project.id);
            const state = statusToState(project.status);

            return (
              <a
                key={project.id}
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="grid grid-cols-[60px_1fr_100px_60px] gap-4 px-4 py-3 text-sm hover:bg-htop-surface/80 transition-colors border-b border-htop-muted/10 last:border-0 min-w-[550px]"
                style={{
                  opacity: tickedIn ? 1 : 0,
                  transition: 'opacity 0.8s ease-out',
                }}
              >
                <span className="text-htop-muted">{pid}</span>
                <div className="min-w-0">
                  <span className="text-htop-green font-bold">{project.name}</span>
                  <span className="text-htop-muted ml-3 text-xs">
                    {project.tech.join(', ')}
                  </span>
                </div>
                <span className={statusColor(project.status)}>
                  [{state.char}] {state.label}
                </span>
                <span className="text-htop-muted text-center">{project.tech.length}</span>
              </a>
            );
          })}
        </div>
      </main>
    </div>
  );
}
