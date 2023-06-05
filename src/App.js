import React, { useState } from 'react';
import {BrowserRouter ,Routes, Route} from "react-router-dom";
import Navbar from './Navbar.js';
import Trending from "./Pages/Trending.js";
import Movie from "./Pages/Movies.js";
import TV from "./Pages/TV.js";
import Webseries from "./Pages/Webseries.js";
import Footer from './Footer.js';
import Error from './Pages/Error';
import "./Pages/Search_page.js";
import Search from './Pages/Search_page.js';

function App() {
	const [val,setVal]=useState("")
	const searchvalues=(value)=>{
		setVal(value)
	}

  return (
	<BrowserRouter>
		<Navbar searchvalue={searchvalues} />
		{
			val ? (
				< Search query={val} />
				
		
		):(
			<Routes>
			<Route path="/" element={<Trending />} exact />
			<Route path='/movies' element={<Movie />} />
			<Route path='/tv' element={<TV />} />
			<Route path='/webseries' element={<Webseries />} />
			<Route path='*' element={<Error />} />
		</Routes>
		)
		}
		<Footer />
	</BrowserRouter>
  );
}

export default App;
