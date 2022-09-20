const NewWindowLink = ({icon, to}) => {
	return (
		<>
			<a href={to} target='_blank.' rel='noreferrer'>
				<div className="flex space-x-3 items-center">
                    <span className="text-3xl ">
                        {icon}
                    </span>
                </div>
			</a>
		</>
	);
};

export default NewWindowLink;
