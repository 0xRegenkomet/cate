import Image from "next/image";

export default function MainSection() {
  return (
    <section className="py-24 md:py-32 px-4 relative overflow-hidden min-h-[90vh] flex items-center">
      {/* Banner Background - Only in Main Section */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <Image
          src="/Pictures/CATEBANNER.png"
          alt="Background Banner"
          fill
          className="object-cover opacity-40"
          quality={90}
          priority
        />
        <div className="absolute inset-0 bg-cate-dark-blue/80" />
      </div>
      
      <div className="container mx-auto relative z-10 max-w-6xl">
        <div className="flex flex-col items-center justify-center text-center">
          {/* Logo */}
          <div className="mb-8 md:mb-10 relative">
            <div className="relative w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 lg:w-64 lg:h-64">
              <Image
                src="/Pictures/CATE LOGO.png"
                alt="$CATE Logo"
                fill
                className="object-contain drop-shadow-2xl"
                priority
              />
            </div>
          </div>

          {/* Title */}
          <div className="mb-8 md:mb-10 w-full flex flex-col items-center">
            <h1 
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-3 md:mb-4 relative"
              style={{
                textShadow: '-2px -2px 0 #000, 2px -2px 0 #000, -2px 2px 0 #000, 2px 2px 0 #000, 0 0 20px rgba(59, 130, 246, 0.5), 0 0 40px rgba(59, 130, 246, 0.3)',
                WebkitTextStroke: '2px #000',
                paintOrder: 'stroke fill',
              }}
            >
              <span className="relative px-6 py-2 rounded-lg inline-block">
                <span className="absolute inset-0 bg-cate-gold/10 rounded-lg blur-xl"></span>
                <span className="relative">$CATE</span>
              </span>
            </h1>
            <p 
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white/90 relative"
              style={{
                textShadow: '-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000, 0 0 10px rgba(59, 130, 246, 0.4)',
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
              className="bg-cate-light-blue hover:bg-cate-blue text-white font-bold py-3 md:py-4 px-8 md:px-10 text-lg md:text-xl rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cate-light-blue/50 inline-block"
            >
              About
            </a>
          </div>
        </div>
      </div>
      
      {/* Decorative divider at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-cate-light-blue/30"></div>
    </section>
  );
}
