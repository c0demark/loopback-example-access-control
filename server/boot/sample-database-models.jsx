// Copyright IBM Corp. 2015,2016. All Rights Reserved.
// Node module: loopback-example-access-control
// This file is licensed under the Artistic License 2.0.
// License text available at https://opensource.org/licenses/Artistic-2.0
'use strict';

var async = require('async');

module.exports = function(app) {
  // console.log(app);
  var User = app.models.user;
  var Role = app.models.Role;
  var RoleMapping = app.models.RoleMapping;
  var Team = app.models.Team;
  async.parallel({
    users: async.apply(function(cb) {
      app.dataSources["mongoDs"].automigrate('user', function(err) {
        if (err) throw err;

        User.create([
          {username: 'John', email: 'john@doe.com', password: 'opensesame'},
          {username: 'Jane', email: 'jane@doe.com', password: 'opensesame'},
          {username: 'Bob', email: 'bob@projects.com', password: 'opensesame'}
        ], function(err, users) {
            if (err) throw err;

            console.log('Created users:', users);
        });    
      });      
    })
  });
  
};
