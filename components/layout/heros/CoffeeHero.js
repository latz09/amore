import Image from 'next/image';
import Link from 'next/link';
import coffee from '../../../public/images/Coffee/foamart.jpg';

const CoffeeHero = () => {
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
				<div className='text-white grid gap-4 place-items-center max-w-7xl mx-auto '>
					<h1 className='text-6xl md:text-8xl tracking-wider'>
						Love For Coffee
					</h1>
					<h2 className='text-3xl md:text-5xl text-center font-amoreCursive'>
						We offer a wide varity of drink choices including alternative milks.
					</h2>
					<div className='py-4'>
						<Link href={'/'}>
							<span className="btn bg-gray-200 text-gray-800 text-4xl">Menu</span>
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CoffeeHero;
