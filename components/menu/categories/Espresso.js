import InViewContainer from '../../utils/animations/InViewContainer';
import DrinkItem from '../DrinkItem';

const Espresso = ({ data }) => {
	return (
		<InViewContainer>
			<h3 className='text-5xl pb-3 font-amoreCursive'>Espresso</h3>
			<div className='grid gap-4'>
				{data.map((drink) => (
					<div key={drink.id}>
						<DrinkItem
							name={drink.name}
							description={drink.description}
							prices={drink.pricing}
						/>
					</div>
				))}
			</div>
		</InViewContainer>
	);
};

export default Espresso;
