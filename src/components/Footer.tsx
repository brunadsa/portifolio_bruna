import React from 'react';
import { Mail, Linkedin, Terminal, Github } from 'lucide-react';
import { PERSONAL_INFO, SOCIALS } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-tech-darker border-t border-slate-800 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
        
        <div className="flex flex-col items-center md:items-start">
          <div className="flex items-center space-x-2 text-white font-bold text-xl tracking-tighter mb-2">
            <Terminal size={20} className="text-tech-primary" />
            <span className="font-mono">BRUNA ALMEIDA</span>
          </div>
          <p className="text-slate-500 text-sm">
            © {new Date().getFullYear()} All rights reserved.
          </p>
        </div>

        <div className="flex gap-6">
          {SOCIALS.map((social) => (
            <a 
              key={social.name}
              href={social.url} 
              target={social.name !== 'Email' ? "_blank" : undefined}
              rel={social.name !== 'Email' ? "noopener noreferrer" : undefined}
              className="text-slate-400 hover:text-tech-primary transition-colors"
              aria-label={social.name}
            >
              {social.icon === 'github' && <Github size={24} />}
              {social.icon === 'linkedin' && <Linkedin size={24} />}
              {social.icon === 'mail' && <Mail size={24} />}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
