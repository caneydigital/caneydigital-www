import { useEffect } from "react";
import ReactGA from "react-ga4";
import { Mail } from 'lucide-react';
import favicon from './assets/favicon-196x196.png';

function App() {
  const currentYear = new Date().getFullYear();
  
  useEffect(() => {
    ReactGA.initialize("G-W2FPRJ6YES");
    ReactGA.send("pageview");
  }, []);
  
  return (
    <div className="min-h-screen bg-[#212121] flex flex-col items-center justify-center text-white">
      <div className="text-center">
        <div className="text-4xl md:text-6xl mb-2 tracking-wider flex justify-center items-center">
          <img 
            src={favicon} 
            alt="Favicon" 
            className="w-16 h-16 md:w-24 md:h-24 object-contain" 
          />
        </div>
        <h1 className="text-5xl md:text-7xl font-light tracking-wider flex flex-col gap-2">
          <span>CANEY</span>
          <span>DIGITAL</span>
        </h1>
        <p className="text-xl md:text-2xl tracking-wide mt-4">
          2018 - {currentYear}
        </p>
        <a 
          href="mailto:info@caneydigital.com" 
          className="inline-flex items-center gap-2 mt-8 text-lg md:text-xl text-gray-300 hover:text-white transition-colors duration-300"
        >
          <Mail size={20} />
          info@caneydigital.com
        </a>
      </div>
    </div>
  );
}

export default App;