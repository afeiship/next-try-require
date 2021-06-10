(function () {
  var global = typeof window !== 'undefined' ? window : this || Function('return this')();
  var nx = global.nx || require('@jswork/next');
  var defaults = { relative: true, context: '' };

  nx.tryRequire = function (inPath, inDefaults, inOptions) {
    var options = nx.mix(null, defaults, inOptions);
    var res;
    try {
      res = options.relative ? require('.' + context + inPath) : require('@' + context + inPath);
    } catch (e) {
      res = options.relative
        ? require('.' + context + inDefaults)
        : require('@' + context + inDefaults);
    }
    return res;
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = nx.tryRequire;
  }
})();
