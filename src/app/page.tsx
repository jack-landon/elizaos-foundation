export default function Home() {
  return (
    <div className="mx-0 h-full min-h-[90vh] relative overflow-hidden">
      {/* Background video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        poster="/orb-placeholder.png"
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[560px] h-[520px] md:w-[990px] md:h-[915px] 2xl:w-auto 2xl:h-full object-cover -z-10"
        >
        <source src="/orb.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Content */}
      <div className="ml-4 md:ml-12 flex justify-end h-2/5 w-full absolute bottom-0 left-0 flex-col space-y-6">
        <h1 className="text-white text-[36px] md:text-[53px] lg:text-[70px] font-bold uppercase max-w-sm md:max-w-2xl leading-none">
          YOUR FOUNDATION FOR THE FUTURE
        </h1>
        <p className="text-white text-[18px] md:text-[27px] lg:text-[36px] font-normal max-w-sm md:max-w-3xl leading-tight">
          The Eliza Foundation works with institutions, businesses, regulators,
          and policymakers to solve problems in new ways.
        </p>
      </div>
    </div>
  );
}
