const DrinkItem = ({ name, description, prices }) => {
	return (
		<div className='grid'>
			<div className=' grid '>
				<div className='flex justify-between items-center '>
					<span className='text-2xl'>{name}</span>

					<div className='flex space-x-10'>
						{prices.map((price) => (
							<span key={price.size}>{price.price}</span>
						))}
					</div>
				</div>
				<span className='font-amoreCursive text-lg opacity-80'>{description}</span>
			</div>
		</div>
	);
};

export default DrinkItem;
