import Image from 'next/image';
import Link from 'next/link';
import eventSpace from '../../../public/images/building/inside.jpg';
import InViewContainer from '../../utils/animations/InViewContainer';

const EventSpaceHero = () => {
	return (
		<div className='relative  h-screen'>
			<Image
				src={eventSpace}
				alt=''
				priority='true'
				layout='fill'
				objectFit='cover'
				objectPosition='center'
				placeholder='blur'
			/>

			<div className='relative flex justify-center items-center h-full bg-dark/70 text-light '>
				<InViewContainer>
				<div className=' grid gap-4  max-w-5xl mx-auto'>
					<h1 className='text-4xl md:text-6xl tracking-wider font-oswald text-primary'>
						Meeting and Event Space Available!
					</h1>
					<h2 className='text-xl md:text-3xl font-questrial'>
						Amore Coffee has a separate room adjacent to the coffee shop
						available for reservations.
					</h2>
					<div className="py-4 grid place-items-center text-center">
						{/* <h2 className="text-2xl font-bold animate-pulse">Reserve today!</h2> */}
						<div className='py-4 grid gap-3'>
							<Link href={'/amore-coffee-event-space'}>
								<span className='  text-3xl'>
									Learn More
								</span>
							</Link>
							<span className='text-2xl'>{`Or call us at 651 330-0570`}</span>
						</div>
					</div>
				</div>
				</InViewContainer>
			</div>
		</div>
	);
};

export default EventSpaceHero;
