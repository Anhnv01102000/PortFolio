import './App.scss';
import Banner from './components/banner/banner';
import { Contact } from './components/contact/contact';
import { Footer } from './components/footer/footer';
import Header from './components/header/header';
import { Projects } from './components/project/project';
import Skill from './components/skill/skill';

function App() {
  return (
    <div className='app-container'>
      <Header />
      <Banner />
      <Skill />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
