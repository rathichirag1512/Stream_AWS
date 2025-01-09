import { Route, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Nav from "./componets/Nav";
import Home from "./pages/Home";
import Videos from "./pages/Videos";
import Upload from "./pages/Upload";
import Watch from "./pages/Watch";

function App() {
	return (
		<>
			<Nav />
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/videos' element={<Videos />} />
				<Route path='/upload' element={<Upload />} />
				<Route path='/watch/:id' element={<Watch />} />
				<Route
					path='*'
					element={
						<>
							<h1 className='text-center text-gray-700 mt-4'>
								This page does not exist!!!
							</h1>
						</>
					}
				/>
			</Routes>
			<Toaster duration={2000} />
		</>
	);
}

export default App;
