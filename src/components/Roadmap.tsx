import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Calendar, MapPin, Building2, ChevronUp } from 'lucide-react';
import { EXPERIENCE_DATA, EDUCATION_DATA } from '../constants';

const Roadmap: React.FC = () => {
  return (
    <div className="py-20 bg-tech-darker relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Professional Journey */}
        <div id="experience" className="mb-20">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Professional Roadmap</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-tech-primary to-tech-accent mx-auto rounded-full"></div>
          </motion.div>

          <div className="relative border-l-2 border-slate-800 ml-4 md:ml-1/2 space-y-12">
            {EXPERIENCE_DATA.map((job, index) => (
              <motion.div 
                key={job.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative pl-8 md:pl-0"
              >
                {/* Timeline Dot */}
                <div className="absolute top-0 -left-[9px] w-5 h-5 rounded-full bg-tech-darker border-2 border-tech-primary shadow-[0_0_10px_rgba(59,130,246,0.5)] z-10 md:left-1/2 md:-translate-x-[11px]"></div>

                <div className={`md:flex ${index % 2 === 0 ? 'md:flex-row-reverse' : 'md:flex-row'} items-start justify-between md:w-full`}>
                  
                  {/* Empty space for alternating layout */}
                  <div className="hidden md:block md:w-[calc(50%-2rem)]"></div>

                  {/* Content Card */}
                  <div className="bg-slate-900/50 border border-slate-800 hover:border-tech-primary/50 transition-colors p-6 rounded-xl md:w-[calc(50%-2rem)] group">
                    <div className="flex items-center gap-4 mb-4 border-b border-slate-800/50 pb-4">
                      {/* Logo Section */}
                      <div className="w-12 h-12 bg-white rounded-lg p-1 shrink-0 flex items-center justify-center overflow-hidden">
                        {job.logo ? (
                          <img 
                            src={job.logo} 
                            alt={`${job.company} logo`} 
                            className="w-full h-full object-contain"
                            onError={(e) => {
                              (e.target as HTMLImageElement).src = `https://ui-avatars.com/api/?name=${job.company}&background=random`;
                            }}
                          />
                        ) : (
                          <Building2 className="text-slate-800" />
                        )}
                      </div>
                      <div className="flex-1">
                         <h3 className="text-xl font-bold text-white group-hover:text-tech-primary transition-colors leading-tight">
                           {job.company}
                         </h3>
                         <div className="flex items-center text-slate-400 text-xs mt-1">
                           <MapPin size={12} className="mr-1" />
                           <span>{job.location}</span>
                         </div>
                      </div>
                    </div>

                    {/* Trajectory / Career Path Section */}
                    {job.trajectory ? (
                      <div className="mb-4 bg-slate-800/30 rounded-lg p-3 border border-slate-800">
                        <div className="text-xs text-slate-500 font-mono mb-2 uppercase tracking-wide">Career Trajectory</div>
                        <div className="relative pl-4 space-y-4 border-l border-slate-700 ml-1">
                          {job.trajectory.map((step, idx) => (
                            <div key={idx} className="relative">
                              <div className={`absolute -left-[21px] top-1.5 w-3 h-3 rounded-full border-2 ${idx === job.trajectory!.length - 1 ? 'bg-tech-primary border-tech-primary' : 'bg-slate-800 border-slate-600'}`}></div>
                              <div className={`text-sm font-semibold ${idx === job.trajectory!.length - 1 ? 'text-white' : 'text-slate-400'}`}>
                                {step.role}
                              </div>
                              {step.type === 'promotion' && (
                                <div className="text-[10px] text-tech-accent flex items-center mt-0.5">
                                  <ChevronUp size={10} className="mr-0.5" /> Promotion
                                </div>
                              )}
                            </div>
                          ))}
                        </div>
                      </div>
                    ) : (
                      <div className="mb-2">
                        <h4 className="text-lg font-semibold text-slate-200">{job.role}</h4>
                      </div>
                    )}
                    
                    <div className="flex items-center text-xs font-mono text-tech-accent bg-tech-accent/10 px-2 py-1 rounded w-fit mb-4">
                      <Calendar size={12} className="mr-1" />
                      {job.period}
                    </div>

                    <ul className="space-y-2 mb-4">
                      {job.description.map((point, i) => (
                        <li key={i} className="text-slate-400 text-sm leading-relaxed flex items-start">
                          <span className="text-tech-primary mr-2 mt-1.5">•</span>
                          {point}
                        </li>
                      ))}
                    </ul>

                    {job.skills && (
                      <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t border-slate-800/50">
                        {job.skills.map(skill => (
                          <span key={skill} className="text-xs text-slate-300 bg-slate-800 px-2 py-1 rounded-full border border-slate-700">
                            {skill}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Education Path */}
        <div id="education">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Academic Path</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-tech-glow to-tech-accent mx-auto rounded-full"></div>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {EDUCATION_DATA.map((edu, index) => (
              <motion.div 
                key={edu.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="bg-slate-900 border border-slate-800 p-6 rounded-xl hover:shadow-[0_0_30px_rgba(236,72,153,0.1)] transition-all hover:border-tech-glow/50"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-white">{edu.degree}</h3>
                    <div className="text-tech-glow font-medium">{edu.institution}</div>
                  </div>
                  <div className="bg-tech-glow/10 p-2 rounded-lg text-tech-glow">
                    <GraduationCap size={24} />
                  </div>
                </div>
                
                <div className="flex items-center text-slate-500 text-sm mb-4 font-mono">
                  <Calendar size={14} className="mr-2" />
                  {edu.period}
                </div>

                <ul className="space-y-2">
                  {edu.details.map((detail, i) => (
                    <li key={i} className="text-slate-400 text-sm flex items-start">
                      <span className="text-tech-glow mr-2 mt-1">▹</span>
                      {detail}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default Roadmap;