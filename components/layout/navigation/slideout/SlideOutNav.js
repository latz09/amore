import FollowUs from '../../footer/FollowUs';
import Image from 'next/image';
import Hours from '../../footer/Hours';
import SlideNavLinks from './SlideNavLinks';
import navLogo from '../../../../public/images/logo.webp';
import { motion } from 'framer-motion';

const SlideOutNav = ({ open, setOpen }) => {
	return (
		<div className='w-full flex flex-col h-screen'>
			<div className='h-1/2 w-1/3 mx-auto '>
				<motion.div
					initial={{}}
					whileInView={{ rotate: [7, -7, 7, -7, 0] }}
					transition={{ duration: 3.5, delay: 0.2 }}
				>
					<Image src={navLogo} alt='' />
				</motion.div>
			</div>

			<div className=' flex-grow h-full  '>
				<SlideNavLinks open={open} setOpen={setOpen} />
			</div>
			<div className='mt-8 mb-4'>
				<FollowUs />
			</div>
		</div>
	);
};

export default SlideOutNav;
