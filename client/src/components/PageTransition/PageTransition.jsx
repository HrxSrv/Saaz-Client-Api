// PageTransition.js
import { motion } from 'framer-motion';

const pageVariants = {
    initial: {
        opacity: 0,
        x: "0vw",
        scale: 0.8,
    },
    in: {
        opacity: 1,
        x: "0",
        scale: 1,
    },
    out: {
        opacity: 0,
        x: "0",
        scale: 1.2,
    },
};

const pageTransition = {
    type: "tween",
    duration: 0.2,
};

const PageTransition = ({ children }) => (
    <motion.div
        initial="initial"
        animate="in"
        exit="out"
        variants={pageVariants}
        transition={pageTransition}
    >
        {children}
    </motion.div>
);

export default PageTransition;
