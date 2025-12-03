"use client";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-cate-dark-blue/90 backdrop-blur-md border-b-2 border-cate-light-blue/30">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between flex-wrap gap-4">
          {/* Ticker */}
          <div className="flex items-center gap-2">
            <span className="text-white text-2xl font-bold">$CATE</span>
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
            className="bg-gradient-to-r from-cate-pink to-cate-purple hover:from-cate-purple hover:to-cate-pink text-white font-bold py-2 px-6 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cate-pink/50"
          >
            Buy Now
          </a>
        </div>
      </div>
    </nav>
  );
}
