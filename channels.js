const cron = require('node-cron');
const request = require('request');
const baseUrl = 'https://whirlpood.herokuapp.com/api/channels';

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

var cryptogram = cron.schedule('* * * * *', function(){addPodcast(podcsts.cryptogram);}, false);
var securityweekly = cron.schedule('* * * * *', function(){addPodcast(podcsts.securityweekly);}, false);
var securitynow = cron.schedule('* * * * *', function(){addPodcast(podcsts.securitynow);}, false);
var riskybusiness = cron.schedule('* * * * *', function(){addPodcast(podcsts.riskybusiness);}, false);
var unsupervisedlearning = cron.schedule('* * * * *', function(){addPodcast(podcsts.unsupervisedlearning);}, false);
var wh1t3rabbit = cron.schedule('* * * * *', function(){addPodcast(podcsts.wh1t3rabbit);}, false);
var defensivesecurity = cron.schedule('* * * * *', function(){addPodcast(podcsts.defensivesecurity);}, false);
var liquidmatrix = cron.schedule('* * * * *', function(){addPodcast(podcsts.liquidmatrix);}, false);
var sfspodcast = cron.schedule('* * * * *', function(){addPodcast(podcsts.sfspodcast);}, false);
var threatpost = cron.schedule('* * * * *', function(){addPodcast(podcsts.threatpost);}, false);
var dataclonelabs = cron.schedule('* * * * *', function(){addPodcast(podcsts.dataclonelabs);}, false);
var brakeingsecurity = cron.schedule('* * * * *', function(){addPodcast(podcsts.brakeingsecurity);}, false);
var hackerpublicradio = cron.schedule('* * * * *', function(){addPodcast(podcsts.hackerpublicradio);}, false);
var opensourceecuritypodcast = cron.schedule('* * * * *', function(){addPodcast(podcsts.opensourceecuritypodcast);}, false);
var sharedsecurity = cron.schedule('* * * * *', function(){addPodcast(podcsts.sharedsecurity);}, false);
var thecyberwire = cron.schedule('* * * * *', function(){addPodcast(podcsts.thecyberwire);}, false);
var socialengineer = cron.schedule('* * * * *', function(){addPodcast(podcsts.socialengineer);}, false);
var developsec = cron.schedule('* * * * *', function(){addPodcast(podcsts.developsec);}, false);
var TheSilverBullet = cron.schedule('* * * * *', function(){addPodcast(podcsts.TheSilverBullet);}, false);
var sevenMinuteSecurity = cron.schedule('* * * * *', function(){addPodcast(podcsts.sevenMinuteSecurity);}, false);
var twoMinuteCyberSecurityBriefing = cron.schedule('* * * * *', function(){addPodcast(podcsts.twoMinuteCyberSecurityBriefing);}, false);


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

cryptogram.start();
securityweekly.start();
securitynow.start();
riskybusiness.start();
unsupervisedlearning.start();
wh1t3rabbit.start();
defensivesecurity.start();
liquidmatrix.start();
sfspodcast.start();
threatpost.start();
dataclonelabs.start(); // has a long title
brakeingsecurity.start();
hackerpublicradio.start();
opensourceecuritypodcast.start();
sharedsecurity.start();
socialengineer.start();
thecyberwire.start();
developsec.start();
TheSilverBullet.start();
sevenMinuteSecurity.start();
twoMinuteCyberSecurityBriefing.start();