import FAQSidebar from "./FAQSidebar";
import SearchBar from "./SearchBar";
import FAQItem from "./FAQItem";

const faqData = [
  {
    q: "What is A–Crypto?",
    a: "A–Crypto is a leading crypto trading platform...",
  },
  {
    q: "How does A–Crypto ensure the security of my funds?",
    a: "We use multi-layered security protocols and encryption...",
  },
  {
    q: "What cryptocurrencies can I trade?",
    a: "BTC, ETH, ADA, SOL and many more...",
  },
  {
    q: "Is A–Crypto available worldwide?",
    a: "Yes, available in 150+ countries.",
  },
];

const FAQSection = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 py-16">
    
      <div className="flex flex-col lg:gap-70 md:flex-row justify-end items-center mb-12 gap-15">
        <h2 className="text-4xl md:text-4xl font-bold ">FAQs</h2>
        <SearchBar />
      </div>

      <div className="flex flex-col md:flex-row gap-10">
        <FAQSidebar />

        <div className="flex-1 space-y-4">
          {faqData.map((faq, idx) => (
            <FAQItem key={idx} question={faq.q} answer={faq.a} />
          ))}
        </div>
      </div>
    </section>
  );
};
export default FAQSection;
