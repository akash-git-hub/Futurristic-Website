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
      <RouteSpecificMeta title="Futurristic" description="Immersive tech solution provider. Vision pro app development, augmented reality, virtual reality, mixed reality, extended reality, Metaverse development, blockchain, and much more. " />
      <LandingPage />
    </>
  );
  
  const MetaServicesWithMeta = () => (
    <>
      <RouteSpecificMeta title="Metaverse Development | Metaverse Services & Solutions" description="Explore cutting-edge Metaverse consulting services & solutions, expert Metaverse development, and immersive experiences tailored for your business growth. " />
      <MetaServices />
    </>
  );
  
  const WebARServicesWithMeta = () => (
    <>
      <RouteSpecificMeta title="Web AR Development and Marketing Solutions | Web Based AR" description="Elevate your marketing efforts with WebAR development. Launch effective Web-based AR campaigns. Achieve more with our WebAR marketing/business solutions! " />
      <WebARServices />
    </>
  );
  
  const BlockChainWithMeta = () => (
    <>
      <RouteSpecificMeta title="Blockchain Integration and Solutions  | Blockchain Integration and Development Services" description="Get expert consultation on blockchain integration and development with Futurristic. Ensure streamlined operations and enhanced security measures." />
      <BlockChain />
    </>
  );
  
  const ARVRTraningWithMeta = () => (
    <>
      <RouteSpecificMeta title="AR VR Training & Educational Platform" description="Create immersive learning environments with our augmented reality and virtual reality apps development services, focused on training and education excellence." />
      <ARVRTraning />
    </>
  );
  
  const ARVRXRGameWithMeta = () => (
    <>
      <RouteSpecificMeta title="Interactive AR/VR/XR Game Design & Development Services" description="Augmented Reality/Virtual Reality/Extended Reality/Unity/PC/Mobile Game design and development services and solutions. Metaverse integration game development." />
      <ARVRXRGame />
    </>
  );
  
  const MobileAppWithMeta = () => (
    <>
      <RouteSpecificMeta title="Mobile Web & Enterprise Development Services" description="Develop custom mobile applications, web apps, and enterprise platforms like SaaS, PaaS, CRM, etc. to enhance your digital presence effectively." />
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
          <Route path="/termsandconditions" element={<TermConditionWithMeta />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

