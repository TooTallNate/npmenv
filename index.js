
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

function parse (env, prefix) {
  if (!env) env = process.env;
  if (!prefix) prefix = 'npm_config_';
  var props = {};
  var keys = Object.keys(env);
  keys.forEach(function (name) {
    if (name.indexOf(prefix) !== 0) return;
    var val = env[name];
    // add the user-defined options to the config
    name = name.substring(prefix.length);
    props[name] = val;
  });
  return props;
}
