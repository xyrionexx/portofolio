"use client";

import { Mail, Phone, Github, Linkedin, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4 text-center">
        {/* Contact Info */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-6 mb-6">
          <a
            href="tel:+62895384238691"
            className="flex items-center gap-2 hover:text-blue-400 transition-colors"
          >
            <Phone className="h-4 w-4" />
            +62 895 3842 38691
          </a>
          <a
            href="mailto:adithidayat12370@gmail.com"
            className="flex items-center gap-2 hover:text-blue-400 transition-colors"
          >
            <Mail className="h-4 w-4" />
            adithidayat12370@gmail.com
          </a>
        </div>

        {/* Social Links */}
        <div className="flex justify-center gap-4 mb-6">
          <a
            href="https://github.com/xyrionexx"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 hover:text-blue-400 transition-colors"
          >
            <Github className="h-5 w-5" />
          </a>
          <a
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 hover:text-blue-400 transition-colors"
          >
            <Linkedin className="h-5 w-5" />
          </a>
          <a
            href="https://twitter.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 hover:text-blue-400 transition-colors"
          >
            <Twitter className="h-5 w-5" />
          </a>
        </div>

        {/* Copyright */}
        <div className="text-gray-400 text-sm">
          © {new Date().getFullYear()} Adit Rahmat Hidayat. Program Use Next.js.
        </div>
      </div>
    </footer>
  );
}
