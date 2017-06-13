// Copyright IBM Corp. 2015,2016. All Rights Reserved.
// Node module: loopback-connector-cloudant
// This file is licensed under the Artistic License 2.0.
// License text available at https://opensource.org/licenses/Artistic-2.0

'use strict';

module.exports = require('should');

var DataSource = require('loopback-datasource-juggler').DataSource;

var config = {
  url: '',
  database: 'test',
};

console.log('env config ', config);

global.config = config;

global.getDataSource = global.getSchema = function(customConfig) {
  var db = new DataSource(require('../'), customConfig || config);
  db.log = function(a) {
    console.log(a);
  };
  return db;
};

global.connectorCapabilities = {
  ilike: false,
  nilike: false,
  nestedProperty: true,
  adhocSort: false,
  supportPagination: false,
};

global.sinon = require('sinon');
