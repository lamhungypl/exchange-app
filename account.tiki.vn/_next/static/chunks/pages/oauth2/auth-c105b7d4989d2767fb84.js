(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [141],
  {
    95342: function (e, t, n) {
      'use strict';
      n.r(t);
      var r,
        o = n(26265),
        u = n(67294),
        c = n(77875),
        i = n(88355),
        a = n(11163),
        l = n(61692);

      function s(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }

      function f(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? s(Object(n), !0).forEach(function (t) {
                (0, o.Z)(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : s(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t),
                );
              });
        }
        return e;
      }
      var O =
        ((r = {}),
        (0, o.Z)(r, l.Wx.ADD_ACCOUNT, i.ln.addAccount),
        (0, o.Z)(r, l.Wx.REGISTER, i.ln.addAccount),
        (0, o.Z)(r, l.Wx.LOGIN, i.ln.login),
        r);
      t.default = function () {
        var e = (0, a.useRouter)().query,
          t = e.action,
          n = void 0 === t ? l.Wx.LOGIN : t,
          r = e.includes,
          o = void 0 === r ? '' : r,
          s = e.username,
          p = O[n] || i.ln.login,
          d = c.Kk.redirect,
          b = c.Kk.layoutModel,
          g = c.Kk.messageChannelModel,
          y =
            n === l.Wx.REGISTER
              ? {
                  action: 'register',
                }
              : {};
        return (
          u.useEffect(
            function () {
              b.setLoading(!0);
              var e = String(o)
                .split(',')
                .filter(function (e) {
                  return e;
                });
              g.triggerAuthFlow({
                includedFields: e,
              }),
                d({
                  pathname: p,
                  query: f(
                    {
                      username: s,
                    },
                    y,
                  ),
                });
            },
            [p, o, s, y],
          ),
          null
        );
      };
    },
    76985: function (e, t, n) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        '/oauth2/auth',
        function () {
          return n(95342);
        },
      ]);
    },
  },
  function (e) {
    e.O(0, [774, 888, 179], function () {
      return (t = 76985), e((e.s = t));
      var t;
    });
    var t = e.O();
    _N_E = t;
  },
]);
