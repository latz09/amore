import Image from 'next/image';
import logo from '../../../public/images/logo.webp';

const AboutBlurb = () => {
	return (
		<div className='max-w-7xl mx-auto grid place-items-center py-8 text-xl tracking-wider leading-7 text-gray-700 '>
			<div className='grid gap-5 md:gap-0 md:grid-cols-2 place-items-center'>
				<div className='opacity-90'>
					<Image
						src={logo}
						alt='logo'
						layout='intrinsic'
						height={300}
						width={300}
					/>
				</div>
				<p className='grid gap-4'>
					<span>
						<span className="font-medium">Amore Coffee </span>
						{`is a unique specialty shop located on the corner of Smith and Annapolis.  With a fabulous owner and welcoming staff, you'll find all of your coffee needs.`}
					</span>
					<span>
						We offer a wide variety of food and drink choices including{' '}
						<span>Gluten Free and Alternative Milk Choices.</span>
					</span>
					<span className='font-amoreCursive text-2xl font-semibold tracking-widest'>
						Stop in to see our daily specials and say hello!
					</span>
				</p>
			</div>
		</div>
	);
};

export default AboutBlurb;
