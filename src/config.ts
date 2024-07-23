export const APP_NAME = "EngageLabs";

export const ENGAGELABS_API_KEY = process.env.NEXT_PUBLIC_ENGAGELABS_API_KEY;
export const ENGAGELABS_API_BASE = process.env.NEXT_PUBLIC_ENGAGELABS_API_BASE;

export const COMPANY_NAME = "EngageLabs LLC";

export const product_description = "EngageLabs is the ultimate AI-driven training platform, offering realistic customer call simulations with customizable personas and attributes."

export const footer_description =
  'Master conversations with AI-powered customer simulations.';

export const COMPANY_URL = "https://superagent.me";
export const COMPANY_ADDRESS_LINE_1 = "123 Example Street";
export const COMPANY_ADDRESS_LINE_2 = "Example City, EX 12345";
export const COMPANY_EMAIL = "contact@engagelabs.com";
export const PRODUCTS = [
  { name: "Product #1", href: "https://example.com" },
  { name: "Product #2", href: "https://example.com" },
  { name: "Product #3", href: "https://example.com" },
  { name: "Product #4", href: "https://example.com" },
];


export const pricing = {
  frequencies: [
    { value: "monthly", label: "Monthly", priceSuffix: "/month" },
    { value: "annually", label: "Annually", priceSuffix: "/year" },
  ],
  tiers: [
    {
      name: "Individual",
      salesRoute: false,
      id: "tier-enterprise",
      href: "#",
      price: { monthly: "$0", annually: "$0" },
      description: "Dedicated support and infrastructure for your company.",
      features: [
        "API Access",
        " Upto 5 free conversations",
      ],
      mostPopular: false,
    },
    {
      name: "Startup",
      salesRoute: false,
      id: "tier-startup",
      href: "#",
      price: { monthly: "$60", annually: "$650" },
      description: "Dedicated support and infrastructure for your company.",
      features: [
        "API Access",
        "Advanced analytics",
        "1-hour, dedicated support response time",
      ],
      mostPopular: true,
    },
    {
      name: "Enterprise",
      salesRoute: true,
      id: "tier-enterprise",
      href: "/contact-us",
      price: { monthly: "$90", annually: "$1000" },
      description: "For Businesses with Extensive Needs and Ambitious Goals",
      features: [
        "Endpoints and Public Models with Our Exclusive Discounts",
        "Priority access to new endpoints and products",
        "Advanced analytics",
        "Priority support"
      ],
      mostPopular: false,
    },
  ],
};

export const STT_MODEL = "whisper-large-v3"
export const PROSPECT_MESSAGE_ENDPOINT = "/model/generate"