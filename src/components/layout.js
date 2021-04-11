import React from 'react';

import './style.scss';
import Helmet from './helmet';
import Navbar from './navbar';
import Header from '../modules/header';
//import Midsection from '../modules/midsection';
import FeaturedProducts from '../modules/featuredproducts';
import Footer from './footer';

const Layout = ({ children }) => (
	<div>
		<Helmet />
		<Navbar />
		<Header />
		<FeaturedProducts />
		<Footer />
	</div>
);

export default Layout;
