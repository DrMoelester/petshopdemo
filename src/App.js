import './index.css';
import Header from './Header';
import Navbar from './Navbar';
import BackgroundSlider from './BackgroundSlider';
import Categories from './Categories';
import NewArrivals from './NewArrivals';
import FooterTop from './FooterTop';
import Footer from './Footer';
import Chat from './Chat';

function App() {
  return (
    <div className="App">
      <Chat/>
      <Header/>
      <Navbar/>
      <BackgroundSlider/>
      <Categories/>
      <NewArrivals/>
      <FooterTop/>
      <Footer/>
    </div>
  );
}

export default App;
