import InViewContainer from '../utils/animations/InViewContainer';

const TeaItem = ({ teaData }) => {
	return (
		<div className='grid gap-1'>
			{teaData.map((tea) => (
				<div key={tea.brand} className=''>
					<InViewContainer>
						<span className='text'>{tea.brand}</span>
						<span className='mx-1'>-</span>
						<span>{tea.description}</span>
					</InViewContainer>
				</div>
			))}
		</div>
	);n
};

export default TeaItem;
