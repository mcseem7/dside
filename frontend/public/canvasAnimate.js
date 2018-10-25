
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Ptc = function () {
  // options vx, vy, ax, ay and w are in rate of chg in 1s
  function Ptc(options) {
    _classCallCheck(this, Ptc);

    this.reset(options);
  }

  _createClass(Ptc, [{
    key: "update",
    value: function update(dt /*s*/) {
      var dtSq = dt ** 2;
      this._x += this._vx * dt + 0.5 * this._ax * dtSq;
      this._y += this._vy * dt + 0.5 * this._ay * dtSq;
      this._vx += this._ax * dt;
      this._vy += this._ay * dt;
      this._rz += this._w * dt;
    }
  }, {
    key: "reset",
    value: function reset(options) {
      var x = options.x;
      var y = options.y;
      var vx = options.vx;
      var vy = options.vy;
      var ax = options.ax;
      var ay = options.ay;
      var w = options.w;

      this._x = x;
      this._y = y;
      this._vx = vx;
      this._vy = vy;
      this._ax = ax;
      this._ay = ay;
      this._w = w; // rotation z in rad
      this._rz = 0; // accu. rotation z, in rad
    }
  }, {
    key: "x",
    get: function get() {
      return this._x;
    }
  }, {
    key: "y",
    get: function get() {
      return this._y;
    }
  }, {
    key: "rz",
    get: function get() {
      return this._rz;
    }
  }]);

  return Ptc;
}();

var Sys = function () {
  // a sys that considers gravity 
  function Sys(_ref) {
    var nPtc = _ref.nPtc;
    var w = _ref.w;
    var h = _ref.h;
    var ox = _ref.ox;
    var oy = _ref.oy;

    _classCallCheck(this, Sys);

    this._nPtc = nPtc; // num of ptc
    this._w = w; // width
    this._h = h; // height
    this._ox = ox; // origin x
    this._oy = oy; // origin y
    this._ptcs = []; // ptc objects
    this._initPtcs();
  }

  _createClass(Sys, [{
    key: "_initPtcs",
    value: function _initPtcs() {
      for (var i = 0; i < this._nPtc; ++i) {
        this._ptcs[i] = new Ptc(this._rndProps());
      }
    }
  }, {
    key: "_rndProps",
    value: function _rndProps() {
      var x = 0;
      var y = 0;
      var vxmin = this._w / 4 * -1;
      var vxmax = this._w / 4;
      var vymin = this._h / 3 * -1; // up
      var vymax = this._h * 3 / 2 * -1; // up
      var ax = 0;
      var ay = this._h; // down
      var wmin = 90 * -1; // deg, to rad soon
      var wmax = 90;
      var vx = vxmin + (vxmax - vxmin + 1) * Math.random() | 0;
      var vy = vymin + (vymax - vymin + 1) * Math.random() | 0;
      var w = (wmin + (wmax - wmin + 1) * Math.random() | 0) * Math.PI / 180;
      return { x: x, y: y, vx: vx, vy: vy, ax: ax, ay: ay, w: w };
    }
  }, {
    key: "update",
    value: function update(dt /*s*/) {
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = this._ptcs[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var ptc = _step.value;

          ptc.update(dt);
          if (this._oy + ptc.y > this._h) {
            ptc.reset(this._rndProps());
          }
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }
    }
  }]);

  return Sys;
}();

var R2dSpriteSys = function (_Sys) {
  _inherits(R2dSpriteSys, _Sys);

  function R2dSpriteSys(_ref2) {
    var nPtc = _ref2.nPtc;
    var w = _ref2.w;
    var h = _ref2.h;
    var ox = _ref2.ox;
    var oy = _ref2.oy;
    var can = _ref2.can;
    var sprites = _ref2.sprites;

    _classCallCheck(this, R2dSpriteSys);

    var _this = _possibleConstructorReturn(this, (R2dSpriteSys.__proto__ || Object.getPrototypeOf(R2dSpriteSys)).call(this, { nPtc: nPtc, w: w, h: h, ox: ox, oy: oy }));

    _this._can = can;
    _this._ctx = can.getContext("2d");
    _this._sprites = sprites;
    _this._initCustomProps(); // init ptc other props
    _this._save = _this._buildSaveFn();
    _this._restore = _this._buildRestoreFn();
    //this._ctx.font = "0.4em 'Fredericka the Great'";
    return _this;
  }

  _createClass(R2dSpriteSys, [{
    key: "_initCustomProps",
    value: function _initCustomProps() {
      var _iteratorNormalCompletion2 = true;
      var _didIteratorError2 = false;
      var _iteratorError2 = undefined;

      try {
        for (var _iterator2 = this._ptcs[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
          var ptc = _step2.value;

          ptc.props = this._rndCustomProps();
        }
      } catch (err) {
        _didIteratorError2 = true;
        _iteratorError2 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion2 && _iterator2.return) {
            _iterator2.return();
          }
        } finally {
          if (_didIteratorError2) {
            throw _iteratorError2;
          }
        }
      }
    }
  }, {
    key: "_rndCustomProps",
    value: function _rndCustomProps() {
      return {
        sprite: this._sprites[Math.random() * 26 | 0],
        // scale: 1 + Math.random() * 10 | 0 // scale up ref bitmap, will blur
        scale: 0.1 + Math.random() * 0.9 // scale down, very clear
      };
    }
  }, {
    key: "_buildSaveFn",
    value: function _buildSaveFn() {
      var _this2 = this;

      if (this._ctx.currentTransform) return function () {
        return _this2._mat = _this2._ctx.currentTransform;
      }; // edge
      else if (this._ctx.mozCurrentTransform) return function () {
          return _this2._mat = _this2._ctx.mozCurrentTransform;
        }; // ff
        else return function () {
            return _this2._ctx.save();
          }; // chrm
    }
  }, {
    key: "_buildRestoreFn",
    value: function _buildRestoreFn() {
      var _this3 = this;

      if (this._ctx.currentTransform) return function () {
        return _this3._ctx.currentTransform = _this3._mat;
      }; // edge
      else if (this._ctx.mozCurrentTransform) return function () {
          return _this3._ctx.mozCurrentTransform = _this3._mat;
        }; // ff
        else return function () {
            return _this3._ctx.restore();
          }; // chrm
    }
  }, {
    key: "render",
    value: function render() {
      var ctx = this._ctx;
      ctx.clearRect(0, 0, this._w, this._h);
      var _iteratorNormalCompletion3 = true;
      var _didIteratorError3 = false;
      var _iteratorError3 = undefined;

      try {
        for (var _iterator3 = this._ptcs[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
          var ptc = _step3.value;

          this._save(); // 3.2x less CPU usage if it ONLY records transform mat.
          ctx.translate(this._ox + ptc.x, this._oy + ptc.y);
          ctx.scale(ptc.props.scale, ptc.props.scale);
          ctx.rotate(ptc.rz);
          //ctx.fillText(ptc.props.text, 0, 0); 
          var sprite = ptc.props.sprite;
          ctx.drawImage(sprite.bitmap, -sprite.w2, -sprite.h2);
          this._restore();
        }
      } catch (err) {
        _didIteratorError3 = true;
        _iteratorError3 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion3 && _iterator3.return) {
            _iterator3.return();
          }
        } finally {
          if (_didIteratorError3) {
            throw _iteratorError3;
          }
        }
      }
    }
  }, {
    key: "update",
    value: function update(dt) {
      // overwrite super#update
      var _iteratorNormalCompletion4 = true;
      var _didIteratorError4 = false;
      var _iteratorError4 = undefined;

      try {
        for (var _iterator4 = this._ptcs[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
          var ptc = _step4.value;

          ptc.update(dt);
          if (this._oy + ptc.y > this._h) {
            ptc.reset(this._rndProps());
            ptc.props = this._rndCustomProps();
          }
        }
      } catch (err) {
        _didIteratorError4 = true;
        _iteratorError4 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion4 && _iterator4.return) {
            _iterator4.return();
          }
        } finally {
          if (_didIteratorError4) {
            throw _iteratorError4;
          }
        }
      }
    }
  }]);

  return R2dSpriteSys;
}(Sys);

////////////////////////////
///// main 
///////////////////////////


var debugMode = false;
var nPtc = 128;
// custom font must be load completely before calling `ctx.fillText`
// so use webfont lib to do this

  WebFont.load({
    google: {
      families: ['Fredericka the Great']
    },
    active: function active() {
      init(buildTextSprites(this.google.families[0]));
    },
    inactive: function inactive() {
      alert("Failed to load any custom font, app quits");
    },
    timeout: 5000
  });


function buildTextSprites(family) {
  var sprites = [];
  var fontHeight = 10 * 10;
  var lineHeight = 1.2; // as if css, depends on fontface, trial and error
  var can = document.createElement("canvas");
  can.width = fontHeight * 26; // assume max ch w == ch h (sq shaped)
  can.height = fontHeight * lineHeight;

  var ctx = can.getContext("2d");
  ctx.font = fontHeight + "px " + family;
  ctx.fillText("ABCDEFGHIJKLMNOPQRSTUVWXYZ", 0, fontHeight);
  if (debugMode) document.body.appendChild(can); //debug

  var offset = 0;
  for (var i = 65; i < 65 + 26; ++i) {
    var _ctx$measureText = ctx.measureText(String.fromCodePoint(i));

    var width = _ctx$measureText.width;

    var letter = document.createElement("canvas");
    letter.width = width;
    letter.height = can.height;
    var letterctx = letter.getContext("2d");
    letterctx.drawImage(can, offset, 0, width, can.height, 0, 0, width, can.height);
    offset += width;
    sprites.push({
      bitmap: letter,
      w2: letter.width / 2, // cache
      h2: letter.height / 2 // cache
    });
    if (debugMode) document.body.appendChild(letter); // debug
  }
  return sprites;
}

function init(sprites) {
  var can = document.querySelector("canvas");

  var _can$getBoundingClien = can.getBoundingClientRect();

  var width = _can$getBoundingClien.width;
  var height = _can$getBoundingClien.height;

  can.width = width;
  can.height = height;
  var sys = new R2dSpriteSys({
    nPtc: nPtc, w: width, h: height, ox: width / 2, oy: height, can: can, sprites: sprites
  });
  var t0 = void 0;
  requestAnimationFrame(function (ts) {
    t0 = ts;
    requestAnimationFrame(function tick(ts) {
      requestAnimationFrame(tick);
      sys.update((ts - t0) / 1000);
      sys.render();
      t0 = ts;
    });
  });
}