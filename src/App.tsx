import Header from './components/header';
import Hero from './components/hero';
import OurSoftware from './components/our-software';
import OurInterfaces from './components/our-interfaces';
import InnovativeSolution from './components/innovative-solution';
import Footer from './components/footer';
import OurSolutions from './components/our-solutions';
import Banner from './components/banner';

function App() {
  return (
    <div className="App">
      <Header/>
      <Hero/>
      <InnovativeSolution/>
      <OurSolutions/>
      <OurSoftware/>
      <OurInterfaces/>
      <Banner/>
      <Footer/>
    </div>
  );
};

export default App;