import './App.css';
import './assets/css/Style.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from './landingPage/LandingPage';
import { MetaServices } from './landingPage/ServicesPages/ServiceMeta';
import { WebARServices } from './landingPage/ServicesPages/ServiceAR';
import { BlockChain } from './landingPage/ServicesPages/BlockchainService';
import { ARVRTraning } from './landingPage/ServicesPages/ARVREducation';
import { ARVRXRGame } from './landingPage/ServicesPages/ARVRXRGame';
import { MobileApp } from './landingPage/ServicesPages/UIUXMobileApp';
import { PrivacyPolicy } from './components/PrivacyPolicy';
import { TermCondition } from './components/Term&Conditions';
import { Helmet } from 'react-helmet';

function App() {
  // Helper Component for SEO Metadata
  const RouteSpecificMeta = ({ title, description }) => (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
    </Helmet>
  );
  
  // Individual Components with Meta
  const LandingPageWithMeta = () => (
    <>
      <RouteSpecificMeta title="Futurristic" description="Welcome to our landing page!" />
      <LandingPage />
    </>
  );
  
  const MetaServicesWithMeta = () => (
    <>
      <RouteSpecificMeta title="Metaverse Development | Metaverse Services & Solutions" description="Explore professional Metaverse Services & Solutions, offering outstanding AR VR development for immersive experiences to drive engagement and growth." />
      <MetaServices />
    </>
  );
  
  const WebARServicesWithMeta = () => (
    <>
      <RouteSpecificMeta title="Web AR-Based Marketing Solutions | Web Based AR" description="DDiscover cutting-edge Web based augmented reality marketing solutions tailored to your business needs. Engage your audience with immersive AR experiences." />
      <WebARServices />
    </>
  );
  
  const BlockChainWithMeta = () => (
    <>
      <RouteSpecificMeta title="Blockchain Integration and Solutions " description="Have your business benefit from expert Blockchain integration and solutions, ensuring streamlined operations and enhanced security measures." />
      <BlockChain />
    </>
  );
  
  const ARVRTraningWithMeta = () => (
    <>
      <RouteSpecificMeta title="Interactive AR/VR/XR Game Development" description="Get your first or upgrade existing game with the AR/VR/XR game development services & solutions. Transform player experiences today with us." />
      <ARVRTraning />
    </>
  );
  
  const ARVRXRGameWithMeta = () => (
    <>
      <RouteSpecificMeta title="AR VR Training & Educational Platform" description="Give your AR/VR training & educational platform a boost by offering an immersive experience to your learners. Get enhanced educational outcomes." />
      <ARVRXRGame />
    </>
  );
  
  const MobileAppWithMeta = () => (
    <>
      <RouteSpecificMeta title="Mobile, Web & Enterprise Development" description="Develop custom mobile applications, websites or web apps, and enterprise platforms like SaaS, PaaS, CRM, etc.  to enhance your digital presence effectively. Start now." />
      <MobileApp />
    </>
  );
  
  const PrivacyPolicyWithMeta = () => (
    <>
      <RouteSpecificMeta title="Privacy Policy" description="Read our privacy policy." />
      <PrivacyPolicy />
    </>
  );
  
  const TermConditionWithMeta = () => (
    <>
      <RouteSpecificMeta title="Terms and Conditions" description="Read our terms and conditions." />
      <TermCondition />
    </>
  );
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPageWithMeta />} />
          <Route path="/metaverse-end-to-end-solutions" element={<MetaServicesWithMeta />} />
          <Route path="/web-ar-based-marketing-solutions" element={<WebARServicesWithMeta />} />
          <Route path="/blockchain-integration-and-solutions" element={<BlockChainWithMeta />} />
          <Route path="/ar-vr-training-&-educational-platform" element={<ARVRTraningWithMeta />} />
          <Route path="/interactive-ar-vr-xr-game-development" element={<ARVRXRGameWithMeta />} />
          <Route path="/mobile-web-&-enterprise-development" element={<MobileAppWithMeta />} />
          <Route path="/privacypolicy" element={<PrivacyPolicyWithMeta />} />
          <Route path="/termandcondition" element={<TermConditionWithMeta />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

