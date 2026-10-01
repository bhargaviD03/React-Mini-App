import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Home from './Pages/Home';
import About from './Pages/About';
import Workprocess from './Pages/Workprocess';
import Testimonials from './Pages/Testimonials';
import Pricingtables from './Pages/Pricingtables';
import Blogentries from './Pages/Blogentries';
import Contactus from './Pages/Contactus';
function App() {

  return (
    <>
      <Header />
      <Home />
      <About />
      <Workprocess />
      <Testimonials />
      <Pricingtables />
      <Blogentries />
      <Contactus />
      <Footer />
    </>
  );
}

export default App;
