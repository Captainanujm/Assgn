const categories = [
  "General",
  "Account",
  "Wallet and Asset",
  "Trading",
  "Disputes",
  "Advertising",
];

const FAQSidebar = () => {
  return (
    <div className="bg-white border rounded-xl p-4 w-full md:w-60">
      <ul className="space-y-2">
        {categories.map((cat, idx) => (
          <li
            key={idx}
            className={`text-sm py-2 px-3 rounded-md ${
              idx === 0
                ? "bg-purple-100 text-purple-800 font-semibold"
                : "hover:bg-gray-100 text-gray-700"
            } cursor-pointer`}
          >
            {cat}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FAQSidebar;
