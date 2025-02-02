import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';

function AboutSection() {
  return (
    <section className="py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="grid md:grid-cols-2 gap-8 items-center"
      >
        <div className="relative">
          <img
            src="https://images.unsplash.com/photo-1517849845537-4d257902454a"
            alt="Profile"
            className="rounded-lg shadow-xl"
          />
          <div className="absolute inset-0 bg-primary/10 rounded-lg" />
        </div>
        <Card>
          <CardContent className="pt-6">
            <h2 className="text-3xl font-bold mb-4">About Me</h2>
            <p className="text-muted-foreground mb-4">
              I'm a passionate developer with a keen eye for design and a love for creating
              beautiful, functional web applications. With years of experience in modern web
              technologies, I bring ideas to life through clean code and intuitive user interfaces.
            </p>
            <p className="text-muted-foreground">
              When I'm not coding, you can find me exploring new technologies, contributing to
              open-source projects, or sharing my knowledge through blog posts and mentoring.
            </p>
          </CardContent>
        </Card>
      </motion.div>
    </section>
  );
}

export default AboutSection;