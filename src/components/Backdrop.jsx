import { motion } from "framer-motion";

const Backdrop = ({ children, onClick }) => (
  <motion.div
    className="fixed z-50 flex justify-center top-0 left-0 h-full w-full bg-black bg-opacity-95 overflow-y-scroll"
    onClick={onClick}
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
  >
    {children}
  </motion.div>
);

export default Backdrop;