// This is used since we are getting dojo from a CDN
var dojoConfig = {
  async: true,
  packages: [{
    name: 'demo',
    location: location.pathname.replace(/\/[^/]*$/, '') + '/js/demo'
  }]
};
