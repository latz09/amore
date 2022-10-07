import Image from 'next/image';
import coffee from '../../../public/images/building/insideCounter.jpg';
import Link from 'next/link';
import { motion } from 'framer-motion';
const LandingHero = () => {
	const line = [
		'All',
		'you',
		'need',
		'is',
		'love',
		'and',
		'a',
		'cup',
		'of',
		'coffee',
	];

	const sentenceVariant = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,

			transition: {
				
				staggerChildren: 0.34,
				
				
			},
		},
	};

	const letterVariant = {
		hidden: { opacity: 0, x: 10 },
		visible: {
			opacity: 1,
			x: 0,
		},
	};
	const containerVariant = {
		hidden: { color: '#ffffff' },
		visible: {
			color: ['#ffffff', '#E9E25F', '#E9E25F', '#ffffff'],
			transition: {
				delay: 3.1,
				duration: 5,
			},
		},
	};
	const buttonVariant = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				delay: 2.85,
				duration: 3,
			},
		},
	};

	return (
		<div className='relative w-full h-[89vh] md:h-[85vh]'>
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
				<div className='text-white grid gap-4 place-items-center text-center px-1 '>
					<h1 className='text-6xl md:text-8xl tracking-wider'>AMORE COFFEE</h1>
					<motion.div
						variants={containerVariant}
						initial='hidden'
						animate='visible'
					>
						<motion.h2
							className='text-3xl md:text-5xl font-amoreCursive flex space-x-4 flex-wrap justify-center px-3'
							variants={sentenceVariant}
							initial='hidden'
							animate='visible'
						>
							{line.map((letter, index) => {
								return (
									<motion.p
										key={letter + '-' + index}
										variants={letterVariant}
										className=''
									>
										<span className=''> {letter}</span>
									</motion.p>
								);
							})}
						</motion.h2>
					</motion.div>

					<motion.div
						className='py-4'
						variants={buttonVariant}
						initial='hidden'
						animate='visible'
					>
						<Link href={'/amore-coffee-menu'}>
							<span className='btn bg-gray-200  text-4xl'>Menu</span>
						</Link>
					</motion.div>
				</div>
			</div>
		</div>
	);
};
export default LandingHero;
