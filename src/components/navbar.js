import React from 'react';
import { Link, StaticQuery, graphql } from 'gatsby'

import './style.scss';


const Navbar = () => (
	<StaticQuery
    query={graphql`
      query SiteQuery {
        site {
          siteMetadata {
            title
            siteUrl
          }
        }
      }
    `}
	render={data => (
	<nav className="navbar is-fixed-top" role="navigation" aria-label="main navigation">
		<div className="container">
		<div className="navbar-brand">
			<Link to="/"  className="navbar-item is-size-6">
				<img src={'/images/the-beauty-ampoule.png'} height={28} alt="The Beauty Ampoule" />
			</Link>
			<Link to="/"  role="button" className="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
				<svg viewBox="0 0 16 16" fill="#332E54" xmlns="http://www.w3.org/2000/svg" height="16" width="16" class="css-10yyv0"><path fill-rule="evenodd" clip-rule="evenodd" d="M16.02 1H0v1.25h16.02V1zm0 6.74H0v1.25h16.02V7.74zM0 14.48h8.72v1.25H0v-1.25z" fill="currentColor"></path></svg>
			</Link>
		</div>
		<div className="nav-center is-hidden-touch">
			<Link to="https://web.facebook.com/pg/thebeautyampoulebyDaisJimenez/about/" target="_blank"  className="navbar-item nav-link">
				About Us
			</Link>
			<Link to="#products"  className="navbar-item nav-link">
				Products
			</Link>
			<Link to="https://web.facebook.com/thebeautyampoulebyDaisJimenez/reviews/" target="_blank"  className="navbar-item nav-link">
				Reviews
			</Link>
		</div>
		{/*<div className="nav-end is-hidden-touch">
			<div className="navbar-item">
				<div className="buttons">
					<Link to="/"  className="button is-borderred">
						Sign up
					</Link>
				</div>
			</div>
		</div>*/}
		</div>
	</nav>
	)}
	/>
);

export default Navbar;
