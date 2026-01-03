import React from 'react';
import { Link } from 'react-router-dom';
import { useProjects } from '../hooks/useProjects';
import { TextScramble } from '../components/TextScramble';
import { ArrowDownRight } from 'lucide-react';

export const Home: React.FC = () => {
  const { projects } = useProjects();

  return (
    <div className="min-h-screen bg-black text-offwhite pt-32 pb-20">
      
      {/* Brutalist Header */}
      <header className="px-6 md:px-12 mb-24 md:mb-40 border-b border-border pb-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-end">
          <div className="md:col-span-8">
              <h1 className="text-[14vw] leading-[0.8] font-bold uppercase tracking-tighter">
              <TextScramble text="POLYQORE" speed={0.3} />
            </h1>
          </div>
          <div className="md:col-span-4 flex flex-col justify-end text-sm md:text-base font-medium uppercase tracking-widest text-neutral-400 space-y-2">
            <div className="flex justify-between border-b border-border pb-2">
              <span>EST.</span>
              <span>2024</span>
            </div>
            <div className="flex justify-between border-b border-border pb-2">
              <span>LOC.</span>
              <span>GLOBAL</span>
            </div>
            <div className="flex justify-between pt-2">
              <span>STATUS</span>
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                ONLINE
              </span>
            </div>
          </div>
        </div>
      </header>

      {/* Work List */}
      <main className="px-6 md:px-12">
        <div className="flex items-center gap-4 mb-8 text-xs uppercase tracking-widest text-neutral-500">
          <ArrowDownRight className="w-4 h-4" />
          <span>Selected Works (0{projects.length})</span>
        </div>

        <div className="border-t border-border">
          {projects.map((project, index) => (
            <Link 
              key={project.id} 
              to={`/project/${project.id}`}
              className="group relative grid grid-cols-1 md:grid-cols-12 border-b border-border py-12 md:py-20 transition-colors hover:bg-neutral-900/30"
            >
              {/* Index */}
              <div className="md:col-span-1 text-xs text-neutral-500 mb-4 md:mb-0">
                (0{index + 1})
              </div>

              {/* Title (Scrambles on Hover) */}
              <div className="md:col-span-6 relative z-10">
                <h2 className="text-4xl md:text-7xl font-bold uppercase tracking-tight">
                  <TextScramble 
                    text={project.title} 
                    trigger={false} 
                    hover={true} 
                    className="block group-hover:text-offwhite transition-colors"
                  />
                </h2>
                <div className="mt-4 flex gap-2">
                  {project.tags.slice(0, 2).map(tag => (
                    <span key={tag} className="text-xs border border-border px-2 py-1 uppercase tracking-widest text-neutral-400">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Category & Year */}
              <div className="md:col-span-2 hidden md:flex flex-col justify-between text-xs uppercase tracking-widest text-neutral-500 h-full">
                <span>{project.category}</span>
                <span>{project.createdAt.split('-')[0]}</span>
              </div>

              {/* Hover Image (Reveals on Hover) */}
              <div className="md:col-span-3 absolute md:static right-0 top-0 h-full w-full md:w-auto pointer-events-none opacity-0 group-hover:opacity-40 md:group-hover:opacity-100 transition-opacity duration-500 ease-out flex items-center justify-end overflow-hidden mix-blend-screen md:mix-blend-normal">
                  <img 
                    src={project.thumbnailUrl} 
                    alt={project.title}
                    className="h-full md:h-[120%] w-full md:w-auto object-cover"
                  />
              </div>
            </Link>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="px-6 md:px-12 py-24 mt-24 border-t border-border">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end">
            <h2 className="text-[8vw] leading-none font-bold uppercase text-neutral-800 select-none">
                End of Line
            </h2>
            <div className="mt-8 md:mt-0 flex gap-8 text-sm uppercase tracking-widest">
            <a href="#" className="hover:text-offwhite text-neutral-500 transition-colors hover:underline decoration-1 underline-offset-4">Twitter</a>
            <a href="#" className="hover:text-offwhite text-neutral-500 transition-colors hover:underline decoration-1 underline-offset-4">Email</a>
          </div>
        </div>
      </footer>
    </div>
  );
};