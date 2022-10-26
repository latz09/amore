
import Image from 'next/image';
import owners from '../../public/images/owners.webp';

const About = () => {
	return (
		<div className='grid gap-3 md:grid-cols-3 place-items-center h-full'>
			<div className='md:col-span-1'>
				<div className='hidden shadow-lg md:grid hover:shadow-2xl transition duration-700 px-2 items-center'>
					<Image src={owners} alt='owners of amoreCoffee' />
				</div>
			</div>

			<div className='md:col-span-2 px-3 md:p-8'>
				<p className='grid gap-4 tracking-wider leading-7 text-lg md:text-xl text-gray-700'>
					<div>{`Amore is love, love for coffee, love for others. Amore is the home for not only coffee lovers but also our community.  A community loves and respects each other. Whether you are young or young at heart, it doesn't matter who or what you are, you are "us". We welcome all that grace our doors. We are here to help you celebrate or to give you a hug whenever you may need one.`}</div>
					<div className='md:hidden shadow-lg grid hover:shadow-2xl transition duration-700'>
						<Image
							src={owners}
							alt='owners of amoreCoffee'
							layout='intrinsic'
						/>
					</div>
					<div>{`This is the quintessential Amore, on 12/31/18 Amore Coffee went thru it's own transition a transition of ownership. In this picture you can see the young and the young at heart transitioning like Amore does....with love and respect. Amore is you, and you welcomed this with open arms!`}</div>
					<div>{`So what is Amore Coffee....it is you, and we thank you for that!`}</div>
				</p>
			</div>
		</div>
	);
};

export default About;
