import Navbar from "./navbar";

const layout = ({ children }) => {
	return (
		<>
			<div className='Container'>
				<Navbar />
				{children}
				<span className='bottom'>
					Copyright 2023 created and designed by Amine
				</span>
			</div>
		</>
	);
};

export default layout;
