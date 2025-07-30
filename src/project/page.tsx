"use client";

import "./project.css";
// import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github } from "lucide-react";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Linkedin,
  Mail,
  ExternalLink,
  Code,
  Database,
  Server,
  Smartphone,
  ChevronDown,
  Send,
} from "lucide-react";

export default function Project() {
  const projects = [
    {
      title: "cryptoInfo",
      description:
        "CryptoInfo is a web-based cryptocurrency investment simulation platform that allows users to track real-time crypto prices, analyze market charts, and perform virtual buy/sell transactions without using real money. Designed as an educational playground, it helps users understand market dynamics and test investment strategies risk-free.",
      tech: ["Next.js", "Node.js", "Mysql", "TypeScript", "Tailwind"],
      image: "/assets/cryproInfo.png",
      github: "https://github.com/xyrionexx/cryptoInfo",
      demo: "#",
    },
    {
      title: "Metronexus",
      description:
        "Metronexus is a web-based collaboration tool developed for the INFOVEST competition with the theme “Envisioning Smart and Sustainable Cities.” It features project management, task delegation, and team communication to support effective remote teamwork.",
      tech: ["HTMl", "JavaScript", "CSS"],
      image: "/assets/metronexus.png",
      github: "https://github.com/mee-i/metronexus",
      demo: "https://mee-i.github.io/metronexus",
    },
    {
      title: "Smartbin",
      description:
        "Smartbin is an IoT-based smart trash bin built with Arduino that automatically separates organic and inorganic waste. It features proximity and weight sensors, real-time capacity monitoring, and remote control to support efficient and eco-friendly waste management.",
      tech: ["HTML", "JavaScript", "Web Socket", "IOT"],
      image: "/assets/smartbin.jpg",
      github: "https://github.com/mee-i/smartbin",
      demo: "#",
    },
  ];
  return (
    <>
      <section id="projects" className="py-20 px-6 ">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-neutral-500  text-4xl md:text-5xl font-black mb-6">
              FEATURED PROJECTS
            </h2>
            <p className="text-xl text-white max-w-3xl mx-auto">
              Here are some of my recent projects that showcase my skills and
              passion for development.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="group hover:shadow-lg transition-all duration-300 hover:scale-105 bg-stone-100  "
              >
                <div className="aspect-video bg-gradient-to-br from-primary/10 to-primary/5 rounded-t-lg flex items-center justify-center">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover rounded-t-lg"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="group-hover:text-primary transition-colors">
                    {project.title}
                  </CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, techIndex) => (
                      <Badge
                        key={techIndex}
                        variant="outline"
                        className="text-xs"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex-1 text-white"
                      onClick={() => window.open(project.github, "_blank")}
                    >
                      <Github className="  w-4 h-4 mr-2" />
                      Code
                    </Button>
                    <Button
                      size="sm"
                      className="flex-1"
                      onClick={() => window.open(project.demo, "_blank")}
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Demo
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
