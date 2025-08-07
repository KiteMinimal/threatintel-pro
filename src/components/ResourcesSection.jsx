import React from "react";

const resources = [
  {
    title: "Threat Intelligence Guides",
    description:
      "Explore comprehensive guides to understand and utilize threat intelligence effectively in your security operations.",
    icon: (
      <svg
        className="w-10 h-10 text-[#00F078]"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 6v6l4 2"
        ></path>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M21 12c0 5.523-4.477 10-10 10S1 17.523 1 12 5.477 2 11 2s10 4.477 10 10z"
        ></path>
      </svg>
    ),
    linkLabel: "Explore Guides",
    linkHref: "#",
  },
  {
    title: "Best Practices Documentation",
    description:
      "Access industry best practices to optimize your security posture and threat response strategies.",
    icon: (
      <svg
        className="w-10 h-10 text-[#00F078]"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M5 13l4 4L19 7"
        ></path>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M7 20h10a2 2 0 002-2v-8a2 2 0 00-2-2H7a2 2 0 00-2 2v8a2 2 0 002 2z"
        ></path>
      </svg>
    ),
    linkLabel: "View Documentation",
    linkHref: "#",
  },
  {
    title: "Community Forum Access",
    description:
      "Join discussions with security experts and peers to share insights and solve complex cybersecurity challenges.",
    icon: (
      <svg
        className="w-10 h-10 text-[#00F078]"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M8 10h.01M12 10h.01M16 10h.01M21 16v-5a2 2 0 00-2-2H5a2 2 0 00-2 2v5a2 2 0 002 2h9l4 4"
        ></path>
      </svg>
    ),
    linkLabel: "Visit Forum",
    linkHref: "#",
  },
];

export default function ResourcesSection() {
  return (
    <section
      id="resources"
      className="py-20 px-6 max-w-6xl mx-auto  rounded-3xl shadow-lg mt-16"
    >
      <h2 className="text-4xl font-extrabold text-[#00F078] mb-12 text-center">
        Resources
      </h2>

      <p className="text-gray-300 max-w-3xl mx-auto text-center mb-14 text-lg">
        Access the latest guides, best practices, and community knowledge to
        enhance your threat intelligence capabilities.
      </p>

      <div className="grid gap-12 md:grid-cols-3">
        {resources.map(({ title, description, icon, linkLabel, linkHref }) => (
          <div
            key={title}
            className="bg-[#161B22] rounded-2xl p-8 shadow border border-[#232b36] flex flex-col items-start gap-6 hover:shadow-xl transition-shadow duration-300"
          >
            <div className="flex items-center justify-center w-16 h-16 rounded-full bg-[#00F078]/20">
              {icon}
            </div>

            <h3 className="text-2xl font-bold text-white">{title}</h3>

            <p className="text-gray-300 text-base flex-grow">{description}</p>

            <a
              href={linkHref}
              className="mt-auto inline-block text-[#00F078] font-semibold hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              {linkLabel}
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
