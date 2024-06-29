export const APP_NAME = "EngageLabs";

export const ENGAGELABS_API_KEY = process.env.NEXT_PUBLIC_ENGAGELABS_API_KEY;
export const ENGAGELABS_API_BASE = process.env.NEXT_PUBLIC_ENGAGELABS_API_BASE;

export const COMPANY_NAME = "EngageLabs LLC";
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
export const description =
  'Master sales conversations with AI-powered customer simulations."';

export const pricing = {
  frequencies: [
    { value: "monthly", label: "Monthly", priceSuffix: "/month" },
    { value: "annually", label: "Annually", priceSuffix: "/year" },
  ],
  tiers: [
    {
      name: "Startup",
      id: "tier-startup",
      href: "#",
      price: { monthly: "$60", annually: "$576" },
      description: "A plan that scales with your rapidly growing business.",
      features: [
        "25 products",
        "Up to 10,000 subscribers",
        "Advanced analytics",
        "24-hour support response time",
        "Marketing automations",
      ],
      mostPopular: false,
    },
    {
      name: "Enterprise",
      id: "tier-enterprise",
      href: "#",
      price: { monthly: "$90", annually: "$864" },
      description: "Dedicated support and infrastructure for your company.",
      features: [
        "Unlimited products",
        "Unlimited subscribers",
        "Advanced analytics",
        "1-hour, dedicated support response time",
        "Marketing automations",
        "Custom reporting tools",
      ],
      mostPopular: false,
    },
  ],
};

export const STT_MODEL = "whisper-large-v3"
export const PROSPECT_MESSAGE_ENDPOINT = "/model/generate"