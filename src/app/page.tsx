import About from './Components/about';
import Education from './Components/education';
import Experience from './Components/experience';
import Footer from './Components/footer';
import Header from './Components/header';
import Main from './Components/main';

export default function Home() {
  return (
    <Main>
      <Header></Header>
      <About></About>
      <Education></Education>
      <Experience></Experience>
      <Footer></Footer>
    </Main>
  );
}
