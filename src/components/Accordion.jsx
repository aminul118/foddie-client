import React, { useState } from "react";


const Accordion = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const accordionData = [
    {
      id: 1,
      title: "How does Foddie meal  delivery service work?",
      content:
        "Our meal delivery service allows you to skip meal planning and grocery shopping. HelloFresh delivers step-by-step recipes and fresh, pre-portioned ingredients.",
    },
    {
      id: 2,
      title: "How much does Foddie cost?",
      content: "Foddie offers flexible pricing plans to fit every budget.",
    },
    {
      id: 3,
      title: "Why choose Foddie for your meal kit service?",
      content:
        "Foddie offers fresh ingredients, easy recipes, and flexible deliveries.",
    },
    {
      id: 4,
      title: "How many times a week does Foddie deliver?",
      content: "You can customize your delivery schedule to match your needs.",
    },
  ];

  return (
    <div className="rounded-lg overflow-hidden ">
     

      {accordionData.map((item, index) => (
        <div
          key={item.id}
          className={`overflow-hidden ${
            openIndex === index ? "bg-black text-white" : "bg-red-400"
          }`}
        >
          {/* Accordion Header */}
          <div
            onClick={() => toggleAccordion(index)}
            className={`flex justify-between items-center p-4 cursor-pointer transition-all ${
              openIndex === index ? "bg-black text-white" : "hover:bg-red-500"
            }`}
          >
            <div className="flex items-center gap-4">
              <span
                className={`text-2xl font-bold ${
                  openIndex === index ? "text-white" : "text-gray-700"
                }`}
              >
                {String(item.id).padStart(2, "0")}
              </span>
              <h3 className="text-lg font-semibold">{item.title}</h3>
            </div>
            <span className="text-3xl">{openIndex === index ? "−" : "+"}</span>
          </div>

          {/* Accordion Content */}
          {openIndex === index && (
            <div className="p-4 bg-black text-white">
              <p>{item.content}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Accordion;
