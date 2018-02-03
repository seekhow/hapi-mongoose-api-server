const user = require('./handlers/user');

exports.register = (plugin, options, next) => {

  plugin.route([
    { method: 'GET', path: '/hello', config: user.list },
    { method: 'GET', path: '/hello/{id}', config: user.get },
    { method: 'POST', path: '/hello', config: user.create },
    { method: 'PUT', path: '/hello/{id}', config: user.update },
    { method: 'DELETE', path: '/hello/{id}', config: user.destroy },
  ]);

  next();
};

exports.register.attributes = {
  name: 'api'
};