import Image from 'next/image';
import coffee from '../../../public/images/building/outsideSunset.jpg';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Navbar from '../navigation/Navbar';
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
				staggerChildren: 0.24,
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

	const buttonVariant = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				delay: 2,
				duration: 2,
			},
		},
	};

	return (
		<div className='relative w-full h-screen '>
			<Image
				src={coffee}
				alt=''
				priority='true'
				layout='fill'
				objectFit='cover'
				objectPosition='bottom'
				placeholder='blur'
			/>

			<div className='relative flex flex-col justify-items-center  w h-full bg-secondary/20 text-light/90'>
				<Navbar />
				<div className='grid place-items-center flex-grow mb-24'>
					<div className='grid gap-12 place-items-center'>
						<div className="grid gap-6 lg:gap-12 place-items-center">
							<h1 className='text-6xl md:text-8xl tracking-widest font-oswald scale-y-150 text-pr'>
								AMORE COFFEE
							</h1>
							<p className="text-3xl lg:text-4xl tracking-widest font-questrial text-[#FFF6EE] font-bold">All are welcome</p>
						</div>
						{/* <div
					>
						<motion.h2
							className='text-2xl md:text-4xl flex space-x-3 mt-8 mb-8 flex-wrap   '
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
					</div> */}

						<motion.div
							className='hidden  place-items-center w-full px-2 py-8 lg:py-1 gap-6 lg:gap-0 lg:flex backdrop-blur- bg-secondary/20 rounded-sm  lg:shadow-lg shadow-dark  lg:justify-between items-center'
							variants={buttonVariant}
							initial='hidden'
							animate='visible'
						>
							<Link href={'/amore-coffee-menu'}>
								<span className='btn   '>Menu</span>
							</Link>

							<Link href={'/amore-coffee-menu'}>
								<span className='btn    '>Artists</span>
							</Link>
							<Link href={'/amore-coffee-menu'}>
								<span className='btn   '>Event Space</span>
							</Link>
						</motion.div>
						{/* <motion.div
							className='lg:hidden grid  '
							variants={buttonVariant}
							initial='hidden'
							animate='visible'
						>
							<Link href={'/amore-coffee-menu'}>
								<span className=' bg-primary/70 rounded-sm font-bold hover:bg-primary/95 transition duration-700 cursor-pointer hover:scale-105 p-3 text-2xl backdrop-blur-sm '>
									Get In Touch
								</span>
							</Link>
						</motion.div> */}
					</div>
				</div>
				<div className='grid place-items-center mb-24 text-lg lg:text-2xl font-tinos  text-light/80 tracking-widest'>
					<span>879 Smith Ave S, St.Paul, MN 55118</span>
				</div>
			</div>
		</div>
	);
};
export default LandingHero;
