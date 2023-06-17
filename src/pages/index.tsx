import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Resume Factory</title>
        <meta name="description" content="Quickly build personalized resumes" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className="prose">
        <Hero />
        <Preview />
        <Features />
        <CTA />
      </main>
      <Footer />
    </>
  );
};

export default Home;

const Header: React.FC = () => {
  return (
    <header>
      <span>Resume Factory</span>
      <nav>
        <ul>
          <li>Lorem</li>
          <li>Ipsum</li>
          <li>Dalamo</li>
        </ul>
      </nav>
    </header>
  );
};

const Hero: React.FC = () => {
  return (
    <section>
      <h1>Resume Factory</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum eligendi
        temporibus est sit soluta voluptatem at ex repellat, illo quaerat!
      </p>
    </section>
  );
};

const Preview: React.FC = () => {
  return (
    <section>
      <h2>PREVIEW</h2>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde, quaerat
        possimus corporis modi similique voluptates animi repellat natus
        sapiente quia neque maiores obcaecati cumque facere tenetur sint? A,
        eligendi expedita!
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
