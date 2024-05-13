import {
    a0 as W,
    a1 as F,
    a2 as $,
    a3 as M,
    a4 as j,
    a5 as B,
    a6 as E,
    a7 as L,
    u as P,
    a8 as y,
    i as q,
    r as H,
    m as U,
    a9 as z,
    e as D,
    x as T,
    Q as C
} from "./entry.BWB0ivIq.js";
import {
    u as Q
} from "./vue.f36acd1f.BYFxkCGD.js";
async function G(e, t) {
    return await J(t).catch(i => (console.error("Failed to get image meta for " + t, i + ""), {
        width: 0,
        height: 0,
        ratio: 0
    }))
}
async function J(e) {
    if (typeof Image > "u") throw new TypeError("Image not supported");
    return new Promise((t, s) => {
        const i = new Image;
        i.onload = () => {
            const r = {
                width: i.width,
                height: i.height,
                ratio: i.width / i.height
            };
            t(r)
        }, i.onerror = r => s(r), i.src = e
    })
}

function V(e = "") {
    return e.split(/[?#]/).shift().split("/").pop().split(".").pop()
}

function w(e = "") {
    if (typeof e == "number") return e;
    if (typeof e == "string" && e.replace("px", "").match(/^\d+$/g)) return parseInt(e, 10)
}

function K(e = "") {
    if (e === void 0 || !e.length) return [];
    const t = new Set;
    for (const s of e.split(" ")) {
        const i = parseInt(s.replace("x", ""));
        i && t.add(i)
    }
    return Array.from(t)
}

function X(e) {
    if (e.length === 0) throw new Error("`densities` must not be empty, configure to `1` to render regular size only (DPR 1.0)")
}

function Y(e) {
    const t = {};
    if (typeof e == "string")
        for (const s of e.split(/[\s,]+/).filter(i => i)) {
            const i = s.split(":");
            i.length !== 2 ? t["1px"] = i[0].trim() : t[i[0].trim()] = i[1].trim()
        } else Object.assign(t, e);
    return t
}

function Z(e) {
    const t = {
            options: e
        },
        s = (r, o = {}) => O(t, r, o),
        i = (r, o = {}, n = {}) => s(r, {
            ...n,
            modifiers: j(o, n.modifiers || {})
        }).url;
    for (const r in e.presets) i[r] = (o, n, a) => i(o, n, {
        ...e.presets[r],
        ...a
    });
    return i.options = e, i.getImage = s, i.getMeta = (r, o) => ee(t, r, o), i.getSizes = (r, o) => se(t, r, o), t.$img = i, i
}
async function ee(e, t, s) {
    const i = O(e, t, {
        ...s
    });
    return typeof i.getMeta == "function" ? await i.getMeta() : await G(e, i.url)
}

function O(e, t, s) {
    var l, u;
    if (typeof t != "string" || t === "") throw new TypeError(`input must be a string (received ${typeof t}: ${JSON.stringify(t)})`);
    if (t.startsWith("data:")) return {
        url: t
    };
    const {
        provider: i,
        defaults: r
    } = te(e, s.provider || e.options.provider), o = ie(e, s.preset);
    if (t = W(t) ? t : F(t), !i.supportsAlias)
        for (const g in e.options.alias) t.startsWith(g) && (t = $(e.options.alias[g], t.substr(g.length)));
    if (i.validateDomains && W(t)) {
        const g = M(t).host;
        if (!e.options.domains.find(h => h === g)) return {
            url: t
        }
    }
    const n = j(s, o, r);
    n.modifiers = {
        ...n.modifiers
    };
    const a = n.modifiers.format;
    (l = n.modifiers) != null && l.width && (n.modifiers.width = w(n.modifiers.width)), (u = n.modifiers) != null && u.height && (n.modifiers.height = w(n.modifiers.height));
    const c = i.getImage(t, n, e);
    return c.format = c.format || a || "", c
}

function te(e, t) {
    const s = e.options.providers[t];
    if (!s) throw new Error("Unknown provider: " + t);
    return s
}

function ie(e, t) {
    if (!t) return {};
    if (!e.options.presets[t]) throw new Error("Unknown preset: " + t);
    return e.options.presets[t]
}

function se(e, t, s) {
    var b, d, x, p, _;
    const i = w((b = s.modifiers) == null ? void 0 : b.width),
        r = w((d = s.modifiers) == null ? void 0 : d.height),
        o = Y(s.sizes),
        n = (x = s.densities) != null && x.trim() ? K(s.densities.trim()) : e.options.densities;
    X(n);
    const a = i && r ? r / i : 0,
        c = [],
        l = [];
    if (Object.keys(o).length >= 1) {
        for (const f in o) {
            const m = k(f, String(o[f]), r, a, e);
            if (m !== void 0) {
                c.push({
                    size: m.size,
                    screenMaxWidth: m.screenMaxWidth,
                    media: `(max-width: ${m.screenMaxWidth}px)`
                });
                for (const v of n) l.push({
                    width: m._cWidth * v,
                    src: I(e, t, s, m, v)
                })
            }
        }
        re(c)
    } else
        for (const f of n) {
            const m = Object.keys(o)[0];
            let v = k(m, String(o[m]), r, a, e);
            v === void 0 && (v = {
                size: "",
                screenMaxWidth: 0,
                _cWidth: (p = s.modifiers) == null ? void 0 : p.width,
                _cHeight: (_ = s.modifiers) == null ? void 0 : _.height
            }), l.push({
                width: f,
                src: I(e, t, s, v, f)
            })
        }
    ne(l);
    const u = l[l.length - 1],
        g = c.length ? c.map(f => `${f.media?f.media+" ":""}${f.size}`).join(", ") : void 0,
        h = g ? "w" : "x",
        S = l.map(f => `${f.src} ${f.width}${h}`).join(", ");
    return {
        sizes: g,
        srcset: S,
        src: u == null ? void 0 : u.src
    }
}

function k(e, t, s, i, r) {
    const o = r.options.screens && r.options.screens[e] || parseInt(e),
        n = t.endsWith("vw");
    if (!n && /^\d+$/.test(t) && (t = t + "px"), !n && !t.endsWith("px")) return;
    let a = parseInt(t);
    if (!o || !a) return;
    n && (a = Math.round(a / 100 * o));
    const c = i ? Math.round(a * i) : s;
    return {
        size: t,
        screenMaxWidth: o,
        _cWidth: a,
        _cHeight: c
    }
}

function I(e, t, s, i, r) {
    return e.$img(t, {
        ...s.modifiers,
        width: i._cWidth ? i._cWidth * r : void 0,
        height: i._cHeight ? i._cHeight * r : void 0
    }, s)
}

function re(e) {
    var s;
    e.sort((i, r) => i.screenMaxWidth - r.screenMaxWidth);
    let t = null;
    for (let i = e.length - 1; i >= 0; i--) {
        const r = e[i];
        r.media === t && e.splice(i, 1), t = r.media
    }
    for (let i = 0; i < e.length; i++) e[i].media = ((s = e[i + 1]) == null ? void 0 : s.media) || ""
}

function ne(e) {
    e.sort((s, i) => s.width - i.width);
    let t = null;
    for (let s = e.length - 1; s >= 0; s--) {
        const i = e[s];
        i.width === t && e.splice(s, 1), t = i.width
    }
}
const oe = "http://127.0.0.1:5001",
    ae = (e, {
        modifiers: t = {},
        baseURL: s = oe
    } = {}) => {
        const {
            fit: i,
            smart: r,
            width: o = "0",
            height: n = "0",
            filters: a = {},
            format: c,
            quality: l
        } = t, u = e.endsWith(".svg"), g = !u && (o !== "0" || n !== "0");
        u || (c && (a.format = c + ""), l && (a.quality = l + ""));
        const h = Object.entries(a || {}).map(p => `${p[0]}(${p[1]})`).join(":"),
            S = $(i ? `fit-${i}` : "", g ? `${o}x${n}` : "", r ? "smart" : "", h ? "filters:" + h : ""),
            {
                pathname: b
            } = M(e);
        return {
            url: B($(b), s)
        }
    },
    de = Object.freeze(Object.defineProperty({
        __proto__: null,
        getImage: ae
    }, Symbol.toStringTag, {
        value: "Module"
    })),
    ce = (e, {
        modifiers: t,
        baseURL: s = "/_vercel/image"
    } = {}, i) => {
        const r = Object.values(i.options.screens || {}).sort((a, c) => a - c),
            o = r[r.length - 1];
        let n = Number((t == null ? void 0 : t.width) || 0);
        return n ? r.includes(n) || (n = r.find(a => a > n) || o) : n = o, {
            url: s + "?" + E({
                url: e,
                w: String(n),
                q: String((t == null ? void 0 : t.quality) || "100")
            })
        }
    },
    le = !0,
    ue = Object.freeze(Object.defineProperty({
        __proto__: null,
        getImage: ce,
        validateDomains: le
    }, Symbol.toStringTag, {
        value: "Module"
    })),
    R = {
        screens: {
            xs: 375,
            sm: 834,
            md: 1024,
            lg: 1280,
            xl: 1440,
            xxl: 1680,
            "2xl": 1536,
            xxxl: 1920
        },
        presets: {},
        provider: "vercel",
        domains: [],
        alias: {},
        densities: [1, 2],
        format: ["webp"]
    };
R.providers = {
    storyblok: {
        provider: de,
        defaults: {
            baseURL: "http://127.0.0.1:5501"
        }
    },
    vercel: {
        provider: ue,
        defaults: {}
    }
};
const A = () => {
        const e = L(),
            t = P();
        return t.$img || t._img || (t._img = Z({
            ...R,
            nuxt: {
                baseURL: e.app.baseURL
            }
        }))
    },
    N = {
        src: {
            type: String,
            required: !0
        },
        format: {
            type: String,
            default: void 0
        },
        quality: {
            type: [Number, String],
            default: void 0
        },
        background: {
            type: String,
            default: void 0
        },
        fit: {
            type: String,
            default: void 0
        },
        modifiers: {
            type: Object,
            default: void 0
        },
        preset: {
            type: String,
            default: void 0
        },
        provider: {
            type: String,
            default: void 0
        },
        sizes: {
            type: [Object, String],
            default: void 0
        },
        densities: {
            type: String,
            default: void 0
        },
        preload: {
            type: Boolean,
            default: void 0
        },
        width: {
            type: [String, Number],
            default: void 0
        },
        height: {
            type: [String, Number],
            default: void 0
        },
        alt: {
            type: String,
            default: void 0
        },
        referrerpolicy: {
            type: String,
            default: void 0
        },
        usemap: {
            type: String,
            default: void 0
        },
        longdesc: {
            type: String,
            default: void 0
        },
        ismap: {
            type: Boolean,
            default: void 0
        },
        loading: {
            type: String,
            default: void 0,
            validator: e => ["lazy", "eager"].includes(e)
        },
        crossorigin: {
            type: [Boolean, String],
            default: void 0,
            validator: e => ["anonymous", "use-credentials", "", !0, !1].includes(e)
        },
        decoding: {
            type: String,
            default: void 0,
            validator: e => ["async", "auto", "sync"].includes(e)
        },
        nonce: {
            type: [String],
            default: void 0
        }
    },
    fe = e => {
        const t = y(() => ({
                provider: e.provider,
                preset: e.preset
            })),
            s = y(() => ({
                width: w(e.width),
                height: w(e.height),
                alt: e.alt,
                referrerpolicy: e.referrerpolicy,
                usemap: e.usemap,
                longdesc: e.longdesc,
                ismap: e.ismap,
                crossorigin: e.crossorigin === !0 ? "anonymous" : e.crossorigin || void 0,
                loading: e.loading,
                decoding: e.decoding,
                nonce: e.nonce
            })),
            i = A(),
            r = y(() => ({
                ...e.modifiers,
                width: w(e.width),
                height: w(e.height),
                format: e.format,
                quality: e.quality || i.options.quality,
                background: e.background,
                fit: e.fit
            }));
        return {
            options: t,
            attrs: s,
            modifiers: r
        }
    },
    ge = {
        ...N,
        legacyFormat: {
            type: String,
            default: null
        },
        imgAttrs: {
            type: Object,
            default: null
        }
    },
    me = q({
        name: "NuxtPicture",
        props: ge,
        emits: ["load"],
        setup: (e, t) => {
            var S, b;
            const s = A(),
                i = fe(e),
                r = y(() => V(e.src)),
                o = y(() => ["png", "webp", "gif", "svg"].includes(r.value)),
                n = y(() => e.legacyFormat ? e.legacyFormat : o.value ? "png" : "jpeg"),
                a = y(() => {
                    var x, p;
                    const d = ((x = e.format) == null ? void 0 : x.split(",")) || (r.value === "svg" ? ["svg"] : (p = s.options.format) != null && p.length ? [...s.options.format] : ["webp"]);
                    return d[0] === "svg" ? [{
                        src: e.src
                    }] : (d.includes(n.value) && d.splice(d.indexOf(n.value), 1), d.push(n.value), d.map(_ => {
                        const {
                            srcset: f,
                            sizes: m,
                            src: v
                        } = s.getSizes(e.src, {
                            ...i.options.value,
                            sizes: e.sizes || s.options.screens,
                            densities: e.densities,
                            modifiers: {
                                ...i.modifiers.value,
                                format: _
                            }
                        });
                        return {
                            src: v,
                            type: `image/${_}`,
                            sizes: m,
                            srcset: f
                        }
                    }))
                }),
                c = y(() => a.value.length - 1);
            if (e.preload) {
                const d = {
                    rel: "preload",
                    as: "image",
                    imagesrcset: a.value[0].srcset,
                    nonce: e.nonce
                };
                (b = (S = a.value) == null ? void 0 : S[0]) != null && b.sizes && (d.imagesizes = a.value[0].sizes), Q({
                    link: [d]
                })
            }
            const l = {
                ...e.imgAttrs,
                "data-nuxt-pic": ""
            };
            for (const d in t.attrs) d in N && !(d in l) && (l[d] = t.attrs[d]);
            const u = H(),
                h = P().isHydrating;
            return U(() => {
                u.value && (u.value.complete && h && !u.value.getAttribute("data-error") && t.emit("load", new Event("load")), u.value.onload = d => {
                    t.emit("load", d)
                })
            }), () => z("picture", null, [...a.value.slice(0, -1).map(d => z("source", {
                type: d.type,
                sizes: d.sizes,
                srcset: d.srcset
            })), z("img", {
                ref: u,
                ...i.attrs.value,
                ...l,
                src: a.value[c.value].src,
                sizes: a.value[c.value].sizes,
                srcset: a.value[c.value].srcset
            })])
        }
    }),
    ve = q({
        __name: "Image",
        props: {
            _uid: {},
            alt: {},
            height: {},
            loading: {
                default: "lazy"
            },
            preload: {
                type: Boolean,
                default: !1
            },
            src: {},
            quality: {
                default: 70
            },
            sizes: {
                default: "xs:788px sm:986px md:1234px lg:1388px xl:1620px xxl:2000px"
            },
            tag: {},
            type: {},
            width: {}
        },
        setup(e) {
            const t = e;
            return (s, i) => {
                const r = me;
                return D(), T(r, C({
                    format: "webp",
                    provider: "storyblok"
                }, t), null, 16)
            }
        }
    });
export {
    ve as _
};