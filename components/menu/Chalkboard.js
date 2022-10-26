import Coffee from './categories/Coffee';
import Espresso from './categories/Espresso';
import HotDrinks from './categories/HotDrinks';
import IcedDrinks from './categories/IcedDrinks';
import Specials from './categories/Specials';
import MenuHeading from './MenuHeading';

const ChalkBoard = ({ data }) => {
	return (
		<div className='chalkboard'>
			<MenuHeading />
			<div className='grid md:grid-cols-2 p-6 text-chalk gap-12'>
				<div className='grid gap-8'>
					<Coffee data={data.coffee} />
					<Specials data={data.specials} />
					<IcedDrinks data={data.icedDrinks} />
				</div>
				<div className='grid gap-8'>
					<Espresso data={data.espresso} />
					<HotDrinks data={data.hotDrinks} />
				</div>
			</div>
		</div>
	);
};

export default ChalkBoard;
