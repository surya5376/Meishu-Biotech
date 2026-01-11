import { motion } from 'framer-motion';

export const Button = ({ children, variant = 'primary', onClick, className = '', ...props }) => {
    const baseStyles = "inline-flex items-center justify-center px-6 py-3 border text-base font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-biotech-main transition-all duration-300";

    const variants = {
        primary: "border-transparent bg-biotech-main text-white hover:bg-biotech-800 shadow-sm hover:shadow-lg",
        secondary: "border-biotech-main text-biotech-main bg-transparent hover:bg-biotech-50",
        outline: "border-white text-white bg-transparent hover:bg-white/10"
    };

    return (
        <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className={`${baseStyles} ${variants[variant]} ${className}`}
            onClick={onClick}
            {...props}
        >
            {children}
        </motion.button>
    );
};
