(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [459],
  {
    57999: function (e, t, r) {
      'use strict';
      var n = r(61682);

      function o(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }

      function u(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? o(Object(r), !0).forEach(function (t) {
                n(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : o(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t),
                );
              });
        }
        return e;
      }
      t.default = function (e, t) {
        var r = a.default,
          n = {
            loading: function (e) {
              e.error, e.isLoading;
              return e.pastDelay, null;
            },
          };
        e instanceof Promise
          ? (n.loader = function () {
              return e;
            })
          : 'function' === typeof e
          ? (n.loader = e)
          : 'object' === typeof e && (n = u(u({}, n), e));
        (n = u(u({}, n), t)).loadableGenerated &&
          delete (n = u(u({}, n), n.loadableGenerated)).loadableGenerated;
        if ('boolean' === typeof n.ssr) {
          if (!n.ssr) return delete n.ssr, l(r, n);
          delete n.ssr;
        }
        return r(n);
      };
      i(r(67294));
      var a = i(r(87653));

      function i(e) {
        return e && e.__esModule
          ? e
          : {
              default: e,
            };
      }

      function l(e, t) {
        return delete t.webpack, delete t.modules, e(t);
      }
    },
    519: function (e, t, r) {
      'use strict';
      var n;
      (t.__esModule = !0), (t.LoadableContext = void 0);
      var o = (
        (n = r(67294)) && n.__esModule
          ? n
          : {
              default: n,
            }
      ).default.createContext(null);
      t.LoadableContext = o;
    },
    87653: function (e, t, r) {
      'use strict';
      var n = r(61682),
        o = r(2553),
        u = r(62012);

      function a(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }

      function i(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? a(Object(r), !0).forEach(function (t) {
                n(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : a(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t),
                );
              });
        }
        return e;
      }

      function l(e, t) {
        var r;
        if ('undefined' === typeof Symbol || null == e[Symbol.iterator]) {
          if (
            Array.isArray(e) ||
            (r = (function (e, t) {
              if (!e) return;
              if ('string' === typeof e) return c(e, t);
              var r = Object.prototype.toString.call(e).slice(8, -1);
              'Object' === r && e.constructor && (r = e.constructor.name);
              if ('Map' === r || 'Set' === r) return Array.from(e);
              if (
                'Arguments' === r ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
              )
                return c(e, t);
            })(e)) ||
            (t && e && 'number' === typeof e.length)
          ) {
            r && (e = r);
            var n = 0,
              o = function () {};
            return {
              s: o,
              n: function () {
                return n >= e.length
                  ? {
                      done: !0,
                    }
                  : {
                      done: !1,
                      value: e[n++],
                    };
              },
              e: function (e) {
                throw e;
              },
              f: o,
            };
          }
          throw new TypeError(
            'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
          );
        }
        var u,
          a = !0,
          i = !1;
        return {
          s: function () {
            r = e[Symbol.iterator]();
          },
          n: function () {
            var e = r.next();
            return (a = e.done), e;
          },
          e: function (e) {
            (i = !0), (u = e);
          },
          f: function () {
            try {
              a || null == r.return || r.return();
            } finally {
              if (i) throw u;
            }
          },
        };
      }

      function c(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
        return n;
      }
      (t.__esModule = !0), (t.default = void 0);
      var s,
        f =
          (s = r(67294)) && s.__esModule
            ? s
            : {
                default: s,
              },
        d = r(67161),
        p = r(519);
      var y = [],
        b = [],
        h = !1;

      function v(e) {
        var t = e(),
          r = {
            loading: !0,
            loaded: null,
            error: null,
          };
        return (
          (r.promise = t
            .then(function (e) {
              return (r.loading = !1), (r.loaded = e), e;
            })
            .catch(function (e) {
              throw ((r.loading = !1), (r.error = e), e);
            })),
          r
        );
      }
      var _ = (function () {
        function e(t, r) {
          o(this, e),
            (this._loadFn = t),
            (this._opts = r),
            (this._callbacks = new Set()),
            (this._delay = null),
            (this._timeout = null),
            this.retry();
        }
        return (
          u(e, [
            {
              key: 'promise',
              value: function () {
                return this._res.promise;
              },
            },
            {
              key: 'retry',
              value: function () {
                var e = this;
                this._clearTimeouts(),
                  (this._res = this._loadFn(this._opts.loader)),
                  (this._state = {
                    pastDelay: !1,
                    timedOut: !1,
                  });
                var t = this._res,
                  r = this._opts;
                t.loading &&
                  ('number' === typeof r.delay &&
                    (0 === r.delay
                      ? (this._state.pastDelay = !0)
                      : (this._delay = setTimeout(function () {
                          e._update({
                            pastDelay: !0,
                          });
                        }, r.delay))),
                  'number' === typeof r.timeout &&
                    (this._timeout = setTimeout(function () {
                      e._update({
                        timedOut: !0,
                      });
                    }, r.timeout))),
                  this._res.promise
                    .then(function () {
                      e._update({}), e._clearTimeouts();
                    })
                    .catch(function (t) {
                      e._update({}), e._clearTimeouts();
                    }),
                  this._update({});
              },
            },
            {
              key: '_update',
              value: function (e) {
                (this._state = i(
                  i({}, this._state),
                  {},
                  {
                    error: this._res.error,
                    loaded: this._res.loaded,
                    loading: this._res.loading,
                  },
                  e,
                )),
                  this._callbacks.forEach(function (e) {
                    return e();
                  });
              },
            },
            {
              key: '_clearTimeouts',
              value: function () {
                clearTimeout(this._delay), clearTimeout(this._timeout);
              },
            },
            {
              key: 'getCurrentValue',
              value: function () {
                return this._state;
              },
            },
            {
              key: 'subscribe',
              value: function (e) {
                var t = this;
                return (
                  this._callbacks.add(e),
                  function () {
                    t._callbacks.delete(e);
                  }
                );
              },
            },
          ]),
          e
        );
      })();

      function m(e) {
        return (function (e, t) {
          var r = Object.assign(
              {
                loader: null,
                loading: null,
                delay: 200,
                timeout: null,
                webpack: null,
                modules: null,
              },
              t,
            ),
            n = null;

          function o() {
            if (!n) {
              var t = new _(e, r);
              n = {
                getCurrentValue: t.getCurrentValue.bind(t),
                subscribe: t.subscribe.bind(t),
                retry: t.retry.bind(t),
                promise: t.promise.bind(t),
              };
            }
            return n.promise();
          }
          if (!h && 'function' === typeof r.webpack) {
            var u = r.webpack();
            b.push(function (e) {
              var t,
                r = l(u);
              try {
                for (r.s(); !(t = r.n()).done; ) {
                  var n = t.value;
                  if (-1 !== e.indexOf(n)) return o();
                }
              } catch (a) {
                r.e(a);
              } finally {
                r.f();
              }
            });
          }
          var a = function (e, t) {
            o();
            var u = f.default.useContext(p.LoadableContext),
              a = (0, d.useSubscription)(n);
            return (
              f.default.useImperativeHandle(
                t,
                function () {
                  return {
                    retry: n.retry,
                  };
                },
                [],
              ),
              u &&
                Array.isArray(r.modules) &&
                r.modules.forEach(function (e) {
                  u(e);
                }),
              f.default.useMemo(
                function () {
                  return a.loading || a.error
                    ? f.default.createElement(r.loading, {
                        isLoading: a.loading,
                        pastDelay: a.pastDelay,
                        timedOut: a.timedOut,
                        error: a.error,
                        retry: n.retry,
                      })
                    : a.loaded
                    ? f.default.createElement(
                        (function (e) {
                          return e && e.__esModule ? e.default : e;
                        })(a.loaded),
                        e,
                      )
                    : null;
                },
                [e, a],
              )
            );
          };
          return (
            (a.preload = function () {
              return o();
            }),
            (a.displayName = 'LoadableComponent'),
            f.default.forwardRef(a)
          );
        })(v, e);
      }

      function O(e, t) {
        for (var r = []; e.length; ) {
          var n = e.pop();
          r.push(n(t));
        }
        return Promise.all(r).then(function () {
          if (e.length) return O(e, t);
        });
      }
      (m.preloadAll = function () {
        return new Promise(function (e, t) {
          O(y).then(e, t);
        });
      }),
        (m.preloadReady = function () {
          var e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
          return new Promise(function (t) {
            var r = function () {
              return (h = !0), t();
            };
            O(b, e).then(r, r);
          });
        }),
        (window.__NEXT_PRELOADREADY = m.preloadReady);
      var g = m;
      t.default = g;
    },
    86175: function (e, t, r) {
      'use strict';
      r.r(t);
      var n = r(26265),
        o = r(85893),
        u = r(67294),
        a = r(5152),
        i = r(88355),
        l = r(41609),
        c = r.n(l),
        s = r(77875);

      function f(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      var d = (0, a.default)(
          function () {
            return Promise.all([r.e(445), r.e(29), r.e(923), r.e(476)]).then(
              r.bind(r, 35476),
            );
          },
          {
            loadableGenerated: {
              webpack: function () {
                return [35476];
              },
              modules: ['login/index.tsx -> @/features/Login'],
            },
          },
        ),
        p = function (e) {
          var t = e.loginChallenge;
          return (
            u.useEffect(
              function () {
                c()(t) || s.Wh.authModel.triggerOauthFlow(t);
              },
              [t],
            ),
            (0, o.jsx)(
              d,
              (function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var r = null != arguments[t] ? arguments[t] : {};
                  t % 2
                    ? f(Object(r), !0).forEach(function (t) {
                        (0, n.Z)(e, t, r[t]);
                      })
                    : Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(
                        e,
                        Object.getOwnPropertyDescriptors(r),
                      )
                    : f(Object(r)).forEach(function (t) {
                        Object.defineProperty(
                          e,
                          t,
                          Object.getOwnPropertyDescriptor(r, t),
                        );
                      });
                }
                return e;
              })({}, e),
            )
          );
        };
      (p.getInitialProps = function (e) {
        var t,
          r = e.appModel,
          n = r.authModel.hasAccountInfos,
          o = r.authModel.accountInfos;
        return {
          loginChallenge: e.query[i._J],
          referer:
            null === (t = e.req) || void 0 === t ? void 0 : t.headers.referer,
          hasAccountInfos: n,
          accountInfos: o,
        };
      }),
        (t.default = p);
    },
    97106: function (e, t, r) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        '/login',
        function () {
          return r(86175);
        },
      ]);
    },
    5152: function (e, t, r) {
      e.exports = r(57999);
    },
  },
  function (e) {
    e.O(0, [774, 888, 179], function () {
      return (t = 97106), e((e.s = t));
      var t;
    });
    var t = e.O();
    _N_E = t;
  },
]);
