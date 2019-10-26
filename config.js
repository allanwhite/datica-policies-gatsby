const config = {
	"gatsby": {
		"pathPrefix": "/",
		"siteUrl": "https://datica.com",
		"gaTrackingId": null
	},
	"header": {
		"logo": "https://datica.com/public/icons/inlined/datica-logo-horiz.svg",
		"logoLink": "/",
		"title": "Compliance Policies",
		"githubUrl": "https://github.com/allanwhite/datica-policies-gatsby",
		"helpUrl": "",
		"tweetText": "",
		"links": [
			{ "text": "", "link": ""}
		],
		"search": {
			"enabled": false,
			"indexName": "",
			"algoliaAppId": process.env.GATSBY_ALGOLIA_APP_ID,
			"algoliaSearchKey": process.env.GATSBY_ALGOLIA_SEARCH_KEY,
			"algoliaAdminKey": process.env.ALGOLIA_ADMIN_KEY
		}
	},
	"sidebar": {
		"forcedNavOrder": [
			"/purpose",
			"/roles",
			"/policies"
		],
		"links": [
			{ "text": "Datica Main Site", "link": "https://datica.com"},
		],
		"frontline": false,
		"ignoreIndex": true,
	},
	"siteMetadata": {
		"title": "Gatsby Gitbook Boilerplate | Hasura",
		"description": "Documentation built with mdx.",
		"ogImage": null,
		"docsLocation": "https://github.com/hasura/gatsby-gitbook-boilerplate/tree/master/content",
		"favicon": "https://datica.com/public/icons/inlined/icon-datica.svg"
	},
};

module.exports = config;