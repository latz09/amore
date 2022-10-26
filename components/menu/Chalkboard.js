import Coffee from './categories/Coffee';
import Espresso from './categories/Espresso';
import HotDrinks from './categories/HotDrinks';
import IcedDrinks from './categories/IcedDrinks';
import Specials from './categories/Specials';
import MenuHeading from './MenuHeading';
import { motion } from "framer-motion";

const ChalkBoard = ({ data }) => {


	return (
		<div className='chalkboard'>
			<MenuHeading />
			<motion.div className='grid md:grid-cols-2 p-6 text-chalk gap-12'  
			initial={{opacity: 0}} animate={{opacity: 1}} transition={{delay: 1, duration: .7}}
			
			>
				<div className="grid gap-8">
					<Coffee data={data.coffee} />
					<Specials data={data.specials} />
					<IcedDrinks data={data.icedDrinks} />
				</div>
				<div className="grid gap-8">
					<Espresso data={data.espresso} />
					<HotDrinks data={data.hotDrinks} />
				</div>
			</motion.div>
		</div>
	);
};

export default ChalkBoard;
