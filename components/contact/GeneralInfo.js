import { AiFillPhone } from 'react-icons/ai';

const GeneralInfo = () => {
	return (
		<div className='grid gap-5 place-items-center text-xl text-gray-800 '>
			<p className='font-amoreCursive text-3xl tracking-widest text-center max-w-3xl'>
				Amore Coffee is located at the intersection of Annapolis Street and
				Smith Avenue in West Saint Paul.
			</p>

			<div className='grid gap-1 place-items-center text-2xl'>
				<span>879 Smith Ave South</span>
				<span>West Saint Paul, MN 55118</span>
			</div>
			<div className='flex space-x-3 items-center text-2xl'>
				<span className='text-black'>
					<AiFillPhone />
				</span>
				<span>{`651 330-0570`}</span>
			</div>
		</div>
	);
};

export default GeneralInfo;
