import { motion } from "framer-motion";

const easeExpo: [number, number, number, number] = [0.19, 1, 0.22, 1];

const entrance = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.8, ease: easeExpo },
};

const ManifestoSection = () => {
  return (
    <section className="snap-section flex flex-col justify-center px-[8vw] py-[20vh]">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        <motion.div {...entrance} className="lg:col-span-4">
          <p className="label-uppercase mb-8">Manifesto</p>
        </motion.div>
        <motion.div
          {...entrance}
          transition={{ ...entrance.transition, delay: 0.15 }}
          className="lg:col-span-7 lg:col-start-6"
        >
          <p className="font-display italic text-[clamp(1.5rem,4vw,3.5rem)] leading-[1.1] tracking-tight text-foreground mb-12">
            A interface deve desaparecer para que a intenção do usuário se torne a única interface.
          </p>
          <div className="border-t border-border pt-8 grid grid-cols-2 gap-8">
            <div>
              <p className="label-uppercase text-xs mb-2">Abordagem</p>
              <p className="field-mono">Remoção intencional. Cada pixel justificado.</p>
            </div>
            <div>
              <p className="label-uppercase text-xs mb-2">Resultado</p>
              <p className="field-mono">Silêncio visual. Foco absoluto.</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ManifestoSection;
