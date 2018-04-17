const axios = require('axios');
const links = ['https://midiapi.herokuapp.com/api/v1/pods?url=https://feeds.feedwrench.com/AdventuresInAngularOnly.rss',
  // 'https://midiapi.herokuapp.com/api/v1/pods?url=https://feeds.feedwrench.com/AdventuresInAngular.rss',
  // 'https://midiapi.herokuapp.com/api/v1/pods?url=https://blog.codepen.io/feed/podcast/',
  // 'https://midiapi.herokuapp.com/api/v1/pods?url=http://codingblocks.libsyn.com/rss',
  // 'https://midiapi.herokuapp.com/api/v1/pods?url=https://rss.simplecast.com/podcasts/279/rss',
  // 'https://midiapi.herokuapp.com/api/v1/pods?url=https://rss.simplecast.com/podcasts/2601/rss',
  // 'https://midiapi.herokuapp.com/api/v1/pods?url=https://changelog.com/jsparty/feed',
  // 'https://midiapi.herokuapp.com/api/v1/pods?url=https://feeds.feedwrench.com/js-jabber.rss',
  // 'https://midiapi.herokuapp.com/api/v1/pods?url=http://www.jsclasses.org/blog/category/podcast/post/latest.rss',
  // 'https://midiapi.herokuapp.com/api/v1/pods?url=https://modernweb.podbean.com/feed/',
  // 'https://midiapi.herokuapp.com/api/v1/pods?url=https://feeds.feedwrench.com/my-js-story.rss',
  // 'https://midiapi.herokuapp.com/api/v1/pods?url=https://rss.simplecast.com/podcasts/3903/rss',
  // 'https://midiapi.herokuapp.com/api/v1/pods?url=http://feeds.feedburner.com/nodeup',
  // 'https://midiapi.herokuapp.com/api/v1/pods?url=https://rss.simplecast.com/podcasts/1232/rss',
  'https://midiapi.herokuapp.com/api/v1/pods?url=https://anchor.fm/s/2af0940/podcast/rss',
  'https://midiapi.herokuapp.com/api/v1/pods?url=https://rss.simplecast.com/podcasts/1108/rss',
  'https://midiapi.herokuapp.com/api/v1/pods?url=https://changelog.com/spotlight/feed',
  'https://midiapi.herokuapp.com/api/v1/pods?url=https://feed.syntax.fm/rss',
  'https://midiapi.herokuapp.com/api/v1/pods?url=https://rss.simplecast.com/podcasts/3216/rss',
  'https://midiapi.herokuapp.com/api/v1/pods?url=http://feeds.5by5.tv/bigwebshow',
  'https://midiapi.herokuapp.com/api/v1/pods?url=https://rss.simplecast.com/podcasts/282/rss',
  'https://midiapi.herokuapp.com/api/v1/pods?url=https://changelog.com/podcast/feed',
  'https://midiapi.herokuapp.com/api/v1/pods?url=http://podcast.crater.io/feed/',
  'https://midiapi.herokuapp.com/api/v1/pods?url=https://rss.simplecast.com/podcasts/3516/rss',
  'https://midiapi.herokuapp.com/api/v1/pods?url=https://vuenews.fireside.fm/rss',
  'https://midiapi.herokuapp.com/api/v1/pods?url=https://rss.simplecast.com/podcasts/1103/rss',
  'https://midiapi.herokuapp.com/api/v1/pods?url=http://www.spreaker.com/show/2824367/episodes/feed',
  'https://midiapi.herokuapp.com/api/v1/pods?url=https://tylermcginnis.libsyn.com/rss',
  'https://midiapi.herokuapp.com/api/v1/pods?url=http://feeds.5by5.tv/webahead/',
  'https://midiapi.herokuapp.com/api/v1/pods?url=http://thewebplatform.libsyn.com/rss',
  'https://midiapi.herokuapp.com/api/v1/pods?url=http://threedevsandamaybe.com/podcast.xml',
  'https://midiapi.herokuapp.com/api/v1/pods?url=https://rss.simplecast.com/podcasts/4211/rss',
  'https://midiapi.herokuapp.com/api/v1/pods?url=https://audioboom.com/channels/4947372.rss',
  'https://midiapi.herokuapp.com/api/v1/pods?url=http://a.webdevbreak.com/episodes',
  'https://midiapi.herokuapp.com/api/v1/pods?url=https://www.orbit.fm/weboftomorrow/feed.rss',
  'https://midiapi.herokuapp.com/api/v1/pods?url=https://rss.simplecast.com/podcasts/3762/rss'];

function getFeed(links) {
  function callback(data) {
    console.log(data);
  }
  
  links.forEach(async (url) => {
    try {
      let response = await axios.post(url);
      console.log(response.data);
    } catch (error) {
      console.log('error: ', error);
    }
  });
}

getFeed(links);