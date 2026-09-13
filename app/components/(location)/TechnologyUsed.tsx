import React, { useState } from 'react';
import { MessageCircle, ChevronDown, ChevronUp } from 'lucide-react';

// --- SEPARATE FAQ DATA ---
const faqData = [
  {
    question: "Do you work with agencies?",
    answer: "Yes, we regularly partner with design and marketing agencies to provide high-quality, white-label development services for their clients."
  },
  {
    question: "Can you convert Figma designs into websites?",
    answer: "Absolutely. We specialize in pixel-perfect Figma to code conversions, ensuring your exact design is brought to life flawlessly on the web."
  },
  {
    question: "Do you provide ongoing support?",
    answer: "Yes, we offer maintenance and support packages to ensure your website stays secure, up-to-date, and performs optimally over time."
  },
  {
    question: "Do you build eCommerce websites?",
    answer: "We do. We have extensive experience building scalable and secure eCommerce platforms using modern web technologies."
  },
  {
    question: "How quickly can you start?",
    answer: "Our availability varies, but we typically begin new projects within 1-2 Days of finalizing the project scope and agreement."
  }
];

// --- TECHNOLOGY DATA FOR CAROUSEL ---
const technologies = [
  { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
  { name: 'Next.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg' },
  { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
  { name: 'TypeScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
  { name: 'Tailwind CSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg' },
  { name: 'MongoDB', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
  { name: 'PostgreSQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
  { name: 'GraphQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg' },
  { name: 'Docker', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
  { name: 'AWS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg' }
];

const TechnologyUsed = () => {
  const [openFaqIndex, setOpenFaqIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <div className="w-full py-16 min-h-screen">

      {/* TECHNOLOGIES USED */}
      <h1 className="text-3xl md:text-4xl font-archivo-black text-center mb-10">
        Technologies Used
      </h1>

      {/* Carousel Container */}
      <div className="relative w-full overflow-hidden flex py-6 rounded-xl border border-gray-200">

        {/* Gradient Masks */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>

        {/* Scrolling Track */}
        <div className="flex animate-infinite-scroll w-max items-center">

          {[...technologies, ...technologies].map((tech, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center justify-center mx-8 md:mx-12 min-w-[80px]"
            >
              <img
                src={tech.icon}
                alt={`${tech.name} icon`}
                className="w-14 h-14 md:w-16 md:h-16 object-contain mb-3 drop-shadow-sm"
                loading="lazy"
              />

              <span className="text-sm font-extrabold tracking-tight">
                {tech.name}
              </span>
            </div>
          ))}

        </div>
      </div>

      {/* Spacer */}
      <div className="max-w-7xl mx-auto px-4 md:px-12 mb-24"></div>

      {/* FAQ SECTION */}
      <div className="max-w-7xl mx-auto px-4 md:px-12">

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">

          {/* Left Column */}
          <div className="lg:col-span-5 flex flex-col justify-start">

            <span className="font-extrabold tracking-widest text-sm uppercase mb-3 block">
              Common Inquiries
            </span>

            <h2 className="text-4xl md:text-5xl font-jakarta font-extrabold leading-tight mb-6 tracking-tight">
              Frequently Asked<br />Questions
            </h2>

            <p className="text-lg font-medium mb-10 max-w-md leading-relaxed">
              Have questions about the project flow, white-label developer partnerships, or deliverables? Here are some clear answers.
            </p>

            {/* Still Have Questions Box */}
            <div className="border border-gray-200 rounded-2xl p-8 max-w-sm">

              <h3 className="font-extrabold mb-5 text-base">
                Still have questions?
              </h3>

              <button className="flex items-center gap-3 border border-gray-300 rounded-full px-5 py-2.5 hover:opacity-70 transition-opacity duration-200 group">

                <MessageCircle className="w-5 h-5 group-hover:scale-110 transition-transform" />

                <span className="font-extrabold text-sm">
                  Ask us on WhatsApp
                </span>

              </button>

            </div>
          </div>

          {/* Right Column: Accordion */}
          <div className="lg:col-span-7 flex flex-col gap-4">

            {faqData.map((item, index) => {
              const isOpen = openFaqIndex === index;

              return (
                <div
                  key={index}
                  className="border border-gray-200 rounded-xl overflow-hidden transition-all duration-300"
                >

                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full text-left px-6 py-5 flex items-center justify-between focus:outline-none hover:opacity-70 transition-opacity"
                  >

                    <span className="font-jakarta font-extrabold text-lg pr-4 tracking-tight">
                      {item.question}
                    </span>

                    <span className="shrink-0">
                      {isOpen ? (
                        <ChevronUp className="w-5 h-5" strokeWidth={3} />
                      ) : (
                        <ChevronDown className="w-5 h-5" strokeWidth={3} />
                      )}
                    </span>

                  </button>

                  {/* Expandable Answer */}
                  <div
                    className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${
                      isOpen
                        ? 'max-h-40 pb-5 opacity-100'
                        : 'max-h-0 opacity-0'
                    }`}
                  >

                    <p className="text-base font-medium leading-relaxed border-t border-gray-100 pt-4">
                      {item.answer}
                    </p>

                  </div>

                </div>
              );
            })}

          </div>

        </div>
      </div>

      {/* Embedded Styles for Infinite Marquee */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
            @keyframes infinite-scroll {
              0% {
                transform: translateX(0);
              }

              100% {
                transform: translateX(-50%);
              }
            }

            .animate-infinite-scroll {
              animation: infinite-scroll 25s linear infinite;
            }

            .animate-infinite-scroll:hover {
              animation-play-state: paused;
            }
          `
        }}
      />

    </div>
  );
};

export default TechnologyUsed;