import Footer from './footer/Footer';
import Navbar from './navigation/Navbar';
const Layout = ({ children }) => {
	return (
		<div className='flex flex-col h-screen font-amore bg-gray-200'>
			<Navbar />
			<main className='flex-grow bg-gray-200'>{children}</main>
			<Footer />
		</div>
	);
};
export default Layout;