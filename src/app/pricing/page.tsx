"use client";

import { useState } from "react";
import { RadioGroup } from "@headlessui/react";
import { CheckIcon } from "@heroicons/react/20/solid";
import { pricing } from "@/config";

function classNames(...classes: (string | undefined | null | false)[]) {
  return classes.filter(Boolean).join(" ");
}

export default function Example() {
  const [frequency, setFrequency] = useState(pricing.frequencies[0]);

  return (
    <div>
      <main>
        <div className="mx-auto mt-16 max-w-7xl px-6 sm:mt-32 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <p className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl dark:text-white">
              <span className="bg-gradient-to-r from-cyan-600 to-blue-600 text-transparent bg-clip-text">
                Achieve More{" "}
              </span>
              with Our Scalable Pricing
            </p>
          </div>
          <p className="mx-auto mt-6 max-w-2xl text-center text-lg leading-8 text-gray-600 dark:text-white">
            From novice to expert, our plans support every stage of your sales
            journey. Engage in realistic sales scenarios, powerful AI-driven
            role-plays, and detailed analytics.
          </p>
          <div className="mt-12 flex justify-center">
            <RadioGroup
              value={frequency}
              onChange={setFrequency}
              className="grid grid-cols-2 gap-x-1 rounded-full p-1 text-center text-xs font-semibold leading-5 ring-1 ring-inset ring-white-200"
            >
              <RadioGroup.Label className="sr-only">
                Payment frequency
              </RadioGroup.Label>
              {pricing.frequencies.map((option) => (
                <RadioGroup.Option
                  key={option.value}
                  value={option}
                  className={({ checked }) =>
                    classNames(
                      checked
                        ? "bg-gradient-to-r from-cyan-600 to-blue-600 text-white"
                        : "text-gray-500",
                      "cursor-pointer rounded-full px-2.5 py-1"
                    )
                  }
                >
                  <span className="dark:text-white font-bold">
                    {option.label}
                  </span>
                </RadioGroup.Option>
              ))}
            </RadioGroup>
          </div>
          <div className="flex justify-center space-x-10 h-auto w-auto p-10">
            {" "}
            {pricing.tiers.map((tier) => (
              <div
                key={tier.id}
                className={classNames(
                  tier.mostPopular
                    ? "ring-2 bg-gradient-to-r from-cyan-600 to-blue-600"
                    : "ring-1 ring-purple-200 dark:ring-gray-400",
                  "rounded-3xl p-8"
                )}
              >
                <h2
                  id={tier.id}
                  className={classNames(
                    tier.mostPopular
                      ? "bg-gradient-to-r from-cyan-600 to-blue-600"
                      : "text-gray-900",
                    "text-lg font-semibold leading-8 dark:text-white"
                  )}
                >
                  {tier.name}
                </h2>
                <p className="mt-4 text-sm leading-6 text-gray-600 dark:text-gray-300">
                  {tier.description}
                </p>
                <p className="mt-6 flex items-baseline gap-x-1">
                  <span className="text-4xl font-bold tracking-tight dark:text-white">
                    {tier.price[frequency.value as keyof typeof tier.price]}{" "}
                  </span>
                  <span className="text-sm font-semibold leading-6 text-gray-600">
                    {frequency.priceSuffix}
                  </span>
                </p>
                <a
                  href={tier.href}
                  aria-describedby={tier.id}
                  className={classNames(
                    tier.mostPopular
                      ? "text-green shadow-sm hover:bg-opacity-0"
                      : "bg-gradient-to-r from-cyan-600 to-blue-600 ring-1 ring-inset ring-indigo-200 hover:ring-indigo-300 text-white",
                    "mt-6 dark:text-white block rounded-md py-2 px-3 text-center text-sm font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  )}
                >
                  Buy this plan
                </a>
                <ul
                  role="list"
                  className="mt-8 space-y-3 text-sm leading-6 text-gray-600"
                >
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex dark:text-white gap-x-3">
                      <CheckIcon
                        className="h-6 w-5 flex-none text-cyan-400"
                        aria-hidden="true"
                      />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
