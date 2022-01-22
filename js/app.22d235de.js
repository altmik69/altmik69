(function(e) {
    function t(t) {
        for (var c, a, i = t[0], s = t[1], l = t[2], d = 0, u = []; d < i.length; d++) a = i[d], Object.prototype.hasOwnProperty.call(r, a) && r[a] && u.push(r[a][0]), r[a] = 0;
        for (c in s) Object.prototype.hasOwnProperty.call(s, c) && (e[c] = s[c]);
        b && b(t);
        while (u.length) u.shift()();
        return o.push.apply(o, l || []), n()
    }

    function n() {
        for (var e, t = 0; t < o.length; t++) {
            for (var n = o[t], c = !0, a = 1; a < n.length; a++) {
                var i = n[a];
                0 !== r[i] && (c = !1)
            }
            c && (o.splice(t--, 1), e = s(s.s = n[0]))
        }
        return e
    }
    var c = {},
        a = {
            app: 0
        },
        r = {
            app: 0
        },
        o = [];

    function i(e) {
        return s.p + "js/" + ({
            Chat: "Chat",
            Hidden: "Hidden",
            Tutorial: "Tutorial"
        }[e] || e) + "." + {
            Chat: "2b2ad2f3",
            Hidden: "49e32582",
            Tutorial: "63d374cc"
        }[e] + ".js"
    }

    function s(t) {
        if (c[t]) return c[t].exports;
        var n = c[t] = {
            i: t,
            l: !1,
            exports: {}
        };
        return e[t].call(n.exports, n, n.exports, s), n.l = !0, n.exports
    }
    s.e = function(e) {
        var t = [],
            n = {
                Chat: 1,
                Hidden: 1
            };
        a[e] ? t.push(a[e]) : 0 !== a[e] && n[e] && t.push(a[e] = new Promise((function(t, n) {
            for (var c = "css/" + ({
                    Chat: "Chat",
                    Hidden: "Hidden",
                    Tutorial: "Tutorial"
                }[e] || e) + "." + {
                    Chat: "eeb4e3a3",
                    Hidden: "76ce1541",
                    Tutorial: "31d6cfe0"
                }[e] + ".css", r = s.p + c, o = document.getElementsByTagName("link"), i = 0; i < o.length; i++) {
                var l = o[i],
                    d = l.getAttribute("data-href") || l.getAttribute("href");
                if ("stylesheet" === l.rel && (d === c || d === r)) return t()
            }
            var u = document.getElementsByTagName("style");
            for (i = 0; i < u.length; i++) {
                l = u[i], d = l.getAttribute("data-href");
                if (d === c || d === r) return t()
            }
            var b = document.createElement("link");
            b.rel = "stylesheet", b.type = "text/css", b.onload = t, b.onerror = function(t) {
                var c = t && t.target && t.target.src || r,
                    o = new Error("Loading CSS chunk " + e + " failed.\n(" + c + ")");
                o.code = "CSS_CHUNK_LOAD_FAILED", o.request = c, delete a[e], b.parentNode.removeChild(b), n(o)
            }, b.href = r;
            var m = document.getElementsByTagName("head")[0];
            m.appendChild(b)
        })).then((function() {
            a[e] = 0
        })));
        var c = r[e];
        if (0 !== c)
            if (c) t.push(c[2]);
            else {
                var o = new Promise((function(t, n) {
                    c = r[e] = [t, n]
                }));
                t.push(c[2] = o);
                var l, d = document.createElement("script");
                d.charset = "utf-8", d.timeout = 120, s.nc && d.setAttribute("nonce", s.nc), d.src = i(e);
                var u = new Error;
                l = function(t) {
                    d.onerror = d.onload = null, clearTimeout(b);
                    var n = r[e];
                    if (0 !== n) {
                        if (n) {
                            var c = t && ("load" === t.type ? "missing" : t.type),
                                a = t && t.target && t.target.src;
                            u.message = "Loading chunk " + e + " failed.\n(" + c + ": " + a + ")", u.name = "ChunkLoadError", u.type = c, u.request = a, n[1](u)
                        }
                        r[e] = void 0
                    }
                };
                var b = setTimeout((function() {
                    l({
                        type: "timeout",
                        target: d
                    })
                }), 12e4);
                d.onerror = d.onload = l, document.head.appendChild(d)
            }
        return Promise.all(t)
    }, s.m = e, s.c = c, s.d = function(e, t, n) {
        s.o(e, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: n
        })
    }, s.r = function(e) {
        "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }, s.t = function(e, t) {
        if (1 & t && (e = s(e)), 8 & t) return e;
        if (4 & t && "object" === typeof e && e && e.__esModule) return e;
        var n = Object.create(null);
        if (s.r(n), Object.defineProperty(n, "default", {
                enumerable: !0,
                value: e
            }), 2 & t && "string" != typeof e)
            for (var c in e) s.d(n, c, function(t) {
                return e[t]
            }.bind(null, c));
        return n
    }, s.n = function(e) {
        var t = e && e.__esModule ? function() {
            return e["default"]
        } : function() {
            return e
        };
        return s.d(t, "a", t), t
    }, s.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, s.p = "/", s.oe = function(e) {
        throw console.error(e), e
    };
    var l = window["webpackJsonp"] = window["webpackJsonp"] || [],
        d = l.push.bind(l);
    l.push = t, l = l.slice();
    for (var u = 0; u < l.length; u++) t(l[u]);
    var b = d;
    o.push([0, "chunk-vendors"]), n()
})({
    0: function(e, t, n) {
        e.exports = n("56d7")
    },
    "0393": function(e, t, n) {
        "use strict";
        n("ed01")
    },
    "0443": function(e, t, n) {
        e.exports = n.p + "img/map.325be63a.svg"
    },
    "0a08": function(e, t, n) {
        "use strict";
        n("4975")
    },
    "0b74": function(e, t, n) {
        "use strict";
        n("3f32")
    },
    "128f": function(e, t, n) {},
    "14fb": function(e, t, n) {},
    "194e": function(e, t, n) {
        e.exports = n.p + "img/history-checked.6d1c01e2.svg"
    },
    1981: function(e, t, n) {},
    "1c27": function(e, t, n) {
        e.exports = n.p + "img/success.fe8ec4a0.svg"
    },
    "1d3a": function(e, t, n) {
        e.exports = n.p + "img/metro.4e620219.svg"
    },
    "1e31": function(e, t, n) {
        e.exports = n.p + "img/loading.af446da2.svg"
    },
    "1edf": function(e, t, n) {
        e.exports = n.p + "img/metro.fcf91cb8.svg"
    },
    "1f4a": function(e, t, n) {
        e.exports = n.p + "img/caret.87b63694.svg"
    },
    "1fac": function(e, t, n) {},
    2027: function(e, t, n) {
        e.exports = n.p + "img/boat.3f8c9b74.svg"
    },
    2300: function(e, t, n) {
        e.exports = n.p + "img/BCD.6ec894ad.png"
    },
    "249c": function(e, t, n) {
        "use strict";
        n("b151")
    },
    "2c30": function(e, t, n) {
        "use strict";
        n("7904")
    },
    "2f35": function(e, t, n) {},
    "30ab": function(e, t, n) {
        e.exports = n.p + "img/map-a.ea7f6617.svg"
    },
    "310f": function(e, t, n) {},
    3877: function(e, t, n) {
        "use strict";
        n("f968")
    },
    "388d": function(e, t, n) {
        "use strict";
        n("dc20")
    },
    "3c97": function(e, t, n) {},
    "3ea3": function(e, t, n) {
        "use strict";
        n("d326")
    },
    "3f32": function(e, t, n) {},
    "3f88": function(e, t, n) {},
    "3fa5": function(e, t, n) {
        "use strict";
        n("e3ef")
    },
    "3fbb": function(e, t, n) {
        e.exports = n.p + "img/bus.c85074dd.svg"
    },
    "40a1": function(e, t, n) {
        e.exports = n.p + "img/link.9cddb447.svg"
    },
    "45a7": function(e, t, n) {
        "use strict";
        n("1981")
    },
    "45f4": function(e, t, n) {
        e.exports = n.p + "img/hidden.7c751280.png"
    },
    4678: function(e, t, n) {
        var c = {
            "./af": "2bfb",
            "./af.js": "2bfb",
            "./ar": "8e73",
            "./ar-dz": "a356",
            "./ar-dz.js": "a356",
            "./ar-kw": "423e",
            "./ar-kw.js": "423e",
            "./ar-ly": "1cfd",
            "./ar-ly.js": "1cfd",
            "./ar-ma": "0a84",
            "./ar-ma.js": "0a84",
            "./ar-sa": "8230",
            "./ar-sa.js": "8230",
            "./ar-tn": "6d83",
            "./ar-tn.js": "6d83",
            "./ar.js": "8e73",
            "./az": "485c",
            "./az.js": "485c",
            "./be": "1fc1",
            "./be.js": "1fc1",
            "./bg": "84aa",
            "./bg.js": "84aa",
            "./bm": "a7fa",
            "./bm.js": "a7fa",
            "./bn": "9043",
            "./bn-bd": "9686",
            "./bn-bd.js": "9686",
            "./bn.js": "9043",
            "./bo": "d26a",
            "./bo.js": "d26a",
            "./br": "6887",
            "./br.js": "6887",
            "./bs": "2554",
            "./bs.js": "2554",
            "./ca": "d716",
            "./ca.js": "d716",
            "./cs": "3c0d",
            "./cs.js": "3c0d",
            "./cv": "03ec",
            "./cv.js": "03ec",
            "./cy": "9797",
            "./cy.js": "9797",
            "./da": "0f14",
            "./da.js": "0f14",
            "./de": "b469",
            "./de-at": "b3eb",
            "./de-at.js": "b3eb",
            "./de-ch": "bb71",
            "./de-ch.js": "bb71",
            "./de.js": "b469",
            "./dv": "598a",
            "./dv.js": "598a",
            "./el": "8d47",
            "./el.js": "8d47",
            "./en-au": "0e6b",
            "./en-au.js": "0e6b",
            "./en-ca": "3886",
            "./en-ca.js": "3886",
            "./en-gb": "39a6",
            "./en-gb.js": "39a6",
            "./en-ie": "e1d3",
            "./en-ie.js": "e1d3",
            "./en-il": "7333",
            "./en-il.js": "7333",
            "./en-in": "ec2e",
            "./en-in.js": "ec2e",
            "./en-nz": "6f50",
            "./en-nz.js": "6f50",
            "./en-sg": "b7e9",
            "./en-sg.js": "b7e9",
            "./eo": "65db",
            "./eo.js": "65db",
            "./es": "898b",
            "./es-do": "0a3c",
            "./es-do.js": "0a3c",
            "./es-mx": "b5b7",
            "./es-mx.js": "b5b7",
            "./es-us": "55c9",
            "./es-us.js": "55c9",
            "./es.js": "898b",
            "./et": "ec18",
            "./et.js": "ec18",
            "./eu": "0ff2",
            "./eu.js": "0ff2",
            "./fa": "8df4",
            "./fa.js": "8df4",
            "./fi": "81e9",
            "./fi.js": "81e9",
            "./fil": "d69a",
            "./fil.js": "d69a",
            "./fo": "0721",
            "./fo.js": "0721",
            "./fr": "9f26",
            "./fr-ca": "d9f8",
            "./fr-ca.js": "d9f8",
            "./fr-ch": "0e49",
            "./fr-ch.js": "0e49",
            "./fr.js": "9f26",
            "./fy": "7118",
            "./fy.js": "7118",
            "./ga": "5120",
            "./ga.js": "5120",
            "./gd": "f6b4",
            "./gd.js": "f6b4",
            "./gl": "8840",
            "./gl.js": "8840",
            "./gom-deva": "aaf2",
            "./gom-deva.js": "aaf2",
            "./gom-latn": "0caa",
            "./gom-latn.js": "0caa",
            "./gu": "e0c5",
            "./gu.js": "e0c5",
            "./he": "c7aa",
            "./he.js": "c7aa",
            "./hi": "dc4d",
            "./hi.js": "dc4d",
            "./hr": "4ba9",
            "./hr.js": "4ba9",
            "./hu": "5b14",
            "./hu.js": "5b14",
            "./hy-am": "d6b6",
            "./hy-am.js": "d6b6",
            "./id": "5038",
            "./id.js": "5038",
            "./is": "0558",
            "./is.js": "0558",
            "./it": "6e98",
            "./it-ch": "6f12",
            "./it-ch.js": "6f12",
            "./it.js": "6e98",
            "./ja": "079e",
            "./ja.js": "079e",
            "./jv": "b540",
            "./jv.js": "b540",
            "./ka": "201b",
            "./ka.js": "201b",
            "./kk": "6d79",
            "./kk.js": "6d79",
            "./km": "e81d",
            "./km.js": "e81d",
            "./kn": "3e92",
            "./kn.js": "3e92",
            "./ko": "22f8",
            "./ko.js": "22f8",
            "./ku": "2421",
            "./ku.js": "2421",
            "./ky": "9609",
            "./ky.js": "9609",
            "./lb": "440c",
            "./lb.js": "440c",
            "./lo": "b29d",
            "./lo.js": "b29d",
            "./lt": "26f9",
            "./lt.js": "26f9",
            "./lv": "b97c",
            "./lv.js": "b97c",
            "./me": "293c",
            "./me.js": "293c",
            "./mi": "688b",
            "./mi.js": "688b",
            "./mk": "6909",
            "./mk.js": "6909",
            "./ml": "02fb",
            "./ml.js": "02fb",
            "./mn": "958b",
            "./mn.js": "958b",
            "./mr": "39bd",
            "./mr.js": "39bd",
            "./ms": "ebe4",
            "./ms-my": "6403",
            "./ms-my.js": "6403",
            "./ms.js": "ebe4",
            "./mt": "1b45",
            "./mt.js": "1b45",
            "./my": "8689",
            "./my.js": "8689",
            "./nb": "6ce3",
            "./nb.js": "6ce3",
            "./ne": "3a39",
            "./ne.js": "3a39",
            "./nl": "facd",
            "./nl-be": "db29",
            "./nl-be.js": "db29",
            "./nl.js": "facd",
            "./nn": "b84c",
            "./nn.js": "b84c",
            "./oc-lnc": "167b",
            "./oc-lnc.js": "167b",
            "./pa-in": "f3ff",
            "./pa-in.js": "f3ff",
            "./pl": "8d57",
            "./pl.js": "8d57",
            "./pt": "f260",
            "./pt-br": "d2d4",
            "./pt-br.js": "d2d4",
            "./pt.js": "f260",
            "./ro": "972c",
            "./ro.js": "972c",
            "./ru": "957c",
            "./ru.js": "957c",
            "./sd": "6784",
            "./sd.js": "6784",
            "./se": "ffff",
            "./se.js": "ffff",
            "./si": "eda5",
            "./si.js": "eda5",
            "./sk": "7be6",
            "./sk.js": "7be6",
            "./sl": "8155",
            "./sl.js": "8155",
            "./sq": "c8f3",
            "./sq.js": "c8f3",
            "./sr": "cf1e",
            "./sr-cyrl": "13e9",
            "./sr-cyrl.js": "13e9",
            "./sr.js": "cf1e",
            "./ss": "52bd",
            "./ss.js": "52bd",
            "./sv": "5fbd",
            "./sv.js": "5fbd",
            "./sw": "74dc",
            "./sw.js": "74dc",
            "./ta": "3de5",
            "./ta.js": "3de5",
            "./te": "5cbb",
            "./te.js": "5cbb",
            "./tet": "576c",
            "./tet.js": "576c",
            "./tg": "3b1b",
            "./tg.js": "3b1b",
            "./th": "10e8",
            "./th.js": "10e8",
            "./tk": "5aff",
            "./tk.js": "5aff",
            "./tl-ph": "0f38",
            "./tl-ph.js": "0f38",
            "./tlh": "cf75",
            "./tlh.js": "cf75",
            "./tr": "0e81",
            "./tr.js": "0e81",
            "./tzl": "cf51",
            "./tzl.js": "cf51",
            "./tzm": "c109",
            "./tzm-latn": "b53d",
            "./tzm-latn.js": "b53d",
            "./tzm.js": "c109",
            "./ug-cn": "6117",
            "./ug-cn.js": "6117",
            "./uk": "ada2",
            "./uk.js": "ada2",
            "./ur": "5294",
            "./ur.js": "5294",
            "./uz": "2e8c",
            "./uz-latn": "010e",
            "./uz-latn.js": "010e",
            "./uz.js": "2e8c",
            "./vi": "2921",
            "./vi.js": "2921",
            "./x-pseudo": "fd7e",
            "./x-pseudo.js": "fd7e",
            "./yo": "7f33",
            "./yo.js": "7f33",
            "./zh-cn": "5c3a",
            "./zh-cn.js": "5c3a",
            "./zh-hk": "49ab",
            "./zh-hk.js": "49ab",
            "./zh-mo": "3a6c",
            "./zh-mo.js": "3a6c",
            "./zh-tw": "90ea",
            "./zh-tw.js": "90ea"
        };

        function a(e) {
            var t = r(e);
            return n(t)
        }

        function r(e) {
            if (!n.o(c, e)) {
                var t = new Error("Cannot find module '" + e + "'");
                throw t.code = "MODULE_NOT_FOUND", t
            }
            return c[e]
        }
        a.keys = function() {
            return Object.keys(c)
        }, a.resolve = r, e.exports = a, a.id = "4678"
    },
    "494f": function(e, t, n) {
        e.exports = n.p + "img/CD.dbae854d.png"
    },
    4975: function(e, t, n) {},
    "49a0": function(e, t, n) {},
    "522e": function(e, t, n) {
        e.exports = n.p + "img/D.62cb72f0.png"
    },
    "56d7": function(e, t, n) {
        "use strict";
        n.r(t);
        n("e260"), n("e6cf"), n("cca6"), n("a79d");
        var c = n("7a23");

        function a(e, t, n, a, r, o) {
            var i = Object(c["resolveComponent"])("router-view");
            return Object(c["openBlock"])(), Object(c["createBlock"])(i)
        }
        var r = {
                name: "App"
            },
            o = (n("8fc3"), n("d959")),
            i = n.n(o);
        const s = i()(r, [
            ["render", a]
        ]);
        var l = s,
            d = n("b85c"),
            u = (n("d3b7"), n("ddb0"), n("9483"));
        Object(u["a"])("".concat("/", "service-worker.js"), {
            registered: function() {
                console.log("Service worker has been registered.")
            },
            cached: function() {
                console.log("Content has been cached for offline use.")
            },
            updatefound: function() {
                console.log("New content is downloading.")
            },
            updated: function() {
                caches.keys().then((function(e) {
                    var t, n = Object(d["a"])(e);
                    try {
                        for (n.s(); !(t = n.n()).done;) {
                            var c = t.value;
                            caches.delete(c)
                        }
                    } catch (a) {
                        n.e(a)
                    } finally {
                        n.f()
                    }
                }))
            },
            offline: function() {
                console.log("No internet connection found. App is running in offline mode.")
            },
            error: function(e) {
                console.error("Error during service worker registration:", e)
            }
        });
        n("3ca3"), n("b0c0");
        var b = n("6c02"),
            m = {
                class: "wrapper"
            };

        function p(e, t, n, a, r, o) {
            var i = Object(c["resolveComponent"])("router-view"),
                s = Object(c["resolveComponent"])("Footer"),
                l = Object(c["resolveComponent"])("Modal");
            return Object(c["openBlock"])(), Object(c["createElementBlock"])("div", m, [Object(c["createVNode"])(i), Object(c["createVNode"])(s), Object(c["createVNode"])(l)])
        }
        var f = {
                ref: "footer"
            },
            j = {
                class: "wrapper"
            },
            v = Object(c["createTextVNode"])("KOTI"),
            O = Object(c["createTextVNode"])("LIPUT"),
            h = Object(c["createTextVNode"])("REITTIOPAS"),
            k = Object(c["createTextVNode"])("LISÄÄ");

        function g(e, t, n, a, r, o) {
            var i = Object(c["resolveComponent"])("Nav");
            return Object(c["openBlock"])(), Object(c["createElementBlock"])("footer", f, [Object(c["createElementVNode"])("div", j, [Object(c["createVNode"])(i, {
                linkTo: "/hsl/home",
                iconName: "home"
            }, {
                default: Object(c["withCtx"])((function() {
                    return [v]
                })),
                _: 1
            }), Object(c["createVNode"])(i, {
                linkTo: "/hsl/ticket",
                also: ["/hsl/history"],
                iconName: "ticket"
            }, {
                default: Object(c["withCtx"])((function() {
                    return [O]
                })),
                _: 1
            }), Object(c["createVNode"])(i, {
                linkTo: "/hsl/guide",
                iconName: "map"
            }, {
                default: Object(c["withCtx"])((function() {
                    return [h]
                })),
                _: 1
            }), Object(c["createVNode"])(i, {
                linkTo: "/hsl/more",
                iconName: "hamburger"
            }, {
                default: Object(c["withCtx"])((function() {
                    return [k]
                })),
                _: 1
            })])], 512)
        }
        var E = ["src"];

        function y(e, t, a, r, o, i) {
            var s = Object(c["resolveComponent"])("router-link");
            return Object(c["openBlock"])(), Object(c["createBlock"])(s, {
                to: a.linkTo,
                class: "nav"
            }, {
                default: Object(c["withCtx"])((function(t) {
                    var r = t.isActive;
                    return [Object(c["createElementVNode"])("img", {
                        src: n("6f32")("./" + a.iconName + (r || i.isAlso ? "-a" : "") + ".svg")
                    }, null, 8, E), Object(c["createElementVNode"])("span", {
                        class: Object(c["normalizeClass"])({
                            active: r || i.isAlso
                        })
                    }, [Object(c["renderSlot"])(e.$slots, "default", {}, void 0, !0)], 2)]
                })),
                _: 3
            }, 8, ["to"])
        }
        n("caad"), n("2532");
        var N = {
            props: {
                iconName: String,
                linkTo: String,
                also: {
                    type: Array,
                    default: function() {
                        return []
                    }
                }
            },
            computed: {
                isAlso: function() {
                    return this.also.includes(this.$route.fullPath)
                }
            }
        };
        n("b9b9");
        const V = i()(N, [
            ["render", y],
            ["__scopeId", "data-v-3d781fd6"]
        ]);
        var w = V,
            x = {
                name: "Footer",
                mounted: function() {
                    this.$refs.footer.addEventListener("touchmove", (function(e) {
                        e.preventDefault()
                    }), !1)
                },
                components: {
                    Nav: w
                }
            };
        n("6cb3");
        const B = i()(x, [
            ["render", g],
            ["__scopeId", "data-v-dfbaf5ac"]
        ]);
        var C = B,
            T = n("1f4a"),
            S = n.n(T),
            D = function(e) {
                return Object(c["pushScopeId"])("data-v-e305566e"), e = e(), Object(c["popScopeId"])(), e
            },
            I = {
                class: "modal"
            },
            _ = {
                class: "header"
            },
            A = ["src"],
            M = D((function() {
                return Object(c["createElementVNode"])("span", {
                    class: "title"
                }, "Reittikohtaisen lipputarpeesi näet", -1)
            })),
            L = Object(c["createTextVNode"])("HSL:n reittioppaasta "),
            q = D((function() {
                return Object(c["createElementVNode"])("img", {
                    src: S.a
                }, null, -1)
            })),
            z = [L, q];

        function Y(e, t, a, r, o, i) {
            return Object(c["openBlock"])(), Object(c["createElementBlock"])("div", {
                class: Object(c["normalizeClass"])(["darkness", {
                    show: e.active,
                    hide: e.fadeOut && e.active
                }]),
                ref: "darkness"
            }, [Object(c["createElementVNode"])("div", I, [Object(c["createElementVNode"])("span", _, Object(c["toDisplayString"])(e.modalArea) + "-lipun matkustusalue", 1), Object(c["createElementVNode"])("img", {
                src: n("f799")("./" + e.modalArea + ".png"),
                class: "map"
            }, null, 8, A), M, Object(c["createElementVNode"])("span", {
                class: "link",
                onClick: t[0] || (t[0] = function(e) {
                    return i.openSettings()
                })
            }, z), Object(c["createElementVNode"])("button", {
                class: "close",
                onClick: t[1] || (t[1] = function(e) {
                    return i.close()
                })
            }, "Sulje")])], 2)
        }
        var H = n("5502"),
            Q = {
                name: "Modal",
                data: function() {
                    return {
                        fadeOut: !1
                    }
                },
                computed: Object(H["e"])({
                    active: "modalOpen",
                    modalArea: "modalArea"
                }),
                methods: {
                    close: function() {
                        var e = this;
                        this.fadeOut = !0, setTimeout((function() {
                            e.$store.commit("closeModal"), e.fadeOut = !1
                        }), 800)
                    },
                    openSettings: function() {
                        this.$router.push("/hidden/settings")
                    }
                },
                watch: {
                    active: function() {
                        document.body.style.overflowY = this.active ? "hidden" : ""
                    }
                }
            };
        n("9394");
        const P = i()(Q, [
            ["render", Y],
            ["__scopeId", "data-v-e305566e"]
        ]);
        var F = P,
            U = {
                name: "Hsl",
                created: function() {
                    this.blackout(this.blackoutMode)
                },
                watch: {
                    blackoutMode: function(e) {
                        this.blackout(e)
                    }
                },
                methods: {
                    blackout: function(e) {
                        var t = document.querySelector("html").classList;
                        e ? t.add("blackout") : t.remove("blackout")
                    }
                },
                computed: Object(H["e"])(["color", "blackoutMode"]),
                components: {
                    Footer: C,
                    Modal: F
                }
            };
        n("9bec");
        const R = i()(U, [
            ["render", p],
            ["__scopeId", "data-v-e5b1ae74"]
        ]);
        var $ = R,
            K = {
                class: "ticket-wrapper"
            },
            W = {
                class: "ticket-container"
            };

        function J(e, t, n, a, r, o) {
            var i = Object(c["resolveComponent"])("Header"),
                s = Object(c["resolveComponent"])("Message"),
                l = Object(c["resolveComponent"])("router-view");
            return Object(c["openBlock"])(), Object(c["createElementBlock"])(c["Fragment"], null, [Object(c["createVNode"])(i, {
                links: e.links
            }, null, 8, ["links"]), Object(c["withDirectives"])(Object(c["createVNode"])(s, null, null, 512), [
                [c["vShow"], e.messageOn]
            ]), Object(c["createElementVNode"])("div", K, [Object(c["createElementVNode"])("div", W, [Object(c["createVNode"])(l, null, {
                default: Object(c["withCtx"])((function(t) {
                    var n = t.Component;
                    return [Object(c["createVNode"])(c["Transition"], {
                        name: e.animationName
                    }, {
                        default: Object(c["withCtx"])((function() {
                            return [(Object(c["openBlock"])(), Object(c["createBlock"])(Object(c["resolveDynamicComponent"])(n)))]
                        })),
                        _: 2
                    }, 1032, ["name"])]
                })),
                _: 1
            })])])], 64)
        }
        var G = {
            ref: "header"
        };

        function Z(e, t, n, a, r, o) {
            var i = Object(c["resolveComponent"])("Nav");
            return Object(c["openBlock"])(), Object(c["createElementBlock"])("header", G, [(Object(c["openBlock"])(!0), Object(c["createElementBlock"])(c["Fragment"], null, Object(c["renderList"])(n.links, (function(e, t) {
                return Object(c["openBlock"])(), Object(c["createBlock"])(i, {
                    key: t,
                    linkTo: e.linkTo
                }, {
                    default: Object(c["withCtx"])((function() {
                        return [Object(c["createTextVNode"])(Object(c["toDisplayString"])(e.title), 1)]
                    })),
                    _: 2
                }, 1032, ["linkTo"])
            })), 128))], 512)
        }

        function X(e, t, n, a, r, o) {
            var i = Object(c["resolveComponent"])("router-link");
            return Object(c["openBlock"])(), Object(c["createBlock"])(i, {
                to: n.linkTo,
                class: "link-wrap"
            }, {
                default: Object(c["withCtx"])((function() {
                    return [Object(c["createElementVNode"])("span", {
                        class: Object(c["normalizeClass"])({
                            active: o.active
                        })
                    }, [Object(c["renderSlot"])(e.$slots, "default", {}, void 0, !0)], 2)]
                })),
                _: 3
            }, 8, ["to"])
        }
        var ee = {
            name: "Nav",
            computed: {
                active: function() {
                    return this.$route.fullPath == this.linkTo
                }
            },
            props: ["linkTo"]
        };
        n("9dbe");
        const te = i()(ee, [
            ["render", X],
            ["__scopeId", "data-v-2170b7d2"]
        ]);
        var ne = te,
            ce = {
                name: "Header",
                mounted: function() {
                    this.$refs.header.addEventListener("touchmove", (function(e) {
                        e.preventDefault()
                    }), !1)
                },
                props: ["links"],
                components: {
                    Nav: ne
                }
            };
        n("3fa5");
        const ae = i()(ce, [
            ["render", Z],
            ["__scopeId", "data-v-5c4f131c"]
        ]);
        var re = ae,
            oe = ["src"],
            ie = {
                key: 0
            },
            se = {
                key: 1
            };

        function le(e, t, a, r, o, i) {
            return Object(c["openBlock"])(), Object(c["createElementBlock"])("div", {
                class: Object(c["normalizeClass"])(["message", e.fetchError ? "warning" : "success"])
            }, [Object(c["createElementVNode"])("img", {
                src: n("6f32")("./" + (e.fetchError ? "warning" : "success") + ".svg")
            }, null, 8, oe), e.fetchError ? (Object(c["openBlock"])(), Object(c["createElementBlock"])("span", ie, "Värien haku epäonnistui")) : (Object(c["openBlock"])(), Object(c["createElementBlock"])("span", se, "Värien haku onnistui"))], 2)
        }
        var de = {
            computed: Object(H["e"])(["fetchError"]),
            name: "Message"
        };
        n("ab04");
        const ue = i()(de, [
            ["render", le],
            ["__scopeId", "data-v-72c5e99c"]
        ]);
        var be = ue,
            me = {
                name: "Ticket",
                data: function() {
                    return {
                        messageOn: !1,
                        messagesWait: 1e4,
                        messagesPause: !1,
                        animationName: void 0,
                        links: [{
                            linkTo: "/hsl/ticket/buy",
                            title: "Osta lippu"
                        }, {
                            linkTo: "/hsl/ticket/display",
                            title: "Lippusi"
                        }]
                    }
                },
                methods: {
                    showMessage: function() {
                        var e = this;
                        this.messagesPause || (this.messageOn = !0, this.messagesPause = !0, setTimeout((function() {
                            e.messagesPause = !1, e.messageOn = !1
                        }), this.messagesWait))
                    }
                },
                created: function() {
                    var e = this;
                    this.$store.subscribeAction({
                        after: function(t) {
                            "fetchColor" === t.type && e.showMessage()
                        }
                    })
                },
                watch: {
                    $route: function(e) {
                        this.animationName = "Buy" === e.name ? "slide-left" : "slide-right"
                    }
                },
                components: {
                    Header: re,
                    Message: be
                }
            };
        n("45a7"), n("db0c");
        const pe = i()(me, [
            ["render", J],
            ["__scopeId", "data-v-c38245de"]
        ]);
        var fe = pe;

        function je(e, t, n, a, r, o) {
            var i = Object(c["resolveComponent"])("NoTicket"),
                s = Object(c["resolveComponent"])("Ticket"),
                l = Object(c["resolveComponent"])("More");
            return Object(c["openBlock"])(), Object(c["createElementBlock"])("div", null, [0 === e.tickets.length ? (Object(c["openBlock"])(), Object(c["createBlock"])(i, {
                key: 0
            })) : (Object(c["openBlock"])(!0), Object(c["createElementBlock"])(c["Fragment"], {
                key: 1
            }, Object(c["renderList"])(e.tickets, (function(e, t) {
                return Object(c["openBlock"])(), Object(c["createBlock"])(s, {
                    preferences: e,
                    key: t
                }, null, 8, ["preferences"])
            })), 128)), Object(c["withDirectives"])(Object(c["createVNode"])(l, null, null, 512), [
                [c["vShow"], 0 !== e.tickets.length]
            ])])
        }
        var ve = n("1da1"),
            Oe = (n("96cf"), {
                class: "parent"
            });

        function he(e, t, n, a, r, o) {
            var i = Object(c["resolveComponent"])("Qr"),
                s = Object(c["resolveComponent"])("Type"),
                l = Object(c["resolveComponent"])("Info"),
                d = Object(c["resolveComponent"])("Spin"),
                u = Object(c["resolveComponent"])("Frame");
            return Object(c["openBlock"])(), Object(c["createBlock"])(u, null, {
                default: Object(c["withCtx"])((function() {
                    return [Object(c["createElementVNode"])("div", Oe, [Object(c["createVNode"])(i, {
                        qrId: n.preferences.qr,
                        leftDigits: n.preferences.leftDigits,
                        class: "qr"
                    }, null, 8, ["qrId", "leftDigits"]), Object(c["createVNode"])(s, {
                        ticketType: n.preferences.type
                    }, null, 8, ["ticketType"]), Object(c["createVNode"])(l, {
                        expiry: n.preferences.expiry,
                        expired: n.preferences.expired,
                        age: n.preferences.age,
                        ticketType: n.preferences.type
                    }, null, 8, ["expiry", "expired", "age", "ticketType"]), Object(c["createVNode"])(d, {
                        area: n.preferences.area,
                        expired: n.preferences.expired
                    }, null, 8, ["area", "expired"])])]
                })),
                _: 1
            })
        }
        var ke = {
                class: "wrapper"
            },
            ge = {
                class: "texts"
            },
            Ee = {
                class: "bold"
            },
            ye = {
                class: "thin"
            };

        function Ne(e, t, n, a, r, o) {
            var i = Object(c["resolveComponent"])("qrcode-vue");
            return Object(c["openBlock"])(), Object(c["createElementBlock"])("div", ke, [Object(c["createVNode"])(i, {
                class: "qr",
                value: e.qr,
                size: e.size,
                level: e.level,
                background: e.background,
                foreground: e.foreground,
                renderAs: e.renderAs
            }, null, 8, ["value", "size", "level", "background", "foreground", "renderAs"]), Object(c["createElementVNode"])("div", ge, [Object(c["createElementVNode"])("span", Ee, Object(c["toDisplayString"])(e.customQr ? e.first : n.leftDigits), 1), Object(c["createElementVNode"])("span", ye, Object(c["toDisplayString"])(e.second), 1)])])
        }
        var Ve = n("d39c"),
            we = n.n(Ve),
            xe = n("5628"),
            Be = {
                name: "Qr",
                data: function() {
                    return {
                        size: 132,
                        background: "rgba(0,0,0,0)",
                        foreground: "#333333",
                        level: "H",
                        renderAs: "canvas",
                        customQr: !1,
                        qr: "",
                        first: "",
                        second: ""
                    }
                },
                created: function() {
                    if ("random" === this.qrId) this.customQr = !1, this.qr = xe("*", 109), this.second = xe("0", 8);
                    else {
                        this.customQr = !0;
                        var e = this.$store.getters.qrById(this.qrId);
                        this.qr = e.qr, this.first = e.first, this.second = e.second
                    }
                },
                components: {
                    QrcodeVue: we.a
                },
                props: ["qrId", "leftDigits"]
            };
        n("388d");
        const Ce = i()(Be, [
            ["render", Ne],
            ["__scopeId", "data-v-55016032"]
        ]);
        var Te = Ce,
            Se = {
                class: "wrapper"
            },
            De = ["src"],
            Ie = {
                key: 0,
                class: "type"
            },
            _e = {
                key: 1,
                class: "type"
            },
            Ae = {
                key: 2,
                class: "type"
            };

        function Me(e, t, a, r, o, i) {
            return Object(c["openBlock"])(), Object(c["createElementBlock"])("div", Se, [Object(c["createElementVNode"])("img", {
                src: n("6f32")("./" + a.ticketType + ".svg")
            }, null, 8, De), "single" === a.ticketType ? (Object(c["openBlock"])(), Object(c["createElementBlock"])("span", Ie, "KERTALIPPU")) : Object(c["createCommentVNode"])("", !0), "period" === a.ticketType ? (Object(c["openBlock"])(), Object(c["createElementBlock"])("span", _e, "KAUSILIPPU - 30 vrk")) : Object(c["createCommentVNode"])("", !0), "week" === a.ticketType ? (Object(c["openBlock"])(), Object(c["createElementBlock"])("span", Ae, "VUOROKAUSILIPPU")) : Object(c["createCommentVNode"])("", !0)])
        }
        var Le = {
            name: "Type",
            data: function() {
                return {
                    type: ""
                }
            },
            props: ["ticketType"]
        };
        n("780f");
        const qe = i()(Le, [
            ["render", Me],
            ["__scopeId", "data-v-4ea1fa2b"]
        ]);
        var ze = qe,
            Ye = n("6f31"),
            He = n.n(Ye),
            Qe = function(e) {
                return Object(c["pushScopeId"])("data-v-269a0889"), e = e(), Object(c["popScopeId"])(), e
            },
            Pe = {
                class: "wrapper"
            },
            Fe = {
                class: "left"
            },
            Ue = {
                class: "text"
            },
            Re = {
                key: 0,
                class: "title"
            },
            $e = {
                key: 1,
                class: "title"
            },
            Ke = {
                class: "value"
            },
            We = ["src"],
            Je = {
                class: "right"
            },
            Ge = {
                class: "text"
            },
            Ze = Qe((function() {
                return Object(c["createElementVNode"])("span", {
                    class: "title"
                }, "Asiakasryhmä", -1)
            })),
            Xe = {
                key: 0,
                class: "value"
            },
            et = {
                key: 1,
                class: "value"
            },
            tt = {
                key: 2,
                class: "value"
            },
            nt = {
                src: He.a,
                class: "child"
            };

        function ct(e, t, a, r, o, i) {
            return Object(c["openBlock"])(), Object(c["createElementBlock"])("div", Pe, [Object(c["createElementVNode"])("div", Fe, [Object(c["createElementVNode"])("div", Ue, [a.expired ? (Object(c["openBlock"])(), Object(c["createElementBlock"])("span", $e, "Ei voimassa")) : (Object(c["openBlock"])(), Object(c["createElementBlock"])("span", Re, "Voimassa")), Object(c["createElementVNode"])("span", Ke, [Object(c["createElementVNode"])("img", {
                src: n("6f32")("./" + (a.expired ? "inactive" : "active") + ".svg"),
                class: "status"
            }, null, 8, We), Object(c["createTextVNode"])(Object(c["toDisplayString"])(i.formatExpiry(a.expiry)), 1)])])]), Object(c["createElementVNode"])("div", Je, [Object(c["createElementVNode"])("div", Ge, [Ze, "child" === a.age ? (Object(c["openBlock"])(), Object(c["createElementBlock"])("span", Xe, "Lapsi 7-17v")) : "adult" === a.age ? (Object(c["openBlock"])(), Object(c["createElementBlock"])("span", et, "Aikuinen")) : "student" === a.age ? (Object(c["openBlock"])(), Object(c["createElementBlock"])("span", tt, "Opiskelija")) : Object(c["createCommentVNode"])("", !0)]), Object(c["withDirectives"])(Object(c["createElementVNode"])("img", nt, null, 512), [
                [c["vShow"], "child" === a.age]
            ])])])
        }
        var at = n("340b"),
            rt = {
                name: "Info",
                methods: {
                    formatExpiry: function(e) {
                        var t;
                        if ("single" === this.ticketType) {
                            if (t = Object(at["format"])(new Date(e), "H:mm"), this.expired) return "Päättyi klo ".concat(t)
                        } else if (t = Object(at["format"])(new Date(e), "D.M.YYYY"), this.expired) return "Päättyi ".concat(t);
                        return "".concat(t, " asti")
                    }
                },
                props: ["age", "expiry", "ticketType", "expired"]
            };
        n("0b74");
        const ot = i()(rt, [
            ["render", ct],
            ["__scopeId", "data-v-269a0889"]
        ]);
        var it = ot,
            st = n("76ed"),
            lt = n.n(st),
            dt = function(e) {
                return Object(c["pushScopeId"])("data-v-b1f5c07c"), e = e(), Object(c["popScopeId"])(), e
            },
            ut = {
                key: 0,
                loop: "",
                muted: "",
                autoplay: "",
                playsinline: "",
                preload: "",
                poster: "/spinner/spinner.png"
            },
            bt = dt((function() {
                return Object(c["createElementVNode"])("source", {
                    src: "/spinner/spinner.mov",
                    type: "video/quicktime"
                }, null, -1)
            })),
            mt = dt((function() {
                return Object(c["createElementVNode"])("source", {
                    src: "/spinner/spinner.webm",
                    type: "video/webm"
                }, null, -1)
            })),
            pt = [bt, mt],
            ft = {
                class: "left"
            },
            jt = {
                key: 0,
                class: "border expired"
            },
            vt = dt((function() {
                return Object(c["createElementVNode"])("span", {
                    class: "title"
                }, "Matka kesken?", -1)
            })),
            Ot = dt((function() {
                return Object(c["createElementVNode"])("span", {
                    class: "link"
                }, "Toimi näin", -1)
            })),
            ht = [vt, Ot],
            kt = {
                class: "overlay"
            },
            gt = {
                class: "area"
            },
            Et = dt((function() {
                return Object(c["createElementVNode"])("img", {
                    src: lt.a
                }, null, -1)
            })),
            yt = dt((function() {
                return Object(c["createElementVNode"])("span", null, "Matkustusalue", -1)
            })),
            Nt = [Et, yt];

        function Vt(e, t, n, a, r, o) {
            return Object(c["openBlock"])(), Object(c["createElementBlock"])("div", {
                class: Object(c["normalizeClass"])(["wrapper", {
                    nospin: !o.shouldSpin(),
                    svgspin: e.svgOn
                }]),
                style: Object(c["normalizeStyle"])({
                    backgroundColor: e.color
                })
            }, [e.svgOn ? Object(c["createCommentVNode"])("", !0) : (Object(c["openBlock"])(), Object(c["createElementBlock"])("video", ut, pt)), Object(c["withDirectives"])(Object(c["createElementVNode"])("div", ft, [n.expired ? (Object(c["openBlock"])(), Object(c["createElementBlock"])("div", jt, ht)) : Object(c["createCommentVNode"])("", !0)], 512), [
                [c["vShow"], !o.shouldSpin()]
            ]), Object(c["createElementVNode"])("div", kt, [Object(c["createElementVNode"])("span", gt, Object(c["toDisplayString"])(n.area), 1), Object(c["createElementVNode"])("div", {
                class: "link",
                onClick: t[0] || (t[0] = function(e) {
                    return o.openModal()
                })
            }, Nt)])], 6)
        }
        var wt = n("5530"),
            xt = {
                name: "Spin",
                computed: Object(wt["a"])({}, Object(H["c"])(["color", "svgOn"])),
                methods: {
                    openModal: function() {
                        this.$store.commit("openModal", this.area)
                    },
                    shouldSpin: function() {
                        return !this.expired
                    }
                },
                props: ["area", "expired"]
            };
        n("2c30");
        const Bt = i()(xt, [
            ["render", Vt],
            ["__scopeId", "data-v-b1f5c07c"]
        ]);
        var Ct = Bt,
            Tt = n("1e31"),
            St = n.n(Tt),
            Dt = n("8ac7"),
            It = n.n(Dt),
            _t = function(e) {
                return Object(c["pushScopeId"])("data-v-33858eaa"), e = e(), Object(c["popScopeId"])(), e
            },
            At = {
                class: "daddy"
            },
            Mt = {
                key: 0,
                class: "content"
            },
            Lt = {
                key: 1,
                class: "loading"
            },
            qt = _t((function() {
                return Object(c["createElementVNode"])("img", {
                    src: St.a
                }, null, -1)
            })),
            zt = [qt],
            Yt = _t((function() {
                return Object(c["createElementVNode"])("img", {
                    class: "bg-img",
                    src: It.a
                }, null, -1)
            }));

        function Ht(e, t, n, a, r, o) {
            return Object(c["openBlock"])(), Object(c["createElementBlock"])("div", At, [e.loading ? (Object(c["openBlock"])(), Object(c["createElementBlock"])("div", Lt, zt)) : (Object(c["openBlock"])(), Object(c["createElementBlock"])("div", Mt, [Object(c["renderSlot"])(e.$slots, "default", {}, void 0, !0)])), Yt])
        }
        var Qt = {
            name: "Frame",
            data: function() {
                return {
                    loading: !0
                }
            },
            mounted: function() {
                var e = this,
                    t = 500 + Math.floor(500 * Math.random());
                setTimeout((function() {
                    return e.loading = !1
                }), t)
            }
        };
        n("dbe9");
        const Pt = i()(Qt, [
            ["render", Ht],
            ["__scopeId", "data-v-33858eaa"]
        ]);
        var Ft = Pt,
            Ut = {
                name: "Ticket",
                data: function() {
                    return {
                        checkInterval: null
                    }
                },
                mounted: function() {
                    if (!this.preferences.expired) {
                        var e = 5e3;
                        this.checkInterval = setInterval(this.checkExpiry, e), this.checkExpiry()
                    }
                },
                methods: {
                    checkExpiry: function() {
                        var e = new Date(this.preferences.expiry);
                        Object(at["isFuture"])(e) || (this.$store.commit("expireTicket", this.preferences.id), clearInterval(this.checkInterval))
                    }
                },
                components: {
                    Qr: Te,
                    Type: ze,
                    Info: it,
                    Spin: Ct,
                    Frame: Ft
                },
                props: ["preferences"]
            };
        n("3877");
        const Rt = i()(Ut, [
            ["render", he],
            ["__scopeId", "data-v-5087c61f"]
        ]);
        var $t = Rt,
            Kt = function(e) {
                return Object(c["pushScopeId"])("data-v-81245ece"), e = e(), Object(c["popScopeId"])(), e
            },
            Wt = {
                class: "wrapper"
            },
            Jt = Kt((function() {
                return Object(c["createElementVNode"])("span", null, [Object(c["createTextVNode"])("Sinulla ei ole"), Object(c["createElementVNode"])("br"), Object(c["createTextVNode"])(" voimassaolevia "), Object(c["createElementVNode"])("br"), Object(c["createTextVNode"])(" lippuja")], -1)
            }));

        function Gt(e, t, n, a, r, o) {
            var i = Object(c["resolveComponent"])("Frame");
            return Object(c["openBlock"])(), Object(c["createBlock"])(i, null, {
                default: Object(c["withCtx"])((function() {
                    return [Object(c["createElementVNode"])("div", Wt, [Jt, Object(c["createElementVNode"])("button", {
                        onClick: t[0] || (t[0] = function(e) {
                            return o.toSettings()
                        })
                    }, "Osta lippu")])]
                })),
                _: 1
            })
        }
        var Zt = {
            name: "NoTicket",
            methods: {
                toSettings: function() {
                    this.$router.push("/hidden/settings")
                }
            },
            components: {
                Frame: Ft
            }
        };
        n("9dea");
        const Xt = i()(Zt, [
            ["render", Gt],
            ["__scopeId", "data-v-81245ece"]
        ]);
        var en = Xt,
            tn = function(e) {
                return Object(c["pushScopeId"])("data-v-512dfb3c"), e = e(), Object(c["popScopeId"])(), e
            },
            nn = {
                class: "wrapper"
            },
            cn = {
                class: "padding"
            },
            an = {
                class: "top"
            },
            rn = tn((function() {
                return Object(c["createElementVNode"])("span", {
                    class: "title"
                }, "Tarvitsetko lipun myös kaverille?", -1)
            })),
            on = Object(c["createTextVNode"])("Osta uusi lippu"),
            sn = {
                class: "bottom"
            },
            ln = tn((function() {
                return Object(c["createElementVNode"])("span", {
                    class: "title"
                }, "Aiemmat lippuostosi", -1)
            })),
            dn = Object(c["createTextVNode"])("Ostoshistoria "),
            un = tn((function() {
                return Object(c["createElementVNode"])("img", {
                    src: S.a
                }, null, -1)
            }));

        function bn(e, t, n, a, r, o) {
            var i = Object(c["resolveComponent"])("router-link");
            return Object(c["openBlock"])(), Object(c["createElementBlock"])("div", nn, [Object(c["createElementVNode"])("div", cn, [Object(c["createElementVNode"])("div", an, [rn, Object(c["createVNode"])(i, {
                to: "/hsl/ticket/buy",
                class: "button"
            }, {
                default: Object(c["withCtx"])((function() {
                    return [on]
                })),
                _: 1
            })]), Object(c["createElementVNode"])("div", sn, [ln, Object(c["createVNode"])(i, {
                to: "/hsl/history",
                class: "link"
            }, {
                default: Object(c["withCtx"])((function() {
                    return [dn, un]
                })),
                _: 1
            })])])])
        }
        var mn = {
            name: "More"
        };
        n("c5eb");
        const pn = i()(mn, [
            ["render", bn],
            ["__scopeId", "data-v-512dfb3c"]
        ]);
        var fn = pn,
            jn = {
                name: "Main",
                data: function() {
                    return {
                        interval: null
                    }
                },
                mounted: function() {
                    var e = 5e3;
                    this.interval = setInterval(this.checkColorExpiry, e), this.checkColorExpiry()
                },
                methods: {
                    checkColorExpiry: function() {
                        var e = this;
                        return Object(ve["a"])(regeneratorRuntime.mark((function t() {
                            var n, c;
                            return regeneratorRuntime.wrap((function(t) {
                                while (1) switch (t.prev = t.next) {
                                    case 0:
                                        if (c = new Date(null === e || void 0 === e || null === (n = e.color) || void 0 === n ? void 0 : n.expiry), Object(at["isFuture"])(c)) {
                                            t.next = 4;
                                            break
                                        }
                                        return t.next = 4, e.$store.dispatch("fetchColor");
                                    case 4:
                                    case "end":
                                        return t.stop()
                                }
                            }), t)
                        })))()
                    }
                },
                computed: Object(H["e"])(["tickets", "color"]),
                components: {
                    Ticket: $t,
                    More: fn,
                    NoTicket: en
                }
            };
        const vn = i()(jn, [
            ["render", je]
        ]);
        var On = vn,
            hn = n("c3bb"),
            kn = n.n(hn),
            gn = n("9a29"),
            En = n.n(gn),
            yn = n("40a1"),
            Nn = n.n(yn),
            Vn = function(e) {
                return Object(c["pushScopeId"])("data-v-63e6370c"), e = e(), Object(c["popScopeId"])(), e
            },
            wn = {
                class: "empty"
            },
            xn = Vn((function() {
                return Object(c["createElementVNode"])("p", {
                    class: "title"
                }, "Osta matkalippu", -1)
            })),
            Bn = {
                class: "btn-container"
            },
            Cn = Object(c["createTextVNode"])("Kertalippu"),
            Tn = Object(c["createTextVNode"])("Kerta- ja lisävyöhykeliput"),
            Sn = Object(c["createTextVNode"])("Vuorokausilippu"),
            Dn = Object(c["createTextVNode"])("1 – 13 vrk "),
            In = Object(c["createTextVNode"])("Kausilippu"),
            _n = Object(c["createTextVNode"])("Jatkuva tilaus tai kertaosto "),
            An = Object(c["createStaticVNode"])('<div class="link-container" data-v-63e6370c><div class="link" data-v-63e6370c><div class="link-wrapper" data-v-63e6370c><div class="img-wrapper" data-v-63e6370c><img src="' + kn.a + '" data-v-63e6370c></div><div class="text" data-v-63e6370c><span class="title" data-v-63e6370c>Lippu koodilla</span><span class="description" data-v-63e6370c>Lunasta lippu koodilla</span></div></div></div><div class="link" data-v-63e6370c><div class="link-wrapper" data-v-63e6370c><div class="img-wrapper" data-v-63e6370c><img src="' + En.a + '" data-v-63e6370c></div><div class="text" data-v-63e6370c><span class="title" data-v-63e6370c>Kaupunkipyörät</span><span class="description" data-v-63e6370c>Osta käyttöoikeutta päiväksi, viikoksi tai koko kaudeksi.</span></div><div class="img-wrapper-2" data-v-63e6370c><img src="' + Nn.a + '" data-v-63e6370c></div></div></div></div><div class="final-link" data-v-63e6370c><p data-v-63e6370c>Ohjeet, hinnat ja ehdot</p></div>', 2);

        function Mn(e, t, n, a, r, o) {
            var i = Object(c["resolveComponent"])("PurchaseBtn");
            return Object(c["openBlock"])(), Object(c["createElementBlock"])("div", wn, [xn, Object(c["createElementVNode"])("div", Bn, [Object(c["createVNode"])(i, {
                iconName: "single-34"
            }, {
                title: Object(c["withCtx"])((function() {
                    return [Cn]
                })),
                description: Object(c["withCtx"])((function() {
                    return [Tn]
                })),
                _: 1
            }), Object(c["createVNode"])(i, {
                iconName: "week-34"
            }, {
                title: Object(c["withCtx"])((function() {
                    return [Sn]
                })),
                description: Object(c["withCtx"])((function() {
                    return [Dn]
                })),
                _: 1
            }), Object(c["createVNode"])(i, {
                iconName: "period-34"
            }, {
                title: Object(c["withCtx"])((function() {
                    return [In]
                })),
                description: Object(c["withCtx"])((function() {
                    return [_n]
                })),
                _: 1
            })]), An])
        }
        var Ln = {
                class: "button"
            },
            qn = {
                class: "img-wrapper"
            },
            zn = ["src"],
            Yn = {
                class: "text"
            },
            Hn = {
                class: "title"
            },
            Qn = {
                class: "description"
            };

        function Pn(e, t, a, r, o, i) {
            return Object(c["openBlock"])(), Object(c["createElementBlock"])("div", Ln, [Object(c["createElementVNode"])("div", qn, [Object(c["createElementVNode"])("img", {
                src: n("6f32")("./" + a.iconName + ".svg")
            }, null, 8, zn)]), Object(c["createElementVNode"])("div", Yn, [Object(c["createElementVNode"])("span", Hn, [Object(c["renderSlot"])(e.$slots, "title", {}, void 0, !0)]), Object(c["createElementVNode"])("span", Qn, [Object(c["renderSlot"])(e.$slots, "description", {}, void 0, !0)])])])
        }
        var Fn = {
            name: "PurchaseBtn",
            props: ["iconName"]
        };
        n("b4ef");
        const Un = i()(Fn, [
            ["render", Pn],
            ["__scopeId", "data-v-7fef6bc3"]
        ]);
        var Rn = Un,
            $n = {
                name: "Buy",
                components: {
                    PurchaseBtn: Rn
                }
            };
        n("afb2");
        const Kn = i()($n, [
            ["render", Mn],
            ["__scopeId", "data-v-63e6370c"]
        ]);
        var Wn = Kn,
            Jn = {
                class: "home-wrapper"
            };

        function Gn(e, t, n, a, r, o) {
            var i = Object(c["resolveComponent"])("Header"),
                s = Object(c["resolveComponent"])("router-view");
            return Object(c["openBlock"])(), Object(c["createElementBlock"])(c["Fragment"], null, [Object(c["createVNode"])(i, {
                links: e.links
            }, null, 8, ["links"]), Object(c["createElementVNode"])("div", Jn, [Object(c["createVNode"])(s, null, {
                default: Object(c["withCtx"])((function(t) {
                    var n = t.Component;
                    return [Object(c["createVNode"])(c["Transition"], {
                        name: e.animationName
                    }, {
                        default: Object(c["withCtx"])((function() {
                            return [(Object(c["openBlock"])(), Object(c["createBlock"])(Object(c["resolveDynamicComponent"])(n)))]
                        })),
                        _: 2
                    }, 1032, ["name"])]
                })),
                _: 1
            })])], 64)
        }
        var Zn = {
            name: "Home",
            data: function() {
                return {
                    animationName: void 0,
                    links: [{
                        linkTo: "/hsl/home/you",
                        title: "Sinulle"
                    }, {
                        linkTo: "/hsl/home/traffic",
                        title: "Liikenne"
                    }, {
                        linkTo: "/hsl/home/news",
                        title: "Uutiset"
                    }]
                }
            },
            watch: {
                $route: function(e, t) {
                    this.animationName = "News" === t.name || "You" === e.name ? "slide-left" : "slide-right"
                }
            },
            components: {
                Header: re
            }
        };
        n("ec77"), n("0a08");
        const Xn = i()(Zn, [
            ["render", Gn],
            ["__scopeId", "data-v-2c0ffc75"]
        ]);
        var ec = Xn,
            tc = function(e) {
                return Object(c["pushScopeId"])("data-v-874d745c"), e = e(), Object(c["popScopeId"])(), e
            },
            nc = {
                key: 0
            },
            cc = {
                class: "news-wrapper"
            },
            ac = tc((function() {
                return Object(c["createElementVNode"])("div", {
                    class: "show-more"
                }, [Object(c["createElementVNode"])("span", null, "Näytä lisää")], -1)
            })),
            rc = {
                key: 1,
                class: "loading"
            },
            oc = tc((function() {
                return Object(c["createElementVNode"])("img", {
                    src: St.a
                }, null, -1)
            })),
            ic = [oc];

        function sc(e, t, n, a, r, o) {
            var i = Object(c["resolveComponent"])("NewsItem");
            return e.loading ? (Object(c["openBlock"])(), Object(c["createElementBlock"])("div", rc, ic)) : (Object(c["openBlock"])(), Object(c["createElementBlock"])("div", nc, [Object(c["createElementVNode"])("div", cc, [(Object(c["openBlock"])(!0), Object(c["createElementBlock"])(c["Fragment"], null, Object(c["renderList"])(e.news, (function(e) {
                return Object(c["openBlock"])(), Object(c["createBlock"])(i, {
                    key: e.id,
                    data: e,
                    class: "news-item-wrapper"
                }, null, 8, ["data"])
            })), 128))]), ac]))
        }
        var lc = ["src"],
            dc = {
                class: "text-wrapper"
            },
            uc = {
                class: "text"
            },
            bc = {
                class: "date"
            },
            mc = {
                class: "tag"
            },
            pc = {
                class: "title"
            };

        function fc(e, t, n, a, r, o) {
            var i, s;
            return Object(c["openBlock"])(), Object(c["createElementBlock"])("div", {
                class: Object(c["normalizeClass"])(["news-item", o.isMini ? "mini" : "big"])
            }, [Object(c["withDirectives"])(Object(c["createElementVNode"])("img", {
                src: null === (i = n.data) || void 0 === i || null === (s = i.images[0]) || void 0 === s ? void 0 : s.url
            }, null, 8, lc), [
                [c["vShow"], o.hasImg]
            ]), Object(c["createElementVNode"])("div", dc, [Object(c["createElementVNode"])("div", uc, [Object(c["createElementVNode"])("span", bc, Object(c["toDisplayString"])(o.formatDate(n.data.created)), 1), Object(c["withDirectives"])(Object(c["createElementVNode"])("span", mc, "HYVÄ TIETÄÄ", 512), [
                [c["vShow"], !o.isMini]
            ])]), Object(c["createElementVNode"])("span", pc, Object(c["toDisplayString"])(n.data.label), 1)])], 2)
        }
        var jc = {
            name: "NewsItem",
            methods: {
                formatDate: function(e) {
                    return Object(at["isToday"])(e) ? Object(at["format"])(e, "HH:mm") : Object(at["format"])(e, "D.M.YYYY")
                }
            },
            computed: {
                hasImg: function() {
                    return this.data.images.length > 0
                },
                isMini: function() {
                    return "normal" == this.data.priority.label
                }
            },
            props: ["data"]
        };
        n("249c");
        const vc = i()(jc, [
            ["render", fc],
            ["__scopeId", "data-v-5b4603ae"]
        ]);
        var Oc = vc,
            hc = {
                name: "News",
                data: function() {
                    return {
                        loading: !0
                    }
                },
                mounted: function() {
                    var e = this;
                    return Object(ve["a"])(regeneratorRuntime.mark((function t() {
                        return regeneratorRuntime.wrap((function(t) {
                            while (1) switch (t.prev = t.next) {
                                case 0:
                                    if (0 !== e.news.length) {
                                        t.next = 3;
                                        break
                                    }
                                    return t.next = 3, e.fetchNews();
                                case 3:
                                    e.$nextTick((function() {
                                        e.loading = !1
                                    }));
                                case 4:
                                case "end":
                                    return t.stop()
                            }
                        }), t)
                    })))()
                },
                methods: Object(wt["a"])({}, Object(H["b"])(["fetchNews"])),
                computed: Object(wt["a"])({}, Object(H["e"])(["news"])),
                components: {
                    NewsItem: Oc
                }
            };
        n("c391");
        const kc = i()(hc, [
            ["render", sc],
            ["__scopeId", "data-v-874d745c"]
        ]);
        var gc = kc,
            Ec = {
                class: "traffic-wrapper"
            },
            yc = {
                class: "traffic-header"
            },
            Nc = ["src"],
            Vc = {
                class: "traffic-news-wrapper"
            };

        function wc(e, t, a, r, o, i) {
            var s = Object(c["resolveComponent"])("TrafficItem");
            return Object(c["openBlock"])(), Object(c["createElementBlock"])("div", Ec, [Object(c["createElementVNode"])("div", yc, [(Object(c["openBlock"])(!0), Object(c["createElementBlock"])(c["Fragment"], null, Object(c["renderList"])(e.vehicles, (function(e, t) {
                return Object(c["openBlock"])(), Object(c["createElementBlock"])("div", {
                    class: Object(c["normalizeClass"])(["img-wrapper", i.coinFlip() ? "warning" : "info"]),
                    key: t
                }, [Object(c["createElementVNode"])("img", {
                    src: n("ce38")("./" + e + ".svg")
                }, null, 8, Nc)], 2)
            })), 128))]), Object(c["createElementVNode"])("div", Vc, [(Object(c["openBlock"])(!0), Object(c["createElementBlock"])(c["Fragment"], null, Object(c["renderList"])(e.traffic, (function(e) {
                return Object(c["openBlock"])(), Object(c["createBlock"])(s, {
                    key: e.id,
                    data: e
                }, null, 8, ["data"])
            })), 128))])])
        }
        var xc = {
                class: "traffic-item"
            },
            Bc = {
                class: "top-text"
            },
            Cc = {
                class: "time"
            },
            Tc = {
                class: "tag"
            },
            Sc = {
                class: "other-info"
            },
            Dc = ["src"],
            Ic = {
                class: "text"
            },
            _c = {
                class: "details"
            },
            Ac = {
                class: "valid-from-to"
            },
            Mc = {
                class: "title"
            };

        function Lc(e, t, a, r, o, i) {
            return Object(c["openBlock"])(), Object(c["createElementBlock"])("div", xc, [Object(c["createElementVNode"])("div", Bc, [Object(c["createElementVNode"])("span", Cc, Object(c["toDisplayString"])(i.formatTime(a.data.created)), 1), Object(c["withDirectives"])(Object(c["createElementVNode"])("span", Tc, "HYVÄ TIETÄÄ", 512), [
                [c["vShow"], i.important]
            ])]), Object(c["createElementVNode"])("div", Sc, [Object(c["createElementVNode"])("div", {
                class: Object(c["normalizeClass"])(["icon-wrapper", i.important ? "warning" : "info"])
            }, [Object(c["createElementVNode"])("img", {
                src: n("b2f8")("./" + i.iconSrc + ".svg")
            }, null, 8, Dc)], 2), Object(c["createElementVNode"])("div", Ic, [Object(c["createElementVNode"])("div", _c, [Object(c["createElementVNode"])("div", {
                class: Object(c["normalizeClass"])(["lines", i.iconSrc])
            }, [(Object(c["openBlock"])(!0), Object(c["createElementBlock"])(c["Fragment"], null, Object(c["renderList"])(a.data.lines, (function(e) {
                return Object(c["openBlock"])(), Object(c["createElementBlock"])("span", {
                    class: "line",
                    key: e.id
                }, Object(c["toDisplayString"])(e.label), 1)
            })), 128))], 2), Object(c["createElementVNode"])("span", Ac, Object(c["toDisplayString"])(i.formatValid(a.data.validDateFrom, a.data.validDateTo)), 1)]), Object(c["createElementVNode"])("span", Mc, Object(c["toDisplayString"])(a.data.label), 1)])])])
        }
        n("ac1f"), n("5319"), n("2ca0"), n("00b4");
        var qc = n("c1df"),
            zc = n.n(qc);
        zc.a.locale("fi");
        var Yc = {
            name: "TrafficItem",
            methods: {
                formatTime: function(e) {
                    var t = zc()(e),
                        n = zc()().isSame(t, "day");
                    return t.isAfter(zc()().subtract(1, "hours")) ? t.fromNow() : n ? t.format("LT").replace(/^\w/, (function(e) {
                        return e.toUpperCase()
                    })) : t.format("l").replace(/^\w/, (function(e) {
                        return e.toUpperCase()
                    }))
                },
                isBoat: function(e, t) {
                    return e.startsWith("HSLlautta") || e.startsWith("HSL:10") && ["19", "19E"].includes(t)
                },
                isMetro: function(e) {
                    return ["M1", "M2"].includes(e)
                },
                isTrain: function(e) {
                    return /[a-\xf6]/i.test(e)
                },
                isTram: function(e, t) {
                    return e.startsWith("HSL:10") && parseInt(t, 10) <= 10
                },
                formatValid: function(e, t) {
                    var n = zc()(),
                        c = zc()(e),
                        a = zc()(t),
                        r = c === a;
                    return r || !t ? c.format("l") + " alkaen" : 0 === c.diff(a, "days") ? (0 === n.diff(a, "days") ? "" : c.format("l") + " ") + "klo " + c.format("LT") + " - " + a.format("LT") : c.format("l") + " - " + a.format("l")
                }
            },
            computed: {
                important: function() {
                    return "high" === this.data.priority.label
                },
                iconSrc: function() {
                    if (0 === this.data.lines.length) return "hsl";
                    var e = this.data.lines[0].gtfsId,
                        t = this.data.lines[0].label;
                    return this.isBoat(e, t) ? "boat" : this.isMetro(t) ? "metro" : this.isTrain(t) ? "train" : this.isTram(e, t) ? "tram" : "bus"
                }
            },
            props: ["data"]
        };
        n("9d44");
        const Hc = i()(Yc, [
            ["render", Lc],
            ["__scopeId", "data-v-33c7cb98"]
        ]);
        var Qc = Hc,
            Pc = {
                name: "Traffic",
                data: function() {
                    return {
                        vehicles: ["bus", "tram", "metro", "train", "boat", "bike"],
                        loading: !0
                    }
                },
                mounted: function() {
                    var e = this;
                    return Object(ve["a"])(regeneratorRuntime.mark((function t() {
                        return regeneratorRuntime.wrap((function(t) {
                            while (1) switch (t.prev = t.next) {
                                case 0:
                                    if (0 !== e.traffic.length) {
                                        t.next = 3;
                                        break
                                    }
                                    return t.next = 3, e.fetchTraffic();
                                case 3:
                                    e.$nextTick((function() {
                                        e.loading = !1
                                    }));
                                case 4:
                                case "end":
                                    return t.stop()
                            }
                        }), t)
                    })))()
                },
                methods: Object(wt["a"])(Object(wt["a"])({}, Object(H["b"])(["fetchTraffic"])), {}, {
                    coinFlip: function() {
                        return Math.random() < .5
                    }
                }),
                computed: Object(wt["a"])({}, Object(H["e"])(["traffic"])),
                components: {
                    TrafficItem: Qc
                }
            };
        n("c866");
        const Fc = i()(Pc, [
            ["render", wc],
            ["__scopeId", "data-v-3db85a54"]
        ]);
        var Uc = Fc,
            Rc = n("b753"),
            $c = n.n(Rc),
            Kc = n("bc75"),
            Wc = n.n(Kc),
            Jc = n("5a9e"),
            Gc = n.n(Jc),
            Zc = n("917c"),
            Xc = n.n(Zc),
            ea = n("8154"),
            ta = n.n(ea),
            na = n("61bb"),
            ca = n.n(na),
            aa = n("b88d"),
            ra = n.n(aa),
            oa = n("f3df"),
            ia = n.n(oa),
            sa = n("cc24"),
            la = n.n(sa),
            da = function(e) {
                return Object(c["pushScopeId"])("data-v-31d40b05"), e = e(), Object(c["popScopeId"])(), e
            },
            ua = da((function() {
                return Object(c["createElementVNode"])("div", {
                    class: "map",
                    id: "map"
                }, null, -1)
            })),
            ba = {
                class: "widget",
                ref: "widget"
            },
            ma = da((function() {
                return Object(c["createElementVNode"])("div", {
                    class: "draggable"
                }, null, -1)
            })),
            pa = [ma],
            fa = Object(c["createStaticVNode"])('<div class="widget-container" data-v-31d40b05><p class="guide-title" data-v-31d40b05>Minne mennään?</p><div class="input current" data-v-31d40b05><div class="svg-cont" data-v-31d40b05><img src="' + $c.a + '" data-v-31d40b05></div><span data-v-31d40b05>Nykyinen sijaintisi</span></div><div class="bridge" data-v-31d40b05><div class="bridge-icon" data-v-31d40b05></div></div><div class="input dest" data-v-31d40b05><div class="svg-cont" data-v-31d40b05><img src="' + Wc.a + '" data-v-31d40b05></div><span data-v-31d40b05>Syötä määränpää</span></div><div class="choose-time" data-v-31d40b05><img src="' + Gc.a + '" class="clock" data-v-31d40b05><span data-v-31d40b05>Lähtö nyt</span><img src="' + Xc.a + '" class="caret" data-v-31d40b05></div><div class="add-bar" data-v-31d40b05><div class="add" data-v-31d40b05><div class="svg-cont" data-v-31d40b05><img src="' + ta.a + '" data-v-31d40b05></div><span data-v-31d40b05>Lisää koti</span></div><div class="add" data-v-31d40b05><div class="svg-cont" data-v-31d40b05><img src="' + ca.a + '" data-v-31d40b05></div><span data-v-31d40b05>Lisää työ</span></div><div class="add" data-v-31d40b05><div class="svg-cont" data-v-31d40b05><img src="' + ra.a + '" data-v-31d40b05></div><span data-v-31d40b05>Lisää muu paikka</span></div></div><div class="lines" data-v-31d40b05><p class="indent-title" data-v-31d40b05>Linja- ja pysäkkihaku</p><div class="input" data-v-31d40b05><div class="svg-cont" data-v-31d40b05><img src="' + ia.a + '" data-v-31d40b05></div><span data-v-31d40b05>Linja, pysäkki tai asema</span></div></div><div class="line" data-v-31d40b05><div class="inset-line" data-v-31d40b05><p class="line-title" data-v-31d40b05>Omat linjat</p><div class="bottom" data-v-31d40b05><div class="line-svg" data-v-31d40b05><img src="' + la.a + '" data-v-31d40b05></div><span class="line-text" data-v-31d40b05>Ei omia linjoja</span></div></div></div><div class="line" data-v-31d40b05><div class="inset-line" data-v-31d40b05><p class="line-title" data-v-31d40b05>Omat pysäkit</p><div class="bottom" data-v-31d40b05><div class="line-svg" data-v-31d40b05><img src="' + la.a + '" data-v-31d40b05></div><span class="line-text" data-v-31d40b05>Ei omia pysäkkejä</span></div></div></div><div class="line" data-v-31d40b05><div class="inset-line" data-v-31d40b05><p class="line-title" data-v-31d40b05>Omat pyöräasemat</p><div class="bottom" data-v-31d40b05><div class="line-svg" data-v-31d40b05><img src="' + la.a + '" data-v-31d40b05></div><span class="line-text" data-v-31d40b05>Ei omia pyöräasemia</span></div></div></div></div>', 1);

        function ja(e, t, n, a, r, o) {
            return Object(c["openBlock"])(), Object(c["createElementBlock"])(c["Fragment"], null, [ua, Object(c["createElementVNode"])("div", ba, [Object(c["createElementVNode"])("div", {
                class: "draggable-container",
                onTouchstart: t[0] || (t[0] = Object(c["withModifiers"])((function() {
                    return o.dragStart && o.dragStart.apply(o, arguments)
                }), ["prevent"])),
                onMousedown: t[1] || (t[1] = Object(c["withModifiers"])((function() {
                    return o.dragStart && o.dragStart.apply(o, arguments)
                }), ["prevent"])),
                onTouchend: t[2] || (t[2] = Object(c["withModifiers"])((function() {
                    return o.dragEnd && o.dragEnd.apply(o, arguments)
                }), ["prevent"])),
                onMouseup: t[3] || (t[3] = Object(c["withModifiers"])((function() {
                    return o.dragEnd && o.dragEnd.apply(o, arguments)
                }), ["prevent"])),
                onTouchmove: t[4] || (t[4] = Object(c["withModifiers"])((function() {
                    return o.drag && o.drag.apply(o, arguments)
                }), ["prevent"])),
                onMousemove: t[5] || (t[5] = Object(c["withModifiers"])((function() {
                    return o.drag && o.drag.apply(o, arguments)
                }), ["prevent"]))
            }, pa, 32), fa], 512)], 64)
        }
        n("d81d"), n("6cc5");
        var va = n("e11e"),
            Oa = n.n(va),
            ha = window.document.documentElement.clientHeight,
            ka = 50,
            ga = 20,
            Ea = {
                name: "Guide",
                data: function() {
                    return {
                        dragging: !1,
                        yOffset: 0,
                        initialY: 0,
                        currentY: 0
                    }
                },
                methods: {
                    setUpMap: function() {
                        var e = Oa.a.map("map", {
                            zoomControl: !1,
                            attributionControl: !1
                        }).setView([60.192059, 24.945831], 13);
                        Oa.a.tileLayer("https://cdn.digitransit.fi/map/v1/{id}/{z}/{x}/{y}@2x.png", {
                            maxZoom: 19,
                            tileSize: 512,
                            zoomOffset: -1,
                            id: "hsl-map"
                        }).addTo(e)
                    },
                    dragStart: function(e) {
                        this.$refs.widget.style.height = .9 * (ha - ka) + "vh", "touchstart" === e.type ? this.initialY = e.touches[0].clientY - this.yOffset : this.initialY = e.clientY - this.yOffset, this.dragging = !0
                    },
                    dragEnd: function() {
                        this.initialY = this.currentY, this.dragging = !1;
                        var e = ha - ka + ga - this.initialY + "px";
                        this.$refs.widget.style.height = e
                    },
                    drag: function(e) {
                        var t;
                        this.dragging && (t = "touchmove" === e.type ? e.touches[0].clientY - this.initialY : e.clientY - this.initialY, t < ha - ka - ga && t > .1 * ha && (this.yOffset = t, this.currentY = t, this.setTranslate()))
                    },
                    setTranslate: function() {
                        this.$refs.widget.style.transform = "translate3d(0, ".concat(this.currentY, "px, 0)")
                    }
                },
                mounted: function() {
                    this.setUpMap()
                }
            };
        n("a725");
        const ya = i()(Ea, [
            ["render", ja],
            ["__scopeId", "data-v-31d40b05"]
        ]);
        var Na = ya,
            Va = function(e) {
                return Object(c["pushScopeId"])("data-v-7c1907bb"), e = e(), Object(c["popScopeId"])(), e
            },
            wa = {
                class: "header-title",
                ref: "header"
            },
            xa = {
                class: "list"
            },
            Ba = Va((function() {
                return Object(c["createElementVNode"])("div", {
                    class: "blank"
                }, null, -1)
            })),
            Ca = Va((function() {
                return Object(c["createElementVNode"])("div", {
                    class: "version"
                }, "Sovellusversio 3.4.0 (104169)", -1)
            })),
            Ta = Va((function() {
                return Object(c["createElementVNode"])("div", {
                    class: "credit"
                }, "Avoimen lähdekoodin lisenssit", -1)
            }));

        function Sa(e, t, n, a, r, o) {
            var i = Object(c["resolveComponent"])("ListItem");
            return Object(c["openBlock"])(), Object(c["createElementBlock"])(c["Fragment"], null, [Object(c["createElementVNode"])("div", wa, "Asetukset", 512), Object(c["createElementVNode"])("div", xa, [(Object(c["openBlock"])(!0), Object(c["createElementBlock"])(c["Fragment"], null, Object(c["renderList"])(e.firstItems, (function(e) {
                return Object(c["openBlock"])(), Object(c["createBlock"])(i, {
                    data: e,
                    key: e.title
                }, null, 8, ["data"])
            })), 128)), Ba, (Object(c["openBlock"])(!0), Object(c["createElementBlock"])(c["Fragment"], null, Object(c["renderList"])(e.secondItems, (function(e) {
                return Object(c["openBlock"])(), Object(c["createBlock"])(i, {
                    data: e,
                    key: e.title
                }, null, 8, ["data"])
            })), 128))]), Object(c["createElementVNode"])("div", {
                class: "credit",
                onClick: t[0] || (t[0] = function(e) {
                    return o.openSettings()
                })
            }, "Ohjeet, hinnat ja ehdot"), Ca, Ta], 64)
        }
        n("9911");
        var Da = n("c9cd"),
            Ia = n.n(Da),
            _a = {
                class: "item-wrapper"
            },
            Aa = {
                class: "icon"
            },
            Ma = ["src"],
            La = {
                class: "text"
            },
            qa = {
                class: "title"
            },
            za = {
                class: "desc"
            },
            Ya = {
                class: "link"
            },
            Ha = {
                key: 0,
                src: Nn.a
            },
            Qa = {
                key: 1,
                src: Ia.a
            };

        function Pa(e, t, a, r, o, i) {
            return Object(c["openBlock"])(), Object(c["createElementBlock"])("div", _a, [Object(c["createElementVNode"])("div", Aa, [Object(c["createElementVNode"])("img", {
                src: n("613b")("./" + a.data.icon + ".svg")
            }, null, 8, Ma)]), Object(c["createElementVNode"])("div", La, [Object(c["createElementVNode"])("span", qa, Object(c["toDisplayString"])(a.data.title), 1), Object(c["createElementVNode"])("span", za, Object(c["toDisplayString"])(a.data.desc), 1)]), Object(c["createElementVNode"])("div", Ya, [a.data.link ? (Object(c["openBlock"])(), Object(c["createElementBlock"])("img", Ha)) : (Object(c["openBlock"])(), Object(c["createElementBlock"])("img", Qa))])])
        }
        var Fa = {
            name: "ListItem",
            props: ["data"]
        };
        n("9360");
        const Ua = i()(Fa, [
            ["render", Pa],
            ["__scopeId", "data-v-592ed27d"]
        ]);
        var Ra = Ua,
            $a = {
                name: "More",
                data: function() {
                    return {
                        firstItems: [{
                            title: "Asetukset",
                            desc: "Ostoshistoria, ilmoitukset...",
                            icon: "settings",
                            link: !1
                        }, {
                            title: "Asiakaspalvelu",
                            desc: "Palvelu- ja myyntipisteet, yhteydenotot",
                            icon: "customer",
                            link: !0
                        }, {
                            title: "Palaute",
                            desc: "Lähetä palautetta",
                            icon: "feedback",
                            link: !1
                        }],
                        secondItems: [{
                            title: "Kaupunkipyörät",
                            desc: "Käyttöönotto ja palvelunhallinta",
                            icon: "bike",
                            link: !0
                        }, {
                            title: "HSL.fi",
                            desc: "Tietoa joukkoliikenteestä ja kaikista lipputuotteista",
                            icon: "web",
                            link: !0
                        }]
                    }
                },
                methods: {
                    openSettings: function() {
                        this.$router.push("/hidden/settings")
                    }
                },
                mounted: function() {
                    this.$refs.header.addEventListener("touchmove", (function(e) {
                        e.preventDefault()
                    }), !1)
                },
                components: {
                    ListItem: Ra
                }
            };
        n("8232");
        const Ka = i()($a, [
            ["render", Sa],
            ["__scopeId", "data-v-7c1907bb"]
        ]);
        var Wa = Ka,
            Ja = n("b8a8"),
            Ga = n.n(Ja),
            Za = n("194e"),
            Xa = n.n(Za),
            er = n("fd9b"),
            tr = n.n(er),
            nr = n("ee63"),
            cr = n.n(nr),
            ar = n("c0a2"),
            rr = n.n(ar),
            or = function(e) {
                return Object(c["pushScopeId"])("data-v-6679b932"), e = e(), Object(c["popScopeId"])(), e
            },
            ir = {
                class: "header-title",
                ref: "header"
            },
            sr = {
                class: "header-wrap"
            },
            lr = or((function() {
                return Object(c["createElementVNode"])("img", {
                    src: Ga.a,
                    class: "back"
                }, null, -1)
            })),
            dr = or((function() {
                return Object(c["createElementVNode"])("span", null, "Ostoshistoria", -1)
            })),
            ur = {
                class: "history-wrap"
            },
            br = {
                class: "month-title"
            },
            mr = {
                class: "month-name"
            },
            pr = ["onClick"],
            fr = {
                key: 0,
                src: Xa.a
            },
            jr = {
                key: 1,
                src: tr.a
            },
            vr = {
                class: "left"
            },
            Or = {
                class: "type"
            },
            hr = {
                class: "time"
            },
            kr = {
                class: "bottom"
            },
            gr = {
                class: "price"
            },
            Er = or((function() {
                return Object(c["createElementVNode"])("span", {
                    class: "alv"
                }, "Sis. alv. 10 %", -1)
            })),
            yr = {
                class: "right"
            },
            Nr = or((function() {
                return Object(c["createElementVNode"])("img", {
                    src: cr.a
                }, null, -1)
            })),
            Vr = or((function() {
                return Object(c["createElementVNode"])("img", {
                    src: rr.a
                }, null, -1)
            })),
            wr = ["onClick"],
            xr = {
                key: 0,
                src: Xa.a
            },
            Br = {
                key: 1,
                src: tr.a
            };

        function Cr(e, t, n, a, r, o) {
            var i = Object(c["resolveComponent"])("router-link");
            return Object(c["openBlock"])(), Object(c["createElementBlock"])(c["Fragment"], null, [Object(c["createElementVNode"])("div", ir, [Object(c["createElementVNode"])("div", sr, [Object(c["createVNode"])(i, {
                to: "/hsl/ticket/display"
            }, {
                default: Object(c["withCtx"])((function() {
                    return [lr]
                })),
                _: 1
            }), dr])], 512), Object(c["createElementVNode"])("div", ur, [(Object(c["openBlock"])(!0), Object(c["createElementBlock"])(c["Fragment"], null, Object(c["renderList"])(e.months, (function(e, t) {
                return Object(c["openBlock"])(), Object(c["createElementBlock"])("div", {
                    class: "month",
                    key: t
                }, [Object(c["createElementVNode"])("div", br, [Object(c["createElementVNode"])("span", mr, Object(c["toDisplayString"])(e.name), 1), Object(c["createElementVNode"])("span", {
                    onClick: function(t) {
                        return o.checkMonth(e)
                    },
                    class: "check"
                }, [e.checked ? (Object(c["openBlock"])(), Object(c["createElementBlock"])("img", fr)) : (Object(c["openBlock"])(), Object(c["createElementBlock"])("img", jr))], 8, pr)]), (Object(c["openBlock"])(!0), Object(c["createElementBlock"])(c["Fragment"], null, Object(c["renderList"])(e.purchases, (function(e, t) {
                    return Object(c["openBlock"])(), Object(c["createElementBlock"])("div", {
                        class: "purchase",
                        key: t
                    }, [Object(c["createElementVNode"])("div", vr, [Object(c["createElementVNode"])("span", Or, Object(c["toDisplayString"])(e.type) + " - " + Object(c["toDisplayString"])(e.area), 1), Object(c["createElementVNode"])("span", hr, Object(c["toDisplayString"])(o.formatDate(e.date)), 1), Object(c["createElementVNode"])("div", kr, [Object(c["createElementVNode"])("span", gr, Object(c["toDisplayString"])(e.price), 1), Er])]), Object(c["createElementVNode"])("div", yr, [Nr, Vr, Object(c["createElementVNode"])("div", {
                        onClick: function(t) {
                            return e.checked = !e.checked
                        }
                    }, [e.checked ? (Object(c["openBlock"])(), Object(c["createElementBlock"])("img", xr)) : (Object(c["openBlock"])(), Object(c["createElementBlock"])("img", Br))], 8, wr)])])
                })), 128))])
            })), 128))])], 64)
        }
        n("a630"), n("07ac"), n("4e82");
        var Tr = n("e2ff"),
            Sr = n.n(Tr),
            Dr = {
                name: "History",
                data: function() {
                    return {
                        monthNames: ["Tammikuu", "Helmikuu", "Maaliskuu", "Huhtikuu", "Toukokuu", "Heinäkuu", "Kesäkuu", "Elokuu", "Syyskuu", "Lokakuu", "Marraskuu", "Joulukuu"],
                        exampleTickets: [{
                            type: "Kertalippu",
                            area: "AB",
                            price: "1,40 €"
                        }, {
                            type: "Kertalippu",
                            area: "AB",
                            price: "2,80 €"
                        }, {
                            type: "Kertalippu",
                            area: "BC",
                            price: "1,40 €"
                        }, {
                            type: "Kertalippu",
                            area: "BC",
                            price: "2,80 €"
                        }, {
                            type: "Kertalippu",
                            area: "CD",
                            price: "1,60 €"
                        }, {
                            type: "Kertalippu",
                            area: "CD",
                            price: "3,20 €"
                        }, {
                            type: "Kertalippu",
                            area: "D",
                            price: "1,40 €"
                        }, {
                            type: "Kertalippu",
                            area: "D",
                            price: "2,80 €"
                        }, {
                            type: "Kertalippu",
                            area: "ABC",
                            price: "2,10 €"
                        }, {
                            type: "Kertalippu",
                            area: "ABC",
                            price: "4,10 €"
                        }],
                        months: []
                    }
                },
                methods: {
                    generatePurchases: function() {
                        var e = this,
                            t = Sr()(new Date, 1),
                            n = Object(at["subMonths"])(t, 9),
                            c = Array.from({
                                length: 140
                            }, (function() {
                                return e.randomDate(n, t)
                            })),
                            a = c.reduce((function(e, t) {
                                var n = Object(at["getMonth"])(t);
                                return e[n] = e[n] || [], e[n].push(t), e
                            }), Object.create(null));
                        for (var r in a) a[r] = {
                            checked: !1,
                            name: r > Object(at["getMonth"])() ? this.monthNames[r] + " " + Object(at["getYear"])(Object(at["subYears"])(new Date, 1)) : this.monthNames[r],
                            purchases: a[r].map((function(t) {
                                return Object(wt["a"])({
                                    checked: !1,
                                    date: t
                                }, e.randomTicket())
                            }))
                        };
                        var o = Object.values(a);
                        Object(at["isAfter"])(new Date, new Date), Object(at["isBefore"])(new Date, new Date), o.sort((function(e, t) {
                            return Object(at["isAfter"])(e.purchases[0].date, t.purchases[0].date) ? -1 : 1
                        }));
                        for (var i = 0, s = o; i < s.length; i++) {
                            var l = s[i];
                            l.purchases.sort((function(e, t) {
                                return Object(at["isAfter"])(e.date, t.date) ? -1 : 1
                            }))
                        }
                        this.months = o
                    },
                    randomTicket: function() {
                        return this.exampleTickets[Math.random() * this.exampleTickets.length | 0]
                    },
                    randomDate: function(e, t) {
                        return new Date(e.getTime() + Math.random() * (t.getTime() - e.getTime()))
                    },
                    checkMonth: function(e) {
                        var t = !e.checked;
                        e.checked = t;
                        var n, c = Object(d["a"])(e.purchases);
                        try {
                            for (c.s(); !(n = c.n()).done;) {
                                var a = n.value;
                                a.checked = t
                            }
                        } catch (r) {
                            c.e(r)
                        } finally {
                            c.f()
                        }
                    },
                    formatDate: function(e) {
                        return Object(at["format"])(e, "D.M.YYYY [klo] HH:mm")
                    }
                },
                mounted: function() {
                    this.$refs.header.addEventListener("touchmove", (function(e) {
                        e.preventDefault()
                    }), !1), this.generatePurchases()
                }
            };
        n("3ea3");
        const Ir = i()(Dr, [
            ["render", Cr],
            ["__scopeId", "data-v-6679b932"]
        ]);
        var _r = Ir,
            Ar = n("45f4"),
            Mr = n.n(Ar),
            Lr = function(e) {
                return Object(c["pushScopeId"])("data-v-57d96b1a"), e = e(), Object(c["popScopeId"])(), e
            },
            qr = {
                class: "ios-wrap"
            },
            zr = {
                class: "dad"
            },
            Yr = {
                class: "bg-dark rounded mb-2 d-flex",
                id: "top"
            },
            Hr = {
                class: "flex-grow-1 text-center py-3"
            },
            Qr = Lr((function() {
                return Object(c["createElementVNode"])("h1", {
                    class: "display-4"
                }, "Asetukset", -1)
            })),
            Pr = Lr((function() {
                return Object(c["createElementVNode"])("br", null, null, -1)
            })),
            Fr = {
                class: "btn btn-outline-info mt-3",
                style: {
                    width: "9rem"
                }
            },
            Ur = Object(c["createTextVNode"])(" Liput 🎟️ "),
            Rr = [Ur],
            $r = Lr((function() {
                return Object(c["createElementVNode"])("br", null, null, -1)
            })),
            Kr = {
                class: "btn btn-outline-info mt-2",
                style: {
                    width: "9rem"
                }
            },
            Wr = Object(c["createTextVNode"])(" QR-koodit 🤓 "),
            Jr = [Wr],
            Gr = {
                class: "card border-danger text-white mb-2"
            },
            Zr = Lr((function() {
                return Object(c["createElementVNode"])("div", {
                    class: "card-header"
                }, [Object(c["createElementVNode"])("h4", {
                    class: "card-title text-center"
                }, "Tervetuloa asetuksiin!")], -1)
            })),
            Xr = {
                class: "card-body text-center"
            },
            eo = Lr((function() {
                return Object(c["createElementVNode"])("span", null, "Tänne pääsee jatkossa vain salaisella tavalla:", -1)
            })),
            to = Lr((function() {
                return Object(c["createElementVNode"])("br", null, null, -1)
            })),
            no = {
                src: Mr.a,
                class: "img-fluid"
            },
            co = Lr((function() {
                return Object(c["createElementVNode"])("br", null, null, -1)
            })),
            ao = Lr((function() {
                return Object(c["createElementVNode"])("span", null, " Sinun kannattaa käydä tarkistuslista läpi ennen kuin alat käyttämään tätä sovellusta: ", -1)
            })),
            ro = Lr((function() {
                return Object(c["createElementVNode"])("br", null, null, -1)
            })),
            oo = {
                class: "btn btn-info mt-2"
            },
            io = Object(c["createTextVNode"])(" Tarkistuslista "),
            so = [io],
            lo = {
                class: "card-footer text-center"
            },
            uo = Object(c["createTextVNode"])(" Kova juttu!"),
            bo = Lr((function() {
                return Object(c["createElementVNode"])("br", null, null, -1)
            })),
            mo = Object(c["createTextVNode"])("Älä näytä mulle tätä viestiä enää ikinä. "),
            po = [uo, bo, mo],
            fo = Object(c["createStaticVNode"])('<div class="card border-success mb-2 opportunity" data-v-57d96b1a><div class="card-body" data-v-57d96b1a><span data-v-57d96b1a>Tienasin viime kuussa 800€ pienellä vaivalla ottamalla valokuvia. Jos tämä kiinnostaa</span><br data-v-57d96b1a><a href="https://51.fi/gj2" target="_blank" data-v-57d96b1a>paina tästä 💸</a></div></div><div class="card border-danger mb-2" data-v-57d96b1a><div class="card-body" data-v-57d96b1a><p class="text-danger" data-v-57d96b1a> MUISTA, että qr koodi on feikki, eli SE EI TOIMI. Älä siis näytä tätä lippua tarkastajille. </p><p data-v-57d96b1a> Tämä sovellus ei ole tehty vittuilakseen HSL:lle, joten jos sinulla on varaa ostaa aito lippu, tee se. </p></div></div>', 2),
            jo = Object(c["createTextVNode"])("Väri 🎨"),
            vo = Object(c["createTextVNode"])("Säädä lipun väriä"),
            Oo = Lr((function() {
                return Object(c["createElementVNode"])("p", {
                    class: "mb-4"
                }, [Object(c["createTextVNode"])(" Väri päivittyy "), Object(c["createElementVNode"])("b", {
                    class: "text-success"
                }, "automaattisesti. 🤖"), Object(c["createElementVNode"])("br"), Object(c["createTextVNode"])("Väri on siis aina oikea! ")], -1)
            })),
            ho = {
                class: "text-center"
            },
            ko = Object(c["createTextVNode"])("Oletusasetukset 🛠️"),
            go = Object(c["createTextVNode"])("Valitse sinulle sopivat oletusasetukset"),
            Eo = Lr((function() {
                return Object(c["createElementVNode"])("label", null, "Asiakasryhmä 🔞", -1)
            })),
            yo = Lr((function() {
                return Object(c["createElementVNode"])("option", {
                    value: "adult",
                    selected: ""
                }, "Aikuinen", -1)
            })),
            No = Lr((function() {
                return Object(c["createElementVNode"])("option", {
                    value: "child"
                }, "Lapsi (7-17)", -1)
            })),
            Vo = Lr((function() {
                return Object(c["createElementVNode"])("option", {
                    value: "student"
                }, "Opiskelija", -1)
            })),
            wo = [yo, No, Vo],
            xo = Lr((function() {
                return Object(c["createElementVNode"])("label", null, "Matkustusalue 🔠", -1)
            })),
            Bo = Lr((function() {
                return Object(c["createElementVNode"])("option", {
                    value: "AB",
                    selected: ""
                }, "AB", -1)
            })),
            Co = Lr((function() {
                return Object(c["createElementVNode"])("option", {
                    value: "ABC"
                }, "ABC", -1)
            })),
            To = Lr((function() {
                return Object(c["createElementVNode"])("option", {
                    value: "ABCD"
                }, "ABCD", -1)
            })),
            So = Lr((function() {
                return Object(c["createElementVNode"])("option", {
                    value: "BC"
                }, "BC", -1)
            })),
            Do = Lr((function() {
                return Object(c["createElementVNode"])("option", {
                    value: "BCD"
                }, "BCD", -1)
            })),
            Io = Lr((function() {
                return Object(c["createElementVNode"])("option", {
                    value: "CD"
                }, "CD", -1)
            })),
            _o = Lr((function() {
                return Object(c["createElementVNode"])("option", {
                    value: "D"
                }, "D", -1)
            })),
            Ao = [Bo, Co, To, So, Do, Io, _o],
            Mo = Lr((function() {
                return Object(c["createElementVNode"])("label", null, [Object(c["createTextVNode"])("Pimennys-turvakytkin 🌗 "), Object(c["createElementVNode"])("p", {
                    class: "small my-0"
                }, ' Näyttösi "sammuu" lipputilassa, jos laitteesi ei ole pystytilassa. ')], -1)
            })),
            Lo = {
                class: "custom-control-label"
            },
            qo = Lr((function() {
                return Object(c["createElementVNode"])("label", {
                    class: "mt-3"
                }, [Object(c["createTextVNode"])("Animaatiotekniikka 🎬 "), Object(c["createElementVNode"])("p", {
                    class: "small my-0"
                }, [Object(c["createElementVNode"])("b", {
                    class: "text-info"
                }, "SVG"), Object(c["createTextVNode"])(" on varmempi, mutta "), Object(c["createElementVNode"])("b", {
                    class: "text-info"
                }, "Video"), Object(c["createTextVNode"])(" saattaa olla sujuvampi. Testaa! ")])], -1)
            })),
            zo = {
                class: "custom-control-label"
            },
            Yo = Object(c["createTextVNode"])("Tarkistuslista ✅"),
            Ho = Object(c["createTextVNode"])("Tästä näet, hyödynnätkö sovellusta täysillä"),
            Qo = Lr((function() {
                return Object(c["createElementVNode"])("span", {
                    class: "text-warning font-weight-bold"
                }, "Haluat ehdottomasti,", -1)
            })),
            Po = Object(c["createTextVNode"])(" että tämä sovellus näyttäisi sovellukselta, eikä vaan nettisivulta."),
            Fo = Lr((function() {
                return Object(c["createElementVNode"])("br", null, null, -1)
            })),
            Uo = Lr((function() {
                return Object(c["createElementVNode"])("br", null, null, -1)
            })),
            Ro = Object(c["createTextVNode"])(" Jotta näin olisi, sinun on lisättä tämä sivu kotinäytöllesi. Jos tiedät miten se tehdään, kova juttu."),
            $o = Lr((function() {
                return Object(c["createElementVNode"])("br", null, null, -1)
            })),
            Ko = Lr((function() {
                return Object(c["createElementVNode"])("br", null, null, -1)
            })),
            Wo = Object(c["createTextVNode"])(" Jos et, "),
            Jo = Object(c["createTextVNode"])(" tästä löydät ohjeet."),
            Go = {
                class: "list-group mt-4"
            },
            Zo = {
                class: "list-group-item d-flex align-items-center font-weight-bold"
            },
            Xo = Object(c["createTextVNode"])(" Sovellus on lisätty kotinäytölle "),
            ei = {
                class: "list-group-item d-flex align-items-center"
            },
            ti = Object(c["createTextVNode"])(" Laitteesi on pystytilassa "),
            ni = {
                class: "list-group mt-4"
            },
            ci = {
                class: "list-group-item d-flex justify-content-between align-items-center"
            },
            ai = Lr((function() {
                return Object(c["createElementVNode"])("span", null, "Eikö jokin toimi?", -1)
            })),
            ri = Object(c["createTextVNode"])("QR-koodi 🤓"),
            oi = Object(c["createTextVNode"])("Jos kaverillasi on oikea lippu, voit lainata sitä"),
            ii = {
                style: {
                    "min-height": "100vh"
                },
                id: "tickets"
            },
            si = {
                class: "jumbotron text-center mb-2"
            },
            li = Lr((function() {
                return Object(c["createElementVNode"])("h1", {
                    class: "display-4"
                }, "Lippusi", -1)
            })),
            di = {
                class: "btn btn-secondary mb-1",
                style: {
                    width: "8rem"
                }
            },
            ui = Object(c["createTextVNode"])(" Ylös ⏫"),
            bi = [ui],
            mi = Lr((function() {
                return Object(c["createElementVNode"])("br", null, null, -1)
            })),
            pi = {
                key: 0
            },
            fi = Lr((function() {
                return Object(c["createElementVNode"])("i", null, "Osta", -1)
            })),
            ji = Object(c["createTextVNode"])(" uusi lippu"),
            vi = [fi, ji],
            Oi = {
                key: 1
            },
            hi = {
                class: "mt-1 p-2 bg-dark"
            },
            ki = Lr((function() {
                return Object(c["createElementVNode"])("span", null, "Kuinka pitkäksi ajaksi haluat lippusi? 🕘", -1)
            })),
            gi = Object(c["createTextVNode"])("Näköjään "),
            Ei = {
                class: "text-info"
            },
            yi = Lr((function() {
                return Object(c["createElementVNode"])("br", null, null, -1)
            })),
            Ni = {
                style: {
                    "min-height": "100vh"
                },
                id: "qrs"
            },
            Vi = {
                class: "jumbotron text-center mb-2"
            },
            wi = Lr((function() {
                return Object(c["createElementVNode"])("h1", {
                    class: "display-4"
                }, "QR-koodisi", -1)
            })),
            xi = {
                class: "btn btn-secondary mb-1",
                style: {
                    width: "8rem"
                }
            },
            Bi = Object(c["createTextVNode"])(" Ylös ⏫"),
            Ci = [Bi],
            Ti = Lr((function() {
                return Object(c["createElementVNode"])("br", null, null, -1)
            })),
            Si = {
                class: "btn btn-info",
                style: {
                    width: "8rem"
                }
            },
            Di = Object(c["createTextVNode"])(" Lisää QR-koodi "),
            Ii = [Di],
            _i = {
                class: ""
            };

        function Ai(e, t, n, a, r, o) {
            var i = Object(c["resolveComponent"])("ColorInfo"),
                s = Object(c["resolveComponent"])("Card"),
                l = Object(c["resolveComponent"])("router-link"),
                d = Object(c["resolveComponent"])("Qr"),
                u = Object(c["resolveComponent"])("Pref"),
                b = Object(c["resolveComponent"])("QrCard"),
                m = Object(c["resolveDirective"])("scroll-to");
            return Object(c["openBlock"])(), Object(c["createElementBlock"])("div", qr, [Object(c["createElementVNode"])("div", zr, [Object(c["createElementVNode"])("div", Yr, [Object(c["createElementVNode"])("div", {
                class: "bg-secondary d-flex justify-content-center align-items-center rounded back-btn",
                style: {
                    width: "5rem"
                },
                onClick: t[0] || (t[0] = function(e) {
                    return o.goBack()
                })
            }, " ⬅️ "), Object(c["createElementVNode"])("div", Hr, [Qr, Object(c["createElementVNode"])("button", {
                class: "btn btn-outline-success mt-2",
                onClick: t[1] || (t[1] = function(e) {
                    return o.goChat()
                }),
                style: {
                    width: "9rem"
                }
            }, " Chatti 💬 "), Pr, Object(c["withDirectives"])(Object(c["createElementVNode"])("button", Fr, Rr, 512), [
                [m, "#tickets"]
            ]), $r, Object(c["withDirectives"])(Object(c["createElementVNode"])("button", Kr, Jr, 512), [
                [m, "#qrs"]
            ])])]), Object(c["withDirectives"])(Object(c["createElementVNode"])("div", Gr, [Zr, Object(c["createElementVNode"])("div", Xr, [eo, to, Object(c["createElementVNode"])("button", {
                class: "btn btn-info my-2",
                onClick: t[2] || (t[2] = function(t) {
                    return e.showSecret = !e.showSecret
                })
            }, Object(c["toDisplayString"])(e.showSecret ? "Okei, muistan sen nyt!" : "Näytä salainen tapa!"), 1), Object(c["withDirectives"])(Object(c["createElementVNode"])("img", no, null, 512), [
                [c["vShow"], e.showSecret]
            ]), co, ao, ro, Object(c["withDirectives"])(Object(c["createElementVNode"])("button", oo, so, 512), [
                [m, "#checklist"]
            ])]), Object(c["createElementVNode"])("div", lo, [Object(c["createElementVNode"])("button", {
                class: "btn btn-sm btn-warning text-dark",
                onClick: t[3] || (t[3] = function(t) {
                    return e.noWelcome()
                })
            }, po)])], 512), [
                [c["vShow"], e.showWelcome]
            ]), fo, Object(c["createVNode"])(s, null, {
                title: Object(c["withCtx"])((function() {
                    return [jo]
                })),
                subtitle: Object(c["withCtx"])((function() {
                    return [vo]
                })),
                content: Object(c["withCtx"])((function() {
                    return [Oo, Object(c["createElementVNode"])("div", ho, [Object(c["createElementVNode"])("button", {
                        type: "button",
                        class: Object(c["normalizeClass"])(["btn btn-outline-warning", {
                            active: e.showColorInfo
                        }]),
                        onClick: t[4] || (t[4] = function(t) {
                            return e.showColorInfo = !e.showColorInfo
                        })
                    }, Object(c["toDisplayString"])(e.showColorInfo ? "Älä näytäkkään" : "Näytä statsei 📈"), 3)]), Object(c["withDirectives"])(Object(c["createVNode"])(i, null, null, 512), [
                        [c["vShow"], e.showColorInfo]
                    ])]
                })),
                _: 1
            }), Object(c["createVNode"])(s, null, {
                title: Object(c["withCtx"])((function() {
                    return [ko]
                })),
                subtitle: Object(c["withCtx"])((function() {
                    return [go]
                })),
                content: Object(c["withCtx"])((function() {
                    return [Eo, Object(c["withDirectives"])(Object(c["createElementVNode"])("select", {
                        class: "custom-select mb-3",
                        "onUpdate:modelValue": t[5] || (t[5] = function(e) {
                            return o.defaultAge = e
                        })
                    }, wo, 512), [
                        [c["vModelSelect"], o.defaultAge]
                    ]), xo, Object(c["withDirectives"])(Object(c["createElementVNode"])("select", {
                        class: "custom-select mb-3",
                        "onUpdate:modelValue": t[6] || (t[6] = function(e) {
                            return o.defaultArea = e
                        })
                    }, Ao, 512), [
                        [c["vModelSelect"], o.defaultArea]
                    ]), Mo, Object(c["createElementVNode"])("div", {
                        class: "custom-control custom-switch",
                        onClick: t[8] || (t[8] = function(e) {
                            return o.check("Blackout")
                        })
                    }, [Object(c["withDirectives"])(Object(c["createElementVNode"])("input", {
                        type: "checkbox",
                        class: "custom-control-input",
                        ref: "checkboxBlackout",
                        "onUpdate:modelValue": t[7] || (t[7] = function(e) {
                            return o.blackoutMode = e
                        })
                    }, null, 512), [
                        [c["vModelCheckbox"], o.blackoutMode]
                    ]), Object(c["createElementVNode"])("label", Lo, Object(c["toDisplayString"])(o.blackoutMode ? "Käytössä 🌚" : "Ei käytössä 🌞"), 1)]), qo, Object(c["createElementVNode"])("div", {
                        class: "custom-control custom-switch",
                        onClick: t[10] || (t[10] = function(e) {
                            return o.check("Animation")
                        })
                    }, [Object(c["withDirectives"])(Object(c["createElementVNode"])("input", {
                        type: "checkbox",
                        class: "custom-control-input",
                        ref: "checkboxAnimation",
                        "onUpdate:modelValue": t[9] || (t[9] = function(e) {
                            return o.svgOn = e
                        })
                    }, null, 512), [
                        [c["vModelCheckbox"], o.svgOn]
                    ]), Object(c["createElementVNode"])("label", zo, Object(c["toDisplayString"])(o.svgOn ? "SVG" : "Video"), 1)])]
                })),
                _: 1
            }), Object(c["createVNode"])(s, {
                id: "checklist"
            }, {
                title: Object(c["withCtx"])((function() {
                    return [Yo]
                })),
                subtitle: Object(c["withCtx"])((function() {
                    return [Ho]
                })),
                content: Object(c["withCtx"])((function() {
                    return [Object(c["createElementVNode"])("p", null, [Qo, Po, Fo, Uo, Ro, $o, Ko, Wo, Object(c["createVNode"])(l, {
                        to: "/hidden/tutorial"
                    }, {
                        default: Object(c["withCtx"])((function() {
                            return [Jo]
                        })),
                        _: 1
                    })]), Object(c["createElementVNode"])("ul", Go, [Object(c["createElementVNode"])("li", Zo, [Object(c["createElementVNode"])("i", {
                        class: Object(c["normalizeClass"])(["bi mr-3", [o.homescreen ? "bi-check2" : "bi-x", o.homescreen ? "text-success" : "text-danger"]]),
                        style: {
                            "font-size": "1.5rem"
                        }
                    }, null, 2), Xo]), Object(c["createElementVNode"])("li", ei, [Object(c["createElementVNode"])("i", {
                        class: Object(c["normalizeClass"])(["bi mr-3", [e.portrait ? "bi-check2" : "bi-x", e.portrait ? "text-success" : "text-danger"]]),
                        style: {
                            "font-size": "1.5rem"
                        }
                    }, null, 2), ti])]), Object(c["createElementVNode"])("ul", ni, [Object(c["createElementVNode"])("li", ci, [ai, Object(c["createElementVNode"])("button", {
                        class: "btn btn-danger",
                        onClick: t[11] || (t[11] = function(e) {
                            return o.resetApp()
                        })
                    }, " Resetoi sovellus ")])])]
                })),
                _: 1
            }), Object(c["createVNode"])(s, {
                id: "addQr"
            }, {
                title: Object(c["withCtx"])((function() {
                    return [ri]
                })),
                subtitle: Object(c["withCtx"])((function() {
                    return [oi]
                })),
                content: Object(c["withCtx"])((function() {
                    return [Object(c["createVNode"])(d)]
                })),
                _: 1
            }), Object(c["createElementVNode"])("div", ii, [Object(c["createElementVNode"])("div", si, [li, Object(c["createElementVNode"])("p", {
                class: Object(c["normalizeClass"])(e.tickets.length > 0 ? "text-info" : "text-danger")
            }, " Sinulla on tällä hetkellä " + Object(c["toDisplayString"])(e.tickets.length) + " " + Object(c["toDisplayString"])(1 === e.tickets.length ? "lippu" : "lippua"), 3), Object(c["withDirectives"])(Object(c["createElementVNode"])("button", di, bi, 512), [
                [m, "#top"]
            ]), mi, Object(c["createElementVNode"])("button", {
                class: Object(c["normalizeClass"])(["btn btn-info", {
                    "btn-dark": e.showSlider
                }]),
                style: {
                    width: "8rem"
                },
                onClick: t[12] || (t[12] = function(t) {
                    return e.showSlider = !e.showSlider
                })
            }, [e.showSlider ? (Object(c["openBlock"])(), Object(c["createElementBlock"])("span", Oi, "Sulje ✋")) : (Object(c["openBlock"])(), Object(c["createElementBlock"])("span", pi, vi))], 2), Object(c["withDirectives"])(Object(c["createElementVNode"])("div", hi, [ki, Object(c["withDirectives"])(Object(c["createElementVNode"])("input", {
                type: "range",
                class: "custom-range mt-1",
                min: "1",
                max: "24",
                step: "1",
                "onUpdate:modelValue": t[13] || (t[13] = function(t) {
                    return e.sliderValue = t
                })
            }, null, 512), [
                [c["vModelText"], e.sliderValue]
            ]), Object(c["createElementVNode"])("span", null, [gi, Object(c["createElementVNode"])("span", Ei, Object(c["toDisplayString"])(o.ticketExpiry()) + ".", 1)]), yi, Object(c["createElementVNode"])("button", {
                class: "btn btn-success mt-4",
                onClick: t[14] || (t[14] = function(e) {
                    return o.buyTicket()
                })
            }, " Osta! 🤑 ")], 512), [
                [c["vShow"], e.showSlider]
            ])]), Object(c["createElementVNode"])("div", null, [(Object(c["openBlock"])(!0), Object(c["createElementBlock"])(c["Fragment"], null, Object(c["renderList"])(e.tickets, (function(e, t) {
                return Object(c["openBlock"])(), Object(c["createBlock"])(u, {
                    key: t,
                    preferences: e
                }, null, 8, ["preferences"])
            })), 128))])]), Object(c["createElementVNode"])("div", Ni, [Object(c["createElementVNode"])("div", Vi, [wi, Object(c["createElementVNode"])("p", {
                class: Object(c["normalizeClass"])(e.qrs.length > 0 ? "text-info" : "text-danger")
            }, " Sinulla on tällä hetkellä " + Object(c["toDisplayString"])(e.qrs.length) + " " + Object(c["toDisplayString"])(1 === e.qrs.length ? "koodi" : "koodia"), 3), Object(c["withDirectives"])(Object(c["createElementVNode"])("button", xi, Ci, 512), [
                [m, "#top"]
            ]), Ti, Object(c["withDirectives"])(Object(c["createElementVNode"])("button", Si, Ii, 512), [
                [m, {
                    el: "#addQr",
                    cancelable: !1,
                    offset: o.halfHeight
                }]
            ])]), Object(c["createElementVNode"])("div", _i, [(Object(c["openBlock"])(!0), Object(c["createElementBlock"])(c["Fragment"], null, Object(c["renderList"])(e.qrs, (function(e, t) {
                return Object(c["openBlock"])(), Object(c["createBlock"])(b, {
                    key: t,
                    preferences: e
                }, null, 8, ["preferences"])
            })), 128))])])])])
        }
        var Mi = {
                class: "card border-secondary mb-2",
                style: {
                    width: "100%"
                }
            },
            Li = {
                class: "card-body"
            },
            qi = {
                class: "card-title"
            },
            zi = {
                class: "card-subtitle mb-2 text-muted"
            };

        function Yi(e, t, n, a, r, o) {
            return Object(c["openBlock"])(), Object(c["createElementBlock"])("div", Mi, [Object(c["createElementVNode"])("div", Li, [Object(c["createElementVNode"])("h5", qi, [Object(c["renderSlot"])(e.$slots, "title")]), Object(c["createElementVNode"])("h6", zi, [Object(c["renderSlot"])(e.$slots, "subtitle")]), Object(c["createElementVNode"])("div", null, [Object(c["renderSlot"])(e.$slots, "content")])])])
        }
        var Hi = {
            name: "Card"
        };
        const Qi = i()(Hi, [
            ["render", Yi]
        ]);
        var Pi = Qi,
            Fi = {
                class: "card bg-dark border-secondary mb-2",
                style: {
                    width: "100%"
                }
            },
            Ui = {
                class: "card-header"
            },
            Ri = {
                key: 0,
                class: "text-success"
            },
            $i = {
                key: 1,
                class: "text-danger"
            },
            Ki = {
                class: "card-body"
            },
            Wi = Object(c["createElementVNode"])("h5", null, "Lipputyyppi 🎟️", -1),
            Ji = {
                class: "mb-4"
            },
            Gi = {
                key: 0
            },
            Zi = Object(c["createTextVNode"])("Kertalippu "),
            Xi = Object(c["createElementVNode"])("span", {
                class: "text-info"
            }, "(80 minuuttia)", -1),
            es = [Zi, Xi],
            ts = {
                key: 1
            },
            ns = Object(c["createTextVNode"])("Vuorokausilippu "),
            cs = Object(c["createElementVNode"])("span", {
                class: "text-info"
            }, null, -1),
            as = Object(c["createTextVNode"])("(1 vrk - 13 vrk)"),
            rs = [ns, cs, as],
            os = {
                key: 2
            },
            is = Object(c["createTextVNode"])("Kausilippu "),
            ss = Object(c["createElementVNode"])("span", {
                class: "text-info"
            }, "(14 vrk - 360 vrk)", -1),
            ls = [is, ss],
            ds = Object(c["createElementVNode"])("h5", null, "Aikaa jäljellä ⏰", -1),
            us = {
                class: "text-info mb-3"
            },
            bs = Object(c["createElementVNode"])("h5", null, "Asiakasryhmä 🔞", -1),
            ms = Object(c["createElementVNode"])("option", {
                value: "adult",
                selected: ""
            }, "Aikuinen", -1),
            ps = Object(c["createElementVNode"])("option", {
                value: "child"
            }, "Lapsi (7-17)", -1),
            fs = Object(c["createElementVNode"])("option", {
                value: "student"
            }, "Opiskelija", -1),
            js = [ms, ps, fs],
            vs = Object(c["createElementVNode"])("h5", null, "Matkustusalue 🔠", -1),
            Os = Object(c["createStaticVNode"])('<option value="AB" selected>AB</option><option value="ABC">ABC</option><option value="ABCD">ABCD</option><option value="BC">BC</option><option value="BCD">BCD</option><option value="CD">CD</option><option value="D">D</option>', 7),
            hs = [Os],
            ks = Object(c["createElementVNode"])("h5", null, "QR-koodi 🤓", -1),
            gs = Object(c["createElementVNode"])("option", {
                value: "random",
                selected: ""
            }, "Ihan random vaa", -1),
            Es = ["value", "disabled"],
            ys = {
                class: "text-center"
            };

        function Ns(e, t, n, a, r, o) {
            return Object(c["openBlock"])(), Object(c["createElementBlock"])("div", Fi, [Object(c["createElementVNode"])("div", Ui, [n.preferences.expired ? (Object(c["openBlock"])(), Object(c["createElementBlock"])("span", $i, "Ei voimassa")) : (Object(c["openBlock"])(), Object(c["createElementBlock"])("span", Ri, "Voimassa ✅"))]), Object(c["createElementVNode"])("div", Ki, [Object(c["withDirectives"])(Object(c["createElementVNode"])("div", null, [Wi, Object(c["createElementVNode"])("div", Ji, ["single" === n.preferences.type ? (Object(c["openBlock"])(), Object(c["createElementBlock"])("span", Gi, es)) : "week" === n.preferences.type ? (Object(c["openBlock"])(), Object(c["createElementBlock"])("span", ts, rs)) : "period" === n.preferences.type ? (Object(c["openBlock"])(), Object(c["createElementBlock"])("span", os, ls)) : Object(c["createCommentVNode"])("", !0)]), ds, Object(c["createElementVNode"])("p", us, Object(c["toDisplayString"])(o.formatRemaining(n.preferences.expiry)), 1), bs, Object(c["withDirectives"])(Object(c["createElementVNode"])("select", {
                class: "custom-select mb-3",
                "onUpdate:modelValue": t[0] || (t[0] = function(e) {
                    return o.age = e
                })
            }, js, 512), [
                [c["vModelSelect"], o.age]
            ]), vs, Object(c["withDirectives"])(Object(c["createElementVNode"])("select", {
                class: "custom-select mb-3",
                "onUpdate:modelValue": t[1] || (t[1] = function(e) {
                    return o.area = e
                })
            }, hs, 512), [
                [c["vModelSelect"], o.area]
            ]), ks, Object(c["withDirectives"])(Object(c["createElementVNode"])("select", {
                class: "custom-select mb-3",
                "onUpdate:modelValue": t[2] || (t[2] = function(e) {
                    return o.qrId = e
                })
            }, [gs, (Object(c["openBlock"])(!0), Object(c["createElementBlock"])(c["Fragment"], null, Object(c["renderList"])(e.qrs, (function(e, t) {
                return Object(c["openBlock"])(), Object(c["createElementBlock"])("option", {
                    key: t,
                    value: e.id,
                    disabled: o.isUsed(e.id)
                }, " Lisätty: " + Object(c["toDisplayString"])(o.formatQrAdded(e.added)), 9, Es)
            })), 128))], 512), [
                [c["vModelSelect"], o.qrId]
            ])], 512), [
                [c["vShow"], !n.preferences.expired]
            ]), Object(c["createElementVNode"])("div", ys, [Object(c["createElementVNode"])("button", {
                class: "btn btn-danger",
                onClick: t[3] || (t[3] = function(t) {
                    return e.deleteTicket(n.preferences.id)
                })
            }, " Poista tämä lippu ")])])])
        }
        n("99af");
        var Vs = n("c9fb"),
            ws = n.n(Vs),
            xs = {
                name: "Pref",
                methods: Object(wt["a"])(Object(wt["a"])({}, Object(H["d"])(["setAge", "setArea", "setType", "deleteTicket", "setQr"])), {}, {
                    formatRemaining: function(e) {
                        var t = new Date,
                            n = new Date(e),
                            c = ws()(t, n),
                            a = "".concat(c.months, "kk ").concat(c.days, "p ").concat(c.hours, "h ").concat(c.minutes, "m");
                        return a
                    },
                    formatQrAdded: function(e) {
                        return Object(at["format"])(new Date(e), "D.M.YYYY H:m")
                    },
                    isUsed: function(e) {
                        return this.$store.getters.qrUsed(e)
                    }
                }),
                computed: Object(wt["a"])(Object(wt["a"])({}, Object(H["e"])(["qrs"])), {}, {
                    age: {
                        get: function() {
                            return this.preferences.age
                        },
                        set: function(e) {
                            var t = this.preferences.id;
                            this.setAge({
                                id: t,
                                age: e
                            })
                        }
                    },
                    area: {
                        get: function() {
                            return this.preferences.area
                        },
                        set: function(e) {
                            var t = this.preferences.id;
                            this.setArea({
                                id: t,
                                area: e
                            })
                        }
                    },
                    type: {
                        get: function() {
                            return this.preferences.type
                        },
                        set: function(e) {
                            var t = this.preferences.id;
                            this.setType({
                                id: t,
                                type: e
                            })
                        }
                    },
                    qrId: {
                        get: function() {
                            var e = this.preferences.qr;
                            return this.$store.getters.qrExists(e) ? e : (this.setQr({
                                qrId: "random",
                                ticketId: this.preferences.id
                            }), "random")
                        },
                        set: function(e) {
                            this.setQr({
                                qrId: e,
                                ticketId: this.preferences.id
                            })
                        }
                    }
                }),
                props: ["preferences"]
            };
        const Bs = i()(xs, [
            ["render", Ns]
        ]);
        var Cs = Bs,
            Ts = function(e) {
                return Object(c["pushScopeId"])("data-v-673ddb64"), e = e(), Object(c["popScopeId"])(), e
            },
            Ss = {
                class: "container bg-secondary py-3 mt-2"
            },
            Ds = {
                class: "table table-hover"
            },
            Is = {
                class: "table-dark"
            },
            _s = Ts((function() {
                return Object(c["createElementVNode"])("th", {
                    scope: "row"
                }, "Väri", -1)
            })),
            As = {
                key: 0
            },
            Ms = Ts((function() {
                return Object(c["createElementVNode"])("div", {
                    class: "spinner-grow spinner-grow-sm text-warning"
                }, null, -1)
            })),
            Ls = [Ms],
            qs = {
                key: 1,
                class: "text-info"
            },
            zs = Ts((function() {
                return Object(c["createElementVNode"])("br", null, null, -1)
            })),
            Ys = Ts((function() {
                return Object(c["createElementVNode"])("br", null, null, -1)
            })),
            Hs = {
                class: "table-dark"
            },
            Qs = Ts((function() {
                return Object(c["createElementVNode"])("th", {
                    scope: "row"
                }, "Vanhenee", -1)
            })),
            Ps = {
                key: 0
            },
            Fs = Ts((function() {
                return Object(c["createElementVNode"])("div", {
                    class: "spinner-grow spinner-grow-sm text-warning"
                }, null, -1)
            })),
            Us = [Fs],
            Rs = {
                key: 1,
                class: "text-info"
            },
            $s = {
                class: "table-dark"
            },
            Ks = Ts((function() {
                return Object(c["createElementVNode"])("th", {
                    scope: "row"
                }, "Päivitetty", -1)
            })),
            Ws = {
                key: 0
            },
            Js = Ts((function() {
                return Object(c["createElementVNode"])("div", {
                    class: "spinner-grow spinner-grow-sm text-warning"
                }, null, -1)
            })),
            Gs = [Js],
            Zs = {
                key: 1,
                class: "text-info"
            },
            Xs = {
                class: "table-dark"
            },
            el = Ts((function() {
                return Object(c["createElementVNode"])("th", {
                    scope: "row"
                }, "Onnistuiko?", -1)
            })),
            tl = {
                key: 0
            },
            nl = Ts((function() {
                return Object(c["createElementVNode"])("div", {
                    class: "spinner-grow spinner-grow-sm text-warning"
                }, null, -1)
            })),
            cl = [nl],
            al = {
                key: 1,
                class: "text-success"
            },
            rl = {
                key: 2,
                class: "text-danger"
            },
            ol = Object(c["createTextVNode"])(" Ei onnistunut! "),
            il = Ts((function() {
                return Object(c["createElementVNode"])("br", null, null, -1)
            })),
            sl = Ts((function() {
                return Object(c["createElementVNode"])("b", null, "SYY: ", -1)
            })),
            ll = {
                class: "text-warning"
            },
            dl = {
                class: "table-dark"
            },
            ul = Ts((function() {
                return Object(c["createElementVNode"])("th", {
                    scope: "row"
                }, null, -1)
            })),
            bl = Ts((function() {
                return Object(c["createElementVNode"])("td", {
                    class: "text-warning"
                }, " Väri toimii kuitenkin kunnes se vanhenee. ", -1)
            })),
            ml = [ul, bl],
            pl = {
                class: "text-center"
            },
            fl = Ts((function() {
                return Object(c["createElementVNode"])("b", null, "Päivitä värit nyt! 😡", -1)
            })),
            jl = Ts((function() {
                return Object(c["createElementVNode"])("br", null, null, -1)
            })),
            vl = Object(c["createTextVNode"])("( saa, mutta "),
            Ol = Ts((function() {
                return Object(c["createElementVNode"])("i", null, "ei tarvitse", -1)
            })),
            hl = Object(c["createTextVNode"])(" ) "),
            kl = [fl, jl, vl, Ol, hl],
            gl = {
                key: 1,
                class: "btn btn-dark btn-outline-success",
                type: "button",
                disabled: ""
            },
            El = Ts((function() {
                return Object(c["createElementVNode"])("span", {
                    class: "spinner-border spinner-border-sm"
                }, null, -1)
            })),
            yl = Object(c["createTextVNode"])(" Venaa hetki... "),
            Nl = [El, yl];

        function Vl(e, t, n, a, r, o) {
            return Object(c["openBlock"])(), Object(c["createElementBlock"])("div", Ss, [Object(c["createElementVNode"])("table", Ds, [Object(c["createElementVNode"])("tbody", null, [Object(c["createElementVNode"])("tr", Is, [_s, e.updating ? (Object(c["openBlock"])(), Object(c["createElementBlock"])("td", As, Ls)) : (Object(c["openBlock"])(), Object(c["createElementBlock"])("td", qs, [Object(c["createTextVNode"])(Object(c["toDisplayString"])(o.colorHex()), 1), zs, Object(c["createTextVNode"])(" " + Object(c["toDisplayString"])(o.colorRgb()), 1), Ys, Object(c["createElementVNode"])("div", {
                class: "example",
                style: Object(c["normalizeStyle"])({
                    background: e.color.value
                })
            }, null, 4)]))]), Object(c["createElementVNode"])("tr", Hs, [Qs, e.updating ? (Object(c["openBlock"])(), Object(c["createElementBlock"])("td", Ps, Us)) : (Object(c["openBlock"])(), Object(c["createElementBlock"])("td", Rs, Object(c["toDisplayString"])(e.color.expiry ? o.formatExpiry(e.color.expiry) : "Ei hajuakaan"), 1))]), Object(c["createElementVNode"])("tr", $s, [Ks, e.updating ? (Object(c["openBlock"])(), Object(c["createElementBlock"])("td", Ws, Gs)) : (Object(c["openBlock"])(), Object(c["createElementBlock"])("td", Zs, Object(c["toDisplayString"])(e.fetchDate ? o.formatDate(e.fetchDate) : "Ei tietoa"), 1))]), Object(c["createElementVNode"])("tr", Xs, [el, e.updating ? (Object(c["openBlock"])(), Object(c["createElementBlock"])("td", tl, cl)) : e.fetchError ? (Object(c["openBlock"])(), Object(c["createElementBlock"])("td", rl, [ol, il, sl, Object(c["createElementVNode"])("span", ll, Object(c["toDisplayString"])(e.fetchErrorCause), 1)])) : (Object(c["openBlock"])(), Object(c["createElementBlock"])("td", al, "Onnistui!"))]), Object(c["withDirectives"])(Object(c["createElementVNode"])("tr", dl, ml, 512), [
                [c["vShow"], e.fetchError]
            ])])]), Object(c["createElementVNode"])("div", pl, [e.updating ? (Object(c["openBlock"])(), Object(c["createElementBlock"])("button", gl, Nl)) : (Object(c["openBlock"])(), Object(c["createElementBlock"])("button", {
                key: 0,
                type: "button",
                class: "btn btn-dark btn-outline-success",
                onClick: t[0] || (t[0] = function(e) {
                    return o.updateColor()
                })
            }, kl))])])
        }
        n("466d");
        var wl = n("bcaa"),
            xl = {
                name: "ColorInfo",
                data: function() {
                    return {
                        updating: !1
                    }
                },
                methods: {
                    updateColor: function() {
                        var e = this;
                        return Object(ve["a"])(regeneratorRuntime.mark((function t() {
                            return regeneratorRuntime.wrap((function(t) {
                                while (1) switch (t.prev = t.next) {
                                    case 0:
                                        return e.updating = !0, t.next = 3, e.$store.dispatch("fetchColor");
                                    case 3:
                                        e.updating = !1;
                                    case 4:
                                    case "end":
                                        return t.stop()
                                }
                            }), t)
                        })))()
                    },
                    colorHex: function() {
                        var e = this.color.value.toUpperCase();
                        return e.match("#[0-9A-z]{6}") ? e : "Ei mikään"
                    },
                    colorRgb: function() {
                        try {
                            return wl(this.color.value, {
                                format: "css"
                            })
                        } catch (e) {
                            return "Ei mikään"
                        }
                    },
                    formatDate: function(e) {
                        return Object(at["format"])(new Date(e), "D.M.YYYY \n H:mm.ss")
                    },
                    formatExpiry: function(e) {
                        return Object(at["format"])(new Date(e), "D.M.YYYY \n H:mm")
                    }
                },
                computed: Object(wt["a"])({}, Object(H["e"])(["color", "fetchError", "fetchErrorCause", "fetchDate"]))
            };
        n("885e");
        const Bl = i()(xl, [
            ["render", Vl],
            ["__scopeId", "data-v-673ddb64"]
        ]);
        var Cl = Bl,
            Tl = {
                key: 0,
                class: "text-danger text-center"
            },
            Sl = Object(c["createTextVNode"])(" Tämähän on tietenkin erittäin suuri riski. En siis suosittele olla näin isomunanen. Jos jäät kiinni, saat enemmän kuin sakkoja. "),
            Dl = Object(c["createElementVNode"])("br", null, null, -1),
            Il = Object(c["createElementVNode"])("small", {
                class: "text-white"
            }, "Oletko jo tehnyt tämän?", -1),
            _l = Object(c["createElementVNode"])("br", null, null, -1),
            Al = {
                class: "btn btn-info text-dark mt-1",
                style: {
                    width: "14rem"
                }
            },
            Ml = Object(c["createTextVNode"])(" Haluan katsella QR-koodejani "),
            Ll = [Ml],
            ql = {
                key: 1
            },
            zl = Object(c["createElementVNode"])("p", {
                class: "text-info"
            }, " Pyydä kaveriasi lähettämään näyttökuva lipustaan. Jos kaverisi seisoo vieressäsi, voit myös tällä sovelluksella ottaa kuvan hänen QR-koodistaan. ", -1),
            Yl = {
                class: "text-center mb-3"
            },
            Hl = {
                key: 0,
                class: "loading"
            },
            Ql = Object(c["createElementVNode"])("span", null, "Venaa... 🏖️", -1),
            Pl = [Ql],
            Fl = {
                key: 1
            },
            Ul = Object(c["createElementVNode"])("br", null, null, -1),
            Rl = Object(c["createElementVNode"])("br", null, null, -1),
            $l = {
                class: "footer bg-secondary d-flex align-items-center justify-content-center"
            },
            Kl = {
                class: "badge badge-danger"
            },
            Wl = {
                key: 1,
                class: "custom-file mb-3"
            },
            Jl = Object(c["createElementVNode"])("label", {
                class: "custom-file-label",
                "data-browse": "Kamerarulla"
            }, "Etsi näyttökuva 📱", -1),
            Gl = {
                class: "text-center mt-1"
            },
            Zl = {
                class: "text-danger"
            },
            Xl = {
                class: "alert alert-dismissible alert-success mt-1"
            },
            ed = Object(c["createElementVNode"])("h4", {
                class: "alert-heading"
            }, "Hyvä! Koodi löytyi!", -1),
            td = Object(c["createElementVNode"])("p", {
                class: "mb-0"
            }, " Koodi on kaikenlisäks oikeassa muodossa, joten saatat ehkä mahdollisesti selviä tästä! ", -1),
            nd = [ed, td],
            cd = Object(c["createElementVNode"])("p", {
                class: "text-info"
            }, " Kaverisi lipun QR-koodin alla on kaksi lukua. Syötä ne tänne. (Varmuuden vuoksi) ", -1),
            ad = Object(c["createElementVNode"])("label", {
                class: "form-control-label"
            }, "Vasen 👈", -1),
            rd = {
                key: 0,
                class: "valid-feedback"
            },
            od = {
                key: 1,
                class: "invalid-feedback"
            },
            id = Object(c["createElementVNode"])("label", {
                class: "form-control-label"
            }, "Oikea 👉", -1),
            sd = {
                key: 0,
                class: "valid-feedback"
            },
            ld = {
                key: 1,
                class: "invalid-feedback"
            },
            dd = Object(c["createElementVNode"])("br", null, null, -1),
            ud = Object(c["createElementVNode"])("small", {
                class: "text-warning"
            }, 'Muista, että tämä vanhenee, kun kaverisi lippu vanhenee. Joten, poista tämä sitten, kun se on turha. Sen voi tehdä "Minun QR-koodit" -osiosta.', -1);

        function bd(e, t, n, a, r, o) {
            var i = Object(c["resolveComponent"])("QrStream"),
                s = Object(c["resolveComponent"])("QrCapture"),
                l = Object(c["resolveDirective"])("scroll-to");
            return Object(c["openBlock"])(), Object(c["createElementBlock"])("div", null, [e.balls ? (Object(c["openBlock"])(), Object(c["createElementBlock"])("div", ql, [zl, Object(c["withDirectives"])(Object(c["createElementVNode"])("div", Yl, [Object(c["createElementVNode"])("button", {
                class: Object(c["normalizeClass"])(["btn btn-info mr-1", {
                    active: e.stream
                }]),
                onClick: t[1] || (t[1] = function(t) {
                    e.stream = !e.stream, e.roll = !1
                })
            }, " Kamera 📹 ", 2), Object(c["createElementVNode"])("button", {
                class: Object(c["normalizeClass"])(["btn btn-info", {
                    active: e.roll
                }]),
                onClick: t[2] || (t[2] = function(t) {
                    e.roll = !e.roll, e.stream = !1
                })
            }, " Kamerarulla 🖼️ ", 2)], 512), [
                [c["vShow"], !e.found]
            ]), e.stream ? (Object(c["openBlock"])(), Object(c["createBlock"])(i, {
                key: 0,
                onDecode: o.onDecode,
                onInit: o.onInit,
                camera: e.camera,
                class: "mb-3"
            }, {
                default: Object(c["withCtx"])((function() {
                    return [e.loading ? (Object(c["openBlock"])(), Object(c["createElementBlock"])("div", Hl, Pl)) : (Object(c["openBlock"])(), Object(c["createElementBlock"])("div", Fl, [Object(c["createElementVNode"])("button", {
                        class: Object(c["normalizeClass"])(["btn btn-sm btn-dark mt-1 ml-1", {
                            "text-success": "auto" === e.camera,
                            active: "auto" === e.camera
                        }]),
                        onClick: t[3] || (t[3] = function(e) {
                            return o.switchCamera("auto")
                        })
                    }, " Peruskamera 📷 ", 2), Ul, Object(c["createElementVNode"])("button", {
                        class: Object(c["normalizeClass"])(["btn btn-sm btn-dark mt-1 ml-1", {
                            disabled: e.noRearCamera,
                            "text-danger": e.noRearCamera,
                            "text-success": "rear" === e.camera,
                            active: "rear" === e.camera
                        }]),
                        onClick: t[4] || (t[4] = function(e) {
                            return o.switchCamera("rear")
                        })
                    }, " Takakamera 📷 ", 2), Rl, Object(c["createElementVNode"])("button", {
                        class: Object(c["normalizeClass"])(["btn btn-sm btn-dark mt-1 ml-1", {
                            disabled: e.noFrontCamera,
                            "text-danger": e.noFrontCamera,
                            "text-success": "front" === e.camera,
                            active: "front" === e.camera
                        }]),
                        onClick: t[5] || (t[5] = function(e) {
                            return o.switchCamera("front")
                        })
                    }, " Etukamera 📷 ", 2), Object(c["createElementVNode"])("div", $l, [Object(c["withDirectives"])(Object(c["createElementVNode"])("span", Kl, "QR-koodi virheellinen", 512), [
                        [c["vShow"], e.error]
                    ])])]))]
                })),
                _: 1
            }, 8, ["onDecode", "onInit", "camera"])) : e.roll ? (Object(c["openBlock"])(), Object(c["createElementBlock"])("div", Wl, [Object(c["createVNode"])(s, {
                onDecode: o.onDecode,
                multiple: !1,
                name: null,
                capture: null,
                class: "custom-file-input"
            }, null, 8, ["onDecode"]), Jl, Object(c["createElementVNode"])("div", Gl, [Object(c["withDirectives"])(Object(c["createElementVNode"])("span", Zl, "Sori mut tuo QR-koodi ei kelpaa.", 512), [
                [c["vShow"], e.error]
            ])])])) : Object(c["createCommentVNode"])("", !0), Object(c["withDirectives"])(Object(c["createElementVNode"])("div", Xl, nd, 512), [
                [c["vShow"], e.found]
            ]), cd, Object(c["createElementVNode"])("div", null, [Object(c["createElementVNode"])("div", {
                class: Object(c["normalizeClass"])(["form-group", o.firstCorrect ? "has-success" : "has-danger"])
            }, [ad, Object(c["withDirectives"])(Object(c["createElementVNode"])("input", {
                type: "number",
                pattern: "\\d*",
                class: Object(c["normalizeClass"])(["form-control", o.firstCorrect ? "is-valid" : "is-invalid"]),
                placeholder: "382619",
                "onUpdate:modelValue": t[6] || (t[6] = function(t) {
                    return e.first = t
                })
            }, null, 2), [
                [c["vModelText"], e.first]
            ]), o.firstCorrect ? (Object(c["openBlock"])(), Object(c["createElementBlock"])("div", rd, " Nyt näyttää oikealta! ")) : (Object(c["openBlock"])(), Object(c["createElementBlock"])("div", od, " Ömm... Nyt ei näytä hyvältä. 🤮 "))], 2), Object(c["createElementVNode"])("div", {
                class: Object(c["normalizeClass"])(["form-group", o.secondCorrect ? "has-success" : "has-danger"])
            }, [id, Object(c["withDirectives"])(Object(c["createElementVNode"])("input", {
                type: "number",
                pattern: "\\d*",
                class: Object(c["normalizeClass"])(["form-control", o.secondCorrect ? "is-valid" : "is-invalid"]),
                placeholder: "37194820",
                "onUpdate:modelValue": t[7] || (t[7] = function(t) {
                    return e.second = t
                })
            }, null, 2), [
                [c["vModelText"], e.second]
            ]), o.secondCorrect ? (Object(c["openBlock"])(), Object(c["createElementBlock"])("div", sd, " Nyt näyttää oikealta! ")) : (Object(c["openBlock"])(), Object(c["createElementBlock"])("div", ld, " Ömm... Nyt ei näytä hyvältä. 🤮 "))], 2), Object(c["createElementVNode"])("button", {
                class: "btn btn-success",
                onClick: t[8] || (t[8] = function(e) {
                    return o.saveQr()
                })
            }, "Tallenna"), dd, ud])])) : (Object(c["openBlock"])(), Object(c["createElementBlock"])("p", Tl, [Sl, Object(c["createElementVNode"])("button", {
                class: "btn btn-warning text-dark mt-3",
                onClick: t[0] || (t[0] = function(t) {
                    return e.balls = !0
                }),
                style: {
                    width: "14rem"
                }
            }, " Minulla on rautaiset pallit "), Dl, Il, _l, Object(c["withDirectives"])(Object(c["createElementVNode"])("button", Al, Ll, 512), [
                [l, "#qrs"]
            ])]))])
        }
        n("25f0");
        var md = n("86b0"),
            pd = n("82fd"),
            fd = {
                name: "Qr",
                data: function() {
                    return {
                        balls: !1,
                        loading: !1,
                        stream: !1,
                        roll: !1,
                        error: !1,
                        found: !1,
                        string: "",
                        camera: "auto",
                        noRearCamera: !1,
                        noFrontCamera: !1,
                        first: "",
                        second: ""
                    }
                },
                methods: Object(wt["a"])(Object(wt["a"])({}, Object(H["d"])(["addQr"])), {}, {
                    onDecode: function(e) {
                        108 === e.length && window.atob(e) ? (this.found = !0, this.error = !1, this.string = e, this.roll = !1, this.stream = !1) : this.error = !0
                    },
                    onInit: function(e) {
                        var t = this;
                        return Object(ve["a"])(regeneratorRuntime.mark((function n() {
                            var c, a, r;
                            return regeneratorRuntime.wrap((function(n) {
                                while (1) switch (n.prev = n.next) {
                                    case 0:
                                        return t.loading = !0, n.prev = 1, n.next = 4, e;
                                    case 4:
                                        n.next = 13;
                                        break;
                                    case 6:
                                        n.prev = 6, n.t0 = n["catch"](1), c = "front" === t.camera, a = "rear" === t.camera, r = "OverconstrainedError" === n.t0.name, a && r && (t.noRearCamera = !0, t.camera = "auto"), c && r && (t.noFrontCamera = !0, t.camera = "auto");
                                    case 13:
                                        return n.prev = 13, t.loading = !1, n.finish(13);
                                    case 16:
                                    case "end":
                                        return n.stop()
                                }
                            }), n, null, [
                                [1, 6, 13, 16]
                            ])
                        })))()
                    },
                    switchCamera: function(e) {
                        this.camera = e
                    },
                    saveQr: function() {
                        if (this.firstCorrect && this.secondCorrect && this.found) {
                            var e = {
                                id: pd.generate(),
                                added: (new Date).toISOString(),
                                qr: this.string,
                                first: this.first,
                                second: this.second
                            };
                            this.addQr(e), this.string = "", this.first = "", this.second = "", this.found = !1, this.balls = !1
                        }
                    }
                }),
                computed: {
                    firstCorrect: function() {
                        return this.first.toString().match("^[0-9]{3,}$")
                    },
                    secondCorrect: function() {
                        return this.second.toString().match("^[0-9]{3,}$")
                    }
                },
                components: {
                    QrStream: md["QrStream"],
                    QrCapture: md["QrCapture"]
                }
            };
        n("c9d7");
        const jd = i()(fd, [
            ["render", bd]
        ]);
        var vd = jd,
            Od = {
                class: "card bg-dark border-secondary mb-2",
                style: {
                    width: "100%"
                }
            },
            hd = {
                class: "card-body"
            },
            kd = {
                class: "text-center"
            },
            gd = {
                class: "list-group mt-4"
            },
            Ed = {
                class: "list-group-item d-flex justify-content-between align-items-center"
            },
            yd = Object(c["createElementVNode"])("span", {
                class: "font-weight-bold"
            }, "Käytetty:", -1),
            Nd = {
                key: 0,
                class: "text-danger"
            },
            Vd = {
                key: 1,
                class: "text-success"
            },
            wd = {
                class: "list-group-item d-flex justify-content-between align-items-center"
            },
            xd = Object(c["createElementVNode"])("span", {
                class: "font-weight-bold"
            }, "Lisätty:", -1),
            Bd = {
                class: "text-info"
            },
            Cd = {
                class: "list-group-item d-flex justify-content-between align-items-center"
            },
            Td = Object(c["createElementVNode"])("span", {
                class: "font-weight-bold"
            }, "Vasen luku:", -1),
            Sd = {
                class: "text-info"
            },
            Dd = {
                class: "list-group-item d-flex justify-content-between align-items-center"
            },
            Id = Object(c["createElementVNode"])("span", {
                class: "font-weight-bold"
            }, "Oikea luku:", -1),
            _d = {
                class: "text-info"
            },
            Ad = {
                class: "list-group-item d-flex justify-content-between align-items-center"
            },
            Md = Object(c["createElementVNode"])("span", {
                class: "font-weight-bold"
            }, "QR-koodin arvo:", -1),
            Ld = {
                class: "text-info"
            },
            qd = {
                class: "text-center"
            };

        function zd(e, t, n, a, r, o) {
            var i = Object(c["resolveComponent"])("QrcodeVue");
            return Object(c["openBlock"])(), Object(c["createElementBlock"])("div", Od, [Object(c["createElementVNode"])("div", hd, [Object(c["createElementVNode"])("div", kd, [Object(c["createVNode"])(i, {
                value: n.preferences.qr,
                size: 200,
                level: "H",
                background: "transparent",
                foreground: "#3498db"
            }, null, 8, ["value"])]), Object(c["createElementVNode"])("ul", gd, [Object(c["createElementVNode"])("li", Ed, [yd, o.isUsed() ? (Object(c["openBlock"])(), Object(c["createElementBlock"])("span", Nd, "Kyllä tämä on käytetty")) : (Object(c["openBlock"])(), Object(c["createElementBlock"])("span", Vd, "Ei oo käytetty vielä"))]), Object(c["createElementVNode"])("li", wd, [xd, Object(c["createElementVNode"])("span", Bd, Object(c["toDisplayString"])(o.formatDate(n.preferences.added)), 1)]), Object(c["createElementVNode"])("li", Cd, [Td, Object(c["createElementVNode"])("span", Sd, Object(c["toDisplayString"])(n.preferences.first), 1)]), Object(c["createElementVNode"])("li", Dd, [Id, Object(c["createElementVNode"])("span", _d, Object(c["toDisplayString"])(n.preferences.second), 1)]), Object(c["createElementVNode"])("li", Ad, [Md, Object(c["createElementVNode"])("span", Ld, Object(c["toDisplayString"])(o.cut(n.preferences.qr)), 1)])]), Object(c["createElementVNode"])("div", qd, [Object(c["createElementVNode"])("button", {
                class: "btn btn-danger mt-3",
                onClick: t[0] || (t[0] = function(e) {
                    return o.remove()
                })
            }, "Poista")])])])
        }
        var Yd = {
            name: "QrCard",
            methods: Object(wt["a"])(Object(wt["a"])({}, Object(H["d"])(["deleteQr"])), {}, {
                formatDate: function(e) {
                    return Object(at["format"])(new Date(e), "D.M.YYYY H:m")
                },
                cut: function(e) {
                    return e.substring(0, 15) + "..."
                },
                remove: function() {
                    this.deleteQr(this.preferences.id)
                },
                isUsed: function() {
                    return this.$store.getters.qrUsed(this.preferences.id)
                }
            }),
            props: ["preferences"],
            components: {
                QrcodeVue: we.a
            }
        };
        const Hd = i()(Yd, [
            ["render", zd]
        ]);
        var Qd = Hd,
            Pd = n("82fd"),
            Fd = {
                name: "Settings",
                data: function() {
                    return {
                        showColorInfo: !1,
                        showSecret: !1,
                        showSlider: !1,
                        sliderValue: 1,
                        days: void 0,
                        ticketType: "",
                        portrait: !1
                    }
                },
                mounted: function() {
                    window.addEventListener("orientationchange", this.checkOrientation), this.checkOrientation()
                },
                methods: Object(wt["a"])(Object(wt["a"])({}, Object(H["d"])(["addTicket", "setDefaultAge", "setDefaultArea", "noWelcome", "updateBlackoutMode", "updateSvgOn"])), {}, {
                    resetApp: function() {
                        window.localStorage.clear(), window.caches.keys().then((function(e) {
                            var t, n = Object(d["a"])(e);
                            try {
                                for (n.s(); !(t = n.n()).done;) {
                                    var c = t.value;
                                    window.caches.delete(c)
                                }
                            } catch (a) {
                                n.e(a)
                            } finally {
                                n.f()
                            }
                        })), window.location.reload()
                    },
                    checkOrientation: function() {
                        var e, t, n, c;
                        this.portrait = 0 === (null === (e = window) || void 0 === e || null === (t = e.screen) || void 0 === t || null === (n = t.orientation) || void 0 === n ? void 0 : n.angle) || 0 === (null === (c = window) || void 0 === c ? void 0 : c.orientation)
                    },
                    goBack: function() {
                        this.$router.push({
                            name: "Display"
                        })
                    },
                    goChat: function() {
                        this.$router.push({
                            name: "Chat"
                        })
                    },
                    ticketExpiry: function() {
                        var e, t = parseInt(this.sliderValue);
                        return 1 === t ? (this.ticketType = "single", "80 minuutiksi") : (t <= 13 ? (this.ticketType = "week", e = t) : 14 === t ? (this.ticketType = "period", e = t) : (this.ticketType = "period", e = 24 === t ? 360 : 30 + 30 * (t - 15)), this.days = e, "".concat(e, " vuorokaudeksi"))
                    },
                    buyTicket: function() {
                        var e, t = Pd.generate(),
                            n = this.ticketType;
                        e = "single" === n ? Object(at["addMinutes"])(new Date, 80).toISOString() : Object(at["addDays"])(new Date, this.days).toISOString();
                        var c = this.defaultAge,
                            a = this.defaultArea,
                            r = Object(at["format"])(new Date, "HHmmss"),
                            o = "random";
                        this.addTicket({
                            id: t,
                            expiry: e,
                            age: c,
                            type: n,
                            area: a,
                            qr: o,
                            leftDigits: r
                        }), this.sliderValue = 1, this.showSlider = !1
                    },
                    check: function(e) {
                        this.$refs["checkbox" + e].click()
                    },
                    closeVideo: function() {
                        this.iphoneVideo = !1, this.androidVideo = !1
                    }
                }),
                computed: Object(wt["a"])(Object(wt["a"])({}, Object(H["e"])({
                    tickets: "tickets",
                    qrs: "qrs",
                    defaultPreferences: "default",
                    showWelcome: "showWelcome"
                })), {}, {
                    homescreen: function() {
                        var e;
                        return !0 === (null === (e = window.navigator) || void 0 === e ? void 0 : e.standalone)
                    },
                    blackoutMode: {
                        get: function() {
                            return this.$store.state.blackoutMode
                        },
                        set: function(e) {
                            this.updateBlackoutMode(e)
                        }
                    },
                    svgOn: {
                        get: function() {
                            return this.$store.state.svgOn
                        },
                        set: function(e) {
                            this.updateSvgOn(e)
                        }
                    },
                    defaultAge: {
                        get: function() {
                            return this.defaultPreferences.age
                        },
                        set: function(e) {
                            this.setDefaultAge(e)
                        }
                    },
                    defaultArea: {
                        get: function() {
                            return this.defaultPreferences.area
                        },
                        set: function(e) {
                            this.setDefaultArea(e)
                        }
                    },
                    halfHeight: function() {
                        return -1 * Math.round(window.outerHeight / 4)
                    }
                }),
                watch: {
                    cached: function(e) {
                        !0 === e && (this.list[2].completed = this.list[1].completed)
                    }
                },
                components: {
                    Card: Pi,
                    Pref: Cs,
                    ColorInfo: Cl,
                    Qr: vd,
                    QrCard: Qd
                }
            };
        n("0393");
        const Ud = i()(Fd, [
            ["render", Ai],
            ["__scopeId", "data-v-57d96b1a"]
        ]);
        var Rd = Ud,
            $d = gc,
            Kd = [{
                path: "/",
                redirect: "/hsl"
            }, {
                path: "/hsl",
                name: "Hsl",
                component: $,
                children: [{
                    path: "",
                    redirect: "/hsl/ticket"
                }, {
                    path: "ticket",
                    component: fe,
                    children: [{
                        path: "",
                        redirect: "/hsl/ticket/display"
                    }, {
                        path: "display",
                        name: "Display",
                        component: On
                    }, {
                        path: "buy",
                        name: "Buy",
                        component: Wn
                    }]
                }, {
                    path: "home",
                    component: ec,
                    children: [{
                        path: "",
                        redirect: "/hsl/home/you"
                    }, {
                        path: "you",
                        name: "You",
                        component: $d
                    }, {
                        path: "news",
                        name: "News",
                        component: gc
                    }, {
                        path: "traffic",
                        name: "Traffic",
                        component: Uc
                    }]
                }, {
                    path: "guide",
                    component: Na
                }, {
                    path: "more",
                    component: Wa
                }, {
                    path: "history",
                    component: _r
                }]
            }, {
                name: "Hidden",
                path: "/hidden",
                component: function() {
                    return n.e("Hidden").then(n.bind(null, "8054"))
                },
                children: [{
                    path: "",
                    redirect: "/hidden/settings"
                }, {
                    path: "settings",
                    name: "Settings",
                    component: Rd
                }, {
                    path: "chat",
                    name: "Chat",
                    component: function() {
                        return n.e("Chat").then(n.bind(null, "6924"))
                    }
                }, {
                    path: "tutorial",
                    name: "Tutorial",
                    component: function() {
                        return n.e("Tutorial").then(n.bind(null, "576f"))
                    }
                }]
            }, {
                path: "/:catchAll(.*)",
                redirect: "/"
            }],
            Wd = Object(b["a"])({
                history: Object(b["b"])("/"),
                routes: Kd
            });
        Wd.beforeEach((function(e) {
            var t, n;
            "Hsl" !== (null === e || void 0 === e || null === (t = e.matched[0]) || void 0 === t ? void 0 : t.name) && document.querySelector("html").classList.remove("blackout"), "Chat" !== (null === e || void 0 === e || null === (n = e.matched[1]) || void 0 === n ? void 0 : n.name) ? document.body.style.overflowY = "" : document.body.style.overflowY = "hidden"
        })), Wd.afterEach((function(e, t) {
            var n, c;
            "Hsl" === (null === e || void 0 === e || null === (n = e.matched[0]) || void 0 === n ? void 0 : n.name) && "Hidden" === (null === t || void 0 === t || null === (c = t.matched[0]) || void 0 === c ? void 0 : c.name) && window.location.reload()
        }));
        var Jd = Wd,
            Gd = (n("7db0"), n("c740"), n("a434"), n("bc3a")),
            Zd = n.n(Gd),
            Xd = n("bfa9"),
            eu = new Xd["a"]({
                storage: window.localStorage,
                reducer: function(e) {
                    return {
                        tickets: e.tickets,
                        color: e.color,
                        fetchDate: e.fetchDate,
                        fetchError: e.fetchError,
                        fetchErrorCause: e.fetchErrorCause,
                        default: e.default,
                        showWelcome: e.showWelcome,
                        qrs: e.qrs,
                        blackoutMode: e.blackoutMode,
                        svgOn: e.svgOn
                    }
                }
            }),
            tu = "https://hsl-serverless.vuoh.workers.dev",
            nu = "https://content.app.hsl.fi/graphql",
            cu = Object(H["a"])({
                state: {
                    showWelcome: !0,
                    blackoutMode: !1,
                    svgOn: !0,
                    news: [],
                    traffic: [],
                    modalOpen: !1,
                    modalArea: "AB",
                    fetchError: !0,
                    fetchErrorCause: "",
                    fetchDate: "",
                    color: {
                        value: "black",
                        expiry: ""
                    },
                    default: {
                        age: "adult",
                        area: "AB"
                    },
                    tickets: [],
                    qrs: []
                },
                getters: {
                    color: function(e) {
                        return e.color.value
                    },
                    svgOn: function(e) {
                        return e.svgOn
                    },
                    qrById: function(e) {
                        return function(t) {
                            return e.qrs.find((function(e) {
                                return e.id === t
                            }))
                        }
                    },
                    qrUsed: function(e) {
                        return function(t) {
                            return e.tickets.findIndex((function(e) {
                                return e.qr === t
                            })) > -1
                        }
                    },
                    qrExists: function(e) {
                        return function(t) {
                            return e.qrs.findIndex((function(e) {
                                return e.id === t
                            })) > -1
                        }
                    }
                },
                mutations: {
                    openModal: function(e, t) {
                        e.modalOpen = !0, e.modalArea = t
                    },
                    closeModal: function(e) {
                        return e.modalOpen = !1
                    },
                    updateColor: function(e, t) {
                        var n = t.data;
                        e.color = {
                            value: n.color,
                            expiry: n.utcExpiry
                        }
                    },
                    expireTicket: function(e, t) {
                        e.tickets.find((function(e) {
                            return e.id === t
                        })).expired = !0
                    },
                    addTicket: function(e, t) {
                        e.tickets.push(Object(wt["a"])(Object(wt["a"])({}, t), {}, {
                            expired: !1
                        }))
                    },
                    deleteTicket: function(e, t) {
                        var n = e.tickets.findIndex((function(e) {
                            return e.id === t
                        }));
                        e.tickets.splice(n, 1)
                    },
                    setAge: function(e, t) {
                        e.tickets.find((function(e) {
                            return e.id === t.id
                        })).age = t.age
                    },
                    setArea: function(e, t) {
                        e.tickets.find((function(e) {
                            return e.id === t.id
                        })).area = t.area
                    },
                    setType: function(e, t) {
                        e.tickets.find((function(e) {
                            return e.id === t.id
                        })).type = t.type
                    },
                    setDefaultArea: function(e, t) {
                        e.default.area = t
                    },
                    setDefaultAge: function(e, t) {
                        e.default.age = t
                    },
                    noWelcome: function(e) {
                        e.showWelcome = !1
                    },
                    addQr: function(e, t) {
                        e.qrs.push(t)
                    },
                    deleteQr: function(e, t) {
                        var n = e.qrs.findIndex((function(e) {
                            return e.id === t
                        }));
                        e.qrs.splice(n, 1)
                    },
                    setQr: function(e, t) {
                        var n = t.qrId,
                            c = t.ticketId;
                        e.tickets.find((function(e) {
                            return e.id === c
                        })).qr = n
                    },
                    updateBlackoutMode: function(e, t) {
                        e.blackoutMode = t
                    },
                    updateSvgOn: function(e, t) {
                        e.svgOn = t
                    },
                    updateNews: function(e, t) {
                        e.news = t
                    },
                    updateTraffic: function(e, t) {
                        e.traffic = t
                    }
                },
                actions: {
                    fetchColor: function(e) {
                        return Object(ve["a"])(regeneratorRuntime.mark((function t() {
                            var n, c, a, r;
                            return regeneratorRuntime.wrap((function(t) {
                                while (1) switch (t.prev = t.next) {
                                    case 0:
                                        return n = e.state, c = e.commit, t.prev = 1, t.next = 4, Zd.a.get(tu, {
                                            timeout: 1e4,
                                            headers: {
                                                santa: "maria"
                                            }
                                        });
                                    case 4:
                                        a = t.sent, n.fetchError = !1, n.fetchErrorCause = "", c("updateColor", a), t.next = 28;
                                        break;
                                    case 10:
                                        if (t.prev = 10, t.t0 = t["catch"](1), n.fetchError = !0, t.t0.response) {
                                            t.next = 17;
                                            break
                                        }
                                        n.fetchErrorCause = "Verkko-ongelma", t.next = 28;
                                        break;
                                    case 17:
                                        r = t.t0.response.status, t.t1 = r, t.next = 404 === t.t1 ? 21 : 429 === t.t1 ? 23 : 500 === t.t1 ? 25 : 27;
                                        break;
                                    case 21:
                                        return n.fetchErrorCause = "Serveri ei löytynyt", t.abrupt("break", 28);
                                    case 23:
                                        return n.fetchErrorCause = "Liikaa pyyntöjä", t.abrupt("break", 28);
                                    case 25:
                                        return n.fetchErrorCause = "Serveri ei löytänyt värejä", t.abrupt("break", 28);
                                    case 27:
                                        n.fetchErrorCause = "Tuntematon";
                                    case 28:
                                        return t.prev = 28, n.fetchDate = (new Date).toISOString(), t.finish(28);
                                    case 31:
                                    case "end":
                                        return t.stop()
                                }
                            }), t, null, [
                                [1, 10, 28, 31]
                            ])
                        })))()
                    },
                    fetchNews: function(e) {
                        return Object(ve["a"])(regeneratorRuntime.mark((function t() {
                            var n, c;
                            return regeneratorRuntime.wrap((function(t) {
                                while (1) switch (t.prev = t.next) {
                                    case 0:
                                        return n = e.commit, t.next = 3, Zd()({
                                            url: nu,
                                            method: "post",
                                            data: {
                                                query: '\n          query NewsAllQuery {\n            newsFeedContent(limit: 20, page: null, lang: "fi") {\n              id\n              created\n              label\n              ... on NewsArticle {\n                body\n                url\n                images {\n                  url\n                }\n                priority {\n                  label\n                }\n              }\n            }\n          }\n          '
                                            }
                                        });
                                    case 3:
                                        c = t.sent, n("updateNews", c.data.data.newsFeedContent);
                                    case 5:
                                    case "end":
                                        return t.stop()
                                }
                            }), t)
                        })))()
                    },
                    fetchTraffic: function(e) {
                        return Object(ve["a"])(regeneratorRuntime.mark((function t() {
                            var n, c;
                            return regeneratorRuntime.wrap((function(t) {
                                while (1) switch (t.prev = t.next) {
                                    case 0:
                                        return n = e.commit, t.next = 3, Zd()({
                                            url: nu,
                                            method: "post",
                                            data: {
                                                query: '\n          query trafficBulletinsQuery {\n            trafficBulletins(lang: "fi", page: null, limit: 60) {\n              id\n              label\n              created\n              changed\n              priority {\n                label\n              }\n              validDateFrom\n              validDateTo\n              lines {\n                gtfsId\n                label\n                id\n              }\n            }\n          }          \n          '
                                            }
                                        });
                                    case 3:
                                        c = t.sent, n("updateTraffic", c.data.data.trafficBulletins);
                                    case 5:
                                    case "end":
                                        return t.stop()
                                }
                            }), t)
                        })))()
                    }
                },
                modules: {},
                plugins: [eu.plugin]
            }),
            au = (n("3e48"), n("f13c"));
        Object(c["createApp"])(l).use(cu).use(Jd).directive("scroll-to", au).mount("#app")
    },
    5912: function(e, t, n) {
        e.exports = n.p + "img/home-a.1955f69d.svg"
    },
    "5a9e": function(e, t, n) {
        e.exports = n.p + "img/guide-clock.98c2b2d4.svg"
    },
    "5ca3": function(e, t, n) {
        e.exports = n.p + "img/single.aec405d2.svg"
    },
    "613b": function(e, t, n) {
        var c = {
            "./bike.svg": "68b3",
            "./caret.svg": "c9cd",
            "./customer.svg": "65dd",
            "./feedback.svg": "c150",
            "./settings.svg": "fb53",
            "./web.svg": "f569"
        };

        function a(e) {
            var t = r(e);
            return n(t)
        }

        function r(e) {
            if (!n.o(c, e)) {
                var t = new Error("Cannot find module '" + e + "'");
                throw t.code = "MODULE_NOT_FOUND", t
            }
            return c[e]
        }
        a.keys = function() {
            return Object.keys(c)
        }, a.resolve = r, e.exports = a, a.id = "613b"
    },
    6186: function(e, t, n) {
        e.exports = n.p + "img/warning.8a2721c5.svg"
    },
    "61bb": function(e, t, n) {
        e.exports = n.p + "img/guide-work.6d967ad3.svg"
    },
    "62ef": function(e, t, n) {},
    "640a": function(e, t, n) {
        e.exports = n.p + "img/bus.b7d62292.svg"
    },
    "65dd": function(e, t, n) {
        e.exports = n.p + "img/customer.a8441b4c.svg"
    },
    "67ec": function(e, t, n) {},
    "68b3": function(e, t, n) {
        e.exports = n.p + "img/bike.fb1461cd.svg"
    },
    "6ab5": function(e, t, n) {
        e.exports = n.p + "img/ticket.f271b492.svg"
    },
    "6cb3": function(e, t, n) {
        "use strict";
        n("ae32")
    },
    "6cda": function(e, t, n) {},
    "6f31": function(e, t, n) {
        e.exports = n.p + "img/child.04f54af5.svg"
    },
    "6f32": function(e, t, n) {
        var c = {
            "./active.svg": "b3e7",
            "./arrow-back.svg": "b8a8",
            "./bike.svg": "9a29",
            "./caret.svg": "1f4a",
            "./child.svg": "6f31",
            "./current.svg": "b753",
            "./dest.svg": "bc75",
            "./guide-caret.svg": "917c",
            "./guide-clock.svg": "5a9e",
            "./guide-home.svg": "8154",
            "./guide-other.svg": "b88d",
            "./guide-search.svg": "f3df",
            "./guide-star.svg": "cc24",
            "./guide-work.svg": "61bb",
            "./hamburger-a.svg": "e365",
            "./hamburger.svg": "f5d5",
            "./history-caret.svg": "ee63",
            "./history-check.svg": "fd9b",
            "./history-checked.svg": "194e",
            "./history-seperate.svg": "c0a2",
            "./home-a.svg": "5912",
            "./home.svg": "ac9d",
            "./inactive.svg": "a850",
            "./info.svg": "76ed",
            "./link.svg": "40a1",
            "./loading.svg": "1e31",
            "./map-a.svg": "30ab",
            "./map.svg": "0443",
            "./more/bike.svg": "68b3",
            "./more/caret.svg": "c9cd",
            "./more/customer.svg": "65dd",
            "./more/feedback.svg": "c150",
            "./more/settings.svg": "fb53",
            "./more/web.svg": "f569",
            "./period-34.svg": "dfbb",
            "./period.svg": "87f5",
            "./phone.svg": "c3bb",
            "./single-34.svg": "8cf1",
            "./single.svg": "5ca3",
            "./success.svg": "1c27",
            "./ticket-a.svg": "9758",
            "./ticket.svg": "6ab5",
            "./traffic/header/bike.svg": "eda7",
            "./traffic/header/boat.svg": "7614",
            "./traffic/header/bus.svg": "3fbb",
            "./traffic/header/metro.svg": "1edf",
            "./traffic/header/train.svg": "8367",
            "./traffic/header/tram.svg": "e6b4",
            "./traffic/info.svg": "d635",
            "./traffic/list/bike.svg": "743c",
            "./traffic/list/boat.svg": "2027",
            "./traffic/list/bus.svg": "640a",
            "./traffic/list/hsl.svg": "8a99",
            "./traffic/list/metro.svg": "1d3a",
            "./traffic/list/train.svg": "e423",
            "./traffic/list/tram.svg": "8e41",
            "./traffic/warning.svg": "6186",
            "./warning.svg": "daa9",
            "./week-34.svg": "c401",
            "./week.svg": "e5ae"
        };

        function a(e) {
            var t = r(e);
            return n(t)
        }

        function r(e) {
            if (!n.o(c, e)) {
                var t = new Error("Cannot find module '" + e + "'");
                throw t.code = "MODULE_NOT_FOUND", t
            }
            return c[e]
        }
        a.keys = function() {
            return Object.keys(c)
        }, a.resolve = r, e.exports = a, a.id = "6f32"
    },
    "739b": function(e, t, n) {
        e.exports = n.p + "img/ABC.b2a89697.png"
    },
    "743c": function(e, t, n) {
        e.exports = n.p + "img/bike.c1127627.svg"
    },
    7614: function(e, t, n) {
        e.exports = n.p + "img/boat.27c01bd6.svg"
    },
    "76ed": function(e, t, n) {
        e.exports = n.p + "img/info.8f7603bc.svg"
    },
    "780f": function(e, t, n) {
        "use strict";
        n("925b")
    },
    7904: function(e, t, n) {},
    8154: function(e, t, n) {
        e.exports = n.p + "img/guide-home.2665ddf5.svg"
    },
    8232: function(e, t, n) {
        "use strict";
        n("6cda")
    },
    8367: function(e, t, n) {
        e.exports = n.p + "img/train.727c114d.svg"
    },
    "86ee": function(e, t, n) {},
    "87f5": function(e, t, n) {
        e.exports = n.p + "img/period.427939cd.svg"
    },
    "885e": function(e, t, n) {
        "use strict";
        n("e8a3")
    },
    "8a99": function(e, t, n) {
        e.exports = n.p + "img/hsl.76979f3a.svg"
    },
    "8ac7": function(e, t, n) {
        e.exports = n.p + "img/ticket-bg.ba5a61f8.svg"
    },
    "8cf1": function(e, t, n) {
        e.exports = n.p + "img/single-34.25b9813a.svg"
    },
    "8e41": function(e, t, n) {
        e.exports = n.p + "img/tram.64c45774.svg"
    },
    "8fc3": function(e, t, n) {
        "use strict";
        n("97f2")
    },
    "909a": function(e, t, n) {},
    "917c": function(e, t, n) {
        e.exports = n.p + "img/guide-caret.04991a16.svg"
    },
    "925b": function(e, t, n) {},
    9360: function(e, t, n) {
        "use strict";
        n("b57f")
    },
    9394: function(e, t, n) {
        "use strict";
        n("1fac")
    },
    9758: function(e, t, n) {
        e.exports = n.p + "img/ticket-a.5a3a6ce7.svg"
    },
    "97f2": function(e, t, n) {},
    "9a29": function(e, t, n) {
        e.exports = n.p + "img/bike.fc57915a.svg"
    },
    "9bec": function(e, t, n) {
        "use strict";
        n("909a")
    },
    "9d44": function(e, t, n) {
        "use strict";
        n("c58a")
    },
    "9dbe": function(e, t, n) {
        "use strict";
        n("14fb")
    },
    "9dea": function(e, t, n) {
        "use strict";
        n("67ec")
    },
    a725: function(e, t, n) {
        "use strict";
        n("3f88")
    },
    a850: function(e, t, n) {
        e.exports = n.p + "img/inactive.c26a9e28.svg"
    },
    aac3: function(e, t, n) {},
    ab04: function(e, t, n) {
        "use strict";
        n("2f35")
    },
    ac9d: function(e, t, n) {
        e.exports = n.p + "img/home.6a3ad72b.svg"
    },
    ae32: function(e, t, n) {},
    afb2: function(e, t, n) {
        "use strict";
        n("310f")
    },
    b151: function(e, t, n) {},
    b2f8: function(e, t, n) {
        var c = {
            "./bike.svg": "743c",
            "./boat.svg": "2027",
            "./bus.svg": "640a",
            "./hsl.svg": "8a99",
            "./metro.svg": "1d3a",
            "./train.svg": "e423",
            "./tram.svg": "8e41"
        };

        function a(e) {
            var t = r(e);
            return n(t)
        }

        function r(e) {
            if (!n.o(c, e)) {
                var t = new Error("Cannot find module '" + e + "'");
                throw t.code = "MODULE_NOT_FOUND", t
            }
            return c[e]
        }
        a.keys = function() {
            return Object.keys(c)
        }, a.resolve = r, e.exports = a, a.id = "b2f8"
    },
    b3e7: function(e, t, n) {
        e.exports = n.p + "img/active.b5ddbf60.svg"
    },
    b4ef: function(e, t, n) {
        "use strict";
        n("3c97")
    },
    b57f: function(e, t, n) {},
    b753: function(e, t, n) {
        e.exports = n.p + "img/current.16197852.svg"
    },
    b88d: function(e, t, n) {
        e.exports = n.p + "img/guide-other.e36a38af.svg"
    },
    b8a8: function(e, t, n) {
        e.exports = n.p + "img/arrow-back.ea65241c.svg"
    },
    b9b9: function(e, t, n) {
        "use strict";
        n("e660")
    },
    bc75: function(e, t, n) {
        e.exports = n.p + "img/dest.bf9f3623.svg"
    },
    c0a2: function(e, t, n) {
        e.exports = n.p + "img/history-seperate.8c08a21b.svg"
    },
    c150: function(e, t, n) {
        e.exports = n.p + "img/feedback.7554b5ef.svg"
    },
    c151: function(e, t, n) {},
    c391: function(e, t, n) {
        "use strict";
        n("49a0")
    },
    c3bb: function(e, t, n) {
        e.exports = n.p + "img/phone.61827407.svg"
    },
    c401: function(e, t, n) {
        e.exports = n.p + "img/week-34.9f12d381.svg"
    },
    c58a: function(e, t, n) {},
    c5eb: function(e, t, n) {
        "use strict";
        n("62ef")
    },
    c866: function(e, t, n) {
        "use strict";
        n("c151")
    },
    c9cd: function(e, t, n) {
        e.exports = n.p + "img/caret.148a54ed.svg"
    },
    c9d7: function(e, t, n) {
        "use strict";
        n("f858")
    },
    cc24: function(e, t, n) {
        e.exports = n.p + "img/guide-star.bce91bfd.svg"
    },
    ce38: function(e, t, n) {
        var c = {
            "./bike.svg": "eda7",
            "./boat.svg": "7614",
            "./bus.svg": "3fbb",
            "./metro.svg": "1edf",
            "./train.svg": "8367",
            "./tram.svg": "e6b4"
        };

        function a(e) {
            var t = r(e);
            return n(t)
        }

        function r(e) {
            if (!n.o(c, e)) {
                var t = new Error("Cannot find module '" + e + "'");
                throw t.code = "MODULE_NOT_FOUND", t
            }
            return c[e]
        }
        a.keys = function() {
            return Object.keys(c)
        }, a.resolve = r, e.exports = a, a.id = "ce38"
    },
    d326: function(e, t, n) {},
    d635: function(e, t, n) {
        e.exports = n.p + "img/info.5fd83f8a.svg"
    },
    d776: function(e, t, n) {
        e.exports = n.p + "img/BC.dd1d7395.png"
    },
    daa9: function(e, t, n) {
        e.exports = n.p + "img/warning.91f8a5c0.svg"
    },
    db0c: function(e, t, n) {
        "use strict";
        n("86ee")
    },
    dbe9: function(e, t, n) {
        "use strict";
        n("aac3")
    },
    dc20: function(e, t, n) {},
    dfbb: function(e, t, n) {
        e.exports = n.p + "img/period-34.b102e214.svg"
    },
    e365: function(e, t, n) {
        e.exports = n.p + "img/hamburger-a.0703ff64.svg"
    },
    e3ef: function(e, t, n) {},
    e423: function(e, t, n) {
        e.exports = n.p + "img/train.b39b913b.svg"
    },
    e5ae: function(e, t, n) {
        e.exports = n.p + "img/week.d3d864a2.svg"
    },
    e660: function(e, t, n) {},
    e6b4: function(e, t, n) {
        e.exports = n.p + "img/tram.888ba200.svg"
    },
    e8a3: function(e, t, n) {},
    ec77: function(e, t, n) {
        "use strict";
        n("128f")
    },
    ed01: function(e, t, n) {},
    eda7: function(e, t, n) {
        e.exports = n.p + "img/bike.dcf3afb7.svg"
    },
    ee63: function(e, t, n) {
        e.exports = n.p + "img/history-caret.c0e0422a.svg"
    },
    f3df: function(e, t, n) {
        e.exports = n.p + "img/guide-search.741b005c.svg"
    },
    f569: function(e, t, n) {
        e.exports = n.p + "img/web.eb17773a.svg"
    },
    f5d5: function(e, t, n) {
        e.exports = n.p + "img/hamburger.57587e13.svg"
    },
    f799: function(e, t, n) {
        var c = {
            "./AB.png": "f7bf",
            "./ABC.png": "739b",
            "./ABCD.png": "fb03",
            "./BC.png": "d776",
            "./BCD.png": "2300",
            "./CD.png": "494f",
            "./D.png": "522e"
        };

        function a(e) {
            var t = r(e);
            return n(t)
        }

        function r(e) {
            if (!n.o(c, e)) {
                var t = new Error("Cannot find module '" + e + "'");
                throw t.code = "MODULE_NOT_FOUND", t
            }
            return c[e]
        }
        a.keys = function() {
            return Object.keys(c)
        }, a.resolve = r, e.exports = a, a.id = "f799"
    },
    f7bf: function(e, t, n) {
        e.exports = n.p + "img/AB.30dbf1bb.png"
    },
    f858: function(e, t, n) {},
    f968: function(e, t, n) {},
    fb03: function(e, t, n) {
        e.exports = n.p + "img/ABCD.9823e4b2.png"
    },
    fb53: function(e, t, n) {
        e.exports = n.p + "img/settings.1386ea42.svg"
    },
    fd9b: function(e, t, n) {
        e.exports = n.p + "img/history-check.aa52ed39.svg"
    }
});
//# sourceMappingURL=app.22d235de.js.map