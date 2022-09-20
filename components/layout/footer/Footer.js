import Image from 'next/image';
import Link from 'next/link';
import logo from '../../../public/images/logo.webp';
import FollowUs from './FollowUs';
import Hours from './Hours';

const Footer = () => {
	return (
		<div className="bg-gray-200">
		<div className='max-w-7xl mx-auto grid gap-8 md:grid-cols-3 place-items-center w-full py-2 bg-gray-200'>
			<div className='order-3 md:order-1 md:justify-self-start cursor-pointer hover:opacity-80 transition duration-700'>
				<Link href={'/'}>
					<Image src={logo} alt='logo' height={200} width={200} />
				</Link>
			</div>
			<div className="order-2">
				<Hours />
			</div>
			<div className="md:justify-self-end order-1 md:order-3">
            <FollowUs />
			</div>
		</div>
		</div>
	);
};

export default Footer;
