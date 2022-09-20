import { FaTwitter } from 'react-icons/fa';
import { FaFacebookF } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import NewWindowLink from '../../utils/NewWindowLink';

const FollowUs = () => {
	const instagramIcon = <FaInstagram />;
	const facebookIcon = <FaFacebookF />;
	const twitterIcon = <FaTwitter />;
	const instagramLink = 'https://www.instagram.com/amorecoffeewsp/?hl=en';
	const facebookLink = 'https://www.facebook.com/amorecoffeewsp/';
	const twitterLink = 'https://twitter.com/amorewsp';

	return (
		<div className='grid gap-4 place-items-center'>
			<span className="font-amoreCursive text-4xl">Follow Us</span>
			<div className='flex space-x-3'>
				<NewWindowLink to={instagramLink} icon={instagramIcon} />
				<NewWindowLink to={facebookLink} icon={facebookIcon} />
				<NewWindowLink to={twitterLink} icon={twitterIcon} />{' '}
			</div>
		</div>
	);
};

export default FollowUs;
