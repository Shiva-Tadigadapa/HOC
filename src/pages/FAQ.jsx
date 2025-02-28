const FAQ_DATA = [
  {
    id: "01",
    question: "What services does your firm provide?",
    answer:
      "We specialize in creating immersive brand experiences, including experiential design, branding, communication strategy, and curated touchpoints for brands and companies.",
  },
  {
    id: "02",
    question: "How do I begin working with your team?",
    answer:
      "The first step is to schedule a consultation. This allows us to understand your brand, goals, and target audience before crafting a bespoke solution for your needs.  ",
  },
  {
    id: "03",
    question: "What industries do you typically work with?",
    answer:
      "Our clients span industries such as luxury retail, hospitality, real estate, tech, and more. If your brand seeks to deliver an elevated, meaningful experience, we’d love to collaborate.  ",
  },
  {
    id: "04",
    question: "What does your process look like ?",
    answer:
      "Our process includes a discovery phase, research and strategy development, creative ideation, design execution, and final implementation. Every step is tailored to ensure the experience we create is aligned with your brand’s vision.  ",
  },
  {
    id: "05",
    question: "Will I have input throughout the project?",
    answer:
      "Absolutely. We believe in collaboration and will keep you involved throughout the process to ensure the results resonate with your vision and goals.  ",
  },
  {
    id: "06",
    question: "Do you take on international clients ?",
    answer:
      "Yes, we work with clients globally and have extensive experience managing remote collaborations seamlessly.",
  },
  {
    id: "07",
    question: "How is pricing determined?",
    answer:
      "Pricing is bespoke, tailored to the scope and complexity of the project. After our initial consultation, we’ll provide you with a detailed proposal and estimate.  ",
  },
  {
    id: "08",
    question: "Do you offer retainers for ongoing collaboration?",
    answer:
      "Yes, we provide retainer options for clients looking for continuous support in curating and evolving their brand experiences.",
  },
  {
    id: "09",
    question: "What payment structures do you offer?",
    answer:
      "We typically require a deposit to initiate the project, with the balance divided across key milestones or paid upon completion. Payment plans can also be customized based on your preferences.",
  },
  {
    id: "10",
    question: "What will I receive upon project completion?",
    answer:
      "Depending on the project, you’ll receive a full suite of deliverables, including brand guidelines, digital and print-ready assets, and any experiential components created as part of the project.  ",
  },
  {
    id: "11",
    question: "Do you offer support after the project is complete?",
    answer:
      "Of course! We are happy to collaborate with your in-house team and align with any existing brand guidelines to create cohesive and impactful experiences. ",
  },
  {
    id: "12",
    question: "Can you integrate with our existing team or brand guidelines?",
    answer:
      "Of course! We are happy to collaborate with your in-house team and align with any existing brand guidelines to create cohesive and impactful experiences.  ",
  },
  {
    id: "13",
    question: "Do you provide event-based experiential design services?",
    answer:
      "Yes, we curate and design immersive experiences for events, launches, and activations that bring your brand to life.  ",
  },
  {
    id: "14",
    question: "Do you provide event-based experiential design services?",
    answer:
      "Yes, we curate and design immersive experiences for events, launches, and activations that bring your brand to life.  ",
  },
  {
    id: "15",
    question: "How do you measure the success of a brand experience?",
    answer:
      "We define success based on your goals, which may include metrics such as increased engagement, strengthened client relationships, or elevated brand perception. We’ll work with you to establish benchmarks and assess outcomes.",
  },
];
const FAQ_CATEGORIES = [
  {
    idx: 1,
    id: "services",
    title: "General Questions",
    faqs: [
      FAQ_DATA[0], // What services does your firm provide?
      FAQ_DATA[1], // How do I begin working with your team?
      FAQ_DATA[2], // Will I have input throughout the project?
      // FAQ_DATA[11], // Can you integrate with our existing team?
    ],
  },
  {
    idx: 2,
    id: "process",
    title: "Process & Collaboration",
    faqs: [
      FAQ_DATA[3], // What does your process look like?
      FAQ_DATA[4], // Do you offer support after the project is complete?
      FAQ_DATA[5], // What will I receive upon project completion?
    ],
  },
  {
    idx: 3,
    id: "industries",
    title: "Pricing & Payments",
    faqs: [
      FAQ_DATA[6], // What industries do you typically work with?
      FAQ_DATA[7], // Do you take on international clients?
      FAQ_DATA[8], // Do you provide event-based experiential design services?
      // How do you measure the success?
    ],
  },

  {
    idx: 4,
    id: "pricing",
    title: "Deliverables",
    faqs: [
      FAQ_DATA[9], // How is pricing determined?
      FAQ_DATA[10], // Do you offer retainers?
      FAQ_DATA[11], // What payment structures do you offer?
    ],
  },
  {
    idx: 5,
    id: "others",
    title: "Other FAQ'S",
    faqs: [FAQ_DATA[12], FAQ_DATA[13], FAQ_DATA[14]],
  },
];

import React, { useState } from "react";
import { motion } from "framer-motion";
import { AnimatePresence } from "framer-motion";

const FAQItem = ({ item, isOpen, onToggle }) => {
  return (
    <div className="border-b   max-w-xl px-4 md:max-w-2xl border-blue-100/10">
      <button
        className="flex w-full items-center justify-between py-6 text-left"
        onClick={onToggle}
      >
        <div className="flex items-center">
          <span className="text-[#2354CF] font-bold mr-4 text-xl md:text-[32px]">
            -
          </span>
          <span className="text-white text-xl md:text-2xl">
            {item.question}
          </span>
        </div>
        <motion.span
          animate={{ rotate: isOpen ? 45 : 0 }}
          className="text-blue-500 text-2xl ml-4"
        >
          <svg
            width="33"
            height="32"
            viewBox="0 0 33 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_20_2513)">
              <g clip-path="url(#clip1_20_2513)">
                <path
                  d="M19.5509 28.6184L21.5812 26.5881V20.9292H27.2401L29.2704 18.8989H19.5509V28.6184Z"
                  fill="#060EBB"
                />
                <path
                  d="M15.4759 1.01491C15.4759 3.95236 15.4759 12.016 15.4759 14.8238C12.7113 14.8238 4.54689 14.8238 1.66703 14.8238L0.651886 15.8389L1.66703 16.8541H15.4759C15.4759 17.9196 15.4759 29.2807 15.4759 30.663L16.4911 31.6781L17.5063 30.663V16.8541H31.3151L32.3303 15.8389L31.3151 14.8238C29.8752 14.8238 18.615 14.8238 17.5063 14.8238V1.01491L16.4911 -0.000244141L15.4759 1.01491Z"
                  fill="#060EBB"
                />
                <path
                  d="M3.71173 18.8989L5.74203 20.9292H11.401V26.5881L13.4312 28.6184V18.8989H3.71173Z"
                  fill="#060EBB"
                />
                <path
                  d="M13.4312 12.7793V3.05981L11.401 5.09011V10.7491H5.74203L3.71173 12.7793H13.4312Z"
                  fill="#060EBB"
                />
                <path
                  d="M19.5509 12.7793H29.2704L27.2401 10.7491H21.5812V5.09011L19.5509 3.05981V12.7793Z"
                  fill="#060EBB"
                />
              </g>
            </g>
            <defs>
              <clipPath id="clip0_20_2513">
                <rect
                  width="32"
                  height="32"
                  fill="white"
                  transform="translate(0.330017)"
                />
              </clipPath>
              <clipPath id="clip1_20_2513">
                <rect
                  width="32"
                  height="32"
                  fill="white"
                  transform="translate(0.330017)"
                />
              </clipPath>
            </defs>
          </svg>
        </motion.span>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <p className="pb-6 pl-12  text-left text-gray-300">{item.answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const CategoryAccordion = ({
  category,
  openCategoryId,
  openFaqId,
  onCategoryToggle,
  onFaqToggle,
}) => {
  return (
    <div className="border-b    jost border-blue-100/10">
      <button
        className="flex w-full items-center justify-between py-6 text-left"
        onClick={() => onCategoryToggle(category.id)}
      >
        <span className="text-white text-2xl md:text-3xl font-bold">
          <span className=" text-4xl text-[#060ebb] mr-2">
            {" "}
            0{category.idx}
          </span>{" "}
          {category.title}
        </span>
        <motion.span
          animate={{ rotate: openCategoryId === category.id ? 45 : 0 }}
          className="text-blue-500"
        >
          <svg
            width="33"
            height="32"
            viewBox="0 0 33 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_20_2513)">
              <g clip-path="url(#clip1_20_2513)">
                <path
                  d="M19.5509 28.6184L21.5812 26.5881V20.9292H27.2401L29.2704 18.8989H19.5509V28.6184Z"
                  fill="#060EBB"
                />
                <path
                  d="M15.4759 1.01491C15.4759 3.95236 15.4759 12.016 15.4759 14.8238C12.7113 14.8238 4.54689 14.8238 1.66703 14.8238L0.651886 15.8389L1.66703 16.8541H15.4759C15.4759 17.9196 15.4759 29.2807 15.4759 30.663L16.4911 31.6781L17.5063 30.663V16.8541H31.3151L32.3303 15.8389L31.3151 14.8238C29.8752 14.8238 18.615 14.8238 17.5063 14.8238V1.01491L16.4911 -0.000244141L15.4759 1.01491Z"
                  fill="#060EBB"
                />
                <path
                  d="M3.71173 18.8989L5.74203 20.9292H11.401V26.5881L13.4312 28.6184V18.8989H3.71173Z"
                  fill="#060EBB"
                />
                <path
                  d="M13.4312 12.7793V3.05981L11.401 5.09011V10.7491H5.74203L3.71173 12.7793H13.4312Z"
                  fill="#060EBB"
                />
                <path
                  d="M19.5509 12.7793H29.2704L27.2401 10.7491H21.5812V5.09011L19.5509 3.05981V12.7793Z"
                  fill="#060EBB"
                />
              </g>
            </g>
            <defs>
              <clipPath id="clip0_20_2513">
                <rect
                  width="32"
                  height="32"
                  fill="white"
                  transform="translate(0.330017)"
                />
              </clipPath>
              <clipPath id="clip1_20_2513">
                <rect
                  width="32"
                  height="32"
                  fill="white"
                  transform="translate(0.330017)"
                />
              </clipPath>
            </defs>
          </svg>
        </motion.span>
      </button>
      <AnimatePresence>
        {openCategoryId === category.id && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            {category.faqs.map((faq) => (
              <FAQItem
                key={faq.id}
                item={faq}
                isOpen={openFaqId === faq.id}
                onToggle={() => onFaqToggle(category.id, faq.id)}
              />
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const FAQ = () => {
  const [openCategoryId, setOpenCategoryId] = useState(null);
  const [openFaqId, setOpenFaqId] = useState(null);

  const handleCategoryToggle = (categoryId) => {
    setOpenCategoryId(openCategoryId === categoryId ? null : categoryId);
    setOpenFaqId(null); // Close any open FAQ when switching categories
  };

  const handleFaqToggle = (categoryId, faqId) => {
    setOpenCategoryId(categoryId);
    setOpenFaqId(openFaqId === faqId ? null : faqId);
  };

  return (
    <div className="min-h-screen mt-60 bg-black">
      <div className="justify-evenly md:items-start items-center   flex flex-col md:flex-row mx-auto py-32">
        <div className="mb-12 text-center md:text-left md:sticky md:top-32 md:h-fit">
          <h2 className="text-[#060ebb] salo text-5xl md:text-[90px] md:leading-[120px]">
            FAQS
          </h2>
          {/* <p className="text-[#F4ECE0] jost uppercase text-xs md:text-[15px] font-bold">
            frequently asked questions
            </p> */}
        </div>

        <div className="space-y-4 md:w-[600px] px-4">
          {FAQ_CATEGORIES.map((category) => (
            <CategoryAccordion
              key={category.id}
              category={category}
              openCategoryId={openCategoryId}
              openFaqId={openFaqId}
              onCategoryToggle={handleCategoryToggle}
              onFaqToggle={handleFaqToggle}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
