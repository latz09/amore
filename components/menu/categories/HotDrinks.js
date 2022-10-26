import InViewContainer from '../../utils/animations/InViewContainer';
import DrinkItem from '../DrinkItem';
import Teas from '../Teas';

const HotDrinks = ({ data }) => {
	return (
		<InViewContainer>
			<h3 className='text-5xl pb-3 font-amoreCursive'>Hot Drinks</h3>
			<div className='grid gap-4'>
				<Teas teas={data.teas} />
				{data.other.map((drink) => (
					<div key={drink.name}>
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

export default HotDrinks;
