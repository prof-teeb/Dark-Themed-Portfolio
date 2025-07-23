'use client';
import Link from 'next/link';
import React from 'react';
import { FaArrowRight } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer
      className="relative bg-black backdrop-blur-xl border-t border-white/10 text-white px-6 py-20 w-full flex flex-col items-center justify-center gap-10"
      id="contact"
    >
      {/* Top CTA */}
      <div className="text-center space-y-3">
        <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight">
          Let’s Collaborate & <br />
          <span className="text-white/90">Create Something Remarkable</span>
        </h2>
        <p className="text-white/80 text-base md:text-lg max-w-xl mx-auto">
          Got a project, idea or just want to connect? Let's make it happen.
        </p>
      </div>

      {/* Contact Button Line */}
      <Link href="/resume">
        <div className="group text-[42px] w-full max-w-4xl mx-auto cursor-pointer text-white transition-all duration-300">
          <hr className="border-white/10" />
          <div className="flex items-center justify-between my-10">
            <h5 className="font-bold tracking-tight transition-all duration-300 group-hover:tracking-wider">
              GET <span className="text-zinc-400 group-hover:text-white transition-all duration-300">In</span> TOUCH!
            </h5>
            <FaArrowRight className="text-[32px] text-white transition-transform duration-300 group-hover:translate-x-2 group-hover:scale-110" />
          </div>
          <hr className="border-white/10" />
        </div>
      </Link>

      {/* Divider */}
      <div className="w-full max-w-4xl mt-16 border-t border-white/10"></div>

      {/* Footer Bottom */}
      <div className="text-center text-sm text-white/60">
        © {new Date().getFullYear()} <span className="font-semibold text-white">M Project</span>. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
