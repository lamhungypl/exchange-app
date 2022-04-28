(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [476],
  {
    53216: function (e, n, t) {
      'use strict';
      t.d(n, {
        D: function () {
          return r.D;
        },
      });
      var r = t(9540);
    },
    9540: function (e, n, t) {
      'use strict';
      t.d(n, {
        D: function () {
          return i;
        },
      });
      var r = t(67294),
        i = function (e) {
          var n = r.useRef(null);
          return n.current || (n.current = new e()), n.current;
        };
    },
    39939: function (e, n, t) {
      'use strict';
      t.d(n, {
        v7: function () {
          return l;
        },
        C1: function () {
          return u;
        },
        S$: function () {
          return p;
        },
        uo: function () {
          return d;
        },
      });
      var r = t(27361),
        i = t.n(r),
        o = t(92742),
        a = t.n(o),
        s = t(41609),
        c = t.n(s),
        l = function () {
          for (var e = arguments.length, n = new Array(e), t = 0; t < e; t++)
            n[t] = arguments[t];
          return function (e, t) {
            return n.reduce(function (n, r) {
              return n || r(e, t);
            }, void 0);
          };
        },
        u = function () {
          var e =
            arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : 'th\xf4ng tin n\xe0y';
          return function (n) {
            return c()(a()(n))
              ? 'Vui l\xf2ng nh\u1eadp '.concat(e.toLocaleLowerCase())
              : void 0;
          };
        },
        d = function (e) {
          return /^.*(?=.*\d)(?=.*[a-zA-Z]).{8,32}$/.test(e)
            ? void 0
            : 'M\u1eadt kh\u1ea9u ph\u1ea3i c\xf3 t\u1eeb '
                .concat(8, ' \u0111\u1ebfn ')
                .concat(
                  32,
                  ' k\xfd t\u1ef1, bao g\u1ed3m s\u1ed1 v\xe0 ch\u1eef',
                );
        },
        p = function () {
          var e =
            arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : 'password';
          return function (n, t) {
            return i()(t, e) !== n
              ? 'M\u1eadt kh\u1ea9u kh\xf4ng tr\xf9ng kh\u1edbp'
              : void 0;
          };
        };
    },
    35476: function (e, n, t) {
      'use strict';
      t.r(n),
        t.d(n, {
          default: function () {
            return Qe;
          },
        });
      var r,
        i = t(85893),
        o = t(26265),
        a = t(67294),
        s = t(1390),
        c = t(11163),
        l = t(19472),
        u = t(9540),
        d = t(809),
        p = t.n(d),
        h = t(92447),
        m = t(74047),
        f = t(52700),
        g = t(27361),
        x = t.n(g),
        b = t(41609),
        v = t.n(b),
        w = t(10240),
        y = t.n(w),
        k = t(68949),
        P = t(88355),
        j = t(61692),
        O = t(20586),
        Z = t(77875),
        C = t(42019),
        _ = t(96138),
        S = t(67662);
      !(function (e) {
        (e.CUSTOMER = 'CUSTOMER'),
          (e.TMS = 'TMS'),
          (e.INTERNAL = 'INTERNAL'),
          (e.IMPLICIT = 'IMPLICIT');
      })(r || (r = {}));
      var M = function (e) {
          return y()(e, 'https://tms.tiki.com.vn')
            ? r.CUSTOMER
            : (0, C.eR)(e, P.Me)
            ? r.INTERNAL
            : (0, C.eR)(e, P.eA)
            ? r.IMPLICIT
            : r.CUSTOMER;
        },
        L = (function () {
          function e() {
            var n = this;
            (0, m.Z)(this, e),
              (0, o.Z)(this, 'submitting', !1),
              (0, o.Z)(this, 'loginError', null),
              (0, o.Z)(this, 'activeForm', null),
              (0, o.Z)(this, 'socialCredentials', void 0),
              (0, o.Z)(this, 'socialInfo', void 0),
              (0, o.Z)(this, 'showSocialVerifyModal', !1),
              (0, o.Z)(this, 'showLoginOTPModal', !1),
              (0, o.Z)(this, 'loginCredential', void 0),
              (0, o.Z)(this, 'requestOTPInfo', void 0),
              (0, o.Z)(this, 'processingOTPCode', null),
              (0, o.Z)(this, 'showChangePasswordModal', !1),
              (0, o.Z)(this, 'changePasswordInfo', void 0),
              (0, o.Z)(this, 'showRegisterModal', !1),
              (0, o.Z)(
                this,
                'init',
                (function () {
                  var e = (0, h.Z)(
                    p().mark(function e(t) {
                      return p().wrap(function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              v()(t) || (0, Z.Wh.authModel.triggerOauthFlow)(t),
                                n.handleSocialLoginCallback();
                            case 2:
                            case 'end':
                              return e.stop();
                          }
                      }, e);
                    }),
                  );
                  return function (n) {
                    return e.apply(this, arguments);
                  };
                })(),
              ),
              (0, o.Z)(
                this,
                'handleSocialLoginCallback',
                (0, h.Z)(
                  p().mark(function e() {
                    var t, r, i, o;
                    return p().wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            (t = Z.Wh.router.query),
                              (e.t0 = location.pathname),
                              (e.next =
                                e.t0 === P.ln.zaloLogin
                                  ? 4
                                  : e.t0 === P.ln.googleLogin
                                  ? 8
                                  : 13);
                            break;
                          case 4:
                            return (
                              (r = t.code),
                              (e.next = 7),
                              n.socialLoginCallback({
                                token: r,
                                grant_type: j.ko.ZALO,
                              })
                            );
                          case 7:
                            return e.abrupt('break', 14);
                          case 8:
                            return (
                              (i = (0, C.QR)(location.hash.substring(1))),
                              (o = i.access_token),
                              (e.next = 12),
                              n.socialLoginCallback({
                                token: o,
                                grant_type: j.ko.GOOGLE,
                              })
                            );
                          case 12:
                          case 13:
                            return e.abrupt('break', 14);
                          case 14:
                          case 'end':
                            return e.stop();
                        }
                    }, e);
                  }),
                ),
              ),
              (0, o.Z)(
                this,
                'login',
                (function () {
                  var e = (0, h.Z)(
                    p().mark(function e(t) {
                      var r,
                        i,
                        o = arguments;
                      return p().wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (
                                  (r = o.length > 1 && void 0 !== o[1] && o[1]),
                                  (e.prev = 1),
                                  (n.submitting = !0),
                                  (e.next = 5),
                                  Z.Wh.authService.login(t)
                                );
                              case 5:
                                if ('pending' === (i = e.sent).data.status) {
                                  e.next = 10;
                                  break;
                                }
                                n.loginSuccessCallback(i.data), (e.next = 23);
                                break;
                              case 10:
                                (n.loginError = i.data.message),
                                  (e.t0 = i.data.code),
                                  (e.next =
                                    e.t0 === P.fr
                                      ? 14
                                      : e.t0 === P.ui
                                      ? 18
                                      : e.t0 === P.DK
                                      ? 21
                                      : 23);
                                break;
                              case 14:
                                return (
                                  (n.showLoginOTPModal = !0),
                                  (n.loginCredential = t),
                                  (n.requestOTPInfo = i.data),
                                  e.abrupt('break', 23)
                                );
                              case 18:
                                return (
                                  (n.showChangePasswordModal = !0),
                                  (n.changePasswordInfo = i.data),
                                  e.abrupt('break', 23)
                                );
                              case 21:
                                return (
                                  y()(
                                    Z.Wh.thirdPartyReferrer,
                                    'https://sellercenter.tiki.vn',
                                  ) && (n.loginError = P.Ux),
                                  e.abrupt('break', 23)
                                );
                              case 23:
                                e.next = 30;
                                break;
                              case 25:
                                if (
                                  ((e.prev = 25),
                                  (e.t1 = e.catch(1)),
                                  (n.loginError = x()(
                                    e.t1,
                                    'response.data.error.message',
                                  )),
                                  !r)
                                ) {
                                  e.next = 30;
                                  break;
                                }
                                throw e.t1;
                              case 30:
                                return (
                                  (e.prev = 30),
                                  (n.submitting = !1),
                                  e.finish(30)
                                );
                              case 33:
                              case 'end':
                                return e.stop();
                            }
                        },
                        e,
                        null,
                        [[1, 25, 30, 33]],
                      );
                    }),
                  );
                  return function (n) {
                    return e.apply(this, arguments);
                  };
                })(),
              ),
              (0, o.Z)(
                this,
                'socialLoginCallback',
                (function () {
                  var e = (0, h.Z)(
                    p().mark(function e(t) {
                      var r, i, o, a, s;
                      return p().wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (
                                  (e.prev = 0),
                                  (n.submitting = !0),
                                  (e.next = 4),
                                  Z.Wh.authService.socialLogin(t)
                                );
                              case 4:
                                (r = e.sent),
                                  r.data.has_to_verify
                                    ? (Z.Wh.layoutModel.setLoading(!1),
                                      (n.showSocialVerifyModal = !0),
                                      (n.socialCredentials = t),
                                      (n.socialInfo = r.data.social_info))
                                    : n.loginSuccessCallback(r.data),
                                  (e.next = 14);
                                break;
                              case 9:
                                (e.prev = 9),
                                  (e.t0 = e.catch(0)),
                                  (s =
                                    null === e.t0 ||
                                    void 0 === e.t0 ||
                                    null === (i = e.t0.response) ||
                                    void 0 === i ||
                                    null === (o = i.data) ||
                                    void 0 === o ||
                                    null === (a = o.error) ||
                                    void 0 === a
                                      ? void 0
                                      : a.message),
                                  (n.loginError = s),
                                  Z.Wh.layoutModel.showErrorPage(s);
                              case 14:
                                return (
                                  (e.prev = 14),
                                  (n.submitting = !1),
                                  e.finish(14)
                                );
                              case 17:
                              case 'end':
                                return e.stop();
                            }
                        },
                        e,
                        null,
                        [[0, 9, 14, 17]],
                      );
                    }),
                  );
                  return function (n) {
                    return e.apply(this, arguments);
                  };
                })(),
              ),
              (0, o.Z)(
                this,
                'internalLogin',
                (function () {
                  var e = (0, h.Z)(
                    p().mark(function e(t) {
                      var r;
                      return p().wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (
                                  (e.prev = 0),
                                  (n.submitting = !0),
                                  (e.next = 4),
                                  Z.Wh.authService.internalLogin(t)
                                );
                              case 4:
                                (r = e.sent),
                                  n.loginSuccessCallback(r.data),
                                  (e.next = 12);
                                break;
                              case 8:
                                (e.prev = 8),
                                  (e.t0 = e.catch(0)),
                                  (n.loginError = x()(
                                    e.t0,
                                    'response.data.error.message',
                                  )),
                                  console.error({
                                    error: e.t0,
                                  });
                              case 12:
                                return (
                                  (e.prev = 12),
                                  (n.submitting = !1),
                                  e.finish(12)
                                );
                              case 15:
                              case 'end':
                                return e.stop();
                            }
                        },
                        e,
                        null,
                        [[0, 8, 12, 15]],
                      );
                    }),
                  );
                  return function (n) {
                    return e.apply(this, arguments);
                  };
                })(),
              ),
              (0, o.Z)(
                this,
                'loginSuccessCallback',
                (function () {
                  var e = (0, h.Z)(
                    p().mark(function e(n) {
                      return p().wrap(function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                (e.next = 2), Z.Wh.authModel.saveAuth(n, !0)
                              );
                            case 2:
                              Z.Wh.authModel.acceptAuth();
                            case 3:
                            case 'end':
                              return e.stop();
                          }
                      }, e);
                    }),
                  );
                  return function (n) {
                    return e.apply(this, arguments);
                  };
                })(),
              ),
              (0, o.Z)(
                this,
                'facebookLogin',
                (0, h.Z)(
                  p().mark(function e() {
                    var t;
                    return p().wrap(
                      function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (e.prev = 0), (e.next = 3), O.qv.login();
                            case 3:
                              return (
                                (t = e.sent),
                                (e.next = 6),
                                n.socialLoginCallback({
                                  grant_type: j.ko.FACEBOOK,
                                  token: t,
                                })
                              );
                            case 6:
                              e.next = 12;
                              break;
                            case 8:
                              (e.prev = 8),
                                (e.t0 = e.catch(0)),
                                (0, _.T)('FACEBOOK_LOGIN', e.t0),
                                console.error({
                                  error: e.t0,
                                });
                            case 12:
                            case 'end':
                              return e.stop();
                          }
                      },
                      e,
                      null,
                      [[0, 8]],
                    );
                  }),
                ),
              ),
              (0, o.Z)(
                this,
                'googleLogin',
                (0, h.Z)(
                  p().mark(function e() {
                    return p().wrap(
                      function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                (e.prev = 0), (e.next = 3), O.lk.loginOAuth2()
                              );
                            case 3:
                              e.next = 9;
                              break;
                            case 5:
                              (e.prev = 5),
                                (e.t0 = e.catch(0)),
                                (0, _.T)('GOOGLE_LOGIN', e.t0),
                                console.error({
                                  error: e.t0,
                                });
                            case 9:
                            case 'end':
                              return e.stop();
                          }
                      },
                      e,
                      null,
                      [[0, 5]],
                    );
                  }),
                ),
              ),
              (0, o.Z)(
                this,
                'zaloLogin',
                (0, h.Z)(
                  p().mark(function e() {
                    var t;
                    return p().wrap(
                      function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                (e.prev = 0), (e.next = 3), O.Cv.getToken()
                              );
                            case 3:
                              if (!(t = e.sent)) {
                                e.next = 9;
                                break;
                              }
                              return (
                                (e.next = 7),
                                n.socialLoginCallback({
                                  grant_type: j.ko.ZALO,
                                  token: t,
                                })
                              );
                            case 7:
                              e.next = 10;
                              break;
                            case 9:
                              O.Cv.login();
                            case 10:
                              return e.abrupt('return', t);
                            case 13:
                              (e.prev = 13),
                                (e.t0 = e.catch(0)),
                                (0, _.T)('ZALO_LOGIN', e.t0),
                                console.error({
                                  error: e.t0,
                                });
                            case 17:
                            case 'end':
                              return e.stop();
                          }
                      },
                      e,
                      null,
                      [[0, 13]],
                    );
                  }),
                ),
              ),
              (0, o.Z)(this, 'handleCloseLoginOtpModal', function () {
                n.showLoginOTPModal = !1;
              }),
              (0, o.Z)(this, 'handleCloseChangePasswordModal', function () {
                n.showChangePasswordModal = !1;
              }),
              (0, o.Z)(this, 'handleCloseVerifyModal', function () {
                Z.Wh.router.replace(P.ln.login), (n.showSocialVerifyModal = !1);
              }),
              (0, o.Z)(this, 'switchLoginForm', function (e) {
                (n.activeForm = e), (n.loginError = null);
              }),
              (0, o.Z)(this, 'handleOpenRegisterModal', function () {
                n.showRegisterModal = !0;
              }),
              (0, o.Z)(this, 'handleCloseRegisterModal', function () {
                n.showRegisterModal = !1;
              }),
              (0, o.Z)(this, 'setProcessingOTPCode', function (e) {
                n.processingOTPCode = e;
              }),
              (0, k.ky)(this),
              (0, k.U5)(
                function () {
                  return {
                    thirdPartyReferrer: Z.Wh.thirdPartyReferrer,
                  };
                },
                function (e) {
                  var t = e.thirdPartyReferrer;
                  if (S.C) {
                    var r = M(t);
                    n.switchLoginForm(r);
                  }
                },
                {
                  fireImmediately: !0,
                },
              );
          }
          return (
            (0, f.Z)(e, [
              {
                key: 'loginSource',
                get: function () {
                  var e = Object.keys(P.Ee).find(function (e) {
                    return y()(Z.Wh.thirdPartyReferrer, e);
                  });
                  return P.Ee[e];
                },
              },
            ]),
            e
          );
        })(),
        T = t(66688),
        E = t(53216),
        N = t(4706),
        I = t(8127),
        R = t(44102),
        z = t(20775),
        D = t(96486),
        V = t(39939),
        A = (function () {
          function e() {
            var n = this;
            (0, m.Z)(this, e),
              (0, o.Z)(this, 'countDownTime', 0),
              (0, o.Z)(this, 'timeInterval', null),
              (0, o.Z)(this, 'handleClickRequestOTP', function (e) {
                return (0, h.Z)(
                  p().mark(function n() {
                    return p().wrap(function (n) {
                      for (;;)
                        switch ((n.prev = n.next)) {
                          case 0:
                            return (
                              e.change('action', j.V_.RESEND_OTP),
                              (n.next = 3),
                              e.submit()
                            );
                          case 3:
                            e.change('action', j.V_.SUBMIT);
                          case 4:
                          case 'end':
                            return n.stop();
                        }
                    }, n);
                  }),
                );
              }),
              (0, o.Z)(
                this,
                'processRequestOTP',
                (function () {
                  var e = (0, h.Z)(
                    p().mark(function e(t) {
                      var r, i, o, a;
                      return p().wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                if (
                                  ((r = t.phone_number),
                                  ((i = {}).phone_number = (0, V.C1)(
                                    'S\u1ed1 \u0111i\u1ec7n tho\u1ea1i',
                                  )(r)),
                                  (o = (0, C.wA)(i)),
                                  (0, D.isEmpty)(o))
                                ) {
                                  e.next = 6;
                                  break;
                                }
                                return e.abrupt('return', o);
                              case 6:
                                return (
                                  (e.prev = 6),
                                  (e.next = 9),
                                  Z.Kk.authService.requestOTP({
                                    phone_number: r,
                                  })
                                );
                              case 9:
                                n.startCountDownTimer(), (e.next = 16);
                                break;
                              case 12:
                                return (
                                  (e.prev = 12),
                                  (e.t0 = e.catch(6)),
                                  (a = (0, D.get)(
                                    e.t0,
                                    'response.data.error',
                                    {},
                                  )),
                                  e.abrupt('return', (0, C.a3)(a))
                                );
                              case 16:
                                return e.abrupt('return', void 0);
                              case 17:
                              case 'end':
                                return e.stop();
                            }
                        },
                        e,
                        null,
                        [[6, 12]],
                      );
                    }),
                  );
                  return function (n) {
                    return e.apply(this, arguments);
                  };
                })(),
              ),
              (0, o.Z)(this, 'startCountDownTimer', function () {
                var e = n;
                (n.countDownTime = P.TM),
                  (n.timeInterval = setInterval(function () {
                    (0, k.z)(function () {
                      e.countDownTime > 0 && (e.countDownTime -= 1);
                    });
                  }, 1e3));
              }),
              (0, k.rC)(this, {
                countDownTime: k.LO,
                disabledSendOTP: k.Fl,
                handleClickRequestOTP: k.aD,
                processRequestOTP: k.aD,
                startCountDownTimer: k.aD,
              }),
              (0, k.U5)(
                function () {
                  return {
                    countDownTime: n.countDownTime,
                  };
                },
                function (e) {
                  0 === e.countDownTime &&
                    n.timeInterval &&
                    clearInterval(n.timeInterval);
                },
              );
          }
          return (
            (0, f.Z)(e, [
              {
                key: 'disabledSendOTP',
                get: function () {
                  return !!this.countDownTime;
                },
              },
            ]),
            e
          );
        })();

      function G(e, n) {
        var t = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          n &&
            (r = r.filter(function (n) {
              return Object.getOwnPropertyDescriptor(e, n).enumerable;
            })),
            t.push.apply(t, r);
        }
        return t;
      }

      function F(e) {
        for (var n = 1; n < arguments.length; n++) {
          var t = null != arguments[n] ? arguments[n] : {};
          n % 2
            ? G(Object(t), !0).forEach(function (n) {
                (0, o.Z)(e, n, t[n]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : G(Object(t)).forEach(function (n) {
                Object.defineProperty(
                  e,
                  n,
                  Object.getOwnPropertyDescriptor(t, n),
                );
              });
        }
        return e;
      }

      function U(e) {
        var n = (function () {
          if ('undefined' === typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ('function' === typeof Proxy) return !0;
          try {
            return (
              Date.prototype.toString.call(
                Reflect.construct(Date, [], function () {}),
              ),
              !0
            );
          } catch (e) {
            return !1;
          }
        })();
        return function () {
          var t,
            r = (0, z.Z)(e);
          if (n) {
            var i = (0, z.Z)(this).constructor;
            t = Reflect.construct(r, arguments, i);
          } else t = r.apply(this, arguments);
          return (0, R.Z)(this, t);
        };
      }
      var q = (function (e) {
          (0, I.Z)(t, e);
          var n = U(t);

          function t() {
            var e;
            return (
              (0, m.Z)(this, t),
              (e = n.call(this)),
              (0, o.Z)((0, N.Z)(e), 'loginPageViewModel', void 0),
              (0, o.Z)((0, N.Z)(e), 'init', function (n) {
                e.loginPageViewModel = n;
              }),
              (0, o.Z)(
                (0, N.Z)(e),
                'handleSubmitVerificationForm',
                (function () {
                  var n = (0, h.Z)(
                    p().mark(function n(t) {
                      return p().wrap(function (n) {
                        for (;;)
                          switch ((n.prev = n.next)) {
                            case 0:
                              if (t.action !== j.V_.RESEND_OTP) {
                                n.next = 3;
                                break;
                              }
                              return n.abrupt('return', e.processRequestOTP(t));
                            case 3:
                              return n.abrupt('return', e.processSubmitOTP(t));
                            case 4:
                            case 'end':
                              return n.stop();
                          }
                      }, n);
                    }),
                  );
                  return function (e) {
                    return n.apply(this, arguments);
                  };
                })(),
              ),
              (0, o.Z)(
                (0, N.Z)(e),
                'processSubmitOTP',
                (function () {
                  var n = (0, h.Z)(
                    p().mark(function n(t) {
                      var r, i, o, a, s, c;
                      return p().wrap(
                        function (n) {
                          for (;;)
                            switch ((n.prev = n.next)) {
                              case 0:
                                if (
                                  ((r = t.phone_number),
                                  (i = t.otp_code),
                                  ((o = {}).phone_number = (0, V.C1)(
                                    'S\u1ed1 \u0111i\u1ec7n tho\u1ea1i',
                                  )(r)),
                                  (o.otp_code = (0, V.C1)(
                                    'M\xe3 x\xe1c th\u1ef1c',
                                  )(i)),
                                  (a = (0, C.wA)(o)),
                                  (0, D.isEmpty)(a))
                                ) {
                                  n.next = 7;
                                  break;
                                }
                                return n.abrupt('return', a);
                              case 7:
                                return (
                                  (s = F(
                                    F(
                                      {},
                                      e.loginPageViewModel.socialCredentials,
                                    ),
                                    {},
                                    {
                                      phone_number: r,
                                      otp_code: i,
                                    },
                                  )),
                                  (n.prev = 8),
                                  (n.next = 11),
                                  e.loginPageViewModel.socialLoginCallback(s)
                                );
                              case 11:
                                n.next = 17;
                                break;
                              case 13:
                                return (
                                  (n.prev = 13),
                                  (n.t0 = n.catch(8)),
                                  (c = (0, D.get)(
                                    n.t0,
                                    'response.data.error',
                                    {},
                                  )),
                                  n.abrupt('return', (0, C.a3)(c))
                                );
                              case 17:
                                return n.abrupt('return', void 0);
                              case 18:
                              case 'end':
                                return n.stop();
                            }
                        },
                        n,
                        null,
                        [[8, 13]],
                      );
                    }),
                  );
                  return function (e) {
                    return n.apply(this, arguments);
                  };
                })(),
              ),
              (0, k.rC)((0, N.Z)(e), {
                loginPageViewModel: k.LO,
                init: k.aD,
                handleSubmitVerificationForm: k.aD,
                processSubmitOTP: k.aD,
              }),
              e
            );
          }
          return t;
        })(A),
        W = t(29163),
        B = (0, W.ZP)(l.l0).withConfig({
          displayName: 'styles__FormWrapper',
          componentId: 'sc-1rjgu0s-0',
        })([
          'display:flex;flex-direction:column;align-items:center;width:100%;',
        ]),
        K = W.ZP.div.withConfig({
          displayName: 'styles__SocialInfoWrapper',
          componentId: 'sc-1rjgu0s-1',
        })([
          'display:grid;grid-row-gap:12px;margin-top:30px;text-align:center;> .avatar{width:50px;height:50px;border-radius:50%;justify-self:center;}',
        ]),
        X = function (e) {
          var n = e.socialInfo,
            t = (n = void 0 === n ? {} : n).avatar,
            r = n.full_name;
          return (0, i.jsxs)(K, {
            children: [
              (0, i.jsx)('img', {
                className: 'avatar',
                src: t,
                alt: '',
              }),
              (0, i.jsx)('span', {
                children: r,
              }),
            ],
          });
        },
        H = (0, s.P)(function (e) {
          var n = e.visible,
            t = e.onClose,
            r = e.loginPageViewModel,
            o = r.socialInfo,
            s = (0, E.D)(q),
            c = s.init,
            u = s.countDownTime,
            d = s.handleClickRequestOTP,
            p = s.handleSubmitVerificationForm,
            h = s.disabledSendOTP;
          return (
            a.useEffect(
              function () {
                c(r);
              },
              [c, r],
            ),
            (0, i.jsx)(l.u_, {
              visible: n,
              onClose: t,
              children: (0, i.jsx)(T.l0, {
                initialValues: {
                  action: j.V_.SUBMIT,
                },
                onSubmit: p,
                render: function (e) {
                  var n = e.handleSubmit,
                    t = e.form;
                  return (0, i.jsxs)(B, {
                    onSubmit: n,
                    children: [
                      (0, i.jsx)(X, {
                        socialInfo: o,
                      }),
                      (0, i.jsx)(T.gN, {
                        name: 'phone_number',
                        label: 'S\u1ed1 \u0111i\u1ec7n tho\u1ea1i',
                        placeholder:
                          'Nh\u1eadp s\u1ed1 \u0111i\u1ec7n tho\u1ea1i',
                        component: l.UP,
                        size: l.fz.LARGE,
                        action: (0, i.jsx)(l.zx, {
                          onClick: d(t),
                          disabled: h,
                          children: u
                            ? 'G\u1eedi l\u1ea1i ('.concat(u, 's)')
                            : 'G\u1eedi m\xe3 x\xe1c th\u1ef1c',
                        }),
                      }),
                      (0, i.jsx)(T.gN, {
                        name: 'otp_code',
                        label: 'M\xe3 x\xe1c th\u1ef1c',
                        placeholder:
                          'Nh\u1eadp m\xe3 x\xe1c th\u1ef1c g\u1eedi t\u1edbi s\u1ed1 \u0111i\u1ec7n tho\u1ea1i tr\xean',
                        size: l.fz.LARGE,
                        component: l.UP,
                      }),
                      (0, i.jsx)(l.zx, {
                        type: 'submit',
                        size: l.w_.LARGE,
                        block: !0,
                        children: 'X\xe1c nh\u1eadn',
                      }),
                    ],
                  });
                },
              }),
            })
          );
        });

      function Q(e, n) {
        var t = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          n &&
            (r = r.filter(function (n) {
              return Object.getOwnPropertyDescriptor(e, n).enumerable;
            })),
            t.push.apply(t, r);
        }
        return t;
      }

      function $(e) {
        for (var n = 1; n < arguments.length; n++) {
          var t = null != arguments[n] ? arguments[n] : {};
          n % 2
            ? Q(Object(t), !0).forEach(function (n) {
                (0, o.Z)(e, n, t[n]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : Q(Object(t)).forEach(function (n) {
                Object.defineProperty(
                  e,
                  n,
                  Object.getOwnPropertyDescriptor(t, n),
                );
              });
        }
        return e;
      }

      function J(e) {
        var n = (function () {
          if ('undefined' === typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ('function' === typeof Proxy) return !0;
          try {
            return (
              Date.prototype.toString.call(
                Reflect.construct(Date, [], function () {}),
              ),
              !0
            );
          } catch (e) {
            return !1;
          }
        })();
        return function () {
          var t,
            r = (0, z.Z)(e);
          if (n) {
            var i = (0, z.Z)(this).constructor;
            t = Reflect.construct(r, arguments, i);
          } else t = r.apply(this, arguments);
          return (0, R.Z)(this, t);
        };
      }
      var Y,
        ee,
        ne = (function (e) {
          (0, I.Z)(t, e);
          var n = J(t);

          function t() {
            var e;
            return (
              (0, m.Z)(this, t),
              (e = n.call(this)),
              (0, o.Z)((0, N.Z)(e), 'loginPageViewModel', void 0),
              (0, o.Z)((0, N.Z)(e), 'init', function (n) {
                e.loginPageViewModel = n;
              }),
              (0, o.Z)(
                (0, N.Z)(e),
                'handleSubmitOTP',
                (function () {
                  var n = (0, h.Z)(
                    p().mark(function n(t) {
                      var r, i, o, a, s, c;
                      return p().wrap(
                        function (n) {
                          for (;;)
                            switch ((n.prev = n.next)) {
                              case 0:
                                if (
                                  ((r = t.action),
                                  (i = t.otp_code),
                                  (n.prev = 1),
                                  e.loginPageViewModel.setProcessingOTPCode(i),
                                  r !== j.V_.RESEND_OTP)
                                ) {
                                  n.next = 9;
                                  break;
                                }
                                return (
                                  (n.next = 6),
                                  Z.Kk.authService.resendOTP(
                                    e.loginPageViewModel.loginCredential,
                                  )
                                );
                              case 6:
                                e.startCountDownTimer(), (n.next = 18);
                                break;
                              case 9:
                                if (
                                  (((o = {}).otp_code = (0, V.C1)(
                                    'M\xe3 x\xe1c th\u1ef1c',
                                  )(i)),
                                  (a = (0, C.wA)(o)),
                                  (0, D.isEmpty)(a))
                                ) {
                                  n.next = 14;
                                  break;
                                }
                                return n.abrupt('return', a);
                              case 14:
                                return (
                                  (s = $(
                                    $({}, (0, D.omit)(t, 'action')),
                                    e.loginPageViewModel.loginCredential,
                                  )),
                                  (n.next = 17),
                                  e.loginPageViewModel.login(s, !0)
                                );
                              case 17:
                                return n.abrupt('return', void 0);
                              case 18:
                                n.next = 24;
                                break;
                              case 20:
                                return (
                                  (n.prev = 20),
                                  (n.t0 = n.catch(1)),
                                  (c = (0, D.get)(
                                    n.t0,
                                    'response.data.error',
                                    {},
                                  )),
                                  n.abrupt('return', (0, C.a3)(c))
                                );
                              case 24:
                                return n.abrupt('return', void 0);
                              case 25:
                              case 'end':
                                return n.stop();
                            }
                        },
                        n,
                        null,
                        [[1, 20]],
                      );
                    }),
                  );
                  return function (e) {
                    return n.apply(this, arguments);
                  };
                })(),
              ),
              (0, k.rC)((0, N.Z)(e), {
                loginPageViewModel: k.LO,
                init: k.aD,
                handleSubmitOTP: k.aD,
              }),
              e
            );
          }
          return t;
        })(A),
        te = (0, W.ZP)(l.l0).withConfig({
          displayName: 'styles__FormWrapper',
          componentId: 'sc-3ufis2-0',
        })([
          'display:flex;flex-direction:column;.message{font-size:16px;color:rgb(244,143,45);text-align:center;margin-bottom:16px;}.phone-number{color:black;margin-bottom:20px;> .number{font-size:18px;margin-left:20px;}}.btn-submit{margin-bottom:12px;}.btn-reset{color:white;border-color:unset;background:rgb(27,168,255);&:hover:not(:disabled){background:rgb(22 142 216);}}',
        ]),
        re = 'REQUEST_OTP_FORM',
        ie = (0, s.P)(function (e) {
          var n = e.visible,
            t = e.onClose,
            r = e.loginPageViewModel,
            o = r.requestOTPInfo,
            s = (0, E.D)(ne),
            c = s.init,
            u = s.handleSubmitOTP,
            d = s.handleClickRequestOTP,
            p = s.disabledSendOTP,
            h = s.countDownTime;
          return (
            a.useEffect(
              function () {
                c(r);
              },
              [c, r],
            ),
            (0, i.jsx)(l.u_, {
              visible: n,
              onClose: t,
              children: (0, i.jsx)(T.l0, {
                initialValues: {
                  action: j.V_.SUBMIT,
                },
                onSubmit: u,
                render: function (e) {
                  var n = e.handleSubmit,
                    t = e.form,
                    r = e.submitting;
                  return (0, i.jsxs)(te, {
                    id: re,
                    onSubmit: n,
                    submitOnEnter: !0,
                    children: [
                      (0, i.jsx)('div', {
                        className: 'message',
                        children:
                          null === o || void 0 === o ? void 0 : o.message,
                      }),
                      (null === o || void 0 === o ? void 0 : o.phone_number) &&
                        (0, i.jsxs)('div', {
                          className: 'phone-number',
                          children: [
                            'S\u1ed1 \u0111i\u1ec7n tho\u1ea1i:',
                            (0, i.jsx)('span', {
                              className: 'number',
                              children:
                                null === o || void 0 === o
                                  ? void 0
                                  : o.phone_number,
                            }),
                          ],
                        }),
                      (0, i.jsx)(T.gN, {
                        name: 'otp_code',
                        component: l.UP,
                        size: l.fz.LARGE,
                        placeholder: 'Nh\u1eadp m\xe3 x\xe1c th\u1ef1c',
                      }),
                      (0, i.jsx)(l.zx, {
                        className: 'btn-submit',
                        type: 'submit',
                        loading: r,
                        form: re,
                        size: l.w_.LARGE,
                        block: !0,
                        children: 'X\xe1c nh\u1eadn',
                      }),
                      (0, i.jsxs)(l.zx, {
                        className: 'btn-reset',
                        size: l.w_.LARGE,
                        onClick: d(t),
                        disabled: p,
                        block: !0,
                        children: [
                          'G\u1eedi l\u1ea1i m\xe3 x\xe1c th\u1ef1c',
                          h ? ' ('.concat(h, 's)') : '',
                        ],
                      }),
                    ],
                  });
                },
              }),
            })
          );
        }),
        oe = t(38347),
        ae = t(25675),
        se = t(89583),
        ce = t(22977);

      function le(e, n) {
        var t = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          n &&
            (r = r.filter(function (n) {
              return Object.getOwnPropertyDescriptor(e, n).enumerable;
            })),
            t.push.apply(t, r);
        }
        return t;
      }

      function ue(e) {
        for (var n = 1; n < arguments.length; n++) {
          var t = null != arguments[n] ? arguments[n] : {};
          n % 2
            ? le(Object(t), !0).forEach(function (n) {
                (0, o.Z)(e, n, t[n]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : le(Object(t)).forEach(function (n) {
                Object.defineProperty(
                  e,
                  n,
                  Object.getOwnPropertyDescriptor(t, n),
                );
              });
        }
        return e;
      }
      var de = 'btn-login',
        pe =
          ((Y = {}),
          (0, o.Z)(Y, j.eo.DEFAULT, null),
          (0, o.Z)(
            Y,
            j.eo.FACEBOOK,
            (0, i.jsx)(se.tBk, {
              fontSize: '20px',
            }),
          ),
          (0, o.Z)(
            Y,
            j.eo.GOOGLE,
            (0, i.jsx)(se.ldW, {
              fontSize: '20px',
            }),
          ),
          (0, o.Z)(
            Y,
            j.eo.ZALO,
            (0, i.jsx)(ae.default, {
              src: '/images/zalo-icon.svg',
              alt: 'zalo-icon',
              height: 24,
              width: 24,
            }),
          ),
          Y),
        he =
          ((ee = {}),
          (0, o.Z)(ee, j.eo.DEFAULT, (0, W.iv)([''])),
          (0, o.Z)(
            ee,
            j.eo.FACEBOOK,
            (0, W.iv)([
              'background:#3b5998;color:white;border-color:unset;&:hover:not(:disabled){background:#2d4373;}',
            ]),
          ),
          (0, o.Z)(
            ee,
            j.eo.GOOGLE,
            (0, W.iv)([
              'background:#dd4b39;color:white;border-color:unset;&:hover:not(:disabled){background:#c23321;}',
            ]),
          ),
          (0, o.Z)(
            ee,
            j.eo.ZALO,
            (0, W.iv)([
              'background:#0f8edd;color:white;border-color:unset;&:hover:not(:disabled){background:#0c6fad;}',
            ]),
          ),
          ee),
        me = W.ZP.div.withConfig({
          displayName: 'LoginButton__PrefixIcon',
          componentId: 'sc-al0m8k-0',
        })([
          'display:flex;align-items:center;position:absolute;left:8px;width:20px;height:20px;> img{width:100%;height:100%;}',
        ]),
        fe = (0, W.ZP)(ce.zx).withConfig({
          displayName: 'LoginButton__StyledButton',
          componentId: 'sc-al0m8k-1',
        })(
          [
            'display:flex;justify-content:center;position:relative;padding:10px 12px;line-height:20px;',
            ';',
          ],
          function (e) {
            var n = e.loginMethod;
            return he[n];
          },
        ),
        ge = function (e) {
          var n = e.loginMethod,
            t = void 0 === n ? j.eo.DEFAULT : n,
            r = e.children,
            o = (0, oe.Z)(e, ['loginMethod', 'children']);
          return (0, i.jsxs)(
            fe,
            ue(
              ue(
                {
                  className: de,
                  loginMethod: t,
                },
                o,
              ),
              {},
              {
                children: [
                  t !== j.eo.DEFAULT &&
                    (0, i.jsx)(me, {
                      className: 'prefix-icon',
                      children: pe[t],
                    }),
                  (0, i.jsx)('div', {
                    className: 'content',
                    children: r,
                  }),
                ],
              },
            ),
          );
        },
        xe = (0, W.ZP)(l.Yb).withConfig({
          displayName: 'style__FormWrapper',
          componentId: 'sc-8gl4wx-0',
        })(['width:400px;max-width:calc(90vw - 60px);']),
        be =
          (W.ZP.img.withConfig({
            displayName: 'style__Logo',
            componentId: 'sc-8gl4wx-1',
          })(['width:40px;height:40px;']),
          W.ZP.div.withConfig({
            displayName: 'style__Title',
            componentId: 'sc-8gl4wx-2',
          })([
            'font-size:24px;font-weight:300;text-align:center;margin:16px auto;@media (max-width:425px){font-size:18px;margin:8px 0 12px 0;}',
          ])),
        ve =
          ((0, W.ZP)(l.l0).withConfig({
            displayName: 'styles__FormContainer',
            componentId: 'sc-7dfsmr-0',
          })(['width:100%;display:flex;flex-direction:column;']),
          W.ZP.div.withConfig({
            displayName: 'styles__ErrorWrapper',
            componentId: 'sc-7dfsmr-1',
          })([
            'display:flex;align-items:center;color:red;margin-bottom:16px;font-size:12px;',
          ]),
          W.ZP.div.withConfig({
            displayName: 'styles__ButtonWrapper',
            componentId: 'sc-7dfsmr-2',
          })(
            [
              'display:grid;grid-template-columns:repeat(3,minmax(0,1fr));grid-column-gap:12px;width:100%;@media (max-width:425px){.',
              '{.prefix-icon{left:calc(50% - 10px);}.content{visibility:hidden;}}}',
            ],
            de,
          )),
        we =
          (W.ZP.div.withConfig({
            displayName: 'styles__LoginBox',
            componentId: 'sc-7dfsmr-3',
          })([
            'display:grid;grid-template-columns:minmax(0,1fr) minmax(0,2fr);grid-column-gap:8px;align-items:center;',
          ]),
          (0, W.ZP)(l.zx).withConfig({
            displayName: 'styles__LinkButton',
            componentId: 'sc-7dfsmr-4',
          })(['margin-top:16px;']),
          W.ZP.div.withConfig({
            displayName: 'styles__ForgotPassword',
            componentId: 'sc-7dfsmr-5',
          })([
            'display:flex;align-items:baseline;font-size:12px;margin-bottom:8px;',
          ])),
        ye = (0, s.P)(function (e) {
          var n = e.loginPageViewModel,
            t = e.initialValues,
            r = e.handleSubmitLogin,
            o = n.facebookLogin,
            a = n.googleLogin,
            s = n.zaloLogin,
            c = n.loginError,
            u = n.submitting,
            d = n.handleOpenRegisterModal;
          return (0, i.jsx)(T.l0, {
            onSubmit: r,
            initialValues: t,
            render: function (e) {
              var n = e.handleSubmit;
              return (0, i.jsxs)(xe, {
                onSubmit: function (e) {
                  e.preventDefault(), n(e);
                },
                submitOnEnter: !0,
                fieldStyles: {
                  rowGap: '16px',
                },
                children: [
                  (0, i.jsx)(l.ph, {
                    children: (0, i.jsxs)('div', {
                      children: [
                        (0, i.jsx)('h2', {
                          className: 'title',
                          children: '\u0110\u0103ng nh\u1eadp',
                        }),
                        (0, i.jsxs)('div', {
                          className: 'sub-title',
                          children: [
                            (0, i.jsx)('span', {
                              children:
                                'B\u1ea1n ch\u01b0a c\xf3 t\xe0i kho\u1ea3n?\xa0',
                            }),
                            (0, i.jsx)(l.zx, {
                              buttonType: l.L$.LINK,
                              onClick: d,
                              children: '\u0110\u0103ng k\xfd',
                            }),
                          ],
                        }),
                      ],
                    }),
                  }),
                  (0, i.jsx)(T.gN, {
                    name: 'email',
                    placeholder:
                      'Nh\u1eadp Email ho\u1eb7c S\u1ed1 \u0111i\u1ec7n tho\u1ea1i',
                    component: l.UP,
                    submitOnEnter: !0,
                  }),
                  (0, i.jsx)(T.gN, {
                    name: 'password',
                    type: 'password',
                    placeholder: 'Nh\u1eadp m\u1eadt kh\u1ea9u',
                    component: l.UP,
                    submitOnEnter: !0,
                  }),
                  c &&
                    (0, i.jsx)(l.Xq, {
                      children: c,
                    }),
                  (0, i.jsxs)(we, {
                    children: [
                      'Qu\xean m\u1eadt kh\u1ea9u? nh\u1ea5n v\xe0o\xa0',
                      (0, i.jsx)(l.rU, {
                        href: P.ln.forgotPassword,
                        children: '\u0111\xe2y',
                      }),
                    ],
                  }),
                  (0, i.jsx)(ge, {
                    type: 'submit',
                    disabled: u,
                    block: !0,
                    children: u
                      ? '\u0110ang \u0111\u0103ng nh\u1eadp...'
                      : '\u0110\u0103ng nh\u1eadp',
                  }),
                  (0, i.jsx)(l.iz, {
                    children: 'Ho\u1eb7c, \u0111\u0103ng nh\u1eadp b\u1eb1ng',
                  }),
                  (0, i.jsxs)(ve, {
                    children: [
                      (0, i.jsx)(ge, {
                        loginMethod: j.eo.FACEBOOK,
                        onClick: o,
                        disabled: u,
                        block: !0,
                        children: 'Facebook',
                      }),
                      (0, i.jsx)(ge, {
                        onClick: a,
                        loginMethod: j.eo.GOOGLE,
                        disabled: u,
                        block: !0,
                        children: 'Google',
                      }),
                      (0, i.jsx)(ge, {
                        onClick: s,
                        loginMethod: j.eo.ZALO,
                        disabled: u,
                        block: !0,
                        children: 'Zalo',
                      }),
                    ],
                  }),
                ],
              });
            },
          });
        }),
        ke = (0, s.P)(function (e) {
          var n = e.loginPageViewModel,
            t = n.login,
            r = (0, c.useRouter)().query.username,
            o = a.useMemo(
              function () {
                return {
                  grant_type: j.ko.PASSWORD,
                  email: r,
                };
              },
              [r],
            ),
            s = a.useCallback(
              (function () {
                var e = (0, h.Z)(
                  p().mark(function e(n) {
                    return p().wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (e.next = 2), t(n);
                          case 2:
                          case 'end':
                            return e.stop();
                        }
                    }, e);
                  }),
                );
                return function (n) {
                  return e.apply(this, arguments);
                };
              })(),
              [t],
            );
          return (0, i.jsx)(ye, {
            loginPageViewModel: n,
            initialValues: o,
            handleSubmitLogin: s,
          });
        }),
        Pe = W.ZP.div.withConfig({
          displayName: 'InternalLoginForm__ButtonWrapper',
          componentId: 'sc-sxmcr9-0',
        })(['display:grid;grid-row-gap:12px;']),
        je = (0, s.P)(function (e) {
          var n = e.loginPageViewModel,
            t = n.internalLogin,
            r = n.googleLogin,
            o = n.loginError,
            s = n.submitting,
            u = (0, c.useRouter)().query.username,
            d = a.useMemo(
              function () {
                return {
                  email: u,
                };
              },
              [u],
            ),
            m = (function () {
              var e = (0, h.Z)(
                p().mark(function e(n) {
                  return p().wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (e.next = 2), t(n);
                        case 2:
                        case 'end':
                          return e.stop();
                      }
                  }, e);
                }),
              );
              return function (n) {
                return e.apply(this, arguments);
              };
            })();
          return (0, i.jsx)(T.l0, {
            onSubmit: m,
            initialValues: d,
            render: function (e) {
              var n = e.handleSubmit;
              return (0, i.jsxs)(xe, {
                onSubmit: function (e) {
                  e.preventDefault(), n(e);
                },
                submitOnEnter: !0,
                fieldStyles: {
                  rowGap: '16px',
                },
                children: [
                  (0, i.jsx)(l.ph, {
                    children: (0, i.jsx)('h2', {
                      className: 'title',
                      children:
                        '\u0110\u0103ng nh\u1eadp v\xe0o h\u1ec7 th\u1ed1ng TMS',
                    }),
                  }),
                  (0, i.jsx)(T.gN, {
                    name: 'email',
                    placeholder: 'Nh\u1eadp t\xean \u0111\u0103ng nh\u1eadp',
                    component: l.UP,
                    submitOnEnter: !0,
                  }),
                  (0, i.jsx)(T.gN, {
                    name: 'password',
                    type: 'password',
                    placeholder: 'Nh\u1eadp m\u1eadt kh\u1ea9u',
                    component: l.UP,
                    submitOnEnter: !0,
                  }),
                  o &&
                    (0, i.jsx)(l.Xq, {
                      children: o,
                    }),
                  (0, i.jsxs)(Pe, {
                    children: [
                      (0, i.jsx)(ge, {
                        type: 'submit',
                        loading: s,
                        loadingText: '\u0110ang \u0111\u0103ng nh\u1eadp..',
                        block: !0,
                        children: '\u0110\u0103ng nh\u1eadp',
                      }),
                      (0, i.jsx)(ge, {
                        onClick: r,
                        loginMethod: j.eo.GOOGLE,
                        disabled: s,
                        block: !0,
                        children: 'Login b\u1eb1ng Google',
                      }),
                    ],
                  }),
                ],
              });
            },
          });
        }),
        Oe = W.ZP.div.withConfig({
          displayName: 'KratosLoginForm__FormContent',
          componentId: 'sc-1g1meu-0',
        })([
          'display:flex;flex-direction:column;align-items:center;width:300px;margin:30px auto;',
        ]),
        Ze = (0, s.P)(function (e) {
          var n = e.loginPageViewModel.googleLogin;
          return (0, i.jsx)(xe, {
            children: (0, i.jsxs)(Oe, {
              children: [
                (0, i.jsx)(ae.default, {
                  src: '/images/tiki-logo.svg',
                  alt: '',
                  width: 40,
                  height: 40,
                }),
                (0, i.jsx)(be, {
                  children: 'Tiki Login',
                }),
                (0, i.jsx)(ge, {
                  onClick: n,
                  loginMethod: j.eo.GOOGLE,
                  block: !0,
                  children: 'Login using Tiki email',
                }),
              ],
            }),
          });
        }),
        Ce = (0, s.P)(function (e) {
          var n = e.loginPageViewModel,
            t = n.login,
            r = n.loginSource,
            o = (function () {
              var e = (0, h.Z)(
                p().mark(function e(n) {
                  return p().wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (e.next = 2), t(n);
                        case 2:
                        case 'end':
                          return e.stop();
                      }
                  }, e);
                }),
              );
              return function (n) {
                return e.apply(this, arguments);
              };
            })(),
            s = (0, c.useRouter)().query.username,
            l = a.useMemo(
              function () {
                return {
                  grant_type: j.ko.SSO,
                  source: r,
                  email: s,
                };
              },
              [r, s],
            );
          return (0, i.jsx)(ye, {
            initialValues: l,
            loginPageViewModel: n,
            handleSubmitLogin: o,
          });
        }),
        _e = t(57557),
        Se = t.n(_e),
        Me = (0, W.ZP)(l.l0).withConfig({
          displayName: 'styles__FormWrapper',
          componentId: 'sc-lv20zy-0',
        })([
          'display:flex;flex-direction:column;.message{font-size:18px;color:rgb(244,143,45);text-align:center;margin-bottom:16px;}.btn-submit{margin-bottom:12px;}',
        ]),
        Le = t(95142),
        Te = function e() {
          (0, m.Z)(this, e),
            (0, o.Z)(
              this,
              'handleChangePassword',
              (function () {
                var e = (0, h.Z)(
                  p().mark(function e(n, t) {
                    var r, i;
                    return p().wrap(
                      function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                (e.prev = 0),
                                (e.next = 3),
                                Z.Kk.authService.changePassword(n)
                              );
                            case 3:
                              (r = e.sent), t && t(r.data), (e.next = 11);
                              break;
                            case 7:
                              return (
                                (e.prev = 7),
                                (e.t0 = e.catch(0)),
                                (i = x()(e.t0, 'response.data.error.message')),
                                e.abrupt('return', (0, o.Z)({}, Le.Ck, i))
                              );
                            case 11:
                            case 'end':
                              return e.stop();
                          }
                      },
                      e,
                      null,
                      [[0, 7]],
                    );
                  }),
                );
                return function (n, t) {
                  return e.apply(this, arguments);
                };
              })(),
            ),
            (0, k.ky)(this);
        },
        Ee = 'REQUEST_CHANGE_PASSWORD_FORM',
        Ne = (0, s.P)(function (e) {
          var n = e.visible,
            t = e.onClose,
            o = e.loginPageViewModel,
            s = o.changePasswordInfo,
            c = o.loginSource,
            u = o.loginSuccessCallback,
            d = o.activeForm,
            m = o.processingOTPCode,
            f = (0, E.D)(Te).handleChangePassword,
            g = a.useMemo(
              function () {
                return d === r.IMPLICIT ? j.ko.SSO : j.ko.PASSWORD;
              },
              [d],
            ),
            x = a.useMemo(
              function () {
                return {
                  grant_type: g,
                  source: c,
                  email:
                    (null === s || void 0 === s ? void 0 : s.email) ||
                    (null === s || void 0 === s ? void 0 : s.phone_number),
                  otp_code: m,
                };
              },
              [
                g,
                null === s || void 0 === s ? void 0 : s.email,
                null === s || void 0 === s ? void 0 : s.phone_number,
                m,
                c,
              ],
            ),
            b = a.useCallback(
              (function () {
                var e = (0, h.Z)(
                  p().mark(function e(n) {
                    var t;
                    return p().wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (t = Se()(n, 'confirm_password')),
                              e.abrupt('return', f(t, u))
                            );
                          case 2:
                          case 'end':
                            return e.stop();
                        }
                    }, e);
                  }),
                );
                return function (n) {
                  return e.apply(this, arguments);
                };
              })(),
              [f, u],
            );
          return (0, i.jsx)(l.u_, {
            visible: n,
            onClose: t,
            children: (0, i.jsx)(T.l0, {
              initialValues: x,
              onSubmit: b,
              render: function (e) {
                var n = e.handleSubmit,
                  t = e.submitting,
                  r = e.submitError;
                return (0, i.jsxs)(Me, {
                  id: Ee,
                  onSubmit: n,
                  submitOnEnter: !0,
                  children: [
                    (0, i.jsx)('div', {
                      className: 'message',
                      children:
                        'Vui l\xf2ng c\u1eadp nh\u1eadt m\u1eadt kh\u1ea9u m\u1edbi',
                    }),
                    (0, i.jsx)(T.gN, {
                      name: 'email',
                      label: 'Email / S\u1ed1 \u0111i\u1ec7n tho\u1ea1i',
                      disabled: !0,
                      component: l.UP,
                      size: l.fz.LARGE,
                    }),
                    (0, i.jsx)(T.gN, {
                      name: 'password',
                      type: 'password',
                      label: 'M\u1eadt kh\u1ea9u c\u0169',
                      component: l.UP,
                      size: l.fz.LARGE,
                      placeholder: 'Nh\u1eadp m\u1eadt kh\u1ea9u c\u0169',
                    }),
                    (0, i.jsx)(T.gN, {
                      name: 'new_password',
                      type: 'password',
                      label: 'M\u1eadt kh\u1ea9u m\u1edbi',
                      validate: (0, V.v7)((0, V.C1)(), V.uo),
                      component: l.UP,
                      size: l.fz.LARGE,
                      placeholder: 'Nh\u1eadp m\u1eadt kh\u1ea9u m\u1edbi',
                    }),
                    (0, i.jsx)(T.gN, {
                      name: 'confirm_password',
                      type: 'password',
                      label: 'X\xe1c nh\u1eadn m\u1eadt kh\u1ea9u m\u1edbi',
                      validate: (0, V.v7)(
                        (0, V.C1)(),
                        (0, V.S$)('new_password'),
                      ),
                      component: l.UP,
                      size: l.fz.LARGE,
                      placeholder:
                        'Nh\u1eadp x\xe1c nh\u1eadn m\u1eadt kh\u1ea9u m\u1edbi',
                    }),
                    r &&
                      (0, i.jsx)(l.Xq, {
                        children: r,
                      }),
                    (0, i.jsx)(l.zx, {
                      className: 'btn-submit',
                      type: 'submit',
                      loading: t,
                      form: Ee,
                      size: l.w_.LARGE,
                      block: !0,
                      children: '\u0110\u1ed5i m\u1eadt kh\u1ea9u',
                    }),
                  ],
                });
              },
            }),
          });
        }),
        Ie = W.ZP.div.withConfig({
          displayName: 'styles__FormWrapper',
          componentId: 'sc-c0zqq5-0',
        })([
          '--form-min-height:250px;--form-min-width:400px;--form-max-width:500px;display:flex;flex-direction:column;align-items:center;padding:24px 0;min-width:var(--form-min-width);min-height:var(--form-min-height);max-width:var(--form-max-width);@media (max-width:600px){padding:20px 0;--form-min-width:320px;--form-min-height:200px;--form-max-width:400px;}@media (max-width:425px){padding:20px 0;--form-min-width:260px;--form-min-height:200px;--form-max-width:300px;}',
        ]),
        Re =
          (W.ZP.img.withConfig({
            displayName: 'styles__Logo',
            componentId: 'sc-c0zqq5-1',
          })(['width:40px;height:40px;']),
          W.ZP.div.withConfig({
            displayName: 'styles__Title',
            componentId: 'sc-c0zqq5-2',
          })([
            'font-size:24px;font-weight:300;text-align:center;margin:16px auto;@media (max-width:425px){font-size:20px;margin:8px 0;}',
          ])),
        ze = W.ZP.div.withConfig({
          displayName: 'styles__AccountList',
          componentId: 'sc-c0zqq5-3',
        })([
          'display:flex;flex-direction:column;width:100%;min-height:var(--form-min-height);overflow:auto;margin:12px 0;',
        ]),
        De = W.ZP.div.withConfig({
          displayName: 'styles__LinkWrapper',
          componentId: 'sc-c0zqq5-4',
        })(['margin-top:8px;']),
        Ve = W.ZP.div.withConfig({
          displayName: 'AccountItem__AccountWrapper',
          componentId: 'sc-1iodrb3-0',
        })(
          [
            'display:grid;grid-template-columns:',
            'px minmax(0,1fr) fit-content(100px);grid-column-gap:12px;max-width:100%;height:fit-content;align-items:center;padding:12px 36px;border-bottom:1px solid #eeeeee;cursor:pointer;&:hover{background:#e6f7ff;}> .user-info{width:100%;> *{max-width:100%;overflow:hidden;white-space:nowrap;text-overflow:ellipsis;}}.avatar{justify-self:center;}.title{font-size:14px;font-weight:500;}.small{font-size:12px;}@media (max-width:425px){padding:8px 12px;}',
          ],
          36,
        ),
        Ae = function (e) {
          var n = e.accountInfo,
            t = e.handleClickAccount,
            r = n.userInfo,
            o = (r = void 0 === r ? {} : r).avatar_url,
            a = r.email,
            s = r.raw_email,
            c = r.name,
            u = void 0 === c ? '' : c,
            d = n.accessToken,
            p = u[0],
            h = !!(0, C.XN)(d);
          return (0, i.jsxs)(Ve, {
            onClick: t,
            children: [
              (0, i.jsx)(l.qE, {
                src: o,
                text: p,
                type: 'circle',
                background: '#1DA8FF',
                size: 36,
              }),
              (0, i.jsxs)('div', {
                className: 'user-info',
                children: [
                  (0, i.jsx)('div', {
                    className: 'title',
                    children: u,
                  }),
                  (0, i.jsx)('div', {
                    className: 'small',
                    children: a || s,
                  }),
                ],
              }),
              (0, i.jsx)('div', {
                children:
                  !h &&
                  (0, i.jsx)('i', {
                    className: 'small',
                    children: '\u0110\xe3 \u0111\u0103ng xu\u1ea5t',
                  }),
              }),
            ],
          });
        },
        Ge = (0, s.P)(function (e) {
          var n = e.accountInfos,
            t = void 0 === n ? [] : n,
            r = Z.Wh.authModel,
            o = r.switchToLogin,
            s = r.switchAccount,
            c = a.useCallback(
              function (e) {
                return function () {
                  s(e);
                };
              },
              [s],
            ),
            u = a.useCallback(
              function () {
                o();
              },
              [o],
            );
          return (0, i.jsxs)(Ie, {
            children: [
              (0, i.jsx)(ae.default, {
                src: '/images/tiki-logo.svg',
                width: 40,
                height: 40,
                alt: '',
              }),
              (0, i.jsx)(Re, {
                children: 'Ch\u1ecdn t\xe0i kho\u1ea3n',
              }),
              (0, i.jsx)(ze, {
                children: t.map(function (e) {
                  return (0, i.jsx)(
                    Ae,
                    {
                      accountInfo: e,
                      handleClickAccount: c(e.customerId),
                    },
                    e.customerId,
                  );
                }),
              }),
              (0, i.jsx)(De, {
                children: (0, i.jsx)(l.rU, {
                  onClick: u,
                  children:
                    '\u0110\u0103ng nh\u1eadp t\xe0i kho\u1ea3n kh\xe1c',
                }),
              }),
            ],
          });
        }),
        Fe = W.ZP.div.withConfig({
          displayName: 'styles__ImageSection',
          componentId: 'sc-133vtjr-0',
        })([
          'padding:30px;background:white;> .title{font-size:32px;font-weight:300;margin-bottom:32px;}> img{width:100%;}',
        ]),
        Ue = W.ZP.div.withConfig({
          displayName: 'styles__FormContent',
          componentId: 'sc-133vtjr-1',
        })([
          'width:calc(100% - 24px);margin:12px;padding:36px 16px;background:white;@media (max-width:425px){margin:0;width:100%;}',
        ]),
        qe = (0, W.ZP)(l.l0).withConfig({
          displayName: 'styles__FormWrapper',
          componentId: 'sc-133vtjr-2',
        })(
          [
            'display:grid;grid-template-columns:minmax(0,2fr) minmax(0,3fr);@media (max-width:768px){',
            '{display:none;}grid-template-columns:minmax(0,1fr);}',
          ],
          Fe,
        ),
        We = W.ZP.div.withConfig({
          displayName: 'styles__FooterWrapper',
          componentId: 'sc-133vtjr-3',
        })([
          'display:grid;grid-template-columns:minmax(0,6fr) minmax(0,18fr);grid-column-gap:12px;.description{margin-top:16px;> span{color:black;}> *{font-size:12px;line-height:22px;}}@media (max-width:768px){grid-template-columns:minmax(0,1fr);}',
        ]),
        Be = (0, W.ZP)(l.u_).withConfig({
          displayName: 'styles__StyledModal',
          componentId: 'sc-133vtjr-4',
        })(['padding:0;background:rgb(248,248,248);']);

      function Ke(e) {
        var n = (function () {
          if ('undefined' === typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ('function' === typeof Proxy) return !0;
          try {
            return (
              Date.prototype.toString.call(
                Reflect.construct(Date, [], function () {}),
              ),
              !0
            );
          } catch (e) {
            return !1;
          }
        })();
        return function () {
          var t,
            r = (0, z.Z)(e);
          if (n) {
            var i = (0, z.Z)(this).constructor;
            t = Reflect.construct(r, arguments, i);
          } else t = r.apply(this, arguments);
          return (0, R.Z)(this, t);
        };
      }
      var Xe = (function (e) {
          (0, I.Z)(t, e);
          var n = Ke(t);

          function t() {
            var e;
            return (
              (0, m.Z)(this, t),
              (e = n.call(this)),
              (0, o.Z)((0, N.Z)(e), 'loginPageViewModel', void 0),
              (0, o.Z)((0, N.Z)(e), 'init', function (n) {
                e.loginPageViewModel = n;
              }),
              (0, o.Z)(
                (0, N.Z)(e),
                'handleSubmitForm',
                (function () {
                  var n = (0, h.Z)(
                    p().mark(function n(t) {
                      return p().wrap(function (n) {
                        for (;;)
                          switch ((n.prev = n.next)) {
                            case 0:
                              if (t.action !== j.V_.RESEND_OTP) {
                                n.next = 3;
                                break;
                              }
                              return n.abrupt('return', e.processRequestOTP(t));
                            case 3:
                              return n.abrupt('return', e.submitRegister(t));
                            case 4:
                            case 'end':
                              return n.stop();
                          }
                      }, n);
                    }),
                  );
                  return function (e) {
                    return n.apply(this, arguments);
                  };
                })(),
              ),
              (0, o.Z)(
                (0, N.Z)(e),
                'submitRegister',
                (function () {
                  var n = (0, h.Z)(
                    p().mark(function n(t) {
                      var r, i;
                      return p().wrap(
                        function (n) {
                          for (;;)
                            switch ((n.prev = n.next)) {
                              case 0:
                                return (
                                  (n.prev = 0),
                                  (n.next = 3),
                                  Z.Kk.authService.registerCustomerAccount(t)
                                );
                              case 3:
                                (r = n.sent),
                                  e.loginPageViewModel.loginSuccessCallback(
                                    r.data,
                                  ),
                                  (n.next = 11);
                                break;
                              case 7:
                                return (
                                  (n.prev = 7),
                                  (n.t0 = n.catch(0)),
                                  (i = x()(n.t0, 'response.data.error', {})),
                                  n.abrupt('return', (0, C.a3)(i))
                                );
                              case 11:
                              case 'end':
                                return n.stop();
                            }
                        },
                        n,
                        null,
                        [[0, 7]],
                      );
                    }),
                  );
                  return function (e) {
                    return n.apply(this, arguments);
                  };
                })(),
              ),
              (0, k.rC)((0, N.Z)(e), {
                handleSubmitForm: k.aD,
                submitRegister: k.aD,
              }),
              e
            );
          }
          return t;
        })(A),
        He = (0, s.P)(function (e) {
          var n = e.visible,
            t = e.onClose,
            r = e.loginPageViewModel,
            o = (0, E.D)(Xe),
            s = o.init,
            c = o.countDownTime,
            u = o.disabledSendOTP,
            d = o.handleSubmitForm,
            p = o.handleClickRequestOTP,
            h = Z.Kk.isMobileScreen;
          return (
            a.useEffect(
              function () {
                s(r);
              },
              [r],
            ),
            (0, i.jsx)(Be, {
              visible: n,
              onClose: t,
              width: '900px',
              children: (0, i.jsx)(T.l0, {
                onSubmit: d,
                initialValues: {
                  action: j.V_.SUBMIT,
                },
                render: function (e) {
                  var n = e.handleSubmit,
                    t = e.form;
                  return (0, i.jsxs)(qe, {
                    onSubmit: n,
                    fieldStyles: {
                      rowGap: '16px',
                      formLayout: h ? l.lt.VERTICAL : l.lt.HORIZONTAL,
                    },
                    children: [
                      (0, i.jsxs)(Fe, {
                        children: [
                          (0, i.jsx)('div', {
                            className: 'title',
                            children: '\u0110\u0103ng k\xfd',
                          }),
                          (0, i.jsx)(ae.default, {
                            src: '/images/tiki-vn-map.png',
                            alt: '',
                            width: 310,
                            height: 329,
                          }),
                        ],
                      }),
                      (0, i.jsxs)(Ue, {
                        children: [
                          (0, i.jsx)(T.gN, {
                            name: 'full_name',
                            label: 'H\u1ecd t\xean',
                            placeholder: 'Nh\u1eadp h\u1ecd t\xean',
                            component: l.UP,
                            size: l.fz.LARGE,
                          }),
                          (0, i.jsx)(T.gN, {
                            name: 'phone_number',
                            label: 'S\u1ed1 \u0111i\u1ec7n tho\u1ea1i',
                            placeholder:
                              'Nh\u1eadp s\u1ed1 \u0111i\u1ec7n tho\u1ea1i',
                            component: l.UP,
                            size: l.fz.LARGE,
                            action: (0, i.jsx)(l.zx, {
                              onClick: p(t),
                              disabled: u,
                              children: c
                                ? 'G\u1eedi l\u1ea1i ('.concat(c, 's)')
                                : 'G\u1eedi m\xe3 x\xe1c th\u1ef1c',
                            }),
                          }),
                          (0, i.jsx)(T.gN, {
                            name: 'otp_code',
                            label: 'M\xe3 x\xe1c th\u1ef1c',
                            autoComplete: 'new-password',
                            placeholder:
                              'Nh\u1eadp m\xe3 x\xe1c th\u1ef1c g\u1eedi t\u1edbi s\u1ed1 \u0111i\u1ec7n tho\u1ea1i tr\xean',
                            component: l.UP,
                            size: l.fz.LARGE,
                          }),
                          (0, i.jsx)(T.gN, {
                            name: 'password',
                            type: 'password',
                            label: 'M\u1eadt kh\u1ea9u',
                            autoComplete: 'new-password',
                            placeholder:
                              'M\u1eadt kh\u1ea9u t\u1eeb 8 \u0111\u1ebfn 32 k\xfd t\u1ef1',
                            component: l.UP,
                            size: l.fz.LARGE,
                          }),
                          (0, i.jsxs)(We, {
                            children: [
                              (0, i.jsx)('div', {}),
                              (0, i.jsxs)('div', {
                                children: [
                                  (0, i.jsx)(l.zx, {
                                    type: 'submit',
                                    size: l.w_.LARGE,
                                    block: !0,
                                    children: '\u0110\u0103ng k\xfd',
                                  }),
                                  (0, i.jsxs)('div', {
                                    className: 'description',
                                    children: [
                                      (0, i.jsx)('span', {
                                        children:
                                          'Khi b\u1ea1n nh\u1ea5n \u0110\u0103ng k\xfd, b\u1ea1n \u0111\xe3 \u0111\u1ed3ng \xfd th\u1ef1c hi\u1ec7n m\u1ecdi giao d\u1ecbch mua b\xe1n theo',
                                      }),
                                      '\xa0',
                                      (0, i.jsx)(l.rU, {
                                        href: P.Jx.termCondition,
                                        children:
                                          '\u0111i\u1ec1u ki\u1ec7n s\u1eed d\u1ee5ng v\xe0 ch\xednh s\xe1ch c\u1ee7a Tiki',
                                      }),
                                      '.',
                                    ],
                                  }),
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  });
                },
              }),
            })
          );
        }),
        Qe = (0, s.P)(function (e) {
          var n = e.loginChallenge,
            t = e.referer,
            s = e.hasAccountInfos,
            d = e.accountInfos,
            p = e.isSocialCallback,
            h = (0, u.D)(L),
            m = h.init,
            f = h.activeForm,
            g = h.showSocialVerifyModal,
            x = h.handleCloseVerifyModal,
            b = h.showLoginOTPModal,
            v = h.handleCloseLoginOtpModal,
            w = h.showRegisterModal,
            y = h.handleOpenRegisterModal,
            k = h.handleCloseRegisterModal,
            j = h.showChangePasswordModal,
            O = h.handleCloseChangePasswordModal,
            Z = (0, c.useRouter)().query.action,
            C = M(t),
            _ = f || C;
          a.useEffect(
            function () {
              m(n);
            },
            [n],
          ),
            a.useEffect(
              function () {
                Z === P.ET.register && y();
              },
              [Z],
            );
          var S = a.useMemo(
              function () {
                var e;
                return ((e = {}),
                (0, o.Z)(e, r.CUSTOMER, ke),
                (0, o.Z)(e, r.TMS, je),
                (0, o.Z)(e, r.INTERNAL, Ze),
                (0, o.Z)(e, r.IMPLICIT, Ce),
                e)[_];
              },
              [_],
            ),
            T = a.useMemo(
              function () {
                return p
                  ? function () {
                      return (0, i.jsx)('div', {
                        style: {
                          width: '180px',
                        },
                        children: (0, i.jsx)(l.yC, {
                          spinning: !0,
                        }),
                      });
                    }
                  : s
                  ? Ge
                  : S;
              },
              [s, p, S],
            );
          return T
            ? (0, i.jsxs)(l.FE, {
                children: [
                  (0, i.jsx)(T, {
                    loginPageViewModel: h,
                    accountInfos: d,
                  }),
                  (0, i.jsx)(ie, {
                    visible: b,
                    onClose: v,
                    loginPageViewModel: h,
                  }),
                  (0, i.jsx)(Ne, {
                    visible: j,
                    onClose: O,
                    loginPageViewModel: h,
                  }),
                  (0, i.jsx)(H, {
                    loginPageViewModel: h,
                    visible: g,
                    onClose: x,
                  }),
                  (0, i.jsx)(He, {
                    loginPageViewModel: h,
                    visible: w,
                    onClose: k,
                  }),
                ],
              })
            : null;
        });
    },
  },
]);
