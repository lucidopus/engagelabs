import React from 'react';

type PricingCardProps = {
  name: string;
  id: string;
  href: string;
  price: { monthly: string; annually: string };
  frequency: string;
  description: string;
  features: string[];
  mostPopular: boolean;
};

const PricingCard: React.FC<PricingCardProps> = ({
  name,
  id,
  href,
  price,
  frequency,
  description,
  features,
  mostPopular,
}) => {
  return (
    <div
      className={`relative bg-gray-800 text-white p-10 m-5 rounded-lg shadow-lg border-2 ${
        mostPopular ? 'border-blue-500' : 'border-transparent'
      }`}
      id={id}
    >
      {mostPopular && (
        <div className="absolute top-0 right-0 bg-blue-500 text-white py-1 px-3 rounded-bl-lg">
          Most Popular
        </div>
      )}
      <h2 className="text-2xl font-semibold mb-4">{name}</h2>
      <p className="text-4xl font-bold mb-4">{price[frequency as keyof typeof price]}/month</p>
      <p className="text-gray-400 mb-6">{description}</p>
      <ul className="mb-6 space-y-2">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center">
            <svg
              className="w-6 h-6 text-green-500 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
            {feature}
          </li>
        ))}
      </ul>
      {mostPopular ? (
  <a
    href={href}
    className="inline-block bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600"
  >
    Contact Sales
  </a>
) : (
  <a
    href={href}
    className="inline-block bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600"
  >
    Buy this plan
  </a>
)}

    </div>
  );
};

export default PricingCard;
