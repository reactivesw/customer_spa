var OAuth2, _, debug, request;

debug = require('debug')('sphere-connect:oauth2');

_ = require('underscore');

_.mixin(require('underscore-mixins'));

request = require('request');

OAuth2 = (function() {
  function OAuth2(opts) {
    var config, host, protocol, rejectUnauthorized, userAgent;
    if (opts == null) {
      opts = {};
    }
    config = opts.config;
    if (!config) {
      throw new Error('Missing credentials');
    }
    if (!(config.client_id || opts.access_token)) {
      throw new Error('Missing \'client_id\'');
    }
    if (!(config.client_secret || opts.access_token)) {
      throw new Error('Missing \'client_secret\'');
    }
    if (!config.project_key) {
      throw new Error('Missing \'project_key\'');
    }
    host = opts.host || 'auth.sphere.io';
    protocol = opts.protocol || 'https';
    rejectUnauthorized = _.isUndefined(opts.rejectUnauthorized) ? true : opts.rejectUnauthorized;
    userAgent = _.isUndefined(opts.user_agent) ? 'sphere-node-connect' : opts.user_agent;
    this._options = {
      config: config,
      host: host,
      protocol: protocol,
      accessTokenUrl: opts.accessTokenUrl || '/oauth/token',
      timeout: opts.timeout || 20000,
      rejectUnauthorized: rejectUnauthorized,
      userAgent: userAgent
    };
    debug('oauth2 options: %j', this._options);
    return;
  }

  OAuth2.prototype.getAccessToken = function(callback) {
    var params, payload, request_options;
    params = {
      grant_type: this._options.config.grant_type,
      scope: this._options.config.scope
    };
    payload = _.stringifyQuery(params);
    request_options = {
      uri: this._options.protocol + "://" + this._options.host + this._options.accessTokenUrl,
      auth: {
        user: this._options.config.client_id,
        pass: this._options.config.client_secret
      },
      json: true,
      method: 'POST',
      body: payload,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Content-Length': payload.length,
        'User-Agent': this._options.userAgent
      },
      timeout: this._options.timeout,
      rejectUnauthorized: this._options.rejectUnauthorized
    };
    debug('access_token request options: %j', request_options);
    return this._doRequest(request_options, callback);
  };

  OAuth2.prototype._doRequest = function(options, callback) {
    return request(options, function(e, r, b) {
      if (e) {
        debug('error on request: %j', e);
      }
      return callback(e, r, b);
    });
  };

  return OAuth2;

})();

module.exports = OAuth2;
