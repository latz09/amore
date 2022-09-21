import Image from 'next/image';
import coffee from '../../../public/images/building/insideCounter.jpg';
import Link from 'next/link';
const LandingHero = () => {
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
				<div className='text-white grid gap-4 place-items-center text-center px-1 '>
					<h1 className='text-6xl md:text-8xl tracking-wider'>AMORE COFFEE</h1>
					<h2 className='text-3xl md:text-5xl font-amoreCursive'>
						All you need is love and a cup of coffee
					</h2>
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
export default LandingHero;
