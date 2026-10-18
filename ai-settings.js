(function (root) {
  'use strict';

  var STORE = 'bwu_ai_settings_v1';
  var LEGACY = 'dtg_conv_v3';
  var defaults = { mode: 'share', provider: 'gemini', key: '', password: '', model: 'gemini-3.7-flash' };

  function read() {
    var value = Object.assign({}, defaults);
    try {
      var saved = JSON.parse(localStorage.getItem(STORE) || 'null');
      if (saved) return Object.assign(value, saved);
      var old = JSON.parse(localStorage.getItem(LEGACY) || 'null');
      if (old) {
        value.mode = old.mode || value.mode;
        value.provider = old.prov || value.provider;
        value.key = old.key || '';
        value.password = old.pass || '';
        value.model = old.model || value.model;
        save(value);
      }
    } catch (e) {}
    return value;
  }

  function save(value) {
    var clean = Object.assign({}, defaults, value || {});
    try {
      localStorage.setItem(STORE, JSON.stringify(clean));
      localStorage.setItem(LEGACY, JSON.stringify({mode:clean.mode,prov:'gemini',key:clean.key,pass:clean.password,model:clean.model,endpoint:''}));
    } catch (e) {}
    return clean;
  }

  function clear() {
    try {
      localStorage.removeItem(STORE);
      localStorage.removeItem(LEGACY);
      localStorage.removeItem('bwu_cl_gemini_key');
    } catch (e) {}
  }

  function ready(value) {
    var cfg = value || read();
    return cfg.mode === 'share' ? !!cfg.password : !!cfg.key;
  }

  function label(value) {
    var cfg = value || read();
    if (cfg.mode === 'share' && cfg.password) return '공유 암호 연결됨';
    if (cfg.mode === 'mine' && cfg.key) return '내 Gemini 키 연결됨';
    return 'AI 설정 필요';
  }

  root.BWUAI = { read: read, save: save, clear: clear, ready: ready, label: label, storeKey: STORE };
})(window);
