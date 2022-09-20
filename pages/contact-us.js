import BookingCard from '../components/contact/BookingCard';
import GeneralInfo from '../components/contact/GeneralInfo';

const ContactUs = () => {
	return (
		<div className='max-w-7xl mx-auto py-12'>
			<GeneralInfo />
			<div className='grid gap-8 md:flex md:justify-evenly py-8'>
				<BookingCard to='/' title='Meeting Room' />
				<BookingCard to='/' title='For Musicians' />
			</div>
		</div>
	);
};

export default ContactUs;
