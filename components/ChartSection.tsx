"use client";

export default function ChartSection() {
  return (
    <section className="py-16 md:py-24 px-4 relative bg-cate-dark-blue">
      {/* Texture Background */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: '60px 60px',
          }}
        />
      </div>
      
      {/* Decorative divider at top */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-cate-light-blue/30"></div>
      
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="flex justify-center mb-10 md:mb-16">
          <h2 
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-white relative"
            style={{
              textShadow: '-2px -2px 0 #000, 2px -2px 0 #000, -2px 2px 0 #000, 2px 2px 0 #000',
              WebkitTextStroke: '2px #000',
              paintOrder: 'stroke fill',
            }}
          >
            Live Chart
          </h2>
        </div>
        
        <div className="max-w-6xl mx-auto">
          <div className="bg-cate-dark-blue border-2 border-cate-light-blue/30 rounded-2xl p-6 md:p-8 lg:p-10 shadow-2xl relative overflow-hidden group hover:border-cate-pink/50 transition-all duration-300">
            {/* Animated gradient border effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-cate-pink/0 via-cate-purple/0 to-cate-blue/0 group-hover:from-cate-pink/5 group-hover:via-cate-purple/5 group-hover:to-cate-blue/5 transition-all duration-500 rounded-2xl"></div>
            
            <div className="relative z-10">
              {/* Placeholder for chart - can be integrated with Dexscreener embed or TradingView */}
              <div className="aspect-video bg-cate-dark-blue/50 rounded-xl flex items-center justify-center border-2 border-dashed border-cate-light-blue/30 group-hover:border-cate-pink/50 transition-all duration-300 relative overflow-hidden">
                {/* Animated background pattern */}
                <div className="absolute inset-0 opacity-10">
                  <div 
                    className="absolute inset-0" 
                    style={{
                      backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(59, 130, 246, 0.1) 10px, rgba(59, 130, 246, 0.1) 20px)`,
                    }}
                  />
                </div>
                <div className="text-center relative z-10">
                  <div className="text-6xl mb-4 animate-bounce-slow">📈</div>
                  <p 
                    className="text-white/70 text-lg"
                    style={{
                      textShadow: '0 1px 3px rgba(0, 0, 0, 0.6)',
                    }}
                  >
                    Chart coming soon
                  </p>
                  <p 
                    className="text-white/50 text-sm mt-2"
                    style={{
                      textShadow: '0 1px 2px rgba(0, 0, 0, 0.5)',
                    }}
                  >
                    Dexscreener or TradingView integration
                  </p>
                </div>
              </div>
              
              {/* Uncomment and customize when ready to embed Dexscreener */}
              {/* 
              <iframe
                src="YOUR_DEXSCREENER_EMBED_URL"
                className="w-full h-[600px] rounded-xl"
                frameBorder="0"
                title="Dexscreener Chart"
              />
              */}
            </div>
          </div>
        </div>
      </div>
      
      {/* Decorative divider at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-cate-light-blue/30"></div>
    </section>
  );
}
