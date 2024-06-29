import Link from "next/link";

// import
//   COMPANY_NAME,
//   COMPANY_URL,
//   PRODUCTS,
//   description,
// "@/config";

import {
  APP_NAME,
  COMPANY_NAME,
  COMPANY_URL,
  PRODUCTS,
  description,
} from "@/config";

const navigation = {
  products: PRODUCTS,
  company: [
    { name: "Blog", href: "/blog" },
    { name: "Privacy", href: "/privacy" },
    { name: "Terms", href: "/terms" },
  ],
};

function FooterLinksColumn({
  title,
  links,
}: {
  title: string;
  links: { name: string; href: string }[];
}) {
  return (
    <div>
      <h3 className="text-base font-semibold leading-6">{title}</h3>
      <ul role="list" className="mt-4 space-y-2">
        {links.map((link, index) => (
          <li key={index}>
            <Link
              target="_blank"
              href={link.href}
              className="text-sm leading-6 hover:opacity-75"
            >
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

function Footer() {
  return (
    <footer aria-labelledby="footer-heading" className="bg-gray-800">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="xl:grid xl:grid-cols-3 xl:gap-32">
          <div className="flex flex-col items-center py-6 md:items-start xl:col-span-1">
            <Link href={"/"} className="mb-2 text-gray-100 text-2xl font-bold lowercase">
              {APP_NAME}
            </Link>
            <p className="mb-8 text-base text-gray-400 dark:text-gray-400">
              {description}
            </p>
          </div>
          <div className="mt-16 grid text-gray-400 grid-cols-2 gap-16 xl:col-span-2 xl:mt-0">
            <FooterLinksColumn
              title="Our Products"
              links={navigation.products}
            />
            <FooterLinksColumn title="Company" links={navigation.company} />
          </div>
        </div>
        <div className="mt-12 border-t border-gray-200 pt-4 dark:border-gray-700">
          <Link target="_blank" href={COMPANY_URL}>
            <p className="text-sm text-gray-400 xl:text-center">
              &copy; 2023 {COMPANY_NAME}. All rights reserved.
            </p>
          </Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
