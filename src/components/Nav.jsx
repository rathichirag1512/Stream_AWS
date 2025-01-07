import React from "react";
import { Navbar, Typography } from "@material-tailwind/react";
import { Link } from "react-router-dom";

function Nav() {
	return (
		<Navbar className='mx-auto max-w-screen-xl px-4 py-3 mt-3 mb-2'>
			<div className='flex flex-wrap items-center justify-between gap-y-4 text-blue-gray-900'>
				<Link to={"/"}>
					<Typography
						as='a'
						href='/'
						variant='h5'
						className='mr-4 ml-2 cursor-pointer py-1.5'>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							fill='none'
							viewBox='0 0 24 24'
							strokeWidth={1.5}
							stroke='currentColor'
							className='w-6 h-6'>
							<path
								strokeLinecap='round'
								d='M15.75 10.5l4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25h-9A2.25 2.25 0 002.25 7.5v9a2.25 2.25 0 002.25 2.25z'
							/>
						</svg>
					</Typography>
				</Link>
				<div className='ml-auto flex gap-3 md:mr-4'>
					<Link className='mr-3 flex items-center gap-1' to={"/videos"}>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							fill='none'
							viewBox='0 0 24 24'
							strokeWidth={1.5}
							stroke='currentColor'
							className='w-6 h-6'>
							<path
								strokeLinecap='round'
								strokeLinejoin='round'
								d='M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zM3.75 12h.007v.008H3.75V12zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm-.375 5.25h.007v.008H3.75v-.008zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z'
							/>
						</svg>
						My Videos
					</Link>
					<Link className='mr-3 flex items-center gap-1' to={"/upload"}>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							fill='none'
							viewBox='0 0 24 24'
							strokeWidth={1.5}
							stroke='currentColor'
							className='w-6 h-6'>
							<path
								strokeLinecap='round'
								strokeLinejoin='round'
								d='M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5'
							/>
						</svg>
						Upload Videos
					</Link>
				</div>
			</div>
		</Navbar>
	);
}

export default Nav;
