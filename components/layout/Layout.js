import Footer from './footer/Footer';
import Navbar from './navigation/Navbar';
import { motion } from 'framer-motion';
const Layout = ({ children }) => {
	const navVariant = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				delay: 1,
				duration: 3,
			},
		},
	};

	return (
		<div className='flex flex-col h-screen font-amore bg-gray-200'>
			<motion.div variants={navVariant} initial='hidden' animate='visible'>
				<Navbar />
			</motion.div>
			<main className='flex-grow bg-gray-200'>{children}</main>
			<Footer />
		</div>
	);
};
export default Layout;
