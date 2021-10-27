import './App.css';
//import Footer from './Component/Footer';
import GenerateBox from './Component/GenerateComponent/GenerateBox';
import HeroSection from './Component/HeroSection';
import Layout from './Component/Layout';
import ModalComponent from './Component/ModalComponent';

function App() {
  return (
   <Layout>
      <HeroSection />
      <GenerateBox />
      {/* <Footer /> */}
      <ModalComponent />
   </Layout>
  );
}

export default App;
