export default function Footer() {
  return (
    <footer className="py-8 px-4 bg-cate-dark-blue/50 border-t-2 border-cate-light-blue/20">
      <div className="container mx-auto text-center">
        <p className="text-white/70 text-sm">
          Website created by{" "}
          <a
            href="https://regenkomet.dev"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-white/80 transition-colors duration-300 underline"
          >
            regenkomet.dev
          </a>
        </p>
      </div>
    </footer>
  );
}
