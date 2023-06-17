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
      <main className=" container prose prose-invert">
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
    <header className=" sticky top-0 z-50 w-full bg-slate-700 shadow-xl transition-all duration-300 ease-in-out">
      <div className="container flex flex-row justify-between gap-x-4 py-8">
        <span className="text-xl font-bold">Resume Factory</span>
        <nav>
          <ul className="flex flex-row items-center gap-x-8 sm:gap-x-16">
            <li>Lorem</li>
            <li>Ipsum</li>
            <li>Dalamo</li>
          </ul>
        </nav>
      </div>
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
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia
        voluptatem, aut quae, maxime consectetur ipsam nostrum quia quos optio
        repudiandae ab a! Minima quam hic error soluta saepe aliquam assumenda
        quasi doloribus distinctio est, aperiam unde accusantium vel. Esse cum
        consequatur similique sunt officia vero delectus alias. Consequatur quod
        facere consectetur! Quis dolorem nobis a suscipit sit sint commodi eaque
        molestiae eum vel ipsum modi quos dolorum, veniam facere tempore illum
        voluptatibus recusandae, vero sequi quae? Iste aspernatur accusamus
        eaque? Sapiente consectetur, cumque eaque doloremque numquam alias
        expedita autem ad. Possimus, atque deserunt nisi ipsam quo
        exercitationem. Itaque ratione blanditiis aliquid eveniet dolor commodi
        officia et molestias, consequuntur repellendus vel possimus odit illum
        voluptate aperiam. Ipsum at sapiente iste eligendi debitis voluptate
        laborum iure natus suscipit repellat laudantium accusantium, doloremque
        beatae nemo officiis nam saepe quidem dolorem, earum temporibus
        deleniti? Ea aspernatur dolore quo soluta sit, rem ullam dolor iure
        blanditiis laudantium perferendis alias atque a nihil magnam praesentium
        aperiam quasi. Quibusdam, cumque sed sunt inventore consectetur beatae
        quos autem ducimus accusantium quia nihil possimus. Est dolore beatae
        doloremque, tenetur tempora nostrum sapiente eaque voluptas quae aliquam
        libero fugiat consequatur ex quia natus reprehenderit repellendus atque
        aut corrupti dolor dignissimos deserunt ducimus. Ipsum natus nemo quia.
        Cumque, assumenda culpa! Eveniet ut asperiores mollitia, quam iusto
        voluptas ea culpa nam atque? Repudiandae velit officia, vel temporibus
        accusamus autem provident perferendis unde officiis. Autem, ex quae
        explicabo aperiam deleniti vitae nesciunt inventore pariatur itaque
        eaque nam minima enim in accusantium perferendis excepturi eius beatae
        facilis voluptatum quos! Deleniti doloribus, excepturi nesciunt corporis
        esse porro labore, inventore aliquam est harum quasi. Sunt fugiat
        voluptas magnam praesentium recusandae optio dolor ab enim quis laborum
        inventore laboriosam doloremque quam repudiandae, incidunt esse corrupti
        est magni saepe ea neque! Expedita quas deserunt vel culpa dolorem! Eos!
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
