export default function Footer() {
  return (
    <footer className="py-10 md:py-12 px-4 bg-cate-dark-blue/50 relative">
      {/* Decorative divider at top */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-cate-light-blue/30"></div>
      <div className="container mx-auto text-center max-w-6xl">
        <p 
          className="text-white/70 text-sm"
          style={{
            textShadow: '0 1px 2px rgba(0, 0, 0, 0.5)',
          }}
        >
          Website created by{" "}
          <a
            href="https://regenkomet.dev"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-white/80 transition-colors duration-300 underline"
            style={{
              textShadow: '0 0 5px rgba(59, 130, 246, 0.4), 0 1px 2px rgba(0, 0, 0, 0.5)',
            }}
          >
            regenkomet.dev
          </a>
        </p>
      </div>
    </footer>
  );
}
