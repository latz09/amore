import Image from 'next/image';
import twoSingers from '../../public/images/events/twoSingers.jpg';

const LocalMusiciansBlurb = () => {
	return (
		<div className='max-w-7xl mx-auto grid grid-cols-3 gap-8 py-16 '>
			<div className='col-span-2 grid gap-1 place-items-center text-center leading-8 tracking-widest'>
				<span className='font-amoreCursive text-4xl'>
					Are you a starving artist or the next big thing? Amore is the place
					for you to play!
				</span>
				<span className='text-2xl'>
					We offer music opening every Friday and Saturday from 7pm to 8:45 pm.
				</span>
				<div className='flex space-x-4 justify-center w-full text-xl'>
					<button className='btn w-1/4 bg-gray-100 hover:bg-gray-200'>Book Now</button>
					<button className='btn w-1/4 bg-gray-100 hover:bg-gray-200'>
						Upcoming Events
					</button>
				</div>
			</div>
			<div className='grid place-items-center shadow-lg '>
				<Image src={twoSingers} alt='' />
			</div>
		</div>
	);
};

export default LocalMusiciansBlurb;
