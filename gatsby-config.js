module.exports = {
	siteMetadata: {
		title: 'The Beauty Ampoule',
		author: 'Daisy Jimenez',
		imageUrl: '../images/ampoule.svg',
		description: 'A Project to bootstrap your next Gatsby + Bulma site.',
		keywords: `Beauty, Ampoule, Collagen, Gluthation`,
		twitter: 'https://twitter.com/thebeautyampoule',
		instagram: `https://instagram.com/thebeautyampoule`,
		facebook: `https://facebook.com/thebeautyampoulebyDaisJimenez`,
		siteUrl: `https://thebeautyampoule`
	},
	plugins: [
		'gatsby-plugin-react-helmet',
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `images`,
				path: `${__dirname}/src/images`
			}
		},
		'gatsby-transformer-sharp',
		'gatsby-plugin-sharp',
		{
			resolve: `gatsby-plugin-manifest`,
			options: {
				name: 'Makefolio',
				short_name: 'Makefolio',
				start_url: '/',
				background_color: '#2980b9',
				theme_color: '#2980b9',
				display: 'standalone',
				icon: 'src/images/ampoule.svg',
				orientation: 'portrait'
			}
		},
		`gatsby-plugin-sass`,
		{
			resolve: `gatsby-plugin-google-analytics`,
			options: {
				trackingId: 'UA-XXXXXXXX-X',
				// Setting this parameter is optional (requried for some countries such as Germany)
				anonymize: true
			}
		},
		`gatsby-plugin-sitemap`
		// this (optional) plugin enables Progressive Web App + Offline functionality
		// To learn more, visit: https://gatsby.app/offline
		// 'gatsby-plugin-offline',
	]
};
