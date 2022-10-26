import Image from 'next/image';
import Link from 'next/link';
import coffee from '../../../public/images/Coffee/chocolateDrizzle.jpg';
import { motion } from 'framer-motion';

const CoffeeHero = () => {
	const headingVariant = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				delay: 0.7,
				duration: 1.5,
			},
		},
	};
	const phraseVariant = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				delay: 1.1,
				duration: 2,
			},
		},
	};

	return (
		<div className='relative w-full h-[70vh]'>
			<Image
				src={coffee}
				alt=''
				priority='true'
				layout='fill'
				objectFit='cover'
				objectPosition='center'
				placeholder='blur'
			/>

			<div className='relative flex justify-center items-center h-full bg-black bg-opacity-50'>
				<div className='text-white grid gap-4 place-items-center max-w-7xl mx-auto text-center px-1'>
					<motion.h1
						className='text-6xl md:text-8xl tracking-wider'
						variants={headingVariant}
						initial='hidden'
						whileInView='visible'
					>
						Love For Coffee
					</motion.h1>
					<motion.h2
						className='text-3xl md:text-5xl font-amoreCursive'
						variants={phraseVariant}
						initial='hidden'
						whileInView='visible'
					>
						We offer a wide variety of drink choices including alternative
						milks.
					</motion.h2>
					<div className='py-4'>
						<Link href={'/amore-coffee-menu'}>
							<span className='btn bg-gray-200 text-gray-800 text-4xl'>
								Menu
							</span>
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CoffeeHero;
