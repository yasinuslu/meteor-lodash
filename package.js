Package.describe({
  name: 'yasinuslu:lodash',
  version: '3.2.0',
  // Brief, one-line summary of the package.
  summary: 'Exports latest lodash to global',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/yasinuslu/meteor-lodash',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0.3.1');

  api.addFiles('lodash.js');
  api.addFiles('export.js');

  api.export('lodash');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('yasinuslu:lodash');
});