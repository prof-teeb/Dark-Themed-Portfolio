'use client'
import { motion } from 'framer-motion';
import { Brain, Lightning, Shield, Infinity } from 'phosphor-react';

const FeatureSection = () => {
  const features = [
    {
      icon: Brain,
      title: 'Clean, Thoughtful Code',
      description: "I write logic that’s readable, scalable, and built with intention. Every component serves a purpose.",
      highlights: ['Modular components', 'Type-safe code', 'State management done right']
    },
    {
      icon: Lightning,
      title: 'Fast & Fluid UI',
      description: "From loading speeds to micro-interactions, performance matters. I focus on speed without compromising design.",
      highlights: ['Smooth animations', 'Optimized assets', 'Instant feedback']
    },
    {
      icon: Shield,
      title: 'Best Practices by Default',
      description: "Security, accessibility, and responsive layouts are not afterthoughts — they’re baked in from the start.",
      highlights: ['Accessible markup', 'SEO-ready structure', 'Secure coding habits']
    },
    {
      icon: Infinity,
      title: 'Flexible Integrations',
      description: "I build with APIs, headless CMSs, and tools like Supabase or Sanity — whatever fits the project best.",
      highlights: ['Third-party APIs', 'Custom endpoints', 'Real-time updates']
    }
  ];

  return (
    <section
      className="relative py-20 px-6 overflow-hidden bg-black text-white border-t border-white/10"
      id="features"
    >
      {/* Background Image */}
      <div className="absolute inset-0 -z-10">
        <img
          src="/herosection-bg.png"
          alt="Background"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-black/70 backdrop-blur-md"></div>
      </div>

      <div className="container mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-light tracking-tight mb-6">
            What I <span className="text-gradient">Focus On</span>
          </h2>
          <p className="text-subtitle max-w-2xl mx-auto">
            Everything I build is crafted for clarity, performance, and long-term maintainability.
          </p>
        </motion.div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative"
              >
                <div className="glass-card p-8 h-full hover:bg-white/10 transition-all duration-500 group-hover:scale-105">
                  {/* Icon */}
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Icon size={32} className="text-primary" weight="light" />
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-light tracking-tight mb-4 group-hover:text-primary transition-colors duration-300">
                    {feature.title}
                  </h3>

                  {/* Description */}
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {feature.description}
                  </p>

                  {/* Highlights */}
                  <ul className="space-y-2">
                    {feature.highlights.map((highlight, i) => (
                      <li key={i} className="flex items-center text-sm">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mr-3"></div>
                        <span className="text-muted-foreground">{highlight}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Hover Glow */}
                  <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary/5 via-transparent to-accent/5 blur-xl"></div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <button className="btn-premium">See More Projects</button>
        </motion.div>
      </div>
    </section>
  );
};

export default FeatureSection;
