import Image from "next/image";

export default function MainSection() {
  return (
    <section className="py-20 px-4 border-b-2 border-cate-light-blue/20">
      <div className="container mx-auto">
        <div className="flex flex-col items-center justify-center text-center">
          {/* Logo */}
          <div className="mb-6 relative">
            <div className="relative w-64 h-64 md:w-96 md:h-96">
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
          <div className="mb-6">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-2">
              $CATE
            </h1>
            <p className="text-2xl md:text-3xl text-white/80">
              le surfing guitar cate
            </p>
          </div>

          {/* About Button */}
          <div className="mb-8">
            <a
              href="https://archive.4plebs.org/s4s/thread/2027101/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-cate-light-blue to-cate-blue hover:from-cate-blue hover:to-cate-light-blue text-white font-bold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cate-light-blue/50 inline-block"
            >
              About
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
