import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start max-w-2xl">
        <div className="flex flex-col gap-4 text-center sm:text-left">
          <h1 className="text-4xl sm:text-5xl font-bold">
            Ese Monday
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Software Engineer · DevRel · Technical Writer
          </p>
          <p className="text-base text-gray-600 dark:text-gray-400">
            Bridging the gap between developers and technology through code, documentation, and community building. 
            Specializing in Web3 and Frontend Development.
          </p>
        </div>

        <div className="flex gap-6 items-center flex-col sm:flex-row mt-4">
          <a
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-6 sm:px-8"
            href="/portfolio"
          >
            View Portfolio
          </a>
          <a
            className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-6 sm:px-8"
            href="/blog"
          >
            Read My Blog
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8 w-full">
          <div className="p-6 rounded-lg border border-black/[.08] dark:border-white/[.145]">
            <h2 className="text-lg font-semibold mb-2">Technical Writing</h2>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Creating clear, comprehensive documentation and technical content for developers.
            </p>
          </div>
          <div className="p-6 rounded-lg border border-black/[.08] dark:border-white/[.145]">
            <h2 className="text-lg font-semibold mb-2">Developer Relations</h2>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Building bridges between developers and technology through advocacy and education.
            </p>
          </div>
        </div>
      </main>

      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://github.com/yourhandle"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://twitter.com/EseMonday1"
          target="_blank"
          rel="noopener noreferrer"
        >
          Twitter
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://www.linkedin.com/in/ese-monday/"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
      </footer>
    </div>
  );
}