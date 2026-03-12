"use client";

import { useState } from "react";

const faqs = [
  {
    question: "Does SD Locksmith service my area?",
    answer: "Yes! We proudly serve all of San Diego County, including San Diego, Chula Vista, Oceanside, El Cajon, Carlsbad, and surrounding cities.",
  },
  {
    question: "How fast can a locksmith show up?",
    answer: "We typically arrive within 30-45 minutes for most areas in San Diego County. For emergencies, we prioritize your call and work to get to you as quickly as possible.",
  },
  {
    question: "Can I get a price quote?",
    answer: "Absolutely. We provide transparent, upfront quotes before starting any work. Call us and describe your situation—we'll give you an honest estimate.",
  },
  {
    question: "How can I pay?",
    answer: "We accept cash, all major credit cards, and other payment methods. We'll let you know your options when you call.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-steel-900">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-slate-200 rounded-lg overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-4 text-left bg-slate-50 hover:bg-slate-100 transition-colors"
              >
                <span className="font-semibold text-steel-900">{faq.question}</span>
                <svg
                  className={`w-5 h-5 text-slate-600 transition-transform ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {openIndex === index && (
                <div className="p-4 border-t border-slate-200 bg-white">
                  <p className="text-slate-600">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
