#!/usr/bin/env node

const cron = require('node-cron');
const request = require('request');
const baseUrl = 'https://whirlpood.herokuapp.com/api/pods';

const podcsts = {
	cryptogram: "http://dhenage.libsyn.com/rss",
	securityweekly: "http://feeds.feedburner.com/securityweekly/XBIC",
	securitynow: "http://feeds.twit.tv/sn_video_hd.xml",
	riskybusiness: "https://risky.biz/feeds/risky-business",
	unsupervisedlearning: "https://www.omnycontent.com/d/playlist/070af456-729b-4a0f-9c09-a6c100397b59/3b159371-276d-429e-ae86-a6c1003b01c4/7b61d4e1-bd3d-4d3f-97c2-a6c1003b01c9/podcast.rss",
	wh1t3rabbit: "http://podcast.wh1t3rabbit.net/rss",
	defensivesecurity: "http://defensivesecurity.org/feed/podcast/",
	liquidmatrix: "http://liquidmatrix.libsyn.com/rss",
	sfspodcast: "http://sfspodcast.libsyn.com/rss",
	threatpost: "https://threatpost.com/category/podcasts/feed/",
	dataclonelabs: "http://dataclonelabs.com/security_talkworkshop/datasecurity.xml",
	brakeingsecurity: "http://www.brakeingsecurity.com/rss",
	hackerpublicradio: "http://hackerpublicradio.org/hpr_rss.php",
	opensourceecuritypodcast: "http://opensourcesecuritypodcast.libsyn.com/rss",
	sharedsecurity: "https://sharedsecurity.net/feed/",
	thecyberwire: "http://thecyberwire.libsyn.com/rss",
	socialengineer: "http://socialengineer.libsyn.com/rss",
	developsec: "http://podcast.developsec.com/rss",
	TheSilverBullet: "http://feeds.feedburner.com/TheSilverBulletSecurityPodcastWithGaryMcgraw?format=xml",
	sevenMinuteSecurity : "http://feeds.feedburner.com/7MinuteSecurity",
	twoMinuteCyberSecurityBriefing :"https://www.bvsystems.com/podcastgen2/feed.xml"
};

addPodcast(podcsts.cryptogram);
addPodcast(podcsts.securityweekly);
addPodcast(podcsts.securitynow);
addPodcast(podcsts.riskybusiness);
addPodcast(podcsts.unsupervisedlearning);
addPodcast(podcsts.wh1t3rabbit);
addPodcast(podcsts.defensivesecurity);
addPodcast(podcsts.liquidmatrix);
addPodcast(podcsts.sfspodcast);
addPodcast(podcsts.threatpost);
addPodcast(podcsts.dataclonelabs);
addPodcast(podcsts.brakeingsecurity);
addPodcast(podcsts.hackerpublicradio);
addPodcast(podcsts.opensourceecuritypodcast);
addPodcast(podcsts.sharedsecurity);
addPodcast(podcsts.thecyberwire);
addPodcast(podcsts.socialengineer);
addPodcast(podcsts.developsec);
addPodcast(podcsts.TheSilverBullet);
addPodcast(podcsts.sevenMinuteSecurity);
addPodcast(podcsts.twoMinuteCyberSecurityBriefing);


function addPodcast (podcast) {
	console.log('podcast: ', podcast);
	const url = baseUrl.concat('?url=', podcast);
	
	request.post(url, function (error, response, body) {
		console.log('url: ', url);
		console.log('error:', error);
		console.log('statusCode:', response && response.statusCode);
		console.log('body:', body);
	});
}