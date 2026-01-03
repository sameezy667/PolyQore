import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ArrowUpRight } from 'lucide-react';
import { PROJECTS } from '../constants';
import { TextScramble } from '../components/TextScramble';

export const ProjectDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const project = PROJECTS.find(p => p.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!project) return null;

  return (
    <div className="min-h-screen bg-black text-offwhite pt-32 pb-20">
        {/* Nav */}
        <nav className="fixed top-0 w-full z-40 px-6 py-6 mix-blend-difference flex justify-between uppercase tracking-widest text-xs font-bold">
            <Link to="/" className="flex items-center gap-2 hover:text-neutral-400">
                <ArrowLeft className="w-4 h-4" /> BACK
            </Link>
            <span>{project.id} // {project.title}</span>
        </nav>

        <div className="px-6 md:px-12">
            {/* Header */}
            <div className="border-b border-border pb-12 mb-12">
                <div className="flex flex-col md:flex-row gap-8 justify-between items-end">
                    <h1 className="text-6xl md:text-9xl font-bold uppercase tracking-tighter leading-[0.85]">
                        <TextScramble text={project.title} speed={0.5} />
                    </h1>
                    <div className="flex gap-4">
                        <a 
                            href={project.deploymentLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-6 py-3 border border-border hover:bg-offwhite hover:text-black transition-colors text-xs uppercase tracking-widest font-bold flex items-center gap-2"
                        >
                            View Live <ArrowUpRight className="w-4 h-4" />
                        </a>
                        {/* GitHub links intentionally removed from UI - deployment links remain */}
                    </div>
                </div>
                <div className="mt-8 flex gap-4 text-xs uppercase tracking-widest text-neutral-500">
                    {project.tags.map(tag => (
                        <span key={tag}>#{tag}</span>
                    ))}
                </div>
            </div>

            {/* Image */}
            <div className="w-full aspect-video bg-neutral-900 mb-24 overflow-hidden border border-border">
                <img 
                    src={project.thumbnailUrl} 
                    alt="Project Hero"
                    className="w-full h-full object-cover opacity-80"
                />
            </div>

            {/* Content Grid */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-12 border-b border-border pb-24">
                <div className="md:col-span-4 space-y-12">
                     <div>
                        <h3 className="text-xs text-neutral-500 uppercase tracking-widest mb-4">Description</h3>
                        <p className="text-lg leading-relaxed text-neutral-300">
                            {project.description}
                        </p>
                     </div>
                     <div>
                        <h3 className="text-xs text-neutral-500 uppercase tracking-widest mb-4">Category</h3>
                        <p className="text-lg uppercase">{project.category}</p>
                     </div>
                </div>

                <div className="md:col-span-1 border-r border-border hidden md:block"></div>

                <div className="md:col-span-7">
                    <h3 className="text-xs text-neutral-500 uppercase tracking-widest mb-8">Process Log</h3>
                    <div className="space-y-0">
                        {project.functioning.map((step, i) => (
                            <div key={i} className="group border-t border-border py-8 hover:bg-neutral-900/50 transition-colors px-4 -mx-4">
                                <div className="flex items-baseline gap-8">
                                    <span className="text-xs font-mono text-neutral-600">0{step.step}</span>
                                    <div>
                                        <h4 className="text-2xl font-bold uppercase mb-2 group-hover:text-white transition-colors">
                                            <TextScramble text={step.title} hover={true} trigger={false} />
                                        </h4>
                                        <p className="text-neutral-400 max-w-md">{step.description}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
};