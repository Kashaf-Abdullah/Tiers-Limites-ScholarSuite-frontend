import React, { useState } from "react";

import FAQ from "./FaqsComp";

export default function FAQs() {
  const [faqs, setFaqs] = useState([
    
    {
      question: "How much is renters insurance?",
      answer:
        "Renters insurance costs $15-$25 per month on average. Costs vary based on location, accommodation type, and personal contents.",
      open: true,
    },
    {
      question: "Can I get financial help with student accommodation?",
      answer:
        "Students can access grants and bursaries for housing costs, including maintenance or special support grants.",
      open: false,
    },
    {
      question: "When do you pay for student accommodation?",
      answer:
        "Payment dates vary; check your up-front cost acknowledgment document. Typically, payments are collected monthly.",
      open: false,
    },
    {
      question: "Is a tenancy deposit required?",
      answer:
        "Yes, deposits are usually equivalent to the first month's rent. They are protected by law and detailed in documentation.",
      open: false,
    },
  ]);
  

  const toggleFAQ = (index) => {
    setFaqs(
      faqs.map((faq, i) => {
        if (i === index) {
          faq.open = !faq.open;
        } else {
          faq.open = false;
        }

        return faq;
      })
    );
  };

  return (
    <section
      className="App"
      id="faqs"
      style={{ backgroundColor: "var(--lightgrey)", padding: "3rem 1rem" }}
    >
      <h3 className='sec-title'>
    FAQs
     </h3>
      <div className="faqs">
        {faqs.map((faq, index) => (
          <FAQ faq={faq} index={index} key={index} toggleFAQ={toggleFAQ} />
        ))}
      </div>
    </section>
  );
}
