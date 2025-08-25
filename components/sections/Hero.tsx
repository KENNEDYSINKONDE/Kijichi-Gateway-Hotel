
import GatewayFeatures from "@/components/sections/GatewayFeatures";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import Testimonials from "@/components/sections/Testimonials";
import ExcitingMoments from "@/components/sections/ExcitingMoments";
import JoinTrip from "@/components/sections/JoinTrip";


const sectionspage = () => {
  

  return (
    <>
      {/* Hero Section */}
      <section className="relative w-full h-screen overflow-hidden">
        <video
          // ref={videoRef}
          className="absolute top-0 left-0 object-cover w-full h-full"
          src="/videos/hero/herovideo.mp4"
          autoPlay
          loop
          muted
          playsInline
        />
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 text-center text-white">
          <h1 className="text-3xl font-bold md:text-5xl lg:text-6xl animate-bounce">
            Welcome to
          </h1>
          <h2 className="mt-4 text-2xl font-semibold text-yellow-400 md:text-4xl lg:text-5xl animate-pulse">
            Kijichi Gateway Hotel
          </h2>
          <p className="max-w-xl mt-6 text-lg md:text-xl">
            Experience comfort, luxury, and timeless hospitality.
          </p>
        </div>
      </section>

      {/* Other Sections */}
      <GatewayFeatures />
      <WhyChooseUs />
      <Testimonials />
      <ExcitingMoments />
      <JoinTrip />
    </>
  );
};

export default sectionspage;
