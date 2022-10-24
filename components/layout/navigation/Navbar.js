import Link from 'next/link';
import { RiMenu3Fill, RiCloseLine } from 'react-icons/ri';
import { useState } from 'react';
import logo from '../../../public/images/logo.webp';
import { navLinks } from '../../../data/navLinks';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import SlideOutNav from './slideout/SlideOutNav';

const Navbar = () => {
	const [open, setOpen] = useState(false);
	const closeMenu = () => {
		open && setOpen(false);
	};

	return (
		<nav className=''>
			<div className='max-w-7xl mx-auto flex justify-between items-center px-8 z-10' >
				<button
					className='py-1 hover:opacity-70 transition duration-700'
					onClick={closeMenu}
				>
					<Link href={'/'}>
						<a className="">
							<Image src={logo} alt='logo' height={90} width={90} />
						</a>
					</Link>
				</button>

				<div className='hidden md:flex'>
					{navLinks.map((link) => (
						<div
							key={link.name}
							className='md:ml-8 text-lg md:text-2xl md:my-0 my-7 text-center'
						>
							<Link href={link.link}>
								<a className=' hover:text-blue-400 transition duration-700 font-light'>
									{link.name}
								</a>
							</Link>
						</div>
					))}
				</div>

				<div className='text-3xl text-gray-800 hover:opacity-60 md:hidden z-50 transition duration-700'>
					<button
						onClick={() => {
							setOpen(!open);
						}}
					>
						<span className={`${open && 'text-white font-bold'}`}>{!open ? <RiMenu3Fill /> : <RiCloseLine />}</span>
					</button>
				</div>
			</div>
			<AnimatePresence mode='wait'>
				{open && (
					<motion.div
						className='navbar-overlay'
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ duration: 1.1 }}
						exit={{ opacity: 0 }}
					>
						<motion.div
							className='navbar'
							initial={{ x: '-100vw' }}
							animate={{ x: 1 }}
							transition={{ duration: 1.1 }}
							exit={{ x: '-100vh' }}
						>
							<SlideOutNav open={open} setOpen={setOpen}/>
						</motion.div>
					</motion.div>
				)}
			</AnimatePresence>
		</nav>
		// <div className='shadow-md w-full  top-0 left-0 z-10'>
		// 	<div className='bg-gray-200'>
		// 		<div className='max-w-7xl mx-auto flex items-center justify-between pt-1 px-3 text-gray-600 tracking-wider'>
		// 			<Link href={'/'}>
		// 				<button
		// 					className='hover:opacity-80 duration-700 text-4xl cursor-pointer'
		// 					onClick={closeMenu}
		// 					aria-label='Navigate Home'
		// 				>
		// 					<div>
		// 						<Image src={logo} alt='logo' height={70} width={70} />
		// 					</div>
		// 				</button>
		// 			</Link>

		// 			<div
		// 				onClick={() => setOpen(!open)}
		// 				className='text-3xl  cursor-pointer md:hidden'
		// 			>
		// 				{!open ? (
		// 					<button
		// 						label='open navbar'
		// 						aria-label='open dropdown navigation bar'
		// 					>
		// 						<RiMenu3Fill />{' '}
		// 					</button>
		// 				) : (
		// 					<button
		// 						label='close navbar'
		// 						aria-label='close dropdown navigation bar'
		// 					>
		// 						<RiCloseLine />
		// 					</button>
		// 				)}
		// 			</div>

		// 			<div
		// 				className={`border-b bg-gray-200 border-gray-700 md:border-none md:flex md:items-center md:pb-0 pb-12 absolute md:static md:z-auto z-[-1] left-0 w-full md:w-auto transition-all duration-700 ease-in ${
		// 					open ? 'top-28' : 'top-[-490px]'
		// 				}`}
		// 			>
		// 				{navLinks.map((link) => (
		// 					<div
		// 						key={link.name}
		// 						className='md:ml-8 text-lg md:text-2xl md:my-0 my-7 text-center'
		// 						onClick={() => setOpen(!open)}
		// 					>
		// 						<Link href={link.link}>
		// 							<a className='hover:text-gray-500 hover:border-b border-gray-500 duration-700  pb-2 md:border-none md:pb-0'>
		// 								{link.name}
		// 							</a>
		// 						</Link>
		// 					</div>
		// 				))}
		// 			</div>
		// 		</div>
		// 	</div>
		// </div>
	);
};

export default Navbar;
