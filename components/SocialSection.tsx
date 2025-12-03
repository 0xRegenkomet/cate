"use client";

export default function SocialSection() {
  return (
    <section className="py-20 px-4 border-b-2 border-cate-light-blue/20 bg-cate-blue/20">
      <div className="container mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-white">
          Join The Community
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {/* X Community Card */}
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-gradient-to-br from-cate-dark-blue to-cate-blue border-2 border-cate-light-blue/30 rounded-2xl p-6 hover:border-cate-pink/50 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-cate-pink/20"
          >
            <div className="flex flex-col items-center text-center">
              <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                🐦
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">X Community</h3>
              <p className="text-white/70 text-sm">Join our X community</p>
            </div>
          </a>

          {/* X Account Card */}
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-gradient-to-br from-cate-dark-blue to-cate-blue border-2 border-cate-light-blue/30 rounded-2xl p-6 hover:border-cate-pink/50 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-cate-pink/20"
          >
            <div className="flex flex-col items-center text-center">
              <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                💬
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">X Account</h3>
              <p className="text-white/70 text-sm">Follow us on X</p>
            </div>
          </a>

          {/* Dexscreener Card */}
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-gradient-to-br from-cate-dark-blue to-cate-blue border-2 border-cate-light-blue/30 rounded-2xl p-6 hover:border-cate-pink/50 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-cate-pink/20"
          >
            <div className="flex flex-col items-center text-center">
              <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                📊
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Dexscreener</h3>
              <p className="text-white/70 text-sm">Track the chart</p>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
