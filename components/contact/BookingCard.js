import Link from 'next/link';

const BookingCard = ({ title, to, description }) => {
	const booksy =
		'https://booksy.com/en-us/633965_amore-coffee_professional-services_115138_mendota-heights?do=invite&_branch_match_id=928721585321776957&utm_medium=merchant_customer_invite&_branch_referrer=H4sIAAAAAAAAA8soKSkottLXT07J0UvKz88urtRLzs%2FVr0wr8k318CszyE0CAAwjqCUiAAAA';

	return (
		<div className='grid gap-8 place-items-center p-3 shadow-md py-8  md:w-1/3 tracking-widest hover:shadow-xl md:hover:scale-110 transition duration-700'>
			<span className="grid gap-2 justify-items-center text-center">
				<h1 className='text-4xl text-gray-700'>{title}</h1>
                <span>{description}</span>
			</span>
			<div className='flex space-x-3 justify-evenly w-full px-2'>
				<Link href={to}>
					<a className='p-3 bg-gray-700 shadow-lg font-semibold tracking-widest hover:bg-opacity-50 transition duration-700 md:text-xl text-gray-100'>
						Learn More
					</a>
				</Link>

				<a
					className='p-3 bg-gray-700 shadow-lg font-semibold tracking-widest hover:bg-opacity-50 transition duration-700 md:text-xl text-gray-100'
					href={booksy}
					target='_blank.'
					rel='noreferrer'
				>
					Book Now
				</a>
			</div>
		</div>
	);
};

export default BookingCard;
