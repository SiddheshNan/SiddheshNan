import React from "react";
import { projects } from "@/lib/data";
import { ExternalLink, Github } from "lucide-react";
import MotionWrapper from "./MotionWrapper";
import { motion } from "framer-motion";
import FloatingShapes, { PROJECTS_SHAPES } from "./FloatingShapes";

export default function ProjectsSection() {
  return (
    <section
      id="projects"
      className="py-20 relative cara-section section-clip-top overflow-hidden"
      style={{
        background: "linear-gradient(160deg, #1e1b4b 0%, #1e3a5f 100%)",
      }}
    >
      <FloatingShapes shapes={PROJECTS_SHAPES} />

      <div className="container max-w-4xl mx-auto px-6 md:px-4 relative z-10">
        <MotionWrapper>
          <h2 className="text-3xl font-bold mb-10 text-white">
            🚀 Projects
          </h2>
        </MotionWrapper>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {projects.map((project, index) => (
            <MotionWrapper key={project.title} delay={index * 0.1}>
              <motion.div
                className="flex flex-col h-full rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm transition-all duration-200 hover:bg-white/10 hover:border-indigo-400/30 hover:shadow-lg hover:shadow-indigo-500/10 cursor-pointer"
                whileHover={{ y: -4 }}
                onClick={() => window.open(project.github, "_blank", "noopener,noreferrer")}
              >
                <div className="flex flex-col h-full p-6">
                  {/* Title */}
                  <h3 className="text-lg font-semibold text-white mb-2 leading-snug">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-white/60 leading-relaxed line-clamp-3 flex-1 mb-4">
                    {project.description[0]}
                  </p>

                  {/* Tags */}
                  {project.tags && (
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {project.tags.slice(0, 3).map((tag: string) => (
                        <span
                          key={tag}
                          className="text-xs px-2 py-0.5 bg-indigo-500/15 border border-indigo-500/20 rounded-full text-indigo-300"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}

                  {/* Links */}
                  <div className="flex items-center gap-4 mt-auto pt-4 border-t border-white/10">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="flex items-center gap-1.5 text-xs text-white/50 hover:text-indigo-300 transition-colors"
                    >
                      <ExternalLink className="h-3 w-3" />
                      View Project
                    </a>
                    {project.github && (
                      <a
                        href={`https://github.com/SiddheshNan`}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="flex items-center gap-1.5 text-xs text-white/50 hover:text-indigo-300 transition-colors"
                      >
                        <Github className="h-3 w-3" />
                        GitHub
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            </MotionWrapper>
          ))}
        </div>
      </div>
    </section>
  );
}
