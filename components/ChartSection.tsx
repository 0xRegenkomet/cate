"use client";

export default function ChartSection() {
  return (
    <section className="py-20 px-4 border-b-2 border-cate-light-blue/20">
      <div className="container mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-white">
          Live Chart
        </h2>
        
        <div className="max-w-6xl mx-auto">
          <div className="bg-gradient-to-br from-cate-dark-blue to-cate-blue border-2 border-cate-light-blue/30 rounded-2xl p-8 shadow-2xl">
            {/* Placeholder for chart - can be integrated with Dexscreener embed or TradingView */}
            <div className="aspect-video bg-cate-dark-blue/50 rounded-xl flex items-center justify-center border-2 border-dashed border-cate-light-blue/30">
              <div className="text-center">
                <div className="text-6xl mb-4">📈</div>
                <p className="text-white/70 text-lg">Chart coming soon</p>
                <p className="text-white/50 text-sm mt-2">Dexscreener or TradingView integration</p>
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
    </section>
  );
}
