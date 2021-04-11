import React from 'react';

const Midsection = () => (
	<div>
		<section id="products" className="section">
			<div className="container">
				<div className="columns is-multiline">
					<div className="column is-one-third">
                        <div className="card">
                            <div className="card-image">
                                <figure className="image is-3by3">
                                <img src="https://uploads.beautymnl.com/spree/product_images/264053/original/Pure_Beauty_Bottle_Box.jpg?1589526034" alt="Repair Drink with Probiotics" />
                                </figure>
                            </div>
                            <div className="card-content">
                                <div className="media">
                                <div className="media-content">
                                    <p className="title is-6">Repair Drink with Probiotics</p>
                                    <p className="subtitle">{/*<strong className="strikethrough disabled-text">₱2,600.00 </strong>&nbsp;*/}<strong>₱2,500.00 </strong></p>
                                </div>
                                </div>

                                <div className="content">
                                Fortifies the skin against aging and boosts immunity with a potent amount of collagen and probiotics
                                </div>
                            </div>
                        </div>
					</div>
					<div className="column is-one-third">
                        <div className="card">
                            <div className="card-image">
                                <figure className="image is-3by3">
                                    <img src="https://uploads.beautymnl.com/spree/product_images/276306/original/1-Pure-Beauty-Collagen.jpg?1596585384" alt="Pure Beauty Collagen" />
                                </figure>
                            </div>
                            <div className="card-content">
                                <div className="media">
                                <div className="media-content">
                                <p className="title is-6">Pure Beauty Collagen</p>
                                    <p className="subtitle">{/*<strong className="strikethrough disabled-text">₱2,600.00 </strong>&nbsp;*/}<strong>₱1,300.00 </strong></p>
                                </div>
                                </div>

                                <div className="content">
                                This powdered collagen drink makes it easy to maximize your daily dose of collagen.
                                </div>
                            </div>
                        </div>
					</div>
                    <div className="column is-one-third">
                        <div className="card">
                            <div className="card-image">
                                <figure className="image is-4by4">
                                <img src="https://uploads.beautymnl.com/spree/product_images/137569/original/Lux.jpg?1544083642" alt="Luxcent Luminous Caps" />
                                </figure>
                            </div>
                            <div className="card-content">
                                <div className="media">
                                <div className="media-content">
                                    <p className="title is-6">Luxcent Luminous Caps</p>
                                    <p className="subtitle"><strong>₱1,200.00 </strong></p>
                                </div>
                                </div>

                                <div className="content">
                                    L-Glutathione + Marine Collagen Whitening Capsule 
                                </div>
                            </div>
                        </div>
					</div>
				</div>
			</div>
		</section>
	</div>
);

export default Midsection;
