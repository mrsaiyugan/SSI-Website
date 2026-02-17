import { Project } from "@shared/schema";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowUpRight } from "lucide-react";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="group relative overflow-hidden"
    >
      <Link href={`/portfolio?id=${project.id}`}>
        <div className="aspect-[4/5] md:aspect-[3/4] overflow-hidden bg-muted cursor-pointer relative">
          {/* Overlay that appears on hover */}
          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 flex items-center justify-center">
             <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white transform scale-75 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-500 delay-100">
                <ArrowUpRight className="w-8 h-8" />
             </div>
          </div>
          
          <img 
            src={project.imageUrl} 
            alt={project.title} 
            className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
          />
        </div>
        
        <div className="mt-5 space-y-1">
          <p className="text-xs uppercase tracking-widest text-primary font-medium">
            {project.category}
          </p>
          <h3 className="text-xl font-display font-medium text-foreground group-hover:text-primary transition-colors">
            {project.title}
          </h3>
        </div>
      </Link>
    </motion.div>
  );
}
