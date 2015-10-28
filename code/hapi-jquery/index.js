var Hapi = require('hapi');
var Path = require('path');

var server = new Hapi.Server();
server.connection({port: 8080});

server.views({
    engines: {
        hbs: require('handlebars')
    },
    relativeTo: __dirname,
    path: './views',
    //partialsPath: './views/partials'
});

server.route({
    method:  'GET', //
    path:    '/lib/{param*}', //
    handler: {
        directory: {
            path: `${__dirname}/public/lib`
        }
    }
});

server.route({
    method: 'GET',
    path: '/',
    handler: function (request, reply) {
        var greeting = request.query.greeting !== undefined ? request.query.greeting : 'Hello';
        reply.view('index', { greeting: greeting });
    }
});

server.start(function () {
    server.log('info', 'Server running at: ' + server.info.uri);
});
