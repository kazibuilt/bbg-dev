import { _ as Te } from "./nuxt-link._i9Q8UJJ.js";
import { _ as Le } from "./ProductIcon.CG2xxb0M.js";
import { a as $e, r as m, s as Re, t as Ae, o as Pe, b as K, w as ve, u as U, c as De, d as l, g as Me, e as u, f as h, h as e, i as Oe, j as Be, O as Ee, k as He, l as qe, T as Ve, m as Ne, n as $, p as w, q as E, v as re, x as N, F as I, y as Z, z as D, A as ie, B as G, C as ue, D as ce, E as Ie, G as Ze, H as de, I as Fe, S as ze, J as je, K as Ge, _ as Ke } from "./entry.BWB0ivIq.js";
import { B as q } from "./Breakpoints.reference.B1a2k19r.js";
import { L as Ue, A as fe } from "./Logo.CuYfjzrw.js";
const Qe = c => c === "defer" || c === !1;
function Ye(...c) {
    var k;
    const _ = typeof c[c.length - 1] == "string" ? c.pop() : void 0;
    typeof c[0] != "string" && c.unshift(_);
    let [n, P, s={}] = c;
    if (typeof n != "string")
        throw new TypeError("[nuxt] [asyncData] key must be a string.");
    if (typeof P != "function")
        throw new TypeError("[nuxt] [asyncData] handler must be a function.");
    const a = U(),
        R = P,
        S = () => null,
        M = () => a.isHydrating ? a.payload.data[n] : a.static.data[n];
    s.server = s.server ?? !0,
    s.default = s.default ?? S,
    s.getCachedData = s.getCachedData ?? M,
    s.lazy = s.lazy ?? !1,
    s.immediate = s.immediate ?? !0,
    s.deep = s.deep ?? $e.deep,
    s.dedupe = s.dedupe ?? "cancel";
    const H = () => ![null, void 0].includes(s.getCachedData(n));
    if (!a._asyncData[n] || !s.immediate) {
        (k = a.payload._errors)[n] ?? (k[n] = null);
        const r = s.deep ? m : Re;
        a._asyncData[n] = {
            data: r(s.getCachedData(n) ?? s.default()),
            pending: m(!H()),
            error: Ae(a.payload._errors, n),
            status: m("idle")
        }
    }
    const o = {
        ...a._asyncData[n]
    };
    o.refresh = o.execute = (r={}) => {
        if (a._asyncDataPromises[n]) {
            if (Qe(r.dedupe ?? s.dedupe))
                return a._asyncDataPromises[n];
            a._asyncDataPromises[n].cancelled = !0
        }
        if ((r._initial || a.isHydrating && r._initial !== !1) && H())
            return Promise.resolve(s.getCachedData(n));
        o.pending.value = !0,
        o.status.value = "pending";
        const x = new Promise((d, b) => {
            try {
                d(R(a))
            } catch (y) {
                b(y)
            }
        }).then(d => {
            if (x.cancelled)
                return a._asyncDataPromises[n];
            let b = d;
            s.transform && (b = s.transform(d)),
            s.pick && (b = Je(b, s.pick)),
            a.payload.data[n] = b,
            o.data.value = b,
            o.error.value = null,
            o.status.value = "success"
        }).catch(d => {
            if (x.cancelled)
                return a._asyncDataPromises[n];
            o.error.value = De(d),
            o.data.value = l(s.default()),
            o.status.value = "error"
        }).finally(() => {
            x.cancelled || (o.pending.value = !1, delete a._asyncDataPromises[n])
        });
        return a._asyncDataPromises[n] = x, a._asyncDataPromises[n]
    };
    const A = () => o.refresh({
            _initial: !0
        }),
        p = s.server !== !1 && a.payload.serverRendered;
    {
        const r = Me();
        if (r && !r._nuxtOnBeforeMountCbs) {
            r._nuxtOnBeforeMountCbs = [];
            const d = r._nuxtOnBeforeMountCbs;
            r && (Pe(() => {
                d.forEach(b => {
                    b()
                }),
                d.splice(0, d.length)
            }), K(() => d.splice(0, d.length)))
        }
        p && a.isHydrating && (o.error.value || H()) ? (o.pending.value = !1, o.status.value = o.error.value ? "error" : "success") : r && (a.payload.serverRendered && a.isHydrating || s.lazy) && s.immediate ? r._nuxtOnBeforeMountCbs.push(A) : s.immediate && A(),
        s.watch && ve(s.watch, () => o.refresh());
        const x = a.hook("app:data:refresh", async d => {
            (!d || d.includes(n)) && await o.refresh()
        });
        r && K(x)
    }
    const O = Promise.resolve(a._asyncDataPromises[n]).then(() => o);
    return Object.assign(O, o), O
}
function Je(c, _) {
    const n = {};
    for (const P of _)
        n[P] = c[P];
    return n
}
const We = {
        width: "9",
        height: "15",
        viewBox: "0 0 9 15",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg"
    },
    Xe = e("path", {
        d: "M7.99976 0.499878L1 7.49963L7.99976 14.4994",
        stroke: "currentColor"
    }, null, -1),
    et = [Xe];
function tt(c, _) {
    return u(), h("svg", We, [...et])
}
const pe = {
        render: tt
    },
    st = {
        width: "15",
        height: "15",
        viewBox: "0 0 15 15",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg"
    },
    at = e("rect", {
        x: "10.2529",
        y: "3.18201",
        width: "1",
        height: "10",
        transform: "rotate(45 10.2529 3.18201)",
        fill: "currentColor"
    }, null, -1),
    nt = e("rect", {
        x: "3.18262",
        y: "3.8891",
        width: "1",
        height: "10",
        transform: "rotate(-45 3.18262 3.8891)",
        fill: "currentColor"
    }, null, -1),
    ot = [at, nt];
function lt(c, _) {
    return u(), h("svg", st, [...ot])
}
const he = {
        render: lt
    },
    rt = {
        width: "23",
        height: "23",
        viewBox: "0 0 23 23",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg"
    },
    it = e("path", {
        d: "M13.266 2.20129L20.8027 9.73804L22.4983 8.0425L14.9615 0.505748L13.266 2.20129Z",
        fill: "currentColor"
    }, null, -1),
    ut = e("path", {
        d: "M9.73841 8.04456L2.20166 0.507812L0.506118 2.20335L8.04287 9.7401L9.73841 8.04456Z",
        fill: "currentColor"
    }, null, -1),
    ct = e("path", {
        d: "M22.4972 20.7931L14.9604 13.2563L13.2649 14.9519L20.8017 22.4886L22.4972 20.7931Z",
        fill: "currentColor"
    }, null, -1),
    dt = e("path", {
        d: "M0.504757 14.9603L8.0415 22.4971L9.73704 20.8015L2.2003 13.2648L0.504757 14.9603Z",
        fill: "currentColor"
    }, null, -1),
    ft = [it, ut, ct, dt];
function pt(c, _) {
    return u(), h("svg", rt, [...ft])
}
const ht = {
        render: pt
    },
    vt = {
        width: "18",
        height: "18",
        viewBox: "0 0 18 18",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg"
    },
    mt = e("path", {
        "fill-rule": "evenodd",
        "clip-rule": "evenodd",
        d: "M13.2636 7.85993C13.2636 11.1563 10.5914 13.8286 7.29499 13.8286C3.99861 13.8286 1.32636 11.1563 1.32636 7.85993C1.32636 4.56355 3.99861 1.8913 7.29499 1.8913C10.5914 1.8913 13.2636 4.56355 13.2636 7.85993ZM11.963 13.4661C10.698 14.5206 9.0706 15.1549 7.29499 15.1549C3.26608 15.1549 0 11.8888 0 7.85993C0 3.83102 3.26608 0.564941 7.29499 0.564941C11.3239 0.564941 14.59 3.83102 14.59 7.85993C14.59 9.63566 13.9555 11.2632 12.9009 12.5282L17.4347 17.062L16.4968 17.9999L11.963 13.4661Z",
        fill: "currentColor"
    }, null, -1),
    _t = [mt];
function yt(c, _) {
    return u(), h("svg", vt, [..._t])
}
const gt = {
        render: yt
    },
    bt = {
        width: "21",
        height: "21",
        viewBox: "0 0 21 21",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg"
    },
    wt = e("path", {
        d: "M5.17053 2.68274L15.8291 2.68274V0.284882L5.17053 0.284882V2.68274Z",
        fill: "currentColor"
    }, null, -1),
    kt = e("path", {
        d: "M2.68262 15.8292L2.68262 5.17065H0.28476L0.28476 15.8292H2.68262Z",
        fill: "currentColor"
    }, null, -1),
    Ct = e("path", {
        d: "M20.7217 15.8292V5.17065H18.3238V15.8292H20.7217Z",
        fill: "currentColor"
    }, null, -1),
    St = e("path", {
        d: "M15.8285 18.3171H5.16992V20.715H15.8285V18.3171Z",
        fill: "currentColor"
    }, null, -1),
    xt = [wt, kt, Ct, St];
function Tt(c, _) {
    return u(), h("svg", bt, [...xt])
}
const Lt = {
        render: Tt
    },
    Q = c => (je("data-v-4b5b0323"), c = c(), Ge(), c),
    $t = {
        key: 0,
        class: "icon-wrapper"
    },
    Rt = {
        key: 1,
        class: "icon-wrapper search"
    },
    At = {
        key: 2,
        class: "icon-wrapper square"
    },
    Pt = {
        class: "nav-list-item-index"
    },
    Dt = ["onClick"],
    Mt = {
        class: "nav-list-item"
    },
    Ot = {
        class: "nav-list-item-index"
    },
    Bt = {
        class: "nav-sub-items-container"
    },
    Et = {
        class: "nav-sub-items-inner"
    },
    Ht = {
        class: "nav-sub-items-title"
    },
    qt = {
        class: "nav-sub-items-list-wrapper"
    },
    Vt = Q(() => e("div", {
        class: "nav-sub-items-list-title"
    }, "Explore Products", -1)),
    Nt = {
        class: "nav-sub-items-list"
    },
    It = {
        class: "nav-sub-items-list-link-icon"
    },
    Zt = {
        key: "menu-search-item",
        class: "nav-sub-items search"
    },
    Ft = {
        class: "nav-sub-items-inner"
    },
    zt = {
        class: "nav-sub-items-input-wrapper"
    },
    jt = {
        key: 0,
        class: "nav-sub-items-list-wrapper"
    },
    Gt = {
        class: "nav-sub-items-list-title"
    },
    Kt = {
        class: "nav-sub-items-list"
    },
    Ut = ["innerHTML"],
    Qt = {
        class: "nav-sub-items-list-link-icon"
    },
    Yt = Q(() => e("span", null, null, -1)),
    Jt = Q(() => e("span", null, null, -1)),
    Wt = [Yt, Jt],
    Xt = Oe({
        __name: "Menu",
        props: {
            links: {}
        },
        setup(c) {
            const {$smoothScroll: _} = U(),
                {hooks: n} = U(),
                P = Be(),
                s = Ee(),
                a = He(),
                {windowSize: R} = qe(a),
                S = m(!1),
                M = m(null),
                H = m(null),
                o = m(null),
                A = m(null),
                p = m(""),
                O = m(),
                k = m(""),
                r = m([]),
                x = m(Ve.Black),
                d = m(null),
                b = m(null),
                y = m(null),
                F = m(null),
                B = m(!0);
            let f;
            const Y = {
                duration: 1,
                ease: "expo.inOut"
            };
            ve(() => P.path, () => {
                (a.menuOpen || p.value) && j(),
                setTimeout(() => {
                    B.value = !0
                }, 1e3)
            }),
            Ne(() => {
                n.hook("menu:setTheme", W),
                n.hook("window:raf", ee),
                window.addEventListener("keyup", X),
                be()
            }),
            K(() => {
                n.removeHook("menu:setTheme", W),
                n.removeHook("window:raf", ee),
                window.removeEventListener("keyup", X),
                f && f.kill()
            });
            const J = () => {
                    var t;
                    a.menuOpen ? (_.start(), f = $.timeline({
                        paused: !0,
                        onComplete: () => {
                            p.value = "",
                            k.value = "",
                            r.value = [],
                            a.setMenuOpen(!1)
                        }
                    }), o.value && A.value && f.fromTo(o.value, {
                        yPercent: 0
                    }, {
                        duration: 1,
                        ease: "expo.inOut",
                        yPercent: -100
                    }, "start+=0.2").fromTo(A.value, {
                        yPercent: 0
                    }, {
                        duration: 1,
                        ease: "expo.inOut",
                        yPercent: 100
                    }, "start+=0.2").fromTo(o.value, {
                        backdropFilter: "blur(20px)"
                    }, {
                        backdropFilter: "blur(0px)",
                        duration: .2
                    }, "start"), f.play()) : (_.stop(), a.setMenuOpen(!0), f = $.timeline({
                        paused: !0
                    }), o.value && A.value && f.fromTo(o.value, {
                        yPercent: -100
                    }, {
                        duration: 1,
                        ease: "expo.inOut",
                        yPercent: 0
                    }, "start").fromTo(A.value, {
                        yPercent: 100
                    }, {
                        duration: 1,
                        ease: "expo.inOut",
                        yPercent: 0
                    }, "start").fromTo(o.value, {
                        backdropFilter: "blur(0px)"
                    }, {
                        backdropFilter: "blur(20px)",
                        duration: .5
                    }, "start+=0.7"), b.value && f.fromTo(b.value, {
                        autoAlpha: 0,
                        y: 80
                    }, {
                        autoAlpha: 1,
                        duration: .6,
                        ease: "power3.out",
                        y: 0
                    }, "start+=0.4"), y.value && ((t = y.value.children) == null ? void 0 : t.length) > 0 && f.fromTo(y.value.children, {
                        autoAlpha: 0,
                        y: 60
                    }, {
                        autoAlpha: 1,
                        duration: .6,
                        ease: "power3.out",
                        stagger: .03,
                        y: 0
                    }, "start+=0.4"), f.play())
                },
                W = t => {
                    t !== x.value && (x.value = t)
                },
                me = t => {
                    S.value || (p.value = t)
                },
                z = () => {
                    const t = R.value.width >= q.Small;
                    let v = 0;
                    p.value === "Search" && t && (_.start(), $.fromTo(F.value, {
                        autoAlpha: 1
                    }, {
                        autoAlpha: 0,
                        duration: .5
                    }), y.value && y.value.children.length > 0 && $.fromTo(y.value.children, {
                        autoAlpha: 0
                    }, {
                        autoAlpha: 1,
                        delay: .5,
                        duration: .6,
                        stagger: .04
                    }), v = 600),
                    setTimeout(() => {
                        k.value = "",
                        r.value = [],
                        p.value = ""
                    }, v)
                },
                j = () => {
                    if (S.value)
                        return;
                    const t = R.value.width >= q.Small;
                    _.start(),
                    t ? (p.value === "Search" ? z() : (p.value = "", k.value = "", r.value = []), a.setMenuOpen(!1)) : J()
                },
                X = ({key: t}) => {
                    (p.value || a.menuOpen) && t === "Escape" && j()
                },
                _e = async () => {
                    if (!(R.value.width >= q.Small)) {
                        p.value = "Search",
                        d.value && (await Fe(), d.value.focus());
                        return
                    }
                    _.stop(),
                    f = $.timeline({
                        paused: !0,
                        onComplete: () => {
                            d.value && d.value.focus()
                        }
                    }),
                    f.addLabel("start"),
                    y.value && y.value.children.length > 0 && (f.fromTo(y.value.children, {
                        autoAlpha: 1
                    }, {
                        autoAlpha: 0,
                        duration: .3,
                        stagger: .02,
                        onComplete: () => {
                            p.value = "Search"
                        }
                    }, "start"), f.fromTo(F.value, {
                        autoAlpha: 0
                    }, {
                        autoAlpha: 1,
                        duration: 1
                    }, "start+=0.25")),
                    f.play()
                },
                ye = (...t) => ({
                    __or: t.map(C => ({
                        [C]: {
                            like: `*${k.value}*`
                        }
                    }))
                }),
                ge = () => {
                    var t;
                    if (((t = k.value) == null ? void 0 : t.length) < 3) {
                        r.value = [];
                        return
                    }
                    O && clearTimeout(O.value),
                    O.value = setTimeout(async () => {
                        var i,
                            g;
                        const v = k.value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"),
                            C = new RegExp(v, "gi"),
                            {data: T} = await Ye(async () => await s.get("cdn/stories", {
                                version: "published",
                                per_page: 5,
                                excluding_slugs: "categories/*,features/*,job-positions/*,product-specifications/*,socials/*",
                                filter_query: ye("copy", "title")
                            }), "$KYBjAX9nGN");
                        r.value = (((g = (i = T == null ? void 0 : T.value) == null ? void 0 : i.data) == null ? void 0 : g.stories) ?? []).map(L => {
                            let V = `/${L.full_slug}`,
                                se = L.content.title ?? "";
                            if (L.content.component === "article") {
                                const ae = L.content.copy.content.find(xe => {
                                    var ne,
                                        oe,
                                        le;
                                    return (((le = (oe = (ne = xe.content) == null ? void 0 : ne[0]) == null ? void 0 : oe.text) == null ? void 0 : le.toLowerCase()) ?? "").includes(v)
                                });
                                ae && (se = ae.content[0].text.replace(C, "<strong>$&</strong>")),
                                V = `/${ze.Updates}`
                            }
                            return {
                                _uid: L.content._uid ?? "",
                                label: se,
                                href: V,
                                target: "_self"
                            }
                        })
                    }, 250)
                },
                be = () => {
                    M.value && $.fromTo(M.value, {
                        autoAlpha: 0,
                        y: -50
                    }, {
                        autoAlpha: 1,
                        delay: .2,
                        duration: 1.2,
                        ease: "power3.out",
                        y: 0
                    })
                },
                we = t => {
                    $.fromTo(t, {
                        y: 40
                    }, {
                        duration: .6,
                        ease: "expo.inOut",
                        y: 0
                    })
                },
                ke = (t, v) => {
                    $.fromTo(t, {
                        y: 0
                    }, {
                        duration: .6,
                        ease: "expo.inOut",
                        y: -40,
                        onComplete: v
                    })
                },
                Ce = t => {
                    const v = R.value.width >= q.Small;
                    if (S.value || !v)
                        return;
                    S.value = !0,
                    _.stop();
                    const C = t.querySelector(".nav-sub-items-container"),
                        T = t.querySelector(".nav-sub-items-inner"),
                        i = t.querySelector(".nav-sub-items-title"),
                        g = t.querySelector(".nav-sub-items-list-title"),
                        L = t.querySelectorAll(".nav-sub-items-list-item");
                    f = $.timeline({
                        paused: !0,
                        onComplete: () => {
                            S.value = !1
                        }
                    }),
                    f.addLabel("start").fromTo(y.value, {
                        autoAlpha: 1
                    }, {
                        autoAlpha: 0,
                        duration: .7
                    }, "start").fromTo(C, {
                        yPercent: -100
                    }, {
                        duration: 1,
                        ease: "expo.inOut",
                        yPercent: 0
                    }, "start").fromTo(T, {
                        yPercent: 100
                    }, {
                        duration: 1,
                        ease: "expo.inOut",
                        yPercent: 0
                    }, "start").fromTo([i, g, L], {
                        autoAlpha: 0,
                        y: 60
                    }, {
                        autoAlpha: 1,
                        duration: .7,
                        ease: "power3.out",
                        stagger: .05,
                        y: 0
                    }, "start+=0.3"),
                    f.play()
                },
                Se = (t, v) => {
                    if (!(R.value.width >= q.Small)) {
                        S.value = !1,
                        v();
                        return
                    }
                    if (S.value)
                        return;
                    S.value = !0,
                    _.start();
                    const T = t.querySelector(".nav-sub-items-container"),
                        i = t.querySelector(".nav-sub-items-inner"),
                        g = t.querySelector(".nav-sub-items-title"),
                        L = t.querySelector(".nav-sub-items-list-title"),
                        V = t.querySelectorAll(".nav-sub-items-list-item");
                    f = $.timeline({
                        paused: !0,
                        onComplete: () => {
                            S.value = !1,
                            v()
                        }
                    }),
                    f.addLabel("start").fromTo([[...V].reverse(), L, g], {
                        autoAlpha: 1,
                        y: 0
                    }, {
                        autoAlpha: 0,
                        duration: .7,
                        ease: "power2.in",
                        stagger: .05,
                        y: 50
                    }, "start").fromTo(T, {
                        yPercent: 0
                    }, {
                        yPercent: -100,
                        ...Y
                    }, "start+=0.1").fromTo(i, {
                        yPercent: 0
                    }, {
                        yPercent: 100,
                        ...Y
                    }, "start+=0.1").fromTo(y.value, {
                        autoAlpha: 0
                    }, {
                        autoAlpha: 1,
                        duration: 1
                    }, "start+=0.6"),
                    f.play()
                },
                ee = () => {
                    const t = document.querySelector(".footer");
                    if (M.value && t) {
                        const {top: v} = t.getBoundingClientRect();
                        v <= 200 ? B.value && (B.value = !1) : !B.value && window.scrollY > R.value.height && (B.value = !0)
                    }
                },
                te = new Map([["A¹ Sense", "square"], ["B¹ Eye", "dot"], ["A¹ Neuro", "circle"]]);
            return (t, v) => {
                const C = Te,
                    T = Le;
                return u(), h("div", {
                    ref_key: "elRef",
                    ref: M,
                    class: de(["menu", l(a).menuOpen && "open", l(p) && "sub-menu-open", l(p) === "Search" && "search-open", !l(B) && "hidden", l(x)])
                }, [w(C, {
                    "aria-label": "Go to homepage",
                    class: "logo",
                    to: "/"
                }, {
                    default: E(() => [w(re, {
                        name: "logoTransition",
                        css: !1,
                        onEnter: we,
                        onLeave: ke
                    }, {
                        default: E(() => [l(p) ? l(p) === "Search" ? (u(), h("span", Rt, [w(l(gt), {
                            class: "icon"
                        })])) : (u(), h("span", At, [l(p) === "Neural" ? (u(), N(l(ht), {
                            key: 0,
                            class: "icon"
                        })) : (u(), N(l(Lt), {
                            key: 1,
                            class: "icon"
                        }))])) : (u(), h("span", $t, [w(l(Ue), {
                            class: "icon"
                        })]))]),
                        _: 1
                    })]),
                    _: 1
                }), e("nav", {
                    ref_key: "navRef",
                    ref: H,
                    class: de(["nav", l(r).length > 0 && "has-results"])
                }, [e("div", {
                    ref_key: "navContainerRef",
                    ref: o,
                    class: "nav-container"
                }, [e("div", {
                    ref_key: "navInnerRef",
                    ref: A,
                    class: "nav-inner"
                }, [e("div", {
                    ref_key: "navTitleRef",
                    ref: b,
                    class: "nav-title"
                }, "Navigation", 512), e("ul", {
                    ref_key: "navListRef",
                    ref: y,
                    class: "nav-list"
                }, [(u(!0), h(I, null, Z(t.links, (i, g) => (u(), h("li", {
                    key: `nav-list-item-${i._uid}`,
                    class: "nav-list-item"
                }, [e("span", Pt, "0" + D(g + 1), 1), i.items ? (u(), h("button", {
                    key: 1,
                    class: "nav-list-item-link",
                    type: "button",
                    onClick: L => me(i.label)
                }, D(i.label), 9, Dt)) : (u(), N(C, {
                    key: 0,
                    to: i.href,
                    class: "nav-list-item-link"
                }, {
                    default: E(() => [ie(D(i.label), 1)]),
                    _: 2
                }, 1032, ["to"]))]))), 128)), e("li", Mt, [e("span", Ot, "0" + D(t.links.length + 1), 1), e("button", {
                    class: "nav-list-item-link",
                    type: "button",
                    onClick: _e
                }, "Search")])], 512), w(re, {
                    name: "subMenuTransition",
                    css: !1,
                    onEnter: Ce,
                    onLeave: Se
                }, {
                    default: E(() => [(u(!0), h(I, null, Z(t.links, i => G((u(), h("div", {
                        key: `nav-sub-items-${i._uid}`,
                        class: "nav-sub-items"
                    }, [e("div", Bt, [e("div", Et, [e("div", Ht, [ie(D(i.label) + " ", 1), e("button", {
                        class: "nav-sub-items-back",
                        type: "button",
                        onClick: z
                    }, [w(l(he), {
                        class: "close"
                    }), w(l(pe), {
                        class: "chevron"
                    })])]), e("div", qt, [Vt, e("ul", Nt, [(u(!0), h(I, null, Z(i.items, g => (u(), h("li", {
                        key: g._uid,
                        class: "nav-sub-items-list-item"
                    }, [w(C, {
                        class: "nav-sub-items-list-link",
                        to: g.href
                    }, {
                        default: E(() => [l(te).get(g.label) ? (u(), N(T, {
                            key: 0,
                            class: "nav-sub-items-list-link-product-icon",
                            small: !0,
                            icon: l(te).get(g.label)
                        }, null, 8, ["icon"])) : ue("", !0), e("span", null, D(g.label), 1), e("span", It, [w(l(fe))])]),
                        _: 2
                    }, 1032, ["to"])]))), 128))])])])])])), [[ce, l(p) === i.label]])), 128))]),
                    _: 1
                }), G(e("div", Zt, [e("div", {
                    ref_key: "searchRef",
                    ref: F,
                    class: "nav-sub-items-search"
                }, [e("div", Ft, [e("div", zt, [G(e("input", {
                    ref_key: "inputRef",
                    ref: d,
                    "onUpdate:modelValue": v[0] || (v[0] = i => Ie(k) ? k.value = i : null),
                    class: "nav-sub-items-input",
                    placeholder: "Search Here",
                    type: "text",
                    onInput: ge
                }, null, 544), [[Ze, l(k)]]), e("button", {
                    class: "nav-sub-items-back",
                    type: "button",
                    onClick: z
                }, [w(l(he), {
                    class: "close"
                }), w(l(pe), {
                    class: "chevron"
                })])])])], 512), l(r).length > 0 ? (u(), h("div", jt, [e("div", Gt, "Results (" + D(l(r).length) + ")", 1), e("ul", Kt, [(u(!0), h(I, null, Z(l(r), i => (u(), h("li", {
                    key: i._uid,
                    class: "nav-sub-items-list-item"
                }, [w(C, {
                    class: "nav-sub-items-list-link",
                    to: i.href
                }, {
                    default: E(() => [e("span", {
                        class: "nav-sub-items-list-link-result",
                        innerHTML: i.label
                    }, null, 8, Ut), e("span", Qt, [w(l(fe))])]),
                    _: 2
                }, 1032, ["to"])]))), 128))])])) : ue("", !0)], 512), [[ce, l(p) === "Search"]])], 512)], 512)], 2), e("button", {
                    "aria-label": "Toggle menu",
                    class: "burger",
                    type: "button",
                    onClick: J
                }, Wt), e("button", {
                    "aria-label": "Close menu",
                    class: "background",
                    onClick: j
                })], 2)
            }
        }
    }),
    os = Ke(Xt, [["__scopeId", "data-v-4b5b0323"]]);
export { os as default };
