import Head from 'next/head'
import Main from '../components/Main'
import About from '../components/About';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Contact from '../components/Contact';


export default function Home() {
  return (
    <div>
      <Head>
        <title>Raven | Portofolio </title>
        <meta name="description" content="Portofolio"/>
        <link rel="icon" href="/fav.png" />
      </Head>
    <Main />
    <About />
    <Skills />
    <Projects />
    <Contact />
    </div>
  )
}
