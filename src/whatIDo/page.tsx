import { Icon } from "@iconify/react";

export default function WhatIDo() {
  const services = [
    {
      icon: "streamline-freehand:programming-code-idea",
      title: "UI/UX",
      description:
        "I build responsive and interactive web interfaces using React, Next.js, HTML, CSS, and JavaScript with a focus on performance and accessibility.",
    },
    {
      icon: "fluent:developer-board-search-20-regular",
      title: "Frontend Developer",
      description:
        "I build responsive and interactive web interfaces using React, Next.js, HTML, CSS, and JavaScript with a focus on performance and accessibility.",
    },
    {
      icon: "material-symbols-light:developer-mode-tv-outline-rounded",
      title: "Backend Developer",
      description:
        "I develop robust backend systems using PHP and Node.js, handling APIs, databases, and optimization with secure and scalable architecture.",
    },
    {
      icon: "streamline-freehand:programming-code-idea",
      title: "Fullstack Developer",
      description:
        "I deliver complete web applications from frontend to backend using JavaScript, TypeScript, and frameworks like Next.js and Laravel.",
    },
    {
      icon: "streamline-freehand:programming-code-idea",
      title: "Graphic Design",
      description:
        "I create visually appealing digital assets including logos, banners, and social media content using tools like Figma, Photoshop, and Illustrator.",
    },
  ];

  return (
    <section
      id="whatido"
      className="main min-h-screen w-full  py-16 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <div className="text-center mb-16">
          <h2
            className="text-4xl sm:text-5xl lg:text-6xl font-black mb-8"
            style={{ color: "#dfd0b87a" }}
          >
            WHAT I DO
          </h2>
        </div>

        {/* Services Grid */}
        <div className="space-y-8">
          {/* Top Row - 3 Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {services.slice(0, 3).map((service, index) => (
              <div
                key={index}
                className="bg-[#393e46] rounded-lg p-8 flex flex-col items-center text-center h-[280px]"
              >
                <div className="w-16 h-16 bg-[#222831] rounded-full flex items-center justify-center mb-6">
                  <Icon
                    icon={service.icon}
                    width="32"
                    height="32"
                    style={{ color: "#DFD0B8" }}
                  />
                </div>
                <div className="flex flex-col items-center flex-grow">
                  <h3 className="text-xl font-bold text-white mb-4 tracking-wide">
                    {service.title}
                  </h3>
                  <div className="w-12 h-0.5 bg-[#DFD0B8] mb-6"></div>
                  <p className="text-gray-300 font-normal leading-relaxed text-sm px-2">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Row - 2 Cards Centered */}
          <div className="flex justify-center">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-4xl w-full">
              {services.slice(3).map((service, index) => (
                <div
                  key={index + 3}
                  className="bg-[#393e46] rounded-lg p-8 flex flex-col items-center text-center h-[280px]"
                >
                  <div className="w-16 h-16 bg-[#222831] rounded-full flex items-center justify-center mb-6">
                    <Icon
                      icon={service.icon}
                      width="32"
                      height="32"
                      style={{ color: "#DFD0B8" }}
                    />
                  </div>
                  <div className="flex flex-col items-center flex-grow">
                    <h3 className="text-xl font-bold text-white mb-4 tracking-wide">
                      {service.title}
                    </h3>
                    <div className="w-12 h-0.5 bg-[#DFD0B8] mb-6"></div>
                    <p className="text-gray-300 font-normal leading-relaxed text-sm px-2">
                      {service.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
