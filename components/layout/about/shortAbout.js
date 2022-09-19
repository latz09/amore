import Image from 'next/image';
import building from '../../../public/images/building/outsideSunset.jpg'

const ShortAbout = () => {
	return (
		<div className='max-w-4xl mx-auto grid place-items-center py-8'>
			<div className='grid place-items-center gap-3 md:gap-8'>
			
                <p className="text-xl md:text-3xl tracking-wider leading-8 font-amoreCursive px-3">
                   {`Amore is love, love for coffee, love for others. Amore is the home for not only coffee lovers but also our community.  A community loves and respects each other. Whether you are young or young at heart, it doesn't matter who or what you are, you are "us". We welcome all that grace our doors. We are here to help you celebrate or to give you a hug whenever you may need one. `} 
                </p>
                {/* <div className='shadow-lg grid items-center '>
					<Image src={building} alt='' />
				</div> */}
			</div>
		</div>
	);
};

export default ShortAbout;
