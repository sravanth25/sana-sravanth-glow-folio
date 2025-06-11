
import { ArrowUp, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 bg-black border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="text-center md:text-left mb-6 md:mb-0">
            <p className="text-gray-400">
              © 2025 Sana Sravanth. Built with strategy and style.
            </p>
          </div>

          <div className="flex items-center space-x-6">
            <a
              href="mailto:sana.sravanth@email.com"
              className="p-3 bg-gray-800/50 rounded-full text-gray-400 hover:text-cyan-400 hover:bg-gray-800 transition-all duration-300 hover:scale-110"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
            <a
              href="https://linkedin.com/in/sanasravanth"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-gray-800/50 rounded-full text-gray-400 hover:text-cyan-400 hover:bg-gray-800 transition-all duration-300 hover:scale-110"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <button
              onClick={scrollToTop}
              className="p-3 bg-gray-800/50 rounded-full text-gray-400 hover:text-cyan-400 hover:bg-gray-800 transition-all duration-300 hover:scale-110"
              aria-label="Scroll to top"
            >
              <ArrowUp size={20} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
