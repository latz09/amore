const TeaItem = ({ teaData }) => {
	
	return (
		<div className="grid gap-1">
			{teaData.map((tea) => (
				<div key={tea.brand} className="">
					<span className="text">{tea.brand}</span>
                    <span className="mx-1">-</span>
                    <span>{tea.description}</span>
				</div>
			))}
		</div>
	);
};

export default TeaItem;
