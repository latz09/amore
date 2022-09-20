import BookingCard from '../components/contact/BookingCard';
import GeneralInfo from '../components/contact/GeneralInfo';

const ContactUs = () => {
	return (
		<div className='max-w-7xl mx-auto py-12'>
			<GeneralInfo />
			<div className='grid gap-8 md:flex md:justify-evenly py-8'>
				<BookingCard to='/' title='Meeting Room' description='Amore Coffee has a separate room adjacent to the coffee shop available for reservations.'/>
				<BookingCard to='/' title='For Musicians' description=' We offer music opening every Friday and Saturday from 7:00pm to 8:45 pm.' />
			</div>
		</div>
	);
};

export default ContactUs;
