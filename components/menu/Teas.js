import TeaItem from './TeaItem';

const Teas = ({ teas }) => {
	return (
		<div className='text-chalk grid gap-4 '>
			<div>
				<span className='font-semibold tracking-wider text-xl'>Black Tea</span>
				<TeaItem teaData={teas.blackTea} />
			</div>
			<div>
				<span className='font-semibold tracking-wider text-xl'>Green Tea</span>
				<TeaItem teaData={teas.greenTea} />
			</div>
			<div>
				<span className='font-semibold tracking-wider text-xl'>Herbal Tea</span>
				<TeaItem teaData={teas.herbal} />
			</div>
		</div>
	);
};

export default Teas;
