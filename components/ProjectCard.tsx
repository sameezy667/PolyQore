import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { Project } from '../types';
import { useNavigate } from 'react-router-dom';

interface ProjectCardProps {
  project: Project;
  index: number;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(`/project/${project.id}`);
    window.scrollTo(0, 0);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group cursor-pointer flex flex-col gap-3 relative"
      onClick={handleCardClick}
    >
      {/* Image Container - Sharp edges, subtle brightness hover */}
      <div className="relative w-full aspect-[4/3] overflow-hidden bg-neutral-900">
        <div className="absolute inset-0 bg-neutral-800 animate-pulse" />
        <img
          src={project.thumbnailUrl}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 opacity-80 group-hover:opacity-100"
          loading="lazy"
        />
        
        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
        
        {/* Category Tag overlay on image */}
        <div className="absolute top-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
             <span className="bg-black/80 backdrop-blur-sm text-white text-[10px] uppercase tracking-widest px-2 py-1 border border-white/20">
                {project.category}
             </span>
        </div>

        {/* Arrow Icon */}
        <div className="absolute top-4 right-4 translate-x-4 -translate-y-4 opacity-0 group-hover:translate-x-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
            <div className="bg-white text-black p-2">
                <ArrowUpRight className="w-4 h-4" />
            </div>
        </div>
      </div>

      {/* Brutalist Text Content */}
      <div className="flex justify-between items-start pt-2 border-t border-neutral-800 group-hover:border-neutral-600 transition-colors">
        <div className="max-w-[80%]">
             <span className="text-[10px] text-neutral-500 mb-1 block uppercase tracking-widest">
                0{index + 1} / {project.createdAt.split('-')[0]}
             </span>
            <h3 className="text-lg font-bold text-white uppercase tracking-tight leading-none group-hover:text-neutral-300 transition-colors">
            {project.title}
            </h3>
        </div>
        
        <div className="flex gap-1">
             {project.tags.slice(0, 1).map(tag => (
                 <span key={tag} className="text-[10px] text-neutral-500 uppercase border border-neutral-800 px-1.5 py-0.5">
                    {tag}
                 </span>
             ))}
        </div>
      </div>
    </motion.div>
  );
};