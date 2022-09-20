import Image from 'next/image';
import Link from 'next/link';
import eventSpace from '../../../public/images/building/inside.jpg';

const EventSpaceHero = () => {
	return (
		<div className='relative w-full h-[80vh]'>
			<Image
				src={eventSpace}
				alt=''
				priority='true'
				layout='fill'
				objectFit='cover'
				objectPosition='center'
				placeholder='blur'
			/>

			<div className='relative flex justify-center items-center h-full bg-black bg-opacity-70'>
				<div className='text-white grid gap-4 place-items-center max-w-7xl mx-auto text-center px-1'>
					<h1 className='text-4xl md:text-6xl tracking-wider'>
						Meeting and Event Space Available!
					</h1>
					<h2 className='text-2xl md:text-4xl font-amoreCursive'>
						Amore Coffee has a separate room adjacent to the coffee shop
						available for reservations.
					</h2>
					<div className="py-4">
						<h2 className="text-2xl animate-pulse">Reserve your day!</h2>
						<div className='py-4 grid gap-3'>
							<Link href={'/amore-coffee-event-space'}>
								<span className='btn bg-gray-200 text-gray-800 text-3xl'>
									Learn More
								</span>
							</Link>
							<span className='text-2xl'>{`Or call us at 651 330-0570`}</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default EventSpaceHero;
