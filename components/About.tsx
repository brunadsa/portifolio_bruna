import React from 'react';
import { motion } from 'framer-motion';
import { PERSONAL_INFO } from '../constants';
import { Brain, Search, ShieldCheck } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-tech-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-3xl font-bold text-white">About Me</h2>
            <div className="w-16 h-1 bg-tech-accent rounded-full"></div>
            <p className="text-slate-300 text-lg leading-relaxed">
              {PERSONAL_INFO.about}
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
              <div className="bg-slate-800/50 p-4 rounded-lg border border-slate-700 flex items-start gap-3">
                <Brain className="text-tech-glow shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-white text-sm">GenAI Expert</h4>
                  <p className="text-xs text-slate-400 mt-1">Specialized in LLM Infrastructure & Architecture.</p>
                </div>
              </div>
              <div className="bg-slate-800/50 p-4 rounded-lg border border-slate-700 flex items-start gap-3">
                <ShieldCheck className="text-tech-primary shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-white text-sm">Model Reliability</h4>
                  <p className="text-xs text-slate-400 mt-1">Focus on accuracy, governance, and secure processes.</p>
                </div>
              </div>
              <div className="bg-slate-800/50 p-4 rounded-lg border border-slate-700 flex items-start gap-3">
                <Search className="text-tech-accent shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-white text-sm">Research to Prod</h4>
                  <p className="text-xs text-slate-400 mt-1">Full lifecycle management from development to deployment.</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
             <div className="absolute -inset-4 bg-gradient-to-r from-tech-primary via-tech-accent to-tech-glow opacity-30 blur-2xl rounded-xl"></div>
             <div className="relative bg-slate-900 border border-slate-800 rounded-xl p-8 shadow-2xl">
               <code className="text-sm font-mono text-slate-300 block">
                 <span className="text-tech-accent">class</span> <span className="text-tech-glow">MLEngineer</span> <span className="text-white">{`{`}</span><br/>
                 &nbsp;&nbsp;<span className="text-tech-primary">constructor</span>() <span className="text-white">{`{`}</span><br/>
                 &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-tech-accent">this</span>.name = <span className="text-green-400">"Bruna Almeida"</span>;<br/>
                 &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-tech-accent">this</span>.role = <span className="text-green-400">"Principal ML Engineer"</span>;<br/>
                 &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-tech-accent">this</span>.focus = [<br/>
                 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-green-400">"GenAI"</span>,<br/>
                 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-green-400">"MLOps"</span>,<br/>
                 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-green-400">"Scalability"</span><br/>
                 &nbsp;&nbsp;&nbsp;&nbsp;];<br/>
                 &nbsp;&nbsp;<span className="text-white">{`}`}</span><br/><br/>
                 &nbsp;&nbsp;<span className="text-tech-primary">deploySolutions</span>() <span className="text-white">{`{`}</span><br/>
                 &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-slate-500">// Delivering value through AI</span><br/>
                 &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-tech-accent">return</span> <span className="text-tech-glow">true</span>;<br/>
                 &nbsp;&nbsp;<span className="text-white">{`}`}</span><br/>
                 <span className="text-white">{`}`}</span>
               </code>
             </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;