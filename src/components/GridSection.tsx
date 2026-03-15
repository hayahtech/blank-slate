import { motion } from "framer-motion";

const metrics = [
  { label: "Precisão", value: "0.01px", desc: "Tolerância de alinhamento" },
  { label: "Performance", value: "< 100ms", desc: "Tempo de resposta" },
  { label: "Densidade", value: "4:1", desc: "Ratio sinal/ruído" },
  { label: "Escala", value: "∞", desc: "Sistemas modulares" },
];

const easeExpo: [number, number, number, number] = [0.19, 1, 0.22, 1];

const entrance = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.8, ease: easeExpo },
};

const GridSection = () => {
  return (
    <section className="snap-section flex flex-col justify-center px-[8vw] py-[20vh]">
      <motion.p {...entrance} className="label-uppercase mb-16">
        Especificações
      </motion.p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {metrics.map((m, i) => (
          <motion.div
            key={m.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{
              duration: 0.8,
              delay: i * 0.1,
              ease: easeExpo,
            }}
            className="border border-border p-8 rounded-sm"
          >
            <p className="font-display italic text-4xl text-foreground mb-4">
              {m.value}
            </p>
            <p className="label-uppercase text-xs mb-2">{m.label}</p>
            <p className="field-mono">{m.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default GridSection;
