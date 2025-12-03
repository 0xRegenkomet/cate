"use client";

export default function Ticker() {
  return (
    <div className="relative bg-cate-dark-blue border-y-2 border-cate-light-blue/30 overflow-hidden py-4">
      <div className="flex animate-scroll whitespace-nowrap">
        {/* Duplicate items for seamless loop */}
        {[...Array(20)].map((_, index) => (
          <div
            key={index}
            className="inline-flex items-center mx-12 text-white font-bold text-2xl md:text-3xl"
            style={{
              textShadow: '-2px -2px 0 #000, 2px -2px 0 #000, -2px 2px 0 #000, 2px 2px 0 #000',
              WebkitTextStroke: '2px #000',
              paintOrder: 'stroke fill',
            }}
          >
            <span className="text-cate-gold">$CATE</span>
            <span className="mx-12 text-cate-pink text-3xl">•</span>
          </div>
        ))}
      </div>
    </div>
  );
}

