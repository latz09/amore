import ChalkBoard from '../components/menu/Chalkboard';
import { drinks } from '../data/menu';

const menu = () => {
	const data = drinks	
	return (
		<div className='max-w-5xl mx-auto py-3'>
			<ChalkBoard data={data}/>
		</div>
	);
};

export default menu;

