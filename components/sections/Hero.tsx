import GatewayFeatures from "@/components/sections/GatewayFeatures";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import Testimonials from "@/components/sections/Testimonials";
import ExcitingMoments from "@/components/sections/ExcitingMoments";
import JoinTrip from "@/components/sections/JoinTrip";
import Image from "next/image";

const sectionspage = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="relative w-full h-screen overflow-hidden">
        <video
          className="absolute top-0 left-0 object-cover w-full h-full"
          src="/videos/hero/nightvideo.mp4"
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
          <h2 className="mt-4 text-2xl font-semibold text-yellow-400 text-nowrap md:text-4xl lg:text-5xl animate-pulse">
            Kijichi Gateway Hotel
          </h2>
          <p className="max-w-xl mt-6 text-lg md:text-xl">
            Experience comfort, luxury, and timeless hospitality.
          </p>

          {/* Marquee Section */}
          <div className="absolute w-full overflow-hidden bottom-10">
            <div className="flex items-center gap-4 animate-marquee whitespace-nowrap">
              {/* Circular Image */}
              <Image
              width={20}
              height={20}
                src="/images/christianbella.jpg"
                alt="Christian Bella"
                className="border-2 border-yellow-400 rounded-full w-14 h-14 animate-spin-slow"
              />
              <p className="text-lg font-semibold text-yellow-400 md:text-xl">
                Cristian Bella is coming on tarehe tano Kijichi, karibuni nyote!
              </p>
            </div>
          </div>
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
