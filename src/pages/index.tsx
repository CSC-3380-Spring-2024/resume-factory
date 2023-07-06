import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { LuFeather, LuGithub, LuMoon, LuSun } from "react-icons/lu";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Resume Factory</title>
        <meta name="description" content="Quickly build personalized resumes" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className="container">
        <Hero />
        <ResumeCount count={0} />
        <About />
        <Benefits />
        <Features />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </>
  );
};

export default Home;

const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 w-full bg-white font-mono text-xl font-medium shadow-xl transition-all duration-300 ease-in-out">
      <div className="flex max-w-[1366px] flex-row justify-between gap-x-4 px-4 py-[20px]">
        <Link href="/" className="flex flex-row items-center gap-x-[10px] ">
          <LuFeather size="30px" />
          <p className="">Resume Factory</p>
        </Link>
        <nav className="flex flex-row items-center gap-x-8 sm:gap-x-16">
          <Link className="transition-colors hover:text-accent" href="#about">
            About
          </Link>
          <Link className="transition-colors hover:text-accent" href="#faq">
            FAQ
          </Link>
          <Link className="transition-colors hover:text-accent" href="/blog">
            Blog
          </Link>
          <Link className="transition-colors hover:text-accent" href="/api">
            API
          </Link>
          <div className="flex flex-row gap-x-[20px]">
            <Link
              href="https://github.com/CB-BC/resume-factory"
              target="_blank"
            >
              <LuGithub size="25px" />
            </Link>
            <LuMoon size="25px" />
          </div>
          <Link
            href="/"
            className="rounded border-2 border-accent bg-accent px-[40px] py-[10px] text-bg shadow transition-colors hover:bg-bg hover:text-accent"
          >
            Sign up
          </Link>
        </nav>
      </div>
    </header>
  );
};

const Hero: React.FC = () => {
  return (
    <section className="mx-auto my-36 max-w-5xl">
      <h1 className="mb-12 font-mono text-7xl font-bold">
        Build tailored resumes without wasting time.
      </h1>
      <p className="mb-24 text-2xl leading-10 text-fg-light">
        Store all your past job experiences and projects in one place. Select
        the relevant information from your career archive, and we’ll assemble a
        polished, tailored resume that highlights your strengths and impresses
        employers.
      </p>
      <div className="flex flex-row justify-end">
        <Link
          href="/"
          className="rounded border-2 border-accent bg-accent px-5 py-3 font-mono text-xl text-bg shadow transition-colors hover:bg-bg hover:text-accent"
        >
          Get started now
        </Link>
      </div>
    </section>
  );
};

const ResumeCount: React.FC<{ count: number }> = ({ count }) => {
  const bar = <div className="h-[3px] w-full rounded-full bg-fg-light/25 " />;

  return (
    <section className="mb-[72px] flex flex-row items-center justify-between gap-x-14">
      {bar}
      <p className="min-w-max font-mono text-xl font-medium text-fg-light">
        {count} resumes created so far
      </p>
      {bar}
    </section>
  );
};

const About: React.FC = () => {
  return (
    <section>
      <h2>FEATURES</h2>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi modi a
        ratione harum, rerum magni repellendus! Possimus consequatur saepe, odio
        minus tempore laborum eveniet architecto, pariatur debitis velit
        obcaecati provident?
      </p>
    </section>
  );
};

const Benefits: React.FC = () => {
  return (
    <section>
      <h2>FEATURES</h2>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi modi a
        ratione harum, rerum magni repellendus! Possimus consequatur saepe, odio
        minus tempore laborum eveniet architecto, pariatur debitis velit
        obcaecati provident?
      </p>
    </section>
  );
};

const Features: React.FC = () => {
  return (
    <section>
      <h2>FEATURES</h2>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi modi a
        ratione harum, rerum magni repellendus! Possimus consequatur saepe, odio
        minus tempore laborum eveniet architecto, pariatur debitis velit
        obcaecati provident?
      </p>
    </section>
  );
};

const FAQ: React.FC = () => {
  return (
    <section>
      <h2>FEATURES</h2>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi modi a
        ratione harum, rerum magni repellendus! Possimus consequatur saepe, odio
        minus tempore laborum eveniet architecto, pariatur debitis velit
        obcaecati provident?
      </p>
    </section>
  );
};

const CTA: React.FC = () => {
  return (
    <div>
      <span>GET STARTED NOW! OR ELSE!!!!!</span>
      <button>Sign Up</button>
    </div>
  );
};

const Footer: React.FC = () => {
  return (
    <footer>
      <nav>
        <ul>
          <li>Lorem</li>
          <li>Ipsum</li>
          <li>Dalamo</li>
        </ul>
      </nav>
    </footer>
  );
};
