import './App.css';
import LandingPage from './landingPage/LandingPage';
import './assets/css/Style.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { MetaServices } from './landingPage/ServicesPages/ServiceMeta';
import { WebARServices } from './landingPage/ServicesPages/ServiceAR';
import { BlockChain } from './landingPage/ServicesPages/BlockchainService';
import { ARVRTraning } from './landingPage/ServicesPages/ARVREducation';
import { ARVRXRGame } from './landingPage/ServicesPages/ARVRXRGame';
import { MobileApp } from './landingPage/ServicesPages/UIUXMobileApp';
import { PrivacyPolicy } from './components/PrivacyPolicy';
import { TermCondition } from './components/Term&Conditions';



function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/meta" element={<MetaServices />} />
          <Route path="/webAr" element={<WebARServices/>} />
          <Route path="/blockchain" element={<BlockChain/>} />
          <Route path="/arvrtraning" element={<ARVRTraning/>} />
          <Route path="/arvrxrgame" element={<ARVRXRGame/>} />
          <Route path="/mobileapp" element={<MobileApp/>} />
          <Route path="/privacypolicy" element={<PrivacyPolicy/>} />
          <Route path="/termandcondition" element={<TermCondition/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
