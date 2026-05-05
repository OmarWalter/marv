(function () {
  const l = document.createElement("link").relList;
  if (l && l.supports && l.supports("modulepreload")) return;
  for (const c of document.querySelectorAll('link[rel="modulepreload"]')) r(c);
  new MutationObserver((c) => {
    for (const d of c)
      if (d.type === "childList")
        for (const h of d.addedNodes)
          h.tagName === "LINK" && h.rel === "modulepreload" && r(h);
  }).observe(document, { childList: !0, subtree: !0 });
  function u(c) {
    const d = {};
    return (
      c.integrity && (d.integrity = c.integrity),
      c.referrerPolicy && (d.referrerPolicy = c.referrerPolicy),
      c.crossOrigin === "use-credentials"
        ? (d.credentials = "include")
        : c.crossOrigin === "anonymous"
        ? (d.credentials = "omit")
        : (d.credentials = "same-origin"),
      d
    );
  }
  function r(c) {
    if (c.ep) return;
    c.ep = !0;
    const d = u(c);
    fetch(c.href, d);
  }
})();
function D1(i) {
  return i && i.__esModule && Object.prototype.hasOwnProperty.call(i, "default")
    ? i.default
    : i;
}
var wr = { exports: {} },
  ul = {};
var Im;
function w1() {
  if (Im) return ul;
  Im = 1;
  var i = Symbol.for("react.transitional.element"),
    l = Symbol.for("react.fragment");
  function u(r, c, d) {
    var h = null;
    if (
      (d !== void 0 && (h = "" + d),
      c.key !== void 0 && (h = "" + c.key),
      "key" in c)
    ) {
      d = {};
      for (var y in c) y !== "key" && (d[y] = c[y]);
    } else d = c;
    return (
      (c = d.ref),
      { $$typeof: i, type: r, key: h, ref: c !== void 0 ? c : null, props: d }
    );
  }
  return (ul.Fragment = l), (ul.jsx = u), (ul.jsxs = u), ul;
}
var tp;
function C1() {
  return tp || ((tp = 1), (wr.exports = w1())), wr.exports;
}
var E = C1(),
  Cr = { exports: {} },
  lt = {};
var ep;
function z1() {
  if (ep) return lt;
  ep = 1;
  var i = Symbol.for("react.transitional.element"),
    l = Symbol.for("react.portal"),
    u = Symbol.for("react.fragment"),
    r = Symbol.for("react.strict_mode"),
    c = Symbol.for("react.profiler"),
    d = Symbol.for("react.consumer"),
    h = Symbol.for("react.context"),
    y = Symbol.for("react.forward_ref"),
    g = Symbol.for("react.suspense"),
    m = Symbol.for("react.memo"),
    v = Symbol.for("react.lazy"),
    b = Symbol.for("react.activity"),
    T = Symbol.iterator;
  function R(A) {
    return A === null || typeof A != "object"
      ? null
      : ((A = (T && A[T]) || A["@@iterator"]),
        typeof A == "function" ? A : null);
  }
  var U = {
      isMounted: function () {
        return !1;
      },
      enqueueForceUpdate: function () {},
      enqueueReplaceState: function () {},
      enqueueSetState: function () {},
    },
    H = Object.assign,
    Z = {};
  function L(A, _, Y) {
    (this.props = A),
      (this.context = _),
      (this.refs = Z),
      (this.updater = Y || U);
  }
  (L.prototype.isReactComponent = {}),
    (L.prototype.setState = function (A, _) {
      if (typeof A != "object" && typeof A != "function" && A != null)
        throw Error(
          "takes an object of state variables to update or a function which returns an object of state variables."
        );
      this.updater.enqueueSetState(this, A, _, "setState");
    }),
    (L.prototype.forceUpdate = function (A) {
      this.updater.enqueueForceUpdate(this, A, "forceUpdate");
    });
  function G() {}
  G.prototype = L.prototype;
  function q(A, _, Y) {
    (this.props = A),
      (this.context = _),
      (this.refs = Z),
      (this.updater = Y || U);
  }
  var tt = (q.prototype = new G());
  (tt.constructor = q), H(tt, L.prototype), (tt.isPureReactComponent = !0);
  var F = Array.isArray;
  function $() {}
  var X = { H: null, A: null, T: null, S: null },
    W = Object.prototype.hasOwnProperty;
  function vt(A, _, Y) {
    var K = Y.ref;
    return {
      $$typeof: i,
      type: A,
      key: _,
      ref: K !== void 0 ? K : null,
      props: Y,
    };
  }
  function Dt(A, _) {
    return vt(A.type, _, A.props);
  }
  function Lt(A) {
    return typeof A == "object" && A !== null && A.$$typeof === i;
  }
  function Vt(A) {
    var _ = { "=": "=0", ":": "=2" };
    return (
      "$" +
      A.replace(/[=:]/g, function (Y) {
        return _[Y];
      })
    );
  }
  var we = /\/+/g;
  function ae(A, _) {
    return typeof A == "object" && A !== null && A.key != null
      ? Vt("" + A.key)
      : _.toString(36);
  }
  function ie(A) {
    switch (A.status) {
      case "fulfilled":
        return A.value;
      case "rejected":
        throw A.reason;
      default:
        switch (
          (typeof A.status == "string"
            ? A.then($, $)
            : ((A.status = "pending"),
              A.then(
                function (_) {
                  A.status === "pending" &&
                    ((A.status = "fulfilled"), (A.value = _));
                },
                function (_) {
                  A.status === "pending" &&
                    ((A.status = "rejected"), (A.reason = _));
                }
              )),
          A.status)
        ) {
          case "fulfilled":
            return A.value;
          case "rejected":
            throw A.reason;
        }
    }
    throw A;
  }
  function O(A, _, Y, K, it) {
    var et = typeof A;
    (et === "undefined" || et === "boolean") && (A = null);
    var pt = !1;
    if (A === null) pt = !0;
    else
      switch (et) {
        case "bigint":
        case "string":
        case "number":
          pt = !0;
          break;
        case "object":
          switch (A.$$typeof) {
            case i:
            case l:
              pt = !0;
              break;
            case v:
              return (pt = A._init), O(pt(A._payload), _, Y, K, it);
          }
      }
    if (pt)
      return (
        (it = it(A)),
        (pt = K === "" ? "." + ae(A, 0) : K),
        F(it)
          ? ((Y = ""),
            pt != null && (Y = pt.replace(we, "$&/") + "/"),
            O(it, _, Y, "", function (mi) {
              return mi;
            }))
          : it != null &&
            (Lt(it) &&
              (it = Dt(
                it,
                Y +
                  (it.key == null || (A && A.key === it.key)
                    ? ""
                    : ("" + it.key).replace(we, "$&/") + "/") +
                  pt
              )),
            _.push(it)),
        1
      );
    pt = 0;
    var Rt = K === "" ? "." : K + ":";
    if (F(A))
      for (var St = 0; St < A.length; St++)
        (K = A[St]), (et = Rt + ae(K, St)), (pt += O(K, _, Y, et, it));
    else if (((St = R(A)), typeof St == "function"))
      for (A = St.call(A), St = 0; !(K = A.next()).done; )
        (K = K.value), (et = Rt + ae(K, St++)), (pt += O(K, _, Y, et, it));
    else if (et === "object") {
      if (typeof A.then == "function") return O(ie(A), _, Y, K, it);
      throw (
        ((_ = String(A)),
        Error(
          "Objects are not valid as a React child (found: " +
            (_ === "[object Object]"
              ? "object with keys {" + Object.keys(A).join(", ") + "}"
              : _) +
            "). If you meant to render a collection of children, use an array instead."
        ))
      );
    }
    return pt;
  }
  function B(A, _, Y) {
    if (A == null) return A;
    var K = [],
      it = 0;
    return (
      O(A, K, "", "", function (et) {
        return _.call(Y, et, it++);
      }),
      K
    );
  }
  function Q(A) {
    if (A._status === -1) {
      var _ = A._result;
      (_ = _()),
        _.then(
          function (Y) {
            (A._status === 0 || A._status === -1) &&
              ((A._status = 1), (A._result = Y));
          },
          function (Y) {
            (A._status === 0 || A._status === -1) &&
              ((A._status = 2), (A._result = Y));
          }
        ),
        A._status === -1 && ((A._status = 0), (A._result = _));
    }
    if (A._status === 1) return A._result.default;
    throw A._result;
  }
  var st =
      typeof reportError == "function"
        ? reportError
        : function (A) {
            if (
              typeof window == "object" &&
              typeof window.ErrorEvent == "function"
            ) {
              var _ = new window.ErrorEvent("error", {
                bubbles: !0,
                cancelable: !0,
                message:
                  typeof A == "object" &&
                  A !== null &&
                  typeof A.message == "string"
                    ? String(A.message)
                    : String(A),
                error: A,
              });
              if (!window.dispatchEvent(_)) return;
            } else if (
              typeof process == "object" &&
              typeof process.emit == "function"
            ) {
              process.emit("uncaughtException", A);
              return;
            }
            console.error(A);
          },
    rt = {
      map: B,
      forEach: function (A, _, Y) {
        B(
          A,
          function () {
            _.apply(this, arguments);
          },
          Y
        );
      },
      count: function (A) {
        var _ = 0;
        return (
          B(A, function () {
            _++;
          }),
          _
        );
      },
      toArray: function (A) {
        return (
          B(A, function (_) {
            return _;
          }) || []
        );
      },
      only: function (A) {
        if (!Lt(A))
          throw Error(
            "React.Children.only expected to receive a single React element child."
          );
        return A;
      },
    };
  return (
    (lt.Activity = b),
    (lt.Children = rt),
    (lt.Component = L),
    (lt.Fragment = u),
    (lt.Profiler = c),
    (lt.PureComponent = q),
    (lt.StrictMode = r),
    (lt.Suspense = g),
    (lt.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = X),
    (lt.__COMPILER_RUNTIME = {
      __proto__: null,
      c: function (A) {
        return X.H.useMemoCache(A);
      },
    }),
    (lt.cache = function (A) {
      return function () {
        return A.apply(null, arguments);
      };
    }),
    (lt.cacheSignal = function () {
      return null;
    }),
    (lt.cloneElement = function (A, _, Y) {
      if (A == null)
        throw Error(
          "The argument must be a React element, but you passed " + A + "."
        );
      var K = H({}, A.props),
        it = A.key;
      if (_ != null)
        for (et in (_.key !== void 0 && (it = "" + _.key), _))
          !W.call(_, et) ||
            et === "key" ||
            et === "__self" ||
            et === "__source" ||
            (et === "ref" && _.ref === void 0) ||
            (K[et] = _[et]);
      var et = arguments.length - 2;
      if (et === 1) K.children = Y;
      else if (1 < et) {
        for (var pt = Array(et), Rt = 0; Rt < et; Rt++)
          pt[Rt] = arguments[Rt + 2];
        K.children = pt;
      }
      return vt(A.type, it, K);
    }),
    (lt.createContext = function (A) {
      return (
        (A = {
          $$typeof: h,
          _currentValue: A,
          _currentValue2: A,
          _threadCount: 0,
          Provider: null,
          Consumer: null,
        }),
        (A.Provider = A),
        (A.Consumer = { $$typeof: d, _context: A }),
        A
      );
    }),
    (lt.createElement = function (A, _, Y) {
      var K,
        it = {},
        et = null;
      if (_ != null)
        for (K in (_.key !== void 0 && (et = "" + _.key), _))
          W.call(_, K) &&
            K !== "key" &&
            K !== "__self" &&
            K !== "__source" &&
            (it[K] = _[K]);
      var pt = arguments.length - 2;
      if (pt === 1) it.children = Y;
      else if (1 < pt) {
        for (var Rt = Array(pt), St = 0; St < pt; St++)
          Rt[St] = arguments[St + 2];
        it.children = Rt;
      }
      if (A && A.defaultProps)
        for (K in ((pt = A.defaultProps), pt))
          it[K] === void 0 && (it[K] = pt[K]);
      return vt(A, et, it);
    }),
    (lt.createRef = function () {
      return { current: null };
    }),
    (lt.forwardRef = function (A) {
      return { $$typeof: y, render: A };
    }),
    (lt.isValidElement = Lt),
    (lt.lazy = function (A) {
      return { $$typeof: v, _payload: { _status: -1, _result: A }, _init: Q };
    }),
    (lt.memo = function (A, _) {
      return { $$typeof: m, type: A, compare: _ === void 0 ? null : _ };
    }),
    (lt.startTransition = function (A) {
      var _ = X.T,
        Y = {};
      X.T = Y;
      try {
        var K = A(),
          it = X.S;
        it !== null && it(Y, K),
          typeof K == "object" &&
            K !== null &&
            typeof K.then == "function" &&
            K.then($, st);
      } catch (et) {
        st(et);
      } finally {
        _ !== null && Y.types !== null && (_.types = Y.types), (X.T = _);
      }
    }),
    (lt.unstable_useCacheRefresh = function () {
      return X.H.useCacheRefresh();
    }),
    (lt.use = function (A) {
      return X.H.use(A);
    }),
    (lt.useActionState = function (A, _, Y) {
      return X.H.useActionState(A, _, Y);
    }),
    (lt.useCallback = function (A, _) {
      return X.H.useCallback(A, _);
    }),
    (lt.useContext = function (A) {
      return X.H.useContext(A);
    }),
    (lt.useDebugValue = function () {}),
    (lt.useDeferredValue = function (A, _) {
      return X.H.useDeferredValue(A, _);
    }),
    (lt.useEffect = function (A, _) {
      return X.H.useEffect(A, _);
    }),
    (lt.useEffectEvent = function (A) {
      return X.H.useEffectEvent(A);
    }),
    (lt.useId = function () {
      return X.H.useId();
    }),
    (lt.useImperativeHandle = function (A, _, Y) {
      return X.H.useImperativeHandle(A, _, Y);
    }),
    (lt.useInsertionEffect = function (A, _) {
      return X.H.useInsertionEffect(A, _);
    }),
    (lt.useLayoutEffect = function (A, _) {
      return X.H.useLayoutEffect(A, _);
    }),
    (lt.useMemo = function (A, _) {
      return X.H.useMemo(A, _);
    }),
    (lt.useOptimistic = function (A, _) {
      return X.H.useOptimistic(A, _);
    }),
    (lt.useReducer = function (A, _, Y) {
      return X.H.useReducer(A, _, Y);
    }),
    (lt.useRef = function (A) {
      return X.H.useRef(A);
    }),
    (lt.useState = function (A) {
      return X.H.useState(A);
    }),
    (lt.useSyncExternalStore = function (A, _, Y) {
      return X.H.useSyncExternalStore(A, _, Y);
    }),
    (lt.useTransition = function () {
      return X.H.useTransition();
    }),
    (lt.version = "19.2.3"),
    lt
  );
}
var np;
function au() {
  return np || ((np = 1), (Cr.exports = z1())), Cr.exports;
}
var k = au(),
  zr = { exports: {} },
  ol = {},
  jr = { exports: {} },
  Or = {};
var ap;
function j1() {
  return (
    ap ||
      ((ap = 1),
      (function (i) {
        function l(O, B) {
          var Q = O.length;
          O.push(B);
          t: for (; 0 < Q; ) {
            var st = (Q - 1) >>> 1,
              rt = O[st];
            if (0 < c(rt, B)) (O[st] = B), (O[Q] = rt), (Q = st);
            else break t;
          }
        }
        function u(O) {
          return O.length === 0 ? null : O[0];
        }
        function r(O) {
          if (O.length === 0) return null;
          var B = O[0],
            Q = O.pop();
          if (Q !== B) {
            O[0] = Q;
            t: for (var st = 0, rt = O.length, A = rt >>> 1; st < A; ) {
              var _ = 2 * (st + 1) - 1,
                Y = O[_],
                K = _ + 1,
                it = O[K];
              if (0 > c(Y, Q))
                K < rt && 0 > c(it, Y)
                  ? ((O[st] = it), (O[K] = Q), (st = K))
                  : ((O[st] = Y), (O[_] = Q), (st = _));
              else if (K < rt && 0 > c(it, Q))
                (O[st] = it), (O[K] = Q), (st = K);
              else break t;
            }
          }
          return B;
        }
        function c(O, B) {
          var Q = O.sortIndex - B.sortIndex;
          return Q !== 0 ? Q : O.id - B.id;
        }
        if (
          ((i.unstable_now = void 0),
          typeof performance == "object" &&
            typeof performance.now == "function")
        ) {
          var d = performance;
          i.unstable_now = function () {
            return d.now();
          };
        } else {
          var h = Date,
            y = h.now();
          i.unstable_now = function () {
            return h.now() - y;
          };
        }
        var g = [],
          m = [],
          v = 1,
          b = null,
          T = 3,
          R = !1,
          U = !1,
          H = !1,
          Z = !1,
          L = typeof setTimeout == "function" ? setTimeout : null,
          G = typeof clearTimeout == "function" ? clearTimeout : null,
          q = typeof setImmediate < "u" ? setImmediate : null;
        function tt(O) {
          for (var B = u(m); B !== null; ) {
            if (B.callback === null) r(m);
            else if (B.startTime <= O)
              r(m), (B.sortIndex = B.expirationTime), l(g, B);
            else break;
            B = u(m);
          }
        }
        function F(O) {
          if (((H = !1), tt(O), !U))
            if (u(g) !== null) (U = !0), $ || (($ = !0), Vt());
            else {
              var B = u(m);
              B !== null && ie(F, B.startTime - O);
            }
        }
        var $ = !1,
          X = -1,
          W = 5,
          vt = -1;
        function Dt() {
          return Z ? !0 : !(i.unstable_now() - vt < W);
        }
        function Lt() {
          if (((Z = !1), $)) {
            var O = i.unstable_now();
            vt = O;
            var B = !0;
            try {
              t: {
                (U = !1), H && ((H = !1), G(X), (X = -1)), (R = !0);
                var Q = T;
                try {
                  e: {
                    for (
                      tt(O), b = u(g);
                      b !== null && !(b.expirationTime > O && Dt());

                    ) {
                      var st = b.callback;
                      if (typeof st == "function") {
                        (b.callback = null), (T = b.priorityLevel);
                        var rt = st(b.expirationTime <= O);
                        if (((O = i.unstable_now()), typeof rt == "function")) {
                          (b.callback = rt), tt(O), (B = !0);
                          break e;
                        }
                        b === u(g) && r(g), tt(O);
                      } else r(g);
                      b = u(g);
                    }
                    if (b !== null) B = !0;
                    else {
                      var A = u(m);
                      A !== null && ie(F, A.startTime - O), (B = !1);
                    }
                  }
                  break t;
                } finally {
                  (b = null), (T = Q), (R = !1);
                }
                B = void 0;
              }
            } finally {
              B ? Vt() : ($ = !1);
            }
          }
        }
        var Vt;
        if (typeof q == "function")
          Vt = function () {
            q(Lt);
          };
        else if (typeof MessageChannel < "u") {
          var we = new MessageChannel(),
            ae = we.port2;
          (we.port1.onmessage = Lt),
            (Vt = function () {
              ae.postMessage(null);
            });
        } else
          Vt = function () {
            L(Lt, 0);
          };
        function ie(O, B) {
          X = L(function () {
            O(i.unstable_now());
          }, B);
        }
        (i.unstable_IdlePriority = 5),
          (i.unstable_ImmediatePriority = 1),
          (i.unstable_LowPriority = 4),
          (i.unstable_NormalPriority = 3),
          (i.unstable_Profiling = null),
          (i.unstable_UserBlockingPriority = 2),
          (i.unstable_cancelCallback = function (O) {
            O.callback = null;
          }),
          (i.unstable_forceFrameRate = function (O) {
            0 > O || 125 < O
              ? console.error(
                  "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
                )
              : (W = 0 < O ? Math.floor(1e3 / O) : 5);
          }),
          (i.unstable_getCurrentPriorityLevel = function () {
            return T;
          }),
          (i.unstable_next = function (O) {
            switch (T) {
              case 1:
              case 2:
              case 3:
                var B = 3;
                break;
              default:
                B = T;
            }
            var Q = T;
            T = B;
            try {
              return O();
            } finally {
              T = Q;
            }
          }),
          (i.unstable_requestPaint = function () {
            Z = !0;
          }),
          (i.unstable_runWithPriority = function (O, B) {
            switch (O) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                break;
              default:
                O = 3;
            }
            var Q = T;
            T = O;
            try {
              return B();
            } finally {
              T = Q;
            }
          }),
          (i.unstable_scheduleCallback = function (O, B, Q) {
            var st = i.unstable_now();
            switch (
              (typeof Q == "object" && Q !== null
                ? ((Q = Q.delay),
                  (Q = typeof Q == "number" && 0 < Q ? st + Q : st))
                : (Q = st),
              O)
            ) {
              case 1:
                var rt = -1;
                break;
              case 2:
                rt = 250;
                break;
              case 5:
                rt = 1073741823;
                break;
              case 4:
                rt = 1e4;
                break;
              default:
                rt = 5e3;
            }
            return (
              (rt = Q + rt),
              (O = {
                id: v++,
                callback: B,
                priorityLevel: O,
                startTime: Q,
                expirationTime: rt,
                sortIndex: -1,
              }),
              Q > st
                ? ((O.sortIndex = Q),
                  l(m, O),
                  u(g) === null &&
                    O === u(m) &&
                    (H ? (G(X), (X = -1)) : (H = !0), ie(F, Q - st)))
                : ((O.sortIndex = rt),
                  l(g, O),
                  U || R || ((U = !0), $ || (($ = !0), Vt()))),
              O
            );
          }),
          (i.unstable_shouldYield = Dt),
          (i.unstable_wrapCallback = function (O) {
            var B = T;
            return function () {
              var Q = T;
              T = B;
              try {
                return O.apply(this, arguments);
              } finally {
                T = Q;
              }
            };
          });
      })(Or)),
    Or
  );
}
var ip;
function O1() {
  return ip || ((ip = 1), (jr.exports = j1())), jr.exports;
}
var Rr = { exports: {} },
  le = {};
var lp;
function R1() {
  if (lp) return le;
  lp = 1;
  var i = au();
  function l(g) {
    var m = "https://react.dev/errors/" + g;
    if (1 < arguments.length) {
      m += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var v = 2; v < arguments.length; v++)
        m += "&args[]=" + encodeURIComponent(arguments[v]);
    }
    return (
      "Minified React error #" +
      g +
      "; visit " +
      m +
      " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
  }
  function u() {}
  var r = {
      d: {
        f: u,
        r: function () {
          throw Error(l(522));
        },
        D: u,
        C: u,
        L: u,
        m: u,
        X: u,
        S: u,
        M: u,
      },
      p: 0,
      findDOMNode: null,
    },
    c = Symbol.for("react.portal");
  function d(g, m, v) {
    var b =
      3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: c,
      key: b == null ? null : "" + b,
      children: g,
      containerInfo: m,
      implementation: v,
    };
  }
  var h = i.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function y(g, m) {
    if (g === "font") return "";
    if (typeof m == "string") return m === "use-credentials" ? m : "";
  }
  return (
    (le.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = r),
    (le.createPortal = function (g, m) {
      var v =
        2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
      if (!m || (m.nodeType !== 1 && m.nodeType !== 9 && m.nodeType !== 11))
        throw Error(l(299));
      return d(g, m, null, v);
    }),
    (le.flushSync = function (g) {
      var m = h.T,
        v = r.p;
      try {
        if (((h.T = null), (r.p = 2), g)) return g();
      } finally {
        (h.T = m), (r.p = v), r.d.f();
      }
    }),
    (le.preconnect = function (g, m) {
      typeof g == "string" &&
        (m
          ? ((m = m.crossOrigin),
            (m =
              typeof m == "string"
                ? m === "use-credentials"
                  ? m
                  : ""
                : void 0))
          : (m = null),
        r.d.C(g, m));
    }),
    (le.prefetchDNS = function (g) {
      typeof g == "string" && r.d.D(g);
    }),
    (le.preinit = function (g, m) {
      if (typeof g == "string" && m && typeof m.as == "string") {
        var v = m.as,
          b = y(v, m.crossOrigin),
          T = typeof m.integrity == "string" ? m.integrity : void 0,
          R = typeof m.fetchPriority == "string" ? m.fetchPriority : void 0;
        v === "style"
          ? r.d.S(g, typeof m.precedence == "string" ? m.precedence : void 0, {
              crossOrigin: b,
              integrity: T,
              fetchPriority: R,
            })
          : v === "script" &&
            r.d.X(g, {
              crossOrigin: b,
              integrity: T,
              fetchPriority: R,
              nonce: typeof m.nonce == "string" ? m.nonce : void 0,
            });
      }
    }),
    (le.preinitModule = function (g, m) {
      if (typeof g == "string")
        if (typeof m == "object" && m !== null) {
          if (m.as == null || m.as === "script") {
            var v = y(m.as, m.crossOrigin);
            r.d.M(g, {
              crossOrigin: v,
              integrity: typeof m.integrity == "string" ? m.integrity : void 0,
              nonce: typeof m.nonce == "string" ? m.nonce : void 0,
            });
          }
        } else m == null && r.d.M(g);
    }),
    (le.preload = function (g, m) {
      if (
        typeof g == "string" &&
        typeof m == "object" &&
        m !== null &&
        typeof m.as == "string"
      ) {
        var v = m.as,
          b = y(v, m.crossOrigin);
        r.d.L(g, v, {
          crossOrigin: b,
          integrity: typeof m.integrity == "string" ? m.integrity : void 0,
          nonce: typeof m.nonce == "string" ? m.nonce : void 0,
          type: typeof m.type == "string" ? m.type : void 0,
          fetchPriority:
            typeof m.fetchPriority == "string" ? m.fetchPriority : void 0,
          referrerPolicy:
            typeof m.referrerPolicy == "string" ? m.referrerPolicy : void 0,
          imageSrcSet:
            typeof m.imageSrcSet == "string" ? m.imageSrcSet : void 0,
          imageSizes: typeof m.imageSizes == "string" ? m.imageSizes : void 0,
          media: typeof m.media == "string" ? m.media : void 0,
        });
      }
    }),
    (le.preloadModule = function (g, m) {
      if (typeof g == "string")
        if (m) {
          var v = y(m.as, m.crossOrigin);
          r.d.m(g, {
            as: typeof m.as == "string" && m.as !== "script" ? m.as : void 0,
            crossOrigin: v,
            integrity: typeof m.integrity == "string" ? m.integrity : void 0,
          });
        } else r.d.m(g);
    }),
    (le.requestFormReset = function (g) {
      r.d.r(g);
    }),
    (le.unstable_batchedUpdates = function (g, m) {
      return g(m);
    }),
    (le.useFormState = function (g, m, v) {
      return h.H.useFormState(g, m, v);
    }),
    (le.useFormStatus = function () {
      return h.H.useHostTransitionStatus();
    }),
    (le.version = "19.2.3"),
    le
  );
}
var sp;
function N1() {
  if (sp) return Rr.exports;
  sp = 1;
  function i() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i);
      } catch (l) {
        console.error(l);
      }
  }
  return i(), (Rr.exports = R1()), Rr.exports;
}
var up;
function V1() {
  if (up) return ol;
  up = 1;
  var i = O1(),
    l = au(),
    u = N1();
  function r(t) {
    var e = "https://react.dev/errors/" + t;
    if (1 < arguments.length) {
      e += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var n = 2; n < arguments.length; n++)
        e += "&args[]=" + encodeURIComponent(arguments[n]);
    }
    return (
      "Minified React error #" +
      t +
      "; visit " +
      e +
      " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
  }
  function c(t) {
    return !(!t || (t.nodeType !== 1 && t.nodeType !== 9 && t.nodeType !== 11));
  }
  function d(t) {
    var e = t,
      n = t;
    if (t.alternate) for (; e.return; ) e = e.return;
    else {
      t = e;
      do (e = t), (e.flags & 4098) !== 0 && (n = e.return), (t = e.return);
      while (t);
    }
    return e.tag === 3 ? n : null;
  }
  function h(t) {
    if (t.tag === 13) {
      var e = t.memoizedState;
      if (
        (e === null && ((t = t.alternate), t !== null && (e = t.memoizedState)),
        e !== null)
      )
        return e.dehydrated;
    }
    return null;
  }
  function y(t) {
    if (t.tag === 31) {
      var e = t.memoizedState;
      if (
        (e === null && ((t = t.alternate), t !== null && (e = t.memoizedState)),
        e !== null)
      )
        return e.dehydrated;
    }
    return null;
  }
  function g(t) {
    if (d(t) !== t) throw Error(r(188));
  }
  function m(t) {
    var e = t.alternate;
    if (!e) {
      if (((e = d(t)), e === null)) throw Error(r(188));
      return e !== t ? null : t;
    }
    for (var n = t, a = e; ; ) {
      var s = n.return;
      if (s === null) break;
      var o = s.alternate;
      if (o === null) {
        if (((a = s.return), a !== null)) {
          n = a;
          continue;
        }
        break;
      }
      if (s.child === o.child) {
        for (o = s.child; o; ) {
          if (o === n) return g(s), t;
          if (o === a) return g(s), e;
          o = o.sibling;
        }
        throw Error(r(188));
      }
      if (n.return !== a.return) (n = s), (a = o);
      else {
        for (var f = !1, p = s.child; p; ) {
          if (p === n) {
            (f = !0), (n = s), (a = o);
            break;
          }
          if (p === a) {
            (f = !0), (a = s), (n = o);
            break;
          }
          p = p.sibling;
        }
        if (!f) {
          for (p = o.child; p; ) {
            if (p === n) {
              (f = !0), (n = o), (a = s);
              break;
            }
            if (p === a) {
              (f = !0), (a = o), (n = s);
              break;
            }
            p = p.sibling;
          }
          if (!f) throw Error(r(189));
        }
      }
      if (n.alternate !== a) throw Error(r(190));
    }
    if (n.tag !== 3) throw Error(r(188));
    return n.stateNode.current === n ? t : e;
  }
  function v(t) {
    var e = t.tag;
    if (e === 5 || e === 26 || e === 27 || e === 6) return t;
    for (t = t.child; t !== null; ) {
      if (((e = v(t)), e !== null)) return e;
      t = t.sibling;
    }
    return null;
  }
  var b = Object.assign,
    T = Symbol.for("react.element"),
    R = Symbol.for("react.transitional.element"),
    U = Symbol.for("react.portal"),
    H = Symbol.for("react.fragment"),
    Z = Symbol.for("react.strict_mode"),
    L = Symbol.for("react.profiler"),
    G = Symbol.for("react.consumer"),
    q = Symbol.for("react.context"),
    tt = Symbol.for("react.forward_ref"),
    F = Symbol.for("react.suspense"),
    $ = Symbol.for("react.suspense_list"),
    X = Symbol.for("react.memo"),
    W = Symbol.for("react.lazy"),
    vt = Symbol.for("react.activity"),
    Dt = Symbol.for("react.memo_cache_sentinel"),
    Lt = Symbol.iterator;
  function Vt(t) {
    return t === null || typeof t != "object"
      ? null
      : ((t = (Lt && t[Lt]) || t["@@iterator"]),
        typeof t == "function" ? t : null);
  }
  var we = Symbol.for("react.client.reference");
  function ae(t) {
    if (t == null) return null;
    if (typeof t == "function")
      return t.$$typeof === we ? null : t.displayName || t.name || null;
    if (typeof t == "string") return t;
    switch (t) {
      case H:
        return "Fragment";
      case L:
        return "Profiler";
      case Z:
        return "StrictMode";
      case F:
        return "Suspense";
      case $:
        return "SuspenseList";
      case vt:
        return "Activity";
    }
    if (typeof t == "object")
      switch (t.$$typeof) {
        case U:
          return "Portal";
        case q:
          return t.displayName || "Context";
        case G:
          return (t._context.displayName || "Context") + ".Consumer";
        case tt:
          var e = t.render;
          return (
            (t = t.displayName),
            t ||
              ((t = e.displayName || e.name || ""),
              (t = t !== "" ? "ForwardRef(" + t + ")" : "ForwardRef")),
            t
          );
        case X:
          return (
            (e = t.displayName || null), e !== null ? e : ae(t.type) || "Memo"
          );
        case W:
          (e = t._payload), (t = t._init);
          try {
            return ae(t(e));
          } catch {}
      }
    return null;
  }
  var ie = Array.isArray,
    O = l.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    B = u.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    Q = { pending: !1, data: null, method: null, action: null },
    st = [],
    rt = -1;
  function A(t) {
    return { current: t };
  }
  function _(t) {
    0 > rt || ((t.current = st[rt]), (st[rt] = null), rt--);
  }
  function Y(t, e) {
    rt++, (st[rt] = t.current), (t.current = e);
  }
  var K = A(null),
    it = A(null),
    et = A(null),
    pt = A(null);
  function Rt(t, e) {
    switch ((Y(et, e), Y(it, t), Y(K, null), e.nodeType)) {
      case 9:
      case 11:
        t = (t = e.documentElement) && (t = t.namespaceURI) ? xm(t) : 0;
        break;
      default:
        if (((t = e.tagName), (e = e.namespaceURI)))
          (e = xm(e)), (t = Am(e, t));
        else
          switch (t) {
            case "svg":
              t = 1;
              break;
            case "math":
              t = 2;
              break;
            default:
              t = 0;
          }
    }
    _(K), Y(K, t);
  }
  function St() {
    _(K), _(it), _(et);
  }
  function mi(t) {
    t.memoizedState !== null && Y(pt, t);
    var e = K.current,
      n = Am(e, t.type);
    e !== n && (Y(it, t), Y(K, n));
  }
  function El(t) {
    it.current === t && (_(K), _(it)),
      pt.current === t && (_(pt), (al._currentValue = Q));
  }
  var ou, Pc;
  function kn(t) {
    if (ou === void 0)
      try {
        throw Error();
      } catch (n) {
        var e = n.stack.trim().match(/\n( *(at )?)/);
        (ou = (e && e[1]) || ""),
          (Pc =
            -1 <
            n.stack.indexOf(`
    at`)
              ? " (<anonymous>)"
              : -1 < n.stack.indexOf("@")
              ? "@unknown:0:0"
              : "");
      }
    return (
      `
` +
      ou +
      t +
      Pc
    );
  }
  var ru = !1;
  function cu(t, e) {
    if (!t || ru) return "";
    ru = !0;
    var n = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var a = {
        DetermineComponentFrameRoot: function () {
          try {
            if (e) {
              var V = function () {
                throw Error();
              };
              if (
                (Object.defineProperty(V.prototype, "props", {
                  set: function () {
                    throw Error();
                  },
                }),
                typeof Reflect == "object" && Reflect.construct)
              ) {
                try {
                  Reflect.construct(V, []);
                } catch (z) {
                  var C = z;
                }
                Reflect.construct(t, [], V);
              } else {
                try {
                  V.call();
                } catch (z) {
                  C = z;
                }
                t.call(V.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (z) {
                C = z;
              }
              (V = t()) &&
                typeof V.catch == "function" &&
                V.catch(function () {});
            }
          } catch (z) {
            if (z && C && typeof z.stack == "string") return [z.stack, C.stack];
          }
          return [null, null];
        },
      };
      a.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
      var s = Object.getOwnPropertyDescriptor(
        a.DetermineComponentFrameRoot,
        "name"
      );
      s &&
        s.configurable &&
        Object.defineProperty(a.DetermineComponentFrameRoot, "name", {
          value: "DetermineComponentFrameRoot",
        });
      var o = a.DetermineComponentFrameRoot(),
        f = o[0],
        p = o[1];
      if (f && p) {
        var S = f.split(`
`),
          w = p.split(`
`);
        for (
          s = a = 0;
          a < S.length && !S[a].includes("DetermineComponentFrameRoot");

        )
          a++;
        for (; s < w.length && !w[s].includes("DetermineComponentFrameRoot"); )
          s++;
        if (a === S.length || s === w.length)
          for (
            a = S.length - 1, s = w.length - 1;
            1 <= a && 0 <= s && S[a] !== w[s];

          )
            s--;
        for (; 1 <= a && 0 <= s; a--, s--)
          if (S[a] !== w[s]) {
            if (a !== 1 || s !== 1)
              do
                if ((a--, s--, 0 > s || S[a] !== w[s])) {
                  var j =
                    `
` + S[a].replace(" at new ", " at ");
                  return (
                    t.displayName &&
                      j.includes("<anonymous>") &&
                      (j = j.replace("<anonymous>", t.displayName)),
                    j
                  );
                }
              while (1 <= a && 0 <= s);
            break;
          }
      }
    } finally {
      (ru = !1), (Error.prepareStackTrace = n);
    }
    return (n = t ? t.displayName || t.name : "") ? kn(n) : "";
  }
  function a0(t, e) {
    switch (t.tag) {
      case 26:
      case 27:
      case 5:
        return kn(t.type);
      case 16:
        return kn("Lazy");
      case 13:
        return t.child !== e && e !== null
          ? kn("Suspense Fallback")
          : kn("Suspense");
      case 19:
        return kn("SuspenseList");
      case 0:
      case 15:
        return cu(t.type, !1);
      case 11:
        return cu(t.type.render, !1);
      case 1:
        return cu(t.type, !0);
      case 31:
        return kn("Activity");
      default:
        return "";
    }
  }
  function $c(t) {
    try {
      var e = "",
        n = null;
      do (e += a0(t, n)), (n = t), (t = t.return);
      while (t);
      return e;
    } catch (a) {
      return (
        `
Error generating stack: ` +
        a.message +
        `
` +
        a.stack
      );
    }
  }
  var fu = Object.prototype.hasOwnProperty,
    hu = i.unstable_scheduleCallback,
    du = i.unstable_cancelCallback,
    i0 = i.unstable_shouldYield,
    l0 = i.unstable_requestPaint,
    ye = i.unstable_now,
    s0 = i.unstable_getCurrentPriorityLevel,
    Ic = i.unstable_ImmediatePriority,
    tf = i.unstable_UserBlockingPriority,
    Ml = i.unstable_NormalPriority,
    u0 = i.unstable_LowPriority,
    ef = i.unstable_IdlePriority,
    o0 = i.log,
    r0 = i.unstable_setDisableYieldValue,
    pi = null,
    ve = null;
  function bn(t) {
    if (
      (typeof o0 == "function" && r0(t),
      ve && typeof ve.setStrictMode == "function")
    )
      try {
        ve.setStrictMode(pi, t);
      } catch {}
  }
  var be = Math.clz32 ? Math.clz32 : h0,
    c0 = Math.log,
    f0 = Math.LN2;
  function h0(t) {
    return (t >>>= 0), t === 0 ? 32 : (31 - ((c0(t) / f0) | 0)) | 0;
  }
  var Dl = 256,
    wl = 262144,
    Cl = 4194304;
  function Fn(t) {
    var e = t & 42;
    if (e !== 0) return e;
    switch (t & -t) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
        return 64;
      case 128:
        return 128;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
        return t & 261888;
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return t & 3932160;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return t & 62914560;
      case 67108864:
        return 67108864;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 0;
      default:
        return t;
    }
  }
  function zl(t, e, n) {
    var a = t.pendingLanes;
    if (a === 0) return 0;
    var s = 0,
      o = t.suspendedLanes,
      f = t.pingedLanes;
    t = t.warmLanes;
    var p = a & 134217727;
    return (
      p !== 0
        ? ((a = p & ~o),
          a !== 0
            ? (s = Fn(a))
            : ((f &= p),
              f !== 0
                ? (s = Fn(f))
                : n || ((n = p & ~t), n !== 0 && (s = Fn(n)))))
        : ((p = a & ~o),
          p !== 0
            ? (s = Fn(p))
            : f !== 0
            ? (s = Fn(f))
            : n || ((n = a & ~t), n !== 0 && (s = Fn(n)))),
      s === 0
        ? 0
        : e !== 0 &&
          e !== s &&
          (e & o) === 0 &&
          ((o = s & -s),
          (n = e & -e),
          o >= n || (o === 32 && (n & 4194048) !== 0))
        ? e
        : s
    );
  }
  function gi(t, e) {
    return (t.pendingLanes & ~(t.suspendedLanes & ~t.pingedLanes) & e) === 0;
  }
  function d0(t, e) {
    switch (t) {
      case 1:
      case 2:
      case 4:
      case 8:
      case 64:
        return e + 250;
      case 16:
      case 32:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return e + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return -1;
      case 67108864:
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function nf() {
    var t = Cl;
    return (Cl <<= 1), (Cl & 62914560) === 0 && (Cl = 4194304), t;
  }
  function mu(t) {
    for (var e = [], n = 0; 31 > n; n++) e.push(t);
    return e;
  }
  function yi(t, e) {
    (t.pendingLanes |= e),
      e !== 268435456 &&
        ((t.suspendedLanes = 0), (t.pingedLanes = 0), (t.warmLanes = 0));
  }
  function m0(t, e, n, a, s, o) {
    var f = t.pendingLanes;
    (t.pendingLanes = n),
      (t.suspendedLanes = 0),
      (t.pingedLanes = 0),
      (t.warmLanes = 0),
      (t.expiredLanes &= n),
      (t.entangledLanes &= n),
      (t.errorRecoveryDisabledLanes &= n),
      (t.shellSuspendCounter = 0);
    var p = t.entanglements,
      S = t.expirationTimes,
      w = t.hiddenUpdates;
    for (n = f & ~n; 0 < n; ) {
      var j = 31 - be(n),
        V = 1 << j;
      (p[j] = 0), (S[j] = -1);
      var C = w[j];
      if (C !== null)
        for (w[j] = null, j = 0; j < C.length; j++) {
          var z = C[j];
          z !== null && (z.lane &= -536870913);
        }
      n &= ~V;
    }
    a !== 0 && af(t, a, 0),
      o !== 0 && s === 0 && t.tag !== 0 && (t.suspendedLanes |= o & ~(f & ~e));
  }
  function af(t, e, n) {
    (t.pendingLanes |= e), (t.suspendedLanes &= ~e);
    var a = 31 - be(e);
    (t.entangledLanes |= e),
      (t.entanglements[a] = t.entanglements[a] | 1073741824 | (n & 261930));
  }
  function lf(t, e) {
    var n = (t.entangledLanes |= e);
    for (t = t.entanglements; n; ) {
      var a = 31 - be(n),
        s = 1 << a;
      (s & e) | (t[a] & e) && (t[a] |= e), (n &= ~s);
    }
  }
  function sf(t, e) {
    var n = e & -e;
    return (
      (n = (n & 42) !== 0 ? 1 : pu(n)),
      (n & (t.suspendedLanes | e)) !== 0 ? 0 : n
    );
  }
  function pu(t) {
    switch (t) {
      case 2:
        t = 1;
        break;
      case 8:
        t = 4;
        break;
      case 32:
        t = 16;
        break;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        t = 128;
        break;
      case 268435456:
        t = 134217728;
        break;
      default:
        t = 0;
    }
    return t;
  }
  function gu(t) {
    return (
      (t &= -t),
      2 < t ? (8 < t ? ((t & 134217727) !== 0 ? 32 : 268435456) : 8) : 2
    );
  }
  function uf() {
    var t = B.p;
    return t !== 0 ? t : ((t = window.event), t === void 0 ? 32 : Km(t.type));
  }
  function of(t, e) {
    var n = B.p;
    try {
      return (B.p = t), e();
    } finally {
      B.p = n;
    }
  }
  var Sn = Math.random().toString(36).slice(2),
    Pt = "__reactFiber$" + Sn,
    re = "__reactProps$" + Sn,
    ba = "__reactContainer$" + Sn,
    yu = "__reactEvents$" + Sn,
    p0 = "__reactListeners$" + Sn,
    g0 = "__reactHandles$" + Sn,
    rf = "__reactResources$" + Sn,
    vi = "__reactMarker$" + Sn;
  function vu(t) {
    delete t[Pt], delete t[re], delete t[yu], delete t[p0], delete t[g0];
  }
  function Sa(t) {
    var e = t[Pt];
    if (e) return e;
    for (var n = t.parentNode; n; ) {
      if ((e = n[ba] || n[Pt])) {
        if (
          ((n = e.alternate),
          e.child !== null || (n !== null && n.child !== null))
        )
          for (t = jm(t); t !== null; ) {
            if ((n = t[Pt])) return n;
            t = jm(t);
          }
        return e;
      }
      (t = n), (n = t.parentNode);
    }
    return null;
  }
  function Ta(t) {
    if ((t = t[Pt] || t[ba])) {
      var e = t.tag;
      if (
        e === 5 ||
        e === 6 ||
        e === 13 ||
        e === 31 ||
        e === 26 ||
        e === 27 ||
        e === 3
      )
        return t;
    }
    return null;
  }
  function bi(t) {
    var e = t.tag;
    if (e === 5 || e === 26 || e === 27 || e === 6) return t.stateNode;
    throw Error(r(33));
  }
  function xa(t) {
    var e = t[rf];
    return (
      e ||
        (e = t[rf] =
          { hoistableStyles: new Map(), hoistableScripts: new Map() }),
      e
    );
  }
  function Ft(t) {
    t[vi] = !0;
  }
  var cf = new Set(),
    ff = {};
  function Wn(t, e) {
    Aa(t, e), Aa(t + "Capture", e);
  }
  function Aa(t, e) {
    for (ff[t] = e, t = 0; t < e.length; t++) cf.add(e[t]);
  }
  var y0 = RegExp(
      "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
    ),
    hf = {},
    df = {};
  function v0(t) {
    return fu.call(df, t)
      ? !0
      : fu.call(hf, t)
      ? !1
      : y0.test(t)
      ? (df[t] = !0)
      : ((hf[t] = !0), !1);
  }
  function jl(t, e, n) {
    if (v0(e))
      if (n === null) t.removeAttribute(e);
      else {
        switch (typeof n) {
          case "undefined":
          case "function":
          case "symbol":
            t.removeAttribute(e);
            return;
          case "boolean":
            var a = e.toLowerCase().slice(0, 5);
            if (a !== "data-" && a !== "aria-") {
              t.removeAttribute(e);
              return;
            }
        }
        t.setAttribute(e, "" + n);
      }
  }
  function Ol(t, e, n) {
    if (n === null) t.removeAttribute(e);
    else {
      switch (typeof n) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          t.removeAttribute(e);
          return;
      }
      t.setAttribute(e, "" + n);
    }
  }
  function $e(t, e, n, a) {
    if (a === null) t.removeAttribute(n);
    else {
      switch (typeof a) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          t.removeAttribute(n);
          return;
      }
      t.setAttributeNS(e, n, "" + a);
    }
  }
  function Ce(t) {
    switch (typeof t) {
      case "bigint":
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return t;
      case "object":
        return t;
      default:
        return "";
    }
  }
  function mf(t) {
    var e = t.type;
    return (
      (t = t.nodeName) &&
      t.toLowerCase() === "input" &&
      (e === "checkbox" || e === "radio")
    );
  }
  function b0(t, e, n) {
    var a = Object.getOwnPropertyDescriptor(t.constructor.prototype, e);
    if (
      !t.hasOwnProperty(e) &&
      typeof a < "u" &&
      typeof a.get == "function" &&
      typeof a.set == "function"
    ) {
      var s = a.get,
        o = a.set;
      return (
        Object.defineProperty(t, e, {
          configurable: !0,
          get: function () {
            return s.call(this);
          },
          set: function (f) {
            (n = "" + f), o.call(this, f);
          },
        }),
        Object.defineProperty(t, e, { enumerable: a.enumerable }),
        {
          getValue: function () {
            return n;
          },
          setValue: function (f) {
            n = "" + f;
          },
          stopTracking: function () {
            (t._valueTracker = null), delete t[e];
          },
        }
      );
    }
  }
  function bu(t) {
    if (!t._valueTracker) {
      var e = mf(t) ? "checked" : "value";
      t._valueTracker = b0(t, e, "" + t[e]);
    }
  }
  function pf(t) {
    if (!t) return !1;
    var e = t._valueTracker;
    if (!e) return !0;
    var n = e.getValue(),
      a = "";
    return (
      t && (a = mf(t) ? (t.checked ? "true" : "false") : t.value),
      (t = a),
      t !== n ? (e.setValue(t), !0) : !1
    );
  }
  function Rl(t) {
    if (
      ((t = t || (typeof document < "u" ? document : void 0)), typeof t > "u")
    )
      return null;
    try {
      return t.activeElement || t.body;
    } catch {
      return t.body;
    }
  }
  var S0 = /[\n"\\]/g;
  function ze(t) {
    return t.replace(S0, function (e) {
      return "\\" + e.charCodeAt(0).toString(16) + " ";
    });
  }
  function Su(t, e, n, a, s, o, f, p) {
    (t.name = ""),
      f != null &&
      typeof f != "function" &&
      typeof f != "symbol" &&
      typeof f != "boolean"
        ? (t.type = f)
        : t.removeAttribute("type"),
      e != null
        ? f === "number"
          ? ((e === 0 && t.value === "") || t.value != e) &&
            (t.value = "" + Ce(e))
          : t.value !== "" + Ce(e) && (t.value = "" + Ce(e))
        : (f !== "submit" && f !== "reset") || t.removeAttribute("value"),
      e != null
        ? Tu(t, f, Ce(e))
        : n != null
        ? Tu(t, f, Ce(n))
        : a != null && t.removeAttribute("value"),
      s == null && o != null && (t.defaultChecked = !!o),
      s != null &&
        (t.checked = s && typeof s != "function" && typeof s != "symbol"),
      p != null &&
      typeof p != "function" &&
      typeof p != "symbol" &&
      typeof p != "boolean"
        ? (t.name = "" + Ce(p))
        : t.removeAttribute("name");
  }
  function gf(t, e, n, a, s, o, f, p) {
    if (
      (o != null &&
        typeof o != "function" &&
        typeof o != "symbol" &&
        typeof o != "boolean" &&
        (t.type = o),
      e != null || n != null)
    ) {
      if (!((o !== "submit" && o !== "reset") || e != null)) {
        bu(t);
        return;
      }
      (n = n != null ? "" + Ce(n) : ""),
        (e = e != null ? "" + Ce(e) : n),
        p || e === t.value || (t.value = e),
        (t.defaultValue = e);
    }
    (a = a ?? s),
      (a = typeof a != "function" && typeof a != "symbol" && !!a),
      (t.checked = p ? t.checked : !!a),
      (t.defaultChecked = !!a),
      f != null &&
        typeof f != "function" &&
        typeof f != "symbol" &&
        typeof f != "boolean" &&
        (t.name = f),
      bu(t);
  }
  function Tu(t, e, n) {
    (e === "number" && Rl(t.ownerDocument) === t) ||
      t.defaultValue === "" + n ||
      (t.defaultValue = "" + n);
  }
  function Ea(t, e, n, a) {
    if (((t = t.options), e)) {
      e = {};
      for (var s = 0; s < n.length; s++) e["$" + n[s]] = !0;
      for (n = 0; n < t.length; n++)
        (s = e.hasOwnProperty("$" + t[n].value)),
          t[n].selected !== s && (t[n].selected = s),
          s && a && (t[n].defaultSelected = !0);
    } else {
      for (n = "" + Ce(n), e = null, s = 0; s < t.length; s++) {
        if (t[s].value === n) {
          (t[s].selected = !0), a && (t[s].defaultSelected = !0);
          return;
        }
        e !== null || t[s].disabled || (e = t[s]);
      }
      e !== null && (e.selected = !0);
    }
  }
  function yf(t, e, n) {
    if (
      e != null &&
      ((e = "" + Ce(e)), e !== t.value && (t.value = e), n == null)
    ) {
      t.defaultValue !== e && (t.defaultValue = e);
      return;
    }
    t.defaultValue = n != null ? "" + Ce(n) : "";
  }
  function vf(t, e, n, a) {
    if (e == null) {
      if (a != null) {
        if (n != null) throw Error(r(92));
        if (ie(a)) {
          if (1 < a.length) throw Error(r(93));
          a = a[0];
        }
        n = a;
      }
      n == null && (n = ""), (e = n);
    }
    (n = Ce(e)),
      (t.defaultValue = n),
      (a = t.textContent),
      a === n && a !== "" && a !== null && (t.value = a),
      bu(t);
  }
  function Ma(t, e) {
    if (e) {
      var n = t.firstChild;
      if (n && n === t.lastChild && n.nodeType === 3) {
        n.nodeValue = e;
        return;
      }
    }
    t.textContent = e;
  }
  var T0 = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " "
    )
  );
  function bf(t, e, n) {
    var a = e.indexOf("--") === 0;
    n == null || typeof n == "boolean" || n === ""
      ? a
        ? t.setProperty(e, "")
        : e === "float"
        ? (t.cssFloat = "")
        : (t[e] = "")
      : a
      ? t.setProperty(e, n)
      : typeof n != "number" || n === 0 || T0.has(e)
      ? e === "float"
        ? (t.cssFloat = n)
        : (t[e] = ("" + n).trim())
      : (t[e] = n + "px");
  }
  function Sf(t, e, n) {
    if (e != null && typeof e != "object") throw Error(r(62));
    if (((t = t.style), n != null)) {
      for (var a in n)
        !n.hasOwnProperty(a) ||
          (e != null && e.hasOwnProperty(a)) ||
          (a.indexOf("--") === 0
            ? t.setProperty(a, "")
            : a === "float"
            ? (t.cssFloat = "")
            : (t[a] = ""));
      for (var s in e)
        (a = e[s]), e.hasOwnProperty(s) && n[s] !== a && bf(t, s, a);
    } else for (var o in e) e.hasOwnProperty(o) && bf(t, o, e[o]);
  }
  function xu(t) {
    if (t.indexOf("-") === -1) return !1;
    switch (t) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return !1;
      default:
        return !0;
    }
  }
  var x0 = new Map([
      ["acceptCharset", "accept-charset"],
      ["htmlFor", "for"],
      ["httpEquiv", "http-equiv"],
      ["crossOrigin", "crossorigin"],
      ["accentHeight", "accent-height"],
      ["alignmentBaseline", "alignment-baseline"],
      ["arabicForm", "arabic-form"],
      ["baselineShift", "baseline-shift"],
      ["capHeight", "cap-height"],
      ["clipPath", "clip-path"],
      ["clipRule", "clip-rule"],
      ["colorInterpolation", "color-interpolation"],
      ["colorInterpolationFilters", "color-interpolation-filters"],
      ["colorProfile", "color-profile"],
      ["colorRendering", "color-rendering"],
      ["dominantBaseline", "dominant-baseline"],
      ["enableBackground", "enable-background"],
      ["fillOpacity", "fill-opacity"],
      ["fillRule", "fill-rule"],
      ["floodColor", "flood-color"],
      ["floodOpacity", "flood-opacity"],
      ["fontFamily", "font-family"],
      ["fontSize", "font-size"],
      ["fontSizeAdjust", "font-size-adjust"],
      ["fontStretch", "font-stretch"],
      ["fontStyle", "font-style"],
      ["fontVariant", "font-variant"],
      ["fontWeight", "font-weight"],
      ["glyphName", "glyph-name"],
      ["glyphOrientationHorizontal", "glyph-orientation-horizontal"],
      ["glyphOrientationVertical", "glyph-orientation-vertical"],
      ["horizAdvX", "horiz-adv-x"],
      ["horizOriginX", "horiz-origin-x"],
      ["imageRendering", "image-rendering"],
      ["letterSpacing", "letter-spacing"],
      ["lightingColor", "lighting-color"],
      ["markerEnd", "marker-end"],
      ["markerMid", "marker-mid"],
      ["markerStart", "marker-start"],
      ["overlinePosition", "overline-position"],
      ["overlineThickness", "overline-thickness"],
      ["paintOrder", "paint-order"],
      ["panose-1", "panose-1"],
      ["pointerEvents", "pointer-events"],
      ["renderingIntent", "rendering-intent"],
      ["shapeRendering", "shape-rendering"],
      ["stopColor", "stop-color"],
      ["stopOpacity", "stop-opacity"],
      ["strikethroughPosition", "strikethrough-position"],
      ["strikethroughThickness", "strikethrough-thickness"],
      ["strokeDasharray", "stroke-dasharray"],
      ["strokeDashoffset", "stroke-dashoffset"],
      ["strokeLinecap", "stroke-linecap"],
      ["strokeLinejoin", "stroke-linejoin"],
      ["strokeMiterlimit", "stroke-miterlimit"],
      ["strokeOpacity", "stroke-opacity"],
      ["strokeWidth", "stroke-width"],
      ["textAnchor", "text-anchor"],
      ["textDecoration", "text-decoration"],
      ["textRendering", "text-rendering"],
      ["transformOrigin", "transform-origin"],
      ["underlinePosition", "underline-position"],
      ["underlineThickness", "underline-thickness"],
      ["unicodeBidi", "unicode-bidi"],
      ["unicodeRange", "unicode-range"],
      ["unitsPerEm", "units-per-em"],
      ["vAlphabetic", "v-alphabetic"],
      ["vHanging", "v-hanging"],
      ["vIdeographic", "v-ideographic"],
      ["vMathematical", "v-mathematical"],
      ["vectorEffect", "vector-effect"],
      ["vertAdvY", "vert-adv-y"],
      ["vertOriginX", "vert-origin-x"],
      ["vertOriginY", "vert-origin-y"],
      ["wordSpacing", "word-spacing"],
      ["writingMode", "writing-mode"],
      ["xmlnsXlink", "xmlns:xlink"],
      ["xHeight", "x-height"],
    ]),
    A0 =
      /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function Nl(t) {
    return A0.test("" + t)
      ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')"
      : t;
  }
  function Ie() {}
  var Au = null;
  function Eu(t) {
    return (
      (t = t.target || t.srcElement || window),
      t.correspondingUseElement && (t = t.correspondingUseElement),
      t.nodeType === 3 ? t.parentNode : t
    );
  }
  var Da = null,
    wa = null;
  function Tf(t) {
    var e = Ta(t);
    if (e && (t = e.stateNode)) {
      var n = t[re] || null;
      t: switch (((t = e.stateNode), e.type)) {
        case "input":
          if (
            (Su(
              t,
              n.value,
              n.defaultValue,
              n.defaultValue,
              n.checked,
              n.defaultChecked,
              n.type,
              n.name
            ),
            (e = n.name),
            n.type === "radio" && e != null)
          ) {
            for (n = t; n.parentNode; ) n = n.parentNode;
            for (
              n = n.querySelectorAll(
                'input[name="' + ze("" + e) + '"][type="radio"]'
              ),
                e = 0;
              e < n.length;
              e++
            ) {
              var a = n[e];
              if (a !== t && a.form === t.form) {
                var s = a[re] || null;
                if (!s) throw Error(r(90));
                Su(
                  a,
                  s.value,
                  s.defaultValue,
                  s.defaultValue,
                  s.checked,
                  s.defaultChecked,
                  s.type,
                  s.name
                );
              }
            }
            for (e = 0; e < n.length; e++)
              (a = n[e]), a.form === t.form && pf(a);
          }
          break t;
        case "textarea":
          yf(t, n.value, n.defaultValue);
          break t;
        case "select":
          (e = n.value), e != null && Ea(t, !!n.multiple, e, !1);
      }
    }
  }
  var Mu = !1;
  function xf(t, e, n) {
    if (Mu) return t(e, n);
    Mu = !0;
    try {
      var a = t(e);
      return a;
    } finally {
      if (
        ((Mu = !1),
        (Da !== null || wa !== null) &&
          (Ss(), Da && ((e = Da), (t = wa), (wa = Da = null), Tf(e), t)))
      )
        for (e = 0; e < t.length; e++) Tf(t[e]);
    }
  }
  function Si(t, e) {
    var n = t.stateNode;
    if (n === null) return null;
    var a = n[re] || null;
    if (a === null) return null;
    n = a[e];
    t: switch (e) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
      case "onMouseEnter":
        (a = !a.disabled) ||
          ((t = t.type),
          (a = !(
            t === "button" ||
            t === "input" ||
            t === "select" ||
            t === "textarea"
          ))),
          (t = !a);
        break t;
      default:
        t = !1;
    }
    if (t) return null;
    if (n && typeof n != "function") throw Error(r(231, e, typeof n));
    return n;
  }
  var tn = !(
      typeof window > "u" ||
      typeof window.document > "u" ||
      typeof window.document.createElement > "u"
    ),
    Du = !1;
  if (tn)
    try {
      var Ti = {};
      Object.defineProperty(Ti, "passive", {
        get: function () {
          Du = !0;
        },
      }),
        window.addEventListener("test", Ti, Ti),
        window.removeEventListener("test", Ti, Ti);
    } catch {
      Du = !1;
    }
  var Tn = null,
    wu = null,
    Vl = null;
  function Af() {
    if (Vl) return Vl;
    var t,
      e = wu,
      n = e.length,
      a,
      s = "value" in Tn ? Tn.value : Tn.textContent,
      o = s.length;
    for (t = 0; t < n && e[t] === s[t]; t++);
    var f = n - t;
    for (a = 1; a <= f && e[n - a] === s[o - a]; a++);
    return (Vl = s.slice(t, 1 < a ? 1 - a : void 0));
  }
  function _l(t) {
    var e = t.keyCode;
    return (
      "charCode" in t
        ? ((t = t.charCode), t === 0 && e === 13 && (t = 13))
        : (t = e),
      t === 10 && (t = 13),
      32 <= t || t === 13 ? t : 0
    );
  }
  function Bl() {
    return !0;
  }
  function Ef() {
    return !1;
  }
  function ce(t) {
    function e(n, a, s, o, f) {
      (this._reactName = n),
        (this._targetInst = s),
        (this.type = a),
        (this.nativeEvent = o),
        (this.target = f),
        (this.currentTarget = null);
      for (var p in t)
        t.hasOwnProperty(p) && ((n = t[p]), (this[p] = n ? n(o) : o[p]));
      return (
        (this.isDefaultPrevented = (
          o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === !1
        )
          ? Bl
          : Ef),
        (this.isPropagationStopped = Ef),
        this
      );
    }
    return (
      b(e.prototype, {
        preventDefault: function () {
          this.defaultPrevented = !0;
          var n = this.nativeEvent;
          n &&
            (n.preventDefault
              ? n.preventDefault()
              : typeof n.returnValue != "unknown" && (n.returnValue = !1),
            (this.isDefaultPrevented = Bl));
        },
        stopPropagation: function () {
          var n = this.nativeEvent;
          n &&
            (n.stopPropagation
              ? n.stopPropagation()
              : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
            (this.isPropagationStopped = Bl));
        },
        persist: function () {},
        isPersistent: Bl,
      }),
      e
    );
  }
  var Pn = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function (t) {
        return t.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0,
    },
    Ul = ce(Pn),
    xi = b({}, Pn, { view: 0, detail: 0 }),
    E0 = ce(xi),
    Cu,
    zu,
    Ai,
    Hl = b({}, xi, {
      screenX: 0,
      screenY: 0,
      clientX: 0,
      clientY: 0,
      pageX: 0,
      pageY: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      getModifierState: Ou,
      button: 0,
      buttons: 0,
      relatedTarget: function (t) {
        return t.relatedTarget === void 0
          ? t.fromElement === t.srcElement
            ? t.toElement
            : t.fromElement
          : t.relatedTarget;
      },
      movementX: function (t) {
        return "movementX" in t
          ? t.movementX
          : (t !== Ai &&
              (Ai && t.type === "mousemove"
                ? ((Cu = t.screenX - Ai.screenX), (zu = t.screenY - Ai.screenY))
                : (zu = Cu = 0),
              (Ai = t)),
            Cu);
      },
      movementY: function (t) {
        return "movementY" in t ? t.movementY : zu;
      },
    }),
    Mf = ce(Hl),
    M0 = b({}, Hl, { dataTransfer: 0 }),
    D0 = ce(M0),
    w0 = b({}, xi, { relatedTarget: 0 }),
    ju = ce(w0),
    C0 = b({}, Pn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    z0 = ce(C0),
    j0 = b({}, Pn, {
      clipboardData: function (t) {
        return "clipboardData" in t ? t.clipboardData : window.clipboardData;
      },
    }),
    O0 = ce(j0),
    R0 = b({}, Pn, { data: 0 }),
    Df = ce(R0),
    N0 = {
      Esc: "Escape",
      Spacebar: " ",
      Left: "ArrowLeft",
      Up: "ArrowUp",
      Right: "ArrowRight",
      Down: "ArrowDown",
      Del: "Delete",
      Win: "OS",
      Menu: "ContextMenu",
      Apps: "ContextMenu",
      Scroll: "ScrollLock",
      MozPrintableKey: "Unidentified",
    },
    V0 = {
      8: "Backspace",
      9: "Tab",
      12: "Clear",
      13: "Enter",
      16: "Shift",
      17: "Control",
      18: "Alt",
      19: "Pause",
      20: "CapsLock",
      27: "Escape",
      32: " ",
      33: "PageUp",
      34: "PageDown",
      35: "End",
      36: "Home",
      37: "ArrowLeft",
      38: "ArrowUp",
      39: "ArrowRight",
      40: "ArrowDown",
      45: "Insert",
      46: "Delete",
      112: "F1",
      113: "F2",
      114: "F3",
      115: "F4",
      116: "F5",
      117: "F6",
      118: "F7",
      119: "F8",
      120: "F9",
      121: "F10",
      122: "F11",
      123: "F12",
      144: "NumLock",
      145: "ScrollLock",
      224: "Meta",
    },
    _0 = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey",
    };
  function B0(t) {
    var e = this.nativeEvent;
    return e.getModifierState
      ? e.getModifierState(t)
      : (t = _0[t])
      ? !!e[t]
      : !1;
  }
  function Ou() {
    return B0;
  }
  var U0 = b({}, xi, {
      key: function (t) {
        if (t.key) {
          var e = N0[t.key] || t.key;
          if (e !== "Unidentified") return e;
        }
        return t.type === "keypress"
          ? ((t = _l(t)), t === 13 ? "Enter" : String.fromCharCode(t))
          : t.type === "keydown" || t.type === "keyup"
          ? V0[t.keyCode] || "Unidentified"
          : "";
      },
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: Ou,
      charCode: function (t) {
        return t.type === "keypress" ? _l(t) : 0;
      },
      keyCode: function (t) {
        return t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0;
      },
      which: function (t) {
        return t.type === "keypress"
          ? _l(t)
          : t.type === "keydown" || t.type === "keyup"
          ? t.keyCode
          : 0;
      },
    }),
    H0 = ce(U0),
    L0 = b({}, Hl, {
      pointerId: 0,
      width: 0,
      height: 0,
      pressure: 0,
      tangentialPressure: 0,
      tiltX: 0,
      tiltY: 0,
      twist: 0,
      pointerType: 0,
      isPrimary: 0,
    }),
    wf = ce(L0),
    q0 = b({}, xi, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: Ou,
    }),
    Y0 = ce(q0),
    G0 = b({}, Pn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    X0 = ce(G0),
    Z0 = b({}, Hl, {
      deltaX: function (t) {
        return "deltaX" in t
          ? t.deltaX
          : "wheelDeltaX" in t
          ? -t.wheelDeltaX
          : 0;
      },
      deltaY: function (t) {
        return "deltaY" in t
          ? t.deltaY
          : "wheelDeltaY" in t
          ? -t.wheelDeltaY
          : "wheelDelta" in t
          ? -t.wheelDelta
          : 0;
      },
      deltaZ: 0,
      deltaMode: 0,
    }),
    Q0 = ce(Z0),
    K0 = b({}, Pn, { newState: 0, oldState: 0 }),
    J0 = ce(K0),
    k0 = [9, 13, 27, 32],
    Ru = tn && "CompositionEvent" in window,
    Ei = null;
  tn && "documentMode" in document && (Ei = document.documentMode);
  var F0 = tn && "TextEvent" in window && !Ei,
    Cf = tn && (!Ru || (Ei && 8 < Ei && 11 >= Ei)),
    zf = " ",
    jf = !1;
  function Of(t, e) {
    switch (t) {
      case "keyup":
        return k0.indexOf(e.keyCode) !== -1;
      case "keydown":
        return e.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function Rf(t) {
    return (t = t.detail), typeof t == "object" && "data" in t ? t.data : null;
  }
  var Ca = !1;
  function W0(t, e) {
    switch (t) {
      case "compositionend":
        return Rf(e);
      case "keypress":
        return e.which !== 32 ? null : ((jf = !0), zf);
      case "textInput":
        return (t = e.data), t === zf && jf ? null : t;
      default:
        return null;
    }
  }
  function P0(t, e) {
    if (Ca)
      return t === "compositionend" || (!Ru && Of(t, e))
        ? ((t = Af()), (Vl = wu = Tn = null), (Ca = !1), t)
        : null;
    switch (t) {
      case "paste":
        return null;
      case "keypress":
        if (!(e.ctrlKey || e.altKey || e.metaKey) || (e.ctrlKey && e.altKey)) {
          if (e.char && 1 < e.char.length) return e.char;
          if (e.which) return String.fromCharCode(e.which);
        }
        return null;
      case "compositionend":
        return Cf && e.locale !== "ko" ? null : e.data;
      default:
        return null;
    }
  }
  var $0 = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0,
  };
  function Nf(t) {
    var e = t && t.nodeName && t.nodeName.toLowerCase();
    return e === "input" ? !!$0[t.type] : e === "textarea";
  }
  function Vf(t, e, n, a) {
    Da ? (wa ? wa.push(a) : (wa = [a])) : (Da = a),
      (e = ws(e, "onChange")),
      0 < e.length &&
        ((n = new Ul("onChange", "change", null, n, a)),
        t.push({ event: n, listeners: e }));
  }
  var Mi = null,
    Di = null;
  function I0(t) {
    gm(t, 0);
  }
  function Ll(t) {
    var e = bi(t);
    if (pf(e)) return t;
  }
  function _f(t, e) {
    if (t === "change") return e;
  }
  var Bf = !1;
  if (tn) {
    var Nu;
    if (tn) {
      var Vu = "oninput" in document;
      if (!Vu) {
        var Uf = document.createElement("div");
        Uf.setAttribute("oninput", "return;"),
          (Vu = typeof Uf.oninput == "function");
      }
      Nu = Vu;
    } else Nu = !1;
    Bf = Nu && (!document.documentMode || 9 < document.documentMode);
  }
  function Hf() {
    Mi && (Mi.detachEvent("onpropertychange", Lf), (Di = Mi = null));
  }
  function Lf(t) {
    if (t.propertyName === "value" && Ll(Di)) {
      var e = [];
      Vf(e, Di, t, Eu(t)), xf(I0, e);
    }
  }
  function tv(t, e, n) {
    t === "focusin"
      ? (Hf(), (Mi = e), (Di = n), Mi.attachEvent("onpropertychange", Lf))
      : t === "focusout" && Hf();
  }
  function ev(t) {
    if (t === "selectionchange" || t === "keyup" || t === "keydown")
      return Ll(Di);
  }
  function nv(t, e) {
    if (t === "click") return Ll(e);
  }
  function av(t, e) {
    if (t === "input" || t === "change") return Ll(e);
  }
  function iv(t, e) {
    return (t === e && (t !== 0 || 1 / t === 1 / e)) || (t !== t && e !== e);
  }
  var Se = typeof Object.is == "function" ? Object.is : iv;
  function wi(t, e) {
    if (Se(t, e)) return !0;
    if (
      typeof t != "object" ||
      t === null ||
      typeof e != "object" ||
      e === null
    )
      return !1;
    var n = Object.keys(t),
      a = Object.keys(e);
    if (n.length !== a.length) return !1;
    for (a = 0; a < n.length; a++) {
      var s = n[a];
      if (!fu.call(e, s) || !Se(t[s], e[s])) return !1;
    }
    return !0;
  }
  function qf(t) {
    for (; t && t.firstChild; ) t = t.firstChild;
    return t;
  }
  function Yf(t, e) {
    var n = qf(t);
    t = 0;
    for (var a; n; ) {
      if (n.nodeType === 3) {
        if (((a = t + n.textContent.length), t <= e && a >= e))
          return { node: n, offset: e - t };
        t = a;
      }
      t: {
        for (; n; ) {
          if (n.nextSibling) {
            n = n.nextSibling;
            break t;
          }
          n = n.parentNode;
        }
        n = void 0;
      }
      n = qf(n);
    }
  }
  function Gf(t, e) {
    return t && e
      ? t === e
        ? !0
        : t && t.nodeType === 3
        ? !1
        : e && e.nodeType === 3
        ? Gf(t, e.parentNode)
        : "contains" in t
        ? t.contains(e)
        : t.compareDocumentPosition
        ? !!(t.compareDocumentPosition(e) & 16)
        : !1
      : !1;
  }
  function Xf(t) {
    t =
      t != null &&
      t.ownerDocument != null &&
      t.ownerDocument.defaultView != null
        ? t.ownerDocument.defaultView
        : window;
    for (var e = Rl(t.document); e instanceof t.HTMLIFrameElement; ) {
      try {
        var n = typeof e.contentWindow.location.href == "string";
      } catch {
        n = !1;
      }
      if (n) t = e.contentWindow;
      else break;
      e = Rl(t.document);
    }
    return e;
  }
  function _u(t) {
    var e = t && t.nodeName && t.nodeName.toLowerCase();
    return (
      e &&
      ((e === "input" &&
        (t.type === "text" ||
          t.type === "search" ||
          t.type === "tel" ||
          t.type === "url" ||
          t.type === "password")) ||
        e === "textarea" ||
        t.contentEditable === "true")
    );
  }
  var lv = tn && "documentMode" in document && 11 >= document.documentMode,
    za = null,
    Bu = null,
    Ci = null,
    Uu = !1;
  function Zf(t, e, n) {
    var a =
      n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    Uu ||
      za == null ||
      za !== Rl(a) ||
      ((a = za),
      "selectionStart" in a && _u(a)
        ? (a = { start: a.selectionStart, end: a.selectionEnd })
        : ((a = (
            (a.ownerDocument && a.ownerDocument.defaultView) ||
            window
          ).getSelection()),
          (a = {
            anchorNode: a.anchorNode,
            anchorOffset: a.anchorOffset,
            focusNode: a.focusNode,
            focusOffset: a.focusOffset,
          })),
      (Ci && wi(Ci, a)) ||
        ((Ci = a),
        (a = ws(Bu, "onSelect")),
        0 < a.length &&
          ((e = new Ul("onSelect", "select", null, e, n)),
          t.push({ event: e, listeners: a }),
          (e.target = za))));
  }
  function $n(t, e) {
    var n = {};
    return (
      (n[t.toLowerCase()] = e.toLowerCase()),
      (n["Webkit" + t] = "webkit" + e),
      (n["Moz" + t] = "moz" + e),
      n
    );
  }
  var ja = {
      animationend: $n("Animation", "AnimationEnd"),
      animationiteration: $n("Animation", "AnimationIteration"),
      animationstart: $n("Animation", "AnimationStart"),
      transitionrun: $n("Transition", "TransitionRun"),
      transitionstart: $n("Transition", "TransitionStart"),
      transitioncancel: $n("Transition", "TransitionCancel"),
      transitionend: $n("Transition", "TransitionEnd"),
    },
    Hu = {},
    Qf = {};
  tn &&
    ((Qf = document.createElement("div").style),
    "AnimationEvent" in window ||
      (delete ja.animationend.animation,
      delete ja.animationiteration.animation,
      delete ja.animationstart.animation),
    "TransitionEvent" in window || delete ja.transitionend.transition);
  function In(t) {
    if (Hu[t]) return Hu[t];
    if (!ja[t]) return t;
    var e = ja[t],
      n;
    for (n in e) if (e.hasOwnProperty(n) && n in Qf) return (Hu[t] = e[n]);
    return t;
  }
  var Kf = In("animationend"),
    Jf = In("animationiteration"),
    kf = In("animationstart"),
    sv = In("transitionrun"),
    uv = In("transitionstart"),
    ov = In("transitioncancel"),
    Ff = In("transitionend"),
    Wf = new Map(),
    Lu =
      "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
        " "
      );
  Lu.push("scrollEnd");
  function Ye(t, e) {
    Wf.set(t, e), Wn(e, [t]);
  }
  var ql =
      typeof reportError == "function"
        ? reportError
        : function (t) {
            if (
              typeof window == "object" &&
              typeof window.ErrorEvent == "function"
            ) {
              var e = new window.ErrorEvent("error", {
                bubbles: !0,
                cancelable: !0,
                message:
                  typeof t == "object" &&
                  t !== null &&
                  typeof t.message == "string"
                    ? String(t.message)
                    : String(t),
                error: t,
              });
              if (!window.dispatchEvent(e)) return;
            } else if (
              typeof process == "object" &&
              typeof process.emit == "function"
            ) {
              process.emit("uncaughtException", t);
              return;
            }
            console.error(t);
          },
    je = [],
    Oa = 0,
    qu = 0;
  function Yl() {
    for (var t = Oa, e = (qu = Oa = 0); e < t; ) {
      var n = je[e];
      je[e++] = null;
      var a = je[e];
      je[e++] = null;
      var s = je[e];
      je[e++] = null;
      var o = je[e];
      if (((je[e++] = null), a !== null && s !== null)) {
        var f = a.pending;
        f === null ? (s.next = s) : ((s.next = f.next), (f.next = s)),
          (a.pending = s);
      }
      o !== 0 && Pf(n, s, o);
    }
  }
  function Gl(t, e, n, a) {
    (je[Oa++] = t),
      (je[Oa++] = e),
      (je[Oa++] = n),
      (je[Oa++] = a),
      (qu |= a),
      (t.lanes |= a),
      (t = t.alternate),
      t !== null && (t.lanes |= a);
  }
  function Yu(t, e, n, a) {
    return Gl(t, e, n, a), Xl(t);
  }
  function ta(t, e) {
    return Gl(t, null, null, e), Xl(t);
  }
  function Pf(t, e, n) {
    t.lanes |= n;
    var a = t.alternate;
    a !== null && (a.lanes |= n);
    for (var s = !1, o = t.return; o !== null; )
      (o.childLanes |= n),
        (a = o.alternate),
        a !== null && (a.childLanes |= n),
        o.tag === 22 &&
          ((t = o.stateNode), t === null || t._visibility & 1 || (s = !0)),
        (t = o),
        (o = o.return);
    return t.tag === 3
      ? ((o = t.stateNode),
        s &&
          e !== null &&
          ((s = 31 - be(n)),
          (t = o.hiddenUpdates),
          (a = t[s]),
          a === null ? (t[s] = [e]) : a.push(e),
          (e.lane = n | 536870912)),
        o)
      : null;
  }
  function Xl(t) {
    if (50 < Wi) throw ((Wi = 0), (Po = null), Error(r(185)));
    for (var e = t.return; e !== null; ) (t = e), (e = t.return);
    return t.tag === 3 ? t.stateNode : null;
  }
  var Ra = {};
  function rv(t, e, n, a) {
    (this.tag = t),
      (this.key = n),
      (this.sibling =
        this.child =
        this.return =
        this.stateNode =
        this.type =
        this.elementType =
          null),
      (this.index = 0),
      (this.refCleanup = this.ref = null),
      (this.pendingProps = e),
      (this.dependencies =
        this.memoizedState =
        this.updateQueue =
        this.memoizedProps =
          null),
      (this.mode = a),
      (this.subtreeFlags = this.flags = 0),
      (this.deletions = null),
      (this.childLanes = this.lanes = 0),
      (this.alternate = null);
  }
  function Te(t, e, n, a) {
    return new rv(t, e, n, a);
  }
  function Gu(t) {
    return (t = t.prototype), !(!t || !t.isReactComponent);
  }
  function en(t, e) {
    var n = t.alternate;
    return (
      n === null
        ? ((n = Te(t.tag, e, t.key, t.mode)),
          (n.elementType = t.elementType),
          (n.type = t.type),
          (n.stateNode = t.stateNode),
          (n.alternate = t),
          (t.alternate = n))
        : ((n.pendingProps = e),
          (n.type = t.type),
          (n.flags = 0),
          (n.subtreeFlags = 0),
          (n.deletions = null)),
      (n.flags = t.flags & 65011712),
      (n.childLanes = t.childLanes),
      (n.lanes = t.lanes),
      (n.child = t.child),
      (n.memoizedProps = t.memoizedProps),
      (n.memoizedState = t.memoizedState),
      (n.updateQueue = t.updateQueue),
      (e = t.dependencies),
      (n.dependencies =
        e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }),
      (n.sibling = t.sibling),
      (n.index = t.index),
      (n.ref = t.ref),
      (n.refCleanup = t.refCleanup),
      n
    );
  }
  function $f(t, e) {
    t.flags &= 65011714;
    var n = t.alternate;
    return (
      n === null
        ? ((t.childLanes = 0),
          (t.lanes = e),
          (t.child = null),
          (t.subtreeFlags = 0),
          (t.memoizedProps = null),
          (t.memoizedState = null),
          (t.updateQueue = null),
          (t.dependencies = null),
          (t.stateNode = null))
        : ((t.childLanes = n.childLanes),
          (t.lanes = n.lanes),
          (t.child = n.child),
          (t.subtreeFlags = 0),
          (t.deletions = null),
          (t.memoizedProps = n.memoizedProps),
          (t.memoizedState = n.memoizedState),
          (t.updateQueue = n.updateQueue),
          (t.type = n.type),
          (e = n.dependencies),
          (t.dependencies =
            e === null
              ? null
              : { lanes: e.lanes, firstContext: e.firstContext })),
      t
    );
  }
  function Zl(t, e, n, a, s, o) {
    var f = 0;
    if (((a = t), typeof t == "function")) Gu(t) && (f = 1);
    else if (typeof t == "string")
      f = m1(t, n, K.current)
        ? 26
        : t === "html" || t === "head" || t === "body"
        ? 27
        : 5;
    else
      t: switch (t) {
        case vt:
          return (t = Te(31, n, e, s)), (t.elementType = vt), (t.lanes = o), t;
        case H:
          return ea(n.children, s, o, e);
        case Z:
          (f = 8), (s |= 24);
          break;
        case L:
          return (
            (t = Te(12, n, e, s | 2)), (t.elementType = L), (t.lanes = o), t
          );
        case F:
          return (t = Te(13, n, e, s)), (t.elementType = F), (t.lanes = o), t;
        case $:
          return (t = Te(19, n, e, s)), (t.elementType = $), (t.lanes = o), t;
        default:
          if (typeof t == "object" && t !== null)
            switch (t.$$typeof) {
              case q:
                f = 10;
                break t;
              case G:
                f = 9;
                break t;
              case tt:
                f = 11;
                break t;
              case X:
                f = 14;
                break t;
              case W:
                (f = 16), (a = null);
                break t;
            }
          (f = 29),
            (n = Error(r(130, t === null ? "null" : typeof t, ""))),
            (a = null);
      }
    return (
      (e = Te(f, n, e, s)), (e.elementType = t), (e.type = a), (e.lanes = o), e
    );
  }
  function ea(t, e, n, a) {
    return (t = Te(7, t, a, e)), (t.lanes = n), t;
  }
  function Xu(t, e, n) {
    return (t = Te(6, t, null, e)), (t.lanes = n), t;
  }
  function If(t) {
    var e = Te(18, null, null, 0);
    return (e.stateNode = t), e;
  }
  function Zu(t, e, n) {
    return (
      (e = Te(4, t.children !== null ? t.children : [], t.key, e)),
      (e.lanes = n),
      (e.stateNode = {
        containerInfo: t.containerInfo,
        pendingChildren: null,
        implementation: t.implementation,
      }),
      e
    );
  }
  var th = new WeakMap();
  function Oe(t, e) {
    if (typeof t == "object" && t !== null) {
      var n = th.get(t);
      return n !== void 0
        ? n
        : ((e = { value: t, source: e, stack: $c(e) }), th.set(t, e), e);
    }
    return { value: t, source: e, stack: $c(e) };
  }
  var Na = [],
    Va = 0,
    Ql = null,
    zi = 0,
    Re = [],
    Ne = 0,
    xn = null,
    Ke = 1,
    Je = "";
  function nn(t, e) {
    (Na[Va++] = zi), (Na[Va++] = Ql), (Ql = t), (zi = e);
  }
  function eh(t, e, n) {
    (Re[Ne++] = Ke), (Re[Ne++] = Je), (Re[Ne++] = xn), (xn = t);
    var a = Ke;
    t = Je;
    var s = 32 - be(a) - 1;
    (a &= ~(1 << s)), (n += 1);
    var o = 32 - be(e) + s;
    if (30 < o) {
      var f = s - (s % 5);
      (o = (a & ((1 << f) - 1)).toString(32)),
        (a >>= f),
        (s -= f),
        (Ke = (1 << (32 - be(e) + s)) | (n << s) | a),
        (Je = o + t);
    } else (Ke = (1 << o) | (n << s) | a), (Je = t);
  }
  function Qu(t) {
    t.return !== null && (nn(t, 1), eh(t, 1, 0));
  }
  function Ku(t) {
    for (; t === Ql; )
      (Ql = Na[--Va]), (Na[Va] = null), (zi = Na[--Va]), (Na[Va] = null);
    for (; t === xn; )
      (xn = Re[--Ne]),
        (Re[Ne] = null),
        (Je = Re[--Ne]),
        (Re[Ne] = null),
        (Ke = Re[--Ne]),
        (Re[Ne] = null);
  }
  function nh(t, e) {
    (Re[Ne++] = Ke),
      (Re[Ne++] = Je),
      (Re[Ne++] = xn),
      (Ke = e.id),
      (Je = e.overflow),
      (xn = t);
  }
  var $t = null,
    Ct = null,
    mt = !1,
    An = null,
    Ve = !1,
    Ju = Error(r(519));
  function En(t) {
    var e = Error(
      r(
        418,
        1 < arguments.length && arguments[1] !== void 0 && arguments[1]
          ? "text"
          : "HTML",
        ""
      )
    );
    throw (ji(Oe(e, t)), Ju);
  }
  function ah(t) {
    var e = t.stateNode,
      n = t.type,
      a = t.memoizedProps;
    switch (((e[Pt] = t), (e[re] = a), n)) {
      case "dialog":
        ft("cancel", e), ft("close", e);
        break;
      case "iframe":
      case "object":
      case "embed":
        ft("load", e);
        break;
      case "video":
      case "audio":
        for (n = 0; n < $i.length; n++) ft($i[n], e);
        break;
      case "source":
        ft("error", e);
        break;
      case "img":
      case "image":
      case "link":
        ft("error", e), ft("load", e);
        break;
      case "details":
        ft("toggle", e);
        break;
      case "input":
        ft("invalid", e),
          gf(
            e,
            a.value,
            a.defaultValue,
            a.checked,
            a.defaultChecked,
            a.type,
            a.name,
            !0
          );
        break;
      case "select":
        ft("invalid", e);
        break;
      case "textarea":
        ft("invalid", e), vf(e, a.value, a.defaultValue, a.children);
    }
    (n = a.children),
      (typeof n != "string" && typeof n != "number" && typeof n != "bigint") ||
      e.textContent === "" + n ||
      a.suppressHydrationWarning === !0 ||
      Sm(e.textContent, n)
        ? (a.popover != null && (ft("beforetoggle", e), ft("toggle", e)),
          a.onScroll != null && ft("scroll", e),
          a.onScrollEnd != null && ft("scrollend", e),
          a.onClick != null && (e.onclick = Ie),
          (e = !0))
        : (e = !1),
      e || En(t, !0);
  }
  function ih(t) {
    for ($t = t.return; $t; )
      switch ($t.tag) {
        case 5:
        case 31:
        case 13:
          Ve = !1;
          return;
        case 27:
        case 3:
          Ve = !0;
          return;
        default:
          $t = $t.return;
      }
  }
  function _a(t) {
    if (t !== $t) return !1;
    if (!mt) return ih(t), (mt = !0), !1;
    var e = t.tag,
      n;
    if (
      ((n = e !== 3 && e !== 27) &&
        ((n = e === 5) &&
          ((n = t.type),
          (n =
            !(n !== "form" && n !== "button") || hr(t.type, t.memoizedProps))),
        (n = !n)),
      n && Ct && En(t),
      ih(t),
      e === 13)
    ) {
      if (((t = t.memoizedState), (t = t !== null ? t.dehydrated : null), !t))
        throw Error(r(317));
      Ct = zm(t);
    } else if (e === 31) {
      if (((t = t.memoizedState), (t = t !== null ? t.dehydrated : null), !t))
        throw Error(r(317));
      Ct = zm(t);
    } else
      e === 27
        ? ((e = Ct), Hn(t.type) ? ((t = yr), (yr = null), (Ct = t)) : (Ct = e))
        : (Ct = $t ? Be(t.stateNode.nextSibling) : null);
    return !0;
  }
  function na() {
    (Ct = $t = null), (mt = !1);
  }
  function ku() {
    var t = An;
    return (
      t !== null &&
        (me === null ? (me = t) : me.push.apply(me, t), (An = null)),
      t
    );
  }
  function ji(t) {
    An === null ? (An = [t]) : An.push(t);
  }
  var Fu = A(null),
    aa = null,
    an = null;
  function Mn(t, e, n) {
    Y(Fu, e._currentValue), (e._currentValue = n);
  }
  function ln(t) {
    (t._currentValue = Fu.current), _(Fu);
  }
  function Wu(t, e, n) {
    for (; t !== null; ) {
      var a = t.alternate;
      if (
        ((t.childLanes & e) !== e
          ? ((t.childLanes |= e), a !== null && (a.childLanes |= e))
          : a !== null && (a.childLanes & e) !== e && (a.childLanes |= e),
        t === n)
      )
        break;
      t = t.return;
    }
  }
  function Pu(t, e, n, a) {
    var s = t.child;
    for (s !== null && (s.return = t); s !== null; ) {
      var o = s.dependencies;
      if (o !== null) {
        var f = s.child;
        o = o.firstContext;
        t: for (; o !== null; ) {
          var p = o;
          o = s;
          for (var S = 0; S < e.length; S++)
            if (p.context === e[S]) {
              (o.lanes |= n),
                (p = o.alternate),
                p !== null && (p.lanes |= n),
                Wu(o.return, n, t),
                a || (f = null);
              break t;
            }
          o = p.next;
        }
      } else if (s.tag === 18) {
        if (((f = s.return), f === null)) throw Error(r(341));
        (f.lanes |= n),
          (o = f.alternate),
          o !== null && (o.lanes |= n),
          Wu(f, n, t),
          (f = null);
      } else f = s.child;
      if (f !== null) f.return = s;
      else
        for (f = s; f !== null; ) {
          if (f === t) {
            f = null;
            break;
          }
          if (((s = f.sibling), s !== null)) {
            (s.return = f.return), (f = s);
            break;
          }
          f = f.return;
        }
      s = f;
    }
  }
  function Ba(t, e, n, a) {
    t = null;
    for (var s = e, o = !1; s !== null; ) {
      if (!o) {
        if ((s.flags & 524288) !== 0) o = !0;
        else if ((s.flags & 262144) !== 0) break;
      }
      if (s.tag === 10) {
        var f = s.alternate;
        if (f === null) throw Error(r(387));
        if (((f = f.memoizedProps), f !== null)) {
          var p = s.type;
          Se(s.pendingProps.value, f.value) ||
            (t !== null ? t.push(p) : (t = [p]));
        }
      } else if (s === pt.current) {
        if (((f = s.alternate), f === null)) throw Error(r(387));
        f.memoizedState.memoizedState !== s.memoizedState.memoizedState &&
          (t !== null ? t.push(al) : (t = [al]));
      }
      s = s.return;
    }
    t !== null && Pu(e, t, n, a), (e.flags |= 262144);
  }
  function Kl(t) {
    for (t = t.firstContext; t !== null; ) {
      if (!Se(t.context._currentValue, t.memoizedValue)) return !0;
      t = t.next;
    }
    return !1;
  }
  function ia(t) {
    (aa = t),
      (an = null),
      (t = t.dependencies),
      t !== null && (t.firstContext = null);
  }
  function It(t) {
    return lh(aa, t);
  }
  function Jl(t, e) {
    return aa === null && ia(t), lh(t, e);
  }
  function lh(t, e) {
    var n = e._currentValue;
    if (((e = { context: e, memoizedValue: n, next: null }), an === null)) {
      if (t === null) throw Error(r(308));
      (an = e),
        (t.dependencies = { lanes: 0, firstContext: e }),
        (t.flags |= 524288);
    } else an = an.next = e;
    return n;
  }
  var cv =
      typeof AbortController < "u"
        ? AbortController
        : function () {
            var t = [],
              e = (this.signal = {
                aborted: !1,
                addEventListener: function (n, a) {
                  t.push(a);
                },
              });
            this.abort = function () {
              (e.aborted = !0),
                t.forEach(function (n) {
                  return n();
                });
            };
          },
    fv = i.unstable_scheduleCallback,
    hv = i.unstable_NormalPriority,
    Gt = {
      $$typeof: q,
      Consumer: null,
      Provider: null,
      _currentValue: null,
      _currentValue2: null,
      _threadCount: 0,
    };
  function $u() {
    return { controller: new cv(), data: new Map(), refCount: 0 };
  }
  function Oi(t) {
    t.refCount--,
      t.refCount === 0 &&
        fv(hv, function () {
          t.controller.abort();
        });
  }
  var Ri = null,
    Iu = 0,
    Ua = 0,
    Ha = null;
  function dv(t, e) {
    if (Ri === null) {
      var n = (Ri = []);
      (Iu = 0),
        (Ua = ar()),
        (Ha = {
          status: "pending",
          value: void 0,
          then: function (a) {
            n.push(a);
          },
        });
    }
    return Iu++, e.then(sh, sh), e;
  }
  function sh() {
    if (--Iu === 0 && Ri !== null) {
      Ha !== null && (Ha.status = "fulfilled");
      var t = Ri;
      (Ri = null), (Ua = 0), (Ha = null);
      for (var e = 0; e < t.length; e++) (0, t[e])();
    }
  }
  function mv(t, e) {
    var n = [],
      a = {
        status: "pending",
        value: null,
        reason: null,
        then: function (s) {
          n.push(s);
        },
      };
    return (
      t.then(
        function () {
          (a.status = "fulfilled"), (a.value = e);
          for (var s = 0; s < n.length; s++) (0, n[s])(e);
        },
        function (s) {
          for (a.status = "rejected", a.reason = s, s = 0; s < n.length; s++)
            (0, n[s])(void 0);
        }
      ),
      a
    );
  }
  var uh = O.S;
  O.S = function (t, e) {
    (Zd = ye()),
      typeof e == "object" &&
        e !== null &&
        typeof e.then == "function" &&
        dv(t, e),
      uh !== null && uh(t, e);
  };
  var la = A(null);
  function to() {
    var t = la.current;
    return t !== null ? t : wt.pooledCache;
  }
  function kl(t, e) {
    e === null ? Y(la, la.current) : Y(la, e.pool);
  }
  function oh() {
    var t = to();
    return t === null ? null : { parent: Gt._currentValue, pool: t };
  }
  var La = Error(r(460)),
    eo = Error(r(474)),
    Fl = Error(r(542)),
    Wl = { then: function () {} };
  function rh(t) {
    return (t = t.status), t === "fulfilled" || t === "rejected";
  }
  function ch(t, e, n) {
    switch (
      ((n = t[n]),
      n === void 0 ? t.push(e) : n !== e && (e.then(Ie, Ie), (e = n)),
      e.status)
    ) {
      case "fulfilled":
        return e.value;
      case "rejected":
        throw ((t = e.reason), hh(t), t);
      default:
        if (typeof e.status == "string") e.then(Ie, Ie);
        else {
          if (((t = wt), t !== null && 100 < t.shellSuspendCounter))
            throw Error(r(482));
          (t = e),
            (t.status = "pending"),
            t.then(
              function (a) {
                if (e.status === "pending") {
                  var s = e;
                  (s.status = "fulfilled"), (s.value = a);
                }
              },
              function (a) {
                if (e.status === "pending") {
                  var s = e;
                  (s.status = "rejected"), (s.reason = a);
                }
              }
            );
        }
        switch (e.status) {
          case "fulfilled":
            return e.value;
          case "rejected":
            throw ((t = e.reason), hh(t), t);
        }
        throw ((ua = e), La);
    }
  }
  function sa(t) {
    try {
      var e = t._init;
      return e(t._payload);
    } catch (n) {
      throw n !== null && typeof n == "object" && typeof n.then == "function"
        ? ((ua = n), La)
        : n;
    }
  }
  var ua = null;
  function fh() {
    if (ua === null) throw Error(r(459));
    var t = ua;
    return (ua = null), t;
  }
  function hh(t) {
    if (t === La || t === Fl) throw Error(r(483));
  }
  var qa = null,
    Ni = 0;
  function Pl(t) {
    var e = Ni;
    return (Ni += 1), qa === null && (qa = []), ch(qa, t, e);
  }
  function Vi(t, e) {
    (e = e.props.ref), (t.ref = e !== void 0 ? e : null);
  }
  function $l(t, e) {
    throw e.$$typeof === T
      ? Error(r(525))
      : ((t = Object.prototype.toString.call(e)),
        Error(
          r(
            31,
            t === "[object Object]"
              ? "object with keys {" + Object.keys(e).join(", ") + "}"
              : t
          )
        ));
  }
  function dh(t) {
    function e(M, x) {
      if (t) {
        var D = M.deletions;
        D === null ? ((M.deletions = [x]), (M.flags |= 16)) : D.push(x);
      }
    }
    function n(M, x) {
      if (!t) return null;
      for (; x !== null; ) e(M, x), (x = x.sibling);
      return null;
    }
    function a(M) {
      for (var x = new Map(); M !== null; )
        M.key !== null ? x.set(M.key, M) : x.set(M.index, M), (M = M.sibling);
      return x;
    }
    function s(M, x) {
      return (M = en(M, x)), (M.index = 0), (M.sibling = null), M;
    }
    function o(M, x, D) {
      return (
        (M.index = D),
        t
          ? ((D = M.alternate),
            D !== null
              ? ((D = D.index), D < x ? ((M.flags |= 67108866), x) : D)
              : ((M.flags |= 67108866), x))
          : ((M.flags |= 1048576), x)
      );
    }
    function f(M) {
      return t && M.alternate === null && (M.flags |= 67108866), M;
    }
    function p(M, x, D, N) {
      return x === null || x.tag !== 6
        ? ((x = Xu(D, M.mode, N)), (x.return = M), x)
        : ((x = s(x, D)), (x.return = M), x);
    }
    function S(M, x, D, N) {
      var I = D.type;
      return I === H
        ? j(M, x, D.props.children, N, D.key)
        : x !== null &&
          (x.elementType === I ||
            (typeof I == "object" &&
              I !== null &&
              I.$$typeof === W &&
              sa(I) === x.type))
        ? ((x = s(x, D.props)), Vi(x, D), (x.return = M), x)
        : ((x = Zl(D.type, D.key, D.props, null, M.mode, N)),
          Vi(x, D),
          (x.return = M),
          x);
    }
    function w(M, x, D, N) {
      return x === null ||
        x.tag !== 4 ||
        x.stateNode.containerInfo !== D.containerInfo ||
        x.stateNode.implementation !== D.implementation
        ? ((x = Zu(D, M.mode, N)), (x.return = M), x)
        : ((x = s(x, D.children || [])), (x.return = M), x);
    }
    function j(M, x, D, N, I) {
      return x === null || x.tag !== 7
        ? ((x = ea(D, M.mode, N, I)), (x.return = M), x)
        : ((x = s(x, D)), (x.return = M), x);
    }
    function V(M, x, D) {
      if (
        (typeof x == "string" && x !== "") ||
        typeof x == "number" ||
        typeof x == "bigint"
      )
        return (x = Xu("" + x, M.mode, D)), (x.return = M), x;
      if (typeof x == "object" && x !== null) {
        switch (x.$$typeof) {
          case R:
            return (
              (D = Zl(x.type, x.key, x.props, null, M.mode, D)),
              Vi(D, x),
              (D.return = M),
              D
            );
          case U:
            return (x = Zu(x, M.mode, D)), (x.return = M), x;
          case W:
            return (x = sa(x)), V(M, x, D);
        }
        if (ie(x) || Vt(x))
          return (x = ea(x, M.mode, D, null)), (x.return = M), x;
        if (typeof x.then == "function") return V(M, Pl(x), D);
        if (x.$$typeof === q) return V(M, Jl(M, x), D);
        $l(M, x);
      }
      return null;
    }
    function C(M, x, D, N) {
      var I = x !== null ? x.key : null;
      if (
        (typeof D == "string" && D !== "") ||
        typeof D == "number" ||
        typeof D == "bigint"
      )
        return I !== null ? null : p(M, x, "" + D, N);
      if (typeof D == "object" && D !== null) {
        switch (D.$$typeof) {
          case R:
            return D.key === I ? S(M, x, D, N) : null;
          case U:
            return D.key === I ? w(M, x, D, N) : null;
          case W:
            return (D = sa(D)), C(M, x, D, N);
        }
        if (ie(D) || Vt(D)) return I !== null ? null : j(M, x, D, N, null);
        if (typeof D.then == "function") return C(M, x, Pl(D), N);
        if (D.$$typeof === q) return C(M, x, Jl(M, D), N);
        $l(M, D);
      }
      return null;
    }
    function z(M, x, D, N, I) {
      if (
        (typeof N == "string" && N !== "") ||
        typeof N == "number" ||
        typeof N == "bigint"
      )
        return (M = M.get(D) || null), p(x, M, "" + N, I);
      if (typeof N == "object" && N !== null) {
        switch (N.$$typeof) {
          case R:
            return (
              (M = M.get(N.key === null ? D : N.key) || null), S(x, M, N, I)
            );
          case U:
            return (
              (M = M.get(N.key === null ? D : N.key) || null), w(x, M, N, I)
            );
          case W:
            return (N = sa(N)), z(M, x, D, N, I);
        }
        if (ie(N) || Vt(N)) return (M = M.get(D) || null), j(x, M, N, I, null);
        if (typeof N.then == "function") return z(M, x, D, Pl(N), I);
        if (N.$$typeof === q) return z(M, x, D, Jl(x, N), I);
        $l(x, N);
      }
      return null;
    }
    function J(M, x, D, N) {
      for (
        var I = null, gt = null, P = x, ot = (x = 0), dt = null;
        P !== null && ot < D.length;
        ot++
      ) {
        P.index > ot ? ((dt = P), (P = null)) : (dt = P.sibling);
        var yt = C(M, P, D[ot], N);
        if (yt === null) {
          P === null && (P = dt);
          break;
        }
        t && P && yt.alternate === null && e(M, P),
          (x = o(yt, x, ot)),
          gt === null ? (I = yt) : (gt.sibling = yt),
          (gt = yt),
          (P = dt);
      }
      if (ot === D.length) return n(M, P), mt && nn(M, ot), I;
      if (P === null) {
        for (; ot < D.length; ot++)
          (P = V(M, D[ot], N)),
            P !== null &&
              ((x = o(P, x, ot)),
              gt === null ? (I = P) : (gt.sibling = P),
              (gt = P));
        return mt && nn(M, ot), I;
      }
      for (P = a(P); ot < D.length; ot++)
        (dt = z(P, M, ot, D[ot], N)),
          dt !== null &&
            (t &&
              dt.alternate !== null &&
              P.delete(dt.key === null ? ot : dt.key),
            (x = o(dt, x, ot)),
            gt === null ? (I = dt) : (gt.sibling = dt),
            (gt = dt));
      return (
        t &&
          P.forEach(function (Xn) {
            return e(M, Xn);
          }),
        mt && nn(M, ot),
        I
      );
    }
    function nt(M, x, D, N) {
      if (D == null) throw Error(r(151));
      for (
        var I = null, gt = null, P = x, ot = (x = 0), dt = null, yt = D.next();
        P !== null && !yt.done;
        ot++, yt = D.next()
      ) {
        P.index > ot ? ((dt = P), (P = null)) : (dt = P.sibling);
        var Xn = C(M, P, yt.value, N);
        if (Xn === null) {
          P === null && (P = dt);
          break;
        }
        t && P && Xn.alternate === null && e(M, P),
          (x = o(Xn, x, ot)),
          gt === null ? (I = Xn) : (gt.sibling = Xn),
          (gt = Xn),
          (P = dt);
      }
      if (yt.done) return n(M, P), mt && nn(M, ot), I;
      if (P === null) {
        for (; !yt.done; ot++, yt = D.next())
          (yt = V(M, yt.value, N)),
            yt !== null &&
              ((x = o(yt, x, ot)),
              gt === null ? (I = yt) : (gt.sibling = yt),
              (gt = yt));
        return mt && nn(M, ot), I;
      }
      for (P = a(P); !yt.done; ot++, yt = D.next())
        (yt = z(P, M, ot, yt.value, N)),
          yt !== null &&
            (t &&
              yt.alternate !== null &&
              P.delete(yt.key === null ? ot : yt.key),
            (x = o(yt, x, ot)),
            gt === null ? (I = yt) : (gt.sibling = yt),
            (gt = yt));
      return (
        t &&
          P.forEach(function (M1) {
            return e(M, M1);
          }),
        mt && nn(M, ot),
        I
      );
    }
    function Mt(M, x, D, N) {
      if (
        (typeof D == "object" &&
          D !== null &&
          D.type === H &&
          D.key === null &&
          (D = D.props.children),
        typeof D == "object" && D !== null)
      ) {
        switch (D.$$typeof) {
          case R:
            t: {
              for (var I = D.key; x !== null; ) {
                if (x.key === I) {
                  if (((I = D.type), I === H)) {
                    if (x.tag === 7) {
                      n(M, x.sibling),
                        (N = s(x, D.props.children)),
                        (N.return = M),
                        (M = N);
                      break t;
                    }
                  } else if (
                    x.elementType === I ||
                    (typeof I == "object" &&
                      I !== null &&
                      I.$$typeof === W &&
                      sa(I) === x.type)
                  ) {
                    n(M, x.sibling),
                      (N = s(x, D.props)),
                      Vi(N, D),
                      (N.return = M),
                      (M = N);
                    break t;
                  }
                  n(M, x);
                  break;
                } else e(M, x);
                x = x.sibling;
              }
              D.type === H
                ? ((N = ea(D.props.children, M.mode, N, D.key)),
                  (N.return = M),
                  (M = N))
                : ((N = Zl(D.type, D.key, D.props, null, M.mode, N)),
                  Vi(N, D),
                  (N.return = M),
                  (M = N));
            }
            return f(M);
          case U:
            t: {
              for (I = D.key; x !== null; ) {
                if (x.key === I)
                  if (
                    x.tag === 4 &&
                    x.stateNode.containerInfo === D.containerInfo &&
                    x.stateNode.implementation === D.implementation
                  ) {
                    n(M, x.sibling),
                      (N = s(x, D.children || [])),
                      (N.return = M),
                      (M = N);
                    break t;
                  } else {
                    n(M, x);
                    break;
                  }
                else e(M, x);
                x = x.sibling;
              }
              (N = Zu(D, M.mode, N)), (N.return = M), (M = N);
            }
            return f(M);
          case W:
            return (D = sa(D)), Mt(M, x, D, N);
        }
        if (ie(D)) return J(M, x, D, N);
        if (Vt(D)) {
          if (((I = Vt(D)), typeof I != "function")) throw Error(r(150));
          return (D = I.call(D)), nt(M, x, D, N);
        }
        if (typeof D.then == "function") return Mt(M, x, Pl(D), N);
        if (D.$$typeof === q) return Mt(M, x, Jl(M, D), N);
        $l(M, D);
      }
      return (typeof D == "string" && D !== "") ||
        typeof D == "number" ||
        typeof D == "bigint"
        ? ((D = "" + D),
          x !== null && x.tag === 6
            ? (n(M, x.sibling), (N = s(x, D)), (N.return = M), (M = N))
            : (n(M, x), (N = Xu(D, M.mode, N)), (N.return = M), (M = N)),
          f(M))
        : n(M, x);
    }
    return function (M, x, D, N) {
      try {
        Ni = 0;
        var I = Mt(M, x, D, N);
        return (qa = null), I;
      } catch (P) {
        if (P === La || P === Fl) throw P;
        var gt = Te(29, P, null, M.mode);
        return (gt.lanes = N), (gt.return = M), gt;
      } finally {
      }
    };
  }
  var oa = dh(!0),
    mh = dh(!1),
    Dn = !1;
  function no(t) {
    t.updateQueue = {
      baseState: t.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null,
    };
  }
  function ao(t, e) {
    (t = t.updateQueue),
      e.updateQueue === t &&
        (e.updateQueue = {
          baseState: t.baseState,
          firstBaseUpdate: t.firstBaseUpdate,
          lastBaseUpdate: t.lastBaseUpdate,
          shared: t.shared,
          callbacks: null,
        });
  }
  function wn(t) {
    return { lane: t, tag: 0, payload: null, callback: null, next: null };
  }
  function Cn(t, e, n) {
    var a = t.updateQueue;
    if (a === null) return null;
    if (((a = a.shared), (bt & 2) !== 0)) {
      var s = a.pending;
      return (
        s === null ? (e.next = e) : ((e.next = s.next), (s.next = e)),
        (a.pending = e),
        (e = Xl(t)),
        Pf(t, null, n),
        e
      );
    }
    return Gl(t, a, e, n), Xl(t);
  }
  function _i(t, e, n) {
    if (
      ((e = e.updateQueue), e !== null && ((e = e.shared), (n & 4194048) !== 0))
    ) {
      var a = e.lanes;
      (a &= t.pendingLanes), (n |= a), (e.lanes = n), lf(t, n);
    }
  }
  function io(t, e) {
    var n = t.updateQueue,
      a = t.alternate;
    if (a !== null && ((a = a.updateQueue), n === a)) {
      var s = null,
        o = null;
      if (((n = n.firstBaseUpdate), n !== null)) {
        do {
          var f = {
            lane: n.lane,
            tag: n.tag,
            payload: n.payload,
            callback: null,
            next: null,
          };
          o === null ? (s = o = f) : (o = o.next = f), (n = n.next);
        } while (n !== null);
        o === null ? (s = o = e) : (o = o.next = e);
      } else s = o = e;
      (n = {
        baseState: a.baseState,
        firstBaseUpdate: s,
        lastBaseUpdate: o,
        shared: a.shared,
        callbacks: a.callbacks,
      }),
        (t.updateQueue = n);
      return;
    }
    (t = n.lastBaseUpdate),
      t === null ? (n.firstBaseUpdate = e) : (t.next = e),
      (n.lastBaseUpdate = e);
  }
  var lo = !1;
  function Bi() {
    if (lo) {
      var t = Ha;
      if (t !== null) throw t;
    }
  }
  function Ui(t, e, n, a) {
    lo = !1;
    var s = t.updateQueue;
    Dn = !1;
    var o = s.firstBaseUpdate,
      f = s.lastBaseUpdate,
      p = s.shared.pending;
    if (p !== null) {
      s.shared.pending = null;
      var S = p,
        w = S.next;
      (S.next = null), f === null ? (o = w) : (f.next = w), (f = S);
      var j = t.alternate;
      j !== null &&
        ((j = j.updateQueue),
        (p = j.lastBaseUpdate),
        p !== f &&
          (p === null ? (j.firstBaseUpdate = w) : (p.next = w),
          (j.lastBaseUpdate = S)));
    }
    if (o !== null) {
      var V = s.baseState;
      (f = 0), (j = w = S = null), (p = o);
      do {
        var C = p.lane & -536870913,
          z = C !== p.lane;
        if (z ? (ht & C) === C : (a & C) === C) {
          C !== 0 && C === Ua && (lo = !0),
            j !== null &&
              (j = j.next =
                {
                  lane: 0,
                  tag: p.tag,
                  payload: p.payload,
                  callback: null,
                  next: null,
                });
          t: {
            var J = t,
              nt = p;
            C = e;
            var Mt = n;
            switch (nt.tag) {
              case 1:
                if (((J = nt.payload), typeof J == "function")) {
                  V = J.call(Mt, V, C);
                  break t;
                }
                V = J;
                break t;
              case 3:
                J.flags = (J.flags & -65537) | 128;
              case 0:
                if (
                  ((J = nt.payload),
                  (C = typeof J == "function" ? J.call(Mt, V, C) : J),
                  C == null)
                )
                  break t;
                V = b({}, V, C);
                break t;
              case 2:
                Dn = !0;
            }
          }
          (C = p.callback),
            C !== null &&
              ((t.flags |= 64),
              z && (t.flags |= 8192),
              (z = s.callbacks),
              z === null ? (s.callbacks = [C]) : z.push(C));
        } else
          (z = {
            lane: C,
            tag: p.tag,
            payload: p.payload,
            callback: p.callback,
            next: null,
          }),
            j === null ? ((w = j = z), (S = V)) : (j = j.next = z),
            (f |= C);
        if (((p = p.next), p === null)) {
          if (((p = s.shared.pending), p === null)) break;
          (z = p),
            (p = z.next),
            (z.next = null),
            (s.lastBaseUpdate = z),
            (s.shared.pending = null);
        }
      } while (!0);
      j === null && (S = V),
        (s.baseState = S),
        (s.firstBaseUpdate = w),
        (s.lastBaseUpdate = j),
        o === null && (s.shared.lanes = 0),
        (Nn |= f),
        (t.lanes = f),
        (t.memoizedState = V);
    }
  }
  function ph(t, e) {
    if (typeof t != "function") throw Error(r(191, t));
    t.call(e);
  }
  function gh(t, e) {
    var n = t.callbacks;
    if (n !== null)
      for (t.callbacks = null, t = 0; t < n.length; t++) ph(n[t], e);
  }
  var Ya = A(null),
    Il = A(0);
  function yh(t, e) {
    (t = mn), Y(Il, t), Y(Ya, e), (mn = t | e.baseLanes);
  }
  function so() {
    Y(Il, mn), Y(Ya, Ya.current);
  }
  function uo() {
    (mn = Il.current), _(Ya), _(Il);
  }
  var xe = A(null),
    _e = null;
  function zn(t) {
    var e = t.alternate;
    Y(qt, qt.current & 1),
      Y(xe, t),
      _e === null &&
        (e === null || Ya.current !== null || e.memoizedState !== null) &&
        (_e = t);
  }
  function oo(t) {
    Y(qt, qt.current), Y(xe, t), _e === null && (_e = t);
  }
  function vh(t) {
    t.tag === 22
      ? (Y(qt, qt.current), Y(xe, t), _e === null && (_e = t))
      : jn();
  }
  function jn() {
    Y(qt, qt.current), Y(xe, xe.current);
  }
  function Ae(t) {
    _(xe), _e === t && (_e = null), _(qt);
  }
  var qt = A(0);
  function ts(t) {
    for (var e = t; e !== null; ) {
      if (e.tag === 13) {
        var n = e.memoizedState;
        if (n !== null && ((n = n.dehydrated), n === null || pr(n) || gr(n)))
          return e;
      } else if (
        e.tag === 19 &&
        (e.memoizedProps.revealOrder === "forwards" ||
          e.memoizedProps.revealOrder === "backwards" ||
          e.memoizedProps.revealOrder === "unstable_legacy-backwards" ||
          e.memoizedProps.revealOrder === "together")
      ) {
        if ((e.flags & 128) !== 0) return e;
      } else if (e.child !== null) {
        (e.child.return = e), (e = e.child);
        continue;
      }
      if (e === t) break;
      for (; e.sibling === null; ) {
        if (e.return === null || e.return === t) return null;
        e = e.return;
      }
      (e.sibling.return = e.return), (e = e.sibling);
    }
    return null;
  }
  var sn = 0,
    ut = null,
    At = null,
    Xt = null,
    es = !1,
    Ga = !1,
    ra = !1,
    ns = 0,
    Hi = 0,
    Xa = null,
    pv = 0;
  function _t() {
    throw Error(r(321));
  }
  function ro(t, e) {
    if (e === null) return !1;
    for (var n = 0; n < e.length && n < t.length; n++)
      if (!Se(t[n], e[n])) return !1;
    return !0;
  }
  function co(t, e, n, a, s, o) {
    return (
      (sn = o),
      (ut = e),
      (e.memoizedState = null),
      (e.updateQueue = null),
      (e.lanes = 0),
      (O.H = t === null || t.memoizedState === null ? ed : Do),
      (ra = !1),
      (o = n(a, s)),
      (ra = !1),
      Ga && (o = Sh(e, n, a, s)),
      bh(t),
      o
    );
  }
  function bh(t) {
    O.H = Yi;
    var e = At !== null && At.next !== null;
    if (((sn = 0), (Xt = At = ut = null), (es = !1), (Hi = 0), (Xa = null), e))
      throw Error(r(300));
    t === null ||
      Zt ||
      ((t = t.dependencies), t !== null && Kl(t) && (Zt = !0));
  }
  function Sh(t, e, n, a) {
    ut = t;
    var s = 0;
    do {
      if ((Ga && (Xa = null), (Hi = 0), (Ga = !1), 25 <= s))
        throw Error(r(301));
      if (((s += 1), (Xt = At = null), t.updateQueue != null)) {
        var o = t.updateQueue;
        (o.lastEffect = null),
          (o.events = null),
          (o.stores = null),
          o.memoCache != null && (o.memoCache.index = 0);
      }
      (O.H = nd), (o = e(n, a));
    } while (Ga);
    return o;
  }
  function gv() {
    var t = O.H,
      e = t.useState()[0];
    return (
      (e = typeof e.then == "function" ? Li(e) : e),
      (t = t.useState()[0]),
      (At !== null ? At.memoizedState : null) !== t && (ut.flags |= 1024),
      e
    );
  }
  function fo() {
    var t = ns !== 0;
    return (ns = 0), t;
  }
  function ho(t, e, n) {
    (e.updateQueue = t.updateQueue), (e.flags &= -2053), (t.lanes &= ~n);
  }
  function mo(t) {
    if (es) {
      for (t = t.memoizedState; t !== null; ) {
        var e = t.queue;
        e !== null && (e.pending = null), (t = t.next);
      }
      es = !1;
    }
    (sn = 0), (Xt = At = ut = null), (Ga = !1), (Hi = ns = 0), (Xa = null);
  }
  function ue() {
    var t = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null,
    };
    return Xt === null ? (ut.memoizedState = Xt = t) : (Xt = Xt.next = t), Xt;
  }
  function Yt() {
    if (At === null) {
      var t = ut.alternate;
      t = t !== null ? t.memoizedState : null;
    } else t = At.next;
    var e = Xt === null ? ut.memoizedState : Xt.next;
    if (e !== null) (Xt = e), (At = t);
    else {
      if (t === null)
        throw ut.alternate === null ? Error(r(467)) : Error(r(310));
      (At = t),
        (t = {
          memoizedState: At.memoizedState,
          baseState: At.baseState,
          baseQueue: At.baseQueue,
          queue: At.queue,
          next: null,
        }),
        Xt === null ? (ut.memoizedState = Xt = t) : (Xt = Xt.next = t);
    }
    return Xt;
  }
  function as() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function Li(t) {
    var e = Hi;
    return (
      (Hi += 1),
      Xa === null && (Xa = []),
      (t = ch(Xa, t, e)),
      (e = ut),
      (Xt === null ? e.memoizedState : Xt.next) === null &&
        ((e = e.alternate),
        (O.H = e === null || e.memoizedState === null ? ed : Do)),
      t
    );
  }
  function is(t) {
    if (t !== null && typeof t == "object") {
      if (typeof t.then == "function") return Li(t);
      if (t.$$typeof === q) return It(t);
    }
    throw Error(r(438, String(t)));
  }
  function po(t) {
    var e = null,
      n = ut.updateQueue;
    if ((n !== null && (e = n.memoCache), e == null)) {
      var a = ut.alternate;
      a !== null &&
        ((a = a.updateQueue),
        a !== null &&
          ((a = a.memoCache),
          a != null &&
            (e = {
              data: a.data.map(function (s) {
                return s.slice();
              }),
              index: 0,
            })));
    }
    if (
      (e == null && (e = { data: [], index: 0 }),
      n === null && ((n = as()), (ut.updateQueue = n)),
      (n.memoCache = e),
      (n = e.data[e.index]),
      n === void 0)
    )
      for (n = e.data[e.index] = Array(t), a = 0; a < t; a++) n[a] = Dt;
    return e.index++, n;
  }
  function un(t, e) {
    return typeof e == "function" ? e(t) : e;
  }
  function ls(t) {
    var e = Yt();
    return go(e, At, t);
  }
  function go(t, e, n) {
    var a = t.queue;
    if (a === null) throw Error(r(311));
    a.lastRenderedReducer = n;
    var s = t.baseQueue,
      o = a.pending;
    if (o !== null) {
      if (s !== null) {
        var f = s.next;
        (s.next = o.next), (o.next = f);
      }
      (e.baseQueue = s = o), (a.pending = null);
    }
    if (((o = t.baseState), s === null)) t.memoizedState = o;
    else {
      e = s.next;
      var p = (f = null),
        S = null,
        w = e,
        j = !1;
      do {
        var V = w.lane & -536870913;
        if (V !== w.lane ? (ht & V) === V : (sn & V) === V) {
          var C = w.revertLane;
          if (C === 0)
            S !== null &&
              (S = S.next =
                {
                  lane: 0,
                  revertLane: 0,
                  gesture: null,
                  action: w.action,
                  hasEagerState: w.hasEagerState,
                  eagerState: w.eagerState,
                  next: null,
                }),
              V === Ua && (j = !0);
          else if ((sn & C) === C) {
            (w = w.next), C === Ua && (j = !0);
            continue;
          } else
            (V = {
              lane: 0,
              revertLane: w.revertLane,
              gesture: null,
              action: w.action,
              hasEagerState: w.hasEagerState,
              eagerState: w.eagerState,
              next: null,
            }),
              S === null ? ((p = S = V), (f = o)) : (S = S.next = V),
              (ut.lanes |= C),
              (Nn |= C);
          (V = w.action),
            ra && n(o, V),
            (o = w.hasEagerState ? w.eagerState : n(o, V));
        } else
          (C = {
            lane: V,
            revertLane: w.revertLane,
            gesture: w.gesture,
            action: w.action,
            hasEagerState: w.hasEagerState,
            eagerState: w.eagerState,
            next: null,
          }),
            S === null ? ((p = S = C), (f = o)) : (S = S.next = C),
            (ut.lanes |= V),
            (Nn |= V);
        w = w.next;
      } while (w !== null && w !== e);
      if (
        (S === null ? (f = o) : (S.next = p),
        !Se(o, t.memoizedState) && ((Zt = !0), j && ((n = Ha), n !== null)))
      )
        throw n;
      (t.memoizedState = o),
        (t.baseState = f),
        (t.baseQueue = S),
        (a.lastRenderedState = o);
    }
    return s === null && (a.lanes = 0), [t.memoizedState, a.dispatch];
  }
  function yo(t) {
    var e = Yt(),
      n = e.queue;
    if (n === null) throw Error(r(311));
    n.lastRenderedReducer = t;
    var a = n.dispatch,
      s = n.pending,
      o = e.memoizedState;
    if (s !== null) {
      n.pending = null;
      var f = (s = s.next);
      do (o = t(o, f.action)), (f = f.next);
      while (f !== s);
      Se(o, e.memoizedState) || (Zt = !0),
        (e.memoizedState = o),
        e.baseQueue === null && (e.baseState = o),
        (n.lastRenderedState = o);
    }
    return [o, a];
  }
  function Th(t, e, n) {
    var a = ut,
      s = Yt(),
      o = mt;
    if (o) {
      if (n === void 0) throw Error(r(407));
      n = n();
    } else n = e();
    var f = !Se((At || s).memoizedState, n);
    if (
      (f && ((s.memoizedState = n), (Zt = !0)),
      (s = s.queue),
      So(Eh.bind(null, a, s, t), [t]),
      s.getSnapshot !== e || f || (Xt !== null && Xt.memoizedState.tag & 1))
    ) {
      if (
        ((a.flags |= 2048),
        Za(9, { destroy: void 0 }, Ah.bind(null, a, s, n, e), null),
        wt === null)
      )
        throw Error(r(349));
      o || (sn & 127) !== 0 || xh(a, e, n);
    }
    return n;
  }
  function xh(t, e, n) {
    (t.flags |= 16384),
      (t = { getSnapshot: e, value: n }),
      (e = ut.updateQueue),
      e === null
        ? ((e = as()), (ut.updateQueue = e), (e.stores = [t]))
        : ((n = e.stores), n === null ? (e.stores = [t]) : n.push(t));
  }
  function Ah(t, e, n, a) {
    (e.value = n), (e.getSnapshot = a), Mh(e) && Dh(t);
  }
  function Eh(t, e, n) {
    return n(function () {
      Mh(e) && Dh(t);
    });
  }
  function Mh(t) {
    var e = t.getSnapshot;
    t = t.value;
    try {
      var n = e();
      return !Se(t, n);
    } catch {
      return !0;
    }
  }
  function Dh(t) {
    var e = ta(t, 2);
    e !== null && pe(e, t, 2);
  }
  function vo(t) {
    var e = ue();
    if (typeof t == "function") {
      var n = t;
      if (((t = n()), ra)) {
        bn(!0);
        try {
          n();
        } finally {
          bn(!1);
        }
      }
    }
    return (
      (e.memoizedState = e.baseState = t),
      (e.queue = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: un,
        lastRenderedState: t,
      }),
      e
    );
  }
  function wh(t, e, n, a) {
    return (t.baseState = n), go(t, At, typeof a == "function" ? a : un);
  }
  function yv(t, e, n, a, s) {
    if (os(t)) throw Error(r(485));
    if (((t = e.action), t !== null)) {
      var o = {
        payload: s,
        action: t,
        next: null,
        isTransition: !0,
        status: "pending",
        value: null,
        reason: null,
        listeners: [],
        then: function (f) {
          o.listeners.push(f);
        },
      };
      O.T !== null ? n(!0) : (o.isTransition = !1),
        a(o),
        (n = e.pending),
        n === null
          ? ((o.next = e.pending = o), Ch(e, o))
          : ((o.next = n.next), (e.pending = n.next = o));
    }
  }
  function Ch(t, e) {
    var n = e.action,
      a = e.payload,
      s = t.state;
    if (e.isTransition) {
      var o = O.T,
        f = {};
      O.T = f;
      try {
        var p = n(s, a),
          S = O.S;
        S !== null && S(f, p), zh(t, e, p);
      } catch (w) {
        bo(t, e, w);
      } finally {
        o !== null && f.types !== null && (o.types = f.types), (O.T = o);
      }
    } else
      try {
        (o = n(s, a)), zh(t, e, o);
      } catch (w) {
        bo(t, e, w);
      }
  }
  function zh(t, e, n) {
    n !== null && typeof n == "object" && typeof n.then == "function"
      ? n.then(
          function (a) {
            jh(t, e, a);
          },
          function (a) {
            return bo(t, e, a);
          }
        )
      : jh(t, e, n);
  }
  function jh(t, e, n) {
    (e.status = "fulfilled"),
      (e.value = n),
      Oh(e),
      (t.state = n),
      (e = t.pending),
      e !== null &&
        ((n = e.next),
        n === e ? (t.pending = null) : ((n = n.next), (e.next = n), Ch(t, n)));
  }
  function bo(t, e, n) {
    var a = t.pending;
    if (((t.pending = null), a !== null)) {
      a = a.next;
      do (e.status = "rejected"), (e.reason = n), Oh(e), (e = e.next);
      while (e !== a);
    }
    t.action = null;
  }
  function Oh(t) {
    t = t.listeners;
    for (var e = 0; e < t.length; e++) (0, t[e])();
  }
  function Rh(t, e) {
    return e;
  }
  function Nh(t, e) {
    if (mt) {
      var n = wt.formState;
      if (n !== null) {
        t: {
          var a = ut;
          if (mt) {
            if (Ct) {
              e: {
                for (var s = Ct, o = Ve; s.nodeType !== 8; ) {
                  if (!o) {
                    s = null;
                    break e;
                  }
                  if (((s = Be(s.nextSibling)), s === null)) {
                    s = null;
                    break e;
                  }
                }
                (o = s.data), (s = o === "F!" || o === "F" ? s : null);
              }
              if (s) {
                (Ct = Be(s.nextSibling)), (a = s.data === "F!");
                break t;
              }
            }
            En(a);
          }
          a = !1;
        }
        a && (e = n[0]);
      }
    }
    return (
      (n = ue()),
      (n.memoizedState = n.baseState = e),
      (a = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Rh,
        lastRenderedState: e,
      }),
      (n.queue = a),
      (n = $h.bind(null, ut, a)),
      (a.dispatch = n),
      (a = vo(!1)),
      (o = Mo.bind(null, ut, !1, a.queue)),
      (a = ue()),
      (s = { state: e, dispatch: null, action: t, pending: null }),
      (a.queue = s),
      (n = yv.bind(null, ut, s, o, n)),
      (s.dispatch = n),
      (a.memoizedState = t),
      [e, n, !1]
    );
  }
  function Vh(t) {
    var e = Yt();
    return _h(e, At, t);
  }
  function _h(t, e, n) {
    if (
      ((e = go(t, e, Rh)[0]),
      (t = ls(un)[0]),
      typeof e == "object" && e !== null && typeof e.then == "function")
    )
      try {
        var a = Li(e);
      } catch (f) {
        throw f === La ? Fl : f;
      }
    else a = e;
    e = Yt();
    var s = e.queue,
      o = s.dispatch;
    return (
      n !== e.memoizedState &&
        ((ut.flags |= 2048),
        Za(9, { destroy: void 0 }, vv.bind(null, s, n), null)),
      [a, o, t]
    );
  }
  function vv(t, e) {
    t.action = e;
  }
  function Bh(t) {
    var e = Yt(),
      n = At;
    if (n !== null) return _h(e, n, t);
    Yt(), (e = e.memoizedState), (n = Yt());
    var a = n.queue.dispatch;
    return (n.memoizedState = t), [e, a, !1];
  }
  function Za(t, e, n, a) {
    return (
      (t = { tag: t, create: n, deps: a, inst: e, next: null }),
      (e = ut.updateQueue),
      e === null && ((e = as()), (ut.updateQueue = e)),
      (n = e.lastEffect),
      n === null
        ? (e.lastEffect = t.next = t)
        : ((a = n.next), (n.next = t), (t.next = a), (e.lastEffect = t)),
      t
    );
  }
  function Uh() {
    return Yt().memoizedState;
  }
  function ss(t, e, n, a) {
    var s = ue();
    (ut.flags |= t),
      (s.memoizedState = Za(
        1 | e,
        { destroy: void 0 },
        n,
        a === void 0 ? null : a
      ));
  }
  function us(t, e, n, a) {
    var s = Yt();
    a = a === void 0 ? null : a;
    var o = s.memoizedState.inst;
    At !== null && a !== null && ro(a, At.memoizedState.deps)
      ? (s.memoizedState = Za(e, o, n, a))
      : ((ut.flags |= t), (s.memoizedState = Za(1 | e, o, n, a)));
  }
  function Hh(t, e) {
    ss(8390656, 8, t, e);
  }
  function So(t, e) {
    us(2048, 8, t, e);
  }
  function bv(t) {
    ut.flags |= 4;
    var e = ut.updateQueue;
    if (e === null) (e = as()), (ut.updateQueue = e), (e.events = [t]);
    else {
      var n = e.events;
      n === null ? (e.events = [t]) : n.push(t);
    }
  }
  function Lh(t) {
    var e = Yt().memoizedState;
    return (
      bv({ ref: e, nextImpl: t }),
      function () {
        if ((bt & 2) !== 0) throw Error(r(440));
        return e.impl.apply(void 0, arguments);
      }
    );
  }
  function qh(t, e) {
    return us(4, 2, t, e);
  }
  function Yh(t, e) {
    return us(4, 4, t, e);
  }
  function Gh(t, e) {
    if (typeof e == "function") {
      t = t();
      var n = e(t);
      return function () {
        typeof n == "function" ? n() : e(null);
      };
    }
    if (e != null)
      return (
        (t = t()),
        (e.current = t),
        function () {
          e.current = null;
        }
      );
  }
  function Xh(t, e, n) {
    (n = n != null ? n.concat([t]) : null), us(4, 4, Gh.bind(null, e, t), n);
  }
  function To() {}
  function Zh(t, e) {
    var n = Yt();
    e = e === void 0 ? null : e;
    var a = n.memoizedState;
    return e !== null && ro(e, a[1]) ? a[0] : ((n.memoizedState = [t, e]), t);
  }
  function Qh(t, e) {
    var n = Yt();
    e = e === void 0 ? null : e;
    var a = n.memoizedState;
    if (e !== null && ro(e, a[1])) return a[0];
    if (((a = t()), ra)) {
      bn(!0);
      try {
        t();
      } finally {
        bn(!1);
      }
    }
    return (n.memoizedState = [a, e]), a;
  }
  function xo(t, e, n) {
    return n === void 0 || ((sn & 1073741824) !== 0 && (ht & 261930) === 0)
      ? (t.memoizedState = e)
      : ((t.memoizedState = n), (t = Kd()), (ut.lanes |= t), (Nn |= t), n);
  }
  function Kh(t, e, n, a) {
    return Se(n, e)
      ? n
      : Ya.current !== null
      ? ((t = xo(t, n, a)), Se(t, e) || (Zt = !0), t)
      : (sn & 42) === 0 || ((sn & 1073741824) !== 0 && (ht & 261930) === 0)
      ? ((Zt = !0), (t.memoizedState = n))
      : ((t = Kd()), (ut.lanes |= t), (Nn |= t), e);
  }
  function Jh(t, e, n, a, s) {
    var o = B.p;
    B.p = o !== 0 && 8 > o ? o : 8;
    var f = O.T,
      p = {};
    (O.T = p), Mo(t, !1, e, n);
    try {
      var S = s(),
        w = O.S;
      if (
        (w !== null && w(p, S),
        S !== null && typeof S == "object" && typeof S.then == "function")
      ) {
        var j = mv(S, a);
        qi(t, e, j, De(t));
      } else qi(t, e, a, De(t));
    } catch (V) {
      qi(t, e, { then: function () {}, status: "rejected", reason: V }, De());
    } finally {
      (B.p = o),
        f !== null && p.types !== null && (f.types = p.types),
        (O.T = f);
    }
  }
  function Sv() {}
  function Ao(t, e, n, a) {
    if (t.tag !== 5) throw Error(r(476));
    var s = kh(t).queue;
    Jh(
      t,
      s,
      e,
      Q,
      n === null
        ? Sv
        : function () {
            return Fh(t), n(a);
          }
    );
  }
  function kh(t) {
    var e = t.memoizedState;
    if (e !== null) return e;
    e = {
      memoizedState: Q,
      baseState: Q,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: un,
        lastRenderedState: Q,
      },
      next: null,
    };
    var n = {};
    return (
      (e.next = {
        memoizedState: n,
        baseState: n,
        baseQueue: null,
        queue: {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: un,
          lastRenderedState: n,
        },
        next: null,
      }),
      (t.memoizedState = e),
      (t = t.alternate),
      t !== null && (t.memoizedState = e),
      e
    );
  }
  function Fh(t) {
    var e = kh(t);
    e.next === null && (e = t.alternate.memoizedState),
      qi(t, e.next.queue, {}, De());
  }
  function Eo() {
    return It(al);
  }
  function Wh() {
    return Yt().memoizedState;
  }
  function Ph() {
    return Yt().memoizedState;
  }
  function Tv(t) {
    for (var e = t.return; e !== null; ) {
      switch (e.tag) {
        case 24:
        case 3:
          var n = De();
          t = wn(n);
          var a = Cn(e, t, n);
          a !== null && (pe(a, e, n), _i(a, e, n)),
            (e = { cache: $u() }),
            (t.payload = e);
          return;
      }
      e = e.return;
    }
  }
  function xv(t, e, n) {
    var a = De();
    (n = {
      lane: a,
      revertLane: 0,
      gesture: null,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
      os(t)
        ? Ih(e, n)
        : ((n = Yu(t, e, n, a)), n !== null && (pe(n, t, a), td(n, e, a)));
  }
  function $h(t, e, n) {
    var a = De();
    qi(t, e, n, a);
  }
  function qi(t, e, n, a) {
    var s = {
      lane: a,
      revertLane: 0,
      gesture: null,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    };
    if (os(t)) Ih(e, s);
    else {
      var o = t.alternate;
      if (
        t.lanes === 0 &&
        (o === null || o.lanes === 0) &&
        ((o = e.lastRenderedReducer), o !== null)
      )
        try {
          var f = e.lastRenderedState,
            p = o(f, n);
          if (((s.hasEagerState = !0), (s.eagerState = p), Se(p, f)))
            return Gl(t, e, s, 0), wt === null && Yl(), !1;
        } catch {
        } finally {
        }
      if (((n = Yu(t, e, s, a)), n !== null))
        return pe(n, t, a), td(n, e, a), !0;
    }
    return !1;
  }
  function Mo(t, e, n, a) {
    if (
      ((a = {
        lane: 2,
        revertLane: ar(),
        gesture: null,
        action: a,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      }),
      os(t))
    ) {
      if (e) throw Error(r(479));
    } else (e = Yu(t, n, a, 2)), e !== null && pe(e, t, 2);
  }
  function os(t) {
    var e = t.alternate;
    return t === ut || (e !== null && e === ut);
  }
  function Ih(t, e) {
    Ga = es = !0;
    var n = t.pending;
    n === null ? (e.next = e) : ((e.next = n.next), (n.next = e)),
      (t.pending = e);
  }
  function td(t, e, n) {
    if ((n & 4194048) !== 0) {
      var a = e.lanes;
      (a &= t.pendingLanes), (n |= a), (e.lanes = n), lf(t, n);
    }
  }
  var Yi = {
    readContext: It,
    use: is,
    useCallback: _t,
    useContext: _t,
    useEffect: _t,
    useImperativeHandle: _t,
    useLayoutEffect: _t,
    useInsertionEffect: _t,
    useMemo: _t,
    useReducer: _t,
    useRef: _t,
    useState: _t,
    useDebugValue: _t,
    useDeferredValue: _t,
    useTransition: _t,
    useSyncExternalStore: _t,
    useId: _t,
    useHostTransitionStatus: _t,
    useFormState: _t,
    useActionState: _t,
    useOptimistic: _t,
    useMemoCache: _t,
    useCacheRefresh: _t,
  };
  Yi.useEffectEvent = _t;
  var ed = {
      readContext: It,
      use: is,
      useCallback: function (t, e) {
        return (ue().memoizedState = [t, e === void 0 ? null : e]), t;
      },
      useContext: It,
      useEffect: Hh,
      useImperativeHandle: function (t, e, n) {
        (n = n != null ? n.concat([t]) : null),
          ss(4194308, 4, Gh.bind(null, e, t), n);
      },
      useLayoutEffect: function (t, e) {
        return ss(4194308, 4, t, e);
      },
      useInsertionEffect: function (t, e) {
        ss(4, 2, t, e);
      },
      useMemo: function (t, e) {
        var n = ue();
        e = e === void 0 ? null : e;
        var a = t();
        if (ra) {
          bn(!0);
          try {
            t();
          } finally {
            bn(!1);
          }
        }
        return (n.memoizedState = [a, e]), a;
      },
      useReducer: function (t, e, n) {
        var a = ue();
        if (n !== void 0) {
          var s = n(e);
          if (ra) {
            bn(!0);
            try {
              n(e);
            } finally {
              bn(!1);
            }
          }
        } else s = e;
        return (
          (a.memoizedState = a.baseState = s),
          (t = {
            pending: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: t,
            lastRenderedState: s,
          }),
          (a.queue = t),
          (t = t.dispatch = xv.bind(null, ut, t)),
          [a.memoizedState, t]
        );
      },
      useRef: function (t) {
        var e = ue();
        return (t = { current: t }), (e.memoizedState = t);
      },
      useState: function (t) {
        t = vo(t);
        var e = t.queue,
          n = $h.bind(null, ut, e);
        return (e.dispatch = n), [t.memoizedState, n];
      },
      useDebugValue: To,
      useDeferredValue: function (t, e) {
        var n = ue();
        return xo(n, t, e);
      },
      useTransition: function () {
        var t = vo(!1);
        return (
          (t = Jh.bind(null, ut, t.queue, !0, !1)),
          (ue().memoizedState = t),
          [!1, t]
        );
      },
      useSyncExternalStore: function (t, e, n) {
        var a = ut,
          s = ue();
        if (mt) {
          if (n === void 0) throw Error(r(407));
          n = n();
        } else {
          if (((n = e()), wt === null)) throw Error(r(349));
          (ht & 127) !== 0 || xh(a, e, n);
        }
        s.memoizedState = n;
        var o = { value: n, getSnapshot: e };
        return (
          (s.queue = o),
          Hh(Eh.bind(null, a, o, t), [t]),
          (a.flags |= 2048),
          Za(9, { destroy: void 0 }, Ah.bind(null, a, o, n, e), null),
          n
        );
      },
      useId: function () {
        var t = ue(),
          e = wt.identifierPrefix;
        if (mt) {
          var n = Je,
            a = Ke;
          (n = (a & ~(1 << (32 - be(a) - 1))).toString(32) + n),
            (e = "_" + e + "R_" + n),
            (n = ns++),
            0 < n && (e += "H" + n.toString(32)),
            (e += "_");
        } else (n = pv++), (e = "_" + e + "r_" + n.toString(32) + "_");
        return (t.memoizedState = e);
      },
      useHostTransitionStatus: Eo,
      useFormState: Nh,
      useActionState: Nh,
      useOptimistic: function (t) {
        var e = ue();
        e.memoizedState = e.baseState = t;
        var n = {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: null,
          lastRenderedState: null,
        };
        return (
          (e.queue = n),
          (e = Mo.bind(null, ut, !0, n)),
          (n.dispatch = e),
          [t, e]
        );
      },
      useMemoCache: po,
      useCacheRefresh: function () {
        return (ue().memoizedState = Tv.bind(null, ut));
      },
      useEffectEvent: function (t) {
        var e = ue(),
          n = { impl: t };
        return (
          (e.memoizedState = n),
          function () {
            if ((bt & 2) !== 0) throw Error(r(440));
            return n.impl.apply(void 0, arguments);
          }
        );
      },
    },
    Do = {
      readContext: It,
      use: is,
      useCallback: Zh,
      useContext: It,
      useEffect: So,
      useImperativeHandle: Xh,
      useInsertionEffect: qh,
      useLayoutEffect: Yh,
      useMemo: Qh,
      useReducer: ls,
      useRef: Uh,
      useState: function () {
        return ls(un);
      },
      useDebugValue: To,
      useDeferredValue: function (t, e) {
        var n = Yt();
        return Kh(n, At.memoizedState, t, e);
      },
      useTransition: function () {
        var t = ls(un)[0],
          e = Yt().memoizedState;
        return [typeof t == "boolean" ? t : Li(t), e];
      },
      useSyncExternalStore: Th,
      useId: Wh,
      useHostTransitionStatus: Eo,
      useFormState: Vh,
      useActionState: Vh,
      useOptimistic: function (t, e) {
        var n = Yt();
        return wh(n, At, t, e);
      },
      useMemoCache: po,
      useCacheRefresh: Ph,
    };
  Do.useEffectEvent = Lh;
  var nd = {
    readContext: It,
    use: is,
    useCallback: Zh,
    useContext: It,
    useEffect: So,
    useImperativeHandle: Xh,
    useInsertionEffect: qh,
    useLayoutEffect: Yh,
    useMemo: Qh,
    useReducer: yo,
    useRef: Uh,
    useState: function () {
      return yo(un);
    },
    useDebugValue: To,
    useDeferredValue: function (t, e) {
      var n = Yt();
      return At === null ? xo(n, t, e) : Kh(n, At.memoizedState, t, e);
    },
    useTransition: function () {
      var t = yo(un)[0],
        e = Yt().memoizedState;
      return [typeof t == "boolean" ? t : Li(t), e];
    },
    useSyncExternalStore: Th,
    useId: Wh,
    useHostTransitionStatus: Eo,
    useFormState: Bh,
    useActionState: Bh,
    useOptimistic: function (t, e) {
      var n = Yt();
      return At !== null
        ? wh(n, At, t, e)
        : ((n.baseState = t), [t, n.queue.dispatch]);
    },
    useMemoCache: po,
    useCacheRefresh: Ph,
  };
  nd.useEffectEvent = Lh;
  function wo(t, e, n, a) {
    (e = t.memoizedState),
      (n = n(a, e)),
      (n = n == null ? e : b({}, e, n)),
      (t.memoizedState = n),
      t.lanes === 0 && (t.updateQueue.baseState = n);
  }
  var Co = {
    enqueueSetState: function (t, e, n) {
      t = t._reactInternals;
      var a = De(),
        s = wn(a);
      (s.payload = e),
        n != null && (s.callback = n),
        (e = Cn(t, s, a)),
        e !== null && (pe(e, t, a), _i(e, t, a));
    },
    enqueueReplaceState: function (t, e, n) {
      t = t._reactInternals;
      var a = De(),
        s = wn(a);
      (s.tag = 1),
        (s.payload = e),
        n != null && (s.callback = n),
        (e = Cn(t, s, a)),
        e !== null && (pe(e, t, a), _i(e, t, a));
    },
    enqueueForceUpdate: function (t, e) {
      t = t._reactInternals;
      var n = De(),
        a = wn(n);
      (a.tag = 2),
        e != null && (a.callback = e),
        (e = Cn(t, a, n)),
        e !== null && (pe(e, t, n), _i(e, t, n));
    },
  };
  function ad(t, e, n, a, s, o, f) {
    return (
      (t = t.stateNode),
      typeof t.shouldComponentUpdate == "function"
        ? t.shouldComponentUpdate(a, o, f)
        : e.prototype && e.prototype.isPureReactComponent
        ? !wi(n, a) || !wi(s, o)
        : !0
    );
  }
  function id(t, e, n, a) {
    (t = e.state),
      typeof e.componentWillReceiveProps == "function" &&
        e.componentWillReceiveProps(n, a),
      typeof e.UNSAFE_componentWillReceiveProps == "function" &&
        e.UNSAFE_componentWillReceiveProps(n, a),
      e.state !== t && Co.enqueueReplaceState(e, e.state, null);
  }
  function ca(t, e) {
    var n = e;
    if ("ref" in e) {
      n = {};
      for (var a in e) a !== "ref" && (n[a] = e[a]);
    }
    if ((t = t.defaultProps)) {
      n === e && (n = b({}, n));
      for (var s in t) n[s] === void 0 && (n[s] = t[s]);
    }
    return n;
  }
  function ld(t) {
    ql(t);
  }
  function sd(t) {
    console.error(t);
  }
  function ud(t) {
    ql(t);
  }
  function rs(t, e) {
    try {
      var n = t.onUncaughtError;
      n(e.value, { componentStack: e.stack });
    } catch (a) {
      setTimeout(function () {
        throw a;
      });
    }
  }
  function od(t, e, n) {
    try {
      var a = t.onCaughtError;
      a(n.value, {
        componentStack: n.stack,
        errorBoundary: e.tag === 1 ? e.stateNode : null,
      });
    } catch (s) {
      setTimeout(function () {
        throw s;
      });
    }
  }
  function zo(t, e, n) {
    return (
      (n = wn(n)),
      (n.tag = 3),
      (n.payload = { element: null }),
      (n.callback = function () {
        rs(t, e);
      }),
      n
    );
  }
  function rd(t) {
    return (t = wn(t)), (t.tag = 3), t;
  }
  function cd(t, e, n, a) {
    var s = n.type.getDerivedStateFromError;
    if (typeof s == "function") {
      var o = a.value;
      (t.payload = function () {
        return s(o);
      }),
        (t.callback = function () {
          od(e, n, a);
        });
    }
    var f = n.stateNode;
    f !== null &&
      typeof f.componentDidCatch == "function" &&
      (t.callback = function () {
        od(e, n, a),
          typeof s != "function" &&
            (Vn === null ? (Vn = new Set([this])) : Vn.add(this));
        var p = a.stack;
        this.componentDidCatch(a.value, {
          componentStack: p !== null ? p : "",
        });
      });
  }
  function Av(t, e, n, a, s) {
    if (
      ((n.flags |= 32768),
      a !== null && typeof a == "object" && typeof a.then == "function")
    ) {
      if (
        ((e = n.alternate),
        e !== null && Ba(e, n, s, !0),
        (n = xe.current),
        n !== null)
      ) {
        switch (n.tag) {
          case 31:
          case 13:
            return (
              _e === null ? Ts() : n.alternate === null && Bt === 0 && (Bt = 3),
              (n.flags &= -257),
              (n.flags |= 65536),
              (n.lanes = s),
              a === Wl
                ? (n.flags |= 16384)
                : ((e = n.updateQueue),
                  e === null ? (n.updateQueue = new Set([a])) : e.add(a),
                  tr(t, a, s)),
              !1
            );
          case 22:
            return (
              (n.flags |= 65536),
              a === Wl
                ? (n.flags |= 16384)
                : ((e = n.updateQueue),
                  e === null
                    ? ((e = {
                        transitions: null,
                        markerInstances: null,
                        retryQueue: new Set([a]),
                      }),
                      (n.updateQueue = e))
                    : ((n = e.retryQueue),
                      n === null ? (e.retryQueue = new Set([a])) : n.add(a)),
                  tr(t, a, s)),
              !1
            );
        }
        throw Error(r(435, n.tag));
      }
      return tr(t, a, s), Ts(), !1;
    }
    if (mt)
      return (
        (e = xe.current),
        e !== null
          ? ((e.flags & 65536) === 0 && (e.flags |= 256),
            (e.flags |= 65536),
            (e.lanes = s),
            a !== Ju && ((t = Error(r(422), { cause: a })), ji(Oe(t, n))))
          : (a !== Ju && ((e = Error(r(423), { cause: a })), ji(Oe(e, n))),
            (t = t.current.alternate),
            (t.flags |= 65536),
            (s &= -s),
            (t.lanes |= s),
            (a = Oe(a, n)),
            (s = zo(t.stateNode, a, s)),
            io(t, s),
            Bt !== 4 && (Bt = 2)),
        !1
      );
    var o = Error(r(520), { cause: a });
    if (
      ((o = Oe(o, n)),
      Fi === null ? (Fi = [o]) : Fi.push(o),
      Bt !== 4 && (Bt = 2),
      e === null)
    )
      return !0;
    (a = Oe(a, n)), (n = e);
    do {
      switch (n.tag) {
        case 3:
          return (
            (n.flags |= 65536),
            (t = s & -s),
            (n.lanes |= t),
            (t = zo(n.stateNode, a, t)),
            io(n, t),
            !1
          );
        case 1:
          if (
            ((e = n.type),
            (o = n.stateNode),
            (n.flags & 128) === 0 &&
              (typeof e.getDerivedStateFromError == "function" ||
                (o !== null &&
                  typeof o.componentDidCatch == "function" &&
                  (Vn === null || !Vn.has(o)))))
          )
            return (
              (n.flags |= 65536),
              (s &= -s),
              (n.lanes |= s),
              (s = rd(s)),
              cd(s, t, n, a),
              io(n, s),
              !1
            );
      }
      n = n.return;
    } while (n !== null);
    return !1;
  }
  var jo = Error(r(461)),
    Zt = !1;
  function te(t, e, n, a) {
    e.child = t === null ? mh(e, null, n, a) : oa(e, t.child, n, a);
  }
  function fd(t, e, n, a, s) {
    n = n.render;
    var o = e.ref;
    if ("ref" in a) {
      var f = {};
      for (var p in a) p !== "ref" && (f[p] = a[p]);
    } else f = a;
    return (
      ia(e),
      (a = co(t, e, n, f, o, s)),
      (p = fo()),
      t !== null && !Zt
        ? (ho(t, e, s), on(t, e, s))
        : (mt && p && Qu(e), (e.flags |= 1), te(t, e, a, s), e.child)
    );
  }
  function hd(t, e, n, a, s) {
    if (t === null) {
      var o = n.type;
      return typeof o == "function" &&
        !Gu(o) &&
        o.defaultProps === void 0 &&
        n.compare === null
        ? ((e.tag = 15), (e.type = o), dd(t, e, o, a, s))
        : ((t = Zl(n.type, null, a, e, e.mode, s)),
          (t.ref = e.ref),
          (t.return = e),
          (e.child = t));
    }
    if (((o = t.child), !Ho(t, s))) {
      var f = o.memoizedProps;
      if (
        ((n = n.compare), (n = n !== null ? n : wi), n(f, a) && t.ref === e.ref)
      )
        return on(t, e, s);
    }
    return (
      (e.flags |= 1),
      (t = en(o, a)),
      (t.ref = e.ref),
      (t.return = e),
      (e.child = t)
    );
  }
  function dd(t, e, n, a, s) {
    if (t !== null) {
      var o = t.memoizedProps;
      if (wi(o, a) && t.ref === e.ref)
        if (((Zt = !1), (e.pendingProps = a = o), Ho(t, s)))
          (t.flags & 131072) !== 0 && (Zt = !0);
        else return (e.lanes = t.lanes), on(t, e, s);
    }
    return Oo(t, e, n, a, s);
  }
  function md(t, e, n, a) {
    var s = a.children,
      o = t !== null ? t.memoizedState : null;
    if (
      (t === null &&
        e.stateNode === null &&
        (e.stateNode = {
          _visibility: 1,
          _pendingMarkers: null,
          _retryCache: null,
          _transitions: null,
        }),
      a.mode === "hidden")
    ) {
      if ((e.flags & 128) !== 0) {
        if (((o = o !== null ? o.baseLanes | n : n), t !== null)) {
          for (a = e.child = t.child, s = 0; a !== null; )
            (s = s | a.lanes | a.childLanes), (a = a.sibling);
          a = s & ~o;
        } else (a = 0), (e.child = null);
        return pd(t, e, o, n, a);
      }
      if ((n & 536870912) !== 0)
        (e.memoizedState = { baseLanes: 0, cachePool: null }),
          t !== null && kl(e, o !== null ? o.cachePool : null),
          o !== null ? yh(e, o) : so(),
          vh(e);
      else
        return (
          (a = e.lanes = 536870912),
          pd(t, e, o !== null ? o.baseLanes | n : n, n, a)
        );
    } else
      o !== null
        ? (kl(e, o.cachePool), yh(e, o), jn(), (e.memoizedState = null))
        : (t !== null && kl(e, null), so(), jn());
    return te(t, e, s, n), e.child;
  }
  function Gi(t, e) {
    return (
      (t !== null && t.tag === 22) ||
        e.stateNode !== null ||
        (e.stateNode = {
          _visibility: 1,
          _pendingMarkers: null,
          _retryCache: null,
          _transitions: null,
        }),
      e.sibling
    );
  }
  function pd(t, e, n, a, s) {
    var o = to();
    return (
      (o = o === null ? null : { parent: Gt._currentValue, pool: o }),
      (e.memoizedState = { baseLanes: n, cachePool: o }),
      t !== null && kl(e, null),
      so(),
      vh(e),
      t !== null && Ba(t, e, a, !0),
      (e.childLanes = s),
      null
    );
  }
  function cs(t, e) {
    return (
      (e = hs({ mode: e.mode, children: e.children }, t.mode)),
      (e.ref = t.ref),
      (t.child = e),
      (e.return = t),
      e
    );
  }
  function gd(t, e, n) {
    return (
      oa(e, t.child, null, n),
      (t = cs(e, e.pendingProps)),
      (t.flags |= 2),
      Ae(e),
      (e.memoizedState = null),
      t
    );
  }
  function Ev(t, e, n) {
    var a = e.pendingProps,
      s = (e.flags & 128) !== 0;
    if (((e.flags &= -129), t === null)) {
      if (mt) {
        if (a.mode === "hidden")
          return (t = cs(e, a)), (e.lanes = 536870912), Gi(null, t);
        if (
          (oo(e),
          (t = Ct)
            ? ((t = Cm(t, Ve)),
              (t = t !== null && t.data === "&" ? t : null),
              t !== null &&
                ((e.memoizedState = {
                  dehydrated: t,
                  treeContext: xn !== null ? { id: Ke, overflow: Je } : null,
                  retryLane: 536870912,
                  hydrationErrors: null,
                }),
                (n = If(t)),
                (n.return = e),
                (e.child = n),
                ($t = e),
                (Ct = null)))
            : (t = null),
          t === null)
        )
          throw En(e);
        return (e.lanes = 536870912), null;
      }
      return cs(e, a);
    }
    var o = t.memoizedState;
    if (o !== null) {
      var f = o.dehydrated;
      if ((oo(e), s))
        if (e.flags & 256) (e.flags &= -257), (e = gd(t, e, n));
        else if (e.memoizedState !== null)
          (e.child = t.child), (e.flags |= 128), (e = null);
        else throw Error(r(558));
      else if (
        (Zt || Ba(t, e, n, !1), (s = (n & t.childLanes) !== 0), Zt || s)
      ) {
        if (
          ((a = wt),
          a !== null && ((f = sf(a, n)), f !== 0 && f !== o.retryLane))
        )
          throw ((o.retryLane = f), ta(t, f), pe(a, t, f), jo);
        Ts(), (e = gd(t, e, n));
      } else
        (t = o.treeContext),
          (Ct = Be(f.nextSibling)),
          ($t = e),
          (mt = !0),
          (An = null),
          (Ve = !1),
          t !== null && nh(e, t),
          (e = cs(e, a)),
          (e.flags |= 4096);
      return e;
    }
    return (
      (t = en(t.child, { mode: a.mode, children: a.children })),
      (t.ref = e.ref),
      (e.child = t),
      (t.return = e),
      t
    );
  }
  function fs(t, e) {
    var n = e.ref;
    if (n === null) t !== null && t.ref !== null && (e.flags |= 4194816);
    else {
      if (typeof n != "function" && typeof n != "object") throw Error(r(284));
      (t === null || t.ref !== n) && (e.flags |= 4194816);
    }
  }
  function Oo(t, e, n, a, s) {
    return (
      ia(e),
      (n = co(t, e, n, a, void 0, s)),
      (a = fo()),
      t !== null && !Zt
        ? (ho(t, e, s), on(t, e, s))
        : (mt && a && Qu(e), (e.flags |= 1), te(t, e, n, s), e.child)
    );
  }
  function yd(t, e, n, a, s, o) {
    return (
      ia(e),
      (e.updateQueue = null),
      (n = Sh(e, a, n, s)),
      bh(t),
      (a = fo()),
      t !== null && !Zt
        ? (ho(t, e, o), on(t, e, o))
        : (mt && a && Qu(e), (e.flags |= 1), te(t, e, n, o), e.child)
    );
  }
  function vd(t, e, n, a, s) {
    if ((ia(e), e.stateNode === null)) {
      var o = Ra,
        f = n.contextType;
      typeof f == "object" && f !== null && (o = It(f)),
        (o = new n(a, o)),
        (e.memoizedState =
          o.state !== null && o.state !== void 0 ? o.state : null),
        (o.updater = Co),
        (e.stateNode = o),
        (o._reactInternals = e),
        (o = e.stateNode),
        (o.props = a),
        (o.state = e.memoizedState),
        (o.refs = {}),
        no(e),
        (f = n.contextType),
        (o.context = typeof f == "object" && f !== null ? It(f) : Ra),
        (o.state = e.memoizedState),
        (f = n.getDerivedStateFromProps),
        typeof f == "function" && (wo(e, n, f, a), (o.state = e.memoizedState)),
        typeof n.getDerivedStateFromProps == "function" ||
          typeof o.getSnapshotBeforeUpdate == "function" ||
          (typeof o.UNSAFE_componentWillMount != "function" &&
            typeof o.componentWillMount != "function") ||
          ((f = o.state),
          typeof o.componentWillMount == "function" && o.componentWillMount(),
          typeof o.UNSAFE_componentWillMount == "function" &&
            o.UNSAFE_componentWillMount(),
          f !== o.state && Co.enqueueReplaceState(o, o.state, null),
          Ui(e, a, o, s),
          Bi(),
          (o.state = e.memoizedState)),
        typeof o.componentDidMount == "function" && (e.flags |= 4194308),
        (a = !0);
    } else if (t === null) {
      o = e.stateNode;
      var p = e.memoizedProps,
        S = ca(n, p);
      o.props = S;
      var w = o.context,
        j = n.contextType;
      (f = Ra), typeof j == "object" && j !== null && (f = It(j));
      var V = n.getDerivedStateFromProps;
      (j =
        typeof V == "function" ||
        typeof o.getSnapshotBeforeUpdate == "function"),
        (p = e.pendingProps !== p),
        j ||
          (typeof o.UNSAFE_componentWillReceiveProps != "function" &&
            typeof o.componentWillReceiveProps != "function") ||
          ((p || w !== f) && id(e, o, a, f)),
        (Dn = !1);
      var C = e.memoizedState;
      (o.state = C),
        Ui(e, a, o, s),
        Bi(),
        (w = e.memoizedState),
        p || C !== w || Dn
          ? (typeof V == "function" && (wo(e, n, V, a), (w = e.memoizedState)),
            (S = Dn || ad(e, n, S, a, C, w, f))
              ? (j ||
                  (typeof o.UNSAFE_componentWillMount != "function" &&
                    typeof o.componentWillMount != "function") ||
                  (typeof o.componentWillMount == "function" &&
                    o.componentWillMount(),
                  typeof o.UNSAFE_componentWillMount == "function" &&
                    o.UNSAFE_componentWillMount()),
                typeof o.componentDidMount == "function" &&
                  (e.flags |= 4194308))
              : (typeof o.componentDidMount == "function" &&
                  (e.flags |= 4194308),
                (e.memoizedProps = a),
                (e.memoizedState = w)),
            (o.props = a),
            (o.state = w),
            (o.context = f),
            (a = S))
          : (typeof o.componentDidMount == "function" && (e.flags |= 4194308),
            (a = !1));
    } else {
      (o = e.stateNode),
        ao(t, e),
        (f = e.memoizedProps),
        (j = ca(n, f)),
        (o.props = j),
        (V = e.pendingProps),
        (C = o.context),
        (w = n.contextType),
        (S = Ra),
        typeof w == "object" && w !== null && (S = It(w)),
        (p = n.getDerivedStateFromProps),
        (w =
          typeof p == "function" ||
          typeof o.getSnapshotBeforeUpdate == "function") ||
          (typeof o.UNSAFE_componentWillReceiveProps != "function" &&
            typeof o.componentWillReceiveProps != "function") ||
          ((f !== V || C !== S) && id(e, o, a, S)),
        (Dn = !1),
        (C = e.memoizedState),
        (o.state = C),
        Ui(e, a, o, s),
        Bi();
      var z = e.memoizedState;
      f !== V ||
      C !== z ||
      Dn ||
      (t !== null && t.dependencies !== null && Kl(t.dependencies))
        ? (typeof p == "function" && (wo(e, n, p, a), (z = e.memoizedState)),
          (j =
            Dn ||
            ad(e, n, j, a, C, z, S) ||
            (t !== null && t.dependencies !== null && Kl(t.dependencies)))
            ? (w ||
                (typeof o.UNSAFE_componentWillUpdate != "function" &&
                  typeof o.componentWillUpdate != "function") ||
                (typeof o.componentWillUpdate == "function" &&
                  o.componentWillUpdate(a, z, S),
                typeof o.UNSAFE_componentWillUpdate == "function" &&
                  o.UNSAFE_componentWillUpdate(a, z, S)),
              typeof o.componentDidUpdate == "function" && (e.flags |= 4),
              typeof o.getSnapshotBeforeUpdate == "function" &&
                (e.flags |= 1024))
            : (typeof o.componentDidUpdate != "function" ||
                (f === t.memoizedProps && C === t.memoizedState) ||
                (e.flags |= 4),
              typeof o.getSnapshotBeforeUpdate != "function" ||
                (f === t.memoizedProps && C === t.memoizedState) ||
                (e.flags |= 1024),
              (e.memoizedProps = a),
              (e.memoizedState = z)),
          (o.props = a),
          (o.state = z),
          (o.context = S),
          (a = j))
        : (typeof o.componentDidUpdate != "function" ||
            (f === t.memoizedProps && C === t.memoizedState) ||
            (e.flags |= 4),
          typeof o.getSnapshotBeforeUpdate != "function" ||
            (f === t.memoizedProps && C === t.memoizedState) ||
            (e.flags |= 1024),
          (a = !1));
    }
    return (
      (o = a),
      fs(t, e),
      (a = (e.flags & 128) !== 0),
      o || a
        ? ((o = e.stateNode),
          (n =
            a && typeof n.getDerivedStateFromError != "function"
              ? null
              : o.render()),
          (e.flags |= 1),
          t !== null && a
            ? ((e.child = oa(e, t.child, null, s)),
              (e.child = oa(e, null, n, s)))
            : te(t, e, n, s),
          (e.memoizedState = o.state),
          (t = e.child))
        : (t = on(t, e, s)),
      t
    );
  }
  function bd(t, e, n, a) {
    return na(), (e.flags |= 256), te(t, e, n, a), e.child;
  }
  var Ro = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null,
  };
  function No(t) {
    return { baseLanes: t, cachePool: oh() };
  }
  function Vo(t, e, n) {
    return (t = t !== null ? t.childLanes & ~n : 0), e && (t |= Me), t;
  }
  function Sd(t, e, n) {
    var a = e.pendingProps,
      s = !1,
      o = (e.flags & 128) !== 0,
      f;
    if (
      ((f = o) ||
        (f =
          t !== null && t.memoizedState === null ? !1 : (qt.current & 2) !== 0),
      f && ((s = !0), (e.flags &= -129)),
      (f = (e.flags & 32) !== 0),
      (e.flags &= -33),
      t === null)
    ) {
      if (mt) {
        if (
          (s ? zn(e) : jn(),
          (t = Ct)
            ? ((t = Cm(t, Ve)),
              (t = t !== null && t.data !== "&" ? t : null),
              t !== null &&
                ((e.memoizedState = {
                  dehydrated: t,
                  treeContext: xn !== null ? { id: Ke, overflow: Je } : null,
                  retryLane: 536870912,
                  hydrationErrors: null,
                }),
                (n = If(t)),
                (n.return = e),
                (e.child = n),
                ($t = e),
                (Ct = null)))
            : (t = null),
          t === null)
        )
          throw En(e);
        return gr(t) ? (e.lanes = 32) : (e.lanes = 536870912), null;
      }
      var p = a.children;
      return (
        (a = a.fallback),
        s
          ? (jn(),
            (s = e.mode),
            (p = hs({ mode: "hidden", children: p }, s)),
            (a = ea(a, s, n, null)),
            (p.return = e),
            (a.return = e),
            (p.sibling = a),
            (e.child = p),
            (a = e.child),
            (a.memoizedState = No(n)),
            (a.childLanes = Vo(t, f, n)),
            (e.memoizedState = Ro),
            Gi(null, a))
          : (zn(e), _o(e, p))
      );
    }
    var S = t.memoizedState;
    if (S !== null && ((p = S.dehydrated), p !== null)) {
      if (o)
        e.flags & 256
          ? (zn(e), (e.flags &= -257), (e = Bo(t, e, n)))
          : e.memoizedState !== null
          ? (jn(), (e.child = t.child), (e.flags |= 128), (e = null))
          : (jn(),
            (p = a.fallback),
            (s = e.mode),
            (a = hs({ mode: "visible", children: a.children }, s)),
            (p = ea(p, s, n, null)),
            (p.flags |= 2),
            (a.return = e),
            (p.return = e),
            (a.sibling = p),
            (e.child = a),
            oa(e, t.child, null, n),
            (a = e.child),
            (a.memoizedState = No(n)),
            (a.childLanes = Vo(t, f, n)),
            (e.memoizedState = Ro),
            (e = Gi(null, a)));
      else if ((zn(e), gr(p))) {
        if (((f = p.nextSibling && p.nextSibling.dataset), f)) var w = f.dgst;
        (f = w),
          (a = Error(r(419))),
          (a.stack = ""),
          (a.digest = f),
          ji({ value: a, source: null, stack: null }),
          (e = Bo(t, e, n));
      } else if (
        (Zt || Ba(t, e, n, !1), (f = (n & t.childLanes) !== 0), Zt || f)
      ) {
        if (
          ((f = wt),
          f !== null && ((a = sf(f, n)), a !== 0 && a !== S.retryLane))
        )
          throw ((S.retryLane = a), ta(t, a), pe(f, t, a), jo);
        pr(p) || Ts(), (e = Bo(t, e, n));
      } else
        pr(p)
          ? ((e.flags |= 192), (e.child = t.child), (e = null))
          : ((t = S.treeContext),
            (Ct = Be(p.nextSibling)),
            ($t = e),
            (mt = !0),
            (An = null),
            (Ve = !1),
            t !== null && nh(e, t),
            (e = _o(e, a.children)),
            (e.flags |= 4096));
      return e;
    }
    return s
      ? (jn(),
        (p = a.fallback),
        (s = e.mode),
        (S = t.child),
        (w = S.sibling),
        (a = en(S, { mode: "hidden", children: a.children })),
        (a.subtreeFlags = S.subtreeFlags & 65011712),
        w !== null ? (p = en(w, p)) : ((p = ea(p, s, n, null)), (p.flags |= 2)),
        (p.return = e),
        (a.return = e),
        (a.sibling = p),
        (e.child = a),
        Gi(null, a),
        (a = e.child),
        (p = t.child.memoizedState),
        p === null
          ? (p = No(n))
          : ((s = p.cachePool),
            s !== null
              ? ((S = Gt._currentValue),
                (s = s.parent !== S ? { parent: S, pool: S } : s))
              : (s = oh()),
            (p = { baseLanes: p.baseLanes | n, cachePool: s })),
        (a.memoizedState = p),
        (a.childLanes = Vo(t, f, n)),
        (e.memoizedState = Ro),
        Gi(t.child, a))
      : (zn(e),
        (n = t.child),
        (t = n.sibling),
        (n = en(n, { mode: "visible", children: a.children })),
        (n.return = e),
        (n.sibling = null),
        t !== null &&
          ((f = e.deletions),
          f === null ? ((e.deletions = [t]), (e.flags |= 16)) : f.push(t)),
        (e.child = n),
        (e.memoizedState = null),
        n);
  }
  function _o(t, e) {
    return (
      (e = hs({ mode: "visible", children: e }, t.mode)),
      (e.return = t),
      (t.child = e)
    );
  }
  function hs(t, e) {
    return (t = Te(22, t, null, e)), (t.lanes = 0), t;
  }
  function Bo(t, e, n) {
    return (
      oa(e, t.child, null, n),
      (t = _o(e, e.pendingProps.children)),
      (t.flags |= 2),
      (e.memoizedState = null),
      t
    );
  }
  function Td(t, e, n) {
    t.lanes |= e;
    var a = t.alternate;
    a !== null && (a.lanes |= e), Wu(t.return, e, n);
  }
  function Uo(t, e, n, a, s, o) {
    var f = t.memoizedState;
    f === null
      ? (t.memoizedState = {
          isBackwards: e,
          rendering: null,
          renderingStartTime: 0,
          last: a,
          tail: n,
          tailMode: s,
          treeForkCount: o,
        })
      : ((f.isBackwards = e),
        (f.rendering = null),
        (f.renderingStartTime = 0),
        (f.last = a),
        (f.tail = n),
        (f.tailMode = s),
        (f.treeForkCount = o));
  }
  function xd(t, e, n) {
    var a = e.pendingProps,
      s = a.revealOrder,
      o = a.tail;
    a = a.children;
    var f = qt.current,
      p = (f & 2) !== 0;
    if (
      (p ? ((f = (f & 1) | 2), (e.flags |= 128)) : (f &= 1),
      Y(qt, f),
      te(t, e, a, n),
      (a = mt ? zi : 0),
      !p && t !== null && (t.flags & 128) !== 0)
    )
      t: for (t = e.child; t !== null; ) {
        if (t.tag === 13) t.memoizedState !== null && Td(t, n, e);
        else if (t.tag === 19) Td(t, n, e);
        else if (t.child !== null) {
          (t.child.return = t), (t = t.child);
          continue;
        }
        if (t === e) break t;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e) break t;
          t = t.return;
        }
        (t.sibling.return = t.return), (t = t.sibling);
      }
    switch (s) {
      case "forwards":
        for (n = e.child, s = null; n !== null; )
          (t = n.alternate),
            t !== null && ts(t) === null && (s = n),
            (n = n.sibling);
        (n = s),
          n === null
            ? ((s = e.child), (e.child = null))
            : ((s = n.sibling), (n.sibling = null)),
          Uo(e, !1, s, n, o, a);
        break;
      case "backwards":
      case "unstable_legacy-backwards":
        for (n = null, s = e.child, e.child = null; s !== null; ) {
          if (((t = s.alternate), t !== null && ts(t) === null)) {
            e.child = s;
            break;
          }
          (t = s.sibling), (s.sibling = n), (n = s), (s = t);
        }
        Uo(e, !0, n, null, o, a);
        break;
      case "together":
        Uo(e, !1, null, null, void 0, a);
        break;
      default:
        e.memoizedState = null;
    }
    return e.child;
  }
  function on(t, e, n) {
    if (
      (t !== null && (e.dependencies = t.dependencies),
      (Nn |= e.lanes),
      (n & e.childLanes) === 0)
    )
      if (t !== null) {
        if ((Ba(t, e, n, !1), (n & e.childLanes) === 0)) return null;
      } else return null;
    if (t !== null && e.child !== t.child) throw Error(r(153));
    if (e.child !== null) {
      for (
        t = e.child, n = en(t, t.pendingProps), e.child = n, n.return = e;
        t.sibling !== null;

      )
        (t = t.sibling),
          (n = n.sibling = en(t, t.pendingProps)),
          (n.return = e);
      n.sibling = null;
    }
    return e.child;
  }
  function Ho(t, e) {
    return (t.lanes & e) !== 0
      ? !0
      : ((t = t.dependencies), !!(t !== null && Kl(t)));
  }
  function Mv(t, e, n) {
    switch (e.tag) {
      case 3:
        Rt(e, e.stateNode.containerInfo),
          Mn(e, Gt, t.memoizedState.cache),
          na();
        break;
      case 27:
      case 5:
        mi(e);
        break;
      case 4:
        Rt(e, e.stateNode.containerInfo);
        break;
      case 10:
        Mn(e, e.type, e.memoizedProps.value);
        break;
      case 31:
        if (e.memoizedState !== null) return (e.flags |= 128), oo(e), null;
        break;
      case 13:
        var a = e.memoizedState;
        if (a !== null)
          return a.dehydrated !== null
            ? (zn(e), (e.flags |= 128), null)
            : (n & e.child.childLanes) !== 0
            ? Sd(t, e, n)
            : (zn(e), (t = on(t, e, n)), t !== null ? t.sibling : null);
        zn(e);
        break;
      case 19:
        var s = (t.flags & 128) !== 0;
        if (
          ((a = (n & e.childLanes) !== 0),
          a || (Ba(t, e, n, !1), (a = (n & e.childLanes) !== 0)),
          s)
        ) {
          if (a) return xd(t, e, n);
          e.flags |= 128;
        }
        if (
          ((s = e.memoizedState),
          s !== null &&
            ((s.rendering = null), (s.tail = null), (s.lastEffect = null)),
          Y(qt, qt.current),
          a)
        )
          break;
        return null;
      case 22:
        return (e.lanes = 0), md(t, e, n, e.pendingProps);
      case 24:
        Mn(e, Gt, t.memoizedState.cache);
    }
    return on(t, e, n);
  }
  function Ad(t, e, n) {
    if (t !== null)
      if (t.memoizedProps !== e.pendingProps) Zt = !0;
      else {
        if (!Ho(t, n) && (e.flags & 128) === 0) return (Zt = !1), Mv(t, e, n);
        Zt = (t.flags & 131072) !== 0;
      }
    else (Zt = !1), mt && (e.flags & 1048576) !== 0 && eh(e, zi, e.index);
    switch (((e.lanes = 0), e.tag)) {
      case 16:
        t: {
          var a = e.pendingProps;
          if (((t = sa(e.elementType)), (e.type = t), typeof t == "function"))
            Gu(t)
              ? ((a = ca(t, a)), (e.tag = 1), (e = vd(null, e, t, a, n)))
              : ((e.tag = 0), (e = Oo(null, e, t, a, n)));
          else {
            if (t != null) {
              var s = t.$$typeof;
              if (s === tt) {
                (e.tag = 11), (e = fd(null, e, t, a, n));
                break t;
              } else if (s === X) {
                (e.tag = 14), (e = hd(null, e, t, a, n));
                break t;
              }
            }
            throw ((e = ae(t) || t), Error(r(306, e, "")));
          }
        }
        return e;
      case 0:
        return Oo(t, e, e.type, e.pendingProps, n);
      case 1:
        return (a = e.type), (s = ca(a, e.pendingProps)), vd(t, e, a, s, n);
      case 3:
        t: {
          if ((Rt(e, e.stateNode.containerInfo), t === null))
            throw Error(r(387));
          a = e.pendingProps;
          var o = e.memoizedState;
          (s = o.element), ao(t, e), Ui(e, a, null, n);
          var f = e.memoizedState;
          if (
            ((a = f.cache),
            Mn(e, Gt, a),
            a !== o.cache && Pu(e, [Gt], n, !0),
            Bi(),
            (a = f.element),
            o.isDehydrated)
          )
            if (
              ((o = { element: a, isDehydrated: !1, cache: f.cache }),
              (e.updateQueue.baseState = o),
              (e.memoizedState = o),
              e.flags & 256)
            ) {
              e = bd(t, e, a, n);
              break t;
            } else if (a !== s) {
              (s = Oe(Error(r(424)), e)), ji(s), (e = bd(t, e, a, n));
              break t;
            } else {
              switch (((t = e.stateNode.containerInfo), t.nodeType)) {
                case 9:
                  t = t.body;
                  break;
                default:
                  t = t.nodeName === "HTML" ? t.ownerDocument.body : t;
              }
              for (
                Ct = Be(t.firstChild),
                  $t = e,
                  mt = !0,
                  An = null,
                  Ve = !0,
                  n = mh(e, null, a, n),
                  e.child = n;
                n;

              )
                (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
            }
          else {
            if ((na(), a === s)) {
              e = on(t, e, n);
              break t;
            }
            te(t, e, a, n);
          }
          e = e.child;
        }
        return e;
      case 26:
        return (
          fs(t, e),
          t === null
            ? (n = Vm(e.type, null, e.pendingProps, null))
              ? (e.memoizedState = n)
              : mt ||
                ((n = e.type),
                (t = e.pendingProps),
                (a = Cs(et.current).createElement(n)),
                (a[Pt] = e),
                (a[re] = t),
                ee(a, n, t),
                Ft(a),
                (e.stateNode = a))
            : (e.memoizedState = Vm(
                e.type,
                t.memoizedProps,
                e.pendingProps,
                t.memoizedState
              )),
          null
        );
      case 27:
        return (
          mi(e),
          t === null &&
            mt &&
            ((a = e.stateNode = Om(e.type, e.pendingProps, et.current)),
            ($t = e),
            (Ve = !0),
            (s = Ct),
            Hn(e.type) ? ((yr = s), (Ct = Be(a.firstChild))) : (Ct = s)),
          te(t, e, e.pendingProps.children, n),
          fs(t, e),
          t === null && (e.flags |= 4194304),
          e.child
        );
      case 5:
        return (
          t === null &&
            mt &&
            ((s = a = Ct) &&
              ((a = e1(a, e.type, e.pendingProps, Ve)),
              a !== null
                ? ((e.stateNode = a),
                  ($t = e),
                  (Ct = Be(a.firstChild)),
                  (Ve = !1),
                  (s = !0))
                : (s = !1)),
            s || En(e)),
          mi(e),
          (s = e.type),
          (o = e.pendingProps),
          (f = t !== null ? t.memoizedProps : null),
          (a = o.children),
          hr(s, o) ? (a = null) : f !== null && hr(s, f) && (e.flags |= 32),
          e.memoizedState !== null &&
            ((s = co(t, e, gv, null, null, n)), (al._currentValue = s)),
          fs(t, e),
          te(t, e, a, n),
          e.child
        );
      case 6:
        return (
          t === null &&
            mt &&
            ((t = n = Ct) &&
              ((n = n1(n, e.pendingProps, Ve)),
              n !== null
                ? ((e.stateNode = n), ($t = e), (Ct = null), (t = !0))
                : (t = !1)),
            t || En(e)),
          null
        );
      case 13:
        return Sd(t, e, n);
      case 4:
        return (
          Rt(e, e.stateNode.containerInfo),
          (a = e.pendingProps),
          t === null ? (e.child = oa(e, null, a, n)) : te(t, e, a, n),
          e.child
        );
      case 11:
        return fd(t, e, e.type, e.pendingProps, n);
      case 7:
        return te(t, e, e.pendingProps, n), e.child;
      case 8:
        return te(t, e, e.pendingProps.children, n), e.child;
      case 12:
        return te(t, e, e.pendingProps.children, n), e.child;
      case 10:
        return (
          (a = e.pendingProps),
          Mn(e, e.type, a.value),
          te(t, e, a.children, n),
          e.child
        );
      case 9:
        return (
          (s = e.type._context),
          (a = e.pendingProps.children),
          ia(e),
          (s = It(s)),
          (a = a(s)),
          (e.flags |= 1),
          te(t, e, a, n),
          e.child
        );
      case 14:
        return hd(t, e, e.type, e.pendingProps, n);
      case 15:
        return dd(t, e, e.type, e.pendingProps, n);
      case 19:
        return xd(t, e, n);
      case 31:
        return Ev(t, e, n);
      case 22:
        return md(t, e, n, e.pendingProps);
      case 24:
        return (
          ia(e),
          (a = It(Gt)),
          t === null
            ? ((s = to()),
              s === null &&
                ((s = wt),
                (o = $u()),
                (s.pooledCache = o),
                o.refCount++,
                o !== null && (s.pooledCacheLanes |= n),
                (s = o)),
              (e.memoizedState = { parent: a, cache: s }),
              no(e),
              Mn(e, Gt, s))
            : ((t.lanes & n) !== 0 && (ao(t, e), Ui(e, null, null, n), Bi()),
              (s = t.memoizedState),
              (o = e.memoizedState),
              s.parent !== a
                ? ((s = { parent: a, cache: a }),
                  (e.memoizedState = s),
                  e.lanes === 0 &&
                    (e.memoizedState = e.updateQueue.baseState = s),
                  Mn(e, Gt, a))
                : ((a = o.cache),
                  Mn(e, Gt, a),
                  a !== s.cache && Pu(e, [Gt], n, !0))),
          te(t, e, e.pendingProps.children, n),
          e.child
        );
      case 29:
        throw e.pendingProps;
    }
    throw Error(r(156, e.tag));
  }
  function rn(t) {
    t.flags |= 4;
  }
  function Lo(t, e, n, a, s) {
    if (((e = (t.mode & 32) !== 0) && (e = !1), e)) {
      if (((t.flags |= 16777216), (s & 335544128) === s))
        if (t.stateNode.complete) t.flags |= 8192;
        else if (Wd()) t.flags |= 8192;
        else throw ((ua = Wl), eo);
    } else t.flags &= -16777217;
  }
  function Ed(t, e) {
    if (e.type !== "stylesheet" || (e.state.loading & 4) !== 0)
      t.flags &= -16777217;
    else if (((t.flags |= 16777216), !Lm(e)))
      if (Wd()) t.flags |= 8192;
      else throw ((ua = Wl), eo);
  }
  function ds(t, e) {
    e !== null && (t.flags |= 4),
      t.flags & 16384 &&
        ((e = t.tag !== 22 ? nf() : 536870912), (t.lanes |= e), (ka |= e));
  }
  function Xi(t, e) {
    if (!mt)
      switch (t.tailMode) {
        case "hidden":
          e = t.tail;
          for (var n = null; e !== null; )
            e.alternate !== null && (n = e), (e = e.sibling);
          n === null ? (t.tail = null) : (n.sibling = null);
          break;
        case "collapsed":
          n = t.tail;
          for (var a = null; n !== null; )
            n.alternate !== null && (a = n), (n = n.sibling);
          a === null
            ? e || t.tail === null
              ? (t.tail = null)
              : (t.tail.sibling = null)
            : (a.sibling = null);
      }
  }
  function zt(t) {
    var e = t.alternate !== null && t.alternate.child === t.child,
      n = 0,
      a = 0;
    if (e)
      for (var s = t.child; s !== null; )
        (n |= s.lanes | s.childLanes),
          (a |= s.subtreeFlags & 65011712),
          (a |= s.flags & 65011712),
          (s.return = t),
          (s = s.sibling);
    else
      for (s = t.child; s !== null; )
        (n |= s.lanes | s.childLanes),
          (a |= s.subtreeFlags),
          (a |= s.flags),
          (s.return = t),
          (s = s.sibling);
    return (t.subtreeFlags |= a), (t.childLanes = n), e;
  }
  function Dv(t, e, n) {
    var a = e.pendingProps;
    switch ((Ku(e), e.tag)) {
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return zt(e), null;
      case 1:
        return zt(e), null;
      case 3:
        return (
          (n = e.stateNode),
          (a = null),
          t !== null && (a = t.memoizedState.cache),
          e.memoizedState.cache !== a && (e.flags |= 2048),
          ln(Gt),
          St(),
          n.pendingContext &&
            ((n.context = n.pendingContext), (n.pendingContext = null)),
          (t === null || t.child === null) &&
            (_a(e)
              ? rn(e)
              : t === null ||
                (t.memoizedState.isDehydrated && (e.flags & 256) === 0) ||
                ((e.flags |= 1024), ku())),
          zt(e),
          null
        );
      case 26:
        var s = e.type,
          o = e.memoizedState;
        return (
          t === null
            ? (rn(e),
              o !== null ? (zt(e), Ed(e, o)) : (zt(e), Lo(e, s, null, a, n)))
            : o
            ? o !== t.memoizedState
              ? (rn(e), zt(e), Ed(e, o))
              : (zt(e), (e.flags &= -16777217))
            : ((t = t.memoizedProps),
              t !== a && rn(e),
              zt(e),
              Lo(e, s, t, a, n)),
          null
        );
      case 27:
        if (
          (El(e),
          (n = et.current),
          (s = e.type),
          t !== null && e.stateNode != null)
        )
          t.memoizedProps !== a && rn(e);
        else {
          if (!a) {
            if (e.stateNode === null) throw Error(r(166));
            return zt(e), null;
          }
          (t = K.current),
            _a(e) ? ah(e) : ((t = Om(s, a, n)), (e.stateNode = t), rn(e));
        }
        return zt(e), null;
      case 5:
        if ((El(e), (s = e.type), t !== null && e.stateNode != null))
          t.memoizedProps !== a && rn(e);
        else {
          if (!a) {
            if (e.stateNode === null) throw Error(r(166));
            return zt(e), null;
          }
          if (((o = K.current), _a(e))) ah(e);
          else {
            var f = Cs(et.current);
            switch (o) {
              case 1:
                o = f.createElementNS("http://www.w3.org/2000/svg", s);
                break;
              case 2:
                o = f.createElementNS("http://www.w3.org/1998/Math/MathML", s);
                break;
              default:
                switch (s) {
                  case "svg":
                    o = f.createElementNS("http://www.w3.org/2000/svg", s);
                    break;
                  case "math":
                    o = f.createElementNS(
                      "http://www.w3.org/1998/Math/MathML",
                      s
                    );
                    break;
                  case "script":
                    (o = f.createElement("div")),
                      (o.innerHTML = "<script></script>"),
                      (o = o.removeChild(o.firstChild));
                    break;
                  case "select":
                    (o =
                      typeof a.is == "string"
                        ? f.createElement("select", { is: a.is })
                        : f.createElement("select")),
                      a.multiple
                        ? (o.multiple = !0)
                        : a.size && (o.size = a.size);
                    break;
                  default:
                    o =
                      typeof a.is == "string"
                        ? f.createElement(s, { is: a.is })
                        : f.createElement(s);
                }
            }
            (o[Pt] = e), (o[re] = a);
            t: for (f = e.child; f !== null; ) {
              if (f.tag === 5 || f.tag === 6) o.appendChild(f.stateNode);
              else if (f.tag !== 4 && f.tag !== 27 && f.child !== null) {
                (f.child.return = f), (f = f.child);
                continue;
              }
              if (f === e) break t;
              for (; f.sibling === null; ) {
                if (f.return === null || f.return === e) break t;
                f = f.return;
              }
              (f.sibling.return = f.return), (f = f.sibling);
            }
            e.stateNode = o;
            t: switch ((ee(o, s, a), s)) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                a = !!a.autoFocus;
                break t;
              case "img":
                a = !0;
                break t;
              default:
                a = !1;
            }
            a && rn(e);
          }
        }
        return (
          zt(e),
          Lo(e, e.type, t === null ? null : t.memoizedProps, e.pendingProps, n),
          null
        );
      case 6:
        if (t && e.stateNode != null) t.memoizedProps !== a && rn(e);
        else {
          if (typeof a != "string" && e.stateNode === null) throw Error(r(166));
          if (((t = et.current), _a(e))) {
            if (
              ((t = e.stateNode),
              (n = e.memoizedProps),
              (a = null),
              (s = $t),
              s !== null)
            )
              switch (s.tag) {
                case 27:
                case 5:
                  a = s.memoizedProps;
              }
            (t[Pt] = e),
              (t = !!(
                t.nodeValue === n ||
                (a !== null && a.suppressHydrationWarning === !0) ||
                Sm(t.nodeValue, n)
              )),
              t || En(e, !0);
          } else (t = Cs(t).createTextNode(a)), (t[Pt] = e), (e.stateNode = t);
        }
        return zt(e), null;
      case 31:
        if (((n = e.memoizedState), t === null || t.memoizedState !== null)) {
          if (((a = _a(e)), n !== null)) {
            if (t === null) {
              if (!a) throw Error(r(318));
              if (
                ((t = e.memoizedState),
                (t = t !== null ? t.dehydrated : null),
                !t)
              )
                throw Error(r(557));
              t[Pt] = e;
            } else
              na(),
                (e.flags & 128) === 0 && (e.memoizedState = null),
                (e.flags |= 4);
            zt(e), (t = !1);
          } else
            (n = ku()),
              t !== null &&
                t.memoizedState !== null &&
                (t.memoizedState.hydrationErrors = n),
              (t = !0);
          if (!t) return e.flags & 256 ? (Ae(e), e) : (Ae(e), null);
          if ((e.flags & 128) !== 0) throw Error(r(558));
        }
        return zt(e), null;
      case 13:
        if (
          ((a = e.memoizedState),
          t === null ||
            (t.memoizedState !== null && t.memoizedState.dehydrated !== null))
        ) {
          if (((s = _a(e)), a !== null && a.dehydrated !== null)) {
            if (t === null) {
              if (!s) throw Error(r(318));
              if (
                ((s = e.memoizedState),
                (s = s !== null ? s.dehydrated : null),
                !s)
              )
                throw Error(r(317));
              s[Pt] = e;
            } else
              na(),
                (e.flags & 128) === 0 && (e.memoizedState = null),
                (e.flags |= 4);
            zt(e), (s = !1);
          } else
            (s = ku()),
              t !== null &&
                t.memoizedState !== null &&
                (t.memoizedState.hydrationErrors = s),
              (s = !0);
          if (!s) return e.flags & 256 ? (Ae(e), e) : (Ae(e), null);
        }
        return (
          Ae(e),
          (e.flags & 128) !== 0
            ? ((e.lanes = n), e)
            : ((n = a !== null),
              (t = t !== null && t.memoizedState !== null),
              n &&
                ((a = e.child),
                (s = null),
                a.alternate !== null &&
                  a.alternate.memoizedState !== null &&
                  a.alternate.memoizedState.cachePool !== null &&
                  (s = a.alternate.memoizedState.cachePool.pool),
                (o = null),
                a.memoizedState !== null &&
                  a.memoizedState.cachePool !== null &&
                  (o = a.memoizedState.cachePool.pool),
                o !== s && (a.flags |= 2048)),
              n !== t && n && (e.child.flags |= 8192),
              ds(e, e.updateQueue),
              zt(e),
              null)
        );
      case 4:
        return St(), t === null && ur(e.stateNode.containerInfo), zt(e), null;
      case 10:
        return ln(e.type), zt(e), null;
      case 19:
        if ((_(qt), (a = e.memoizedState), a === null)) return zt(e), null;
        if (((s = (e.flags & 128) !== 0), (o = a.rendering), o === null))
          if (s) Xi(a, !1);
          else {
            if (Bt !== 0 || (t !== null && (t.flags & 128) !== 0))
              for (t = e.child; t !== null; ) {
                if (((o = ts(t)), o !== null)) {
                  for (
                    e.flags |= 128,
                      Xi(a, !1),
                      t = o.updateQueue,
                      e.updateQueue = t,
                      ds(e, t),
                      e.subtreeFlags = 0,
                      t = n,
                      n = e.child;
                    n !== null;

                  )
                    $f(n, t), (n = n.sibling);
                  return (
                    Y(qt, (qt.current & 1) | 2),
                    mt && nn(e, a.treeForkCount),
                    e.child
                  );
                }
                t = t.sibling;
              }
            a.tail !== null &&
              ye() > vs &&
              ((e.flags |= 128), (s = !0), Xi(a, !1), (e.lanes = 4194304));
          }
        else {
          if (!s)
            if (((t = ts(o)), t !== null)) {
              if (
                ((e.flags |= 128),
                (s = !0),
                (t = t.updateQueue),
                (e.updateQueue = t),
                ds(e, t),
                Xi(a, !0),
                a.tail === null &&
                  a.tailMode === "hidden" &&
                  !o.alternate &&
                  !mt)
              )
                return zt(e), null;
            } else
              2 * ye() - a.renderingStartTime > vs &&
                n !== 536870912 &&
                ((e.flags |= 128), (s = !0), Xi(a, !1), (e.lanes = 4194304));
          a.isBackwards
            ? ((o.sibling = e.child), (e.child = o))
            : ((t = a.last),
              t !== null ? (t.sibling = o) : (e.child = o),
              (a.last = o));
        }
        return a.tail !== null
          ? ((t = a.tail),
            (a.rendering = t),
            (a.tail = t.sibling),
            (a.renderingStartTime = ye()),
            (t.sibling = null),
            (n = qt.current),
            Y(qt, s ? (n & 1) | 2 : n & 1),
            mt && nn(e, a.treeForkCount),
            t)
          : (zt(e), null);
      case 22:
      case 23:
        return (
          Ae(e),
          uo(),
          (a = e.memoizedState !== null),
          t !== null
            ? (t.memoizedState !== null) !== a && (e.flags |= 8192)
            : a && (e.flags |= 8192),
          a
            ? (n & 536870912) !== 0 &&
              (e.flags & 128) === 0 &&
              (zt(e), e.subtreeFlags & 6 && (e.flags |= 8192))
            : zt(e),
          (n = e.updateQueue),
          n !== null && ds(e, n.retryQueue),
          (n = null),
          t !== null &&
            t.memoizedState !== null &&
            t.memoizedState.cachePool !== null &&
            (n = t.memoizedState.cachePool.pool),
          (a = null),
          e.memoizedState !== null &&
            e.memoizedState.cachePool !== null &&
            (a = e.memoizedState.cachePool.pool),
          a !== n && (e.flags |= 2048),
          t !== null && _(la),
          null
        );
      case 24:
        return (
          (n = null),
          t !== null && (n = t.memoizedState.cache),
          e.memoizedState.cache !== n && (e.flags |= 2048),
          ln(Gt),
          zt(e),
          null
        );
      case 25:
        return null;
      case 30:
        return null;
    }
    throw Error(r(156, e.tag));
  }
  function wv(t, e) {
    switch ((Ku(e), e.tag)) {
      case 1:
        return (
          (t = e.flags), t & 65536 ? ((e.flags = (t & -65537) | 128), e) : null
        );
      case 3:
        return (
          ln(Gt),
          St(),
          (t = e.flags),
          (t & 65536) !== 0 && (t & 128) === 0
            ? ((e.flags = (t & -65537) | 128), e)
            : null
        );
      case 26:
      case 27:
      case 5:
        return El(e), null;
      case 31:
        if (e.memoizedState !== null) {
          if ((Ae(e), e.alternate === null)) throw Error(r(340));
          na();
        }
        return (
          (t = e.flags), t & 65536 ? ((e.flags = (t & -65537) | 128), e) : null
        );
      case 13:
        if (
          (Ae(e), (t = e.memoizedState), t !== null && t.dehydrated !== null)
        ) {
          if (e.alternate === null) throw Error(r(340));
          na();
        }
        return (
          (t = e.flags), t & 65536 ? ((e.flags = (t & -65537) | 128), e) : null
        );
      case 19:
        return _(qt), null;
      case 4:
        return St(), null;
      case 10:
        return ln(e.type), null;
      case 22:
      case 23:
        return (
          Ae(e),
          uo(),
          t !== null && _(la),
          (t = e.flags),
          t & 65536 ? ((e.flags = (t & -65537) | 128), e) : null
        );
      case 24:
        return ln(Gt), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function Md(t, e) {
    switch ((Ku(e), e.tag)) {
      case 3:
        ln(Gt), St();
        break;
      case 26:
      case 27:
      case 5:
        El(e);
        break;
      case 4:
        St();
        break;
      case 31:
        e.memoizedState !== null && Ae(e);
        break;
      case 13:
        Ae(e);
        break;
      case 19:
        _(qt);
        break;
      case 10:
        ln(e.type);
        break;
      case 22:
      case 23:
        Ae(e), uo(), t !== null && _(la);
        break;
      case 24:
        ln(Gt);
    }
  }
  function Zi(t, e) {
    try {
      var n = e.updateQueue,
        a = n !== null ? n.lastEffect : null;
      if (a !== null) {
        var s = a.next;
        n = s;
        do {
          if ((n.tag & t) === t) {
            a = void 0;
            var o = n.create,
              f = n.inst;
            (a = o()), (f.destroy = a);
          }
          n = n.next;
        } while (n !== s);
      }
    } catch (p) {
      xt(e, e.return, p);
    }
  }
  function On(t, e, n) {
    try {
      var a = e.updateQueue,
        s = a !== null ? a.lastEffect : null;
      if (s !== null) {
        var o = s.next;
        a = o;
        do {
          if ((a.tag & t) === t) {
            var f = a.inst,
              p = f.destroy;
            if (p !== void 0) {
              (f.destroy = void 0), (s = e);
              var S = n,
                w = p;
              try {
                w();
              } catch (j) {
                xt(s, S, j);
              }
            }
          }
          a = a.next;
        } while (a !== o);
      }
    } catch (j) {
      xt(e, e.return, j);
    }
  }
  function Dd(t) {
    var e = t.updateQueue;
    if (e !== null) {
      var n = t.stateNode;
      try {
        gh(e, n);
      } catch (a) {
        xt(t, t.return, a);
      }
    }
  }
  function wd(t, e, n) {
    (n.props = ca(t.type, t.memoizedProps)), (n.state = t.memoizedState);
    try {
      n.componentWillUnmount();
    } catch (a) {
      xt(t, e, a);
    }
  }
  function Qi(t, e) {
    try {
      var n = t.ref;
      if (n !== null) {
        switch (t.tag) {
          case 26:
          case 27:
          case 5:
            var a = t.stateNode;
            break;
          case 30:
            a = t.stateNode;
            break;
          default:
            a = t.stateNode;
        }
        typeof n == "function" ? (t.refCleanup = n(a)) : (n.current = a);
      }
    } catch (s) {
      xt(t, e, s);
    }
  }
  function ke(t, e) {
    var n = t.ref,
      a = t.refCleanup;
    if (n !== null)
      if (typeof a == "function")
        try {
          a();
        } catch (s) {
          xt(t, e, s);
        } finally {
          (t.refCleanup = null),
            (t = t.alternate),
            t != null && (t.refCleanup = null);
        }
      else if (typeof n == "function")
        try {
          n(null);
        } catch (s) {
          xt(t, e, s);
        }
      else n.current = null;
  }
  function Cd(t) {
    var e = t.type,
      n = t.memoizedProps,
      a = t.stateNode;
    try {
      t: switch (e) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          n.autoFocus && a.focus();
          break t;
        case "img":
          n.src ? (a.src = n.src) : n.srcSet && (a.srcset = n.srcSet);
      }
    } catch (s) {
      xt(t, t.return, s);
    }
  }
  function qo(t, e, n) {
    try {
      var a = t.stateNode;
      Fv(a, t.type, n, e), (a[re] = e);
    } catch (s) {
      xt(t, t.return, s);
    }
  }
  function zd(t) {
    return (
      t.tag === 5 ||
      t.tag === 3 ||
      t.tag === 26 ||
      (t.tag === 27 && Hn(t.type)) ||
      t.tag === 4
    );
  }
  function Yo(t) {
    t: for (;;) {
      for (; t.sibling === null; ) {
        if (t.return === null || zd(t.return)) return null;
        t = t.return;
      }
      for (
        t.sibling.return = t.return, t = t.sibling;
        t.tag !== 5 && t.tag !== 6 && t.tag !== 18;

      ) {
        if (
          (t.tag === 27 && Hn(t.type)) ||
          t.flags & 2 ||
          t.child === null ||
          t.tag === 4
        )
          continue t;
        (t.child.return = t), (t = t.child);
      }
      if (!(t.flags & 2)) return t.stateNode;
    }
  }
  function Go(t, e, n) {
    var a = t.tag;
    if (a === 5 || a === 6)
      (t = t.stateNode),
        e
          ? (n.nodeType === 9
              ? n.body
              : n.nodeName === "HTML"
              ? n.ownerDocument.body
              : n
            ).insertBefore(t, e)
          : ((e =
              n.nodeType === 9
                ? n.body
                : n.nodeName === "HTML"
                ? n.ownerDocument.body
                : n),
            e.appendChild(t),
            (n = n._reactRootContainer),
            n != null || e.onclick !== null || (e.onclick = Ie));
    else if (
      a !== 4 &&
      (a === 27 && Hn(t.type) && ((n = t.stateNode), (e = null)),
      (t = t.child),
      t !== null)
    )
      for (Go(t, e, n), t = t.sibling; t !== null; )
        Go(t, e, n), (t = t.sibling);
  }
  function ms(t, e, n) {
    var a = t.tag;
    if (a === 5 || a === 6)
      (t = t.stateNode), e ? n.insertBefore(t, e) : n.appendChild(t);
    else if (
      a !== 4 &&
      (a === 27 && Hn(t.type) && (n = t.stateNode), (t = t.child), t !== null)
    )
      for (ms(t, e, n), t = t.sibling; t !== null; )
        ms(t, e, n), (t = t.sibling);
  }
  function jd(t) {
    var e = t.stateNode,
      n = t.memoizedProps;
    try {
      for (var a = t.type, s = e.attributes; s.length; )
        e.removeAttributeNode(s[0]);
      ee(e, a, n), (e[Pt] = t), (e[re] = n);
    } catch (o) {
      xt(t, t.return, o);
    }
  }
  var cn = !1,
    Qt = !1,
    Xo = !1,
    Od = typeof WeakSet == "function" ? WeakSet : Set,
    Wt = null;
  function Cv(t, e) {
    if (((t = t.containerInfo), (cr = _s), (t = Xf(t)), _u(t))) {
      if ("selectionStart" in t)
        var n = { start: t.selectionStart, end: t.selectionEnd };
      else
        t: {
          n = ((n = t.ownerDocument) && n.defaultView) || window;
          var a = n.getSelection && n.getSelection();
          if (a && a.rangeCount !== 0) {
            n = a.anchorNode;
            var s = a.anchorOffset,
              o = a.focusNode;
            a = a.focusOffset;
            try {
              n.nodeType, o.nodeType;
            } catch {
              n = null;
              break t;
            }
            var f = 0,
              p = -1,
              S = -1,
              w = 0,
              j = 0,
              V = t,
              C = null;
            e: for (;;) {
              for (
                var z;
                V !== n || (s !== 0 && V.nodeType !== 3) || (p = f + s),
                  V !== o || (a !== 0 && V.nodeType !== 3) || (S = f + a),
                  V.nodeType === 3 && (f += V.nodeValue.length),
                  (z = V.firstChild) !== null;

              )
                (C = V), (V = z);
              for (;;) {
                if (V === t) break e;
                if (
                  (C === n && ++w === s && (p = f),
                  C === o && ++j === a && (S = f),
                  (z = V.nextSibling) !== null)
                )
                  break;
                (V = C), (C = V.parentNode);
              }
              V = z;
            }
            n = p === -1 || S === -1 ? null : { start: p, end: S };
          } else n = null;
        }
      n = n || { start: 0, end: 0 };
    } else n = null;
    for (
      fr = { focusedElem: t, selectionRange: n }, _s = !1, Wt = e;
      Wt !== null;

    )
      if (
        ((e = Wt), (t = e.child), (e.subtreeFlags & 1028) !== 0 && t !== null)
      )
        (t.return = e), (Wt = t);
      else
        for (; Wt !== null; ) {
          switch (((e = Wt), (o = e.alternate), (t = e.flags), e.tag)) {
            case 0:
              if (
                (t & 4) !== 0 &&
                ((t = e.updateQueue),
                (t = t !== null ? t.events : null),
                t !== null)
              )
                for (n = 0; n < t.length; n++)
                  (s = t[n]), (s.ref.impl = s.nextImpl);
              break;
            case 11:
            case 15:
              break;
            case 1:
              if ((t & 1024) !== 0 && o !== null) {
                (t = void 0),
                  (n = e),
                  (s = o.memoizedProps),
                  (o = o.memoizedState),
                  (a = n.stateNode);
                try {
                  var J = ca(n.type, s);
                  (t = a.getSnapshotBeforeUpdate(J, o)),
                    (a.__reactInternalSnapshotBeforeUpdate = t);
                } catch (nt) {
                  xt(n, n.return, nt);
                }
              }
              break;
            case 3:
              if ((t & 1024) !== 0) {
                if (
                  ((t = e.stateNode.containerInfo), (n = t.nodeType), n === 9)
                )
                  mr(t);
                else if (n === 1)
                  switch (t.nodeName) {
                    case "HEAD":
                    case "HTML":
                    case "BODY":
                      mr(t);
                      break;
                    default:
                      t.textContent = "";
                  }
              }
              break;
            case 5:
            case 26:
            case 27:
            case 6:
            case 4:
            case 17:
              break;
            default:
              if ((t & 1024) !== 0) throw Error(r(163));
          }
          if (((t = e.sibling), t !== null)) {
            (t.return = e.return), (Wt = t);
            break;
          }
          Wt = e.return;
        }
  }
  function Rd(t, e, n) {
    var a = n.flags;
    switch (n.tag) {
      case 0:
      case 11:
      case 15:
        hn(t, n), a & 4 && Zi(5, n);
        break;
      case 1:
        if ((hn(t, n), a & 4))
          if (((t = n.stateNode), e === null))
            try {
              t.componentDidMount();
            } catch (f) {
              xt(n, n.return, f);
            }
          else {
            var s = ca(n.type, e.memoizedProps);
            e = e.memoizedState;
            try {
              t.componentDidUpdate(s, e, t.__reactInternalSnapshotBeforeUpdate);
            } catch (f) {
              xt(n, n.return, f);
            }
          }
        a & 64 && Dd(n), a & 512 && Qi(n, n.return);
        break;
      case 3:
        if ((hn(t, n), a & 64 && ((t = n.updateQueue), t !== null))) {
          if (((e = null), n.child !== null))
            switch (n.child.tag) {
              case 27:
              case 5:
                e = n.child.stateNode;
                break;
              case 1:
                e = n.child.stateNode;
            }
          try {
            gh(t, e);
          } catch (f) {
            xt(n, n.return, f);
          }
        }
        break;
      case 27:
        e === null && a & 4 && jd(n);
      case 26:
      case 5:
        hn(t, n), e === null && a & 4 && Cd(n), a & 512 && Qi(n, n.return);
        break;
      case 12:
        hn(t, n);
        break;
      case 31:
        hn(t, n), a & 4 && _d(t, n);
        break;
      case 13:
        hn(t, n),
          a & 4 && Bd(t, n),
          a & 64 &&
            ((t = n.memoizedState),
            t !== null &&
              ((t = t.dehydrated),
              t !== null && ((n = Uv.bind(null, n)), a1(t, n))));
        break;
      case 22:
        if (((a = n.memoizedState !== null || cn), !a)) {
          (e = (e !== null && e.memoizedState !== null) || Qt), (s = cn);
          var o = Qt;
          (cn = a),
            (Qt = e) && !o ? dn(t, n, (n.subtreeFlags & 8772) !== 0) : hn(t, n),
            (cn = s),
            (Qt = o);
        }
        break;
      case 30:
        break;
      default:
        hn(t, n);
    }
  }
  function Nd(t) {
    var e = t.alternate;
    e !== null && ((t.alternate = null), Nd(e)),
      (t.child = null),
      (t.deletions = null),
      (t.sibling = null),
      t.tag === 5 && ((e = t.stateNode), e !== null && vu(e)),
      (t.stateNode = null),
      (t.return = null),
      (t.dependencies = null),
      (t.memoizedProps = null),
      (t.memoizedState = null),
      (t.pendingProps = null),
      (t.stateNode = null),
      (t.updateQueue = null);
  }
  var jt = null,
    fe = !1;
  function fn(t, e, n) {
    for (n = n.child; n !== null; ) Vd(t, e, n), (n = n.sibling);
  }
  function Vd(t, e, n) {
    if (ve && typeof ve.onCommitFiberUnmount == "function")
      try {
        ve.onCommitFiberUnmount(pi, n);
      } catch {}
    switch (n.tag) {
      case 26:
        Qt || ke(n, e),
          fn(t, e, n),
          n.memoizedState
            ? n.memoizedState.count--
            : n.stateNode && ((n = n.stateNode), n.parentNode.removeChild(n));
        break;
      case 27:
        Qt || ke(n, e);
        var a = jt,
          s = fe;
        Hn(n.type) && ((jt = n.stateNode), (fe = !1)),
          fn(t, e, n),
          tl(n.stateNode),
          (jt = a),
          (fe = s);
        break;
      case 5:
        Qt || ke(n, e);
      case 6:
        if (
          ((a = jt),
          (s = fe),
          (jt = null),
          fn(t, e, n),
          (jt = a),
          (fe = s),
          jt !== null)
        )
          if (fe)
            try {
              (jt.nodeType === 9
                ? jt.body
                : jt.nodeName === "HTML"
                ? jt.ownerDocument.body
                : jt
              ).removeChild(n.stateNode);
            } catch (o) {
              xt(n, e, o);
            }
          else
            try {
              jt.removeChild(n.stateNode);
            } catch (o) {
              xt(n, e, o);
            }
        break;
      case 18:
        jt !== null &&
          (fe
            ? ((t = jt),
              Dm(
                t.nodeType === 9
                  ? t.body
                  : t.nodeName === "HTML"
                  ? t.ownerDocument.body
                  : t,
                n.stateNode
              ),
              ni(t))
            : Dm(jt, n.stateNode));
        break;
      case 4:
        (a = jt),
          (s = fe),
          (jt = n.stateNode.containerInfo),
          (fe = !0),
          fn(t, e, n),
          (jt = a),
          (fe = s);
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        On(2, n, e), Qt || On(4, n, e), fn(t, e, n);
        break;
      case 1:
        Qt ||
          (ke(n, e),
          (a = n.stateNode),
          typeof a.componentWillUnmount == "function" && wd(n, e, a)),
          fn(t, e, n);
        break;
      case 21:
        fn(t, e, n);
        break;
      case 22:
        (Qt = (a = Qt) || n.memoizedState !== null), fn(t, e, n), (Qt = a);
        break;
      default:
        fn(t, e, n);
    }
  }
  function _d(t, e) {
    if (
      e.memoizedState === null &&
      ((t = e.alternate), t !== null && ((t = t.memoizedState), t !== null))
    ) {
      t = t.dehydrated;
      try {
        ni(t);
      } catch (n) {
        xt(e, e.return, n);
      }
    }
  }
  function Bd(t, e) {
    if (
      e.memoizedState === null &&
      ((t = e.alternate),
      t !== null &&
        ((t = t.memoizedState), t !== null && ((t = t.dehydrated), t !== null)))
    )
      try {
        ni(t);
      } catch (n) {
        xt(e, e.return, n);
      }
  }
  function zv(t) {
    switch (t.tag) {
      case 31:
      case 13:
      case 19:
        var e = t.stateNode;
        return e === null && (e = t.stateNode = new Od()), e;
      case 22:
        return (
          (t = t.stateNode),
          (e = t._retryCache),
          e === null && (e = t._retryCache = new Od()),
          e
        );
      default:
        throw Error(r(435, t.tag));
    }
  }
  function ps(t, e) {
    var n = zv(t);
    e.forEach(function (a) {
      if (!n.has(a)) {
        n.add(a);
        var s = Hv.bind(null, t, a);
        a.then(s, s);
      }
    });
  }
  function he(t, e) {
    var n = e.deletions;
    if (n !== null)
      for (var a = 0; a < n.length; a++) {
        var s = n[a],
          o = t,
          f = e,
          p = f;
        t: for (; p !== null; ) {
          switch (p.tag) {
            case 27:
              if (Hn(p.type)) {
                (jt = p.stateNode), (fe = !1);
                break t;
              }
              break;
            case 5:
              (jt = p.stateNode), (fe = !1);
              break t;
            case 3:
            case 4:
              (jt = p.stateNode.containerInfo), (fe = !0);
              break t;
          }
          p = p.return;
        }
        if (jt === null) throw Error(r(160));
        Vd(o, f, s),
          (jt = null),
          (fe = !1),
          (o = s.alternate),
          o !== null && (o.return = null),
          (s.return = null);
      }
    if (e.subtreeFlags & 13886)
      for (e = e.child; e !== null; ) Ud(e, t), (e = e.sibling);
  }
  var Ge = null;
  function Ud(t, e) {
    var n = t.alternate,
      a = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        he(e, t),
          de(t),
          a & 4 && (On(3, t, t.return), Zi(3, t), On(5, t, t.return));
        break;
      case 1:
        he(e, t),
          de(t),
          a & 512 && (Qt || n === null || ke(n, n.return)),
          a & 64 &&
            cn &&
            ((t = t.updateQueue),
            t !== null &&
              ((a = t.callbacks),
              a !== null &&
                ((n = t.shared.hiddenCallbacks),
                (t.shared.hiddenCallbacks = n === null ? a : n.concat(a)))));
        break;
      case 26:
        var s = Ge;
        if (
          (he(e, t),
          de(t),
          a & 512 && (Qt || n === null || ke(n, n.return)),
          a & 4)
        ) {
          var o = n !== null ? n.memoizedState : null;
          if (((a = t.memoizedState), n === null))
            if (a === null)
              if (t.stateNode === null) {
                t: {
                  (a = t.type),
                    (n = t.memoizedProps),
                    (s = s.ownerDocument || s);
                  e: switch (a) {
                    case "title":
                      (o = s.getElementsByTagName("title")[0]),
                        (!o ||
                          o[vi] ||
                          o[Pt] ||
                          o.namespaceURI === "http://www.w3.org/2000/svg" ||
                          o.hasAttribute("itemprop")) &&
                          ((o = s.createElement(a)),
                          s.head.insertBefore(
                            o,
                            s.querySelector("head > title")
                          )),
                        ee(o, a, n),
                        (o[Pt] = t),
                        Ft(o),
                        (a = o);
                      break t;
                    case "link":
                      var f = Um("link", "href", s).get(a + (n.href || ""));
                      if (f) {
                        for (var p = 0; p < f.length; p++)
                          if (
                            ((o = f[p]),
                            o.getAttribute("href") ===
                              (n.href == null || n.href === ""
                                ? null
                                : n.href) &&
                              o.getAttribute("rel") ===
                                (n.rel == null ? null : n.rel) &&
                              o.getAttribute("title") ===
                                (n.title == null ? null : n.title) &&
                              o.getAttribute("crossorigin") ===
                                (n.crossOrigin == null ? null : n.crossOrigin))
                          ) {
                            f.splice(p, 1);
                            break e;
                          }
                      }
                      (o = s.createElement(a)),
                        ee(o, a, n),
                        s.head.appendChild(o);
                      break;
                    case "meta":
                      if (
                        (f = Um("meta", "content", s).get(
                          a + (n.content || "")
                        ))
                      ) {
                        for (p = 0; p < f.length; p++)
                          if (
                            ((o = f[p]),
                            o.getAttribute("content") ===
                              (n.content == null ? null : "" + n.content) &&
                              o.getAttribute("name") ===
                                (n.name == null ? null : n.name) &&
                              o.getAttribute("property") ===
                                (n.property == null ? null : n.property) &&
                              o.getAttribute("http-equiv") ===
                                (n.httpEquiv == null ? null : n.httpEquiv) &&
                              o.getAttribute("charset") ===
                                (n.charSet == null ? null : n.charSet))
                          ) {
                            f.splice(p, 1);
                            break e;
                          }
                      }
                      (o = s.createElement(a)),
                        ee(o, a, n),
                        s.head.appendChild(o);
                      break;
                    default:
                      throw Error(r(468, a));
                  }
                  (o[Pt] = t), Ft(o), (a = o);
                }
                t.stateNode = a;
              } else Hm(s, t.type, t.stateNode);
            else t.stateNode = Bm(s, a, t.memoizedProps);
          else
            o !== a
              ? (o === null
                  ? n.stateNode !== null &&
                    ((n = n.stateNode), n.parentNode.removeChild(n))
                  : o.count--,
                a === null
                  ? Hm(s, t.type, t.stateNode)
                  : Bm(s, a, t.memoizedProps))
              : a === null &&
                t.stateNode !== null &&
                qo(t, t.memoizedProps, n.memoizedProps);
        }
        break;
      case 27:
        he(e, t),
          de(t),
          a & 512 && (Qt || n === null || ke(n, n.return)),
          n !== null && a & 4 && qo(t, t.memoizedProps, n.memoizedProps);
        break;
      case 5:
        if (
          (he(e, t),
          de(t),
          a & 512 && (Qt || n === null || ke(n, n.return)),
          t.flags & 32)
        ) {
          s = t.stateNode;
          try {
            Ma(s, "");
          } catch (J) {
            xt(t, t.return, J);
          }
        }
        a & 4 &&
          t.stateNode != null &&
          ((s = t.memoizedProps), qo(t, s, n !== null ? n.memoizedProps : s)),
          a & 1024 && (Xo = !0);
        break;
      case 6:
        if ((he(e, t), de(t), a & 4)) {
          if (t.stateNode === null) throw Error(r(162));
          (a = t.memoizedProps), (n = t.stateNode);
          try {
            n.nodeValue = a;
          } catch (J) {
            xt(t, t.return, J);
          }
        }
        break;
      case 3:
        if (
          ((Os = null),
          (s = Ge),
          (Ge = zs(e.containerInfo)),
          he(e, t),
          (Ge = s),
          de(t),
          a & 4 && n !== null && n.memoizedState.isDehydrated)
        )
          try {
            ni(e.containerInfo);
          } catch (J) {
            xt(t, t.return, J);
          }
        Xo && ((Xo = !1), Hd(t));
        break;
      case 4:
        (a = Ge),
          (Ge = zs(t.stateNode.containerInfo)),
          he(e, t),
          de(t),
          (Ge = a);
        break;
      case 12:
        he(e, t), de(t);
        break;
      case 31:
        he(e, t),
          de(t),
          a & 4 &&
            ((a = t.updateQueue),
            a !== null && ((t.updateQueue = null), ps(t, a)));
        break;
      case 13:
        he(e, t),
          de(t),
          t.child.flags & 8192 &&
            (t.memoizedState !== null) !=
              (n !== null && n.memoizedState !== null) &&
            (ys = ye()),
          a & 4 &&
            ((a = t.updateQueue),
            a !== null && ((t.updateQueue = null), ps(t, a)));
        break;
      case 22:
        s = t.memoizedState !== null;
        var S = n !== null && n.memoizedState !== null,
          w = cn,
          j = Qt;
        if (
          ((cn = w || s),
          (Qt = j || S),
          he(e, t),
          (Qt = j),
          (cn = w),
          de(t),
          a & 8192)
        )
          t: for (
            e = t.stateNode,
              e._visibility = s ? e._visibility & -2 : e._visibility | 1,
              s && (n === null || S || cn || Qt || fa(t)),
              n = null,
              e = t;
            ;

          ) {
            if (e.tag === 5 || e.tag === 26) {
              if (n === null) {
                S = n = e;
                try {
                  if (((o = S.stateNode), s))
                    (f = o.style),
                      typeof f.setProperty == "function"
                        ? f.setProperty("display", "none", "important")
                        : (f.display = "none");
                  else {
                    p = S.stateNode;
                    var V = S.memoizedProps.style,
                      C =
                        V != null && V.hasOwnProperty("display")
                          ? V.display
                          : null;
                    p.style.display =
                      C == null || typeof C == "boolean" ? "" : ("" + C).trim();
                  }
                } catch (J) {
                  xt(S, S.return, J);
                }
              }
            } else if (e.tag === 6) {
              if (n === null) {
                S = e;
                try {
                  S.stateNode.nodeValue = s ? "" : S.memoizedProps;
                } catch (J) {
                  xt(S, S.return, J);
                }
              }
            } else if (e.tag === 18) {
              if (n === null) {
                S = e;
                try {
                  var z = S.stateNode;
                  s ? wm(z, !0) : wm(S.stateNode, !1);
                } catch (J) {
                  xt(S, S.return, J);
                }
              }
            } else if (
              ((e.tag !== 22 && e.tag !== 23) ||
                e.memoizedState === null ||
                e === t) &&
              e.child !== null
            ) {
              (e.child.return = e), (e = e.child);
              continue;
            }
            if (e === t) break t;
            for (; e.sibling === null; ) {
              if (e.return === null || e.return === t) break t;
              n === e && (n = null), (e = e.return);
            }
            n === e && (n = null),
              (e.sibling.return = e.return),
              (e = e.sibling);
          }
        a & 4 &&
          ((a = t.updateQueue),
          a !== null &&
            ((n = a.retryQueue),
            n !== null && ((a.retryQueue = null), ps(t, n))));
        break;
      case 19:
        he(e, t),
          de(t),
          a & 4 &&
            ((a = t.updateQueue),
            a !== null && ((t.updateQueue = null), ps(t, a)));
        break;
      case 30:
        break;
      case 21:
        break;
      default:
        he(e, t), de(t);
    }
  }
  function de(t) {
    var e = t.flags;
    if (e & 2) {
      try {
        for (var n, a = t.return; a !== null; ) {
          if (zd(a)) {
            n = a;
            break;
          }
          a = a.return;
        }
        if (n == null) throw Error(r(160));
        switch (n.tag) {
          case 27:
            var s = n.stateNode,
              o = Yo(t);
            ms(t, o, s);
            break;
          case 5:
            var f = n.stateNode;
            n.flags & 32 && (Ma(f, ""), (n.flags &= -33));
            var p = Yo(t);
            ms(t, p, f);
            break;
          case 3:
          case 4:
            var S = n.stateNode.containerInfo,
              w = Yo(t);
            Go(t, w, S);
            break;
          default:
            throw Error(r(161));
        }
      } catch (j) {
        xt(t, t.return, j);
      }
      t.flags &= -3;
    }
    e & 4096 && (t.flags &= -4097);
  }
  function Hd(t) {
    if (t.subtreeFlags & 1024)
      for (t = t.child; t !== null; ) {
        var e = t;
        Hd(e),
          e.tag === 5 && e.flags & 1024 && e.stateNode.reset(),
          (t = t.sibling);
      }
  }
  function hn(t, e) {
    if (e.subtreeFlags & 8772)
      for (e = e.child; e !== null; ) Rd(t, e.alternate, e), (e = e.sibling);
  }
  function fa(t) {
    for (t = t.child; t !== null; ) {
      var e = t;
      switch (e.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          On(4, e, e.return), fa(e);
          break;
        case 1:
          ke(e, e.return);
          var n = e.stateNode;
          typeof n.componentWillUnmount == "function" && wd(e, e.return, n),
            fa(e);
          break;
        case 27:
          tl(e.stateNode);
        case 26:
        case 5:
          ke(e, e.return), fa(e);
          break;
        case 22:
          e.memoizedState === null && fa(e);
          break;
        case 30:
          fa(e);
          break;
        default:
          fa(e);
      }
      t = t.sibling;
    }
  }
  function dn(t, e, n) {
    for (n = n && (e.subtreeFlags & 8772) !== 0, e = e.child; e !== null; ) {
      var a = e.alternate,
        s = t,
        o = e,
        f = o.flags;
      switch (o.tag) {
        case 0:
        case 11:
        case 15:
          dn(s, o, n), Zi(4, o);
          break;
        case 1:
          if (
            (dn(s, o, n),
            (a = o),
            (s = a.stateNode),
            typeof s.componentDidMount == "function")
          )
            try {
              s.componentDidMount();
            } catch (w) {
              xt(a, a.return, w);
            }
          if (((a = o), (s = a.updateQueue), s !== null)) {
            var p = a.stateNode;
            try {
              var S = s.shared.hiddenCallbacks;
              if (S !== null)
                for (s.shared.hiddenCallbacks = null, s = 0; s < S.length; s++)
                  ph(S[s], p);
            } catch (w) {
              xt(a, a.return, w);
            }
          }
          n && f & 64 && Dd(o), Qi(o, o.return);
          break;
        case 27:
          jd(o);
        case 26:
        case 5:
          dn(s, o, n), n && a === null && f & 4 && Cd(o), Qi(o, o.return);
          break;
        case 12:
          dn(s, o, n);
          break;
        case 31:
          dn(s, o, n), n && f & 4 && _d(s, o);
          break;
        case 13:
          dn(s, o, n), n && f & 4 && Bd(s, o);
          break;
        case 22:
          o.memoizedState === null && dn(s, o, n), Qi(o, o.return);
          break;
        case 30:
          break;
        default:
          dn(s, o, n);
      }
      e = e.sibling;
    }
  }
  function Zo(t, e) {
    var n = null;
    t !== null &&
      t.memoizedState !== null &&
      t.memoizedState.cachePool !== null &&
      (n = t.memoizedState.cachePool.pool),
      (t = null),
      e.memoizedState !== null &&
        e.memoizedState.cachePool !== null &&
        (t = e.memoizedState.cachePool.pool),
      t !== n && (t != null && t.refCount++, n != null && Oi(n));
  }
  function Qo(t, e) {
    (t = null),
      e.alternate !== null && (t = e.alternate.memoizedState.cache),
      (e = e.memoizedState.cache),
      e !== t && (e.refCount++, t != null && Oi(t));
  }
  function Xe(t, e, n, a) {
    if (e.subtreeFlags & 10256)
      for (e = e.child; e !== null; ) Ld(t, e, n, a), (e = e.sibling);
  }
  function Ld(t, e, n, a) {
    var s = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 15:
        Xe(t, e, n, a), s & 2048 && Zi(9, e);
        break;
      case 1:
        Xe(t, e, n, a);
        break;
      case 3:
        Xe(t, e, n, a),
          s & 2048 &&
            ((t = null),
            e.alternate !== null && (t = e.alternate.memoizedState.cache),
            (e = e.memoizedState.cache),
            e !== t && (e.refCount++, t != null && Oi(t)));
        break;
      case 12:
        if (s & 2048) {
          Xe(t, e, n, a), (t = e.stateNode);
          try {
            var o = e.memoizedProps,
              f = o.id,
              p = o.onPostCommit;
            typeof p == "function" &&
              p(
                f,
                e.alternate === null ? "mount" : "update",
                t.passiveEffectDuration,
                -0
              );
          } catch (S) {
            xt(e, e.return, S);
          }
        } else Xe(t, e, n, a);
        break;
      case 31:
        Xe(t, e, n, a);
        break;
      case 13:
        Xe(t, e, n, a);
        break;
      case 23:
        break;
      case 22:
        (o = e.stateNode),
          (f = e.alternate),
          e.memoizedState !== null
            ? o._visibility & 2
              ? Xe(t, e, n, a)
              : Ki(t, e)
            : o._visibility & 2
            ? Xe(t, e, n, a)
            : ((o._visibility |= 2),
              Qa(t, e, n, a, (e.subtreeFlags & 10256) !== 0 || !1)),
          s & 2048 && Zo(f, e);
        break;
      case 24:
        Xe(t, e, n, a), s & 2048 && Qo(e.alternate, e);
        break;
      default:
        Xe(t, e, n, a);
    }
  }
  function Qa(t, e, n, a, s) {
    for (
      s = s && ((e.subtreeFlags & 10256) !== 0 || !1), e = e.child;
      e !== null;

    ) {
      var o = t,
        f = e,
        p = n,
        S = a,
        w = f.flags;
      switch (f.tag) {
        case 0:
        case 11:
        case 15:
          Qa(o, f, p, S, s), Zi(8, f);
          break;
        case 23:
          break;
        case 22:
          var j = f.stateNode;
          f.memoizedState !== null
            ? j._visibility & 2
              ? Qa(o, f, p, S, s)
              : Ki(o, f)
            : ((j._visibility |= 2), Qa(o, f, p, S, s)),
            s && w & 2048 && Zo(f.alternate, f);
          break;
        case 24:
          Qa(o, f, p, S, s), s && w & 2048 && Qo(f.alternate, f);
          break;
        default:
          Qa(o, f, p, S, s);
      }
      e = e.sibling;
    }
  }
  function Ki(t, e) {
    if (e.subtreeFlags & 10256)
      for (e = e.child; e !== null; ) {
        var n = t,
          a = e,
          s = a.flags;
        switch (a.tag) {
          case 22:
            Ki(n, a), s & 2048 && Zo(a.alternate, a);
            break;
          case 24:
            Ki(n, a), s & 2048 && Qo(a.alternate, a);
            break;
          default:
            Ki(n, a);
        }
        e = e.sibling;
      }
  }
  var Ji = 8192;
  function Ka(t, e, n) {
    if (t.subtreeFlags & Ji)
      for (t = t.child; t !== null; ) qd(t, e, n), (t = t.sibling);
  }
  function qd(t, e, n) {
    switch (t.tag) {
      case 26:
        Ka(t, e, n),
          t.flags & Ji &&
            t.memoizedState !== null &&
            p1(n, Ge, t.memoizedState, t.memoizedProps);
        break;
      case 5:
        Ka(t, e, n);
        break;
      case 3:
      case 4:
        var a = Ge;
        (Ge = zs(t.stateNode.containerInfo)), Ka(t, e, n), (Ge = a);
        break;
      case 22:
        t.memoizedState === null &&
          ((a = t.alternate),
          a !== null && a.memoizedState !== null
            ? ((a = Ji), (Ji = 16777216), Ka(t, e, n), (Ji = a))
            : Ka(t, e, n));
        break;
      default:
        Ka(t, e, n);
    }
  }
  function Yd(t) {
    var e = t.alternate;
    if (e !== null && ((t = e.child), t !== null)) {
      e.child = null;
      do (e = t.sibling), (t.sibling = null), (t = e);
      while (t !== null);
    }
  }
  function ki(t) {
    var e = t.deletions;
    if ((t.flags & 16) !== 0) {
      if (e !== null)
        for (var n = 0; n < e.length; n++) {
          var a = e[n];
          (Wt = a), Xd(a, t);
        }
      Yd(t);
    }
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; ) Gd(t), (t = t.sibling);
  }
  function Gd(t) {
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
        ki(t), t.flags & 2048 && On(9, t, t.return);
        break;
      case 3:
        ki(t);
        break;
      case 12:
        ki(t);
        break;
      case 22:
        var e = t.stateNode;
        t.memoizedState !== null &&
        e._visibility & 2 &&
        (t.return === null || t.return.tag !== 13)
          ? ((e._visibility &= -3), gs(t))
          : ki(t);
        break;
      default:
        ki(t);
    }
  }
  function gs(t) {
    var e = t.deletions;
    if ((t.flags & 16) !== 0) {
      if (e !== null)
        for (var n = 0; n < e.length; n++) {
          var a = e[n];
          (Wt = a), Xd(a, t);
        }
      Yd(t);
    }
    for (t = t.child; t !== null; ) {
      switch (((e = t), e.tag)) {
        case 0:
        case 11:
        case 15:
          On(8, e, e.return), gs(e);
          break;
        case 22:
          (n = e.stateNode),
            n._visibility & 2 && ((n._visibility &= -3), gs(e));
          break;
        default:
          gs(e);
      }
      t = t.sibling;
    }
  }
  function Xd(t, e) {
    for (; Wt !== null; ) {
      var n = Wt;
      switch (n.tag) {
        case 0:
        case 11:
        case 15:
          On(8, n, e);
          break;
        case 23:
        case 22:
          if (n.memoizedState !== null && n.memoizedState.cachePool !== null) {
            var a = n.memoizedState.cachePool.pool;
            a != null && a.refCount++;
          }
          break;
        case 24:
          Oi(n.memoizedState.cache);
      }
      if (((a = n.child), a !== null)) (a.return = n), (Wt = a);
      else
        t: for (n = t; Wt !== null; ) {
          a = Wt;
          var s = a.sibling,
            o = a.return;
          if ((Nd(a), a === n)) {
            Wt = null;
            break t;
          }
          if (s !== null) {
            (s.return = o), (Wt = s);
            break t;
          }
          Wt = o;
        }
    }
  }
  var jv = {
      getCacheForType: function (t) {
        var e = It(Gt),
          n = e.data.get(t);
        return n === void 0 && ((n = t()), e.data.set(t, n)), n;
      },
      cacheSignal: function () {
        return It(Gt).controller.signal;
      },
    },
    Ov = typeof WeakMap == "function" ? WeakMap : Map,
    bt = 0,
    wt = null,
    ct = null,
    ht = 0,
    Tt = 0,
    Ee = null,
    Rn = !1,
    Ja = !1,
    Ko = !1,
    mn = 0,
    Bt = 0,
    Nn = 0,
    ha = 0,
    Jo = 0,
    Me = 0,
    ka = 0,
    Fi = null,
    me = null,
    ko = !1,
    ys = 0,
    Zd = 0,
    vs = 1 / 0,
    bs = null,
    Vn = null,
    Jt = 0,
    _n = null,
    Fa = null,
    pn = 0,
    Fo = 0,
    Wo = null,
    Qd = null,
    Wi = 0,
    Po = null;
  function De() {
    return (bt & 2) !== 0 && ht !== 0 ? ht & -ht : O.T !== null ? ar() : uf();
  }
  function Kd() {
    if (Me === 0)
      if ((ht & 536870912) === 0 || mt) {
        var t = wl;
        (wl <<= 1), (wl & 3932160) === 0 && (wl = 262144), (Me = t);
      } else Me = 536870912;
    return (t = xe.current), t !== null && (t.flags |= 32), Me;
  }
  function pe(t, e, n) {
    ((t === wt && (Tt === 2 || Tt === 9)) || t.cancelPendingCommit !== null) &&
      (Wa(t, 0), Bn(t, ht, Me, !1)),
      yi(t, n),
      ((bt & 2) === 0 || t !== wt) &&
        (t === wt &&
          ((bt & 2) === 0 && (ha |= n), Bt === 4 && Bn(t, ht, Me, !1)),
        Fe(t));
  }
  function Jd(t, e, n) {
    if ((bt & 6) !== 0) throw Error(r(327));
    var a = (!n && (e & 127) === 0 && (e & t.expiredLanes) === 0) || gi(t, e),
      s = a ? Vv(t, e) : Io(t, e, !0),
      o = a;
    do {
      if (s === 0) {
        Ja && !a && Bn(t, e, 0, !1);
        break;
      } else {
        if (((n = t.current.alternate), o && !Rv(n))) {
          (s = Io(t, e, !1)), (o = !1);
          continue;
        }
        if (s === 2) {
          if (((o = e), t.errorRecoveryDisabledLanes & o)) var f = 0;
          else
            (f = t.pendingLanes & -536870913),
              (f = f !== 0 ? f : f & 536870912 ? 536870912 : 0);
          if (f !== 0) {
            e = f;
            t: {
              var p = t;
              s = Fi;
              var S = p.current.memoizedState.isDehydrated;
              if ((S && (Wa(p, f).flags |= 256), (f = Io(p, f, !1)), f !== 2)) {
                if (Ko && !S) {
                  (p.errorRecoveryDisabledLanes |= o), (ha |= o), (s = 4);
                  break t;
                }
                (o = me),
                  (me = s),
                  o !== null && (me === null ? (me = o) : me.push.apply(me, o));
              }
              s = f;
            }
            if (((o = !1), s !== 2)) continue;
          }
        }
        if (s === 1) {
          Wa(t, 0), Bn(t, e, 0, !0);
          break;
        }
        t: {
          switch (((a = t), (o = s), o)) {
            case 0:
            case 1:
              throw Error(r(345));
            case 4:
              if ((e & 4194048) !== e) break;
            case 6:
              Bn(a, e, Me, !Rn);
              break t;
            case 2:
              me = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(r(329));
          }
          if ((e & 62914560) === e && ((s = ys + 300 - ye()), 10 < s)) {
            if ((Bn(a, e, Me, !Rn), zl(a, 0, !0) !== 0)) break t;
            (pn = e),
              (a.timeoutHandle = Em(
                kd.bind(
                  null,
                  a,
                  n,
                  me,
                  bs,
                  ko,
                  e,
                  Me,
                  ha,
                  ka,
                  Rn,
                  o,
                  "Throttled",
                  -0,
                  0
                ),
                s
              ));
            break t;
          }
          kd(a, n, me, bs, ko, e, Me, ha, ka, Rn, o, null, -0, 0);
        }
      }
      break;
    } while (!0);
    Fe(t);
  }
  function kd(t, e, n, a, s, o, f, p, S, w, j, V, C, z) {
    if (
      ((t.timeoutHandle = -1),
      (V = e.subtreeFlags),
      V & 8192 || (V & 16785408) === 16785408)
    ) {
      (V = {
        stylesheets: null,
        count: 0,
        imgCount: 0,
        imgBytes: 0,
        suspenseyImages: [],
        waitingForImages: !0,
        waitingForViewTransition: !1,
        unsuspend: Ie,
      }),
        qd(e, o, V);
      var J =
        (o & 62914560) === o ? ys - ye() : (o & 4194048) === o ? Zd - ye() : 0;
      if (((J = g1(V, J)), J !== null)) {
        (pn = o),
          (t.cancelPendingCommit = J(
            nm.bind(null, t, e, o, n, a, s, f, p, S, j, V, null, C, z)
          )),
          Bn(t, o, f, !w);
        return;
      }
    }
    nm(t, e, o, n, a, s, f, p, S);
  }
  function Rv(t) {
    for (var e = t; ; ) {
      var n = e.tag;
      if (
        (n === 0 || n === 11 || n === 15) &&
        e.flags & 16384 &&
        ((n = e.updateQueue), n !== null && ((n = n.stores), n !== null))
      )
        for (var a = 0; a < n.length; a++) {
          var s = n[a],
            o = s.getSnapshot;
          s = s.value;
          try {
            if (!Se(o(), s)) return !1;
          } catch {
            return !1;
          }
        }
      if (((n = e.child), e.subtreeFlags & 16384 && n !== null))
        (n.return = e), (e = n);
      else {
        if (e === t) break;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) return !0;
          e = e.return;
        }
        (e.sibling.return = e.return), (e = e.sibling);
      }
    }
    return !0;
  }
  function Bn(t, e, n, a) {
    (e &= ~Jo),
      (e &= ~ha),
      (t.suspendedLanes |= e),
      (t.pingedLanes &= ~e),
      a && (t.warmLanes |= e),
      (a = t.expirationTimes);
    for (var s = e; 0 < s; ) {
      var o = 31 - be(s),
        f = 1 << o;
      (a[o] = -1), (s &= ~f);
    }
    n !== 0 && af(t, n, e);
  }
  function Ss() {
    return (bt & 6) === 0 ? (Pi(0), !1) : !0;
  }
  function $o() {
    if (ct !== null) {
      if (Tt === 0) var t = ct.return;
      else (t = ct), (an = aa = null), mo(t), (qa = null), (Ni = 0), (t = ct);
      for (; t !== null; ) Md(t.alternate, t), (t = t.return);
      ct = null;
    }
  }
  function Wa(t, e) {
    var n = t.timeoutHandle;
    n !== -1 && ((t.timeoutHandle = -1), $v(n)),
      (n = t.cancelPendingCommit),
      n !== null && ((t.cancelPendingCommit = null), n()),
      (pn = 0),
      $o(),
      (wt = t),
      (ct = n = en(t.current, null)),
      (ht = e),
      (Tt = 0),
      (Ee = null),
      (Rn = !1),
      (Ja = gi(t, e)),
      (Ko = !1),
      (ka = Me = Jo = ha = Nn = Bt = 0),
      (me = Fi = null),
      (ko = !1),
      (e & 8) !== 0 && (e |= e & 32);
    var a = t.entangledLanes;
    if (a !== 0)
      for (t = t.entanglements, a &= e; 0 < a; ) {
        var s = 31 - be(a),
          o = 1 << s;
        (e |= t[s]), (a &= ~o);
      }
    return (mn = e), Yl(), n;
  }
  function Fd(t, e) {
    (ut = null),
      (O.H = Yi),
      e === La || e === Fl
        ? ((e = fh()), (Tt = 3))
        : e === eo
        ? ((e = fh()), (Tt = 4))
        : (Tt =
            e === jo
              ? 8
              : e !== null &&
                typeof e == "object" &&
                typeof e.then == "function"
              ? 6
              : 1),
      (Ee = e),
      ct === null && ((Bt = 1), rs(t, Oe(e, t.current)));
  }
  function Wd() {
    var t = xe.current;
    return t === null
      ? !0
      : (ht & 4194048) === ht
      ? _e === null
      : (ht & 62914560) === ht || (ht & 536870912) !== 0
      ? t === _e
      : !1;
  }
  function Pd() {
    var t = O.H;
    return (O.H = Yi), t === null ? Yi : t;
  }
  function $d() {
    var t = O.A;
    return (O.A = jv), t;
  }
  function Ts() {
    (Bt = 4),
      Rn || ((ht & 4194048) !== ht && xe.current !== null) || (Ja = !0),
      ((Nn & 134217727) === 0 && (ha & 134217727) === 0) ||
        wt === null ||
        Bn(wt, ht, Me, !1);
  }
  function Io(t, e, n) {
    var a = bt;
    bt |= 2;
    var s = Pd(),
      o = $d();
    (wt !== t || ht !== e) && ((bs = null), Wa(t, e)), (e = !1);
    var f = Bt;
    t: do
      try {
        if (Tt !== 0 && ct !== null) {
          var p = ct,
            S = Ee;
          switch (Tt) {
            case 8:
              $o(), (f = 6);
              break t;
            case 3:
            case 2:
            case 9:
            case 6:
              xe.current === null && (e = !0);
              var w = Tt;
              if (((Tt = 0), (Ee = null), Pa(t, p, S, w), n && Ja)) {
                f = 0;
                break t;
              }
              break;
            default:
              (w = Tt), (Tt = 0), (Ee = null), Pa(t, p, S, w);
          }
        }
        Nv(), (f = Bt);
        break;
      } catch (j) {
        Fd(t, j);
      }
    while (!0);
    return (
      e && t.shellSuspendCounter++,
      (an = aa = null),
      (bt = a),
      (O.H = s),
      (O.A = o),
      ct === null && ((wt = null), (ht = 0), Yl()),
      f
    );
  }
  function Nv() {
    for (; ct !== null; ) Id(ct);
  }
  function Vv(t, e) {
    var n = bt;
    bt |= 2;
    var a = Pd(),
      s = $d();
    wt !== t || ht !== e
      ? ((bs = null), (vs = ye() + 500), Wa(t, e))
      : (Ja = gi(t, e));
    t: do
      try {
        if (Tt !== 0 && ct !== null) {
          e = ct;
          var o = Ee;
          e: switch (Tt) {
            case 1:
              (Tt = 0), (Ee = null), Pa(t, e, o, 1);
              break;
            case 2:
            case 9:
              if (rh(o)) {
                (Tt = 0), (Ee = null), tm(e);
                break;
              }
              (e = function () {
                (Tt !== 2 && Tt !== 9) || wt !== t || (Tt = 7), Fe(t);
              }),
                o.then(e, e);
              break t;
            case 3:
              Tt = 7;
              break t;
            case 4:
              Tt = 5;
              break t;
            case 7:
              rh(o)
                ? ((Tt = 0), (Ee = null), tm(e))
                : ((Tt = 0), (Ee = null), Pa(t, e, o, 7));
              break;
            case 5:
              var f = null;
              switch (ct.tag) {
                case 26:
                  f = ct.memoizedState;
                case 5:
                case 27:
                  var p = ct;
                  if (f ? Lm(f) : p.stateNode.complete) {
                    (Tt = 0), (Ee = null);
                    var S = p.sibling;
                    if (S !== null) ct = S;
                    else {
                      var w = p.return;
                      w !== null ? ((ct = w), xs(w)) : (ct = null);
                    }
                    break e;
                  }
              }
              (Tt = 0), (Ee = null), Pa(t, e, o, 5);
              break;
            case 6:
              (Tt = 0), (Ee = null), Pa(t, e, o, 6);
              break;
            case 8:
              $o(), (Bt = 6);
              break t;
            default:
              throw Error(r(462));
          }
        }
        _v();
        break;
      } catch (j) {
        Fd(t, j);
      }
    while (!0);
    return (
      (an = aa = null),
      (O.H = a),
      (O.A = s),
      (bt = n),
      ct !== null ? 0 : ((wt = null), (ht = 0), Yl(), Bt)
    );
  }
  function _v() {
    for (; ct !== null && !i0(); ) Id(ct);
  }
  function Id(t) {
    var e = Ad(t.alternate, t, mn);
    (t.memoizedProps = t.pendingProps), e === null ? xs(t) : (ct = e);
  }
  function tm(t) {
    var e = t,
      n = e.alternate;
    switch (e.tag) {
      case 15:
      case 0:
        e = yd(n, e, e.pendingProps, e.type, void 0, ht);
        break;
      case 11:
        e = yd(n, e, e.pendingProps, e.type.render, e.ref, ht);
        break;
      case 5:
        mo(e);
      default:
        Md(n, e), (e = ct = $f(e, mn)), (e = Ad(n, e, mn));
    }
    (t.memoizedProps = t.pendingProps), e === null ? xs(t) : (ct = e);
  }
  function Pa(t, e, n, a) {
    (an = aa = null), mo(e), (qa = null), (Ni = 0);
    var s = e.return;
    try {
      if (Av(t, s, e, n, ht)) {
        (Bt = 1), rs(t, Oe(n, t.current)), (ct = null);
        return;
      }
    } catch (o) {
      if (s !== null) throw ((ct = s), o);
      (Bt = 1), rs(t, Oe(n, t.current)), (ct = null);
      return;
    }
    e.flags & 32768
      ? (mt || a === 1
          ? (t = !0)
          : Ja || (ht & 536870912) !== 0
          ? (t = !1)
          : ((Rn = t = !0),
            (a === 2 || a === 9 || a === 3 || a === 6) &&
              ((a = xe.current),
              a !== null && a.tag === 13 && (a.flags |= 16384))),
        em(e, t))
      : xs(e);
  }
  function xs(t) {
    var e = t;
    do {
      if ((e.flags & 32768) !== 0) {
        em(e, Rn);
        return;
      }
      t = e.return;
      var n = Dv(e.alternate, e, mn);
      if (n !== null) {
        ct = n;
        return;
      }
      if (((e = e.sibling), e !== null)) {
        ct = e;
        return;
      }
      ct = e = t;
    } while (e !== null);
    Bt === 0 && (Bt = 5);
  }
  function em(t, e) {
    do {
      var n = wv(t.alternate, t);
      if (n !== null) {
        (n.flags &= 32767), (ct = n);
        return;
      }
      if (
        ((n = t.return),
        n !== null &&
          ((n.flags |= 32768), (n.subtreeFlags = 0), (n.deletions = null)),
        !e && ((t = t.sibling), t !== null))
      ) {
        ct = t;
        return;
      }
      ct = t = n;
    } while (t !== null);
    (Bt = 6), (ct = null);
  }
  function nm(t, e, n, a, s, o, f, p, S) {
    t.cancelPendingCommit = null;
    do As();
    while (Jt !== 0);
    if ((bt & 6) !== 0) throw Error(r(327));
    if (e !== null) {
      if (e === t.current) throw Error(r(177));
      if (
        ((o = e.lanes | e.childLanes),
        (o |= qu),
        m0(t, n, o, f, p, S),
        t === wt && ((ct = wt = null), (ht = 0)),
        (Fa = e),
        (_n = t),
        (pn = n),
        (Fo = o),
        (Wo = s),
        (Qd = a),
        (e.subtreeFlags & 10256) !== 0 || (e.flags & 10256) !== 0
          ? ((t.callbackNode = null),
            (t.callbackPriority = 0),
            Lv(Ml, function () {
              return um(), null;
            }))
          : ((t.callbackNode = null), (t.callbackPriority = 0)),
        (a = (e.flags & 13878) !== 0),
        (e.subtreeFlags & 13878) !== 0 || a)
      ) {
        (a = O.T), (O.T = null), (s = B.p), (B.p = 2), (f = bt), (bt |= 4);
        try {
          Cv(t, e, n);
        } finally {
          (bt = f), (B.p = s), (O.T = a);
        }
      }
      (Jt = 1), am(), im(), lm();
    }
  }
  function am() {
    if (Jt === 1) {
      Jt = 0;
      var t = _n,
        e = Fa,
        n = (e.flags & 13878) !== 0;
      if ((e.subtreeFlags & 13878) !== 0 || n) {
        (n = O.T), (O.T = null);
        var a = B.p;
        B.p = 2;
        var s = bt;
        bt |= 4;
        try {
          Ud(e, t);
          var o = fr,
            f = Xf(t.containerInfo),
            p = o.focusedElem,
            S = o.selectionRange;
          if (
            f !== p &&
            p &&
            p.ownerDocument &&
            Gf(p.ownerDocument.documentElement, p)
          ) {
            if (S !== null && _u(p)) {
              var w = S.start,
                j = S.end;
              if ((j === void 0 && (j = w), "selectionStart" in p))
                (p.selectionStart = w),
                  (p.selectionEnd = Math.min(j, p.value.length));
              else {
                var V = p.ownerDocument || document,
                  C = (V && V.defaultView) || window;
                if (C.getSelection) {
                  var z = C.getSelection(),
                    J = p.textContent.length,
                    nt = Math.min(S.start, J),
                    Mt = S.end === void 0 ? nt : Math.min(S.end, J);
                  !z.extend && nt > Mt && ((f = Mt), (Mt = nt), (nt = f));
                  var M = Yf(p, nt),
                    x = Yf(p, Mt);
                  if (
                    M &&
                    x &&
                    (z.rangeCount !== 1 ||
                      z.anchorNode !== M.node ||
                      z.anchorOffset !== M.offset ||
                      z.focusNode !== x.node ||
                      z.focusOffset !== x.offset)
                  ) {
                    var D = V.createRange();
                    D.setStart(M.node, M.offset),
                      z.removeAllRanges(),
                      nt > Mt
                        ? (z.addRange(D), z.extend(x.node, x.offset))
                        : (D.setEnd(x.node, x.offset), z.addRange(D));
                  }
                }
              }
            }
            for (V = [], z = p; (z = z.parentNode); )
              z.nodeType === 1 &&
                V.push({ element: z, left: z.scrollLeft, top: z.scrollTop });
            for (
              typeof p.focus == "function" && p.focus(), p = 0;
              p < V.length;
              p++
            ) {
              var N = V[p];
              (N.element.scrollLeft = N.left), (N.element.scrollTop = N.top);
            }
          }
          (_s = !!cr), (fr = cr = null);
        } finally {
          (bt = s), (B.p = a), (O.T = n);
        }
      }
      (t.current = e), (Jt = 2);
    }
  }
  function im() {
    if (Jt === 2) {
      Jt = 0;
      var t = _n,
        e = Fa,
        n = (e.flags & 8772) !== 0;
      if ((e.subtreeFlags & 8772) !== 0 || n) {
        (n = O.T), (O.T = null);
        var a = B.p;
        B.p = 2;
        var s = bt;
        bt |= 4;
        try {
          Rd(t, e.alternate, e);
        } finally {
          (bt = s), (B.p = a), (O.T = n);
        }
      }
      Jt = 3;
    }
  }
  function lm() {
    if (Jt === 4 || Jt === 3) {
      (Jt = 0), l0();
      var t = _n,
        e = Fa,
        n = pn,
        a = Qd;
      (e.subtreeFlags & 10256) !== 0 || (e.flags & 10256) !== 0
        ? (Jt = 5)
        : ((Jt = 0), (Fa = _n = null), sm(t, t.pendingLanes));
      var s = t.pendingLanes;
      if (
        (s === 0 && (Vn = null),
        gu(n),
        (e = e.stateNode),
        ve && typeof ve.onCommitFiberRoot == "function")
      )
        try {
          ve.onCommitFiberRoot(pi, e, void 0, (e.current.flags & 128) === 128);
        } catch {}
      if (a !== null) {
        (e = O.T), (s = B.p), (B.p = 2), (O.T = null);
        try {
          for (var o = t.onRecoverableError, f = 0; f < a.length; f++) {
            var p = a[f];
            o(p.value, { componentStack: p.stack });
          }
        } finally {
          (O.T = e), (B.p = s);
        }
      }
      (pn & 3) !== 0 && As(),
        Fe(t),
        (s = t.pendingLanes),
        (n & 261930) !== 0 && (s & 42) !== 0
          ? t === Po
            ? Wi++
            : ((Wi = 0), (Po = t))
          : (Wi = 0),
        Pi(0);
    }
  }
  function sm(t, e) {
    (t.pooledCacheLanes &= e) === 0 &&
      ((e = t.pooledCache), e != null && ((t.pooledCache = null), Oi(e)));
  }
  function As() {
    return am(), im(), lm(), um();
  }
  function um() {
    if (Jt !== 5) return !1;
    var t = _n,
      e = Fo;
    Fo = 0;
    var n = gu(pn),
      a = O.T,
      s = B.p;
    try {
      (B.p = 32 > n ? 32 : n), (O.T = null), (n = Wo), (Wo = null);
      var o = _n,
        f = pn;
      if (((Jt = 0), (Fa = _n = null), (pn = 0), (bt & 6) !== 0))
        throw Error(r(331));
      var p = bt;
      if (
        ((bt |= 4),
        Gd(o.current),
        Ld(o, o.current, f, n),
        (bt = p),
        Pi(0, !1),
        ve && typeof ve.onPostCommitFiberRoot == "function")
      )
        try {
          ve.onPostCommitFiberRoot(pi, o);
        } catch {}
      return !0;
    } finally {
      (B.p = s), (O.T = a), sm(t, e);
    }
  }
  function om(t, e, n) {
    (e = Oe(n, e)),
      (e = zo(t.stateNode, e, 2)),
      (t = Cn(t, e, 2)),
      t !== null && (yi(t, 2), Fe(t));
  }
  function xt(t, e, n) {
    if (t.tag === 3) om(t, t, n);
    else
      for (; e !== null; ) {
        if (e.tag === 3) {
          om(e, t, n);
          break;
        } else if (e.tag === 1) {
          var a = e.stateNode;
          if (
            typeof e.type.getDerivedStateFromError == "function" ||
            (typeof a.componentDidCatch == "function" &&
              (Vn === null || !Vn.has(a)))
          ) {
            (t = Oe(n, t)),
              (n = rd(2)),
              (a = Cn(e, n, 2)),
              a !== null && (cd(n, a, e, t), yi(a, 2), Fe(a));
            break;
          }
        }
        e = e.return;
      }
  }
  function tr(t, e, n) {
    var a = t.pingCache;
    if (a === null) {
      a = t.pingCache = new Ov();
      var s = new Set();
      a.set(e, s);
    } else (s = a.get(e)), s === void 0 && ((s = new Set()), a.set(e, s));
    s.has(n) ||
      ((Ko = !0), s.add(n), (t = Bv.bind(null, t, e, n)), e.then(t, t));
  }
  function Bv(t, e, n) {
    var a = t.pingCache;
    a !== null && a.delete(e),
      (t.pingedLanes |= t.suspendedLanes & n),
      (t.warmLanes &= ~n),
      wt === t &&
        (ht & n) === n &&
        (Bt === 4 || (Bt === 3 && (ht & 62914560) === ht && 300 > ye() - ys)
          ? (bt & 2) === 0 && Wa(t, 0)
          : (Jo |= n),
        ka === ht && (ka = 0)),
      Fe(t);
  }
  function rm(t, e) {
    e === 0 && (e = nf()), (t = ta(t, e)), t !== null && (yi(t, e), Fe(t));
  }
  function Uv(t) {
    var e = t.memoizedState,
      n = 0;
    e !== null && (n = e.retryLane), rm(t, n);
  }
  function Hv(t, e) {
    var n = 0;
    switch (t.tag) {
      case 31:
      case 13:
        var a = t.stateNode,
          s = t.memoizedState;
        s !== null && (n = s.retryLane);
        break;
      case 19:
        a = t.stateNode;
        break;
      case 22:
        a = t.stateNode._retryCache;
        break;
      default:
        throw Error(r(314));
    }
    a !== null && a.delete(e), rm(t, n);
  }
  function Lv(t, e) {
    return hu(t, e);
  }
  var Es = null,
    $a = null,
    er = !1,
    Ms = !1,
    nr = !1,
    Un = 0;
  function Fe(t) {
    t !== $a &&
      t.next === null &&
      ($a === null ? (Es = $a = t) : ($a = $a.next = t)),
      (Ms = !0),
      er || ((er = !0), Yv());
  }
  function Pi(t, e) {
    if (!nr && Ms) {
      nr = !0;
      do
        for (var n = !1, a = Es; a !== null; ) {
          if (t !== 0) {
            var s = a.pendingLanes;
            if (s === 0) var o = 0;
            else {
              var f = a.suspendedLanes,
                p = a.pingedLanes;
              (o = (1 << (31 - be(42 | t) + 1)) - 1),
                (o &= s & ~(f & ~p)),
                (o = o & 201326741 ? (o & 201326741) | 1 : o ? o | 2 : 0);
            }
            o !== 0 && ((n = !0), dm(a, o));
          } else
            (o = ht),
              (o = zl(
                a,
                a === wt ? o : 0,
                a.cancelPendingCommit !== null || a.timeoutHandle !== -1
              )),
              (o & 3) === 0 || gi(a, o) || ((n = !0), dm(a, o));
          a = a.next;
        }
      while (n);
      nr = !1;
    }
  }
  function qv() {
    cm();
  }
  function cm() {
    Ms = er = !1;
    var t = 0;
    Un !== 0 && Pv() && (t = Un);
    for (var e = ye(), n = null, a = Es; a !== null; ) {
      var s = a.next,
        o = fm(a, e);
      o === 0
        ? ((a.next = null),
          n === null ? (Es = s) : (n.next = s),
          s === null && ($a = n))
        : ((n = a), (t !== 0 || (o & 3) !== 0) && (Ms = !0)),
        (a = s);
    }
    (Jt !== 0 && Jt !== 5) || Pi(t), Un !== 0 && (Un = 0);
  }
  function fm(t, e) {
    for (
      var n = t.suspendedLanes,
        a = t.pingedLanes,
        s = t.expirationTimes,
        o = t.pendingLanes & -62914561;
      0 < o;

    ) {
      var f = 31 - be(o),
        p = 1 << f,
        S = s[f];
      S === -1
        ? ((p & n) === 0 || (p & a) !== 0) && (s[f] = d0(p, e))
        : S <= e && (t.expiredLanes |= p),
        (o &= ~p);
    }
    if (
      ((e = wt),
      (n = ht),
      (n = zl(
        t,
        t === e ? n : 0,
        t.cancelPendingCommit !== null || t.timeoutHandle !== -1
      )),
      (a = t.callbackNode),
      n === 0 ||
        (t === e && (Tt === 2 || Tt === 9)) ||
        t.cancelPendingCommit !== null)
    )
      return (
        a !== null && a !== null && du(a),
        (t.callbackNode = null),
        (t.callbackPriority = 0)
      );
    if ((n & 3) === 0 || gi(t, n)) {
      if (((e = n & -n), e === t.callbackPriority)) return e;
      switch ((a !== null && du(a), gu(n))) {
        case 2:
        case 8:
          n = tf;
          break;
        case 32:
          n = Ml;
          break;
        case 268435456:
          n = ef;
          break;
        default:
          n = Ml;
      }
      return (
        (a = hm.bind(null, t)),
        (n = hu(n, a)),
        (t.callbackPriority = e),
        (t.callbackNode = n),
        e
      );
    }
    return (
      a !== null && a !== null && du(a),
      (t.callbackPriority = 2),
      (t.callbackNode = null),
      2
    );
  }
  function hm(t, e) {
    if (Jt !== 0 && Jt !== 5)
      return (t.callbackNode = null), (t.callbackPriority = 0), null;
    var n = t.callbackNode;
    if (As() && t.callbackNode !== n) return null;
    var a = ht;
    return (
      (a = zl(
        t,
        t === wt ? a : 0,
        t.cancelPendingCommit !== null || t.timeoutHandle !== -1
      )),
      a === 0
        ? null
        : (Jd(t, a, e),
          fm(t, ye()),
          t.callbackNode != null && t.callbackNode === n
            ? hm.bind(null, t)
            : null)
    );
  }
  function dm(t, e) {
    if (As()) return null;
    Jd(t, e, !0);
  }
  function Yv() {
    Iv(function () {
      (bt & 6) !== 0 ? hu(Ic, qv) : cm();
    });
  }
  function ar() {
    if (Un === 0) {
      var t = Ua;
      t === 0 && ((t = Dl), (Dl <<= 1), (Dl & 261888) === 0 && (Dl = 256)),
        (Un = t);
    }
    return Un;
  }
  function mm(t) {
    return t == null || typeof t == "symbol" || typeof t == "boolean"
      ? null
      : typeof t == "function"
      ? t
      : Nl("" + t);
  }
  function pm(t, e) {
    var n = e.ownerDocument.createElement("input");
    return (
      (n.name = e.name),
      (n.value = e.value),
      t.id && n.setAttribute("form", t.id),
      e.parentNode.insertBefore(n, e),
      (t = new FormData(t)),
      n.parentNode.removeChild(n),
      t
    );
  }
  function Gv(t, e, n, a, s) {
    if (e === "submit" && n && n.stateNode === s) {
      var o = mm((s[re] || null).action),
        f = a.submitter;
      f &&
        ((e = (e = f[re] || null)
          ? mm(e.formAction)
          : f.getAttribute("formAction")),
        e !== null && ((o = e), (f = null)));
      var p = new Ul("action", "action", null, a, s);
      t.push({
        event: p,
        listeners: [
          {
            instance: null,
            listener: function () {
              if (a.defaultPrevented) {
                if (Un !== 0) {
                  var S = f ? pm(s, f) : new FormData(s);
                  Ao(
                    n,
                    { pending: !0, data: S, method: s.method, action: o },
                    null,
                    S
                  );
                }
              } else
                typeof o == "function" &&
                  (p.preventDefault(),
                  (S = f ? pm(s, f) : new FormData(s)),
                  Ao(
                    n,
                    { pending: !0, data: S, method: s.method, action: o },
                    o,
                    S
                  ));
            },
            currentTarget: s,
          },
        ],
      });
    }
  }
  for (var ir = 0; ir < Lu.length; ir++) {
    var lr = Lu[ir],
      Xv = lr.toLowerCase(),
      Zv = lr[0].toUpperCase() + lr.slice(1);
    Ye(Xv, "on" + Zv);
  }
  Ye(Kf, "onAnimationEnd"),
    Ye(Jf, "onAnimationIteration"),
    Ye(kf, "onAnimationStart"),
    Ye("dblclick", "onDoubleClick"),
    Ye("focusin", "onFocus"),
    Ye("focusout", "onBlur"),
    Ye(sv, "onTransitionRun"),
    Ye(uv, "onTransitionStart"),
    Ye(ov, "onTransitionCancel"),
    Ye(Ff, "onTransitionEnd"),
    Aa("onMouseEnter", ["mouseout", "mouseover"]),
    Aa("onMouseLeave", ["mouseout", "mouseover"]),
    Aa("onPointerEnter", ["pointerout", "pointerover"]),
    Aa("onPointerLeave", ["pointerout", "pointerover"]),
    Wn(
      "onChange",
      "change click focusin focusout input keydown keyup selectionchange".split(
        " "
      )
    ),
    Wn(
      "onSelect",
      "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
        " "
      )
    ),
    Wn("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]),
    Wn(
      "onCompositionEnd",
      "compositionend focusout keydown keypress keyup mousedown".split(" ")
    ),
    Wn(
      "onCompositionStart",
      "compositionstart focusout keydown keypress keyup mousedown".split(" ")
    ),
    Wn(
      "onCompositionUpdate",
      "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
    );
  var $i =
      "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
        " "
      ),
    Qv = new Set(
      "beforetoggle cancel close invalid load scroll scrollend toggle"
        .split(" ")
        .concat($i)
    );
  function gm(t, e) {
    e = (e & 4) !== 0;
    for (var n = 0; n < t.length; n++) {
      var a = t[n],
        s = a.event;
      a = a.listeners;
      t: {
        var o = void 0;
        if (e)
          for (var f = a.length - 1; 0 <= f; f--) {
            var p = a[f],
              S = p.instance,
              w = p.currentTarget;
            if (((p = p.listener), S !== o && s.isPropagationStopped()))
              break t;
            (o = p), (s.currentTarget = w);
            try {
              o(s);
            } catch (j) {
              ql(j);
            }
            (s.currentTarget = null), (o = S);
          }
        else
          for (f = 0; f < a.length; f++) {
            if (
              ((p = a[f]),
              (S = p.instance),
              (w = p.currentTarget),
              (p = p.listener),
              S !== o && s.isPropagationStopped())
            )
              break t;
            (o = p), (s.currentTarget = w);
            try {
              o(s);
            } catch (j) {
              ql(j);
            }
            (s.currentTarget = null), (o = S);
          }
      }
    }
  }
  function ft(t, e) {
    var n = e[yu];
    n === void 0 && (n = e[yu] = new Set());
    var a = t + "__bubble";
    n.has(a) || (ym(e, t, 2, !1), n.add(a));
  }
  function sr(t, e, n) {
    var a = 0;
    e && (a |= 4), ym(n, t, a, e);
  }
  var Ds = "_reactListening" + Math.random().toString(36).slice(2);
  function ur(t) {
    if (!t[Ds]) {
      (t[Ds] = !0),
        cf.forEach(function (n) {
          n !== "selectionchange" && (Qv.has(n) || sr(n, !1, t), sr(n, !0, t));
        });
      var e = t.nodeType === 9 ? t : t.ownerDocument;
      e === null || e[Ds] || ((e[Ds] = !0), sr("selectionchange", !1, e));
    }
  }
  function ym(t, e, n, a) {
    switch (Km(e)) {
      case 2:
        var s = b1;
        break;
      case 8:
        s = S1;
        break;
      default:
        s = xr;
    }
    (n = s.bind(null, e, n, t)),
      (s = void 0),
      !Du ||
        (e !== "touchstart" && e !== "touchmove" && e !== "wheel") ||
        (s = !0),
      a
        ? s !== void 0
          ? t.addEventListener(e, n, { capture: !0, passive: s })
          : t.addEventListener(e, n, !0)
        : s !== void 0
        ? t.addEventListener(e, n, { passive: s })
        : t.addEventListener(e, n, !1);
  }
  function or(t, e, n, a, s) {
    var o = a;
    if ((e & 1) === 0 && (e & 2) === 0 && a !== null)
      t: for (;;) {
        if (a === null) return;
        var f = a.tag;
        if (f === 3 || f === 4) {
          var p = a.stateNode.containerInfo;
          if (p === s) break;
          if (f === 4)
            for (f = a.return; f !== null; ) {
              var S = f.tag;
              if ((S === 3 || S === 4) && f.stateNode.containerInfo === s)
                return;
              f = f.return;
            }
          for (; p !== null; ) {
            if (((f = Sa(p)), f === null)) return;
            if (((S = f.tag), S === 5 || S === 6 || S === 26 || S === 27)) {
              a = o = f;
              continue t;
            }
            p = p.parentNode;
          }
        }
        a = a.return;
      }
    xf(function () {
      var w = o,
        j = Eu(n),
        V = [];
      t: {
        var C = Wf.get(t);
        if (C !== void 0) {
          var z = Ul,
            J = t;
          switch (t) {
            case "keypress":
              if (_l(n) === 0) break t;
            case "keydown":
            case "keyup":
              z = H0;
              break;
            case "focusin":
              (J = "focus"), (z = ju);
              break;
            case "focusout":
              (J = "blur"), (z = ju);
              break;
            case "beforeblur":
            case "afterblur":
              z = ju;
              break;
            case "click":
              if (n.button === 2) break t;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              z = Mf;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              z = D0;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              z = Y0;
              break;
            case Kf:
            case Jf:
            case kf:
              z = z0;
              break;
            case Ff:
              z = X0;
              break;
            case "scroll":
            case "scrollend":
              z = E0;
              break;
            case "wheel":
              z = Q0;
              break;
            case "copy":
            case "cut":
            case "paste":
              z = O0;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              z = wf;
              break;
            case "toggle":
            case "beforetoggle":
              z = J0;
          }
          var nt = (e & 4) !== 0,
            Mt = !nt && (t === "scroll" || t === "scrollend"),
            M = nt ? (C !== null ? C + "Capture" : null) : C;
          nt = [];
          for (var x = w, D; x !== null; ) {
            var N = x;
            if (
              ((D = N.stateNode),
              (N = N.tag),
              (N !== 5 && N !== 26 && N !== 27) ||
                D === null ||
                M === null ||
                ((N = Si(x, M)), N != null && nt.push(Ii(x, N, D))),
              Mt)
            )
              break;
            x = x.return;
          }
          0 < nt.length &&
            ((C = new z(C, J, null, n, j)),
            V.push({ event: C, listeners: nt }));
        }
      }
      if ((e & 7) === 0) {
        t: {
          if (
            ((C = t === "mouseover" || t === "pointerover"),
            (z = t === "mouseout" || t === "pointerout"),
            C &&
              n !== Au &&
              (J = n.relatedTarget || n.fromElement) &&
              (Sa(J) || J[ba]))
          )
            break t;
          if (
            (z || C) &&
            ((C =
              j.window === j
                ? j
                : (C = j.ownerDocument)
                ? C.defaultView || C.parentWindow
                : window),
            z
              ? ((J = n.relatedTarget || n.toElement),
                (z = w),
                (J = J ? Sa(J) : null),
                J !== null &&
                  ((Mt = d(J)),
                  (nt = J.tag),
                  J !== Mt || (nt !== 5 && nt !== 27 && nt !== 6)) &&
                  (J = null))
              : ((z = null), (J = w)),
            z !== J)
          ) {
            if (
              ((nt = Mf),
              (N = "onMouseLeave"),
              (M = "onMouseEnter"),
              (x = "mouse"),
              (t === "pointerout" || t === "pointerover") &&
                ((nt = wf),
                (N = "onPointerLeave"),
                (M = "onPointerEnter"),
                (x = "pointer")),
              (Mt = z == null ? C : bi(z)),
              (D = J == null ? C : bi(J)),
              (C = new nt(N, x + "leave", z, n, j)),
              (C.target = Mt),
              (C.relatedTarget = D),
              (N = null),
              Sa(j) === w &&
                ((nt = new nt(M, x + "enter", J, n, j)),
                (nt.target = D),
                (nt.relatedTarget = Mt),
                (N = nt)),
              (Mt = N),
              z && J)
            )
              e: {
                for (nt = Kv, M = z, x = J, D = 0, N = M; N; N = nt(N)) D++;
                N = 0;
                for (var I = x; I; I = nt(I)) N++;
                for (; 0 < D - N; ) (M = nt(M)), D--;
                for (; 0 < N - D; ) (x = nt(x)), N--;
                for (; D--; ) {
                  if (M === x || (x !== null && M === x.alternate)) {
                    nt = M;
                    break e;
                  }
                  (M = nt(M)), (x = nt(x));
                }
                nt = null;
              }
            else nt = null;
            z !== null && vm(V, C, z, nt, !1),
              J !== null && Mt !== null && vm(V, Mt, J, nt, !0);
          }
        }
        t: {
          if (
            ((C = w ? bi(w) : window),
            (z = C.nodeName && C.nodeName.toLowerCase()),
            z === "select" || (z === "input" && C.type === "file"))
          )
            var gt = _f;
          else if (Nf(C))
            if (Bf) gt = av;
            else {
              gt = ev;
              var P = tv;
            }
          else
            (z = C.nodeName),
              !z ||
              z.toLowerCase() !== "input" ||
              (C.type !== "checkbox" && C.type !== "radio")
                ? w && xu(w.elementType) && (gt = _f)
                : (gt = nv);
          if (gt && (gt = gt(t, w))) {
            Vf(V, gt, n, j);
            break t;
          }
          P && P(t, C, w),
            t === "focusout" &&
              w &&
              C.type === "number" &&
              w.memoizedProps.value != null &&
              Tu(C, "number", C.value);
        }
        switch (((P = w ? bi(w) : window), t)) {
          case "focusin":
            (Nf(P) || P.contentEditable === "true") &&
              ((za = P), (Bu = w), (Ci = null));
            break;
          case "focusout":
            Ci = Bu = za = null;
            break;
          case "mousedown":
            Uu = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            (Uu = !1), Zf(V, n, j);
            break;
          case "selectionchange":
            if (lv) break;
          case "keydown":
          case "keyup":
            Zf(V, n, j);
        }
        var ot;
        if (Ru)
          t: {
            switch (t) {
              case "compositionstart":
                var dt = "onCompositionStart";
                break t;
              case "compositionend":
                dt = "onCompositionEnd";
                break t;
              case "compositionupdate":
                dt = "onCompositionUpdate";
                break t;
            }
            dt = void 0;
          }
        else
          Ca
            ? Of(t, n) && (dt = "onCompositionEnd")
            : t === "keydown" &&
              n.keyCode === 229 &&
              (dt = "onCompositionStart");
        dt &&
          (Cf &&
            n.locale !== "ko" &&
            (Ca || dt !== "onCompositionStart"
              ? dt === "onCompositionEnd" && Ca && (ot = Af())
              : ((Tn = j),
                (wu = "value" in Tn ? Tn.value : Tn.textContent),
                (Ca = !0))),
          (P = ws(w, dt)),
          0 < P.length &&
            ((dt = new Df(dt, t, null, n, j)),
            V.push({ event: dt, listeners: P }),
            ot
              ? (dt.data = ot)
              : ((ot = Rf(n)), ot !== null && (dt.data = ot)))),
          (ot = F0 ? W0(t, n) : P0(t, n)) &&
            ((dt = ws(w, "onBeforeInput")),
            0 < dt.length &&
              ((P = new Df("onBeforeInput", "beforeinput", null, n, j)),
              V.push({ event: P, listeners: dt }),
              (P.data = ot))),
          Gv(V, t, w, n, j);
      }
      gm(V, e);
    });
  }
  function Ii(t, e, n) {
    return { instance: t, listener: e, currentTarget: n };
  }
  function ws(t, e) {
    for (var n = e + "Capture", a = []; t !== null; ) {
      var s = t,
        o = s.stateNode;
      if (
        ((s = s.tag),
        (s !== 5 && s !== 26 && s !== 27) ||
          o === null ||
          ((s = Si(t, n)),
          s != null && a.unshift(Ii(t, s, o)),
          (s = Si(t, e)),
          s != null && a.push(Ii(t, s, o))),
        t.tag === 3)
      )
        return a;
      t = t.return;
    }
    return [];
  }
  function Kv(t) {
    if (t === null) return null;
    do t = t.return;
    while (t && t.tag !== 5 && t.tag !== 27);
    return t || null;
  }
  function vm(t, e, n, a, s) {
    for (var o = e._reactName, f = []; n !== null && n !== a; ) {
      var p = n,
        S = p.alternate,
        w = p.stateNode;
      if (((p = p.tag), S !== null && S === a)) break;
      (p !== 5 && p !== 26 && p !== 27) ||
        w === null ||
        ((S = w),
        s
          ? ((w = Si(n, o)), w != null && f.unshift(Ii(n, w, S)))
          : s || ((w = Si(n, o)), w != null && f.push(Ii(n, w, S)))),
        (n = n.return);
    }
    f.length !== 0 && t.push({ event: e, listeners: f });
  }
  var Jv = /\r\n?/g,
    kv = /\u0000|\uFFFD/g;
  function bm(t) {
    return (typeof t == "string" ? t : "" + t)
      .replace(
        Jv,
        `
`
      )
      .replace(kv, "");
  }
  function Sm(t, e) {
    return (e = bm(e)), bm(t) === e;
  }
  function Et(t, e, n, a, s, o) {
    switch (n) {
      case "children":
        typeof a == "string"
          ? e === "body" || (e === "textarea" && a === "") || Ma(t, a)
          : (typeof a == "number" || typeof a == "bigint") &&
            e !== "body" &&
            Ma(t, "" + a);
        break;
      case "className":
        Ol(t, "class", a);
        break;
      case "tabIndex":
        Ol(t, "tabindex", a);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        Ol(t, n, a);
        break;
      case "style":
        Sf(t, a, o);
        break;
      case "data":
        if (e !== "object") {
          Ol(t, "data", a);
          break;
        }
      case "src":
      case "href":
        if (a === "" && (e !== "a" || n !== "href")) {
          t.removeAttribute(n);
          break;
        }
        if (
          a == null ||
          typeof a == "function" ||
          typeof a == "symbol" ||
          typeof a == "boolean"
        ) {
          t.removeAttribute(n);
          break;
        }
        (a = Nl("" + a)), t.setAttribute(n, a);
        break;
      case "action":
      case "formAction":
        if (typeof a == "function") {
          t.setAttribute(
            n,
            "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')"
          );
          break;
        } else
          typeof o == "function" &&
            (n === "formAction"
              ? (e !== "input" && Et(t, e, "name", s.name, s, null),
                Et(t, e, "formEncType", s.formEncType, s, null),
                Et(t, e, "formMethod", s.formMethod, s, null),
                Et(t, e, "formTarget", s.formTarget, s, null))
              : (Et(t, e, "encType", s.encType, s, null),
                Et(t, e, "method", s.method, s, null),
                Et(t, e, "target", s.target, s, null)));
        if (a == null || typeof a == "symbol" || typeof a == "boolean") {
          t.removeAttribute(n);
          break;
        }
        (a = Nl("" + a)), t.setAttribute(n, a);
        break;
      case "onClick":
        a != null && (t.onclick = Ie);
        break;
      case "onScroll":
        a != null && ft("scroll", t);
        break;
      case "onScrollEnd":
        a != null && ft("scrollend", t);
        break;
      case "dangerouslySetInnerHTML":
        if (a != null) {
          if (typeof a != "object" || !("__html" in a)) throw Error(r(61));
          if (((n = a.__html), n != null)) {
            if (s.children != null) throw Error(r(60));
            t.innerHTML = n;
          }
        }
        break;
      case "multiple":
        t.multiple = a && typeof a != "function" && typeof a != "symbol";
        break;
      case "muted":
        t.muted = a && typeof a != "function" && typeof a != "symbol";
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "defaultValue":
      case "defaultChecked":
      case "innerHTML":
      case "ref":
        break;
      case "autoFocus":
        break;
      case "xlinkHref":
        if (
          a == null ||
          typeof a == "function" ||
          typeof a == "boolean" ||
          typeof a == "symbol"
        ) {
          t.removeAttribute("xlink:href");
          break;
        }
        (n = Nl("" + a)),
          t.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", n);
        break;
      case "contentEditable":
      case "spellCheck":
      case "draggable":
      case "value":
      case "autoReverse":
      case "externalResourcesRequired":
      case "focusable":
      case "preserveAlpha":
        a != null && typeof a != "function" && typeof a != "symbol"
          ? t.setAttribute(n, "" + a)
          : t.removeAttribute(n);
        break;
      case "inert":
      case "allowFullScreen":
      case "async":
      case "autoPlay":
      case "controls":
      case "default":
      case "defer":
      case "disabled":
      case "disablePictureInPicture":
      case "disableRemotePlayback":
      case "formNoValidate":
      case "hidden":
      case "loop":
      case "noModule":
      case "noValidate":
      case "open":
      case "playsInline":
      case "readOnly":
      case "required":
      case "reversed":
      case "scoped":
      case "seamless":
      case "itemScope":
        a && typeof a != "function" && typeof a != "symbol"
          ? t.setAttribute(n, "")
          : t.removeAttribute(n);
        break;
      case "capture":
      case "download":
        a === !0
          ? t.setAttribute(n, "")
          : a !== !1 &&
            a != null &&
            typeof a != "function" &&
            typeof a != "symbol"
          ? t.setAttribute(n, a)
          : t.removeAttribute(n);
        break;
      case "cols":
      case "rows":
      case "size":
      case "span":
        a != null &&
        typeof a != "function" &&
        typeof a != "symbol" &&
        !isNaN(a) &&
        1 <= a
          ? t.setAttribute(n, a)
          : t.removeAttribute(n);
        break;
      case "rowSpan":
      case "start":
        a == null || typeof a == "function" || typeof a == "symbol" || isNaN(a)
          ? t.removeAttribute(n)
          : t.setAttribute(n, a);
        break;
      case "popover":
        ft("beforetoggle", t), ft("toggle", t), jl(t, "popover", a);
        break;
      case "xlinkActuate":
        $e(t, "http://www.w3.org/1999/xlink", "xlink:actuate", a);
        break;
      case "xlinkArcrole":
        $e(t, "http://www.w3.org/1999/xlink", "xlink:arcrole", a);
        break;
      case "xlinkRole":
        $e(t, "http://www.w3.org/1999/xlink", "xlink:role", a);
        break;
      case "xlinkShow":
        $e(t, "http://www.w3.org/1999/xlink", "xlink:show", a);
        break;
      case "xlinkTitle":
        $e(t, "http://www.w3.org/1999/xlink", "xlink:title", a);
        break;
      case "xlinkType":
        $e(t, "http://www.w3.org/1999/xlink", "xlink:type", a);
        break;
      case "xmlBase":
        $e(t, "http://www.w3.org/XML/1998/namespace", "xml:base", a);
        break;
      case "xmlLang":
        $e(t, "http://www.w3.org/XML/1998/namespace", "xml:lang", a);
        break;
      case "xmlSpace":
        $e(t, "http://www.w3.org/XML/1998/namespace", "xml:space", a);
        break;
      case "is":
        jl(t, "is", a);
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        (!(2 < n.length) ||
          (n[0] !== "o" && n[0] !== "O") ||
          (n[1] !== "n" && n[1] !== "N")) &&
          ((n = x0.get(n) || n), jl(t, n, a));
    }
  }
  function rr(t, e, n, a, s, o) {
    switch (n) {
      case "style":
        Sf(t, a, o);
        break;
      case "dangerouslySetInnerHTML":
        if (a != null) {
          if (typeof a != "object" || !("__html" in a)) throw Error(r(61));
          if (((n = a.__html), n != null)) {
            if (s.children != null) throw Error(r(60));
            t.innerHTML = n;
          }
        }
        break;
      case "children":
        typeof a == "string"
          ? Ma(t, a)
          : (typeof a == "number" || typeof a == "bigint") && Ma(t, "" + a);
        break;
      case "onScroll":
        a != null && ft("scroll", t);
        break;
      case "onScrollEnd":
        a != null && ft("scrollend", t);
        break;
      case "onClick":
        a != null && (t.onclick = Ie);
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "innerHTML":
      case "ref":
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        if (!ff.hasOwnProperty(n))
          t: {
            if (
              n[0] === "o" &&
              n[1] === "n" &&
              ((s = n.endsWith("Capture")),
              (e = n.slice(2, s ? n.length - 7 : void 0)),
              (o = t[re] || null),
              (o = o != null ? o[n] : null),
              typeof o == "function" && t.removeEventListener(e, o, s),
              typeof a == "function")
            ) {
              typeof o != "function" &&
                o !== null &&
                (n in t
                  ? (t[n] = null)
                  : t.hasAttribute(n) && t.removeAttribute(n)),
                t.addEventListener(e, a, s);
              break t;
            }
            n in t
              ? (t[n] = a)
              : a === !0
              ? t.setAttribute(n, "")
              : jl(t, n, a);
          }
    }
  }
  function ee(t, e, n) {
    switch (e) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "img":
        ft("error", t), ft("load", t);
        var a = !1,
          s = !1,
          o;
        for (o in n)
          if (n.hasOwnProperty(o)) {
            var f = n[o];
            if (f != null)
              switch (o) {
                case "src":
                  a = !0;
                  break;
                case "srcSet":
                  s = !0;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  throw Error(r(137, e));
                default:
                  Et(t, e, o, f, n, null);
              }
          }
        s && Et(t, e, "srcSet", n.srcSet, n, null),
          a && Et(t, e, "src", n.src, n, null);
        return;
      case "input":
        ft("invalid", t);
        var p = (o = f = s = null),
          S = null,
          w = null;
        for (a in n)
          if (n.hasOwnProperty(a)) {
            var j = n[a];
            if (j != null)
              switch (a) {
                case "name":
                  s = j;
                  break;
                case "type":
                  f = j;
                  break;
                case "checked":
                  S = j;
                  break;
                case "defaultChecked":
                  w = j;
                  break;
                case "value":
                  o = j;
                  break;
                case "defaultValue":
                  p = j;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (j != null) throw Error(r(137, e));
                  break;
                default:
                  Et(t, e, a, j, n, null);
              }
          }
        gf(t, o, p, S, w, f, s, !1);
        return;
      case "select":
        ft("invalid", t), (a = f = o = null);
        for (s in n)
          if (n.hasOwnProperty(s) && ((p = n[s]), p != null))
            switch (s) {
              case "value":
                o = p;
                break;
              case "defaultValue":
                f = p;
                break;
              case "multiple":
                a = p;
              default:
                Et(t, e, s, p, n, null);
            }
        (e = o),
          (n = f),
          (t.multiple = !!a),
          e != null ? Ea(t, !!a, e, !1) : n != null && Ea(t, !!a, n, !0);
        return;
      case "textarea":
        ft("invalid", t), (o = s = a = null);
        for (f in n)
          if (n.hasOwnProperty(f) && ((p = n[f]), p != null))
            switch (f) {
              case "value":
                a = p;
                break;
              case "defaultValue":
                s = p;
                break;
              case "children":
                o = p;
                break;
              case "dangerouslySetInnerHTML":
                if (p != null) throw Error(r(91));
                break;
              default:
                Et(t, e, f, p, n, null);
            }
        vf(t, a, s, o);
        return;
      case "option":
        for (S in n)
          if (n.hasOwnProperty(S) && ((a = n[S]), a != null))
            switch (S) {
              case "selected":
                t.selected =
                  a && typeof a != "function" && typeof a != "symbol";
                break;
              default:
                Et(t, e, S, a, n, null);
            }
        return;
      case "dialog":
        ft("beforetoggle", t), ft("toggle", t), ft("cancel", t), ft("close", t);
        break;
      case "iframe":
      case "object":
        ft("load", t);
        break;
      case "video":
      case "audio":
        for (a = 0; a < $i.length; a++) ft($i[a], t);
        break;
      case "image":
        ft("error", t), ft("load", t);
        break;
      case "details":
        ft("toggle", t);
        break;
      case "embed":
      case "source":
      case "link":
        ft("error", t), ft("load", t);
      case "area":
      case "base":
      case "br":
      case "col":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "track":
      case "wbr":
      case "menuitem":
        for (w in n)
          if (n.hasOwnProperty(w) && ((a = n[w]), a != null))
            switch (w) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(r(137, e));
              default:
                Et(t, e, w, a, n, null);
            }
        return;
      default:
        if (xu(e)) {
          for (j in n)
            n.hasOwnProperty(j) &&
              ((a = n[j]), a !== void 0 && rr(t, e, j, a, n, void 0));
          return;
        }
    }
    for (p in n)
      n.hasOwnProperty(p) && ((a = n[p]), a != null && Et(t, e, p, a, n, null));
  }
  function Fv(t, e, n, a) {
    switch (e) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "input":
        var s = null,
          o = null,
          f = null,
          p = null,
          S = null,
          w = null,
          j = null;
        for (z in n) {
          var V = n[z];
          if (n.hasOwnProperty(z) && V != null)
            switch (z) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                S = V;
              default:
                a.hasOwnProperty(z) || Et(t, e, z, null, a, V);
            }
        }
        for (var C in a) {
          var z = a[C];
          if (((V = n[C]), a.hasOwnProperty(C) && (z != null || V != null)))
            switch (C) {
              case "type":
                o = z;
                break;
              case "name":
                s = z;
                break;
              case "checked":
                w = z;
                break;
              case "defaultChecked":
                j = z;
                break;
              case "value":
                f = z;
                break;
              case "defaultValue":
                p = z;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (z != null) throw Error(r(137, e));
                break;
              default:
                z !== V && Et(t, e, C, z, a, V);
            }
        }
        Su(t, f, p, S, w, j, o, s);
        return;
      case "select":
        z = f = p = C = null;
        for (o in n)
          if (((S = n[o]), n.hasOwnProperty(o) && S != null))
            switch (o) {
              case "value":
                break;
              case "multiple":
                z = S;
              default:
                a.hasOwnProperty(o) || Et(t, e, o, null, a, S);
            }
        for (s in a)
          if (
            ((o = a[s]),
            (S = n[s]),
            a.hasOwnProperty(s) && (o != null || S != null))
          )
            switch (s) {
              case "value":
                C = o;
                break;
              case "defaultValue":
                p = o;
                break;
              case "multiple":
                f = o;
              default:
                o !== S && Et(t, e, s, o, a, S);
            }
        (e = p),
          (n = f),
          (a = z),
          C != null
            ? Ea(t, !!n, C, !1)
            : !!a != !!n &&
              (e != null ? Ea(t, !!n, e, !0) : Ea(t, !!n, n ? [] : "", !1));
        return;
      case "textarea":
        z = C = null;
        for (p in n)
          if (
            ((s = n[p]),
            n.hasOwnProperty(p) && s != null && !a.hasOwnProperty(p))
          )
            switch (p) {
              case "value":
                break;
              case "children":
                break;
              default:
                Et(t, e, p, null, a, s);
            }
        for (f in a)
          if (
            ((s = a[f]),
            (o = n[f]),
            a.hasOwnProperty(f) && (s != null || o != null))
          )
            switch (f) {
              case "value":
                C = s;
                break;
              case "defaultValue":
                z = s;
                break;
              case "children":
                break;
              case "dangerouslySetInnerHTML":
                if (s != null) throw Error(r(91));
                break;
              default:
                s !== o && Et(t, e, f, s, a, o);
            }
        yf(t, C, z);
        return;
      case "option":
        for (var J in n)
          if (
            ((C = n[J]),
            n.hasOwnProperty(J) && C != null && !a.hasOwnProperty(J))
          )
            switch (J) {
              case "selected":
                t.selected = !1;
                break;
              default:
                Et(t, e, J, null, a, C);
            }
        for (S in a)
          if (
            ((C = a[S]),
            (z = n[S]),
            a.hasOwnProperty(S) && C !== z && (C != null || z != null))
          )
            switch (S) {
              case "selected":
                t.selected =
                  C && typeof C != "function" && typeof C != "symbol";
                break;
              default:
                Et(t, e, S, C, a, z);
            }
        return;
      case "img":
      case "link":
      case "area":
      case "base":
      case "br":
      case "col":
      case "embed":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "source":
      case "track":
      case "wbr":
      case "menuitem":
        for (var nt in n)
          (C = n[nt]),
            n.hasOwnProperty(nt) &&
              C != null &&
              !a.hasOwnProperty(nt) &&
              Et(t, e, nt, null, a, C);
        for (w in a)
          if (
            ((C = a[w]),
            (z = n[w]),
            a.hasOwnProperty(w) && C !== z && (C != null || z != null))
          )
            switch (w) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (C != null) throw Error(r(137, e));
                break;
              default:
                Et(t, e, w, C, a, z);
            }
        return;
      default:
        if (xu(e)) {
          for (var Mt in n)
            (C = n[Mt]),
              n.hasOwnProperty(Mt) &&
                C !== void 0 &&
                !a.hasOwnProperty(Mt) &&
                rr(t, e, Mt, void 0, a, C);
          for (j in a)
            (C = a[j]),
              (z = n[j]),
              !a.hasOwnProperty(j) ||
                C === z ||
                (C === void 0 && z === void 0) ||
                rr(t, e, j, C, a, z);
          return;
        }
    }
    for (var M in n)
      (C = n[M]),
        n.hasOwnProperty(M) &&
          C != null &&
          !a.hasOwnProperty(M) &&
          Et(t, e, M, null, a, C);
    for (V in a)
      (C = a[V]),
        (z = n[V]),
        !a.hasOwnProperty(V) ||
          C === z ||
          (C == null && z == null) ||
          Et(t, e, V, C, a, z);
  }
  function Tm(t) {
    switch (t) {
      case "css":
      case "script":
      case "font":
      case "img":
      case "image":
      case "input":
      case "link":
        return !0;
      default:
        return !1;
    }
  }
  function Wv() {
    if (typeof performance.getEntriesByType == "function") {
      for (
        var t = 0, e = 0, n = performance.getEntriesByType("resource"), a = 0;
        a < n.length;
        a++
      ) {
        var s = n[a],
          o = s.transferSize,
          f = s.initiatorType,
          p = s.duration;
        if (o && p && Tm(f)) {
          for (f = 0, p = s.responseEnd, a += 1; a < n.length; a++) {
            var S = n[a],
              w = S.startTime;
            if (w > p) break;
            var j = S.transferSize,
              V = S.initiatorType;
            j &&
              Tm(V) &&
              ((S = S.responseEnd), (f += j * (S < p ? 1 : (p - w) / (S - w))));
          }
          if ((--a, (e += (8 * (o + f)) / (s.duration / 1e3)), t++, 10 < t))
            break;
        }
      }
      if (0 < t) return e / t / 1e6;
    }
    return navigator.connection &&
      ((t = navigator.connection.downlink), typeof t == "number")
      ? t
      : 5;
  }
  var cr = null,
    fr = null;
  function Cs(t) {
    return t.nodeType === 9 ? t : t.ownerDocument;
  }
  function xm(t) {
    switch (t) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function Am(t, e) {
    if (t === 0)
      switch (e) {
        case "svg":
          return 1;
        case "math":
          return 2;
        default:
          return 0;
      }
    return t === 1 && e === "foreignObject" ? 0 : t;
  }
  function hr(t, e) {
    return (
      t === "textarea" ||
      t === "noscript" ||
      typeof e.children == "string" ||
      typeof e.children == "number" ||
      typeof e.children == "bigint" ||
      (typeof e.dangerouslySetInnerHTML == "object" &&
        e.dangerouslySetInnerHTML !== null &&
        e.dangerouslySetInnerHTML.__html != null)
    );
  }
  var dr = null;
  function Pv() {
    var t = window.event;
    return t && t.type === "popstate"
      ? t === dr
        ? !1
        : ((dr = t), !0)
      : ((dr = null), !1);
  }
  var Em = typeof setTimeout == "function" ? setTimeout : void 0,
    $v = typeof clearTimeout == "function" ? clearTimeout : void 0,
    Mm = typeof Promise == "function" ? Promise : void 0,
    Iv =
      typeof queueMicrotask == "function"
        ? queueMicrotask
        : typeof Mm < "u"
        ? function (t) {
            return Mm.resolve(null).then(t).catch(t1);
          }
        : Em;
  function t1(t) {
    setTimeout(function () {
      throw t;
    });
  }
  function Hn(t) {
    return t === "head";
  }
  function Dm(t, e) {
    var n = e,
      a = 0;
    do {
      var s = n.nextSibling;
      if ((t.removeChild(n), s && s.nodeType === 8))
        if (((n = s.data), n === "/$" || n === "/&")) {
          if (a === 0) {
            t.removeChild(s), ni(e);
            return;
          }
          a--;
        } else if (
          n === "$" ||
          n === "$?" ||
          n === "$~" ||
          n === "$!" ||
          n === "&"
        )
          a++;
        else if (n === "html") tl(t.ownerDocument.documentElement);
        else if (n === "head") {
          (n = t.ownerDocument.head), tl(n);
          for (var o = n.firstChild; o; ) {
            var f = o.nextSibling,
              p = o.nodeName;
            o[vi] ||
              p === "SCRIPT" ||
              p === "STYLE" ||
              (p === "LINK" && o.rel.toLowerCase() === "stylesheet") ||
              n.removeChild(o),
              (o = f);
          }
        } else n === "body" && tl(t.ownerDocument.body);
      n = s;
    } while (n);
    ni(e);
  }
  function wm(t, e) {
    var n = t;
    t = 0;
    do {
      var a = n.nextSibling;
      if (
        (n.nodeType === 1
          ? e
            ? ((n._stashedDisplay = n.style.display),
              (n.style.display = "none"))
            : ((n.style.display = n._stashedDisplay || ""),
              n.getAttribute("style") === "" && n.removeAttribute("style"))
          : n.nodeType === 3 &&
            (e
              ? ((n._stashedText = n.nodeValue), (n.nodeValue = ""))
              : (n.nodeValue = n._stashedText || "")),
        a && a.nodeType === 8)
      )
        if (((n = a.data), n === "/$")) {
          if (t === 0) break;
          t--;
        } else (n !== "$" && n !== "$?" && n !== "$~" && n !== "$!") || t++;
      n = a;
    } while (n);
  }
  function mr(t) {
    var e = t.firstChild;
    for (e && e.nodeType === 10 && (e = e.nextSibling); e; ) {
      var n = e;
      switch (((e = e.nextSibling), n.nodeName)) {
        case "HTML":
        case "HEAD":
        case "BODY":
          mr(n), vu(n);
          continue;
        case "SCRIPT":
        case "STYLE":
          continue;
        case "LINK":
          if (n.rel.toLowerCase() === "stylesheet") continue;
      }
      t.removeChild(n);
    }
  }
  function e1(t, e, n, a) {
    for (; t.nodeType === 1; ) {
      var s = n;
      if (t.nodeName.toLowerCase() !== e.toLowerCase()) {
        if (!a && (t.nodeName !== "INPUT" || t.type !== "hidden")) break;
      } else if (a) {
        if (!t[vi])
          switch (e) {
            case "meta":
              if (!t.hasAttribute("itemprop")) break;
              return t;
            case "link":
              if (
                ((o = t.getAttribute("rel")),
                o === "stylesheet" && t.hasAttribute("data-precedence"))
              )
                break;
              if (
                o !== s.rel ||
                t.getAttribute("href") !==
                  (s.href == null || s.href === "" ? null : s.href) ||
                t.getAttribute("crossorigin") !==
                  (s.crossOrigin == null ? null : s.crossOrigin) ||
                t.getAttribute("title") !== (s.title == null ? null : s.title)
              )
                break;
              return t;
            case "style":
              if (t.hasAttribute("data-precedence")) break;
              return t;
            case "script":
              if (
                ((o = t.getAttribute("src")),
                (o !== (s.src == null ? null : s.src) ||
                  t.getAttribute("type") !== (s.type == null ? null : s.type) ||
                  t.getAttribute("crossorigin") !==
                    (s.crossOrigin == null ? null : s.crossOrigin)) &&
                  o &&
                  t.hasAttribute("async") &&
                  !t.hasAttribute("itemprop"))
              )
                break;
              return t;
            default:
              return t;
          }
      } else if (e === "input" && t.type === "hidden") {
        var o = s.name == null ? null : "" + s.name;
        if (s.type === "hidden" && t.getAttribute("name") === o) return t;
      } else return t;
      if (((t = Be(t.nextSibling)), t === null)) break;
    }
    return null;
  }
  function n1(t, e, n) {
    if (e === "") return null;
    for (; t.nodeType !== 3; )
      if (
        ((t.nodeType !== 1 || t.nodeName !== "INPUT" || t.type !== "hidden") &&
          !n) ||
        ((t = Be(t.nextSibling)), t === null)
      )
        return null;
    return t;
  }
  function Cm(t, e) {
    for (; t.nodeType !== 8; )
      if (
        ((t.nodeType !== 1 || t.nodeName !== "INPUT" || t.type !== "hidden") &&
          !e) ||
        ((t = Be(t.nextSibling)), t === null)
      )
        return null;
    return t;
  }
  function pr(t) {
    return t.data === "$?" || t.data === "$~";
  }
  function gr(t) {
    return (
      t.data === "$!" ||
      (t.data === "$?" && t.ownerDocument.readyState !== "loading")
    );
  }
  function a1(t, e) {
    var n = t.ownerDocument;
    if (t.data === "$~") t._reactRetry = e;
    else if (t.data !== "$?" || n.readyState !== "loading") e();
    else {
      var a = function () {
        e(), n.removeEventListener("DOMContentLoaded", a);
      };
      n.addEventListener("DOMContentLoaded", a), (t._reactRetry = a);
    }
  }
  function Be(t) {
    for (; t != null; t = t.nextSibling) {
      var e = t.nodeType;
      if (e === 1 || e === 3) break;
      if (e === 8) {
        if (
          ((e = t.data),
          e === "$" ||
            e === "$!" ||
            e === "$?" ||
            e === "$~" ||
            e === "&" ||
            e === "F!" ||
            e === "F")
        )
          break;
        if (e === "/$" || e === "/&") return null;
      }
    }
    return t;
  }
  var yr = null;
  function zm(t) {
    t = t.nextSibling;
    for (var e = 0; t; ) {
      if (t.nodeType === 8) {
        var n = t.data;
        if (n === "/$" || n === "/&") {
          if (e === 0) return Be(t.nextSibling);
          e--;
        } else
          (n !== "$" && n !== "$!" && n !== "$?" && n !== "$~" && n !== "&") ||
            e++;
      }
      t = t.nextSibling;
    }
    return null;
  }
  function jm(t) {
    t = t.previousSibling;
    for (var e = 0; t; ) {
      if (t.nodeType === 8) {
        var n = t.data;
        if (n === "$" || n === "$!" || n === "$?" || n === "$~" || n === "&") {
          if (e === 0) return t;
          e--;
        } else (n !== "/$" && n !== "/&") || e++;
      }
      t = t.previousSibling;
    }
    return null;
  }
  function Om(t, e, n) {
    switch (((e = Cs(n)), t)) {
      case "html":
        if (((t = e.documentElement), !t)) throw Error(r(452));
        return t;
      case "head":
        if (((t = e.head), !t)) throw Error(r(453));
        return t;
      case "body":
        if (((t = e.body), !t)) throw Error(r(454));
        return t;
      default:
        throw Error(r(451));
    }
  }
  function tl(t) {
    for (var e = t.attributes; e.length; ) t.removeAttributeNode(e[0]);
    vu(t);
  }
  var Ue = new Map(),
    Rm = new Set();
  function zs(t) {
    return typeof t.getRootNode == "function"
      ? t.getRootNode()
      : t.nodeType === 9
      ? t
      : t.ownerDocument;
  }
  var gn = B.d;
  B.d = { f: i1, r: l1, D: s1, C: u1, L: o1, m: r1, X: f1, S: c1, M: h1 };
  function i1() {
    var t = gn.f(),
      e = Ss();
    return t || e;
  }
  function l1(t) {
    var e = Ta(t);
    e !== null && e.tag === 5 && e.type === "form" ? Fh(e) : gn.r(t);
  }
  var Ia = typeof document > "u" ? null : document;
  function Nm(t, e, n) {
    var a = Ia;
    if (a && typeof e == "string" && e) {
      var s = ze(e);
      (s = 'link[rel="' + t + '"][href="' + s + '"]'),
        typeof n == "string" && (s += '[crossorigin="' + n + '"]'),
        Rm.has(s) ||
          (Rm.add(s),
          (t = { rel: t, crossOrigin: n, href: e }),
          a.querySelector(s) === null &&
            ((e = a.createElement("link")),
            ee(e, "link", t),
            Ft(e),
            a.head.appendChild(e)));
    }
  }
  function s1(t) {
    gn.D(t), Nm("dns-prefetch", t, null);
  }
  function u1(t, e) {
    gn.C(t, e), Nm("preconnect", t, e);
  }
  function o1(t, e, n) {
    gn.L(t, e, n);
    var a = Ia;
    if (a && t && e) {
      var s = 'link[rel="preload"][as="' + ze(e) + '"]';
      e === "image" && n && n.imageSrcSet
        ? ((s += '[imagesrcset="' + ze(n.imageSrcSet) + '"]'),
          typeof n.imageSizes == "string" &&
            (s += '[imagesizes="' + ze(n.imageSizes) + '"]'))
        : (s += '[href="' + ze(t) + '"]');
      var o = s;
      switch (e) {
        case "style":
          o = ti(t);
          break;
        case "script":
          o = ei(t);
      }
      Ue.has(o) ||
        ((t = b(
          {
            rel: "preload",
            href: e === "image" && n && n.imageSrcSet ? void 0 : t,
            as: e,
          },
          n
        )),
        Ue.set(o, t),
        a.querySelector(s) !== null ||
          (e === "style" && a.querySelector(el(o))) ||
          (e === "script" && a.querySelector(nl(o))) ||
          ((e = a.createElement("link")),
          ee(e, "link", t),
          Ft(e),
          a.head.appendChild(e)));
    }
  }
  function r1(t, e) {
    gn.m(t, e);
    var n = Ia;
    if (n && t) {
      var a = e && typeof e.as == "string" ? e.as : "script",
        s =
          'link[rel="modulepreload"][as="' + ze(a) + '"][href="' + ze(t) + '"]',
        o = s;
      switch (a) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          o = ei(t);
      }
      if (
        !Ue.has(o) &&
        ((t = b({ rel: "modulepreload", href: t }, e)),
        Ue.set(o, t),
        n.querySelector(s) === null)
      ) {
        switch (a) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (n.querySelector(nl(o))) return;
        }
        (a = n.createElement("link")),
          ee(a, "link", t),
          Ft(a),
          n.head.appendChild(a);
      }
    }
  }
  function c1(t, e, n) {
    gn.S(t, e, n);
    var a = Ia;
    if (a && t) {
      var s = xa(a).hoistableStyles,
        o = ti(t);
      e = e || "default";
      var f = s.get(o);
      if (!f) {
        var p = { loading: 0, preload: null };
        if ((f = a.querySelector(el(o)))) p.loading = 5;
        else {
          (t = b({ rel: "stylesheet", href: t, "data-precedence": e }, n)),
            (n = Ue.get(o)) && vr(t, n);
          var S = (f = a.createElement("link"));
          Ft(S),
            ee(S, "link", t),
            (S._p = new Promise(function (w, j) {
              (S.onload = w), (S.onerror = j);
            })),
            S.addEventListener("load", function () {
              p.loading |= 1;
            }),
            S.addEventListener("error", function () {
              p.loading |= 2;
            }),
            (p.loading |= 4),
            js(f, e, a);
        }
        (f = { type: "stylesheet", instance: f, count: 1, state: p }),
          s.set(o, f);
      }
    }
  }
  function f1(t, e) {
    gn.X(t, e);
    var n = Ia;
    if (n && t) {
      var a = xa(n).hoistableScripts,
        s = ei(t),
        o = a.get(s);
      o ||
        ((o = n.querySelector(nl(s))),
        o ||
          ((t = b({ src: t, async: !0 }, e)),
          (e = Ue.get(s)) && br(t, e),
          (o = n.createElement("script")),
          Ft(o),
          ee(o, "link", t),
          n.head.appendChild(o)),
        (o = { type: "script", instance: o, count: 1, state: null }),
        a.set(s, o));
    }
  }
  function h1(t, e) {
    gn.M(t, e);
    var n = Ia;
    if (n && t) {
      var a = xa(n).hoistableScripts,
        s = ei(t),
        o = a.get(s);
      o ||
        ((o = n.querySelector(nl(s))),
        o ||
          ((t = b({ src: t, async: !0, type: "module" }, e)),
          (e = Ue.get(s)) && br(t, e),
          (o = n.createElement("script")),
          Ft(o),
          ee(o, "link", t),
          n.head.appendChild(o)),
        (o = { type: "script", instance: o, count: 1, state: null }),
        a.set(s, o));
    }
  }
  function Vm(t, e, n, a) {
    var s = (s = et.current) ? zs(s) : null;
    if (!s) throw Error(r(446));
    switch (t) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof n.precedence == "string" && typeof n.href == "string"
          ? ((e = ti(n.href)),
            (n = xa(s).hoistableStyles),
            (a = n.get(e)),
            a ||
              ((a = { type: "style", instance: null, count: 0, state: null }),
              n.set(e, a)),
            a)
          : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (
          n.rel === "stylesheet" &&
          typeof n.href == "string" &&
          typeof n.precedence == "string"
        ) {
          t = ti(n.href);
          var o = xa(s).hoistableStyles,
            f = o.get(t);
          if (
            (f ||
              ((s = s.ownerDocument || s),
              (f = {
                type: "stylesheet",
                instance: null,
                count: 0,
                state: { loading: 0, preload: null },
              }),
              o.set(t, f),
              (o = s.querySelector(el(t))) &&
                !o._p &&
                ((f.instance = o), (f.state.loading = 5)),
              Ue.has(t) ||
                ((n = {
                  rel: "preload",
                  as: "style",
                  href: n.href,
                  crossOrigin: n.crossOrigin,
                  integrity: n.integrity,
                  media: n.media,
                  hrefLang: n.hrefLang,
                  referrerPolicy: n.referrerPolicy,
                }),
                Ue.set(t, n),
                o || d1(s, t, n, f.state))),
            e && a === null)
          )
            throw Error(r(528, ""));
          return f;
        }
        if (e && a !== null) throw Error(r(529, ""));
        return null;
      case "script":
        return (
          (e = n.async),
          (n = n.src),
          typeof n == "string" &&
          e &&
          typeof e != "function" &&
          typeof e != "symbol"
            ? ((e = ei(n)),
              (n = xa(s).hoistableScripts),
              (a = n.get(e)),
              a ||
                ((a = {
                  type: "script",
                  instance: null,
                  count: 0,
                  state: null,
                }),
                n.set(e, a)),
              a)
            : { type: "void", instance: null, count: 0, state: null }
        );
      default:
        throw Error(r(444, t));
    }
  }
  function ti(t) {
    return 'href="' + ze(t) + '"';
  }
  function el(t) {
    return 'link[rel="stylesheet"][' + t + "]";
  }
  function _m(t) {
    return b({}, t, { "data-precedence": t.precedence, precedence: null });
  }
  function d1(t, e, n, a) {
    t.querySelector('link[rel="preload"][as="style"][' + e + "]")
      ? (a.loading = 1)
      : ((e = t.createElement("link")),
        (a.preload = e),
        e.addEventListener("load", function () {
          return (a.loading |= 1);
        }),
        e.addEventListener("error", function () {
          return (a.loading |= 2);
        }),
        ee(e, "link", n),
        Ft(e),
        t.head.appendChild(e));
  }
  function ei(t) {
    return '[src="' + ze(t) + '"]';
  }
  function nl(t) {
    return "script[async]" + t;
  }
  function Bm(t, e, n) {
    if ((e.count++, e.instance === null))
      switch (e.type) {
        case "style":
          var a = t.querySelector('style[data-href~="' + ze(n.href) + '"]');
          if (a) return (e.instance = a), Ft(a), a;
          var s = b({}, n, {
            "data-href": n.href,
            "data-precedence": n.precedence,
            href: null,
            precedence: null,
          });
          return (
            (a = (t.ownerDocument || t).createElement("style")),
            Ft(a),
            ee(a, "style", s),
            js(a, n.precedence, t),
            (e.instance = a)
          );
        case "stylesheet":
          s = ti(n.href);
          var o = t.querySelector(el(s));
          if (o) return (e.state.loading |= 4), (e.instance = o), Ft(o), o;
          (a = _m(n)),
            (s = Ue.get(s)) && vr(a, s),
            (o = (t.ownerDocument || t).createElement("link")),
            Ft(o);
          var f = o;
          return (
            (f._p = new Promise(function (p, S) {
              (f.onload = p), (f.onerror = S);
            })),
            ee(o, "link", a),
            (e.state.loading |= 4),
            js(o, n.precedence, t),
            (e.instance = o)
          );
        case "script":
          return (
            (o = ei(n.src)),
            (s = t.querySelector(nl(o)))
              ? ((e.instance = s), Ft(s), s)
              : ((a = n),
                (s = Ue.get(o)) && ((a = b({}, n)), br(a, s)),
                (t = t.ownerDocument || t),
                (s = t.createElement("script")),
                Ft(s),
                ee(s, "link", a),
                t.head.appendChild(s),
                (e.instance = s))
          );
        case "void":
          return null;
        default:
          throw Error(r(443, e.type));
      }
    else
      e.type === "stylesheet" &&
        (e.state.loading & 4) === 0 &&
        ((a = e.instance), (e.state.loading |= 4), js(a, n.precedence, t));
    return e.instance;
  }
  function js(t, e, n) {
    for (
      var a = n.querySelectorAll(
          'link[rel="stylesheet"][data-precedence],style[data-precedence]'
        ),
        s = a.length ? a[a.length - 1] : null,
        o = s,
        f = 0;
      f < a.length;
      f++
    ) {
      var p = a[f];
      if (p.dataset.precedence === e) o = p;
      else if (o !== s) break;
    }
    o
      ? o.parentNode.insertBefore(t, o.nextSibling)
      : ((e = n.nodeType === 9 ? n.head : n), e.insertBefore(t, e.firstChild));
  }
  function vr(t, e) {
    t.crossOrigin == null && (t.crossOrigin = e.crossOrigin),
      t.referrerPolicy == null && (t.referrerPolicy = e.referrerPolicy),
      t.title == null && (t.title = e.title);
  }
  function br(t, e) {
    t.crossOrigin == null && (t.crossOrigin = e.crossOrigin),
      t.referrerPolicy == null && (t.referrerPolicy = e.referrerPolicy),
      t.integrity == null && (t.integrity = e.integrity);
  }
  var Os = null;
  function Um(t, e, n) {
    if (Os === null) {
      var a = new Map(),
        s = (Os = new Map());
      s.set(n, a);
    } else (s = Os), (a = s.get(n)), a || ((a = new Map()), s.set(n, a));
    if (a.has(t)) return a;
    for (
      a.set(t, null), n = n.getElementsByTagName(t), s = 0;
      s < n.length;
      s++
    ) {
      var o = n[s];
      if (
        !(
          o[vi] ||
          o[Pt] ||
          (t === "link" && o.getAttribute("rel") === "stylesheet")
        ) &&
        o.namespaceURI !== "http://www.w3.org/2000/svg"
      ) {
        var f = o.getAttribute(e) || "";
        f = t + f;
        var p = a.get(f);
        p ? p.push(o) : a.set(f, [o]);
      }
    }
    return a;
  }
  function Hm(t, e, n) {
    (t = t.ownerDocument || t),
      t.head.insertBefore(
        n,
        e === "title" ? t.querySelector("head > title") : null
      );
  }
  function m1(t, e, n) {
    if (n === 1 || e.itemProp != null) return !1;
    switch (t) {
      case "meta":
      case "title":
        return !0;
      case "style":
        if (
          typeof e.precedence != "string" ||
          typeof e.href != "string" ||
          e.href === ""
        )
          break;
        return !0;
      case "link":
        if (
          typeof e.rel != "string" ||
          typeof e.href != "string" ||
          e.href === "" ||
          e.onLoad ||
          e.onError
        )
          break;
        switch (e.rel) {
          case "stylesheet":
            return (
              (t = e.disabled), typeof e.precedence == "string" && t == null
            );
          default:
            return !0;
        }
      case "script":
        if (
          e.async &&
          typeof e.async != "function" &&
          typeof e.async != "symbol" &&
          !e.onLoad &&
          !e.onError &&
          e.src &&
          typeof e.src == "string"
        )
          return !0;
    }
    return !1;
  }
  function Lm(t) {
    return !(t.type === "stylesheet" && (t.state.loading & 3) === 0);
  }
  function p1(t, e, n, a) {
    if (
      n.type === "stylesheet" &&
      (typeof a.media != "string" || matchMedia(a.media).matches !== !1) &&
      (n.state.loading & 4) === 0
    ) {
      if (n.instance === null) {
        var s = ti(a.href),
          o = e.querySelector(el(s));
        if (o) {
          (e = o._p),
            e !== null &&
              typeof e == "object" &&
              typeof e.then == "function" &&
              (t.count++, (t = Rs.bind(t)), e.then(t, t)),
            (n.state.loading |= 4),
            (n.instance = o),
            Ft(o);
          return;
        }
        (o = e.ownerDocument || e),
          (a = _m(a)),
          (s = Ue.get(s)) && vr(a, s),
          (o = o.createElement("link")),
          Ft(o);
        var f = o;
        (f._p = new Promise(function (p, S) {
          (f.onload = p), (f.onerror = S);
        })),
          ee(o, "link", a),
          (n.instance = o);
      }
      t.stylesheets === null && (t.stylesheets = new Map()),
        t.stylesheets.set(n, e),
        (e = n.state.preload) &&
          (n.state.loading & 3) === 0 &&
          (t.count++,
          (n = Rs.bind(t)),
          e.addEventListener("load", n),
          e.addEventListener("error", n));
    }
  }
  var Sr = 0;
  function g1(t, e) {
    return (
      t.stylesheets && t.count === 0 && Vs(t, t.stylesheets),
      0 < t.count || 0 < t.imgCount
        ? function (n) {
            var a = setTimeout(function () {
              if ((t.stylesheets && Vs(t, t.stylesheets), t.unsuspend)) {
                var o = t.unsuspend;
                (t.unsuspend = null), o();
              }
            }, 6e4 + e);
            0 < t.imgBytes && Sr === 0 && (Sr = 62500 * Wv());
            var s = setTimeout(function () {
              if (
                ((t.waitingForImages = !1),
                t.count === 0 &&
                  (t.stylesheets && Vs(t, t.stylesheets), t.unsuspend))
              ) {
                var o = t.unsuspend;
                (t.unsuspend = null), o();
              }
            }, (t.imgBytes > Sr ? 50 : 800) + e);
            return (
              (t.unsuspend = n),
              function () {
                (t.unsuspend = null), clearTimeout(a), clearTimeout(s);
              }
            );
          }
        : null
    );
  }
  function Rs() {
    if (
      (this.count--,
      this.count === 0 && (this.imgCount === 0 || !this.waitingForImages))
    ) {
      if (this.stylesheets) Vs(this, this.stylesheets);
      else if (this.unsuspend) {
        var t = this.unsuspend;
        (this.unsuspend = null), t();
      }
    }
  }
  var Ns = null;
  function Vs(t, e) {
    (t.stylesheets = null),
      t.unsuspend !== null &&
        (t.count++,
        (Ns = new Map()),
        e.forEach(y1, t),
        (Ns = null),
        Rs.call(t));
  }
  function y1(t, e) {
    if (!(e.state.loading & 4)) {
      var n = Ns.get(t);
      if (n) var a = n.get(null);
      else {
        (n = new Map()), Ns.set(t, n);
        for (
          var s = t.querySelectorAll(
              "link[data-precedence],style[data-precedence]"
            ),
            o = 0;
          o < s.length;
          o++
        ) {
          var f = s[o];
          (f.nodeName === "LINK" || f.getAttribute("media") !== "not all") &&
            (n.set(f.dataset.precedence, f), (a = f));
        }
        a && n.set(null, a);
      }
      (s = e.instance),
        (f = s.getAttribute("data-precedence")),
        (o = n.get(f) || a),
        o === a && n.set(null, s),
        n.set(f, s),
        this.count++,
        (a = Rs.bind(this)),
        s.addEventListener("load", a),
        s.addEventListener("error", a),
        o
          ? o.parentNode.insertBefore(s, o.nextSibling)
          : ((t = t.nodeType === 9 ? t.head : t),
            t.insertBefore(s, t.firstChild)),
        (e.state.loading |= 4);
    }
  }
  var al = {
    $$typeof: q,
    Provider: null,
    Consumer: null,
    _currentValue: Q,
    _currentValue2: Q,
    _threadCount: 0,
  };
  function v1(t, e, n, a, s, o, f, p, S) {
    (this.tag = 1),
      (this.containerInfo = t),
      (this.pingCache = this.current = this.pendingChildren = null),
      (this.timeoutHandle = -1),
      (this.callbackNode =
        this.next =
        this.pendingContext =
        this.context =
        this.cancelPendingCommit =
          null),
      (this.callbackPriority = 0),
      (this.expirationTimes = mu(-1)),
      (this.entangledLanes =
        this.shellSuspendCounter =
        this.errorRecoveryDisabledLanes =
        this.expiredLanes =
        this.warmLanes =
        this.pingedLanes =
        this.suspendedLanes =
        this.pendingLanes =
          0),
      (this.entanglements = mu(0)),
      (this.hiddenUpdates = mu(null)),
      (this.identifierPrefix = a),
      (this.onUncaughtError = s),
      (this.onCaughtError = o),
      (this.onRecoverableError = f),
      (this.pooledCache = null),
      (this.pooledCacheLanes = 0),
      (this.formState = S),
      (this.incompleteTransitions = new Map());
  }
  function qm(t, e, n, a, s, o, f, p, S, w, j, V) {
    return (
      (t = new v1(t, e, n, f, S, w, j, V, p)),
      (e = 1),
      o === !0 && (e |= 24),
      (o = Te(3, null, null, e)),
      (t.current = o),
      (o.stateNode = t),
      (e = $u()),
      e.refCount++,
      (t.pooledCache = e),
      e.refCount++,
      (o.memoizedState = { element: a, isDehydrated: n, cache: e }),
      no(o),
      t
    );
  }
  function Ym(t) {
    return t ? ((t = Ra), t) : Ra;
  }
  function Gm(t, e, n, a, s, o) {
    (s = Ym(s)),
      a.context === null ? (a.context = s) : (a.pendingContext = s),
      (a = wn(e)),
      (a.payload = { element: n }),
      (o = o === void 0 ? null : o),
      o !== null && (a.callback = o),
      (n = Cn(t, a, e)),
      n !== null && (pe(n, t, e), _i(n, t, e));
  }
  function Xm(t, e) {
    if (((t = t.memoizedState), t !== null && t.dehydrated !== null)) {
      var n = t.retryLane;
      t.retryLane = n !== 0 && n < e ? n : e;
    }
  }
  function Tr(t, e) {
    Xm(t, e), (t = t.alternate) && Xm(t, e);
  }
  function Zm(t) {
    if (t.tag === 13 || t.tag === 31) {
      var e = ta(t, 67108864);
      e !== null && pe(e, t, 67108864), Tr(t, 67108864);
    }
  }
  function Qm(t) {
    if (t.tag === 13 || t.tag === 31) {
      var e = De();
      e = pu(e);
      var n = ta(t, e);
      n !== null && pe(n, t, e), Tr(t, e);
    }
  }
  var _s = !0;
  function b1(t, e, n, a) {
    var s = O.T;
    O.T = null;
    var o = B.p;
    try {
      (B.p = 2), xr(t, e, n, a);
    } finally {
      (B.p = o), (O.T = s);
    }
  }
  function S1(t, e, n, a) {
    var s = O.T;
    O.T = null;
    var o = B.p;
    try {
      (B.p = 8), xr(t, e, n, a);
    } finally {
      (B.p = o), (O.T = s);
    }
  }
  function xr(t, e, n, a) {
    if (_s) {
      var s = Ar(a);
      if (s === null) or(t, e, a, Bs, n), Jm(t, a);
      else if (x1(s, t, e, n, a)) a.stopPropagation();
      else if ((Jm(t, a), e & 4 && -1 < T1.indexOf(t))) {
        for (; s !== null; ) {
          var o = Ta(s);
          if (o !== null)
            switch (o.tag) {
              case 3:
                if (((o = o.stateNode), o.current.memoizedState.isDehydrated)) {
                  var f = Fn(o.pendingLanes);
                  if (f !== 0) {
                    var p = o;
                    for (p.pendingLanes |= 2, p.entangledLanes |= 2; f; ) {
                      var S = 1 << (31 - be(f));
                      (p.entanglements[1] |= S), (f &= ~S);
                    }
                    Fe(o), (bt & 6) === 0 && ((vs = ye() + 500), Pi(0));
                  }
                }
                break;
              case 31:
              case 13:
                (p = ta(o, 2)), p !== null && pe(p, o, 2), Ss(), Tr(o, 2);
            }
          if (((o = Ar(a)), o === null && or(t, e, a, Bs, n), o === s)) break;
          s = o;
        }
        s !== null && a.stopPropagation();
      } else or(t, e, a, null, n);
    }
  }
  function Ar(t) {
    return (t = Eu(t)), Er(t);
  }
  var Bs = null;
  function Er(t) {
    if (((Bs = null), (t = Sa(t)), t !== null)) {
      var e = d(t);
      if (e === null) t = null;
      else {
        var n = e.tag;
        if (n === 13) {
          if (((t = h(e)), t !== null)) return t;
          t = null;
        } else if (n === 31) {
          if (((t = y(e)), t !== null)) return t;
          t = null;
        } else if (n === 3) {
          if (e.stateNode.current.memoizedState.isDehydrated)
            return e.tag === 3 ? e.stateNode.containerInfo : null;
          t = null;
        } else e !== t && (t = null);
      }
    }
    return (Bs = t), null;
  }
  function Km(t) {
    switch (t) {
      case "beforetoggle":
      case "cancel":
      case "click":
      case "close":
      case "contextmenu":
      case "copy":
      case "cut":
      case "auxclick":
      case "dblclick":
      case "dragend":
      case "dragstart":
      case "drop":
      case "focusin":
      case "focusout":
      case "input":
      case "invalid":
      case "keydown":
      case "keypress":
      case "keyup":
      case "mousedown":
      case "mouseup":
      case "paste":
      case "pause":
      case "play":
      case "pointercancel":
      case "pointerdown":
      case "pointerup":
      case "ratechange":
      case "reset":
      case "resize":
      case "seeked":
      case "submit":
      case "toggle":
      case "touchcancel":
      case "touchend":
      case "touchstart":
      case "volumechange":
      case "change":
      case "selectionchange":
      case "textInput":
      case "compositionstart":
      case "compositionend":
      case "compositionupdate":
      case "beforeblur":
      case "afterblur":
      case "beforeinput":
      case "blur":
      case "fullscreenchange":
      case "focus":
      case "hashchange":
      case "popstate":
      case "select":
      case "selectstart":
        return 2;
      case "drag":
      case "dragenter":
      case "dragexit":
      case "dragleave":
      case "dragover":
      case "mousemove":
      case "mouseout":
      case "mouseover":
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "scroll":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 8;
      case "message":
        switch (s0()) {
          case Ic:
            return 2;
          case tf:
            return 8;
          case Ml:
          case u0:
            return 32;
          case ef:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var Mr = !1,
    Ln = null,
    qn = null,
    Yn = null,
    il = new Map(),
    ll = new Map(),
    Gn = [],
    T1 =
      "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
        " "
      );
  function Jm(t, e) {
    switch (t) {
      case "focusin":
      case "focusout":
        Ln = null;
        break;
      case "dragenter":
      case "dragleave":
        qn = null;
        break;
      case "mouseover":
      case "mouseout":
        Yn = null;
        break;
      case "pointerover":
      case "pointerout":
        il.delete(e.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        ll.delete(e.pointerId);
    }
  }
  function sl(t, e, n, a, s, o) {
    return t === null || t.nativeEvent !== o
      ? ((t = {
          blockedOn: e,
          domEventName: n,
          eventSystemFlags: a,
          nativeEvent: o,
          targetContainers: [s],
        }),
        e !== null && ((e = Ta(e)), e !== null && Zm(e)),
        t)
      : ((t.eventSystemFlags |= a),
        (e = t.targetContainers),
        s !== null && e.indexOf(s) === -1 && e.push(s),
        t);
  }
  function x1(t, e, n, a, s) {
    switch (e) {
      case "focusin":
        return (Ln = sl(Ln, t, e, n, a, s)), !0;
      case "dragenter":
        return (qn = sl(qn, t, e, n, a, s)), !0;
      case "mouseover":
        return (Yn = sl(Yn, t, e, n, a, s)), !0;
      case "pointerover":
        var o = s.pointerId;
        return il.set(o, sl(il.get(o) || null, t, e, n, a, s)), !0;
      case "gotpointercapture":
        return (
          (o = s.pointerId), ll.set(o, sl(ll.get(o) || null, t, e, n, a, s)), !0
        );
    }
    return !1;
  }
  function km(t) {
    var e = Sa(t.target);
    if (e !== null) {
      var n = d(e);
      if (n !== null) {
        if (((e = n.tag), e === 13)) {
          if (((e = h(n)), e !== null)) {
            (t.blockedOn = e),
              of(t.priority, function () {
                Qm(n);
              });
            return;
          }
        } else if (e === 31) {
          if (((e = y(n)), e !== null)) {
            (t.blockedOn = e),
              of(t.priority, function () {
                Qm(n);
              });
            return;
          }
        } else if (e === 3 && n.stateNode.current.memoizedState.isDehydrated) {
          t.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
          return;
        }
      }
    }
    t.blockedOn = null;
  }
  function Us(t) {
    if (t.blockedOn !== null) return !1;
    for (var e = t.targetContainers; 0 < e.length; ) {
      var n = Ar(t.nativeEvent);
      if (n === null) {
        n = t.nativeEvent;
        var a = new n.constructor(n.type, n);
        (Au = a), n.target.dispatchEvent(a), (Au = null);
      } else return (e = Ta(n)), e !== null && Zm(e), (t.blockedOn = n), !1;
      e.shift();
    }
    return !0;
  }
  function Fm(t, e, n) {
    Us(t) && n.delete(e);
  }
  function A1() {
    (Mr = !1),
      Ln !== null && Us(Ln) && (Ln = null),
      qn !== null && Us(qn) && (qn = null),
      Yn !== null && Us(Yn) && (Yn = null),
      il.forEach(Fm),
      ll.forEach(Fm);
  }
  function Hs(t, e) {
    t.blockedOn === e &&
      ((t.blockedOn = null),
      Mr ||
        ((Mr = !0),
        i.unstable_scheduleCallback(i.unstable_NormalPriority, A1)));
  }
  var Ls = null;
  function Wm(t) {
    Ls !== t &&
      ((Ls = t),
      i.unstable_scheduleCallback(i.unstable_NormalPriority, function () {
        Ls === t && (Ls = null);
        for (var e = 0; e < t.length; e += 3) {
          var n = t[e],
            a = t[e + 1],
            s = t[e + 2];
          if (typeof a != "function") {
            if (Er(a || n) === null) continue;
            break;
          }
          var o = Ta(n);
          o !== null &&
            (t.splice(e, 3),
            (e -= 3),
            Ao(o, { pending: !0, data: s, method: n.method, action: a }, a, s));
        }
      }));
  }
  function ni(t) {
    function e(S) {
      return Hs(S, t);
    }
    Ln !== null && Hs(Ln, t),
      qn !== null && Hs(qn, t),
      Yn !== null && Hs(Yn, t),
      il.forEach(e),
      ll.forEach(e);
    for (var n = 0; n < Gn.length; n++) {
      var a = Gn[n];
      a.blockedOn === t && (a.blockedOn = null);
    }
    for (; 0 < Gn.length && ((n = Gn[0]), n.blockedOn === null); )
      km(n), n.blockedOn === null && Gn.shift();
    if (((n = (t.ownerDocument || t).$$reactFormReplay), n != null))
      for (a = 0; a < n.length; a += 3) {
        var s = n[a],
          o = n[a + 1],
          f = s[re] || null;
        if (typeof o == "function") f || Wm(n);
        else if (f) {
          var p = null;
          if (o && o.hasAttribute("formAction")) {
            if (((s = o), (f = o[re] || null))) p = f.formAction;
            else if (Er(s) !== null) continue;
          } else p = f.action;
          typeof p == "function" ? (n[a + 1] = p) : (n.splice(a, 3), (a -= 3)),
            Wm(n);
        }
      }
  }
  function Pm() {
    function t(o) {
      o.canIntercept &&
        o.info === "react-transition" &&
        o.intercept({
          handler: function () {
            return new Promise(function (f) {
              return (s = f);
            });
          },
          focusReset: "manual",
          scroll: "manual",
        });
    }
    function e() {
      s !== null && (s(), (s = null)), a || setTimeout(n, 20);
    }
    function n() {
      if (!a && !navigation.transition) {
        var o = navigation.currentEntry;
        o &&
          o.url != null &&
          navigation.navigate(o.url, {
            state: o.getState(),
            info: "react-transition",
            history: "replace",
          });
      }
    }
    if (typeof navigation == "object") {
      var a = !1,
        s = null;
      return (
        navigation.addEventListener("navigate", t),
        navigation.addEventListener("navigatesuccess", e),
        navigation.addEventListener("navigateerror", e),
        setTimeout(n, 100),
        function () {
          (a = !0),
            navigation.removeEventListener("navigate", t),
            navigation.removeEventListener("navigatesuccess", e),
            navigation.removeEventListener("navigateerror", e),
            s !== null && (s(), (s = null));
        }
      );
    }
  }
  function Dr(t) {
    this._internalRoot = t;
  }
  (qs.prototype.render = Dr.prototype.render =
    function (t) {
      var e = this._internalRoot;
      if (e === null) throw Error(r(409));
      var n = e.current,
        a = De();
      Gm(n, a, t, e, null, null);
    }),
    (qs.prototype.unmount = Dr.prototype.unmount =
      function () {
        var t = this._internalRoot;
        if (t !== null) {
          this._internalRoot = null;
          var e = t.containerInfo;
          Gm(t.current, 2, null, t, null, null), Ss(), (e[ba] = null);
        }
      });
  function qs(t) {
    this._internalRoot = t;
  }
  qs.prototype.unstable_scheduleHydration = function (t) {
    if (t) {
      var e = uf();
      t = { blockedOn: null, target: t, priority: e };
      for (var n = 0; n < Gn.length && e !== 0 && e < Gn[n].priority; n++);
      Gn.splice(n, 0, t), n === 0 && km(t);
    }
  };
  var $m = l.version;
  if ($m !== "19.2.3") throw Error(r(527, $m, "19.2.3"));
  B.findDOMNode = function (t) {
    var e = t._reactInternals;
    if (e === void 0)
      throw typeof t.render == "function"
        ? Error(r(188))
        : ((t = Object.keys(t).join(",")), Error(r(268, t)));
    return (
      (t = m(e)),
      (t = t !== null ? v(t) : null),
      (t = t === null ? null : t.stateNode),
      t
    );
  };
  var E1 = {
    bundleType: 0,
    version: "19.2.3",
    rendererPackageName: "react-dom",
    currentDispatcherRef: O,
    reconcilerVersion: "19.2.3",
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Ys = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Ys.isDisabled && Ys.supportsFiber)
      try {
        (pi = Ys.inject(E1)), (ve = Ys);
      } catch {}
  }
  return (
    (ol.createRoot = function (t, e) {
      if (!c(t)) throw Error(r(299));
      var n = !1,
        a = "",
        s = ld,
        o = sd,
        f = ud;
      return (
        e != null &&
          (e.unstable_strictMode === !0 && (n = !0),
          e.identifierPrefix !== void 0 && (a = e.identifierPrefix),
          e.onUncaughtError !== void 0 && (s = e.onUncaughtError),
          e.onCaughtError !== void 0 && (o = e.onCaughtError),
          e.onRecoverableError !== void 0 && (f = e.onRecoverableError)),
        (e = qm(t, 1, !1, null, null, n, a, null, s, o, f, Pm)),
        (t[ba] = e.current),
        ur(t),
        new Dr(e)
      );
    }),
    (ol.hydrateRoot = function (t, e, n) {
      if (!c(t)) throw Error(r(299));
      var a = !1,
        s = "",
        o = ld,
        f = sd,
        p = ud,
        S = null;
      return (
        n != null &&
          (n.unstable_strictMode === !0 && (a = !0),
          n.identifierPrefix !== void 0 && (s = n.identifierPrefix),
          n.onUncaughtError !== void 0 && (o = n.onUncaughtError),
          n.onCaughtError !== void 0 && (f = n.onCaughtError),
          n.onRecoverableError !== void 0 && (p = n.onRecoverableError),
          n.formState !== void 0 && (S = n.formState)),
        (e = qm(t, 1, !0, e, n ?? null, a, s, S, o, f, p, Pm)),
        (e.context = Ym(null)),
        (n = e.current),
        (a = De()),
        (a = pu(a)),
        (s = wn(a)),
        (s.callback = null),
        Cn(n, s, a),
        (n = a),
        (e.current.lanes = n),
        yi(e, n),
        Fe(e),
        (t[ba] = e.current),
        ur(t),
        new qs(e)
      );
    }),
    (ol.version = "19.2.3"),
    ol
  );
}
var op;
function _1() {
  if (op) return zr.exports;
  op = 1;
  function i() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i);
      } catch (l) {
        console.error(l);
      }
  }
  return i(), (zr.exports = V1()), zr.exports;
}
var B1 = _1();
const vc = k.createContext({});
function bc(i) {
  const l = k.useRef(null);
  return l.current === null && (l.current = i()), l.current;
}
const Sc = typeof window < "u",
  Ag = Sc ? k.useLayoutEffect : k.useEffect,
  iu = k.createContext(null);
function Tc(i, l) {
  i.indexOf(l) === -1 && i.push(l);
}
function xc(i, l) {
  const u = i.indexOf(l);
  u > -1 && i.splice(u, 1);
}
const yn = (i, l, u) => (u > l ? l : u < i ? i : u);
let Ac = () => {};
const vn = {},
  Eg = (i) => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(i);
function Mg(i) {
  return typeof i == "object" && i !== null;
}
const Dg = (i) => /^0[^.\s]+$/u.test(i);
function Ec(i) {
  let l;
  return () => (l === void 0 && (l = i()), l);
}
const qe = (i) => i,
  U1 = (i, l) => (u) => l(i(u)),
  Sl = (...i) => i.reduce(U1),
  pl = (i, l, u) => {
    const r = l - i;
    return r === 0 ? 1 : (u - i) / r;
  };
class Mc {
  constructor() {
    this.subscriptions = [];
  }
  add(l) {
    return Tc(this.subscriptions, l), () => xc(this.subscriptions, l);
  }
  notify(l, u, r) {
    const c = this.subscriptions.length;
    if (c)
      if (c === 1) this.subscriptions[0](l, u, r);
      else
        for (let d = 0; d < c; d++) {
          const h = this.subscriptions[d];
          h && h(l, u, r);
        }
  }
  getSize() {
    return this.subscriptions.length;
  }
  clear() {
    this.subscriptions.length = 0;
  }
}
const We = (i) => i * 1e3,
  Le = (i) => i / 1e3;
function wg(i, l) {
  return l ? i * (1e3 / l) : 0;
}
const Cg = (i, l, u) =>
    (((1 - 3 * u + 3 * l) * i + (3 * u - 6 * l)) * i + 3 * l) * i,
  H1 = 1e-7,
  L1 = 12;
function q1(i, l, u, r, c) {
  let d,
    h,
    y = 0;
  do (h = l + (u - l) / 2), (d = Cg(h, r, c) - i), d > 0 ? (u = h) : (l = h);
  while (Math.abs(d) > H1 && ++y < L1);
  return h;
}
function Tl(i, l, u, r) {
  if (i === l && u === r) return qe;
  const c = (d) => q1(d, 0, 1, i, u);
  return (d) => (d === 0 || d === 1 ? d : Cg(c(d), l, r));
}
const zg = (i) => (l) => l <= 0.5 ? i(2 * l) / 2 : (2 - i(2 * (1 - l))) / 2,
  jg = (i) => (l) => 1 - i(1 - l),
  Og = Tl(0.33, 1.53, 0.69, 0.99),
  Dc = jg(Og),
  Rg = zg(Dc),
  Ng = (i) =>
    (i *= 2) < 1 ? 0.5 * Dc(i) : 0.5 * (2 - Math.pow(2, -10 * (i - 1))),
  wc = (i) => 1 - Math.sin(Math.acos(i)),
  Vg = jg(wc),
  _g = zg(wc),
  Y1 = Tl(0.42, 0, 1, 1),
  G1 = Tl(0, 0, 0.58, 1),
  Bg = Tl(0.42, 0, 0.58, 1),
  X1 = (i) => Array.isArray(i) && typeof i[0] != "number",
  Ug = (i) => Array.isArray(i) && typeof i[0] == "number",
  Z1 = {
    linear: qe,
    easeIn: Y1,
    easeInOut: Bg,
    easeOut: G1,
    circIn: wc,
    circInOut: _g,
    circOut: Vg,
    backIn: Dc,
    backInOut: Rg,
    backOut: Og,
    anticipate: Ng,
  },
  Q1 = (i) => typeof i == "string",
  rp = (i) => {
    if (Ug(i)) {
      Ac(i.length === 4);
      const [l, u, r, c] = i;
      return Tl(l, u, r, c);
    } else if (Q1(i)) return Z1[i];
    return i;
  },
  Gs = [
    "setup",
    "read",
    "resolveKeyframes",
    "preUpdate",
    "update",
    "preRender",
    "render",
    "postRender",
  ];
function K1(i, l) {
  let u = new Set(),
    r = new Set(),
    c = !1,
    d = !1;
  const h = new WeakSet();
  let y = { delta: 0, timestamp: 0, isProcessing: !1 };
  function g(v) {
    h.has(v) && (m.schedule(v), i()), v(y);
  }
  const m = {
    schedule: (v, b = !1, T = !1) => {
      const U = T && c ? u : r;
      return b && h.add(v), U.has(v) || U.add(v), v;
    },
    cancel: (v) => {
      r.delete(v), h.delete(v);
    },
    process: (v) => {
      if (((y = v), c)) {
        d = !0;
        return;
      }
      (c = !0),
        ([u, r] = [r, u]),
        u.forEach(g),
        u.clear(),
        (c = !1),
        d && ((d = !1), m.process(v));
    },
  };
  return m;
}
const J1 = 40;
function Hg(i, l) {
  let u = !1,
    r = !0;
  const c = { delta: 0, timestamp: 0, isProcessing: !1 },
    d = () => (u = !0),
    h = Gs.reduce((q, tt) => ((q[tt] = K1(d)), q), {}),
    {
      setup: y,
      read: g,
      resolveKeyframes: m,
      preUpdate: v,
      update: b,
      preRender: T,
      render: R,
      postRender: U,
    } = h,
    H = () => {
      const q = vn.useManualTiming ? c.timestamp : performance.now();
      (u = !1),
        vn.useManualTiming ||
          (c.delta = r ? 1e3 / 60 : Math.max(Math.min(q - c.timestamp, J1), 1)),
        (c.timestamp = q),
        (c.isProcessing = !0),
        y.process(c),
        g.process(c),
        m.process(c),
        v.process(c),
        b.process(c),
        T.process(c),
        R.process(c),
        U.process(c),
        (c.isProcessing = !1),
        u && l && ((r = !1), i(H));
    },
    Z = () => {
      (u = !0), (r = !0), c.isProcessing || i(H);
    };
  return {
    schedule: Gs.reduce((q, tt) => {
      const F = h[tt];
      return (
        (q[tt] = ($, X = !1, W = !1) => (u || Z(), F.schedule($, X, W))), q
      );
    }, {}),
    cancel: (q) => {
      for (let tt = 0; tt < Gs.length; tt++) h[Gs[tt]].cancel(q);
    },
    state: c,
    steps: h,
  };
}
const {
  schedule: Ot,
  cancel: Qn,
  state: ne,
  steps: Nr,
} = Hg(typeof requestAnimationFrame < "u" ? requestAnimationFrame : qe, !0);
let Js;
function k1() {
  Js = void 0;
}
const ge = {
    now: () => (
      Js === void 0 &&
        ge.set(
          ne.isProcessing || vn.useManualTiming
            ? ne.timestamp
            : performance.now()
        ),
      Js
    ),
    set: (i) => {
      (Js = i), queueMicrotask(k1);
    },
  },
  Lg = (i) => (l) => typeof l == "string" && l.startsWith(i),
  qg = Lg("--"),
  F1 = Lg("var(--"),
  Cc = (i) => (F1(i) ? W1.test(i.split("/*")[0].trim()) : !1),
  W1 =
    /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu,
  fi = {
    test: (i) => typeof i == "number",
    parse: parseFloat,
    transform: (i) => i,
  },
  gl = { ...fi, transform: (i) => yn(0, 1, i) },
  Xs = { ...fi, default: 1 },
  fl = (i) => Math.round(i * 1e5) / 1e5,
  zc = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu;
function P1(i) {
  return i == null;
}
const $1 =
    /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,
  jc = (i, l) => (u) =>
    !!(
      (typeof u == "string" && $1.test(u) && u.startsWith(i)) ||
      (l && !P1(u) && Object.prototype.hasOwnProperty.call(u, l))
    ),
  Yg = (i, l, u) => (r) => {
    if (typeof r != "string") return r;
    const [c, d, h, y] = r.match(zc);
    return {
      [i]: parseFloat(c),
      [l]: parseFloat(d),
      [u]: parseFloat(h),
      alpha: y !== void 0 ? parseFloat(y) : 1,
    };
  },
  I1 = (i) => yn(0, 255, i),
  Vr = { ...fi, transform: (i) => Math.round(I1(i)) },
  pa = {
    test: jc("rgb", "red"),
    parse: Yg("red", "green", "blue"),
    transform: ({ red: i, green: l, blue: u, alpha: r = 1 }) =>
      "rgba(" +
      Vr.transform(i) +
      ", " +
      Vr.transform(l) +
      ", " +
      Vr.transform(u) +
      ", " +
      fl(gl.transform(r)) +
      ")",
  };
function tb(i) {
  let l = "",
    u = "",
    r = "",
    c = "";
  return (
    i.length > 5
      ? ((l = i.substring(1, 3)),
        (u = i.substring(3, 5)),
        (r = i.substring(5, 7)),
        (c = i.substring(7, 9)))
      : ((l = i.substring(1, 2)),
        (u = i.substring(2, 3)),
        (r = i.substring(3, 4)),
        (c = i.substring(4, 5)),
        (l += l),
        (u += u),
        (r += r),
        (c += c)),
    {
      red: parseInt(l, 16),
      green: parseInt(u, 16),
      blue: parseInt(r, 16),
      alpha: c ? parseInt(c, 16) / 255 : 1,
    }
  );
}
const Wr = { test: jc("#"), parse: tb, transform: pa.transform },
  xl = (i) => ({
    test: (l) =>
      typeof l == "string" && l.endsWith(i) && l.split(" ").length === 1,
    parse: parseFloat,
    transform: (l) => `${l}${i}`,
  }),
  Zn = xl("deg"),
  Pe = xl("%"),
  at = xl("px"),
  eb = xl("vh"),
  nb = xl("vw"),
  cp = {
    ...Pe,
    parse: (i) => Pe.parse(i) / 100,
    transform: (i) => Pe.transform(i * 100),
  },
  ai = {
    test: jc("hsl", "hue"),
    parse: Yg("hue", "saturation", "lightness"),
    transform: ({ hue: i, saturation: l, lightness: u, alpha: r = 1 }) =>
      "hsla(" +
      Math.round(i) +
      ", " +
      Pe.transform(fl(l)) +
      ", " +
      Pe.transform(fl(u)) +
      ", " +
      fl(gl.transform(r)) +
      ")",
  },
  Kt = {
    test: (i) => pa.test(i) || Wr.test(i) || ai.test(i),
    parse: (i) =>
      pa.test(i) ? pa.parse(i) : ai.test(i) ? ai.parse(i) : Wr.parse(i),
    transform: (i) =>
      typeof i == "string"
        ? i
        : i.hasOwnProperty("red")
        ? pa.transform(i)
        : ai.transform(i),
    getAnimatableNone: (i) => {
      const l = Kt.parse(i);
      return (l.alpha = 0), Kt.transform(l);
    },
  },
  ab =
    /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;
function ib(i) {
  return (
    isNaN(i) &&
    typeof i == "string" &&
    (i.match(zc)?.length || 0) + (i.match(ab)?.length || 0) > 0
  );
}
const Gg = "number",
  Xg = "color",
  lb = "var",
  sb = "var(",
  fp = "${}",
  ub =
    /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;
function yl(i) {
  const l = i.toString(),
    u = [],
    r = { color: [], number: [], var: [] },
    c = [];
  let d = 0;
  const y = l
    .replace(
      ub,
      (g) => (
        Kt.test(g)
          ? (r.color.push(d), c.push(Xg), u.push(Kt.parse(g)))
          : g.startsWith(sb)
          ? (r.var.push(d), c.push(lb), u.push(g))
          : (r.number.push(d), c.push(Gg), u.push(parseFloat(g))),
        ++d,
        fp
      )
    )
    .split(fp);
  return { values: u, split: y, indexes: r, types: c };
}
function Zg(i) {
  return yl(i).values;
}
function Qg(i) {
  const { split: l, types: u } = yl(i),
    r = l.length;
  return (c) => {
    let d = "";
    for (let h = 0; h < r; h++)
      if (((d += l[h]), c[h] !== void 0)) {
        const y = u[h];
        y === Gg
          ? (d += fl(c[h]))
          : y === Xg
          ? (d += Kt.transform(c[h]))
          : (d += c[h]);
      }
    return d;
  };
}
const ob = (i) =>
  typeof i == "number" ? 0 : Kt.test(i) ? Kt.getAnimatableNone(i) : i;
function rb(i) {
  const l = Zg(i);
  return Qg(i)(l.map(ob));
}
const Kn = {
  test: ib,
  parse: Zg,
  createTransformer: Qg,
  getAnimatableNone: rb,
};
function _r(i, l, u) {
  return (
    u < 0 && (u += 1),
    u > 1 && (u -= 1),
    u < 1 / 6
      ? i + (l - i) * 6 * u
      : u < 1 / 2
      ? l
      : u < 2 / 3
      ? i + (l - i) * (2 / 3 - u) * 6
      : i
  );
}
function cb({ hue: i, saturation: l, lightness: u, alpha: r }) {
  (i /= 360), (l /= 100), (u /= 100);
  let c = 0,
    d = 0,
    h = 0;
  if (!l) c = d = h = u;
  else {
    const y = u < 0.5 ? u * (1 + l) : u + l - u * l,
      g = 2 * u - y;
    (c = _r(g, y, i + 1 / 3)), (d = _r(g, y, i)), (h = _r(g, y, i - 1 / 3));
  }
  return {
    red: Math.round(c * 255),
    green: Math.round(d * 255),
    blue: Math.round(h * 255),
    alpha: r,
  };
}
function Ps(i, l) {
  return (u) => (u > 0 ? l : i);
}
const Nt = (i, l, u) => i + (l - i) * u,
  Br = (i, l, u) => {
    const r = i * i,
      c = u * (l * l - r) + r;
    return c < 0 ? 0 : Math.sqrt(c);
  },
  fb = [Wr, pa, ai],
  hb = (i) => fb.find((l) => l.test(i));
function hp(i) {
  const l = hb(i);
  if (!l) return !1;
  let u = l.parse(i);
  return l === ai && (u = cb(u)), u;
}
const dp = (i, l) => {
    const u = hp(i),
      r = hp(l);
    if (!u || !r) return Ps(i, l);
    const c = { ...u };
    return (d) => (
      (c.red = Br(u.red, r.red, d)),
      (c.green = Br(u.green, r.green, d)),
      (c.blue = Br(u.blue, r.blue, d)),
      (c.alpha = Nt(u.alpha, r.alpha, d)),
      pa.transform(c)
    );
  },
  Pr = new Set(["none", "hidden"]);
function db(i, l) {
  return Pr.has(i) ? (u) => (u <= 0 ? i : l) : (u) => (u >= 1 ? l : i);
}
function mb(i, l) {
  return (u) => Nt(i, l, u);
}
function Oc(i) {
  return typeof i == "number"
    ? mb
    : typeof i == "string"
    ? Cc(i)
      ? Ps
      : Kt.test(i)
      ? dp
      : yb
    : Array.isArray(i)
    ? Kg
    : typeof i == "object"
    ? Kt.test(i)
      ? dp
      : pb
    : Ps;
}
function Kg(i, l) {
  const u = [...i],
    r = u.length,
    c = i.map((d, h) => Oc(d)(d, l[h]));
  return (d) => {
    for (let h = 0; h < r; h++) u[h] = c[h](d);
    return u;
  };
}
function pb(i, l) {
  const u = { ...i, ...l },
    r = {};
  for (const c in u)
    i[c] !== void 0 && l[c] !== void 0 && (r[c] = Oc(i[c])(i[c], l[c]));
  return (c) => {
    for (const d in r) u[d] = r[d](c);
    return u;
  };
}
function gb(i, l) {
  const u = [],
    r = { color: 0, var: 0, number: 0 };
  for (let c = 0; c < l.values.length; c++) {
    const d = l.types[c],
      h = i.indexes[d][r[d]],
      y = i.values[h] ?? 0;
    (u[c] = y), r[d]++;
  }
  return u;
}
const yb = (i, l) => {
  const u = Kn.createTransformer(l),
    r = yl(i),
    c = yl(l);
  return r.indexes.var.length === c.indexes.var.length &&
    r.indexes.color.length === c.indexes.color.length &&
    r.indexes.number.length >= c.indexes.number.length
    ? (Pr.has(i) && !c.values.length) || (Pr.has(l) && !r.values.length)
      ? db(i, l)
      : Sl(Kg(gb(r, c), c.values), u)
    : Ps(i, l);
};
function Jg(i, l, u) {
  return typeof i == "number" && typeof l == "number" && typeof u == "number"
    ? Nt(i, l, u)
    : Oc(i)(i, l);
}
const vb = (i) => {
    const l = ({ timestamp: u }) => i(u);
    return {
      start: (u = !0) => Ot.update(l, u),
      stop: () => Qn(l),
      now: () => (ne.isProcessing ? ne.timestamp : ge.now()),
    };
  },
  kg = (i, l, u = 10) => {
    let r = "";
    const c = Math.max(Math.round(l / u), 2);
    for (let d = 0; d < c; d++)
      r += Math.round(i(d / (c - 1)) * 1e4) / 1e4 + ", ";
    return `linear(${r.substring(0, r.length - 2)})`;
  },
  $s = 2e4;
function Rc(i) {
  let l = 0;
  const u = 50;
  let r = i.next(l);
  for (; !r.done && l < $s; ) (l += u), (r = i.next(l));
  return l >= $s ? 1 / 0 : l;
}
function bb(i, l = 100, u) {
  const r = u({ ...i, keyframes: [0, l] }),
    c = Math.min(Rc(r), $s);
  return {
    type: "keyframes",
    ease: (d) => r.next(c * d).value / l,
    duration: Le(c),
  };
}
const Sb = 5;
function Fg(i, l, u) {
  const r = Math.max(l - Sb, 0);
  return wg(u - i(r), l - r);
}
const Ut = {
    stiffness: 100,
    damping: 10,
    mass: 1,
    velocity: 0,
    duration: 800,
    bounce: 0.3,
    visualDuration: 0.3,
    restSpeed: { granular: 0.01, default: 2 },
    restDelta: { granular: 0.005, default: 0.5 },
    minDuration: 0.01,
    maxDuration: 10,
    minDamping: 0.05,
    maxDamping: 1,
  },
  Ur = 0.001;
function Tb({
  duration: i = Ut.duration,
  bounce: l = Ut.bounce,
  velocity: u = Ut.velocity,
  mass: r = Ut.mass,
}) {
  let c,
    d,
    h = 1 - l;
  (h = yn(Ut.minDamping, Ut.maxDamping, h)),
    (i = yn(Ut.minDuration, Ut.maxDuration, Le(i))),
    h < 1
      ? ((c = (m) => {
          const v = m * h,
            b = v * i,
            T = v - u,
            R = $r(m, h),
            U = Math.exp(-b);
          return Ur - (T / R) * U;
        }),
        (d = (m) => {
          const b = m * h * i,
            T = b * u + u,
            R = Math.pow(h, 2) * Math.pow(m, 2) * i,
            U = Math.exp(-b),
            H = $r(Math.pow(m, 2), h);
          return ((-c(m) + Ur > 0 ? -1 : 1) * ((T - R) * U)) / H;
        }))
      : ((c = (m) => {
          const v = Math.exp(-m * i),
            b = (m - u) * i + 1;
          return -Ur + v * b;
        }),
        (d = (m) => {
          const v = Math.exp(-m * i),
            b = (u - m) * (i * i);
          return v * b;
        }));
  const y = 5 / i,
    g = Ab(c, d, y);
  if (((i = We(i)), isNaN(g)))
    return { stiffness: Ut.stiffness, damping: Ut.damping, duration: i };
  {
    const m = Math.pow(g, 2) * r;
    return { stiffness: m, damping: h * 2 * Math.sqrt(r * m), duration: i };
  }
}
const xb = 12;
function Ab(i, l, u) {
  let r = u;
  for (let c = 1; c < xb; c++) r = r - i(r) / l(r);
  return r;
}
function $r(i, l) {
  return i * Math.sqrt(1 - l * l);
}
const Eb = ["duration", "bounce"],
  Mb = ["stiffness", "damping", "mass"];
function mp(i, l) {
  return l.some((u) => i[u] !== void 0);
}
function Db(i) {
  let l = {
    velocity: Ut.velocity,
    stiffness: Ut.stiffness,
    damping: Ut.damping,
    mass: Ut.mass,
    isResolvedFromDuration: !1,
    ...i,
  };
  if (!mp(i, Mb) && mp(i, Eb))
    if (i.visualDuration) {
      const u = i.visualDuration,
        r = (2 * Math.PI) / (u * 1.2),
        c = r * r,
        d = 2 * yn(0.05, 1, 1 - (i.bounce || 0)) * Math.sqrt(c);
      l = { ...l, mass: Ut.mass, stiffness: c, damping: d };
    } else {
      const u = Tb(i);
      (l = { ...l, ...u, mass: Ut.mass }), (l.isResolvedFromDuration = !0);
    }
  return l;
}
function Is(i = Ut.visualDuration, l = Ut.bounce) {
  const u =
    typeof i != "object"
      ? { visualDuration: i, keyframes: [0, 1], bounce: l }
      : i;
  let { restSpeed: r, restDelta: c } = u;
  const d = u.keyframes[0],
    h = u.keyframes[u.keyframes.length - 1],
    y = { done: !1, value: d },
    {
      stiffness: g,
      damping: m,
      mass: v,
      duration: b,
      velocity: T,
      isResolvedFromDuration: R,
    } = Db({ ...u, velocity: -Le(u.velocity || 0) }),
    U = T || 0,
    H = m / (2 * Math.sqrt(g * v)),
    Z = h - d,
    L = Le(Math.sqrt(g / v)),
    G = Math.abs(Z) < 5;
  r || (r = G ? Ut.restSpeed.granular : Ut.restSpeed.default),
    c || (c = G ? Ut.restDelta.granular : Ut.restDelta.default);
  let q;
  if (H < 1) {
    const F = $r(L, H);
    q = ($) => {
      const X = Math.exp(-H * L * $);
      return (
        h - X * (((U + H * L * Z) / F) * Math.sin(F * $) + Z * Math.cos(F * $))
      );
    };
  } else if (H === 1) q = (F) => h - Math.exp(-L * F) * (Z + (U + L * Z) * F);
  else {
    const F = L * Math.sqrt(H * H - 1);
    q = ($) => {
      const X = Math.exp(-H * L * $),
        W = Math.min(F * $, 300);
      return (
        h - (X * ((U + H * L * Z) * Math.sinh(W) + F * Z * Math.cosh(W))) / F
      );
    };
  }
  const tt = {
    calculatedDuration: (R && b) || null,
    next: (F) => {
      const $ = q(F);
      if (R) y.done = F >= b;
      else {
        let X = F === 0 ? U : 0;
        H < 1 && (X = F === 0 ? We(U) : Fg(q, F, $));
        const W = Math.abs(X) <= r,
          vt = Math.abs(h - $) <= c;
        y.done = W && vt;
      }
      return (y.value = y.done ? h : $), y;
    },
    toString: () => {
      const F = Math.min(Rc(tt), $s),
        $ = kg((X) => tt.next(F * X).value, F, 30);
      return F + "ms " + $;
    },
    toTransition: () => {},
  };
  return tt;
}
Is.applyToOptions = (i) => {
  const l = bb(i, 100, Is);
  return (
    (i.ease = l.ease), (i.duration = We(l.duration)), (i.type = "keyframes"), i
  );
};
function Ir({
  keyframes: i,
  velocity: l = 0,
  power: u = 0.8,
  timeConstant: r = 325,
  bounceDamping: c = 10,
  bounceStiffness: d = 500,
  modifyTarget: h,
  min: y,
  max: g,
  restDelta: m = 0.5,
  restSpeed: v,
}) {
  const b = i[0],
    T = { done: !1, value: b },
    R = (W) => (y !== void 0 && W < y) || (g !== void 0 && W > g),
    U = (W) =>
      y === void 0
        ? g
        : g === void 0 || Math.abs(y - W) < Math.abs(g - W)
        ? y
        : g;
  let H = u * l;
  const Z = b + H,
    L = h === void 0 ? Z : h(Z);
  L !== Z && (H = L - b);
  const G = (W) => -H * Math.exp(-W / r),
    q = (W) => L + G(W),
    tt = (W) => {
      const vt = G(W),
        Dt = q(W);
      (T.done = Math.abs(vt) <= m), (T.value = T.done ? L : Dt);
    };
  let F, $;
  const X = (W) => {
    R(T.value) &&
      ((F = W),
      ($ = Is({
        keyframes: [T.value, U(T.value)],
        velocity: Fg(q, W, T.value),
        damping: c,
        stiffness: d,
        restDelta: m,
        restSpeed: v,
      })));
  };
  return (
    X(0),
    {
      calculatedDuration: null,
      next: (W) => {
        let vt = !1;
        return (
          !$ && F === void 0 && ((vt = !0), tt(W), X(W)),
          F !== void 0 && W >= F ? $.next(W - F) : (!vt && tt(W), T)
        );
      },
    }
  );
}
function wb(i, l, u) {
  const r = [],
    c = u || vn.mix || Jg,
    d = i.length - 1;
  for (let h = 0; h < d; h++) {
    let y = c(i[h], i[h + 1]);
    if (l) {
      const g = Array.isArray(l) ? l[h] || qe : l;
      y = Sl(g, y);
    }
    r.push(y);
  }
  return r;
}
function Cb(i, l, { clamp: u = !0, ease: r, mixer: c } = {}) {
  const d = i.length;
  if ((Ac(d === l.length), d === 1)) return () => l[0];
  if (d === 2 && l[0] === l[1]) return () => l[1];
  const h = i[0] === i[1];
  i[0] > i[d - 1] && ((i = [...i].reverse()), (l = [...l].reverse()));
  const y = wb(l, r, c),
    g = y.length,
    m = (v) => {
      if (h && v < i[0]) return l[0];
      let b = 0;
      if (g > 1) for (; b < i.length - 2 && !(v < i[b + 1]); b++);
      const T = pl(i[b], i[b + 1], v);
      return y[b](T);
    };
  return u ? (v) => m(yn(i[0], i[d - 1], v)) : m;
}
function zb(i, l) {
  const u = i[i.length - 1];
  for (let r = 1; r <= l; r++) {
    const c = pl(0, l, r);
    i.push(Nt(u, 1, c));
  }
}
function jb(i) {
  const l = [0];
  return zb(l, i.length - 1), l;
}
function Ob(i, l) {
  return i.map((u) => u * l);
}
function Rb(i, l) {
  return i.map(() => l || Bg).splice(0, i.length - 1);
}
function hl({
  duration: i = 300,
  keyframes: l,
  times: u,
  ease: r = "easeInOut",
}) {
  const c = X1(r) ? r.map(rp) : rp(r),
    d = { done: !1, value: l[0] },
    h = Ob(u && u.length === l.length ? u : jb(l), i),
    y = Cb(h, l, { ease: Array.isArray(c) ? c : Rb(l, c) });
  return {
    calculatedDuration: i,
    next: (g) => ((d.value = y(g)), (d.done = g >= i), d),
  };
}
const Nb = (i) => i !== null;
function Nc(i, { repeat: l, repeatType: u = "loop" }, r, c = 1) {
  const d = i.filter(Nb),
    y = c < 0 || (l && u !== "loop" && l % 2 === 1) ? 0 : d.length - 1;
  return !y || r === void 0 ? d[y] : r;
}
const Vb = { decay: Ir, inertia: Ir, tween: hl, keyframes: hl, spring: Is };
function Wg(i) {
  typeof i.type == "string" && (i.type = Vb[i.type]);
}
class Vc {
  constructor() {
    this.updateFinished();
  }
  get finished() {
    return this._finished;
  }
  updateFinished() {
    this._finished = new Promise((l) => {
      this.resolve = l;
    });
  }
  notifyFinished() {
    this.resolve();
  }
  then(l, u) {
    return this.finished.then(l, u);
  }
}
const _b = (i) => i / 100;
class _c extends Vc {
  constructor(l) {
    super(),
      (this.state = "idle"),
      (this.startTime = null),
      (this.isStopped = !1),
      (this.currentTime = 0),
      (this.holdTime = null),
      (this.playbackSpeed = 1),
      (this.stop = () => {
        const { motionValue: u } = this.options;
        u && u.updatedAt !== ge.now() && this.tick(ge.now()),
          (this.isStopped = !0),
          this.state !== "idle" && (this.teardown(), this.options.onStop?.());
      }),
      (this.options = l),
      this.initAnimation(),
      this.play(),
      l.autoplay === !1 && this.pause();
  }
  initAnimation() {
    const { options: l } = this;
    Wg(l);
    const {
      type: u = hl,
      repeat: r = 0,
      repeatDelay: c = 0,
      repeatType: d,
      velocity: h = 0,
    } = l;
    let { keyframes: y } = l;
    const g = u || hl;
    g !== hl &&
      typeof y[0] != "number" &&
      ((this.mixKeyframes = Sl(_b, Jg(y[0], y[1]))), (y = [0, 100]));
    const m = g({ ...l, keyframes: y });
    d === "mirror" &&
      (this.mirroredGenerator = g({
        ...l,
        keyframes: [...y].reverse(),
        velocity: -h,
      })),
      m.calculatedDuration === null && (m.calculatedDuration = Rc(m));
    const { calculatedDuration: v } = m;
    (this.calculatedDuration = v),
      (this.resolvedDuration = v + c),
      (this.totalDuration = this.resolvedDuration * (r + 1) - c),
      (this.generator = m);
  }
  updateTime(l) {
    const u = Math.round(l - this.startTime) * this.playbackSpeed;
    this.holdTime !== null
      ? (this.currentTime = this.holdTime)
      : (this.currentTime = u);
  }
  tick(l, u = !1) {
    const {
      generator: r,
      totalDuration: c,
      mixKeyframes: d,
      mirroredGenerator: h,
      resolvedDuration: y,
      calculatedDuration: g,
    } = this;
    if (this.startTime === null) return r.next(0);
    const {
      delay: m = 0,
      keyframes: v,
      repeat: b,
      repeatType: T,
      repeatDelay: R,
      type: U,
      onUpdate: H,
      finalKeyframe: Z,
    } = this.options;
    this.speed > 0
      ? (this.startTime = Math.min(this.startTime, l))
      : this.speed < 0 &&
        (this.startTime = Math.min(l - c / this.speed, this.startTime)),
      u ? (this.currentTime = l) : this.updateTime(l);
    const L = this.currentTime - m * (this.playbackSpeed >= 0 ? 1 : -1),
      G = this.playbackSpeed >= 0 ? L < 0 : L > c;
    (this.currentTime = Math.max(L, 0)),
      this.state === "finished" &&
        this.holdTime === null &&
        (this.currentTime = c);
    let q = this.currentTime,
      tt = r;
    if (b) {
      const W = Math.min(this.currentTime, c) / y;
      let vt = Math.floor(W),
        Dt = W % 1;
      !Dt && W >= 1 && (Dt = 1),
        Dt === 1 && vt--,
        (vt = Math.min(vt, b + 1)),
        !!(vt % 2) &&
          (T === "reverse"
            ? ((Dt = 1 - Dt), R && (Dt -= R / y))
            : T === "mirror" && (tt = h)),
        (q = yn(0, 1, Dt) * y);
    }
    const F = G ? { done: !1, value: v[0] } : tt.next(q);
    d && (F.value = d(F.value));
    let { done: $ } = F;
    !G &&
      g !== null &&
      ($ =
        this.playbackSpeed >= 0
          ? this.currentTime >= c
          : this.currentTime <= 0);
    const X =
      this.holdTime === null &&
      (this.state === "finished" || (this.state === "running" && $));
    return (
      X && U !== Ir && (F.value = Nc(v, this.options, Z, this.speed)),
      H && H(F.value),
      X && this.finish(),
      F
    );
  }
  then(l, u) {
    return this.finished.then(l, u);
  }
  get duration() {
    return Le(this.calculatedDuration);
  }
  get iterationDuration() {
    const { delay: l = 0 } = this.options || {};
    return this.duration + Le(l);
  }
  get time() {
    return Le(this.currentTime);
  }
  set time(l) {
    (l = We(l)),
      (this.currentTime = l),
      this.startTime === null ||
      this.holdTime !== null ||
      this.playbackSpeed === 0
        ? (this.holdTime = l)
        : this.driver &&
          (this.startTime = this.driver.now() - l / this.playbackSpeed),
      this.driver?.start(!1);
  }
  get speed() {
    return this.playbackSpeed;
  }
  set speed(l) {
    this.updateTime(ge.now());
    const u = this.playbackSpeed !== l;
    (this.playbackSpeed = l), u && (this.time = Le(this.currentTime));
  }
  play() {
    if (this.isStopped) return;
    const { driver: l = vb, startTime: u } = this.options;
    this.driver || (this.driver = l((c) => this.tick(c))),
      this.options.onPlay?.();
    const r = this.driver.now();
    this.state === "finished"
      ? (this.updateFinished(), (this.startTime = r))
      : this.holdTime !== null
      ? (this.startTime = r - this.holdTime)
      : this.startTime || (this.startTime = u ?? r),
      this.state === "finished" &&
        this.speed < 0 &&
        (this.startTime += this.calculatedDuration),
      (this.holdTime = null),
      (this.state = "running"),
      this.driver.start();
  }
  pause() {
    (this.state = "paused"),
      this.updateTime(ge.now()),
      (this.holdTime = this.currentTime);
  }
  complete() {
    this.state !== "running" && this.play(),
      (this.state = "finished"),
      (this.holdTime = null);
  }
  finish() {
    this.notifyFinished(),
      this.teardown(),
      (this.state = "finished"),
      this.options.onComplete?.();
  }
  cancel() {
    (this.holdTime = null),
      (this.startTime = 0),
      this.tick(0),
      this.teardown(),
      this.options.onCancel?.();
  }
  teardown() {
    (this.state = "idle"),
      this.stopDriver(),
      (this.startTime = this.holdTime = null);
  }
  stopDriver() {
    this.driver && (this.driver.stop(), (this.driver = void 0));
  }
  sample(l) {
    return (this.startTime = 0), this.tick(l, !0);
  }
  attachTimeline(l) {
    return (
      this.options.allowFlatten &&
        ((this.options.type = "keyframes"),
        (this.options.ease = "linear"),
        this.initAnimation()),
      this.driver?.stop(),
      l.observe(this)
    );
  }
}
function Bb(i) {
  for (let l = 1; l < i.length; l++) i[l] ?? (i[l] = i[l - 1]);
}
const ga = (i) => (i * 180) / Math.PI,
  tc = (i) => {
    const l = ga(Math.atan2(i[1], i[0]));
    return ec(l);
  },
  Ub = {
    x: 4,
    y: 5,
    translateX: 4,
    translateY: 5,
    scaleX: 0,
    scaleY: 3,
    scale: (i) => (Math.abs(i[0]) + Math.abs(i[3])) / 2,
    rotate: tc,
    rotateZ: tc,
    skewX: (i) => ga(Math.atan(i[1])),
    skewY: (i) => ga(Math.atan(i[2])),
    skew: (i) => (Math.abs(i[1]) + Math.abs(i[2])) / 2,
  },
  ec = (i) => ((i = i % 360), i < 0 && (i += 360), i),
  pp = tc,
  gp = (i) => Math.sqrt(i[0] * i[0] + i[1] * i[1]),
  yp = (i) => Math.sqrt(i[4] * i[4] + i[5] * i[5]),
  Hb = {
    x: 12,
    y: 13,
    z: 14,
    translateX: 12,
    translateY: 13,
    translateZ: 14,
    scaleX: gp,
    scaleY: yp,
    scale: (i) => (gp(i) + yp(i)) / 2,
    rotateX: (i) => ec(ga(Math.atan2(i[6], i[5]))),
    rotateY: (i) => ec(ga(Math.atan2(-i[2], i[0]))),
    rotateZ: pp,
    rotate: pp,
    skewX: (i) => ga(Math.atan(i[4])),
    skewY: (i) => ga(Math.atan(i[1])),
    skew: (i) => (Math.abs(i[1]) + Math.abs(i[4])) / 2,
  };
function nc(i) {
  return i.includes("scale") ? 1 : 0;
}
function ac(i, l) {
  if (!i || i === "none") return nc(l);
  const u = i.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);
  let r, c;
  if (u) (r = Hb), (c = u);
  else {
    const y = i.match(/^matrix\(([-\d.e\s,]+)\)$/u);
    (r = Ub), (c = y);
  }
  if (!c) return nc(l);
  const d = r[l],
    h = c[1].split(",").map(qb);
  return typeof d == "function" ? d(h) : h[d];
}
const Lb = (i, l) => {
  const { transform: u = "none" } = getComputedStyle(i);
  return ac(u, l);
};
function qb(i) {
  return parseFloat(i.trim());
}
const hi = [
    "transformPerspective",
    "x",
    "y",
    "z",
    "translateX",
    "translateY",
    "translateZ",
    "scale",
    "scaleX",
    "scaleY",
    "rotate",
    "rotateX",
    "rotateY",
    "rotateZ",
    "skew",
    "skewX",
    "skewY",
  ],
  di = new Set(hi),
  vp = (i) => i === fi || i === at,
  Yb = new Set(["x", "y", "z"]),
  Gb = hi.filter((i) => !Yb.has(i));
function Xb(i) {
  const l = [];
  return (
    Gb.forEach((u) => {
      const r = i.getValue(u);
      r !== void 0 &&
        (l.push([u, r.get()]), r.set(u.startsWith("scale") ? 1 : 0));
    }),
    l
  );
}
const ya = {
  width: ({ x: i }, { paddingLeft: l = "0", paddingRight: u = "0" }) =>
    i.max - i.min - parseFloat(l) - parseFloat(u),
  height: ({ y: i }, { paddingTop: l = "0", paddingBottom: u = "0" }) =>
    i.max - i.min - parseFloat(l) - parseFloat(u),
  top: (i, { top: l }) => parseFloat(l),
  left: (i, { left: l }) => parseFloat(l),
  bottom: ({ y: i }, { top: l }) => parseFloat(l) + (i.max - i.min),
  right: ({ x: i }, { left: l }) => parseFloat(l) + (i.max - i.min),
  x: (i, { transform: l }) => ac(l, "x"),
  y: (i, { transform: l }) => ac(l, "y"),
};
ya.translateX = ya.x;
ya.translateY = ya.y;
const va = new Set();
let ic = !1,
  lc = !1,
  sc = !1;
function Pg() {
  if (lc) {
    const i = Array.from(va).filter((r) => r.needsMeasurement),
      l = new Set(i.map((r) => r.element)),
      u = new Map();
    l.forEach((r) => {
      const c = Xb(r);
      c.length && (u.set(r, c), r.render());
    }),
      i.forEach((r) => r.measureInitialState()),
      l.forEach((r) => {
        r.render();
        const c = u.get(r);
        c &&
          c.forEach(([d, h]) => {
            r.getValue(d)?.set(h);
          });
      }),
      i.forEach((r) => r.measureEndState()),
      i.forEach((r) => {
        r.suspendedScrollY !== void 0 && window.scrollTo(0, r.suspendedScrollY);
      });
  }
  (lc = !1), (ic = !1), va.forEach((i) => i.complete(sc)), va.clear();
}
function $g() {
  va.forEach((i) => {
    i.readKeyframes(), i.needsMeasurement && (lc = !0);
  });
}
function Zb() {
  (sc = !0), $g(), Pg(), (sc = !1);
}
class Bc {
  constructor(l, u, r, c, d, h = !1) {
    (this.state = "pending"),
      (this.isAsync = !1),
      (this.needsMeasurement = !1),
      (this.unresolvedKeyframes = [...l]),
      (this.onComplete = u),
      (this.name = r),
      (this.motionValue = c),
      (this.element = d),
      (this.isAsync = h);
  }
  scheduleResolve() {
    (this.state = "scheduled"),
      this.isAsync
        ? (va.add(this),
          ic || ((ic = !0), Ot.read($g), Ot.resolveKeyframes(Pg)))
        : (this.readKeyframes(), this.complete());
  }
  readKeyframes() {
    const {
      unresolvedKeyframes: l,
      name: u,
      element: r,
      motionValue: c,
    } = this;
    if (l[0] === null) {
      const d = c?.get(),
        h = l[l.length - 1];
      if (d !== void 0) l[0] = d;
      else if (r && u) {
        const y = r.readValue(u, h);
        y != null && (l[0] = y);
      }
      l[0] === void 0 && (l[0] = h), c && d === void 0 && c.set(l[0]);
    }
    Bb(l);
  }
  setFinalKeyframe() {}
  measureInitialState() {}
  renderEndStyles() {}
  measureEndState() {}
  complete(l = !1) {
    (this.state = "complete"),
      this.onComplete(this.unresolvedKeyframes, this.finalKeyframe, l),
      va.delete(this);
  }
  cancel() {
    this.state === "scheduled" && (va.delete(this), (this.state = "pending"));
  }
  resume() {
    this.state === "pending" && this.scheduleResolve();
  }
}
const Qb = (i) => i.startsWith("--");
function Kb(i, l, u) {
  Qb(l) ? i.style.setProperty(l, u) : (i.style[l] = u);
}
const Jb = Ec(() => window.ScrollTimeline !== void 0),
  kb = {};
function Fb(i, l) {
  const u = Ec(i);
  return () => kb[l] ?? u();
}
const Ig = Fb(() => {
    try {
      document
        .createElement("div")
        .animate({ opacity: 0 }, { easing: "linear(0, 1)" });
    } catch {
      return !1;
    }
    return !0;
  }, "linearEasing"),
  cl = ([i, l, u, r]) => `cubic-bezier(${i}, ${l}, ${u}, ${r})`,
  bp = {
    linear: "linear",
    ease: "ease",
    easeIn: "ease-in",
    easeOut: "ease-out",
    easeInOut: "ease-in-out",
    circIn: cl([0, 0.65, 0.55, 1]),
    circOut: cl([0.55, 0, 1, 0.45]),
    backIn: cl([0.31, 0.01, 0.66, -0.59]),
    backOut: cl([0.33, 1.53, 0.69, 0.99]),
  };
function ty(i, l) {
  if (i)
    return typeof i == "function"
      ? Ig()
        ? kg(i, l)
        : "ease-out"
      : Ug(i)
      ? cl(i)
      : Array.isArray(i)
      ? i.map((u) => ty(u, l) || bp.easeOut)
      : bp[i];
}
function Wb(
  i,
  l,
  u,
  {
    delay: r = 0,
    duration: c = 300,
    repeat: d = 0,
    repeatType: h = "loop",
    ease: y = "easeOut",
    times: g,
  } = {},
  m = void 0
) {
  const v = { [l]: u };
  g && (v.offset = g);
  const b = ty(y, c);
  Array.isArray(b) && (v.easing = b);
  const T = {
    delay: r,
    duration: c,
    easing: Array.isArray(b) ? "linear" : b,
    fill: "both",
    iterations: d + 1,
    direction: h === "reverse" ? "alternate" : "normal",
  };
  return m && (T.pseudoElement = m), i.animate(v, T);
}
function ey(i) {
  return typeof i == "function" && "applyToOptions" in i;
}
function Pb({ type: i, ...l }) {
  return ey(i) && Ig()
    ? i.applyToOptions(l)
    : (l.duration ?? (l.duration = 300), l.ease ?? (l.ease = "easeOut"), l);
}
class $b extends Vc {
  constructor(l) {
    if ((super(), (this.finishedTime = null), (this.isStopped = !1), !l))
      return;
    const {
      element: u,
      name: r,
      keyframes: c,
      pseudoElement: d,
      allowFlatten: h = !1,
      finalKeyframe: y,
      onComplete: g,
    } = l;
    (this.isPseudoElement = !!d),
      (this.allowFlatten = h),
      (this.options = l),
      Ac(typeof l.type != "string");
    const m = Pb(l);
    (this.animation = Wb(u, r, c, m, d)),
      m.autoplay === !1 && this.animation.pause(),
      (this.animation.onfinish = () => {
        if (((this.finishedTime = this.time), !d)) {
          const v = Nc(c, this.options, y, this.speed);
          this.updateMotionValue ? this.updateMotionValue(v) : Kb(u, r, v),
            this.animation.cancel();
        }
        g?.(), this.notifyFinished();
      });
  }
  play() {
    this.isStopped ||
      (this.animation.play(),
      this.state === "finished" && this.updateFinished());
  }
  pause() {
    this.animation.pause();
  }
  complete() {
    this.animation.finish?.();
  }
  cancel() {
    try {
      this.animation.cancel();
    } catch {}
  }
  stop() {
    if (this.isStopped) return;
    this.isStopped = !0;
    const { state: l } = this;
    l === "idle" ||
      l === "finished" ||
      (this.updateMotionValue ? this.updateMotionValue() : this.commitStyles(),
      this.isPseudoElement || this.cancel());
  }
  commitStyles() {
    this.isPseudoElement || this.animation.commitStyles?.();
  }
  get duration() {
    const l = this.animation.effect?.getComputedTiming?.().duration || 0;
    return Le(Number(l));
  }
  get iterationDuration() {
    const { delay: l = 0 } = this.options || {};
    return this.duration + Le(l);
  }
  get time() {
    return Le(Number(this.animation.currentTime) || 0);
  }
  set time(l) {
    (this.finishedTime = null), (this.animation.currentTime = We(l));
  }
  get speed() {
    return this.animation.playbackRate;
  }
  set speed(l) {
    l < 0 && (this.finishedTime = null), (this.animation.playbackRate = l);
  }
  get state() {
    return this.finishedTime !== null ? "finished" : this.animation.playState;
  }
  get startTime() {
    return Number(this.animation.startTime);
  }
  set startTime(l) {
    this.animation.startTime = l;
  }
  attachTimeline({ timeline: l, observe: u }) {
    return (
      this.allowFlatten &&
        this.animation.effect?.updateTiming({ easing: "linear" }),
      (this.animation.onfinish = null),
      l && Jb() ? ((this.animation.timeline = l), qe) : u(this)
    );
  }
}
const ny = { anticipate: Ng, backInOut: Rg, circInOut: _g };
function Ib(i) {
  return i in ny;
}
function tS(i) {
  typeof i.ease == "string" && Ib(i.ease) && (i.ease = ny[i.ease]);
}
const Sp = 10;
class eS extends $b {
  constructor(l) {
    tS(l),
      Wg(l),
      super(l),
      l.startTime && (this.startTime = l.startTime),
      (this.options = l);
  }
  updateMotionValue(l) {
    const {
      motionValue: u,
      onUpdate: r,
      onComplete: c,
      element: d,
      ...h
    } = this.options;
    if (!u) return;
    if (l !== void 0) {
      u.set(l);
      return;
    }
    const y = new _c({ ...h, autoplay: !1 }),
      g = We(this.finishedTime ?? this.time);
    u.setWithVelocity(y.sample(g - Sp).value, y.sample(g).value, Sp), y.stop();
  }
}
const Tp = (i, l) =>
  l === "zIndex"
    ? !1
    : !!(
        typeof i == "number" ||
        Array.isArray(i) ||
        (typeof i == "string" &&
          (Kn.test(i) || i === "0") &&
          !i.startsWith("url("))
      );
function nS(i) {
  const l = i[0];
  if (i.length === 1) return !0;
  for (let u = 0; u < i.length; u++) if (i[u] !== l) return !0;
}
function aS(i, l, u, r) {
  const c = i[0];
  if (c === null) return !1;
  if (l === "display" || l === "visibility") return !0;
  const d = i[i.length - 1],
    h = Tp(c, l),
    y = Tp(d, l);
  return !h || !y ? !1 : nS(i) || ((u === "spring" || ey(u)) && r);
}
function uc(i) {
  (i.duration = 0), (i.type = "keyframes");
}
const iS = new Set(["opacity", "clipPath", "filter", "transform"]),
  lS = Ec(() => Object.hasOwnProperty.call(Element.prototype, "animate"));
function sS(i) {
  const {
    motionValue: l,
    name: u,
    repeatDelay: r,
    repeatType: c,
    damping: d,
    type: h,
  } = i;
  if (!(l?.owner?.current instanceof HTMLElement)) return !1;
  const { onUpdate: g, transformTemplate: m } = l.owner.getProps();
  return (
    lS() &&
    u &&
    iS.has(u) &&
    (u !== "transform" || !m) &&
    !g &&
    !r &&
    c !== "mirror" &&
    d !== 0 &&
    h !== "inertia"
  );
}
const uS = 40;
class oS extends Vc {
  constructor({
    autoplay: l = !0,
    delay: u = 0,
    type: r = "keyframes",
    repeat: c = 0,
    repeatDelay: d = 0,
    repeatType: h = "loop",
    keyframes: y,
    name: g,
    motionValue: m,
    element: v,
    ...b
  }) {
    super(),
      (this.stop = () => {
        this._animation && (this._animation.stop(), this.stopTimeline?.()),
          this.keyframeResolver?.cancel();
      }),
      (this.createdAt = ge.now());
    const T = {
        autoplay: l,
        delay: u,
        type: r,
        repeat: c,
        repeatDelay: d,
        repeatType: h,
        name: g,
        motionValue: m,
        element: v,
        ...b,
      },
      R = v?.KeyframeResolver || Bc;
    (this.keyframeResolver = new R(
      y,
      (U, H, Z) => this.onKeyframesResolved(U, H, T, !Z),
      g,
      m,
      v
    )),
      this.keyframeResolver?.scheduleResolve();
  }
  onKeyframesResolved(l, u, r, c) {
    this.keyframeResolver = void 0;
    const {
      name: d,
      type: h,
      velocity: y,
      delay: g,
      isHandoff: m,
      onUpdate: v,
    } = r;
    (this.resolvedAt = ge.now()),
      aS(l, d, h, y) ||
        ((vn.instantAnimations || !g) && v?.(Nc(l, r, u)),
        (l[0] = l[l.length - 1]),
        uc(r),
        (r.repeat = 0));
    const T = {
        startTime: c
          ? this.resolvedAt
            ? this.resolvedAt - this.createdAt > uS
              ? this.resolvedAt
              : this.createdAt
            : this.createdAt
          : void 0,
        finalKeyframe: u,
        ...r,
        keyframes: l,
      },
      R =
        !m && sS(T)
          ? new eS({ ...T, element: T.motionValue.owner.current })
          : new _c(T);
    R.finished.then(() => this.notifyFinished()).catch(qe),
      this.pendingTimeline &&
        ((this.stopTimeline = R.attachTimeline(this.pendingTimeline)),
        (this.pendingTimeline = void 0)),
      (this._animation = R);
  }
  get finished() {
    return this._animation ? this.animation.finished : this._finished;
  }
  then(l, u) {
    return this.finished.finally(l).then(() => {});
  }
  get animation() {
    return (
      this._animation || (this.keyframeResolver?.resume(), Zb()),
      this._animation
    );
  }
  get duration() {
    return this.animation.duration;
  }
  get iterationDuration() {
    return this.animation.iterationDuration;
  }
  get time() {
    return this.animation.time;
  }
  set time(l) {
    this.animation.time = l;
  }
  get speed() {
    return this.animation.speed;
  }
  get state() {
    return this.animation.state;
  }
  set speed(l) {
    this.animation.speed = l;
  }
  get startTime() {
    return this.animation.startTime;
  }
  attachTimeline(l) {
    return (
      this._animation
        ? (this.stopTimeline = this.animation.attachTimeline(l))
        : (this.pendingTimeline = l),
      () => this.stop()
    );
  }
  play() {
    this.animation.play();
  }
  pause() {
    this.animation.pause();
  }
  complete() {
    this.animation.complete();
  }
  cancel() {
    this._animation && this.animation.cancel(), this.keyframeResolver?.cancel();
  }
}
const rS = /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;
function cS(i) {
  const l = rS.exec(i);
  if (!l) return [,];
  const [, u, r, c] = l;
  return [`--${u ?? r}`, c];
}
function ay(i, l, u = 1) {
  const [r, c] = cS(i);
  if (!r) return;
  const d = window.getComputedStyle(l).getPropertyValue(r);
  if (d) {
    const h = d.trim();
    return Eg(h) ? parseFloat(h) : h;
  }
  return Cc(c) ? ay(c, l, u + 1) : c;
}
function Uc(i, l) {
  return i?.[l] ?? i?.default ?? i;
}
const iy = new Set([
    "width",
    "height",
    "top",
    "left",
    "right",
    "bottom",
    ...hi,
  ]),
  fS = { test: (i) => i === "auto", parse: (i) => i },
  ly = (i) => (l) => l.test(i),
  sy = [fi, at, Pe, Zn, nb, eb, fS],
  xp = (i) => sy.find(ly(i));
function hS(i) {
  return typeof i == "number"
    ? i === 0
    : i !== null
    ? i === "none" || i === "0" || Dg(i)
    : !0;
}
const dS = new Set(["brightness", "contrast", "saturate", "opacity"]);
function mS(i) {
  const [l, u] = i.slice(0, -1).split("(");
  if (l === "drop-shadow") return i;
  const [r] = u.match(zc) || [];
  if (!r) return i;
  const c = u.replace(r, "");
  let d = dS.has(l) ? 1 : 0;
  return r !== u && (d *= 100), l + "(" + d + c + ")";
}
const pS = /\b([a-z-]*)\(.*?\)/gu,
  oc = {
    ...Kn,
    getAnimatableNone: (i) => {
      const l = i.match(pS);
      return l ? l.map(mS).join(" ") : i;
    },
  },
  Ap = { ...fi, transform: Math.round },
  gS = {
    rotate: Zn,
    rotateX: Zn,
    rotateY: Zn,
    rotateZ: Zn,
    scale: Xs,
    scaleX: Xs,
    scaleY: Xs,
    scaleZ: Xs,
    skew: Zn,
    skewX: Zn,
    skewY: Zn,
    distance: at,
    translateX: at,
    translateY: at,
    translateZ: at,
    x: at,
    y: at,
    z: at,
    perspective: at,
    transformPerspective: at,
    opacity: gl,
    originX: cp,
    originY: cp,
    originZ: at,
  },
  Hc = {
    borderWidth: at,
    borderTopWidth: at,
    borderRightWidth: at,
    borderBottomWidth: at,
    borderLeftWidth: at,
    borderRadius: at,
    radius: at,
    borderTopLeftRadius: at,
    borderTopRightRadius: at,
    borderBottomRightRadius: at,
    borderBottomLeftRadius: at,
    width: at,
    maxWidth: at,
    height: at,
    maxHeight: at,
    top: at,
    right: at,
    bottom: at,
    left: at,
    padding: at,
    paddingTop: at,
    paddingRight: at,
    paddingBottom: at,
    paddingLeft: at,
    margin: at,
    marginTop: at,
    marginRight: at,
    marginBottom: at,
    marginLeft: at,
    backgroundPositionX: at,
    backgroundPositionY: at,
    ...gS,
    zIndex: Ap,
    fillOpacity: gl,
    strokeOpacity: gl,
    numOctaves: Ap,
  },
  yS = {
    ...Hc,
    color: Kt,
    backgroundColor: Kt,
    outlineColor: Kt,
    fill: Kt,
    stroke: Kt,
    borderColor: Kt,
    borderTopColor: Kt,
    borderRightColor: Kt,
    borderBottomColor: Kt,
    borderLeftColor: Kt,
    filter: oc,
    WebkitFilter: oc,
  },
  uy = (i) => yS[i];
function oy(i, l) {
  let u = uy(i);
  return (
    u !== oc && (u = Kn), u.getAnimatableNone ? u.getAnimatableNone(l) : void 0
  );
}
const vS = new Set(["auto", "none", "0"]);
function bS(i, l, u) {
  let r = 0,
    c;
  for (; r < i.length && !c; ) {
    const d = i[r];
    typeof d == "string" && !vS.has(d) && yl(d).values.length && (c = i[r]),
      r++;
  }
  if (c && u) for (const d of l) i[d] = oy(u, c);
}
class SS extends Bc {
  constructor(l, u, r, c, d) {
    super(l, u, r, c, d, !0);
  }
  readKeyframes() {
    const { unresolvedKeyframes: l, element: u, name: r } = this;
    if (!u || !u.current) return;
    super.readKeyframes();
    for (let g = 0; g < l.length; g++) {
      let m = l[g];
      if (typeof m == "string" && ((m = m.trim()), Cc(m))) {
        const v = ay(m, u.current);
        v !== void 0 && (l[g] = v),
          g === l.length - 1 && (this.finalKeyframe = m);
      }
    }
    if ((this.resolveNoneKeyframes(), !iy.has(r) || l.length !== 2)) return;
    const [c, d] = l,
      h = xp(c),
      y = xp(d);
    if (h !== y)
      if (vp(h) && vp(y))
        for (let g = 0; g < l.length; g++) {
          const m = l[g];
          typeof m == "string" && (l[g] = parseFloat(m));
        }
      else ya[r] && (this.needsMeasurement = !0);
  }
  resolveNoneKeyframes() {
    const { unresolvedKeyframes: l, name: u } = this,
      r = [];
    for (let c = 0; c < l.length; c++) (l[c] === null || hS(l[c])) && r.push(c);
    r.length && bS(l, r, u);
  }
  measureInitialState() {
    const { element: l, unresolvedKeyframes: u, name: r } = this;
    if (!l || !l.current) return;
    r === "height" && (this.suspendedScrollY = window.pageYOffset),
      (this.measuredOrigin = ya[r](
        l.measureViewportBox(),
        window.getComputedStyle(l.current)
      )),
      (u[0] = this.measuredOrigin);
    const c = u[u.length - 1];
    c !== void 0 && l.getValue(r, c).jump(c, !1);
  }
  measureEndState() {
    const { element: l, name: u, unresolvedKeyframes: r } = this;
    if (!l || !l.current) return;
    const c = l.getValue(u);
    c && c.jump(this.measuredOrigin, !1);
    const d = r.length - 1,
      h = r[d];
    (r[d] = ya[u](l.measureViewportBox(), window.getComputedStyle(l.current))),
      h !== null && this.finalKeyframe === void 0 && (this.finalKeyframe = h),
      this.removedTransforms?.length &&
        this.removedTransforms.forEach(([y, g]) => {
          l.getValue(y).set(g);
        }),
      this.resolveNoneKeyframes();
  }
}
function TS(i, l, u) {
  if (i instanceof EventTarget) return [i];
  if (typeof i == "string") {
    let r = document;
    const c = u?.[i] ?? r.querySelectorAll(i);
    return c ? Array.from(c) : [];
  }
  return Array.from(i);
}
const ry = (i, l) => (l && typeof i == "number" ? l.transform(i) : i);
function cy(i) {
  return Mg(i) && "offsetHeight" in i;
}
const Ep = 30,
  xS = (i) => !isNaN(parseFloat(i));
class AS {
  constructor(l, u = {}) {
    (this.canTrackVelocity = null),
      (this.events = {}),
      (this.updateAndNotify = (r) => {
        const c = ge.now();
        if (
          (this.updatedAt !== c && this.setPrevFrameValue(),
          (this.prev = this.current),
          this.setCurrent(r),
          this.current !== this.prev &&
            (this.events.change?.notify(this.current), this.dependents))
        )
          for (const d of this.dependents) d.dirty();
      }),
      (this.hasAnimated = !1),
      this.setCurrent(l),
      (this.owner = u.owner);
  }
  setCurrent(l) {
    (this.current = l),
      (this.updatedAt = ge.now()),
      this.canTrackVelocity === null &&
        l !== void 0 &&
        (this.canTrackVelocity = xS(this.current));
  }
  setPrevFrameValue(l = this.current) {
    (this.prevFrameValue = l), (this.prevUpdatedAt = this.updatedAt);
  }
  onChange(l) {
    return this.on("change", l);
  }
  on(l, u) {
    this.events[l] || (this.events[l] = new Mc());
    const r = this.events[l].add(u);
    return l === "change"
      ? () => {
          r(),
            Ot.read(() => {
              this.events.change.getSize() || this.stop();
            });
        }
      : r;
  }
  clearListeners() {
    for (const l in this.events) this.events[l].clear();
  }
  attach(l, u) {
    (this.passiveEffect = l), (this.stopPassiveEffect = u);
  }
  set(l) {
    this.passiveEffect
      ? this.passiveEffect(l, this.updateAndNotify)
      : this.updateAndNotify(l);
  }
  setWithVelocity(l, u, r) {
    this.set(u),
      (this.prev = void 0),
      (this.prevFrameValue = l),
      (this.prevUpdatedAt = this.updatedAt - r);
  }
  jump(l, u = !0) {
    this.updateAndNotify(l),
      (this.prev = l),
      (this.prevUpdatedAt = this.prevFrameValue = void 0),
      u && this.stop(),
      this.stopPassiveEffect && this.stopPassiveEffect();
  }
  dirty() {
    this.events.change?.notify(this.current);
  }
  addDependent(l) {
    this.dependents || (this.dependents = new Set()), this.dependents.add(l);
  }
  removeDependent(l) {
    this.dependents && this.dependents.delete(l);
  }
  get() {
    return this.current;
  }
  getPrevious() {
    return this.prev;
  }
  getVelocity() {
    const l = ge.now();
    if (
      !this.canTrackVelocity ||
      this.prevFrameValue === void 0 ||
      l - this.updatedAt > Ep
    )
      return 0;
    const u = Math.min(this.updatedAt - this.prevUpdatedAt, Ep);
    return wg(parseFloat(this.current) - parseFloat(this.prevFrameValue), u);
  }
  start(l) {
    return (
      this.stop(),
      new Promise((u) => {
        (this.hasAnimated = !0),
          (this.animation = l(u)),
          this.events.animationStart && this.events.animationStart.notify();
      }).then(() => {
        this.events.animationComplete && this.events.animationComplete.notify(),
          this.clearAnimation();
      })
    );
  }
  stop() {
    this.animation &&
      (this.animation.stop(),
      this.events.animationCancel && this.events.animationCancel.notify()),
      this.clearAnimation();
  }
  isAnimating() {
    return !!this.animation;
  }
  clearAnimation() {
    delete this.animation;
  }
  destroy() {
    this.dependents?.clear(),
      this.events.destroy?.notify(),
      this.clearListeners(),
      this.stop(),
      this.stopPassiveEffect && this.stopPassiveEffect();
  }
}
function ri(i, l) {
  return new AS(i, l);
}
const { schedule: Lc } = Hg(queueMicrotask, !1),
  Qe = { x: !1, y: !1 };
function fy() {
  return Qe.x || Qe.y;
}
function ES(i) {
  return i === "x" || i === "y"
    ? Qe[i]
      ? null
      : ((Qe[i] = !0),
        () => {
          Qe[i] = !1;
        })
    : Qe.x || Qe.y
    ? null
    : ((Qe.x = Qe.y = !0),
      () => {
        Qe.x = Qe.y = !1;
      });
}
function hy(i, l) {
  const u = TS(i),
    r = new AbortController(),
    c = { passive: !0, ...l, signal: r.signal };
  return [u, c, () => r.abort()];
}
function Mp(i) {
  return !(i.pointerType === "touch" || fy());
}
function MS(i, l, u = {}) {
  const [r, c, d] = hy(i, u),
    h = (y) => {
      if (!Mp(y)) return;
      const { target: g } = y,
        m = l(g, y);
      if (typeof m != "function" || !g) return;
      const v = (b) => {
        Mp(b) && (m(b), g.removeEventListener("pointerleave", v));
      };
      g.addEventListener("pointerleave", v, c);
    };
  return (
    r.forEach((y) => {
      y.addEventListener("pointerenter", h, c);
    }),
    d
  );
}
const dy = (i, l) => (l ? (i === l ? !0 : dy(i, l.parentElement)) : !1),
  qc = (i) =>
    i.pointerType === "mouse"
      ? typeof i.button != "number" || i.button <= 0
      : i.isPrimary !== !1,
  DS = new Set(["BUTTON", "INPUT", "SELECT", "TEXTAREA", "A"]);
function wS(i) {
  return DS.has(i.tagName) || i.tabIndex !== -1;
}
const ks = new WeakSet();
function Dp(i) {
  return (l) => {
    l.key === "Enter" && i(l);
  };
}
function Hr(i, l) {
  i.dispatchEvent(
    new PointerEvent("pointer" + l, { isPrimary: !0, bubbles: !0 })
  );
}
const CS = (i, l) => {
  const u = i.currentTarget;
  if (!u) return;
  const r = Dp(() => {
    if (ks.has(u)) return;
    Hr(u, "down");
    const c = Dp(() => {
        Hr(u, "up");
      }),
      d = () => Hr(u, "cancel");
    u.addEventListener("keyup", c, l), u.addEventListener("blur", d, l);
  });
  u.addEventListener("keydown", r, l),
    u.addEventListener("blur", () => u.removeEventListener("keydown", r), l);
};
function wp(i) {
  return qc(i) && !fy();
}
function zS(i, l, u = {}) {
  const [r, c, d] = hy(i, u),
    h = (y) => {
      const g = y.currentTarget;
      if (!wp(y)) return;
      ks.add(g);
      const m = l(g, y),
        v = (R, U) => {
          window.removeEventListener("pointerup", b),
            window.removeEventListener("pointercancel", T),
            ks.has(g) && ks.delete(g),
            wp(R) && typeof m == "function" && m(R, { success: U });
        },
        b = (R) => {
          v(
            R,
            g === window ||
              g === document ||
              u.useGlobalTarget ||
              dy(g, R.target)
          );
        },
        T = (R) => {
          v(R, !1);
        };
      window.addEventListener("pointerup", b, c),
        window.addEventListener("pointercancel", T, c);
    };
  return (
    r.forEach((y) => {
      (u.useGlobalTarget ? window : y).addEventListener("pointerdown", h, c),
        cy(y) &&
          (y.addEventListener("focus", (m) => CS(m, c)),
          !wS(y) && !y.hasAttribute("tabindex") && (y.tabIndex = 0));
    }),
    d
  );
}
function my(i) {
  return Mg(i) && "ownerSVGElement" in i;
}
function jS(i) {
  return my(i) && i.tagName === "svg";
}
const se = (i) => !!(i && i.getVelocity),
  OS = [...sy, Kt, Kn],
  RS = (i) => OS.find(ly(i)),
  Yc = k.createContext({
    transformPagePoint: (i) => i,
    isStatic: !1,
    reducedMotion: "never",
  });
function Cp(i, l) {
  if (typeof i == "function") return i(l);
  i != null && (i.current = l);
}
function NS(...i) {
  return (l) => {
    let u = !1;
    const r = i.map((c) => {
      const d = Cp(c, l);
      return !u && typeof d == "function" && (u = !0), d;
    });
    if (u)
      return () => {
        for (let c = 0; c < r.length; c++) {
          const d = r[c];
          typeof d == "function" ? d() : Cp(i[c], null);
        }
      };
  };
}
function VS(...i) {
  return k.useCallback(NS(...i), i);
}
class _S extends k.Component {
  getSnapshotBeforeUpdate(l) {
    const u = this.props.childRef.current;
    if (u && l.isPresent && !this.props.isPresent) {
      const r = u.offsetParent,
        c = (cy(r) && r.offsetWidth) || 0,
        d = this.props.sizeRef.current;
      (d.height = u.offsetHeight || 0),
        (d.width = u.offsetWidth || 0),
        (d.top = u.offsetTop),
        (d.left = u.offsetLeft),
        (d.right = c - d.width - d.left);
    }
    return null;
  }
  componentDidUpdate() {}
  render() {
    return this.props.children;
  }
}
function BS({ children: i, isPresent: l, anchorX: u, root: r }) {
  const c = k.useId(),
    d = k.useRef(null),
    h = k.useRef({ width: 0, height: 0, top: 0, left: 0, right: 0 }),
    { nonce: y } = k.useContext(Yc),
    g = VS(d, i?.ref);
  return (
    k.useInsertionEffect(() => {
      const { width: m, height: v, top: b, left: T, right: R } = h.current;
      if (l || !d.current || !m || !v) return;
      const U = u === "left" ? `left: ${T}` : `right: ${R}`;
      d.current.dataset.motionPopId = c;
      const H = document.createElement("style");
      y && (H.nonce = y);
      const Z = r ?? document.head;
      return (
        Z.appendChild(H),
        H.sheet &&
          H.sheet.insertRule(`
          [data-motion-pop-id="${c}"] {
            position: absolute !important;
            width: ${m}px !important;
            height: ${v}px !important;
            ${U}px !important;
            top: ${b}px !important;
          }
        `),
        () => {
          Z.contains(H) && Z.removeChild(H);
        }
      );
    }, [l]),
    E.jsx(_S, {
      isPresent: l,
      childRef: d,
      sizeRef: h,
      children: k.cloneElement(i, { ref: g }),
    })
  );
}
const US = ({
  children: i,
  initial: l,
  isPresent: u,
  onExitComplete: r,
  custom: c,
  presenceAffectsLayout: d,
  mode: h,
  anchorX: y,
  root: g,
}) => {
  const m = bc(HS),
    v = k.useId();
  let b = !0,
    T = k.useMemo(
      () => (
        (b = !1),
        {
          id: v,
          initial: l,
          isPresent: u,
          custom: c,
          onExitComplete: (R) => {
            m.set(R, !0);
            for (const U of m.values()) if (!U) return;
            r && r();
          },
          register: (R) => (m.set(R, !1), () => m.delete(R)),
        }
      ),
      [u, m, r]
    );
  return (
    d && b && (T = { ...T }),
    k.useMemo(() => {
      m.forEach((R, U) => m.set(U, !1));
    }, [u]),
    k.useEffect(() => {
      !u && !m.size && r && r();
    }, [u]),
    h === "popLayout" &&
      (i = E.jsx(BS, { isPresent: u, anchorX: y, root: g, children: i })),
    E.jsx(iu.Provider, { value: T, children: i })
  );
};
function HS() {
  return new Map();
}
function py(i = !0) {
  const l = k.useContext(iu);
  if (l === null) return [!0, null];
  const { isPresent: u, onExitComplete: r, register: c } = l,
    d = k.useId();
  k.useEffect(() => {
    if (i) return c(d);
  }, [i]);
  const h = k.useCallback(() => i && r && r(d), [d, r, i]);
  return !u && r ? [!1, h] : [!0];
}
const Zs = (i) => i.key || "";
function zp(i) {
  const l = [];
  return (
    k.Children.forEach(i, (u) => {
      k.isValidElement(u) && l.push(u);
    }),
    l
  );
}
const LS = ({
    children: i,
    custom: l,
    initial: u = !0,
    onExitComplete: r,
    presenceAffectsLayout: c = !0,
    mode: d = "sync",
    propagate: h = !1,
    anchorX: y = "left",
    root: g,
  }) => {
    const [m, v] = py(h),
      b = k.useMemo(() => zp(i), [i]),
      T = h && !m ? [] : b.map(Zs),
      R = k.useRef(!0),
      U = k.useRef(b),
      H = bc(() => new Map()),
      [Z, L] = k.useState(b),
      [G, q] = k.useState(b);
    Ag(() => {
      (R.current = !1), (U.current = b);
      for (let $ = 0; $ < G.length; $++) {
        const X = Zs(G[$]);
        T.includes(X) ? H.delete(X) : H.get(X) !== !0 && H.set(X, !1);
      }
    }, [G, T.length, T.join("-")]);
    const tt = [];
    if (b !== Z) {
      let $ = [...b];
      for (let X = 0; X < G.length; X++) {
        const W = G[X],
          vt = Zs(W);
        T.includes(vt) || ($.splice(X, 0, W), tt.push(W));
      }
      return d === "wait" && tt.length && ($ = tt), q(zp($)), L(b), null;
    }
    const { forceRender: F } = k.useContext(vc);
    return E.jsx(E.Fragment, {
      children: G.map(($) => {
        const X = Zs($),
          W = h && !m ? !1 : b === G || T.includes(X),
          vt = () => {
            if (H.has(X)) H.set(X, !0);
            else return;
            let Dt = !0;
            H.forEach((Lt) => {
              Lt || (Dt = !1);
            }),
              Dt && (F?.(), q(U.current), h && v?.(), r && r());
          };
        return E.jsx(
          US,
          {
            isPresent: W,
            initial: !R.current || u ? void 0 : !1,
            custom: l,
            presenceAffectsLayout: c,
            mode: d,
            root: g,
            onExitComplete: W ? void 0 : vt,
            anchorX: y,
            children: $,
          },
          X
        );
      }),
    });
  },
  gy = k.createContext({ strict: !1 }),
  jp = {
    animation: [
      "animate",
      "variants",
      "whileHover",
      "whileTap",
      "exit",
      "whileInView",
      "whileFocus",
      "whileDrag",
    ],
    exit: ["exit"],
    drag: ["drag", "dragControls"],
    focus: ["whileFocus"],
    hover: ["whileHover", "onHoverStart", "onHoverEnd"],
    tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
    pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
    inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
    layout: ["layout", "layoutId"],
  },
  ci = {};
for (const i in jp) ci[i] = { isEnabled: (l) => jp[i].some((u) => !!l[u]) };
function qS(i) {
  for (const l in i) ci[l] = { ...ci[l], ...i[l] };
}
const YS = new Set([
  "animate",
  "exit",
  "variants",
  "initial",
  "style",
  "values",
  "variants",
  "transition",
  "transformTemplate",
  "custom",
  "inherit",
  "onBeforeLayoutMeasure",
  "onAnimationStart",
  "onAnimationComplete",
  "onUpdate",
  "onDragStart",
  "onDrag",
  "onDragEnd",
  "onMeasureDragConstraints",
  "onDirectionLock",
  "onDragTransitionEnd",
  "_dragX",
  "_dragY",
  "onHoverStart",
  "onHoverEnd",
  "onViewportEnter",
  "onViewportLeave",
  "globalTapTarget",
  "ignoreStrict",
  "viewport",
]);
function tu(i) {
  return (
    i.startsWith("while") ||
    (i.startsWith("drag") && i !== "draggable") ||
    i.startsWith("layout") ||
    i.startsWith("onTap") ||
    i.startsWith("onPan") ||
    i.startsWith("onLayout") ||
    YS.has(i)
  );
}
let yy = (i) => !tu(i);
function GS(i) {
  typeof i == "function" && (yy = (l) => (l.startsWith("on") ? !tu(l) : i(l)));
}
try {
  GS(require("@emotion/is-prop-valid").default);
} catch {}
function XS(i, l, u) {
  const r = {};
  for (const c in i)
    (c === "values" && typeof i.values == "object") ||
      ((yy(c) ||
        (u === !0 && tu(c)) ||
        (!l && !tu(c)) ||
        (i.draggable && c.startsWith("onDrag"))) &&
        (r[c] = i[c]));
  return r;
}
const lu = k.createContext({});
function su(i) {
  return i !== null && typeof i == "object" && typeof i.start == "function";
}
function vl(i) {
  return typeof i == "string" || Array.isArray(i);
}
const Gc = [
    "animate",
    "whileInView",
    "whileFocus",
    "whileHover",
    "whileTap",
    "whileDrag",
    "exit",
  ],
  Xc = ["initial", ...Gc];
function uu(i) {
  return su(i.animate) || Xc.some((l) => vl(i[l]));
}
function vy(i) {
  return !!(uu(i) || i.variants);
}
function ZS(i, l) {
  if (uu(i)) {
    const { initial: u, animate: r } = i;
    return {
      initial: u === !1 || vl(u) ? u : void 0,
      animate: vl(r) ? r : void 0,
    };
  }
  return i.inherit !== !1 ? l : {};
}
function QS(i) {
  const { initial: l, animate: u } = ZS(i, k.useContext(lu));
  return k.useMemo(() => ({ initial: l, animate: u }), [Op(l), Op(u)]);
}
function Op(i) {
  return Array.isArray(i) ? i.join(" ") : i;
}
function Rp(i, l) {
  return l.max === l.min ? 0 : (i / (l.max - l.min)) * 100;
}
const rl = {
    correct: (i, l) => {
      if (!l.target) return i;
      if (typeof i == "string")
        if (at.test(i)) i = parseFloat(i);
        else return i;
      const u = Rp(i, l.target.x),
        r = Rp(i, l.target.y);
      return `${u}% ${r}%`;
    },
  },
  KS = {
    correct: (i, { treeScale: l, projectionDelta: u }) => {
      const r = i,
        c = Kn.parse(i);
      if (c.length > 5) return r;
      const d = Kn.createTransformer(i),
        h = typeof c[0] != "number" ? 1 : 0,
        y = u.x.scale * l.x,
        g = u.y.scale * l.y;
      (c[0 + h] /= y), (c[1 + h] /= g);
      const m = Nt(y, g, 0.5);
      return (
        typeof c[2 + h] == "number" && (c[2 + h] /= m),
        typeof c[3 + h] == "number" && (c[3 + h] /= m),
        d(c)
      );
    },
  },
  rc = {
    borderRadius: {
      ...rl,
      applyTo: [
        "borderTopLeftRadius",
        "borderTopRightRadius",
        "borderBottomLeftRadius",
        "borderBottomRightRadius",
      ],
    },
    borderTopLeftRadius: rl,
    borderTopRightRadius: rl,
    borderBottomLeftRadius: rl,
    borderBottomRightRadius: rl,
    boxShadow: KS,
  };
function by(i, { layout: l, layoutId: u }) {
  return (
    di.has(i) ||
    i.startsWith("origin") ||
    ((l || u !== void 0) && (!!rc[i] || i === "opacity"))
  );
}
const JS = {
    x: "translateX",
    y: "translateY",
    z: "translateZ",
    transformPerspective: "perspective",
  },
  kS = hi.length;
function FS(i, l, u) {
  let r = "",
    c = !0;
  for (let d = 0; d < kS; d++) {
    const h = hi[d],
      y = i[h];
    if (y === void 0) continue;
    let g = !0;
    if (
      (typeof y == "number"
        ? (g = y === (h.startsWith("scale") ? 1 : 0))
        : (g = parseFloat(y) === 0),
      !g || u)
    ) {
      const m = ry(y, Hc[h]);
      if (!g) {
        c = !1;
        const v = JS[h] || h;
        r += `${v}(${m}) `;
      }
      u && (l[h] = m);
    }
  }
  return (r = r.trim()), u ? (r = u(l, c ? "" : r)) : c && (r = "none"), r;
}
function Zc(i, l, u) {
  const { style: r, vars: c, transformOrigin: d } = i;
  let h = !1,
    y = !1;
  for (const g in l) {
    const m = l[g];
    if (di.has(g)) {
      h = !0;
      continue;
    } else if (qg(g)) {
      c[g] = m;
      continue;
    } else {
      const v = ry(m, Hc[g]);
      g.startsWith("origin") ? ((y = !0), (d[g] = v)) : (r[g] = v);
    }
  }
  if (
    (l.transform ||
      (h || u
        ? (r.transform = FS(l, i.transform, u))
        : r.transform && (r.transform = "none")),
    y)
  ) {
    const { originX: g = "50%", originY: m = "50%", originZ: v = 0 } = d;
    r.transformOrigin = `${g} ${m} ${v}`;
  }
}
const Qc = () => ({ style: {}, transform: {}, transformOrigin: {}, vars: {} });
function Sy(i, l, u) {
  for (const r in l) !se(l[r]) && !by(r, u) && (i[r] = l[r]);
}
function WS({ transformTemplate: i }, l) {
  return k.useMemo(() => {
    const u = Qc();
    return Zc(u, l, i), Object.assign({}, u.vars, u.style);
  }, [l]);
}
function PS(i, l) {
  const u = i.style || {},
    r = {};
  return Sy(r, u, i), Object.assign(r, WS(i, l)), r;
}
function $S(i, l) {
  const u = {},
    r = PS(i, l);
  return (
    i.drag &&
      i.dragListener !== !1 &&
      ((u.draggable = !1),
      (r.userSelect = r.WebkitUserSelect = r.WebkitTouchCallout = "none"),
      (r.touchAction =
        i.drag === !0 ? "none" : `pan-${i.drag === "x" ? "y" : "x"}`)),
    i.tabIndex === void 0 &&
      (i.onTap || i.onTapStart || i.whileTap) &&
      (u.tabIndex = 0),
    (u.style = r),
    u
  );
}
const IS = { offset: "stroke-dashoffset", array: "stroke-dasharray" },
  t2 = { offset: "strokeDashoffset", array: "strokeDasharray" };
function e2(i, l, u = 1, r = 0, c = !0) {
  i.pathLength = 1;
  const d = c ? IS : t2;
  i[d.offset] = at.transform(-r);
  const h = at.transform(l),
    y = at.transform(u);
  i[d.array] = `${h} ${y}`;
}
function Ty(
  i,
  {
    attrX: l,
    attrY: u,
    attrScale: r,
    pathLength: c,
    pathSpacing: d = 1,
    pathOffset: h = 0,
    ...y
  },
  g,
  m,
  v
) {
  if ((Zc(i, y, m), g)) {
    i.style.viewBox && (i.attrs.viewBox = i.style.viewBox);
    return;
  }
  (i.attrs = i.style), (i.style = {});
  const { attrs: b, style: T } = i;
  b.transform && ((T.transform = b.transform), delete b.transform),
    (T.transform || b.transformOrigin) &&
      ((T.transformOrigin = b.transformOrigin ?? "50% 50%"),
      delete b.transformOrigin),
    T.transform &&
      ((T.transformBox = v?.transformBox ?? "fill-box"), delete b.transformBox),
    l !== void 0 && (b.x = l),
    u !== void 0 && (b.y = u),
    r !== void 0 && (b.scale = r),
    c !== void 0 && e2(b, c, d, h, !1);
}
const xy = () => ({ ...Qc(), attrs: {} }),
  Ay = (i) => typeof i == "string" && i.toLowerCase() === "svg";
function n2(i, l, u, r) {
  const c = k.useMemo(() => {
    const d = xy();
    return (
      Ty(d, l, Ay(r), i.transformTemplate, i.style),
      { ...d.attrs, style: { ...d.style } }
    );
  }, [l]);
  if (i.style) {
    const d = {};
    Sy(d, i.style, i), (c.style = { ...d, ...c.style });
  }
  return c;
}
const a2 = [
  "animate",
  "circle",
  "defs",
  "desc",
  "ellipse",
  "g",
  "image",
  "line",
  "filter",
  "marker",
  "mask",
  "metadata",
  "path",
  "pattern",
  "polygon",
  "polyline",
  "rect",
  "stop",
  "switch",
  "symbol",
  "svg",
  "text",
  "tspan",
  "use",
  "view",
];
function Kc(i) {
  return typeof i != "string" || i.includes("-")
    ? !1
    : !!(a2.indexOf(i) > -1 || /[A-Z]/u.test(i));
}
function i2(i, l, u, { latestValues: r }, c, d = !1) {
  const y = (Kc(i) ? n2 : $S)(l, r, c, i),
    g = XS(l, typeof i == "string", d),
    m = i !== k.Fragment ? { ...g, ...y, ref: u } : {},
    { children: v } = l,
    b = k.useMemo(() => (se(v) ? v.get() : v), [v]);
  return k.createElement(i, { ...m, children: b });
}
function Np(i) {
  const l = [{}, {}];
  return (
    i?.values.forEach((u, r) => {
      (l[0][r] = u.get()), (l[1][r] = u.getVelocity());
    }),
    l
  );
}
function Jc(i, l, u, r) {
  if (typeof l == "function") {
    const [c, d] = Np(r);
    l = l(u !== void 0 ? u : i.custom, c, d);
  }
  if (
    (typeof l == "string" && (l = i.variants && i.variants[l]),
    typeof l == "function")
  ) {
    const [c, d] = Np(r);
    l = l(u !== void 0 ? u : i.custom, c, d);
  }
  return l;
}
function Fs(i) {
  return se(i) ? i.get() : i;
}
function l2({ scrapeMotionValuesFromProps: i, createRenderState: l }, u, r, c) {
  return { latestValues: s2(u, r, c, i), renderState: l() };
}
function s2(i, l, u, r) {
  const c = {},
    d = r(i, {});
  for (const T in d) c[T] = Fs(d[T]);
  let { initial: h, animate: y } = i;
  const g = uu(i),
    m = vy(i);
  l &&
    m &&
    !g &&
    i.inherit !== !1 &&
    (h === void 0 && (h = l.initial), y === void 0 && (y = l.animate));
  let v = u ? u.initial === !1 : !1;
  v = v || h === !1;
  const b = v ? y : h;
  if (b && typeof b != "boolean" && !su(b)) {
    const T = Array.isArray(b) ? b : [b];
    for (let R = 0; R < T.length; R++) {
      const U = Jc(i, T[R]);
      if (U) {
        const { transitionEnd: H, transition: Z, ...L } = U;
        for (const G in L) {
          let q = L[G];
          if (Array.isArray(q)) {
            const tt = v ? q.length - 1 : 0;
            q = q[tt];
          }
          q !== null && (c[G] = q);
        }
        for (const G in H) c[G] = H[G];
      }
    }
  }
  return c;
}
const Ey = (i) => (l, u) => {
  const r = k.useContext(lu),
    c = k.useContext(iu),
    d = () => l2(i, l, r, c);
  return u ? d() : bc(d);
};
function kc(i, l, u) {
  const { style: r } = i,
    c = {};
  for (const d in r)
    (se(r[d]) ||
      (l.style && se(l.style[d])) ||
      by(d, i) ||
      u?.getValue(d)?.liveStyle !== void 0) &&
      (c[d] = r[d]);
  return c;
}
const u2 = Ey({ scrapeMotionValuesFromProps: kc, createRenderState: Qc });
function My(i, l, u) {
  const r = kc(i, l, u);
  for (const c in i)
    if (se(i[c]) || se(l[c])) {
      const d =
        hi.indexOf(c) !== -1
          ? "attr" + c.charAt(0).toUpperCase() + c.substring(1)
          : c;
      r[d] = i[c];
    }
  return r;
}
const o2 = Ey({ scrapeMotionValuesFromProps: My, createRenderState: xy }),
  r2 = Symbol.for("motionComponentSymbol");
function ii(i) {
  return (
    i &&
    typeof i == "object" &&
    Object.prototype.hasOwnProperty.call(i, "current")
  );
}
function c2(i, l, u) {
  return k.useCallback(
    (r) => {
      r && i.onMount && i.onMount(r),
        l && (r ? l.mount(r) : l.unmount()),
        u && (typeof u == "function" ? u(r) : ii(u) && (u.current = r));
    },
    [l]
  );
}
const Fc = (i) => i.replace(/([a-z])([A-Z])/gu, "$1-$2").toLowerCase(),
  f2 = "framerAppearId",
  Dy = "data-" + Fc(f2),
  wy = k.createContext({});
function h2(i, l, u, r, c) {
  const { visualElement: d } = k.useContext(lu),
    h = k.useContext(gy),
    y = k.useContext(iu),
    g = k.useContext(Yc).reducedMotion,
    m = k.useRef(null);
  (r = r || h.renderer),
    !m.current &&
      r &&
      (m.current = r(i, {
        visualState: l,
        parent: d,
        props: u,
        presenceContext: y,
        blockInitialAnimation: y ? y.initial === !1 : !1,
        reducedMotionConfig: g,
      }));
  const v = m.current,
    b = k.useContext(wy);
  v &&
    !v.projection &&
    c &&
    (v.type === "html" || v.type === "svg") &&
    d2(m.current, u, c, b);
  const T = k.useRef(!1);
  k.useInsertionEffect(() => {
    v && T.current && v.update(u, y);
  });
  const R = u[Dy],
    U = k.useRef(
      !!R &&
        !window.MotionHandoffIsComplete?.(R) &&
        window.MotionHasOptimisedAnimation?.(R)
    );
  return (
    Ag(() => {
      v &&
        ((T.current = !0),
        (window.MotionIsMounted = !0),
        v.updateFeatures(),
        v.scheduleRenderMicrotask(),
        U.current && v.animationState && v.animationState.animateChanges());
    }),
    k.useEffect(() => {
      v &&
        (!U.current && v.animationState && v.animationState.animateChanges(),
        U.current &&
          (queueMicrotask(() => {
            window.MotionHandoffMarkAsComplete?.(R);
          }),
          (U.current = !1)),
        (v.enteringChildren = void 0));
    }),
    v
  );
}
function d2(i, l, u, r) {
  const {
    layoutId: c,
    layout: d,
    drag: h,
    dragConstraints: y,
    layoutScroll: g,
    layoutRoot: m,
    layoutCrossfade: v,
  } = l;
  (i.projection = new u(
    i.latestValues,
    l["data-framer-portal-id"] ? void 0 : Cy(i.parent)
  )),
    i.projection.setOptions({
      layoutId: c,
      layout: d,
      alwaysMeasureLayout: !!h || (y && ii(y)),
      visualElement: i,
      animationType: typeof d == "string" ? d : "both",
      initialPromotionConfig: r,
      crossfade: v,
      layoutScroll: g,
      layoutRoot: m,
    });
}
function Cy(i) {
  if (i) return i.options.allowProjection !== !1 ? i.projection : Cy(i.parent);
}
function Lr(i, { forwardMotionProps: l = !1 } = {}, u, r) {
  u && qS(u);
  const c = Kc(i) ? o2 : u2;
  function d(y, g) {
    let m;
    const v = { ...k.useContext(Yc), ...y, layoutId: m2(y) },
      { isStatic: b } = v,
      T = QS(y),
      R = c(y, b);
    if (!b && Sc) {
      p2();
      const U = g2(v);
      (m = U.MeasureLayout),
        (T.visualElement = h2(i, R, v, r, U.ProjectionNode));
    }
    return E.jsxs(lu.Provider, {
      value: T,
      children: [
        m && T.visualElement
          ? E.jsx(m, { visualElement: T.visualElement, ...v })
          : null,
        i2(i, y, c2(R, T.visualElement, g), R, b, l),
      ],
    });
  }
  d.displayName = `motion.${
    typeof i == "string" ? i : `create(${i.displayName ?? i.name ?? ""})`
  }`;
  const h = k.forwardRef(d);
  return (h[r2] = i), h;
}
function m2({ layoutId: i }) {
  const l = k.useContext(vc).id;
  return l && i !== void 0 ? l + "-" + i : i;
}
function p2(i, l) {
  k.useContext(gy).strict;
}
function g2(i) {
  const { drag: l, layout: u } = ci;
  if (!l && !u) return {};
  const r = { ...l, ...u };
  return {
    MeasureLayout:
      l?.isEnabled(i) || u?.isEnabled(i) ? r.MeasureLayout : void 0,
    ProjectionNode: r.ProjectionNode,
  };
}
function y2(i, l) {
  if (typeof Proxy > "u") return Lr;
  const u = new Map(),
    r = (d, h) => Lr(d, h, i, l),
    c = (d, h) => r(d, h);
  return new Proxy(c, {
    get: (d, h) =>
      h === "create"
        ? r
        : (u.has(h) || u.set(h, Lr(h, void 0, i, l)), u.get(h)),
  });
}
function zy({ top: i, left: l, right: u, bottom: r }) {
  return { x: { min: l, max: u }, y: { min: i, max: r } };
}
function v2({ x: i, y: l }) {
  return { top: l.min, right: i.max, bottom: l.max, left: i.min };
}
function b2(i, l) {
  if (!l) return i;
  const u = l({ x: i.left, y: i.top }),
    r = l({ x: i.right, y: i.bottom });
  return { top: u.y, left: u.x, bottom: r.y, right: r.x };
}
function qr(i) {
  return i === void 0 || i === 1;
}
function cc({ scale: i, scaleX: l, scaleY: u }) {
  return !qr(i) || !qr(l) || !qr(u);
}
function ma(i) {
  return (
    cc(i) ||
    jy(i) ||
    i.z ||
    i.rotate ||
    i.rotateX ||
    i.rotateY ||
    i.skewX ||
    i.skewY
  );
}
function jy(i) {
  return Vp(i.x) || Vp(i.y);
}
function Vp(i) {
  return i && i !== "0%";
}
function eu(i, l, u) {
  const r = i - u,
    c = l * r;
  return u + c;
}
function _p(i, l, u, r, c) {
  return c !== void 0 && (i = eu(i, c, r)), eu(i, u, r) + l;
}
function fc(i, l = 0, u = 1, r, c) {
  (i.min = _p(i.min, l, u, r, c)), (i.max = _p(i.max, l, u, r, c));
}
function Oy(i, { x: l, y: u }) {
  fc(i.x, l.translate, l.scale, l.originPoint),
    fc(i.y, u.translate, u.scale, u.originPoint);
}
const Bp = 0.999999999999,
  Up = 1.0000000000001;
function S2(i, l, u, r = !1) {
  const c = u.length;
  if (!c) return;
  l.x = l.y = 1;
  let d, h;
  for (let y = 0; y < c; y++) {
    (d = u[y]), (h = d.projectionDelta);
    const { visualElement: g } = d.options;
    (g && g.props.style && g.props.style.display === "contents") ||
      (r &&
        d.options.layoutScroll &&
        d.scroll &&
        d !== d.root &&
        si(i, { x: -d.scroll.offset.x, y: -d.scroll.offset.y }),
      h && ((l.x *= h.x.scale), (l.y *= h.y.scale), Oy(i, h)),
      r && ma(d.latestValues) && si(i, d.latestValues));
  }
  l.x < Up && l.x > Bp && (l.x = 1), l.y < Up && l.y > Bp && (l.y = 1);
}
function li(i, l) {
  (i.min = i.min + l), (i.max = i.max + l);
}
function Hp(i, l, u, r, c = 0.5) {
  const d = Nt(i.min, i.max, c);
  fc(i, l, u, d, r);
}
function si(i, l) {
  Hp(i.x, l.x, l.scaleX, l.scale, l.originX),
    Hp(i.y, l.y, l.scaleY, l.scale, l.originY);
}
function Ry(i, l) {
  return zy(b2(i.getBoundingClientRect(), l));
}
function T2(i, l, u) {
  const r = Ry(i, u),
    { scroll: c } = l;
  return c && (li(r.x, c.offset.x), li(r.y, c.offset.y)), r;
}
const Lp = () => ({ translate: 0, scale: 1, origin: 0, originPoint: 0 }),
  ui = () => ({ x: Lp(), y: Lp() }),
  qp = () => ({ min: 0, max: 0 }),
  kt = () => ({ x: qp(), y: qp() }),
  hc = { current: null },
  Ny = { current: !1 };
function x2() {
  if (((Ny.current = !0), !!Sc))
    if (window.matchMedia) {
      const i = window.matchMedia("(prefers-reduced-motion)"),
        l = () => (hc.current = i.matches);
      i.addEventListener("change", l), l();
    } else hc.current = !1;
}
const A2 = new WeakMap();
function E2(i, l, u) {
  for (const r in l) {
    const c = l[r],
      d = u[r];
    if (se(c)) i.addValue(r, c);
    else if (se(d)) i.addValue(r, ri(c, { owner: i }));
    else if (d !== c)
      if (i.hasValue(r)) {
        const h = i.getValue(r);
        h.liveStyle === !0 ? h.jump(c) : h.hasAnimated || h.set(c);
      } else {
        const h = i.getStaticValue(r);
        i.addValue(r, ri(h !== void 0 ? h : c, { owner: i }));
      }
  }
  for (const r in u) l[r] === void 0 && i.removeValue(r);
  return l;
}
const Yp = [
  "AnimationStart",
  "AnimationComplete",
  "Update",
  "BeforeLayoutMeasure",
  "LayoutMeasure",
  "LayoutAnimationStart",
  "LayoutAnimationComplete",
];
class M2 {
  scrapeMotionValuesFromProps(l, u, r) {
    return {};
  }
  constructor(
    {
      parent: l,
      props: u,
      presenceContext: r,
      reducedMotionConfig: c,
      blockInitialAnimation: d,
      visualState: h,
    },
    y = {}
  ) {
    (this.current = null),
      (this.children = new Set()),
      (this.isVariantNode = !1),
      (this.isControllingVariants = !1),
      (this.shouldReduceMotion = null),
      (this.values = new Map()),
      (this.KeyframeResolver = Bc),
      (this.features = {}),
      (this.valueSubscriptions = new Map()),
      (this.prevMotionValues = {}),
      (this.events = {}),
      (this.propEventSubscriptions = {}),
      (this.notifyUpdate = () => this.notify("Update", this.latestValues)),
      (this.render = () => {
        this.current &&
          (this.triggerBuild(),
          this.renderInstance(
            this.current,
            this.renderState,
            this.props.style,
            this.projection
          ));
      }),
      (this.renderScheduledAt = 0),
      (this.scheduleRender = () => {
        const T = ge.now();
        this.renderScheduledAt < T &&
          ((this.renderScheduledAt = T), Ot.render(this.render, !1, !0));
      });
    const { latestValues: g, renderState: m } = h;
    (this.latestValues = g),
      (this.baseTarget = { ...g }),
      (this.initialValues = u.initial ? { ...g } : {}),
      (this.renderState = m),
      (this.parent = l),
      (this.props = u),
      (this.presenceContext = r),
      (this.depth = l ? l.depth + 1 : 0),
      (this.reducedMotionConfig = c),
      (this.options = y),
      (this.blockInitialAnimation = !!d),
      (this.isControllingVariants = uu(u)),
      (this.isVariantNode = vy(u)),
      this.isVariantNode && (this.variantChildren = new Set()),
      (this.manuallyAnimateOnMount = !!(l && l.current));
    const { willChange: v, ...b } = this.scrapeMotionValuesFromProps(
      u,
      {},
      this
    );
    for (const T in b) {
      const R = b[T];
      g[T] !== void 0 && se(R) && R.set(g[T]);
    }
  }
  mount(l) {
    (this.current = l),
      A2.set(l, this),
      this.projection && !this.projection.instance && this.projection.mount(l),
      this.parent &&
        this.isVariantNode &&
        !this.isControllingVariants &&
        (this.removeFromVariantTree = this.parent.addVariantChild(this)),
      this.values.forEach((u, r) => this.bindToMotionValue(r, u)),
      Ny.current || x2(),
      (this.shouldReduceMotion =
        this.reducedMotionConfig === "never"
          ? !1
          : this.reducedMotionConfig === "always"
          ? !0
          : hc.current),
      this.parent?.addChild(this),
      this.update(this.props, this.presenceContext);
  }
  unmount() {
    this.projection && this.projection.unmount(),
      Qn(this.notifyUpdate),
      Qn(this.render),
      this.valueSubscriptions.forEach((l) => l()),
      this.valueSubscriptions.clear(),
      this.removeFromVariantTree && this.removeFromVariantTree(),
      this.parent?.removeChild(this);
    for (const l in this.events) this.events[l].clear();
    for (const l in this.features) {
      const u = this.features[l];
      u && (u.unmount(), (u.isMounted = !1));
    }
    this.current = null;
  }
  addChild(l) {
    this.children.add(l),
      this.enteringChildren ?? (this.enteringChildren = new Set()),
      this.enteringChildren.add(l);
  }
  removeChild(l) {
    this.children.delete(l),
      this.enteringChildren && this.enteringChildren.delete(l);
  }
  bindToMotionValue(l, u) {
    this.valueSubscriptions.has(l) && this.valueSubscriptions.get(l)();
    const r = di.has(l);
    r && this.onBindTransform && this.onBindTransform();
    const c = u.on("change", (h) => {
      (this.latestValues[l] = h),
        this.props.onUpdate && Ot.preRender(this.notifyUpdate),
        r && this.projection && (this.projection.isTransformDirty = !0),
        this.scheduleRender();
    });
    let d;
    window.MotionCheckAppearSync &&
      (d = window.MotionCheckAppearSync(this, l, u)),
      this.valueSubscriptions.set(l, () => {
        c(), d && d(), u.owner && u.stop();
      });
  }
  sortNodePosition(l) {
    return !this.current ||
      !this.sortInstanceNodePosition ||
      this.type !== l.type
      ? 0
      : this.sortInstanceNodePosition(this.current, l.current);
  }
  updateFeatures() {
    let l = "animation";
    for (l in ci) {
      const u = ci[l];
      if (!u) continue;
      const { isEnabled: r, Feature: c } = u;
      if (
        (!this.features[l] &&
          c &&
          r(this.props) &&
          (this.features[l] = new c(this)),
        this.features[l])
      ) {
        const d = this.features[l];
        d.isMounted ? d.update() : (d.mount(), (d.isMounted = !0));
      }
    }
  }
  triggerBuild() {
    this.build(this.renderState, this.latestValues, this.props);
  }
  measureViewportBox() {
    return this.current
      ? this.measureInstanceViewportBox(this.current, this.props)
      : kt();
  }
  getStaticValue(l) {
    return this.latestValues[l];
  }
  setStaticValue(l, u) {
    this.latestValues[l] = u;
  }
  update(l, u) {
    (l.transformTemplate || this.props.transformTemplate) &&
      this.scheduleRender(),
      (this.prevProps = this.props),
      (this.props = l),
      (this.prevPresenceContext = this.presenceContext),
      (this.presenceContext = u);
    for (let r = 0; r < Yp.length; r++) {
      const c = Yp[r];
      this.propEventSubscriptions[c] &&
        (this.propEventSubscriptions[c](),
        delete this.propEventSubscriptions[c]);
      const d = "on" + c,
        h = l[d];
      h && (this.propEventSubscriptions[c] = this.on(c, h));
    }
    (this.prevMotionValues = E2(
      this,
      this.scrapeMotionValuesFromProps(l, this.prevProps, this),
      this.prevMotionValues
    )),
      this.handleChildMotionValue && this.handleChildMotionValue();
  }
  getProps() {
    return this.props;
  }
  getVariant(l) {
    return this.props.variants ? this.props.variants[l] : void 0;
  }
  getDefaultTransition() {
    return this.props.transition;
  }
  getTransformPagePoint() {
    return this.props.transformPagePoint;
  }
  getClosestVariantNode() {
    return this.isVariantNode
      ? this
      : this.parent
      ? this.parent.getClosestVariantNode()
      : void 0;
  }
  addVariantChild(l) {
    const u = this.getClosestVariantNode();
    if (u)
      return (
        u.variantChildren && u.variantChildren.add(l),
        () => u.variantChildren.delete(l)
      );
  }
  addValue(l, u) {
    const r = this.values.get(l);
    u !== r &&
      (r && this.removeValue(l),
      this.bindToMotionValue(l, u),
      this.values.set(l, u),
      (this.latestValues[l] = u.get()));
  }
  removeValue(l) {
    this.values.delete(l);
    const u = this.valueSubscriptions.get(l);
    u && (u(), this.valueSubscriptions.delete(l)),
      delete this.latestValues[l],
      this.removeValueFromRenderState(l, this.renderState);
  }
  hasValue(l) {
    return this.values.has(l);
  }
  getValue(l, u) {
    if (this.props.values && this.props.values[l]) return this.props.values[l];
    let r = this.values.get(l);
    return (
      r === void 0 &&
        u !== void 0 &&
        ((r = ri(u === null ? void 0 : u, { owner: this })),
        this.addValue(l, r)),
      r
    );
  }
  readValue(l, u) {
    let r =
      this.latestValues[l] !== void 0 || !this.current
        ? this.latestValues[l]
        : this.getBaseTargetFromProps(this.props, l) ??
          this.readValueFromInstance(this.current, l, this.options);
    return (
      r != null &&
        (typeof r == "string" && (Eg(r) || Dg(r))
          ? (r = parseFloat(r))
          : !RS(r) && Kn.test(u) && (r = oy(l, u)),
        this.setBaseTarget(l, se(r) ? r.get() : r)),
      se(r) ? r.get() : r
    );
  }
  setBaseTarget(l, u) {
    this.baseTarget[l] = u;
  }
  getBaseTarget(l) {
    const { initial: u } = this.props;
    let r;
    if (typeof u == "string" || typeof u == "object") {
      const d = Jc(this.props, u, this.presenceContext?.custom);
      d && (r = d[l]);
    }
    if (u && r !== void 0) return r;
    const c = this.getBaseTargetFromProps(this.props, l);
    return c !== void 0 && !se(c)
      ? c
      : this.initialValues[l] !== void 0 && r === void 0
      ? void 0
      : this.baseTarget[l];
  }
  on(l, u) {
    return this.events[l] || (this.events[l] = new Mc()), this.events[l].add(u);
  }
  notify(l, ...u) {
    this.events[l] && this.events[l].notify(...u);
  }
  scheduleRenderMicrotask() {
    Lc.render(this.render);
  }
}
class Vy extends M2 {
  constructor() {
    super(...arguments), (this.KeyframeResolver = SS);
  }
  sortInstanceNodePosition(l, u) {
    return l.compareDocumentPosition(u) & 2 ? 1 : -1;
  }
  getBaseTargetFromProps(l, u) {
    return l.style ? l.style[u] : void 0;
  }
  removeValueFromRenderState(l, { vars: u, style: r }) {
    delete u[l], delete r[l];
  }
  handleChildMotionValue() {
    this.childSubscription &&
      (this.childSubscription(), delete this.childSubscription);
    const { children: l } = this.props;
    se(l) &&
      (this.childSubscription = l.on("change", (u) => {
        this.current && (this.current.textContent = `${u}`);
      }));
  }
}
function _y(i, { style: l, vars: u }, r, c) {
  const d = i.style;
  let h;
  for (h in l) d[h] = l[h];
  c?.applyProjectionStyles(d, r);
  for (h in u) d.setProperty(h, u[h]);
}
function D2(i) {
  return window.getComputedStyle(i);
}
class w2 extends Vy {
  constructor() {
    super(...arguments), (this.type = "html"), (this.renderInstance = _y);
  }
  readValueFromInstance(l, u) {
    if (di.has(u)) return this.projection?.isProjecting ? nc(u) : Lb(l, u);
    {
      const r = D2(l),
        c = (qg(u) ? r.getPropertyValue(u) : r[u]) || 0;
      return typeof c == "string" ? c.trim() : c;
    }
  }
  measureInstanceViewportBox(l, { transformPagePoint: u }) {
    return Ry(l, u);
  }
  build(l, u, r) {
    Zc(l, u, r.transformTemplate);
  }
  scrapeMotionValuesFromProps(l, u, r) {
    return kc(l, u, r);
  }
}
const By = new Set([
  "baseFrequency",
  "diffuseConstant",
  "kernelMatrix",
  "kernelUnitLength",
  "keySplines",
  "keyTimes",
  "limitingConeAngle",
  "markerHeight",
  "markerWidth",
  "numOctaves",
  "targetX",
  "targetY",
  "surfaceScale",
  "specularConstant",
  "specularExponent",
  "stdDeviation",
  "tableValues",
  "viewBox",
  "gradientTransform",
  "pathLength",
  "startOffset",
  "textLength",
  "lengthAdjust",
]);
function C2(i, l, u, r) {
  _y(i, l, void 0, r);
  for (const c in l.attrs) i.setAttribute(By.has(c) ? c : Fc(c), l.attrs[c]);
}
class z2 extends Vy {
  constructor() {
    super(...arguments),
      (this.type = "svg"),
      (this.isSVGTag = !1),
      (this.measureInstanceViewportBox = kt);
  }
  getBaseTargetFromProps(l, u) {
    return l[u];
  }
  readValueFromInstance(l, u) {
    if (di.has(u)) {
      const r = uy(u);
      return (r && r.default) || 0;
    }
    return (u = By.has(u) ? u : Fc(u)), l.getAttribute(u);
  }
  scrapeMotionValuesFromProps(l, u, r) {
    return My(l, u, r);
  }
  build(l, u, r) {
    Ty(l, u, this.isSVGTag, r.transformTemplate, r.style);
  }
  renderInstance(l, u, r, c) {
    C2(l, u, r, c);
  }
  mount(l) {
    (this.isSVGTag = Ay(l.tagName)), super.mount(l);
  }
}
const j2 = (i, l) =>
  Kc(i) ? new z2(l) : new w2(l, { allowProjection: i !== k.Fragment });
function oi(i, l, u) {
  const r = i.getProps();
  return Jc(r, l, u !== void 0 ? u : r.custom, i);
}
const dc = (i) => Array.isArray(i);
function O2(i, l, u) {
  i.hasValue(l) ? i.getValue(l).set(u) : i.addValue(l, ri(u));
}
function R2(i) {
  return dc(i) ? i[i.length - 1] || 0 : i;
}
function N2(i, l) {
  const u = oi(i, l);
  let { transitionEnd: r = {}, transition: c = {}, ...d } = u || {};
  d = { ...d, ...r };
  for (const h in d) {
    const y = R2(d[h]);
    O2(i, h, y);
  }
}
function V2(i) {
  return !!(se(i) && i.add);
}
function mc(i, l) {
  const u = i.getValue("willChange");
  if (V2(u)) return u.add(l);
  if (!u && vn.WillChange) {
    const r = new vn.WillChange("auto");
    i.addValue("willChange", r), r.add(l);
  }
}
function Uy(i) {
  return i.props[Dy];
}
const _2 = (i) => i !== null;
function B2(i, { repeat: l, repeatType: u = "loop" }, r) {
  const c = i.filter(_2),
    d = l && u !== "loop" && l % 2 === 1 ? 0 : c.length - 1;
  return c[d];
}
const U2 = { type: "spring", stiffness: 500, damping: 25, restSpeed: 10 },
  H2 = (i) => ({
    type: "spring",
    stiffness: 550,
    damping: i === 0 ? 2 * Math.sqrt(550) : 30,
    restSpeed: 10,
  }),
  L2 = { type: "keyframes", duration: 0.8 },
  q2 = { type: "keyframes", ease: [0.25, 0.1, 0.35, 1], duration: 0.3 },
  Y2 = (i, { keyframes: l }) =>
    l.length > 2
      ? L2
      : di.has(i)
      ? i.startsWith("scale")
        ? H2(l[1])
        : U2
      : q2;
function G2({
  when: i,
  delay: l,
  delayChildren: u,
  staggerChildren: r,
  staggerDirection: c,
  repeat: d,
  repeatType: h,
  repeatDelay: y,
  from: g,
  elapsed: m,
  ...v
}) {
  return !!Object.keys(v).length;
}
const Wc =
  (i, l, u, r = {}, c, d) =>
  (h) => {
    const y = Uc(r, i) || {},
      g = y.delay || r.delay || 0;
    let { elapsed: m = 0 } = r;
    m = m - We(g);
    const v = {
      keyframes: Array.isArray(u) ? u : [null, u],
      ease: "easeOut",
      velocity: l.getVelocity(),
      ...y,
      delay: -m,
      onUpdate: (T) => {
        l.set(T), y.onUpdate && y.onUpdate(T);
      },
      onComplete: () => {
        h(), y.onComplete && y.onComplete();
      },
      name: i,
      motionValue: l,
      element: d ? void 0 : c,
    };
    G2(y) || Object.assign(v, Y2(i, v)),
      v.duration && (v.duration = We(v.duration)),
      v.repeatDelay && (v.repeatDelay = We(v.repeatDelay)),
      v.from !== void 0 && (v.keyframes[0] = v.from);
    let b = !1;
    if (
      ((v.type === !1 || (v.duration === 0 && !v.repeatDelay)) &&
        (uc(v), v.delay === 0 && (b = !0)),
      (vn.instantAnimations || vn.skipAnimations) &&
        ((b = !0), uc(v), (v.delay = 0)),
      (v.allowFlatten = !y.type && !y.ease),
      b && !d && l.get() !== void 0)
    ) {
      const T = B2(v.keyframes, y);
      if (T !== void 0) {
        Ot.update(() => {
          v.onUpdate(T), v.onComplete();
        });
        return;
      }
    }
    return y.isSync ? new _c(v) : new oS(v);
  };
function X2({ protectedKeys: i, needsAnimating: l }, u) {
  const r = i.hasOwnProperty(u) && l[u] !== !0;
  return (l[u] = !1), r;
}
function Hy(i, l, { delay: u = 0, transitionOverride: r, type: c } = {}) {
  let { transition: d = i.getDefaultTransition(), transitionEnd: h, ...y } = l;
  r && (d = r);
  const g = [],
    m = c && i.animationState && i.animationState.getState()[c];
  for (const v in y) {
    const b = i.getValue(v, i.latestValues[v] ?? null),
      T = y[v];
    if (T === void 0 || (m && X2(m, v))) continue;
    const R = { delay: u, ...Uc(d || {}, v) },
      U = b.get();
    if (
      U !== void 0 &&
      !b.isAnimating &&
      !Array.isArray(T) &&
      T === U &&
      !R.velocity
    )
      continue;
    let H = !1;
    if (window.MotionHandoffAnimation) {
      const L = Uy(i);
      if (L) {
        const G = window.MotionHandoffAnimation(L, v, Ot);
        G !== null && ((R.startTime = G), (H = !0));
      }
    }
    mc(i, v),
      b.start(
        Wc(v, b, T, i.shouldReduceMotion && iy.has(v) ? { type: !1 } : R, i, H)
      );
    const Z = b.animation;
    Z && g.push(Z);
  }
  return (
    h &&
      Promise.all(g).then(() => {
        Ot.update(() => {
          h && N2(i, h);
        });
      }),
    g
  );
}
function Ly(i, l, u, r = 0, c = 1) {
  const d = Array.from(i)
      .sort((m, v) => m.sortNodePosition(v))
      .indexOf(l),
    h = i.size,
    y = (h - 1) * r;
  return typeof u == "function" ? u(d, h) : c === 1 ? d * r : y - d * r;
}
function pc(i, l, u = {}) {
  const r = oi(i, l, u.type === "exit" ? i.presenceContext?.custom : void 0);
  let { transition: c = i.getDefaultTransition() || {} } = r || {};
  u.transitionOverride && (c = u.transitionOverride);
  const d = r ? () => Promise.all(Hy(i, r, u)) : () => Promise.resolve(),
    h =
      i.variantChildren && i.variantChildren.size
        ? (g = 0) => {
            const {
              delayChildren: m = 0,
              staggerChildren: v,
              staggerDirection: b,
            } = c;
            return Z2(i, l, g, m, v, b, u);
          }
        : () => Promise.resolve(),
    { when: y } = c;
  if (y) {
    const [g, m] = y === "beforeChildren" ? [d, h] : [h, d];
    return g().then(() => m());
  } else return Promise.all([d(), h(u.delay)]);
}
function Z2(i, l, u = 0, r = 0, c = 0, d = 1, h) {
  const y = [];
  for (const g of i.variantChildren)
    g.notify("AnimationStart", l),
      y.push(
        pc(g, l, {
          ...h,
          delay:
            u +
            (typeof r == "function" ? 0 : r) +
            Ly(i.variantChildren, g, r, c, d),
        }).then(() => g.notify("AnimationComplete", l))
      );
  return Promise.all(y);
}
function Q2(i, l, u = {}) {
  i.notify("AnimationStart", l);
  let r;
  if (Array.isArray(l)) {
    const c = l.map((d) => pc(i, d, u));
    r = Promise.all(c);
  } else if (typeof l == "string") r = pc(i, l, u);
  else {
    const c = typeof l == "function" ? oi(i, l, u.custom) : l;
    r = Promise.all(Hy(i, c, u));
  }
  return r.then(() => {
    i.notify("AnimationComplete", l);
  });
}
function qy(i, l) {
  if (!Array.isArray(l)) return !1;
  const u = l.length;
  if (u !== i.length) return !1;
  for (let r = 0; r < u; r++) if (l[r] !== i[r]) return !1;
  return !0;
}
const K2 = Xc.length;
function Yy(i) {
  if (!i) return;
  if (!i.isControllingVariants) {
    const u = i.parent ? Yy(i.parent) || {} : {};
    return i.props.initial !== void 0 && (u.initial = i.props.initial), u;
  }
  const l = {};
  for (let u = 0; u < K2; u++) {
    const r = Xc[u],
      c = i.props[r];
    (vl(c) || c === !1) && (l[r] = c);
  }
  return l;
}
const J2 = [...Gc].reverse(),
  k2 = Gc.length;
function F2(i) {
  return (l) =>
    Promise.all(l.map(({ animation: u, options: r }) => Q2(i, u, r)));
}
function W2(i) {
  let l = F2(i),
    u = Gp(),
    r = !0;
  const c = (g) => (m, v) => {
    const b = oi(i, v, g === "exit" ? i.presenceContext?.custom : void 0);
    if (b) {
      const { transition: T, transitionEnd: R, ...U } = b;
      m = { ...m, ...U, ...R };
    }
    return m;
  };
  function d(g) {
    l = g(i);
  }
  function h(g) {
    const { props: m } = i,
      v = Yy(i.parent) || {},
      b = [],
      T = new Set();
    let R = {},
      U = 1 / 0;
    for (let Z = 0; Z < k2; Z++) {
      const L = J2[Z],
        G = u[L],
        q = m[L] !== void 0 ? m[L] : v[L],
        tt = vl(q),
        F = L === g ? G.isActive : null;
      F === !1 && (U = Z);
      let $ = q === v[L] && q !== m[L] && tt;
      if (
        ($ && r && i.manuallyAnimateOnMount && ($ = !1),
        (G.protectedKeys = { ...R }),
        (!G.isActive && F === null) ||
          (!q && !G.prevProp) ||
          su(q) ||
          typeof q == "boolean")
      )
        continue;
      const X = P2(G.prevProp, q);
      let W = X || (L === g && G.isActive && !$ && tt) || (Z > U && tt),
        vt = !1;
      const Dt = Array.isArray(q) ? q : [q];
      let Lt = Dt.reduce(c(L), {});
      F === !1 && (Lt = {});
      const { prevResolvedValues: Vt = {} } = G,
        we = { ...Vt, ...Lt },
        ae = (B) => {
          (W = !0),
            T.has(B) && ((vt = !0), T.delete(B)),
            (G.needsAnimating[B] = !0);
          const Q = i.getValue(B);
          Q && (Q.liveStyle = !1);
        };
      for (const B in we) {
        const Q = Lt[B],
          st = Vt[B];
        if (R.hasOwnProperty(B)) continue;
        let rt = !1;
        dc(Q) && dc(st) ? (rt = !qy(Q, st)) : (rt = Q !== st),
          rt
            ? Q != null
              ? ae(B)
              : T.add(B)
            : Q !== void 0 && T.has(B)
            ? ae(B)
            : (G.protectedKeys[B] = !0);
      }
      (G.prevProp = q),
        (G.prevResolvedValues = Lt),
        G.isActive && (R = { ...R, ...Lt }),
        r && i.blockInitialAnimation && (W = !1);
      const ie = $ && X;
      W &&
        (!ie || vt) &&
        b.push(
          ...Dt.map((B) => {
            const Q = { type: L };
            if (
              typeof B == "string" &&
              r &&
              !ie &&
              i.manuallyAnimateOnMount &&
              i.parent
            ) {
              const { parent: st } = i,
                rt = oi(st, B);
              if (st.enteringChildren && rt) {
                const { delayChildren: A } = rt.transition || {};
                Q.delay = Ly(st.enteringChildren, i, A);
              }
            }
            return { animation: B, options: Q };
          })
        );
    }
    if (T.size) {
      const Z = {};
      if (typeof m.initial != "boolean") {
        const L = oi(i, Array.isArray(m.initial) ? m.initial[0] : m.initial);
        L && L.transition && (Z.transition = L.transition);
      }
      T.forEach((L) => {
        const G = i.getBaseTarget(L),
          q = i.getValue(L);
        q && (q.liveStyle = !0), (Z[L] = G ?? null);
      }),
        b.push({ animation: Z });
    }
    let H = !!b.length;
    return (
      r &&
        (m.initial === !1 || m.initial === m.animate) &&
        !i.manuallyAnimateOnMount &&
        (H = !1),
      (r = !1),
      H ? l(b) : Promise.resolve()
    );
  }
  function y(g, m) {
    if (u[g].isActive === m) return Promise.resolve();
    i.variantChildren?.forEach((b) => b.animationState?.setActive(g, m)),
      (u[g].isActive = m);
    const v = h(g);
    for (const b in u) u[b].protectedKeys = {};
    return v;
  }
  return {
    animateChanges: h,
    setActive: y,
    setAnimateFunction: d,
    getState: () => u,
    reset: () => {
      u = Gp();
    },
  };
}
function P2(i, l) {
  return typeof l == "string" ? l !== i : Array.isArray(l) ? !qy(l, i) : !1;
}
function da(i = !1) {
  return {
    isActive: i,
    protectedKeys: {},
    needsAnimating: {},
    prevResolvedValues: {},
  };
}
function Gp() {
  return {
    animate: da(!0),
    whileInView: da(),
    whileHover: da(),
    whileTap: da(),
    whileDrag: da(),
    whileFocus: da(),
    exit: da(),
  };
}
class Jn {
  constructor(l) {
    (this.isMounted = !1), (this.node = l);
  }
  update() {}
}
class $2 extends Jn {
  constructor(l) {
    super(l), l.animationState || (l.animationState = W2(l));
  }
  updateAnimationControlsSubscription() {
    const { animate: l } = this.node.getProps();
    su(l) && (this.unmountControls = l.subscribe(this.node));
  }
  mount() {
    this.updateAnimationControlsSubscription();
  }
  update() {
    const { animate: l } = this.node.getProps(),
      { animate: u } = this.node.prevProps || {};
    l !== u && this.updateAnimationControlsSubscription();
  }
  unmount() {
    this.node.animationState.reset(), this.unmountControls?.();
  }
}
let I2 = 0;
class tT extends Jn {
  constructor() {
    super(...arguments), (this.id = I2++);
  }
  update() {
    if (!this.node.presenceContext) return;
    const { isPresent: l, onExitComplete: u } = this.node.presenceContext,
      { isPresent: r } = this.node.prevPresenceContext || {};
    if (!this.node.animationState || l === r) return;
    const c = this.node.animationState.setActive("exit", !l);
    u &&
      !l &&
      c.then(() => {
        u(this.id);
      });
  }
  mount() {
    const { register: l, onExitComplete: u } = this.node.presenceContext || {};
    u && u(this.id), l && (this.unmount = l(this.id));
  }
  unmount() {}
}
const eT = { animation: { Feature: $2 }, exit: { Feature: tT } };
function bl(i, l, u, r = { passive: !0 }) {
  return i.addEventListener(l, u, r), () => i.removeEventListener(l, u);
}
function Al(i) {
  return { point: { x: i.pageX, y: i.pageY } };
}
const nT = (i) => (l) => qc(l) && i(l, Al(l));
function dl(i, l, u, r) {
  return bl(i, l, nT(u), r);
}
const Gy = 1e-4,
  aT = 1 - Gy,
  iT = 1 + Gy,
  Xy = 0.01,
  lT = 0 - Xy,
  sT = 0 + Xy;
function oe(i) {
  return i.max - i.min;
}
function uT(i, l, u) {
  return Math.abs(i - l) <= u;
}
function Xp(i, l, u, r = 0.5) {
  (i.origin = r),
    (i.originPoint = Nt(l.min, l.max, i.origin)),
    (i.scale = oe(u) / oe(l)),
    (i.translate = Nt(u.min, u.max, i.origin) - i.originPoint),
    ((i.scale >= aT && i.scale <= iT) || isNaN(i.scale)) && (i.scale = 1),
    ((i.translate >= lT && i.translate <= sT) || isNaN(i.translate)) &&
      (i.translate = 0);
}
function ml(i, l, u, r) {
  Xp(i.x, l.x, u.x, r ? r.originX : void 0),
    Xp(i.y, l.y, u.y, r ? r.originY : void 0);
}
function Zp(i, l, u) {
  (i.min = u.min + l.min), (i.max = i.min + oe(l));
}
function oT(i, l, u) {
  Zp(i.x, l.x, u.x), Zp(i.y, l.y, u.y);
}
function Qp(i, l, u) {
  (i.min = l.min - u.min), (i.max = i.min + oe(l));
}
function nu(i, l, u) {
  Qp(i.x, l.x, u.x), Qp(i.y, l.y, u.y);
}
function He(i) {
  return [i("x"), i("y")];
}
const Zy = ({ current: i }) => (i ? i.ownerDocument.defaultView : null),
  Kp = (i, l) => Math.abs(i - l);
function rT(i, l) {
  const u = Kp(i.x, l.x),
    r = Kp(i.y, l.y);
  return Math.sqrt(u ** 2 + r ** 2);
}
class Qy {
  constructor(
    l,
    u,
    {
      transformPagePoint: r,
      contextWindow: c = window,
      dragSnapToOrigin: d = !1,
      distanceThreshold: h = 3,
    } = {}
  ) {
    if (
      ((this.startEvent = null),
      (this.lastMoveEvent = null),
      (this.lastMoveEventInfo = null),
      (this.handlers = {}),
      (this.contextWindow = window),
      (this.updatePoint = () => {
        if (!(this.lastMoveEvent && this.lastMoveEventInfo)) return;
        const T = Gr(this.lastMoveEventInfo, this.history),
          R = this.startEvent !== null,
          U = rT(T.offset, { x: 0, y: 0 }) >= this.distanceThreshold;
        if (!R && !U) return;
        const { point: H } = T,
          { timestamp: Z } = ne;
        this.history.push({ ...H, timestamp: Z });
        const { onStart: L, onMove: G } = this.handlers;
        R ||
          (L && L(this.lastMoveEvent, T),
          (this.startEvent = this.lastMoveEvent)),
          G && G(this.lastMoveEvent, T);
      }),
      (this.handlePointerMove = (T, R) => {
        (this.lastMoveEvent = T),
          (this.lastMoveEventInfo = Yr(R, this.transformPagePoint)),
          Ot.update(this.updatePoint, !0);
      }),
      (this.handlePointerUp = (T, R) => {
        this.end();
        const { onEnd: U, onSessionEnd: H, resumeAnimation: Z } = this.handlers;
        if (
          (this.dragSnapToOrigin && Z && Z(),
          !(this.lastMoveEvent && this.lastMoveEventInfo))
        )
          return;
        const L = Gr(
          T.type === "pointercancel"
            ? this.lastMoveEventInfo
            : Yr(R, this.transformPagePoint),
          this.history
        );
        this.startEvent && U && U(T, L), H && H(T, L);
      }),
      !qc(l))
    )
      return;
    (this.dragSnapToOrigin = d),
      (this.handlers = u),
      (this.transformPagePoint = r),
      (this.distanceThreshold = h),
      (this.contextWindow = c || window);
    const y = Al(l),
      g = Yr(y, this.transformPagePoint),
      { point: m } = g,
      { timestamp: v } = ne;
    this.history = [{ ...m, timestamp: v }];
    const { onSessionStart: b } = u;
    b && b(l, Gr(g, this.history)),
      (this.removeListeners = Sl(
        dl(this.contextWindow, "pointermove", this.handlePointerMove),
        dl(this.contextWindow, "pointerup", this.handlePointerUp),
        dl(this.contextWindow, "pointercancel", this.handlePointerUp)
      ));
  }
  updateHandlers(l) {
    this.handlers = l;
  }
  end() {
    this.removeListeners && this.removeListeners(), Qn(this.updatePoint);
  }
}
function Yr(i, l) {
  return l ? { point: l(i.point) } : i;
}
function Jp(i, l) {
  return { x: i.x - l.x, y: i.y - l.y };
}
function Gr({ point: i }, l) {
  return {
    point: i,
    delta: Jp(i, Ky(l)),
    offset: Jp(i, cT(l)),
    velocity: fT(l, 0.1),
  };
}
function cT(i) {
  return i[0];
}
function Ky(i) {
  return i[i.length - 1];
}
function fT(i, l) {
  if (i.length < 2) return { x: 0, y: 0 };
  let u = i.length - 1,
    r = null;
  const c = Ky(i);
  for (; u >= 0 && ((r = i[u]), !(c.timestamp - r.timestamp > We(l))); ) u--;
  if (!r) return { x: 0, y: 0 };
  const d = Le(c.timestamp - r.timestamp);
  if (d === 0) return { x: 0, y: 0 };
  const h = { x: (c.x - r.x) / d, y: (c.y - r.y) / d };
  return h.x === 1 / 0 && (h.x = 0), h.y === 1 / 0 && (h.y = 0), h;
}
function hT(i, { min: l, max: u }, r) {
  return (
    l !== void 0 && i < l
      ? (i = r ? Nt(l, i, r.min) : Math.max(i, l))
      : u !== void 0 && i > u && (i = r ? Nt(u, i, r.max) : Math.min(i, u)),
    i
  );
}
function kp(i, l, u) {
  return {
    min: l !== void 0 ? i.min + l : void 0,
    max: u !== void 0 ? i.max + u - (i.max - i.min) : void 0,
  };
}
function dT(i, { top: l, left: u, bottom: r, right: c }) {
  return { x: kp(i.x, u, c), y: kp(i.y, l, r) };
}
function Fp(i, l) {
  let u = l.min - i.min,
    r = l.max - i.max;
  return l.max - l.min < i.max - i.min && ([u, r] = [r, u]), { min: u, max: r };
}
function mT(i, l) {
  return { x: Fp(i.x, l.x), y: Fp(i.y, l.y) };
}
function pT(i, l) {
  let u = 0.5;
  const r = oe(i),
    c = oe(l);
  return (
    c > r
      ? (u = pl(l.min, l.max - r, i.min))
      : r > c && (u = pl(i.min, i.max - c, l.min)),
    yn(0, 1, u)
  );
}
function gT(i, l) {
  const u = {};
  return (
    l.min !== void 0 && (u.min = l.min - i.min),
    l.max !== void 0 && (u.max = l.max - i.min),
    u
  );
}
const gc = 0.35;
function yT(i = gc) {
  return (
    i === !1 ? (i = 0) : i === !0 && (i = gc),
    { x: Wp(i, "left", "right"), y: Wp(i, "top", "bottom") }
  );
}
function Wp(i, l, u) {
  return { min: Pp(i, l), max: Pp(i, u) };
}
function Pp(i, l) {
  return typeof i == "number" ? i : i[l] || 0;
}
const vT = new WeakMap();
class bT {
  constructor(l) {
    (this.openDragLock = null),
      (this.isDragging = !1),
      (this.currentDirection = null),
      (this.originPoint = { x: 0, y: 0 }),
      (this.constraints = !1),
      (this.hasMutatedConstraints = !1),
      (this.elastic = kt()),
      (this.latestPointerEvent = null),
      (this.latestPanInfo = null),
      (this.visualElement = l);
  }
  start(l, { snapToCursor: u = !1, distanceThreshold: r } = {}) {
    const { presenceContext: c } = this.visualElement;
    if (c && c.isPresent === !1) return;
    const d = (b) => {
        const { dragSnapToOrigin: T } = this.getProps();
        T ? this.pauseAnimation() : this.stopAnimation(),
          u && this.snapToCursor(Al(b).point);
      },
      h = (b, T) => {
        const { drag: R, dragPropagation: U, onDragStart: H } = this.getProps();
        if (
          R &&
          !U &&
          (this.openDragLock && this.openDragLock(),
          (this.openDragLock = ES(R)),
          !this.openDragLock)
        )
          return;
        (this.latestPointerEvent = b),
          (this.latestPanInfo = T),
          (this.isDragging = !0),
          (this.currentDirection = null),
          this.resolveConstraints(),
          this.visualElement.projection &&
            ((this.visualElement.projection.isAnimationBlocked = !0),
            (this.visualElement.projection.target = void 0)),
          He((L) => {
            let G = this.getAxisMotionValue(L).get() || 0;
            if (Pe.test(G)) {
              const { projection: q } = this.visualElement;
              if (q && q.layout) {
                const tt = q.layout.layoutBox[L];
                tt && (G = oe(tt) * (parseFloat(G) / 100));
              }
            }
            this.originPoint[L] = G;
          }),
          H && Ot.postRender(() => H(b, T)),
          mc(this.visualElement, "transform");
        const { animationState: Z } = this.visualElement;
        Z && Z.setActive("whileDrag", !0);
      },
      y = (b, T) => {
        (this.latestPointerEvent = b), (this.latestPanInfo = T);
        const {
          dragPropagation: R,
          dragDirectionLock: U,
          onDirectionLock: H,
          onDrag: Z,
        } = this.getProps();
        if (!R && !this.openDragLock) return;
        const { offset: L } = T;
        if (U && this.currentDirection === null) {
          (this.currentDirection = ST(L)),
            this.currentDirection !== null && H && H(this.currentDirection);
          return;
        }
        this.updateAxis("x", T.point, L),
          this.updateAxis("y", T.point, L),
          this.visualElement.render(),
          Z && Z(b, T);
      },
      g = (b, T) => {
        (this.latestPointerEvent = b),
          (this.latestPanInfo = T),
          this.stop(b, T),
          (this.latestPointerEvent = null),
          (this.latestPanInfo = null);
      },
      m = () =>
        He(
          (b) =>
            this.getAnimationState(b) === "paused" &&
            this.getAxisMotionValue(b).animation?.play()
        ),
      { dragSnapToOrigin: v } = this.getProps();
    this.panSession = new Qy(
      l,
      {
        onSessionStart: d,
        onStart: h,
        onMove: y,
        onSessionEnd: g,
        resumeAnimation: m,
      },
      {
        transformPagePoint: this.visualElement.getTransformPagePoint(),
        dragSnapToOrigin: v,
        distanceThreshold: r,
        contextWindow: Zy(this.visualElement),
      }
    );
  }
  stop(l, u) {
    const r = l || this.latestPointerEvent,
      c = u || this.latestPanInfo,
      d = this.isDragging;
    if ((this.cancel(), !d || !c || !r)) return;
    const { velocity: h } = c;
    this.startAnimation(h);
    const { onDragEnd: y } = this.getProps();
    y && Ot.postRender(() => y(r, c));
  }
  cancel() {
    this.isDragging = !1;
    const { projection: l, animationState: u } = this.visualElement;
    l && (l.isAnimationBlocked = !1),
      this.panSession && this.panSession.end(),
      (this.panSession = void 0);
    const { dragPropagation: r } = this.getProps();
    !r &&
      this.openDragLock &&
      (this.openDragLock(), (this.openDragLock = null)),
      u && u.setActive("whileDrag", !1);
  }
  updateAxis(l, u, r) {
    const { drag: c } = this.getProps();
    if (!r || !Qs(l, c, this.currentDirection)) return;
    const d = this.getAxisMotionValue(l);
    let h = this.originPoint[l] + r[l];
    this.constraints &&
      this.constraints[l] &&
      (h = hT(h, this.constraints[l], this.elastic[l])),
      d.set(h);
  }
  resolveConstraints() {
    const { dragConstraints: l, dragElastic: u } = this.getProps(),
      r =
        this.visualElement.projection && !this.visualElement.projection.layout
          ? this.visualElement.projection.measure(!1)
          : this.visualElement.projection?.layout,
      c = this.constraints;
    l && ii(l)
      ? this.constraints || (this.constraints = this.resolveRefConstraints())
      : l && r
      ? (this.constraints = dT(r.layoutBox, l))
      : (this.constraints = !1),
      (this.elastic = yT(u)),
      c !== this.constraints &&
        r &&
        this.constraints &&
        !this.hasMutatedConstraints &&
        He((d) => {
          this.constraints !== !1 &&
            this.getAxisMotionValue(d) &&
            (this.constraints[d] = gT(r.layoutBox[d], this.constraints[d]));
        });
  }
  resolveRefConstraints() {
    const { dragConstraints: l, onMeasureDragConstraints: u } = this.getProps();
    if (!l || !ii(l)) return !1;
    const r = l.current,
      { projection: c } = this.visualElement;
    if (!c || !c.layout) return !1;
    const d = T2(r, c.root, this.visualElement.getTransformPagePoint());
    let h = mT(c.layout.layoutBox, d);
    if (u) {
      const y = u(v2(h));
      (this.hasMutatedConstraints = !!y), y && (h = zy(y));
    }
    return h;
  }
  startAnimation(l) {
    const {
        drag: u,
        dragMomentum: r,
        dragElastic: c,
        dragTransition: d,
        dragSnapToOrigin: h,
        onDragTransitionEnd: y,
      } = this.getProps(),
      g = this.constraints || {},
      m = He((v) => {
        if (!Qs(v, u, this.currentDirection)) return;
        let b = (g && g[v]) || {};
        h && (b = { min: 0, max: 0 });
        const T = c ? 200 : 1e6,
          R = c ? 40 : 1e7,
          U = {
            type: "inertia",
            velocity: r ? l[v] : 0,
            bounceStiffness: T,
            bounceDamping: R,
            timeConstant: 750,
            restDelta: 1,
            restSpeed: 10,
            ...d,
            ...b,
          };
        return this.startAxisValueAnimation(v, U);
      });
    return Promise.all(m).then(y);
  }
  startAxisValueAnimation(l, u) {
    const r = this.getAxisMotionValue(l);
    return (
      mc(this.visualElement, l), r.start(Wc(l, r, 0, u, this.visualElement, !1))
    );
  }
  stopAnimation() {
    He((l) => this.getAxisMotionValue(l).stop());
  }
  pauseAnimation() {
    He((l) => this.getAxisMotionValue(l).animation?.pause());
  }
  getAnimationState(l) {
    return this.getAxisMotionValue(l).animation?.state;
  }
  getAxisMotionValue(l) {
    const u = `_drag${l.toUpperCase()}`,
      r = this.visualElement.getProps(),
      c = r[u];
    return (
      c ||
      this.visualElement.getValue(l, (r.initial ? r.initial[l] : void 0) || 0)
    );
  }
  snapToCursor(l) {
    He((u) => {
      const { drag: r } = this.getProps();
      if (!Qs(u, r, this.currentDirection)) return;
      const { projection: c } = this.visualElement,
        d = this.getAxisMotionValue(u);
      if (c && c.layout) {
        const { min: h, max: y } = c.layout.layoutBox[u];
        d.set(l[u] - Nt(h, y, 0.5));
      }
    });
  }
  scalePositionWithinConstraints() {
    if (!this.visualElement.current) return;
    const { drag: l, dragConstraints: u } = this.getProps(),
      { projection: r } = this.visualElement;
    if (!ii(u) || !r || !this.constraints) return;
    this.stopAnimation();
    const c = { x: 0, y: 0 };
    He((h) => {
      const y = this.getAxisMotionValue(h);
      if (y && this.constraints !== !1) {
        const g = y.get();
        c[h] = pT({ min: g, max: g }, this.constraints[h]);
      }
    });
    const { transformTemplate: d } = this.visualElement.getProps();
    (this.visualElement.current.style.transform = d ? d({}, "") : "none"),
      r.root && r.root.updateScroll(),
      r.updateLayout(),
      this.resolveConstraints(),
      He((h) => {
        if (!Qs(h, l, null)) return;
        const y = this.getAxisMotionValue(h),
          { min: g, max: m } = this.constraints[h];
        y.set(Nt(g, m, c[h]));
      });
  }
  addListeners() {
    if (!this.visualElement.current) return;
    vT.set(this.visualElement, this);
    const l = this.visualElement.current,
      u = dl(l, "pointerdown", (g) => {
        const { drag: m, dragListener: v = !0 } = this.getProps();
        m && v && this.start(g);
      }),
      r = () => {
        const { dragConstraints: g } = this.getProps();
        ii(g) && g.current && (this.constraints = this.resolveRefConstraints());
      },
      { projection: c } = this.visualElement,
      d = c.addEventListener("measure", r);
    c && !c.layout && (c.root && c.root.updateScroll(), c.updateLayout()),
      Ot.read(r);
    const h = bl(window, "resize", () => this.scalePositionWithinConstraints()),
      y = c.addEventListener(
        "didUpdate",
        ({ delta: g, hasLayoutChanged: m }) => {
          this.isDragging &&
            m &&
            (He((v) => {
              const b = this.getAxisMotionValue(v);
              b &&
                ((this.originPoint[v] += g[v].translate),
                b.set(b.get() + g[v].translate));
            }),
            this.visualElement.render());
        }
      );
    return () => {
      h(), u(), d(), y && y();
    };
  }
  getProps() {
    const l = this.visualElement.getProps(),
      {
        drag: u = !1,
        dragDirectionLock: r = !1,
        dragPropagation: c = !1,
        dragConstraints: d = !1,
        dragElastic: h = gc,
        dragMomentum: y = !0,
      } = l;
    return {
      ...l,
      drag: u,
      dragDirectionLock: r,
      dragPropagation: c,
      dragConstraints: d,
      dragElastic: h,
      dragMomentum: y,
    };
  }
}
function Qs(i, l, u) {
  return (l === !0 || l === i) && (u === null || u === i);
}
function ST(i, l = 10) {
  let u = null;
  return Math.abs(i.y) > l ? (u = "y") : Math.abs(i.x) > l && (u = "x"), u;
}
class TT extends Jn {
  constructor(l) {
    super(l),
      (this.removeGroupControls = qe),
      (this.removeListeners = qe),
      (this.controls = new bT(l));
  }
  mount() {
    const { dragControls: l } = this.node.getProps();
    l && (this.removeGroupControls = l.subscribe(this.controls)),
      (this.removeListeners = this.controls.addListeners() || qe);
  }
  unmount() {
    this.removeGroupControls(), this.removeListeners();
  }
}
const $p = (i) => (l, u) => {
  i && Ot.postRender(() => i(l, u));
};
class xT extends Jn {
  constructor() {
    super(...arguments), (this.removePointerDownListener = qe);
  }
  onPointerDown(l) {
    this.session = new Qy(l, this.createPanHandlers(), {
      transformPagePoint: this.node.getTransformPagePoint(),
      contextWindow: Zy(this.node),
    });
  }
  createPanHandlers() {
    const {
      onPanSessionStart: l,
      onPanStart: u,
      onPan: r,
      onPanEnd: c,
    } = this.node.getProps();
    return {
      onSessionStart: $p(l),
      onStart: $p(u),
      onMove: r,
      onEnd: (d, h) => {
        delete this.session, c && Ot.postRender(() => c(d, h));
      },
    };
  }
  mount() {
    this.removePointerDownListener = dl(this.node.current, "pointerdown", (l) =>
      this.onPointerDown(l)
    );
  }
  update() {
    this.session && this.session.updateHandlers(this.createPanHandlers());
  }
  unmount() {
    this.removePointerDownListener(), this.session && this.session.end();
  }
}
const Ws = { hasAnimatedSinceResize: !0, hasEverUpdated: !1 };
let Xr = !1;
class AT extends k.Component {
  componentDidMount() {
    const {
        visualElement: l,
        layoutGroup: u,
        switchLayoutGroup: r,
        layoutId: c,
      } = this.props,
      { projection: d } = l;
    d &&
      (u.group && u.group.add(d),
      r && r.register && c && r.register(d),
      Xr && d.root.didUpdate(),
      d.addEventListener("animationComplete", () => {
        this.safeToRemove();
      }),
      d.setOptions({
        ...d.options,
        onExitComplete: () => this.safeToRemove(),
      })),
      (Ws.hasEverUpdated = !0);
  }
  getSnapshotBeforeUpdate(l) {
    const {
        layoutDependency: u,
        visualElement: r,
        drag: c,
        isPresent: d,
      } = this.props,
      { projection: h } = r;
    return (
      h &&
        ((h.isPresent = d),
        (Xr = !0),
        c || l.layoutDependency !== u || u === void 0 || l.isPresent !== d
          ? h.willUpdate()
          : this.safeToRemove(),
        l.isPresent !== d &&
          (d
            ? h.promote()
            : h.relegate() ||
              Ot.postRender(() => {
                const y = h.getStack();
                (!y || !y.members.length) && this.safeToRemove();
              }))),
      null
    );
  }
  componentDidUpdate() {
    const { projection: l } = this.props.visualElement;
    l &&
      (l.root.didUpdate(),
      Lc.postRender(() => {
        !l.currentAnimation && l.isLead() && this.safeToRemove();
      }));
  }
  componentWillUnmount() {
    const {
        visualElement: l,
        layoutGroup: u,
        switchLayoutGroup: r,
      } = this.props,
      { projection: c } = l;
    (Xr = !0),
      c &&
        (c.scheduleCheckAfterUnmount(),
        u && u.group && u.group.remove(c),
        r && r.deregister && r.deregister(c));
  }
  safeToRemove() {
    const { safeToRemove: l } = this.props;
    l && l();
  }
  render() {
    return null;
  }
}
function Jy(i) {
  const [l, u] = py(),
    r = k.useContext(vc);
  return E.jsx(AT, {
    ...i,
    layoutGroup: r,
    switchLayoutGroup: k.useContext(wy),
    isPresent: l,
    safeToRemove: u,
  });
}
function ET(i, l, u) {
  const r = se(i) ? i : ri(i);
  return r.start(Wc("", r, l, u)), r.animation;
}
const MT = (i, l) => i.depth - l.depth;
class DT {
  constructor() {
    (this.children = []), (this.isDirty = !1);
  }
  add(l) {
    Tc(this.children, l), (this.isDirty = !0);
  }
  remove(l) {
    xc(this.children, l), (this.isDirty = !0);
  }
  forEach(l) {
    this.isDirty && this.children.sort(MT),
      (this.isDirty = !1),
      this.children.forEach(l);
  }
}
function wT(i, l) {
  const u = ge.now(),
    r = ({ timestamp: c }) => {
      const d = c - u;
      d >= l && (Qn(r), i(d - l));
    };
  return Ot.setup(r, !0), () => Qn(r);
}
const ky = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"],
  CT = ky.length,
  Ip = (i) => (typeof i == "string" ? parseFloat(i) : i),
  tg = (i) => typeof i == "number" || at.test(i);
function zT(i, l, u, r, c, d) {
  c
    ? ((i.opacity = Nt(0, u.opacity ?? 1, jT(r))),
      (i.opacityExit = Nt(l.opacity ?? 1, 0, OT(r))))
    : d && (i.opacity = Nt(l.opacity ?? 1, u.opacity ?? 1, r));
  for (let h = 0; h < CT; h++) {
    const y = `border${ky[h]}Radius`;
    let g = eg(l, y),
      m = eg(u, y);
    if (g === void 0 && m === void 0) continue;
    g || (g = 0),
      m || (m = 0),
      g === 0 || m === 0 || tg(g) === tg(m)
        ? ((i[y] = Math.max(Nt(Ip(g), Ip(m), r), 0)),
          (Pe.test(m) || Pe.test(g)) && (i[y] += "%"))
        : (i[y] = m);
  }
  (l.rotate || u.rotate) && (i.rotate = Nt(l.rotate || 0, u.rotate || 0, r));
}
function eg(i, l) {
  return i[l] !== void 0 ? i[l] : i.borderRadius;
}
const jT = Fy(0, 0.5, Vg),
  OT = Fy(0.5, 0.95, qe);
function Fy(i, l, u) {
  return (r) => (r < i ? 0 : r > l ? 1 : u(pl(i, l, r)));
}
function ng(i, l) {
  (i.min = l.min), (i.max = l.max);
}
function Ze(i, l) {
  ng(i.x, l.x), ng(i.y, l.y);
}
function ag(i, l) {
  (i.translate = l.translate),
    (i.scale = l.scale),
    (i.originPoint = l.originPoint),
    (i.origin = l.origin);
}
function ig(i, l, u, r, c) {
  return (
    (i -= l), (i = eu(i, 1 / u, r)), c !== void 0 && (i = eu(i, 1 / c, r)), i
  );
}
function RT(i, l = 0, u = 1, r = 0.5, c, d = i, h = i) {
  if (
    (Pe.test(l) &&
      ((l = parseFloat(l)), (l = Nt(h.min, h.max, l / 100) - h.min)),
    typeof l != "number")
  )
    return;
  let y = Nt(d.min, d.max, r);
  i === d && (y -= l),
    (i.min = ig(i.min, l, u, y, c)),
    (i.max = ig(i.max, l, u, y, c));
}
function lg(i, l, [u, r, c], d, h) {
  RT(i, l[u], l[r], l[c], l.scale, d, h);
}
const NT = ["x", "scaleX", "originX"],
  VT = ["y", "scaleY", "originY"];
function sg(i, l, u, r) {
  lg(i.x, l, NT, u ? u.x : void 0, r ? r.x : void 0),
    lg(i.y, l, VT, u ? u.y : void 0, r ? r.y : void 0);
}
function ug(i) {
  return i.translate === 0 && i.scale === 1;
}
function Wy(i) {
  return ug(i.x) && ug(i.y);
}
function og(i, l) {
  return i.min === l.min && i.max === l.max;
}
function _T(i, l) {
  return og(i.x, l.x) && og(i.y, l.y);
}
function rg(i, l) {
  return (
    Math.round(i.min) === Math.round(l.min) &&
    Math.round(i.max) === Math.round(l.max)
  );
}
function Py(i, l) {
  return rg(i.x, l.x) && rg(i.y, l.y);
}
function cg(i) {
  return oe(i.x) / oe(i.y);
}
function fg(i, l) {
  return (
    i.translate === l.translate &&
    i.scale === l.scale &&
    i.originPoint === l.originPoint
  );
}
class BT {
  constructor() {
    this.members = [];
  }
  add(l) {
    Tc(this.members, l), l.scheduleRender();
  }
  remove(l) {
    if (
      (xc(this.members, l),
      l === this.prevLead && (this.prevLead = void 0),
      l === this.lead)
    ) {
      const u = this.members[this.members.length - 1];
      u && this.promote(u);
    }
  }
  relegate(l) {
    const u = this.members.findIndex((c) => l === c);
    if (u === 0) return !1;
    let r;
    for (let c = u; c >= 0; c--) {
      const d = this.members[c];
      if (d.isPresent !== !1) {
        r = d;
        break;
      }
    }
    return r ? (this.promote(r), !0) : !1;
  }
  promote(l, u) {
    const r = this.lead;
    if (l !== r && ((this.prevLead = r), (this.lead = l), l.show(), r)) {
      r.instance && r.scheduleRender(),
        l.scheduleRender(),
        (l.resumeFrom = r),
        u && (l.resumeFrom.preserveOpacity = !0),
        r.snapshot &&
          ((l.snapshot = r.snapshot),
          (l.snapshot.latestValues = r.animationValues || r.latestValues)),
        l.root && l.root.isUpdating && (l.isLayoutDirty = !0);
      const { crossfade: c } = l.options;
      c === !1 && r.hide();
    }
  }
  exitAnimationComplete() {
    this.members.forEach((l) => {
      const { options: u, resumingFrom: r } = l;
      u.onExitComplete && u.onExitComplete(),
        r && r.options.onExitComplete && r.options.onExitComplete();
    });
  }
  scheduleRender() {
    this.members.forEach((l) => {
      l.instance && l.scheduleRender(!1);
    });
  }
  removeLeadSnapshot() {
    this.lead && this.lead.snapshot && (this.lead.snapshot = void 0);
  }
}
function UT(i, l, u) {
  let r = "";
  const c = i.x.translate / l.x,
    d = i.y.translate / l.y,
    h = u?.z || 0;
  if (
    ((c || d || h) && (r = `translate3d(${c}px, ${d}px, ${h}px) `),
    (l.x !== 1 || l.y !== 1) && (r += `scale(${1 / l.x}, ${1 / l.y}) `),
    u)
  ) {
    const {
      transformPerspective: m,
      rotate: v,
      rotateX: b,
      rotateY: T,
      skewX: R,
      skewY: U,
    } = u;
    m && (r = `perspective(${m}px) ${r}`),
      v && (r += `rotate(${v}deg) `),
      b && (r += `rotateX(${b}deg) `),
      T && (r += `rotateY(${T}deg) `),
      R && (r += `skewX(${R}deg) `),
      U && (r += `skewY(${U}deg) `);
  }
  const y = i.x.scale * l.x,
    g = i.y.scale * l.y;
  return (y !== 1 || g !== 1) && (r += `scale(${y}, ${g})`), r || "none";
}
const Zr = ["", "X", "Y", "Z"],
  HT = 1e3;
let LT = 0;
function Qr(i, l, u, r) {
  const { latestValues: c } = l;
  c[i] && ((u[i] = c[i]), l.setStaticValue(i, 0), r && (r[i] = 0));
}
function $y(i) {
  if (((i.hasCheckedOptimisedAppear = !0), i.root === i)) return;
  const { visualElement: l } = i.options;
  if (!l) return;
  const u = Uy(l);
  if (window.MotionHasOptimisedAnimation(u, "transform")) {
    const { layout: c, layoutId: d } = i.options;
    window.MotionCancelOptimisedAnimation(u, "transform", Ot, !(c || d));
  }
  const { parent: r } = i;
  r && !r.hasCheckedOptimisedAppear && $y(r);
}
function Iy({
  attachResizeListener: i,
  defaultParent: l,
  measureScroll: u,
  checkIsScrollRoot: r,
  resetTransform: c,
}) {
  return class {
    constructor(h = {}, y = l?.()) {
      (this.id = LT++),
        (this.animationId = 0),
        (this.animationCommitId = 0),
        (this.children = new Set()),
        (this.options = {}),
        (this.isTreeAnimating = !1),
        (this.isAnimationBlocked = !1),
        (this.isLayoutDirty = !1),
        (this.isProjectionDirty = !1),
        (this.isSharedProjectionDirty = !1),
        (this.isTransformDirty = !1),
        (this.updateManuallyBlocked = !1),
        (this.updateBlockedByResize = !1),
        (this.isUpdating = !1),
        (this.isSVG = !1),
        (this.needsReset = !1),
        (this.shouldResetTransform = !1),
        (this.hasCheckedOptimisedAppear = !1),
        (this.treeScale = { x: 1, y: 1 }),
        (this.eventHandlers = new Map()),
        (this.hasTreeAnimated = !1),
        (this.layoutVersion = 0),
        (this.updateScheduled = !1),
        (this.scheduleUpdate = () => this.update()),
        (this.projectionUpdateScheduled = !1),
        (this.checkUpdateFailed = () => {
          this.isUpdating && ((this.isUpdating = !1), this.clearAllSnapshots());
        }),
        (this.updateProjection = () => {
          (this.projectionUpdateScheduled = !1),
            this.nodes.forEach(GT),
            this.nodes.forEach(KT),
            this.nodes.forEach(JT),
            this.nodes.forEach(XT);
        }),
        (this.resolvedRelativeTargetAt = 0),
        (this.linkedParentVersion = 0),
        (this.hasProjected = !1),
        (this.isVisible = !0),
        (this.animationProgress = 0),
        (this.sharedNodes = new Map()),
        (this.latestValues = h),
        (this.root = y ? y.root || y : this),
        (this.path = y ? [...y.path, y] : []),
        (this.parent = y),
        (this.depth = y ? y.depth + 1 : 0);
      for (let g = 0; g < this.path.length; g++)
        this.path[g].shouldResetTransform = !0;
      this.root === this && (this.nodes = new DT());
    }
    addEventListener(h, y) {
      return (
        this.eventHandlers.has(h) || this.eventHandlers.set(h, new Mc()),
        this.eventHandlers.get(h).add(y)
      );
    }
    notifyListeners(h, ...y) {
      const g = this.eventHandlers.get(h);
      g && g.notify(...y);
    }
    hasListeners(h) {
      return this.eventHandlers.has(h);
    }
    mount(h) {
      if (this.instance) return;
      (this.isSVG = my(h) && !jS(h)), (this.instance = h);
      const { layoutId: y, layout: g, visualElement: m } = this.options;
      if (
        (m && !m.current && m.mount(h),
        this.root.nodes.add(this),
        this.parent && this.parent.children.add(this),
        this.root.hasTreeAnimated && (g || y) && (this.isLayoutDirty = !0),
        i)
      ) {
        let v,
          b = 0;
        const T = () => (this.root.updateBlockedByResize = !1);
        Ot.read(() => {
          b = window.innerWidth;
        }),
          i(h, () => {
            const R = window.innerWidth;
            R !== b &&
              ((b = R),
              (this.root.updateBlockedByResize = !0),
              v && v(),
              (v = wT(T, 250)),
              Ws.hasAnimatedSinceResize &&
                ((Ws.hasAnimatedSinceResize = !1), this.nodes.forEach(mg)));
          });
      }
      y && this.root.registerSharedNode(y, this),
        this.options.animate !== !1 &&
          m &&
          (y || g) &&
          this.addEventListener(
            "didUpdate",
            ({
              delta: v,
              hasLayoutChanged: b,
              hasRelativeLayoutChanged: T,
              layout: R,
            }) => {
              if (this.isTreeAnimationBlocked()) {
                (this.target = void 0), (this.relativeTarget = void 0);
                return;
              }
              const U =
                  this.options.transition || m.getDefaultTransition() || $T,
                { onLayoutAnimationStart: H, onLayoutAnimationComplete: Z } =
                  m.getProps(),
                L = !this.targetLayout || !Py(this.targetLayout, R),
                G = !b && T;
              if (
                this.options.layoutRoot ||
                this.resumeFrom ||
                G ||
                (b && (L || !this.currentAnimation))
              ) {
                this.resumeFrom &&
                  ((this.resumingFrom = this.resumeFrom),
                  (this.resumingFrom.resumingFrom = void 0));
                const q = { ...Uc(U, "layout"), onPlay: H, onComplete: Z };
                (m.shouldReduceMotion || this.options.layoutRoot) &&
                  ((q.delay = 0), (q.type = !1)),
                  this.startAnimation(q),
                  this.setAnimationOrigin(v, G);
              } else
                b || mg(this),
                  this.isLead() &&
                    this.options.onExitComplete &&
                    this.options.onExitComplete();
              this.targetLayout = R;
            }
          );
    }
    unmount() {
      this.options.layoutId && this.willUpdate(), this.root.nodes.remove(this);
      const h = this.getStack();
      h && h.remove(this),
        this.parent && this.parent.children.delete(this),
        (this.instance = void 0),
        this.eventHandlers.clear(),
        Qn(this.updateProjection);
    }
    blockUpdate() {
      this.updateManuallyBlocked = !0;
    }
    unblockUpdate() {
      this.updateManuallyBlocked = !1;
    }
    isUpdateBlocked() {
      return this.updateManuallyBlocked || this.updateBlockedByResize;
    }
    isTreeAnimationBlocked() {
      return (
        this.isAnimationBlocked ||
        (this.parent && this.parent.isTreeAnimationBlocked()) ||
        !1
      );
    }
    startUpdate() {
      this.isUpdateBlocked() ||
        ((this.isUpdating = !0),
        this.nodes && this.nodes.forEach(kT),
        this.animationId++);
    }
    getTransformTemplate() {
      const { visualElement: h } = this.options;
      return h && h.getProps().transformTemplate;
    }
    willUpdate(h = !0) {
      if (((this.root.hasTreeAnimated = !0), this.root.isUpdateBlocked())) {
        this.options.onExitComplete && this.options.onExitComplete();
        return;
      }
      if (
        (window.MotionCancelOptimisedAnimation &&
          !this.hasCheckedOptimisedAppear &&
          $y(this),
        !this.root.isUpdating && this.root.startUpdate(),
        this.isLayoutDirty)
      )
        return;
      this.isLayoutDirty = !0;
      for (let v = 0; v < this.path.length; v++) {
        const b = this.path[v];
        (b.shouldResetTransform = !0),
          b.updateScroll("snapshot"),
          b.options.layoutRoot && b.willUpdate(!1);
      }
      const { layoutId: y, layout: g } = this.options;
      if (y === void 0 && !g) return;
      const m = this.getTransformTemplate();
      (this.prevTransformTemplateValue = m ? m(this.latestValues, "") : void 0),
        this.updateSnapshot(),
        h && this.notifyListeners("willUpdate");
    }
    update() {
      if (((this.updateScheduled = !1), this.isUpdateBlocked())) {
        this.unblockUpdate(), this.clearAllSnapshots(), this.nodes.forEach(hg);
        return;
      }
      if (this.animationId <= this.animationCommitId) {
        this.nodes.forEach(dg);
        return;
      }
      (this.animationCommitId = this.animationId),
        this.isUpdating
          ? ((this.isUpdating = !1),
            this.nodes.forEach(QT),
            this.nodes.forEach(qT),
            this.nodes.forEach(YT))
          : this.nodes.forEach(dg),
        this.clearAllSnapshots();
      const y = ge.now();
      (ne.delta = yn(0, 1e3 / 60, y - ne.timestamp)),
        (ne.timestamp = y),
        (ne.isProcessing = !0),
        Nr.update.process(ne),
        Nr.preRender.process(ne),
        Nr.render.process(ne),
        (ne.isProcessing = !1);
    }
    didUpdate() {
      this.updateScheduled ||
        ((this.updateScheduled = !0), Lc.read(this.scheduleUpdate));
    }
    clearAllSnapshots() {
      this.nodes.forEach(ZT), this.sharedNodes.forEach(FT);
    }
    scheduleUpdateProjection() {
      this.projectionUpdateScheduled ||
        ((this.projectionUpdateScheduled = !0),
        Ot.preRender(this.updateProjection, !1, !0));
    }
    scheduleCheckAfterUnmount() {
      Ot.postRender(() => {
        this.isLayoutDirty
          ? this.root.didUpdate()
          : this.root.checkUpdateFailed();
      });
    }
    updateSnapshot() {
      this.snapshot ||
        !this.instance ||
        ((this.snapshot = this.measure()),
        this.snapshot &&
          !oe(this.snapshot.measuredBox.x) &&
          !oe(this.snapshot.measuredBox.y) &&
          (this.snapshot = void 0));
    }
    updateLayout() {
      if (
        !this.instance ||
        (this.updateScroll(),
        !(this.options.alwaysMeasureLayout && this.isLead()) &&
          !this.isLayoutDirty)
      )
        return;
      if (this.resumeFrom && !this.resumeFrom.instance)
        for (let g = 0; g < this.path.length; g++) this.path[g].updateScroll();
      const h = this.layout;
      (this.layout = this.measure(!1)),
        this.layoutVersion++,
        (this.layoutCorrected = kt()),
        (this.isLayoutDirty = !1),
        (this.projectionDelta = void 0),
        this.notifyListeners("measure", this.layout.layoutBox);
      const { visualElement: y } = this.options;
      y &&
        y.notify(
          "LayoutMeasure",
          this.layout.layoutBox,
          h ? h.layoutBox : void 0
        );
    }
    updateScroll(h = "measure") {
      let y = !!(this.options.layoutScroll && this.instance);
      if (
        (this.scroll &&
          this.scroll.animationId === this.root.animationId &&
          this.scroll.phase === h &&
          (y = !1),
        y && this.instance)
      ) {
        const g = r(this.instance);
        this.scroll = {
          animationId: this.root.animationId,
          phase: h,
          isRoot: g,
          offset: u(this.instance),
          wasRoot: this.scroll ? this.scroll.isRoot : g,
        };
      }
    }
    resetTransform() {
      if (!c) return;
      const h =
          this.isLayoutDirty ||
          this.shouldResetTransform ||
          this.options.alwaysMeasureLayout,
        y = this.projectionDelta && !Wy(this.projectionDelta),
        g = this.getTransformTemplate(),
        m = g ? g(this.latestValues, "") : void 0,
        v = m !== this.prevTransformTemplateValue;
      h &&
        this.instance &&
        (y || ma(this.latestValues) || v) &&
        (c(this.instance, m),
        (this.shouldResetTransform = !1),
        this.scheduleRender());
    }
    measure(h = !0) {
      const y = this.measurePageBox();
      let g = this.removeElementScroll(y);
      return (
        h && (g = this.removeTransform(g)),
        IT(g),
        {
          animationId: this.root.animationId,
          measuredBox: y,
          layoutBox: g,
          latestValues: {},
          source: this.id,
        }
      );
    }
    measurePageBox() {
      const { visualElement: h } = this.options;
      if (!h) return kt();
      const y = h.measureViewportBox();
      if (!(this.scroll?.wasRoot || this.path.some(tx))) {
        const { scroll: m } = this.root;
        m && (li(y.x, m.offset.x), li(y.y, m.offset.y));
      }
      return y;
    }
    removeElementScroll(h) {
      const y = kt();
      if ((Ze(y, h), this.scroll?.wasRoot)) return y;
      for (let g = 0; g < this.path.length; g++) {
        const m = this.path[g],
          { scroll: v, options: b } = m;
        m !== this.root &&
          v &&
          b.layoutScroll &&
          (v.wasRoot && Ze(y, h), li(y.x, v.offset.x), li(y.y, v.offset.y));
      }
      return y;
    }
    applyTransform(h, y = !1) {
      const g = kt();
      Ze(g, h);
      for (let m = 0; m < this.path.length; m++) {
        const v = this.path[m];
        !y &&
          v.options.layoutScroll &&
          v.scroll &&
          v !== v.root &&
          si(g, { x: -v.scroll.offset.x, y: -v.scroll.offset.y }),
          ma(v.latestValues) && si(g, v.latestValues);
      }
      return ma(this.latestValues) && si(g, this.latestValues), g;
    }
    removeTransform(h) {
      const y = kt();
      Ze(y, h);
      for (let g = 0; g < this.path.length; g++) {
        const m = this.path[g];
        if (!m.instance || !ma(m.latestValues)) continue;
        cc(m.latestValues) && m.updateSnapshot();
        const v = kt(),
          b = m.measurePageBox();
        Ze(v, b),
          sg(y, m.latestValues, m.snapshot ? m.snapshot.layoutBox : void 0, v);
      }
      return ma(this.latestValues) && sg(y, this.latestValues), y;
    }
    setTargetDelta(h) {
      (this.targetDelta = h),
        this.root.scheduleUpdateProjection(),
        (this.isProjectionDirty = !0);
    }
    setOptions(h) {
      this.options = {
        ...this.options,
        ...h,
        crossfade: h.crossfade !== void 0 ? h.crossfade : !0,
      };
    }
    clearMeasurements() {
      (this.scroll = void 0),
        (this.layout = void 0),
        (this.snapshot = void 0),
        (this.prevTransformTemplateValue = void 0),
        (this.targetDelta = void 0),
        (this.target = void 0),
        (this.isLayoutDirty = !1);
    }
    forceRelativeParentToResolveTarget() {
      this.relativeParent &&
        this.relativeParent.resolvedRelativeTargetAt !== ne.timestamp &&
        this.relativeParent.resolveTargetDelta(!0);
    }
    resolveTargetDelta(h = !1) {
      const y = this.getLead();
      this.isProjectionDirty || (this.isProjectionDirty = y.isProjectionDirty),
        this.isTransformDirty || (this.isTransformDirty = y.isTransformDirty),
        this.isSharedProjectionDirty ||
          (this.isSharedProjectionDirty = y.isSharedProjectionDirty);
      const g = !!this.resumingFrom || this !== y;
      if (
        !(
          h ||
          (g && this.isSharedProjectionDirty) ||
          this.isProjectionDirty ||
          this.parent?.isProjectionDirty ||
          this.attemptToResolveRelativeTarget ||
          this.root.updateBlockedByResize
        )
      )
        return;
      const { layout: v, layoutId: b } = this.options;
      if (!this.layout || !(v || b)) return;
      this.resolvedRelativeTargetAt = ne.timestamp;
      const T = this.getClosestProjectingParent();
      T &&
        this.linkedParentVersion !== T.layoutVersion &&
        !T.options.layoutRoot &&
        this.removeRelativeTarget(),
        !this.targetDelta &&
          !this.relativeTarget &&
          (T && T.layout
            ? this.createRelativeTarget(
                T,
                this.layout.layoutBox,
                T.layout.layoutBox
              )
            : this.removeRelativeTarget()),
        !(!this.relativeTarget && !this.targetDelta) &&
          (this.target ||
            ((this.target = kt()), (this.targetWithTransforms = kt())),
          this.relativeTarget &&
          this.relativeTargetOrigin &&
          this.relativeParent &&
          this.relativeParent.target
            ? (this.forceRelativeParentToResolveTarget(),
              oT(this.target, this.relativeTarget, this.relativeParent.target))
            : this.targetDelta
            ? (this.resumingFrom
                ? (this.target = this.applyTransform(this.layout.layoutBox))
                : Ze(this.target, this.layout.layoutBox),
              Oy(this.target, this.targetDelta))
            : Ze(this.target, this.layout.layoutBox),
          this.attemptToResolveRelativeTarget &&
            ((this.attemptToResolveRelativeTarget = !1),
            T &&
            !!T.resumingFrom == !!this.resumingFrom &&
            !T.options.layoutScroll &&
            T.target &&
            this.animationProgress !== 1
              ? this.createRelativeTarget(T, this.target, T.target)
              : (this.relativeParent = this.relativeTarget = void 0)));
    }
    getClosestProjectingParent() {
      if (
        !(
          !this.parent ||
          cc(this.parent.latestValues) ||
          jy(this.parent.latestValues)
        )
      )
        return this.parent.isProjecting()
          ? this.parent
          : this.parent.getClosestProjectingParent();
    }
    isProjecting() {
      return !!(
        (this.relativeTarget || this.targetDelta || this.options.layoutRoot) &&
        this.layout
      );
    }
    createRelativeTarget(h, y, g) {
      (this.relativeParent = h),
        (this.linkedParentVersion = h.layoutVersion),
        this.forceRelativeParentToResolveTarget(),
        (this.relativeTarget = kt()),
        (this.relativeTargetOrigin = kt()),
        nu(this.relativeTargetOrigin, y, g),
        Ze(this.relativeTarget, this.relativeTargetOrigin);
    }
    removeRelativeTarget() {
      this.relativeParent = this.relativeTarget = void 0;
    }
    calcProjection() {
      const h = this.getLead(),
        y = !!this.resumingFrom || this !== h;
      let g = !0;
      if (
        ((this.isProjectionDirty || this.parent?.isProjectionDirty) && (g = !1),
        y &&
          (this.isSharedProjectionDirty || this.isTransformDirty) &&
          (g = !1),
        this.resolvedRelativeTargetAt === ne.timestamp && (g = !1),
        g)
      )
        return;
      const { layout: m, layoutId: v } = this.options;
      if (
        ((this.isTreeAnimating = !!(
          (this.parent && this.parent.isTreeAnimating) ||
          this.currentAnimation ||
          this.pendingAnimation
        )),
        this.isTreeAnimating ||
          (this.targetDelta = this.relativeTarget = void 0),
        !this.layout || !(m || v))
      )
        return;
      Ze(this.layoutCorrected, this.layout.layoutBox);
      const b = this.treeScale.x,
        T = this.treeScale.y;
      S2(this.layoutCorrected, this.treeScale, this.path, y),
        h.layout &&
          !h.target &&
          (this.treeScale.x !== 1 || this.treeScale.y !== 1) &&
          ((h.target = h.layout.layoutBox), (h.targetWithTransforms = kt()));
      const { target: R } = h;
      if (!R) {
        this.prevProjectionDelta &&
          (this.createProjectionDeltas(), this.scheduleRender());
        return;
      }
      !this.projectionDelta || !this.prevProjectionDelta
        ? this.createProjectionDeltas()
        : (ag(this.prevProjectionDelta.x, this.projectionDelta.x),
          ag(this.prevProjectionDelta.y, this.projectionDelta.y)),
        ml(this.projectionDelta, this.layoutCorrected, R, this.latestValues),
        (this.treeScale.x !== b ||
          this.treeScale.y !== T ||
          !fg(this.projectionDelta.x, this.prevProjectionDelta.x) ||
          !fg(this.projectionDelta.y, this.prevProjectionDelta.y)) &&
          ((this.hasProjected = !0),
          this.scheduleRender(),
          this.notifyListeners("projectionUpdate", R));
    }
    hide() {
      this.isVisible = !1;
    }
    show() {
      this.isVisible = !0;
    }
    scheduleRender(h = !0) {
      if ((this.options.visualElement?.scheduleRender(), h)) {
        const y = this.getStack();
        y && y.scheduleRender();
      }
      this.resumingFrom &&
        !this.resumingFrom.instance &&
        (this.resumingFrom = void 0);
    }
    createProjectionDeltas() {
      (this.prevProjectionDelta = ui()),
        (this.projectionDelta = ui()),
        (this.projectionDeltaWithTransform = ui());
    }
    setAnimationOrigin(h, y = !1) {
      const g = this.snapshot,
        m = g ? g.latestValues : {},
        v = { ...this.latestValues },
        b = ui();
      (!this.relativeParent || !this.relativeParent.options.layoutRoot) &&
        (this.relativeTarget = this.relativeTargetOrigin = void 0),
        (this.attemptToResolveRelativeTarget = !y);
      const T = kt(),
        R = g ? g.source : void 0,
        U = this.layout ? this.layout.source : void 0,
        H = R !== U,
        Z = this.getStack(),
        L = !Z || Z.members.length <= 1,
        G = !!(H && !L && this.options.crossfade === !0 && !this.path.some(PT));
      this.animationProgress = 0;
      let q;
      (this.mixTargetDelta = (tt) => {
        const F = tt / 1e3;
        pg(b.x, h.x, F),
          pg(b.y, h.y, F),
          this.setTargetDelta(b),
          this.relativeTarget &&
            this.relativeTargetOrigin &&
            this.layout &&
            this.relativeParent &&
            this.relativeParent.layout &&
            (nu(T, this.layout.layoutBox, this.relativeParent.layout.layoutBox),
            WT(this.relativeTarget, this.relativeTargetOrigin, T, F),
            q && _T(this.relativeTarget, q) && (this.isProjectionDirty = !1),
            q || (q = kt()),
            Ze(q, this.relativeTarget)),
          H &&
            ((this.animationValues = v), zT(v, m, this.latestValues, F, G, L)),
          this.root.scheduleUpdateProjection(),
          this.scheduleRender(),
          (this.animationProgress = F);
      }),
        this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0);
    }
    startAnimation(h) {
      this.notifyListeners("animationStart"),
        this.currentAnimation?.stop(),
        this.resumingFrom?.currentAnimation?.stop(),
        this.pendingAnimation &&
          (Qn(this.pendingAnimation), (this.pendingAnimation = void 0)),
        (this.pendingAnimation = Ot.update(() => {
          (Ws.hasAnimatedSinceResize = !0),
            this.motionValue || (this.motionValue = ri(0)),
            (this.currentAnimation = ET(this.motionValue, [0, 1e3], {
              ...h,
              velocity: 0,
              isSync: !0,
              onUpdate: (y) => {
                this.mixTargetDelta(y), h.onUpdate && h.onUpdate(y);
              },
              onStop: () => {},
              onComplete: () => {
                h.onComplete && h.onComplete(), this.completeAnimation();
              },
            })),
            this.resumingFrom &&
              (this.resumingFrom.currentAnimation = this.currentAnimation),
            (this.pendingAnimation = void 0);
        }));
    }
    completeAnimation() {
      this.resumingFrom &&
        ((this.resumingFrom.currentAnimation = void 0),
        (this.resumingFrom.preserveOpacity = void 0));
      const h = this.getStack();
      h && h.exitAnimationComplete(),
        (this.resumingFrom =
          this.currentAnimation =
          this.animationValues =
            void 0),
        this.notifyListeners("animationComplete");
    }
    finishAnimation() {
      this.currentAnimation &&
        (this.mixTargetDelta && this.mixTargetDelta(HT),
        this.currentAnimation.stop()),
        this.completeAnimation();
    }
    applyTransformsToTarget() {
      const h = this.getLead();
      let {
        targetWithTransforms: y,
        target: g,
        layout: m,
        latestValues: v,
      } = h;
      if (!(!y || !g || !m)) {
        if (
          this !== h &&
          this.layout &&
          m &&
          t0(this.options.animationType, this.layout.layoutBox, m.layoutBox)
        ) {
          g = this.target || kt();
          const b = oe(this.layout.layoutBox.x);
          (g.x.min = h.target.x.min), (g.x.max = g.x.min + b);
          const T = oe(this.layout.layoutBox.y);
          (g.y.min = h.target.y.min), (g.y.max = g.y.min + T);
        }
        Ze(y, g),
          si(y, v),
          ml(this.projectionDeltaWithTransform, this.layoutCorrected, y, v);
      }
    }
    registerSharedNode(h, y) {
      this.sharedNodes.has(h) || this.sharedNodes.set(h, new BT()),
        this.sharedNodes.get(h).add(y);
      const m = y.options.initialPromotionConfig;
      y.promote({
        transition: m ? m.transition : void 0,
        preserveFollowOpacity:
          m && m.shouldPreserveFollowOpacity
            ? m.shouldPreserveFollowOpacity(y)
            : void 0,
      });
    }
    isLead() {
      const h = this.getStack();
      return h ? h.lead === this : !0;
    }
    getLead() {
      const { layoutId: h } = this.options;
      return h ? this.getStack()?.lead || this : this;
    }
    getPrevLead() {
      const { layoutId: h } = this.options;
      return h ? this.getStack()?.prevLead : void 0;
    }
    getStack() {
      const { layoutId: h } = this.options;
      if (h) return this.root.sharedNodes.get(h);
    }
    promote({ needsReset: h, transition: y, preserveFollowOpacity: g } = {}) {
      const m = this.getStack();
      m && m.promote(this, g),
        h && ((this.projectionDelta = void 0), (this.needsReset = !0)),
        y && this.setOptions({ transition: y });
    }
    relegate() {
      const h = this.getStack();
      return h ? h.relegate(this) : !1;
    }
    resetSkewAndRotation() {
      const { visualElement: h } = this.options;
      if (!h) return;
      let y = !1;
      const { latestValues: g } = h;
      if (
        ((g.z ||
          g.rotate ||
          g.rotateX ||
          g.rotateY ||
          g.rotateZ ||
          g.skewX ||
          g.skewY) &&
          (y = !0),
        !y)
      )
        return;
      const m = {};
      g.z && Qr("z", h, m, this.animationValues);
      for (let v = 0; v < Zr.length; v++)
        Qr(`rotate${Zr[v]}`, h, m, this.animationValues),
          Qr(`skew${Zr[v]}`, h, m, this.animationValues);
      h.render();
      for (const v in m)
        h.setStaticValue(v, m[v]),
          this.animationValues && (this.animationValues[v] = m[v]);
      h.scheduleRender();
    }
    applyProjectionStyles(h, y) {
      if (!this.instance || this.isSVG) return;
      if (!this.isVisible) {
        h.visibility = "hidden";
        return;
      }
      const g = this.getTransformTemplate();
      if (this.needsReset) {
        (this.needsReset = !1),
          (h.visibility = ""),
          (h.opacity = ""),
          (h.pointerEvents = Fs(y?.pointerEvents) || ""),
          (h.transform = g ? g(this.latestValues, "") : "none");
        return;
      }
      const m = this.getLead();
      if (!this.projectionDelta || !this.layout || !m.target) {
        this.options.layoutId &&
          ((h.opacity =
            this.latestValues.opacity !== void 0
              ? this.latestValues.opacity
              : 1),
          (h.pointerEvents = Fs(y?.pointerEvents) || "")),
          this.hasProjected &&
            !ma(this.latestValues) &&
            ((h.transform = g ? g({}, "") : "none"), (this.hasProjected = !1));
        return;
      }
      h.visibility = "";
      const v = m.animationValues || m.latestValues;
      this.applyTransformsToTarget();
      let b = UT(this.projectionDeltaWithTransform, this.treeScale, v);
      g && (b = g(v, b)), (h.transform = b);
      const { x: T, y: R } = this.projectionDelta;
      (h.transformOrigin = `${T.origin * 100}% ${R.origin * 100}% 0`),
        m.animationValues
          ? (h.opacity =
              m === this
                ? v.opacity ?? this.latestValues.opacity ?? 1
                : this.preserveOpacity
                ? this.latestValues.opacity
                : v.opacityExit)
          : (h.opacity =
              m === this
                ? v.opacity !== void 0
                  ? v.opacity
                  : ""
                : v.opacityExit !== void 0
                ? v.opacityExit
                : 0);
      for (const U in rc) {
        if (v[U] === void 0) continue;
        const { correct: H, applyTo: Z, isCSSVariable: L } = rc[U],
          G = b === "none" ? v[U] : H(v[U], m);
        if (Z) {
          const q = Z.length;
          for (let tt = 0; tt < q; tt++) h[Z[tt]] = G;
        } else
          L ? (this.options.visualElement.renderState.vars[U] = G) : (h[U] = G);
      }
      this.options.layoutId &&
        (h.pointerEvents = m === this ? Fs(y?.pointerEvents) || "" : "none");
    }
    clearSnapshot() {
      this.resumeFrom = this.snapshot = void 0;
    }
    resetTree() {
      this.root.nodes.forEach((h) => h.currentAnimation?.stop()),
        this.root.nodes.forEach(hg),
        this.root.sharedNodes.clear();
    }
  };
}
function qT(i) {
  i.updateLayout();
}
function YT(i) {
  const l = i.resumeFrom?.snapshot || i.snapshot;
  if (i.isLead() && i.layout && l && i.hasListeners("didUpdate")) {
    const { layoutBox: u, measuredBox: r } = i.layout,
      { animationType: c } = i.options,
      d = l.source !== i.layout.source;
    c === "size"
      ? He((v) => {
          const b = d ? l.measuredBox[v] : l.layoutBox[v],
            T = oe(b);
          (b.min = u[v].min), (b.max = b.min + T);
        })
      : t0(c, l.layoutBox, u) &&
        He((v) => {
          const b = d ? l.measuredBox[v] : l.layoutBox[v],
            T = oe(u[v]);
          (b.max = b.min + T),
            i.relativeTarget &&
              !i.currentAnimation &&
              ((i.isProjectionDirty = !0),
              (i.relativeTarget[v].max = i.relativeTarget[v].min + T));
        });
    const h = ui();
    ml(h, u, l.layoutBox);
    const y = ui();
    d ? ml(y, i.applyTransform(r, !0), l.measuredBox) : ml(y, u, l.layoutBox);
    const g = !Wy(h);
    let m = !1;
    if (!i.resumeFrom) {
      const v = i.getClosestProjectingParent();
      if (v && !v.resumeFrom) {
        const { snapshot: b, layout: T } = v;
        if (b && T) {
          const R = kt();
          nu(R, l.layoutBox, b.layoutBox);
          const U = kt();
          nu(U, u, T.layoutBox),
            Py(R, U) || (m = !0),
            v.options.layoutRoot &&
              ((i.relativeTarget = U),
              (i.relativeTargetOrigin = R),
              (i.relativeParent = v));
        }
      }
    }
    i.notifyListeners("didUpdate", {
      layout: u,
      snapshot: l,
      delta: y,
      layoutDelta: h,
      hasLayoutChanged: g,
      hasRelativeLayoutChanged: m,
    });
  } else if (i.isLead()) {
    const { onExitComplete: u } = i.options;
    u && u();
  }
  i.options.transition = void 0;
}
function GT(i) {
  i.parent &&
    (i.isProjecting() || (i.isProjectionDirty = i.parent.isProjectionDirty),
    i.isSharedProjectionDirty ||
      (i.isSharedProjectionDirty = !!(
        i.isProjectionDirty ||
        i.parent.isProjectionDirty ||
        i.parent.isSharedProjectionDirty
      )),
    i.isTransformDirty || (i.isTransformDirty = i.parent.isTransformDirty));
}
function XT(i) {
  i.isProjectionDirty = i.isSharedProjectionDirty = i.isTransformDirty = !1;
}
function ZT(i) {
  i.clearSnapshot();
}
function hg(i) {
  i.clearMeasurements();
}
function dg(i) {
  i.isLayoutDirty = !1;
}
function QT(i) {
  const { visualElement: l } = i.options;
  l && l.getProps().onBeforeLayoutMeasure && l.notify("BeforeLayoutMeasure"),
    i.resetTransform();
}
function mg(i) {
  i.finishAnimation(),
    (i.targetDelta = i.relativeTarget = i.target = void 0),
    (i.isProjectionDirty = !0);
}
function KT(i) {
  i.resolveTargetDelta();
}
function JT(i) {
  i.calcProjection();
}
function kT(i) {
  i.resetSkewAndRotation();
}
function FT(i) {
  i.removeLeadSnapshot();
}
function pg(i, l, u) {
  (i.translate = Nt(l.translate, 0, u)),
    (i.scale = Nt(l.scale, 1, u)),
    (i.origin = l.origin),
    (i.originPoint = l.originPoint);
}
function gg(i, l, u, r) {
  (i.min = Nt(l.min, u.min, r)), (i.max = Nt(l.max, u.max, r));
}
function WT(i, l, u, r) {
  gg(i.x, l.x, u.x, r), gg(i.y, l.y, u.y, r);
}
function PT(i) {
  return i.animationValues && i.animationValues.opacityExit !== void 0;
}
const $T = { duration: 0.45, ease: [0.4, 0, 0.1, 1] },
  yg = (i) =>
    typeof navigator < "u" &&
    navigator.userAgent &&
    navigator.userAgent.toLowerCase().includes(i),
  vg = yg("applewebkit/") && !yg("chrome/") ? Math.round : qe;
function bg(i) {
  (i.min = vg(i.min)), (i.max = vg(i.max));
}
function IT(i) {
  bg(i.x), bg(i.y);
}
function t0(i, l, u) {
  return (
    i === "position" || (i === "preserve-aspect" && !uT(cg(l), cg(u), 0.2))
  );
}
function tx(i) {
  return i !== i.root && i.scroll?.wasRoot;
}
const ex = Iy({
    attachResizeListener: (i, l) => bl(i, "resize", l),
    measureScroll: () => ({
      x: document.documentElement.scrollLeft || document.body.scrollLeft,
      y: document.documentElement.scrollTop || document.body.scrollTop,
    }),
    checkIsScrollRoot: () => !0,
  }),
  Kr = { current: void 0 },
  e0 = Iy({
    measureScroll: (i) => ({ x: i.scrollLeft, y: i.scrollTop }),
    defaultParent: () => {
      if (!Kr.current) {
        const i = new ex({});
        i.mount(window), i.setOptions({ layoutScroll: !0 }), (Kr.current = i);
      }
      return Kr.current;
    },
    resetTransform: (i, l) => {
      i.style.transform = l !== void 0 ? l : "none";
    },
    checkIsScrollRoot: (i) => window.getComputedStyle(i).position === "fixed",
  }),
  nx = {
    pan: { Feature: xT },
    drag: { Feature: TT, ProjectionNode: e0, MeasureLayout: Jy },
  };
function Sg(i, l, u) {
  const { props: r } = i;
  i.animationState &&
    r.whileHover &&
    i.animationState.setActive("whileHover", u === "Start");
  const c = "onHover" + u,
    d = r[c];
  d && Ot.postRender(() => d(l, Al(l)));
}
class ax extends Jn {
  mount() {
    const { current: l } = this.node;
    l &&
      (this.unmount = MS(
        l,
        (u, r) => (Sg(this.node, r, "Start"), (c) => Sg(this.node, c, "End"))
      ));
  }
  unmount() {}
}
class ix extends Jn {
  constructor() {
    super(...arguments), (this.isActive = !1);
  }
  onFocus() {
    let l = !1;
    try {
      l = this.node.current.matches(":focus-visible");
    } catch {
      l = !0;
    }
    !l ||
      !this.node.animationState ||
      (this.node.animationState.setActive("whileFocus", !0),
      (this.isActive = !0));
  }
  onBlur() {
    !this.isActive ||
      !this.node.animationState ||
      (this.node.animationState.setActive("whileFocus", !1),
      (this.isActive = !1));
  }
  mount() {
    this.unmount = Sl(
      bl(this.node.current, "focus", () => this.onFocus()),
      bl(this.node.current, "blur", () => this.onBlur())
    );
  }
  unmount() {}
}
function Tg(i, l, u) {
  const { props: r } = i;
  if (i.current instanceof HTMLButtonElement && i.current.disabled) return;
  i.animationState &&
    r.whileTap &&
    i.animationState.setActive("whileTap", u === "Start");
  const c = "onTap" + (u === "End" ? "" : u),
    d = r[c];
  d && Ot.postRender(() => d(l, Al(l)));
}
class lx extends Jn {
  mount() {
    const { current: l } = this.node;
    l &&
      (this.unmount = zS(
        l,
        (u, r) => (
          Tg(this.node, r, "Start"),
          (c, { success: d }) => Tg(this.node, c, d ? "End" : "Cancel")
        ),
        { useGlobalTarget: this.node.props.globalTapTarget }
      ));
  }
  unmount() {}
}
const yc = new WeakMap(),
  Jr = new WeakMap(),
  sx = (i) => {
    const l = yc.get(i.target);
    l && l(i);
  },
  ux = (i) => {
    i.forEach(sx);
  };
function ox({ root: i, ...l }) {
  const u = i || document;
  Jr.has(u) || Jr.set(u, {});
  const r = Jr.get(u),
    c = JSON.stringify(l);
  return r[c] || (r[c] = new IntersectionObserver(ux, { root: i, ...l })), r[c];
}
function rx(i, l, u) {
  const r = ox(l);
  return (
    yc.set(i, u),
    r.observe(i),
    () => {
      yc.delete(i), r.unobserve(i);
    }
  );
}
const cx = { some: 0, all: 1 };
class fx extends Jn {
  constructor() {
    super(...arguments), (this.hasEnteredView = !1), (this.isInView = !1);
  }
  startObserver() {
    this.unmount();
    const { viewport: l = {} } = this.node.getProps(),
      { root: u, margin: r, amount: c = "some", once: d } = l,
      h = {
        root: u ? u.current : void 0,
        rootMargin: r,
        threshold: typeof c == "number" ? c : cx[c],
      },
      y = (g) => {
        const { isIntersecting: m } = g;
        if (
          this.isInView === m ||
          ((this.isInView = m), d && !m && this.hasEnteredView)
        )
          return;
        m && (this.hasEnteredView = !0),
          this.node.animationState &&
            this.node.animationState.setActive("whileInView", m);
        const { onViewportEnter: v, onViewportLeave: b } = this.node.getProps(),
          T = m ? v : b;
        T && T(g);
      };
    return rx(this.node.current, h, y);
  }
  mount() {
    this.startObserver();
  }
  update() {
    if (typeof IntersectionObserver > "u") return;
    const { props: l, prevProps: u } = this.node;
    ["amount", "margin", "root"].some(hx(l, u)) && this.startObserver();
  }
  unmount() {}
}
function hx({ viewport: i = {} }, { viewport: l = {} } = {}) {
  return (u) => i[u] !== l[u];
}
const dx = {
    inView: { Feature: fx },
    tap: { Feature: lx },
    focus: { Feature: ix },
    hover: { Feature: ax },
  },
  mx = { layout: { ProjectionNode: e0, MeasureLayout: Jy } },
  px = { ...eT, ...dx, ...nx, ...mx },
  Ht = y2(px, j2),
  gx = { hidden: {}, visible: { transition: { staggerChildren: 0.2 } } },
  kr = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };
function yx() {
  return E.jsxs("div", {
    className: "relative md:p-[5vw] pb-10 overflow-hidden",
    id: "About",
    children: [
      E.jsx("img", {
        src: "/images/about-bg.png",
        alt: "",
        className: "absolute left-0 top-[-15vw] w-full md:block hidden",
      }),
      E.jsx("img", {
        src: "/images/chicken.png",
        alt: "",
        className:
          "absolute left-0 top-0 md:w-[90%] w-full md:scale-100 scale-200 animate-spin [animation-duration:10s]",
      }),
      E.jsx("img", {
        src: "/images/egg.png",
        className:
          "absolute left-[7vw] top-10 z-40 md:top-[5vw] w-12 animate-spin [animation-duration:5s]",
      }),
      E.jsx("img", {
        src: "/images/egg.png",
        className:
          "absolute left-[70vw] md:left-[37vw] top-[10vw] w-16 z-30 animate-spin [animation-duration:10s]",
      }),
      E.jsx("img", {
        src: "/images/egg.png",
        className:
          "absolute left-[5vw] top-[70vw] md:top-[30vw] w-12 z-30 animate-spin [animation-duration:6s]",
      }),
      E.jsx("img", {
        src: "/images/pump1.png",
        alt: "",
        className:
          "pump-animation absolute left-0 bottom-0 w-[15vw] z-30 md:block hidden",
      }),
      E.jsxs("div", {
        className: "grid lg:grid-cols-2 md:gap-10 relative z-20",
        children: [
          E.jsx(Ht.div, {
            initial: { scale: 0.8, opacity: 0 },
            whileInView: { scale: 1, opacity: 1 },
            viewport: { once: !0, amount: 0.5 },
            transition: { duration: 1, ease: "easeOut" },
            children: E.jsx("img", {
              src: "/images/about.png",
              alt: "",
              className: "slow-shake",
            }),
          }),
          E.jsxs(Ht.div, {
            className: "flex flex-col justify-center md:p-0 px-10 w-full",
            variants: gx,
            initial: "hidden",
            whileInView: "visible",
            viewport: { once: !0, amount: 0.3 },
            children: [
              E.jsx(Ht.img, {
                src: "/images/about-heading.png",
                alt: "",
                className: "lg:w-[30vw] md:w-[60vw] w-full mb-5",
                variants: kr,
              }),
              E.jsxs(Ht.p, {
                variants: kr,
                className: "text-xl text-white",
                children: [
                  "This is Marv - Slightly shy and likes to dress up.",
                  E.jsx("br", {}),
                  E.jsx("br", {}),
                  "Marv is an anthropomorphic frog who seeks to become the ideal digital frog. As a variation of Pepe the Frog, Marv stands out with his unique personality and origin. Slightly shy yet fond of dressing up in various outfits, Marv was born on the Finnish board Ylilauta, just like many other mainstream memes.",
                  E.jsx("br", {}),
                  E.jsx("br", {}),
                  "Marv is tired of seeing everyone create uninspired, low quality derivative memes. He exposes cringe cultures and weak frog breeds. It’s time for Marv to dress up, join the other frogs, and take over the dogs. Be a proud frog, be a MARV!",
                ],
              }),
              E.jsxs(Ht.div, {
                className: "flex items-center gap-5 mt-5",
                variants: kr,
                children: [
                  E.jsx("a", {
                    href: "https://t.me/marv_portal",
                    target: "_blank",
                    children: E.jsx("img", {
                      src: "/images/social1.png",
                      alt: "",
                      className:
                        "lg:w-[4vw] md:w-[10vw] w-16 transition-all duration-200 hover:scale-105",
                    }),
                  }),
                  E.jsx("a", {
                    href: "http://x.com/marcoin_X",
                    target: "_blank",
                    children: E.jsx("img", {
                      src: "/images/social2.png",
                      alt: "",
                      className:
                        "lg:w-[4vw] md:w-[10vw] w-16 transition-all duration-200 hover:scale-105",
                    }),
                  }),
                  E.jsx("a", {
                    href: "https://knowyourmeme.com/memes/marv",
                    target: "_blank",
                    className:
                      "px-10 py-3 block bg-[#F8A215] shadow-[0px_4px_0px_0px_rgba(0,0,0,1)] text-white rounded-full border-2 border-black transition-all duration-200 hover:bg-black",
                    children: "KYM",
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
    ],
  });
}
var Ks = {},
  xg;
function vx() {
  if (xg) return Ks;
  xg = 1;
  function i(d) {
    if (typeof window > "u") return;
    const h = document.createElement("style");
    return (
      h.setAttribute("type", "text/css"),
      (h.innerHTML = d),
      document.head.appendChild(h),
      d
    );
  }
  Object.defineProperty(Ks, "__esModule", { value: !0 });
  var l = au();
  function u(d) {
    return d && typeof d == "object" && "default" in d ? d : { default: d };
  }
  var r = u(l);
  i(`.rfm-marquee-container {
  overflow-x: hidden;
  display: flex;
  flex-direction: row;
  position: relative;
  width: var(--width);
  transform: var(--transform);
}
.rfm-marquee-container:hover div {
  animation-play-state: var(--pause-on-hover);
}
.rfm-marquee-container:active div {
  animation-play-state: var(--pause-on-click);
}

.rfm-overlay {
  position: absolute;
  width: 100%;
  height: 100%;
}
.rfm-overlay::before, .rfm-overlay::after {
  background: linear-gradient(to right, var(--gradient-color), rgba(255, 255, 255, 0));
  content: "";
  height: 100%;
  position: absolute;
  width: var(--gradient-width);
  z-index: 2;
  pointer-events: none;
  touch-action: none;
}
.rfm-overlay::after {
  right: 0;
  top: 0;
  transform: rotateZ(180deg);
}
.rfm-overlay::before {
  left: 0;
  top: 0;
}

.rfm-marquee {
  flex: 0 0 auto;
  min-width: var(--min-width);
  z-index: 1;
  display: flex;
  flex-direction: row;
  align-items: center;
  animation: scroll var(--duration) linear var(--delay) var(--iteration-count);
  animation-play-state: var(--play);
  animation-delay: var(--delay);
  animation-direction: var(--direction);
}
@keyframes scroll {
  0% {
    transform: translateX(0%);
  }
  100% {
    transform: translateX(-100%);
  }
}

.rfm-initial-child-container {
  flex: 0 0 auto;
  display: flex;
  min-width: auto;
  flex-direction: row;
  align-items: center;
}

.rfm-child {
  transform: var(--transform);
}`);
  const c = l.forwardRef(function (
    {
      style: h = {},
      className: y = "",
      autoFill: g = !1,
      play: m = !0,
      pauseOnHover: v = !1,
      pauseOnClick: b = !1,
      direction: T = "left",
      speed: R = 50,
      delay: U = 0,
      loop: H = 0,
      gradient: Z = !1,
      gradientColor: L = "white",
      gradientWidth: G = 200,
      onFinish: q,
      onCycleComplete: tt,
      onMount: F,
      children: $,
    },
    X
  ) {
    const [W, vt] = l.useState(0),
      [Dt, Lt] = l.useState(0),
      [Vt, we] = l.useState(1),
      [ae, ie] = l.useState(!1),
      O = l.useRef(null),
      B = X || O,
      Q = l.useRef(null),
      st = l.useCallback(() => {
        if (Q.current && B.current) {
          const et = B.current.getBoundingClientRect(),
            pt = Q.current.getBoundingClientRect();
          let Rt = et.width,
            St = pt.width;
          (T === "up" || T === "down") && ((Rt = et.height), (St = pt.height)),
            we(g && Rt && St && St < Rt ? Math.ceil(Rt / St) : 1),
            vt(Rt),
            Lt(St);
        }
      }, [g, B, T]);
    l.useEffect(() => {
      if (ae && (st(), Q.current && B.current)) {
        const et = new ResizeObserver(() => st());
        return (
          et.observe(B.current),
          et.observe(Q.current),
          () => {
            et && et.disconnect();
          }
        );
      }
    }, [st, B, ae]),
      l.useEffect(() => {
        st();
      }, [st, $]),
      l.useEffect(() => {
        ie(!0);
      }, []),
      l.useEffect(() => {
        typeof F == "function" && F();
      }, []);
    const rt = l.useMemo(
        () => (g ? (Dt * Vt) / R : Dt < W ? W / R : Dt / R),
        [g, W, Dt, Vt, R]
      ),
      A = l.useMemo(
        () =>
          Object.assign(Object.assign({}, h), {
            "--pause-on-hover": !m || v ? "paused" : "running",
            "--pause-on-click": !m || (v && !b) || b ? "paused" : "running",
            "--width": T === "up" || T === "down" ? "100vh" : "100%",
            "--transform":
              T === "up"
                ? "rotate(-90deg)"
                : T === "down"
                ? "rotate(90deg)"
                : "none",
          }),
        [h, m, v, b, T]
      ),
      _ = l.useMemo(
        () => ({
          "--gradient-color": L,
          "--gradient-width": typeof G == "number" ? `${G}px` : G,
        }),
        [L, G]
      ),
      Y = l.useMemo(
        () => ({
          "--play": m ? "running" : "paused",
          "--direction": T === "left" ? "normal" : "reverse",
          "--duration": `${rt}s`,
          "--delay": `${U}s`,
          "--iteration-count": H ? `${H}` : "infinite",
          "--min-width": g ? "auto" : "100%",
        }),
        [m, T, rt, U, H, g]
      ),
      K = l.useMemo(
        () => ({
          "--transform":
            T === "up"
              ? "rotate(90deg)"
              : T === "down"
              ? "rotate(-90deg)"
              : "none",
        }),
        [T]
      ),
      it = l.useCallback(
        (et) =>
          [...Array(Number.isFinite(et) && et >= 0 ? et : 0)].map((pt, Rt) =>
            r.default.createElement(
              l.Fragment,
              { key: Rt },
              l.Children.map($, (St) =>
                r.default.createElement(
                  "div",
                  { style: K, className: "rfm-child" },
                  St
                )
              )
            )
          ),
        [K, $]
      );
    return ae
      ? r.default.createElement(
          "div",
          { ref: B, style: A, className: "rfm-marquee-container " + y },
          Z &&
            r.default.createElement("div", {
              style: _,
              className: "rfm-overlay",
            }),
          r.default.createElement(
            "div",
            {
              className: "rfm-marquee",
              style: Y,
              onAnimationIteration: tt,
              onAnimationEnd: q,
            },
            r.default.createElement(
              "div",
              { className: "rfm-initial-child-container", ref: Q },
              l.Children.map($, (et) =>
                r.default.createElement(
                  "div",
                  { style: K, className: "rfm-child" },
                  et
                )
              )
            ),
            it(Vt - 1)
          ),
          r.default.createElement(
            "div",
            { className: "rfm-marquee", style: Y },
            it(Vt)
          )
        )
      : null;
  });
  return (Ks.default = c), Ks;
}
var bx = vx();
const n0 = D1(bx),
  Sx = [
    "/images/slide1.jpg",
    "/images/slide2.jpg",
    "/images/slide3.jpg",
    "/images/slide4.jpg",
    "/images/slide5.jpg",
    "/images/slide6.jpg",
    "/images/slide7.jpg",
    "/images/slide8.jpg",
    "/images/slide9.jpg",
    "/images/slide10.jpg",
    "/images/slide11.jpg",
    "/images/slide12.jpg",
    "/images/slide13.jpg",
    "/images/slide14.jpg",
    "/images/slide15.jpg",
    "/images/slide16.jpg",
    "/images/slide17.jpg",
    "/images/slide18.jpg",
    "/images/slide19.jpg",
    "/images/slide20.jpg",
  ];
function Tx() {
  return E.jsx(n0, {
    className: "bg-white border-y-2 border py-5 relative z-20",
    children: E.jsx("div", {
      className: "flex items-center",
      children: Sx.map((i, l) =>
        E.jsx(
          "div",
          {
            className: "ml-5",
            children: E.jsx("img", {
              src: i,
              alt: "",
              className:
                "lg:w-[20vw] md:w-[40vw] w-[70vw] md:h-[40vw] lg:h-[20vw] h-[70vw] object-cover border-2 border-black rounded-2xl",
            }),
          },
          l
        )
      ),
    }),
  });
}
function xx() {
  const [i, l] = k.useState(!1);
  return E.jsx("div", {
    children: E.jsxs("nav", {
      className:
        "flex items-center justify-between absolute top-5 w-[90%] lg:w-[80%] left-1/2 transform -translate-x-1/2 bg-white shadow-[0px_4px_0px_0px_rgba(0,0,0,1)] z-50 rounded-full md:px-5 border-2 border-black",
      children: [
        E.jsxs("div", {
          className: "lg:flex hidden items-center gap-5",
          children: [
            E.jsx("a", {
              href: "#About",
              className: "transition-all duration-100 hover:text-red-500",
              children: "About",
            }),
            // E.jsx("a", {
            //   href: "#Twitter",
            //   className: "transition-all duration-100 hover:text-red-500",
            //   children: "Twitter",
            // }),
            E.jsx("a", {
              href: "#MarvTV",
              className: "transition-all duration-100 hover:text-red-500",
              children: "MarvTV",
            }),
            E.jsx("a", {
              href: "#Howtobuy",
              className: "transition-all duration-100 hover:text-red-500",
              children: "Howtobuy",
            }),
            E.jsx("a", {
              href: "#Tokenomics",
              className: "transition-all duration-100 hover:text-red-500",
              children: "Tokenomics",
            }),
          ],
        }),
        E.jsx("div", {
          className: "relative z-50",
          children: E.jsx("img", {
            src: "/images/logo.png",
            alt: "",
            className: "md:w-14 w-10 scale-150",
          }),
        }),
        E.jsxs("div", {
          className: "flex items-center gap-2 md:pr-0 pr-5",
          children: [
            E.jsx("a", {
              href: "https://t.me/marv_portal",
              target: "_blank",
              children: E.jsx("img", {
                src: "/images/social1.png",
                alt: "",
                className:
                  "md:w-10 w-7 transition-all duration-200 hover:scale-105",
              }),
            }),
            E.jsx("a", {
              href: "http://x.com/marcoin_X",
              target: "_blank",
              children: E.jsx("img", {
                src: "/images/social2.png",
                alt: "",
                className:
                  "md:w-10 w-7 transition-all duration-200 hover:scale-105",
              }),
            }),
            // E.jsx("a", {
            //   href: "https://www.coingecko.com/en/coins/marv",
            //   target: "_blank",
            //   children: E.jsx("img", {
            //     src: "/images/social3.png",
            //     alt: "",
            //     className:
            //       "md:w-10 w-7 transition-all duration-200 hover:scale-105",
            //   }),
            // }),
            // E.jsx("a", {
            //   href: "https://coinmarketcap.com/currencies/marv/",
            //   target: "_blank",
            //   children: E.jsx("img", {
            //     src: "/images/social4.png",
            //     alt: "",
            //     className:
            //       "md:w-10 w-7 transition-all duration-200 hover:scale-105",
            //   }),
            // }),
            // E.jsx("a", {
            //   href: "https://www.dextools.io/app/en/token/marv?t=1765829789288",
            //   target: "_blank",
            //   children: E.jsx("img", {
            //     src: "/images/social5.png",
            //     alt: "",
            //     className:
            //       "md:w-10 w-7 transition-all duration-200 hover:scale-105",
            //   }),
            // }),
            E.jsx("a", {
              href: "https://app.uniswap.org/swap?outputCurrency=0xComingSoon&chain=ethereum",
              className:
                "md:block hidden px-10 py-2 bg-[#E6380B] text-white rounded-full border-2 border-black transition-all duration-200 hover:bg-black ",
              target: "_blank",
              children: "BUY NOW",
            }),
            E.jsx("button", {
              onClick: () => l(!i),
              className: "lg:hidden font-bold",
              children: E.jsxs("svg", {
                width: "29",
                height: "20",
                viewBox: "0 0 29 20",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                children: [
                  E.jsx("path", {
                    d: "M1.5 1.5H27.5",
                    stroke: "black",
                    strokeWidth: "3",
                    "stroke-linecap": "round",
                  }),
                  E.jsx("path", {
                    d: "M1.5 10H27.5",
                    stroke: "black",
                    strokeWidth: "3",
                    "stroke-linecap": "round",
                  }),
                  E.jsx("path", {
                    d: "M1.5 18.5H27.5",
                    stroke: "black",
                    strokeWidth: "3",
                    "stroke-linecap": "round",
                  }),
                ],
              }),
            }),
          ],
        }),
        E.jsx(LS, {
          children:
            i &&
            E.jsx(Ht.div, {
              initial: { y: "-100%" },
              animate: { y: 0 },
              exit: { y: "-150%" },
              transition: { type: "spring", stiffness: 300, damping: 30 },
              className:
                "fixed top-11 left-1/2 shadow-[0px_4px_0px_0px_rgba(0,0,0,1)] transform -translate-x-1/2 w-[85%] bg-white border-x border-b-2 border-black p-6 rounded-b-3xl z-30",
              children: E.jsxs("div", {
                className: "flex flex-col gap-4 text-center",
                children: [
                  E.jsx("a", {
                    href: "#About",
                    className: "text-lg",
                    children: "About",
                  }),
                  // E.jsx("a", {
                  //   href: "#Twitter",
                  //   className: "text-lg",
                  //   children: "Twitter",
                  // }),
                  E.jsx("a", {
                    href: "#MarvTV",
                    className: "text-lg",
                    children: "MarvTV",
                  }),
                  E.jsx("a", {
                    href: "#Howtobuy",
                    className: "text-lg",
                    children: "Howtobuy",
                  }),
                  E.jsx("a", {
                    href: "#Tokenomics",
                    className: "text-lg",
                    children: "Tokenomics",
                  }),
                  E.jsx("a", {
                    href: "https://app.uniswap.org/swap?outputCurrency=0xComingSoon&chain=ethereum",
                    target: "_blank",
                    className:
                      "mt-4 px-6 py-3 bg-[#E6380B] text-white rounded-full border-2 border-black",
                    children: "BUY NOW",
                  }),
                ],
              }),
            }),
        }),
      ],
    }),
  });
}
function Ax() {
  return E.jsxs("div", {
    className: "relative md:h-[70vw] lg:h-[50vw] h-[150vw] overflow-hidden",
    children: [
      E.jsx(xx, {}),
      E.jsx("video", {
        className: "w-full h-full object-cover md:object-top object-left",
        autoPlay: !0,
        muted: !0,
        loop: !0,
        playsInline: !0,
        children: E.jsx("source", {
          src: "/images/webheader.mp4",
          type: "video/mp4",
        }),
      }),
      E.jsx(Ht.div, {
        initial: { scale: 0.8, opacity: 0 },
        whileInView: { scale: 1, opacity: 1 },
        viewport: { once: !0, amount: 0.5 },
        transition: { duration: 1, ease: "easeOut" },
        className:
          "absolute left-[25vw] md:left-[5vw] top-[30vw] md:top-[20vw] lg:top-[10vw]",
        children: E.jsx("img", {
          src: "/images/heading.png",
          alt: "",
          className: "md:w-[20vw] w-[70%]",
        }),
      }),
      E.jsx("a", {
        href: "https://app.uniswap.org/swap?outputCurrency=0xComingSoon&chain=ethereum",
        target: "_blank",
        className:
          "px-10 py-3 bg-[#F8A215] shadow-[0px_4px_0px_0px_rgba(0,0,0,1)] text-white rounded-full border-2 border-black transition-all duration-200 hover:bg-black absolute left-[28vw] md:left-[5vw] bottom-[5vw]",
        children: "BUY NOW",
      }),
    ],
  });
}
function Ex() {
  return E.jsxs(E.Fragment, {
    children: [
      E.jsx(Ht.img, {
        src: "/images/bee1.png",
        alt: "",
        className:
          "absolute md:w-[4vw] w-6 top-[410vw] md:top-[38vw] md:left-[7vw] left-2",
        animate: { y: [0, -10, 0] },
        transition: { duration: 2, repeat: 1 / 0, ease: "easeInOut" },
      }),
      E.jsx(Ht.img, {
        src: "/images/bee1.png",
        alt: "",
        className:
          "absolute md:w-[4vw] w-6 top-[382vw] md:top-[33vw] md:left-[20vw] left-20",
        animate: { y: [0, -10, 0] },
        transition: { duration: 2.5, repeat: 1 / 0, ease: "easeInOut" },
      }),
      E.jsx(Ht.img, {
        src: "/images/bee1.png",
        alt: "",
        className:
          "absolute w-[10vw] top-[25vw] right-[20vw] scale-x-[-1] md:block hidden",
        animate: { y: [0, -15, 0] },
        transition: { duration: 3, repeat: 1 / 0, ease: "easeInOut" },
      }),
      E.jsx(Ht.img, {
        src: "/images/bee2.png",
        alt: "",
        className:
          "absolute md:w-[5vw] w-16 top-[350vw] md:top-[22vw] left-10 md:left-[40vw] z-40",
        animate: {
          x: ["0%", "20%", "-20%", "0%"],
          y: [0, -5, 5, 0],
          rotate: [0, 10, -10, 0],
        },
        transition: { duration: 6, repeat: 1 / 0, ease: "easeInOut" },
      }),
      E.jsx("img", {
        src: "/images/bee3.png",
        alt: "",
        className:
          "absolute w-20 md:w-[7vw] top-[405vw] md:top-[55vw] lg:top-[36vw] left-[25vw] md:left-[40vw] z-30",
      }),
      E.jsx("img", {
        src: "/images/bee4.png",
        alt: "",
        className:
          "absolute w-8 md:w-[5vw] top-[377vw] md:top-20 left-2 md:left-14 z-30",
      }),
      E.jsx("img", {
        src: "/images/bee5.png",
        alt: "",
        className:
          "absolute w-52 md:w-[15vw] top-[380vw] md:top-[50vw] lg:top-[30vw] left-[43vw] md:left-[55vw]",
      }),
    ],
  });
}
const Mx = [
  {
    image: "/images/chain1.png",
    description:
      "Download metamask or your wallet of choice from the app store or google play store. Desktop users, download the google chrome extension by going to metamask.io.",
  },
  {
    image: "/images/chain2.png",
    description:
      "You can deposit $ETH or buy into your metamask wallet using any crypto exchange of your choice.",
  },
  {
    image: "/images/chain3.png",
    description:
      "Now swap your ETH to buy $MARV. We have ZERO taxes so you don’t need to worry about buying with a specific slippage",
  },
  {
    image: "/images/chain4.png",
    description: "Lastly Hold onto your $MARV and see your money grow.",
  },
];
function Dx() {
  const i = { hidden: {}, visible: { transition: { staggerChildren: 0.5 } } },
    l = {
      hidden: { opacity: 0, y: 50 },
      visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.9, ease: "easeOut" },
      },
    };
  return E.jsxs("section", {
    className: "md:pt-[5vw] pt-10 px-10 relative",
    id: "Howtobuy",
    children: [
      E.jsx(Ex, {}),
      E.jsxs(Ht.div, {
        initial: "hidden",
        whileInView: "visible",
        viewport: { once: !0, amount: 0.3 },
        variants: i,
        children: [
          E.jsx("img", {
            src: "/images/howtobuyheading.png",
            alt: "",
            className: "mb-5 md:scale-100 scale-110 md:w-[80%] mx-auto",
          }),
          E.jsx("div", {
            className:
              "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 md:mt-[40vw] lg:mt-[25vw]",
            children: Mx.map((u, r) =>
              E.jsxs(
                Ht.div,
                {
                  className:
                    "md:space-y-2 flex flex-col items-center justify-end",
                  variants: l,
                  children: [
                    E.jsx("img", { src: u.image, alt: "" }),
                    E.jsx("p", {
                      className:
                        "bg-white lg:text-lg lg:h-[12vw] 2xl:h-[12vw] 2xl:text-2xl border-2 border-black shadow-[0px_4px_0px_0px_rgba(0,0,0,1)] p-4 rounded-2xl text-base font-semibold",
                      children: u.description,
                    }),
                  ],
                },
                r
              )
            ),
          }),
        ],
      }),
    ],
  });
}
function wx() {
  const i = { hidden: {}, visible: { transition: { staggerChildren: 0.8 } } },
    l = {
      hidden: { opacity: 0, y: 50 },
      visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.9, ease: "easeOut" },
      },
    };
  return E.jsxs(Ht.div, {
    className: "join relative md:h-[70vw] pt-10 md:pt-20",
    initial: "hidden",
    whileInView: "visible",
    viewport: { once: !0, amount: 0.3 },
    variants: i,
    children: [
      E.jsx(Ht.img, {
        src: "/images/joinnow.png",
        alt: "",
        className: "md:w-[60%] w-[90%] mx-auto mb-5",
        variants: l,
      }),
      E.jsxs(Ht.div, {
        className:
          "flex items-center justify-center gap-2 md:mt-0 md:-translate-y-10 mt-5 relative z-30",
        variants: l,
        children: [
          E.jsx("a", {
            href: "https://app.uniswap.org/swap?outputCurrency=0xComingSoon&chain=ethereum",
            target: "_blank",
            className:
              "px-10 py-1.5 md:py-2 lg:py-3 bg-[#F8A215] shadow-[0px_4px_0px_0px_rgba(0,0,0,1)] text-white rounded-full border-2 border-black transition-all duration-200 hover:bg-black ",
            children: "BUY NOW",
          }),
          E.jsx("a", {
            href: "https://t.me/marv_portal",
            target: "_blank",
            children: E.jsx("img", {
              src: "/images/social1.png",
              alt: "",
              className:
                "lg:w-16 md:w-14 w-12 transition-all duration-200 hover:scale-105",
            }),
          }),
          E.jsx("a", {
            href: "http://x.com/marcoin_X",
            target: "_blank",
            children: E.jsx("img", {
              src: "/images/social2.png",
              alt: "",
              className:
                "lg:w-16 md:w-14 w-12 transition-all duration-200 hover:scale-105",
            }),
          }),
        ],
      }),
      E.jsxs(Ht.div, {
        className:
          "flex items-center md:items-end justify-center md:justify-between gap-5 mt-5 w-full relative md:absolute md:bottom-10 left-0 md:left-0",
        variants: l,
        children: [
          E.jsx(Ht.img, {
            src: "images/join-left.png",
            alt: "",
            className: "w-[35%] scale-115 md:block hidden",
            variants: l,
          }),
          E.jsx("img", {
            src: "/images/joinmobile.png",
            alt: "",
            className: "-mt-16 md:hidden block",
          }),
          E.jsx(Ht.img, {
            src: "images/joinmain.png",
            alt: "",
            className:
              "md:w-[30%] -mt-20 md:mt-5 md:translate-y-10 md:-ml-10 md:block hidden",
            variants: l,
          }),
          E.jsx(Ht.img, {
            src: "images/join-right.png",
            alt: "",
            className: "w-[35%] scale-115 md:block hidden",
            variants: l,
          }),
        ],
      }),
    ],
  });
}
function Cx() {
  const i = "0xComingSoon",
    l = () => {
      navigator.clipboard.writeText(i), alert("Address copied!");
    };
  return E.jsxs("div", {
    className: "md:pb-20 p-5 relative z-40 pb-40",
    id: "Tokenomics",
    children: [
      E.jsx("img", {
        src: "/images/tokenheading.png",
        alt: "",
        className: "md:w-[60%] mx-auto mb-5 md:mt-0 mt-20",
      }),
      E.jsxs("div", {
        className: "md:flex hidden items-end justify-center gap-5 mt-[50vw]",
        children: [
          E.jsx("img", {
            src: "/images/lp.png",
            alt: "",
            className: "w-[20%]",
          }),
          E.jsx("img", {
            src: "/images/total-supply.png",
            alt: "",
            className: "w-[30%]",
          }),
          E.jsx("img", {
            src: "/images/tex.png",
            alt: "",
            className: "w-[20%]",
          }),
        ],
      }),
      E.jsxs("div", {
        className: "md:pb-0 pb-[30vw]",
        children: [
          E.jsxs("div", {
            className: "flex flex-col md:hidden items-center justify-center ",
            children: [
              E.jsxs("div", {
                className:
                  "flex items-center justify-center gap-10 mt-[90vw] translate-y-[10vw]",
                children: [
                  E.jsx("img", {
                    src: "/images/lp.png",
                    alt: "",
                    className: "md:w-[20%] w-[40%]",
                  }),
                  E.jsx("img", {
                    src: "/images/tex.png",
                    alt: "",
                    className: "md:w-[15%] w-[40%]",
                  }),
                ],
              }),
              E.jsx("img", {
                src: "/images/total-supply.png",
                alt: "",
                className: "md:w-[30%] w-[80%] translate-y-[70vw]",
              }),
            ],
          }),
          E.jsxs("div", {
            className:
              "flex items-center justify-center gap-2 md:gap-5 mt-5 relative z-50 md:translate-y-0 translate-y-[65vw]",
            children: [
              E.jsx("p", {
                className:
                  "bg-white border-2 text-xs border-black rounded-xl px-5 py-2 font-bold md:text-xl w-fit shadow-[0px_4px_0px_0px_rgba(0,0,0,1)]",
                children: i,
              }),
              E.jsx("button", {
                onClick: l,
                className:
                  "bg-white border-2 border-black rounded-xl p-2 md:p-3 font-bold text-xl w-fit shadow-[0px_4px_0px_0px_rgba(0,0,0,1)] hover:scale-105 transition-transform duration-200",
                children: E.jsx("svg", {
                  width: "15",
                  height: "18",
                  viewBox: "0 0 15 18",
                  fill: "none",
                  xmlns: "http://www.w3.org/2000/svg",
                  children: E.jsx("path", {
                    d: "M15 1.60713V12.5356C15 12.9615 14.8352 13.3706 14.5422 13.6719C14.2492 13.9732 13.8516 14.1428 13.4375 14.1428H12.5V5.46415C12.4969 3.86827 11.239 2.5745 9.68757 2.57141H3.74993V1.60713C3.74993 0.719194 4.44915 0 5.31244 0H13.4375C13.8516 0 14.2492 0.169553 14.5422 0.470898C14.8351 0.772226 15 1.18125 15 1.60713ZM9.68757 3.85722H1.56251C0.699225 3.85722 0 4.57642 0 5.46436V16.3929C0 16.8188 0.164845 17.2278 0.457823 17.5291C0.750785 17.8304 1.14845 18 1.56251 18H9.68757C10.1016 18 10.4993 17.8304 10.7923 17.5291C11.0852 17.2278 11.2501 16.8188 11.2501 16.3929V5.46436C11.2501 5.03847 11.0852 4.62945 10.7923 4.32812C10.4993 4.02679 10.1016 3.85722 9.68757 3.85722Z",
                    fill: "black",
                  }),
                }),
              }),
            ],
          }),
        ],
      }),
    ],
  });
}
function Fr({ className: i }) {
  return E.jsx(n0, {
    className: `${i} bg-[#559A41] border-y-2 border py-3 relative z-20`,
    children: E.jsxs("div", {
      className: "flex items-center gap-5",
      children: [
        E.jsx("img", {
          src: "/images/slideimg.png",
          alt: "",
          className: "md:w-[15vw] w-[25vw]",
        }),
        E.jsx("img", {
          src: "/images/slideimg1.png",
          alt: "",
          className: "md:w-[15vw] w-[25vw]",
        }),
        E.jsx("img", {
          src: "/images/slideimg.png",
          alt: "",
          className: "md:w-[15vw] w-[25vw]",
        }),
        E.jsx("img", {
          src: "/images/slideimg1.png",
          alt: "",
          className: "md:w-[15vw] w-[25vw]",
        }),
        E.jsx("img", {
          src: "/images/slideimg.png",
          alt: "",
          className: "md:w-[15vw] w-[25vw]",
        }),
        E.jsx("img", {
          src: "/images/slideimg1.png",
          alt: "",
          className: "md:w-[15vw] w-[25vw]",
        }),
        E.jsx("img", {
          src: "/images/slideimg.png",
          alt: "",
          className: "md:w-[15vw] w-[25vw]",
        }),
        E.jsx("img", {
          src: "/images/slideimg1.png",
          alt: "",
          className: "md:w-[15vw] w-[25vw]",
        }),
        E.jsx("img", {
          src: "/images/slideimg.png",
          alt: "",
          className: "md:w-[15vw] w-[25vw]",
        }),
        E.jsx("img", {
          src: "/images/slideimg1.png",
          alt: "",
          className: "md:w-[15vw] w-[25vw]",
        }),
        E.jsx("img", {
          src: "/images/slideimg.png",
          alt: "",
          className: "md:w-[15vw] w-[25vw]",
        }),
        E.jsx("img", {
          src: "/images/slideimg1.png",
          alt: "",
          className: "md:w-[15vw] w-[25vw]",
        }),
        E.jsx("img", {
          src: "/images/slideimg.png",
          alt: "",
          className: "md:w-[15vw] w-[25vw]",
        }),
        E.jsx("img", {
          src: "/images/slideimg1.png",
          alt: "",
          className: "md:w-[15vw] w-[25vw]",
        }),
        E.jsx("img", {
          src: "/images/slideimg.png",
          alt: "",
          className: "md:w-[15vw] w-[25vw]",
        }),
        E.jsx("img", {
          src: "/images/slideimg1.png",
          alt: "",
          className: "md:w-[15vw] w-[25vw]",
        }),
        E.jsx("img", {
          src: "/images/slideimg.png",
          alt: "",
          className: "md:w-[15vw] w-[25vw]",
        }),
        E.jsx("img", {
          src: "/images/slideimg1.png",
          alt: "",
          className: "md:w-[15vw] w-[25vw]",
        }),
      ],
    }),
  });
}
function zx() {
  const [i, l] = k.useState(1),
    u = k.useRef(null),
    r = (d) => {
      u.current &&
        (l(d),
        u.current.pause(),
        (u.current.currentTime = 0),
        u.current.load(),
        u.current.play().catch(() => console.log("iOS autoplay blocked")));
    },
    c = () => {
      u.current && ((u.current.currentTime = 0), u.current.play());
    };
  return E.jsxs("div", {
    className: "relative flex items-center md:gap-8 gap-2",
    children: [
      E.jsx("img", {
        src: "/images/tv.png",
        alt: "",
        className: "lg:w-[80%] md:w-[70%] w-[80%]",
      }),
      E.jsx("div", {
        className:
          "absolute lg:w-[25vw] md:w-[22vw] md:h-[15vw] h-[42vw] lg:h-[18vw] object-cover w-[50vw] rounded-2xl overflow-hidden left-[25%] top-[55%] -translate-x-[25%] -translate-y-[55%]",
        children: E.jsx("video", {
          ref: u,
          src: `/images/${i}.mp4`,
          className: "w-full h-full object-cover",
          autoPlay: !0,
          loop: !0,
          playsInline: !0,
          "webkit-playsinline": "true",
          controls: !1,
        }),
      }),
      E.jsxs("div", {
        className:
          "bg-[#CA9E69] border-2 border-[#AA693B] md:p-3 p-2 rounded-2xl",
        children: [
          E.jsx("img", {
            src: "/images/off.png",
            alt: "",
            className: "ml-auto w-3 md:w-6 cursor-pointer",
            onClick: () => u.current?.pause(),
          }),
          E.jsx("img", {
            src: "/images/push.png",
            alt: "",
            className: "lg:w-20 w-14 mx-auto cursor-pointer",
            onClick: c,
          }),
          E.jsx("div", {
            className:
              "grid grid-cols-2 gap-2 md:translate-x-0 -translate-x-0.5 mt-2",
            children: Array.from({ length: 10 }, (d, h) =>
              E.jsx(
                "button",
                {
                  className: `bg-[#202020] border border-white rounded-full text-xs md:text-[10px] w-5 lg:w-8 h-5 lg:h-8 text-white transition hover:bg-red-600 lg:text-lg ${
                    i === h + 1 ? "bg-red-600" : ""
                  }`,
                  onClick: () => r(h + 1),
                  children: h + 1,
                },
                h + 1
              )
            ),
          }),
        ],
      }),
    ],
  });
}
function jx() {
  return E.jsxs("div", {
    className: " lg:p-[5vw] md:p-[3vw] p-[5vw] relative",
    id: "MarvTV",
    children: [
      E.jsx("img", {
        src: "/images/tv-bg.png",
        alt: "",
        className: "absolute left-0 top-0 w-full h-full object-cover",
      }),
      E.jsxs("div", {
        className: "grid md:grid-cols-2 gap-10 relative z-20",
        children: [
          E.jsxs("div", {
            children: [
              E.jsx(Ht.div, {
                initial: { scale: 0.8, opacity: 0 },
                whileInView: { scale: 1, opacity: 1 },
                viewport: { once: !0, amount: 0.5 },
                transition: { duration: 1, ease: "easeOut" },
                children: E.jsx("img", {
                  src: "/images/tv-heading.png",
                  alt: "",
                  className: "md:w-[40vw]",
                }),
              }),
              E.jsx(Ht.div, {
                initial: { scale: 0.8, opacity: 0 },
                whileInView: { scale: 1, opacity: 1 },
                viewport: { once: !0, amount: 0.7 },
                transition: { duration: 1, ease: "easeOut" },
                children: E.jsx("a", {
                  href: "https://app.uniswap.org/swap?outputCurrency=0xComingSoon&chain=ethereum",
                  target: "_blank",
                  className:
                    "block md:mx-0 mx-auto mt-5 w-fit px-10 py-3 bg-[#F8A215] shadow-[0px_4px_0px_0px_rgba(0,0,0,1)] text-white rounded-full border-2 border-black transition-all duration-200 hover:bg-black",
                  children: "BUY NOW",
                }),
              }),
            ],
          }),
          E.jsx(zx, {}),
        ],
      }),
      E.jsx("div", {
        className:
          "flex md:absolute relative md:bottom-0 -bottom-5 md:left-0 left-0 z-20 ",
        children: E.jsx("img", {
          src: "/images/pump2.png",
          alt: "",
          className: "md:w-[35vw] w-[60vw] slow-shake",
        }),
      }),
    ],
  });
}
function Ox() {
  // return E.jsxs("div", {
  //   style: { minHeight: "600px" },
  //   className: "p-10",
  //   id: "Twitter",
  //   children: [
  //     E.jsx("img", {
  //       src: "/images/twitterheading.png",
  //       alt: "",
  //       className: "md:w-[60%] mx-auto mb-5",
  //     }),
  //     E.jsx("div", {
  //       class: "elfsight-app-1ff20990-0d4d-4ac5-aa18-dfa666bb64af",
  //       "data-elfsight-app-lazy": !0,
  //     }),
  //   ],
  // });
}
function Rx() {
  return E.jsxs(E.Fragment, {
    children: [
      E.jsx(Ax, {}),
      E.jsx(Fr, {}),
      E.jsx(yx, {}),
      E.jsx(Tx, {}),
      E.jsx(Ox, {}),
      E.jsx(Fr, {}),
      E.jsx(jx, {}),
      E.jsx(Fr, { className: "border-white" }),
      E.jsxs("div", {
        className: "mainbg relative",
        children: [
          E.jsx(Dx, {}),
          E.jsx(Cx, {}),
          E.jsx("img", {
            src: "/images/joinlayar.png",
            alt: "",
            className:
              " absolute w-full left-0 -bottom-[5vw] md:scale-105 scale-150 md:bottom-[-7vw] lg:-bottom-28 z-30",
          }),
        ],
      }),
      E.jsx(wx, {}),
      E.jsx("footer", {
        className: "text-center py-5 bg-black text-white",
        children: E.jsx("p", {
          children: "© 2026 MARV. All rights reserved",
        }),
      }),
    ],
  });
}
B1.createRoot(document.getElementById("root")).render(
  E.jsx(k.StrictMode, { children: E.jsx(Rx, {}) })
);
