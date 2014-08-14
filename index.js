
/**
 * Module exports.
 */

module.exports = parse;

/**
 * Parses the `npm_config` environment variables passed through from `npm` to
 * lifecycle scripts, and returns a formatted Object of the parsed `env` object.
 *
 * @param {Object} env
 * @return {Object}
 * @public
 */

function parse (env) {
  if (!env) env = process.env;
  var props = {};
  var npm_config_prefix = 'npm_config_';
  Object.keys(process.env).forEach(function (name) {
    if (name.indexOf(npm_config_prefix) !== 0) return;
    var val = process.env[name];
    // add the user-defined options to the config
    name = name.substring(npm_config_prefix.length);
    props[name] = val;
  });
  return props;
}
