"use client";

import { Footer, Navbar } from "@/components";
import Link from "next/link";

export default function NotFound() {
  return (
    <>
        <div className="bg-[#E5FFED] px-4 sm:px-0 flex flex-col items-center justify-center h-[80vh] text-center gap-8">
            <Navbar/>
            <h1 className="sm:text-[56px] text-[32px] font-semibold leading-[120%] tracking-[-1px] text-[#0E1821]"
            style={{
            fontFamily: 'var(--font-funnel-display), "Funnel Display", sans-serif',
            }}
            >
                Oops! Page Not Found
            </h1>
            <Link
                href="/"
                className="px-6 py-3 bg-[#24823D] text-white rounded-lg hover:bg-[#1a5e2d] transition"
            >
                Go Back Home
            </Link>
        </div>
        <Footer/>
    </>
  );
}
