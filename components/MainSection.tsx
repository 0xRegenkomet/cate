import Image from "next/image";

export default function MainSection() {
  return (
    <section className="py-24 md:py-32 px-4 relative overflow-hidden min-h-[90vh] flex items-center">
      {/* Animated Waves Background */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute inset-0 w-[300%] opacity-30" style={{ left: '-100%' }}>
          <svg 
            className="w-full h-full" 
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1920 320"
            preserveAspectRatio="none"
          >
          <defs>
            <linearGradient id="waveGradient1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.4" />
              <stop offset="50%" stopColor="#60A5FA" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#3B82F6" stopOpacity="0.4" />
            </linearGradient>
            <linearGradient id="waveGradient2" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#60A5FA" stopOpacity="0.3" />
              <stop offset="50%" stopColor="#3B82F6" stopOpacity="0.25" />
              <stop offset="100%" stopColor="#60A5FA" stopOpacity="0.3" />
            </linearGradient>
            <linearGradient id="waveGradient3" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.25" />
              <stop offset="50%" stopColor="#1E3A8A" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#3B82F6" stopOpacity="0.25" />
            </linearGradient>
          </defs>
          
          {/* Wave Layer 1 - Bottom */}
          <path 
            fill="url(#waveGradient1)" 
            d="M0,160L48,149.3C96,139,192,117,288,122.7C384,128,480,160,576,165.3C672,171,768,149,864,133.3C960,117,1056,107,1152,112C1248,117,1344,139,1392,149.3L1440,160L1536,154.7C1632,149,1728,117,1824,122.7C1920,128,1980,160,2040,165.3C2100,171,2160,149,2220,133.3C2280,117,2340,107,2400,112C2460,117,2520,139,2580,149.3L2640,160L2640,320L2580,320C2520,320,2460,320,2400,320C2340,320,2280,320,2220,320C2160,320,2100,320,2040,320C1980,320,1920,320,1860,320C1800,320,1740,320,1680,320C1620,320,1560,320,1500,320C1440,320,1380,320,1320,320C1260,320,1200,320,1140,320C1080,320,1020,320,960,320C900,320,840,320,780,320C720,320,660,320,600,320C540,320,480,320,420,320C360,320,300,320,240,320C180,320,120,320,60,320L0,320Z"
            className="animate-wave-slow"
          />
          
          {/* Wave Layer 2 - Middle */}
          <path 
            fill="url(#waveGradient2)" 
            d="M0,224L48,208C96,192,192,160,288,154.7C384,149,480,171,576,181.3C672,192,768,192,864,176C960,160,1056,128,1152,128C1248,128,1344,160,1392,176L1440,192L1536,197.3C1632,203,1728,213,1824,208C1920,203,1980,181,2040,181.3C2100,181,2160,192,2220,176C2280,160,2340,128,2400,128C2460,128,2520,160,2580,176L2640,192L2640,320L2580,320C2520,320,2460,320,2400,320C2340,320,2280,320,2220,320C2160,320,2100,320,2040,320C1980,320,1920,320,1860,320C1800,320,1740,320,1680,320C1620,320,1560,320,1500,320C1440,320,1380,320,1320,320C1260,320,1200,320,1140,320C1080,320,1020,320,960,320C900,320,840,320,780,320C720,320,660,320,600,320C540,320,480,320,420,320C360,320,300,320,240,320C180,320,120,320,60,320L0,320Z"
            className="animate-wave"
            style={{ animationDelay: '1s' }}
          />
          
          {/* Wave Layer 3 - Top */}
          <path 
            fill="url(#waveGradient3)" 
            d="M0,256L48,245.3C96,235,192,213,288,213.3C384,213,480,235,576,240C672,245,768,235,864,224C960,213,1056,203,1152,208C1248,213,1344,235,1392,245.3L1440,256L1536,250.7C1632,245,1728,235,1824,229.3C1920,224,1980,224,2040,229.3C2100,235,2160,245,2220,229.3C2280,224,2340,203,2400,208C2460,213,2520,235,2580,245.3L2640,256L2640,320L2580,320C2520,320,2460,320,2400,320C2340,320,2280,320,2220,320C2160,320,2100,320,2040,320C1980,320,1920,320,1860,320C1800,320,1740,320,1680,320C1620,320,1560,320,1500,320C1440,320,1380,320,1320,320C1260,320,1200,320,1140,320C1080,320,1020,320,960,320C900,320,840,320,780,320C720,320,660,320,600,320C540,320,480,320,420,320C360,320,300,320,240,320C180,320,120,320,60,320L0,320Z"
            className="animate-wave-slow"
            style={{ animationDelay: '2s' }}
          />
          </svg>
        </div>
        
        {/* Additional floating wave elements */}
        <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-cate-blue/10 to-transparent"></div>
      </div>
      
      <div className="container mx-auto relative z-10 max-w-6xl">
        <div className="flex flex-col items-center justify-center text-center">
          {/* Logo */}
          <div className="mb-8 md:mb-10 relative flex justify-center">
            <div className="relative w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 animate-bounce-slow">
              {/* Glow effect behind logo */}
              <div className="absolute inset-0 bg-cate-gold/20 rounded-full blur-3xl animate-pulse-slow" />
              <div className="relative w-full h-full">
                <Image
                  src="/Pictures/CATE LOGO.png"
                  alt="$CATE Logo"
                  fill
                  className="object-contain drop-shadow-2xl"
                  priority
                  sizes="(max-width: 640px) 160px, (max-width: 768px) 192px, (max-width: 1024px) 224px, 256px"
                />
              </div>
            </div>
          </div>

          {/* Title */}
          <div className="mb-8 md:mb-10 w-full flex flex-col items-center">
            <h1 
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-3 md:mb-4 relative"
              style={{
                textShadow: '-2px -2px 0 #000, 2px -2px 0 #000, -2px 2px 0 #000, 2px 2px 0 #000',
                WebkitTextStroke: '2px #000',
                paintOrder: 'stroke fill',
              }}
            >
              $CATE
            </h1>
            <p 
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white/90 relative"
              style={{
                textShadow: '-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000',
                WebkitTextStroke: '1px #000',
                paintOrder: 'stroke fill',
              }}
            >
              le surfing guitar cate
            </p>
          </div>

          {/* About Button */}
          <div>
            <a
              href="https://archive.4plebs.org/s4s/thread/2027101/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-cate-light-blue hover:bg-cate-blue text-white font-bold py-3 md:py-4 px-8 md:px-10 text-lg md:text-xl rounded-full transition-all duration-300 transform hover:scale-110 shadow-lg hover:shadow-cate-light-blue/50 inline-block relative overflow-hidden group"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></span>
              <span className="relative z-10">About</span>
            </a>
          </div>
        </div>
      </div>
      
      {/* Decorative divider at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-cate-light-blue/30"></div>
    </section>
  );
}
