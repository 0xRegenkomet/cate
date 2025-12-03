"use client";

import Image from "next/image";

export default function SocialSection() {
  return (
    <section className="py-16 md:py-24 px-4 relative bg-cate-blue/20">
      {/* Decorative divider at top */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-cate-light-blue/30"></div>
      
      <div className="container mx-auto max-w-6xl">
        <div className="flex justify-center mb-10 md:mb-16">
          <h2 
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-white relative"
            style={{
              textShadow: '-2px -2px 0 #000, 2px -2px 0 #000, -2px 2px 0 #000, 2px 2px 0 #000, 0 0 15px rgba(59, 130, 246, 0.4), 0 0 30px rgba(59, 130, 246, 0.2)',
              WebkitTextStroke: '2px #000',
              paintOrder: 'stroke fill',
            }}
          >
            <span className="relative px-6 py-2 inline-block">
              <span className="absolute inset-0 bg-cate-light-blue/5 rounded-lg blur-lg"></span>
              <span className="relative">Join The Community</span>
            </span>
          </h2>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-5xl mx-auto">
          {/* X Community Card */}
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-cate-dark-blue border-2 border-cate-light-blue/30 rounded-2xl p-8 md:p-10 hover:border-cate-pink/50 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-cate-pink/20"
          >
            <div className="flex flex-col items-center text-center">
              <div className="w-20 h-20 md:w-24 md:h-24 mb-5 md:mb-6 group-hover:scale-110 transition-transform duration-300 flex items-center justify-center">
                {/* X/Twitter Icon */}
                <svg
                  viewBox="0 0 24 24"
                  className="w-full h-full fill-white"
                  aria-hidden="true"
                >
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </div>
              <h3 
                className="text-xl md:text-2xl font-bold text-white mb-2 md:mb-3"
                style={{
                  textShadow: '-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000, 0 0 10px rgba(59, 130, 246, 0.3)',
                  WebkitTextStroke: '1px #000',
                  paintOrder: 'stroke fill',
                }}
              >
                X Community
              </h3>
              <p 
                className="text-white/70 text-sm md:text-base"
                style={{
                  textShadow: '0 1px 2px rgba(0, 0, 0, 0.5)',
                }}
              >
                Join our X community
              </p>
            </div>
          </a>

          {/* X Account Card */}
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-cate-dark-blue border-2 border-cate-light-blue/30 rounded-2xl p-8 md:p-10 hover:border-cate-pink/50 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-cate-pink/20"
          >
            <div className="flex flex-col items-center text-center">
              <div className="w-20 h-20 md:w-24 md:h-24 mb-5 md:mb-6 group-hover:scale-110 transition-transform duration-300 flex items-center justify-center">
                {/* X/Twitter Icon */}
                <svg
                  viewBox="0 0 24 24"
                  className="w-full h-full fill-white"
                  aria-hidden="true"
                >
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </div>
              <h3 
                className="text-xl md:text-2xl font-bold text-white mb-2 md:mb-3"
                style={{
                  textShadow: '-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000, 0 0 10px rgba(59, 130, 246, 0.3)',
                  WebkitTextStroke: '1px #000',
                  paintOrder: 'stroke fill',
                }}
              >
                X Account
              </h3>
              <p 
                className="text-white/70 text-sm md:text-base"
                style={{
                  textShadow: '0 1px 2px rgba(0, 0, 0, 0.5)',
                }}
              >
                Follow us on X
              </p>
            </div>
          </a>

          {/* Dexscreener Card */}
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-cate-dark-blue border-2 border-cate-light-blue/30 rounded-2xl p-8 md:p-10 hover:border-cate-pink/50 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-cate-pink/20"
          >
            <div className="flex flex-col items-center text-center">
              <div className="w-20 h-20 md:w-24 md:h-24 mb-5 md:mb-6 group-hover:scale-110 transition-transform duration-300 flex items-center justify-center relative">
                <Image
                  src="/Pictures/dex-screener-logo-png_seeklogo-527276.png"
                  alt="Dexscreener Logo"
                  fill
                  className="object-contain filter brightness-0 invert"
                />
              </div>
              <h3 
                className="text-xl md:text-2xl font-bold text-white mb-2 md:mb-3"
                style={{
                  textShadow: '-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000, 0 0 10px rgba(59, 130, 246, 0.3)',
                  WebkitTextStroke: '1px #000',
                  paintOrder: 'stroke fill',
                }}
              >
                Dexscreener
              </h3>
              <p 
                className="text-white/70 text-sm md:text-base"
                style={{
                  textShadow: '0 1px 2px rgba(0, 0, 0, 0.5)',
                }}
              >
                Track the chart
              </p>
            </div>
          </a>
        </div>
      </div>
      
      {/* Decorative divider at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-cate-light-blue/30"></div>
    </section>
  );
}
