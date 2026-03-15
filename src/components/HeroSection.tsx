import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const words = ["Construindo", "o", "invisível."];

const easeExpo: [number, number, number, number] = [0.19, 1, 0.22, 1];

const entrance = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: easeExpo },
};

const HeroSection = () => {
  return (
    <section className="snap-section flex flex-col justify-center px-[8vw] py-[20vh]">
      <div className="mb-16">
        <p className="label-uppercase mb-8">Projeto Zero</p>
        <h1 className="font-display italic text-[clamp(3rem,12vw,14rem)] leading-[0.9] tracking-tight text-foreground">
          {words.map((word, i) => (
            <motion.span
              key={i}
              className="inline-block mr-[0.25em]"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: i * 0.1,
                ease: [0.19, 1, 0.22, 1],
              }}
            >
              {word}
            </motion.span>
          ))}
        </h1>
      </div>

      <motion.div
        {...entrance}
        transition={{ ...entrance.transition, delay: 0.5 }}
        className="flex flex-col sm:flex-row items-start gap-6"
      >
        <p className="text-muted-foreground font-body text-base max-w-md leading-relaxed">
          Sistemas de alta precisão para interfaces que exigem silêncio visual.
        </p>
        <Button variant="phantom" size="lg" className="rounded-sm">
          Explorar
        </Button>
      </motion.div>
    </section>
  );
};

export default HeroSection;
