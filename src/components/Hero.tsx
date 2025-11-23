import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download, Linkedin, Mail, MapPin, Globe, Github } from 'lucide-react';
import { PERSONAL_INFO, SOCIALS } from '../constants';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute top-[-10%] right-[-10%] w-96 h-96 bg-tech-primary/20 rounded-full blur-[100px]" />
        <div className="absolute bottom-[-10%] left-[-10%] w-96 h-96 bg-tech-accent/20 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col-reverse md:flex-row items-center gap-12">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-1 text-center md:text-left"
        >
          <div className="inline-block px-3 py-1 mb-4 text-xs font-mono font-semibold tracking-wider text-tech-glow bg-tech-glow/10 rounded-full border border-tech-glow/20">
            AVAILABLE FOR PROJECTS
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 tracking-tight">
            Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-tech-primary via-tech-accent to-tech-glow">{PERSONAL_INFO.name.split(',')[0]}</span>
          </h1>
          <h2 className="text-xl md:text-2xl text-slate-400 mb-6 font-light">
            {PERSONAL_INFO.title}
          </h2>
          <p className="text-slate-400 text-lg mb-8 max-w-lg mx-auto md:mx-0 leading-relaxed">
            Specializing in Generative AI, MLOps, and Large Language Model Infrastructure. 
            Building secure, scalable AI solutions from research to production.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start flex-wrap mb-10">
            <a href="#portfolio" className="group inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-tech-primary hover:bg-blue-600 transition-all shadow-[0_0_20px_rgba(59,130,246,0.3)] hover:shadow-[0_0_30px_rgba(59,130,246,0.5)]">
              View Work
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </a>
            
            <a href={PERSONAL_INFO.resume} download="Bruna_Almeida_CV.pdf" className="inline-flex items-center justify-center px-6 py-3 border border-slate-700 text-base font-medium rounded-lg text-slate-300 hover:bg-slate-800 hover:text-white transition-all hover:border-tech-glow hover:shadow-[0_0_15px_rgba(236,72,153,0.2)]">
              <Download className="mr-2 h-5 w-5" />
              Download CV
            </a>

            <a href={`mailto:${PERSONAL_INFO.email}`} className="inline-flex items-center justify-center px-6 py-3 border border-slate-700 text-base font-medium rounded-lg text-slate-300 hover:bg-slate-800 hover:text-white transition-all hover:border-tech-accent">
              <Mail className="mr-2 h-5 w-5" />
              Contact Me
            </a>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-center md:justify-start gap-4 md:gap-6 text-slate-500 text-sm font-mono">
            <div className="flex items-center gap-2">
              <MapPin size={16} className="text-tech-primary" />
              <span>{PERSONAL_INFO.location}</span>
            </div>
            
            <div className="hidden md:block h-4 w-[1px] bg-slate-700"></div>
            
            <div className="flex items-center gap-2 text-tech-glow">
              <Globe size={16} />
              <span>{PERSONAL_INFO.availability}</span>
            </div>
            
            <div className="hidden md:block h-4 w-[1px] bg-slate-700"></div>

            <div className="flex gap-4">
              {SOCIALS.filter(s => s.name !== 'Email').map((social) => (
                <a 
                  key={social.name}
                  href={social.url} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:text-white transition-colors"
                  aria-label={social.name}
                >
                  {social.icon === 'github' && <Github size={20} />}
                  {social.icon === 'linkedin' && <Linkedin size={20} />}
                </a>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex-1 relative"
        >
          <div className="relative w-64 h-64 md:w-80 md:h-80 mx-auto">
            {/* Abstract Tech Ring */}
            <div className="absolute inset-0 rounded-full border-2 border-dashed border-slate-700 animate-[spin_10s_linear_infinite]" />
            <div className="absolute inset-4 rounded-full border border-tech-accent/30 animate-[spin_15s_linear_infinite_reverse]" />
            
            {/* Profile Image Container */}
            <div className="absolute inset-2 rounded-full overflow-hidden border-4 border-slate-800 bg-slate-900 shadow-2xl">
               <img 
                 src="https://picsum.photos/seed/bruna/400/400" 
                 alt="Bruna Almeida" 
                 className="w-full h-full object-cover opacity-90 hover:opacity-100 transition-opacity duration-500"
               />
            </div>
            
            {/* Floating Badges */}
            <div className="absolute -right-4 top-10 bg-slate-800/90 backdrop-blur border border-slate-700 p-3 rounded-lg shadow-xl animate-bounce">
              <span className="text-2xl">🚀</span>
            </div>
            <div className="absolute -left-4 bottom-10 bg-slate-800/90 backdrop-blur border border-slate-700 p-3 rounded-lg shadow-xl animate-pulse">
              <span className="text-2xl">🤖</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
