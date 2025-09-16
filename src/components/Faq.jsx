import React, { useState } from "react";

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqData = [
    {
      question: "What types of surveys do you offer?",
      answer:
        "We specialize in topographical, drone, land, layout, and as-built surveys using advanced instruments like Total Station, DSPs, and UAVs.",
    },
    {
      question: "How accurate are your survey results?",
      answer:
        "Our survey results are highly accurate, with precision up to ±2mm for most measurements. We use state-of-the-art equipment and follow strict quality control procedures to ensure the highest level of accuracy in all our surveys.",
    },
    {
      question: "Do you provide survey reports in digital formats?",
      answer:
        "Yes, we provide comprehensive survey reports in various digital formats including PDF, CAD (DWG, DXF), and GIS-compatible formats. We can also provide point cloud data and 3D models when required.",
    },
    {
      question: "How long does it take to complete a land survey?",
      answer:
        "The time required for a land survey depends on the size and complexity of the project. Small residential properties typically take 1-2 days, while larger commercial sites may take 3-5 days. We provide estimated timelines during our initial consultation.",
    },
    {
      question: "Can you assist with legal documentation or approvals?",
      answer:
        "While we primarily focus on the technical aspects of surveying, we can provide the necessary survey documents and certified plans required for legal submissions and approval processes. We often work closely with legal professionals to ensure all documentation meets regulatory requirements.",
    },
  ];

  return (
    <div className="max-w-4xl mx-auto py-12 px-6">
      <h2 className="text-3xl font-bold text-center mb-10 text-gray-800">
        FAQs
      </h2>

      <div className="space-y-4">
        {faqData.map((faq, index) => (
          <div key={index} className="border-b border-gray-200 pb-4">
            <button
              className="flex justify-between items-center w-full text-left font-medium text-lg text-gray-800 hover:text-blue-600 focus:outline-none"
              onClick={() => toggleFAQ(index)}
            >
              <span>{faq.question}</span>
              <span className="text-xl">
                {activeIndex === index ? "-" : "+"}
              </span>
            </button>

            {activeIndex === index && (
              <div className="mt-3 text-gray-600">
                <p>{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
