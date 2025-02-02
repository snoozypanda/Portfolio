import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Code2, Database, Layout } from "lucide-react";
import AboutSection from "../components/AboutSection";
import SkillCard from "../components/SkillCard";
import TestimonialCard from "../components/TestimonialCard";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

function Home() {
  const [testimonials] = useState([
    {
      name: "John Doe",
      role: "CEO at TechCorp",
      quote:
        "An exceptional developer who consistently delivers high-quality work.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e",
    },
    {
      name: "Jane Smith",
      role: "Product Manager",
      quote:
        "Working with them was a pleasure. They brought our vision to life perfectly.",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80",
    },
    {
      name: "Mike Johnson",
      role: "Tech Lead",
      quote:
        "Their attention to detail and technical expertise is outstanding.",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
    },
  ]);

  const skills = [
    { title: "Frontend Development", proficiency: 90, icon: Layout },
    { title: "Backend Development", proficiency: 85, icon: Database },
    { title: "Clean Code", proficiency: 95, icon: Code2 },
  ];

  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="text-center py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Building Digital Experiences
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Full-stack developer specializing in creating beautiful and
            functional web applications
          </p>
          <div className="flex justify-center gap-4">
            <Button size="lg" asChild>
              <a href="/projects">View My Work</a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="/contact">Get in Touch</a>
            </Button>
          </div>
        </motion.div>
      </section>

      {/* About Section */}
      <AboutSection />

      {/* Skills Section */}
      <section className="py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Skills</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <SkillCard key={index} {...skill} />
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Testimonials</h2>
        <Carousel className="max-w-xl mx-auto">
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index}>
                <TestimonialCard {...testimonial} />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </section>
    </div>
  );
}

export default Home;
