"use client";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-cate-dark-blue/90 backdrop-blur-md border-b-2 border-cate-light-blue/30">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between flex-wrap gap-4">
          {/* Ticker */}
          <div className="flex items-center gap-2">
            <span 
              className="text-white text-2xl font-bold"
              style={{
                textShadow: '-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000',
                WebkitTextStroke: '1px #000',
                paintOrder: 'stroke fill',
              }}
            >
              $CATE
            </span>
          </div>

          {/* CA - Coming Soon */}
          <div className="flex items-center gap-2">
            <span className="text-white/70 text-sm">CA:</span>
            <span className="text-white/50 text-sm italic">Coming Soon</span>
          </div>

          {/* Buy Now Button */}
          <a
            href="https://pump.fun"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-cate-pink hover:bg-cate-purple text-white font-bold py-2 px-6 rounded-full transition-all duration-300 transform hover:scale-110 shadow-lg hover:shadow-cate-pink/70 hover:shadow-xl relative overflow-hidden group"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></span>
            <span className="relative z-10">Buy Now</span>
          </a>
        </div>
      </div>
    </nav>
  );
}
