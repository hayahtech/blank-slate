import { motion } from "framer-motion";

const FooterSection = () => {
  return (
    <footer className="px-[8vw] py-16 border-t border-border">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: [0.19, 1, 0.22, 1] as [number, number, number, number] }}
        className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4"
      >
        <p className="font-display italic text-lg text-foreground">Projeto Zero</p>
        <p className="field-mono">© 2026 — Todos os direitos reservados</p>
      </motion.div>
    </footer>
  );
};

export default FooterSection;
