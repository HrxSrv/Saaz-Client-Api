// PageTransition.js
import { motion } from 'framer-motion';

const pageVariants = {
    initial: {
        opacity: 0,
    },
    in: {
        opacity: 1,
    },
    out: {
        opacity: 0,
    },
};

const pageTransition = {
    type: "tween",
    ease: "easeInOut",  // Using easeInOut for a smooth fade
    duration: 0.7,  // Duration for the fade effect
};

const PageTransition = ({ children }) => (
    <motion.div
        initial="initial"
        animate="in"
        exit="out"
        variants={pageVariants}
        transition={pageTransition}
        style={{ position: 'relative', width: '100%' }}  // Ensure the div takes the full width
    >
        {children}
    </motion.div>
);

export default PageTransition;
