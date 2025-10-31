// portableTextComponents.tsx
import React from "react";
import type { PortableTextComponents } from "@portabletext/react";
import Image from "next/image";

/**
 * Type-safe Portable Text components for @portabletext/react.
 * Save this file as .tsx (not .ts). Ensure tsconfig.json => "jsx": "react-jsx".
 */

export const portableTextCustomerStoryComponent: PortableTextComponents = {
  types: {
    // image block
    image: ({ value }: { value: { asset?: { url?: string; _ref?: string }; alt?: string }; }) => {
      const url = value?.asset?.url || value?.asset?._ref;
      if (!url) return null;
      return (
        <div className="relative w-full h-auto my-6">
          <Image
            src={url}
            alt={value?.alt || ""}
            width={1200} // can adjust as per your layout
            height={800}
            className="rounded-lg w-full h-auto"
            sizes="100vw"
            style={{ height: "auto" }}
          />
        </div>
      );
    },
  },

  block: {
    h1: ({ children }: { children?: React.ReactNode }) => (
      <h1 className="text-4xl font-bold text-gray-900 mb-6">{children}</h1>
    ),
    h2: ({ children }: { children?: React.ReactNode }) => (
      <h2 className="text-3xl font-semibold text-gray-800 mb-5">{children}</h2>
    ),
    h3: ({ children }: { children?: React.ReactNode }) => (
      <h3 className="sm:text-3xl text-[24px] font-normal text-[#202020] mb-6"
       style={{
          fontFamily:
            'var(--font-funnel-display), "Funnel Display", sans-serif',
        }}
      >{children}</h3>
    ),
    normal: ({ children }: { children?: React.ReactNode }) => (
      <p className="sm:text-xl text-[16px] text-[#343434] sm:leading-[36px] leading-[22px] mb-4">{children}</p>
    ),
    blockquote: ({ children }: { children?: React.ReactNode }) => (
      <blockquote className="border-l-4 border-green-500 pl-4 italic text-gray-700 my-4">
        {children}
      </blockquote>
    ),
  },

  marks: {
    strong: ({ children }: { children?: React.ReactNode }) => (
      <strong className="font-semibold">{children}</strong>
    ),
    em: ({ children }: { children?: React.ReactNode }) => (
      <em className="italic">{children}</em>
    ),
    // markDef 'link'
    link: ({
      value,
      children,
    }: {
      value?: { href?: string };
      children?: React.ReactNode;
    }) => {
      const href = value?.href || "#";
      return (
        <a
          href={href}
          target={href.startsWith("http") ? "_blank" : undefined}
          rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
          className="text-blue-600 underline hover:text-blue-800"
        >
          {children}
        </a>
      );
    },
  },

  list: {
    bullet: ({ children }: { children?: React.ReactNode }) => (
      <ul className="list-disc ml-6 text-gray-700 space-y-2">{children}</ul>
    ),
    number: ({ children }: { children?: React.ReactNode }) => (
      <ol className="list-decimal ml-6 text-gray-700 space-y-2">{children}</ol>
    ),
  },

  listItem: {
    bullet: ({ children }: { children?: React.ReactNode }) => (
      <li className="leading-relaxed">{children}</li>
    ),
    number: ({ children }: { children?: React.ReactNode }) => (
      <li className="leading-relaxed">{children}</li>
    ),
  },
};
