import {j as zi, g as Xi, d as on, n as Le, u as li, t as yn, s as Pe, q as Ur, v as zr, w as Rn, S as An, D as Ke, m as fi, _ as an, c as Ht, f as sn, x as Xr, T as Gr, a as B, y as kt, z as Ie, A as xn, e as se, F as Qe, o as Ot, B as pe, p as Ln, b as In, C as ai, E as oi, G as Zr, H as Qr, I as Wi, J as Ui, K as Kr, L as Jr, M as ci, r as bn, N as ts} from "./index-119fb67b.js";
var Gi = {
    exports: {}
};
/*!
 * jQuery JavaScript Library v3.6.4
 * https://jquery.com/
 *
 * Includes Sizzle.js
 * https://sizzlejs.com/
 *
 * Copyright OpenJS Foundation and other contributors
 * Released under the MIT license
 * https://jquery.org/license
 *
 * Date: 2023-03-08T15:28Z
 */
(function(n) {
    (function(o, l) {
        n.exports = o.document ? l(o, !0) : function(p) {
            if (!p.document)
                throw new Error("jQuery requires a window with a document");
            return l(p)
        }
    }
    )(typeof window < "u" ? window : Xi, function(o, l) {
        var p = []
          , y = Object.getPrototypeOf
          , C = p.slice
          , D = p.flat ? function(t) {
            return p.flat.call(t)
        }
        : function(t) {
            return p.concat.apply([], t)
        }
          , L = p.push
          , Q = p.indexOf
          , ot = {}
          , Z = ot.toString
          , X = ot.hasOwnProperty
          , lt = X.toString
          , V = lt.call(Object)
          , G = {}
          , it = function(e) {
            return typeof e == "function" && typeof e.nodeType != "number" && typeof e.item != "function"
        }
          , at = function(e) {
            return e != null && e === e.window
        }
          , rt = o.document
          , Ne = {
            type: !0,
            src: !0,
            nonce: !0,
            noModule: !0
        };
        function Yt(t, e, i) {
            i = i || rt;
            var r, a, u = i.createElement("script");
            if (u.text = t,
            e)
                for (r in Ne)
                    a = e[r] || e.getAttribute && e.getAttribute(r),
                    a && u.setAttribute(r, a);
            i.head.appendChild(u).parentNode.removeChild(u)
        }
        function St(t) {
            return t == null ? t + "" : typeof t == "object" || typeof t == "function" ? ot[Z.call(t)] || "object" : typeof t
        }
        var oe = "3.6.4"
          , s = function(t, e) {
            return new s.fn.init(t,e)
        };
        s.fn = s.prototype = {
            jquery: oe,
            constructor: s,
            length: 0,
            toArray: function() {
                return C.call(this)
            },
            get: function(t) {
                return t == null ? C.call(this) : t < 0 ? this[t + this.length] : this[t]
            },
            pushStack: function(t) {
                var e = s.merge(this.constructor(), t);
                return e.prevObject = this,
                e
            },
            each: function(t) {
                return s.each(this, t)
            },
            map: function(t) {
                return this.pushStack(s.map(this, function(e, i) {
                    return t.call(e, i, e)
                }))
            },
            slice: function() {
                return this.pushStack(C.apply(this, arguments))
            },
            first: function() {
                return this.eq(0)
            },
            last: function() {
                return this.eq(-1)
            },
            even: function() {
                return this.pushStack(s.grep(this, function(t, e) {
                    return (e + 1) % 2
                }))
            },
            odd: function() {
                return this.pushStack(s.grep(this, function(t, e) {
                    return e % 2
                }))
            },
            eq: function(t) {
                var e = this.length
                  , i = +t + (t < 0 ? e : 0);
                return this.pushStack(i >= 0 && i < e ? [this[i]] : [])
            },
            end: function() {
                return this.prevObject || this.constructor()
            },
            push: L,
            sort: p.sort,
            splice: p.splice
        },
        s.extend = s.fn.extend = function() {
            var t, e, i, r, a, u, f = arguments[0] || {}, m = 1, g = arguments.length, E = !1;
            for (typeof f == "boolean" && (E = f,
            f = arguments[m] || {},
            m++),
            typeof f != "object" && !it(f) && (f = {}),
            m === g && (f = this,
            m--); m < g; m++)
                if ((t = arguments[m]) != null)
                    for (e in t)
                        r = t[e],
                        !(e === "__proto__" || f === r) && (E && r && (s.isPlainObject(r) || (a = Array.isArray(r))) ? (i = f[e],
                        a && !Array.isArray(i) ? u = [] : !a && !s.isPlainObject(i) ? u = {} : u = i,
                        a = !1,
                        f[e] = s.extend(E, u, r)) : r !== void 0 && (f[e] = r));
            return f
        }
        ,
        s.extend({
            expando: "jQuery" + (oe + Math.random()).replace(/\D/g, ""),
            isReady: !0,
            error: function(t) {
                throw new Error(t)
            },
            noop: function() {},
            isPlainObject: function(t) {
                var e, i;
                return !t || Z.call(t) !== "[object Object]" ? !1 : (e = y(t),
                e ? (i = X.call(e, "constructor") && e.constructor,
                typeof i == "function" && lt.call(i) === V) : !0)
            },
            isEmptyObject: function(t) {
                var e;
                for (e in t)
                    return !1;
                return !0
            },
            globalEval: function(t, e, i) {
                Yt(t, {
                    nonce: e && e.nonce
                }, i)
            },
            each: function(t, e) {
                var i, r = 0;
                if (mt(t))
                    for (i = t.length; r < i && e.call(t[r], r, t[r]) !== !1; r++)
                        ;
                else
                    for (r in t)
                        if (e.call(t[r], r, t[r]) === !1)
                            break;
                return t
            },
            makeArray: function(t, e) {
                var i = e || [];
                return t != null && (mt(Object(t)) ? s.merge(i, typeof t == "string" ? [t] : t) : L.call(i, t)),
                i
            },
            inArray: function(t, e, i) {
                return e == null ? -1 : Q.call(e, t, i)
            },
            merge: function(t, e) {
                for (var i = +e.length, r = 0, a = t.length; r < i; r++)
                    t[a++] = e[r];
                return t.length = a,
                t
            },
            grep: function(t, e, i) {
                for (var r, a = [], u = 0, f = t.length, m = !i; u < f; u++)
                    r = !e(t[u], u),
                    r !== m && a.push(t[u]);
                return a
            },
            map: function(t, e, i) {
                var r, a, u = 0, f = [];
                if (mt(t))
                    for (r = t.length; u < r; u++)
                        a = e(t[u], u, i),
                        a != null && f.push(a);
                else
                    for (u in t)
                        a = e(t[u], u, i),
                        a != null && f.push(a);
                return D(f)
            },
            guid: 1,
            support: G
        }),
        typeof Symbol == "function" && (s.fn[Symbol.iterator] = p[Symbol.iterator]),
        s.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(t, e) {
            ot["[object " + e + "]"] = e.toLowerCase()
        });
        function mt(t) {
            var e = !!t && "length"in t && t.length
              , i = St(t);
            return it(t) || at(t) ? !1 : i === "array" || e === 0 || typeof e == "number" && e > 0 && e - 1 in t
        }
        var At = function(t) {
            var e, i, r, a, u, f, m, g, E, k, j, P, M, ft, bt, ut, ie, Jt, ye, Rt = "sizzle" + 1 * new Date, yt = t.document, he = 0, Dt = 0, Gt = Fn(), pn = Fn(), _n = Fn(), xe = Fn(), Ue = function(h, v) {
                return h === v && (j = !0),
                0
            }, ze = {}.hasOwnProperty, de = [], $e = de.pop, we = de.push, Re = de.push, Ri = de.slice, Xe = function(h, v) {
                for (var b = 0, R = h.length; b < R; b++)
                    if (h[b] === v)
                        return b;
                return -1
            }, Kn = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", Ft = "[\\x20\\t\\r\\n\\f]", Ge = "(?:\\\\[\\da-fA-F]{1,6}" + Ft + "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+", Li = "\\[" + Ft + "*(" + Ge + ")(?:" + Ft + "*([*^$|!~]?=)" + Ft + `*(?:'((?:\\\\.|[^\\\\'])*)'|"((?:\\\\.|[^\\\\"])*)"|(` + Ge + "))|)" + Ft + "*\\]", Jn = ":(" + Ge + `)(?:\\((('((?:\\\\.|[^\\\\'])*)'|"((?:\\\\.|[^\\\\"])*)")|((?:\\\\.|[^\\\\()[\\]]|` + Li + ")*)|.*)\\)|)", Br = new RegExp(Ft + "+","g"), Nn = new RegExp("^" + Ft + "+|((?:^|[^\\\\])(?:\\\\.)*)" + Ft + "+$","g"), kr = new RegExp("^" + Ft + "*," + Ft + "*"), Ii = new RegExp("^" + Ft + "*([>+~]|" + Ft + ")" + Ft + "*"), Mr = new RegExp(Ft + "|>"), $r = new RegExp(Jn), Rr = new RegExp("^" + Ge + "$"), Pn = {
                ID: new RegExp("^#(" + Ge + ")"),
                CLASS: new RegExp("^\\.(" + Ge + ")"),
                TAG: new RegExp("^(" + Ge + "|[*])"),
                ATTR: new RegExp("^" + Li),
                PSEUDO: new RegExp("^" + Jn),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + Ft + "*(even|odd|(([+-]|)(\\d*)n|)" + Ft + "*(?:([+-]|)" + Ft + "*(\\d+)|))" + Ft + "*\\)|)","i"),
                bool: new RegExp("^(?:" + Kn + ")$","i"),
                needsContext: new RegExp("^" + Ft + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + Ft + "*((?:-\\d)?\\d*)" + Ft + "*\\)|)(?=[^-]|$)","i")
            }, Lr = /HTML$/i, Ir = /^(?:input|select|textarea|button)$/i, jr = /^h\d$/i, gn = /^[^{]+\{\s*\[native \w/, Or = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, ti = /[+~]/, Be = new RegExp("\\\\[\\da-fA-F]{1,6}" + Ft + "?|\\\\([^\\r\\n\\f])","g"), ke = function(h, v) {
                var b = "0x" + h.slice(1) - 65536;
                return v || (b < 0 ? String.fromCharCode(b + 65536) : String.fromCharCode(b >> 10 | 55296, b & 1023 | 56320))
            }, ji = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g, Oi = function(h, v) {
                return v ? h === "\0" ? "�" : h.slice(0, -1) + "\\" + h.charCodeAt(h.length - 1).toString(16) + " " : "\\" + h
            }, qi = function() {
                P()
            }, qr = kn(function(h) {
                return h.disabled === !0 && h.nodeName.toLowerCase() === "fieldset"
            }, {
                dir: "parentNode",
                next: "legend"
            });
            try {
                Re.apply(de = Ri.call(yt.childNodes), yt.childNodes),
                de[yt.childNodes.length].nodeType
            } catch {
                Re = {
                    apply: de.length ? function(v, b) {
                        we.apply(v, Ri.call(b))
                    }
                    : function(v, b) {
                        for (var R = v.length, w = 0; v[R++] = b[w++]; )
                            ;
                        v.length = R - 1
                    }
                }
            }
            function It(h, v, b, R) {
                var w, I, O, z, K, ht, ct, gt = v && v.ownerDocument, Tt = v ? v.nodeType : 9;
                if (b = b || [],
                typeof h != "string" || !h || Tt !== 1 && Tt !== 9 && Tt !== 11)
                    return b;
                if (!R && (P(v),
                v = v || M,
                bt)) {
                    if (Tt !== 11 && (K = Or.exec(h)))
                        if (w = K[1]) {
                            if (Tt === 9)
                                if (O = v.getElementById(w)) {
                                    if (O.id === w)
                                        return b.push(O),
                                        b
                                } else
                                    return b;
                            else if (gt && (O = gt.getElementById(w)) && ye(v, O) && O.id === w)
                                return b.push(O),
                                b
                        } else {
                            if (K[2])
                                return Re.apply(b, v.getElementsByTagName(h)),
                                b;
                            if ((w = K[3]) && i.getElementsByClassName && v.getElementsByClassName)
                                return Re.apply(b, v.getElementsByClassName(w)),
                                b
                        }
                    if (i.qsa && !xe[h + " "] && (!ut || !ut.test(h)) && (Tt !== 1 || v.nodeName.toLowerCase() !== "object")) {
                        if (ct = h,
                        gt = v,
                        Tt === 1 && (Mr.test(h) || Ii.test(h))) {
                            for (gt = ti.test(h) && ni(v.parentNode) || v,
                            (gt !== v || !i.scope) && ((z = v.getAttribute("id")) ? z = z.replace(ji, Oi) : v.setAttribute("id", z = Rt)),
                            ht = f(h),
                            I = ht.length; I--; )
                                ht[I] = (z ? "#" + z : ":scope") + " " + Bn(ht[I]);
                            ct = ht.join(",")
                        }
                        try {
                            return Re.apply(b, gt.querySelectorAll(ct)),
                            b
                        } catch {
                            xe(h, !0)
                        } finally {
                            z === Rt && v.removeAttribute("id")
                        }
                    }
                }
                return g(h.replace(Nn, "$1"), v, b, R)
            }
            function Fn() {
                var h = [];
                function v(b, R) {
                    return h.push(b + " ") > r.cacheLength && delete v[h.shift()],
                    v[b + " "] = R
                }
                return v
            }
            function _e(h) {
                return h[Rt] = !0,
                h
            }
            function Ee(h) {
                var v = M.createElement("fieldset");
                try {
                    return !!h(v)
                } catch {
                    return !1
                } finally {
                    v.parentNode && v.parentNode.removeChild(v),
                    v = null
                }
            }
            function ei(h, v) {
                for (var b = h.split("|"), R = b.length; R--; )
                    r.attrHandle[b[R]] = v
            }
            function Hi(h, v) {
                var b = v && h
                  , R = b && h.nodeType === 1 && v.nodeType === 1 && h.sourceIndex - v.sourceIndex;
                if (R)
                    return R;
                if (b) {
                    for (; b = b.nextSibling; )
                        if (b === v)
                            return -1
                }
                return h ? 1 : -1
            }
            function Hr(h) {
                return function(v) {
                    var b = v.nodeName.toLowerCase();
                    return b === "input" && v.type === h
                }
            }
            function Yr(h) {
                return function(v) {
                    var b = v.nodeName.toLowerCase();
                    return (b === "input" || b === "button") && v.type === h
                }
            }
            function Yi(h) {
                return function(v) {
                    return "form"in v ? v.parentNode && v.disabled === !1 ? "label"in v ? "label"in v.parentNode ? v.parentNode.disabled === h : v.disabled === h : v.isDisabled === h || v.isDisabled !== !h && qr(v) === h : v.disabled === h : "label"in v ? v.disabled === h : !1
                }
            }
            function Ze(h) {
                return _e(function(v) {
                    return v = +v,
                    _e(function(b, R) {
                        for (var w, I = h([], b.length, v), O = I.length; O--; )
                            b[w = I[O]] && (b[w] = !(R[w] = b[w]))
                    })
                })
            }
            function ni(h) {
                return h && typeof h.getElementsByTagName < "u" && h
            }
            i = It.support = {},
            u = It.isXML = function(h) {
                var v = h && h.namespaceURI
                  , b = h && (h.ownerDocument || h).documentElement;
                return !Lr.test(v || b && b.nodeName || "HTML")
            }
            ,
            P = It.setDocument = function(h) {
                var v, b, R = h ? h.ownerDocument || h : yt;
                return R == M || R.nodeType !== 9 || !R.documentElement || (M = R,
                ft = M.documentElement,
                bt = !u(M),
                yt != M && (b = M.defaultView) && b.top !== b && (b.addEventListener ? b.addEventListener("unload", qi, !1) : b.attachEvent && b.attachEvent("onunload", qi)),
                i.scope = Ee(function(w) {
                    return ft.appendChild(w).appendChild(M.createElement("div")),
                    typeof w.querySelectorAll < "u" && !w.querySelectorAll(":scope fieldset div").length
                }),
                i.cssHas = Ee(function() {
                    try {
                        return M.querySelector(":has(*,:jqfake)"),
                        !1
                    } catch {
                        return !0
                    }
                }),
                i.attributes = Ee(function(w) {
                    return w.className = "i",
                    !w.getAttribute("className")
                }),
                i.getElementsByTagName = Ee(function(w) {
                    return w.appendChild(M.createComment("")),
                    !w.getElementsByTagName("*").length
                }),
                i.getElementsByClassName = gn.test(M.getElementsByClassName),
                i.getById = Ee(function(w) {
                    return ft.appendChild(w).id = Rt,
                    !M.getElementsByName || !M.getElementsByName(Rt).length
                }),
                i.getById ? (r.filter.ID = function(w) {
                    var I = w.replace(Be, ke);
                    return function(O) {
                        return O.getAttribute("id") === I
                    }
                }
                ,
                r.find.ID = function(w, I) {
                    if (typeof I.getElementById < "u" && bt) {
                        var O = I.getElementById(w);
                        return O ? [O] : []
                    }
                }
                ) : (r.filter.ID = function(w) {
                    var I = w.replace(Be, ke);
                    return function(O) {
                        var z = typeof O.getAttributeNode < "u" && O.getAttributeNode("id");
                        return z && z.value === I
                    }
                }
                ,
                r.find.ID = function(w, I) {
                    if (typeof I.getElementById < "u" && bt) {
                        var O, z, K, ht = I.getElementById(w);
                        if (ht) {
                            if (O = ht.getAttributeNode("id"),
                            O && O.value === w)
                                return [ht];
                            for (K = I.getElementsByName(w),
                            z = 0; ht = K[z++]; )
                                if (O = ht.getAttributeNode("id"),
                                O && O.value === w)
                                    return [ht]
                        }
                        return []
                    }
                }
                ),
                r.find.TAG = i.getElementsByTagName ? function(w, I) {
                    if (typeof I.getElementsByTagName < "u")
                        return I.getElementsByTagName(w);
                    if (i.qsa)
                        return I.querySelectorAll(w)
                }
                : function(w, I) {
                    var O, z = [], K = 0, ht = I.getElementsByTagName(w);
                    if (w === "*") {
                        for (; O = ht[K++]; )
                            O.nodeType === 1 && z.push(O);
                        return z
                    }
                    return ht
                }
                ,
                r.find.CLASS = i.getElementsByClassName && function(w, I) {
                    if (typeof I.getElementsByClassName < "u" && bt)
                        return I.getElementsByClassName(w)
                }
                ,
                ie = [],
                ut = [],
                (i.qsa = gn.test(M.querySelectorAll)) && (Ee(function(w) {
                    var I;
                    ft.appendChild(w).innerHTML = "<a id='" + Rt + "'></a><select id='" + Rt + "-\r\\' msallowcapture=''><option selected=''></option></select>",
                    w.querySelectorAll("[msallowcapture^='']").length && ut.push("[*^$]=" + Ft + `*(?:''|"")`),
                    w.querySelectorAll("[selected]").length || ut.push("\\[" + Ft + "*(?:value|" + Kn + ")"),
                    w.querySelectorAll("[id~=" + Rt + "-]").length || ut.push("~="),
                    I = M.createElement("input"),
                    I.setAttribute("name", ""),
                    w.appendChild(I),
                    w.querySelectorAll("[name='']").length || ut.push("\\[" + Ft + "*name" + Ft + "*=" + Ft + `*(?:''|"")`),
                    w.querySelectorAll(":checked").length || ut.push(":checked"),
                    w.querySelectorAll("a#" + Rt + "+*").length || ut.push(".#.+[+~]"),
                    w.querySelectorAll("\\\f"),
                    ut.push("[\\r\\n\\f]")
                }),
                Ee(function(w) {
                    w.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                    var I = M.createElement("input");
                    I.setAttribute("type", "hidden"),
                    w.appendChild(I).setAttribute("name", "D"),
                    w.querySelectorAll("[name=d]").length && ut.push("name" + Ft + "*[*^$|!~]?="),
                    w.querySelectorAll(":enabled").length !== 2 && ut.push(":enabled", ":disabled"),
                    ft.appendChild(w).disabled = !0,
                    w.querySelectorAll(":disabled").length !== 2 && ut.push(":enabled", ":disabled"),
                    w.querySelectorAll("*,:x"),
                    ut.push(",.*:")
                })),
                (i.matchesSelector = gn.test(Jt = ft.matches || ft.webkitMatchesSelector || ft.mozMatchesSelector || ft.oMatchesSelector || ft.msMatchesSelector)) && Ee(function(w) {
                    i.disconnectedMatch = Jt.call(w, "*"),
                    Jt.call(w, "[s!='']:x"),
                    ie.push("!=", Jn)
                }),
                i.cssHas || ut.push(":has"),
                ut = ut.length && new RegExp(ut.join("|")),
                ie = ie.length && new RegExp(ie.join("|")),
                v = gn.test(ft.compareDocumentPosition),
                ye = v || gn.test(ft.contains) ? function(w, I) {
                    var O = w.nodeType === 9 && w.documentElement || w
                      , z = I && I.parentNode;
                    return w === z || !!(z && z.nodeType === 1 && (O.contains ? O.contains(z) : w.compareDocumentPosition && w.compareDocumentPosition(z) & 16))
                }
                : function(w, I) {
                    if (I) {
                        for (; I = I.parentNode; )
                            if (I === w)
                                return !0
                    }
                    return !1
                }
                ,
                Ue = v ? function(w, I) {
                    if (w === I)
                        return j = !0,
                        0;
                    var O = !w.compareDocumentPosition - !I.compareDocumentPosition;
                    return O || (O = (w.ownerDocument || w) == (I.ownerDocument || I) ? w.compareDocumentPosition(I) : 1,
                    O & 1 || !i.sortDetached && I.compareDocumentPosition(w) === O ? w == M || w.ownerDocument == yt && ye(yt, w) ? -1 : I == M || I.ownerDocument == yt && ye(yt, I) ? 1 : k ? Xe(k, w) - Xe(k, I) : 0 : O & 4 ? -1 : 1)
                }
                : function(w, I) {
                    if (w === I)
                        return j = !0,
                        0;
                    var O, z = 0, K = w.parentNode, ht = I.parentNode, ct = [w], gt = [I];
                    if (!K || !ht)
                        return w == M ? -1 : I == M ? 1 : K ? -1 : ht ? 1 : k ? Xe(k, w) - Xe(k, I) : 0;
                    if (K === ht)
                        return Hi(w, I);
                    for (O = w; O = O.parentNode; )
                        ct.unshift(O);
                    for (O = I; O = O.parentNode; )
                        gt.unshift(O);
                    for (; ct[z] === gt[z]; )
                        z++;
                    return z ? Hi(ct[z], gt[z]) : ct[z] == yt ? -1 : gt[z] == yt ? 1 : 0
                }
                ),
                M
            }
            ,
            It.matches = function(h, v) {
                return It(h, null, null, v)
            }
            ,
            It.matchesSelector = function(h, v) {
                if (P(h),
                i.matchesSelector && bt && !xe[v + " "] && (!ie || !ie.test(v)) && (!ut || !ut.test(v)))
                    try {
                        var b = Jt.call(h, v);
                        if (b || i.disconnectedMatch || h.document && h.document.nodeType !== 11)
                            return b
                    } catch {
                        xe(v, !0)
                    }
                return It(v, M, null, [h]).length > 0
            }
            ,
            It.contains = function(h, v) {
                return (h.ownerDocument || h) != M && P(h),
                ye(h, v)
            }
            ,
            It.attr = function(h, v) {
                (h.ownerDocument || h) != M && P(h);
                var b = r.attrHandle[v.toLowerCase()]
                  , R = b && ze.call(r.attrHandle, v.toLowerCase()) ? b(h, v, !bt) : void 0;
                return R !== void 0 ? R : i.attributes || !bt ? h.getAttribute(v) : (R = h.getAttributeNode(v)) && R.specified ? R.value : null
            }
            ,
            It.escape = function(h) {
                return (h + "").replace(ji, Oi)
            }
            ,
            It.error = function(h) {
                throw new Error("Syntax error, unrecognized expression: " + h)
            }
            ,
            It.uniqueSort = function(h) {
                var v, b = [], R = 0, w = 0;
                if (j = !i.detectDuplicates,
                k = !i.sortStable && h.slice(0),
                h.sort(Ue),
                j) {
                    for (; v = h[w++]; )
                        v === h[w] && (R = b.push(w));
                    for (; R--; )
                        h.splice(b[R], 1)
                }
                return k = null,
                h
            }
            ,
            a = It.getText = function(h) {
                var v, b = "", R = 0, w = h.nodeType;
                if (w) {
                    if (w === 1 || w === 9 || w === 11) {
                        if (typeof h.textContent == "string")
                            return h.textContent;
                        for (h = h.firstChild; h; h = h.nextSibling)
                            b += a(h)
                    } else if (w === 3 || w === 4)
                        return h.nodeValue
                } else
                    for (; v = h[R++]; )
                        b += a(v);
                return b
            }
            ,
            r = It.selectors = {
                cacheLength: 50,
                createPseudo: _e,
                match: Pn,
                attrHandle: {},
                find: {},
                relative: {
                    ">": {
                        dir: "parentNode",
                        first: !0
                    },
                    " ": {
                        dir: "parentNode"
                    },
                    "+": {
                        dir: "previousSibling",
                        first: !0
                    },
                    "~": {
                        dir: "previousSibling"
                    }
                },
                preFilter: {
                    ATTR: function(h) {
                        return h[1] = h[1].replace(Be, ke),
                        h[3] = (h[3] || h[4] || h[5] || "").replace(Be, ke),
                        h[2] === "~=" && (h[3] = " " + h[3] + " "),
                        h.slice(0, 4)
                    },
                    CHILD: function(h) {
                        return h[1] = h[1].toLowerCase(),
                        h[1].slice(0, 3) === "nth" ? (h[3] || It.error(h[0]),
                        h[4] = +(h[4] ? h[5] + (h[6] || 1) : 2 * (h[3] === "even" || h[3] === "odd")),
                        h[5] = +(h[7] + h[8] || h[3] === "odd")) : h[3] && It.error(h[0]),
                        h
                    },
                    PSEUDO: function(h) {
                        var v, b = !h[6] && h[2];
                        return Pn.CHILD.test(h[0]) ? null : (h[3] ? h[2] = h[4] || h[5] || "" : b && $r.test(b) && (v = f(b, !0)) && (v = b.indexOf(")", b.length - v) - b.length) && (h[0] = h[0].slice(0, v),
                        h[2] = b.slice(0, v)),
                        h.slice(0, 3))
                    }
                },
                filter: {
                    TAG: function(h) {
                        var v = h.replace(Be, ke).toLowerCase();
                        return h === "*" ? function() {
                            return !0
                        }
                        : function(b) {
                            return b.nodeName && b.nodeName.toLowerCase() === v
                        }
                    },
                    CLASS: function(h) {
                        var v = Gt[h + " "];
                        return v || (v = new RegExp("(^|" + Ft + ")" + h + "(" + Ft + "|$)")) && Gt(h, function(b) {
                            return v.test(typeof b.className == "string" && b.className || typeof b.getAttribute < "u" && b.getAttribute("class") || "")
                        })
                    },
                    ATTR: function(h, v, b) {
                        return function(R) {
                            var w = It.attr(R, h);
                            return w == null ? v === "!=" : v ? (w += "",
                            v === "=" ? w === b : v === "!=" ? w !== b : v === "^=" ? b && w.indexOf(b) === 0 : v === "*=" ? b && w.indexOf(b) > -1 : v === "$=" ? b && w.slice(-b.length) === b : v === "~=" ? (" " + w.replace(Br, " ") + " ").indexOf(b) > -1 : v === "|=" ? w === b || w.slice(0, b.length + 1) === b + "-" : !1) : !0
                        }
                    },
                    CHILD: function(h, v, b, R, w) {
                        var I = h.slice(0, 3) !== "nth"
                          , O = h.slice(-4) !== "last"
                          , z = v === "of-type";
                        return R === 1 && w === 0 ? function(K) {
                            return !!K.parentNode
                        }
                        : function(K, ht, ct) {
                            var gt, Tt, jt, dt, re, ue, be = I !== O ? "nextSibling" : "previousSibling", zt = K.parentNode, vn = z && K.nodeName.toLowerCase(), mn = !ct && !z, Ae = !1;
                            if (zt) {
                                if (I) {
                                    for (; be; ) {
                                        for (dt = K; dt = dt[be]; )
                                            if (z ? dt.nodeName.toLowerCase() === vn : dt.nodeType === 1)
                                                return !1;
                                        ue = be = h === "only" && !ue && "nextSibling"
                                    }
                                    return !0
                                }
                                if (ue = [O ? zt.firstChild : zt.lastChild],
                                O && mn) {
                                    for (dt = zt,
                                    jt = dt[Rt] || (dt[Rt] = {}),
                                    Tt = jt[dt.uniqueID] || (jt[dt.uniqueID] = {}),
                                    gt = Tt[h] || [],
                                    re = gt[0] === he && gt[1],
                                    Ae = re && gt[2],
                                    dt = re && zt.childNodes[re]; dt = ++re && dt && dt[be] || (Ae = re = 0) || ue.pop(); )
                                        if (dt.nodeType === 1 && ++Ae && dt === K) {
                                            Tt[h] = [he, re, Ae];
                                            break
                                        }
                                } else if (mn && (dt = K,
                                jt = dt[Rt] || (dt[Rt] = {}),
                                Tt = jt[dt.uniqueID] || (jt[dt.uniqueID] = {}),
                                gt = Tt[h] || [],
                                re = gt[0] === he && gt[1],
                                Ae = re),
                                Ae === !1)
                                    for (; (dt = ++re && dt && dt[be] || (Ae = re = 0) || ue.pop()) && !((z ? dt.nodeName.toLowerCase() === vn : dt.nodeType === 1) && ++Ae && (mn && (jt = dt[Rt] || (dt[Rt] = {}),
                                    Tt = jt[dt.uniqueID] || (jt[dt.uniqueID] = {}),
                                    Tt[h] = [he, Ae]),
                                    dt === K)); )
                                        ;
                                return Ae -= w,
                                Ae === R || Ae % R === 0 && Ae / R >= 0
                            }
                        }
                    },
                    PSEUDO: function(h, v) {
                        var b, R = r.pseudos[h] || r.setFilters[h.toLowerCase()] || It.error("unsupported pseudo: " + h);
                        return R[Rt] ? R(v) : R.length > 1 ? (b = [h, h, "", v],
                        r.setFilters.hasOwnProperty(h.toLowerCase()) ? _e(function(w, I) {
                            for (var O, z = R(w, v), K = z.length; K--; )
                                O = Xe(w, z[K]),
                                w[O] = !(I[O] = z[K])
                        }) : function(w) {
                            return R(w, 0, b)
                        }
                        ) : R
                    }
                },
                pseudos: {
                    not: _e(function(h) {
                        var v = []
                          , b = []
                          , R = m(h.replace(Nn, "$1"));
                        return R[Rt] ? _e(function(w, I, O, z) {
                            for (var K, ht = R(w, null, z, []), ct = w.length; ct--; )
                                (K = ht[ct]) && (w[ct] = !(I[ct] = K))
                        }) : function(w, I, O) {
                            return v[0] = w,
                            R(v, null, O, b),
                            v[0] = null,
                            !b.pop()
                        }
                    }),
                    has: _e(function(h) {
                        return function(v) {
                            return It(h, v).length > 0
                        }
                    }),
                    contains: _e(function(h) {
                        return h = h.replace(Be, ke),
                        function(v) {
                            return (v.textContent || a(v)).indexOf(h) > -1
                        }
                    }),
                    lang: _e(function(h) {
                        return Rr.test(h || "") || It.error("unsupported lang: " + h),
                        h = h.replace(Be, ke).toLowerCase(),
                        function(v) {
                            var b;
                            do
                                if (b = bt ? v.lang : v.getAttribute("xml:lang") || v.getAttribute("lang"))
                                    return b = b.toLowerCase(),
                                    b === h || b.indexOf(h + "-") === 0;
                            while ((v = v.parentNode) && v.nodeType === 1);
                            return !1
                        }
                    }),
                    target: function(h) {
                        var v = t.location && t.location.hash;
                        return v && v.slice(1) === h.id
                    },
                    root: function(h) {
                        return h === ft
                    },
                    focus: function(h) {
                        return h === M.activeElement && (!M.hasFocus || M.hasFocus()) && !!(h.type || h.href || ~h.tabIndex)
                    },
                    enabled: Yi(!1),
                    disabled: Yi(!0),
                    checked: function(h) {
                        var v = h.nodeName.toLowerCase();
                        return v === "input" && !!h.checked || v === "option" && !!h.selected
                    },
                    selected: function(h) {
                        return h.parentNode && h.parentNode.selectedIndex,
                        h.selected === !0
                    },
                    empty: function(h) {
                        for (h = h.firstChild; h; h = h.nextSibling)
                            if (h.nodeType < 6)
                                return !1;
                        return !0
                    },
                    parent: function(h) {
                        return !r.pseudos.empty(h)
                    },
                    header: function(h) {
                        return jr.test(h.nodeName)
                    },
                    input: function(h) {
                        return Ir.test(h.nodeName)
                    },
                    button: function(h) {
                        var v = h.nodeName.toLowerCase();
                        return v === "input" && h.type === "button" || v === "button"
                    },
                    text: function(h) {
                        var v;
                        return h.nodeName.toLowerCase() === "input" && h.type === "text" && ((v = h.getAttribute("type")) == null || v.toLowerCase() === "text")
                    },
                    first: Ze(function() {
                        return [0]
                    }),
                    last: Ze(function(h, v) {
                        return [v - 1]
                    }),
                    eq: Ze(function(h, v, b) {
                        return [b < 0 ? b + v : b]
                    }),
                    even: Ze(function(h, v) {
                        for (var b = 0; b < v; b += 2)
                            h.push(b);
                        return h
                    }),
                    odd: Ze(function(h, v) {
                        for (var b = 1; b < v; b += 2)
                            h.push(b);
                        return h
                    }),
                    lt: Ze(function(h, v, b) {
                        for (var R = b < 0 ? b + v : b > v ? v : b; --R >= 0; )
                            h.push(R);
                        return h
                    }),
                    gt: Ze(function(h, v, b) {
                        for (var R = b < 0 ? b + v : b; ++R < v; )
                            h.push(R);
                        return h
                    })
                }
            },
            r.pseudos.nth = r.pseudos.eq;
            for (e in {
                radio: !0,
                checkbox: !0,
                file: !0,
                password: !0,
                image: !0
            })
                r.pseudos[e] = Hr(e);
            for (e in {
                submit: !0,
                reset: !0
            })
                r.pseudos[e] = Yr(e);
            function Vi() {}
            Vi.prototype = r.filters = r.pseudos,
            r.setFilters = new Vi,
            f = It.tokenize = function(h, v) {
                var b, R, w, I, O, z, K, ht = pn[h + " "];
                if (ht)
                    return v ? 0 : ht.slice(0);
                for (O = h,
                z = [],
                K = r.preFilter; O; ) {
                    (!b || (R = kr.exec(O))) && (R && (O = O.slice(R[0].length) || O),
                    z.push(w = [])),
                    b = !1,
                    (R = Ii.exec(O)) && (b = R.shift(),
                    w.push({
                        value: b,
                        type: R[0].replace(Nn, " ")
                    }),
                    O = O.slice(b.length));
                    for (I in r.filter)
                        (R = Pn[I].exec(O)) && (!K[I] || (R = K[I](R))) && (b = R.shift(),
                        w.push({
                            value: b,
                            type: I,
                            matches: R
                        }),
                        O = O.slice(b.length));
                    if (!b)
                        break
                }
                return v ? O.length : O ? It.error(h) : pn(h, z).slice(0)
            }
            ;
            function Bn(h) {
                for (var v = 0, b = h.length, R = ""; v < b; v++)
                    R += h[v].value;
                return R
            }
            function kn(h, v, b) {
                var R = v.dir
                  , w = v.next
                  , I = w || R
                  , O = b && I === "parentNode"
                  , z = Dt++;
                return v.first ? function(K, ht, ct) {
                    for (; K = K[R]; )
                        if (K.nodeType === 1 || O)
                            return h(K, ht, ct);
                    return !1
                }
                : function(K, ht, ct) {
                    var gt, Tt, jt, dt = [he, z];
                    if (ct) {
                        for (; K = K[R]; )
                            if ((K.nodeType === 1 || O) && h(K, ht, ct))
                                return !0
                    } else
                        for (; K = K[R]; )
                            if (K.nodeType === 1 || O)
                                if (jt = K[Rt] || (K[Rt] = {}),
                                Tt = jt[K.uniqueID] || (jt[K.uniqueID] = {}),
                                w && w === K.nodeName.toLowerCase())
                                    K = K[R] || K;
                                else {
                                    if ((gt = Tt[I]) && gt[0] === he && gt[1] === z)
                                        return dt[2] = gt[2];
                                    if (Tt[I] = dt,
                                    dt[2] = h(K, ht, ct))
                                        return !0
                                }
                    return !1
                }
            }
            function ii(h) {
                return h.length > 1 ? function(v, b, R) {
                    for (var w = h.length; w--; )
                        if (!h[w](v, b, R))
                            return !1;
                    return !0
                }
                : h[0]
            }
            function Vr(h, v, b) {
                for (var R = 0, w = v.length; R < w; R++)
                    It(h, v[R], b);
                return b
            }
            function Mn(h, v, b, R, w) {
                for (var I, O = [], z = 0, K = h.length, ht = v != null; z < K; z++)
                    (I = h[z]) && (!b || b(I, R, w)) && (O.push(I),
                    ht && v.push(z));
                return O
            }
            function ri(h, v, b, R, w, I) {
                return R && !R[Rt] && (R = ri(R)),
                w && !w[Rt] && (w = ri(w, I)),
                _e(function(O, z, K, ht) {
                    var ct, gt, Tt, jt = [], dt = [], re = z.length, ue = O || Vr(v || "*", K.nodeType ? [K] : K, []), be = h && (O || !v) ? Mn(ue, jt, h, K, ht) : ue, zt = b ? w || (O ? h : re || R) ? [] : z : be;
                    if (b && b(be, zt, K, ht),
                    R)
                        for (ct = Mn(zt, dt),
                        R(ct, [], K, ht),
                        gt = ct.length; gt--; )
                            (Tt = ct[gt]) && (zt[dt[gt]] = !(be[dt[gt]] = Tt));
                    if (O) {
                        if (w || h) {
                            if (w) {
                                for (ct = [],
                                gt = zt.length; gt--; )
                                    (Tt = zt[gt]) && ct.push(be[gt] = Tt);
                                w(null, zt = [], ct, ht)
                            }
                            for (gt = zt.length; gt--; )
                                (Tt = zt[gt]) && (ct = w ? Xe(O, Tt) : jt[gt]) > -1 && (O[ct] = !(z[ct] = Tt))
                        }
                    } else
                        zt = Mn(zt === z ? zt.splice(re, zt.length) : zt),
                        w ? w(null, z, zt, ht) : Re.apply(z, zt)
                })
            }
            function si(h) {
                for (var v, b, R, w = h.length, I = r.relative[h[0].type], O = I || r.relative[" "], z = I ? 1 : 0, K = kn(function(gt) {
                    return gt === v
                }, O, !0), ht = kn(function(gt) {
                    return Xe(v, gt) > -1
                }, O, !0), ct = [function(gt, Tt, jt) {
                    var dt = !I && (jt || Tt !== E) || ((v = Tt).nodeType ? K(gt, Tt, jt) : ht(gt, Tt, jt));
                    return v = null,
                    dt
                }
                ]; z < w; z++)
                    if (b = r.relative[h[z].type])
                        ct = [kn(ii(ct), b)];
                    else {
                        if (b = r.filter[h[z].type].apply(null, h[z].matches),
                        b[Rt]) {
                            for (R = ++z; R < w && !r.relative[h[R].type]; R++)
                                ;
                            return ri(z > 1 && ii(ct), z > 1 && Bn(h.slice(0, z - 1).concat({
                                value: h[z - 2].type === " " ? "*" : ""
                            })).replace(Nn, "$1"), b, z < R && si(h.slice(z, R)), R < w && si(h = h.slice(R)), R < w && Bn(h))
                        }
                        ct.push(b)
                    }
                return ii(ct)
            }
            function Wr(h, v) {
                var b = v.length > 0
                  , R = h.length > 0
                  , w = function(I, O, z, K, ht) {
                    var ct, gt, Tt, jt = 0, dt = "0", re = I && [], ue = [], be = E, zt = I || R && r.find.TAG("*", ht), vn = he += be == null ? 1 : Math.random() || .1, mn = zt.length;
                    for (ht && (E = O == M || O || ht); dt !== mn && (ct = zt[dt]) != null; dt++) {
                        if (R && ct) {
                            for (gt = 0,
                            !O && ct.ownerDocument != M && (P(ct),
                            z = !bt); Tt = h[gt++]; )
                                if (Tt(ct, O || M, z)) {
                                    K.push(ct);
                                    break
                                }
                            ht && (he = vn)
                        }
                        b && ((ct = !Tt && ct) && jt--,
                        I && re.push(ct))
                    }
                    if (jt += dt,
                    b && dt !== jt) {
                        for (gt = 0; Tt = v[gt++]; )
                            Tt(re, ue, O, z);
                        if (I) {
                            if (jt > 0)
                                for (; dt--; )
                                    re[dt] || ue[dt] || (ue[dt] = $e.call(K));
                            ue = Mn(ue)
                        }
                        Re.apply(K, ue),
                        ht && !I && ue.length > 0 && jt + v.length > 1 && It.uniqueSort(K)
                    }
                    return ht && (he = vn,
                    E = be),
                    re
                };
                return b ? _e(w) : w
            }
            return m = It.compile = function(h, v) {
                var b, R = [], w = [], I = _n[h + " "];
                if (!I) {
                    for (v || (v = f(h)),
                    b = v.length; b--; )
                        I = si(v[b]),
                        I[Rt] ? R.push(I) : w.push(I);
                    I = _n(h, Wr(w, R)),
                    I.selector = h
                }
                return I
            }
            ,
            g = It.select = function(h, v, b, R) {
                var w, I, O, z, K, ht = typeof h == "function" && h, ct = !R && f(h = ht.selector || h);
                if (b = b || [],
                ct.length === 1) {
                    if (I = ct[0] = ct[0].slice(0),
                    I.length > 2 && (O = I[0]).type === "ID" && v.nodeType === 9 && bt && r.relative[I[1].type]) {
                        if (v = (r.find.ID(O.matches[0].replace(Be, ke), v) || [])[0],
                        v)
                            ht && (v = v.parentNode);
                        else
                            return b;
                        h = h.slice(I.shift().value.length)
                    }
                    for (w = Pn.needsContext.test(h) ? 0 : I.length; w-- && (O = I[w],
                    !r.relative[z = O.type]); )
                        if ((K = r.find[z]) && (R = K(O.matches[0].replace(Be, ke), ti.test(I[0].type) && ni(v.parentNode) || v))) {
                            if (I.splice(w, 1),
                            h = R.length && Bn(I),
                            !h)
                                return Re.apply(b, R),
                                b;
                            break
                        }
                }
                return (ht || m(h, ct))(R, v, !bt, b, !v || ti.test(h) && ni(v.parentNode) || v),
                b
            }
            ,
            i.sortStable = Rt.split("").sort(Ue).join("") === Rt,
            i.detectDuplicates = !!j,
            P(),
            i.sortDetached = Ee(function(h) {
                return h.compareDocumentPosition(M.createElement("fieldset")) & 1
            }),
            Ee(function(h) {
                return h.innerHTML = "<a href='#'></a>",
                h.firstChild.getAttribute("href") === "#"
            }) || ei("type|href|height|width", function(h, v, b) {
                if (!b)
                    return h.getAttribute(v, v.toLowerCase() === "type" ? 1 : 2)
            }),
            (!i.attributes || !Ee(function(h) {
                return h.innerHTML = "<input/>",
                h.firstChild.setAttribute("value", ""),
                h.firstChild.getAttribute("value") === ""
            })) && ei("value", function(h, v, b) {
                if (!b && h.nodeName.toLowerCase() === "input")
                    return h.defaultValue
            }),
            Ee(function(h) {
                return h.getAttribute("disabled") == null
            }) || ei(Kn, function(h, v, b) {
                var R;
                if (!b)
                    return h[v] === !0 ? v.toLowerCase() : (R = h.getAttributeNode(v)) && R.specified ? R.value : null
            }),
            It
        }(o);
        s.find = At,
        s.expr = At.selectors,
        s.expr[":"] = s.expr.pseudos,
        s.uniqueSort = s.unique = At.uniqueSort,
        s.text = At.getText,
        s.isXMLDoc = At.isXML,
        s.contains = At.contains,
        s.escapeSelector = At.escape;
        var Kt = function(t, e, i) {
            for (var r = [], a = i !== void 0; (t = t[e]) && t.nodeType !== 9; )
                if (t.nodeType === 1) {
                    if (a && s(t).is(i))
                        break;
                    r.push(t)
                }
            return r
        }
          , fe = function(t, e) {
            for (var i = []; t; t = t.nextSibling)
                t.nodeType === 1 && t !== e && i.push(t);
            return i
        }
          , Oe = s.expr.match.needsContext;
        function tt(t, e) {
            return t.nodeName && t.nodeName.toLowerCase() === e.toLowerCase()
        }
        var xt = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
        function pt(t, e, i) {
            return it(e) ? s.grep(t, function(r, a) {
                return !!e.call(r, a, r) !== i
            }) : e.nodeType ? s.grep(t, function(r) {
                return r === e !== i
            }) : typeof e != "string" ? s.grep(t, function(r) {
                return Q.call(e, r) > -1 !== i
            }) : s.filter(e, t, i)
        }
        s.filter = function(t, e, i) {
            var r = e[0];
            return i && (t = ":not(" + t + ")"),
            e.length === 1 && r.nodeType === 1 ? s.find.matchesSelector(r, t) ? [r] : [] : s.find.matches(t, s.grep(e, function(a) {
                return a.nodeType === 1
            }))
        }
        ,
        s.fn.extend({
            find: function(t) {
                var e, i, r = this.length, a = this;
                if (typeof t != "string")
                    return this.pushStack(s(t).filter(function() {
                        for (e = 0; e < r; e++)
                            if (s.contains(a[e], this))
                                return !0
                    }));
                for (i = this.pushStack([]),
                e = 0; e < r; e++)
                    s.find(t, a[e], i);
                return r > 1 ? s.uniqueSort(i) : i
            },
            filter: function(t) {
                return this.pushStack(pt(this, t || [], !1))
            },
            not: function(t) {
                return this.pushStack(pt(this, t || [], !0))
            },
            is: function(t) {
                return !!pt(this, typeof t == "string" && Oe.test(t) ? s(t) : t || [], !1).length
            }
        });
        var H, Et = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/, Mt = s.fn.init = function(t, e, i) {
            var r, a;
            if (!t)
                return this;
            if (i = i || H,
            typeof t == "string")
                if (t[0] === "<" && t[t.length - 1] === ">" && t.length >= 3 ? r = [null, t, null] : r = Et.exec(t),
                r && (r[1] || !e))
                    if (r[1]) {
                        if (e = e instanceof s ? e[0] : e,
                        s.merge(this, s.parseHTML(r[1], e && e.nodeType ? e.ownerDocument || e : rt, !0)),
                        xt.test(r[1]) && s.isPlainObject(e))
                            for (r in e)
                                it(this[r]) ? this[r](e[r]) : this.attr(r, e[r]);
                        return this
                    } else
                        return a = rt.getElementById(r[2]),
                        a && (this[0] = a,
                        this.length = 1),
                        this;
                else
                    return !e || e.jquery ? (e || i).find(t) : this.constructor(e).find(t);
            else {
                if (t.nodeType)
                    return this[0] = t,
                    this.length = 1,
                    this;
                if (it(t))
                    return i.ready !== void 0 ? i.ready(t) : t(s)
            }
            return s.makeArray(t, this)
        }
        ;
        Mt.prototype = s.fn,
        H = s(rt);
        var _t = /^(?:parents|prev(?:Until|All))/
          , ae = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };
        s.fn.extend({
            has: function(t) {
                var e = s(t, this)
                  , i = e.length;
                return this.filter(function() {
                    for (var r = 0; r < i; r++)
                        if (s.contains(this, e[r]))
                            return !0
                })
            },
            closest: function(t, e) {
                var i, r = 0, a = this.length, u = [], f = typeof t != "string" && s(t);
                if (!Oe.test(t)) {
                    for (; r < a; r++)
                        for (i = this[r]; i && i !== e; i = i.parentNode)
                            if (i.nodeType < 11 && (f ? f.index(i) > -1 : i.nodeType === 1 && s.find.matchesSelector(i, t))) {
                                u.push(i);
                                break
                            }
                }
                return this.pushStack(u.length > 1 ? s.uniqueSort(u) : u)
            },
            index: function(t) {
                return t ? typeof t == "string" ? Q.call(s(t), this[0]) : Q.call(this, t.jquery ? t[0] : t) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
            },
            add: function(t, e) {
                return this.pushStack(s.uniqueSort(s.merge(this.get(), s(t, e))))
            },
            addBack: function(t) {
                return this.add(t == null ? this.prevObject : this.prevObject.filter(t))
            }
        });
        function le(t, e) {
            for (; (t = t[e]) && t.nodeType !== 1; )
                ;
            return t
        }
        s.each({
            parent: function(t) {
                var e = t.parentNode;
                return e && e.nodeType !== 11 ? e : null
            },
            parents: function(t) {
                return Kt(t, "parentNode")
            },
            parentsUntil: function(t, e, i) {
                return Kt(t, "parentNode", i)
            },
            next: function(t) {
                return le(t, "nextSibling")
            },
            prev: function(t) {
                return le(t, "previousSibling")
            },
            nextAll: function(t) {
                return Kt(t, "nextSibling")
            },
            prevAll: function(t) {
                return Kt(t, "previousSibling")
            },
            nextUntil: function(t, e, i) {
                return Kt(t, "nextSibling", i)
            },
            prevUntil: function(t, e, i) {
                return Kt(t, "previousSibling", i)
            },
            siblings: function(t) {
                return fe((t.parentNode || {}).firstChild, t)
            },
            children: function(t) {
                return fe(t.firstChild)
            },
            contents: function(t) {
                return t.contentDocument != null && y(t.contentDocument) ? t.contentDocument : (tt(t, "template") && (t = t.content || t),
                s.merge([], t.childNodes))
            }
        }, function(t, e) {
            s.fn[t] = function(i, r) {
                var a = s.map(this, e, i);
                return t.slice(-5) !== "Until" && (r = i),
                r && typeof r == "string" && (a = s.filter(r, a)),
                this.length > 1 && (ae[t] || s.uniqueSort(a),
                _t.test(t) && a.reverse()),
                this.pushStack(a)
            }
        });
        var Vt = /[^\x20\t\r\n\f]+/g;
        function Se(t) {
            var e = {};
            return s.each(t.match(Vt) || [], function(i, r) {
                e[r] = !0
            }),
            e
        }
        s.Callbacks = function(t) {
            t = typeof t == "string" ? Se(t) : s.extend({}, t);
            var e, i, r, a, u = [], f = [], m = -1, g = function() {
                for (a = a || t.once,
                r = e = !0; f.length; m = -1)
                    for (i = f.shift(); ++m < u.length; )
                        u[m].apply(i[0], i[1]) === !1 && t.stopOnFalse && (m = u.length,
                        i = !1);
                t.memory || (i = !1),
                e = !1,
                a && (i ? u = [] : u = "")
            }, E = {
                add: function() {
                    return u && (i && !e && (m = u.length - 1,
                    f.push(i)),
                    function k(j) {
                        s.each(j, function(P, M) {
                            it(M) ? (!t.unique || !E.has(M)) && u.push(M) : M && M.length && St(M) !== "string" && k(M)
                        })
                    }(arguments),
                    i && !e && g()),
                    this
                },
                remove: function() {
                    return s.each(arguments, function(k, j) {
                        for (var P; (P = s.inArray(j, u, P)) > -1; )
                            u.splice(P, 1),
                            P <= m && m--
                    }),
                    this
                },
                has: function(k) {
                    return k ? s.inArray(k, u) > -1 : u.length > 0
                },
                empty: function() {
                    return u && (u = []),
                    this
                },
                disable: function() {
                    return a = f = [],
                    u = i = "",
                    this
                },
                disabled: function() {
                    return !u
                },
                lock: function() {
                    return a = f = [],
                    !i && !e && (u = i = ""),
                    this
                },
                locked: function() {
                    return !!a
                },
                fireWith: function(k, j) {
                    return a || (j = j || [],
                    j = [k, j.slice ? j.slice() : j],
                    f.push(j),
                    e || g()),
                    this
                },
                fire: function() {
                    return E.fireWith(this, arguments),
                    this
                },
                fired: function() {
                    return !!r
                }
            };
            return E
        }
        ;
        function Wt(t) {
            return t
        }
        function Pt(t) {
            throw t
        }
        function qe(t, e, i, r) {
            var a;
            try {
                t && it(a = t.promise) ? a.call(t).done(e).fail(i) : t && it(a = t.then) ? a.call(t, e, i) : e.apply(void 0, [t].slice(r))
            } catch (u) {
                i.apply(void 0, [u])
            }
        }
        s.extend({
            Deferred: function(t) {
                var e = [["notify", "progress", s.Callbacks("memory"), s.Callbacks("memory"), 2], ["resolve", "done", s.Callbacks("once memory"), s.Callbacks("once memory"), 0, "resolved"], ["reject", "fail", s.Callbacks("once memory"), s.Callbacks("once memory"), 1, "rejected"]]
                  , i = "pending"
                  , r = {
                    state: function() {
                        return i
                    },
                    always: function() {
                        return a.done(arguments).fail(arguments),
                        this
                    },
                    catch: function(u) {
                        return r.then(null, u)
                    },
                    pipe: function() {
                        var u = arguments;
                        return s.Deferred(function(f) {
                            s.each(e, function(m, g) {
                                var E = it(u[g[4]]) && u[g[4]];
                                a[g[1]](function() {
                                    var k = E && E.apply(this, arguments);
                                    k && it(k.promise) ? k.promise().progress(f.notify).done(f.resolve).fail(f.reject) : f[g[0] + "With"](this, E ? [k] : arguments)
                                })
                            }),
                            u = null
                        }).promise()
                    },
                    then: function(u, f, m) {
                        var g = 0;
                        function E(k, j, P, M) {
                            return function() {
                                var ft = this
                                  , bt = arguments
                                  , ut = function() {
                                    var Jt, ye;
                                    if (!(k < g)) {
                                        if (Jt = P.apply(ft, bt),
                                        Jt === j.promise())
                                            throw new TypeError("Thenable self-resolution");
                                        ye = Jt && (typeof Jt == "object" || typeof Jt == "function") && Jt.then,
                                        it(ye) ? M ? ye.call(Jt, E(g, j, Wt, M), E(g, j, Pt, M)) : (g++,
                                        ye.call(Jt, E(g, j, Wt, M), E(g, j, Pt, M), E(g, j, Wt, j.notifyWith))) : (P !== Wt && (ft = void 0,
                                        bt = [Jt]),
                                        (M || j.resolveWith)(ft, bt))
                                    }
                                }
                                  , ie = M ? ut : function() {
                                    try {
                                        ut()
                                    } catch (Jt) {
                                        s.Deferred.exceptionHook && s.Deferred.exceptionHook(Jt, ie.stackTrace),
                                        k + 1 >= g && (P !== Pt && (ft = void 0,
                                        bt = [Jt]),
                                        j.rejectWith(ft, bt))
                                    }
                                }
                                ;
                                k ? ie() : (s.Deferred.getStackHook && (ie.stackTrace = s.Deferred.getStackHook()),
                                o.setTimeout(ie))
                            }
                        }
                        return s.Deferred(function(k) {
                            e[0][3].add(E(0, k, it(m) ? m : Wt, k.notifyWith)),
                            e[1][3].add(E(0, k, it(u) ? u : Wt)),
                            e[2][3].add(E(0, k, it(f) ? f : Pt))
                        }).promise()
                    },
                    promise: function(u) {
                        return u != null ? s.extend(u, r) : r
                    }
                }
                  , a = {};
                return s.each(e, function(u, f) {
                    var m = f[2]
                      , g = f[5];
                    r[f[1]] = m.add,
                    g && m.add(function() {
                        i = g
                    }, e[3 - u][2].disable, e[3 - u][3].disable, e[0][2].lock, e[0][3].lock),
                    m.add(f[3].fire),
                    a[f[0]] = function() {
                        return a[f[0] + "With"](this === a ? void 0 : this, arguments),
                        this
                    }
                    ,
                    a[f[0] + "With"] = m.fireWith
                }),
                r.promise(a),
                t && t.call(a, a),
                a
            },
            when: function(t) {
                var e = arguments.length
                  , i = e
                  , r = Array(i)
                  , a = C.call(arguments)
                  , u = s.Deferred()
                  , f = function(m) {
                    return function(g) {
                        r[m] = this,
                        a[m] = arguments.length > 1 ? C.call(arguments) : g,
                        --e || u.resolveWith(r, a)
                    }
                };
                if (e <= 1 && (qe(t, u.done(f(i)).resolve, u.reject, !e),
                u.state() === "pending" || it(a[i] && a[i].then)))
                    return u.then();
                for (; i--; )
                    qe(a[i], f(i), u.reject);
                return u.promise()
            }
        });
        var tn = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
        s.Deferred.exceptionHook = function(t, e) {
            o.console && o.console.warn && t && tn.test(t.name) && o.console.warn("jQuery.Deferred exception: " + t.message, t.stack, e)
        }
        ,
        s.readyException = function(t) {
            o.setTimeout(function() {
                throw t
            })
        }
        ;
        var Te = s.Deferred();
        s.fn.ready = function(t) {
            return Te.then(t).catch(function(e) {
                s.readyException(e)
            }),
            this
        }
        ,
        s.extend({
            isReady: !1,
            readyWait: 1,
            ready: function(t) {
                (t === !0 ? --s.readyWait : s.isReady) || (s.isReady = !0,
                !(t !== !0 && --s.readyWait > 0) && Te.resolveWith(rt, [s]))
            }
        }),
        s.ready.then = Te.then;
        function ge() {
            rt.removeEventListener("DOMContentLoaded", ge),
            o.removeEventListener("load", ge),
            s.ready()
        }
        rt.readyState === "complete" || rt.readyState !== "loading" && !rt.documentElement.doScroll ? o.setTimeout(s.ready) : (rt.addEventListener("DOMContentLoaded", ge),
        o.addEventListener("load", ge));
        var U = function(t, e, i, r, a, u, f) {
            var m = 0
              , g = t.length
              , E = i == null;
            if (St(i) === "object") {
                a = !0;
                for (m in i)
                    U(t, e, m, i[m], !0, u, f)
            } else if (r !== void 0 && (a = !0,
            it(r) || (f = !0),
            E && (f ? (e.call(t, r),
            e = null) : (E = e,
            e = function(k, j, P) {
                return E.call(s(k), P)
            }
            )),
            e))
                for (; m < g; m++)
                    e(t[m], i, f ? r : r.call(t[m], m, e(t[m], i)));
            return a ? t : E ? e.call(t) : g ? e(t[0], i) : u
        }
          , Cn = /^-ms-/
          , en = /-([a-z])/g;
        function Tn(t, e) {
            return e.toUpperCase()
        }
        function ve(t) {
            return t.replace(Cn, "ms-").replace(en, Tn)
        }
        var Fe = function(t) {
            return t.nodeType === 1 || t.nodeType === 9 || !+t.nodeType
        };
        function te() {
            this.expando = s.expando + te.uid++
        }
        te.uid = 1,
        te.prototype = {
            cache: function(t) {
                var e = t[this.expando];
                return e || (e = {},
                Fe(t) && (t.nodeType ? t[this.expando] = e : Object.defineProperty(t, this.expando, {
                    value: e,
                    configurable: !0
                }))),
                e
            },
            set: function(t, e, i) {
                var r, a = this.cache(t);
                if (typeof e == "string")
                    a[ve(e)] = i;
                else
                    for (r in e)
                        a[ve(r)] = e[r];
                return a
            },
            get: function(t, e) {
                return e === void 0 ? this.cache(t) : t[this.expando] && t[this.expando][ve(e)]
            },
            access: function(t, e, i) {
                return e === void 0 || e && typeof e == "string" && i === void 0 ? this.get(t, e) : (this.set(t, e, i),
                i !== void 0 ? i : e)
            },
            remove: function(t, e) {
                var i, r = t[this.expando];
                if (r !== void 0) {
                    if (e !== void 0)
                        for (Array.isArray(e) ? e = e.map(ve) : (e = ve(e),
                        e = e in r ? [e] : e.match(Vt) || []),
                        i = e.length; i--; )
                            delete r[e[i]];
                    (e === void 0 || s.isEmptyObject(r)) && (t.nodeType ? t[this.expando] = void 0 : delete t[this.expando])
                }
            },
            hasData: function(t) {
                var e = t[this.expando];
                return e !== void 0 && !s.isEmptyObject(e)
            }
        };
        var et = new te
          , c = new te
          , d = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/
          , _ = /[A-Z]/g;
        function T(t) {
            return t === "true" ? !0 : t === "false" ? !1 : t === "null" ? null : t === +t + "" ? +t : d.test(t) ? JSON.parse(t) : t
        }
        function S(t, e, i) {
            var r;
            if (i === void 0 && t.nodeType === 1)
                if (r = "data-" + e.replace(_, "-$&").toLowerCase(),
                i = t.getAttribute(r),
                typeof i == "string") {
                    try {
                        i = T(i)
                    } catch {}
                    c.set(t, e, i)
                } else
                    i = void 0;
            return i
        }
        s.extend({
            hasData: function(t) {
                return c.hasData(t) || et.hasData(t)
            },
            data: function(t, e, i) {
                return c.access(t, e, i)
            },
            removeData: function(t, e) {
                c.remove(t, e)
            },
            _data: function(t, e, i) {
                return et.access(t, e, i)
            },
            _removeData: function(t, e) {
                et.remove(t, e)
            }
        }),
        s.fn.extend({
            data: function(t, e) {
                var i, r, a, u = this[0], f = u && u.attributes;
                if (t === void 0) {
                    if (this.length && (a = c.get(u),
                    u.nodeType === 1 && !et.get(u, "hasDataAttrs"))) {
                        for (i = f.length; i--; )
                            f[i] && (r = f[i].name,
                            r.indexOf("data-") === 0 && (r = ve(r.slice(5)),
                            S(u, r, a[r])));
                        et.set(u, "hasDataAttrs", !0)
                    }
                    return a
                }
                return typeof t == "object" ? this.each(function() {
                    c.set(this, t)
                }) : U(this, function(m) {
                    var g;
                    if (u && m === void 0)
                        return g = c.get(u, t),
                        g !== void 0 || (g = S(u, t),
                        g !== void 0) ? g : void 0;
                    this.each(function() {
                        c.set(this, t, m)
                    })
                }, null, e, arguments.length > 1, null, !0)
            },
            removeData: function(t) {
                return this.each(function() {
                    c.remove(this, t)
                })
            }
        }),
        s.extend({
            queue: function(t, e, i) {
                var r;
                if (t)
                    return e = (e || "fx") + "queue",
                    r = et.get(t, e),
                    i && (!r || Array.isArray(i) ? r = et.access(t, e, s.makeArray(i)) : r.push(i)),
                    r || []
            },
            dequeue: function(t, e) {
                e = e || "fx";
                var i = s.queue(t, e)
                  , r = i.length
                  , a = i.shift()
                  , u = s._queueHooks(t, e)
                  , f = function() {
                    s.dequeue(t, e)
                };
                a === "inprogress" && (a = i.shift(),
                r--),
                a && (e === "fx" && i.unshift("inprogress"),
                delete u.stop,
                a.call(t, f, u)),
                !r && u && u.empty.fire()
            },
            _queueHooks: function(t, e) {
                var i = e + "queueHooks";
                return et.get(t, i) || et.access(t, i, {
                    empty: s.Callbacks("once memory").add(function() {
                        et.remove(t, [e + "queue", i])
                    })
                })
            }
        }),
        s.fn.extend({
            queue: function(t, e) {
                var i = 2;
                return typeof t != "string" && (e = t,
                t = "fx",
                i--),
                arguments.length < i ? s.queue(this[0], t) : e === void 0 ? this : this.each(function() {
                    var r = s.queue(this, t, e);
                    s._queueHooks(this, t),
                    t === "fx" && r[0] !== "inprogress" && s.dequeue(this, t)
                })
            },
            dequeue: function(t) {
                return this.each(function() {
                    s.dequeue(this, t)
                })
            },
            clearQueue: function(t) {
                return this.queue(t || "fx", [])
            },
            promise: function(t, e) {
                var i, r = 1, a = s.Deferred(), u = this, f = this.length, m = function() {
                    --r || a.resolveWith(u, [u])
                };
                for (typeof t != "string" && (e = t,
                t = void 0),
                t = t || "fx"; f--; )
                    i = et.get(u[f], t + "queueHooks"),
                    i && i.empty && (r++,
                    i.empty.add(m));
                return m(),
                a.promise(e)
            }
        });
        var $ = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source
          , N = new RegExp("^(?:([+-])=|)(" + $ + ")([a-z%]*)$","i")
          , x = ["Top", "Right", "Bottom", "Left"]
          , A = rt.documentElement
          , q = function(t) {
            return s.contains(t.ownerDocument, t)
        }
          , W = {
            composed: !0
        };
        A.getRootNode && (q = function(t) {
            return s.contains(t.ownerDocument, t) || t.getRootNode(W) === t.ownerDocument
        }
        );
        var Y = function(t, e) {
            return t = e || t,
            t.style.display === "none" || t.style.display === "" && q(t) && s.css(t, "display") === "none"
        };
        function vt(t, e, i, r) {
            var a, u, f = 20, m = r ? function() {
                return r.cur()
            }
            : function() {
                return s.css(t, e, "")
            }
            , g = m(), E = i && i[3] || (s.cssNumber[e] ? "" : "px"), k = t.nodeType && (s.cssNumber[e] || E !== "px" && +g) && N.exec(s.css(t, e));
            if (k && k[3] !== E) {
                for (g = g / 2,
                E = E || k[3],
                k = +g || 1; f--; )
                    s.style(t, e, k + E),
                    (1 - u) * (1 - (u = m() / g || .5)) <= 0 && (f = 0),
                    k = k / u;
                k = k * 2,
                s.style(t, e, k + E),
                i = i || []
            }
            return i && (k = +k || +g || 0,
            a = i[1] ? k + (i[1] + 1) * i[2] : +i[2],
            r && (r.unit = E,
            r.start = k,
            r.end = a)),
            a
        }
        var Ct = {};
        function Lt(t) {
            var e, i = t.ownerDocument, r = t.nodeName, a = Ct[r];
            return a || (e = i.body.appendChild(i.createElement(r)),
            a = s.css(e, "display"),
            e.parentNode.removeChild(e),
            a === "none" && (a = "block"),
            Ct[r] = a,
            a)
        }
        function qt(t, e) {
            for (var i, r, a = [], u = 0, f = t.length; u < f; u++)
                r = t[u],
                r.style && (i = r.style.display,
                e ? (i === "none" && (a[u] = et.get(r, "display") || null,
                a[u] || (r.style.display = "")),
                r.style.display === "" && Y(r) && (a[u] = Lt(r))) : i !== "none" && (a[u] = "none",
                et.set(r, "display", i)));
            for (u = 0; u < f; u++)
                a[u] != null && (t[u].style.display = a[u]);
            return t
        }
        s.fn.extend({
            show: function() {
                return qt(this, !0)
            },
            hide: function() {
                return qt(this)
            },
            toggle: function(t) {
                return typeof t == "boolean" ? t ? this.show() : this.hide() : this.each(function() {
                    Y(this) ? s(this).show() : s(this).hide()
                })
            }
        });
        var Qt = /^(?:checkbox|radio)$/i
          , $t = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i
          , Nt = /^$|^module$|\/(?:java|ecma)script/i;
        (function() {
            var t = rt.createDocumentFragment()
              , e = t.appendChild(rt.createElement("div"))
              , i = rt.createElement("input");
            i.setAttribute("type", "radio"),
            i.setAttribute("checked", "checked"),
            i.setAttribute("name", "t"),
            e.appendChild(i),
            G.checkClone = e.cloneNode(!0).cloneNode(!0).lastChild.checked,
            e.innerHTML = "<textarea>x</textarea>",
            G.noCloneChecked = !!e.cloneNode(!0).lastChild.defaultValue,
            e.innerHTML = "<option></option>",
            G.option = !!e.lastChild
        }
        )();
        var Bt = {
            thead: [1, "<table>", "</table>"],
            col: [2, "<table><colgroup>", "</colgroup></table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: [0, "", ""]
        };
        Bt.tbody = Bt.tfoot = Bt.colgroup = Bt.caption = Bt.thead,
        Bt.th = Bt.td,
        G.option || (Bt.optgroup = Bt.option = [1, "<select multiple='multiple'>", "</select>"]);
        function ee(t, e) {
            var i;
            return typeof t.getElementsByTagName < "u" ? i = t.getElementsByTagName(e || "*") : typeof t.querySelectorAll < "u" ? i = t.querySelectorAll(e || "*") : i = [],
            e === void 0 || e && tt(t, e) ? s.merge([t], i) : i
        }
        function He(t, e) {
            for (var i = 0, r = t.length; i < r; i++)
                et.set(t[i], "globalEval", !e || et.get(e[i], "globalEval"))
        }
        var ln = /<|&#?\w+;/;
        function me(t, e, i, r, a) {
            for (var u, f, m, g, E, k, j = e.createDocumentFragment(), P = [], M = 0, ft = t.length; M < ft; M++)
                if (u = t[M],
                u || u === 0)
                    if (St(u) === "object")
                        s.merge(P, u.nodeType ? [u] : u);
                    else if (!ln.test(u))
                        P.push(e.createTextNode(u));
                    else {
                        for (f = f || j.appendChild(e.createElement("div")),
                        m = ($t.exec(u) || ["", ""])[1].toLowerCase(),
                        g = Bt[m] || Bt._default,
                        f.innerHTML = g[1] + s.htmlPrefilter(u) + g[2],
                        k = g[0]; k--; )
                            f = f.lastChild;
                        s.merge(P, f.childNodes),
                        f = j.firstChild,
                        f.textContent = ""
                    }
            for (j.textContent = "",
            M = 0; u = P[M++]; ) {
                if (r && s.inArray(u, r) > -1) {
                    a && a.push(u);
                    continue
                }
                if (E = q(u),
                f = ee(j.appendChild(u), "script"),
                E && He(f),
                i)
                    for (k = 0; u = f[k++]; )
                        Nt.test(u.type || "") && i.push(u)
            }
            return j
        }
        var Ye = /^([^.]*)(?:\.(.+)|)/;
        function ne() {
            return !0
        }
        function Zt() {
            return !1
        }
        function Ut(t, e) {
            return t === Qi() == (e === "focus")
        }
        function Qi() {
            try {
                return rt.activeElement
            } catch {}
        }
        function jn(t, e, i, r, a, u) {
            var f, m;
            if (typeof e == "object") {
                typeof i != "string" && (r = r || i,
                i = void 0);
                for (m in e)
                    jn(t, m, i, r, e[m], u);
                return t
            }
            if (r == null && a == null ? (a = i,
            r = i = void 0) : a == null && (typeof i == "string" ? (a = r,
            r = void 0) : (a = r,
            r = i,
            i = void 0)),
            a === !1)
                a = Zt;
            else if (!a)
                return t;
            return u === 1 && (f = a,
            a = function(g) {
                return s().off(g),
                f.apply(this, arguments)
            }
            ,
            a.guid = f.guid || (f.guid = s.guid++)),
            t.each(function() {
                s.event.add(this, e, a, r, i)
            })
        }
        s.event = {
            global: {},
            add: function(t, e, i, r, a) {
                var u, f, m, g, E, k, j, P, M, ft, bt, ut = et.get(t);
                if (Fe(t))
                    for (i.handler && (u = i,
                    i = u.handler,
                    a = u.selector),
                    a && s.find.matchesSelector(A, a),
                    i.guid || (i.guid = s.guid++),
                    (g = ut.events) || (g = ut.events = Object.create(null)),
                    (f = ut.handle) || (f = ut.handle = function(ie) {
                        return typeof s < "u" && s.event.triggered !== ie.type ? s.event.dispatch.apply(t, arguments) : void 0
                    }
                    ),
                    e = (e || "").match(Vt) || [""],
                    E = e.length; E--; )
                        m = Ye.exec(e[E]) || [],
                        M = bt = m[1],
                        ft = (m[2] || "").split(".").sort(),
                        M && (j = s.event.special[M] || {},
                        M = (a ? j.delegateType : j.bindType) || M,
                        j = s.event.special[M] || {},
                        k = s.extend({
                            type: M,
                            origType: bt,
                            data: r,
                            handler: i,
                            guid: i.guid,
                            selector: a,
                            needsContext: a && s.expr.match.needsContext.test(a),
                            namespace: ft.join(".")
                        }, u),
                        (P = g[M]) || (P = g[M] = [],
                        P.delegateCount = 0,
                        (!j.setup || j.setup.call(t, r, ft, f) === !1) && t.addEventListener && t.addEventListener(M, f)),
                        j.add && (j.add.call(t, k),
                        k.handler.guid || (k.handler.guid = i.guid)),
                        a ? P.splice(P.delegateCount++, 0, k) : P.push(k),
                        s.event.global[M] = !0)
            },
            remove: function(t, e, i, r, a) {
                var u, f, m, g, E, k, j, P, M, ft, bt, ut = et.hasData(t) && et.get(t);
                if (!(!ut || !(g = ut.events))) {
                    for (e = (e || "").match(Vt) || [""],
                    E = e.length; E--; ) {
                        if (m = Ye.exec(e[E]) || [],
                        M = bt = m[1],
                        ft = (m[2] || "").split(".").sort(),
                        !M) {
                            for (M in g)
                                s.event.remove(t, M + e[E], i, r, !0);
                            continue
                        }
                        for (j = s.event.special[M] || {},
                        M = (r ? j.delegateType : j.bindType) || M,
                        P = g[M] || [],
                        m = m[2] && new RegExp("(^|\\.)" + ft.join("\\.(?:.*\\.|)") + "(\\.|$)"),
                        f = u = P.length; u--; )
                            k = P[u],
                            (a || bt === k.origType) && (!i || i.guid === k.guid) && (!m || m.test(k.namespace)) && (!r || r === k.selector || r === "**" && k.selector) && (P.splice(u, 1),
                            k.selector && P.delegateCount--,
                            j.remove && j.remove.call(t, k));
                        f && !P.length && ((!j.teardown || j.teardown.call(t, ft, ut.handle) === !1) && s.removeEvent(t, M, ut.handle),
                        delete g[M])
                    }
                    s.isEmptyObject(g) && et.remove(t, "handle events")
                }
            },
            dispatch: function(t) {
                var e, i, r, a, u, f, m = new Array(arguments.length), g = s.event.fix(t), E = (et.get(this, "events") || Object.create(null))[g.type] || [], k = s.event.special[g.type] || {};
                for (m[0] = g,
                e = 1; e < arguments.length; e++)
                    m[e] = arguments[e];
                if (g.delegateTarget = this,
                !(k.preDispatch && k.preDispatch.call(this, g) === !1)) {
                    for (f = s.event.handlers.call(this, g, E),
                    e = 0; (a = f[e++]) && !g.isPropagationStopped(); )
                        for (g.currentTarget = a.elem,
                        i = 0; (u = a.handlers[i++]) && !g.isImmediatePropagationStopped(); )
                            (!g.rnamespace || u.namespace === !1 || g.rnamespace.test(u.namespace)) && (g.handleObj = u,
                            g.data = u.data,
                            r = ((s.event.special[u.origType] || {}).handle || u.handler).apply(a.elem, m),
                            r !== void 0 && (g.result = r) === !1 && (g.preventDefault(),
                            g.stopPropagation()));
                    return k.postDispatch && k.postDispatch.call(this, g),
                    g.result
                }
            },
            handlers: function(t, e) {
                var i, r, a, u, f, m = [], g = e.delegateCount, E = t.target;
                if (g && E.nodeType && !(t.type === "click" && t.button >= 1)) {
                    for (; E !== this; E = E.parentNode || this)
                        if (E.nodeType === 1 && !(t.type === "click" && E.disabled === !0)) {
                            for (u = [],
                            f = {},
                            i = 0; i < g; i++)
                                r = e[i],
                                a = r.selector + " ",
                                f[a] === void 0 && (f[a] = r.needsContext ? s(a, this).index(E) > -1 : s.find(a, this, null, [E]).length),
                                f[a] && u.push(r);
                            u.length && m.push({
                                elem: E,
                                handlers: u
                            })
                        }
                }
                return E = this,
                g < e.length && m.push({
                    elem: E,
                    handlers: e.slice(g)
                }),
                m
            },
            addProp: function(t, e) {
                Object.defineProperty(s.Event.prototype, t, {
                    enumerable: !0,
                    configurable: !0,
                    get: it(e) ? function() {
                        if (this.originalEvent)
                            return e(this.originalEvent)
                    }
                    : function() {
                        if (this.originalEvent)
                            return this.originalEvent[t]
                    }
                    ,
                    set: function(i) {
                        Object.defineProperty(this, t, {
                            enumerable: !0,
                            configurable: !0,
                            writable: !0,
                            value: i
                        })
                    }
                })
            },
            fix: function(t) {
                return t[s.expando] ? t : new s.Event(t)
            },
            special: {
                load: {
                    noBubble: !0
                },
                click: {
                    setup: function(t) {
                        var e = this || t;
                        return Qt.test(e.type) && e.click && tt(e, "input") && wn(e, "click", ne),
                        !1
                    },
                    trigger: function(t) {
                        var e = this || t;
                        return Qt.test(e.type) && e.click && tt(e, "input") && wn(e, "click"),
                        !0
                    },
                    _default: function(t) {
                        var e = t.target;
                        return Qt.test(e.type) && e.click && tt(e, "input") && et.get(e, "click") || tt(e, "a")
                    }
                },
                beforeunload: {
                    postDispatch: function(t) {
                        t.result !== void 0 && t.originalEvent && (t.originalEvent.returnValue = t.result)
                    }
                }
            }
        };
        function wn(t, e, i) {
            if (!i) {
                et.get(t, e) === void 0 && s.event.add(t, e, ne);
                return
            }
            et.set(t, e, !1),
            s.event.add(t, e, {
                namespace: !1,
                handler: function(r) {
                    var a, u, f = et.get(this, e);
                    if (r.isTrigger & 1 && this[e]) {
                        if (f.length)
                            (s.event.special[e] || {}).delegateType && r.stopPropagation();
                        else if (f = C.call(arguments),
                        et.set(this, e, f),
                        a = i(this, e),
                        this[e](),
                        u = et.get(this, e),
                        f !== u || a ? et.set(this, e, !1) : u = {},
                        f !== u)
                            return r.stopImmediatePropagation(),
                            r.preventDefault(),
                            u && u.value
                    } else
                        f.length && (et.set(this, e, {
                            value: s.event.trigger(s.extend(f[0], s.Event.prototype), f.slice(1), this)
                        }),
                        r.stopImmediatePropagation())
                }
            })
        }
        s.removeEvent = function(t, e, i) {
            t.removeEventListener && t.removeEventListener(e, i)
        }
        ,
        s.Event = function(t, e) {
            if (!(this instanceof s.Event))
                return new s.Event(t,e);
            t && t.type ? (this.originalEvent = t,
            this.type = t.type,
            this.isDefaultPrevented = t.defaultPrevented || t.defaultPrevented === void 0 && t.returnValue === !1 ? ne : Zt,
            this.target = t.target && t.target.nodeType === 3 ? t.target.parentNode : t.target,
            this.currentTarget = t.currentTarget,
            this.relatedTarget = t.relatedTarget) : this.type = t,
            e && s.extend(this, e),
            this.timeStamp = t && t.timeStamp || Date.now(),
            this[s.expando] = !0
        }
        ,
        s.Event.prototype = {
            constructor: s.Event,
            isDefaultPrevented: Zt,
            isPropagationStopped: Zt,
            isImmediatePropagationStopped: Zt,
            isSimulated: !1,
            preventDefault: function() {
                var t = this.originalEvent;
                this.isDefaultPrevented = ne,
                t && !this.isSimulated && t.preventDefault()
            },
            stopPropagation: function() {
                var t = this.originalEvent;
                this.isPropagationStopped = ne,
                t && !this.isSimulated && t.stopPropagation()
            },
            stopImmediatePropagation: function() {
                var t = this.originalEvent;
                this.isImmediatePropagationStopped = ne,
                t && !this.isSimulated && t.stopImmediatePropagation(),
                this.stopPropagation()
            }
        },
        s.each({
            altKey: !0,
            bubbles: !0,
            cancelable: !0,
            changedTouches: !0,
            ctrlKey: !0,
            detail: !0,
            eventPhase: !0,
            metaKey: !0,
            pageX: !0,
            pageY: !0,
            shiftKey: !0,
            view: !0,
            char: !0,
            code: !0,
            charCode: !0,
            key: !0,
            keyCode: !0,
            button: !0,
            buttons: !0,
            clientX: !0,
            clientY: !0,
            offsetX: !0,
            offsetY: !0,
            pointerId: !0,
            pointerType: !0,
            screenX: !0,
            screenY: !0,
            targetTouches: !0,
            toElement: !0,
            touches: !0,
            which: !0
        }, s.event.addProp),
        s.each({
            focus: "focusin",
            blur: "focusout"
        }, function(t, e) {
            s.event.special[t] = {
                setup: function() {
                    return wn(this, t, Ut),
                    !1
                },
                trigger: function() {
                    return wn(this, t),
                    !0
                },
                _default: function(i) {
                    return et.get(i.target, t)
                },
                delegateType: e
            }
        }),
        s.each({
            mouseenter: "mouseover",
            mouseleave: "mouseout",
            pointerenter: "pointerover",
            pointerleave: "pointerout"
        }, function(t, e) {
            s.event.special[t] = {
                delegateType: e,
                bindType: e,
                handle: function(i) {
                    var r, a = this, u = i.relatedTarget, f = i.handleObj;
                    return (!u || u !== a && !s.contains(a, u)) && (i.type = f.origType,
                    r = f.handler.apply(this, arguments),
                    i.type = e),
                    r
                }
            }
        }),
        s.fn.extend({
            on: function(t, e, i, r) {
                return jn(this, t, e, i, r)
            },
            one: function(t, e, i, r) {
                return jn(this, t, e, i, r, 1)
            },
            off: function(t, e, i) {
                var r, a;
                if (t && t.preventDefault && t.handleObj)
                    return r = t.handleObj,
                    s(t.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler),
                    this;
                if (typeof t == "object") {
                    for (a in t)
                        this.off(a, e, t[a]);
                    return this
                }
                return (e === !1 || typeof e == "function") && (i = e,
                e = void 0),
                i === !1 && (i = Zt),
                this.each(function() {
                    s.event.remove(this, t, i, e)
                })
            }
        });
        var Ki = /<script|<style|<link/i
          , Ji = /checked\s*(?:[^=]|=\s*.checked.)/i
          , tr = /^\s*<!\[CDATA\[|\]\]>\s*$/g;
        function hi(t, e) {
            return tt(t, "table") && tt(e.nodeType !== 11 ? e : e.firstChild, "tr") && s(t).children("tbody")[0] || t
        }
        function er(t) {
            return t.type = (t.getAttribute("type") !== null) + "/" + t.type,
            t
        }
        function nr(t) {
            return (t.type || "").slice(0, 5) === "true/" ? t.type = t.type.slice(5) : t.removeAttribute("type"),
            t
        }
        function di(t, e) {
            var i, r, a, u, f, m, g;
            if (e.nodeType === 1) {
                if (et.hasData(t) && (u = et.get(t),
                g = u.events,
                g)) {
                    et.remove(e, "handle events");
                    for (a in g)
                        for (i = 0,
                        r = g[a].length; i < r; i++)
                            s.event.add(e, a, g[a][i])
                }
                c.hasData(t) && (f = c.access(t),
                m = s.extend({}, f),
                c.set(e, m))
            }
        }
        function ir(t, e) {
            var i = e.nodeName.toLowerCase();
            i === "input" && Qt.test(t.type) ? e.checked = t.checked : (i === "input" || i === "textarea") && (e.defaultValue = t.defaultValue)
        }
        function nn(t, e, i, r) {
            e = D(e);
            var a, u, f, m, g, E, k = 0, j = t.length, P = j - 1, M = e[0], ft = it(M);
            if (ft || j > 1 && typeof M == "string" && !G.checkClone && Ji.test(M))
                return t.each(function(bt) {
                    var ut = t.eq(bt);
                    ft && (e[0] = M.call(this, bt, ut.html())),
                    nn(ut, e, i, r)
                });
            if (j && (a = me(e, t[0].ownerDocument, !1, t, r),
            u = a.firstChild,
            a.childNodes.length === 1 && (a = u),
            u || r)) {
                for (f = s.map(ee(a, "script"), er),
                m = f.length; k < j; k++)
                    g = a,
                    k !== P && (g = s.clone(g, !0, !0),
                    m && s.merge(f, ee(g, "script"))),
                    i.call(t[k], g, k);
                if (m)
                    for (E = f[f.length - 1].ownerDocument,
                    s.map(f, nr),
                    k = 0; k < m; k++)
                        g = f[k],
                        Nt.test(g.type || "") && !et.access(g, "globalEval") && s.contains(E, g) && (g.src && (g.type || "").toLowerCase() !== "module" ? s._evalUrl && !g.noModule && s._evalUrl(g.src, {
                            nonce: g.nonce || g.getAttribute("nonce")
                        }, E) : Yt(g.textContent.replace(tr, ""), g, E))
            }
            return t
        }
        function pi(t, e, i) {
            for (var r, a = e ? s.filter(e, t) : t, u = 0; (r = a[u]) != null; u++)
                !i && r.nodeType === 1 && s.cleanData(ee(r)),
                r.parentNode && (i && q(r) && He(ee(r, "script")),
                r.parentNode.removeChild(r));
            return t
        }
        s.extend({
            htmlPrefilter: function(t) {
                return t
            },
            clone: function(t, e, i) {
                var r, a, u, f, m = t.cloneNode(!0), g = q(t);
                if (!G.noCloneChecked && (t.nodeType === 1 || t.nodeType === 11) && !s.isXMLDoc(t))
                    for (f = ee(m),
                    u = ee(t),
                    r = 0,
                    a = u.length; r < a; r++)
                        ir(u[r], f[r]);
                if (e)
                    if (i)
                        for (u = u || ee(t),
                        f = f || ee(m),
                        r = 0,
                        a = u.length; r < a; r++)
                            di(u[r], f[r]);
                    else
                        di(t, m);
                return f = ee(m, "script"),
                f.length > 0 && He(f, !g && ee(t, "script")),
                m
            },
            cleanData: function(t) {
                for (var e, i, r, a = s.event.special, u = 0; (i = t[u]) !== void 0; u++)
                    if (Fe(i)) {
                        if (e = i[et.expando]) {
                            if (e.events)
                                for (r in e.events)
                                    a[r] ? s.event.remove(i, r) : s.removeEvent(i, r, e.handle);
                            i[et.expando] = void 0
                        }
                        i[c.expando] && (i[c.expando] = void 0)
                    }
            }
        }),
        s.fn.extend({
            detach: function(t) {
                return pi(this, t, !0)
            },
            remove: function(t) {
                return pi(this, t)
            },
            text: function(t) {
                return U(this, function(e) {
                    return e === void 0 ? s.text(this) : this.empty().each(function() {
                        (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) && (this.textContent = e)
                    })
                }, null, t, arguments.length)
            },
            append: function() {
                return nn(this, arguments, function(t) {
                    if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
                        var e = hi(this, t);
                        e.appendChild(t)
                    }
                })
            },
            prepend: function() {
                return nn(this, arguments, function(t) {
                    if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
                        var e = hi(this, t);
                        e.insertBefore(t, e.firstChild)
                    }
                })
            },
            before: function() {
                return nn(this, arguments, function(t) {
                    this.parentNode && this.parentNode.insertBefore(t, this)
                })
            },
            after: function() {
                return nn(this, arguments, function(t) {
                    this.parentNode && this.parentNode.insertBefore(t, this.nextSibling)
                })
            },
            empty: function() {
                for (var t, e = 0; (t = this[e]) != null; e++)
                    t.nodeType === 1 && (s.cleanData(ee(t, !1)),
                    t.textContent = "");
                return this
            },
            clone: function(t, e) {
                return t = t ?? !1,
                e = e ?? t,
                this.map(function() {
                    return s.clone(this, t, e)
                })
            },
            html: function(t) {
                return U(this, function(e) {
                    var i = this[0] || {}
                      , r = 0
                      , a = this.length;
                    if (e === void 0 && i.nodeType === 1)
                        return i.innerHTML;
                    if (typeof e == "string" && !Ki.test(e) && !Bt[($t.exec(e) || ["", ""])[1].toLowerCase()]) {
                        e = s.htmlPrefilter(e);
                        try {
                            for (; r < a; r++)
                                i = this[r] || {},
                                i.nodeType === 1 && (s.cleanData(ee(i, !1)),
                                i.innerHTML = e);
                            i = 0
                        } catch {}
                    }
                    i && this.empty().append(e)
                }, null, t, arguments.length)
            },
            replaceWith: function() {
                var t = [];
                return nn(this, arguments, function(e) {
                    var i = this.parentNode;
                    s.inArray(this, t) < 0 && (s.cleanData(ee(this)),
                    i && i.replaceChild(e, this))
                }, t)
            }
        }),
        s.each({
            appendTo: "append",
            prependTo: "prepend",
            insertBefore: "before",
            insertAfter: "after",
            replaceAll: "replaceWith"
        }, function(t, e) {
            s.fn[t] = function(i) {
                for (var r, a = [], u = s(i), f = u.length - 1, m = 0; m <= f; m++)
                    r = m === f ? this : this.clone(!0),
                    s(u[m])[e](r),
                    L.apply(a, r.get());
                return this.pushStack(a)
            }
        });
        var On = new RegExp("^(" + $ + ")(?!px)[a-z%]+$","i")
          , qn = /^--/
          , En = function(t) {
            var e = t.ownerDocument.defaultView;
            return (!e || !e.opener) && (e = o),
            e.getComputedStyle(t)
        }
          , gi = function(t, e, i) {
            var r, a, u = {};
            for (a in e)
                u[a] = t.style[a],
                t.style[a] = e[a];
            r = i.call(t);
            for (a in e)
                t.style[a] = u[a];
            return r
        }
          , rr = new RegExp(x.join("|"),"i")
          , vi = "[\\x20\\t\\r\\n\\f]"
          , sr = new RegExp("^" + vi + "+|((?:^|[^\\\\])(?:\\\\.)*)" + vi + "+$","g");
        (function() {
            function t() {
                if (E) {
                    g.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",
                    E.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",
                    A.appendChild(g).appendChild(E);
                    var k = o.getComputedStyle(E);
                    i = k.top !== "1%",
                    m = e(k.marginLeft) === 12,
                    E.style.right = "60%",
                    u = e(k.right) === 36,
                    r = e(k.width) === 36,
                    E.style.position = "absolute",
                    a = e(E.offsetWidth / 3) === 12,
                    A.removeChild(g),
                    E = null
                }
            }
            function e(k) {
                return Math.round(parseFloat(k))
            }
            var i, r, a, u, f, m, g = rt.createElement("div"), E = rt.createElement("div");
            E.style && (E.style.backgroundClip = "content-box",
            E.cloneNode(!0).style.backgroundClip = "",
            G.clearCloneStyle = E.style.backgroundClip === "content-box",
            s.extend(G, {
                boxSizingReliable: function() {
                    return t(),
                    r
                },
                pixelBoxStyles: function() {
                    return t(),
                    u
                },
                pixelPosition: function() {
                    return t(),
                    i
                },
                reliableMarginLeft: function() {
                    return t(),
                    m
                },
                scrollboxSize: function() {
                    return t(),
                    a
                },
                reliableTrDimensions: function() {
                    var k, j, P, M;
                    return f == null && (k = rt.createElement("table"),
                    j = rt.createElement("tr"),
                    P = rt.createElement("div"),
                    k.style.cssText = "position:absolute;left:-11111px;border-collapse:separate",
                    j.style.cssText = "border:1px solid",
                    j.style.height = "1px",
                    P.style.height = "9px",
                    P.style.display = "block",
                    A.appendChild(k).appendChild(j).appendChild(P),
                    M = o.getComputedStyle(j),
                    f = parseInt(M.height, 10) + parseInt(M.borderTopWidth, 10) + parseInt(M.borderBottomWidth, 10) === j.offsetHeight,
                    A.removeChild(k)),
                    f
                }
            }))
        }
        )();
        function fn(t, e, i) {
            var r, a, u, f, m = qn.test(e), g = t.style;
            return i = i || En(t),
            i && (f = i.getPropertyValue(e) || i[e],
            m && f && (f = f.replace(sr, "$1") || void 0),
            f === "" && !q(t) && (f = s.style(t, e)),
            !G.pixelBoxStyles() && On.test(f) && rr.test(e) && (r = g.width,
            a = g.minWidth,
            u = g.maxWidth,
            g.minWidth = g.maxWidth = g.width = f,
            f = i.width,
            g.width = r,
            g.minWidth = a,
            g.maxWidth = u)),
            f !== void 0 ? f + "" : f
        }
        function mi(t, e) {
            return {
                get: function() {
                    if (t()) {
                        delete this.get;
                        return
                    }
                    return (this.get = e).apply(this, arguments)
                }
            }
        }
        var yi = ["Webkit", "Moz", "ms"]
          , xi = rt.createElement("div").style
          , bi = {};
        function or(t) {
            for (var e = t[0].toUpperCase() + t.slice(1), i = yi.length; i--; )
                if (t = yi[i] + e,
                t in xi)
                    return t
        }
        function Hn(t) {
            var e = s.cssProps[t] || bi[t];
            return e || (t in xi ? t : bi[t] = or(t) || t)
        }
        var ar = /^(none|table(?!-c[ea]).+)/
          , ur = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        }
          , Ai = {
            letterSpacing: "0",
            fontWeight: "400"
        };
        function Ci(t, e, i) {
            var r = N.exec(e);
            return r ? Math.max(0, r[2] - (i || 0)) + (r[3] || "px") : e
        }
        function Yn(t, e, i, r, a, u) {
            var f = e === "width" ? 1 : 0
              , m = 0
              , g = 0;
            if (i === (r ? "border" : "content"))
                return 0;
            for (; f < 4; f += 2)
                i === "margin" && (g += s.css(t, i + x[f], !0, a)),
                r ? (i === "content" && (g -= s.css(t, "padding" + x[f], !0, a)),
                i !== "margin" && (g -= s.css(t, "border" + x[f] + "Width", !0, a))) : (g += s.css(t, "padding" + x[f], !0, a),
                i !== "padding" ? g += s.css(t, "border" + x[f] + "Width", !0, a) : m += s.css(t, "border" + x[f] + "Width", !0, a));
            return !r && u >= 0 && (g += Math.max(0, Math.ceil(t["offset" + e[0].toUpperCase() + e.slice(1)] - u - g - m - .5)) || 0),
            g
        }
        function Ti(t, e, i) {
            var r = En(t)
              , a = !G.boxSizingReliable() || i
              , u = a && s.css(t, "boxSizing", !1, r) === "border-box"
              , f = u
              , m = fn(t, e, r)
              , g = "offset" + e[0].toUpperCase() + e.slice(1);
            if (On.test(m)) {
                if (!i)
                    return m;
                m = "auto"
            }
            return (!G.boxSizingReliable() && u || !G.reliableTrDimensions() && tt(t, "tr") || m === "auto" || !parseFloat(m) && s.css(t, "display", !1, r) === "inline") && t.getClientRects().length && (u = s.css(t, "boxSizing", !1, r) === "border-box",
            f = g in t,
            f && (m = t[g])),
            m = parseFloat(m) || 0,
            m + Yn(t, e, i || (u ? "border" : "content"), f, r, m) + "px"
        }
        s.extend({
            cssHooks: {
                opacity: {
                    get: function(t, e) {
                        if (e) {
                            var i = fn(t, "opacity");
                            return i === "" ? "1" : i
                        }
                    }
                }
            },
            cssNumber: {
                animationIterationCount: !0,
                columnCount: !0,
                fillOpacity: !0,
                flexGrow: !0,
                flexShrink: !0,
                fontWeight: !0,
                gridArea: !0,
                gridColumn: !0,
                gridColumnEnd: !0,
                gridColumnStart: !0,
                gridRow: !0,
                gridRowEnd: !0,
                gridRowStart: !0,
                lineHeight: !0,
                opacity: !0,
                order: !0,
                orphans: !0,
                widows: !0,
                zIndex: !0,
                zoom: !0
            },
            cssProps: {},
            style: function(t, e, i, r) {
                if (!(!t || t.nodeType === 3 || t.nodeType === 8 || !t.style)) {
                    var a, u, f, m = ve(e), g = qn.test(e), E = t.style;
                    if (g || (e = Hn(m)),
                    f = s.cssHooks[e] || s.cssHooks[m],
                    i !== void 0) {
                        if (u = typeof i,
                        u === "string" && (a = N.exec(i)) && a[1] && (i = vt(t, e, a),
                        u = "number"),
                        i == null || i !== i)
                            return;
                        u === "number" && !g && (i += a && a[3] || (s.cssNumber[m] ? "" : "px")),
                        !G.clearCloneStyle && i === "" && e.indexOf("background") === 0 && (E[e] = "inherit"),
                        (!f || !("set"in f) || (i = f.set(t, i, r)) !== void 0) && (g ? E.setProperty(e, i) : E[e] = i)
                    } else
                        return f && "get"in f && (a = f.get(t, !1, r)) !== void 0 ? a : E[e]
                }
            },
            css: function(t, e, i, r) {
                var a, u, f, m = ve(e), g = qn.test(e);
                return g || (e = Hn(m)),
                f = s.cssHooks[e] || s.cssHooks[m],
                f && "get"in f && (a = f.get(t, !0, i)),
                a === void 0 && (a = fn(t, e, r)),
                a === "normal" && e in Ai && (a = Ai[e]),
                i === "" || i ? (u = parseFloat(a),
                i === !0 || isFinite(u) ? u || 0 : a) : a
            }
        }),
        s.each(["height", "width"], function(t, e) {
            s.cssHooks[e] = {
                get: function(i, r, a) {
                    if (r)
                        return ar.test(s.css(i, "display")) && (!i.getClientRects().length || !i.getBoundingClientRect().width) ? gi(i, ur, function() {
                            return Ti(i, e, a)
                        }) : Ti(i, e, a)
                },
                set: function(i, r, a) {
                    var u, f = En(i), m = !G.scrollboxSize() && f.position === "absolute", g = m || a, E = g && s.css(i, "boxSizing", !1, f) === "border-box", k = a ? Yn(i, e, a, E, f) : 0;
                    return E && m && (k -= Math.ceil(i["offset" + e[0].toUpperCase() + e.slice(1)] - parseFloat(f[e]) - Yn(i, e, "border", !1, f) - .5)),
                    k && (u = N.exec(r)) && (u[3] || "px") !== "px" && (i.style[e] = r,
                    r = s.css(i, e)),
                    Ci(i, r, k)
                }
            }
        }),
        s.cssHooks.marginLeft = mi(G.reliableMarginLeft, function(t, e) {
            if (e)
                return (parseFloat(fn(t, "marginLeft")) || t.getBoundingClientRect().left - gi(t, {
                    marginLeft: 0
                }, function() {
                    return t.getBoundingClientRect().left
                })) + "px"
        }),
        s.each({
            margin: "",
            padding: "",
            border: "Width"
        }, function(t, e) {
            s.cssHooks[t + e] = {
                expand: function(i) {
                    for (var r = 0, a = {}, u = typeof i == "string" ? i.split(" ") : [i]; r < 4; r++)
                        a[t + x[r] + e] = u[r] || u[r - 2] || u[0];
                    return a
                }
            },
            t !== "margin" && (s.cssHooks[t + e].set = Ci)
        }),
        s.fn.extend({
            css: function(t, e) {
                return U(this, function(i, r, a) {
                    var u, f, m = {}, g = 0;
                    if (Array.isArray(r)) {
                        for (u = En(i),
                        f = r.length; g < f; g++)
                            m[r[g]] = s.css(i, r[g], !1, u);
                        return m
                    }
                    return a !== void 0 ? s.style(i, r, a) : s.css(i, r)
                }, t, e, arguments.length > 1)
            }
        });
        function ce(t, e, i, r, a) {
            return new ce.prototype.init(t,e,i,r,a)
        }
        s.Tween = ce,
        ce.prototype = {
            constructor: ce,
            init: function(t, e, i, r, a, u) {
                this.elem = t,
                this.prop = i,
                this.easing = a || s.easing._default,
                this.options = e,
                this.start = this.now = this.cur(),
                this.end = r,
                this.unit = u || (s.cssNumber[i] ? "" : "px")
            },
            cur: function() {
                var t = ce.propHooks[this.prop];
                return t && t.get ? t.get(this) : ce.propHooks._default.get(this)
            },
            run: function(t) {
                var e, i = ce.propHooks[this.prop];
                return this.options.duration ? this.pos = e = s.easing[this.easing](t, this.options.duration * t, 0, 1, this.options.duration) : this.pos = e = t,
                this.now = (this.end - this.start) * e + this.start,
                this.options.step && this.options.step.call(this.elem, this.now, this),
                i && i.set ? i.set(this) : ce.propHooks._default.set(this),
                this
            }
        },
        ce.prototype.init.prototype = ce.prototype,
        ce.propHooks = {
            _default: {
                get: function(t) {
                    var e;
                    return t.elem.nodeType !== 1 || t.elem[t.prop] != null && t.elem.style[t.prop] == null ? t.elem[t.prop] : (e = s.css(t.elem, t.prop, ""),
                    !e || e === "auto" ? 0 : e)
                },
                set: function(t) {
                    s.fx.step[t.prop] ? s.fx.step[t.prop](t) : t.elem.nodeType === 1 && (s.cssHooks[t.prop] || t.elem.style[Hn(t.prop)] != null) ? s.style(t.elem, t.prop, t.now + t.unit) : t.elem[t.prop] = t.now
                }
            }
        },
        ce.propHooks.scrollTop = ce.propHooks.scrollLeft = {
            set: function(t) {
                t.elem.nodeType && t.elem.parentNode && (t.elem[t.prop] = t.now)
            }
        },
        s.easing = {
            linear: function(t) {
                return t
            },
            swing: function(t) {
                return .5 - Math.cos(t * Math.PI) / 2
            },
            _default: "swing"
        },
        s.fx = ce.prototype.init,
        s.fx.step = {};
        var rn, Sn, lr = /^(?:toggle|show|hide)$/, fr = /queueHooks$/;
        function Vn() {
            Sn && (rt.hidden === !1 && o.requestAnimationFrame ? o.requestAnimationFrame(Vn) : o.setTimeout(Vn, s.fx.interval),
            s.fx.tick())
        }
        function wi() {
            return o.setTimeout(function() {
                rn = void 0
            }),
            rn = Date.now()
        }
        function Dn(t, e) {
            var i, r = 0, a = {
                height: t
            };
            for (e = e ? 1 : 0; r < 4; r += 2 - e)
                i = x[r],
                a["margin" + i] = a["padding" + i] = t;
            return e && (a.opacity = a.width = t),
            a
        }
        function Ei(t, e, i) {
            for (var r, a = (De.tweeners[e] || []).concat(De.tweeners["*"]), u = 0, f = a.length; u < f; u++)
                if (r = a[u].call(i, e, t))
                    return r
        }
        function cr(t, e, i) {
            var r, a, u, f, m, g, E, k, j = "width"in e || "height"in e, P = this, M = {}, ft = t.style, bt = t.nodeType && Y(t), ut = et.get(t, "fxshow");
            i.queue || (f = s._queueHooks(t, "fx"),
            f.unqueued == null && (f.unqueued = 0,
            m = f.empty.fire,
            f.empty.fire = function() {
                f.unqueued || m()
            }
            ),
            f.unqueued++,
            P.always(function() {
                P.always(function() {
                    f.unqueued--,
                    s.queue(t, "fx").length || f.empty.fire()
                })
            }));
            for (r in e)
                if (a = e[r],
                lr.test(a)) {
                    if (delete e[r],
                    u = u || a === "toggle",
                    a === (bt ? "hide" : "show"))
                        if (a === "show" && ut && ut[r] !== void 0)
                            bt = !0;
                        else
                            continue;
                    M[r] = ut && ut[r] || s.style(t, r)
                }
            if (g = !s.isEmptyObject(e),
            !(!g && s.isEmptyObject(M))) {
                j && t.nodeType === 1 && (i.overflow = [ft.overflow, ft.overflowX, ft.overflowY],
                E = ut && ut.display,
                E == null && (E = et.get(t, "display")),
                k = s.css(t, "display"),
                k === "none" && (E ? k = E : (qt([t], !0),
                E = t.style.display || E,
                k = s.css(t, "display"),
                qt([t]))),
                (k === "inline" || k === "inline-block" && E != null) && s.css(t, "float") === "none" && (g || (P.done(function() {
                    ft.display = E
                }),
                E == null && (k = ft.display,
                E = k === "none" ? "" : k)),
                ft.display = "inline-block")),
                i.overflow && (ft.overflow = "hidden",
                P.always(function() {
                    ft.overflow = i.overflow[0],
                    ft.overflowX = i.overflow[1],
                    ft.overflowY = i.overflow[2]
                })),
                g = !1;
                for (r in M)
                    g || (ut ? "hidden"in ut && (bt = ut.hidden) : ut = et.access(t, "fxshow", {
                        display: E
                    }),
                    u && (ut.hidden = !bt),
                    bt && qt([t], !0),
                    P.done(function() {
                        bt || qt([t]),
                        et.remove(t, "fxshow");
                        for (r in M)
                            s.style(t, r, M[r])
                    })),
                    g = Ei(bt ? ut[r] : 0, r, P),
                    r in ut || (ut[r] = g.start,
                    bt && (g.end = g.start,
                    g.start = 0))
            }
        }
        function hr(t, e) {
            var i, r, a, u, f;
            for (i in t)
                if (r = ve(i),
                a = e[r],
                u = t[i],
                Array.isArray(u) && (a = u[1],
                u = t[i] = u[0]),
                i !== r && (t[r] = u,
                delete t[i]),
                f = s.cssHooks[r],
                f && "expand"in f) {
                    u = f.expand(u),
                    delete t[r];
                    for (i in u)
                        i in t || (t[i] = u[i],
                        e[i] = a)
                } else
                    e[r] = a
        }
        function De(t, e, i) {
            var r, a, u = 0, f = De.prefilters.length, m = s.Deferred().always(function() {
                delete g.elem
            }), g = function() {
                if (a)
                    return !1;
                for (var j = rn || wi(), P = Math.max(0, E.startTime + E.duration - j), M = P / E.duration || 0, ft = 1 - M, bt = 0, ut = E.tweens.length; bt < ut; bt++)
                    E.tweens[bt].run(ft);
                return m.notifyWith(t, [E, ft, P]),
                ft < 1 && ut ? P : (ut || m.notifyWith(t, [E, 1, 0]),
                m.resolveWith(t, [E]),
                !1)
            }, E = m.promise({
                elem: t,
                props: s.extend({}, e),
                opts: s.extend(!0, {
                    specialEasing: {},
                    easing: s.easing._default
                }, i),
                originalProperties: e,
                originalOptions: i,
                startTime: rn || wi(),
                duration: i.duration,
                tweens: [],
                createTween: function(j, P) {
                    var M = s.Tween(t, E.opts, j, P, E.opts.specialEasing[j] || E.opts.easing);
                    return E.tweens.push(M),
                    M
                },
                stop: function(j) {
                    var P = 0
                      , M = j ? E.tweens.length : 0;
                    if (a)
                        return this;
                    for (a = !0; P < M; P++)
                        E.tweens[P].run(1);
                    return j ? (m.notifyWith(t, [E, 1, 0]),
                    m.resolveWith(t, [E, j])) : m.rejectWith(t, [E, j]),
                    this
                }
            }), k = E.props;
            for (hr(k, E.opts.specialEasing); u < f; u++)
                if (r = De.prefilters[u].call(E, t, k, E.opts),
                r)
                    return it(r.stop) && (s._queueHooks(E.elem, E.opts.queue).stop = r.stop.bind(r)),
                    r;
            return s.map(k, Ei, E),
            it(E.opts.start) && E.opts.start.call(t, E),
            E.progress(E.opts.progress).done(E.opts.done, E.opts.complete).fail(E.opts.fail).always(E.opts.always),
            s.fx.timer(s.extend(g, {
                elem: t,
                anim: E,
                queue: E.opts.queue
            })),
            E
        }
        s.Animation = s.extend(De, {
            tweeners: {
                "*": [function(t, e) {
                    var i = this.createTween(t, e);
                    return vt(i.elem, t, N.exec(e), i),
                    i
                }
                ]
            },
            tweener: function(t, e) {
                it(t) ? (e = t,
                t = ["*"]) : t = t.match(Vt);
                for (var i, r = 0, a = t.length; r < a; r++)
                    i = t[r],
                    De.tweeners[i] = De.tweeners[i] || [],
                    De.tweeners[i].unshift(e)
            },
            prefilters: [cr],
            prefilter: function(t, e) {
                e ? De.prefilters.unshift(t) : De.prefilters.push(t)
            }
        }),
        s.speed = function(t, e, i) {
            var r = t && typeof t == "object" ? s.extend({}, t) : {
                complete: i || !i && e || it(t) && t,
                duration: t,
                easing: i && e || e && !it(e) && e
            };
            return s.fx.off ? r.duration = 0 : typeof r.duration != "number" && (r.duration in s.fx.speeds ? r.duration = s.fx.speeds[r.duration] : r.duration = s.fx.speeds._default),
            (r.queue == null || r.queue === !0) && (r.queue = "fx"),
            r.old = r.complete,
            r.complete = function() {
                it(r.old) && r.old.call(this),
                r.queue && s.dequeue(this, r.queue)
            }
            ,
            r
        }
        ,
        s.fn.extend({
            fadeTo: function(t, e, i, r) {
                return this.filter(Y).css("opacity", 0).show().end().animate({
                    opacity: e
                }, t, i, r)
            },
            animate: function(t, e, i, r) {
                var a = s.isEmptyObject(t)
                  , u = s.speed(e, i, r)
                  , f = function() {
                    var m = De(this, s.extend({}, t), u);
                    (a || et.get(this, "finish")) && m.stop(!0)
                };
                return f.finish = f,
                a || u.queue === !1 ? this.each(f) : this.queue(u.queue, f)
            },
            stop: function(t, e, i) {
                var r = function(a) {
                    var u = a.stop;
                    delete a.stop,
                    u(i)
                };
                return typeof t != "string" && (i = e,
                e = t,
                t = void 0),
                e && this.queue(t || "fx", []),
                this.each(function() {
                    var a = !0
                      , u = t != null && t + "queueHooks"
                      , f = s.timers
                      , m = et.get(this);
                    if (u)
                        m[u] && m[u].stop && r(m[u]);
                    else
                        for (u in m)
                            m[u] && m[u].stop && fr.test(u) && r(m[u]);
                    for (u = f.length; u--; )
                        f[u].elem === this && (t == null || f[u].queue === t) && (f[u].anim.stop(i),
                        a = !1,
                        f.splice(u, 1));
                    (a || !i) && s.dequeue(this, t)
                })
            },
            finish: function(t) {
                return t !== !1 && (t = t || "fx"),
                this.each(function() {
                    var e, i = et.get(this), r = i[t + "queue"], a = i[t + "queueHooks"], u = s.timers, f = r ? r.length : 0;
                    for (i.finish = !0,
                    s.queue(this, t, []),
                    a && a.stop && a.stop.call(this, !0),
                    e = u.length; e--; )
                        u[e].elem === this && u[e].queue === t && (u[e].anim.stop(!0),
                        u.splice(e, 1));
                    for (e = 0; e < f; e++)
                        r[e] && r[e].finish && r[e].finish.call(this);
                    delete i.finish
                })
            }
        }),
        s.each(["toggle", "show", "hide"], function(t, e) {
            var i = s.fn[e];
            s.fn[e] = function(r, a, u) {
                return r == null || typeof r == "boolean" ? i.apply(this, arguments) : this.animate(Dn(e, !0), r, a, u)
            }
        }),
        s.each({
            slideDown: Dn("show"),
            slideUp: Dn("hide"),
            slideToggle: Dn("toggle"),
            fadeIn: {
                opacity: "show"
            },
            fadeOut: {
                opacity: "hide"
            },
            fadeToggle: {
                opacity: "toggle"
            }
        }, function(t, e) {
            s.fn[t] = function(i, r, a) {
                return this.animate(e, i, r, a)
            }
        }),
        s.timers = [],
        s.fx.tick = function() {
            var t, e = 0, i = s.timers;
            for (rn = Date.now(); e < i.length; e++)
                t = i[e],
                !t() && i[e] === t && i.splice(e--, 1);
            i.length || s.fx.stop(),
            rn = void 0
        }
        ,
        s.fx.timer = function(t) {
            s.timers.push(t),
            s.fx.start()
        }
        ,
        s.fx.interval = 13,
        s.fx.start = function() {
            Sn || (Sn = !0,
            Vn())
        }
        ,
        s.fx.stop = function() {
            Sn = null
        }
        ,
        s.fx.speeds = {
            slow: 600,
            fast: 200,
            _default: 400
        },
        s.fn.delay = function(t, e) {
            return t = s.fx && s.fx.speeds[t] || t,
            e = e || "fx",
            this.queue(e, function(i, r) {
                var a = o.setTimeout(i, t);
                r.stop = function() {
                    o.clearTimeout(a)
                }
            })
        }
        ,
        function() {
            var t = rt.createElement("input")
              , e = rt.createElement("select")
              , i = e.appendChild(rt.createElement("option"));
            t.type = "checkbox",
            G.checkOn = t.value !== "",
            G.optSelected = i.selected,
            t = rt.createElement("input"),
            t.value = "t",
            t.type = "radio",
            G.radioValue = t.value === "t"
        }();
        var Si, cn = s.expr.attrHandle;
        s.fn.extend({
            attr: function(t, e) {
                return U(this, s.attr, t, e, arguments.length > 1)
            },
            removeAttr: function(t) {
                return this.each(function() {
                    s.removeAttr(this, t)
                })
            }
        }),
        s.extend({
            attr: function(t, e, i) {
                var r, a, u = t.nodeType;
                if (!(u === 3 || u === 8 || u === 2)) {
                    if (typeof t.getAttribute > "u")
                        return s.prop(t, e, i);
                    if ((u !== 1 || !s.isXMLDoc(t)) && (a = s.attrHooks[e.toLowerCase()] || (s.expr.match.bool.test(e) ? Si : void 0)),
                    i !== void 0) {
                        if (i === null) {
                            s.removeAttr(t, e);
                            return
                        }
                        return a && "set"in a && (r = a.set(t, i, e)) !== void 0 ? r : (t.setAttribute(e, i + ""),
                        i)
                    }
                    return a && "get"in a && (r = a.get(t, e)) !== null ? r : (r = s.find.attr(t, e),
                    r ?? void 0)
                }
            },
            attrHooks: {
                type: {
                    set: function(t, e) {
                        if (!G.radioValue && e === "radio" && tt(t, "input")) {
                            var i = t.value;
                            return t.setAttribute("type", e),
                            i && (t.value = i),
                            e
                        }
                    }
                }
            },
            removeAttr: function(t, e) {
                var i, r = 0, a = e && e.match(Vt);
                if (a && t.nodeType === 1)
                    for (; i = a[r++]; )
                        t.removeAttribute(i)
            }
        }),
        Si = {
            set: function(t, e, i) {
                return e === !1 ? s.removeAttr(t, i) : t.setAttribute(i, i),
                i
            }
        },
        s.each(s.expr.match.bool.source.match(/\w+/g), function(t, e) {
            var i = cn[e] || s.find.attr;
            cn[e] = function(r, a, u) {
                var f, m, g = a.toLowerCase();
                return u || (m = cn[g],
                cn[g] = f,
                f = i(r, a, u) != null ? g : null,
                cn[g] = m),
                f
            }
        });
        var dr = /^(?:input|select|textarea|button)$/i
          , pr = /^(?:a|area)$/i;
        s.fn.extend({
            prop: function(t, e) {
                return U(this, s.prop, t, e, arguments.length > 1)
            },
            removeProp: function(t) {
                return this.each(function() {
                    delete this[s.propFix[t] || t]
                })
            }
        }),
        s.extend({
            prop: function(t, e, i) {
                var r, a, u = t.nodeType;
                if (!(u === 3 || u === 8 || u === 2))
                    return (u !== 1 || !s.isXMLDoc(t)) && (e = s.propFix[e] || e,
                    a = s.propHooks[e]),
                    i !== void 0 ? a && "set"in a && (r = a.set(t, i, e)) !== void 0 ? r : t[e] = i : a && "get"in a && (r = a.get(t, e)) !== null ? r : t[e]
            },
            propHooks: {
                tabIndex: {
                    get: function(t) {
                        var e = s.find.attr(t, "tabindex");
                        return e ? parseInt(e, 10) : dr.test(t.nodeName) || pr.test(t.nodeName) && t.href ? 0 : -1
                    }
                }
            },
            propFix: {
                for: "htmlFor",
                class: "className"
            }
        }),
        G.optSelected || (s.propHooks.selected = {
            get: function(t) {
                var e = t.parentNode;
                return e && e.parentNode && e.parentNode.selectedIndex,
                null
            },
            set: function(t) {
                var e = t.parentNode;
                e && (e.selectedIndex,
                e.parentNode && e.parentNode.selectedIndex)
            }
        }),
        s.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
            s.propFix[this.toLowerCase()] = this
        });
        function Ve(t) {
            var e = t.match(Vt) || [];
            return e.join(" ")
        }
        function We(t) {
            return t.getAttribute && t.getAttribute("class") || ""
        }
        function Wn(t) {
            return Array.isArray(t) ? t : typeof t == "string" ? t.match(Vt) || [] : []
        }
        s.fn.extend({
            addClass: function(t) {
                var e, i, r, a, u, f;
                return it(t) ? this.each(function(m) {
                    s(this).addClass(t.call(this, m, We(this)))
                }) : (e = Wn(t),
                e.length ? this.each(function() {
                    if (r = We(this),
                    i = this.nodeType === 1 && " " + Ve(r) + " ",
                    i) {
                        for (u = 0; u < e.length; u++)
                            a = e[u],
                            i.indexOf(" " + a + " ") < 0 && (i += a + " ");
                        f = Ve(i),
                        r !== f && this.setAttribute("class", f)
                    }
                }) : this)
            },
            removeClass: function(t) {
                var e, i, r, a, u, f;
                return it(t) ? this.each(function(m) {
                    s(this).removeClass(t.call(this, m, We(this)))
                }) : arguments.length ? (e = Wn(t),
                e.length ? this.each(function() {
                    if (r = We(this),
                    i = this.nodeType === 1 && " " + Ve(r) + " ",
                    i) {
                        for (u = 0; u < e.length; u++)
                            for (a = e[u]; i.indexOf(" " + a + " ") > -1; )
                                i = i.replace(" " + a + " ", " ");
                        f = Ve(i),
                        r !== f && this.setAttribute("class", f)
                    }
                }) : this) : this.attr("class", "")
            },
            toggleClass: function(t, e) {
                var i, r, a, u, f = typeof t, m = f === "string" || Array.isArray(t);
                return it(t) ? this.each(function(g) {
                    s(this).toggleClass(t.call(this, g, We(this), e), e)
                }) : typeof e == "boolean" && m ? e ? this.addClass(t) : this.removeClass(t) : (i = Wn(t),
                this.each(function() {
                    if (m)
                        for (u = s(this),
                        a = 0; a < i.length; a++)
                            r = i[a],
                            u.hasClass(r) ? u.removeClass(r) : u.addClass(r);
                    else
                        (t === void 0 || f === "boolean") && (r = We(this),
                        r && et.set(this, "__className__", r),
                        this.setAttribute && this.setAttribute("class", r || t === !1 ? "" : et.get(this, "__className__") || ""))
                }))
            },
            hasClass: function(t) {
                var e, i, r = 0;
                for (e = " " + t + " "; i = this[r++]; )
                    if (i.nodeType === 1 && (" " + Ve(We(i)) + " ").indexOf(e) > -1)
                        return !0;
                return !1
            }
        });
        var gr = /\r/g;
        s.fn.extend({
            val: function(t) {
                var e, i, r, a = this[0];
                return arguments.length ? (r = it(t),
                this.each(function(u) {
                    var f;
                    this.nodeType === 1 && (r ? f = t.call(this, u, s(this).val()) : f = t,
                    f == null ? f = "" : typeof f == "number" ? f += "" : Array.isArray(f) && (f = s.map(f, function(m) {
                        return m == null ? "" : m + ""
                    })),
                    e = s.valHooks[this.type] || s.valHooks[this.nodeName.toLowerCase()],
                    (!e || !("set"in e) || e.set(this, f, "value") === void 0) && (this.value = f))
                })) : a ? (e = s.valHooks[a.type] || s.valHooks[a.nodeName.toLowerCase()],
                e && "get"in e && (i = e.get(a, "value")) !== void 0 ? i : (i = a.value,
                typeof i == "string" ? i.replace(gr, "") : i ?? "")) : void 0
            }
        }),
        s.extend({
            valHooks: {
                option: {
                    get: function(t) {
                        var e = s.find.attr(t, "value");
                        return e ?? Ve(s.text(t))
                    }
                },
                select: {
                    get: function(t) {
                        var e, i, r, a = t.options, u = t.selectedIndex, f = t.type === "select-one", m = f ? null : [], g = f ? u + 1 : a.length;
                        for (u < 0 ? r = g : r = f ? u : 0; r < g; r++)
                            if (i = a[r],
                            (i.selected || r === u) && !i.disabled && (!i.parentNode.disabled || !tt(i.parentNode, "optgroup"))) {
                                if (e = s(i).val(),
                                f)
                                    return e;
                                m.push(e)
                            }
                        return m
                    },
                    set: function(t, e) {
                        for (var i, r, a = t.options, u = s.makeArray(e), f = a.length; f--; )
                            r = a[f],
                            (r.selected = s.inArray(s.valHooks.option.get(r), u) > -1) && (i = !0);
                        return i || (t.selectedIndex = -1),
                        u
                    }
                }
            }
        }),
        s.each(["radio", "checkbox"], function() {
            s.valHooks[this] = {
                set: function(t, e) {
                    if (Array.isArray(e))
                        return t.checked = s.inArray(s(t).val(), e) > -1
                }
            },
            G.checkOn || (s.valHooks[this].get = function(t) {
                return t.getAttribute("value") === null ? "on" : t.value
            }
            )
        }),
        G.focusin = "onfocusin"in o;
        var Di = /^(?:focusinfocus|focusoutblur)$/
          , _i = function(t) {
            t.stopPropagation()
        };
        s.extend(s.event, {
            trigger: function(t, e, i, r) {
                var a, u, f, m, g, E, k, j, P = [i || rt], M = X.call(t, "type") ? t.type : t, ft = X.call(t, "namespace") ? t.namespace.split(".") : [];
                if (u = j = f = i = i || rt,
                !(i.nodeType === 3 || i.nodeType === 8) && !Di.test(M + s.event.triggered) && (M.indexOf(".") > -1 && (ft = M.split("."),
                M = ft.shift(),
                ft.sort()),
                g = M.indexOf(":") < 0 && "on" + M,
                t = t[s.expando] ? t : new s.Event(M,typeof t == "object" && t),
                t.isTrigger = r ? 2 : 3,
                t.namespace = ft.join("."),
                t.rnamespace = t.namespace ? new RegExp("(^|\\.)" + ft.join("\\.(?:.*\\.|)") + "(\\.|$)") : null,
                t.result = void 0,
                t.target || (t.target = i),
                e = e == null ? [t] : s.makeArray(e, [t]),
                k = s.event.special[M] || {},
                !(!r && k.trigger && k.trigger.apply(i, e) === !1))) {
                    if (!r && !k.noBubble && !at(i)) {
                        for (m = k.delegateType || M,
                        Di.test(m + M) || (u = u.parentNode); u; u = u.parentNode)
                            P.push(u),
                            f = u;
                        f === (i.ownerDocument || rt) && P.push(f.defaultView || f.parentWindow || o)
                    }
                    for (a = 0; (u = P[a++]) && !t.isPropagationStopped(); )
                        j = u,
                        t.type = a > 1 ? m : k.bindType || M,
                        E = (et.get(u, "events") || Object.create(null))[t.type] && et.get(u, "handle"),
                        E && E.apply(u, e),
                        E = g && u[g],
                        E && E.apply && Fe(u) && (t.result = E.apply(u, e),
                        t.result === !1 && t.preventDefault());
                    return t.type = M,
                    !r && !t.isDefaultPrevented() && (!k._default || k._default.apply(P.pop(), e) === !1) && Fe(i) && g && it(i[M]) && !at(i) && (f = i[g],
                    f && (i[g] = null),
                    s.event.triggered = M,
                    t.isPropagationStopped() && j.addEventListener(M, _i),
                    i[M](),
                    t.isPropagationStopped() && j.removeEventListener(M, _i),
                    s.event.triggered = void 0,
                    f && (i[g] = f)),
                    t.result
                }
            },
            simulate: function(t, e, i) {
                var r = s.extend(new s.Event, i, {
                    type: t,
                    isSimulated: !0
                });
                s.event.trigger(r, null, e)
            }
        }),
        s.fn.extend({
            trigger: function(t, e) {
                return this.each(function() {
                    s.event.trigger(t, e, this)
                })
            },
            triggerHandler: function(t, e) {
                var i = this[0];
                if (i)
                    return s.event.trigger(t, e, i, !0)
            }
        }),
        G.focusin || s.each({
            focus: "focusin",
            blur: "focusout"
        }, function(t, e) {
            var i = function(r) {
                s.event.simulate(e, r.target, s.event.fix(r))
            };
            s.event.special[e] = {
                setup: function() {
                    var r = this.ownerDocument || this.document || this
                      , a = et.access(r, e);
                    a || r.addEventListener(t, i, !0),
                    et.access(r, e, (a || 0) + 1)
                },
                teardown: function() {
                    var r = this.ownerDocument || this.document || this
                      , a = et.access(r, e) - 1;
                    a ? et.access(r, e, a) : (r.removeEventListener(t, i, !0),
                    et.remove(r, e))
                }
            }
        });
        var hn = o.location
          , Ni = {
            guid: Date.now()
        }
          , Un = /\?/;
        s.parseXML = function(t) {
            var e, i;
            if (!t || typeof t != "string")
                return null;
            try {
                e = new o.DOMParser().parseFromString(t, "text/xml")
            } catch {}
            return i = e && e.getElementsByTagName("parsererror")[0],
            (!e || i) && s.error("Invalid XML: " + (i ? s.map(i.childNodes, function(r) {
                return r.textContent
            }).join(`
`) : t)),
            e
        }
        ;
        var vr = /\[\]$/
          , Pi = /\r?\n/g
          , mr = /^(?:submit|button|image|reset|file)$/i
          , yr = /^(?:input|select|textarea|keygen)/i;
        function zn(t, e, i, r) {
            var a;
            if (Array.isArray(e))
                s.each(e, function(u, f) {
                    i || vr.test(t) ? r(t, f) : zn(t + "[" + (typeof f == "object" && f != null ? u : "") + "]", f, i, r)
                });
            else if (!i && St(e) === "object")
                for (a in e)
                    zn(t + "[" + a + "]", e[a], i, r);
            else
                r(t, e)
        }
        s.param = function(t, e) {
            var i, r = [], a = function(u, f) {
                var m = it(f) ? f() : f;
                r[r.length] = encodeURIComponent(u) + "=" + encodeURIComponent(m ?? "")
            };
            if (t == null)
                return "";
            if (Array.isArray(t) || t.jquery && !s.isPlainObject(t))
                s.each(t, function() {
                    a(this.name, this.value)
                });
            else
                for (i in t)
                    zn(i, t[i], e, a);
            return r.join("&")
        }
        ,
        s.fn.extend({
            serialize: function() {
                return s.param(this.serializeArray())
            },
            serializeArray: function() {
                return this.map(function() {
                    var t = s.prop(this, "elements");
                    return t ? s.makeArray(t) : this
                }).filter(function() {
                    var t = this.type;
                    return this.name && !s(this).is(":disabled") && yr.test(this.nodeName) && !mr.test(t) && (this.checked || !Qt.test(t))
                }).map(function(t, e) {
                    var i = s(this).val();
                    return i == null ? null : Array.isArray(i) ? s.map(i, function(r) {
                        return {
                            name: e.name,
                            value: r.replace(Pi, `\r
`)
                        }
                    }) : {
                        name: e.name,
                        value: i.replace(Pi, `\r
`)
                    }
                }).get()
            }
        });
        var xr = /%20/g
          , br = /#.*$/
          , Ar = /([?&])_=[^&]*/
          , Cr = /^(.*?):[ \t]*([^\r\n]*)$/mg
          , Tr = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/
          , wr = /^(?:GET|HEAD)$/
          , Er = /^\/\//
          , Fi = {}
          , Xn = {}
          , Bi = "*/".concat("*")
          , Gn = rt.createElement("a");
        Gn.href = hn.href;
        function ki(t) {
            return function(e, i) {
                typeof e != "string" && (i = e,
                e = "*");
                var r, a = 0, u = e.toLowerCase().match(Vt) || [];
                if (it(i))
                    for (; r = u[a++]; )
                        r[0] === "+" ? (r = r.slice(1) || "*",
                        (t[r] = t[r] || []).unshift(i)) : (t[r] = t[r] || []).push(i)
            }
        }
        function Mi(t, e, i, r) {
            var a = {}
              , u = t === Xn;
            function f(m) {
                var g;
                return a[m] = !0,
                s.each(t[m] || [], function(E, k) {
                    var j = k(e, i, r);
                    if (typeof j == "string" && !u && !a[j])
                        return e.dataTypes.unshift(j),
                        f(j),
                        !1;
                    if (u)
                        return !(g = j)
                }),
                g
            }
            return f(e.dataTypes[0]) || !a["*"] && f("*")
        }
        function Zn(t, e) {
            var i, r, a = s.ajaxSettings.flatOptions || {};
            for (i in e)
                e[i] !== void 0 && ((a[i] ? t : r || (r = {}))[i] = e[i]);
            return r && s.extend(!0, t, r),
            t
        }
        function Sr(t, e, i) {
            for (var r, a, u, f, m = t.contents, g = t.dataTypes; g[0] === "*"; )
                g.shift(),
                r === void 0 && (r = t.mimeType || e.getResponseHeader("Content-Type"));
            if (r) {
                for (a in m)
                    if (m[a] && m[a].test(r)) {
                        g.unshift(a);
                        break
                    }
            }
            if (g[0]in i)
                u = g[0];
            else {
                for (a in i) {
                    if (!g[0] || t.converters[a + " " + g[0]]) {
                        u = a;
                        break
                    }
                    f || (f = a)
                }
                u = u || f
            }
            if (u)
                return u !== g[0] && g.unshift(u),
                i[u]
        }
        function Dr(t, e, i, r) {
            var a, u, f, m, g, E = {}, k = t.dataTypes.slice();
            if (k[1])
                for (f in t.converters)
                    E[f.toLowerCase()] = t.converters[f];
            for (u = k.shift(); u; )
                if (t.responseFields[u] && (i[t.responseFields[u]] = e),
                !g && r && t.dataFilter && (e = t.dataFilter(e, t.dataType)),
                g = u,
                u = k.shift(),
                u) {
                    if (u === "*")
                        u = g;
                    else if (g !== "*" && g !== u) {
                        if (f = E[g + " " + u] || E["* " + u],
                        !f) {
                            for (a in E)
                                if (m = a.split(" "),
                                m[1] === u && (f = E[g + " " + m[0]] || E["* " + m[0]],
                                f)) {
                                    f === !0 ? f = E[a] : E[a] !== !0 && (u = m[0],
                                    k.unshift(m[1]));
                                    break
                                }
                        }
                        if (f !== !0)
                            if (f && t.throws)
                                e = f(e);
                            else
                                try {
                                    e = f(e)
                                } catch (j) {
                                    return {
                                        state: "parsererror",
                                        error: f ? j : "No conversion from " + g + " to " + u
                                    }
                                }
                    }
                }
            return {
                state: "success",
                data: e
            }
        }
        s.extend({
            active: 0,
            lastModified: {},
            etag: {},
            ajaxSettings: {
                url: hn.href,
                type: "GET",
                isLocal: Tr.test(hn.protocol),
                global: !0,
                processData: !0,
                async: !0,
                contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                accepts: {
                    "*": Bi,
                    text: "text/plain",
                    html: "text/html",
                    xml: "application/xml, text/xml",
                    json: "application/json, text/javascript"
                },
                contents: {
                    xml: /\bxml\b/,
                    html: /\bhtml/,
                    json: /\bjson\b/
                },
                responseFields: {
                    xml: "responseXML",
                    text: "responseText",
                    json: "responseJSON"
                },
                converters: {
                    "* text": String,
                    "text html": !0,
                    "text json": JSON.parse,
                    "text xml": s.parseXML
                },
                flatOptions: {
                    url: !0,
                    context: !0
                }
            },
            ajaxSetup: function(t, e) {
                return e ? Zn(Zn(t, s.ajaxSettings), e) : Zn(s.ajaxSettings, t)
            },
            ajaxPrefilter: ki(Fi),
            ajaxTransport: ki(Xn),
            ajax: function(t, e) {
                typeof t == "object" && (e = t,
                t = void 0),
                e = e || {};
                var i, r, a, u, f, m, g, E, k, j, P = s.ajaxSetup({}, e), M = P.context || P, ft = P.context && (M.nodeType || M.jquery) ? s(M) : s.event, bt = s.Deferred(), ut = s.Callbacks("once memory"), ie = P.statusCode || {}, Jt = {}, ye = {}, Rt = "canceled", yt = {
                    readyState: 0,
                    getResponseHeader: function(Dt) {
                        var Gt;
                        if (g) {
                            if (!u)
                                for (u = {}; Gt = Cr.exec(a); )
                                    u[Gt[1].toLowerCase() + " "] = (u[Gt[1].toLowerCase() + " "] || []).concat(Gt[2]);
                            Gt = u[Dt.toLowerCase() + " "]
                        }
                        return Gt == null ? null : Gt.join(", ")
                    },
                    getAllResponseHeaders: function() {
                        return g ? a : null
                    },
                    setRequestHeader: function(Dt, Gt) {
                        return g == null && (Dt = ye[Dt.toLowerCase()] = ye[Dt.toLowerCase()] || Dt,
                        Jt[Dt] = Gt),
                        this
                    },
                    overrideMimeType: function(Dt) {
                        return g == null && (P.mimeType = Dt),
                        this
                    },
                    statusCode: function(Dt) {
                        var Gt;
                        if (Dt)
                            if (g)
                                yt.always(Dt[yt.status]);
                            else
                                for (Gt in Dt)
                                    ie[Gt] = [ie[Gt], Dt[Gt]];
                        return this
                    },
                    abort: function(Dt) {
                        var Gt = Dt || Rt;
                        return i && i.abort(Gt),
                        he(0, Gt),
                        this
                    }
                };
                if (bt.promise(yt),
                P.url = ((t || P.url || hn.href) + "").replace(Er, hn.protocol + "//"),
                P.type = e.method || e.type || P.method || P.type,
                P.dataTypes = (P.dataType || "*").toLowerCase().match(Vt) || [""],
                P.crossDomain == null) {
                    m = rt.createElement("a");
                    try {
                        m.href = P.url,
                        m.href = m.href,
                        P.crossDomain = Gn.protocol + "//" + Gn.host != m.protocol + "//" + m.host
                    } catch {
                        P.crossDomain = !0
                    }
                }
                if (P.data && P.processData && typeof P.data != "string" && (P.data = s.param(P.data, P.traditional)),
                Mi(Fi, P, e, yt),
                g)
                    return yt;
                E = s.event && P.global,
                E && s.active++ === 0 && s.event.trigger("ajaxStart"),
                P.type = P.type.toUpperCase(),
                P.hasContent = !wr.test(P.type),
                r = P.url.replace(br, ""),
                P.hasContent ? P.data && P.processData && (P.contentType || "").indexOf("application/x-www-form-urlencoded") === 0 && (P.data = P.data.replace(xr, "+")) : (j = P.url.slice(r.length),
                P.data && (P.processData || typeof P.data == "string") && (r += (Un.test(r) ? "&" : "?") + P.data,
                delete P.data),
                P.cache === !1 && (r = r.replace(Ar, "$1"),
                j = (Un.test(r) ? "&" : "?") + "_=" + Ni.guid++ + j),
                P.url = r + j),
                P.ifModified && (s.lastModified[r] && yt.setRequestHeader("If-Modified-Since", s.lastModified[r]),
                s.etag[r] && yt.setRequestHeader("If-None-Match", s.etag[r])),
                (P.data && P.hasContent && P.contentType !== !1 || e.contentType) && yt.setRequestHeader("Content-Type", P.contentType),
                yt.setRequestHeader("Accept", P.dataTypes[0] && P.accepts[P.dataTypes[0]] ? P.accepts[P.dataTypes[0]] + (P.dataTypes[0] !== "*" ? ", " + Bi + "; q=0.01" : "") : P.accepts["*"]);
                for (k in P.headers)
                    yt.setRequestHeader(k, P.headers[k]);
                if (P.beforeSend && (P.beforeSend.call(M, yt, P) === !1 || g))
                    return yt.abort();
                if (Rt = "abort",
                ut.add(P.complete),
                yt.done(P.success),
                yt.fail(P.error),
                i = Mi(Xn, P, e, yt),
                !i)
                    he(-1, "No Transport");
                else {
                    if (yt.readyState = 1,
                    E && ft.trigger("ajaxSend", [yt, P]),
                    g)
                        return yt;
                    P.async && P.timeout > 0 && (f = o.setTimeout(function() {
                        yt.abort("timeout")
                    }, P.timeout));
                    try {
                        g = !1,
                        i.send(Jt, he)
                    } catch (Dt) {
                        if (g)
                            throw Dt;
                        he(-1, Dt)
                    }
                }
                function he(Dt, Gt, pn, _n) {
                    var xe, Ue, ze, de, $e, we = Gt;
                    g || (g = !0,
                    f && o.clearTimeout(f),
                    i = void 0,
                    a = _n || "",
                    yt.readyState = Dt > 0 ? 4 : 0,
                    xe = Dt >= 200 && Dt < 300 || Dt === 304,
                    pn && (de = Sr(P, yt, pn)),
                    !xe && s.inArray("script", P.dataTypes) > -1 && s.inArray("json", P.dataTypes) < 0 && (P.converters["text script"] = function() {}
                    ),
                    de = Dr(P, de, yt, xe),
                    xe ? (P.ifModified && ($e = yt.getResponseHeader("Last-Modified"),
                    $e && (s.lastModified[r] = $e),
                    $e = yt.getResponseHeader("etag"),
                    $e && (s.etag[r] = $e)),
                    Dt === 204 || P.type === "HEAD" ? we = "nocontent" : Dt === 304 ? we = "notmodified" : (we = de.state,
                    Ue = de.data,
                    ze = de.error,
                    xe = !ze)) : (ze = we,
                    (Dt || !we) && (we = "error",
                    Dt < 0 && (Dt = 0))),
                    yt.status = Dt,
                    yt.statusText = (Gt || we) + "",
                    xe ? bt.resolveWith(M, [Ue, we, yt]) : bt.rejectWith(M, [yt, we, ze]),
                    yt.statusCode(ie),
                    ie = void 0,
                    E && ft.trigger(xe ? "ajaxSuccess" : "ajaxError", [yt, P, xe ? Ue : ze]),
                    ut.fireWith(M, [yt, we]),
                    E && (ft.trigger("ajaxComplete", [yt, P]),
                    --s.active || s.event.trigger("ajaxStop")))
                }
                return yt
            },
            getJSON: function(t, e, i) {
                return s.get(t, e, i, "json")
            },
            getScript: function(t, e) {
                return s.get(t, void 0, e, "script")
            }
        }),
        s.each(["get", "post"], function(t, e) {
            s[e] = function(i, r, a, u) {
                return it(r) && (u = u || a,
                a = r,
                r = void 0),
                s.ajax(s.extend({
                    url: i,
                    type: e,
                    dataType: u,
                    data: r,
                    success: a
                }, s.isPlainObject(i) && i))
            }
        }),
        s.ajaxPrefilter(function(t) {
            var e;
            for (e in t.headers)
                e.toLowerCase() === "content-type" && (t.contentType = t.headers[e] || "")
        }),
        s._evalUrl = function(t, e, i) {
            return s.ajax({
                url: t,
                type: "GET",
                dataType: "script",
                cache: !0,
                async: !1,
                global: !1,
                converters: {
                    "text script": function() {}
                },
                dataFilter: function(r) {
                    s.globalEval(r, e, i)
                }
            })
        }
        ,
        s.fn.extend({
            wrapAll: function(t) {
                var e;
                return this[0] && (it(t) && (t = t.call(this[0])),
                e = s(t, this[0].ownerDocument).eq(0).clone(!0),
                this[0].parentNode && e.insertBefore(this[0]),
                e.map(function() {
                    for (var i = this; i.firstElementChild; )
                        i = i.firstElementChild;
                    return i
                }).append(this)),
                this
            },
            wrapInner: function(t) {
                return it(t) ? this.each(function(e) {
                    s(this).wrapInner(t.call(this, e))
                }) : this.each(function() {
                    var e = s(this)
                      , i = e.contents();
                    i.length ? i.wrapAll(t) : e.append(t)
                })
            },
            wrap: function(t) {
                var e = it(t);
                return this.each(function(i) {
                    s(this).wrapAll(e ? t.call(this, i) : t)
                })
            },
            unwrap: function(t) {
                return this.parent(t).not("body").each(function() {
                    s(this).replaceWith(this.childNodes)
                }),
                this
            }
        }),
        s.expr.pseudos.hidden = function(t) {
            return !s.expr.pseudos.visible(t)
        }
        ,
        s.expr.pseudos.visible = function(t) {
            return !!(t.offsetWidth || t.offsetHeight || t.getClientRects().length)
        }
        ,
        s.ajaxSettings.xhr = function() {
            try {
                return new o.XMLHttpRequest
            } catch {}
        }
        ;
        var _r = {
            0: 200,
            1223: 204
        }
          , dn = s.ajaxSettings.xhr();
        G.cors = !!dn && "withCredentials"in dn,
        G.ajax = dn = !!dn,
        s.ajaxTransport(function(t) {
            var e, i;
            if (G.cors || dn && !t.crossDomain)
                return {
                    send: function(r, a) {
                        var u, f = t.xhr();
                        if (f.open(t.type, t.url, t.async, t.username, t.password),
                        t.xhrFields)
                            for (u in t.xhrFields)
                                f[u] = t.xhrFields[u];
                        t.mimeType && f.overrideMimeType && f.overrideMimeType(t.mimeType),
                        !t.crossDomain && !r["X-Requested-With"] && (r["X-Requested-With"] = "XMLHttpRequest");
                        for (u in r)
                            f.setRequestHeader(u, r[u]);
                        e = function(m) {
                            return function() {
                                e && (e = i = f.onload = f.onerror = f.onabort = f.ontimeout = f.onreadystatechange = null,
                                m === "abort" ? f.abort() : m === "error" ? typeof f.status != "number" ? a(0, "error") : a(f.status, f.statusText) : a(_r[f.status] || f.status, f.statusText, (f.responseType || "text") !== "text" || typeof f.responseText != "string" ? {
                                    binary: f.response
                                } : {
                                    text: f.responseText
                                }, f.getAllResponseHeaders()))
                            }
                        }
                        ,
                        f.onload = e(),
                        i = f.onerror = f.ontimeout = e("error"),
                        f.onabort !== void 0 ? f.onabort = i : f.onreadystatechange = function() {
                            f.readyState === 4 && o.setTimeout(function() {
                                e && i()
                            })
                        }
                        ,
                        e = e("abort");
                        try {
                            f.send(t.hasContent && t.data || null)
                        } catch (m) {
                            if (e)
                                throw m
                        }
                    },
                    abort: function() {
                        e && e()
                    }
                }
        }),
        s.ajaxPrefilter(function(t) {
            t.crossDomain && (t.contents.script = !1)
        }),
        s.ajaxSetup({
            accepts: {
                script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
            },
            contents: {
                script: /\b(?:java|ecma)script\b/
            },
            converters: {
                "text script": function(t) {
                    return s.globalEval(t),
                    t
                }
            }
        }),
        s.ajaxPrefilter("script", function(t) {
            t.cache === void 0 && (t.cache = !1),
            t.crossDomain && (t.type = "GET")
        }),
        s.ajaxTransport("script", function(t) {
            if (t.crossDomain || t.scriptAttrs) {
                var e, i;
                return {
                    send: function(r, a) {
                        e = s("<script>").attr(t.scriptAttrs || {}).prop({
                            charset: t.scriptCharset,
                            src: t.url
                        }).on("load error", i = function(u) {
                            e.remove(),
                            i = null,
                            u && a(u.type === "error" ? 404 : 200, u.type)
                        }
                        ),
                        rt.head.appendChild(e[0])
                    },
                    abort: function() {
                        i && i()
                    }
                }
            }
        });
        var $i = []
          , Qn = /(=)\?(?=&|$)|\?\?/;
        s.ajaxSetup({
            jsonp: "callback",
            jsonpCallback: function() {
                var t = $i.pop() || s.expando + "_" + Ni.guid++;
                return this[t] = !0,
                t
            }
        }),
        s.ajaxPrefilter("json jsonp", function(t, e, i) {
            var r, a, u, f = t.jsonp !== !1 && (Qn.test(t.url) ? "url" : typeof t.data == "string" && (t.contentType || "").indexOf("application/x-www-form-urlencoded") === 0 && Qn.test(t.data) && "data");
            if (f || t.dataTypes[0] === "jsonp")
                return r = t.jsonpCallback = it(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback,
                f ? t[f] = t[f].replace(Qn, "$1" + r) : t.jsonp !== !1 && (t.url += (Un.test(t.url) ? "&" : "?") + t.jsonp + "=" + r),
                t.converters["script json"] = function() {
                    return u || s.error(r + " was not called"),
                    u[0]
                }
                ,
                t.dataTypes[0] = "json",
                a = o[r],
                o[r] = function() {
                    u = arguments
                }
                ,
                i.always(function() {
                    a === void 0 ? s(o).removeProp(r) : o[r] = a,
                    t[r] && (t.jsonpCallback = e.jsonpCallback,
                    $i.push(r)),
                    u && it(a) && a(u[0]),
                    u = a = void 0
                }),
                "script"
        }),
        G.createHTMLDocument = function() {
            var t = rt.implementation.createHTMLDocument("").body;
            return t.innerHTML = "<form></form><form></form>",
            t.childNodes.length === 2
        }(),
        s.parseHTML = function(t, e, i) {
            if (typeof t != "string")
                return [];
            typeof e == "boolean" && (i = e,
            e = !1);
            var r, a, u;
            return e || (G.createHTMLDocument ? (e = rt.implementation.createHTMLDocument(""),
            r = e.createElement("base"),
            r.href = rt.location.href,
            e.head.appendChild(r)) : e = rt),
            a = xt.exec(t),
            u = !i && [],
            a ? [e.createElement(a[1])] : (a = me([t], e, u),
            u && u.length && s(u).remove(),
            s.merge([], a.childNodes))
        }
        ,
        s.fn.load = function(t, e, i) {
            var r, a, u, f = this, m = t.indexOf(" ");
            return m > -1 && (r = Ve(t.slice(m)),
            t = t.slice(0, m)),
            it(e) ? (i = e,
            e = void 0) : e && typeof e == "object" && (a = "POST"),
            f.length > 0 && s.ajax({
                url: t,
                type: a || "GET",
                dataType: "html",
                data: e
            }).done(function(g) {
                u = arguments,
                f.html(r ? s("<div>").append(s.parseHTML(g)).find(r) : g)
            }).always(i && function(g, E) {
                f.each(function() {
                    i.apply(this, u || [g.responseText, E, g])
                })
            }
            ),
            this
        }
        ,
        s.expr.pseudos.animated = function(t) {
            return s.grep(s.timers, function(e) {
                return t === e.elem
            }).length
        }
        ,
        s.offset = {
            setOffset: function(t, e, i) {
                var r, a, u, f, m, g, E, k = s.css(t, "position"), j = s(t), P = {};
                k === "static" && (t.style.position = "relative"),
                m = j.offset(),
                u = s.css(t, "top"),
                g = s.css(t, "left"),
                E = (k === "absolute" || k === "fixed") && (u + g).indexOf("auto") > -1,
                E ? (r = j.position(),
                f = r.top,
                a = r.left) : (f = parseFloat(u) || 0,
                a = parseFloat(g) || 0),
                it(e) && (e = e.call(t, i, s.extend({}, m))),
                e.top != null && (P.top = e.top - m.top + f),
                e.left != null && (P.left = e.left - m.left + a),
                "using"in e ? e.using.call(t, P) : j.css(P)
            }
        },
        s.fn.extend({
            offset: function(t) {
                if (arguments.length)
                    return t === void 0 ? this : this.each(function(a) {
                        s.offset.setOffset(this, t, a)
                    });
                var e, i, r = this[0];
                if (r)
                    return r.getClientRects().length ? (e = r.getBoundingClientRect(),
                    i = r.ownerDocument.defaultView,
                    {
                        top: e.top + i.pageYOffset,
                        left: e.left + i.pageXOffset
                    }) : {
                        top: 0,
                        left: 0
                    }
            },
            position: function() {
                if (this[0]) {
                    var t, e, i, r = this[0], a = {
                        top: 0,
                        left: 0
                    };
                    if (s.css(r, "position") === "fixed")
                        e = r.getBoundingClientRect();
                    else {
                        for (e = this.offset(),
                        i = r.ownerDocument,
                        t = r.offsetParent || i.documentElement; t && (t === i.body || t === i.documentElement) && s.css(t, "position") === "static"; )
                            t = t.parentNode;
                        t && t !== r && t.nodeType === 1 && (a = s(t).offset(),
                        a.top += s.css(t, "borderTopWidth", !0),
                        a.left += s.css(t, "borderLeftWidth", !0))
                    }
                    return {
                        top: e.top - a.top - s.css(r, "marginTop", !0),
                        left: e.left - a.left - s.css(r, "marginLeft", !0)
                    }
                }
            },
            offsetParent: function() {
                return this.map(function() {
                    for (var t = this.offsetParent; t && s.css(t, "position") === "static"; )
                        t = t.offsetParent;
                    return t || A
                })
            }
        }),
        s.each({
            scrollLeft: "pageXOffset",
            scrollTop: "pageYOffset"
        }, function(t, e) {
            var i = e === "pageYOffset";
            s.fn[t] = function(r) {
                return U(this, function(a, u, f) {
                    var m;
                    if (at(a) ? m = a : a.nodeType === 9 && (m = a.defaultView),
                    f === void 0)
                        return m ? m[e] : a[u];
                    m ? m.scrollTo(i ? m.pageXOffset : f, i ? f : m.pageYOffset) : a[u] = f
                }, t, r, arguments.length)
            }
        }),
        s.each(["top", "left"], function(t, e) {
            s.cssHooks[e] = mi(G.pixelPosition, function(i, r) {
                if (r)
                    return r = fn(i, e),
                    On.test(r) ? s(i).position()[e] + "px" : r
            })
        }),
        s.each({
            Height: "height",
            Width: "width"
        }, function(t, e) {
            s.each({
                padding: "inner" + t,
                content: e,
                "": "outer" + t
            }, function(i, r) {
                s.fn[r] = function(a, u) {
                    var f = arguments.length && (i || typeof a != "boolean")
                      , m = i || (a === !0 || u === !0 ? "margin" : "border");
                    return U(this, function(g, E, k) {
                        var j;
                        return at(g) ? r.indexOf("outer") === 0 ? g["inner" + t] : g.document.documentElement["client" + t] : g.nodeType === 9 ? (j = g.documentElement,
                        Math.max(g.body["scroll" + t], j["scroll" + t], g.body["offset" + t], j["offset" + t], j["client" + t])) : k === void 0 ? s.css(g, E, m) : s.style(g, E, k, m)
                    }, e, f ? a : void 0, f)
                }
            })
        }),
        s.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(t, e) {
            s.fn[e] = function(i) {
                return this.on(e, i)
            }
        }),
        s.fn.extend({
            bind: function(t, e, i) {
                return this.on(t, null, e, i)
            },
            unbind: function(t, e) {
                return this.off(t, null, e)
            },
            delegate: function(t, e, i, r) {
                return this.on(e, t, i, r)
            },
            undelegate: function(t, e, i) {
                return arguments.length === 1 ? this.off(t, "**") : this.off(e, t || "**", i)
            },
            hover: function(t, e) {
                return this.mouseenter(t).mouseleave(e || t)
            }
        }),
        s.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function(t, e) {
            s.fn[e] = function(i, r) {
                return arguments.length > 0 ? this.on(e, null, i, r) : this.trigger(e)
            }
        });
        var Nr = /^[\s\uFEFF\xA0]+|([^\s\uFEFF\xA0])[\s\uFEFF\xA0]+$/g;
        s.proxy = function(t, e) {
            var i, r, a;
            if (typeof e == "string" && (i = t[e],
            e = t,
            t = i),
            !!it(t))
                return r = C.call(arguments, 2),
                a = function() {
                    return t.apply(e || this, r.concat(C.call(arguments)))
                }
                ,
                a.guid = t.guid = t.guid || s.guid++,
                a
        }
        ,
        s.holdReady = function(t) {
            t ? s.readyWait++ : s.ready(!0)
        }
        ,
        s.isArray = Array.isArray,
        s.parseJSON = JSON.parse,
        s.nodeName = tt,
        s.isFunction = it,
        s.isWindow = at,
        s.camelCase = ve,
        s.type = St,
        s.now = Date.now,
        s.isNumeric = function(t) {
            var e = s.type(t);
            return (e === "number" || e === "string") && !isNaN(t - parseFloat(t))
        }
        ,
        s.trim = function(t) {
            return t == null ? "" : (t + "").replace(Nr, "$1")
        }
        ;
        var Pr = o.jQuery
          , Fr = o.$;
        return s.noConflict = function(t) {
            return o.$ === s && (o.$ = Fr),
            t && o.jQuery === s && (o.jQuery = Pr),
            s
        }
        ,
        typeof l > "u" && (o.jQuery = o.$ = s),
        s
    })
}
)(Gi);
var es = Gi.exports;
const F = zi(es);
function ns(n) {
    throw new Error('Could not dynamically require "' + n + '". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')
}
var Zi = {
    exports: {}
};
/*! bignumber.js v2.4.0 https://github.com/MikeMcl/bignumber.js/LICENCE */
(function(n) {
    (function(o) {
        var l, p, y, C = /^-?(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i, D = Math.ceil, L = Math.floor, Q = " not a boolean or binary digit", ot = "rounding mode", Z = "number type has more than 15 significant digits", X = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ$_", lt = 1e14, V = 14, G = 9007199254740991, it = [1, 10, 100, 1e3, 1e4, 1e5, 1e6, 1e7, 1e8, 1e9, 1e10, 1e11, 1e12, 1e13], at = 1e7, rt = 1e9;
        typeof crypto < "u" && (p = crypto);
        function Ne(tt) {
            var xt, pt = 0, H = U.prototype, Et = new U(1), Mt = 20, _t = 4, ae = -7, le = 21, Vt = -1e7, Se = 1e7, Wt = !0, Pt = ve, qe = !1, tn = 1, Te = 100, ge = {
                decimalSeparator: ".",
                groupSeparator: ",",
                groupSize: 3,
                secondaryGroupSize: 0,
                fractionGroupSeparator: " ",
                fractionGroupSize: 0
            };
            function U(c, d) {
                var _, T, S, $, N, x, A = this;
                if (!(A instanceof U))
                    return Wt && te(26, "constructor call without new", c),
                    new U(c,d);
                if (d == null || !Pt(d, 2, 64, pt, "base")) {
                    if (c instanceof U) {
                        A.s = c.s,
                        A.e = c.e,
                        A.c = (c = c.c) ? c.slice() : c,
                        pt = 0;
                        return
                    }
                    if (($ = typeof c == "number") && c * 0 == 0) {
                        if (A.s = 1 / c < 0 ? (c = -c,
                        -1) : 1,
                        c === ~~c) {
                            for (T = 0,
                            S = c; S >= 10; S /= 10,
                            T++)
                                ;
                            A.e = T,
                            A.c = [c],
                            pt = 0;
                            return
                        }
                        x = c + ""
                    } else {
                        if (!C.test(x = c + ""))
                            return y(A, x, $);
                        A.s = x.charCodeAt(0) === 45 ? (x = x.slice(1),
                        -1) : 1
                    }
                } else {
                    if (d = d | 0,
                    x = c + "",
                    d == 10)
                        return A = new U(c instanceof U ? c : x),
                        et(A, Mt + A.e + 1, _t);
                    if (($ = typeof c == "number") && c * 0 != 0 || !new RegExp("^-?" + (_ = "[" + X.slice(0, d) + "]+") + "(?:\\." + _ + ")?$",d < 37 ? "i" : "").test(x))
                        return y(A, x, $, d);
                    $ ? (A.s = 1 / c < 0 ? (x = x.slice(1),
                    -1) : 1,
                    Wt && x.replace(/^0\.0*|\./, "").length > 15 && te(pt, Z, c),
                    $ = !1) : A.s = x.charCodeAt(0) === 45 ? (x = x.slice(1),
                    -1) : 1,
                    x = Cn(x, 10, d, A.s)
                }
                for ((T = x.indexOf(".")) > -1 && (x = x.replace(".", "")),
                (S = x.search(/e/i)) > 0 ? (T < 0 && (T = S),
                T += +x.slice(S + 1),
                x = x.substring(0, S)) : T < 0 && (T = x.length),
                S = 0; x.charCodeAt(S) === 48; S++)
                    ;
                for (N = x.length; x.charCodeAt(--N) === 48; )
                    ;
                if (x = x.slice(S, N + 1),
                x)
                    if (N = x.length,
                    $ && Wt && N > 15 && (c > G || c !== L(c)) && te(pt, Z, A.s * c),
                    T = T - S - 1,
                    T > Se)
                        A.c = A.e = null;
                    else if (T < Vt)
                        A.c = [A.e = 0];
                    else {
                        if (A.e = T,
                        A.c = [],
                        S = (T + 1) % V,
                        T < 0 && (S += V),
                        S < N) {
                            for (S && A.c.push(+x.slice(0, S)),
                            N -= V; S < N; )
                                A.c.push(+x.slice(S, S += V));
                            x = x.slice(S),
                            S = V - x.length
                        } else
                            S -= N;
                        for (; S--; x += "0")
                            ;
                        A.c.push(+x)
                    }
                else
                    A.c = [A.e = 0];
                pt = 0
            }
            U.another = Ne,
            U.ROUND_UP = 0,
            U.ROUND_DOWN = 1,
            U.ROUND_CEIL = 2,
            U.ROUND_FLOOR = 3,
            U.ROUND_HALF_UP = 4,
            U.ROUND_HALF_DOWN = 5,
            U.ROUND_HALF_EVEN = 6,
            U.ROUND_HALF_CEIL = 7,
            U.ROUND_HALF_FLOOR = 8,
            U.EUCLID = 9,
            U.config = function() {
                var c, d, _ = 0, T = {}, S = arguments, $ = S[0], N = $ && typeof $ == "object" ? function() {
                    if ($.hasOwnProperty(d))
                        return (c = $[d]) != null
                }
                : function() {
                    if (S.length > _)
                        return (c = S[_++]) != null
                }
                ;
                return N(d = "DECIMAL_PLACES") && Pt(c, 0, rt, 2, d) && (Mt = c | 0),
                T[d] = Mt,
                N(d = "ROUNDING_MODE") && Pt(c, 0, 8, 2, d) && (_t = c | 0),
                T[d] = _t,
                N(d = "EXPONENTIAL_AT") && (mt(c) ? Pt(c[0], -rt, 0, 2, d) && Pt(c[1], 0, rt, 2, d) && (ae = c[0] | 0,
                le = c[1] | 0) : Pt(c, -rt, rt, 2, d) && (ae = -(le = (c < 0 ? -c : c) | 0))),
                T[d] = [ae, le],
                N(d = "RANGE") && (mt(c) ? Pt(c[0], -rt, -1, 2, d) && Pt(c[1], 1, rt, 2, d) && (Vt = c[0] | 0,
                Se = c[1] | 0) : Pt(c, -rt, rt, 2, d) && (c | 0 ? Vt = -(Se = (c < 0 ? -c : c) | 0) : Wt && te(2, d + " cannot be zero", c))),
                T[d] = [Vt, Se],
                N(d = "ERRORS") && (c === !!c || c === 1 || c === 0 ? (pt = 0,
                Pt = (Wt = !!c) ? ve : s) : Wt && te(2, d + Q, c)),
                T[d] = Wt,
                N(d = "CRYPTO") && (c === !!c || c === 1 || c === 0 ? (qe = !!(c && p),
                c && !qe && Wt && te(2, "crypto unavailable", p)) : Wt && te(2, d + Q, c)),
                T[d] = qe,
                N(d = "MODULO_MODE") && Pt(c, 0, 9, 2, d) && (tn = c | 0),
                T[d] = tn,
                N(d = "POW_PRECISION") && Pt(c, 0, rt, 2, d) && (Te = c | 0),
                T[d] = Te,
                N(d = "FORMAT") && (typeof c == "object" ? ge = c : Wt && te(2, d + " not an object", c)),
                T[d] = ge,
                T
            }
            ,
            U.max = function() {
                return Tn(arguments, H.lt)
            }
            ,
            U.min = function() {
                return Tn(arguments, H.gt)
            }
            ,
            U.random = function() {
                var c = 9007199254740992
                  , d = Math.random() * c & 2097151 ? function() {
                    return L(Math.random() * c)
                }
                : function() {
                    return (Math.random() * 1073741824 | 0) * 8388608 + (Math.random() * 8388608 | 0)
                }
                ;
                return function(_) {
                    var T, S, $, N, x, A = 0, q = [], W = new U(Et);
                    if (_ = _ == null || !Pt(_, 0, rt, 14) ? Mt : _ | 0,
                    N = D(_ / V),
                    qe)
                        if (p && p.getRandomValues) {
                            for (T = p.getRandomValues(new Uint32Array(N *= 2)); A < N; )
                                x = T[A] * 131072 + (T[A + 1] >>> 11),
                                x >= 9e15 ? (S = p.getRandomValues(new Uint32Array(2)),
                                T[A] = S[0],
                                T[A + 1] = S[1]) : (q.push(x % 1e14),
                                A += 2);
                            A = N / 2
                        } else if (p && p.randomBytes) {
                            for (T = p.randomBytes(N *= 7); A < N; )
                                x = (T[A] & 31) * 281474976710656 + T[A + 1] * 1099511627776 + T[A + 2] * 4294967296 + T[A + 3] * 16777216 + (T[A + 4] << 16) + (T[A + 5] << 8) + T[A + 6],
                                x >= 9e15 ? p.randomBytes(7).copy(T, A) : (q.push(x % 1e14),
                                A += 7);
                            A = N / 7
                        } else
                            Wt && te(14, "crypto unavailable", p);
                    if (!A)
                        for (; A < N; )
                            x = d(),
                            x < 9e15 && (q[A++] = x % 1e14);
                    for (N = q[--A],
                    _ %= V,
                    N && _ && (x = it[V - _],
                    q[A] = L(N / x) * x); q[A] === 0; q.pop(),
                    A--)
                        ;
                    if (A < 0)
                        q = [$ = 0];
                    else {
                        for ($ = -1; q[0] === 0; q.shift(),
                        $ -= V)
                            ;
                        for (A = 1,
                        x = q[0]; x >= 10; x /= 10,
                        A++)
                            ;
                        A < V && ($ -= V - A)
                    }
                    return W.e = $,
                    W.c = q,
                    W
                }
            }();
            function Cn(c, d, _, T) {
                var S, $, N, x, A, q, W, Y = c.indexOf("."), vt = Mt, Ct = _t;
                for (_ < 37 && (c = c.toLowerCase()),
                Y >= 0 && (N = Te,
                Te = 0,
                c = c.replace(".", ""),
                W = new U(_),
                A = W.pow(c.length - Y),
                Te = N,
                W.c = At(fe(St(A.c), A.e), 10, d),
                W.e = W.c.length),
                q = At(c, _, d),
                $ = N = q.length; q[--N] == 0; q.pop())
                    ;
                if (!q[0])
                    return "0";
                if (Y < 0 ? --$ : (A.c = q,
                A.e = $,
                A.s = T,
                A = xt(A, W, vt, Ct, d),
                q = A.c,
                x = A.r,
                $ = A.e),
                S = $ + vt + 1,
                Y = q[S],
                N = d / 2,
                x = x || S < 0 || q[S + 1] != null,
                x = Ct < 4 ? (Y != null || x) && (Ct == 0 || Ct == (A.s < 0 ? 3 : 2)) : Y > N || Y == N && (Ct == 4 || x || Ct == 6 && q[S - 1] & 1 || Ct == (A.s < 0 ? 8 : 7)),
                S < 1 || !q[0])
                    c = x ? fe("1", -vt) : "0";
                else {
                    if (q.length = S,
                    x)
                        for (--d; ++q[--S] > d; )
                            q[S] = 0,
                            S || (++$,
                            q.unshift(1));
                    for (N = q.length; !q[--N]; )
                        ;
                    for (Y = 0,
                    c = ""; Y <= N; c += X.charAt(q[Y++]))
                        ;
                    c = fe(c, $)
                }
                return c
            }
            xt = function() {
                function c(T, S, $) {
                    var N, x, A, q, W = 0, Y = T.length, vt = S % at, Ct = S / at | 0;
                    for (T = T.slice(); Y--; )
                        A = T[Y] % at,
                        q = T[Y] / at | 0,
                        N = Ct * A + q * vt,
                        x = vt * A + N % at * at + W,
                        W = (x / $ | 0) + (N / at | 0) + Ct * q,
                        T[Y] = x % $;
                    return W && T.unshift(W),
                    T
                }
                function d(T, S, $, N) {
                    var x, A;
                    if ($ != N)
                        A = $ > N ? 1 : -1;
                    else
                        for (x = A = 0; x < $; x++)
                            if (T[x] != S[x]) {
                                A = T[x] > S[x] ? 1 : -1;
                                break
                            }
                    return A
                }
                function _(T, S, $, N) {
                    for (var x = 0; $--; )
                        T[$] -= x,
                        x = T[$] < S[$] ? 1 : 0,
                        T[$] = x * N + T[$] - S[$];
                    for (; !T[0] && T.length > 1; T.shift())
                        ;
                }
                return function(T, S, $, N, x) {
                    var A, q, W, Y, vt, Ct, Lt, qt, Qt, $t, Nt, Bt, ee, He, ln, me, Ye, ne = T.s == S.s ? 1 : -1, Zt = T.c, Ut = S.c;
                    if (!Zt || !Zt[0] || !Ut || !Ut[0])
                        return new U(!T.s || !S.s || (Zt ? Ut && Zt[0] == Ut[0] : !Ut) ? NaN : Zt && Zt[0] == 0 || !Ut ? ne * 0 : ne / 0);
                    for (qt = new U(ne),
                    Qt = qt.c = [],
                    q = T.e - S.e,
                    ne = $ + q + 1,
                    x || (x = lt,
                    q = Yt(T.e / V) - Yt(S.e / V),
                    ne = ne / V | 0),
                    W = 0; Ut[W] == (Zt[W] || 0); W++)
                        ;
                    if (Ut[W] > (Zt[W] || 0) && q--,
                    ne < 0)
                        Qt.push(1),
                        Y = !0;
                    else {
                        for (He = Zt.length,
                        me = Ut.length,
                        W = 0,
                        ne += 2,
                        vt = L(x / (Ut[0] + 1)),
                        vt > 1 && (Ut = c(Ut, vt, x),
                        Zt = c(Zt, vt, x),
                        me = Ut.length,
                        He = Zt.length),
                        ee = me,
                        $t = Zt.slice(0, me),
                        Nt = $t.length; Nt < me; $t[Nt++] = 0)
                            ;
                        Ye = Ut.slice(),
                        Ye.unshift(0),
                        ln = Ut[0],
                        Ut[1] >= x / 2 && ln++;
                        do {
                            if (vt = 0,
                            A = d(Ut, $t, me, Nt),
                            A < 0) {
                                if (Bt = $t[0],
                                me != Nt && (Bt = Bt * x + ($t[1] || 0)),
                                vt = L(Bt / ln),
                                vt > 1)
                                    for (vt >= x && (vt = x - 1),
                                    Ct = c(Ut, vt, x),
                                    Lt = Ct.length,
                                    Nt = $t.length; d(Ct, $t, Lt, Nt) == 1; )
                                        vt--,
                                        _(Ct, me < Lt ? Ye : Ut, Lt, x),
                                        Lt = Ct.length,
                                        A = 1;
                                else
                                    vt == 0 && (A = vt = 1),
                                    Ct = Ut.slice(),
                                    Lt = Ct.length;
                                if (Lt < Nt && Ct.unshift(0),
                                _($t, Ct, Nt, x),
                                Nt = $t.length,
                                A == -1)
                                    for (; d(Ut, $t, me, Nt) < 1; )
                                        vt++,
                                        _($t, me < Nt ? Ye : Ut, Nt, x),
                                        Nt = $t.length
                            } else
                                A === 0 && (vt++,
                                $t = [0]);
                            Qt[W++] = vt,
                            $t[0] ? $t[Nt++] = Zt[ee] || 0 : ($t = [Zt[ee]],
                            Nt = 1)
                        } while ((ee++ < He || $t[0] != null) && ne--);
                        Y = $t[0] != null,
                        Qt[0] || Qt.shift()
                    }
                    if (x == lt) {
                        for (W = 1,
                        ne = Qt[0]; ne >= 10; ne /= 10,
                        W++)
                            ;
                        et(qt, $ + (qt.e = W + q * V - 1) + 1, N, Y)
                    } else
                        qt.e = q,
                        qt.r = +Y;
                    return qt
                }
            }();
            function en(c, d, _, T) {
                var S, $, N, x, A;
                if (_ = _ != null && Pt(_, 0, 8, T, ot) ? _ | 0 : _t,
                !c.c)
                    return c.toString();
                if (S = c.c[0],
                N = c.e,
                d == null)
                    A = St(c.c),
                    A = T == 19 || T == 24 && N <= ae ? Kt(A, N) : fe(A, N);
                else if (c = et(new U(c), d, _),
                $ = c.e,
                A = St(c.c),
                x = A.length,
                T == 19 || T == 24 && (d <= $ || $ <= ae)) {
                    for (; x < d; A += "0",
                    x++)
                        ;
                    A = Kt(A, $)
                } else if (d -= N,
                A = fe(A, $),
                $ + 1 > x) {
                    if (--d > 0)
                        for (A += "."; d--; A += "0")
                            ;
                } else if (d += $ - x,
                d > 0)
                    for ($ + 1 == x && (A += "."); d--; A += "0")
                        ;
                return c.s < 0 && S ? "-" + A : A
            }
            function Tn(c, d) {
                var _, T, S = 0;
                for (mt(c[0]) && (c = c[0]),
                _ = new U(c[0]); ++S < c.length; )
                    if (T = new U(c[S]),
                    T.s)
                        d.call(_, T) && (_ = T);
                    else {
                        _ = T;
                        break
                    }
                return _
            }
            function ve(c, d, _, T, S) {
                return (c < d || c > _ || c != Oe(c)) && te(T, (S || "decimal places") + (c < d || c > _ ? " out of range" : " not an integer"), c),
                !0
            }
            function Fe(c, d, _) {
                for (var T = 1, S = d.length; !d[--S]; d.pop())
                    ;
                for (S = d[0]; S >= 10; S /= 10,
                T++)
                    ;
                return (_ = T + _ * V - 1) > Se ? c.c = c.e = null : _ < Vt ? c.c = [c.e = 0] : (c.e = _,
                c.c = d),
                c
            }
            y = function() {
                var c = /^(-?)0([xbo])(?=\w[\w.]*$)/i
                  , d = /^([^.]+)\.$/
                  , _ = /^\.([^.]+)$/
                  , T = /^-?(Infinity|NaN)$/
                  , S = /^\s*\+(?=[\w.])|^\s+|\s+$/g;
                return function($, N, x, A) {
                    var q, W = x ? N : N.replace(S, "");
                    if (T.test(W))
                        $.s = isNaN(W) ? null : W < 0 ? -1 : 1;
                    else {
                        if (!x && (W = W.replace(c, function(Y, vt, Ct) {
                            return q = (Ct = Ct.toLowerCase()) == "x" ? 16 : Ct == "b" ? 2 : 8,
                            !A || A == q ? vt : Y
                        }),
                        A && (q = A,
                        W = W.replace(d, "$1").replace(_, "0.$1")),
                        N != W))
                            return new U(W,q);
                        Wt && te(pt, "not a" + (A ? " base " + A : "") + " number", N),
                        $.s = null
                    }
                    $.c = $.e = null,
                    pt = 0
                }
            }();
            function te(c, d, _) {
                var T = new Error(["new BigNumber", "cmp", "config", "div", "divToInt", "eq", "gt", "gte", "lt", "lte", "minus", "mod", "plus", "precision", "random", "round", "shift", "times", "toDigits", "toExponential", "toFixed", "toFormat", "toFraction", "pow", "toPrecision", "toString", "BigNumber"][c] + "() " + d + ": " + _);
                throw T.name = "BigNumber Error",
                pt = 0,
                T
            }
            function et(c, d, _, T) {
                var S, $, N, x, A, q, W, Y = c.c, vt = it;
                if (Y) {
                    t: {
                        for (S = 1,
                        x = Y[0]; x >= 10; x /= 10,
                        S++)
                            ;
                        if ($ = d - S,
                        $ < 0)
                            $ += V,
                            N = d,
                            A = Y[q = 0],
                            W = A / vt[S - N - 1] % 10 | 0;
                        else if (q = D(($ + 1) / V),
                        q >= Y.length)
                            if (T) {
                                for (; Y.length <= q; Y.push(0))
                                    ;
                                A = W = 0,
                                S = 1,
                                $ %= V,
                                N = $ - V + 1
                            } else
                                break t;
                        else {
                            for (A = x = Y[q],
                            S = 1; x >= 10; x /= 10,
                            S++)
                                ;
                            $ %= V,
                            N = $ - V + S,
                            W = N < 0 ? 0 : A / vt[S - N - 1] % 10 | 0
                        }
                        if (T = T || d < 0 || Y[q + 1] != null || (N < 0 ? A : A % vt[S - N - 1]),
                        T = _ < 4 ? (W || T) && (_ == 0 || _ == (c.s < 0 ? 3 : 2)) : W > 5 || W == 5 && (_ == 4 || T || _ == 6 && ($ > 0 ? N > 0 ? A / vt[S - N] : 0 : Y[q - 1]) % 10 & 1 || _ == (c.s < 0 ? 8 : 7)),
                        d < 1 || !Y[0])
                            return Y.length = 0,
                            T ? (d -= c.e + 1,
                            Y[0] = vt[(V - d % V) % V],
                            c.e = -d || 0) : Y[0] = c.e = 0,
                            c;
                        if ($ == 0 ? (Y.length = q,
                        x = 1,
                        q--) : (Y.length = q + 1,
                        x = vt[V - $],
                        Y[q] = N > 0 ? L(A / vt[S - N] % vt[N]) * x : 0),
                        T)
                            for (; ; )
                                if (q == 0) {
                                    for ($ = 1,
                                    N = Y[0]; N >= 10; N /= 10,
                                    $++)
                                        ;
                                    for (N = Y[0] += x,
                                    x = 1; N >= 10; N /= 10,
                                    x++)
                                        ;
                                    $ != x && (c.e++,
                                    Y[0] == lt && (Y[0] = 1));
                                    break
                                } else {
                                    if (Y[q] += x,
                                    Y[q] != lt)
                                        break;
                                    Y[q--] = 0,
                                    x = 1
                                }
                        for ($ = Y.length; Y[--$] === 0; Y.pop())
                            ;
                    }
                    c.e > Se ? c.c = c.e = null : c.e < Vt && (c.c = [c.e = 0])
                }
                return c
            }
            return H.absoluteValue = H.abs = function() {
                var c = new U(this);
                return c.s < 0 && (c.s = 1),
                c
            }
            ,
            H.ceil = function() {
                return et(new U(this), this.e + 1, 2)
            }
            ,
            H.comparedTo = H.cmp = function(c, d) {
                return pt = 1,
                oe(this, new U(c,d))
            }
            ,
            H.decimalPlaces = H.dp = function() {
                var c, d, _ = this.c;
                if (!_)
                    return null;
                if (c = ((d = _.length - 1) - Yt(this.e / V)) * V,
                d = _[d])
                    for (; d % 10 == 0; d /= 10,
                    c--)
                        ;
                return c < 0 && (c = 0),
                c
            }
            ,
            H.dividedBy = H.div = function(c, d) {
                return pt = 3,
                xt(this, new U(c,d), Mt, _t)
            }
            ,
            H.dividedToIntegerBy = H.divToInt = function(c, d) {
                return pt = 4,
                xt(this, new U(c,d), 0, 1)
            }
            ,
            H.equals = H.eq = function(c, d) {
                return pt = 5,
                oe(this, new U(c,d)) === 0
            }
            ,
            H.floor = function() {
                return et(new U(this), this.e + 1, 3)
            }
            ,
            H.greaterThan = H.gt = function(c, d) {
                return pt = 6,
                oe(this, new U(c,d)) > 0
            }
            ,
            H.greaterThanOrEqualTo = H.gte = function(c, d) {
                return pt = 7,
                (d = oe(this, new U(c,d))) === 1 || d === 0
            }
            ,
            H.isFinite = function() {
                return !!this.c
            }
            ,
            H.isInteger = H.isInt = function() {
                return !!this.c && Yt(this.e / V) > this.c.length - 2
            }
            ,
            H.isNaN = function() {
                return !this.s
            }
            ,
            H.isNegative = H.isNeg = function() {
                return this.s < 0
            }
            ,
            H.isZero = function() {
                return !!this.c && this.c[0] == 0
            }
            ,
            H.lessThan = H.lt = function(c, d) {
                return pt = 8,
                oe(this, new U(c,d)) < 0
            }
            ,
            H.lessThanOrEqualTo = H.lte = function(c, d) {
                return pt = 9,
                (d = oe(this, new U(c,d))) === -1 || d === 0
            }
            ,
            H.minus = H.sub = function(c, d) {
                var _, T, S, $, N = this, x = N.s;
                if (pt = 10,
                c = new U(c,d),
                d = c.s,
                !x || !d)
                    return new U(NaN);
                if (x != d)
                    return c.s = -d,
                    N.plus(c);
                var A = N.e / V
                  , q = c.e / V
                  , W = N.c
                  , Y = c.c;
                if (!A || !q) {
                    if (!W || !Y)
                        return W ? (c.s = -d,
                        c) : new U(Y ? N : NaN);
                    if (!W[0] || !Y[0])
                        return Y[0] ? (c.s = -d,
                        c) : new U(W[0] ? N : _t == 3 ? -0 : 0)
                }
                if (A = Yt(A),
                q = Yt(q),
                W = W.slice(),
                x = A - q) {
                    for (($ = x < 0) ? (x = -x,
                    S = W) : (q = A,
                    S = Y),
                    S.reverse(),
                    d = x; d--; S.push(0))
                        ;
                    S.reverse()
                } else
                    for (T = ($ = (x = W.length) < (d = Y.length)) ? x : d,
                    x = d = 0; d < T; d++)
                        if (W[d] != Y[d]) {
                            $ = W[d] < Y[d];
                            break
                        }
                if ($ && (S = W,
                W = Y,
                Y = S,
                c.s = -c.s),
                d = (T = Y.length) - (_ = W.length),
                d > 0)
                    for (; d--; W[_++] = 0)
                        ;
                for (d = lt - 1; T > x; ) {
                    if (W[--T] < Y[T]) {
                        for (_ = T; _ && !W[--_]; W[_] = d)
                            ;
                        --W[_],
                        W[T] += lt
                    }
                    W[T] -= Y[T]
                }
                for (; W[0] == 0; W.shift(),
                --q)
                    ;
                return W[0] ? Fe(c, W, q) : (c.s = _t == 3 ? -1 : 1,
                c.c = [c.e = 0],
                c)
            }
            ,
            H.modulo = H.mod = function(c, d) {
                var _, T, S = this;
                return pt = 11,
                c = new U(c,d),
                !S.c || !c.s || c.c && !c.c[0] ? new U(NaN) : !c.c || S.c && !S.c[0] ? new U(S) : (tn == 9 ? (T = c.s,
                c.s = 1,
                _ = xt(S, c, 0, 3),
                c.s = T,
                _.s *= T) : _ = xt(S, c, 0, tn),
                S.minus(_.times(c)))
            }
            ,
            H.negated = H.neg = function() {
                var c = new U(this);
                return c.s = -c.s || null,
                c
            }
            ,
            H.plus = H.add = function(c, d) {
                var _, T = this, S = T.s;
                if (pt = 12,
                c = new U(c,d),
                d = c.s,
                !S || !d)
                    return new U(NaN);
                if (S != d)
                    return c.s = -d,
                    T.minus(c);
                var $ = T.e / V
                  , N = c.e / V
                  , x = T.c
                  , A = c.c;
                if (!$ || !N) {
                    if (!x || !A)
                        return new U(S / 0);
                    if (!x[0] || !A[0])
                        return A[0] ? c : new U(x[0] ? T : S * 0)
                }
                if ($ = Yt($),
                N = Yt(N),
                x = x.slice(),
                S = $ - N) {
                    for (S > 0 ? (N = $,
                    _ = A) : (S = -S,
                    _ = x),
                    _.reverse(); S--; _.push(0))
                        ;
                    _.reverse()
                }
                for (S = x.length,
                d = A.length,
                S - d < 0 && (_ = A,
                A = x,
                x = _,
                d = S),
                S = 0; d; )
                    S = (x[--d] = x[d] + A[d] + S) / lt | 0,
                    x[d] %= lt;
                return S && (x.unshift(S),
                ++N),
                Fe(c, x, N)
            }
            ,
            H.precision = H.sd = function(c) {
                var d, _, T = this, S = T.c;
                if (c != null && c !== !!c && c !== 1 && c !== 0 && (Wt && te(13, "argument" + Q, c),
                c != !!c && (c = null)),
                !S)
                    return null;
                if (_ = S.length - 1,
                d = _ * V + 1,
                _ = S[_]) {
                    for (; _ % 10 == 0; _ /= 10,
                    d--)
                        ;
                    for (_ = S[0]; _ >= 10; _ /= 10,
                    d++)
                        ;
                }
                return c && T.e + 1 > d && (d = T.e + 1),
                d
            }
            ,
            H.round = function(c, d) {
                var _ = new U(this);
                return (c == null || Pt(c, 0, rt, 15)) && et(_, ~~c + this.e + 1, d == null || !Pt(d, 0, 8, 15, ot) ? _t : d | 0),
                _
            }
            ,
            H.shift = function(c) {
                var d = this;
                return Pt(c, -G, G, 16, "argument") ? d.times("1e" + Oe(c)) : new U(d.c && d.c[0] && (c < -G || c > G) ? d.s * (c < 0 ? 0 : 1 / 0) : d)
            }
            ,
            H.squareRoot = H.sqrt = function() {
                var c, d, _, T, S, $ = this, N = $.c, x = $.s, A = $.e, q = Mt + 4, W = new U("0.5");
                if (x !== 1 || !N || !N[0])
                    return new U(!x || x < 0 && (!N || N[0]) ? NaN : N ? $ : 1 / 0);
                if (x = Math.sqrt(+$),
                x == 0 || x == 1 / 0 ? (d = St(N),
                (d.length + A) % 2 == 0 && (d += "0"),
                x = Math.sqrt(d),
                A = Yt((A + 1) / 2) - (A < 0 || A % 2),
                x == 1 / 0 ? d = "1e" + A : (d = x.toExponential(),
                d = d.slice(0, d.indexOf("e") + 1) + A),
                _ = new U(d)) : _ = new U(x + ""),
                _.c[0]) {
                    for (A = _.e,
                    x = A + q,
                    x < 3 && (x = 0); ; )
                        if (S = _,
                        _ = W.times(S.plus(xt($, S, q, 1))),
                        St(S.c).slice(0, x) === (d = St(_.c)).slice(0, x))
                            if (_.e < A && --x,
                            d = d.slice(x - 3, x + 1),
                            d == "9999" || !T && d == "4999") {
                                if (!T && (et(S, S.e + Mt + 2, 0),
                                S.times(S).eq($))) {
                                    _ = S;
                                    break
                                }
                                q += 4,
                                x += 4,
                                T = 1
                            } else {
                                (!+d || !+d.slice(1) && d.charAt(0) == "5") && (et(_, _.e + Mt + 2, 1),
                                c = !_.times(_).eq($));
                                break
                            }
                }
                return et(_, _.e + Mt + 1, _t, c)
            }
            ,
            H.times = H.mul = function(c, d) {
                var _, T, S, $, N, x, A, q, W, Y, vt, Ct, Lt, qt, Qt, $t = this, Nt = $t.c, Bt = (pt = 17,
                c = new U(c,d)).c;
                if (!Nt || !Bt || !Nt[0] || !Bt[0])
                    return !$t.s || !c.s || Nt && !Nt[0] && !Bt || Bt && !Bt[0] && !Nt ? c.c = c.e = c.s = null : (c.s *= $t.s,
                    !Nt || !Bt ? c.c = c.e = null : (c.c = [0],
                    c.e = 0)),
                    c;
                for (T = Yt($t.e / V) + Yt(c.e / V),
                c.s *= $t.s,
                A = Nt.length,
                Y = Bt.length,
                A < Y && (Lt = Nt,
                Nt = Bt,
                Bt = Lt,
                S = A,
                A = Y,
                Y = S),
                S = A + Y,
                Lt = []; S--; Lt.push(0))
                    ;
                for (qt = lt,
                Qt = at,
                S = Y; --S >= 0; ) {
                    for (_ = 0,
                    vt = Bt[S] % Qt,
                    Ct = Bt[S] / Qt | 0,
                    N = A,
                    $ = S + N; $ > S; )
                        q = Nt[--N] % Qt,
                        W = Nt[N] / Qt | 0,
                        x = Ct * q + W * vt,
                        q = vt * q + x % Qt * Qt + Lt[$] + _,
                        _ = (q / qt | 0) + (x / Qt | 0) + Ct * W,
                        Lt[$--] = q % qt;
                    Lt[$] = _
                }
                return _ ? ++T : Lt.shift(),
                Fe(c, Lt, T)
            }
            ,
            H.toDigits = function(c, d) {
                var _ = new U(this);
                return c = c == null || !Pt(c, 1, rt, 18, "precision") ? null : c | 0,
                d = d == null || !Pt(d, 0, 8, 18, ot) ? _t : d | 0,
                c ? et(_, c, d) : _
            }
            ,
            H.toExponential = function(c, d) {
                return en(this, c != null && Pt(c, 0, rt, 19) ? ~~c + 1 : null, d, 19)
            }
            ,
            H.toFixed = function(c, d) {
                return en(this, c != null && Pt(c, 0, rt, 20) ? ~~c + this.e + 1 : null, d, 20)
            }
            ,
            H.toFormat = function(c, d) {
                var _ = en(this, c != null && Pt(c, 0, rt, 21) ? ~~c + this.e + 1 : null, d, 21);
                if (this.c) {
                    var T, S = _.split("."), $ = +ge.groupSize, N = +ge.secondaryGroupSize, x = ge.groupSeparator, A = S[0], q = S[1], W = this.s < 0, Y = W ? A.slice(1) : A, vt = Y.length;
                    if (N && (T = $,
                    $ = N,
                    N = T,
                    vt -= T),
                    $ > 0 && vt > 0) {
                        for (T = vt % $ || $,
                        A = Y.substr(0, T); T < vt; T += $)
                            A += x + Y.substr(T, $);
                        N > 0 && (A += x + Y.slice(T)),
                        W && (A = "-" + A)
                    }
                    _ = q ? A + ge.decimalSeparator + ((N = +ge.fractionGroupSize) ? q.replace(new RegExp("\\d{" + N + "}\\B","g"), "$&" + ge.fractionGroupSeparator) : q) : A
                }
                return _
            }
            ,
            H.toFraction = function(c) {
                var d, _, T, S, $, N, x, A, q, W = Wt, Y = this, vt = Y.c, Ct = new U(Et), Lt = _ = new U(Et), qt = x = new U(Et);
                if (c != null && (Wt = !1,
                N = new U(c),
                Wt = W,
                (!(W = N.isInt()) || N.lt(Et)) && (Wt && te(22, "max denominator " + (W ? "out of range" : "not an integer"), c),
                c = !W && N.c && et(N, N.e + 1, 1).gte(Et) ? N : null)),
                !vt)
                    return Y.toString();
                for (q = St(vt),
                S = Ct.e = q.length - Y.e - 1,
                Ct.c[0] = it[($ = S % V) < 0 ? V + $ : $],
                c = !c || N.cmp(Ct) > 0 ? S > 0 ? Ct : Lt : N,
                $ = Se,
                Se = 1 / 0,
                N = new U(q),
                x.c[0] = 0; A = xt(N, Ct, 0, 1),
                T = _.plus(A.times(qt)),
                T.cmp(c) != 1; )
                    _ = qt,
                    qt = T,
                    Lt = x.plus(A.times(T = Lt)),
                    x = T,
                    Ct = N.minus(A.times(T = Ct)),
                    N = T;
                return T = xt(c.minus(_), qt, 0, 1),
                x = x.plus(T.times(Lt)),
                _ = _.plus(T.times(qt)),
                x.s = Lt.s = Y.s,
                S *= 2,
                d = xt(Lt, qt, S, _t).minus(Y).abs().cmp(xt(x, _, S, _t).minus(Y).abs()) < 1 ? [Lt.toString(), qt.toString()] : [x.toString(), _.toString()],
                Se = $,
                d
            }
            ,
            H.toNumber = function() {
                return +this
            }
            ,
            H.toPower = H.pow = function(c, d) {
                var _, T, S, $ = L(c < 0 ? -c : +c), N = this;
                if (d != null && (pt = 23,
                d = new U(d)),
                !Pt(c, -G, G, 23, "exponent") && (!isFinite(c) || $ > G && (c /= 0) || parseFloat(c) != c && !(c = NaN)) || c == 0)
                    return _ = Math.pow(+N, c),
                    new U(d ? _ % d : _);
                for (d ? c > 1 && N.gt(Et) && N.isInt() && d.gt(Et) && d.isInt() ? N = N.mod(d) : (S = d,
                d = null) : Te && (_ = D(Te / V + 2)),
                T = new U(Et); ; ) {
                    if ($ % 2) {
                        if (T = T.times(N),
                        !T.c)
                            break;
                        _ ? T.c.length > _ && (T.c.length = _) : d && (T = T.mod(d))
                    }
                    if ($ = L($ / 2),
                    !$)
                        break;
                    N = N.times(N),
                    _ ? N.c && N.c.length > _ && (N.c.length = _) : d && (N = N.mod(d))
                }
                return d ? T : (c < 0 && (T = Et.div(T)),
                S ? T.mod(S) : _ ? et(T, Te, _t) : T)
            }
            ,
            H.toPrecision = function(c, d) {
                return en(this, c != null && Pt(c, 1, rt, 24, "precision") ? c | 0 : null, d, 24)
            }
            ,
            H.toString = function(c) {
                var d, _ = this, T = _.s, S = _.e;
                return S === null ? T ? (d = "Infinity",
                T < 0 && (d = "-" + d)) : d = "NaN" : (d = St(_.c),
                c == null || !Pt(c, 2, 64, 25, "base") ? d = S <= ae || S >= le ? Kt(d, S) : fe(d, S) : d = Cn(fe(d, S), c | 0, 10, T),
                T < 0 && _.c[0] && (d = "-" + d)),
                d
            }
            ,
            H.truncated = H.trunc = function() {
                return et(new U(this), this.e + 1, 1)
            }
            ,
            H.valueOf = H.toJSON = function() {
                var c, d = this, _ = d.e;
                return _ === null ? d.toString() : (c = St(d.c),
                c = _ <= ae || _ >= le ? Kt(c, _) : fe(c, _),
                d.s < 0 ? "-" + c : c)
            }
            ,
            tt != null && U.config(tt),
            U
        }
        function Yt(tt) {
            var xt = tt | 0;
            return tt > 0 || tt === xt ? xt : xt - 1
        }
        function St(tt) {
            for (var xt, pt, H = 1, Et = tt.length, Mt = tt[0] + ""; H < Et; ) {
                for (xt = tt[H++] + "",
                pt = V - xt.length; pt--; xt = "0" + xt)
                    ;
                Mt += xt
            }
            for (Et = Mt.length; Mt.charCodeAt(--Et) === 48; )
                ;
            return Mt.slice(0, Et + 1 || 1)
        }
        function oe(tt, xt) {
            var pt, H, Et = tt.c, Mt = xt.c, _t = tt.s, ae = xt.s, le = tt.e, Vt = xt.e;
            if (!_t || !ae)
                return null;
            if (pt = Et && !Et[0],
            H = Mt && !Mt[0],
            pt || H)
                return pt ? H ? 0 : -ae : _t;
            if (_t != ae)
                return _t;
            if (pt = _t < 0,
            H = le == Vt,
            !Et || !Mt)
                return H ? 0 : !Et ^ pt ? 1 : -1;
            if (!H)
                return le > Vt ^ pt ? 1 : -1;
            for (ae = (le = Et.length) < (Vt = Mt.length) ? le : Vt,
            _t = 0; _t < ae; _t++)
                if (Et[_t] != Mt[_t])
                    return Et[_t] > Mt[_t] ^ pt ? 1 : -1;
            return le == Vt ? 0 : le > Vt ^ pt ? 1 : -1
        }
        function s(tt, xt, pt) {
            return (tt = Oe(tt)) >= xt && tt <= pt
        }
        function mt(tt) {
            return Object.prototype.toString.call(tt) == "[object Array]"
        }
        function At(tt, xt, pt) {
            for (var H, Et = [0], Mt, _t = 0, ae = tt.length; _t < ae; ) {
                for (Mt = Et.length; Mt--; Et[Mt] *= xt)
                    ;
                for (Et[H = 0] += X.indexOf(tt.charAt(_t++)); H < Et.length; H++)
                    Et[H] > pt - 1 && (Et[H + 1] == null && (Et[H + 1] = 0),
                    Et[H + 1] += Et[H] / pt | 0,
                    Et[H] %= pt)
            }
            return Et.reverse()
        }
        function Kt(tt, xt) {
            return (tt.length > 1 ? tt.charAt(0) + "." + tt.slice(1) : tt) + (xt < 0 ? "e" : "e+") + xt
        }
        function fe(tt, xt) {
            var pt, H;
            if (xt < 0) {
                for (H = "0."; ++xt; H += "0")
                    ;
                tt = H + tt
            } else if (pt = tt.length,
            ++xt > pt) {
                for (H = "0",
                xt -= pt; --xt; H += "0")
                    ;
                tt += H
            } else
                xt < pt && (tt = tt.slice(0, xt) + "." + tt.slice(xt));
            return tt
        }
        function Oe(tt) {
            return tt = parseFloat(tt),
            tt < 0 ? D(tt) : L(tt)
        }
        if (l = Ne(),
        l.default = l.BigNumber = l,
        n.exports) {
            if (n.exports = l,
            !p)
                try {
                    p = ns("crypto")
                } catch {}
        } else
            o || (o = typeof self < "u" ? self : Function("return this")()),
            o.BigNumber = l
    }
    )(Xi)
}
)(Zi);
var is = Zi.exports;
const st = zi(is);
function Je() {
    this.$switch = null,
    this.current = "yen",
    this.init()
}
Je.prototype.init = function() {
    this.initNode(),
    this.$switch && this.$switch.length && (this.initEvents(),
    this.load())
}
;
Je.prototype.initNode = function() {
    this.$switch = F(".switch input")
}
;
Je.prototype.initEvents = function() {
    this.$switch.on("change.CurrencySwitch", F.proxy(this.onChange, this))
}
;
Je.prototype.load = function() {
    if (this.$switch && this.$switch.length) {
        var n = this.current;
        this.select(n)
    }
}
;
Je.prototype.select = function(n) {
    this.$switch && this.$switch.length && (this.$switch.prop("checked", !1).filter('[value="' + n + '"]').prop("checked", !0),
    F("body").attr("data-currency", n),
    this.current = n,
    F(this).trigger("change", n))
}
;
Je.prototype.onChange = function(n) {
    if (n.target.checked) {
        var o = F(n.target).attr("value");
        this.select(o)
    }
}
;
var rs = new Je
  , Me = {
    browser: {},
    currency: rs,
    toZenkakuKatakana: function(n) {
        return n = this.hankakuKanaToZenkakuKana(n),
        n = this.hiraganaToKatakana(n),
        n = this.hankakuAlphaToZenkakuAlpha(n),
        n
    },
    hankakuAlphaToZenkakuAlpha: function(n) {
        return (n || "").toUpperCase().replace(/[a-zA-Z]/g, function(o) {
            return String.fromCharCode(o.charCodeAt(0) + 65248)
        })
    },
    hiraganaToKatakana: function(n) {
        return (n || "").replace(/[\u3041-\u3096]/g, function(o) {
            return String.fromCharCode(o.charCodeAt(0) + 96)
        })
    },
    hankakuKanaToZenkakuKana: function(n) {
        var o = {
            ｦ: "ヲ",
            ｧ: "ァ",
            ｨ: "ィ",
            ｩ: "ゥ",
            ｪ: "ェ",
            ｫ: "ォ",
            ｬ: "ャ",
            ｭ: "ュ",
            ｮ: "ョ",
            ｯ: "ッ",
            ｰ: "ー",
            ｱ: "ア",
            ｲ: "イ",
            ｳ: "ウ",
            ｴ: "エ",
            ｵ: "オ",
            ｶ: "カ",
            ｷ: "キ",
            ｸ: "ク",
            ｹ: "ケ",
            ｺ: "コ",
            ｻ: "サ",
            ｼ: "シ",
            ｽ: "ス",
            ｾ: "セ",
            ｿ: "ソ",
            ﾀ: "タ",
            ﾁ: "チ",
            ﾂ: "ツ",
            ﾃ: "テ",
            ﾄ: "ト",
            ﾅ: "ナ",
            ﾆ: "ニ",
            ﾇ: "ヌ",
            ﾈ: "ネ",
            ﾉ: "ノ",
            ﾊ: "ハ",
            ﾋ: "ヒ",
            ﾌ: "フ",
            ﾍ: "ヘ",
            ﾎ: "ホ",
            ﾏ: "マ",
            ﾐ: "ミ",
            ﾑ: "ム",
            ﾒ: "メ",
            ﾓ: "モ",
            ﾔ: "ヤ",
            ﾕ: "ユ",
            ﾖ: "ヨ",
            ﾗ: "ラ",
            ﾘ: "リ",
            ﾙ: "ル",
            ﾚ: "レ",
            ﾛ: "ロ",
            ﾜ: "ワ",
            ﾝ: "ン",
            ｳﾞ: "ヴ",
            ｶﾞ: "ガ",
            ｷﾞ: "ギ",
            ｸﾞ: "グ",
            ｹﾞ: "ゲ",
            ｺﾞ: "ゴ",
            ｻﾞ: "ザ",
            ｼﾞ: "ジ",
            ｽﾞ: "ズ",
            ｾﾞ: "ゼ",
            ｿﾞ: "ゾ",
            ﾀﾞ: "ダ",
            ﾁﾞ: "ヂ",
            ﾂﾞ: "ヅ",
            ﾃﾞ: "デ",
            ﾄﾞ: "ド",
            ﾊﾞ: "バ",
            ﾋﾞ: "ビ",
            ﾌﾞ: "ブ",
            ﾍﾞ: "ベ",
            ﾎﾞ: "ボ",
            ﾊﾟ: "パ",
            ﾋﾟ: "ピ",
            ﾌﾟ: "プ",
            ﾍﾟ: "ペ",
            ﾎﾟ: "ポ"
        };
        return (n || "").replace(/[\uff71-\uff84\uff8a-\uff8e][\uff9e\uff9f]|[\uff66-\uff9d]/g, function(l) {
            return o[l] || l
        })
    },
    trimSpace: function(n) {
        return (n || "").replace(/^[\s　]+|[\s　]+$/g, "")
    },
    formatNumber: function(n, o) {
        var l = n.toString(10)
          , p = l.match(/^([-+])?(\d+)(\.(\d+))?/)
          , y = p[1] || ""
          , C = p[2] || ""
          , D = p[3] || "";
        return C = C.split("").reverse().join("").replace(/(\d{3})/g, function() {
            return arguments[1] + ","
        }).split("").reverse().join("").replace(/^,/, ""),
        y + (o || "") + C + D
    },
    floor: function(n) {
        if (!n)
            return 0;
        var o = n.toString(10)
          , l = o.match(/^([-+])?(\d+)(\.(\d+))?/)
          , p = l[1] || ""
          , y = l[2] || "";
        return l[3],
        p + y
    }
};
(function(n) {
    var o = navigator.userAgent;
    let l, p, y;
    n.isWindows = o.indexOf("Windows") !== -1,
    n.isMac = o.indexOf("Mac") !== -1,
    n.isIE = o.indexOf("MSIE") !== -1 || o.indexOf("Trident/") !== -1,
    n.isWebkit = o.indexOf("WebKit") !== -1,
    n.isSafari = o.indexOf("Apple") !== -1 && o.indexOf("Chrome") === -1,
    n.isFirefox = o.indexOf("Firefox") !== -1,
    o.indexOf("Chrome") != -1 && (l = o.indexOf("Chrome"),
    p = o.indexOf(" ", l),
    y = o.substring(l + 7, p),
    parseFloat(y) >= 96 && (n.isChromeAboveVer96 = o.indexOf("Chrome") !== -1)),
    n.isAndroid = o.indexOf("Android") !== -1,
    n.isIOS = !!o.match(/iPhone|iPad|iPod/),
    n.isWindowsPhone = !!o.match(/Windows\s*Phone/),
    n.isBlackBerry = !!o.match(/BlackBerry/),
    n.isSmartDevice = n.isAndroid || n.isIOS || n.isWindowsPhone || n.isBlackBerry,
    n.isTablet = n.isSmartDevice && (n.isIOS && !!o.match(/iPad/) || n.isAndroid && (o.match(/SC\\-01C/) || !o.match(/Mobile/))),
    n.isSmartphone = n.isSmartDevice && !n.isTablet,
    n.version = parseFloat((o.match(/(rv:|MSIE\s+|OS\s+|Android\s+)(\d+([._]\d+)?)/) || [0, 0, 0])[2], 10)
}
)(Me.browser);
function nt(n) {
    this.conf = null,
    this.node = null,
    this.datas = null,
    this.min = 0,
    this.max = 0,
    this.delay = 200,
    this.init(n)
}
nt.prototype.destroy = function() {
    F(this.conf.targetAmount).off("change"),
    F(this.conf.eventTarget).off("change"),
    this.node.parentNode && this.node.parentNode.removeChild(this.node),
    this.conf = null,
    this.node = null,
    this.datas = null
}
;
nt.prototype.init = function(n) {
    this.initConf(n),
    this.initNode(),
    this.initData(),
    this.initEvents(),
    this.checkInitialValue()
}
;
nt.prototype.initConf = function(n) {
    this.conf = n || this.conf
}
;
nt.prototype.initNode = function() {
    this.conf && (this.conf.node ? this.node = this.conf.node : (this.node = document.createElementNS("http://www.w3.org/2000/svg", "svg"),
    this.node.setAttribute("class", this.conf.className),
    this.resetViewSize()),
    this.$config = F(".config-panel"))
}
;
nt.prototype.initData = function() {
    function n(Z, X) {
        var lt = Z.querySelector(X) || {};
        return lt.innerText || lt.textContent || ""
    }
    if (this.conf) {
        this.datas = [];
        for (var o = document.querySelectorAll(this.conf.source), l = 0, p = this.conf.sourceConfs.length; l < p; l++) {
            for (var y = [], C = this.conf.sourceConfs[l], D = 0, L = o.length; D < L; D++) {
                var Q = o[D]
                  , ot = {
                    node: Q,
                    name: n(Q, C.nameSource),
                    value: parseFloat(n(Q, C.valueSource).replace(/,/g, ""), 10) || 0,
                    unit: n(Q, C.unitSource)
                };
                y.push(ot)
            }
            this.conf.sort && y.sort(function(Z, X) {
                return Z.name < X.name ? -1 : Z.name > X.name ? 1 : 0
            }),
            this.datas.push(y)
        }
        this.initRange()
    }
}
;
nt.prototype.initRange = function() {
    var n = new st(this.getMin().toString(10))
      , o = new st(this.getMax().toString(10))
      , l = o.minus(n)
      , p = l.times((this.conf.adjustMargin || 0).toString(10));
    n = n.minus(p),
    o = o.plus(p),
    this.min = st.max(0, n).toNumber(),
    this.max = o.toNumber()
}
;
nt.prototype.initEvents = function() {
    F(this.conf.targetAmount).on("change", F.proxy(function() {
        this.initRange(),
        this.draw()
    }, this)),
    F(this.conf.eventTarget).on("change", F.proxy(this.onChange, this))
}
;
nt.prototype.checkInitialValue = function() {
    var n = F(this.conf.form)
      , o = n.find("input").filter(function(l, p) {
        return p.value != p.defaultValue
    });
    o.length
}
;
nt.prototype.resetViewSize = function() {
    this.node && (this.node.setAttribute("viewBox", [0, 0, this.conf.width, this.conf.height].join(" ")),
    this.node.setAttribute("width", this.conf.width),
    this.node.setAttribute("height", this.conf.height))
}
;
nt.prototype.getFormData = function() {
    var n = F(this.conf.form)
      , o = {};
    return n.find("input").each(function(l, p) {
        var y = F(p)
          , C = y.attr("name");
        o[C] = y.val()
    }),
    o.reset = !0,
    o
}
;
nt.prototype.update = function() {
    var n = F(this.conf.form);
    n.data("SimulationForm") && !n.data("SimulationForm").validate() || (this.getFormData(),
    this.conf.updateUserTarget)
}
;
nt.prototype.resetViewSize = function() {
    this.node && (this.node.setAttribute("viewBox", [0, 0, this.conf.width, this.conf.height].join(" ")),
    this.node.setAttribute("width", this.conf.width),
    this.node.setAttribute("height", this.conf.height))
}
;
nt.prototype.getNeededDataLength = function() {
    var n = 0
      , o = this.getInvestMonth() + 1
      , l = this.datas && this.datas[0] ? this.datas[0].length : null;
    return l && (isNaN(o) ? n = l : n = Math.min(o, l)),
    n
}
;
nt.prototype.textToInt = function(n) {
    var o = new st((n || "").replace(/[^-\d.]/g, "") || 0);
    return o.round().toNumber()
}
;
nt.prototype.getStartAmount = function() {
    var n = new st(this.textToInt(F(this.conf.startAmount).val()).toString(10))
      , o = new st(this.textToInt(F(this.conf.startDeposit).val()).toString(10));
    return n.plus(o).toNumber()
}
;
nt.prototype.getInvest = function(n) {
    var o = new st(this.getStartAmount().toString(10))
      , l = new st(this.textToInt(F(this.conf.monthlyDeposit).val()).toString(10)).times(n.toString(10));
    return o.plus(l).toNumber()
}
;
nt.prototype.getInvestMonth = function() {
    return new st(this.textToInt(F(this.conf.year).val()).toString(10)).times(12).toNumber()
}
;
nt.prototype.getTotalInvest = function() {
    return this.textToInt(F(this.conf.totalInvest).text())
}
;
nt.prototype.getFinalInvest = function() {
    return this.getInvest(this.datas[0].length)
}
;
nt.prototype.getTargetAmount = function() {
    return this.textToInt(F(this.conf.targetAmount).val())
}
;
nt.prototype.getMin = function() {
    return 0
}
;
nt.prototype.getMax = function() {
    var n = Math.max(this.getStartAmount(), this.getFinalInvest(), this.getTargetAmount());
    if (this.datas && this.datas.length)
        for (var o = 0, l = this.datas.length; o < l; o++)
            for (var p = this.datas[o], y = 0, C = p.length; y < C; y++)
                n = Math.max(n, p[y].value);
    else
        n = 0;
    return n
}
;
nt.prototype.getRatioX = function(n) {
    return n / (this.datas[0].length - 1)
}
;
nt.prototype.getRatioY = function(n) {
    return (n - this.min) / (this.max - this.min)
}
;
nt.prototype.getPointX = function(n) {
    var o = this.getChartRect();
    return this.getRatioX(n) * o.width + o.left
}
;
nt.prototype.getPointY = function(n) {
    var o = this.getChartRect();
    return o.bottom - this.getRatioY(n) * o.height
}
;
nt.prototype.getPoint = function(n, o) {
    return {
        x: this.getPointX(n),
        y: this.getPointY(o)
    }
}
;
nt.prototype.getEndPoint = function(n) {
    return this.getPoint(this.getNeededDataLength() - 1, n || 0)
}
;
nt.prototype.getChartRect = function() {
    var n = {
        left: this.conf.leftAxis.size,
        right: this.conf.width - this.conf.rightAxis.size,
        top: 0,
        bottom: this.conf.height - this.conf.bottomAxis.size,
        width: this.conf.width - this.conf.leftAxis.size - this.conf.rightAxis.size,
        height: this.conf.height - this.conf.bottomAxis.size,
        probabilityWidth: this.conf.underLineWidth.probability,
        per30Y: this.conf.underLineY.per30,
        per50Y: this.conf.underLineY.per50,
        per70Y: this.conf.underLineY.per70,
        per30: this.conf.amountText.per30,
        per50: this.conf.amountText.per50,
        per70: this.conf.amountText.per70,
        principal: this.conf.amountText.principal,
        probabilityPathHeight: this.conf.probabilityPath.height,
        principalY: this.conf.underLineY.principal,
        principalWidth: this.conf.underLineWidth.principal,
        principalPathHeight: this.conf.principalPath.height
    };
    return n
}
;
nt.prototype.createText = function() {
    var n = document.createElementNS("http://www.w3.org/2000/svg", "text");
    return n.setAttribute("fill", "#000"),
    this.node.appendChild(n),
    n
}
;
nt.prototype.createPath = function() {
    var n = document.createElementNS("http://www.w3.org/2000/svg", "path");
    return n.setAttribute("fill", "none"),
    n.setAttribute("stroke", "#000"),
    n.setAttribute("stroke-width", "1"),
    n.setAttribute("stroke-linecap", "butt"),
    n.setAttribute("stroke-linejoin", "round"),
    this.node.appendChild(n),
    n
}
;
nt.prototype.createRect = function() {
    var n = document.createElementNS("http://www.w3.org/2000/svg", "rect");
    return n.setAttribute("fill", "#fff"),
    n.setAttribute("fill-opacity", "0.85"),
    n.setAttribute("stroke", "none"),
    this.node.appendChild(n),
    n
}
;
nt.prototype.setTspan = function(n, o) {
    F(n).empty();
    for (var l = 0, p = o.length; l < p; l++) {
        var y = o[l]
          , C = document.createElementNS("http://www.w3.org/2000/svg", "tspan");
        F(C).attr(y.attr).text(y.text),
        n.appendChild(C)
    }
}
;
nt.prototype.getPath = function(n) {
    return this.paths || (this.paths = []),
    this.paths[n] || (this.paths[n] = this.createPath(),
    this.paths[n].setAttribute("class", "forecast-line"),
    this.paths[n].setAttribute("data-index", n)),
    this.paths[n]
}
;
nt.prototype.getText = function(n) {
    return this.texts || (this.texts = []),
    this.texts[n] || (this.texts[n] = this.createText(),
    this.texts[n].setAttribute("class", "forecast-text"),
    this.texts[n].setAttribute("data-index", n)),
    this.texts[n]
}
;
nt.prototype.getAxisPath = function(n) {
    return this.axisPaths || (this.axisPaths = []),
    this.axisPaths[n] || (this.axisPaths[n] = this.createPath(),
    this.axisPaths[n].setAttribute("class", "forecast-axis-line"),
    this.axisPaths[n].setAttribute("data-index", n)),
    this.axisPaths[n]
}
;
nt.prototype.clearAxisText = function(n) {
    if (!(!this.axisTexts || !this.axisTexts[n])) {
        for (var o = 0, l = this.axisTexts[n].length; o < l; o++) {
            var p = this.axisTexts[n][o];
            p && p.parentNode && p.parentNode.removeChild(p)
        }
        this.axisTexts[n] = []
    }
}
;
nt.prototype.getAxisText = function(n, o) {
    return this.axisTexts || (this.axisTexts = []),
    this.axisTexts[n] || (this.axisTexts[n] = []),
    this.axisTexts[n][o] || (this.axisTexts[n][o] = this.createText(),
    this.axisTexts[n][o].setAttribute("class", "forecast-axis-text"),
    this.axisTexts[n][o].setAttribute("data-index", n)),
    this.axisTexts[n][o]
}
;
nt.prototype.getFill = function() {
    return this.fillPath || (this.fillPath = this.createRect(),
    this.fillPath.setAttribute("class", "forecast-fill")),
    this.fillPath
}
;
nt.prototype.getAmountPath = function() {
    return this.amountPath || (this.amountPath = this.createPath(),
    this.amountPath.setAttribute("stroke-dasharray", "4 2"),
    this.amountPath.setAttribute("class", "forecast-amount-line")),
    this.amountPath
}
;
nt.prototype.getAmountPointPath = function() {
    return this.amountPointPath || (this.amountPointPath = this.createPath(),
    this.amountPointPath.setAttribute("stroke-dasharray", "4 2"),
    this.amountPointPath.setAttribute("class", "forecast-amount-line")),
    this.amountPointPath
}
;
nt.prototype.getProbabilityPath = function(n) {
    return this.probabilityPath || (this.probabilityPath = []),
    this.probabilityPath[n] || (this.probabilityPath[n] = this.createPath(),
    this.probabilityPath[n].setAttribute("stroke-dasharray", "4 2"),
    this.probabilityPath[n].setAttribute("class", "forecast-amount-line"),
    this.probabilityPath[n].setAttribute("data-index", n)),
    this.probabilityPath[n]
}
;
nt.prototype.getAmountText = function() {
    return this.amountText || (this.amountText = this.createText(),
    this.amountText.setAttribute("class", "forecast-amount-text")),
    this.amountText
}
;
nt.prototype.getTargetPath = function() {
    return this.targetPath || (this.targetPath = this.createPath(),
    this.targetPath.setAttribute("class", "forecast-target-line")),
    this.targetPath
}
;
nt.prototype.getTargetTextOutline = function() {
    return this.targetTextOutline || (this.targetTextOutline = this.createText(),
    this.targetTextOutline.setAttribute("class", "forecast-target-text forecast-target-text-outline")),
    this.targetTextOutline
}
;
nt.prototype.getTargetText = function() {
    return this.targetText || (this.targetText = this.createText(),
    this.targetText.setAttribute("class", "forecast-target-text")),
    this.targetText
}
;
nt.prototype.getUnderLine = function(n) {
    return this.underLine || (this.underLine = []),
    this.underLine[n] || (this.underLine[n] = this.createPath(),
    this.underLine[n].setAttribute("stroke-dasharray", "4 2"),
    this.underLine[n].setAttribute("class", "forecast-amount-line"),
    this.underLine[n].setAttribute("data-index", n)),
    this.underLine[n]
}
;
nt.prototype.draw = function() {
    this.drawAxis(),
    this.drawLine(),
    this.drawTarget(),
    this.drawAmount(),
    this.drawText()
}
;
nt.prototype.getLineData = function(n) {
    for (var o = [], l = [], p = this.datas[n], y = this.conf.samples, C = 0, D = p.length; C < D; C++) {
        var L = p[C]
          , Q = this.getPoint(C, L.value);
        l.push(Q)
    }
    if (y) {
        for (var C = 0, D = y; C < D; C++) {
            var ot = C == 0 ? "M" : "L";
            o.push([ot, l[C].x, l[C].y].join(" "))
        }
        for (var C = y, D = this.getNeededDataLength(); C < D; C += 6) {
            for (var Z = Math.max(0, C - y), X = Math.min(l.length - 1, C + y), lt = 0, V = 0, G = Z; G <= X; G++) {
                var it = Math.pow(.6666666666666666, Math.abs(G - C));
                V += l[G].y * it,
                lt += it
            }
            var Q = {
                x: l[C].x,
                y: lt ? V / lt : V
            };
            o.push(["L", Q.x, Q.y].join(" "))
        }
    } else {
        for (var X = this.datas[0].length, C = 0, D = Math.min(24, X); C < D; C++) {
            var ot = C == 0 ? "M" : "L";
            o.push([ot, l[C].x, l[C].y].join(" "))
        }
        for (var Z = C, C = Z, D = Math.min(48, X); C < D; C += 6) {
            var ot = C == 0 ? "M" : "L";
            o.push([ot, l[C].x, l[C].y].join(" "))
        }
        for (var Z = C, C = Z, D = Math.min(96, X); C < D; C += 12) {
            var ot = "L";
            o.push([ot, l[C].x, l[C].y].join(" "))
        }
        for (var Z = C, C = Z, D = X; C < D; C += 24) {
            var ot = "L";
            o.push([ot, l[C].x, l[C].y].join(" "))
        }
        o.push([ot, l[X - 1].x, l[X - 1].y].join(" "))
    }
    return o
}
;
nt.prototype.drawLine = function() {
    this.getChartRect(),
    this.getNeededDataLength();
    for (var n = [], o = 0, l = this.datas.length; o < l; o++) {
        var p = this.getLineData(o);
        n.push(p)
    }
    var y = n[0].slice().concat(n[4].slice().reverse());
    y[y.length - 1].replace("M", "L"),
    y.push("Z");
    var C = this.getPath(0);
    C.setAttribute("d", y.join(" "));
    var D = n[1].slice().concat(n[3].slice().reverse());
    D[D.length - 1].replace("M", "L"),
    D.push("Z");
    var L = this.getPath(1);
    L.setAttribute("d", D.join(" "));
    var Q = this.getPath(2);
    Q.setAttribute("d", n[2].join(" "))
}
;
nt.prototype.pointCircle = function(n) {
    return this.pointCirclePath || (this.pointCirclePath = []),
    this.pointCirclePath[n] || (this.pointCirclePath[n] = this.createRect(),
    this.pointCirclePath[n].setAttribute("class", "forecast-fill-circle"),
    this.pointCirclePath[n].setAttribute("fill-opacity", "1"),
    this.pointCirclePath[n].setAttribute("width", 8),
    this.pointCirclePath[n].setAttribute("height", 8),
    this.pointCirclePath[n].setAttribute("rx", 100),
    this.pointCirclePath[n].setAttribute("ry", 100),
    this.pointCirclePath[n].setAttribute("fill", "#0984E3"),
    this.pointCirclePath[n].setAttribute("data-index", n)),
    this.pointCirclePath[n]
}
;
nt.prototype.drawAmount = function() {
    var n = this.getChartRect()
      , o = this.getAmountPath()
      , l = this.pointCircle(98)
      , p = this.getPointY(this.getStartAmount())
      , y = this.getPointY(this.getFinalInvest())
      , C = [["M", n.left, p].join(" "), ["L", n.right, y].join(" ")];
    o.setAttribute("class", "forecast-principal-chart"),
    o.setAttribute("d", C.join(" ")),
    l.setAttribute("class", "forecast-principal-circle"),
    l.setAttribute("x", n.left),
    l.setAttribute("y", p - 5)
}
;
nt.prototype.drawTarget = function() {
    var n = this.getChartRect()
      , o = this.getPointY(this.getTargetAmount())
      , l = this.getTargetPath()
      , p = [["M", n.left, o].join(" "), ["H", n.right].join(" ")];
    l.setAttribute("d", p.join(" "))
}
;
nt.prototype.drawText = function() {
    this.drawFill(),
    this.drawLineText(),
    this.drawAmountText(),
    this.drawTargetText()
}
;
nt.prototype.drawFill = function() {
    var n = this.getChartRect()
      , o = this.getNeededDataLength()
      , l = this.getPointX(o)
      , p = this.getFill();
    p.setAttribute("x", l),
    p.setAttribute("y", n.top),
    p.setAttribute("width", this.conf.width - l),
    p.setAttribute("height", n.bottom - n.top)
}
;
nt.prototype.getFinalValue = function() {
    for (var n = [], o = this.getNeededDataLength(), l = 0, p = this.datas.length; l < p; l++)
        n[l] = this.datas[l][o - 1].value;
    return n
}
;
nt.prototype.drawLineText = function() {
    for (var n = this.getNeededDataLength(), o = this.getFinalValue(), l = this.getChartRect(), p = 0, y = this.datas.length; p < y; p++) {
        var C = new st(o[p].toString(10)).round()
          , D = this.getEndPoint(C.toNumber())
          , L = this.getText(p);
        L.setAttribute("x", 0),
        p == 3 ? L.setAttribute("y", l.per30) : p == 2 ? L.setAttribute("y", l.per50) : p == 1 ? L.setAttribute("y", l.per70) : L.setAttribute("y", D.y + (p == 1 ? 8 : 0)),
        this.setTspan(L, [{
            attr: {
                class: "name"
            },
            text: this.conf.sourceConfs[p].name
        }, {
            attr: {},
            text: "の確率で"
        }, {
            attr: {
                class: "value",
                dx: 0
            },
            text: C.c[0].toLocaleString()
        }, {
            attr: {
                class: "unit"
            },
            text: "万円以上"
        }]);
        var Q = this.getUnderLine(p);
        if (p == 3)
            var ot = [["M", 0, l.per30Y].join(" "), ["H", l.probabilityWidth].join(" ")];
        else if (p == 2)
            var ot = [["M", 0, l.per50Y].join(" "), ["H", l.probabilityWidth].join(" ")];
        else if (p == 1)
            var ot = [["M", 0, l.per70Y].join(" "), ["H", l.probabilityWidth].join(" ")];
        else
            var ot = [["M", 0, 109].join(" "), ["H", l.probabilityWidth].join(" ")];
        Q.setAttribute("d", ot.join(" "));
        var Z = this.getProbabilityPath(p)
          , X = this.pointCircle(p)
          , lt = D.y;
        if (p == 3)
            var V = [["M", l.probabilityPathHeight, l.per30Y].join(" "), ["L", this.getPointX(n), lt].join(" ")];
        else if (p == 2)
            var V = [["M", l.probabilityPathHeight, l.per50Y].join(" "), ["L", this.getPointX(n), lt].join(" ")];
        else if (p == 1)
            var V = [["M", l.probabilityPathHeight, l.per70Y].join(" "), ["L", this.getPointX(n), lt].join(" ")];
        else
            var V = [["M", l.left * 5.8, l.bottom * .106 * 2.7].join(" "), ["L", this.getPointX(n), lt].join(" ")];
        Z.setAttribute("d", V.join(" "));
        var G = {
            x: this.getPointX(n) - 6,
            y: lt - 5
        };
        for (var it of Object.entries(G))
            X.setAttribute(it[0], it[1])
    }
}
;
nt.prototype.drawAmountText = function() {
    var n = new st(this.getTotalInvest().toString(10)).round()
      , o = this.getEndPoint(n)
      , l = this.getChartRect()
      , p = this.getAmountText()
      , y = this.getNeededDataLength();
    p.setAttribute("x", 0),
    p.setAttribute("y", l.principal),
    this.setTspan(p, [{
        attr: {
            class: "prop-name"
        },
        text: "元本"
    }, {
        attr: {
            class: "value",
            dx: 0
        },
        text: n.c[0].toLocaleString()
    }, {
        attr: {
            class: "unit"
        },
        text: "万円"
    }]);
    var C = this.getUnderLine()
      , D = [["M", 0, l.principalY].join(" "), ["H", l.principalWidth].join(" ")];
    C.setAttribute("class", "forecast-principal-line"),
    C.setAttribute("d", D.join(" "));
    var L = this.getAmountPointPath()
      , Q = o.y
      , ot = [["M", l.principalPathHeight, l.principalY].join(" "), ["L", this.getPointX(y), Q].join(" ")];
    L.setAttribute("class", "forecast-principal-line"),
    L.setAttribute("d", ot.join(" "));
    var Z = this.pointCircle(99);
    Z.setAttribute("class", "forecast-principal-circle"),
    Z.setAttribute("x", this.getPointX(y) - 6),
    Z.setAttribute("y", Q - 5)
}
;
nt.prototype.drawTargetText = function() {
    var n = this.getChartRect()
      , o = new st(this.getTargetAmount().toString(10))
      , l = this.getPointY(o)
      , p = n.left + this.conf.rightAxis.textOffset
      , y = l - this.conf.bottomAxis.textOffset
      , C = [{
        attr: {
            class: "name"
        },
        text: "目標額"
    }, {
        attr: {},
        text: " "
    }, {
        attr: {
            class: "value"
        },
        text: o.round().toString()
    }, {
        attr: {
            class: "unit"
        },
        text: "万"
    }]
      , D = this.getTargetTextOutline();
    D.setAttribute("x", p),
    D.setAttribute("y", y),
    this.setTspan(D, C);
    var L = this.getTargetText();
    L.setAttribute("x", p),
    L.setAttribute("y", y),
    this.setTspan(L, C)
}
;
nt.prototype.drawAxis = function() {
    this.drawAxisX(),
    this.drawAxisY()
}
;
nt.prototype.drawAxisX = function() {
    var n = this.getChartRect()
      , o = this.getAxisPath(0)
      , l = [["M", n.left, n.bottom].join(" "), ["H", n.right].join(" ")];
    o.setAttribute("d", l.join(" "));
    for (var p = [10, 20, 30], y = 0, C = p.length; y < C; y++) {
        var D = this.getAxisText(0, y)
          , L = this.getPointX(p[y] * 12)
          , Q = n.bottom + this.conf.bottomAxis.textOffset;
        D.setAttribute("x", L - 15),
        D.setAttribute("y", Q + 13),
        this.setTspan(D, [{
            attr: {
                class: "value"
            },
            text: p[y]
        }, {
            attr: {
                class: "unit"
            },
            text: "年"
        }]);
        var o = this.getAxisPath(2 + y);
        o.setAttribute("data-display", "none"),
        o.setAttribute("d", ["M", L, n.top, "L", L, n.bottom].join(" "))
    }
}
;
nt.prototype.drawAxisY = function() {
    var n = this.getChartRect()
      , o = this.getAxisPath(1)
      , l = [["M", n.left, n.bottom].join(" "), ["V", 0].join(" ")];
    o.setAttribute("d", l.join(" ")),
    this.clearAxisText(1);
    var p = this.getAxisText(1, 0)
      , y = new st(this.getStartAmount().toString(10))
      , V = y
      , C = n.left - this.conf.leftAxis.textOffset
      , D = this.getPointY(V.toNumber()) + 4;
    p.setAttribute("x", C),
    p.setAttribute("y", D),
    this.setTspan(p, [{
        attr: {
            class: "value"
        },
        text: V.round().toString()
    }, {
        attr: {
            class: "unit"
        },
        text: "万"
    }]);
    for (var L = 4, Q = new st(this.getMax().toString(10)), ot = new st(this.getMin().toString(10)), Z = Q.minus(ot), X = new st(10).pow(Z.div(L).floor().toString(10).length - 1), lt = Z.div(L).div(X).floor().times(X), V = ot.div(lt).floor().times(lt), G = 1; V.lte(Q); ) {
        if (V.minus(y).abs().lte(lt.div(8))) {
            V = V.plus(lt);
            continue
        }
        var p = this.getAxisText(1, G)
          , it = n.left - this.conf.leftAxis.textOffset
          , at = this.getPointY(V.toNumber()) + 4;
        if (at < 10 + 4 || n.bottom + 4 < at || Math.abs(D - at) < 15) {
            V = V.plus(lt);
            continue
        }
        p.setAttribute("x", it),
        p.setAttribute("y", at),
        this.setTspan(p, [{
            attr: {
                class: "value"
            },
            text: V.toString()
        }, {
            attr: {
                class: "unit"
            },
            text: "万"
        }]),
        V = V.plus(lt),
        G++
    }
}
;
nt.prototype.onChange = function() {
    this._timer = setTimeout(F.proxy(this.update, this), this.delay)
}
;
nt.prototype.onLoad = function(n) {
    for (var o = [], l = n || document, p = 0, y = o.length; p < y; p++) {
        var C = o[p]
          , D = l.querySelector(C);
        if (D) {
            var L = document.importNode(D, !0);
            F(C).replaceWith(L)
        }
    }
    this.initData(),
    this.draw(),
    F(this).trigger("updated")
}
;
function J(n) {
    this.conf = null,
    this.node = null,
    this.datas = null,
    this.comment = null,
    this.min = 0,
    this.max = 0,
    this.delay = 200,
    this.init(n)
}
J.prototype.destroy = function() {
    F([this.conf.startAmount, this.conf.startDeposit].join(",")).off("change"),
    F(this.node).off(),
    this.node.parentNode && this.node.parentNode.removeChild(this.node),
    this.conf = null,
    this.node = null,
    this.datas = null,
    this.comment = null
}
;
J.prototype.init = function(n) {
    this.initConf(n),
    this.initNode(),
    this.initData(),
    this.initComment(),
    this.initEvents()
}
;
J.prototype.initConf = function(n) {
    this.conf = n || this.conf
}
;
J.prototype.initNode = function() {
    this.conf && (this.conf.node ? this.node = this.conf.node : (this.node = document.createElementNS("http://www.w3.org/2000/svg", "svg"),
    this.node.setAttribute("class", this.conf.className),
    this.resetViewSize()),
    this.conf.container && F(this.node).appendTo(this.conf.container))
}
;
J.prototype.initData = function() {
    function n(D, L) {
        var Q = D.querySelector(L) || {};
        return Q.innerText || Q.textContent || ""
    }
    if (this.conf) {
        this.datas = [];
        for (var o = document.querySelectorAll(this.conf.source), l = 0, p = o.length; l < p; l++) {
            var y = o[l]
              , C = {
                node: y,
                name: n(y, this.conf.nameSource),
                value: parseFloat(n(y, this.conf.valueSource).replace(/,/g, ""), 10) || 0,
                unit: n(y, this.conf.unitSource)
            };
            this.datas.push(C)
        }
        this.formatValue(),
        this.initRange()
    }
}
;
J.prototype.formatValue = function() {
    for (var n = this.datas[0].value, o = 0, l = this.datas.length; o < l; o++)
        n < 100 ? this.datas[o].value = new st(this.datas[o].value).round(2, st.ROUND_DOWN).toNumber() : n < 500 ? this.datas[o].value = new st(this.datas[o].value).round(1, st.ROUND_DOWN).toNumber() : this.datas[o].value = new st(this.datas[o].value).round(0, st.ROUND_DOWN).toNumber()
}
;
J.prototype.initRange = function() {
    var n = new st(this.getMin().toString(10))
      , o = new st(this.getMax().toString(10))
      , l = o.minus(n)
      , p = l.times((this.conf.adjustMargin || 0).toString(10));
    n = n.minus(p),
    o = o.plus(p),
    this.min = st.max(0, n).toNumber(),
    this.max = o.toNumber()
}
;
J.prototype.initComment = function() {
    this.comment = new J.Comment(this.conf.comment),
    this.comment.bind(this)
}
;
J.prototype.initEvents = function() {
    F([this.conf.startAmount, this.conf.startDeposit].join(",")).on("change", F.proxy(function() {
        this.initRange(),
        this.draw()
    }, this)),
    F(this.node).on("mousemove touchmove click", F.proxy(function(n) {
        var o = this.getEventPoint(n)
          , l = this.toLocalPosition(o);
        if (l) {
            var p = this.getIndexByPosition(l.x);
            this.selectData(p)
        }
    }, this)).on("mouseleave", F.proxy(function(n) {
        this.unselectData()
    }, this))
}
;
J.prototype.resetViewSize = function() {
    this.node && (this.node.setAttribute("viewBox", [0, 0, this.conf.width, this.conf.height].join(" ")),
    this.node.setAttribute("width", this.conf.width),
    this.node.setAttribute("height", this.conf.height))
}
;
J.prototype.getNeededDataLength = function() {
    var n = 0;
    this.getInvestMonth();
    var o = this.datas ? this.datas.length : null;
    return o && (n = o),
    n
}
;
J.prototype.textToInt = function(n) {
    var o = new st((n || "").replace(/[^-\d.]/g, "") || 0);
    return o.round().toNumber()
}
;
J.prototype.getStartAmount = function() {
    var n = new st(this.textToInt(F(this.conf.startAmount).val()).toString(10))
      , o = new st(this.textToInt(F(this.conf.startDeposit).val()).toString(10));
    return n.plus(o).toNumber()
}
;
J.prototype.getInvest = function(n) {
    var o = new st(this.getStartAmount().toString(10))
      , l = new st(this.textToInt(F(this.conf.monthlyDeposit).val()).toString(10)).times(n.toString(10));
    return o.plus(l).toNumber()
}
;
J.prototype.getInvestMonth = function() {
    return new st(this.datas.length - 1).toNumber()
}
;
J.prototype.getTotalInvest = function() {
    return this.getInvest(this.getInvestMonth())
}
;
J.prototype.getMin = function() {
    return 0
}
;
J.prototype.getMax = function() {
    var n = st.max(this.getStartAmount().toString(10), this.getTotalInvest().toString(10));
    if (this.datas && this.datas.length)
        for (var o = 0, l = this.datas.length; o < l; o++)
            n = st.max(n, this.datas[o].value.toString(10));
    else
        n = new st(0);
    return n.toNumber()
}
;
J.prototype.getRatioX = function(n) {
    return n / (this.getNeededDataLength() - 1)
}
;
J.prototype.getRatioY = function(n) {
    var o = this.max - this.min
      , l = n - this.min;
    return o != 0 ? l / o : o == 0 && l == 0 ? 0 : 1
}
;
J.prototype.getPointX = function(n) {
    var o = this.getChartRect();
    return this.getRatioX(n) * o.width + o.left
}
;
J.prototype.getPointY = function(n) {
    var o = this.getChartRect();
    return o.bottom - this.getRatioY(n) * o.height
}
;
J.prototype.getPoint = function(n, o) {
    return {
        x: this.getPointX(n),
        y: this.getPointY(o)
    }
}
;
J.prototype.getEndPoint = function(n) {
    return this.getPoint(this.getNeededDataLength() - 1, n || 0)
}
;
J.prototype.getChartRect = function() {
    var n = {
        left: this.conf.leftAxis.size,
        right: this.conf.width - this.conf.rightAxis.size,
        top: 0,
        bottom: this.conf.height - this.conf.bottomAxis.size,
        width: this.conf.width - this.conf.leftAxis.size - this.conf.rightAxis.size,
        height: this.conf.height - this.conf.bottomAxis.size,
        totalAssetsMinus: this.conf.simText.totalAssets,
        principalX: this.conf.simText.principalX,
        principalY: this.conf.simText.principalY,
        pointCircleSize: this.conf.pointCircle.size,
        taPointCircleX: this.conf.pointCircle.taPosX,
        taPointCircleY: this.conf.pointCircle.taPosY,
        priPointCircleX: this.conf.pointCircle.priPosX,
        priPointCircleY: this.conf.pointCircle.priPosY,
        unitY: this.conf.simText.unitY
    };
    return n
}
;
J.prototype.createText = function() {
    var n = document.createElementNS("http://www.w3.org/2000/svg", "text");
    return n.setAttribute("fill", "#000"),
    this.node.appendChild(n),
    n
}
;
J.prototype.createPath = function() {
    var n = document.createElementNS("http://www.w3.org/2000/svg", "path");
    return n.setAttribute("fill", "none"),
    n.setAttribute("stroke", "#000"),
    n.setAttribute("stroke-width", "1"),
    n.setAttribute("stroke-linecap", "butt"),
    n.setAttribute("stroke-linejoin", "round"),
    this.node.appendChild(n),
    n
}
;
J.prototype.createRect = function() {
    var n = document.createElementNS("http://www.w3.org/2000/svg", "rect");
    return n.setAttribute("fill", "#fff"),
    n.setAttribute("fill-opacity", "0.85"),
    n.setAttribute("stroke", "none"),
    this.node.appendChild(n),
    n
}
;
J.prototype.setTspan = function(n, o) {
    F(n).empty();
    for (var l = 0, p = o.length; l < p; l++) {
        var y = o[l]
          , C = document.createElementNS("http://www.w3.org/2000/svg", "tspan");
        F(C).attr(y.attr).text(y.text),
        n.appendChild(C)
    }
}
;
J.prototype.getPath = function(n) {
    return this.paths || (this.paths = []),
    this.paths[n] || (this.paths[n] = this.createPath(),
    this.paths[n].setAttribute("class", "simulation-line"),
    this.paths[n].setAttribute("data-index", n)),
    this.paths[n]
}
;
J.prototype.getText = function(n) {
    return this.texts || (this.texts = []),
    this.texts[n] || (this.texts[n] = this.createText(),
    this.texts[n].setAttribute("class", "simulation-text"),
    this.texts[n].setAttribute("data-index", n)),
    this.texts[n]
}
;
J.prototype.getAxisPath = function(n) {
    return this.axisPaths || (this.axisPaths = []),
    this.axisPaths[n] || (this.axisPaths[n] = this.createPath(),
    this.axisPaths[n].setAttribute("class", "simulation-axis-line"),
    this.axisPaths[n].setAttribute("data-index", n)),
    this.axisPaths[n]
}
;
J.prototype.clearAxisText = function(n) {
    if (!(!this.axisTexts || !this.axisTexts[n])) {
        for (var o = 0, l = this.axisTexts[n].length; o < l; o++) {
            var p = this.axisTexts[n][o];
            p.parentNode && p.parentNode.removeChild(p)
        }
        this.axisTexts[n] = []
    }
}
;
J.prototype.getAxisText = function(n, o) {
    return this.axisTexts || (this.axisTexts = []),
    this.axisTexts[n] || (this.axisTexts[n] = []),
    this.axisTexts[n][o] || (this.axisTexts[n][o] = this.createText(),
    this.axisTexts[n][o].setAttribute("class", "simulation-axis-text"),
    this.axisTexts[n][o].setAttribute("data-index", n)),
    this.axisTexts[n][o]
}
;
J.prototype.getFill = function(n) {
    return this.fillPath || (this.fillPath = []),
    this.fillPath[n] || (this.fillPath[n] = this.createRect(),
    this.fillPath[n].setAttribute("class", "simulation-fill")),
    this.fillPath[n]
}
;
J.prototype.getAmountPath = function() {
    return this.amountPath || (this.amountPath = this.createPath(),
    this.amountPath.setAttribute("class", "simulation-amount-line")),
    this.amountPath
}
;
J.prototype.getAmountText = function() {
    return this.amountText || (this.amountText = this.createText(),
    this.amountText.setAttribute("class", "simulation-amount-text")),
    this.amountText
}
;
J.prototype.draw = function() {
    this.drawAxis(),
    this.drawAmount(),
    this.drawLine(),
    this.drawText(),
    this.comment && this.comment.resetPosition()
}
;
J.prototype.getLineData = function() {
    for (var n = [], o = [], l = this.datas, p = this.getChartRect(), y = 0, C = this.getNeededDataLength(); y < C; y++) {
        var D = l[y]
          , L = this.getPoint(y, D.value);
        D.point = L,
        o.push(L);
        var Q = y == 0 ? "M" : "L";
        n.push([Q, o[y].x, o[y].y].join(" "));
        var ot = y + 1;
        if (C == ot) {
            var Z = this.getFill(5);
            Z.setAttribute("class", "total-assets-circle"),
            Z.setAttribute("fill-opacity", "1"),
            Z.setAttribute("width", p.pointCircleSize),
            Z.setAttribute("height", p.pointCircleSize),
            Z.setAttribute("rx", 100),
            Z.setAttribute("ry", 100),
            Z.setAttribute("fill", "#0984E3"),
            Z.setAttribute("x", o[y].x - p.taPointCircleX),
            Z.setAttribute("y", o[y].y - p.taPointCircleY)
        }
    }
    return n
}
;
J.prototype.drawLine = function() {
    var n = this.getLineData()
      , o = this.getPath(0);
    o.setAttribute("d", n.join(" "))
}
;
J.prototype.drawAmount = function() {
    var n = this.getChartRect()
      , o = this.getAmountPath()
      , l = this.getPointY(this.getStartAmount())
      , p = this.getPointY(this.getTotalInvest())
      , y = [["M", n.left, l].join(" "), ["L", n.right, p].join(" ")];
    o.setAttribute("d", y.join(" "))
}
;
J.prototype.drawText = function() {
    this.drawLineText(),
    this.drawAmountText()
}
;
J.prototype.drawLineText = function() {
    var n = this.getNeededDataLength()
      , o = new st(this.datas[n - 1].value.toString(10))
      , l = this.getEndPoint(o.toNumber())
      , p = this.getChartRect()
      , y = this.getFill(4);
    y.setAttribute("class", "total-assets-bg"),
    y.setAttribute("x", l.x - 70),
    y.setAttribute("y", Math.max(20, l.y + 15)),
    y.setAttribute("width", 95),
    y.setAttribute("height", 38);
    for (var C = [{
        attr: {
            class: "name"
        },
        text: "総資産"
    }, {
        attr: {},
        text: " "
    }, {
        attr: {
            class: "value",
            dx: "-5.1em",
            dy: "1.25em"
        },
        text: o.c[0].toLocaleString()
    }, {
        attr: {
            class: "unit"
        },
        text: "万円"
    }, {
        attr: {
            class: "spacer"
        },
        text: "___"
    }], D = 0, L = 2; D < L; D++) {
        var Q = this.getText(D);
        Q.setAttribute("x", l.x - p.totalAssetsMinus),
        Q.setAttribute("y", Math.max(20, l.y + 30)),
        this.setTspan(Q, C)
    }
}
;
J.prototype.drawAmountText = function() {
    var n = new st(this.getTotalInvest().toString(10))
      , o = this.getChartRect()
      , l = o.right + this.conf.rightAxis.textOffset
      , p = this.getPointY(n.toNumber())
      , y = this.getAmountText();
    y.setAttribute("x", l - o.principalX),
    y.setAttribute("y", Math.max(20, p + 8) + o.principalY),
    this.setTspan(y, [{
        attr: {
            class: "prop-name"
        },
        text: "元本"
    }, {
        attr: {},
        text: " "
    }, {
        attr: {
            class: "value",
            dx: "-4em",
            dy: "1.25em"
        },
        text: n.c[0].toLocaleString(10)
    }, {
        attr: {
            class: "unit"
        },
        text: "万"
    }, {
        attr: {
            class: "spacer"
        },
        text: "___"
    }]);
    var C = this.getFill(6);
    C.setAttribute("class", "principal-circle"),
    C.setAttribute("fill-opacity", "1"),
    C.setAttribute("width", o.pointCircleSize),
    C.setAttribute("height", o.pointCircleSize),
    C.setAttribute("rx", 100),
    C.setAttribute("ry", 100),
    C.setAttribute("fill", "#999999"),
    C.setAttribute("x", l - o.priPointCircleX),
    C.setAttribute("y", p - o.priPointCircleY)
}
;
J.prototype.drawAxis = function() {
    this.drawAxisX(),
    this.drawAxisY()
}
;
J.prototype.drawAxisX = function() {
    var n = this.getChartRect()
      , o = this.getAxisPath(0)
      , l = [["M", n.left, n.bottom].join(" "), ["H", n.right].join(" ")];
    o.setAttribute("d", l.join(" "));
    var p = this.getNeededDataLength();
    let y = -1
      , C = -1;
    const D = 200801
      , L = 200902;
    let Q = -1
      , ot = -1;
    const Z = 201505
      , X = 201602;
    let lt = -1
      , V = -1;
    const G = 201912
      , it = 202004;
    for (var at = 0, rt = p; at < rt; at++) {
        var Ne = this.datas[at]
          , Yt = new Date(Ne.name)
          , St = Yt.getFullYear() * 100 + (Yt.getMonth() + 1);
        if (Yt.getMonth() == 0 && !(Yt.getFullYear() % 4)) {
            var mt = this.getAxisText(0, at)
              , oe = this.getPointX(at)
              , s = n.bottom + this.conf.bottomAxis.textOffset;
            mt.setAttribute("x", oe),
            mt.setAttribute("y", s + 10),
            this.setTspan(mt, [{
                attr: {
                    class: "value"
                },
                text: Yt.getFullYear()
            }])
        }
        var mt = this.getAxisText(99);
        mt.setAttribute("x", n.right - 8),
        mt.setAttribute("y", s + 10),
        mt.setAttribute("data-index", "year"),
        this.setTspan(mt, [{
            attr: {
                class: "value"
            },
            text: "（年）"
        }]),
        St == D && (y = at),
        St == L && (C = at),
        St == Z && (Q = at),
        St == X && (ot = at),
        St == G && (lt = at),
        St == it && (V = at)
    }
    if (y >= 0) {
        var mt = this.getAxisText(3, 0)
          , At = this.getPointX(y)
          , Kt = this.getPointX(C)
          , s = n.top;
        mt.setAttribute("x", At + this.conf.bottomAxis.textOffset),
        mt.setAttribute("y", s + this.conf.bottomAxis.textOffset + 10),
        this.setTspan(mt, [{
            attr: {
                class: "label"
            },
            text: "リーマン・ショック"
        }]);
        var o = this.getFill(1);
        o.setAttribute("x", At),
        o.setAttribute("y", 20),
        o.setAttribute("width", Kt - At),
        o.setAttribute("height", n.bottom - 20)
    }
    if (Q >= 0) {
        var mt = this.getAxisText(3, 1)
          , At = this.getPointX(Q)
          , Kt = this.getPointX(ot)
          , s = n.top;
        mt.setAttribute("x", At - 40),
        mt.setAttribute("y", s + this.conf.bottomAxis.textOffset + 10),
        this.setTspan(mt, [{
            attr: {
                class: "label"
            },
            text: "チャイナ・ショック"
        }]);
        var o = this.getFill(2);
        o.setAttribute("x", At),
        o.setAttribute("y", 20),
        o.setAttribute("width", Kt - At),
        o.setAttribute("height", n.bottom - 20)
    }
    if (lt >= 0) {
        var mt = this.getAxisText(3, 2)
          , At = this.getPointX(lt)
          , Kt = this.getPointX(V)
          , s = n.top;
        mt.setAttribute("x", At - 35),
        mt.setAttribute("y", s + this.conf.bottomAxis.textOffset + 10),
        this.setTspan(mt, [{
            attr: {
                class: "label"
            },
            text: "コロナ・ショック"
        }]);
        var o = this.getFill(3);
        o.setAttribute("x", At),
        o.setAttribute("y", 20),
        o.setAttribute("width", Kt - At),
        o.setAttribute("height", n.bottom - 20)
    }
}
;
J.prototype.drawAxisY = function() {
    var n = this.getChartRect()
      , o = this.getAxisPath(1)
      , l = [["M", n.left, n.bottom].join(" "), ["V", 0].join(" ")];
    o.setAttribute("d", l.join(" ")),
    this.clearAxisText(1);
    var at = this.getAxisText(1, 0)
      , lt = this.getStartAmount()
      , X = new st(lt.toString(10))
      , p = n.left - this.conf.leftAxis.textOffset
      , y = this.getPointY(X.toNumber());
    at.setAttribute("x", p),
    at.setAttribute("y", y + 4),
    this.setTspan(at, [{
        attr: {
            class: "value"
        },
        text: X.round().toString()
    }, {
        attr: {
            class: "unit"
        },
        text: ""
    }]);
    var C = 3
      , D = 100
      , L = new st(this.getMax().toString(10))
      , Q = new st(this.getMin().toString(10))
      , ot = L.minus(Q)
      , Z = ot.div(C).round();
    Z.gte(D) && (Z = Z.div(D).floor().times(D)),
    Z.lt(1) && (Z = new st("1"));
    for (var X = Q, lt = this.getStartAmount(), V = this.getPointY(lt), G = 1; ; ) {
        var it = X
          , p = n.left - this.conf.leftAxis.textOffset
          , y = this.getPointY(it.toNumber());
        if (y <= 10)
            break;
        if (n.bottom < y || Math.abs(V - y) <= 15) {
            X = X.plus(Z);
            continue
        }
        var at = this.getAxisText(1, G);
        at.setAttribute("x", p),
        at.setAttribute("y", y + 4),
        at.setAttribute("data-amount-value", G),
        this.setTspan(at, [{
            attr: {
                class: "value"
            },
            text: it.round().toString()
        }, {
            attr: {
                class: "unit"
            },
            text: ""
        }]),
        X = X.plus(Z),
        G++
    }
    var at = this.getAxisText(98);
    at.setAttribute("x", 6),
    at.setAttribute("y", n.unitY),
    at.setAttribute("data-index", "amount"),
    this.setTspan(at, [{
        attr: {
            class: "value"
        },
        text: "（万円）"
    }])
}
;
J.prototype.selectData = function(n) {
    if (this.datas) {
        var o = -1;
        typeof n == "number" && !isNaN(n) && (o = n);
        var l = null;
        o >= 0 && (l = this.datas[o],
        l.index = o),
        F(this).trigger("selected.Charts", l)
    }
}
;
J.prototype.unselectData = function() {
    this.selectData()
}
;
J.prototype.getEventPoint = function(n) {
    if (isNaN(n.pageX)) {
        if (n.originalEvents && n.originalEvents.touches)
            return n.originalEvents.touches[0]
    } else
        return n
}
;
J.prototype.toLocalPosition = function(n) {
    if (n) {
        var o = {
            x: 0,
            y: 0
        }
          , l = F(this.node).offset();
        return o.x = n.pageX - l.left,
        o.y = n.pageY - l.top,
        o
    }
}
;
J.prototype.getIndexByPosition = function(n) {
    var o = 0
      , l = this.datas.length;
    if (l <= 1)
        return 0;
    var p = 0
      , y = this.getChartRect()
      , C = y.width
      , D = C / (l - p - 1 || 1);
    return o = Math.max(0, Math.min(l - 1, p + Math.round((n - y.left) / D))),
    o
}
;
J.prototype.formatDate = function(n, o) {
    var l = {};
    return l.y = l.yyyy = n.getFullYear(),
    l.m = n.getMonth() + 1,
    l.d = n.getDate(),
    l.yy = l.y.toString(10).substr(-2),
    l.mm = ("00" + l.m).substr(-2),
    l.dd = ("00" + l.d).substr(-2),
    o.replace(/\$\{(\w+)\}/g, function() {
        return l[arguments[1]]
    })
}
;
J.Comment = function(n) {
    this.conf = null,
    this.$chart = null,
    this.$node = null,
    this.$foot = null,
    this.$text = null,
    this.pos = {
        x: 0,
        y: 0
    },
    this.selectedData = null,
    this.init(n)
}
;
J.Comment.prototype.init = function(n) {
    this.initConf(n),
    this.initNode()
}
;
J.Comment.prototype.initConf = function(n) {
    this.conf = n
}
;
J.Comment.prototype.initNode = function() {
    this.$node = F('<div class="charts-comment"></div>'),
    this.$cursor = F('<div class="charts-comment-cursor"></div>'),
    this.$foot = F('<div class="charts-comment-foot"></div>'),
    this.$text = F('<div class="charts-comment-text"></div>'),
    this.$node.append(this.$cursor),
    this.$node.append(this.$foot),
    this.$node.append(this.$text),
    this.hide()
}
;
J.Comment.prototype.bind = function(n) {
    this.chart = n,
    this.$chart = F(n.node),
    this.$chart.after(this.$node),
    F(n).on("selected.Charts", F.proxy(this.onSelectChart, this))
}
;
J.Comment.prototype.show = function() {
    this.$node.show()
}
;
J.Comment.prototype.hide = function() {
    this.$node.hide(),
    this.selectedData = null
}
;
J.Comment.prototype.select = function() {
    this.$node.addClass("selected")
}
;
J.Comment.prototype.unselect = function() {
    this.$node.removeClass("selected")
}
;
J.Comment.prototype.moveTo = function(n) {
    if (n) {
        n.x < 0 ? this.hide() : this.show();
        var o = this.$chart.offset()
          , l = {
            top: o.top + n.y,
            left: o.left + n.x
        };
        this.$node.css(l);
        var p = this.$text.outerWidth() / 2
          , y = l.left - p
          , C = l.left + p
          , D = F(window).width() + F(window).scrollLeft()
          , L = 0;
        D <= C && (L = D - C),
        y <= 0 && (L = -y),
        this.$text.css({
            left: L
        }),
        this.pos = n
    }
}
;
J.Comment.prototype.resetPosition = function() {
    this.hide(),
    this.selectedData && this.moveTo(this.selectedData.point)
}
;
J.Comment.prototype.setContent = function(n) {
    this.$text.html(n),
    this.$text.css({
        "margin-left": -this.$text.outerWidth() / 2
    }),
    this.moveTo(this.pos)
}
;
J.Comment.prototype.onSelectChart = function(n, o) {
    var l = n.target;
    if (l)
        if (o) {
            var p = o.unit
              , y = new st(o.value.toString(10))
              , C = new st(this.chart.getInvest(o.index).toString(10))
              , D = y.minus(C).round(2).toNumber()
              , L = new st(D.toString(10));
            C.eq(0) ? C.eq(0) && D == 0 ? L = new st("100") : L = new st("0") : L = L.div(C).times(100).round(2).toNumber();
            var Q = {
                date: l.formatDate(new Date(o.name), "'${yy}/${mm}"),
                value: Me.formatNumber(y.toNumber(), "") + p,
                symbol: D == 0 ? "" : D > 0 ? " plus" : " minus",
                diff: o.value ? (D > 0 ? "+" : "") + Me.formatNumber(D, "") + p : "-",
                per: o.value ? (D > 0 ? "+" : "") + L : "-"
            };
            this.show(),
            this.setContent(this.conf.template.replace(/\$\{(.+?)\}/g, function() {
                return Q[arguments[1]]
            })),
            this.moveTo(o.point),
            this.selectedData = o
        } else
            this.hide()
}
;
var wt = function(n) {
    this.conf = null,
    this.node = null,
    this.datas = null,
    this.paths = null,
    this.text = null,
    this._touchTarget = null,
    this.init(n)
};
wt.prototype.destroy = function() {
    F(this.node).off(),
    this.currency && F(this.currency).off("change"),
    F(document.body).off("touchstart", F.proxy(this.onTouchStart, this)).off("touchend", F.proxy(this.onTouchEnd, this)),
    F(this.conf.source).off(),
    this.node.parentNode && this.node.parentNode.removeChild(this.node),
    this.conf = null,
    this.node = null,
    this.datas = null,
    this.paths = null,
    this.text = null,
    this._touchTarget = null
}
;
wt.prototype.init = function(n) {
    this.initConf(n),
    this.initNode(),
    this.initData(),
    this.initCurrency(),
    this.initEvents(),
    this.initTableEvents(),
    this.draw()
}
;
wt.prototype.initConf = function(n) {
    this.conf = n || this.conf
}
;
wt.prototype.initNode = function() {
    this.conf && (this.conf.node ? this.node = this.conf.node : (this.node = document.createElementNS("http://www.w3.org/2000/svg", "svg"),
    this.node.setAttribute("class", this.conf.className),
    this.resetViewSize()),
    this.conf.container && this.appendTo(this.conf.container))
}
;
wt.prototype.initData = function() {
    function n(Z, X) {
        var lt = Z.querySelector(X) || {};
        return lt.innerText || lt.textContent || ""
    }
    if (this.conf) {
        this.datas = [];
        for (var o = document.querySelectorAll(this.conf.source), l = 0, p = o.length; l < p; l++) {
            var y = o[l]
              , C = n(y, this.conf.nameSource)
              , D = parseFloat(n(y, this.conf.valueSource).replace(/,/g, ""), 10) || 0
              , L = n(y, this.conf.unitSource)
              , Q = n(y, this.conf.typeSource)
              , ot = {
                node: y,
                name: C,
                value: D,
                unit: L,
                type: Q
            };
            this.datas[l] = ot
        }
        this.conf.sort && this.datas.sort(function(Z, X) {
            return Z.name < X.name ? -1 : Z.name > X.name ? 1 : 0
        })
    }
}
;
wt.prototype.initCurrency = function(n) {
    this.currency = this.conf.currency
}
;
wt.prototype.initEvents = function(n) {
    F(this.node).on("mousemove", F.proxy(this.onMouseMove, this)).on("mouseleave", F.proxy(this.onMouseLeave, this)),
    this.currency && F(this.currency).on("change", F.proxy(this.onChangeCurrency, this)),
    F(document.body).on("touchstart", F.proxy(this.onTouchStart, this)).on("touchend", F.proxy(this.onTouchEnd, this))
}
;
wt.prototype.initTableEvents = function() {
    F(this.conf.source).on("mouseenter click", F.proxy(this.onMouseEnter, this)).on("mouseleave", F.proxy(this.onMouseLeave, this))
}
;
wt.prototype.resetViewSize = function() {
    this.node && (this.node.setAttribute("viewBox", [0, 0, this.conf.width, this.conf.height].join(" ")),
    this.node.setAttribute("width", this.conf.width),
    this.node.setAttribute("height", this.conf.height))
}
;
wt.prototype.bind = function(n) {
    this.binded = n,
    this.appendTo(n.node),
    F(n).on("progress.Charts", F.proxy(this.onTimer, this)),
    n.child = this
}
;
wt.prototype.appendTo = function(n) {
    n && this.node && (typeof n == "string" && (n = F(n).get(0)),
    n.appendChild(this.node))
}
;
wt.prototype.getValue = function(n) {
    var o = (n.unit || "").indexOf("-") == 0 ? -1 : 1
      , l = new st(n.value.toString(10)).times(o);
    return l.toNumber()
}
;
wt.prototype.getChartValue = function(n) {
    var o = new st(this.getValue(n).toString(10));
    return st.max(0, o).toNumber()
}
;
wt.prototype.getTotal = function() {
    var n = new st(0);
    if (this.datas)
        for (var o = 0, l = this.datas.length; o < l; o++) {
            var p = this.datas[o]
              , y = new st(this.getValue(p).toString(10) || 0);
            y.isZero() || (n = n.times(100).plus(y.times(100)).round().div(100))
        }
    return n.toNumber()
}
;
wt.prototype.getChartTotal = function() {
    var n = new st(0);
    if (this.datas)
        for (var o = 0, l = this.datas.length; o < l; o++) {
            var p = this.datas[o]
              , y = new st(this.getChartValue(p).toString(10) || 0);
            y.isZero() || (n = n.times(100).plus(y.times(100)).round().div(100))
        }
    return n.toNumber()
}
;
wt.prototype.select = function(n) {
    if (this.paths) {
        for (var o = -1, l = 0, p = this.paths.length; l < p; l++) {
            !isNaN(n) && l === n && (o = l);
            var y = F(this.paths[l])
              , C = " " + (y.attr("class") || "") + " ";
            C = C.replace(" charts-unselected", "").replace(" charts-selected", ""),
            !isNaN(n) && l === n && (C += " charts-selected"),
            !isNaN(n) && l !== n && (C += " charts-unselected"),
            C = C.replace(/^ +| +$/g, ""),
            y.attr("class", C)
        }
        var D = null;
        o >= 0 && (D = this.datas[o]),
        F(this).trigger("selected.Charts", D)
    }
}
;
wt.prototype.unselect = function() {
    this.select()
}
;
wt.prototype.selectData = function(n) {
    if (this.datas) {
        var o = -1;
        typeof n == "number" && !isNaN(n) && (o = n);
        var l = null;
        o >= 0 && (l = this.datas[o]),
        F(this).trigger("selected.Charts", l)
    }
}
;
wt.prototype.unselectData = function() {
    this.selectData()
}
;
wt.prototype.createPath = function(n) {
    this.paths || (this.paths = [],
    F(document).on("click.PortfolioChart", F.proxy(this.onClickDocument, this)));
    var o = document.createElementNS("http://www.w3.org/2000/svg", "path");
    return o.setAttribute("data-index", n),
    o.setAttribute("class", "charts-donuts-path"),
    o.setAttribute("tabindex", "0"),
    this.node.appendChild(o),
    this.paths[n] = o,
    F(o).on("focus mouseenter", F.proxy(this.onPathSelect, this)).on("blur mouseleave", F.proxy(this.onPathUnSelect, this)),
    o
}
;
wt.prototype.removePath = function(n) {
    if (this.paths) {
        var o = this.paths[n];
        if (o)
            return F(o).remove(),
            delete this.paths[n],
            this.paths.length || (delete this.paths,
            F(document).off("click.PortfolioChart")),
            o
    }
}
;
wt.prototype.createText = function() {
    var n = this.text;
    return n || (n = document.createElementNS("http://www.w3.org/2000/svg", "text"),
    n.setAttribute("class", "charts-donuts-text"),
    n.setAttribute("x", this.conf.width / 2),
    n.setAttribute("y", this.conf.height / 2 + 15),
    this.node.appendChild(n),
    n.appendChild(document.createTextNode("")),
    this.text = n),
    n
}
;
wt.prototype.toTspan = function(n, o) {
    var l = document.createElementNS("http://www.w3.org/2000/svg", "tspan");
    return F(l).text(n.replace("&yen;", String.fromCharCode(165))),
    o && F(l).attr(o),
    l
}
;
wt.prototype.draw = function() {
    this.drawTotal(),
    this.drawArc(),
    F(this).trigger("complete.Charts")
}
;
wt.prototype.drawTotal = function() {
    var n = this.getTotal()
      , o = (n < 0 ? "-" : "") + this.conf.units[this.conf.currency.current]
      , l = Me.formatNumber(Math.abs(n))
      , p = {
        dy: -4
    }
      , y = this.toTspan(o + l, p);
    this.drawText(y)
}
;
wt.prototype.drawText = function(n) {
    this.createText(),
    F(this.text).empty().append(arguments);
    var o = this.text.getBBox();
    F(this.text).attr({
        dx: -o.width / 2,
        dy: -o.height / 2
    })
}
;
wt.prototype.drawArc = function() {
    var n = this.getChartTotal();
    if (!(!n && !this.datas.length)) {
        var o = this.conf.innerRadius
          , l = this.conf.outerRadius
          , p = {
            x: this.conf.width / 2,
            y: this.conf.height / 2
        }
          , y = new st(Math.PI.toString(10))
          , C = y.div(2).neg()
          , D = this.paths;
        this.paths || (D = this.paths = []);
        for (var L = this.datas.length, Q = D.length; L < Q; L++)
            this.removePath(L);
        for (var L = 0, Q = this.datas.length; L < Q; L++) {
            var ot = this.datas[L]
              , Z = D[L];
            Z || (Z = this.createPath(L)),
            Z.setAttribute("data-type", ot.type.replace("	", ""));
            var X = new st(this.getChartValue(ot).toString(10));
            X.isZero() ? Z.setAttribute("tabindex", -1) : Z.setAttribute("tabindex", 0);
            var lt = n ? X.div(n) : Q == 1 ? new st(1) : new st(0)
              , V = C.plus(lt.times(2).times(y))
              , G = V.minus(C).times(180).div(y)
              , it = G.gte(180) ? 1 : 0
              , at = Math.cos(C.toNumber())
              , rt = Math.sin(C.toNumber())
              , Ne = Math.cos(V.toNumber())
              , Yt = Math.sin(V.toNumber())
              , St = {
                x: p.x + o * at,
                y: p.y + o * rt
            }
              , oe = {
                x: p.x + l * at,
                y: p.y + l * rt
            }
              , s = {
                x: p.x + o * Ne,
                y: p.y + o * Yt
            }
              , mt = {
                x: p.x + l * Ne,
                y: p.y + l * Yt
            }
              , At = [];
            G.gte(360) ? At = ["M", oe.x, oe.y, "A", l, l, 180, 1, 1, mt.x, mt.y + l * 2, "A", l, l, G.minus(180).toNumber(), 0, 1, mt.x, mt.y, "L", s.x, s.y, "A", o, o, 180, 1, 0, St.x, St.y + o * 2, "A", o, o, G.minus(180).toNumber(), 0, 0, St.x, St.y, "L", St.x, St.y, "Z"] : At = ["M", oe.x, oe.y, "A", l, l, G, it, 1, mt.x, mt.y, "L", s.x, s.y, "A", o, o, G, it, 0, St.x, St.y, "L", St.x, St.y, "Z"],
            Z.setAttribute("d", At.join(" ")),
            C = V
        }
    }
}
;
wt.prototype.onMouseMove = function(n) {
    if (F(this.node).is(n.target)) {
        var o = {
            x: n.offsetX - this.conf.width / 2,
            y: n.offsetY - this.conf.height / 2
        }
          , l = new st(Math.PI.toString(10))
          , p = new st(Math.atan2(o.y, o.x).toString(10))
          , y = p.plus(l.div(2)).div(l.times(2));
        y.lt(0) && (y = y.plus(1));
        for (var C = new st(this.getChartTotal().toString(10)), D = new st(0), L = 0, Q = this.datas.length; L < Q; L++) {
            var ot = this.datas[L]
              , Z = new st(this.getChartValue(ot).toString(10))
              , X = Z.div(C)
              , lt = D.plus(X);
            if (D.lte(y) && y.lte(lt)) {
                this.select(L);
                break
            }
            D = lt
        }
    }
}
;
wt.prototype.onMouseEnter = function(n) {
    var o = F(n.currentTarget);
    if (o.is(".selected"))
        this.unselect();
    else {
        var l = o.index();
        this.select(l)
    }
}
;
wt.prototype.onMouseLeave = function(n) {
    this.unselect()
}
;
wt.prototype.onTouchStart = function(n) {
    this._touchTarget = n.target
}
;
wt.prototype.onTouchEnd = function(n) {
    var o = this._touchTarget && F(this._touchTarget).closest(n.target).length;
    if (o) {
        var l = F(this._touchTarget);
        !l.closest(this.conf.source).length && !l.closest(this.node).length && this.unselect()
    }
    this._touchTarget = null
}
;
wt.prototype.onClickTable = function(n) {
    var o = F(n.currentTarget);
    if (o.is(".selected"))
        this.unselect();
    else {
        var l = o.index();
        this.select(l)
    }
}
;
wt.prototype.onPathSelect = function(n) {
    var o = parseInt(F(n.currentTarget).attr("data-index"));
    this.select(o)
}
;
wt.prototype.onPathUnSelect = function(n) {
    this.unselect()
}
;
wt.prototype.onClickDocument = function(n) {}
;
wt.prototype.onChangeCurrency = function() {
    var n = this.currency.current;
    this.conf.valueSource = 'td.currency[data-currency="' + n + '"] .value',
    this.conf.unitSource = 'td.currency[data-currency="' + n + '"] .unit',
    this.initData(),
    this.draw()
}
;
function Xt(n) {
    this.conf = null,
    this.$input = null,
    this.$node = null,
    this.$bar = null,
    this.$handle = null,
    this.dragStart = null,
    this.init(n)
}
Xt.prototype.init = function(n) {
    this.initConf(n),
    this.initNode(),
    this.initEvents(),
    this.moveHandle()
}
;
Xt.prototype.initConf = function(n) {
    this.conf = n
}
;
Xt.prototype.initNode = function() {
    this.$input = F(this.conf.node),
    this.$node = F('<div class="input-slider"></div>'),
    this.$bar = F('<div class="input-slider-bar"></div>'),
    this.$fill = F('<div class="input-slider-fill"></div>'),
    this.$handle = F('<div class="input-slider-handle"><div></div></div>'),
    this.$steps = F(),
    this.conf.options.sort(function(p, y) {
        return p < y ? -1 : p > y ? 1 : 0
    });
    for (var n = 0, o = this.conf.options.length; n < o; n++) {
        var l = F('<div class="input-slider-step"></div>');
        l.css({
            left: n / (o - 1) * 100 + "%"
        }),
        this.$steps = this.$steps.add(l)
    }
    this.$bar.append(this.$steps),
    this.$bar.append(this.$fill),
    this.$node.append(this.$bar),
    this.$node.append(this.$handle),
    this.$input.closest("label").after(this.$node),
    this.setValue(this.getInitialValue())
}
;
Xt.prototype.getInitialValue = function() {
    var n = !this.$input.val() || this.$input.val().split(".").length !== 2;
    if (n)
        return this.getValue();
    var o = this.$input.val() || "";
    o = o.replace(/[^-\d.]/g, "");
    var l = parseFloat(o);
    return isNaN(l) ? 0 : Math.floor(l * 10) / 10
}
;
Xt.prototype.initEvents = function() {
    this.$node.on("click", F.proxy(this.onClick, this)),
    this.$input.on("change updatevalue", F.proxy(this.onChange, this)),
    this.$handle.on("mousedown touchstart", F.proxy(this.onDragStart, this)),
    F(document).on("mousemove touchmove", F.proxy(this.onDragMove, this)).on("mouseup touchend", F.proxy(this.onDragEnd, this)),
    F(document.documentElement).on("mouseleave", F.proxy(this.onDragEnd, this))
}
;
Xt.prototype.destroy = function() {
    this.$node.off(),
    this.$input.off(),
    this.$handle.off(),
    F(document).off("mousemove touchmove", F.proxy(this.onDragMove, this)).off("mouseup touchend", F.proxy(this.onDragEnd, this)),
    F(document.documentElement).off("mouseleave", F.proxy(this.onDragEnd, this))
}
;
Xt.prototype.getValue = function() {
    var n = this.$input.val() || "";
    n = n.replace(/[^-\d.]/g, "");
    var o = parseInt(n, 10) || 0;
    return o
}
;
Xt.prototype.getRangeVlue = function() {
    var n = this.getValue()
      , o = parseInt(this.$input.attr("min"), 10) || 0
      , l = parseInt(this.$input.attr("max"), 10) || 0;
    return Math.min(l, Math.max(o, n))
}
;
Xt.prototype.setValue = function(n) {
    this.$input.val(n || 0)
}
;
Xt.prototype.getGridPer = function() {
    var n = this.conf.options.length
      , o = n > 1 ? 1 / (n - 1) : 1;
    return o
}
;
Xt.prototype.moveHandle = function(n) {
    if (isNaN(n)) {
        var o = this.getValue();
        n = this.valueToPosition(o, !0)
    }
    var l = Math.max(0, Math.min(1, n)) * 100;
    this.$handle.css({
        left: l + "%"
    }),
    this.$fill.css({
        width: l + "%"
    });
    var p = this.getGridPer()
      , y = n / p;
    this.$steps.each(function(C, D) {
        F(D).toggleClass("passed", C <= y)
    })
}
;
Xt.prototype.valueToPosition = function(n, o) {
    isNaN(n) && (n = this.getValue());
    for (var l = -1, p = -1, y = 0, C = this.conf.options.length; y < C; y++) {
        var D = this.conf.options[y];
        if (D <= n && (l = y),
        n <= D) {
            p = y;
            break
        }
    }
    l == -1 && (l = 0,
    p = 0),
    p == -1 && (l = C - 1,
    p = C - 1);
    var L = this.conf.options[l]
      , Q = this.conf.options[p]
      , ot = Q - L ? Math.round((n - L) / (Q - L) * 100) / 100 : 0
      , Z = this.getGridPer()
      , X = Z * l + Z * ot;
    return o || (X = Math.max(0, Math.min(1, X))),
    X
}
;
Xt.prototype.ratioToValue = function(n) {
    var o = this.conf.options.length
      , l = 1 / (o - 1)
      , p = parseInt(n / l)
      , y = Math.min(o - 1, p + 1)
      , C = this.conf.options[p]
      , D = this.conf.options[y]
      , L = (D - C) * ((n - l * p) / l) + C;
    return L
}
;
Xt.prototype.xToRatio = function(n) {
    var o = this.$node.offset().left
      , l = this.$node.outerWidth();
    return Math.min(1, Math.max(0, (n - o) / l))
}
;
Xt.prototype.getSnapRatio = function() {
    var n = this.xToRatio(this.$handle.offset().left)
      , o = this.getGridPer()
      , l = Math.round(n / o);
    return o * l
}
;
Xt.prototype.snap = function() {
    var n = this.getSnapRatio();
    this.setValue(this.ratioToValue(n)),
    this.moveHandle(n)
}
;
Xt.prototype.isEnabled = function() {
    return !this.$input.prop("disabled")
}
;
Xt.prototype.getEventPosition = function(n) {
    var o = {
        x: 0,
        y: 0
    };
    return !isNaN(n.pageX) || (n.originalEvent && (n = n.originalEvent),
    !isNaN(n.pageX)) ? (o.x = n.pageX,
    o.y = n.pageY,
    o) : (n.touches && n.touches.length && (o.x = n.touches[0].pageX,
    o.y = n.touches[0].pageY),
    o)
}
;
Xt.prototype.onChange = function(n) {
    var o = this.getValue()
      , l = this.getRangeVlue();
    o != l && this.setValue(l),
    this.moveHandle(),
    o != l && this.$input.trigger("change")
}
;
Xt.prototype.onDragStart = function(n) {
    if (n.preventDefault(),
    this.isEnabled()) {
        var o = this.getEventPosition(n)
          , l = this.$handle.offset().left;
        this.dragStart = {
            x: o.x,
            ratio: this.xToRatio(l),
            startX: l
        }
    }
}
;
Xt.prototype.onDragMove = function(n) {
    if (this.dragStart)
        if (n.preventDefault(),
        this.isEnabled()) {
            var o = this.getEventPosition(n)
              , l = o.x - this.dragStart.x
              , p = this.xToRatio(this.dragStart.startX + l);
            this.moveHandle(p);
            var y = this.getSnapRatio();
            this.setValue(this.ratioToValue(y))
        } else
            delete this.dragStart
}
;
Xt.prototype.onDragEnd = function(n) {
    this.dragStart && (n.preventDefault(),
    delete this.dragStart,
    this.isEnabled() && (this.snap(),
    this.$input.trigger("change")))
}
;
Xt.prototype.onClick = function(n) {
    if (n.preventDefault(),
    !this.dragStart && this.isEnabled()) {
        var o = this.getEventPosition(n)
          , l = this.xToRatio(o.x);
        this.moveHandle(l),
        this.setValue(this.ratioToValue(l)),
        this.snap(),
        this.$input.trigger("change")
    }
}
;
function Ce(n) {
    this.$node = null,
    this.init(n)
}
Ce.prototype.init = function(n) {
    this.initNode(n),
    this.initalRiskTolerance = this.$riskTolerance.val()
}
;
Ce.prototype.initNode = function(n) {
    this.$node = F(n),
    this.$assetAmount = this.$node.find("#assetAmount"),
    this.$targetAmount = this.$node.find("#targetAmount"),
    this.$additionalDeposit = this.$node.find("#additionalDeposit"),
    this.$monthlyDeposit = this.$node.find("#monthlyDeposit"),
    this.$year = this.$node.find("#year"),
    this.$riskTolerance = this.$node.find("#riskTolerance"),
    this.$node.data("SimulationForm", this)
}
;
Ce.prototype.getTotalAmount = function() {
    return this.valueToInt(this.$assetAmount.val()) + this.valueToInt(this.$additionalDeposit.val())
}
;
Ce.prototype.getValueInRange = function(n) {
    var o = this.valueToInt(n.val())
      , l = parseInt(n.attr("min") || 0)
      , p = parseInt(n.attr("max") || Math.MAX_NUMBER);
    return Math.max(l, Math.min(p, o))
}
;
Ce.prototype.getValueOfMonthlyDepositInRange = function(n) {
    var o = this.valueToFloat(n.val())
      , l = parseFloat(n.attr("data-monthly-deposit-amount-min") || 0)
      , p = parseFloat(n.attr("max") || Math.MAX_NUMBER);
    return 0 <= o && o < l ? 0 : Math.max(l, Math.min(p, o))
}
;
Ce.prototype.rangeCheck = function(n) {
    var o = this.valueToInt(n.val())
      , l = parseInt(n.attr("min") || 0)
      , p = parseInt(n.attr("max") || Math.MAX_NUMBER)
      , y = l <= o && o <= p;
    return n.toggleClass("error", !y),
    y
}
;
Ce.prototype.rangeCheckForMonthlyDeposit = function(n) {
    var o = this.valueToFloat(n.val());
    if (o === 0)
        return !0;
    var l = parseFloat(n.attr("data-monthly-deposit-amount-min") || 0)
      , p = parseFloat(n.attr("max") || Math.MAX_NUMBER)
      , y = l <= o && o <= p;
    return n.toggleClass("error", !y),
    y
}
;
Ce.prototype.resetValue = function(n) {
    var o = this.getValueInRange(n);
    return n.val(o).trigger("updatevalue"),
    o
}
;
Ce.prototype.resetValueOfMonthlyDeposit = function(n) {
    var o = this.getValueOfMonthlyDepositInRange(n);
    return n.val(o).trigger("updatevalue"),
    o
}
;
Ce.prototype.valueToInt = function(n) {
    n = (n || "").replace(/[^-\d.]/g, "") || "0";
    var o = parseInt(n, 10) || 0;
    return o
}
;
Ce.prototype.valueToFloat = function(n) {
    n = (n || "").replace(/[^-\d.]/g, "") || "0";
    var o = parseFloat(n);
    return isNaN(o) ? 0 : Math.floor(o * 10) / 10
}
;
Ce.prototype.validate = function() {
    this.valueToInt(this.$assetAmount.val()),
    this.resetValue(this.$targetAmount),
    this.resetValue(this.$additionalDeposit),
    this.resetValueOfMonthlyDeposit(this.$monthlyDeposit),
    this.resetValue(this.$year),
    this.resetValue(this.$riskTolerance);
    var n = !0;
    n = n && this.rangeCheck(this.$targetAmount),
    n = n && this.rangeCheck(this.$additionalDeposit),
    n = n && this.rangeCheckForMonthlyDeposit(this.$monthlyDeposit),
    n = n && this.rangeCheck(this.$year),
    n = n && this.rangeCheck(this.$riskTolerance);
    var o = this.getTotalAmount();
    return o <= 0 ? (n = !1,
    this.$additionalDeposit.addClass("error")) : this.$additionalDeposit.removeClass("error"),
    n
}
;
function ss(n) {
    var o = F("#forecast-chart")
      , l = new nt({
        form: F("#config-form"),
        cloneButton: F("#register-clone"),
        className: "charts-forecast",
        updateUserTarget: n,
        width: 420,
        height: 440,
        targetAmount: "#targetAmount",
        startAmount: "#assetAmount",
        startDeposit: "#additionalDeposit",
        monthlyDeposit: "#monthlyDeposit",
        totalInvest: "#totalInvestAmount",
        year: "#year",
        eventTarget: "#caution, #targetAmount, #assetAmount, #additionalDeposit, #monthlyDeposit, #year, #riskTolerance",
        samples: 0,
        source: "#data-forecast tbody tr",
        sourceConfs: [{
            name: "90%",
            nameSource: "th",
            valueSource: "td.highest .value",
            unitSource: "td.highest .unit"
        }, {
            name: "70%",
            nameSource: "th",
            valueSource: "td.high .value",
            unitSource: "td.high .unit"
        }, {
            name: "50%",
            nameSource: "th",
            valueSource: "td.middle .value",
            unitSource: "td.middle .unit"
        }, {
            name: "30%",
            nameSource: "th",
            valueSource: "td.low .value",
            unitSource: "td.low .unit"
        }, {
            name: "10%",
            nameSource: "th",
            valueSource: "td.lowest .value",
            unitSource: "td.lowest .unit"
        }],
        duration: 1e3,
        sort: !0,
        touch: !0,
        adjustMargin: .07,
        leftAxis: {
            size: 0,
            textOffset: 5
        },
        rightAxis: {
            size: 160,
            textOffset: 5
        },
        bottomAxis: {
            size: 30,
            textOffset: 5
        },
        underLineWidth: {
            probability: 306,
            principal: 166
        },
        underLineY: {
            per30: 25,
            per50: 67,
            per70: 109,
            principal: 151
        },
        amountText: {
            per30: 18,
            per50: 60,
            per70: 102,
            principal: 144
        },
        probabilityPath: {
            height: 308
        },
        principalPath: {
            height: 168
        },
        comment: {}
    });
    F("#forecast-chart").append(l.node),
    p(),
    F(window).on("resize load", function(y) {
        p()
    });
    function p(y) {
        y || (l.conf.width = o.width(),
        l.conf.height = F(l.node).height(),
        F(window).width() <= 760 ? (l.conf.leftAxis.size = 0,
        l.conf.rightAxis.size = 75,
        l.conf.rightAxis.size = 7,
        l.conf.underLineWidth.probability = 205,
        l.conf.amountText.per30 = 18,
        l.conf.amountText.per50 = 55,
        l.conf.amountText.per70 = 92,
        l.conf.underLineY.per30 = 25,
        l.conf.underLineY.per50 = 62,
        l.conf.underLineY.per70 = 99,
        l.conf.probabilityPath.height = 207,
        l.conf.amountText.principal = 129,
        l.conf.underLineY.principal = 136,
        l.conf.underLineWidth.principal = 124,
        l.conf.principalPath.height = 124) : (l.conf.leftAxis.size = 0,
        l.conf.rightAxis.size = 160,
        l.conf.rightAxis.size = 7,
        l.conf.underLineWidth.probability = 306,
        l.conf.amountText.per30 = 18,
        l.conf.amountText.per50 = 60,
        l.conf.amountText.per70 = 102,
        l.conf.underLineY.per30 = 25,
        l.conf.underLineY.per50 = 67,
        l.conf.underLineY.per70 = 109,
        l.conf.probabilityPath.height = 308,
        l.conf.amountText.principal = 144,
        l.conf.underLineY.principal = 151,
        l.conf.underLineWidth.principal = 166,
        l.conf.principalPath.height = 168),
        l.resetViewSize(),
        l.draw(1))
    }
    return l.onUpdated = function() {
        l.draw();
        var y = this.getFinalValue().reverse();
        F(".forecast-results").each(function(C, D) {
            F(D).text(Me.formatNumber(Math.round(y[C + 1])))
        })
    }
    ,
    l.onUpdated(),
    l
}
function os() {
    var n = F(".simulation-chart-block")
      , o = new J({
        container: n.get(0),
        className: "charts-simulation",
        width: 980,
        height: 450,
        startAmount: "#assetAmount",
        startDeposit: "#additionalDeposit",
        monthlyDeposit: "#monthlyDeposit",
        totalInvest: "#totalInvestAmount",
        year: "#year",
        source: "#data-simulation tbody tr",
        nameSource: "th",
        valueSource: "td .value",
        unitSource: "td .unit",
        duration: 1e3,
        sort: !0,
        touch: !0,
        adjustMargin: .05,
        leftAxis: {
            size: 120,
            textOffset: 3
        },
        rightAxis: {
            size: 160,
            textOffset: 5
        },
        bottomAxis: {
            size: 30,
            textOffset: 5
        },
        simText: {
            totalAssets: 65,
            principalX: 50,
            principalY: 20,
            unitY: 10
        },
        pointCircle: {
            size: 12,
            taPosX: 5,
            taPosY: 5,
            priPosX: 10,
            priPosY: 8
        },
        comment: {
            template: ['<span class="value">${value}</span>', '<span class="diff${symbol}">${diff} (${per}%)</span>', '<span class="date">${date}</span>'].join("")
        }
    });
    F("#simulation-chart").append(o.node),
    p(),
    F(window).on("resize", function(y) {
        p()
    });
    function l() {
        o.initData()
    }
    function p() {
        o.conf.width = n.width(),
        F(window).width() <= 760 ? (o.conf.height = 304,
        o.conf.leftAxis.size = 43,
        o.conf.rightAxis.size = 20,
        o.conf.simText.totalAssets = 0,
        o.conf.simText.principalX = -5,
        o.conf.simText.principalY = 16,
        o.conf.pointCircle.size = 8,
        o.conf.pointCircle.taPosX = 3,
        o.conf.pointCircle.taPosY = 1,
        o.conf.pointCircle.priPosX = 6,
        o.conf.pointCircle.priPosY = 5,
        o.conf.simText.unitY = 7) : (o.conf.height = 450,
        o.conf.leftAxis.size = 52,
        o.conf.rightAxis.size = 35,
        o.conf.simText.totalAssets = 65,
        o.conf.simText.principalX = 50,
        o.conf.simText.principalY = 20,
        o.conf.pointCircle.size = 12,
        o.conf.pointCircle.taPosX = 8,
        o.conf.pointCircle.taPosY = 5,
        o.conf.pointCircle.priPosX = 10,
        o.conf.pointCircle.priPosY = 6,
        o.conf.simText.unitY = 10),
        o.resetViewSize(),
        o.draw(1)
    }
    return o.onUpdated = function() {
        l(),
        o.draw()
    }
    ,
    o
}
function as() {
    var n = new wt({
        container: F("#assets-class-chart").get(0),
        className: "charts-donuts assets-data",
        width: 88,
        height: 88,
        source: "#assets-class-data tbody tr",
        typeSource: "th.type",
        nameSource: "th.type",
        valueSource: "td.per .value",
        unitSource: "td.per .unit",
        innerRadius: 14.5,
        outerRadius: 43,
        duration: 1e3,
        currency: Me.currency,
        units: {
            dollar: "",
            yen: ""
        }
    });
    return n.drawTotal = function() {
        var o = F(n.conf.source).find(".currency")
          , l = o.eq(0).find(".unit").text()
          , p = new st(F("#assetAmount").val() || "0")
          , y = new st(F("#additionalDeposit").val() || "0")
          , C = p.plus(y);
        this.drawText(this.toTspan(Me.formatNumber(C.floor().toNumber()) + l, {
            dy: -4
        }))
    }
    ,
    n.drawTotal(),
    F(n).on("selected.Charts", function(o, l) {
        var p = F(n.conf.source);
        if (l) {
            p.removeClass("selected").addClass("unselected"),
            F(l.node).addClass("selected").removeClass("unselected"),
            n.currency.current;
            var y = l.name
              , C = F(l.node).find(".currency").text()
              , D = F(l.node).find(".per").text()
              , L = n.toTspan(y, {
                class: "name"
            })
              , Q = n.toTspan(C, {
                class: "amount",
                dy: "1.25em"
            })
              , ot = n.toTspan(D, {
                class: "per",
                dy: "1.5em"
            });
            n.drawText(L, Q, ot);
            var Z = L.getComputedTextLength()
              , X = Q.getComputedTextLength()
              , lt = ot.getComputedTextLength()
              , V = Math.max(Z, X, lt);
            Me.browser.isFirefox || Me.browser.isChromeAboveVer96 ? F(L).attr({
                dx: -V / 2
            }) : F(L).attr({
                dx: -Z / 2
            }),
            F(Q).attr({
                dx: -Z - (V - Z) / 2 + (V - X) / 2
            }),
            F(ot).attr({
                dx: -X - (V - X) / 2 + (V - lt) / 2
            })
        } else
            p.removeClass("selected").removeClass("unselected"),
            n.drawTotal()
    }),
    n.onUpdated = function() {
        n.initData(),
        n.initTableEvents(),
        n.draw()
    }
    ,
    n
}
function us() {
    var n = new Ce(F("#config-form"));
    return n
}
function ls() {
    function n(l) {
        F(".tab-panel").removeAttr("aria-selected").filter('[id="' + l + '"]').attr("aria-selected", !0)
    }
    window.addEventListener("pageshow", l=>{
        l.persisted && (F("#tab-1").attr("aria-selected", !0),
        F("#tab-2").attr("aria-selected", !1))
    }
    );
    var o = F(".tab-list input").on("input change", function(l) {
        n(F(l.target).val())
    });
    return n(o.filter(":checked").val()),
    o
}
function fs() {
    var n = {
        targetAmount: {
            node: null,
            options: [1e3, 3e3, 5e3, 1e4]
        },
        additionalDeposit: {
            node: null,
            options: [10, 100, 200, 300, 400, 500, 1e3]
        },
        monthlyDeposit: {
            node: null,
            options: [0, 1, 3, 5, 10]
        },
        year: {
            node: null,
            options: [10, 15, 20, 25, 30]
        },
        riskTolerance: {
            node: null,
            options: [1, 2, 3, 4, 5]
        }
    }
      , o = [];
    return F(".input-slider-group input").each(function(l, p) {
        var y = n[p.id];
        y && (y.node = p,
        o.push(new Xt(y)))
    }),
    o
}
function cs() {
    var n = us()
      , o = fs()
      , l = {
        form: n,
        sliders: o
    };
    return l
}
const ui = function(n) {
    var o = ss(n)
      , l = os()
      , p = as();
    ls();
    var y = cs();
    return {
        render: function() {
            o.onLoad(),
            o.onUpdated(),
            l.onUpdated(),
            p.onUpdated()
        },
        destroy: function() {
            y.sliders.forEach(C=>C.destroy()),
            F('.input-slider-group *[class^="input-slider"]').remove(),
            o.destroy(),
            l.destroy(),
            p.destroy(),
            o = null,
            l = null,
            p = null
        }
    }
}
  , hs = An.department
  , ds = Ke[hs].category
  , ps = ds === "hybrid" ? "/introduction/simulation/api/investment/simulation/1_5" : "/introduction/simulation/api/investment/simulation"
  , gs = on({
    name: "ConfigModal",
    props: {
        reTargetAmount: [String, Number],
        reInitialInvestmentAmount: [String, Number],
        reMonthlyDeposit: [String, Number],
        reInvestmentPeriodYear: [String, Number],
        reRiskTolerance: [String, Number]
    },
    emits: ["update:reTargetAmount", "update:reInitialInvestmentAmount", "update:reMonthlyDeposit", "update:reInvestmentPeriodYear", "update:reRiskTolerance", "close"],
    setup(n, {emit: o}) {
        const l = Le({
            get: ()=>p.getters.simulationResult,
            set: G=>p.dispatch("getSimulationResult", G)
        });
        let p = li(fi);
        const {reTargetAmount: y} = yn(n)
          , C = Le({
            get: ()=>y.value,
            set: G=>o("update:reTargetAmount", G)
        })
          , {reInitialInvestmentAmount: D} = yn(n)
          , L = Le({
            get: ()=>D.value,
            set: G=>o("update:reInitialInvestmentAmount", G)
        })
          , {reMonthlyDeposit: Q} = yn(n)
          , ot = Le({
            get: ()=>Q.value,
            set: G=>o("update:reMonthlyDeposit", G)
        })
          , {reInvestmentPeriodYear: Z} = yn(n)
          , X = Le({
            get: ()=>Z.value,
            set: G=>o("update:reInvestmentPeriodYear", G)
        })
          , {reRiskTolerance: lt} = yn(n)
          , V = Le({
            get: ()=>lt.value,
            set: G=>o("update:reRiskTolerance", G)
        });
        return {
            simulationResult: l,
            targetAmount: C,
            initialInvestmentAmount: L,
            monthlyDeposit: ot,
            investmentPeriodYear: X,
            riskTolerance: V
        }
    },
    data() {
        return {
            modalLoading: !1,
            isDisabled: !1,
            renderChart: ()=>{}
            ,
            destroyChart: ()=>{}
        }
    },
    methods: {
        onChange(n) {
            document.activeElement.blur();
            const l = n.target.value
              , p = Number(n.target.min)
              , y = Number(n.target.max)
              , C = Number((l || "").replace(/[^-\d.]/g, "") || p)
              , D = Math.trunc(C)
              , L = Math.trunc(C * 10) / 10;
            switch (n.target.name) {
            case "targetAmount":
                this.targetAmount = D;
                break;
            case "additionalDeposit":
                this.initialInvestmentAmount = D;
                break;
            case "monthlyDeposit":
                .1 <= L && 1 > L ? this.monthlyDeposit = 0 : this.monthlyDeposit = L;
                break;
            case "year":
                this.investmentPeriodYear = D;
                break;
            case "riskTolerance":
                this.riskTolerance = D;
                break
            }
            if (C > y)
                switch (n.target.name) {
                case "targetAmount":
                    this.targetAmount = y;
                    break;
                case "additionalDeposit":
                    this.initialInvestmentAmount = y;
                    break;
                case "monthlyDeposit":
                    this.monthlyDeposit = y;
                    break;
                case "year":
                    this.investmentPeriodYear = y;
                    break;
                case "riskTolerance":
                    this.riskTolerance = y;
                    break
                }
            else if (C < p)
                switch (n.target.name) {
                case "targetAmount":
                    this.targetAmount = p;
                    break;
                case "additionalDeposit":
                    this.initialInvestmentAmount = p;
                    break;
                case "monthlyDeposit":
                    this.monthlyDeposit = p;
                    break;
                case "year":
                    this.investmentPeriodYear = p;
                    break;
                case "riskTolerance":
                    this.riskTolerance = p;
                    break
                }
            this.getReSimulation()
        },
        async getReSimulation() {
            const n = {
                initialInvestmentAmount: Pe.state.initialInvestmentAmount,
                investmentPeriodYear: Pe.state.investmentPeriodYear,
                monthlyDeposit: Pe.state.monthlyDeposit,
                riskTolerance: Pe.state.riskTolerance,
                targetAmount: Pe.state.targetAmount
            }
              , o = JSON.stringify(n)
              , l = await Ur.post(ps, o, {
                headers: {
                    "Content-Type": "application/json",
                    "Access-Control-Allow-Origin": "*"
                }
            });
            return this.simulationResult = l.data,
            await zr(()=>{
                ui(),
                [1, 2, 3, 4, 5].forEach(C=>{
                    const D = document.querySelector(`.input-slider-group li:nth-child(${C}) .input-slider`);
                    D && D.parentNode && D.parentNode.removeChild(D)
                }
                );
                const y = C=>{
                    const D = document.querySelectorAll(C);
                    D.length > 1 && D.forEach((L,Q)=>{
                        Q !== D.length - 1 && (L.style.display = "none",
                        L.innerHTML = "")
                    }
                    )
                }
                ;
                y(".charts-forecast"),
                y("#simulation-chart .charts-simulation"),
                y("#assets-class-chart .charts-donuts")
            }
            ),
            this.modalLoading = !1,
            this.isDisabled = !1,
            this.getReload(),
            l.data
        },
        async getReload() {
            await Rn.getReload().then(n=>n)
        },
        inputSlider() {
            F(".re-entry").on("change", n=>{
                const l = n.target.value;
                switch (n.target.id) {
                case "targetAmount":
                    Pe.state.targetAmount = l;
                    break;
                case "additionalDeposit":
                    Pe.state.initialInvestmentAmount = l;
                    break;
                case "monthlyDeposit":
                    Pe.state.monthlyDeposit = l;
                    break;
                case "year":
                    Pe.state.investmentPeriodYear = l;
                    break;
                case "riskTolerance":
                    Pe.state.riskTolerance = l;
                    break
                }
                this.getReSimulation(),
                this.modalLoading = !0,
                this.isDisabled = !0
            }
            )
        }
    },
    mounted() {
        this.inputSlider()
    }
});
const je = n=>(Ln("data-v-ad2419fc"),
n = n(),
In(),
n)
  , vs = {
    key: 0,
    class: "modal-loading"
}
  , ms = je(()=>B("div", {
    class: "loading-progress"
}, [B("div")], -1))
  , ys = je(()=>B("div", {
    class: "loading-progress-overlay"
}, null, -1))
  , xs = [ms, ys]
  , bs = {
    class: "result-source"
}
  , As = {
    class: "config-content"
}
  , Cs = {
    class: "config-content-body"
}
  , Ts = {
    class: "button-list"
}
  , ws = je(()=>B("span", null, "閉じる", -1))
  , Es = [ws]
  , Ss = {
    class: "input-slider-group"
}
  , Ds = {
    class: "input-slider-none"
}
  , _s = je(()=>B("span", {
    class: "name"
}, "目標金額", -1))
  , Ns = ["disabled"]
  , Ps = je(()=>B("span", {
    class: "name"
}, "初期投資額", -1))
  , Fs = ["disabled"]
  , Bs = je(()=>B("span", {
    class: "name"
}, "毎月の積立額", -1))
  , ks = ["disabled"]
  , Ms = je(()=>B("span", {
    class: "name"
}, "運用期間", -1))
  , $s = ["disabled"]
  , Rs = {
    class: "input-slider-none"
}
  , Ls = je(()=>B("span", {
    class: "name"
}, "リスク許容度", -1))
  , Is = ["disabled"];
function js(n, o, l, p, y, C) {
    return Ot(),
    Ht(Qe, null, [sn(Gr, null, {
        default: Xr(()=>[n.modalLoading ? (Ot(),
        Ht("div", vs, xs)) : pe("", !0)]),
        _: 1
    }), B("p", bs, kt(n.simulationResult.investmentPlan), 1), B("div", As, [B("div", Cs, [B("ul", Ts, [B("li", null, [B("button", {
        class: "config-toggle cancel-button",
        type: "button",
        onClick: o[0] || (o[0] = D=>n.$emit("close"))
    }, Es)])]), B("ul", Ss, [B("li", Ds, [B("label", null, [_s, Ie(B("input", {
        id: "targetAmount",
        class: "re-entry value",
        type: "number",
        min: "1",
        max: "100000",
        step: "1",
        required: "",
        name: "targetAmount",
        "onUpdate:modelValue": o[1] || (o[1] = D=>n.targetAmount = D),
        onChange: o[2] || (o[2] = (...D)=>n.onChange && n.onChange(...D)),
        disabled: n.isDisabled
    }, null, 40, Ns), [[xn, n.targetAmount]]), se(" 万円 ")])]), B("li", null, [B("label", null, [Ps, Ie(B("input", {
        id: "additionalDeposit",
        class: "re-entry value",
        type: "number",
        min: "10",
        max: "10000",
        step: "1",
        required: "",
        name: "additionalDeposit",
        "onUpdate:modelValue": o[3] || (o[3] = D=>n.initialInvestmentAmount = D),
        onChange: o[4] || (o[4] = (...D)=>n.onChange && n.onChange(...D)),
        disabled: n.isDisabled
    }, null, 40, Fs), [[xn, n.initialInvestmentAmount]]), se(" 万円 ")])]), B("li", null, [B("label", null, [Bs, Ie(B("input", {
        id: "monthlyDeposit",
        class: "re-entry value",
        type: "number",
        min: "0",
        max: "1000",
        step: "0.1",
        "data-monthly-deposit-amount-min": 1,
        required: "",
        name: "monthlyDeposit",
        "onUpdate:modelValue": o[5] || (o[5] = D=>n.monthlyDeposit = D),
        onChange: o[6] || (o[6] = (...D)=>n.onChange && n.onChange(...D)),
        disabled: n.isDisabled
    }, null, 40, ks), [[xn, n.monthlyDeposit]]), se(" 万円 ")])]), B("li", null, [B("label", null, [Ms, Ie(B("input", {
        id: "year",
        class: "re-entry value",
        type: "number",
        min: "10",
        max: "30",
        step: "1",
        required: "",
        name: "year",
        "onUpdate:modelValue": o[7] || (o[7] = D=>n.investmentPeriodYear = D),
        onChange: o[8] || (o[8] = (...D)=>n.onChange && n.onChange(...D)),
        disabled: n.isDisabled
    }, null, 40, $s), [[xn, n.investmentPeriodYear]]), se(" 年 ")])]), B("li", Rs, [B("label", null, [Ls, Ie(B("input", {
        id: "riskTolerance",
        class: "re-entry value",
        type: "number",
        min: "1",
        max: "5",
        step: "1",
        required: "",
        name: "riskTolerance",
        "onUpdate:modelValue": o[9] || (o[9] = D=>n.riskTolerance = D),
        onChange: o[10] || (o[10] = (...D)=>n.onChange && n.onChange(...D)),
        disabled: n.isDisabled
    }, null, 40, Is), [[xn, n.riskTolerance]])])])])])])], 64)
}
const Os = an(gs, [["render", js], ["__scopeId", "data-v-ad2419fc"]])
  , qs = on({
    setup() {
        const n = Le({
            get: ()=>o.getters.simulationResult,
            set: l=>o.dispatch("getSimulationResult", l)
        });
        let o = li(fi);
        return {
            simulationResult: n
        }
    }
})
  , Hs = {
    class: "data-source"
}
  , Ys = {
    class: "table-C",
    id: "data-forecast"
}
  , Vs = B("thead", null, [B("tr", null, [B("th", null, "年月"), B("th", null, "上限確率（90%）"), B("th", null, "高確率（70%）"), B("th", null, "中確率（50%）"), B("th", null, "低確率（30%）"), B("th", null, "下限確率（10%）")])], -1)
  , Ws = {
    key: 0
}
  , Us = {
    key: 0
}
  , zs = {
    key: 1,
    class: "highest"
}
  , Xs = {
    class: "value"
}
  , Gs = B("span", {
    class: "unit"
}, "万円", -1)
  , Zs = {
    key: 2,
    class: "high"
}
  , Qs = {
    class: "value"
}
  , Ks = B("span", {
    class: "unit"
}, "万円", -1)
  , Js = {
    key: 3,
    class: "middle"
}
  , to = {
    class: "value"
}
  , eo = B("span", {
    class: "unit"
}, "万円", -1)
  , no = {
    key: 4,
    class: "low"
}
  , io = {
    class: "value"
}
  , ro = B("span", {
    class: "unit"
}, "万円", -1)
  , so = {
    key: 5,
    class: "lowest"
}
  , oo = {
    class: "value"
}
  , ao = B("span", {
    class: "unit"
}, "万円", -1)
  , uo = {
    class: "table-C",
    id: "data-simulation"
}
  , lo = B("thead", null, [B("tr", null, [B("th", {
    scope: "col"
}, "日付"), B("th", {
    scope: "col"
}, "金額")])], -1)
  , fo = {
    class: "value"
}
  , co = B("span", {
    class: "unit"
}, "万円", -1);
function ho(n, o, l, p, y, C) {
    return Ot(),
    Ht("div", Hs, [B("p", null, [se(" 目標達成確率 "), B("span", null, kt(n.simulationResult.futureProbability ? n.simulationResult.futureProbability.achieveProbability : ""), 1)]), B("p", null, [se(" 元本割れ確率 "), B("span", null, kt(n.simulationResult.futureProbability ? n.simulationResult.futureProbability.lessNotionalProbability : ""), 1)]), B("table", Ys, [Vs, B("tbody", null, [(Ot(!0),
    Ht(Qe, null, ai(n.simulationResult.futureProbability ? n.simulationResult.futureProbability.futureProbabilityDetails : "", (D,L)=>(Ot(),
    Ht(Qe, {
        key: L
    }, [L <= n.simulationResult.investmentPlan.investmentPeriodYear * 12 + 1 ? (Ot(),
    Ht("tr", Ws, [L <= n.simulationResult.investmentPlan.investmentPeriodYear * 12 + 1 ? (Ot(),
    Ht("th", Us, kt(D.yearMonth[0] + "-" + ("0" + D.yearMonth[1]).slice(-2)), 1)) : pe("", !0), L <= n.simulationResult.investmentPlan.investmentPeriodYear * 12 + 1 ? (Ot(),
    Ht("td", zs, [B("span", Xs, kt(D.highestProbabilityAmount), 1), Gs])) : pe("", !0), L <= n.simulationResult.investmentPlan.investmentPeriodYear * 12 + 1 ? (Ot(),
    Ht("td", Zs, [B("span", Qs, kt(D.highProbabilityAmount), 1), Ks])) : pe("", !0), L <= n.simulationResult.investmentPlan.investmentPeriodYear * 12 + 1 ? (Ot(),
    Ht("td", Js, [B("span", to, kt(D.middleProbabilityAmount), 1), eo])) : pe("", !0), L <= n.simulationResult.investmentPlan.investmentPeriodYear * 12 + 1 ? (Ot(),
    Ht("td", no, [B("span", io, kt(D.lowProbabilityAmount), 1), ro])) : pe("", !0), L <= n.simulationResult.investmentPlan.investmentPeriodYear * 12 + 1 ? (Ot(),
    Ht("td", so, [B("span", oo, kt(D.lowestProbabilityAmount), 1), ao])) : pe("", !0)])) : pe("", !0)], 64))), 128))])]), B("table", uo, [lo, B("tbody", null, [(Ot(!0),
    Ht(Qe, null, ai(n.simulationResult.investmentHistories, (D,L)=>(Ot(),
    Ht("tr", {
        key: L
    }, [B("th", null, kt(D.date[0] + "-" + ("0" + D.date[1]).slice(-2) + "-" + ("0" + D.date[1]).slice(-2)), 1), B("td", null, [B("span", fo, kt(D.amount), 1), co])]))), 128))])])])
}
const po = an(qs, [["render", ho]])
  , go = on({
    setup() {
        const n = An.department
          , o = Ke[n].SIGNUP_URL;
        return {
            department: n,
            SIGNUP_URL: o
        }
    }
});
const vo = n=>(Ln("data-v-1ef49f65"),
n = n(),
In(),
n)
  , mo = ["href"]
  , yo = vo(()=>B("span", {
    class: "signup-button__text"
}, "次へ", -1))
  , xo = [yo];
function bo(n, o, l, p, y, C) {
    return Ot(),
    Ht("a", {
        class: "signup-button",
        href: n.SIGNUP_URL
    }, xo, 8, mo)
}
const Ao = an(go, [["render", bo], ["__scopeId", "data-v-1ef49f65"]])
  , Co = on({
    setup(n, o) {
        const l = An.department
          , p = Ke[l].category
          , y = Ke[l].title;
        return {
            closeRiskModal: ()=>{
                o.emit("close")
            }
            ,
            category: p,
            serviceName: L=>L === "hybrid" ? y : "WealthNavi"
        }
    }
})
  , To = "/introduction/simulation/assets/img_what-is-risk-tolerance-c7cba23a.png";
const un = n=>(Ln("data-v-a2ef95b7"),
n = n(),
In(),
n)
  , wo = {
    class: "outer"
}
  , Eo = {
    class: "content"
}
  , So = un(()=>B("h1", {
    class: "content__title"
}, "リスク許容度とは", -1))
  , Do = {
    class: "content__text"
}
  , _o = un(()=>B("br", null, null, -1))
  , No = un(()=>B("br", null, null, -1))
  , Po = un(()=>B("br", null, null, -1))
  , Fo = un(()=>B("br", null, null, -1))
  , Bo = un(()=>B("figure", {
    class: "content__image-box"
}, [B("img", {
    class: "content__image",
    src: To,
    alt: "リスク許容度別の最適ポートフォリオ"
}), B("figcaption", null, " リスク許容度別の最適ポートフォリオ（2023年10月時点） ")], -1));
function ko(n, o, l, p, y, C) {
    return Ot(),
    Ht(Qe, null, [B("div", wo, [B("div", Eo, [So, B("p", Do, [se(" リスク許容度とは、中長期的な資産形成を目指すにあたり、どの程度のリスクを受け入れるかを示したものです。 "), _o, se(" " + kt(n.serviceName(n.category)) + "では、リスク許容度に応じて、最も高いリターンが期待できる資産の組み合わせ（最適ポートフォリオ）を5つご提供しています。 ", 1), No, Po, se(" 5段階の最適ポートフォリオのうち、「リスク許容度1」が最も低リスク、「リスク許容度5」が最も高リスクです。 "), Fo, se(" 「リスク許容度1」では比較的リスクの低い債券の割合が大きくなり、「リスク許容度5」では比較的リスクの高い株の割合が大きくなります。 ")]), Bo]), B("button", {
        class: "close",
        onClick: o[0] || (o[0] = D=>n.closeRiskModal())
    }, " 閉じる ")]), B("div", {
        class: "overlay",
        onClick: o[1] || (o[1] = D=>n.closeRiskModal())
    })], 64)
}
const Mo = an(Co, [["render", ko], ["__scopeId", "data-v-a2ef95b7"]])
  , $n = Qr({
    result: !0
})
  , $o = on({
    components: {
        ConfigModal: Os,
        DataSource: po,
        SignUpButton: Ao,
        RiskToleranceModal: Mo
    },
    setup() {
        const n = "wealthnavi.com"
          , o = An.department
          , l = Ke[o].category
          , p = Ke[o].title;
        $n.result = !0;
        const y = oi([])
          , C = async()=>{
            try {
                const s = await Rn.getReply();
                y.value = s,
                s ? setTimeout(()=>{
                    ui(),
                    document.querySelectorAll(".charts-forecast:not(:last-child)").forEach(At=>{
                        At.style.display = "none",
                        At.innerHTML = ""
                    }
                    ),
                    document.querySelectorAll("#simulation-chart .charts-simulation:not(:last-child)").forEach(At=>{
                        At.style.display = "none",
                        At.innerHTML = ""
                    }
                    ),
                    document.querySelectorAll("#assets-class-chart .charts-donuts:not(:last-child)").forEach(At=>{
                        At.style.display = "none",
                        At.innerHTML = ""
                    }
                    ),
                    $n.result = !1,
                    document.querySelector("#loading").classList.add("loading-out"),
                    D()
                }
                , 0) : Q()
            } catch {
                location.href = "./"
            }
        }
          , D = async()=>{
            await Rn.getReload().then(s=>s)
        }
          , L = oi([])
          , Q = async()=>{
            try {
                const s = await Rn.getReload();
                if (L.value = s.data,
                s.data.investmentPlan == null)
                    location.href = "./";
                else {
                    const {investmentPlan: mt} = s.data;
                    at.commit("setSimulationResult", s.data),
                    at.commit("setTargetAmount", mt.targetAmount),
                    at.commit("setInitialInvestmentAmount", mt.initialInvestmentAmount),
                    at.commit("setMonthlyDeposit", mt.monthlyDeposit),
                    at.commit("setInvestmentPeriodYear", mt.investmentPeriodYear),
                    at.commit("setRiskTolerance", mt.riskTolerance),
                    setTimeout(()=>{
                        ui();
                        const At = Array.from(document.querySelectorAll(".charts-forecast"));
                        At.slice(0, At.length - 1).forEach(tt=>{
                            tt.style.display = "none",
                            tt.innerHTML = ""
                        }
                        );
                        const Kt = Array.from(document.querySelectorAll("#simulation-chart .charts-simulation"));
                        Kt.slice(0, Kt.length - 1).forEach(tt=>{
                            tt.style.display = "none",
                            tt.innerHTML = ""
                        }
                        );
                        const fe = Array.from(document.querySelectorAll("#assets-class-chart .charts-donuts"));
                        fe.slice(0, fe.length - 1).forEach(tt=>{
                            tt.style.display = "none",
                            tt.innerHTML = ""
                        }
                        ),
                        $n.result = !1,
                        document.querySelector("#loading").classList.add("loading-out")
                    }
                    , 0)
                }
            } catch {
                location.href = "./"
            }
        }
        ;
        Zr(()=>{
            C()
        }
        );
        const ot = (s,mt)=>Le({
            get: ()=>at.getters[s],
            set: At=>at.dispatch(mt, At)
        })
          , Z = ot("simulationResult", "getSimulationResult")
          , X = ot("targetAmount", "getTargetAmount")
          , lt = ot("initialInvestmentAmount", "getInitialInvestmentAmount")
          , V = ot("monthlyDeposit", "getMonthlyDeposit")
          , G = ot("investmentPeriodYear", "getInvestmentPeriodYear")
          , it = ot("riskTolerance", "getRiskTolerance");
        let at = li(fi)
          , rt = oi(!1);
        return {
            BASE_DOMAIN: n,
            simulationResult: Z,
            targetAmount: X,
            initialInvestmentAmount: lt,
            monthlyDeposit: V,
            investmentPeriodYear: G,
            riskTolerance: it,
            loading: $n,
            showContent: rt,
            openRiskModal: ()=>{
                rt.value = !0,
                document.body.classList.add("is-opened")
            }
            ,
            closeRiskModal: ()=>{
                rt.value = !1,
                document.body.classList.remove("is-opened")
            }
            ,
            category: l,
            serviceName: s=>s === "hybrid" ? p : "ウェルスナビ",
            faq: s=>{
                const mt = `https://faq.${n}/${o}/8392949882521.html`;
                return s === "hybrid" ? mt : "https://support.wealthnavi.com/hc/ja/articles/8392949882521"
            }
        }
    },
    data() {
        return {
            isOpened: !1
        }
    },
    methods: {
        openModal() {
            this.isOpened = !this.isOpened,
            document.body.classList.add("is-opened")
        },
        closeModal() {
            this.isOpened = !this.isOpened,
            document.body.classList.remove("is-opened")
        }
    }
});
const Ro = {
    class: "loading"
}
  , Lo = B("div", {
    class: "loading__item"
}, [B("div", {
    class: "loading__flashing"
})], -1)
  , Io = [Lo]
  , jo = {
    class: "result"
}
  , Oo = B("h2", {
    class: "result__headline"
}, "あなたの資産運用プラン", -1)
  , qo = {
    class: "result__predict"
}
  , Ho = B("br", null, null, -1)
  , Yo = B("br", {
    class: "sp-only"
}, null, -1)
  , Vo = {
    class: "prerequisites"
}
  , Wo = {
    class: "prerequisites__link",
    href: "#"
}
  , Uo = {
    class: "category-simulation page-simulation-target"
}
  , zo = ci('<ul class="tab-list"><li><label tabindex="0"><input type="radio" name="tab-group-1" value="tab-1" tabindex="-1" autocomplete="off" checked><span class="label-text">将来予想</span></label></li><li><label tabindex="0"><input type="radio" name="tab-group-1" value="tab-2" tabindex="-1" autocomplete="off"><span class="label-text">過去分析</span></label></li></ul>', 1)
  , Xo = {
    class: "tab-panel",
    id: "tab-1",
    "aria-selected": "true"
}
  , Go = B("p", {
    class: "lead"
}, " 長期でじっくり続けることで、大きなプラスのリターンが期待できます。 ", -1)
  , Zo = B("h2", {
    "aria-hidden": "true"
}, "将来シミュレーション", -1)
  , Qo = {
    class: "forecast-layout"
}
  , Ko = {
    class: "chart"
}
  , Jo = B("div", {
    id: "forecast-chart"
}, null, -1)
  , ta = {
    id: "totalInvestAmount"
}
  , ea = {
    class: "tab-panel",
    id: "tab-2"
}
  , na = B("p", {
    class: "lead"
}, " 短期的に大きくマイナスになることもありますが、長期的な視点で続けることが大切です。 ", -1)
  , ia = B("h2", {
    "aria-hidden": "true"
}, "リーマン・ショック前から運用開始した場合", -1)
  , ra = {
    class: "simulation-chart-block"
}
  , sa = B("div", {
    id: "simulation-chart"
}, null, -1)
  , oa = {
    class: "simulation-chart-sup"
}
  , aa = ci('<section class="tab-panel" id="tab-3"><h2 aria-hidden="true">Portfolio</h2><div class="layout"><div class="col-1/2"></div><div class="col-1/2"><p class="note">※金額は、四捨五入して表示しています。</p></div></div></section>', 1)
  , ua = {
    class: "signup"
}
  , la = B("a", {
    class: "signup__again",
    href: "/introduction/simulation/"
}, " もう一度診断する ", -1)
  , fa = {
    class: "portfolios"
}
  , ca = B("h2", {
    class: "portfolios__title"
}, "あなたのポートフォリオ", -1)
  , ha = {
    class: "portfolios__risk-box"
}
  , da = {
    class: "portfolios__risk"
}
  , pa = {
    class: "portfolios__risk-set"
}
  , ga = B("span", {
    class: "portfolios__slash"
}, "/", -1)
  , va = B("span", {
    class: "portfolios__denominator"
}, "5", -1)
  , ma = {
    class: "portfolios__assets-box"
}
  , ya = B("div", {
    id: "assets-class-chart"
}, null, -1)
  , xa = {
    key: 0,
    class: "portfolios__assets-text"
}
  , ba = {
    key: 1,
    class: "portfolios__assets-text"
}
  , Aa = {
    key: 2,
    class: "portfolios__assets-text"
}
  , Ca = {
    key: 3,
    class: "portfolios__assets-text"
}
  , Ta = {
    key: 4,
    class: "portfolios__assets-text"
}
  , wa = {
    class: "data-table",
    id: "assets-class-data"
}
  , Ea = B("thead", null, [B("tr", null, [B("th", {
    scope: "col",
    class: "type"
}, " 資産クラス "), B("th", {
    scope: "col",
    class: "number"
}, " 割合 ")])], -1)
  , Sa = {
    scope: "row",
    class: "type portfolios__assets-name"
}
  , Da = {
    class: "per number"
}
  , _a = {
    class: "value"
}
  , Na = B("span", {
    class: "unit"
}, "%", -1)
  , Pa = {
    class: "portfolios__assets-notes"
}
  , Fa = ["href"]
  , Ba = {
    class: "signup"
}
  , ka = B("a", {
    class: "signup__again",
    href: "/introduction/simulation/"
}, " もう一度診断する ", -1)
  , Ma = {
    class: "result-note result-note--prerequisites"
}
  , $a = B("a", {
    id: "prerequisites"
}, null, -1)
  , Ra = {
    class: "result-note__list"
}
  , La = B("dt", null, "将来予想について", -1)
  , Ia = {
    class: "result-note__detail"
}
  , ja = B("dd", {
    class: "result-note__detail"
}, " ・シミュレーション結果の金額や確率はあくまで統計的に計算したものであり、将来のパフォーマンスを保証するものではありません。運用成果によっては損失を被り、投資元本を割込むおそれがあります。 ", -1)
  , Oa = B("dd", {
    class: "result-note__detail"
}, " ・運用手数料を引いて計算しています。税金控除は計算に含まれていません。 ", -1)
  , qa = ci('<dl class="result-note__list"><dt>過去分析について</dt><dd class="result-note__detail"> ・過去のシミュレーションはリバランスと積立を継続して行ってきた場合を想定しています。 </dd><dd class="result-note__detail"> ・運用手数料を引いて計算しています。税金控除は計算に含まれていません。 </dd></dl><dl class="result-note__list"><dt>ポートフォリオについて</dt><dd class="result-note__detail"> ・現時点における各資産クラスの購入対象銘柄および目標とする保有割合を表示しており、これらは将来的に変わる場合があります。詳細は、資産運用アルゴリズム（White Paper）をご参照ください。 </dd></dl>', 2);
function Ha(n, o, l, p, y, C) {
    const D = bn("ConfigModal")
      , L = bn("DataSource")
      , Q = bn("SignUpButton")
      , ot = bn("RiskToleranceModal")
      , Z = ts("scroll-to");
    return Ot(),
    Ht(Qe, null, [Ie(B("div", Ro, Io, 512), [[Wi, n.loading.result]]), Ie(B("section", jo, [Oo, B("p", qo, [se(kt(n.simulationResult.investmentPlan ? n.simulationResult.investmentPlan.investmentPeriodYear : "") + "年後、" + kt(n.simulationResult.investmentPlan ? Math.trunc(n.simulationResult.investmentPlan.totalInvestAmount).toLocaleString() : "") + "万円の元本が ", 1), Ho, B("strong", null, kt(n.simulationResult.futureProbability ? Math.round(n.simulationResult.futureProbability.achieveProbability) : "") + "% ", 1), se(" の確率で "), Yo, B("strong", null, kt(n.simulationResult.investmentPlan ? Math.trunc(n.simulationResult.investmentPlan.targetAmount).toLocaleString() : "") + "万円以上 ", 1), se(" になります。 ")]), B("p", Vo, [Ie((Ot(),
    Ht("a", Wo, [se(" 前提条件 ")])), [[Z, {
        el: "#prerequisites",
        duration: 500,
        easing: "ease"
    }]])])], 512), [[Wi, !n.loading.result]]), B("section", Uo, [B("form", {
        id: "config-form",
        class: Ui({
            "is-opened": n.isOpened
        }),
        onSubmit: o[0] || (o[0] = Kr(()=>{}
        , ["prevent"]))
    }, null, 34), zo, B("section", Xo, [Go, Zo, B("div", Qo, [B("div", Ko, [Jo, B("p", null, [B("span", ta, kt(n.simulationResult.investmentPlan ? Math.trunc(n.simulationResult.investmentPlan.totalInvestAmount).toLocaleString() : ""), 1), se(" リスク許容度" + kt(n.simulationResult.investmentPlan ? n.simulationResult.investmentPlan.riskTolerance : ""), 1)])])]), sn(D, {
        onClose: n.closeModal,
        reTargetAmount: n.targetAmount,
        "onUpdate:reTargetAmount": o[1] || (o[1] = X=>n.targetAmount = X),
        reInitialInvestmentAmount: n.initialInvestmentAmount,
        "onUpdate:reInitialInvestmentAmount": o[2] || (o[2] = X=>n.initialInvestmentAmount = X),
        reMonthlyDeposit: n.monthlyDeposit,
        "onUpdate:reMonthlyDeposit": o[3] || (o[3] = X=>n.monthlyDeposit = X),
        reInvestmentPeriodYear: n.investmentPeriodYear,
        "onUpdate:reInvestmentPeriodYear": o[4] || (o[4] = X=>n.investmentPeriodYear = X),
        reRiskTolerance: n.riskTolerance,
        "onUpdate:reRiskTolerance": o[5] || (o[5] = X=>n.riskTolerance = X)
    }, null, 8, ["onClose", "reTargetAmount", "reInitialInvestmentAmount", "reMonthlyDeposit", "reInvestmentPeriodYear", "reRiskTolerance"])]), B("section", ea, [na, ia, B("div", ra, [sa, B("p", oa, " 初期投資" + kt(n.simulationResult.investmentPlan ? n.simulationResult.investmentPlan.initialInvestmentAmount : "") + "万円、積立" + kt(n.simulationResult.investmentPlan ? n.simulationResult.investmentPlan.monthlyDeposit : "") + "万円、リスク許容度" + kt(n.simulationResult.investmentPlan ? n.simulationResult.investmentPlan.riskTolerance : ""), 1)])]), aa, sn(L)]), B("section", ua, [sn(Q), la]), B("section", fa, [ca, B("div", ha, [B("p", da, [se(" リスク許容度 "), B("span", pa, kt(n.simulationResult.investmentPlan ? n.simulationResult.investmentPlan.riskTolerance : ""), 1), ga, va]), B("button", {
        class: "portfolios__button",
        type: "button",
        onClick: o[6] || (o[6] = X=>n.openRiskModal())
    }), n.showContent ? (Ot(),
    Jr(ot, {
        key: 0,
        onClose: o[7] || (o[7] = X=>n.closeRiskModal())
    })) : pe("", !0)]), B("div", ma, [ya, (n.simulationResult.investmentPlan ? n.simulationResult.investmentPlan.riskTolerance : "") == 5 ? (Ot(),
    Ht("p", xa, kt(n.serviceName(n.category)) + "で最もリスクが高い、株式中心の組み合わせで、比較的高いリターンをめざします。 ", 1)) : pe("", !0), (n.simulationResult.investmentPlan ? n.simulationResult.investmentPlan.riskTolerance : "") == 4 ? (Ot(),
    Ht("p", ba, " ややリスクが高い、株式が多めの組み合わせで、比較的高いリターンをめざします。 ")) : pe("", !0), (n.simulationResult.investmentPlan ? n.simulationResult.investmentPlan.riskTolerance : "") == 3 ? (Ot(),
    Ht("p", Aa, kt(n.serviceName(n.category)) + "の中で、リスクとリターンが中程度の組み合わせです。 ", 1)) : pe("", !0), (n.simulationResult.investmentPlan ? n.simulationResult.investmentPlan.riskTolerance : "") == 2 ? (Ot(),
    Ht("p", Ca, " ややリスクを抑えた、債券が多めの組み合わせで、比較的安定した運用をめざします。 ")) : pe("", !0), (n.simulationResult.investmentPlan ? n.simulationResult.investmentPlan.riskTolerance : "") == 1 ? (Ot(),
    Ht("p", Ta, kt(n.serviceName(n.category)) + "で最もリスクが低い、債券中心の組み合わせで、比較的安定した運用をめざします。 ", 1)) : pe("", !0)]), B("table", wa, [Ea, B("tbody", null, [(Ot(!0),
    Ht(Qe, null, ai(n.simulationResult.recommendPortfolios, (X,lt)=>(Ot(),
    Ht("tr", {
        key: lt
    }, [B("th", Sa, [B("span", {
        class: Ui(`${X.assetClass}`)
    }, null, 2), B("span", null, kt(`${X.assetClass}`), 1)]), B("td", Da, [B("span", _a, kt((X.ratio * 100).toFixed(1)), 1), Na])]))), 128))])]), B("p", Pa, [se(" ※ 投資対象銘柄については "), B("a", {
        href: `${n.faq(n.category)}`,
        target: "_blank"
    }, " こちら ", 8, Fa), se(" をご覧ください。 ")])]), B("section", Ba, [sn(Q), ka]), B("div", Ma, [$a, B("dl", Ra, [La, B("dd", Ia, " ・" + kt(n.simulationResult.startDate ? n.simulationResult.startDate[0] : "") + "年" + kt(n.simulationResult.startDate ? n.simulationResult.startDate[1] : "") + "月時点の運用モデルにより推計された期待リターンとリスク水準に基づき、毎月のリターンが正規分布する前提で将来の資産評価額の分布を予測しています。運用モデルの詳細は、資産運用アルゴリズム（White Paper）をご参照ください。 ", 1), ja, Oa]), qa])], 64)
}
const Ya = an($o, [["render", Ha]])
  , Va = An.department
  , Wa = Ke[Va].title
  , Ua = on({
    name: "Target",
    components: {
        Result: Ya
    },
    mounted() {
        document.title = `無料診断結果 : ${Wa}`,
        window.dataLayer = window.dataLayer || [],
        window.dataLayer.push({
            event: "simulation_complete"
        })
    }
});
const za = n=>(Ln("data-v-e3892a09"),
n = n(),
In(),
n)
  , Xa = {
    class: "target"
}
  , Ga = za(()=>B("div", {
    class: "target__headline-inner"
}, [B("h1", {
    class: "target__headline"
}, "無料診断結果")], -1));
function Za(n, o, l, p, y, C) {
    const D = bn("Result");
    return Ot(),
    Ht("section", Xa, [Ga, sn(D)])
}
const Ka = an(Ua, [["render", Za], ["__scopeId", "data-v-e3892a09"]]);
export {Ka as default};
