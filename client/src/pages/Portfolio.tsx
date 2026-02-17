import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProjectCard from "@/components/ProjectCard";
import { useProjects } from "@/hooks/use-projects";
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";
import { motion } from "framer-motion";

export default function Portfolio() {
  const { data: projects, isLoading } = useProjects();
  const [filter, setFilter] = useState("All");

  const categories = ["All", "Residential", "Commercial", "Custom"];
  
  const filteredProjects = filter === "All" 
    ? projects 
    : projects?.filter(p => p.category === filter);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Header */}
      <div className="pt-32 pb-12 md:pt-48 md:pb-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <span className="text-primary text-xs font-bold tracking-widest uppercase mb-4 block">Our Work</span>
            <h1 className="font-display text-4xl md:text-6xl font-medium text-foreground">Selected Projects</h1>
          </motion.div>
        </div>
      </div>

      {/* Filter & Grid */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          
          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {categories.map((cat) => (
              <Button
                key={cat}
                variant={filter === cat ? "default" : "outline"}
                onClick={() => setFilter(cat)}
                className={`rounded-full px-6 uppercase tracking-widest text-xs h-10 transition-all duration-300 ${
                  filter === cat 
                    ? "bg-foreground text-background hover:bg-foreground/90" 
                    : "border-border text-muted-foreground hover:border-primary hover:text-primary bg-transparent"
                }`}
              >
                {cat}
              </Button>
            ))}
          </div>

          {isLoading ? (
            <div className="flex justify-center items-center h-64">
              <Loader2 className="w-8 h-8 animate-spin text-primary" />
            </div>
          ) : (
            <motion.div 
              layout
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {filteredProjects?.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </motion.div>
          )}

          {!isLoading && filteredProjects?.length === 0 && (
            <div className="text-center py-24 text-muted-foreground">
              <p>No projects found in this category.</p>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}
