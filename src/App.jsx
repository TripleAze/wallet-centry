import "./App.css";
import {
  Navbar,
  Hero,
  GetStarted,
  Features,
  Testimonials,
  DownloadAds,
  FAQ,
  CTA,
  Footer,
} from "./components";
import {
  hero_pattern,
  dowloadAds_pattern,
  dowloadAds_pattern_sm,
  noise_bg,
} from "./assets";
import Lenis from "lenis";

function App() {
  // Initialize Lenis

  const lenis = new Lenis({
    autoRaf: true,
  });

  // Listen for the scroll event and log the event data
  lenis.on("scroll", (e) => {
    console.log(e);
  });
  // Define the radial gradient background style
  const radialGradientStyle = {
    background: `
      radial-gradient(50% 50% at 50% 50%, #385334 0%, #041402 100%), 
      url(${noise_bg})`,
    backgroundBlendMode: "overlay",
    // Other styles for your component
  };

  const HeroBgPatternSectionStyle = () => (
    <>
      <div className="hidden md:block absolute top-0 right-0 bg-cover bg-no-repeat">
        <img src={hero_pattern} alt="hero_pattern" />
      </div>
      <div className="sm:block md:hidden absolute w-[75%] top-0 right-0 bg-cover bg-no-repeat">
        <img src={hero_pattern} alt="hero_pattern" />
      </div>
    </>
  );

  const DowloadAdsBgPatternSectionStyle = () => (
    <>
      <div className="hidden md:block absolute top-0 right-0 bg-cover bg-no-repeat h-[100%]">
        <img
          src={dowloadAds_pattern}
          className="h-[100%]"
          alt="downloadads_pattern"
        />
      </div>
      <div className="sm:block md:hidden absolute top-0 right-0 bg-cover bg-no-repeat">
        <img src={dowloadAds_pattern_sm} alt="downloadads_pattern" />
      </div>
    </>
  );

  return (
    <>
      <div className="w-full overflow-hidden mx-auto">
        <div style={radialGradientStyle} className="relative">
          <HeroBgPatternSectionStyle />
          <Navbar />
          <Hero />
        </div>
        <GetStarted />
        <Features />
        <Testimonials />
        <div style={radialGradientStyle} className="relative">
          <DowloadAdsBgPatternSectionStyle />
          <DownloadAds />
        </div>
        <FAQ />
        <CTA />
        <Footer />
      </div>
    </>
  );
}

export default App;
