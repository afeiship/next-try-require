(function () {
  var global = typeof window !== 'undefined' ? window : this || Function('return this')();
  var nx = global.nx || require('@jswork/next');
  var defaults = { relative: true, context: '' };

  nx.tryRequire = function (inPath, inDefaults, inOptions) {
    var options = nx.mix(null, defaults, inOptions);
    var path = options.context + inPath;
    var defaults = options.context + inDefaults;
    var res;
    try {
      res = options.relative ? require('.' + path) : require('@' + path);
    } catch (e) {
      res = options.relative ? require('.' + defaults) : require('@' + defaults);
    }
    return res;
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = nx.tryRequire;
  }
})();
