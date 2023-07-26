import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import {
  LuFeather,
  LuGithub,
  LuMoon,
  LuSun,
  LuLineChart,
  LuEdit3,
  LuLayoutList,
  LuArchive,
  LuFileEdit,
  LuEye,
  LuLayoutTemplate,
  LuFileArchive,
} from "react-icons/lu";
import { BenefitsCard } from "~/components/BenefitsCard";
import { FeaturesCard } from "~/components/FeaturesCard";
import * as Accordion from "@radix-ui/react-accordion";

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
      <div className="mx-auto flex max-w-[1366px] flex-row justify-between gap-x-4 px-4 py-[20px]">
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
      <div className="ml-36">
        <p className="mb-4 font-mono text-base font-bold text-accent">About</p>
        <h2 className="mb-11 font-mono text-5xl font-bold">
          Why Resume Factory?
        </h2>
      </div>
      <div className="mb-44 flex flex-row items-center justify-center gap-3">
        <div className=" flex min-w-max flex-col items-end gap-3">
          <div className="max-w-sm rounded-lg bg-bg p-6 shadow-card">
            <h3 className="mb-3 font-mono text-2xl font-semibold">
              Good resumes Take Time
            </h3>
            <p className="text-xl leading-[1.5] text-fg-light">
              It takes a lot of time and effort to meticulously craft a perfect,
              personalized resume tailored specifically to each job
              application’s requirements.
            </p>
          </div>
          <div className="max-w-md rounded-lg bg-bg p-6 shadow-card">
            <h3 className="mb-3 font-mono text-2xl font-semibold">
              No One likes wasting time
            </h3>
            <p className="text-xl leading-[1.5] text-fg-light">
              Submitting generic resumes that fail to highlight your unique
              skills and experiences often leaves applicants feeling exhausted,
              frustrated, and even hopeless at times.
            </p>
          </div>
        </div>
        <div className="max-w-xl  rounded-lg bg-bg p-6 shadow-card">
          <h3 className="mb-3 font-mono text-2xl font-semibold">
            How We Can Help
          </h3>
          <p className="mb-3 text-xl leading-[1.5] text-fg-light">
            Resume Factory eliminates the need for endless rewrites. Our
            platform, empowers users to create highly customized resumes for
            every opportunity.
          </p>
          <p className="text-xl leading-[1.5] text-fg-light">
            We’ll store all your projects and job experiences in one place, so
            you can select which ones make you the ideal candidate for the job.
            Resume Factory will build a customized resume using one of our many
            templates, so that you can properly showcase your skills and
            experiences—maximizing your chances of securing interviews and
            landing the job you deserve.
          </p>
        </div>
      </div>
    </section>
  );
};

const Benefits: React.FC = () => {
  return (
    <section>
      <p className="mb-4 text-center font-mono text-base font-bold text-accent">
        Benefits
      </p>
      <h2 className="mb-12 text-center font-mono text-5xl font-bold">
        Optimize your job search
      </h2>
      <div className=" mb-40 flex flex-row justify-center gap-8">
        <BenefitsCard
          title="Enhanced efficiency"
          description="With all your experiences in one place, you can effortlessly select and customize relevant details, allowing you to focus on other crucial aspects of your job search."
          icon={<LuLineChart size="90px" className="text-accent" />}
        />
        <BenefitsCard
          title="Tailored for success"
          description="Each job opportunity is unique, and a one-size-fits-all resume may not cut it. Resume Factory allows you to effortlessly select and modify the information stored in your career archive."
          icon={<LuEdit3 size="90px" className="text-accent" />}
        />
        <BenefitsCard
          title="Professional and polished"
          description="Our carefully designed resume templates and formatting options make it easy to create aesthetically pleasing resumes that make a lasting impression."
          icon={<LuLayoutList size="90px" className="text-accent" />}
        />
      </div>
    </section>
  );
};

const Features: React.FC = () => {
  return (
    <section className="mb-40">
      <div className="ml-36">
        <p className="mb-4 font-mono text-base font-bold text-accent">
          Features
        </p>
        <h2 className="mb-11 font-mono text-5xl font-bold">What to expect</h2>
      </div>
      <div className="flex flex-row justify-between gap-14">
        <div className="flex max-w-2xl flex-col gap-4">
          <div className="flex flex-row justify-between gap-4">
            <FeaturesCard
              title="Career archive"
              icon={
                <LuArchive
                  size="90px"
                  className="text-accent transition-all duration-300 ease-in-out group-hover:text-bg"
                />
              }
            />
            <FeaturesCard
              title="Dynamic editing"
              icon={
                <LuFileEdit
                  size="90px"
                  className="text-accent transition-all duration-300 ease-in-out group-hover:text-bg"
                />
              }
            />
            <FeaturesCard
              title="Real-time preview"
              icon={
                <LuEye
                  size="90px"
                  className="text-accent transition-all duration-300 ease-in-out group-hover:text-bg"
                />
              }
            />
          </div>
          <div className="flex flex-row justify-end gap-4">
            <FeaturesCard
              title="Professional templates"
              icon={
                <LuLayoutTemplate
                  size="90px"
                  className="text-accent transition-all duration-300 ease-in-out group-hover:text-bg"
                />
              }
            />
            <FeaturesCard
              title="Privacy and security"
              icon={
                <LuFileArchive
                  size="90px"
                  className="text-accent transition-all duration-300 ease-in-out group-hover:text-bg"
                />
              }
            />
          </div>
        </div>
        <div className="flex flex-col justify-center gap-5 font-mono">
          <p className="text-4xl font-semibold text-fg">
            Your achievements all in one place
          </p>
          <p className="text-2xl">Write once. Edit easily. Reuse endlessly.</p>
          <p className="text-xl text-fg-light">We'll take care of the rest</p>
        </div>
      </div>
    </section>
  );
};

const FAQ: React.FC = () => {
  return (
    <section>
      <p className="mb-4 text-center font-mono text-base font-bold text-accent">
        FAQ
      </p>
      <h2 className="mb-12 text-center font-mono text-5xl font-bold">
        Frequently asked questions
      </h2>
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
