Package.describe({
  name: 'spectrum:freezeframe',
  summary: 'pauses animated GIFs and enables them to start animation on mouse hover or click.',
  version: '2.0.2_1',
  git: 'https://github.com/acidsound/meteor-freezeframe.git'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0.2.1');
  api.use([
    'jquery'
  ], 'client');
  api.addFiles('lib/freezeframe.js', 'client');
});
