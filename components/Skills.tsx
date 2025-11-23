import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, Database, Layout, Users } from 'lucide-react';
import { SKILLS_DATA, LANGUAGES, HOBBIES } from '../constants';

const Skills: React.FC = () => {
  const getIcon = (category: string) => {
    if (category.includes('Core')) return <Database className="text-tech-primary" />;
    if (category.includes('Tech')) return <Cpu className="text-tech-accent" />;
    if (category.includes('Soft')) return <Users className="text-tech-glow" />;
    return <Layout />;
  };

  return (
    <section id="skills" className="py-20 bg-gradient-to-b from-tech-dark to-tech-darker">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Technical Arsenal</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-tech-primary via-tech-accent to-tech-glow mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {SKILLS_DATA.map((skillGroup, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-2xl p-6 hover:bg-slate-800/50 transition-colors"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-slate-800 rounded-lg">
                  {getIcon(skillGroup.category)}
                </div>
                <h3 className="text-xl font-bold text-white">{skillGroup.category}</h3>
              </div>
              
              <div className="space-y-4">
                {skillGroup.items.map((skill, i) => (
                  <div key={i} className="group">
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-slate-300 font-medium">{skill.name}</span>
                      {skill.level && (
                        <span className="text-xs font-mono text-slate-500 group-hover:text-white transition-colors">
                          {skill.level}
                        </span>
                      )}
                    </div>
                    {/* Visual bar for 'Expert' vs others - purely cosmetic based on level presence */}
                    {skill.level && (
                      <div className="h-1.5 bg-slate-800 rounded-full overflow-hidden">
                        <div 
                          className={`h-full rounded-full ${
                            skill.level === 'Expert' ? 'bg-tech-primary w-[95%]' : 
                            skill.level === 'Experienced' ? 'bg-tech-accent w-[80%]' : 'bg-tech-glow w-[60%]'
                          }`}
                        ></div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Info Grid */}
        <div className="mt-12 grid md:grid-cols-2 gap-8">
          {/* Languages */}
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="bg-slate-900 border border-slate-800 rounded-xl p-6"
          >
            <h3 className="text-lg font-bold text-white mb-4 flex items-center">
              <span className="w-2 h-8 bg-tech-glow rounded-full mr-3"></span>
              Languages
            </h3>
            <div className="flex flex-col gap-3">
              {LANGUAGES.map((lang, i) => (
                <div key={i} className="flex justify-between items-center border-b border-slate-800 pb-2 last:border-0">
                  <span className="text-slate-300">{lang.language}</span>
                  <span className="text-sm text-tech-glow font-mono">{lang.level}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Hobbies */}
          <motion.div 
             initial={{ opacity: 0 }}
             whileInView={{ opacity: 1 }}
             viewport={{ once: true }}
             className="bg-slate-900 border border-slate-800 rounded-xl p-6"
           >
             <h3 className="text-lg font-bold text-white mb-4 flex items-center">
               <span className="w-2 h-8 bg-tech-primary rounded-full mr-3"></span>
               Hobbies & Interests
             </h3>
             <div className="flex flex-wrap gap-2">
               {HOBBIES.map((hobby, i) => (
                 <span key={i} className="px-4 py-2 bg-slate-800 text-slate-300 rounded-full text-sm hover:bg-slate-700 hover:text-white transition-colors cursor-default">
                   {hobby}
                 </span>
               ))}
             </div>
           </motion.div>
        </div>

      </div>
    </section>
  );
};

export default Skills;