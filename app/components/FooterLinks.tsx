import React from "react";

const footerData = [
  {
    title: "Company",
    links: ["About us", "Terms of use", "Privacy Policy", "Disclaimer"],
  },
  {
    title: "Businesses",
    links: ["Prime", "Custody", "Asset Hub", "Commerce"],
  },
  {
    title: "Exchange",
    links: ["Exchange Home", "Margin Trading", "Derivatives Trading", "Trading Arena"],
  },
];

const FooterLinks = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-18">
      {footerData.map((section) => (
        <div key={section.title}>
          <h3 className="text-white font-semibold mb-4">{section.title}</h3>
          <ul className="space-y-4">
            {section.links.map((link) => (
              <li
                key={link}
                className="text-m text-gray-300 hover:text-white cursor-pointer"
              >
                {link}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default FooterLinks;
