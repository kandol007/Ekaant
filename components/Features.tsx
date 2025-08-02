import React from 'react';
import Image from 'next/image'; // Import the Next.js Image component
import content from '../data/content.json';

const Features = () => {
  return (
    <section className="bg-white ">

      {/* About Section */}
      <div id="amenities" className="py-16 px-1 md:px-12 lg:px-24 flex flex-col md:flex-row items-center gap-12">
        <div className="md:w-1/2">
          <h2 className="text-4xl font-medium mb-2">{content.about.title}</h2>
            {content.about.description.map((desc, index) => (
            <p key={index} className="mb-4 text-xl font-medium leading-relaxed">{desc}</p>
          ))}
          <button className="mt-4 px-10 py-4 bg-[#003E17] text-white rounded-full hover:bg-green-800 transition-colors flex items-center font-semibold gap-2">
            {content.about.buttonText}
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
        </svg>
          </button>
        </div>
        <div className="md:w-1/2">
          {/* Use Next.js Image for automatic optimization */}
          <Image
            src={content.about.image}
            alt="A tranquil view of the Ekaant property"
            width={600}
            height={450}
            className="rounded-xl shadow-lg w-full h-auto"
          />
          
        </div>
      </div>

   

      {/* What We Offer Section */}
<div id="gallery" className="bg-gray-50 py-16 px-4">
  <div className="max-w-6xl mx-auto">
    
    {/* Styled Title to match the new design */}
    <div className="flex items-center justify-center mb-12">
      <span className="flex-grow border-t border-gray-300"></span>
      <h2 className="text-2xl md:text-3xl font-semibold mx-4 px-6 py-3 border-2 border-[#003E17] text-[#003E17] rounded-full text-center">
        {content.whatWeOffer.title}
      </h2>
      <span className="flex-grow border-t border-gray-300"></span>
    </div>

    {/* Grid for the offer items */}
    <div className="grid gap-x-6 gap-y-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
      {content.whatWeOffer.items.map((item) => (
        // Each item is a flex column centered horizontally
        <div key={item.title} className="flex flex-col items-center text-center group">
          
          {/* Image container with the squircle shape and hover effect */}
          <div className="relative w-full h-64 rounded-[2.5rem] overflow-hidden shadow-lg mb-4">
            <Image
              src={item.image}
              alt={item.title}
              fill
              style={{ objectFit: 'cover' }}
              className="transition-transform duration-300 group-hover:scale-110"
            />
          </div>

          {/* Title is now below the image */}
          <h3 className="text-lg font-semibold text-gray-800">{item.title}</h3>
        </div>
      ))}
    </div>

    {/* Updated Button Styling */}
    <div className="text-center mt-16">
      <button className="px-6 py-3 bg-[#003E17] text-white rounded-full hover:bg-black transition-colors font-semibold flex items-center justify-center gap-2 mx-auto">
        <span>{content.whatWeOffer.buttonText}</span>
        {/* Arrow Icon */}
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
        </svg>
      </button>
    </div>

  </div>
</div>
      
      
      {/* How to Reach Section */}
      <div id="contact" className="py-1 px-6 md:px-12 lg:px-24 text-[#003E17] bg-gray-200">
        <div className="flex flex-col md:flex-row-reverse text-[#003E17] items-center gap-15">
            <div className="md:w-1/2 space-y-8">
            
            {/* CORRECTED: Mapped over the 'methods' array directly */}
            {content.reach.rightContent.methods.map((method) => (
              <div key={method.title}>
                <h3 className="text-3xl font-semibold mb-2 flex font-bold items-center gap-3">
                  {/* You can add icons here later if you want */}
                  {method.title}
                </h3>
                <ul className="list-disc list-inside text-left space-y-1 text-xl font-medium text-[#003E17]">
                  {method.description.map((point, index) => (
                    <li key={index}>{point}</li>
                  ))}
                </ul>
                <ul className="text-gray-500 text-sm mt-2">
                  <li>{method.divider}</li>
                </ul>
              </div>
            ))}
          </div>


          <div className="md:w-1/2">
            <Image
              src={content.reach.leftContent.image}
              alt="A map showing the location of Ekaant"
              width={600}
              height={450}
              className="rounded-xl shadow-lg w-full h-auto"
            />
          </div>
          
        </div>
      </div>
      
    </section>
  );
};

export default Features;