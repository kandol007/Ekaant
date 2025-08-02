'use client';

import React, { useEffect, useState } from 'react';

// --- Type Definitions (Unchanged) ---
type FAQItemData = {
  question: string;
  answer: string;
};

type FAQSectionData = {
  title: string;
  questions: FAQItemData[];
};

// --- Reusable Accordion Item Component ---
// This component manages the state for a single FAQ item.
const AccordionItem = ({ faq }: { faq: FAQItemData }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-green-800 rounded-lg">
      {/* The button toggles the accordion's open/closed state */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center p-6 text-left font-semibold"
      >
        <span>{faq.question}</span>
        {/* The arrow icon rotates based on the state */}
        <svg
          className={`w-5 h-5 transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
        </svg>
      </button>
      
      {/* The answer is conditionally rendered with a smooth transition */}
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-screen' : 'max-h-0'
        }`}
      >
        <p className="p-4 pt-0 text-gray-700">{faq.answer}</p>
      </div>
    </div>
  );
};


// --- Main FAQs Component ---
const FAQs = () => {
  const [faqData, setFaqData] = useState<FAQSectionData | null>(null);

  useEffect(() => {
    fetch('/api/content')
      .then(res => res.json())
      .then(data => setFaqData(data.faqs));
  }, []);

  if (!faqData) {
    return (
      <section className="py-16 bg-white text-center">
        <p>Loading FAQs...</p>
      </section>
    );
  }

  return (
    <section className="py-16 px-4 bg-white text-[#003E17]">
      <div className="max-w-5xl mx-auto">
        
        {/* Styled Title to match the design */}
        <div className="flex items-center justify-center mb-12">
          <span className="flex-grow border-t border-gray-300"></span>
          <h2 className="text-2xl md:text-3xl font-semibold mx-4 px-6 py-3 border-2 border-[#003E17] rounded-full text-center">
            {faqData.title}
          </h2>
          <span className="flex-grow border-t border-gray-300"></span>
        </div>
        
        {/* Two-column grid for the accordion items */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {faqData.questions.map((faq) => (
            <AccordionItem key={faq.question} faq={faq} />
          ))}
        </div>

      </div>
    </section>
  );
};

export default FAQs;
