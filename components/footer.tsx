"use client";

import { Github, Twitter, Linkedin, Mail } from "lucide-react";

export function Footer() {
  const footerLinks = {
    Product: ["Features", "Pricing", "API", "Documentation"],
    Company: ["About", "Blog", "Careers", "Press"],
    Resources: ["Help Center", "Community", "Tutorials", "Status"],
    Legal: ["Privacy", "Terms", "Security", "Compliance"],
  };

  const socialLinks = [
    { icon: Github, href: "#", label: "GitHub" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Mail, href: "#", label: "Email" },
  ];

  return (
    <footer className="relative py-20 px-4 sm:px-6 lg:px-8 border-t border-blue-500/20">
      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-6 gap-8 mb-12">
          <div className="lg:col-span-2">
            <h3 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-4">
              NexusAI
            </h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Empowering the future of digital innovation with AI-powered
              solutions that transform how you work, create, and innovate.
            </p>

            <div className="space-y-3">
              <h4 className="text-white font-semibold">Stay Updated</h4>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2 bg-slate-800/50 border border-blue-400/30 rounded-l-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-400/60 transition-colors duration-300"
                />
                <button className="px-6 py-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-r-lg font-semibold text-white hover:from-blue-500 hover:to-purple-500 transition-all duration-300">
                  Subscribe
                </button>
              </div>
            </div>
          </div>

          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-white font-semibold mb-4">{category}</h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-blue-500/20">
          <p className="text-gray-400 mb-4 md:mb-0">
            © 2025 NexusAI. All rights reserved.
          </p>

          <div className="flex space-x-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                className="p-2 bg-slate-800/50 border border-blue-400/30 rounded-lg hover:border-blue-400/60 hover:bg-blue-400/10 transition-all duration-300"
                aria-label={social.label}
              >
                <social.icon className="w-5 h-5 text-blue-400" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
