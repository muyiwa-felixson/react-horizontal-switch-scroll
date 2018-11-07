! function (e) {
    var t = {};

    function n(r) {
        if (t[r]) return t[r].exports;
        var o = t[r] = {
            i: r,
            l: !1,
            exports: {}
        };
        return e[r].call(o.exports, o, o.exports, n), o.l = !0, o.exports
    }
    n.m = e, n.c = t, n.d = function (e, t, r) {
        n.o(e, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: r
        })
    }, n.r = function (e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }, n.t = function (e, t) {
        if (1 & t && (e = n(e)), 8 & t) return e;
        if (4 & t && "object" == typeof e && e && e.__esModule) return e;
        var r = Object.create(null);
        if (n.r(r), Object.defineProperty(r, "default", {
                enumerable: !0,
                value: e
            }), 2 & t && "string" != typeof e)
            for (var o in e) n.d(r, o, function (t) {
                return e[t]
            }.bind(null, o));
        return r
    }, n.n = function (e) {
        var t = e && e.__esModule ? function () {
            return e.default
        } : function () {
            return e
        };
        return n.d(t, "a", t), t
    }, n.o = function (e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, n.p = "", n(n.s = 0)
}([function (e, t, n) {
    e.exports = n(1)
}, function (e, t) {
    function n(e) {
        return (n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
            return typeof e
        } : function (e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        })(e)
    }

    function r(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function o(e) {
        return (o = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }

    function i(e, t) {
        return (i = Object.setPrototypeOf || function (e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }

    function c(e) {
        if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e
    }

    function u(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    function a() {
        var e = d(["\n      transform: translateX(0);\n    "]);
        return a = function () {
            return e
        }, e
    }

    function l() {
        var e = d(["\n      transform: translateX(-", "px);\n    "]);
        return l = function () {
            return e
        }, e
    }

    function s() {
        var e = d(["\n    display: grid;\n    position: relative;\n    grid-template-columns: repeat(", ", ", "px);\n    margin:0;\n    padding:0;\n    width: 9000px;\n    transition: all 0.3s ease-out;\n    transform: translate3d(0 0 0);\n    z-index: 10;\n    ", "\n    ", "\n    & .SwitchCarousel-element{\n        display: block;\n        width: ", "px;\n    }\n"]);
        return s = function () {
            return e
        }, e
    }

    function f() {
        var e = d(["\n  overflow: hidden;\n"]);
        return f = function () {
            return e
        }, e
    }

    function p() {
        var e = d(["\n  display: ", ";\n  grid-template-columns: ", ";\n  align-items: center;\n  overflow: hidden;\n\n  & .SwitchCarousel-directionIcon{\n    visibility: ", ";\n    text-align: center;\n    align-self: center;\n    cursor: pointer;\n    /* padding: 10px; */\n  }\n"]);
        return p = function () {
            return e
        }, e
    }

    function d(e, t) {
        return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, {
            raw: {
                value: Object.freeze(t)
            }
        }))
    }
    var h = "react".React,
        m = "react-resize-detector".ReactResizeDetector,
        w = "styled-components",
        y = "styled-components".css,
        b = w.div(p(), function (e) {
            return e.lean ? "block" : "grid"
        }, function (e) {
            return !e.lean && "40px auto 40px"
        }, function (e) {
            return e.pageWidth > e.width * e.length + 80 ? "hidden" : "visible"
        }),
        g = w.div(f()),
        v = w.div(s(), function (e) {
            return e.length
        }, function (e) {
            return e.width
        }, function (e) {
            return e.currentView && y(l(), function (e) {
                return e.currentView * e.width
            })
        }, function (e) {
            return e.pageWidth > e.width * e.length + 80 && y(a())
        }, function (e) {
            return e.width
        }),
        O = function (e) {
            function t(e) {
                var r;
                return function (e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, t), u(c(c(r = function (e, t) {
                    return !t || "object" !== n(t) && "function" != typeof t ? c(e) : t
                }(this, o(t).call(this, e)))), "onResize", function (e, t) {
                    console.log(e), r.setState({
                        elementWidth: e,
                        elementHeight: t
                    })
                }), u(c(c(r)), "switchView", function (e) {
                    var t, n = r.props.list.length,
                        o = r.props.leftButton ? Math.floor(r.state.elementWidth / r.props.width) : Math.floor((r.state.elementWidth - 80) / r.props.width);
                    console.log(r.state.elementWidth, r.props.width, r.state.elementWidth / r.props.width, o), t = e ? r.state.currentView > 0 && r.state.currentView - 1 : r.state.currentView < n - o && r.state.currentView + 1, r.setState({
                        currentView: t
                    })
                }), r.state = {
                    elementWidth: 0,
                    elementHeight: 0,
                    currentView: 0,
                    selected: 0
                }, r
            }
            return function (e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    }), t && i(e, t)
                }(t, h.Component),
                function (e, t, n) {
                    t && r(e.prototype, t), n && r(e, n)
                }(t, [{
                    key: "render",
                    value: function () {
                        var e = this;
                        return h.createElement("div", {
                            className: this.props.className
                        }, h.createElement(m, {
                            handleWidth: !0,
                            handleHeight: !0,
                            onResize: this.onResize,
                            render: function (t) {
                                var n = t.width;
                                return h.createElement(b, {
                                    pageWidth: n,
                                    width: e.props.width,
                                    length: e.props.list.length,
                                    lean: e.props.leftButton
                                }, h.createElement("div", {
                                    className: "SwitchCarousel-directionIcon",
                                    onClick: function () {
                                        return e.switchView(!0)
                                    }
                                }, e.props.leftButton ? e.props.leftButton : h.createElement("div", {
                                    className: "dayIcon"
                                }, h.createElement("i", {
                                    className: "icon-left-open"
                                }))), h.createElement(g, null, h.createElement(v, {
                                    pageWidth: n,
                                    width: e.props.width,
                                    length: e.props.list.length,
                                    currentView: e.state.currentView
                                }, function (e) {
                                    return e.map(function (e, t) {
                                        return h.createElement("div", {
                                            key: "SwitchCarousel-element-".concat(t),
                                            className: "SwitchCarousel-element"
                                        }, e)
                                    })
                                }(e.props.list))), h.createElement("div", {
                                    className: "SwitchCarousel-directionIcon",
                                    onClick: function () {
                                        return e.switchView()
                                    }
                                }, e.props.leftButton ? e.props.rightButton : h.createElement("div", {
                                    className: "dayIcon"
                                }, h.createElement("i", {
                                    className: "icon-right-open"
                                }))))
                            }
                        }))
                    }
                }]), t
        }();
    e.exports = {
        SwitchCarousel: O,
        dataList: dataList,
        Wrapper: b,
        ListWrapper: g,
        List: v
    }
}]);