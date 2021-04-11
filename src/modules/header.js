import React from 'react';
import TextLoop from 'react-text-loop'
import { Link } from 'gatsby'

const Header = ({ siteTitle }) => (
	<section className="hero gradientBg has-background is-large">
		<img src={'/images/background.jpg'} className="hero-background" alt="Renovations packages starts from $6,888" />
		<div className="hero-body">
			<div className="container">
				<div className="header-content">
					<h1 className="is-size-2">
						Keep on {" "}
						<TextLoop mask={true} interval={1500} className="activeText">
							<span>Glowing.</span>
							<span>Healthy.</span>
							<span>Beautiful.</span>
						</TextLoop>		
					</h1>
					<p className="is-size-6 pt-5 pb-6">Discover products that is right just for you.</p>
					<Link to="#products" className="button header-button is-primary is-medium">
						View Products
					</Link>
				</div>
			</div>
		</div>
	</section>
);

export default Header;
