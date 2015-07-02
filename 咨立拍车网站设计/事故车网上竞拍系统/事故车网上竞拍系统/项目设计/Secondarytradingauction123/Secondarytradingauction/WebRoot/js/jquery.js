/*!
 * jQuery JavaScript Library v1.5.2
 * http://jquery.com/
 *
 * Copyright 2011, John Resig
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * Includes Sizzle.js
 * http://sizzlejs.com/
 * Copyright 2011, The Dojo Foundation
 * Released under the MIT, BSD, and GPL Licenses.
 *
 * Date: Thu Mar 31 15:28:23 2011 -0400
 */
(function(a, b) {
    function ci(a) {
        return d.isWindow(a) ? a: a.nodeType === 9 ? a.defaultView || a.parentWindow: !1
    }
    function cf(a) {
        if (!b_[a]) {
            var b = d("<" + a + ">").appendTo("body"),
            c = b.css("display");
            b.remove();
            if (c === "none" || c === "") c = "block";
            b_[a] = c
        }
        return b_[a]
    }
    function ce(a, b) {
        var c = {};
        d.each(cd.concat.apply([], cd.slice(0, b)),
        function() {
            c[this] = a
        });
        return c
    }
    function b$() {
        try {
            return new a.ActiveXObject("Microsoft.XMLHTTP")
        } catch(b) {}
    }
    function bZ() {
        try {
            return new a.XMLHttpRequest
        } catch(b) {}
    }
    function bY() {
        d(a).unload(function() {
            for (var a in bW) bW[a](0, 1)
        })
    }
    function bS(a, c) {
        a.dataFilter && (c = a.dataFilter(c, a.dataType));
        var e = a.dataTypes,
        f = {},
        g, h, i = e.length,
        j, k = e[0],
        l,
        m,
        n,
        o,
        p;
        for (g = 1; g < i; g++) {
            if (g === 1) for (h in a.converters) typeof h === "string" && (f[h.toLowerCase()] = a.converters[h]);
            l = k,
            k = e[g];
            if (k === "*") k = l;
            else if (l !== "*" && l !== k) {
                m = l + " " + k,
                n = f[m] || f["* " + k];
                if (!n) {
                    p = b;
                    for (o in f) {
                        j = o.split(" ");
                        if (j[0] === l || j[0] === "*") {
                            p = f[j[1] + " " + k];
                            if (p) {
                                o = f[o],
                                o === !0 ? n = p: p === !0 && (n = o);
                                break
                            }
                        }
                    }
                } ! n && !p && d.error("No conversion from " + m.replace(" ", " to ")),
                n !== !0 && (c = n ? n(c) : p(o(c)))
            }
        }
        return c
    }
    function bR(a, c, d) {
        var e = a.contents,
        f = a.dataTypes,
        g = a.responseFields,
        h, i, j, k;
        for (i in g) i in d && (c[g[i]] = d[i]);
        while (f[0] === "*") f.shift(),
        h === b && (h = a.mimeType || c.getResponseHeader("content-type"));
        if (h) for (i in e) if (e[i] && e[i].test(h)) {
            f.unshift(i);
            break
        }
        if (f[0] in d) j = f[0];
        else {
            for (i in d) {
                if (!f[0] || a.converters[i + " " + f[0]]) {
                    j = i;
                    break
                }
                k || (k = i)
            }
            j = j || k
        }
        if (j) {
            j !== f[0] && f.unshift(j);
            return d[j]
        }
    }
    function bQ(a, b, c, e) {
        if (d.isArray(b) && b.length) d.each(b,
        function(b, f) {
            c || bs.test(a) ? e(a, f) : bQ(a + "[" + (typeof f === "object" || d.isArray(f) ? b: "") + "]", f, c, e)
        });
        else if (c || b == null || typeof b !== "object") e(a, b);
        else if (d.isArray(b) || d.isEmptyObject(b)) e(a, "");
        else for (var f in b) bQ(a + "[" + f + "]", b[f], c, e)
    }
    function bP(a, c, d, e, f, g) {
        f = f || c.dataTypes[0],
        g = g || {},
        g[f] = !0;
        var h = a[f],
        i = 0,
        j = h ? h.length: 0,
        k = a === bJ,
        l;
        for (; i < j && (k || !l); i++) l = h[i](c, d, e),
        typeof l === "string" && (!k || g[l] ? l = b: (c.dataTypes.unshift(l), l = bP(a, c, d, e, l, g))); (k || !l) && !g["*"] && (l = bP(a, c, d, e, "*", g));
        return l
    }
    function bO(a) {
        return function(b, c) {
            typeof b !== "string" && (c = b, b = "*");
            if (d.isFunction(c)) {
                var e = b.toLowerCase().split(bD),
                f = 0,
                g = e.length,
                h,
                i,
                j;
                for (; f < g; f++) h = e[f],
                j = /^\+/.test(h),
                j && (h = h.substr(1) || "*"),
                i = a[h] = a[h] || [],
                i[j ? "unshift": "push"](c)
            }
        }
    }
    function bq(a, b, c) {
        var e = b === "width" ? bk: bl,
        f = b === "width" ? a.offsetWidth: a.offsetHeight;
        if (c === "border") return f;
        d.each(e,
        function() {
            c || (f -= parseFloat(d.css(a, "padding" + this)) || 0),
            c === "margin" ? f += parseFloat(d.css(a, "margin" + this)) || 0 : f -= parseFloat(d.css(a, "border" + this + "Width")) || 0
        });
        return f
    }
    function bc(a, b) {
        b.src ? d.ajax({
            url: b.src,
            async: !1,
            dataType: "script"
        }) : d.globalEval(b.text || b.textContent || b.innerHTML || ""),
        b.parentNode && b.parentNode.removeChild(b)
    }
    function bb(a) {
        return "getElementsByTagName" in a ? a.getElementsByTagName("*") : "querySelectorAll" in a ? a.querySelectorAll("*") : []
    }
    function ba(a, b) {
        if (b.nodeType === 1) {
            var c = b.nodeName.toLowerCase();
            b.clearAttributes(),
            b.mergeAttributes(a);
            if (c === "object") b.outerHTML = a.outerHTML;
            else if (c !== "input" || a.type !== "checkbox" && a.type !== "radio") {
                if (c === "option") b.selected = a.defaultSelected;
                else if (c === "input" || c === "textarea") b.defaultValue = a.defaultValue
            } else a.checked && (b.defaultChecked = b.checked = a.checked),
            b.value !== a.value && (b.value = a.value);
            b.removeAttribute(d.expando)
        }
    }
    function _(a, b) {
        if (b.nodeType === 1 && d.hasData(a)) {
            var c = d.expando,
            e = d.data(a),
            f = d.data(b, e);
            if (e = e[c]) {
                var g = e.events;
                f = f[c] = d.extend({},
                e);
                if (g) {
                    delete f.handle,
                    f.events = {};
                    for (var h in g) for (var i = 0,
                    j = g[h].length; i < j; i++) d.event.add(b, h + (g[h][i].namespace ? ".": "") + g[h][i].namespace, g[h][i], g[h][i].data)
                }
            }
        }
    }
    function $(a, b) {
        return d.nodeName(a, "table") ? a.getElementsByTagName("tbody")[0] || a.appendChild(a.ownerDocument.createElement("tbody")) : a
    }
    function Q(a, b, c) {
        if (d.isFunction(b)) return d.grep(a,
        function(a, d) {
            var e = !!b.call(a, d, a);
            return e === c
        });
        if (b.nodeType) return d.grep(a,
        function(a, d) {
            return a === b === c
        });
        if (typeof b === "string") {
            var e = d.grep(a,
            function(a) {
                return a.nodeType === 1
            });
            if (L.test(b)) return d.filter(b, e, !c);
            b = d.filter(b, e)
        }
        return d.grep(a,
        function(a, e) {
            return d.inArray(a, b) >= 0 === c
        })
    }
    function P(a) {
        return ! a || !a.parentNode || a.parentNode.nodeType === 11
    }
    function H(a, b) {
        return (a && a !== "*" ? a + ".": "") + b.replace(t, "`").replace(u, "&")
    }
    function G(a) {
        var b, c, e, f, g, h, i, j, k, l, m, n, o, p = [],
        q = [],
        s = d._data(this, "events");
        if (a.liveFired !== this && s && s.live && !a.target.disabled && (!a.button || a.type !== "click")) {
            a.namespace && (n = new RegExp("(^|\\.)" + a.namespace.split(".").join("\\.(?:.*\\.)?") + "(\\.|$)")),
            a.liveFired = this;
            var t = s.live.slice(0);
            for (i = 0; i < t.length; i++) g = t[i],
            g.origType.replace(r, "") === a.type ? q.push(g.selector) : t.splice(i--, 1);
            f = d(a.target).closest(q, a.currentTarget);
            for (j = 0, k = f.length; j < k; j++) {
                m = f[j];
                for (i = 0; i < t.length; i++) {
                    g = t[i];
                    if (m.selector === g.selector && (!n || n.test(g.namespace)) && !m.elem.disabled) {
                        h = m.elem,
                        e = null;
                        if (g.preType === "mouseenter" || g.preType === "mouseleave") a.type = g.preType,
                        e = d(a.relatedTarget).closest(g.selector)[0]; (!e || e !== h) && p.push({
                            elem: h,
                            handleObj: g,
                            level: m.level
                        })
                    }
                }
            }
            for (j = 0, k = p.length; j < k; j++) {
                f = p[j];
                if (c && f.level > c) break;
                a.currentTarget = f.elem,
                a.data = f.handleObj.data,
                a.handleObj = f.handleObj,
                o = f.handleObj.origHandler.apply(f.elem, arguments);
                if (o === !1 || a.isPropagationStopped()) {
                    c = f.level,
                    o === !1 && (b = !1);
                    if (a.isImmediatePropagationStopped()) break
                }
            }
            return b
        }
    }
    function E(a, c, e) {
        var f = d.extend({},
        e[0]);
        f.type = a,
        f.originalEvent = {},
        f.liveFired = b,
        d.event.handle.call(c, f),
        f.isDefaultPrevented() && e[0].preventDefault()
    }
    function y() {
        return ! 0
    }
    function x() {
        return ! 1
    }
    function i(a) {
        for (var b in a) if (b !== "toJSON") return ! 1;
        return ! 0
    }
    function h(a, c, e) {
        if (e === b && a.nodeType === 1) {
            e = a.getAttribute("data-" + c);
            if (typeof e === "string") {
                try {
                    e = e === "true" ? !0 : e === "false" ? !1 : e === "null" ? null: d.isNaN(e) ? g.test(e) ? d.parseJSON(e) : e: parseFloat(e)
                } catch(f) {}
                d.data(a, c, e)
            } else e = b
        }
        return e
    }
    var c = a.document,
    d = function() {
        function G() {
            if (!d.isReady) {
                try {
                    c.documentElement.doScroll("left")
                } catch(a) {
                    setTimeout(G, 1);
                    return
                }
                d.ready()
            }
        }
        var d = function(a, b) {
            return new d.fn.init(a, b, g)
        },
        e = a.jQuery,
        f = a.$,
        g,
        h = /^(?:[^<]*(<[\w\W]+>)[^>]*$|#([\w\-]+)$)/,
        i = /\S/,
        j = /^\s+/,
        k = /\s+$/,
        l = /\d/,
        m = /^<(\w+)\s*\/?>(?:<\/\1>)?$/,
        n = /^[\],:{}\s]*$/,
        o = /\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,
        p = /"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,
        q = /(?:^|:|,)(?:\s*\[)+/g,
        r = /(webkit)[ \/]([\w.]+)/,
        s = /(opera)(?:.*version)?[ \/]([\w.]+)/,
        t = /(msie) ([\w.]+)/,
        u = /(mozilla)(?:.*? rv:([\w.]+))?/,
        v = navigator.userAgent,
        w,
        x,
        y,
        z = Object.prototype.toString,
        A = Object.prototype.hasOwnProperty,
        B = Array.prototype.push,
        C = Array.prototype.slice,
        D = String.prototype.trim,
        E = Array.prototype.indexOf,
        F = {};
        d.fn = d.prototype = {
            constructor: d,
            init: function(a, e, f) {
                var g, i, j, k;
                if (!a) return this;
                if (a.nodeType) {
                    this.context = this[0] = a,
                    this.length = 1;
                    return this
                }
                if (a === "body" && !e && c.body) {
                    this.context = c,
                    this[0] = c.body,
                    this.selector = "body",
                    this.length = 1;
                    return this
                }
                if (typeof a === "string") {
                    g = h.exec(a);
                    if (!g || !g[1] && e) return ! e || e.jquery ? (e || f).find(a) : this.constructor(e).find(a);
                    if (g[1]) {
                        e = e instanceof d ? e[0] : e,
                        k = e ? e.ownerDocument || e: c,
                        j = m.exec(a),
                        j ? d.isPlainObject(e) ? (a = [c.createElement(j[1])], d.fn.attr.call(a, e, !0)) : a = [k.createElement(j[1])] : (j = d.buildFragment([g[1]], [k]), a = (j.cacheable ? d.clone(j.fragment) : j.fragment).childNodes);
                        return d.merge(this, a)
                    }
                    i = c.getElementById(g[2]);
                    if (i && i.parentNode) {
                        if (i.id !== g[2]) return f.find(a);
                        this.length = 1,
                        this[0] = i
                    }
                    this.context = c,
                    this.selector = a;
                    return this
                }
                if (d.isFunction(a)) return f.ready(a);
                a.selector !== b && (this.selector = a.selector, this.context = a.context);
                return d.makeArray(a, this)
            },
            selector: "",
            jquery: "1.5.2",
            length: 0,
            size: function() {
                return this.length
            },
            toArray: function() {
                return C.call(this, 0)
            },
            get: function(a) {
                return a == null ? this.toArray() : a < 0 ? this[this.length + a] : this[a]
            },
            pushStack: function(a, b, c) {
                var e = this.constructor();
                d.isArray(a) ? B.apply(e, a) : d.merge(e, a),
                e.prevObject = this,
                e.context = this.context,
                b === "find" ? e.selector = this.selector + (this.selector ? " ": "") + c: b && (e.selector = this.selector + "." + b + "(" + c + ")");
                return e
            },
            each: function(a, b) {
                return d.each(this, a, b)
            },
            ready: function(a) {
                d.bindReady(),
                x.done(a);
                return this
            },
            eq: function(a) {
                return a === -1 ? this.slice(a) : this.slice(a, +a + 1)
            },
            first: function() {
                return this.eq(0)
            },
            last: function() {
                return this.eq( - 1)
            },
            slice: function() {
                return this.pushStack(C.apply(this, arguments), "slice", C.call(arguments).join(","))
            },
            map: function(a) {
                return this.pushStack(d.map(this,
                function(b, c) {
                    return a.call(b, c, b)
                }))
            },
            end: function() {
                return this.prevObject || this.constructor(null)
            },
            push: B,
            sort: [].sort,
            splice: [].splice
        },
        d.fn.init.prototype = d.fn,
        d.extend = d.fn.extend = function() {
            var a, c, e, f, g, h, i = arguments[0] || {},
            j = 1,
            k = arguments.length,
            l = !1;
            typeof i === "boolean" && (l = i, i = arguments[1] || {},
            j = 2),
            typeof i !== "object" && !d.isFunction(i) && (i = {}),
            k === j && (i = this, --j);
            for (; j < k; j++) if ((a = arguments[j]) != null) for (c in a) {
                e = i[c],
                f = a[c];
                if (i === f) continue;
                l && f && (d.isPlainObject(f) || (g = d.isArray(f))) ? (g ? (g = !1, h = e && d.isArray(e) ? e: []) : h = e && d.isPlainObject(e) ? e: {},
                i[c] = d.extend(l, h, f)) : f !== b && (i[c] = f)
            }
            return i
        },
        d.extend({
            noConflict: function(b) {
                a.$ = f,
                b && (a.jQuery = e);
                return d
            },
            isReady: !1,
            readyWait: 1,
            ready: function(a) {
                a === !0 && d.readyWait--;
                if (!d.readyWait || a !== !0 && !d.isReady) {
                    if (!c.body) return setTimeout(d.ready, 1);
                    d.isReady = !0;
                    if (a !== !0 && --d.readyWait > 0) return;
                    x.resolveWith(c, [d]),
                    d.fn.trigger && d(c).trigger("ready").unbind("ready")
                }
            },
            bindReady: function() {
                if (!x) {
                    x = d._Deferred();
                    if (c.readyState === "complete") return setTimeout(d.ready, 1);
                    if (c.addEventListener) c.addEventListener("DOMContentLoaded", y, !1),
                    a.addEventListener("load", d.ready, !1);
                    else if (c.attachEvent) {
                        c.attachEvent("onreadystatechange", y),
                        a.attachEvent("onload", d.ready);
                        var b = !1;
                        try {
                            b = a.frameElement == null
                        } catch(e) {}
                        c.documentElement.doScroll && b && G()
                    }
                }
            },
            isFunction: function(a) {
                return d.type(a) === "function"
            },
            isArray: Array.isArray ||
            function(a) {
                return d.type(a) === "array"
            },
            isWindow: function(a) {
                return a && typeof a === "object" && "setInterval" in a
            },
            isNaN: function(a) {
                return a == null || !l.test(a) || isNaN(a)
            },
            type: function(a) {
                return a == null ? String(a) : F[z.call(a)] || "object"
            },
            isPlainObject: function(a) {
                if (!a || d.type(a) !== "object" || a.nodeType || d.isWindow(a)) return ! 1;
                if (a.constructor && !A.call(a, "constructor") && !A.call(a.constructor.prototype, "isPrototypeOf")) return ! 1;
                var c;
                for (c in a) {}
                return c === b || A.call(a, c)
            },
            isEmptyObject: function(a) {
                for (var b in a) return ! 1;
                return ! 0
            },
            error: function(a) {
                throw a
            },
            parseJSON: function(b) {
                if (typeof b !== "string" || !b) return null;
                b = d.trim(b);
                if (n.test(b.replace(o, "@").replace(p, "]").replace(q, ""))) return a.JSON && a.JSON.parse ? a.JSON.parse(b) : (new Function("return " + b))();
                d.error("Invalid JSON: " + b)
            },
            parseXML: function(b, c, e) {
                a.DOMParser ? (e = new DOMParser, c = e.parseFromString(b, "text/xml")) : (c = new ActiveXObject("Microsoft.XMLDOM"), c.async = "false", c.loadXML(b)),
                e = c.documentElement,
                (!e || !e.nodeName || e.nodeName === "parsererror") && d.error("Invalid XML: " + b);
                return c
            },
            noop: function() {},
            globalEval: function(a) {
                if (a && i.test(a)) {
                    var b = c.head || c.getElementsByTagName("head")[0] || c.documentElement,
                    e = c.createElement("script");
                    d.support.scriptEval() ? e.appendChild(c.createTextNode(a)) : e.text = a,
                    b.insertBefore(e, b.firstChild),
                    b.removeChild(e)
                }
            },
            nodeName: function(a, b) {
                return a.nodeName && a.nodeName.toUpperCase() === b.toUpperCase()
            },
            each: function(a, c, e) {
                var f, g = 0,
                h = a.length,
                i = h === b || d.isFunction(a);
                if (e) {
                    if (i) {
                        for (f in a) if (c.apply(a[f], e) === !1) break
                    } else for (; g < h;) if (c.apply(a[g++], e) === !1) break
                } else if (i) {
                    for (f in a) if (c.call(a[f], f, a[f]) === !1) break
                } else for (var j = a[0]; g < h && c.call(j, g, j) !== !1; j = a[++g]) {}
                return a
            },
            trim: D ?
            function(a) {
                return a == null ? "": D.call(a)
            }: function(a) {
                return a == null ? "": (a + "").replace(j, "").replace(k, "")
            },
            makeArray: function(a, b) {
                var c = b || [];
                if (a != null) {
                    var e = d.type(a);
                    a.length == null || e === "string" || e === "function" || e === "regexp" || d.isWindow(a) ? B.call(c, a) : d.merge(c, a)
                }
                return c
            },
            inArray: function(a, b) {
                if (b.indexOf) return b.indexOf(a);
                for (var c = 0,
                d = b.length; c < d; c++) if (b[c] === a) return c;
                return - 1
            },
            merge: function(a, c) {
                var d = a.length,
                e = 0;
                if (typeof c.length === "number") for (var f = c.length; e < f; e++) a[d++] = c[e];
                else while (c[e] !== b) a[d++] = c[e++];
                a.length = d;
                return a
            },
            grep: function(a, b, c) {
                var d = [],
                e;
                c = !!c;
                for (var f = 0,
                g = a.length; f < g; f++) e = !!b(a[f], f),
                c !== e && d.push(a[f]);
                return d
            },
            map: function(a, b, c) {
                var d = [],
                e;
                for (var f = 0,
                g = a.length; f < g; f++) e = b(a[f], f, c),
                e != null && (d[d.length] = e);
                return d.concat.apply([], d)
            },
            guid: 1,
            proxy: function(a, c, e) {
                arguments.length === 2 && (typeof c === "string" ? (e = a, a = e[c], c = b) : c && !d.isFunction(c) && (e = c, c = b)),
                !c && a && (c = function() {
                    return a.apply(e || this, arguments)
                }),
                a && (c.guid = a.guid = a.guid || c.guid || d.guid++);
                return c
            },
            access: function(a, c, e, f, g, h) {
                var i = a.length;
                if (typeof c === "object") {
                    for (var j in c) d.access(a, j, c[j], f, g, e);
                    return a
                }
                if (e !== b) {
                    f = !h && f && d.isFunction(e);
                    for (var k = 0; k < i; k++) g(a[k], c, f ? e.call(a[k], k, g(a[k], c)) : e, h);
                    return a
                }
                return i ? g(a[0], c) : b
            },
            now: function() {
                return (new Date).getTime()
            },
            uaMatch: function(a) {
                a = a.toLowerCase();
                var b = r.exec(a) || s.exec(a) || t.exec(a) || a.indexOf("compatible") < 0 && u.exec(a) || [];
                return {
                    browser: b[1] || "",
                    version: b[2] || "0"
                }
            },
            sub: function() {
                function a(b, c) {
                    return new a.fn.init(b, c)
                }
                d.extend(!0, a, this),
                a.superclass = this,
                a.fn = a.prototype = this(),
                a.fn.constructor = a,
                a.subclass = this.subclass,
                a.fn.init = function b(b, c) {
                    c && c instanceof d && !(c instanceof a) && (c = a(c));
                    return d.fn.init.call(this, b, c, e)
                },
                a.fn.init.prototype = a.fn;
                var e = a(c);
                return a
            },
            browser: {}
        }),
        d.each("Boolean Number String Function Array Date RegExp Object".split(" "),
        function(a, b) {
            F["[object " + b + "]"] = b.toLowerCase()
        }),
        w = d.uaMatch(v),
        w.browser && (d.browser[w.browser] = !0, d.browser.version = w.version),
        d.browser.webkit && (d.browser.safari = !0),
        E && (d.inArray = function(a, b) {
            return E.call(b, a)
        }),
        i.test(" ") && (j = /^[\s\xA0]+/, k = /[\s\xA0]+$/),
        g = d(c),
        c.addEventListener ? y = function() {
            c.removeEventListener("DOMContentLoaded", y, !1),
            d.ready()
        }: c.attachEvent && (y = function() {
            c.readyState === "complete" && (c.detachEvent("onreadystatechange", y), d.ready())
        });
        return d
    } (),
    e = "then done fail isResolved isRejected promise".split(" "),
    f = [].slice;
    d.extend({
        _Deferred: function() {
            var a = [],
            b,
            c,
            e,
            f = {
                done: function() {
                    if (!e) {
                        var c = arguments,
                        g, h, i, j, k;
                        b && (k = b, b = 0);
                        for (g = 0, h = c.length; g < h; g++) i = c[g],
                        j = d.type(i),
                        j === "array" ? f.done.apply(f, i) : j === "function" && a.push(i);
                        k && f.resolveWith(k[0], k[1])
                    }
                    return this
                },
                resolveWith: function(d, f) {
                    if (!e && !b && !c) {
                        f = f || [],
                        c = 1;
                        try {
                            while (a[0]) a.shift().apply(d, f)
                        } finally {
                            b = [d, f],
                            c = 0
                        }
                    }
                    return this
                },
                resolve: function() {
                    f.resolveWith(this, arguments);
                    return this
                },
                isResolved: function() {
                    return c || b
                },
                cancel: function() {
                    e = 1,
                    a = [];
                    return this
                }
            };
            return f
        },
        Deferred: function(a) {
            var b = d._Deferred(),
            c = d._Deferred(),
            f;
            d.extend(b, {
                then: function(a, c) {
                    b.done(a).fail(c);
                    return this
                },
                fail: c.done,
                rejectWith: c.resolveWith,
                reject: c.resolve,
                isRejected: c.isResolved,
                promise: function(a) {
                    if (a == null) {
                        if (f) return f;
                        f = a = {}
                    }
                    var c = e.length;
                    while (c--) a[e[c]] = b[e[c]];
                    return a
                }
            }),
            b.done(c.cancel).fail(b.cancel),
            delete b.cancel,
            a && a.call(b, b);
            return b
        },
        when: function(a) {
            function i(a) {
                return function(c) {
                    b[a] = arguments.length > 1 ? f.call(arguments, 0) : c,
                    --g || h.resolveWith(h, f.call(b, 0))
                }
            }
            var b = arguments,
            c = 0,
            e = b.length,
            g = e,
            h = e <= 1 && a && d.isFunction(a.promise) ? a: d.Deferred();
            if (e > 1) {
                for (; c < e; c++) b[c] && d.isFunction(b[c].promise) ? b[c].promise().then(i(c), h.reject) : --g;
                g || h.resolveWith(h, b)
            } else h !== a && h.resolveWith(h, e ? [a] : []);
            return h.promise()
        }
    }),
    function() {
        d.support = {};
        var b = c.createElement("div");
        b.style.display = "none",
        b.innerHTML = "   <link/><table></table><a href='http://www.cygpm.com/a' style='color:red;float:left;opacity:.55;'>a</a><input type='checkbox'/>";
        var e = b.getElementsByTagName("*"),
        f = b.getElementsByTagName("a")[0],
        g = c.createElement("select"),
        h = g.appendChild(c.createElement("option")),
        i = b.getElementsByTagName("input")[0];
        if (e && e.length && f) {
            d.support = {
                leadingWhitespace: b.firstChild.nodeType === 3,
                tbody: !b.getElementsByTagName("tbody").length,
                htmlSerialize: !!b.getElementsByTagName("link").length,
                style: /red/.test(f.getAttribute("style")),
                hrefNormalized: f.getAttribute("href") === "/a",
                opacity: /^0.55$/.test(f.style.opacity),
                cssFloat: !!f.style.cssFloat,
                checkOn: i.value === "on",
                optSelected: h.selected,
                deleteExpando: !0,
                optDisabled: !1,
                checkClone: !1,
                noCloneEvent: !0,
                noCloneChecked: !0,
                boxModel: null,
                inlineBlockNeedsLayout: !1,
                shrinkWrapBlocks: !1,
                reliableHiddenOffsets: !0,
                reliableMarginRight: !0
            },
            i.checked = !0,
            d.support.noCloneChecked = i.cloneNode(!0).checked,
            g.disabled = !0,
            d.support.optDisabled = !h.disabled;
            var j = null;
            d.support.scriptEval = function() {
                if (j === null) {
                    var b = c.documentElement,
                    e = c.createElement("script"),
                    f = "script" + d.now();
                    try {
                        e.appendChild(c.createTextNode("window." + f + "=1;"))
                    } catch(g) {}
                    b.insertBefore(e, b.firstChild),
                    a[f] ? (j = !0, delete a[f]) : j = !1,
                    b.removeChild(e)
                }
                return j
            };
            try {
                delete b.test
            } catch(k) {
                d.support.deleteExpando = !1
            } ! b.addEventListener && b.attachEvent && b.fireEvent && (b.attachEvent("onclick",
            function l() {
                d.support.noCloneEvent = !1,
                b.detachEvent("onclick", l)
            }), b.cloneNode(!0).fireEvent("onclick")),
            b = c.createElement("div"),
            b.innerHTML = "<input type='radio' name='radiotest' checked='checked'/>";
            var m = c.createDocumentFragment();
            m.appendChild(b.firstChild),
            d.support.checkClone = m.cloneNode(!0).cloneNode(!0).lastChild.checked,
            d(function() {
                var a = c.createElement("div"),
                b = c.getElementsByTagName("body")[0];
                if (b) {
                    a.style.width = a.style.paddingLeft = "1px",
                    b.appendChild(a),
                    d.boxModel = d.support.boxModel = a.offsetWidth === 2,
                    "zoom" in a.style && (a.style.display = "inline", a.style.zoom = 1, d.support.inlineBlockNeedsLayout = a.offsetWidth === 2, a.style.display = "", a.innerHTML = "<div style='width:4px;'></div>", d.support.shrinkWrapBlocks = a.offsetWidth !== 2),
                    a.innerHTML = "<table><tr><td style='padding:0;border:0;display:none'></td><td>t</td></tr></table>";
                    var e = a.getElementsByTagName("td");
                    d.support.reliableHiddenOffsets = e[0].offsetHeight === 0,
                    e[0].style.display = "",
                    e[1].style.display = "none",
                    d.support.reliableHiddenOffsets = d.support.reliableHiddenOffsets && e[0].offsetHeight === 0,
                    a.innerHTML = "",
                    c.defaultView && c.defaultView.getComputedStyle && (a.style.width = "1px", a.style.marginRight = "0", d.support.reliableMarginRight = (parseInt(c.defaultView.getComputedStyle(a, null).marginRight, 10) || 0) === 0),
                    b.removeChild(a).style.display = "none",
                    a = e = null
                }
            });
            var n = function(a) {
                var b = c.createElement("div");
                a = "on" + a;
                if (!b.attachEvent) return ! 0;
                var d = a in b;
                d || (b.setAttribute(a, "return;"), d = typeof b[a] === "function");
                return d
            };
            d.support.submitBubbles = n("submit"),
            d.support.changeBubbles = n("change"),
            b = e = f = null
        }
    } ();
    var g = /^(?:\{.*\}|\[.*\])$/;
    d.extend({
        cache: {},
        uuid: 0,
        expando: "jQuery" + (d.fn.jquery + Math.random()).replace(/\D/g, ""),
        noData: {
            embed: !0,
            object: "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",
            applet: !0
        },
        hasData: function(a) {
            a = a.nodeType ? d.cache[a[d.expando]] : a[d.expando];
            return !! a && !i(a)
        },
        data: function(a, c, e, f) {
            if (d.acceptData(a)) {
                var g = d.expando,
                h = typeof c === "string",
                i, j = a.nodeType,
                k = j ? d.cache: a,
                l = j ? a[d.expando] : a[d.expando] && d.expando;
                if ((!l || f && l && !k[l][g]) && h && e === b) return;
                l || (j ? a[d.expando] = l = ++d.uuid: l = d.expando),
                k[l] || (k[l] = {},
                j || (k[l].toJSON = d.noop));
                if (typeof c === "object" || typeof c === "function") f ? k[l][g] = d.extend(k[l][g], c) : k[l] = d.extend(k[l], c);
                i = k[l],
                f && (i[g] || (i[g] = {}), i = i[g]),
                e !== b && (i[c] = e);
                if (c === "events" && !i[c]) return i[g] && i[g].events;
                return h ? i[c] : i
            }
        },
        removeData: function(b, c, e) {
            if (d.acceptData(b)) {
                var f = d.expando,
                g = b.nodeType,
                h = g ? d.cache: b,
                j = g ? b[d.expando] : d.expando;
                if (!h[j]) return;
                if (c) {
                    var k = e ? h[j][f] : h[j];
                    if (k) {
                        delete k[c];
                        if (!i(k)) return
                    }
                }
                if (e) {
                    delete h[j][f];
                    if (!i(h[j])) return
                }
                var l = h[j][f];
                d.support.deleteExpando || h != a ? delete h[j] : h[j] = null,
                l ? (h[j] = {},
                g || (h[j].toJSON = d.noop), h[j][f] = l) : g && (d.support.deleteExpando ? delete b[d.expando] : b.removeAttribute ? b.removeAttribute(d.expando) : b[d.expando] = null)
            }
        },
        _data: function(a, b, c) {
            return d.data(a, b, c, !0)
        },
        acceptData: function(a) {
            if (a.nodeName) {
                var b = d.noData[a.nodeName.toLowerCase()];
                if (b) return b !== !0 && a.getAttribute("classid") === b
            }
            return ! 0
        }
    }),
    d.fn.extend({
        data: function(a, c) {
            var e = null;
            if (typeof a === "undefined") {
                if (this.length) {
                    e = d.data(this[0]);
                    if (this[0].nodeType === 1) {
                        var f = this[0].attributes,
                        g;
                        for (var i = 0,
                        j = f.length; i < j; i++) g = f[i].name,
                        g.indexOf("data-") === 0 && (g = g.substr(5), h(this[0], g, e[g]))
                    }
                }
                return e
            }
            if (typeof a === "object") return this.each(function() {
                d.data(this, a)
            });
            var k = a.split(".");
            k[1] = k[1] ? "." + k[1] : "";
            if (c === b) {
                e = this.triggerHandler("getData" + k[1] + "!", [k[0]]),
                e === b && this.length && (e = d.data(this[0], a), e = h(this[0], a, e));
                return e === b && k[1] ? this.data(k[0]) : e
            }
            return this.each(function() {
                var b = d(this),
                e = [k[0], c];
                b.triggerHandler("setData" + k[1] + "!", e),
                d.data(this, a, c),
                b.triggerHandler("changeData" + k[1] + "!", e)
            })
        },
        removeData: function(a) {
            return this.each(function() {
                d.removeData(this, a)
            })
        }
    }),
    d.extend({
        queue: function(a, b, c) {
            if (a) {
                b = (b || "fx") + "queue";
                var e = d._data(a, b);
                if (!c) return e || []; ! e || d.isArray(c) ? e = d._data(a, b, d.makeArray(c)) : e.push(c);
                return e
            }
        },
        dequeue: function(a, b) {
            b = b || "fx";
            var c = d.queue(a, b),
            e = c.shift();
            e === "inprogress" && (e = c.shift()),
            e && (b === "fx" && c.unshift("inprogress"), e.call(a,
            function() {
                d.dequeue(a, b)
            })),
            c.length || d.removeData(a, b + "queue", !0)
        }
    }),
    d.fn.extend({
        queue: function(a, c) {
            typeof a !== "string" && (c = a, a = "fx");
            if (c === b) return d.queue(this[0], a);
            return this.each(function(b) {
                var e = d.queue(this, a, c);
                a === "fx" && e[0] !== "inprogress" && d.dequeue(this, a)
            })
        },
        dequeue: function(a) {
            return this.each(function() {
                d.dequeue(this, a)
            })
        },
        delay: function(a, b) {
            a = d.fx ? d.fx.speeds[a] || a: a,
            b = b || "fx";
            return this.queue(b,
            function() {
                var c = this;
                setTimeout(function() {
                    d.dequeue(c, b)
                },
                a)
            })
        },
        clearQueue: function(a) {
            return this.queue(a || "fx", [])
        }
    });
    var j = /[\n\t\r]/g,
    k = /\s+/,
    l = /\r/g,
    m = /^(?:href|src|style)$/,
    n = /^(?:button|input)$/i,
    o = /^(?:button|input|object|select|textarea)$/i,
    p = /^a(?:rea)?$/i,
    q = /^(?:radio|checkbox)$/i;
    d.props = {
        "for": "htmlFor",
        "class": "className",
        readonly: "readOnly",
        maxlength: "maxLength",
        cellspacing: "cellSpacing",
        rowspan: "rowSpan",
        colspan: "colSpan",
        tabindex: "tabIndex",
        usemap: "useMap",
        frameborder: "frameBorder"
    },
    d.fn.extend({
        attr: function(a, b) {
            return d.access(this, a, b, !0, d.attr)
        },
        removeAttr: function(a, b) {
            return this.each(function() {
                d.attr(this, a, ""),
                this.nodeType === 1 && this.removeAttribute(a)
            })
        },
        addClass: function(a) {
            if (d.isFunction(a)) return this.each(function(b) {
                var c = d(this);
                c.addClass(a.call(this, b, c.attr("class")))
            });
            if (a && typeof a === "string") {
                var b = (a || "").split(k);
                for (var c = 0,
                e = this.length; c < e; c++) {
                    var f = this[c];
                    if (f.nodeType === 1) if (f.className) {
                        var g = " " + f.className + " ",
                        h = f.className;
                        for (var i = 0,
                        j = b.length; i < j; i++) g.indexOf(" " + b[i] + " ") < 0 && (h += " " + b[i]);
                        f.className = d.trim(h)
                    } else f.className = a
                }
            }
            return this
        },
        removeClass: function(a) {
            if (d.isFunction(a)) return this.each(function(b) {
                var c = d(this);
                c.removeClass(a.call(this, b, c.attr("class")))
            });
            if (a && typeof a === "string" || a === b) {
                var c = (a || "").split(k);
                for (var e = 0,
                f = this.length; e < f; e++) {
                    var g = this[e];
                    if (g.nodeType === 1 && g.className) if (a) {
                        var h = (" " + g.className + " ").replace(j, " ");
                        for (var i = 0,
                        l = c.length; i < l; i++) h = h.replace(" " + c[i] + " ", " ");
                        g.className = d.trim(h)
                    } else g.className = ""
                }
            }
            return this
        },
        toggleClass: function(a, b) {
            var c = typeof a,
            e = typeof b === "boolean";
            if (d.isFunction(a)) return this.each(function(c) {
                var e = d(this);
                e.toggleClass(a.call(this, c, e.attr("class"), b), b)
            });
            return this.each(function() {
                if (c === "string") {
                    var f, g = 0,
                    h = d(this),
                    i = b,
                    j = a.split(k);
                    while (f = j[g++]) i = e ? i: !h.hasClass(f),
                    h[i ? "addClass": "removeClass"](f)
                } else if (c === "undefined" || c === "boolean") this.className && d._data(this, "__className__", this.className),
                this.className = this.className || a === !1 ? "": d._data(this, "__className__") || ""
            })
        },
        hasClass: function(a) {
            var b = " " + a + " ";
            for (var c = 0,
            d = this.length; c < d; c++) if ((" " + this[c].className + " ").replace(j, " ").indexOf(b) > -1) return ! 0;
            return ! 1
        },
        val: function(a) {
            if (!arguments.length) {
                var c = this[0];
                if (c) {
                    if (d.nodeName(c, "option")) {
                        var e = c.attributes.value;
                        return ! e || e.specified ? c.value: c.text
                    }
                    if (d.nodeName(c, "select")) {
                        var f = c.selectedIndex,
                        g = [],
                        h = c.options,
                        i = c.type === "select-one";
                        if (f < 0) return null;
                        for (var j = i ? f: 0, k = i ? f + 1 : h.length; j < k; j++) {
                            var m = h[j];
                            if (m.selected && (d.support.optDisabled ? !m.disabled: m.getAttribute("disabled") === null) && (!m.parentNode.disabled || !d.nodeName(m.parentNode, "optgroup"))) {
                                a = d(m).val();
                                if (i) return a;
                                g.push(a)
                            }
                        }
                        if (i && !g.length && h.length) return d(h[f]).val();
                        return g
                    }
                    if (q.test(c.type) && !d.support.checkOn) return c.getAttribute("value") === null ? "on": c.value;
                    return (c.value || "").replace(l, "")
                }
                return b
            }
            var n = d.isFunction(a);
            return this.each(function(b) {
                var c = d(this),
                e = a;
                if (this.nodeType === 1) {
                    n && (e = a.call(this, b, c.val())),
                    e == null ? e = "": typeof e === "number" ? e += "": d.isArray(e) && (e = d.map(e,
                    function(a) {
                        return a == null ? "": a + ""
                    }));
                    if (d.isArray(e) && q.test(this.type)) this.checked = d.inArray(c.val(), e) >= 0;
                    else if (d.nodeName(this, "select")) {
                        var f = d.makeArray(e);
                        d("option", this).each(function() {
                            this.selected = d.inArray(d(this).val(), f) >= 0
                        }),
                        f.length || (this.selectedIndex = -1)
                    } else this.value = e
                }
            })
        }
    }),
    d.extend({
        attrFn: {
            val: !0,
            css: !0,
            html: !0,
            text: !0,
            data: !0,
            width: !0,
            height: !0,
            offset: !0
        },
        attr: function(a, c, e, f) {
            if (!a || a.nodeType === 3 || a.nodeType === 8 || a.nodeType === 2) return b;
            if (f && c in d.attrFn) return d(a)[c](e);
            var g = a.nodeType !== 1 || !d.isXMLDoc(a),
            h = e !== b;
            c = g && d.props[c] || c;
            if (a.nodeType === 1) {
                var i = m.test(c);
                if (c === "selected" && !d.support.optSelected) {
                    var j = a.parentNode;
                    j && (j.selectedIndex, j.parentNode && j.parentNode.selectedIndex)
                }
                if ((c in a || a[c] !== b) && g && !i) {
                    h && (c === "type" && n.test(a.nodeName) && a.parentNode && d.error("type property can't be changed"), e === null ? a.nodeType === 1 && a.removeAttribute(c) : a[c] = e);
                    if (d.nodeName(a, "form") && a.getAttributeNode(c)) return a.getAttributeNode(c).nodeValue;
                    if (c === "tabIndex") {
                        var k = a.getAttributeNode("tabIndex");
                        return k && k.specified ? k.value: o.test(a.nodeName) || p.test(a.nodeName) && a.href ? 0 : b
                    }
                    return a[c]
                }
                if (!d.support.style && g && c === "style") {
                    h && (a.style.cssText = "" + e);
                    return a.style.cssText
                }
                h && a.setAttribute(c, "" + e);
                if (!a.attributes[c] && (a.hasAttribute && !a.hasAttribute(c))) return b;
                var l = !d.support.hrefNormalized && g && i ? a.getAttribute(c, 2) : a.getAttribute(c);
                return l === null ? b: l
            }
            h && (a[c] = e);
            return a[c]
        }
    });
    var r = /\.(.*)$/,
    s = /^(?:textarea|input|select)$/i,
    t = /\./g,
    u = / /g,
    v = /[^\w\s.|`]/g,
    w = function(a) {
        return a.replace(v, "\\$&")
    };
    d.event = {
        add: function(c, e, f, g) {
            if (c.nodeType !== 3 && c.nodeType !== 8) {
                try {
                    d.isWindow(c) && (c !== a && !c.frameElement) && (c = a)
                } catch(h) {}
                if (f === !1) f = x;
                else if (!f) return;
                var i, j;
                f.handler && (i = f, f = i.handler),
                f.guid || (f.guid = d.guid++);
                var k = d._data(c);
                if (!k) return;
                var l = k.events,
                m = k.handle;
                l || (k.events = l = {}),
                m || (k.handle = m = function(a) {
                    return typeof d !== "undefined" && d.event.triggered !== a.type ? d.event.handle.apply(m.elem, arguments) : b
                }),
                m.elem = c,
                e = e.split(" ");
                var n, o = 0,
                p;
                while (n = e[o++]) {
                    j = i ? d.extend({},
                    i) : {
                        handler: f,
                        data: g
                    },
                    n.indexOf(".") > -1 ? (p = n.split("."), n = p.shift(), j.namespace = p.slice(0).sort().join(".")) : (p = [], j.namespace = ""),
                    j.type = n,
                    j.guid || (j.guid = f.guid);
                    var q = l[n],
                    r = d.event.special[n] || {};
                    if (!q) {
                        q = l[n] = [];
                        if (!r.setup || r.setup.call(c, g, p, m) === !1) c.addEventListener ? c.addEventListener(n, m, !1) : c.attachEvent && c.attachEvent("on" + n, m)
                    }
                    r.add && (r.add.call(c, j), j.handler.guid || (j.handler.guid = f.guid)),
                    q.push(j),
                    d.event.global[n] = !0
                }
                c = null
            }
        },
        global: {},
        remove: function(a, c, e, f) {
            if (a.nodeType !== 3 && a.nodeType !== 8) {
                e === !1 && (e = x);
                var g, h, i, j, k = 0,
                l, m, n, o, p, q, r, s = d.hasData(a) && d._data(a),
                t = s && s.events;
                if (!s || !t) return;
                c && c.type && (e = c.handler, c = c.type);
                if (!c || typeof c === "string" && c.charAt(0) === ".") {
                    c = c || "";
                    for (h in t) d.event.remove(a, h + c);
                    return
                }
                c = c.split(" ");
                while (h = c[k++]) {
                    r = h,
                    q = null,
                    l = h.indexOf(".") < 0,
                    m = [],
                    l || (m = h.split("."), h = m.shift(), n = new RegExp("(^|\\.)" + d.map(m.slice(0).sort(), w).join("\\.(?:.*\\.)?") + "(\\.|$)")),
                    p = t[h];
                    if (!p) continue;
                    if (!e) {
                        for (j = 0; j < p.length; j++) {
                            q = p[j];
                            if (l || n.test(q.namespace)) d.event.remove(a, r, q.handler, j),
                            p.splice(j--, 1)
                        }
                        continue
                    }
                    o = d.event.special[h] || {};
                    for (j = f || 0; j < p.length; j++) {
                        q = p[j];
                        if (e.guid === q.guid) {
                            if (l || n.test(q.namespace)) f == null && p.splice(j--, 1),
                            o.remove && o.remove.call(a, q);
                            if (f != null) break
                        }
                    }
                    if (p.length === 0 || f != null && p.length === 1)(!o.teardown || o.teardown.call(a, m) === !1) && d.removeEvent(a, h, s.handle),
                    g = null,
                    delete t[h]
                }
                if (d.isEmptyObject(t)) {
                    var u = s.handle;
                    u && (u.elem = null),
                    delete s.events,
                    delete s.handle,
                    d.isEmptyObject(s) && d.removeData(a, b, !0)
                }
            }
        },
        trigger: function(a, c, e) {
            var f = a.type || a,
            g = arguments[3];
            if (!g) {
                a = typeof a === "object" ? a[d.expando] ? a: d.extend(d.Event(f), a) : d.Event(f),
                f.indexOf("!") >= 0 && (a.type = f = f.slice(0, -1), a.exclusive = !0),
                e || (a.stopPropagation(), d.event.global[f] && d.each(d.cache,
                function() {
                    var b = d.expando,
                    e = this[b];
                    e && e.events && e.events[f] && d.event.trigger(a, c, e.handle.elem)
                }));
                if (!e || e.nodeType === 3 || e.nodeType === 8) return b;
                a.result = b,
                a.target = e,
                c = d.makeArray(c),
                c.unshift(a)
            }
            a.currentTarget = e;
            var h = d._data(e, "handle");
            h && h.apply(e, c);
            var i = e.parentNode || e.ownerDocument;
            try {
                e && e.nodeName && d.noData[e.nodeName.toLowerCase()] || e["on" + f] && e["on" + f].apply(e, c) === !1 && (a.result = !1, a.preventDefault())
            } catch(j) {}
            if (!a.isPropagationStopped() && i) d.event.trigger(a, c, i, !0);
            else if (!a.isDefaultPrevented()) {
                var k, l = a.target,
                m = f.replace(r, ""),
                n = d.nodeName(l, "a") && m === "click",
                o = d.event.special[m] || {};
                if ((!o._default || o._default.call(e, a) === !1) && !n && !(l && l.nodeName && d.noData[l.nodeName.toLowerCase()])) {
                    try {
                        l[m] && (k = l["on" + m], k && (l["on" + m] = null), d.event.triggered = a.type, l[m]())
                    } catch(p) {}
                    k && (l["on" + m] = k),
                    d.event.triggered = b
                }
            }
        },
        handle: function(c) {
            var e, f, g, h, i, j = [],
            k = d.makeArray(arguments);
            c = k[0] = d.event.fix(c || a.event),
            c.currentTarget = this,
            e = c.type.indexOf(".") < 0 && !c.exclusive,
            e || (g = c.type.split("."), c.type = g.shift(), j = g.slice(0).sort(), h = new RegExp("(^|\\.)" + j.join("\\.(?:.*\\.)?") + "(\\.|$)")),
            c.namespace = c.namespace || j.join("."),
            i = d._data(this, "events"),
            f = (i || {})[c.type];
            if (i && f) {
                f = f.slice(0);
                for (var l = 0,
                m = f.length; l < m; l++) {
                    var n = f[l];
                    if (e || h.test(n.namespace)) {
                        c.handler = n.handler,
                        c.data = n.data,
                        c.handleObj = n;
                        var o = n.handler.apply(this, k);
                        o !== b && (c.result = o, o === !1 && (c.preventDefault(), c.stopPropagation()));
                        if (c.isImmediatePropagationStopped()) break
                    }
                }
            }
            return c.result
        },
        props: "altKey attrChange attrName bubbles button cancelable charCode clientX clientY ctrlKey currentTarget data detail eventPhase fromElement handler keyCode layerX layerY metaKey newValue offsetX offsetY pageX pageY prevValue relatedNode relatedTarget screenX screenY shiftKey srcElement target toElement view wheelDelta which".split(" "),
        fix: function(a) {
            if (a[d.expando]) return a;
            var e = a;
            a = d.Event(e);
            for (var f = this.props.length,
            g; f;) g = this.props[--f],
            a[g] = e[g];
            a.target || (a.target = a.srcElement || c),
            a.target.nodeType === 3 && (a.target = a.target.parentNode),
            !a.relatedTarget && a.fromElement && (a.relatedTarget = a.fromElement === a.target ? a.toElement: a.fromElement);
            if (a.pageX == null && a.clientX != null) {
                var h = c.documentElement,
                i = c.body;
                a.pageX = a.clientX + (h && h.scrollLeft || i && i.scrollLeft || 0) - (h && h.clientLeft || i && i.clientLeft || 0),
                a.pageY = a.clientY + (h && h.scrollTop || i && i.scrollTop || 0) - (h && h.clientTop || i && i.clientTop || 0)
            }
            a.which == null && (a.charCode != null || a.keyCode != null) && (a.which = a.charCode != null ? a.charCode: a.keyCode),
            !a.metaKey && a.ctrlKey && (a.metaKey = a.ctrlKey),
            !a.which && a.button !== b && (a.which = a.button & 1 ? 1 : a.button & 2 ? 3 : a.button & 4 ? 2 : 0);
            return a
        },
        guid: 1e8,
        proxy: d.proxy,
        special: {
            ready: {
                setup: d.bindReady,
                teardown: d.noop
            },
            live: {
                add: function(a) {
                    d.event.add(this, H(a.origType, a.selector), d.extend({},
                    a, {
                        handler: G,
                        guid: a.handler.guid
                    }))
                },
                remove: function(a) {
                    d.event.remove(this, H(a.origType, a.selector), a)
                }
            },
            beforeunload: {
                setup: function(a, b, c) {
                    d.isWindow(this) && (this.onbeforeunload = c)
                },
                teardown: function(a, b) {
                    this.onbeforeunload === b && (this.onbeforeunload = null)
                }
            }
        }
    },
    d.removeEvent = c.removeEventListener ?
    function(a, b, c) {
        a.removeEventListener && a.removeEventListener(b, c, !1)
    }: function(a, b, c) {
        a.detachEvent && a.detachEvent("on" + b, c)
    },
    d.Event = function(a) {
        if (!this.preventDefault) return new d.Event(a);
        a && a.type ? (this.originalEvent = a, this.type = a.type, this.isDefaultPrevented = a.defaultPrevented || a.returnValue === !1 || a.getPreventDefault && a.getPreventDefault() ? y: x) : this.type = a,
        this.timeStamp = d.now(),
        this[d.expando] = !0
    },
    d.Event.prototype = {
        preventDefault: function() {
            this.isDefaultPrevented = y;
            var a = this.originalEvent;
            a && (a.preventDefault ? a.preventDefault() : a.returnValue = !1)
        },
        stopPropagation: function() {
            this.isPropagationStopped = y;
            var a = this.originalEvent;
            a && (a.stopPropagation && a.stopPropagation(), a.cancelBubble = !0)
        },
        stopImmediatePropagation: function() {
            this.isImmediatePropagationStopped = y,
            this.stopPropagation()
        },
        isDefaultPrevented: x,
        isPropagationStopped: x,
        isImmediatePropagationStopped: x
    };
    var z = function(a) {
        var b = a.relatedTarget;
        try {
            if (b && b !== c && !b.parentNode) return;
            while (b && b !== this) b = b.parentNode;
            b !== this && (a.type = a.data, d.event.handle.apply(this, arguments))
        } catch(e) {}
    },
    A = function(a) {
        a.type = a.data,
        d.event.handle.apply(this, arguments)
    };
    d.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout"
    },
    function(a, b) {
        d.event.special[a] = {
            setup: function(c) {
                d.event.add(this, b, c && c.selector ? A: z, a)
            },
            teardown: function(a) {
                d.event.remove(this, b, a && a.selector ? A: z)
            }
        }
    }),
    d.support.submitBubbles || (d.event.special.submit = {
        setup: function(a, b) {
            if (this.nodeName && this.nodeName.toLowerCase() !== "form") d.event.add(this, "click.specialSubmit",
            function(a) {
                var b = a.target,
                c = b.type; (c === "submit" || c === "image") && d(b).closest("form").length && E("submit", this, arguments)
            }),
            d.event.add(this, "keypress.specialSubmit",
            function(a) {
                var b = a.target,
                c = b.type; (c === "text" || c === "password") && d(b).closest("form").length && a.keyCode === 13 && E("submit", this, arguments)
            });
            else return ! 1
        },
        teardown: function(a) {
            d.event.remove(this, ".specialSubmit")
        }
    });
    if (!d.support.changeBubbles) {
        var B, C = function(a) {
            var b = a.type,
            c = a.value;
            b === "radio" || b === "checkbox" ? c = a.checked: b === "select-multiple" ? c = a.selectedIndex > -1 ? d.map(a.options,
            function(a) {
                return a.selected
            }).join("-") : "": a.nodeName.toLowerCase() === "select" && (c = a.selectedIndex);
            return c
        },
        D = function D(a) {
            var c = a.target,
            e, f;
            if (s.test(c.nodeName) && !c.readOnly) {
                e = d._data(c, "_change_data"),
                f = C(c),
                (a.type !== "focusout" || c.type !== "radio") && d._data(c, "_change_data", f);
                if (e === b || f === e) return;
                if (e != null || f) a.type = "change",
                a.liveFired = b,
                d.event.trigger(a, arguments[1], c)
            }
        };
        d.event.special.change = {
            filters: {
                focusout: D,
                beforedeactivate: D,
                click: function(a) {
                    var b = a.target,
                    c = b.type; (c === "radio" || c === "checkbox" || b.nodeName.toLowerCase() === "select") && D.call(this, a)
                },
                keydown: function(a) {
                    var b = a.target,
                    c = b.type; (a.keyCode === 13 && b.nodeName.toLowerCase() !== "textarea" || a.keyCode === 32 && (c === "checkbox" || c === "radio") || c === "select-multiple") && D.call(this, a)
                },
                beforeactivate: function(a) {
                    var b = a.target;
                    d._data(b, "_change_data", C(b))
                }
            },
            setup: function(a, b) {
                if (this.type === "file") return ! 1;
                for (var c in B) d.event.add(this, c + ".specialChange", B[c]);
                return s.test(this.nodeName)
            },
            teardown: function(a) {
                d.event.remove(this, ".specialChange");
                return s.test(this.nodeName)
            }
        },
        B = d.event.special.change.filters,
        B.focus = B.beforeactivate
    }
    c.addEventListener && d.each({
        focus: "focusin",
        blur: "focusout"
    },
    function(a, b) {
        function f(a) {
            var c = d.event.fix(a);
            c.type = b,
            c.originalEvent = {},
            d.event.trigger(c, null, c.target),
            c.isDefaultPrevented() && a.preventDefault()
        }
        var e = 0;
        d.event.special[b] = {
            setup: function() {
                e++===0 && c.addEventListener(a, f, !0)
            },
            teardown: function() {--e === 0 && c.removeEventListener(a, f, !0)
            }
        }
    }),
    d.each(["bind", "one"],
    function(a, c) {
        d.fn[c] = function(a, e, f) {
            if (typeof a === "object") {
                for (var g in a) this[c](g, e, a[g], f);
                return this
            }
            if (d.isFunction(e) || e === !1) f = e,
            e = b;
            var h = c === "one" ? d.proxy(f,
            function(a) {
                d(this).unbind(a, h);
                return f.apply(this, arguments)
            }) : f;
            if (a === "unload" && c !== "one") this.one(a, e, f);
            else for (var i = 0,
            j = this.length; i < j; i++) d.event.add(this[i], a, h, e);
            return this
        }
    }),
    d.fn.extend({
        unbind: function(a, b) {
            if (typeof a !== "object" || a.preventDefault) for (var e = 0,
            f = this.length; e < f; e++) d.event.remove(this[e], a, b);
            else for (var c in a) this.unbind(c, a[c]);
            return this
        },
        delegate: function(a, b, c, d) {
            return this.live(b, c, d, a)
        },
        undelegate: function(a, b, c) {
            return arguments.length === 0 ? this.unbind("live") : this.die(b, null, c, a)
        },
        trigger: function(a, b) {
            return this.each(function() {
                d.event.trigger(a, b, this)
            })
        },
        triggerHandler: function(a, b) {
            if (this[0]) {
                var c = d.Event(a);
                c.preventDefault(),
                c.stopPropagation(),
                d.event.trigger(c, b, this[0]);
                return c.result
            }
        },
        toggle: function(a) {
            var b = arguments,
            c = 1;
            while (c < b.length) d.proxy(a, b[c++]);
            return this.click(d.proxy(a,
            function(e) {
                var f = (d._data(this, "lastToggle" + a.guid) || 0) % c;
                d._data(this, "lastToggle" + a.guid, f + 1),
                e.preventDefault();
                return b[f].apply(this, arguments) || !1
            }))
        },
        hover: function(a, b) {
            return this.mouseenter(a).mouseleave(b || a)
        }
    });
    var F = {
        focus: "focusin",
        blur: "focusout",
        mouseenter: "mouseover",
        mouseleave: "mouseout"
    };
    d.each(["live", "die"],
    function(a, c) {
        d.fn[c] = function(a, e, f, g) {
            var h, i = 0,
            j, k, l, m = g || this.selector,
            n = g ? this: d(this.context);
            if (typeof a === "object" && !a.preventDefault) {
                for (var o in a) n[c](o, e, a[o], m);
                return this
            }
            d.isFunction(e) && (f = e, e = b),
            a = (a || "").split(" ");
            while ((h = a[i++]) != null) {
                j = r.exec(h),
                k = "",
                j && (k = j[0], h = h.replace(r, ""));
                if (h === "hover") {
                    a.push("mouseenter" + k, "mouseleave" + k);
                    continue
                }
                l = h,
                h === "focus" || h === "blur" ? (a.push(F[h] + k), h = h + k) : h = (F[h] || h) + k;
                if (c === "live") for (var p = 0,
                q = n.length; p < q; p++) d.event.add(n[p], "live." + H(h, m), {
                    data: e,
                    selector: m,
                    handler: f,
                    origType: h,
                    origHandler: f,
                    preType: l
                });
                else n.unbind("live." + H(h, m), f)
            }
            return this
        }
    }),
    d.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error".split(" "),
    function(a, b) {
        d.fn[b] = function(a, c) {
            c == null && (c = a, a = null);
            return arguments.length > 0 ? this.bind(b, a, c) : this.trigger(b)
        },
        d.attrFn && (d.attrFn[b] = !0)
    }),
    function() {
        function u(a, b, c, d, e, f) {
            for (var g = 0,
            h = d.length; g < h; g++) {
                var i = d[g];
                if (i) {
                    var j = !1;
                    i = i[a];
                    while (i) {
                        if (i.sizcache === c) {
                            j = d[i.sizset];
                            break
                        }
                        if (i.nodeType === 1) {
                            f || (i.sizcache = c, i.sizset = g);
                            if (typeof b !== "string") {
                                if (i === b) {
                                    j = !0;
                                    break
                                }
                            } else if (k.filter(b, [i]).length > 0) {
                                j = i;
                                break
                            }
                        }
                        i = i[a]
                    }
                    d[g] = j
                }
            }
        }
        function t(a, b, c, d, e, f) {
            for (var g = 0,
            h = d.length; g < h; g++) {
                var i = d[g];
                if (i) {
                    var j = !1;
                    i = i[a];
                    while (i) {
                        if (i.sizcache === c) {
                            j = d[i.sizset];
                            break
                        }
                        i.nodeType === 1 && !f && (i.sizcache = c, i.sizset = g);
                        if (i.nodeName.toLowerCase() === b) {
                            j = i;
                            break
                        }
                        i = i[a]
                    }
                    d[g] = j
                }
            }
        }
        var a = /((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^\[\]]*\]|['"][^'"]*['"]|[^\[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?((?:.|\r|\n)*)/g,
        e = 0,
        f = Object.prototype.toString,
        g = !1,
        h = !0,
        i = /\\/g,
        j = /\W/; [0, 0].sort(function() {
            h = !1;
            return 0
        });
        var k = function(b, d, e, g) {
            e = e || [],
            d = d || c;
            var h = d;
            if (d.nodeType !== 1 && d.nodeType !== 9) return [];
            if (!b || typeof b !== "string") return e;
            var i, j, n, o, q, r, s, t, u = !0,
            w = k.isXML(d),
            x = [],
            y = b;
            do {
                a.exec(""), i = a.exec(y);
                if (i) {
                    y = i[3],
                    x.push(i[1]);
                    if (i[2]) {
                        o = i[3];
                        break
                    }
                }
            } while ( i );
            if (x.length > 1 && m.exec(b)) if (x.length === 2 && l.relative[x[0]]) j = v(x[0] + x[1], d);
            else {
                j = l.relative[x[0]] ? [d] : k(x.shift(), d);
                while (x.length) b = x.shift(),
                l.relative[b] && (b += x.shift()),
                j = v(b, j)
            } else { ! g && x.length > 1 && d.nodeType === 9 && !w && l.match.ID.test(x[0]) && !l.match.ID.test(x[x.length - 1]) && (q = k.find(x.shift(), d, w), d = q.expr ? k.filter(q.expr, q.set)[0] : q.set[0]);
                if (d) {
                    q = g ? {
                        expr: x.pop(),
                        set: p(g)
                    }: k.find(x.pop(), x.length === 1 && (x[0] === "~" || x[0] === "+") && d.parentNode ? d.parentNode: d, w),
                    j = q.expr ? k.filter(q.expr, q.set) : q.set,
                    x.length > 0 ? n = p(j) : u = !1;
                    while (x.length) r = x.pop(),
                    s = r,
                    l.relative[r] ? s = x.pop() : r = "",
                    s == null && (s = d),
                    l.relative[r](n, s, w)
                } else n = x = []
            }
            n || (n = j),
            n || k.error(r || b);
            if (f.call(n) === "[object Array]") if (u) if (d && d.nodeType === 1) for (t = 0; n[t] != null; t++) n[t] && (n[t] === !0 || n[t].nodeType === 1 && k.contains(d, n[t])) && e.push(j[t]);
            else for (t = 0; n[t] != null; t++) n[t] && n[t].nodeType === 1 && e.push(j[t]);
            else e.push.apply(e, n);
            else p(n, e);
            o && (k(o, h, e, g), k.uniqueSort(e));
            return e
        };
        k.uniqueSort = function(a) {
            if (r) {
                g = h,
                a.sort(r);
                if (g) for (var b = 1; b < a.length; b++) a[b] === a[b - 1] && a.splice(b--, 1)
            }
            return a
        },
        k.matches = function(a, b) {
            return k(a, null, null, b)
        },
        k.matchesSelector = function(a, b) {
            return k(b, null, null, [a]).length > 0
        },
        k.find = function(a, b, c) {
            var d;
            if (!a) return [];
            for (var e = 0,
            f = l.order.length; e < f; e++) {
                var g, h = l.order[e];
                if (g = l.leftMatch[h].exec(a)) {
                    var j = g[1];
                    g.splice(1, 1);
                    if (j.substr(j.length - 1) !== "\\") {
                        g[1] = (g[1] || "").replace(i, ""),
                        d = l.find[h](g, b, c);
                        if (d != null) {
                            a = a.replace(l.match[h], "");
                            break
                        }
                    }
                }
            }
            d || (d = typeof b.getElementsByTagName !== "undefined" ? b.getElementsByTagName("*") : []);
            return {
                set: d,
                expr: a
            }
        },
        k.filter = function(a, c, d, e) {
            var f, g, h = a,
            i = [],
            j = c,
            m = c && c[0] && k.isXML(c[0]);
            while (a && c.length) {
                for (var n in l.filter) if ((f = l.leftMatch[n].exec(a)) != null && f[2]) {
                    var o, p, q = l.filter[n],
                    r = f[1];
                    g = !1,
                    f.splice(1, 1);
                    if (r.substr(r.length - 1) === "\\") continue;
                    j === i && (i = []);
                    if (l.preFilter[n]) {
                        f = l.preFilter[n](f, j, d, i, e, m);
                        if (f) {
                            if (f === !0) continue
                        } else g = o = !0
                    }
                    if (f) for (var s = 0; (p = j[s]) != null; s++) if (p) {
                        o = q(p, f, s, j);
                        var t = e ^ !!o;
                        d && o != null ? t ? g = !0 : j[s] = !1 : t && (i.push(p), g = !0)
                    }
                    if (o !== b) {
                        d || (j = i),
                        a = a.replace(l.match[n], "");
                        if (!g) return [];
                        break
                    }
                }
                if (a === h) if (g == null) k.error(a);
                else break;
                h = a
            }
            return j
        },
        k.error = function(a) {
            throw "Syntax error, unrecognized expression: " + a
        };
        var l = k.selectors = {
            order: ["ID", "NAME", "TAG"],
            match: {
                ID: /#((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,
                CLASS: /\.((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,
                NAME: /\[name=['"]*((?:[\w\u00c0-\uFFFF\-]|\\.)+)['"]*\]/,
                ATTR: /\[\s*((?:[\w\u00c0-\uFFFF\-]|\\.)+)\s*(?:(\S?=)\s*(?:(['"])(.*?)\3|(#?(?:[\w\u00c0-\uFFFF\-]|\\.)*)|)|)\s*\]/,
                TAG: /^((?:[\w\u00c0-\uFFFF\*\-]|\\.)+)/,
                CHILD: /:(only|nth|last|first)-child(?:\(\s*(even|odd|(?:[+\-]?\d+|(?:[+\-]?\d*)?n\s*(?:[+\-]\s*\d+)?))\s*\))?/,
                POS: /:(nth|eq|gt|lt|first|last|even|odd)(?:\((\d*)\))?(?=[^\-]|$)/,
                PSEUDO: /:((?:[\w\u00c0-\uFFFF\-]|\\.)+)(?:\((['"]?)((?:\([^\)]+\)|[^\(\)]*)+)\2\))?/
            },
            leftMatch: {},
            attrMap: {
                "class": "className",
                "for": "htmlFor"
            },
            attrHandle: {
                href: function(a) {
                    return a.getAttribute("href")
                },
                type: function(a) {
                    return a.getAttribute("type")
                }
            },
            relative: {
                "+": function(a, b) {
                    var c = typeof b === "string",
                    d = c && !j.test(b),
                    e = c && !d;
                    d && (b = b.toLowerCase());
                    for (var f = 0,
                    g = a.length,
                    h; f < g; f++) if (h = a[f]) {
                        while ((h = h.previousSibling) && h.nodeType !== 1) {}
                        a[f] = e || h && h.nodeName.toLowerCase() === b ? h || !1 : h === b
                    }
                    e && k.filter(b, a, !0)
                },
                ">": function(a, b) {
                    var c, d = typeof b === "string",
                    e = 0,
                    f = a.length;
                    if (d && !j.test(b)) {
                        b = b.toLowerCase();
                        for (; e < f; e++) {
                            c = a[e];
                            if (c) {
                                var g = c.parentNode;
                                a[e] = g.nodeName.toLowerCase() === b ? g: !1
                            }
                        }
                    } else {
                        for (; e < f; e++) c = a[e],
                        c && (a[e] = d ? c.parentNode: c.parentNode === b);
                        d && k.filter(b, a, !0)
                    }
                },
                "": function(a, b, c) {
                    var d, f = e++,
                    g = u;
                    typeof b === "string" && !j.test(b) && (b = b.toLowerCase(), d = b, g = t),
                    g("parentNode", b, f, a, d, c)
                },
                "~": function(a, b, c) {
                    var d, f = e++,
                    g = u;
                    typeof b === "string" && !j.test(b) && (b = b.toLowerCase(), d = b, g = t),
                    g("previousSibling", b, f, a, d, c)
                }
            },
            find: {
                ID: function(a, b, c) {
                    if (typeof b.getElementById !== "undefined" && !c) {
                        var d = b.getElementById(a[1]);
                        return d && d.parentNode ? [d] : []
                    }
                },
                NAME: function(a, b) {
                    if (typeof b.getElementsByName !== "undefined") {
                        var c = [],
                        d = b.getElementsByName(a[1]);
                        for (var e = 0,
                        f = d.length; e < f; e++) d[e].getAttribute("name") === a[1] && c.push(d[e]);
                        return c.length === 0 ? null: c
                    }
                },
                TAG: function(a, b) {
                    if (typeof b.getElementsByTagName !== "undefined") return b.getElementsByTagName(a[1])
                }
            },
            preFilter: {
                CLASS: function(a, b, c, d, e, f) {
                    a = " " + a[1].replace(i, "") + " ";
                    if (f) return a;
                    for (var g = 0,
                    h; (h = b[g]) != null; g++) h && (e ^ (h.className && (" " + h.className + " ").replace(/[\t\n\r]/g, " ").indexOf(a) >= 0) ? c || d.push(h) : c && (b[g] = !1));
                    return ! 1
                },
                ID: function(a) {
                    return a[1].replace(i, "")
                },
                TAG: function(a, b) {
                    return a[1].replace(i, "").toLowerCase()
                },
                CHILD: function(a) {
                    if (a[1] === "nth") {
                        a[2] || k.error(a[0]),
                        a[2] = a[2].replace(/^\+|\s*/g, "");
                        var b = /(-?)(\d*)(?:n([+\-]?\d*))?/.exec(a[2] === "even" && "2n" || a[2] === "odd" && "2n+1" || !/\D/.test(a[2]) && "0n+" + a[2] || a[2]);
                        a[2] = b[1] + (b[2] || 1) - 0,
                        a[3] = b[3] - 0
                    } else a[2] && k.error(a[0]);
                    a[0] = e++;
                    return a
                },
                ATTR: function(a, b, c, d, e, f) {
                    var g = a[1] = a[1].replace(i, ""); ! f && l.attrMap[g] && (a[1] = l.attrMap[g]),
                    a[4] = (a[4] || a[5] || "").replace(i, ""),
                    a[2] === "~=" && (a[4] = " " + a[4] + " ");
                    return a
                },
                PSEUDO: function(b, c, d, e, f) {
                    if (b[1] === "not") if ((a.exec(b[3]) || "").length > 1 || /^\w/.test(b[3])) b[3] = k(b[3], null, null, c);
                    else {
                        var g = k.filter(b[3], c, d, !0 ^ f);
                        d || e.push.apply(e, g);
                        return ! 1
                    } else if (l.match.POS.test(b[0]) || l.match.CHILD.test(b[0])) return ! 0;
                    return b
                },
                POS: function(a) {
                    a.unshift(!0);
                    return a
                }
            },
            filters: {
                enabled: function(a) {
                    return a.disabled === !1 && a.type !== "hidden"
                },
                disabled: function(a) {
                    return a.disabled === !0
                },
                checked: function(a) {
                    return a.checked === !0
                },
                selected: function(a) {
                    a.parentNode && a.parentNode.selectedIndex;
                    return a.selected === !0
                },
                parent: function(a) {
                    return !! a.firstChild
                },
                empty: function(a) {
                    return ! a.firstChild
                },
                has: function(a, b, c) {
                    return !! k(c[3], a).length
                },
                header: function(a) {
                    return /h\d/i.test(a.nodeName)
                },
                text: function(a) {
                    var b = a.getAttribute("type"),
                    c = a.type;
                    return "text" === c && (b === c || b === null)
                },
                radio: function(a) {
                    return "radio" === a.type
                },
                checkbox: function(a) {
                    return "checkbox" === a.type
                },
                file: function(a) {
                    return "file" === a.type
                },
                password: function(a) {
                    return "password" === a.type
                },
                submit: function(a) {
                    return "submit" === a.type
                },
                image: function(a) {
                    return "image" === a.type
                },
                reset: function(a) {
                    return "reset" === a.type
                },
                button: function(a) {
                    return "button" === a.type || a.nodeName.toLowerCase() === "button"
                },
                input: function(a) {
                    return /input|select|textarea|button/i.test(a.nodeName)
                }
            },
            setFilters: {
                first: function(a, b) {
                    return b === 0
                },
                last: function(a, b, c, d) {
                    return b === d.length - 1
                },
                even: function(a, b) {
                    return b % 2 === 0
                },
                odd: function(a, b) {
                    return b % 2 === 1
                },
                lt: function(a, b, c) {
                    return b < c[3] - 0
                },
                gt: function(a, b, c) {
                    return b > c[3] - 0
                },
                nth: function(a, b, c) {
                    return c[3] - 0 === b
                },
                eq: function(a, b, c) {
                    return c[3] - 0 === b
                }
            },
            filter: {
                PSEUDO: function(a, b, c, d) {
                    var e = b[1],
                    f = l.filters[e];
                    if (f) return f(a, c, b, d);
                    if (e === "contains") return (a.textContent || a.innerText || k.getText([a]) || "").indexOf(b[3]) >= 0;
                    if (e === "not") {
                        var g = b[3];
                        for (var h = 0,
                        i = g.length; h < i; h++) if (g[h] === a) return ! 1;
                        return ! 0
                    }
                    k.error(e)
                },
                CHILD: function(a, b) {
                    var c = b[1],
                    d = a;
                    switch (c) {
                    case "only":
                    case "first":
                        while (d = d.previousSibling) if (d.nodeType === 1) return ! 1;
                        if (c === "first") return ! 0;
                        d = a;
                    case "last":
                        while (d = d.nextSibling) if (d.nodeType === 1) return ! 1;
                        return ! 0;
                    case "nth":
                        var e = b[2],
                        f = b[3];
                        if (e === 1 && f === 0) return ! 0;
                        var g = b[0],
                        h = a.parentNode;
                        if (h && (h.sizcache !== g || !a.nodeIndex)) {
                            var i = 0;
                            for (d = h.firstChild; d; d = d.nextSibling) d.nodeType === 1 && (d.nodeIndex = ++i);
                            h.sizcache = g
                        }
                        var j = a.nodeIndex - f;
                        return e === 0 ? j === 0 : j % e === 0 && j / e >= 0
                    }
                },
                ID: function(a, b) {
                    return a.nodeType === 1 && a.getAttribute("id") === b
                },
                TAG: function(a, b) {
                    return b === "*" && a.nodeType === 1 || a.nodeName.toLowerCase() === b
                },
                CLASS: function(a, b) {
                    return (" " + (a.className || a.getAttribute("class")) + " ").indexOf(b) > -1
                },
                ATTR: function(a, b) {
                    var c = b[1],
                    d = l.attrHandle[c] ? l.attrHandle[c](a) : a[c] != null ? a[c] : a.getAttribute(c),
                    e = d + "",
                    f = b[2],
                    g = b[4];
                    return d == null ? f === "!=": f === "=" ? e === g: f === "*=" ? e.indexOf(g) >= 0 : f === "~=" ? (" " + e + " ").indexOf(g) >= 0 : g ? f === "!=" ? e !== g: f === "^=" ? e.indexOf(g) === 0 : f === "$=" ? e.substr(e.length - g.length) === g: f === "|=" ? e === g || e.substr(0, g.length + 1) === g + "-": !1 : e && d !== !1
                },
                POS: function(a, b, c, d) {
                    var e = b[2],
                    f = l.setFilters[e];
                    if (f) return f(a, c, b, d)
                }
            }
        },
        m = l.match.POS,
        n = function(a, b) {
            return "\\" + (b - 0 + 1)
        };
        for (var o in l.match) l.match[o] = new RegExp(l.match[o].source + /(?![^\[]*\])(?![^\(]*\))/.source),
        l.leftMatch[o] = new RegExp(/(^(?:.|\r|\n)*?)/.source + l.match[o].source.replace(/\\(\d+)/g, n));
        var p = function(a, b) {
            a = Array.prototype.slice.call(a, 0);
            if (b) {
                b.push.apply(b, a);
                return b
            }
            return a
        };
        try {
            Array.prototype.slice.call(c.documentElement.childNodes, 0)[0].nodeType
        } catch(q) {
            p = function(a, b) {
                var c = 0,
                d = b || [];
                if (f.call(a) === "[object Array]") Array.prototype.push.apply(d, a);
                else if (typeof a.length === "number") for (var e = a.length; c < e; c++) d.push(a[c]);
                else for (; a[c]; c++) d.push(a[c]);
                return d
            }
        }
        var r, s;
        c.documentElement.compareDocumentPosition ? r = function(a, b) {
            if (a === b) {
                g = !0;
                return 0
            }
            if (!a.compareDocumentPosition || !b.compareDocumentPosition) return a.compareDocumentPosition ? -1 : 1;
            return a.compareDocumentPosition(b) & 4 ? -1 : 1
        }: (r = function(a, b) {
            var c, d, e = [],
            f = [],
            h = a.parentNode,
            i = b.parentNode,
            j = h;
            if (a === b) {
                g = !0;
                return 0
            }
            if (h === i) return s(a, b);
            if (!h) return - 1;
            if (!i) return 1;
            while (j) e.unshift(j),
            j = j.parentNode;
            j = i;
            while (j) f.unshift(j),
            j = j.parentNode;
            c = e.length,
            d = f.length;
            for (var k = 0; k < c && k < d; k++) if (e[k] !== f[k]) return s(e[k], f[k]);
            return k === c ? s(a, f[k], -1) : s(e[k], b, 1)
        },
        s = function(a, b, c) {
            if (a === b) return c;
            var d = a.nextSibling;
            while (d) {
                if (d === b) return - 1;
                d = d.nextSibling
            }
            return 1
        }),
        k.getText = function(a) {
            var b = "",
            c;
            for (var d = 0; a[d]; d++) c = a[d],
            c.nodeType === 3 || c.nodeType === 4 ? b += c.nodeValue: c.nodeType !== 8 && (b += k.getText(c.childNodes));
            return b
        },
        function() {
            var a = c.createElement("div"),
            d = "script" + (new Date).getTime(),
            e = c.documentElement;
            a.innerHTML = "<a name='" + d + "'/>",
            e.insertBefore(a, e.firstChild),
            c.getElementById(d) && (l.find.ID = function(a, c, d) {
                if (typeof c.getElementById !== "undefined" && !d) {
                    var e = c.getElementById(a[1]);
                    return e ? e.id === a[1] || typeof e.getAttributeNode !== "undefined" && e.getAttributeNode("id").nodeValue === a[1] ? [e] : b: []
                }
            },
            l.filter.ID = function(a, b) {
                var c = typeof a.getAttributeNode !== "undefined" && a.getAttributeNode("id");
                return a.nodeType === 1 && c && c.nodeValue === b
            }),
            e.removeChild(a),
            e = a = null
        } (),
        function() {
            var a = c.createElement("div");
            a.appendChild(c.createComment("")),
            a.getElementsByTagName("*").length > 0 && (l.find.TAG = function(a, b) {
                var c = b.getElementsByTagName(a[1]);
                if (a[1] === "*") {
                    var d = [];
                    for (var e = 0; c[e]; e++) c[e].nodeType === 1 && d.push(c[e]);
                    c = d
                }
                return c
            }),
            a.innerHTML = "<a href='#'></a>",
            a.firstChild && typeof a.firstChild.getAttribute !== "undefined" && a.firstChild.getAttribute("href") !== "#" && (l.attrHandle.href = function(a) {
                return a.getAttribute("href", 2)
            }),
            a = null
        } (),
        c.querySelectorAll &&
        function() {
            var a = k,
            b = c.createElement("div"),
            d = "__sizzle__";
            b.innerHTML = "<p class='TEST'></p>";
            if (!b.querySelectorAll || b.querySelectorAll(".TEST").length !== 0) {
                k = function(b, e, f, g) {
                    e = e || c;
                    if (!g && !k.isXML(e)) {
                        var h = /^(\w+$)|^\.([\w\-]+$)|^#([\w\-]+$)/.exec(b);
                        if (h && (e.nodeType === 1 || e.nodeType === 9)) {
                            if (h[1]) return p(e.getElementsByTagName(b), f);
                            if (h[2] && l.find.CLASS && e.getElementsByClassName) return p(e.getElementsByClassName(h[2]), f)
                        }
                        if (e.nodeType === 9) {
                            if (b === "body" && e.body) return p([e.body], f);
                            if (h && h[3]) {
                                var i = e.getElementById(h[3]);
                                if (!i || !i.parentNode) return p([], f);
                                if (i.id === h[3]) return p([i], f)
                            }
                            try {
                                return p(e.querySelectorAll(b), f)
                            } catch(j) {}
                        } else if (e.nodeType === 1 && e.nodeName.toLowerCase() !== "object") {
                            var m = e,
                            n = e.getAttribute("id"),
                            o = n || d,
                            q = e.parentNode,
                            r = /^\s*[+~]/.test(b);
                            n ? o = o.replace(/'/g, "\\$&") : e.setAttribute("id", o),
                            r && q && (e = e.parentNode);
                            try {
                                if (!r || q) return p(e.querySelectorAll("[id='" + o + "'] " + b), f)
                            } catch(s) {} finally {
                                n || m.removeAttribute("id")
                            }
                        }
                    }
                    return a(b, e, f, g)
                };
                for (var e in a) k[e] = a[e];
                b = null
            }
        } (),
        function() {
            var a = c.documentElement,
            b = a.matchesSelector || a.mozMatchesSelector || a.webkitMatchesSelector || a.msMatchesSelector;
            if (b) {
                var d = !b.call(c.createElement("div"), "div"),
                e = !1;
                try {
                    b.call(c.documentElement, "[test!='']:sizzle")
                } catch(f) {
                    e = !0
                }
                k.matchesSelector = function(a, c) {
                    c = c.replace(/\=\s*([^'"\]]*)\s*\]/g, "='$1']");
                    if (!k.isXML(a)) try {
                        if (e || !l.match.PSEUDO.test(c) && !/!=/.test(c)) {
                            var f = b.call(a, c);
                            if (f || !d || a.document && a.document.nodeType !== 11) return f
                        }
                    } catch(g) {}
                    return k(c, null, null, [a]).length > 0
                }
            }
        } (),
        function() {
            var a = c.createElement("div");
            a.innerHTML = "<div class='test e'></div><div class='test'></div>";
            if (a.getElementsByClassName && a.getElementsByClassName("e").length !== 0) {
                a.lastChild.className = "e";
                if (a.getElementsByClassName("e").length === 1) return;
                l.order.splice(1, 0, "CLASS"),
                l.find.CLASS = function(a, b, c) {
                    if (typeof b.getElementsByClassName !== "undefined" && !c) return b.getElementsByClassName(a[1])
                },
                a = null
            }
        } (),
        c.documentElement.contains ? k.contains = function(a, b) {
            return a !== b && (a.contains ? a.contains(b) : !0)
        }: c.documentElement.compareDocumentPosition ? k.contains = function(a, b) {
            return !! (a.compareDocumentPosition(b) & 16)
        }: k.contains = function() {
            return ! 1
        },
        k.isXML = function(a) {
            var b = (a ? a.ownerDocument || a: 0).documentElement;
            return b ? b.nodeName !== "HTML": !1
        };
        var v = function(a, b) {
            var c, d = [],
            e = "",
            f = b.nodeType ? [b] : b;
            while (c = l.match.PSEUDO.exec(a)) e += c[0],
            a = a.replace(l.match.PSEUDO, "");
            a = l.relative[a] ? a + "*": a;
            for (var g = 0,
            h = f.length; g < h; g++) k(a, f[g], d);
            return k.filter(e, d)
        };
        d.find = k,
        d.expr = k.selectors,
        d.expr[":"] = d.expr.filters,
        d.unique = k.uniqueSort,
        d.text = k.getText,
        d.isXMLDoc = k.isXML,
        d.contains = k.contains
    } ();
    var I = /Until$/,
    J = /^(?:parents|prevUntil|prevAll)/,
    K = /,/,
    L = /^.[^:#\[\.,]*$/,
    M = Array.prototype.slice,
    N = d.expr.match.POS,
    O = {
        children: !0,
        contents: !0,
        next: !0,
        prev: !0
    };
    d.fn.extend({
        find: function(a) {
            var b = this.pushStack("", "find", a),
            c = 0;
            for (var e = 0,
            f = this.length; e < f; e++) {
                c = b.length,
                d.find(a, this[e], b);
                if (e > 0) for (var g = c; g < b.length; g++) for (var h = 0; h < c; h++) if (b[h] === b[g]) {
                    b.splice(g--, 1);
                    break
                }
            }
            return b
        },
        has: function(a) {
            var b = d(a);
            return this.filter(function() {
                for (var a = 0,
                c = b.length; a < c; a++) if (d.contains(this, b[a])) return ! 0
            })
        },
        not: function(a) {
            return this.pushStack(Q(this, a, !1), "not", a)
        },
        filter: function(a) {
            return this.pushStack(Q(this, a, !0), "filter", a)
        },
        is: function(a) {
            return !! a && d.filter(a, this).length > 0
        },
        closest: function(a, b) {
            var c = [],
            e,
            f,
            g = this[0];
            if (d.isArray(a)) {
                var h, i, j = {},
                k = 1;
                if (g && a.length) {
                    for (e = 0, f = a.length; e < f; e++) i = a[e],
                    j[i] || (j[i] = d.expr.match.POS.test(i) ? d(i, b || this.context) : i);
                    while (g && g.ownerDocument && g !== b) {
                        for (i in j) h = j[i],
                        (h.jquery ? h.index(g) > -1 : d(g).is(h)) && c.push({
                            selector: i,
                            elem: g,
                            level: k
                        });
                        g = g.parentNode,
                        k++
                    }
                }
                return c
            }
            var l = N.test(a) ? d(a, b || this.context) : null;
            for (e = 0, f = this.length; e < f; e++) {
                g = this[e];
                while (g) {
                    if (l ? l.index(g) > -1 : d.find.matchesSelector(g, a)) {
                        c.push(g);
                        break
                    }
                    g = g.parentNode;
                    if (!g || !g.ownerDocument || g === b) break
                }
            }
            c = c.length > 1 ? d.unique(c) : c;
            return this.pushStack(c, "closest", a)
        },
        index: function(a) {
            if (!a || typeof a === "string") return d.inArray(this[0], a ? d(a) : this.parent().children());
            return d.inArray(a.jquery ? a[0] : a, this)
        },
        add: function(a, b) {
            var c = typeof a === "string" ? d(a, b) : d.makeArray(a),
            e = d.merge(this.get(), c);
            return this.pushStack(P(c[0]) || P(e[0]) ? e: d.unique(e))
        },
        andSelf: function() {
            return this.add(this.prevObject)
        }
    }),
    d.each({
        parent: function(a) {
            var b = a.parentNode;
            return b && b.nodeType !== 11 ? b: null
        },
        parents: function(a) {
            return d.dir(a, "parentNode")
        },
        parentsUntil: function(a, b, c) {
            return d.dir(a, "parentNode", c)
        },
        next: function(a) {
            return d.nth(a, 2, "nextSibling")
        },
        prev: function(a) {
            return d.nth(a, 2, "previousSibling")
        },
        nextAll: function(a) {
            return d.dir(a, "nextSibling")
        },
        prevAll: function(a) {
            return d.dir(a, "previousSibling")
        },
        nextUntil: function(a, b, c) {
            return d.dir(a, "nextSibling", c)
        },
        prevUntil: function(a, b, c) {
            return d.dir(a, "previousSibling", c)
        },
        siblings: function(a) {
            return d.sibling(a.parentNode.firstChild, a)
        },
        children: function(a) {
            return d.sibling(a.firstChild)
        },
        contents: function(a) {
            return d.nodeName(a, "iframe") ? a.contentDocument || a.contentWindow.document: d.makeArray(a.childNodes)
        }
    },
    function(a, b) {
        d.fn[a] = function(c, e) {
            var f = d.map(this, b, c),
            g = M.call(arguments);
            I.test(a) || (e = c),
            e && typeof e === "string" && (f = d.filter(e, f)),
            f = this.length > 1 && !O[a] ? d.unique(f) : f,
            (this.length > 1 || K.test(e)) && J.test(a) && (f = f.reverse());
            return this.pushStack(f, a, g.join(","))
        }
    }),
    d.extend({
        filter: function(a, b, c) {
            c && (a = ":not(" + a + ")");
            return b.length === 1 ? d.find.matchesSelector(b[0], a) ? [b[0]] : [] : d.find.matches(a, b)
        },
        dir: function(a, c, e) {
            var f = [],
            g = a[c];
            while (g && g.nodeType !== 9 && (e === b || g.nodeType !== 1 || !d(g).is(e))) g.nodeType === 1 && f.push(g),
            g = g[c];
            return f
        },
        nth: function(a, b, c, d) {
            b = b || 1;
            var e = 0;
            for (; a; a = a[c]) if (a.nodeType === 1 && ++e === b) break;
            return a
        },
        sibling: function(a, b) {
            var c = [];
            for (; a; a = a.nextSibling) a.nodeType === 1 && a !== b && c.push(a);
            return c
        }
    });
    var R = / jQuery\d+="(?:\d+|null)"/g,
    S = /^\s+/,
    T = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/ig,
    U = /<([\w:]+)/,
    V = /<tbody/i,
    W = /<|&#?\w+;/,
    X = /<(?:script|object|embed|option|style)/i,
    Y = /checked\s*(?:[^=]|=\s*.checked.)/i,
    Z = {
        option: [1, "<select multiple='multiple'>", "</select>"],
        legend: [1, "<fieldset>", "</fieldset>"],
        thead: [1, "<table>", "</table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
        area: [1, "<map>", "</map>"],
        _default: [0, "", ""]
    };
    Z.optgroup = Z.option,
    Z.tbody = Z.tfoot = Z.colgroup = Z.caption = Z.thead,
    Z.th = Z.td,
    d.support.htmlSerialize || (Z._default = [1, "div<div>", "</div>"]),
    d.fn.extend({
        text: function(a) {
            if (d.isFunction(a)) return this.each(function(b) {
                var c = d(this);
                c.text(a.call(this, b, c.text()))
            });
            if (typeof a !== "object" && a !== b) return this.empty().append((this[0] && this[0].ownerDocument || c).createTextNode(a));
            return d.text(this)
        },
        wrapAll: function(a) {
            if (d.isFunction(a)) return this.each(function(b) {
                d(this).wrapAll(a.call(this, b))
            });
            if (this[0]) {
                var b = d(a, this[0].ownerDocument).eq(0).clone(!0);
                this[0].parentNode && b.insertBefore(this[0]),
                b.map(function() {
                    var a = this;
                    while (a.firstChild && a.firstChild.nodeType === 1) a = a.firstChild;
                    return a
                }).append(this)
            }
            return this
        },
        wrapInner: function(a) {
            if (d.isFunction(a)) return this.each(function(b) {
                d(this).wrapInner(a.call(this, b))
            });
            return this.each(function() {
                var b = d(this),
                c = b.contents();
                c.length ? c.wrapAll(a) : b.append(a)
            })
        },
        wrap: function(a) {
            return this.each(function() {
                d(this).wrapAll(a)
            })
        },
        unwrap: function() {
            return this.parent().each(function() {
                d.nodeName(this, "body") || d(this).replaceWith(this.childNodes)
            }).end()
        },
        append: function() {
            return this.domManip(arguments, !0,
            function(a) {
                this.nodeType === 1 && this.appendChild(a)
            })
        },
        prepend: function() {
            return this.domManip(arguments, !0,
            function(a) {
                this.nodeType === 1 && this.insertBefore(a, this.firstChild)
            })
        },
        before: function() {
            if (this[0] && this[0].parentNode) return this.domManip(arguments, !1,
            function(a) {
                this.parentNode.insertBefore(a, this)
            });
            if (arguments.length) {
                var a = d(arguments[0]);
                a.push.apply(a, this.toArray());
                return this.pushStack(a, "before", arguments)
            }
        },
        after: function() {
            if (this[0] && this[0].parentNode) return this.domManip(arguments, !1,
            function(a) {
                this.parentNode.insertBefore(a, this.nextSibling)
            });
            if (arguments.length) {
                var a = this.pushStack(this, "after", arguments);
                a.push.apply(a, d(arguments[0]).toArray());
                return a
            }
        },
        remove: function(a, b) {
            for (var c = 0,
            e; (e = this[c]) != null; c++) if (!a || d.filter(a, [e]).length) ! b && e.nodeType === 1 && (d.cleanData(e.getElementsByTagName("*")), d.cleanData([e])),
            e.parentNode && e.parentNode.removeChild(e);
            return this
        },
        empty: function() {
            for (var a = 0,
            b; (b = this[a]) != null; a++) {
                b.nodeType === 1 && d.cleanData(b.getElementsByTagName("*"));
                while (b.firstChild) b.removeChild(b.firstChild)
            }
            return this
        },
        clone: function(a, b) {
            a = a == null ? !1 : a,
            b = b == null ? a: b;
            return this.map(function() {
                return d.clone(this, a, b)
            })
        },
        html: function(a) {
            if (a === b) return this[0] && this[0].nodeType === 1 ? this[0].innerHTML.replace(R, "") : null;
            if (typeof a !== "string" || X.test(a) || !d.support.leadingWhitespace && S.test(a) || Z[(U.exec(a) || ["", ""])[1].toLowerCase()]) d.isFunction(a) ? this.each(function(b) {
                var c = d(this);
                c.html(a.call(this, b, c.html()))
            }) : this.empty().append(a);
            else {
                a = a.replace(T, "<$1></$2>");
                try {
                    for (var c = 0,
                    e = this.length; c < e; c++) this[c].nodeType === 1 && (d.cleanData(this[c].getElementsByTagName("*")), this[c].innerHTML = a)
                } catch(f) {
                    this.empty().append(a)
                }
            }
            return this
        },
        replaceWith: function(a) {
            if (this[0] && this[0].parentNode) {
                if (d.isFunction(a)) return this.each(function(b) {
                    var c = d(this),
                    e = c.html();
                    c.replaceWith(a.call(this, b, e))
                });
                typeof a !== "string" && (a = d(a).detach());
                return this.each(function() {
                    var b = this.nextSibling,
                    c = this.parentNode;
                    d(this).remove(),
                    b ? d(b).before(a) : d(c).append(a)
                })
            }
            return this.length ? this.pushStack(d(d.isFunction(a) ? a() : a), "replaceWith", a) : this
        },
        detach: function(a) {
            return this.remove(a, !0)
        },
        domManip: function(a, c, e) {
            var f, g, h, i, j = a[0],
            k = [];
            if (!d.support.checkClone && arguments.length === 3 && typeof j === "string" && Y.test(j)) return this.each(function() {
                d(this).domManip(a, c, e, !0)
            });
            if (d.isFunction(j)) return this.each(function(f) {
                var g = d(this);
                a[0] = j.call(this, f, c ? g.html() : b),
                g.domManip(a, c, e)
            });
            if (this[0]) {
                i = j && j.parentNode,
                d.support.parentNode && i && i.nodeType === 11 && i.childNodes.length === this.length ? f = {
                    fragment: i
                }: f = d.buildFragment(a, this, k),
                h = f.fragment,
                h.childNodes.length === 1 ? g = h = h.firstChild: g = h.firstChild;
                if (g) {
                    c = c && d.nodeName(g, "tr");
                    for (var l = 0,
                    m = this.length,
                    n = m - 1; l < m; l++) e.call(c ? $(this[l], g) : this[l], f.cacheable || m > 1 && l < n ? d.clone(h, !0, !0) : h)
                }
                k.length && d.each(k, bc)
            }
            return this
        }
    }),
    d.buildFragment = function(a, b, e) {
        var f, g, h, i = b && b[0] ? b[0].ownerDocument || b[0] : c;
        a.length === 1 && typeof a[0] === "string" && a[0].length < 512 && i === c && a[0].charAt(0) === "<" && !X.test(a[0]) && (d.support.checkClone || !Y.test(a[0])) && (g = !0, h = d.fragments[a[0]], h && (h !== 1 && (f = h))),
        f || (f = i.createDocumentFragment(), d.clean(a, i, f, e)),
        g && (d.fragments[a[0]] = h ? f: 1);
        return {
            fragment: f,
            cacheable: g
        }
    },
    d.fragments = {},
    d.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    },
    function(a, b) {
        d.fn[a] = function(c) {
            var e = [],
            f = d(c),
            g = this.length === 1 && this[0].parentNode;
            if (g && g.nodeType === 11 && g.childNodes.length === 1 && f.length === 1) {
                f[b](this[0]);
                return this
            }
            for (var h = 0,
            i = f.length; h < i; h++) {
                var j = (h > 0 ? this.clone(!0) : this).get();
                d(f[h])[b](j),
                e = e.concat(j)
            }
            return this.pushStack(e, a, f.selector)
        }
    }),
    d.extend({
        clone: function(a, b, c) {
            var e = a.cloneNode(!0),
            f,
            g,
            h;
            if ((!d.support.noCloneEvent || !d.support.noCloneChecked) && (a.nodeType === 1 || a.nodeType === 11) && !d.isXMLDoc(a)) {
                ba(a, e),
                f = bb(a),
                g = bb(e);
                for (h = 0; f[h]; ++h) ba(f[h], g[h])
            }
            if (b) {
                _(a, e);
                if (c) {
                    f = bb(a),
                    g = bb(e);
                    for (h = 0; f[h]; ++h) _(f[h], g[h])
                }
            }
            return e
        },
        clean: function(a, b, e, f) {
            b = b || c,
            typeof b.createElement === "undefined" && (b = b.ownerDocument || b[0] && b[0].ownerDocument || c);
            var g = [];
            for (var h = 0,
            i; (i = a[h]) != null; h++) {
                typeof i === "number" && (i += "");
                if (!i) continue;
                if (typeof i !== "string" || W.test(i)) {
                    if (typeof i === "string") {
                        i = i.replace(T, "<$1></$2>");
                        var j = (U.exec(i) || ["", ""])[1].toLowerCase(),
                        k = Z[j] || Z._default,
                        l = k[0],
                        m = b.createElement("div");
                        m.innerHTML = k[1] + i + k[2];
                        while (l--) m = m.lastChild;
                        if (!d.support.tbody) {
                            var n = V.test(i),
                            o = j === "table" && !n ? m.firstChild && m.firstChild.childNodes: k[1] === "<table>" && !n ? m.childNodes: [];
                            for (var p = o.length - 1; p >= 0; --p) d.nodeName(o[p], "tbody") && !o[p].childNodes.length && o[p].parentNode.removeChild(o[p])
                        } ! d.support.leadingWhitespace && S.test(i) && m.insertBefore(b.createTextNode(S.exec(i)[0]), m.firstChild),
                        i = m.childNodes
                    }
                } else i = b.createTextNode(i);
                i.nodeType ? g.push(i) : g = d.merge(g, i)
            }
            if (e) for (h = 0; g[h]; h++) ! f || !d.nodeName(g[h], "script") || g[h].type && g[h].type.toLowerCase() !== "text/javascript" ? (g[h].nodeType === 1 && g.splice.apply(g, [h + 1, 0].concat(d.makeArray(g[h].getElementsByTagName("script")))), e.appendChild(g[h])) : f.push(g[h].parentNode ? g[h].parentNode.removeChild(g[h]) : g[h]);
            return g
        },
        cleanData: function(a) {
            var b, c, e = d.cache,
            f = d.expando,
            g = d.event.special,
            h = d.support.deleteExpando;
            for (var i = 0,
            j; (j = a[i]) != null; i++) {
                if (j.nodeName && d.noData[j.nodeName.toLowerCase()]) continue;
                c = j[d.expando];
                if (c) {
                    b = e[c] && e[c][f];
                    if (b && b.events) {
                        for (var k in b.events) g[k] ? d.event.remove(j, k) : d.removeEvent(j, k, b.handle);
                        b.handle && (b.handle.elem = null)
                    }
                    h ? delete j[d.expando] : j.removeAttribute && j.removeAttribute(d.expando),
                    delete e[c]
                }
            }
        }
    });
    var bd = /alpha\([^)]*\)/i,
    be = /opacity=([^)]*)/,
    bf = /-([a-z])/ig,
    bg = /([A-Z]|^ms)/g,
    bh = /^-?\d+(?:px)?$/i,
    bi = /^-?\d/,
    bj = {
        position: "absolute",
        visibility: "hidden",
        display: "block"
    },
    bk = ["Left", "Right"],
    bl = ["Top", "Bottom"],
    bm,
    bn,
    bo,
    bp = function(a, b) {
        return b.toUpperCase()
    };
    d.fn.css = function(a, c) {
        if (arguments.length === 2 && c === b) return this;
        return d.access(this, a, c, !0,
        function(a, c, e) {
            return e !== b ? d.style(a, c, e) : d.css(a, c)
        })
    },
    d.extend({
        cssHooks: {
            opacity: {
                get: function(a, b) {
                    if (b) {
                        var c = bm(a, "opacity", "opacity");
                        return c === "" ? "1": c
                    }
                    return a.style.opacity
                }
            }
        },
        cssNumber: {
            zIndex: !0,
            fontWeight: !0,
            opacity: !0,
            zoom: !0,
            lineHeight: !0
        },
        cssProps: {
            "float": d.support.cssFloat ? "cssFloat": "styleFloat"
        },
        style: function(a, c, e, f) {
            if (a && a.nodeType !== 3 && a.nodeType !== 8 && a.style) {
                var g, h = d.camelCase(c),
                i = a.style,
                j = d.cssHooks[h];
                c = d.cssProps[h] || h;
                if (e === b) {
                    if (j && "get" in j && (g = j.get(a, !1, f)) !== b) return g;
                    return i[c]
                }
                if (typeof e === "number" && isNaN(e) || e == null) return;
                typeof e === "number" && !d.cssNumber[h] && (e += "px");
                if (!j || !("set" in j) || (e = j.set(a, e)) !== b) try {
                    i[c] = e
                } catch(k) {}
            }
        },
        css: function(a, c, e) {
            var f, g = d.camelCase(c),
            h = d.cssHooks[g];
            c = d.cssProps[g] || g;
            if (h && "get" in h && (f = h.get(a, !0, e)) !== b) return f;
            if (bm) return bm(a, c, g)
        },
        swap: function(a, b, c) {
            var d = {};
            for (var e in b) d[e] = a.style[e],
            a.style[e] = b[e];
            c.call(a);
            for (e in b) a.style[e] = d[e]
        },
        camelCase: function(a) {
            return a.replace(bf, bp)
        }
    }),
    d.curCSS = d.css,
    d.each(["height", "width"],
    function(a, b) {
        d.cssHooks[b] = {
            get: function(a, c, e) {
                var f;
                if (c) {
                    a.offsetWidth !== 0 ? f = bq(a, b, e) : d.swap(a, bj,
                    function() {
                        f = bq(a, b, e)
                    });
                    if (f <= 0) {
                        f = bm(a, b, b),
                        f === "0px" && bo && (f = bo(a, b, b));
                        if (f != null) return f === "" || f === "auto" ? "0px": f
                    }
                    if (f < 0 || f == null) {
                        f = a.style[b];
                        return f === "" || f === "auto" ? "0px": f
                    }
                    return typeof f === "string" ? f: f + "px"
                }
            },
            set: function(a, b) {
                if (!bh.test(b)) return b;
                b = parseFloat(b);
                if (b >= 0) return b + "px"
            }
        }
    }),
    d.support.opacity || (d.cssHooks.opacity = {
        get: function(a, b) {
            return be.test((b && a.currentStyle ? a.currentStyle.filter: a.style.filter) || "") ? parseFloat(RegExp.$1) / 100 + "": b ? "1": ""
        },
        set: function(a, b) {
            var c = a.style;
            c.zoom = 1;
            var e = d.isNaN(b) ? "": "alpha(opacity=" + b * 100 + ")",
            f = c.filter || "";
            c.filter = bd.test(f) ? f.replace(bd, e) : c.filter + " " + e
        }
    }),
    d(function() {
        d.support.reliableMarginRight || (d.cssHooks.marginRight = {
            get: function(a, b) {
                var c;
                d.swap(a, {
                    display: "inline-block"
                },
                function() {
                    b ? c = bm(a, "margin-right", "marginRight") : c = a.style.marginRight
                });
                return c
            }
        })
    }),
    c.defaultView && c.defaultView.getComputedStyle && (bn = function(a, c, e) {
        var f, g, h;
        e = e.replace(bg, "-$1").toLowerCase();
        if (! (g = a.ownerDocument.defaultView)) return b;
        if (h = g.getComputedStyle(a, null)) f = h.getPropertyValue(e),
        f === "" && !d.contains(a.ownerDocument.documentElement, a) && (f = d.style(a, e));
        return f
    }),
    c.documentElement.currentStyle && (bo = function(a, b) {
        var c, d = a.currentStyle && a.currentStyle[b],
        e = a.runtimeStyle && a.runtimeStyle[b],
        f = a.style; ! bh.test(d) && bi.test(d) && (c = f.left, e && (a.runtimeStyle.left = a.currentStyle.left), f.left = b === "fontSize" ? "1em": d || 0, d = f.pixelLeft + "px", f.left = c, e && (a.runtimeStyle.left = e));
        return d === "" ? "auto": d
    }),
    bm = bn || bo,
    d.expr && d.expr.filters && (d.expr.filters.hidden = function(a) {
        var b = a.offsetWidth,
        c = a.offsetHeight;
        return b === 0 && c === 0 || !d.support.reliableHiddenOffsets && (a.style.display || d.css(a, "display")) === "none"
    },
    d.expr.filters.visible = function(a) {
        return ! d.expr.filters.hidden(a)
    });
    var br = /%20/g,
    bs = /\[\]$/,
    bt = /\r?\n/g,
    bu = /#.*$/,
    bv = /^(.*?):[ \t]*([^\r\n]*)\r?$/mg,
    bw = /^(?:color|date|datetime|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i,
    bx = /^(?:about|app|app\-storage|.+\-extension|file|widget):$/,
    by = /^(?:GET|HEAD)$/,
    bz = /^\/\//,
    bA = /\?/,
    bB = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,
    bC = /^(?:select|textarea)/i,
    bD = /\s+/,
    bE = /([?&])_=[^&]*/,
    bF = /(^|\-)([a-z])/g,
    bG = function(a, b, c) {
        return b + c.toUpperCase()
    },
    bH = /^([\w\+\.\-]+:)(?:\/\/([^\/?#:]*)(?::(\d+))?)?/,
    bI = d.fn.load,
    bJ = {},
    bK = {},
    bL,
    bM;
    try {
        bL = c.location.href
    } catch(bN) {
        bL = c.createElement("a"),
        bL.href = "",
        bL = bL.href
    }
    bM = bH.exec(bL.toLowerCase()) || [],
    d.fn.extend({
        load: function(a, c, e) {
            if (typeof a !== "string" && bI) return bI.apply(this, arguments);
            if (!this.length) return this;
            var f = a.indexOf(" ");
            if (f >= 0) {
                var g = a.slice(f, a.length);
                a = a.slice(0, f)
            }
            var h = "GET";
            c && (d.isFunction(c) ? (e = c, c = b) : typeof c === "object" && (c = d.param(c, d.ajaxSettings.traditional), h = "POST"));
            var i = this;
            d.ajax({
                url: a,
                type: h,
                dataType: "html",
                data: c,
                complete: function(a, b, c) {
                    c = a.responseText,
                    a.isResolved() && (a.done(function(a) {
                        c = a
                    }), i.html(g ? d("<div>").append(c.replace(bB, "")).find(g) : c)),
                    e && i.each(e, [c, b, a])
                }
            });
            return this
        },
        serialize: function() {
            return d.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                return this.elements ? d.makeArray(this.elements) : this
            }).filter(function() {
                return this.name && !this.disabled && (this.checked || bC.test(this.nodeName) || bw.test(this.type))
            }).map(function(a, b) {
                var c = d(this).val();
                return c == null ? null: d.isArray(c) ? d.map(c,
                function(a, c) {
                    return {
                        name: b.name,
                        value: a.replace(bt, "\r\n")
                    }
                }) : {
                    name: b.name,
                    value: c.replace(bt, "\r\n")
                }
            }).get()
        }
    }),
    d.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "),
    function(a, b) {
        d.fn[b] = function(a) {
            return this.bind(b, a)
        }
    }),
    d.each(["get", "post"],
    function(a, c) {
        d[c] = function(a, e, f, g) {
            d.isFunction(e) && (g = g || f, f = e, e = b);
            return d.ajax({
                type: c,
                url: a,
                data: e,
                success: f,
                dataType: g
            })
        }
    }),
    d.extend({
        getScript: function(a, c) {
            return d.get(a, b, c, "script")
        },
        getJSON: function(a, b, c) {
            return d.get(a, b, c, "json")
        },
        ajaxSetup: function(a, b) {
            b ? d.extend(!0, a, d.ajaxSettings, b) : (b = a, a = d.extend(!0, d.ajaxSettings, b));
            for (var c in {
                context: 1,
                url: 1
            }) c in b ? a[c] = b[c] : c in d.ajaxSettings && (a[c] = d.ajaxSettings[c]);
            return a
        },
        ajaxSettings: {
            url: bL,
            isLocal: bx.test(bM[1]),
            global: !0,
            type: "GET",
            contentType: "application/x-www-form-urlencoded",
            processData: !0,
            async: !0,
            accepts: {
                xml: "application/xml, text/xml",
                html: "text/html",
                text: "text/plain",
                json: "application/json, text/javascript",
                "*": "*/*"
            },
            contents: {
                xml: /xml/,
                html: /html/,
                json: /json/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText"
            },
            converters: {
                "* text": a.String,
                "text html": !0,
                "text json": d.parseJSON,
                "text xml": d.parseXML
            }
        },
        ajaxPrefilter: bO(bJ),
        ajaxTransport: bO(bK),
        ajax: function(a, c) {
            function v(a, c, l, n) {
                if (r !== 2) {
                    r = 2,
                    p && clearTimeout(p),
                    o = b,
                    m = n || "",
                    u.readyState = a ? 4 : 0;
                    var q, t, v, w = l ? bR(e, u, l) : b,
                    x,
                    y;
                    if (a >= 200 && a < 300 || a === 304) {
                        if (e.ifModified) {
                            if (x = u.getResponseHeader("Last-Modified")) d.lastModified[k] = x;
                            if (y = u.getResponseHeader("Etag")) d.etag[k] = y
                        }
                        if (a === 304) c = "notmodified",
                        q = !0;
                        else try {
                            t = bS(e, w),
                            c = "success",
                            q = !0
                        } catch(z) {
                            c = "parsererror",
                            v = z
                        }
                    } else {
                        v = c;
                        if (!c || a) c = "error",
                        a < 0 && (a = 0)
                    }
                    u.status = a,
                    u.statusText = c,
                    q ? h.resolveWith(f, [t, c, u]) : h.rejectWith(f, [u, c, v]),
                    u.statusCode(j),
                    j = b,
                    s && g.trigger("ajax" + (q ? "Success": "Error"), [u, e, q ? t: v]),
                    i.resolveWith(f, [u, c]),
                    s && (g.trigger("ajaxComplete", [u, e]), --d.active || d.event.trigger("ajaxStop"))
                }
            }
            typeof a === "object" && (c = a, a = b),
            c = c || {};
            var e = d.ajaxSetup({},
            c),
            f = e.context || e,
            g = f !== e && (f.nodeType || f instanceof d) ? d(f) : d.event,
            h = d.Deferred(),
            i = d._Deferred(),
            j = e.statusCode || {},
            k,
            l = {},
            m,
            n,
            o,
            p,
            q,
            r = 0,
            s,
            t,
            u = {
                readyState: 0,
                setRequestHeader: function(a, b) {
                    r || (l[a.toLowerCase().replace(bF, bG)] = b);
                    return this
                },
                getAllResponseHeaders: function() {
                    return r === 2 ? m: null
                },
                getResponseHeader: function(a) {
                    var c;
                    if (r === 2) {
                        if (!n) {
                            n = {};
                            while (c = bv.exec(m)) n[c[1].toLowerCase()] = c[2]
                        }
                        c = n[a.toLowerCase()]
                    }
                    return c === b ? null: c
                },
                overrideMimeType: function(a) {
                    r || (e.mimeType = a);
                    return this
                },
                abort: function(a) {
                    a = a || "abort",
                    o && o.abort(a),
                    v(0, a);
                    return this
                }
            };
            h.promise(u),
            u.success = u.done,
            u.error = u.fail,
            u.complete = i.done,
            u.statusCode = function(a) {
                if (a) {
                    var b;
                    if (r < 2) for (b in a) j[b] = [j[b], a[b]];
                    else b = a[u.status],
                    u.then(b, b)
                }
                return this
            },
            e.url = ((a || e.url) + "").replace(bu, "").replace(bz, bM[1] + "//"),
            e.dataTypes = d.trim(e.dataType || "*").toLowerCase().split(bD),
            e.crossDomain == null && (q = bH.exec(e.url.toLowerCase()), e.crossDomain = q && (q[1] != bM[1] || q[2] != bM[2] || (q[3] || (q[1] === "http:" ? 80 : 443)) != (bM[3] || (bM[1] === "http:" ? 80 : 443)))),
            e.data && e.processData && typeof e.data !== "string" && (e.data = d.param(e.data, e.traditional)),
            bP(bJ, e, c, u);
            if (r === 2) return ! 1;
            s = e.global,
            e.type = e.type.toUpperCase(),
            e.hasContent = !by.test(e.type),
            s && d.active++===0 && d.event.trigger("ajaxStart");
            if (!e.hasContent) {
                e.data && (e.url += (bA.test(e.url) ? "&": "?") + e.data),
                k = e.url;
                if (e.cache === !1) {
                    var w = d.now(),
                    x = e.url.replace(bE, "$1_=" + w);
                    e.url = x + (x === e.url ? (bA.test(e.url) ? "&": "?") + "_=" + w: "")
                }
            }
            if (e.data && e.hasContent && e.contentType !== !1 || c.contentType) l["Content-Type"] = e.contentType;
            e.ifModified && (k = k || e.url, d.lastModified[k] && (l["If-Modified-Since"] = d.lastModified[k]), d.etag[k] && (l["If-None-Match"] = d.etag[k])),
            l.Accept = e.dataTypes[0] && e.accepts[e.dataTypes[0]] ? e.accepts[e.dataTypes[0]] + (e.dataTypes[0] !== "*" ? ", */*; q=0.01": "") : e.accepts["*"];
            for (t in e.headers) u.setRequestHeader(t, e.headers[t]);
            if (e.beforeSend && (e.beforeSend.call(f, u, e) === !1 || r === 2)) {
                u.abort();
                return ! 1
            }
            for (t in {
                success: 1,
                error: 1,
                complete: 1
            }) u[t](e[t]);
            o = bP(bK, e, c, u);
            if (o) {
                u.readyState = 1,
                s && g.trigger("ajaxSend", [u, e]),
                e.async && e.timeout > 0 && (p = setTimeout(function() {
                    u.abort("timeout")
                },
                e.timeout));
                try {
                    r = 1,
                    o.send(l, v)
                } catch(y) {
                    status < 2 ? v( - 1, y) : d.error(y)
                }
            } else v( - 1, "No Transport");
            return u
        },
        param: function(a, c) {
            var e = [],
            f = function(a, b) {
                b = d.isFunction(b) ? b() : b,
                e[e.length] = encodeURIComponent(a) + "=" + encodeURIComponent(b)
            };
            c === b && (c = d.ajaxSettings.traditional);
            if (d.isArray(a) || a.jquery && !d.isPlainObject(a)) d.each(a,
            function() {
                f(this.name, this.value)
            });
            else for (var g in a) bQ(g, a[g], c, f);
            return e.join("&").replace(br, "+")
        }
    }),
    d.extend({
        active: 0,
        lastModified: {},
        etag: {}
    });
    var bT = d.now(),
    bU = /(\=)\?(&|$)|\?\?/i;
    d.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            return d.expando + "_" + bT++
        }
    }),
    d.ajaxPrefilter("json jsonp",
    function(b, c, e) {
        var f = typeof b.data === "string";
        if (b.dataTypes[0] === "jsonp" || c.jsonpCallback || c.jsonp != null || b.jsonp !== !1 && (bU.test(b.url) || f && bU.test(b.data))) {
            var g, h = b.jsonpCallback = d.isFunction(b.jsonpCallback) ? b.jsonpCallback() : b.jsonpCallback,
            i = a[h],
            j = b.url,
            k = b.data,
            l = "$1" + h + "$2",
            m = function() {
                a[h] = i,
                g && d.isFunction(i) && a[h](g[0])
            };
            b.jsonp !== !1 && (j = j.replace(bU, l), b.url === j && (f && (k = k.replace(bU, l)), b.data === k && (j += (/\?/.test(j) ? "&": "?") + b.jsonp + "=" + h))),
            b.url = j,
            b.data = k,
            a[h] = function(a) {
                g = [a]
            },
            e.then(m, m),
            b.converters["script json"] = function() {
                g || d.error(h + " was not called");
                return g[0]
            },
            b.dataTypes[0] = "json";
            return "script"
        }
    }),
    d.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /javascript|ecmascript/
        },
        converters: {
            "text script": function(a) {
                d.globalEval(a);
                return a
            }
        }
    }),
    d.ajaxPrefilter("script",
    function(a) {
        a.cache === b && (a.cache = !1),
        a.crossDomain && (a.type = "GET", a.global = !1)
    }),
    d.ajaxTransport("script",
    function(a) {
        if (a.crossDomain) {
            var d, e = c.head || c.getElementsByTagName("head")[0] || c.documentElement;
            return {
                send: function(f, g) {
                    d = c.createElement("script"),
                    d.async = "async",
                    a.scriptCharset && (d.charset = a.scriptCharset),
                    d.src = a.url,
                    d.onload = d.onreadystatechange = function(a, c) {
                        if (!d.readyState || /loaded|complete/.test(d.readyState)) d.onload = d.onreadystatechange = null,
                        e && d.parentNode && e.removeChild(d),
                        d = b,
                        c || g(200, "success")
                    },
                    e.insertBefore(d, e.firstChild)
                },
                abort: function() {
                    d && d.onload(0, 1)
                }
            }
        }
    });
    var bV = d.now(),
    bW,
    bX;
    d.ajaxSettings.xhr = a.ActiveXObject ?
    function() {
        return ! this.isLocal && bZ() || b$()
    }: bZ,
    bX = d.ajaxSettings.xhr(),
    d.support.ajax = !!bX,
    d.support.cors = bX && "withCredentials" in bX,
    bX = b,
    d.support.ajax && d.ajaxTransport(function(a) {
        if (!a.crossDomain || d.support.cors) {
            var c;
            return {
                send: function(e, f) {
                    var g = a.xhr(),
                    h,
                    i;
                    a.username ? g.open(a.type, a.url, a.async, a.username, a.password) : g.open(a.type, a.url, a.async);
                    if (a.xhrFields) for (i in a.xhrFields) g[i] = a.xhrFields[i];
                    a.mimeType && g.overrideMimeType && g.overrideMimeType(a.mimeType),
                    !a.crossDomain && !e["X-Requested-With"] && (e["X-Requested-With"] = "XMLHttpRequest");
                    try {
                        for (i in e) g.setRequestHeader(i, e[i])
                    } catch(j) {}
                    g.send(a.hasContent && a.data || null),
                    c = function(e, i) {
                        var j, k, l, m, n;
                        try {
                            if (c && (i || g.readyState === 4)) {
                                c = b,
                                h && (g.onreadystatechange = d.noop, delete bW[h]);
                                if (i) g.readyState !== 4 && g.abort();
                                else {
                                    j = g.status,
                                    l = g.getAllResponseHeaders(),
                                    m = {},
                                    n = g.responseXML,
                                    n && n.documentElement && (m.xml = n),
                                    m.text = g.responseText;
                                    try {
                                        k = g.statusText
                                    } catch(o) {
                                        k = ""
                                    }
                                    j || !a.isLocal || a.crossDomain ? j === 1223 && (j = 204) : j = m.text ? 200 : 404
                                }
                            }
                        } catch(p) {
                            i || f( - 1, p)
                        }
                        m && f(j, k, m, l)
                    },
                    a.async && g.readyState !== 4 ? (bW || (bW = {},
                    bY()), h = bV++, g.onreadystatechange = bW[h] = c) : c()
                },
                abort: function() {
                    c && c(0, 1)
                }
            }
        }
    });
    var b_ = {},
    ca = /^(?:toggle|show|hide)$/,
    cb = /^([+\-]=)?([\d+.\-]+)([a-z%]*)$/i,
    cc, cd = [["height", "marginTop", "marginBottom", "paddingTop", "paddingBottom"], ["width", "marginLeft", "marginRight", "paddingLeft", "paddingRight"], ["opacity"]];
    d.fn.extend({
        show: function(a, b, c) {
            var e, f;
            if (a || a === 0) return this.animate(ce("show", 3), a, b, c);
            for (var g = 0,
            h = this.length; g < h; g++) e = this[g],
            f = e.style.display,
            !d._data(e, "olddisplay") && f === "none" && (f = e.style.display = ""),
            f === "" && d.css(e, "display") === "none" && d._data(e, "olddisplay", cf(e.nodeName));
            for (g = 0; g < h; g++) {
                e = this[g],
                f = e.style.display;
                if (f === "" || f === "none") e.style.display = d._data(e, "olddisplay") || ""
            }
            return this
        },
        hide: function(a, b, c) {
            if (a || a === 0) return this.animate(ce("hide", 3), a, b, c);
            for (var e = 0,
            f = this.length; e < f; e++) {
                var g = d.css(this[e], "display");
                g !== "none" && !d._data(this[e], "olddisplay") && d._data(this[e], "olddisplay", g)
            }
            for (e = 0; e < f; e++) this[e].style.display = "none";
            return this
        },
        _toggle: d.fn.toggle,
        toggle: function(a, b, c) {
            var e = typeof a === "boolean";
            d.isFunction(a) && d.isFunction(b) ? this._toggle.apply(this, arguments) : a == null || e ? this.each(function() {
                var b = e ? a: d(this).is(":hidden");
                d(this)[b ? "show": "hide"]()
            }) : this.animate(ce("toggle", 3), a, b, c);
            return this
        },
        fadeTo: function(a, b, c, d) {
            return this.filter(":hidden").css("opacity", 0).show().end().animate({
                opacity: b
            },
            a, c, d)
        },
        animate: function(a, b, c, e) {
            var f = d.speed(b, c, e);
            if (d.isEmptyObject(a)) return this.each(f.complete);
            return this[f.queue === !1 ? "each": "queue"](function() {
                var b = d.extend({},
                f),
                c,
                e = this.nodeType === 1,
                g = e && d(this).is(":hidden"),
                h = this;
                for (c in a) {
                    var i = d.camelCase(c);
                    c !== i && (a[i] = a[c], delete a[c], c = i);
                    if (a[c] === "hide" && g || a[c] === "show" && !g) return b.complete.call(this);
                    if (e && (c === "height" || c === "width")) {
                        b.overflow = [this.style.overflow, this.style.overflowX, this.style.overflowY];
                        if (d.css(this, "display") === "inline" && d.css(this, "float") === "none") if (d.support.inlineBlockNeedsLayout) {
                            var j = cf(this.nodeName);
                            j === "inline" ? this.style.display = "inline-block": (this.style.display = "inline", this.style.zoom = 1)
                        } else this.style.display = "inline-block"
                    }
                    d.isArray(a[c]) && ((b.specialEasing = b.specialEasing || {})[c] = a[c][1], a[c] = a[c][0])
                }
                b.overflow != null && (this.style.overflow = "hidden"),
                b.curAnim = d.extend({},
                a),
                d.each(a,
                function(c, e) {
                    var f = new d.fx(h, b, c);
                    if (ca.test(e)) f[e === "toggle" ? g ? "show": "hide": e](a);
                    else {
                        var i = cb.exec(e),
                        j = f.cur();
                        if (i) {
                            var k = parseFloat(i[2]),
                            l = i[3] || (d.cssNumber[c] ? "": "px");
                            l !== "px" && (d.style(h, c, (k || 1) + l), j = (k || 1) / f.cur() * j, d.style(h, c, j + l)),
                            i[1] && (k = (i[1] === "-=" ? -1 : 1) * k + j),
                            f.custom(j, k, l)
                        } else f.custom(j, e, "")
                    }
                });
                return ! 0
            })
        },
        stop: function(a, b) {
            var c = d.timers;
            a && this.queue([]),
            this.each(function() {
                for (var a = c.length - 1; a >= 0; a--) c[a].elem === this && (b && c[a](!0), c.splice(a, 1))
            }),
            b || this.dequeue();
            return this
        }
    }),
    d.each({
        slideDown: ce("show", 1),
        slideUp: ce("hide", 1),
        slideToggle: ce("toggle", 1),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    },
    function(a, b) {
        d.fn[a] = function(a, c, d) {
            return this.animate(b, a, c, d)
        }
    }),
    d.extend({
        speed: function(a, b, c) {
            var e = a && typeof a === "object" ? d.extend({},
            a) : {
                complete: c || !c && b || d.isFunction(a) && a,
                duration: a,
                easing: c && b || b && !d.isFunction(b) && b
            };
            e.duration = d.fx.off ? 0 : typeof e.duration === "number" ? e.duration: e.duration in d.fx.speeds ? d.fx.speeds[e.duration] : d.fx.speeds._default,
            e.old = e.complete,
            e.complete = function() {
                e.queue !== !1 && d(this).dequeue(),
                d.isFunction(e.old) && e.old.call(this)
            };
            return e
        },
        easing: {
            linear: function(a, b, c, d) {
                return c + d * a
            },
            swing: function(a, b, c, d) {
                return ( - Math.cos(a * Math.PI) / 2 + .5) * d + c
            }
        },
        timers: [],
        fx: function(a, b, c) {
            this.options = b,
            this.elem = a,
            this.prop = c,
            b.orig || (b.orig = {})
        }
    }),
    d.fx.prototype = {
        update: function() {
            this.options.step && this.options.step.call(this.elem, this.now, this),
            (d.fx.step[this.prop] || d.fx.step._default)(this)
        },
        cur: function() {
            if (this.elem[this.prop] != null && (!this.elem.style || this.elem.style[this.prop] == null)) return this.elem[this.prop];
            var a, b = d.css(this.elem, this.prop);
            return isNaN(a = parseFloat(b)) ? !b || b === "auto" ? 0 : b: a
        },
        custom: function(a, b, c) {
            function g(a) {
                return e.step(a)
            }
            var e = this,
            f = d.fx;
            this.startTime = d.now(),
            this.start = a,
            this.end = b,
            this.unit = c || this.unit || (d.cssNumber[this.prop] ? "": "px"),
            this.now = this.start,
            this.pos = this.state = 0,
            g.elem = this.elem,
            g() && d.timers.push(g) && !cc && (cc = setInterval(f.tick, f.interval))
        },
        show: function() {
            this.options.orig[this.prop] = d.style(this.elem, this.prop),
            this.options.show = !0,
            this.custom(this.prop === "width" || this.prop === "height" ? 1 : 0, this.cur()),
            d(this.elem).show()
        },
        hide: function() {
            this.options.orig[this.prop] = d.style(this.elem, this.prop),
            this.options.hide = !0,
            this.custom(this.cur(), 0)
        },
        step: function(a) {
            var b = d.now(),
            c = !0;
            if (a || b >= this.options.duration + this.startTime) {
                this.now = this.end,
                this.pos = this.state = 1,
                this.update(),
                this.options.curAnim[this.prop] = !0;
                for (var e in this.options.curAnim) this.options.curAnim[e] !== !0 && (c = !1);
                if (c) {
                    if (this.options.overflow != null && !d.support.shrinkWrapBlocks) {
                        var f = this.elem,
                        g = this.options;
                        d.each(["", "X", "Y"],
                        function(a, b) {
                            f.style["overflow" + b] = g.overflow[a]
                        })
                    }
                    this.options.hide && d(this.elem).hide();
                    if (this.options.hide || this.options.show) for (var h in this.options.curAnim) d.style(this.elem, h, this.options.orig[h]);
                    this.options.complete.call(this.elem)
                }
                return ! 1
            }
            var i = b - this.startTime;
            this.state = i / this.options.duration;
            var j = this.options.specialEasing && this.options.specialEasing[this.prop],
            k = this.options.easing || (d.easing.swing ? "swing": "linear");
            this.pos = d.easing[j || k](this.state, i, 0, 1, this.options.duration),
            this.now = this.start + (this.end - this.start) * this.pos,
            this.update();
            return ! 0
        }
    },
    d.extend(d.fx, {
        tick: function() {
            var a = d.timers;
            for (var b = 0; b < a.length; b++) a[b]() || a.splice(b--, 1);
            a.length || d.fx.stop()
        },
        interval: 13,
        stop: function() {
            clearInterval(cc),
            cc = null
        },
        speeds: {
            slow: 600,
            fast: 200,
            _default: 400
        },
        step: {
            opacity: function(a) {
                d.style(a.elem, "opacity", a.now)
            },
            _default: function(a) {
                a.elem.style && a.elem.style[a.prop] != null ? a.elem.style[a.prop] = (a.prop === "width" || a.prop === "height" ? Math.max(0, a.now) : a.now) + a.unit: a.elem[a.prop] = a.now
            }
        }
    }),
    d.expr && d.expr.filters && (d.expr.filters.animated = function(a) {
        return d.grep(d.timers,
        function(b) {
            return a === b.elem
        }).length
    });
    var cg = /^t(?:able|d|h)$/i,
    ch = /^(?:body|html)$/i;
    "getBoundingClientRect" in c.documentElement ? d.fn.offset = function(a) {
        var b = this[0],
        c;
        if (a) return this.each(function(b) {
            d.offset.setOffset(this, a, b)
        });
        if (!b || !b.ownerDocument) return null;
        if (b === b.ownerDocument.body) return d.offset.bodyOffset(b);
        try {
            c = b.getBoundingClientRect()
        } catch(e) {}
        var f = b.ownerDocument,
        g = f.documentElement;
        if (!c || !d.contains(g, b)) return c ? {
            top: c.top,
            left: c.left
        }: {
            top: 0,
            left: 0
        };
        var h = f.body,
        i = ci(f),
        j = g.clientTop || h.clientTop || 0,
        k = g.clientLeft || h.clientLeft || 0,
        l = i.pageYOffset || d.support.boxModel && g.scrollTop || h.scrollTop,
        m = i.pageXOffset || d.support.boxModel && g.scrollLeft || h.scrollLeft,
        n = c.top + l - j,
        o = c.left + m - k;
        return {
            top: n,
            left: o
        }
    }: d.fn.offset = function(a) {
        var b = this[0];
        if (a) return this.each(function(b) {
            d.offset.setOffset(this, a, b)
        });
        if (!b || !b.ownerDocument) return null;
        if (b === b.ownerDocument.body) return d.offset.bodyOffset(b);
        d.offset.initialize();
        var c, e = b.offsetParent,
        f = b,
        g = b.ownerDocument,
        h = g.documentElement,
        i = g.body,
        j = g.defaultView,
        k = j ? j.getComputedStyle(b, null) : b.currentStyle,
        l = b.offsetTop,
        m = b.offsetLeft;
        while ((b = b.parentNode) && b !== i && b !== h) {
            if (d.offset.supportsFixedPosition && k.position === "fixed") break;
            c = j ? j.getComputedStyle(b, null) : b.currentStyle,
            l -= b.scrollTop,
            m -= b.scrollLeft,
            b === e && (l += b.offsetTop, m += b.offsetLeft, d.offset.doesNotAddBorder && (!d.offset.doesAddBorderForTableAndCells || !cg.test(b.nodeName)) && (l += parseFloat(c.borderTopWidth) || 0, m += parseFloat(c.borderLeftWidth) || 0), f = e, e = b.offsetParent),
            d.offset.subtractsBorderForOverflowNotVisible && c.overflow !== "visible" && (l += parseFloat(c.borderTopWidth) || 0, m += parseFloat(c.borderLeftWidth) || 0),
            k = c
        }
        if (k.position === "relative" || k.position === "static") l += i.offsetTop,
        m += i.offsetLeft;
        d.offset.supportsFixedPosition && k.position === "fixed" && (l += Math.max(h.scrollTop, i.scrollTop), m += Math.max(h.scrollLeft, i.scrollLeft));
        return {
            top: l,
            left: m
        }
    },
    d.offset = {
        initialize: function() {
            var a = c.body,
            b = c.createElement("div"),
            e,
            f,
            g,
            h,
            i = parseFloat(d.css(a, "marginTop")) || 0,
            j = "<div style='position:absolute;top:0;left:0;margin:0;border:5px solid #000;padding:0;width:1px;height:1px;'><div></div></div><table style='position:absolute;top:0;left:0;margin:0;border:5px solid #000;padding:0;width:1px;height:1px;' cellpadding='0' cellspacing='0'><tr><td></td></tr></table>";
            d.extend(b.style, {
                position: "absolute",
                top: 0,
                left: 0,
                margin: 0,
                border: 0,
                width: "1px",
                height: "1px",
                visibility: "hidden"
            }),
            b.innerHTML = j,
            a.insertBefore(b, a.firstChild),
            e = b.firstChild,
            f = e.firstChild,
            h = e.nextSibling.firstChild.firstChild,
            this.doesNotAddBorder = f.offsetTop !== 5,
            this.doesAddBorderForTableAndCells = h.offsetTop === 5,
            f.style.position = "fixed",
            f.style.top = "20px",
            this.supportsFixedPosition = f.offsetTop === 20 || f.offsetTop === 15,
            f.style.position = f.style.top = "",
            e.style.overflow = "hidden",
            e.style.position = "relative",
            this.subtractsBorderForOverflowNotVisible = f.offsetTop === -5,
            this.doesNotIncludeMarginInBodyOffset = a.offsetTop !== i,
            a.removeChild(b),
            d.offset.initialize = d.noop
        },
        bodyOffset: function(a) {
            var b = a.offsetTop,
            c = a.offsetLeft;
            d.offset.initialize(),
            d.offset.doesNotIncludeMarginInBodyOffset && (b += parseFloat(d.css(a, "marginTop")) || 0, c += parseFloat(d.css(a, "marginLeft")) || 0);
            return {
                top: b,
                left: c
            }
        },
        setOffset: function(a, b, c) {
            var e = d.css(a, "position");
            e === "static" && (a.style.position = "relative");
            var f = d(a),
            g = f.offset(),
            h = d.css(a, "top"),
            i = d.css(a, "left"),
            j = (e === "absolute" || e === "fixed") && d.inArray("auto", [h, i]) > -1,
            k = {},
            l = {},
            m,
            n;
            j && (l = f.position()),
            m = j ? l.top: parseInt(h, 10) || 0,
            n = j ? l.left: parseInt(i, 10) || 0,
            d.isFunction(b) && (b = b.call(a, c, g)),
            b.top != null && (k.top = b.top - g.top + m),
            b.left != null && (k.left = b.left - g.left + n),
            "using" in b ? b.using.call(a, k) : f.css(k)
        }
    },
    d.fn.extend({
        position: function() {
            if (!this[0]) return null;
            var a = this[0],
            b = this.offsetParent(),
            c = this.offset(),
            e = ch.test(b[0].nodeName) ? {
                top: 0,
                left: 0
            }: b.offset();
            c.top -= parseFloat(d.css(a, "marginTop")) || 0,
            c.left -= parseFloat(d.css(a, "marginLeft")) || 0,
            e.top += parseFloat(d.css(b[0], "borderTopWidth")) || 0,
            e.left += parseFloat(d.css(b[0], "borderLeftWidth")) || 0;
            return {
                top: c.top - e.top,
                left: c.left - e.left
            }
        },
        offsetParent: function() {
            return this.map(function() {
                var a = this.offsetParent || c.body;
                while (a && (!ch.test(a.nodeName) && d.css(a, "position") === "static")) a = a.offsetParent;
                return a
            })
        }
    }),
    d.each(["Left", "Top"],
    function(a, c) {
        var e = "scroll" + c;
        d.fn[e] = function(c) {
            var f = this[0],
            g;
            if (!f) return null;
            if (c !== b) return this.each(function() {
                g = ci(this),
                g ? g.scrollTo(a ? d(g).scrollLeft() : c, a ? c: d(g).scrollTop()) : this[e] = c
            });
            g = ci(f);
            return g ? "pageXOffset" in g ? g[a ? "pageYOffset": "pageXOffset"] : d.support.boxModel && g.document.documentElement[e] || g.document.body[e] : f[e]
        }
    }),
    d.each(["Height", "Width"],
    function(a, c) {
        var e = c.toLowerCase();
        d.fn["inner" + c] = function() {
            return this[0] ? parseFloat(d.css(this[0], e, "padding")) : null
        },
        d.fn["outer" + c] = function(a) {
            return this[0] ? parseFloat(d.css(this[0], e, a ? "margin": "border")) : null
        },
        d.fn[e] = function(a) {
            var f = this[0];
            if (!f) return a == null ? null: this;
            if (d.isFunction(a)) return this.each(function(b) {
                var c = d(this);
                c[e](a.call(this, b, c[e]()))
            });
            if (d.isWindow(f)) {
                var g = f.document.documentElement["client" + c];
                return f.document.compatMode === "CSS1Compat" && g || f.document.body["client" + c] || g
            }
            if (f.nodeType === 9) return Math.max(f.documentElement["client" + c], f.body["scroll" + c], f.documentElement["scroll" + c], f.body["offset" + c], f.documentElement["offset" + c]);
            if (a === b) {
                var h = d.css(f, e),
                i = parseFloat(h);
                return d.isNaN(i) ? h: i
            }
            return this.css(e, typeof a === "string" ? a: a + "px")
        }
    }),
    a.jQuery = a.$ = d
})(window);
/*!
 * jQuery Form Plugin
 * version: 2.69 (06-APR-2011)
 * @requires jQuery v1.3.2 or later
 */
(function(b) {
    b.fn.ajaxSubmit = function(t) {
        if (!this.length) {
            a("ajaxSubmit: skipping submit process - no element selected");
            return this
        }
        if (typeof t == "function") {
            t = {
                success: t
            }
        }
        var h = this.attr("action");
        var d = (typeof h === "string") ? b.trim(h) : "";
        if (d) {
            d = (d.match(/^([^#]+)/) || [])[1]
        }
        d = d || window.location.href || "";
        t = b.extend(true, {
            url: d,
            success: b.ajaxSettings.success,
            type: this[0].getAttribute("method") || "GET",
            iframeSrc: /^https/i.test(window.location.href || "") ? "javascript:false": "about:blank"
        },
        t);
        var u = {};
        this.trigger("form-pre-serialize", [this, t, u]);
        if (u.veto) {
            a("ajaxSubmit: submit vetoed via form-pre-serialize trigger");
            return this
        }
        if (t.beforeSerialize && t.beforeSerialize(this, t) === false) {
            a("ajaxSubmit: submit aborted via beforeSerialize callback");
            return this
        }
        var f, p, m = this.formToArray(t.semantic);
        if (t.data) {
            t.extraData = t.data;
            for (f in t.data) {
                if (t.data[f] instanceof Array) {
                    for (var i in t.data[f]) {
                        m.push({
                            name: f,
                            value: t.data[f][i]
                        })
                    }
                } else {
                    p = t.data[f];
                    p = b.isFunction(p) ? p() : p;
                    m.push({
                        name: f,
                        value: p
                    })
                }
            }
        }
        if (t.beforeSubmit && t.beforeSubmit(m, this, t) === false) {
            a("ajaxSubmit: submit aborted via beforeSubmit callback");
            return this
        }
        this.trigger("form-submit-validate", [m, this, t, u]);
        if (u.veto) {
            a("ajaxSubmit: submit vetoed via form-submit-validate trigger");
            return this
        }
        var c = b.param(m);
        if (t.type.toUpperCase() == "GET") {
            t.url += (t.url.indexOf("?") >= 0 ? "&": "?") + c;
            t.data = null
        } else {
            t.data = c
        }
        var s = this,
        l = [];
        if (t.resetForm) {
            l.push(function() {
                s.resetForm()
            })
        }
        if (t.clearForm) {
            l.push(function() {
                s.clearForm()
            })
        }
        if (!t.dataType && t.target) {
            var r = t.success ||
            function() {};
            l.push(function(n) {
                var k = t.replaceTarget ? "replaceWith": "html";
                b(t.target)[k](n).each(r, arguments)
            })
        } else {
            if (t.success) {
                l.push(t.success)
            }
        }
        t.success = function(w, n, x) {
            var v = t.context || t;
            for (var q = 0,
            k = l.length; q < k; q++) {
                l[q].apply(v, [w, n, x || s, s])
            }
        };
        var g = b("input:file", this).length > 0;
        var e = "multipart/form-data";
        var j = (s.attr("enctype") == e || s.attr("encoding") == e);
        if (t.iframe !== false && (g || t.iframe || j)) {
            if (t.closeKeepAlive) {
                b.get(t.closeKeepAlive, o)
            } else {
                o()
            }
        } else {
            b.ajax(t)
        }
        this.trigger("form-submit-notify", [this, t]);
        return this;
        function o() {
            var v = s[0];
            if (b(":input[name=submit],:input[id=submit]", v).length) {
                alert('Error: Form elements must not have name or id of "submit".');
                return
            }
            var B = b.extend(true, {},
            b.ajaxSettings, t);
            B.context = B.context || B;
            var E = "jqFormIO" + (new Date().getTime()),
            z = "_" + E;
            var w = b('<iframe id="' + E + '" name="' + E + '" src="' + B.iframeSrc + '" />');
            var A = w[0];
            w.css({
                position: "absolute",
                top: "-1000px",
                left: "-1000px"
            });
            var x = {
                aborted: 0,
                responseText: null,
                responseXML: null,
                status: 0,
                statusText: "n/a",
                getAllResponseHeaders: function() {},
                getResponseHeader: function() {},
                setRequestHeader: function() {},
                abort: function() {
                    a("aborting upload...");
                    var n = "aborted";
                    this.aborted = 1;
                    w.attr("src", B.iframeSrc);
                    x.error = n;
                    B.error && B.error.call(B.context, x, "error", n);
                    I && b.event.trigger("ajaxError", [x, B, n]);
                    B.complete && B.complete.call(B.context, x, "error")
                }
            };
            var I = B.global;
            if (I && !b.active++) {
                b.event.trigger("ajaxStart")
            }
            if (I) {
                b.event.trigger("ajaxSend", [x, B])
            }
            if (B.beforeSend && B.beforeSend.call(B.context, x, B) === false) {
                if (B.global) {
                    b.active--
                }
                return
            }
            if (x.aborted) {
                return
            }
            var H = 0;
            var y = v.clk;
            if (y) {
                var F = y.name;
                if (F && !y.disabled) {
                    B.extraData = B.extraData || {};
                    B.extraData[F] = y.value;
                    if (y.type == "image") {
                        B.extraData[F + ".x"] = v.clk_x;
                        B.extraData[F + ".y"] = v.clk_y
                    }
                }
            }
            function G() {
                var O = s.attr("target"),
                M = s.attr("action");
                v.setAttribute("target", E);
                if (v.getAttribute("method") != "POST") {
                    v.setAttribute("method", "POST")
                }
                if (v.getAttribute("action") != B.url) {
                    v.setAttribute("action", B.url)
                }
                if (!B.skipEncodingOverride) {
                    s.attr({
                        encoding: "multipart/form-data",
                        enctype: "multipart/form-data"
                    })
                }
                if (B.timeout) {
                    setTimeout(function() {
                        H = true;
                        D()
                    },
                    B.timeout)
                }
                var N = [];
                try {
                    if (B.extraData) {
                        for (var P in B.extraData) {
                            N.push(b('<input type="hidden" name="' + P + '" value="' + B.extraData[P] + '" />').appendTo(v)[0])
                        }
                    }
                    w.appendTo("body");
                    A.attachEvent ? A.attachEvent("onload", D) : A.addEventListener("load", D, false);
                    v.submit()
                } finally {
                    v.setAttribute("action", M);
                    if (O) {
                        v.setAttribute("target", O)
                    } else {
                        s.removeAttr("target")
                    }
                    b(N).remove()
                }
            }
            if (B.forceSync) {
                G()
            } else {
                setTimeout(G, 10)
            }
            var K, L, J = 50;
            function D() {
                if (x.aborted) {
                    return
                }
                var R = A.contentWindow ? A.contentWindow.document: A.contentDocument ? A.contentDocument: A.document;
                if (!R || R.location.href == B.iframeSrc) {
                    if (!H) {
                        return
                    }
                }
                A.detachEvent ? A.detachEvent("onload", D) : A.removeEventListener("load", D, false);
                var N = true;
                try {
                    if (H) {
                        throw "timeout"
                    }
                    var S = B.dataType == "xml" || R.XMLDocument || b.isXMLDoc(R);
                    a("isXml=" + S);
                    if (!S && window.opera && (R.body == null || R.body.innerHTML == "")) {
                        if (--J) {
                            a("requeing onLoad callback, DOM not available");
                            setTimeout(D, 250);
                            return
                        }
                    }
                    x.responseText = R.body ? R.body.innerHTML: R.documentElement ? R.documentElement.innerHTML: null;
                    x.responseXML = R.XMLDocument ? R.XMLDocument: R;
                    x.getResponseHeader = function(U) {
                        var T = {
                            "content-type": B.dataType
                        };
                        return T[U]
                    };
                    var Q = /(json|script)/.test(B.dataType);
                    if (Q || B.textarea) {
                        var M = R.getElementsByTagName("textarea")[0];
                        if (M) {
                            x.responseText = M.value
                        } else {
                            if (Q) {
                                var P = R.getElementsByTagName("pre")[0];
                                var n = R.getElementsByTagName("body")[0];
                                if (P) {
                                    x.responseText = P.textContent
                                } else {
                                    if (n) {
                                        x.responseText = n.innerHTML
                                    }
                                }
                            }
                        }
                    } else {
                        if (B.dataType == "xml" && !x.responseXML && x.responseText != null) {
                            x.responseXML = C(x.responseText)
                        }
                    }
                    K = k(x, B.dataType, B)
                } catch(O) {
                    a("error caught:", O);
                    N = false;
                    x.error = O;
                    B.error && B.error.call(B.context, x, "error", O);
                    I && b.event.trigger("ajaxError", [x, B, O])
                }
                if (x.aborted) {
                    a("upload aborted");
                    N = false
                }
                if (N) {
                    B.success && B.success.call(B.context, K, "success", x);
                    I && b.event.trigger("ajaxSuccess", [x, B])
                }
                I && b.event.trigger("ajaxComplete", [x, B]);
                if (I && !--b.active) {
                    b.event.trigger("ajaxStop")
                }
                B.complete && B.complete.call(B.context, x, N ? "success": "error");
                setTimeout(function() {
                    w.removeData("form-plugin-onload");
                    w.remove();
                    x.responseXML = null
                },
                100)
            }
            var C = b.parseXML ||
            function(n, M) {
                if (window.ActiveXObject) {
                    M = new ActiveXObject("Microsoft.XMLDOM");
                    M.async = "false";
                    M.loadXML(n)
                } else {
                    M = (new DOMParser()).parseFromString(n, "text/xml")
                }
                return (M && M.documentElement && M.documentElement.nodeName != "parsererror") ? M: null
            };
            var q = b.parseJSON ||
            function(n) {
                return window["eval"]("(" + n + ")")
            };
            var k = function(Q, O, N) {
                var M = Q.getResponseHeader("content-type") || "",
                n = O === "xml" || !O && M.indexOf("xml") >= 0,
                P = n ? Q.responseXML: Q.responseText;
                if (n && P.documentElement.nodeName === "parsererror") {
                    b.error && b.error("parsererror")
                }
                if (N && N.dataFilter) {
                    P = N.dataFilter(P, O)
                }
                if (typeof P === "string") {
                    if (O === "json" || !O && M.indexOf("json") >= 0) {
                        P = q(P)
                    } else {
                        if (O === "script" || !O && M.indexOf("javascript") >= 0) {
                            b.globalEval(P)
                        }
                    }
                }
                return P
            }
        }
    };
    b.fn.ajaxForm = function(c) {
        if (this.length === 0) {
            var d = {
                s: this.selector,
                c: this.context
            };
            if (!b.isReady && d.s) {
                a("DOM not ready, queuing ajaxForm");
                b(function() {
                    b(d.s, d.c).ajaxForm(c)
                });
                return this
            }
            a("terminating; zero elements found by selector" + (b.isReady ? "": " (DOM not ready)"));
            return this
        }
        return this.ajaxFormUnbind().bind("submit.form-plugin",
        function(f) {
            if (!f.isDefaultPrevented()) {
                f.preventDefault();
                b(this).ajaxSubmit(c)
            }
        }).bind("click.form-plugin",
        function(j) {
            var i = j.target;
            var g = b(i);
            if (! (g.is(":submit,input:image"))) {
                var f = g.closest(":submit");
                if (f.length == 0) {
                    return
                }
                i = f[0]
            }
            var h = this;
            h.clk = i;
            if (i.type == "image") {
                if (j.offsetX != undefined) {
                    h.clk_x = j.offsetX;
                    h.clk_y = j.offsetY
                } else {
                    if (typeof b.fn.offset == "function") {
                        var k = g.offset();
                        h.clk_x = j.pageX - k.left;
                        h.clk_y = j.pageY - k.top
                    } else {
                        h.clk_x = j.pageX - i.offsetLeft;
                        h.clk_y = j.pageY - i.offsetTop
                    }
                }
            }
            setTimeout(function() {
                h.clk = h.clk_x = h.clk_y = null
            },
            100)
        })
    };
    b.fn.ajaxFormUnbind = function() {
        return this.unbind("submit.form-plugin click.form-plugin")
    };
    b.fn.formToArray = function(q) {
        var p = [];
        if (this.length === 0) {
            return p
        }
        var d = this[0];
        var g = q ? d.getElementsByTagName("*") : d.elements;
        if (!g) {
            return p
        }
        var k, h, f, r, e, m, c;
        for (k = 0, m = g.length; k < m; k++) {
            e = g[k];
            f = e.name;
            if (!f) {
                continue
            }
            if (q && d.clk && e.type == "image") {
                if (!e.disabled && d.clk == e) {
                    p.push({
                        name: f,
                        value: b(e).val()
                    });
                    p.push({
                        name: f + ".x",
                        value: d.clk_x
                    },
                    {
                        name: f + ".y",
                        value: d.clk_y
                    })
                }
                continue
            }
            r = b.fieldValue(e, true);
            if (r && r.constructor == Array) {
                for (h = 0, c = r.length; h < c; h++) {
                    p.push({
                        name: f,
                        value: r[h]
                    })
                }
            } else {
                if (r !== null && typeof r != "undefined") {
                    p.push({
                        name: f,
                        value: r
                    })
                }
            }
        }
        if (!q && d.clk) {
            var l = b(d.clk),
            o = l[0];
            f = o.name;
            if (f && !o.disabled && o.type == "image") {
                p.push({
                    name: f,
                    value: l.val()
                });
                p.push({
                    name: f + ".x",
                    value: d.clk_x
                },
                {
                    name: f + ".y",
                    value: d.clk_y
                })
            }
        }
        return p
    };
    b.fn.formSerialize = function(c) {
        return b.param(this.formToArray(c))
    };
    b.fn.fieldSerialize = function(d) {
        var c = [];
        this.each(function() {
            var h = this.name;
            if (!h) {
                return
            }
            var f = b.fieldValue(this, d);
            if (f && f.constructor == Array) {
                for (var g = 0,
                e = f.length; g < e; g++) {
                    c.push({
                        name: h,
                        value: f[g]
                    })
                }
            } else {
                if (f !== null && typeof f != "undefined") {
                    c.push({
                        name: this.name,
                        value: f
                    })
                }
            }
        });
        return b.param(c)
    };
    b.fn.fieldValue = function(h) {
        for (var g = [], e = 0, c = this.length; e < c; e++) {
            var f = this[e];
            var d = b.fieldValue(f, h);
            if (d === null || typeof d == "undefined" || (d.constructor == Array && !d.length)) {
                continue
            }
            d.constructor == Array ? b.merge(g, d) : g.push(d)
        }
        return g
    };
    b.fieldValue = function(c, j) {
        var e = c.name,
        p = c.type,
        q = c.tagName.toLowerCase();
        if (j === undefined) {
            j = true
        }
        if (j && (!e || c.disabled || p == "reset" || p == "button" || (p == "checkbox" || p == "radio") && !c.checked || (p == "submit" || p == "image") && c.form && c.form.clk != c || q == "select" && c.selectedIndex == -1)) {
            return null
        }
        if (q == "select") {
            var k = c.selectedIndex;
            if (k < 0) {
                return null
            }
            var m = [],
            d = c.options;
            var g = (p == "select-one");
            var l = (g ? k + 1 : d.length);
            for (var f = (g ? k: 0); f < l; f++) {
                var h = d[f];
                if (h.selected) {
                    var o = h.value;
                    if (!o) {
                        o = (h.attributes && h.attributes.value && !(h.attributes.value.specified)) ? h.text: h.value
                    }
                    if (g) {
                        return o
                    }
                    m.push(o)
                }
            }
            return m
        }
        return b(c).val()
    };
    b.fn.clearForm = function() {
        return this.each(function() {
            b("input,select,textarea", this).clearFields()
        })
    };
    b.fn.clearFields = b.fn.clearInputs = function() {
        return this.each(function() {
            var d = this.type,
            c = this.tagName.toLowerCase();
            if (d == "text" || d == "password" || c == "textarea") {
                this.value = ""
            } else {
                if (d == "checkbox" || d == "radio") {
                    this.checked = false
                } else {
                    if (c == "select") {
                        this.selectedIndex = -1
                    }
                }
            }
        })
    };
    b.fn.resetForm = function() {
        return this.each(function() {
            if (typeof this.reset == "function" || (typeof this.reset == "object" && !this.reset.nodeType)) {
                this.reset()
            }
        })
    };
    b.fn.enable = function(c) {
        if (c === undefined) {
            c = true
        }
        return this.each(function() {
            this.disabled = !c
        })
    };
    b.fn.selected = function(c) {
        if (c === undefined) {
            c = true
        }
        return this.each(function() {
            var d = this.type;
            if (d == "checkbox" || d == "radio") {
                this.checked = c
            } else {
                if (this.tagName.toLowerCase() == "option") {
                    var e = b(this).parent("select");
                    if (c && e[0] && e[0].type == "select-one") {
                        e.find("option").selected(false)
                    }
                    this.selected = c
                }
            }
        })
    };
    function a() {
        if (b.fn.ajaxSubmit.debug) {
            var c = "[jquery.form] " + Array.prototype.join.call(arguments, "");
            if (window.console && window.console.log) {
                window.console.log(c)
            } else {
                if (window.opera && window.opera.postError) {
                    window.opera.postError(c)
                }
            }
        }
    }
})(jQuery);
/*!
 * AJAX Upload ( http://valums.com/ajax-upload/ )
 * Copyright (c) Andris Valums
 * Licensed under the MIT license ( http://valums.com/mit-license/ )
 * Thanks to Gary Haran, David Mark, Corey Burns and others for contributions
 */
(function() {
    function log() {
        if (typeof(console) != "undefined" && typeof(console.log) == "function") {
            Array.prototype.unshift.call(arguments, "[Ajax Upload]");
            console.log(Array.prototype.join.call(arguments, " "))
        }
    }
    function addEvent(el, type, fn) {
        if (el.addEventListener) {
            el.addEventListener(type, fn, false)
        } else {
            if (el.attachEvent) {
                el.attachEvent("on" + type,
                function() {
                    fn.call(el)
                })
            } else {
                throw new Error("not supported or DOM not loaded")
            }
        }
    }
    function addResizeEvent(fn) {
        var timeout;
        addEvent(window, "resize",
        function() {
            if (timeout) {
                clearTimeout(timeout)
            }
            timeout = setTimeout(fn, 100)
        })
    }
    if (document.documentElement.getBoundingClientRect) {
        var getOffset = function(el) {
            var box = el.getBoundingClientRect();
            var doc = el.ownerDocument;
            var body = doc.body;
            var docElem = doc.documentElement;
            var clientTop = docElem.clientTop || body.clientTop || 0;
            var clientLeft = docElem.clientLeft || body.clientLeft || 0;
            var zoom = 1;
            if (body.getBoundingClientRect) {
                var bound = body.getBoundingClientRect();
                zoom = (bound.right - bound.left) / body.clientWidth
            }
            if (zoom > 1) {
                clientTop = 0;
                clientLeft = 0
            }
            var top = box.top / zoom + (window.pageYOffset || docElem && docElem.scrollTop / zoom || body.scrollTop / zoom) - clientTop,
            left = box.left / zoom + (window.pageXOffset || docElem && docElem.scrollLeft / zoom || body.scrollLeft / zoom) - clientLeft;
            return {
                top: top,
                left: left
            }
        }
    } else {
        var getOffset = function(el) {
            var top = 0,
            left = 0;
            do {
                top += el.offsetTop || 0;
                left += el.offsetLeft || 0;
                el = el.offsetParent
            } while ( el );
            return {
                left: left,
                top: top
            }
        }
    }
    function getBox(el) {
        var left, right, top, bottom;
        var offset = getOffset(el);
        left = offset.left;
        top = offset.top;
        right = left + el.offsetWidth;
        bottom = top + el.offsetHeight;
        return {
            left: left,
            right: right,
            top: top,
            bottom: bottom
        }
    }
    function addStyles(el, styles) {
        for (var name in styles) {
            if (styles.hasOwnProperty(name)) {
                el.style[name] = styles[name]
            }
        }
    }
    function copyLayout(from, to) {
        var box = getBox(from);
        addStyles(to, {
            position: "absolute",
            left: box.left + "px",
            top: box.top + "px",
            width: from.offsetWidth + "px",
            height: from.offsetHeight + "px"
        })
    }
    var toElement = (function() {
        var div = document.createElement("div");
        return function(html) {
            div.innerHTML = html;
            var el = div.firstChild;
            return div.removeChild(el)
        }
    })();
    var getUID = (function() {
        var id = 0;
        return function() {
            return "ValumsAjaxUpload" + id++
        }
    })();
    function fileFromPath(file) {
        return file.replace(/.*(\/|\\)/, "")
    }
    function getExt(file) {
        return ( - 1 !== file.indexOf(".")) ? file.replace(/.*[.]/, "") : ""
    }
    function hasClass(el, name) {
        var re = new RegExp("\\b" + name + "\\b");
        return re.test(el.className)
    }
    function addClass(el, name) {
        if (!hasClass(el, name)) {
            el.className += " " + name
        }
    }
    function removeClass(el, name) {
        var re = new RegExp("\\b" + name + "\\b");
        el.className = el.className.replace(re, "")
    }
    function removeNode(el) {
        el.parentNode.removeChild(el)
    }
    window.AjaxUpload = function(button, options) {
        this._settings = {
            action: "http://www.cygpm.com/js/upload.php",
            name: "userfile",
            data: {},
			multiple: false,
            autoSubmit: true,
            responseType: false,
            hoverClass: "hover",
            disabledClass: "disabled",
            onChange: function(file, extension) {},
            onSubmit: function(file, extension) {},
            onComplete: function(file, response) {}
        };
        for (var i in options) {
            if (options.hasOwnProperty(i)) {
                this._settings[i] = options[i]
            }
        }
        if (button.jquery) {
            button = button[0]
        } else {
            if (typeof button == "string") {
                if (/^#.*/.test(button)) {
                    button = button.slice(1)
                }
                button = document.getElementById(button)
            }
        }
        if (!button || button.nodeType !== 1) {
            throw new Error("Please make sure that you're passing a valid element")
        }
        if (button.nodeName.toUpperCase() == "A") {
            addEvent(button, "click",
            function(e) {
                if (e && e.preventDefault) {
                    e.preventDefault()
                } else {
                    if (window.event) {
                        window.event.returnValue = false
                    }
                }
            })
        }
        this._button = button;
        this._input = null;
        this._disabled = false;
        this.enable();
        this._rerouteClicks()
    };
    AjaxUpload.prototype = {
        setData: function(data) {
            this._settings.data = data
        },
        disable: function() {
            addClass(this._button, this._settings.disabledClass);
            this._disabled = true;
            var nodeName = this._button.nodeName.toUpperCase();
            if (nodeName == "INPUT" || nodeName == "BUTTON") {
                this._button.setAttribute("disabled", "disabled")
            }
            if (this._input) {
                this._input.parentNode.style.visibility = "hidden"
            }
        },
        enable: function() {
            removeClass(this._button, this._settings.disabledClass);
            this._button.removeAttribute("disabled");
            this._disabled = false
        },
        _createInput: function() {
            var self = this;
            var input = document.createElement("input");
            input.setAttribute("type", "file");
            input.setAttribute("name", this._settings.name);
			if(this._settings.multiple) input.setAttribute('multiple', 'multiple');
            addStyles(input, {
                position: "absolute",
                right: 0,
                margin: 0,
                padding: 0,
                fontSize: "480px",
                cursor: "pointer"
            });
            var div = document.createElement("div");
            addStyles(div, {
                display: "block",
                position: "absolute",
                overflow: "hidden",
                margin: 0,
                padding: 0,
                opacity: 0,
                direction: "ltr",
                zIndex: 2147483583
            });
            if (div.style.opacity !== "0") {
                if (typeof(div.filters) == "undefined") {
                    throw new Error("Opacity not supported by the browser")
                }
                div.style.filter = "alpha(opacity=0)"
            }
            addEvent(input, "change",
            function() {
                if (!input || input.value === "") {
                    return
                }
                var file = fileFromPath(input.value);
                if (false === self._settings.onChange.call(self, file, getExt(file))) {
                    self._clearInput();
                    return
                }
                if (self._settings.autoSubmit) {
                    self.submit()
                }
            });
            addEvent(input, "mouseover",
            function() {
                addClass(self._button, self._settings.hoverClass)
            });
            addEvent(input, "mouseout",
            function() {
                removeClass(self._button, self._settings.hoverClass);
                input.parentNode.style.visibility = "hidden"
            });
            div.appendChild(input);
            document.body.appendChild(div);
            this._input = input
        },
        _clearInput: function() {
            if (!this._input) {
                return
            }
            removeNode(this._input.parentNode);
            this._input = null;
            this._createInput();
            removeClass(this._button, this._settings.hoverClass)
        },
        _rerouteClicks: function() {
            var self = this;
            addEvent(self._button, "mouseover",
            function() {
                if (self._disabled) {
                    return
                }
                if (!self._input) {
                    self._createInput()
                }
                var div = self._input.parentNode;
                copyLayout(self._button, div);
                div.style.visibility = "visible"
            })
        },
        _createIframe: function() {
            var id = getUID();
            var iframe = toElement('<iframe src="javascript:false;" name="' + id + '" />');
            iframe.setAttribute("id", id);
            iframe.style.display = "none";
            document.body.appendChild(iframe);
            return iframe
        },
        _createForm: function(iframe) {
            var settings = this._settings;
            var form = toElement('<form method="post" enctype="multipart/form-data"></form>');
            form.setAttribute("action", settings.action);
            form.setAttribute("target", iframe.name);
            form.style.display = "none";
            document.body.appendChild(form);
            for (var prop in settings.data) {
                if (settings.data.hasOwnProperty(prop)) {
                    var el = document.createElement("input");
                    el.setAttribute("type", "hidden");
                    el.setAttribute("name", prop);
                    el.setAttribute("value", settings.data[prop]);
                    form.appendChild(el)
                }
            }
            return form
        },
        _getResponse: function(iframe, file) {
            var toDeleteFlag = false,
            self = this,
            settings = this._settings;
            addEvent(iframe, "load",
            function() {
                if (iframe.src == "javascript:'%3Chtml%3E%3C/html%3E';" || iframe.src == "javascript:'<html></html>';") {
                    if (toDeleteFlag) {
                        setTimeout(function() {
                            removeNode(iframe)
                        },
                        0)
                    }
                    return
                }
                var doc = iframe.contentDocument ? iframe.contentDocument: window.frames[iframe.id].document;
                if (doc.readyState && doc.readyState != "complete") {
                    return
                }
                if (doc.body && doc.body.innerHTML == "false") {
                    return
                }
                var response;
                if (doc.XMLDocument) {
                    response = doc.XMLDocument
                } else {
                    if (doc.body) {
                        response = doc.body.innerHTML;
                        if (settings.responseType && settings.responseType.toLowerCase() == "json") {
                            if (doc.body.firstChild && doc.body.firstChild.nodeName.toUpperCase() == "PRE") {
                                response = doc.body.firstChild.firstChild.nodeValue
                            }
                            if (response) {
                                response = eval("(" + response + ")")
                            } else {
                                response = {}
                            }
                        }
                    } else {
                        response = doc
                    }
                }
                settings.onComplete.call(self, file, response);
                toDeleteFlag = true;
                iframe.src = "javascript:'<html></html>';"
            })
        },
        submit: function() {
            var self = this,
            settings = this._settings;
            if (!this._input || this._input.value === "") {
                return
            }
            var file = fileFromPath(this._input.value);
            if (false === settings.onSubmit.call(this, file, getExt(file))) {
                this._clearInput();
                return
            }
            var iframe = this._createIframe();
            var form = this._createForm(iframe);
            removeNode(this._input.parentNode);
            removeClass(self._button, self._settings.hoverClass);
            form.appendChild(this._input);
            form.submit();
            removeNode(form);
            form = null;
            removeNode(this._input);
            this._input = null;
            this._getResponse(iframe, file);
            this._createInput()
        }
    }
})();
function zyid(id) {
    var ret = id.replace(/:/g, "\\:");
    ret = ret.replace(/\./g, "\\.");
    ret = ret.replace(/\//g, "\\/");
    ret = ret.replace(/\$/g, "\\$");
    ret = ret.replace(/\[/g, "\\[");
    ret = ret.replace(/\]/g, "\\]");
    return ret;
}
var lp = {
    "$": function(b) {
        return document.getElementById(b)
    },
    C: function(b) {
        return document.createElement(b)
    },
    B: navigator.userAgent.indexOf("MSIE") != -1 && !window.opera,
    AE: function(d, e, f) {
        if (B) {
            d.attachEvent("on" + e, (function(a) {
                return function() {
                    f.call(a)
                }
            })(d))
        } else {
            d.addEventListener(e, f, false)
        }
    },
    iframe: function(b) {
        return document.frames ? document.frames[b] : document.getElementById(b).contentWindow
    },
    ready: function(b) {
        if (document.addEventListener) {
            document.addEventListener("DOMContentLoaded",
            function() {
                document.removeEventListener("DOMContentLoaded", arguments.callee, false);
                b()
            },
            false)
        } else {
            if (document.attachEvent) {
                if (document.documentElement.doScroll && window.self == window.top) { (function() {
                        try {
                            document.documentElement.doScroll("left")
                        } catch(a) {
                            setTimeout(arguments.callee, 5);
                            return
                        }
                        b()
                    })()
                } else {
                    document.attachEvent("onreadystatechange",
                    function() {
                        if (document.readyState === "complete") {
                            document.detachEvent("onreadystatechange", arguments.callee);
                            b()
                        }
                    })
                }
            }
        }
    },
    ec: function(b) {
        if (typeof b == "function") {
            b()
        } else {
            if (typeof b == "string") {
                if (b != "") {
                    alert(b)
                } else {
                    return false
                }
            } else {
                if (typeof b == "undefined") {
                    return false
                }
            }
        }
    },
    loadScript: function(d) {
        var e = document.createElement("script");
        e.src = d;
        e.async = true;
        var f = document.getElementsByTagName("script")[0];
        f.parentNode.insertBefore(e, f);
        return true
    },
    loadCSS: function(e) {
        var f = document.createElement("link");
        f.rel = "stylesheet";
        f.href = e;
        var d = document.getElementsByTagName("link")[0];
        d.parentNode.insertBefore(f, d);
        return true
    },
    isext: function(e, d) {
        if (typeof e == "undefined") {
            return false
        }
        var d = d || "jpg,jpeg,gif,bmp,png",
        e = e.split("."),
        f = e[e.length - 1];
        f = f.toLowerCase();
        if (d.indexOf(f) < 0) {
            return false
        } else {
            return true
        }
    },
    debugObj: function(d) {
        var f = "";
        for (var e in d) {
            f += e + ":" + d[e] + "\n"
        }
        return f
    },
    alert: function(c, d) {
        alert(c)
    },
    confirm: function(g, h, f) {
        var g = g || "是否确认",
        e = confirm(g);
        if (e) {
            lp.ec(h)
        } else {
            lp.ec(f)
        }
    },
    uploadFile: function(e, g, f, h) {
        var f = f || "jpg,png,jpeg,gif,bmp,doc,docx,xls,xlsx,ppt,rar,zip,7z,tar,tar.gz,txt";
        new AjaxUpload(e, {
            action: h || "?m=upload&a=tempfile",
            name: "userfile",
            autoSubmit: true,
            responseType: "json",
            onChange: function(b, a) {},
            onSubmit: function(b, a) {
                if (!lp.isext(a, f)) {
                    lp.alert("文件类型错误");
                    return false
                }
                this.disable()
            },
            onComplete: function(a, b) {
                this.enable();
                if (b.status != 0) {
                    return lp.alert(b.msg)
                } else {
                    if (typeof(g) == "function") {
                        return g(b.rows)
                    }
                }
            }
        })
    }
};
function R() {
    var b = this;
    this.callback = false;
    this.success = false;
    this.failure = false;
    this.async = true;
    this.type = "POST";
    this.dataType = "json";
    this.request = function(a,data) {
        $.ajax({
            url: a,
            dataType: b.dataType,
			data: data,
            async: b.async,
            error: function(d) {
                b.callBack(d.responseText, false)
            },
            success: function(f, e) {
                b.callBack(f, true)
            }
        })
    },
    this.onSuccess = function(a) {
        if (typeof(b.success) == "function") {
            return b.success(a)
        }
        if (typeof a == "object") {
            alert(a.msg)
        } else {
            lp.alert(a)
        }
        if (typeof(b.success) == "boolean") {
            return
        } else {
            if (b.success == "") {
                window.location.reload()
            } else {
                location.href = b.success
            }
        }
    },
    this.onFailure = function(a) {
        if (typeof(b.failure) == "function") {
            return b.failure(a)
        }
        if (typeof a == "object") {
            alert(a.data)
        } else {
            lp.alert(a)
        }
        if (typeof(b.failure) == "boolean") {
            return
        } else {
            if (b.failure == "") {
                window.location.reload()
            } else {
                location.href = b.failure
            }
        }
    },
    this.callBack = function(d, a) {
        if (typeof(b.callback) == "function") {
            return b.callback(d, a)
        }
        if (a) {
            b.onSuccess(d)
        } else {
            b.onFailure(d)
        }
    },
    this.confirm = function(a, e) {
        var e = e || "是否确认删除此数据<注意：此操作不可还原>",
        f = confirm(e);
        if (f) {
            b.request(a)
        } else {
            return false
        }
    },
    this.submit = function(f, g) {
        var h = {
            url: g,
            type: b.type,
            dataType: b.dataType,
            beforeSend: function(c) {
                c.setRequestHeader("LQP", "http://www.cygpm.com/js/www.lqper.com")
            },
            error: function(c) {
                b.callBack(c.responseText, false)
            },
            success: function(d, c) {
                b.callBack(d, true)
            }
        };
        var a = "js/jquery_plugins/jquery.form.js"/*tpa=http://www.cygpm.com/js/js/jquery_plugins/jquery.form.js*/;
        if (typeof $(f).ajaxSubmit != "function") {
            lp.loadScript(a)
        }
        jQuery(f).ajaxSubmit(h)
    };
    this.form = function(e, f) {
        var a = {
            url: f,
            type: b.type,
            dataType: b.dataType,
            beforeSend: function(c) {
                c.setRequestHeader("LQP", "http://www.cygpm.com/js/www.lqper.com")
            },
            error: function(c) {
                b.callBack(c.responseText, false)
            },
            success: function(d, c) {
                b.callBack(d, true)
            }
        };
        if (typeof $(e).ajaxSubmit != "function") {
            lp.loadScript("jquery_plugins/form/jquery.form.js"/*tpa=http://www.cygpm.com/js/jquery_plugins/form/jquery.form.js*/)
        }
        jQuery(e).ajaxForm(a)
    }
}
var r = new R();