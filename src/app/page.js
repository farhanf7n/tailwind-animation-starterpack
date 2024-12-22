import Link from "next/link";
import Header from "@/components/Header";
import { Main } from "@/components/Main";

export default function Home() {
  return (
    <div className="mx-auto container flex flex-col min-h-screen py-8 pb-8 sm:pt-20 font-[family-name:var(--font-geist-sans)]">
      <header className="flex gap-4 items-center px-6 sm:px-16 md:px-40 lg:px-60 xl:px-80 sm:gap-6 ">
        <Header />
      </header>
      <main className="flex-1 flex mx-6 sm:mx-12 md:mx-24 lg:mx-32 xl:mx-44 flex-col gap-8 py-6 items-center sm:items-start">
        <Main />
      </main>
      <footer className="flex gap-6 flex-wrap items-center justify-center">
        <p className="text-sm pt-10 text-zinc-500">
          Made by{" "}
          <Link
            href="https://forhan.netlify.app/"
            className="outline-none font-medium underline underline-offset-4 text-zinc-900"
          >
            Farhan Ahmed
          </Link>
        </p>
      </footer>
    </div>
  );
}
