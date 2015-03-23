'use strict';

var hyper = require('../../../index.js');

// load config and routes
var app = hyper();

app.load({
    services: {
        "s1": {
            routes: [{
                api: "/service1/hello",
                method: {
                    get: function hello($done)
                    {
                        $done( { hello: new Date()} );
                    }
                }
            }]
        },
        "s2": {
            routes: [{
                api: "/service2/hello",
                method: {
                    get: function hello($done)
                    {
                        $done( { world: new Date()} );
                    }
                }
            }]
        }
    }
});

app.start();