import { motion } from "framer-motion";

const InViewContainer = ({ children }) => {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			whileInView={{ opacity: 1 }}
			transition={{ duration: 1.3 }}
		>
			{children}
		</motion.div>
	);
};

export default InViewContainer;
