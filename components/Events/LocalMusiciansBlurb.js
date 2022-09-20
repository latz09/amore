import Image from 'next/image';
import twoSingers from '../../public/images/events/twoSingers.jpg';

const LocalMusiciansBlurb = () => {
	return (
		<div className='max-w-5xl mx-auto py-16 px-1'>
			<div className='grid gap-5 place-items-center text-center leading-8 tracking-widest'>
				<span className='font-amoreCursive text-4xl'>
					Are you a starving artist or the next big thing? Amore is the place
					for you to play!
				</span>
				<span className='text-2xl'>
					We offer music opening every Friday and Saturday from 7pm to 8:45 pm.
				</span>
				<div className='grid place-items-center gap-2 md:flex md:space-x-4 justify-center w-full text-xl pt-3'>
					<button className='btn w-full md:w-1/4 bg-gray-100 hover:bg-gray-200 border-none'>Book Now</button>
					<button className='btn w-full md:w-1/4 bg-gray-100 hover:bg-gray-200 border-none'>
						Upcoming Events
					</button>
				</div>
			</div>
			
		</div>
	);
};

export default LocalMusiciansBlurb;
