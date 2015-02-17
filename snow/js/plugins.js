function css_browser_selector(t) {
    var e = t.toLowerCase(),
        i = function(t) {
            return e.indexOf(t) > -1
        },
        n = "gecko",
        r = "webkit",
        o = "safari",
        s = "opera",
        a = "mobile",
        h = document.documentElement,
        l = [!/opera|webtv/i.test(e) && /msie\s(\d)/.test(e) ? "ie ie" + RegExp.$1 : i("firefox/2") ? n + " ff2" : i("firefox/3.5") ? n + " ff3 ff3_5" : i("firefox/3.6") ? n + " ff3 ff3_6" : i("firefox/3") ? n + " ff3" : i("gecko/") ? n : i("opera") ? s + (/version\/(\d+)/.test(e) ? " " + s + RegExp.$1 : /opera(\s|\/)(\d+)/.test(e) ? " " + s + RegExp.$2 : "") : i("konqueror") ? "konqueror" : i("blackberry") ? a + " blackberry" : i("android") ? a + " android" : i("chrome") ? r + " chrome" : i("iron") ? r + " iron" : i("applewebkit/") ? r + " " + o + (/version\/(\d+)/.test(e) ? " " + o + RegExp.$1 : "") : i("mozilla/") ? n : "", i("j2me") ? a + " j2me" : i("iphone") ? a + " iphone" : i("ipod") ? a + " ipod" : i("ipad") ? a + " ipad" : i("mac") ? "mac" : i("darwin") ? "mac" : i("webtv") ? "webtv" : i("win") ? "win" + (i("windows nt 6.0") ? " vista" : "") : i("freebsd") ? "freebsd" : i("x11") || i("linux") ? "linux" : "", "js"];
    return c = l.join(" "), h.className += " " + c, c
}

function randomRange(t, e) {
    return Math.random() * (e - t) + t
}
jQuery.easing.jswing = jQuery.easing.swing, jQuery.extend(jQuery.easing, {
        def: "easeOutQuad",
        swing: function(t, e, i, n, r) {
            return jQuery.easing[jQuery.easing.def](t, e, i, n, r)
        },
        easeInQuad: function(t, e, i, n, r) {
            return n * (e /= r) * e + i
        },
        easeOutQuad: function(t, e, i, n, r) {
            return -n * (e /= r) * (e - 2) + i
        },
        easeInOutQuad: function(t, e, i, n, r) {
            return (e /= r / 2) < 1 ? n / 2 * e * e + i : -n / 2 * (--e * (e - 2) - 1) + i
        },
        easeInCubic: function(t, e, i, n, r) {
            return n * (e /= r) * e * e + i
        },
        easeOutCubic: function(t, e, i, n, r) {
            return n * ((e = e / r - 1) * e * e + 1) + i
        },
        easeInOutCubic: function(t, e, i, n, r) {
            return (e /= r / 2) < 1 ? n / 2 * e * e * e + i : n / 2 * ((e -= 2) * e * e + 2) + i
        },
        easeInQuart: function(t, e, i, n, r) {
            return n * (e /= r) * e * e * e + i
        },
        easeOutQuart: function(t, e, i, n, r) {
            return -n * ((e = e / r - 1) * e * e * e - 1) + i
        },
        easeInOutQuart: function(t, e, i, n, r) {
            return (e /= r / 2) < 1 ? n / 2 * e * e * e * e + i : -n / 2 * ((e -= 2) * e * e * e - 2) + i
        },
        easeInQuint: function(t, e, i, n, r) {
            return n * (e /= r) * e * e * e * e + i
        },
        easeOutQuint: function(t, e, i, n, r) {
            return n * ((e = e / r - 1) * e * e * e * e + 1) + i
        },
        easeInOutQuint: function(t, e, i, n, r) {
            return (e /= r / 2) < 1 ? n / 2 * e * e * e * e * e + i : n / 2 * ((e -= 2) * e * e * e * e + 2) + i
        },
        easeInSine: function(t, e, i, n, r) {
            return -n * Math.cos(e / r * (Math.PI / 2)) + n + i
        },
        easeOutSine: function(t, e, i, n, r) {
            return n * Math.sin(e / r * (Math.PI / 2)) + i
        },
        easeInOutSine: function(t, e, i, n, r) {
            return -n / 2 * (Math.cos(Math.PI * e / r) - 1) + i
        },
        easeInExpo: function(t, e, i, n, r) {
            return 0 == e ? i : n * Math.pow(2, 10 * (e / r - 1)) + i
        },
        easeOutExpo: function(t, e, i, n, r) {
            return e == r ? i + n : n * (-Math.pow(2, -10 * e / r) + 1) + i
        },
        easeInOutExpo: function(t, e, i, n, r) {
            return 0 == e ? i : e == r ? i + n : (e /= r / 2) < 1 ? n / 2 * Math.pow(2, 10 * (e - 1)) + i : n / 2 * (-Math.pow(2, -10 * --e) + 2) + i
        },
        easeInCirc: function(t, e, i, n, r) {
            return -n * (Math.sqrt(1 - (e /= r) * e) - 1) + i
        },
        easeOutCirc: function(t, e, i, n, r) {
            return n * Math.sqrt(1 - (e = e / r - 1) * e) + i
        },
        easeInOutCirc: function(t, e, i, n, r) {
            return (e /= r / 2) < 1 ? -n / 2 * (Math.sqrt(1 - e * e) - 1) + i : n / 2 * (Math.sqrt(1 - (e -= 2) * e) + 1) + i
        },
        easeInElastic: function(t, e, i, n, r) {
            var o = 1.70158,
                s = 0,
                a = n;
            if (0 == e) return i;
            if (1 == (e /= r)) return i + n;
            if (s || (s = .3 * r), a < Math.abs(n)) {
                a = n;
                var o = s / 4
            } else var o = s / (2 * Math.PI) * Math.asin(n / a);
            return -(a * Math.pow(2, 10 * (e -= 1)) * Math.sin(2 * (e * r - o) * Math.PI / s)) + i
        },
        easeOutElastic: function(t, e, i, n, r) {
            var o = 1.70158,
                s = 0,
                a = n;
            if (0 == e) return i;
            if (1 == (e /= r)) return i + n;
            if (s || (s = .3 * r), a < Math.abs(n)) {
                a = n;
                var o = s / 4
            } else var o = s / (2 * Math.PI) * Math.asin(n / a);
            return a * Math.pow(2, -10 * e) * Math.sin(2 * (e * r - o) * Math.PI / s) + n + i
        },
        easeInOutElastic: function(t, e, i, n, r) {
            var o = 1.70158,
                s = 0,
                a = n;
            if (0 == e) return i;
            if (2 == (e /= r / 2)) return i + n;
            if (s || (s = .3 * r * 1.5), a < Math.abs(n)) {
                a = n;
                var o = s / 4
            } else var o = s / (2 * Math.PI) * Math.asin(n / a);
            return 1 > e ? -.5 * a * Math.pow(2, 10 * (e -= 1)) * Math.sin(2 * (e * r - o) * Math.PI / s) + i : a * Math.pow(2, -10 * (e -= 1)) * Math.sin(2 * (e * r - o) * Math.PI / s) * .5 + n + i
        },
        easeInBack: function(t, e, i, n, r, o) {
            return void 0 == o && (o = 1.70158), n * (e /= r) * e * ((o + 1) * e - o) + i
        },
        easeOutBack: function(t, e, i, n, r, o) {
            return void 0 == o && (o = 1.70158), n * ((e = e / r - 1) * e * ((o + 1) * e + o) + 1) + i
        },
        easeInOutBack: function(t, e, i, n, r, o) {
            return void 0 == o && (o = 1.70158), (e /= r / 2) < 1 ? n / 2 * e * e * (((o *= 1.525) + 1) * e - o) + i : n / 2 * ((e -= 2) * e * (((o *= 1.525) + 1) * e + o) + 2) + i
        },
        easeInBounce: function(t, e, i, n, r) {
            return n - jQuery.easing.easeOutBounce(t, r - e, 0, n, r) + i
        },
        easeOutBounce: function(t, e, i, n, r) {
            return (e /= r) < 1 / 2.75 ? 7.5625 * n * e * e + i : 2 / 2.75 > e ? n * (7.5625 * (e -= 1.5 / 2.75) * e + .75) + i : 2.5 / 2.75 > e ? n * (7.5625 * (e -= 2.25 / 2.75) * e + .9375) + i : n * (7.5625 * (e -= 2.625 / 2.75) * e + .984375) + i
        },
        easeInOutBounce: function(t, e, i, n, r) {
            return r / 2 > e ? .5 * jQuery.easing.easeInBounce(t, 2 * e, 0, n, r) + i : .5 * jQuery.easing.easeOutBounce(t, 2 * e - r, 0, n, r) + .5 * n + i
        }
    }),
    function(t) {
        function e() {
            var t = document.createElement("input"),
                e = "onpaste";
            return t.setAttribute(e, ""), "function" == typeof t[e] ? "paste" : "input"
        }
        var i, n = e() + ".mask",
            r = navigator.userAgent,
            o = /iphone/i.test(r),
            s = /android/i.test(r);
        t.mask = {
            definitions: {
                9: "[0-9]",
                a: "[A-Za-z]",
                "*": "[A-Za-z0-9]"
            },
            dataName: "rawMaskFn",
            placeholder: "_"
        }, t.fn.extend({
            caret: function(t, e) {
                var i;
                return 0 === this.length || this.is(":hidden") ? void 0 : "number" == typeof t ? (e = "number" == typeof e ? e : t, this.each(function() {
                    this.setSelectionRange ? this.setSelectionRange(t, e) : this.createTextRange && (i = this.createTextRange(), i.collapse(!0), i.moveEnd("character", e), i.moveStart("character", t), i.select())
                })) : (this[0].setSelectionRange ? (t = this[0].selectionStart, e = this[0].selectionEnd) : document.selection && document.selection.createRange && (i = document.selection.createRange(), t = 0 - i.duplicate().moveStart("character", -1e5), e = t + i.text.length), {
                    begin: t,
                    end: e
                })
            },
            unmask: function() {
                return this.trigger("unmask")
            },
            mask: function(e, r) {
                var a, h, c, l, u, p;
                return !e && this.length > 0 ? (a = t(this[0]), a.data(t.mask.dataName)()) : (r = t.extend({
                    placeholder: t.mask.placeholder,
                    completed: null
                }, r), h = t.mask.definitions, c = [], l = p = e.length, u = null, t.each(e.split(""), function(t, e) {
                    "?" == e ? (p--, l = t) : h[e] ? (c.push(RegExp(h[e])), null === u && (u = c.length - 1)) : c.push(null)
                }), this.trigger("unmask").each(function() {
                    function a(t) {
                        for (; p > ++t && !c[t];);
                        return t
                    }

                    function d(t) {
                        for (; --t >= 0 && !c[t];);
                        return t
                    }

                    function m(t, e) {
                        var i, n;
                        if (!(0 > t)) {
                            for (i = t, n = a(e); p > i; i++)
                                if (c[i]) {
                                    if (!(p > n && c[i].test(T[n]))) break;
                                    T[i] = T[n], T[n] = r.placeholder, n = a(n)
                                }
                            R(), x.caret(Math.max(u, t))
                        }
                    }

                    function f(t) {
                        var e, i, n, o;
                        for (e = t, i = r.placeholder; p > e; e++)
                            if (c[e]) {
                                if (n = a(e), o = T[e], T[e] = i, !(p > n && c[n].test(o))) break;
                                i = o
                            }
                    }

                    function g(t) {
                        var e, i, n, r = t.which;
                        8 === r || 46 === r || o && 127 === r ? (e = x.caret(), i = e.begin, n = e.end, 0 === n - i && (i = 46 !== r ? d(i) : n = a(i - 1), n = 46 === r ? a(n) : n), v(i, n), m(i, n - 1), t.preventDefault()) : 27 == r && (x.val(b), x.caret(0, y()), t.preventDefault())
                    }

                    function E(e) {
                        var i, n, o, h = e.which,
                            l = x.caret();
                        e.ctrlKey || e.altKey || e.metaKey || 32 > h || h && (0 !== l.end - l.begin && (v(l.begin, l.end), m(l.begin, l.end - 1)), i = a(l.begin - 1), p > i && (n = String.fromCharCode(h), c[i].test(n) && (f(i), T[i] = n, R(), o = a(i), s ? setTimeout(t.proxy(t.fn.caret, x, o), 0) : x.caret(o), r.completed && o >= p && r.completed.call(x))), e.preventDefault())
                    }

                    function v(t, e) {
                        var i;
                        for (i = t; e > i && p > i; i++) c[i] && (T[i] = r.placeholder)
                    }

                    function R() {
                        x.val(T.join(""))
                    }

                    function y(t) {
                        var e, i, n = x.val(),
                            o = -1;
                        for (e = 0, pos = 0; p > e; e++)
                            if (c[e]) {
                                for (T[e] = r.placeholder; pos++ < n.length;)
                                    if (i = n.charAt(pos - 1), c[e].test(i)) {
                                        T[e] = i, o = e;
                                        break
                                    }
                                if (pos > n.length) break
                            } else T[e] === n.charAt(pos) && e !== l && (pos++, o = e);
                        return t ? R() : l > o + 1 ? (x.val(""), v(0, p)) : (R(), x.val(x.val().substring(0, o + 1))), l ? e : u
                    }
                    var x = t(this),
                        T = t.map(e.split(""), function(t) {
                            return "?" != t ? h[t] ? r.placeholder : t : void 0
                        }),
                        b = x.val();
                    x.data(t.mask.dataName, function() {
                        return t.map(T, function(t, e) {
                            return c[e] && t != r.placeholder ? t : null
                        }).join("")
                    }), x.attr("readonly") || x.one("unmask", function() {
                        x.unbind(".mask").removeData(t.mask.dataName)
                    }).bind("focus.mask", function() {
                        clearTimeout(i);
                        var t;
                        b = x.val(), t = y(), i = setTimeout(function() {
                            R(), t == e.length ? x.caret(0, t) : x.caret(t)
                        }, 10)
                    }).bind("blur.mask", function() {
                        y(), x.val() != b && x.change()
                    }).bind("keydown.mask", g).bind("keypress.mask", E).bind(n, function() {
                        setTimeout(function() {
                            var t = y(!0);
                            x.caret(t), r.completed && t == x.val().length && r.completed.call(x)
                        }, 0)
                    }), y()
                }))
            }
        })
    }(jQuery),
    function(t) {
        t.extend(t.fn, {
            validate: function(e) {
                if (!this.length) return void(e && e.debug && window.console && console.warn("Nothing selected, can't validate, returning nothing."));
                var i = t.data(this[0], "validator");
                return i ? i : (this.attr("novalidate", "novalidate"), i = new t.validator(e, this[0]), t.data(this[0], "validator", i), i.settings.onsubmit && (this.validateDelegate(":submit", "click", function(e) {
                    i.settings.submitHandler && (i.submitButton = e.target), t(e.target).hasClass("cancel") && (i.cancelSubmit = !0), void 0 !== t(e.target).attr("formnovalidate") && (i.cancelSubmit = !0)
                }), this.submit(function(e) {
                    function n() {
                        var n;
                        return i.settings.submitHandler ? (i.submitButton && (n = t("<input type='hidden'/>").attr("name", i.submitButton.name).val(t(i.submitButton).val()).appendTo(i.currentForm)), i.settings.submitHandler.call(i, i.currentForm, e), i.submitButton && n.remove(), !1) : !0
                    }
                    return i.settings.debug && e.preventDefault(), i.cancelSubmit ? (i.cancelSubmit = !1, n()) : i.form() ? i.pendingRequest ? (i.formSubmitted = !0, !1) : n() : (i.focusInvalid(), !1)
                })), i)
            },
            valid: function() {
                if (t(this[0]).is("form")) return this.validate().form();
                var e = !0,
                    i = t(this[0].form).validate();
                return this.each(function() {
                    e = e && i.element(this)
                }), e
            },
            removeAttrs: function(e) {
                var i = {},
                    n = this;
                return t.each(e.split(/\s/), function(t, e) {
                    i[e] = n.attr(e), n.removeAttr(e)
                }), i
            },
            rules: function(e, i) {
                var n = this[0];
                if (e) {
                    var r = t.data(n.form, "validator").settings,
                        o = r.rules,
                        s = t.validator.staticRules(n);
                    switch (e) {
                        case "add":
                            t.extend(s, t.validator.normalizeRule(i)), delete s.messages, o[n.name] = s, i.messages && (r.messages[n.name] = t.extend(r.messages[n.name], i.messages));
                            break;
                        case "remove":
                            if (!i) return delete o[n.name], s;
                            var a = {};
                            return t.each(i.split(/\s/), function(t, e) {
                                a[e] = s[e], delete s[e]
                            }), a
                    }
                }
                var h = t.validator.normalizeRules(t.extend({}, t.validator.classRules(n), t.validator.attributeRules(n), t.validator.dataRules(n), t.validator.staticRules(n)), n);
                if (h.required) {
                    var c = h.required;
                    delete h.required, h = t.extend({
                        required: c
                    }, h)
                }
                return h
            }
        }), t.extend(t.expr[":"], {
            blank: function(e) {
                return !t.trim("" + t(e).val())
            },
            filled: function(e) {
                return !!t.trim("" + t(e).val())
            },
            unchecked: function(e) {
                return !t(e).prop("checked")
            }
        }), t.validator = function(e, i) {
            this.settings = t.extend(!0, {}, t.validator.defaults, e), this.currentForm = i, this.init()
        }, t.validator.format = function(e, i) {
            return 1 === arguments.length ? function() {
                var i = t.makeArray(arguments);
                return i.unshift(e), t.validator.format.apply(this, i)
            } : (arguments.length > 2 && i.constructor !== Array && (i = t.makeArray(arguments).slice(1)), i.constructor !== Array && (i = [i]), t.each(i, function(t, i) {
                e = e.replace(new RegExp("\\{" + t + "\\}", "g"), function() {
                    return i
                })
            }), e)
        }, t.extend(t.validator, {
            defaults: {
                messages: {},
                groups: {},
                rules: {},
                errorClass: "error",
                validClass: "valid",
                errorElement: "label",
                focusInvalid: !0,
                errorContainer: t([]),
                errorLabelContainer: t([]),
                onsubmit: !0,
                ignore: ":hidden",
                ignoreTitle: !1,
                onfocusin: function(t) {
                    this.lastActive = t, this.settings.focusCleanup && !this.blockFocusCleanup && (this.settings.unhighlight && this.settings.unhighlight.call(this, t, this.settings.errorClass, this.settings.validClass), this.addWrapper(this.errorsFor(t)).hide())
                },
                onfocusout: function(t) {
                    this.checkable(t) || !(t.name in this.submitted) && this.optional(t) || this.element(t)
                },
                onkeyup: function(t, e) {
                    (9 !== e.which || "" !== this.elementValue(t)) && (t.name in this.submitted || t === this.lastElement) && this.element(t)
                },
                onclick: function(t) {
                    t.name in this.submitted ? this.element(t) : t.parentNode.name in this.submitted && this.element(t.parentNode)
                },
                highlight: function(e, i, n) {
                    "radio" === e.type ? this.findByName(e.name).addClass(i).removeClass(n) : t(e).addClass(i).removeClass(n)
                },
                unhighlight: function(e, i, n) {
                    "radio" === e.type ? this.findByName(e.name).removeClass(i).addClass(n) : t(e).removeClass(i).addClass(n)
                }
            },
            setDefaults: function(e) {
                t.extend(t.validator.defaults, e)
            },
            messages: {
                required: "This field is required.",
                remote: "Please fix this field.",
                email: "Please enter a valid email address.",
                url: "Please enter a valid URL.",
                date: "Please enter a valid date.",
                dateISO: "Please enter a valid date (ISO).",
                number: "Please enter a valid number.",
                digits: "Please enter only digits.",
                creditcard: "Please enter a valid credit card number.",
                equalTo: "Please enter the same value again.",
                maxlength: t.validator.format("Please enter no more than {0} characters."),
                minlength: t.validator.format("Please enter at least {0} characters."),
                rangelength: t.validator.format("Please enter a value between {0} and {1} characters long."),
                range: t.validator.format("Please enter a value between {0} and {1}."),
                max: t.validator.format("Please enter a value less than or equal to {0}."),
                min: t.validator.format("Please enter a value greater than or equal to {0}.")
            },
            autoCreateRanges: !1,
            prototype: {
                init: function() {
                    function e(e) {
                        var i = t.data(this[0].form, "validator"),
                            n = "on" + e.type.replace(/^validate/, "");
                        i.settings[n] && i.settings[n].call(i, this[0], e)
                    }
                    this.labelContainer = t(this.settings.errorLabelContainer), this.errorContext = this.labelContainer.length && this.labelContainer || t(this.currentForm), this.containers = t(this.settings.errorContainer).add(this.settings.errorLabelContainer), this.submitted = {}, this.valueCache = {}, this.pendingRequest = 0, this.pending = {}, this.invalid = {}, this.reset();
                    var i = this.groups = {};
                    t.each(this.settings.groups, function(e, n) {
                        "string" == typeof n && (n = n.split(/\s/)), t.each(n, function(t, n) {
                            i[n] = e
                        })
                    });
                    var n = this.settings.rules;
                    t.each(n, function(e, i) {
                        n[e] = t.validator.normalizeRule(i)
                    }), t(this.currentForm).validateDelegate(":text, [type='password'], [type='file'], select, textarea, [type='number'], [type='search'] ,[type='tel'], [type='url'], [type='email'], [type='datetime'], [type='date'], [type='month'], [type='week'], [type='time'], [type='datetime-local'], [type='range'], [type='color'] ", "focusin focusout keyup", e).validateDelegate("[type='radio'], [type='checkbox'], select, option", "click", e), this.settings.invalidHandler && t(this.currentForm).bind("invalid-form.validate", this.settings.invalidHandler)
                },
                form: function() {
                    return this.checkForm(), t.extend(this.submitted, this.errorMap), this.invalid = t.extend({}, this.errorMap), this.valid() || t(this.currentForm).triggerHandler("invalid-form", [this]), this.showErrors(), this.valid()
                },
                checkForm: function() {
                    this.prepareForm();
                    for (var t = 0, e = this.currentElements = this.elements(); e[t]; t++) this.check(e[t]);
                    return this.valid()
                },
                element: function(e) {
                    e = this.validationTargetFor(this.clean(e)), this.lastElement = e, this.prepareElement(e), this.currentElements = t(e);
                    var i = this.check(e) !== !1;
                    return i ? delete this.invalid[e.name] : this.invalid[e.name] = !0, this.numberOfInvalids() || (this.toHide = this.toHide.add(this.containers)), this.showErrors(), i
                },
                showErrors: function(e) {
                    if (e) {
                        t.extend(this.errorMap, e), this.errorList = [];
                        for (var i in e) this.errorList.push({
                            message: e[i],
                            element: this.findByName(i)[0]
                        });
                        this.successList = t.grep(this.successList, function(t) {
                            return !(t.name in e)
                        })
                    }
                    this.settings.showErrors ? this.settings.showErrors.call(this, this.errorMap, this.errorList) : this.defaultShowErrors()
                },
                resetForm: function() {
                    t.fn.resetForm && t(this.currentForm).resetForm(), this.submitted = {}, this.lastElement = null, this.prepareForm(), this.hideErrors(), this.elements().removeClass(this.settings.errorClass).removeData("previousValue")
                },
                numberOfInvalids: function() {
                    return this.objectLength(this.invalid)
                },
                objectLength: function(t) {
                    var e = 0;
                    for (var i in t) e++;
                    return e
                },
                hideErrors: function() {
                    this.addWrapper(this.toHide).hide()
                },
                valid: function() {
                    return 0 === this.size()
                },
                size: function() {
                    return this.errorList.length
                },
                focusInvalid: function() {
                    if (this.settings.focusInvalid) try {
                        t(this.findLastActive() || this.errorList.length && this.errorList[0].element || []).filter(":visible").focus().trigger("focusin")
                    } catch (e) {}
                },
                findLastActive: function() {
                    var e = this.lastActive;
                    return e && 1 === t.grep(this.errorList, function(t) {
                        return t.element.name === e.name
                    }).length && e
                },
                elements: function() {
                    var e = this,
                        i = {};
                    return t(this.currentForm).find("input, select, textarea").not(":submit, :reset, :image, [disabled]").not(this.settings.ignore).filter(function() {
                        return !this.name && e.settings.debug && window.console && console.error("%o has no name assigned", this), this.name in i || !e.objectLength(t(this).rules()) ? !1 : (i[this.name] = !0, !0)
                    })
                },
                clean: function(e) {
                    return t(e)[0]
                },
                errors: function() {
                    var e = this.settings.errorClass.replace(" ", ".");
                    return t(this.settings.errorElement + "." + e, this.errorContext)
                },
                reset: function() {
                    this.successList = [], this.errorList = [], this.errorMap = {}, this.toShow = t([]), this.toHide = t([]), this.currentElements = t([])
                },
                prepareForm: function() {
                    this.reset(), this.toHide = this.errors().add(this.containers)
                },
                prepareElement: function(t) {
                    this.reset(), this.toHide = this.errorsFor(t)
                },
                elementValue: function(e) {
                    var i = t(e).attr("type"),
                        n = t(e).val();
                    return "radio" === i || "checkbox" === i ? t("input[name='" + t(e).attr("name") + "']:checked").val() : "string" == typeof n ? n.replace(/\r/g, "") : n
                },
                check: function(e) {
                    e = this.validationTargetFor(this.clean(e));
                    var i, n = t(e).rules(),
                        r = !1,
                        o = this.elementValue(e);
                    for (var s in n) {
                        var a = {
                            method: s,
                            parameters: n[s]
                        };
                        try {
                            if (i = t.validator.methods[s].call(this, o, e, a.parameters), "dependency-mismatch" === i) {
                                r = !0;
                                continue
                            }
                            if (r = !1, "pending" === i) return void(this.toHide = this.toHide.not(this.errorsFor(e)));
                            if (!i) return this.formatAndAdd(e, a), !1
                        } catch (h) {
                            throw this.settings.debug && window.console && console.log("Exception occurred when checking element " + e.id + ", check the '" + a.method + "' method.", h), h
                        }
                    }
                    return r ? void 0 : (this.objectLength(n) && this.successList.push(e), !0)
                },
                customDataMessage: function(e, i) {
                    return t(e).data("msg-" + i.toLowerCase()) || e.attributes && t(e).attr("data-msg-" + i.toLowerCase())
                },
                customMessage: function(t, e) {
                    var i = this.settings.messages[t];
                    return i && (i.constructor === String ? i : i[e])
                },
                findDefined: function() {
                    for (var t = 0; t < arguments.length; t++)
                        if (void 0 !== arguments[t]) return arguments[t];
                    return void 0
                },
                defaultMessage: function(e, i) {
                    return this.findDefined(this.customMessage(e.name, i), this.customDataMessage(e, i), !this.settings.ignoreTitle && e.title || void 0, t.validator.messages[i], "<strong>Warning: No message defined for " + e.name + "</strong>")
                },
                formatAndAdd: function(e, i) {
                    var n = this.defaultMessage(e, i.method),
                        r = /\$?\{(\d+)\}/g;
                    "function" == typeof n ? n = n.call(this, i.parameters, e) : r.test(n) && (n = t.validator.format(n.replace(r, "{$1}"), i.parameters)), this.errorList.push({
                        message: n,
                        element: e
                    }), this.errorMap[e.name] = n, this.submitted[e.name] = n
                },
                addWrapper: function(t) {
                    return this.settings.wrapper && (t = t.add(t.parent(this.settings.wrapper))), t
                },
                defaultShowErrors: function() {
                    var t, e;
                    for (t = 0; this.errorList[t]; t++) {
                        var i = this.errorList[t];
                        this.settings.highlight && this.settings.highlight.call(this, i.element, this.settings.errorClass, this.settings.validClass), this.showLabel(i.element, i.message)
                    }
                    if (this.errorList.length && (this.toShow = this.toShow.add(this.containers)), this.settings.success)
                        for (t = 0; this.successList[t]; t++) this.showLabel(this.successList[t]);
                    if (this.settings.unhighlight)
                        for (t = 0, e = this.validElements(); e[t]; t++) this.settings.unhighlight.call(this, e[t], this.settings.errorClass, this.settings.validClass);
                    this.toHide = this.toHide.not(this.toShow), this.hideErrors(), this.addWrapper(this.toShow).show()
                },
                validElements: function() {
                    return this.currentElements.not(this.invalidElements())
                },
                invalidElements: function() {
                    return t(this.errorList).map(function() {
                        return this.element
                    })
                },
                showLabel: function(e, i) {
                    var n = this.errorsFor(e);
                    n.length ? (n.removeClass(this.settings.validClass).addClass(this.settings.errorClass), n.html(i)) : (n = t("<" + this.settings.errorElement + ">").attr("for", this.idOrName(e)).addClass(this.settings.errorClass).html(i || ""), this.settings.wrapper && (n = n.hide().show().wrap("<" + this.settings.wrapper + "/>").parent()), this.labelContainer.append(n).length || (this.settings.errorPlacement ? this.settings.errorPlacement(n, t(e)) : n.insertAfter(e))), !i && this.settings.success && (n.text(""), "string" == typeof this.settings.success ? n.addClass(this.settings.success) : this.settings.success(n, e)), this.toShow = this.toShow.add(n)
                },
                errorsFor: function(e) {
                    var i = this.idOrName(e);
                    return this.errors().filter(function() {
                        return t(this).attr("for") === i
                    })
                },
                idOrName: function(t) {
                    return this.groups[t.name] || (this.checkable(t) ? t.name : t.id || t.name)
                },
                validationTargetFor: function(t) {
                    return this.checkable(t) && (t = this.findByName(t.name).not(this.settings.ignore)[0]), t
                },
                checkable: function(t) {
                    return /radio|checkbox/i.test(t.type)
                },
                findByName: function(e) {
                    return t(this.currentForm).find("[name='" + e + "']")
                },
                getLength: function(e, i) {
                    switch (i.nodeName.toLowerCase()) {
                        case "select":
                            return t("option:selected", i).length;
                        case "input":
                            if (this.checkable(i)) return this.findByName(i.name).filter(":checked").length
                    }
                    return e.length
                },
                depend: function(t, e) {
                    return this.dependTypes[typeof t] ? this.dependTypes[typeof t](t, e) : !0
                },
                dependTypes: {
                    "boolean": function(t) {
                        return t
                    },
                    string: function(e, i) {
                        return !!t(e, i.form).length
                    },
                    "function": function(t, e) {
                        return t(e)
                    }
                },
                optional: function(e) {
                    var i = this.elementValue(e);
                    return !t.validator.methods.required.call(this, i, e) && "dependency-mismatch"
                },
                startRequest: function(t) {
                    this.pending[t.name] || (this.pendingRequest++, this.pending[t.name] = !0)
                },
                stopRequest: function(e, i) {
                    this.pendingRequest--, this.pendingRequest < 0 && (this.pendingRequest = 0), delete this.pending[e.name], i && 0 === this.pendingRequest && this.formSubmitted && this.form() ? (t(this.currentForm).submit(), this.formSubmitted = !1) : !i && 0 === this.pendingRequest && this.formSubmitted && (t(this.currentForm).triggerHandler("invalid-form", [this]), this.formSubmitted = !1)
                },
                previousValue: function(e) {
                    return t.data(e, "previousValue") || t.data(e, "previousValue", {
                        old: null,
                        valid: !0,
                        message: this.defaultMessage(e, "remote")
                    })
                }
            },
            classRuleSettings: {
                required: {
                    required: !0
                },
                email: {
                    email: !0
                },
                url: {
                    url: !0
                },
                date: {
                    date: !0
                },
                dateISO: {
                    dateISO: !0
                },
                number: {
                    number: !0
                },
                digits: {
                    digits: !0
                },
                creditcard: {
                    creditcard: !0
                }
            },
            addClassRules: function(e, i) {
                e.constructor === String ? this.classRuleSettings[e] = i : t.extend(this.classRuleSettings, e)
            },
            classRules: function(e) {
                var i = {},
                    n = t(e).attr("class");
                return n && t.each(n.split(" "), function() {
                    this in t.validator.classRuleSettings && t.extend(i, t.validator.classRuleSettings[this])
                }), i
            },
            attributeRules: function(e) {
                var i = {},
                    n = t(e),
                    r = n[0].getAttribute("type");
                for (var o in t.validator.methods) {
                    var s;
                    "required" === o ? (s = n.get(0).getAttribute(o), "" === s && (s = !0), s = !!s) : s = n.attr(o), /min|max/.test(o) && (null === r || /number|range|text/.test(r)) && (s = Number(s)), s ? i[o] = s : r === o && "range" !== r && (i[o] = !0)
                }
                return i.maxlength && /-1|2147483647|524288/.test(i.maxlength) && delete i.maxlength, i
            },
            dataRules: function(e) {
                var i, n, r = {},
                    o = t(e);
                for (i in t.validator.methods) n = o.data("rule-" + i.toLowerCase()), void 0 !== n && (r[i] = n);
                return r
            },
            staticRules: function(e) {
                var i = {},
                    n = t.data(e.form, "validator");
                return n.settings.rules && (i = t.validator.normalizeRule(n.settings.rules[e.name]) || {}), i
            },
            normalizeRules: function(e, i) {
                return t.each(e, function(n, r) {
                    if (r === !1) return void delete e[n];
                    if (r.param || r.depends) {
                        var o = !0;
                        switch (typeof r.depends) {
                            case "string":
                                o = !!t(r.depends, i.form).length;
                                break;
                            case "function":
                                o = r.depends.call(i, i)
                        }
                        o ? e[n] = void 0 !== r.param ? r.param : !0 : delete e[n]
                    }
                }), t.each(e, function(n, r) {
                    e[n] = t.isFunction(r) ? r(i) : r
                }), t.each(["minlength", "maxlength"], function() {
                    e[this] && (e[this] = Number(e[this]))
                }), t.each(["rangelength", "range"], function() {
                    var i;
                    e[this] && (t.isArray(e[this]) ? e[this] = [Number(e[this][0]), Number(e[this][1])] : "string" == typeof e[this] && (i = e[this].split(/[\s,]+/), e[this] = [Number(i[0]), Number(i[1])]))
                }), t.validator.autoCreateRanges && (e.min && e.max && (e.range = [e.min, e.max], delete e.min, delete e.max), e.minlength && e.maxlength && (e.rangelength = [e.minlength, e.maxlength], delete e.minlength, delete e.maxlength)), e
            },
            normalizeRule: function(e) {
                if ("string" == typeof e) {
                    var i = {};
                    t.each(e.split(/\s/), function() {
                        i[this] = !0
                    }), e = i
                }
                return e
            },
            addMethod: function(e, i, n) {
                t.validator.methods[e] = i, t.validator.messages[e] = void 0 !== n ? n : t.validator.messages[e], i.length < 3 && t.validator.addClassRules(e, t.validator.normalizeRule(e))
            },
            methods: {
                required: function(e, i, n) {
                    if (!this.depend(n, i)) return "dependency-mismatch";
                    if ("select" === i.nodeName.toLowerCase()) {
                        var r = t(i).val();
                        return r && r.length > 0
                    }
                    return this.checkable(i) ? this.getLength(e, i) > 0 : t.trim(e).length > 0
                },
                email: function(t, e) {
                    return this.optional(e) || /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))$/i.test(t)
                },
                url: function(t, e) {
                    return this.optional(e) || /^(https?|s?ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i.test(t)
                },
                date: function(t, e) {
                    return this.optional(e) || !/Invalid|NaN/.test(new Date(t).toString())
                },
                dateISO: function(t, e) {
                    return this.optional(e) || /^\d{4}[\/\-]\d{1,2}[\/\-]\d{1,2}$/.test(t)
                },
                number: function(t, e) {
                    return this.optional(e) || /^-?(?:\d+|\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test(t)
                },
                digits: function(t, e) {
                    return this.optional(e) || /^\d+$/.test(t)
                },
                creditcard: function(t, e) {
                    if (this.optional(e)) return "dependency-mismatch";
                    if (/[^0-9 \-]+/.test(t)) return !1;
                    var i = 0,
                        n = 0,
                        r = !1;
                    t = t.replace(/\D/g, "");
                    for (var o = t.length - 1; o >= 0; o--) {
                        var s = t.charAt(o);
                        n = parseInt(s, 10), r && (n *= 2) > 9 && (n -= 9), i += n, r = !r
                    }
                    return i % 10 === 0
                },
                minlength: function(e, i, n) {
                    var r = t.isArray(e) ? e.length : this.getLength(t.trim(e), i);
                    return this.optional(i) || r >= n
                },
                maxlength: function(e, i, n) {
                    var r = t.isArray(e) ? e.length : this.getLength(t.trim(e), i);
                    return this.optional(i) || n >= r
                },
                rangelength: function(e, i, n) {
                    var r = t.isArray(e) ? e.length : this.getLength(t.trim(e), i);
                    return this.optional(i) || r >= n[0] && r <= n[1]
                },
                min: function(t, e, i) {
                    return this.optional(e) || t >= i
                },
                max: function(t, e, i) {
                    return this.optional(e) || i >= t
                },
                range: function(t, e, i) {
                    return this.optional(e) || t >= i[0] && t <= i[1]
                },
                equalTo: function(e, i, n) {
                    var r = t(n);
                    return this.settings.onfocusout && r.unbind(".validate-equalTo").bind("blur.validate-equalTo", function() {
                        t(i).valid()
                    }), e === r.val()
                },
                remote: function(e, i, n) {
                    if (this.optional(i)) return "dependency-mismatch";
                    var r = this.previousValue(i);
                    if (this.settings.messages[i.name] || (this.settings.messages[i.name] = {}), r.originalMessage = this.settings.messages[i.name].remote, this.settings.messages[i.name].remote = r.message, n = "string" == typeof n && {
                            url: n
                        } || n, r.old === e) return r.valid;
                    r.old = e;
                    var o = this;
                    this.startRequest(i);
                    var s = {};
                    return s[i.name] = e, t.ajax(t.extend(!0, {
                        url: n,
                        mode: "abort",
                        port: "validate" + i.name,
                        dataType: "json",
                        data: s,
                        success: function(n) {
                            o.settings.messages[i.name].remote = r.originalMessage;
                            var s = n === !0 || "true" === n;
                            if (s) {
                                var a = o.formSubmitted;
                                o.prepareElement(i), o.formSubmitted = a, o.successList.push(i), delete o.invalid[i.name], o.showErrors()
                            } else {
                                var h = {},
                                    c = n || o.defaultMessage(i, "remote");
                                h[i.name] = r.message = t.isFunction(c) ? c(e) : c, o.invalid[i.name] = !0, o.showErrors(h)
                            }
                            r.valid = s, o.stopRequest(i, s)
                        }
                    }, n)), "pending"
                }
            }
        }), t.format = t.validator.format
    }(jQuery),
    function(t) {
        var e = {};
        if (t.ajaxPrefilter) t.ajaxPrefilter(function(t, i, n) {
            var r = t.port;
            "abort" === t.mode && (e[r] && e[r].abort(), e[r] = n)
        });
        else {
            var i = t.ajax;
            t.ajax = function(n) {
                var r = ("mode" in n ? n : t.ajaxSettings).mode,
                    o = ("port" in n ? n : t.ajaxSettings).port;
                return "abort" === r ? (e[o] && e[o].abort(), e[o] = i.apply(this, arguments), e[o]) : i.apply(this, arguments)
            }
        }
    }(jQuery),
    function(t) {
        t.extend(t.fn, {
            validateDelegate: function(e, i, n) {
                return this.bind(i, function(i) {
                    var r = t(i.target);
                    return r.is(e) ? n.apply(r, arguments) : void 0
                })
            }
        })
    }(jQuery),
    function(t) {
        function e(e) {
            this.input = e, "password" == e.attr("type") && this.handlePassword(), t(e[0].form).submit(function() {
                e.hasClass("placeholder") && e[0].value == e.attr("placeholder") && (e[0].value = "")
            })
        }
        e.prototype = {
            show: function(t) {
                if ("" === this.input[0].value || t && this.valueIsPlaceholder()) {
                    if (this.isPassword) try {
                        this.input[0].setAttribute("type", "text")
                    } catch (e) {
                        this.input.before(this.fakePassword.show()).hide()
                    }
                    this.input.addClass("placeholder"), this.input[0].value = this.input.attr("placeholder")
                }
            },
            hide: function() {
                if (this.valueIsPlaceholder() && this.input.hasClass("placeholder") && (this.input.removeClass("placeholder"), this.input[0].value = "", this.isPassword)) {
                    try {
                        this.input[0].setAttribute("type", "password")
                    } catch (t) {}
                    this.input.show(), this.input[0].focus()
                }
            },
            valueIsPlaceholder: function() {
                return this.input[0].value == this.input.attr("placeholder")
            },
            handlePassword: function() {
                var e = this.input;
                if (e.attr("realType", "password"), this.isPassword = !0, t.browser.msie && e[0].outerHTML) {
                    var i = t(e[0].outerHTML.replace(/type=(['"])?password\1/gi, "type=$1text$1"));
                    this.fakePassword = i.val(e.attr("placeholder")).addClass("placeholder").focus(function() {
                        e.trigger("focus"), t(this).hide()
                    }), t(e[0].form).submit(function() {
                        i.remove(), e.show()
                    })
                }
            }
        };
        var i = !!("placeholder" in document.createElement("input"));
        t.fn.placeholder = function() {
            return i ? this : this.each(function() {
                var i = t(this),
                    n = new e(i);
                n.show(!0), i.focus(function() {
                    n.hide()
                }), i.blur(function() {
                    n.show(!1)
                }), t.browser.msie && (t(window).load(function() {
                    i.val() && i.removeClass("placeholder"), n.show(!0)
                }), i.focus(function() {
                    if ("" == this.value) {
                        var t = this.createTextRange();
                        t.collapse(!0), t.moveStart("character", 0), t.select()
                    }
                }))
            })
        }
    }(jQuery), css_browser_selector(navigator.userAgent),
    function(t) {
        t.viewportSize = {}, t.viewportSize.getHeight = function() {
            return e("Height")
        }, t.viewportSize.getWidth = function() {
            return e("Width")
        };
        var e = function(e) {
            var i, n, r, o = e.toLowerCase(),
                s = t.document,
                a = s.documentElement;
            return void 0 === t["inner" + e] ? i = a["client" + e] : t["inner" + e] != a["client" + e] ? (n = s.createElement("body"), n.id = "vpw-test-b", n.style.cssText = "overflow:scroll", r = s.createElement("div"), r.id = "vpw-test-d", r.style.cssText = "position:absolute;top:-1000px", r.innerHTML = "<style>@media(" + o + ":" + a["client" + e] + "px){body#vpw-test-b div#vpw-test-d{" + o + ":7px!important}}</style>", n.appendChild(r), a.insertBefore(n, s.head), i = 7 == r["offset" + e] ? a["client" + e] : t["inner" + e], a.removeChild(n)) : i = t["inner" + e], i
        }
    }(this),
    function(t) {
        (jQuery.browser = jQuery.browser || {}).mobile = /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(t) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(t.substr(0, 4))
    }(navigator.userAgent || navigator.vendor || window.opera);
var THREE = THREE || {};
self.Int32Array || (self.Int32Array = Array, self.Float32Array = Array), THREE.Color = function(t) {
    return void 0 !== t && this.setHex(t), this
}, THREE.Color.prototype = {
    constructor: THREE.Color,
    r: 1,
    g: 1,
    b: 1,
    copy: function(t) {
        return this.r = t.r, this.g = t.g, this.b = t.b, this
    },
    copyGammaToLinear: function(t) {
        return this.r = t.r * t.r, this.g = t.g * t.g, this.b = t.b * t.b, this
    },
    copyLinearToGamma: function(t) {
        return this.r = Math.sqrt(t.r), this.g = Math.sqrt(t.g), this.b = Math.sqrt(t.b), this
    },
    setRGB: function(t, e, i) {
        return this.r = t, this.g = e, this.b = i, this
    },
    setHSV: function(t, e, i) {
        var n, r, o;
        if (0 === i) this.r = this.g = this.b = 0;
        else switch (n = Math.floor(6 * t), r = 6 * t - n, t = i * (1 - e), o = i * (1 - e * r), e = i * (1 - e * (1 - r)), n) {
            case 1:
                this.r = o, this.g = i, this.b = t;
                break;
            case 2:
                this.r = t, this.g = i, this.b = e;
                break;
            case 3:
                this.r = t, this.g = o, this.b = i;
                break;
            case 4:
                this.r = e, this.g = t, this.b = i;
                break;
            case 5:
                this.r = i, this.g = t, this.b = o;
                break;
            case 6:
            case 0:
                this.r = i, this.g = e, this.b = t
        }
        return this
    },
    setHex: function(t) {
        return t = Math.floor(t), this.r = (t >> 16 & 255) / 255, this.g = (t >> 8 & 255) / 255, this.b = (255 & t) / 255, this
    },
    getHex: function() {
        return ~~(255 * this.r) << 16 ^ ~~(255 * this.g) << 8 ^ ~~(255 * this.b)
    },
    getContextStyle: function() {
        return "rgb(" + Math.floor(255 * this.r) + "," + Math.floor(255 * this.g) + "," + Math.floor(255 * this.b) + ")"
    },
    clone: function() {
        return (new THREE.Color).setRGB(this.r, this.g, this.b)
    }
}, THREE.Vector2 = function(t, e) {
    this.x = t || 0, this.y = e || 0
}, THREE.Vector2.prototype = {
    constructor: THREE.Vector2,
    set: function(t, e) {
        return this.x = t, this.y = e, this
    },
    copy: function(t) {
        return this.x = t.x, this.y = t.y, this
    },
    clone: function() {
        return new THREE.Vector2(this.x, this.y)
    },
    add: function(t, e) {
        return this.x = t.x + e.x, this.y = t.y + e.y, this
    },
    addSelf: function(t) {
        return this.x += t.x, this.y += t.y, this
    },
    sub: function(t, e) {
        return this.x = t.x - e.x, this.y = t.y - e.y, this
    },
    subSelf: function(t) {
        return this.x -= t.x, this.y -= t.y, this
    },
    multiplyScalar: function(t) {
        return this.x *= t, this.y *= t, this
    },
    divideScalar: function(t) {
        return t ? (this.x /= t, this.y /= t) : this.set(0, 0), this
    },
    negate: function() {
        return this.multiplyScalar(-1)
    },
    dot: function(t) {
        return this.x * t.x + this.y * t.y
    },
    lengthSq: function() {
        return this.x * this.x + this.y * this.y
    },
    length: function() {
        return Math.sqrt(this.lengthSq())
    },
    normalize: function() {
        return this.divideScalar(this.length())
    },
    distanceTo: function(t) {
        return Math.sqrt(this.distanceToSquared(t))
    },
    distanceToSquared: function(t) {
        var e = this.x - t.x,
            t = this.y - t.y;
        return e * e + t * t
    },
    setLength: function(t) {
        return this.normalize().multiplyScalar(t)
    },
    equals: function(t) {
        return t.x === this.x && t.y === this.y
    }
}, THREE.Vector3 = function(t, e, i) {
    this.x = t || 0, this.y = e || 0, this.z = i || 0
}, THREE.Vector3.prototype = {
    constructor: THREE.Vector3,
    set: function(t, e, i) {
        return this.x = t, this.y = e, this.z = i, this
    },
    setX: function(t) {
        return this.x = t, this
    },
    setY: function(t) {
        return this.y = t, this
    },
    setZ: function(t) {
        return this.z = t, this
    },
    copy: function(t) {
        return this.x = t.x, this.y = t.y, this.z = t.z, this
    },
    clone: function() {
        return new THREE.Vector3(this.x, this.y, this.z)
    },
    add: function(t, e) {
        return this.x = t.x + e.x, this.y = t.y + e.y, this.z = t.z + e.z, this
    },
    addSelf: function(t) {
        return this.x += t.x, this.y += t.y, this.z += t.z, this
    },
    addScalar: function(t) {
        return this.x += t, this.y += t, this.z += t, this
    },
    sub: function(t, e) {
        return this.x = t.x - e.x, this.y = t.y - e.y, this.z = t.z - e.z, this
    },
    subSelf: function(t) {
        return this.x -= t.x, this.y -= t.y, this.z -= t.z, this
    },
    multiply: function(t, e) {
        return this.x = t.x * e.x, this.y = t.y * e.y, this.z = t.z * e.z, this
    },
    multiplySelf: function(t) {
        return this.x *= t.x, this.y *= t.y, this.z *= t.z, this
    },
    multiplyScalar: function(t) {
        return this.x *= t, this.y *= t, this.z *= t, this
    },
    divideSelf: function(t) {
        return this.x /= t.x, this.y /= t.y, this.z /= t.z, this
    },
    divideScalar: function(t) {
        return t ? (this.x /= t, this.y /= t, this.z /= t) : this.z = this.y = this.x = 0, this
    },
    negate: function() {
        return this.multiplyScalar(-1)
    },
    dot: function(t) {
        return this.x * t.x + this.y * t.y + this.z * t.z
    },
    lengthSq: function() {
        return this.x * this.x + this.y * this.y + this.z * this.z
    },
    length: function() {
        return Math.sqrt(this.lengthSq())
    },
    lengthManhattan: function() {
        return this.x + this.y + this.z
    },
    normalize: function() {
        return this.divideScalar(this.length())
    },
    setLength: function(t) {
        return this.normalize().multiplyScalar(t)
    },
    cross: function(t, e) {
        return this.x = t.y * e.z - t.z * e.y, this.y = t.z * e.x - t.x * e.z, this.z = t.x * e.y - t.y * e.x, this
    },
    crossSelf: function(t) {
        var e = this.x,
            i = this.y,
            n = this.z;
        return this.x = i * t.z - n * t.y, this.y = n * t.x - e * t.z, this.z = e * t.y - i * t.x, this
    },
    distanceTo: function(t) {
        return Math.sqrt(this.distanceToSquared(t))
    },
    distanceToSquared: function(t) {
        return (new THREE.Vector3).sub(this, t).lengthSq()
    },
    setPositionFromMatrix: function(t) {
        this.x = t.n14, this.y = t.n24, this.z = t.n34
    },
    setRotationFromMatrix: function(t) {
        var e = Math.cos(this.y);
        this.y = Math.asin(t.n13), Math.abs(e) > 1e-5 ? (this.x = Math.atan2(-t.n23 / e, t.n33 / e), this.z = Math.atan2(-t.n12 / e, t.n11 / e)) : (this.x = 0, this.z = Math.atan2(t.n21, t.n22))
    },
    isZero: function() {
        return this.lengthSq() < 1e-4
    }
}, THREE.Vector4 = function(t, e, i, n) {
    this.x = t || 0, this.y = e || 0, this.z = i || 0, this.w = void 0 !== n ? n : 1
}, THREE.Vector4.prototype = {
    constructor: THREE.Vector4,
    set: function(t, e, i, n) {
        return this.x = t, this.y = e, this.z = i, this.w = n, this
    },
    copy: function(t) {
        this.x = t.x, this.y = t.y, this.z = t.z, this.w = void 0 !== t.w ? t.w : 1
    },
    clone: function() {
        return new THREE.Vector4(this.x, this.y, this.z, this.w)
    },
    add: function(t, e) {
        return this.x = t.x + e.x, this.y = t.y + e.y, this.z = t.z + e.z, this.w = t.w + e.w, this
    },
    addSelf: function(t) {
        return this.x += t.x, this.y += t.y, this.z += t.z, this.w += t.w, this
    },
    sub: function(t, e) {
        return this.x = t.x - e.x, this.y = t.y - e.y, this.z = t.z - e.z, this.w = t.w - e.w, this
    },
    subSelf: function(t) {
        return this.x -= t.x, this.y -= t.y, this.z -= t.z, this.w -= t.w, this
    },
    multiplyScalar: function(t) {
        return this.x *= t, this.y *= t, this.z *= t, this.w *= t, this
    },
    divideScalar: function(t) {
        return t ? (this.x /= t, this.y /= t, this.z /= t, this.w /= t) : (this.z = this.y = this.x = 0, this.w = 1), this
    },
    negate: function() {
        return this.multiplyScalar(-1)
    },
    dot: function(t) {
        return this.x * t.x + this.y * t.y + this.z * t.z + this.w * t.w
    },
    lengthSq: function() {
        return this.dot(this)
    },
    length: function() {
        return Math.sqrt(this.lengthSq())
    },
    normalize: function() {
        return this.divideScalar(this.length())
    },
    setLength: function(t) {
        return this.normalize().multiplyScalar(t)
    },
    lerpSelf: function(t, e) {
        return this.x += (t.x - this.x) * e, this.y += (t.y - this.y) * e, this.z += (t.z - this.z) * e, this.w += (t.w - this.w) * e, this
    }
}, THREE.Ray = function(t, e) {
    function i(t, e, i) {
        return T.sub(i, t), u = T.dot(e), 0 >= u ? null : (p = b.add(t, w.copy(e).multiplyScalar(u)), d = i.distanceTo(p))
    }

    function n(t, e, i, n) {
        return T.sub(n, e), b.sub(i, e), w.sub(t, e), m = T.dot(T), f = T.dot(b), g = T.dot(w), E = b.dot(b), v = b.dot(w), R = 1 / (m * E - f * f), y = (E * g - f * v) * R, x = (m * v - f * g) * R, y >= 0 && x >= 0 && 1 > y + x
    }
    this.origin = t || new THREE.Vector3, this.direction = e || new THREE.Vector3, this.intersectScene = function(t) {
        return this.intersectObjects(t.children)
    }, this.intersectObjects = function(t) {
        var e, i, n = [];
        for (e = 0, i = t.length; i > e; e++) Array.prototype.push.apply(n, this.intersectObject(t[e]));
        return n.sort(function(t, e) {
            return t.distance - e.distance
        }), n
    };
    var r = new THREE.Vector3,
        o = new THREE.Vector3,
        s = new THREE.Vector3,
        a = new THREE.Vector3,
        t = new THREE.Vector3,
        e = new THREE.Vector3,
        h = new THREE.Vector3,
        c = new THREE.Vector3,
        l = new THREE.Vector3;
    this.intersectObject = function(u) {
        for (var p, d = [], m = 0, f = u.children.length; f > m; m++) Array.prototype.push.apply(d, this.intersectObject(u.children[m]));
        if (u instanceof THREE.Particle) {
            if (m = i(this.origin, this.direction, u.matrixWorld.getPosition()), null === m || m > u.scale.x) return [];
            p = {
                distance: m,
                point: u.position,
                face: null,
                object: u
            }, d.push(p)
        } else if (u instanceof THREE.Mesh) {
            if (m = i(this.origin, this.direction, u.matrixWorld.getPosition()), null === m || m > u.geometry.boundingSphere.radius * Math.max(u.scale.x, Math.max(u.scale.y, u.scale.z))) return d;
            var g, E, v = u.geometry,
                R = v.vertices;
            for (u.matrixRotationWorld.extractRotation(u.matrixWorld), m = 0, f = v.faces.length; f > m; m++) p = v.faces[m], t.copy(this.origin), e.copy(this.direction), E = u.matrixWorld, h = E.multiplyVector3(h.copy(p.centroid)).subSelf(t), g = h.dot(e), 0 >= g || (r = E.multiplyVector3(r.copy(R[p.a].position)), o = E.multiplyVector3(o.copy(R[p.b].position)), s = E.multiplyVector3(s.copy(R[p.c].position)), p instanceof THREE.Face4 && (a = E.multiplyVector3(a.copy(R[p.d].position))), c = u.matrixRotationWorld.multiplyVector3(c.copy(p.normal)), g = e.dot(c), !u.doubleSided && !(u.flipSided ? g > 0 : 0 > g)) || (g = c.dot(h.sub(r, t)) / g, l.add(t, e.multiplyScalar(g)), p instanceof THREE.Face3 ? n(l, r, o, s) && (p = {
                distance: t.distanceTo(l),
                point: l.clone(),
                face: p,
                object: u
            }, d.push(p)) : p instanceof THREE.Face4 && (n(l, r, o, a) || n(l, o, s, a)) && (p = {
                distance: t.distanceTo(l),
                point: l.clone(),
                face: p,
                object: u
            }, d.push(p)))
        }
        return d
    };
    var u, p, d, m, f, g, E, v, R, y, x, T = new THREE.Vector3,
        b = new THREE.Vector3,
        w = new THREE.Vector3
}, THREE.Rectangle = function() {
    function t() {
        o = n - e, s = r - i
    }
    var e, i, n, r, o, s, a = !0;
    this.getX = function() {
        return e
    }, this.getY = function() {
        return i
    }, this.getWidth = function() {
        return o
    }, this.getHeight = function() {
        return s
    }, this.getLeft = function() {
        return e
    }, this.getTop = function() {
        return i
    }, this.getRight = function() {
        return n
    }, this.getBottom = function() {
        return r
    }, this.set = function(o, s, h, c) {
        a = !1, e = o, i = s, n = h, r = c, t()
    }, this.addPoint = function(o, s) {
        a ? (a = !1, e = o, i = s, n = o, r = s) : (e = o > e ? e : o, i = s > i ? i : s, n = n > o ? n : o, r = r > s ? r : s), t()
    }, this.add3Points = function(o, s, h, c, l, u) {
        a ? (a = !1, e = h > o ? l > o ? o : l : l > h ? h : l, i = c > s ? u > s ? s : u : u > c ? c : u, n = o > h ? o > l ? o : l : h > l ? h : l, r = s > c ? s > u ? s : u : c > u ? c : u) : (e = h > o ? l > o ? e > o ? o : e : e > l ? l : e : l > h ? e > h ? h : e : e > l ? l : e, i = c > s ? u > s ? i > s ? s : i : i > u ? u : i : u > c ? i > c ? c : i : i > u ? u : i, n = o > h ? o > l ? o > n ? o : n : l > n ? l : n : h > l ? h > n ? h : n : l > n ? l : n, r = s > c ? s > u ? s > r ? s : r : u > r ? u : r : c > u ? c > r ? c : r : u > r ? u : r), t()
    }, this.addRectangle = function(o) {
        a ? (a = !1, e = o.getLeft(), i = o.getTop(), n = o.getRight(), r = o.getBottom()) : (e = e < o.getLeft() ? e : o.getLeft(), i = i < o.getTop() ? i : o.getTop(), n = n > o.getRight() ? n : o.getRight(), r = r > o.getBottom() ? r : o.getBottom()), t()
    }, this.inflate = function(o) {
        e -= o, i -= o, n += o, r += o, t()
    }, this.minSelf = function(o) {
        e = e > o.getLeft() ? e : o.getLeft(), i = i > o.getTop() ? i : o.getTop(), n = n < o.getRight() ? n : o.getRight(), r = r < o.getBottom() ? r : o.getBottom(), t()
    }, this.intersects = function(t) {
        return Math.min(n, t.getRight()) - Math.max(e, t.getLeft()) >= 0 && Math.min(r, t.getBottom()) - Math.max(i, t.getTop()) >= 0
    }, this.empty = function() {
        a = !0, r = n = i = e = 0, t()
    }, this.isEmpty = function() {
        return a
    }
}, THREE.Math = {
    clamp: function(t, e, i) {
        return e > t ? e : t > i ? i : t
    },
    clampBottom: function(t, e) {
        return e > t ? e : t
    },
    mapLinear: function(t, e, i, n, r) {
        return n + (t - e) * (r - n) / (i - e)
    },
    random16: function() {
        return (65280 * Math.random() + 255 * Math.random()) / 65535
    }
}, THREE.Matrix3 = function() {
    this.m = []
}, THREE.Matrix3.prototype = {
    constructor: THREE.Matrix3,
    transpose: function() {
        var t, e = this.m;
        return t = e[1], e[1] = e[3], e[3] = t, t = e[2], e[2] = e[6], e[6] = t, t = e[5], e[5] = e[7], e[7] = t, this
    },
    transposeIntoArray: function(t) {
        var e = this.m;
        return t[0] = e[0], t[1] = e[3], t[2] = e[6], t[3] = e[1], t[4] = e[4], t[5] = e[7], t[6] = e[2], t[7] = e[5], t[8] = e[8], this
    }
}, THREE.Matrix4 = function(t, e, i, n, r, o, s, a, h, c, l, u, p, d, m, f) {
    this.set(void 0 !== t ? t : 1, e || 0, i || 0, n || 0, r || 0, void 0 !== o ? o : 1, s || 0, a || 0, h || 0, c || 0, void 0 !== l ? l : 1, u || 0, p || 0, d || 0, m || 0, void 0 !== f ? f : 1), this.flat = Array(16), this.m33 = new THREE.Matrix3
}, THREE.Matrix4.prototype = {
    constructor: THREE.Matrix4,
    set: function(t, e, i, n, r, o, s, a, h, c, l, u, p, d, m, f) {
        return this.n11 = t, this.n12 = e, this.n13 = i, this.n14 = n, this.n21 = r, this.n22 = o, this.n23 = s, this.n24 = a, this.n31 = h, this.n32 = c, this.n33 = l, this.n34 = u, this.n41 = p, this.n42 = d, this.n43 = m, this.n44 = f, this
    },
    identity: function() {
        return this.set(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1), this
    },
    copy: function(t) {
        return this.set(t.n11, t.n12, t.n13, t.n14, t.n21, t.n22, t.n23, t.n24, t.n31, t.n32, t.n33, t.n34, t.n41, t.n42, t.n43, t.n44), this
    },
    lookAt: function(t, e, i) {
        var n = THREE.Matrix4.__v1,
            r = THREE.Matrix4.__v2,
            o = THREE.Matrix4.__v3;
        return o.sub(t, e).normalize(), 0 === o.length() && (o.z = 1), n.cross(i, o).normalize(), 0 === n.length() && (o.x += 1e-4, n.cross(i, o).normalize()), r.cross(o, n).normalize(), this.n11 = n.x, this.n12 = r.x, this.n13 = o.x, this.n21 = n.y, this.n22 = r.y, this.n23 = o.y, this.n31 = n.z, this.n32 = r.z, this.n33 = o.z, this
    },
    multiply: function(t, e) {
        var i = t.n11,
            n = t.n12,
            r = t.n13,
            o = t.n14,
            s = t.n21,
            a = t.n22,
            h = t.n23,
            c = t.n24,
            l = t.n31,
            u = t.n32,
            p = t.n33,
            d = t.n34,
            m = t.n41,
            f = t.n42,
            g = t.n43,
            E = t.n44,
            v = e.n11,
            R = e.n12,
            y = e.n13,
            x = e.n14,
            T = e.n21,
            b = e.n22,
            w = e.n23,
            H = e.n24,
            M = e.n31,
            F = e.n32,
            S = e.n33,
            z = e.n34,
            C = e.n41,
            L = e.n42,
            k = e.n43,
            V = e.n44;
        return this.n11 = i * v + n * T + r * M + o * C, this.n12 = i * R + n * b + r * F + o * L, this.n13 = i * y + n * w + r * S + o * k, this.n14 = i * x + n * H + r * z + o * V, this.n21 = s * v + a * T + h * M + c * C, this.n22 = s * R + a * b + h * F + c * L, this.n23 = s * y + a * w + h * S + c * k, this.n24 = s * x + a * H + h * z + c * V, this.n31 = l * v + u * T + p * M + d * C, this.n32 = l * R + u * b + p * F + d * L, this.n33 = l * y + u * w + p * S + d * k, this.n34 = l * x + u * H + p * z + d * V, this.n41 = m * v + f * T + g * M + E * C, this.n42 = m * R + f * b + g * F + E * L, this.n43 = m * y + f * w + g * S + E * k, this.n44 = m * x + f * H + g * z + E * V, this
    },
    multiplySelf: function(t) {
        return this.multiply(this, t)
    },
    multiplyToArray: function(t, e, i) {
        return this.multiply(t, e), i[0] = this.n11, i[1] = this.n21, i[2] = this.n31, i[3] = this.n41, i[4] = this.n12, i[5] = this.n22, i[6] = this.n32, i[7] = this.n42, i[8] = this.n13, i[9] = this.n23, i[10] = this.n33, i[11] = this.n43, i[12] = this.n14, i[13] = this.n24, i[14] = this.n34, i[15] = this.n44, this
    },
    multiplyScalar: function(t) {
        return this.n11 *= t, this.n12 *= t, this.n13 *= t, this.n14 *= t, this.n21 *= t, this.n22 *= t, this.n23 *= t, this.n24 *= t, this.n31 *= t, this.n32 *= t, this.n33 *= t, this.n34 *= t, this.n41 *= t, this.n42 *= t, this.n43 *= t, this.n44 *= t, this
    },
    multiplyVector3: function(t) {
        var e = t.x,
            i = t.y,
            n = t.z,
            r = 1 / (this.n41 * e + this.n42 * i + this.n43 * n + this.n44);
        return t.x = (this.n11 * e + this.n12 * i + this.n13 * n + this.n14) * r, t.y = (this.n21 * e + this.n22 * i + this.n23 * n + this.n24) * r, t.z = (this.n31 * e + this.n32 * i + this.n33 * n + this.n34) * r, t
    },
    multiplyVector4: function(t) {
        var e = t.x,
            i = t.y,
            n = t.z,
            r = t.w;
        return t.x = this.n11 * e + this.n12 * i + this.n13 * n + this.n14 * r, t.y = this.n21 * e + this.n22 * i + this.n23 * n + this.n24 * r, t.z = this.n31 * e + this.n32 * i + this.n33 * n + this.n34 * r, t.w = this.n41 * e + this.n42 * i + this.n43 * n + this.n44 * r, t
    },
    rotateAxis: function(t) {
        var e = t.x,
            i = t.y,
            n = t.z;
        return t.x = e * this.n11 + i * this.n12 + n * this.n13, t.y = e * this.n21 + i * this.n22 + n * this.n23, t.z = e * this.n31 + i * this.n32 + n * this.n33, t.normalize(), t
    },
    crossVector: function(t) {
        var e = new THREE.Vector4;
        return e.x = this.n11 * t.x + this.n12 * t.y + this.n13 * t.z + this.n14 * t.w, e.y = this.n21 * t.x + this.n22 * t.y + this.n23 * t.z + this.n24 * t.w, e.z = this.n31 * t.x + this.n32 * t.y + this.n33 * t.z + this.n34 * t.w, e.w = t.w ? this.n41 * t.x + this.n42 * t.y + this.n43 * t.z + this.n44 * t.w : 1, e
    },
    determinant: function() {
        var t = this.n11,
            e = this.n12,
            i = this.n13,
            n = this.n14,
            r = this.n21,
            o = this.n22,
            s = this.n23,
            a = this.n24,
            h = this.n31,
            c = this.n32,
            l = this.n33,
            u = this.n34,
            p = this.n41,
            d = this.n42,
            m = this.n43,
            f = this.n44;
        return n * s * c * p - i * a * c * p - n * o * l * p + e * a * l * p + i * o * u * p - e * s * u * p - n * s * h * d + i * a * h * d + n * r * l * d - t * a * l * d - i * r * u * d + t * s * u * d + n * o * h * m - e * a * h * m - n * r * c * m + t * a * c * m + e * r * u * m - t * o * u * m - i * o * h * f + e * s * h * f + i * r * c * f - t * s * c * f - e * r * l * f + t * o * l * f
    },
    transpose: function() {
        var t;
        return t = this.n21, this.n21 = this.n12, this.n12 = t, t = this.n31, this.n31 = this.n13, this.n13 = t, t = this.n32, this.n32 = this.n23, this.n23 = t, t = this.n41, this.n41 = this.n14, this.n14 = t, t = this.n42, this.n42 = this.n24, this.n24 = t, t = this.n43, this.n43 = this.n34, this.n43 = t, this
    },
    clone: function() {
        var t = new THREE.Matrix4;
        return t.n11 = this.n11, t.n12 = this.n12, t.n13 = this.n13, t.n14 = this.n14, t.n21 = this.n21, t.n22 = this.n22, t.n23 = this.n23, t.n24 = this.n24, t.n31 = this.n31, t.n32 = this.n32, t.n33 = this.n33, t.n34 = this.n34, t.n41 = this.n41, t.n42 = this.n42, t.n43 = this.n43, t.n44 = this.n44, t
    },
    flatten: function() {
        return this.flat[0] = this.n11, this.flat[1] = this.n21, this.flat[2] = this.n31, this.flat[3] = this.n41, this.flat[4] = this.n12, this.flat[5] = this.n22, this.flat[6] = this.n32, this.flat[7] = this.n42, this.flat[8] = this.n13, this.flat[9] = this.n23, this.flat[10] = this.n33, this.flat[11] = this.n43, this.flat[12] = this.n14, this.flat[13] = this.n24, this.flat[14] = this.n34, this.flat[15] = this.n44, this.flat
    },
    flattenToArray: function(t) {
        return t[0] = this.n11, t[1] = this.n21, t[2] = this.n31, t[3] = this.n41, t[4] = this.n12, t[5] = this.n22, t[6] = this.n32, t[7] = this.n42, t[8] = this.n13, t[9] = this.n23, t[10] = this.n33, t[11] = this.n43, t[12] = this.n14, t[13] = this.n24, t[14] = this.n34, t[15] = this.n44, t
    },
    flattenToArrayOffset: function(t, e) {
        return t[e] = this.n11, t[e + 1] = this.n21, t[e + 2] = this.n31, t[e + 3] = this.n41, t[e + 4] = this.n12, t[e + 5] = this.n22, t[e + 6] = this.n32, t[e + 7] = this.n42, t[e + 8] = this.n13, t[e + 9] = this.n23, t[e + 10] = this.n33, t[e + 11] = this.n43, t[e + 12] = this.n14, t[e + 13] = this.n24, t[e + 14] = this.n34, t[e + 15] = this.n44, t
    },
    setTranslation: function(t, e, i) {
        return this.set(1, 0, 0, t, 0, 1, 0, e, 0, 0, 1, i, 0, 0, 0, 1), this
    },
    setScale: function(t, e, i) {
        return this.set(t, 0, 0, 0, 0, e, 0, 0, 0, 0, i, 0, 0, 0, 0, 1), this
    },
    setRotationX: function(t) {
        var e = Math.cos(t),
            t = Math.sin(t);
        return this.set(1, 0, 0, 0, 0, e, -t, 0, 0, t, e, 0, 0, 0, 0, 1), this
    },
    setRotationY: function(t) {
        var e = Math.cos(t),
            t = Math.sin(t);
        return this.set(e, 0, t, 0, 0, 1, 0, 0, -t, 0, e, 0, 0, 0, 0, 1), this
    },
    setRotationZ: function(t) {
        var e = Math.cos(t),
            t = Math.sin(t);
        return this.set(e, -t, 0, 0, t, e, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1), this
    },
    setRotationAxis: function(t, e) {
        var i = Math.cos(e),
            n = Math.sin(e),
            r = 1 - i,
            o = t.x,
            s = t.y,
            a = t.z,
            h = r * o,
            c = r * s;
        return this.set(h * o + i, h * s - n * a, h * a + n * s, 0, h * s + n * a, c * s + i, c * a - n * o, 0, h * a - n * s, c * a + n * o, r * a * a + i, 0, 0, 0, 0, 1), this
    },
    setPosition: function(t) {
        return this.n14 = t.x, this.n24 = t.y, this.n34 = t.z, this
    },
    getPosition: function() {
        return THREE.Matrix4.__v1.set(this.n14, this.n24, this.n34)
    },
    getColumnX: function() {
        return THREE.Matrix4.__v1.set(this.n11, this.n21, this.n31)
    },
    getColumnY: function() {
        return THREE.Matrix4.__v1.set(this.n12, this.n22, this.n32)
    },
    getColumnZ: function() {
        return THREE.Matrix4.__v1.set(this.n13, this.n23, this.n33)
    },
    getInverse: function(t) {
        var e = t.n11,
            i = t.n12,
            n = t.n13,
            r = t.n14,
            o = t.n21,
            s = t.n22,
            a = t.n23,
            h = t.n24,
            c = t.n31,
            l = t.n32,
            u = t.n33,
            p = t.n34,
            d = t.n41,
            m = t.n42,
            f = t.n43,
            g = t.n44;
        return this.n11 = a * p * m - h * u * m + h * l * f - s * p * f - a * l * g + s * u * g, this.n12 = r * u * m - n * p * m - r * l * f + i * p * f + n * l * g - i * u * g, this.n13 = n * h * m - r * a * m + r * s * f - i * h * f - n * s * g + i * a * g, this.n14 = r * a * l - n * h * l - r * s * u + i * h * u + n * s * p - i * a * p, this.n21 = h * u * d - a * p * d - h * c * f + o * p * f + a * c * g - o * u * g, this.n22 = n * p * d - r * u * d + r * c * f - e * p * f - n * c * g + e * u * g, this.n23 = r * a * d - n * h * d - r * o * f + e * h * f + n * o * g - e * a * g, this.n24 = n * h * c - r * a * c + r * o * u - e * h * u - n * o * p + e * a * p, this.n31 = s * p * d - h * l * d + h * c * m - o * p * m - s * c * g + o * l * g, this.n32 = r * l * d - i * p * d - r * c * m + e * p * m + i * c * g - e * l * g, this.n33 = n * h * d - r * s * d + r * o * m - e * h * m - i * o * g + e * s * g, this.n34 = r * s * c - i * h * c - r * o * l + e * h * l + i * o * p - e * s * p, this.n41 = a * l * d - s * u * d - a * c * m + o * u * m + s * c * f - o * l * f, this.n42 = i * u * d - n * l * d + n * c * m - e * u * m - i * c * f + e * l * f, this.n43 = n * s * d - i * a * d - n * o * m + e * a * m + i * o * f - e * s * f, this.n44 = i * a * c - n * s * c + n * o * l - e * a * l - i * o * u + e * s * u, this.multiplyScalar(1 / t.determinant()), this
    },
    setRotationFromEuler: function(t, e) {
        var i = t.x,
            n = t.y,
            r = t.z,
            o = Math.cos(i),
            i = Math.sin(i),
            s = Math.cos(n),
            n = Math.sin(n),
            a = Math.cos(r),
            r = Math.sin(r);
        switch (e) {
            case "YXZ":
                var h = s * a,
                    c = s * r,
                    l = n * a,
                    u = n * r;
                this.n11 = h + u * i, this.n12 = l * i - c, this.n13 = o * n, this.n21 = o * r, this.n22 = o * a, this.n23 = -i, this.n31 = c * i - l, this.n32 = u + h * i, this.n33 = o * s;
                break;
            case "ZXY":
                h = s * a, c = s * r, l = n * a, u = n * r, this.n11 = h - u * i, this.n12 = -o * r, this.n13 = l + c * i, this.n21 = c + l * i, this.n22 = o * a, this.n23 = u - h * i, this.n31 = -o * n, this.n32 = i, this.n33 = o * s;
                break;
            case "ZYX":
                h = o * a, c = o * r, l = i * a, u = i * r, this.n11 = s * a, this.n12 = l * n - c, this.n13 = h * n + u, this.n21 = s * r, this.n22 = u * n + h, this.n23 = c * n - l, this.n31 = -n, this.n32 = i * s, this.n33 = o * s;
                break;
            case "YZX":
                h = o * s, c = o * n, l = i * s, u = i * n, this.n11 = s * a, this.n12 = u - h * r, this.n13 = l * r + c, this.n21 = r, this.n22 = o * a, this.n23 = -i * a, this.n31 = -n * a, this.n32 = c * r + l, this.n33 = h - u * r;
                break;
            case "XZY":
                h = o * s, c = o * n, l = i * s, u = i * n, this.n11 = s * a, this.n12 = -r, this.n13 = n * a, this.n21 = h * r + u, this.n22 = o * a, this.n23 = c * r - l, this.n31 = l * r - c, this.n32 = i * a, this.n33 = u * r + h;
                break;
            default:
                h = o * a, c = o * r, l = i * a, u = i * r, this.n11 = s * a, this.n12 = -s * r, this.n13 = n, this.n21 = c + l * n, this.n22 = h - u * n, this.n23 = -i * s, this.n31 = u - h * n, this.n32 = l + c * n, this.n33 = o * s
        }
        return this
    },
    setRotationFromQuaternion: function(t) {
        var e = t.x,
            i = t.y,
            n = t.z,
            r = t.w,
            o = e + e,
            s = i + i,
            a = n + n,
            t = e * o,
            h = e * s;
        e *= a;
        var c = i * s;
        return i *= a, n *= a, o *= r, s *= r, r *= a, this.n11 = 1 - (c + n), this.n12 = h - r, this.n13 = e + s, this.n21 = h + r, this.n22 = 1 - (t + n), this.n23 = i - o, this.n31 = e - s, this.n32 = i + o, this.n33 = 1 - (t + c), this
    },
    scale: function(t) {
        var e = t.x,
            i = t.y,
            t = t.z;
        return this.n11 *= e, this.n12 *= i, this.n13 *= t, this.n21 *= e, this.n22 *= i, this.n23 *= t, this.n31 *= e, this.n32 *= i, this.n33 *= t, this.n41 *= e, this.n42 *= i, this.n43 *= t, this
    },
    compose: function(t, e, i) {
        var n = THREE.Matrix4.__m1,
            r = THREE.Matrix4.__m2;
        return n.identity(), n.setRotationFromQuaternion(e), r.setScale(i.x, i.y, i.z), this.multiply(n, r), this.n14 = t.x, this.n24 = t.y, this.n34 = t.z, this
    },
    decompose: function(t, e, i) {
        var n = THREE.Matrix4.__v1,
            r = THREE.Matrix4.__v2,
            o = THREE.Matrix4.__v3;
        return n.set(this.n11, this.n21, this.n31), r.set(this.n12, this.n22, this.n32), o.set(this.n13, this.n23, this.n33), t = t instanceof THREE.Vector3 ? t : new THREE.Vector3, e = e instanceof THREE.Quaternion ? e : new THREE.Quaternion, i = i instanceof THREE.Vector3 ? i : new THREE.Vector3, i.x = n.length(), i.y = r.length(), i.z = o.length(), t.x = this.n14, t.y = this.n24, t.z = this.n34, n = THREE.Matrix4.__m1, n.copy(this), n.n11 /= i.x, n.n21 /= i.x, n.n31 /= i.x, n.n12 /= i.y, n.n22 /= i.y, n.n32 /= i.y, n.n13 /= i.z, n.n23 /= i.z, n.n33 /= i.z, e.setFromRotationMatrix(n), [t, e, i]
    },
    extractPosition: function(t) {
        return this.n14 = t.n14, this.n24 = t.n24, this.n34 = t.n34, this
    },
    extractRotation: function(t) {
        var e = THREE.Matrix4.__v1,
            i = 1 / e.set(t.n11, t.n21, t.n31).length(),
            n = 1 / e.set(t.n12, t.n22, t.n32).length(),
            e = 1 / e.set(t.n13, t.n23, t.n33).length();
        return this.n11 = t.n11 * i, this.n21 = t.n21 * i, this.n31 = t.n31 * i, this.n12 = t.n12 * n, this.n22 = t.n22 * n, this.n32 = t.n32 * n, this.n13 = t.n13 * e, this.n23 = t.n23 * e, this.n33 = t.n33 * e, this
    }
}, THREE.Matrix4.makeInvert3x3 = function(t) {
    var e = t.m33,
        i = e.m,
        n = t.n33 * t.n22 - t.n32 * t.n23,
        r = -t.n33 * t.n21 + t.n31 * t.n23,
        o = t.n32 * t.n21 - t.n31 * t.n22,
        s = -t.n33 * t.n12 + t.n32 * t.n13,
        a = t.n33 * t.n11 - t.n31 * t.n13,
        h = -t.n32 * t.n11 + t.n31 * t.n12,
        c = t.n23 * t.n12 - t.n22 * t.n13,
        l = -t.n23 * t.n11 + t.n21 * t.n13,
        u = t.n22 * t.n11 - t.n21 * t.n12,
        t = t.n11 * n + t.n21 * s + t.n31 * c;
    return 0 === t && console.error("THREE.Matrix4.makeInvert3x3: Matrix not invertible."), t = 1 / t, i[0] = t * n, i[1] = t * r, i[2] = t * o, i[3] = t * s, i[4] = t * a, i[5] = t * h, i[6] = t * c, i[7] = t * l, i[8] = t * u, e
}, THREE.Matrix4.makeFrustum = function(t, e, i, n, r, o) {
    var s;
    return s = new THREE.Matrix4, s.n11 = 2 * r / (e - t), s.n12 = 0, s.n13 = (e + t) / (e - t), s.n14 = 0, s.n21 = 0, s.n22 = 2 * r / (n - i), s.n23 = (n + i) / (n - i), s.n24 = 0, s.n31 = 0, s.n32 = 0, s.n33 = -(o + r) / (o - r), s.n34 = -2 * o * r / (o - r), s.n41 = 0, s.n42 = 0, s.n43 = -1, s.n44 = 0, s
}, THREE.Matrix4.makePerspective = function(t, e, i, n) {
    var r, t = i * Math.tan(t * Math.PI / 360);
    return r = -t, THREE.Matrix4.makeFrustum(r * e, t * e, r, t, i, n)
}, THREE.Matrix4.makeOrtho = function(t, e, i, n, r, o) {
    var s, a, h, c;
    return s = new THREE.Matrix4, a = e - t, h = i - n, c = o - r, s.n11 = 2 / a, s.n12 = 0, s.n13 = 0, s.n14 = -((e + t) / a), s.n21 = 0, s.n22 = 2 / h, s.n23 = 0, s.n24 = -((i + n) / h), s.n31 = 0, s.n32 = 0, s.n33 = -2 / c, s.n34 = -((o + r) / c), s.n41 = 0, s.n42 = 0, s.n43 = 0, s.n44 = 1, s
}, THREE.Matrix4.__v1 = new THREE.Vector3, THREE.Matrix4.__v2 = new THREE.Vector3, THREE.Matrix4.__v3 = new THREE.Vector3, THREE.Matrix4.__m1 = new THREE.Matrix4, THREE.Matrix4.__m2 = new THREE.Matrix4, THREE.Object3D = function() {
    this.name = "", this.id = THREE.Object3DCount++, this.parent = void 0, this.children = [], this.up = new THREE.Vector3(0, 1, 0), this.position = new THREE.Vector3, this.rotation = new THREE.Vector3, this.eulerOrder = "XYZ", this.scale = new THREE.Vector3(1, 1, 1), this.flipSided = this.doubleSided = this.dynamic = !1, this.renderDepth = null, this.rotationAutoUpdate = !0, this.matrix = new THREE.Matrix4, this.matrixWorld = new THREE.Matrix4, this.matrixRotationWorld = new THREE.Matrix4, this.matrixWorldNeedsUpdate = this.matrixAutoUpdate = !0, this.quaternion = new THREE.Quaternion, this.useQuaternion = !1, this.boundRadius = 0, this.boundRadiusScale = 1, this.visible = !0, this.receiveShadow = this.castShadow = !1, this.frustumCulled = !0, this._vector = new THREE.Vector3
}, THREE.Object3D.prototype = {
    constructor: THREE.Object3D,
    translate: function(t, e) {
        this.matrix.rotateAxis(e), this.position.addSelf(e.multiplyScalar(t))
    },
    translateX: function(t) {
        this.translate(t, this._vector.set(1, 0, 0))
    },
    translateY: function(t) {
        this.translate(t, this._vector.set(0, 1, 0))
    },
    translateZ: function(t) {
        this.translate(t, this._vector.set(0, 0, 1))
    },
    lookAt: function(t) {
        this.matrix.lookAt(t, this.position, this.up), this.rotationAutoUpdate && this.rotation.setRotationFromMatrix(this.matrix)
    },
    add: function(t) {
        if (-1 === this.children.indexOf(t)) {
            void 0 !== t.parent && t.parent.remove(t), t.parent = this, this.children.push(t);
            for (var e = this; void 0 !== e.parent;) e = e.parent;
            void 0 !== e && e instanceof THREE.Scene && e.addObject(t)
        }
    },
    remove: function(t) {
        var e = this.children.indexOf(t);
        if (-1 !== e) {
            for (t.parent = void 0, this.children.splice(e, 1), e = this; void 0 !== e.parent;) e = e.parent;
            void 0 !== e && e instanceof THREE.Scene && e.removeObject(t)
        }
    },
    getChildByName: function(t, e) {
        var i, n, r;
        for (i = 0, n = this.children.length; n > i; i++) {
            if (r = this.children[i], r.name === t) return r;
            if (e && (r = r.getChildByName(t, e), void 0 !== r)) return r
        }
    },
    updateMatrix: function() {
        this.matrix.setPosition(this.position), this.useQuaternion ? this.matrix.setRotationFromQuaternion(this.quaternion) : this.matrix.setRotationFromEuler(this.rotation, this.eulerOrder), (1 !== this.scale.x || 1 !== this.scale.y || 1 !== this.scale.z) && (this.matrix.scale(this.scale), this.boundRadiusScale = Math.max(this.scale.x, Math.max(this.scale.y, this.scale.z))), this.matrixWorldNeedsUpdate = !0
    },
    updateMatrixWorld: function(t) {
        this.matrixAutoUpdate && this.updateMatrix(), (this.matrixWorldNeedsUpdate || t) && (this.parent ? this.matrixWorld.multiply(this.parent.matrixWorld, this.matrix) : this.matrixWorld.copy(this.matrix), this.matrixWorldNeedsUpdate = !1, t = !0);
        for (var e = 0, i = this.children.length; i > e; e++) this.children[e].updateMatrixWorld(t)
    }
}, THREE.Object3DCount = 0, THREE.Projector = function() {
    function t() {
        var t = f[o] = f[o] || new THREE.RenderableObject;
        return o++, t
    }

    function e() {
        var t = g[a] = g[a] || new THREE.RenderableVertex;
        return a++, t
    }

    function i(t, e) {
        return e.z - t.z
    }

    function n(t, e) {
        var i = 0,
            n = 1,
            r = t.z + t.w,
            o = e.z + e.w,
            s = -t.z + t.w,
            a = -e.z + e.w;
        return r >= 0 && o >= 0 && s >= 0 && a >= 0 ? !0 : 0 > r && 0 > o || 0 > s && 0 > a ? !1 : (0 > r ? i = Math.max(i, r / (r - o)) : 0 > o && (n = Math.min(n, r / (r - o))), 0 > s ? i = Math.max(i, s / (s - a)) : 0 > a && (n = Math.min(n, s / (s - a))), i > n ? !1 : (t.lerpSelf(e, i), e.lerpSelf(t, 1 - n), !0))
    }
    var r, o, s, a, h, c, l, u, p, d, m, f = [],
        g = [],
        E = [],
        v = [],
        R = [],
        y = [],
        x = {
            objects: [],
            sprites: [],
            lights: [],
            elements: []
        },
        T = new THREE.Vector3,
        b = new THREE.Vector4,
        w = new THREE.Matrix4,
        H = new THREE.Matrix4,
        M = [new THREE.Vector4, new THREE.Vector4, new THREE.Vector4, new THREE.Vector4, new THREE.Vector4, new THREE.Vector4],
        F = new THREE.Vector4,
        S = new THREE.Vector4;
    this.computeFrustum = function(t) {
        for (M[0].set(t.n41 - t.n11, t.n42 - t.n12, t.n43 - t.n13, t.n44 - t.n14), M[1].set(t.n41 + t.n11, t.n42 + t.n12, t.n43 + t.n13, t.n44 + t.n14), M[2].set(t.n41 + t.n21, t.n42 + t.n22, t.n43 + t.n23, t.n44 + t.n24), M[3].set(t.n41 - t.n21, t.n42 - t.n22, t.n43 - t.n23, t.n44 - t.n24), M[4].set(t.n41 - t.n31, t.n42 - t.n32, t.n43 - t.n33, t.n44 - t.n34), M[5].set(t.n41 + t.n31, t.n42 + t.n32, t.n43 + t.n33, t.n44 + t.n34), t = 0; 6 > t; t++) {
            var e = M[t];
            e.divideScalar(Math.sqrt(e.x * e.x + e.y * e.y + e.z * e.z))
        }
    }, this.projectVector = function(t, e) {
        return e.matrixWorldInverse.getInverse(e.matrixWorld), w.multiply(e.projectionMatrix, e.matrixWorldInverse), w.multiplyVector3(t), t
    }, this.unprojectVector = function(t, e) {
        return e.projectionMatrixInverse.getInverse(e.projectionMatrix), w.multiply(e.matrixWorld, e.projectionMatrixInverse), w.multiplyVector3(t), t
    }, this.pickingRay = function(t, e) {
        var i;
        return t.z = -1, i = new THREE.Vector3(t.x, t.y, 1), this.unprojectVector(t, e), this.unprojectVector(i, e), i.subSelf(t).normalize(), new THREE.Ray(t, i)
    }, this.projectGraph = function(e, n) {
        o = 0, x.objects.length = 0, x.sprites.length = 0, x.lights.length = 0;
        var s = function(e) {
            if (e.visible !== !1) {
                var i;
                if ((i = e instanceof THREE.Mesh || e instanceof THREE.Line) && !(i = e.frustumCulled === !1)) t: {
                    for (var n = e.matrixWorld, o = -e.geometry.boundingSphere.radius * Math.max(e.scale.x, Math.max(e.scale.y, e.scale.z)), a = 0; 6 > a; a++)
                        if (i = M[a].x * n.n14 + M[a].y * n.n24 + M[a].z * n.n34 + M[a].w, o >= i) {
                            i = !1;
                            break t
                        }
                    i = !0
                }
                for (i ? (w.multiplyVector3(T.copy(e.position)), r = t(), r.object = e, r.z = T.z, x.objects.push(r)) : e instanceof THREE.Sprite || e instanceof THREE.Particle ? (w.multiplyVector3(T.copy(e.position)), r = t(), r.object = e, r.z = T.z, x.sprites.push(r)) : e instanceof THREE.Light && x.lights.push(e), i = 0, n = e.children.length; n > i; i++) s(e.children[i])
            }
        };
        return s(e), n && x.objects.sort(i), x
    }, this.projectScene = function(t, r, o) {
        var f, T, M, z, C, L, k, V, D, j, A, P, O, B, I, W, N = r.near,
            _ = r.far;
        for (m = p = l = c = 0, x.elements.length = 0, void 0 === r.parent && (console.warn("DEPRECATED: Camera hasn't been added to a Scene. Adding it..."), t.add(r)), t.updateMatrixWorld(), r.matrixWorldInverse.getInverse(r.matrixWorld), w.multiply(r.projectionMatrix, r.matrixWorldInverse), this.computeFrustum(w), x = this.projectGraph(t, !1), t = 0, f = x.objects.length; f > t; t++)
            if (D = x.objects[t].object, j = D.matrixWorld, P = D.material, a = 0, D instanceof THREE.Mesh) {
                for (A = D.geometry, O = D.geometry.materials, z = A.vertices, B = A.faces, I = A.faceVertexUvs, A = D.matrixRotationWorld.extractRotation(j), T = 0, M = z.length; M > T; T++) s = e(), s.positionWorld.copy(z[T].position), j.multiplyVector3(s.positionWorld), s.positionScreen.copy(s.positionWorld), w.multiplyVector4(s.positionScreen), s.positionScreen.x /= s.positionScreen.w, s.positionScreen.y /= s.positionScreen.w, s.visible = s.positionScreen.z > N && s.positionScreen.z < _;
                for (z = 0, T = B.length; T > z; z++) {
                    if (M = B[z], M instanceof THREE.Face3) {
                        if (C = g[M.a], L = g[M.b], k = g[M.c], !(C.visible && L.visible && k.visible) || !D.doubleSided && D.flipSided == (k.positionScreen.x - C.positionScreen.x) * (L.positionScreen.y - C.positionScreen.y) - (k.positionScreen.y - C.positionScreen.y) * (L.positionScreen.x - C.positionScreen.x) < 0) continue;
                        V = E[c] = E[c] || new THREE.RenderableFace3, c++, h = V, h.v1.copy(C), h.v2.copy(L), h.v3.copy(k)
                    } else if (M instanceof THREE.Face4) {
                        if (C = g[M.a], L = g[M.b], k = g[M.c], V = g[M.d], !(C.visible && L.visible && k.visible && V.visible) || !D.doubleSided && D.flipSided == ((V.positionScreen.x - C.positionScreen.x) * (L.positionScreen.y - C.positionScreen.y) - (V.positionScreen.y - C.positionScreen.y) * (L.positionScreen.x - C.positionScreen.x) < 0 || (L.positionScreen.x - k.positionScreen.x) * (V.positionScreen.y - k.positionScreen.y) - (L.positionScreen.y - k.positionScreen.y) * (V.positionScreen.x - k.positionScreen.x) < 0)) continue;
                        W = v[l] = v[l] || new THREE.RenderableFace4, l++, h = W, h.v1.copy(C), h.v2.copy(L), h.v3.copy(k), h.v4.copy(V)
                    }
                    for (h.normalWorld.copy(M.normal), A.multiplyVector3(h.normalWorld), h.centroidWorld.copy(M.centroid), j.multiplyVector3(h.centroidWorld), h.centroidScreen.copy(h.centroidWorld), w.multiplyVector3(h.centroidScreen), k = M.vertexNormals, C = 0, L = k.length; L > C; C++) V = h.vertexNormalsWorld[C], V.copy(k[C]), A.multiplyVector3(V);
                    for (C = 0, L = I.length; L > C; C++)
                        if (W = I[C][z])
                            for (k = 0, V = W.length; V > k; k++) h.uvs[C][k] = W[k];
                    h.material = P, h.faceMaterial = null !== M.materialIndex ? O[M.materialIndex] : null, h.z = h.centroidScreen.z, x.elements.push(h)
                }
            } else if (D instanceof THREE.Line)
            for (H.multiply(w, j), z = D.geometry.vertices, C = e(), C.positionScreen.copy(z[0].position), H.multiplyVector4(C.positionScreen), T = 1, M = z.length; M > T; T++) C = e(), C.positionScreen.copy(z[T].position), H.multiplyVector4(C.positionScreen), L = g[a - 2], F.copy(C.positionScreen), S.copy(L.positionScreen), n(F, S) && (F.multiplyScalar(1 / F.w), S.multiplyScalar(1 / S.w), D = R[p] = R[p] || new THREE.RenderableLine, p++, u = D, u.v1.positionScreen.copy(F), u.v2.positionScreen.copy(S), u.z = Math.max(F.z, S.z), u.material = P, x.elements.push(u));
        for (t = 0, f = x.sprites.length; f > t; t++) D = x.sprites[t].object, j = D.matrixWorld, D instanceof THREE.Particle && (b.set(j.n14, j.n24, j.n34, 1), w.multiplyVector4(b), b.z /= b.w, b.z > 0 && b.z < 1) && (N = y[m] = y[m] || new THREE.RenderableParticle, m++, d = N, d.x = b.x / b.w, d.y = b.y / b.w, d.z = b.z, d.rotation = D.rotation.z, d.scale.x = D.scale.x * Math.abs(d.x - (b.x + r.projectionMatrix.n11) / (b.w + r.projectionMatrix.n14)), d.scale.y = D.scale.y * Math.abs(d.y - (b.y + r.projectionMatrix.n22) / (b.w + r.projectionMatrix.n24)), d.material = D.material, x.elements.push(d));
        return o && x.elements.sort(i), x
    }
}, THREE.Quaternion = function(t, e, i, n) {
    this.set(t || 0, e || 0, i || 0, void 0 !== n ? n : 1)
}, THREE.Quaternion.prototype = {
    constructor: THREE.Quaternion,
    set: function(t, e, i, n) {
        return this.x = t, this.y = e, this.z = i, this.w = n, this
    },
    copy: function(t) {
        return this.x = t.x, this.y = t.y, this.z = t.z, this.w = t.w, this
    },
    setFromEuler: function(t) {
        var e = Math.PI / 360,
            i = t.x * e,
            n = t.y * e,
            r = t.z * e,
            t = Math.cos(n),
            n = Math.sin(n),
            e = Math.cos(-r),
            r = Math.sin(-r),
            o = Math.cos(i),
            i = Math.sin(i),
            s = t * e,
            a = n * r;
        return this.w = s * o - a * i, this.x = s * i + a * o, this.y = n * e * o + t * r * i, this.z = t * r * o - n * e * i, this
    },
    setFromAxisAngle: function(t, e) {
        var i = e / 2,
            n = Math.sin(i);
        return this.x = t.x * n, this.y = t.y * n, this.z = t.z * n, this.w = Math.cos(i), this
    },
    setFromRotationMatrix: function(t) {
        var e = Math.pow(t.determinant(), 1 / 3);
        return this.w = Math.sqrt(Math.max(0, e + t.n11 + t.n22 + t.n33)) / 2, this.x = Math.sqrt(Math.max(0, e + t.n11 - t.n22 - t.n33)) / 2, this.y = Math.sqrt(Math.max(0, e - t.n11 + t.n22 - t.n33)) / 2, this.z = Math.sqrt(Math.max(0, e - t.n11 - t.n22 + t.n33)) / 2, this.x = t.n32 - t.n23 < 0 ? -Math.abs(this.x) : Math.abs(this.x), this.y = t.n13 - t.n31 < 0 ? -Math.abs(this.y) : Math.abs(this.y), this.z = t.n21 - t.n12 < 0 ? -Math.abs(this.z) : Math.abs(this.z), this.normalize(), this
    },
    calculateW: function() {
        return this.w = -Math.sqrt(Math.abs(1 - this.x * this.x - this.y * this.y - this.z * this.z)), this
    },
    inverse: function() {
        return this.x *= -1, this.y *= -1, this.z *= -1, this
    },
    length: function() {
        return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w)
    },
    normalize: function() {
        var t = Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w);
        return 0 === t ? this.w = this.z = this.y = this.x = 0 : (t = 1 / t, this.x *= t, this.y *= t, this.z *= t, this.w *= t), this
    },
    multiplySelf: function(t) {
        var e = this.x,
            i = this.y,
            n = this.z,
            r = this.w,
            o = t.x,
            s = t.y,
            a = t.z,
            t = t.w;
        return this.x = e * t + r * o + i * a - n * s, this.y = i * t + r * s + n * o - e * a, this.z = n * t + r * a + e * s - i * o, this.w = r * t - e * o - i * s - n * a, this
    },
    multiply: function(t, e) {
        return this.x = t.x * e.w + t.y * e.z - t.z * e.y + t.w * e.x, this.y = -t.x * e.z + t.y * e.w + t.z * e.x + t.w * e.y, this.z = t.x * e.y - t.y * e.x + t.z * e.w + t.w * e.z, this.w = -t.x * e.x - t.y * e.y - t.z * e.z + t.w * e.w, this
    },
    multiplyVector3: function(t, e) {
        e || (e = t);
        var i = t.x,
            n = t.y,
            r = t.z,
            o = this.x,
            s = this.y,
            a = this.z,
            h = this.w,
            c = h * i + s * r - a * n,
            l = h * n + a * i - o * r,
            u = h * r + o * n - s * i,
            i = -o * i - s * n - a * r;
        return e.x = c * h + i * -o + l * -a - u * -s, e.y = l * h + i * -s + u * -o - c * -a, e.z = u * h + i * -a + c * -s - l * -o, e
    }
}, THREE.Quaternion.slerp = function(t, e, i, n) {
    var r = t.w * e.w + t.x * e.x + t.y * e.y + t.z * e.z;
    if (0 > r ? (i.w = -e.w, i.x = -e.x, i.y = -e.y, i.z = -e.z, r = -r) : i.copy(e), Math.abs(r) >= 1) return i.w = t.w, i.x = t.x, i.y = t.y, i.z = t.z, i;
    var o = Math.acos(r),
        r = Math.sqrt(1 - r * r);
    return Math.abs(r) < .001 ? (i.w = .5 * (t.w + e.w), i.x = .5 * (t.x + e.x), i.y = .5 * (t.y + e.y), i.z = .5 * (t.z + e.z), i) : (e = Math.sin((1 - n) * o) / r, n = Math.sin(n * o) / r, i.w = t.w * e + i.w * n, i.x = t.x * e + i.x * n, i.y = t.y * e + i.y * n, i.z = t.z * e + i.z * n, i)
}, THREE.Vertex = function(t) {
    this.position = t || new THREE.Vector3
}, THREE.Face3 = function(t, e, i, n, r, o) {
    this.a = t, this.b = e, this.c = i, this.normal = n instanceof THREE.Vector3 ? n : new THREE.Vector3, this.vertexNormals = n instanceof Array ? n : [], this.color = r instanceof THREE.Color ? r : new THREE.Color, this.vertexColors = r instanceof Array ? r : [], this.vertexTangents = [], this.materialIndex = o, this.centroid = new THREE.Vector3
}, THREE.Face4 = function(t, e, i, n, r, o, s) {
    this.a = t, this.b = e, this.c = i, this.d = n, this.normal = r instanceof THREE.Vector3 ? r : new THREE.Vector3, this.vertexNormals = r instanceof Array ? r : [], this.color = o instanceof THREE.Color ? o : new THREE.Color, this.vertexColors = o instanceof Array ? o : [], this.vertexTangents = [], this.materialIndex = s, this.centroid = new THREE.Vector3
}, THREE.UV = function(t, e) {
    this.u = t || 0, this.v = e || 0
}, THREE.UV.prototype = {
    constructor: THREE.UV,
    set: function(t, e) {
        return this.u = t, this.v = e, this
    },
    copy: function(t) {
        return this.u = t.u, this.v = t.v, this
    },
    clone: function() {
        return new THREE.UV(this.u, this.v)
    }
}, THREE.Geometry = function() {
    this.id = THREE.GeometryCount++, this.vertices = [], this.colors = [], this.materials = [], this.faces = [], this.faceUvs = [
        []
    ], this.faceVertexUvs = [
        []
    ], this.morphTargets = [], this.morphColors = [], this.skinWeights = [], this.skinIndices = [], this.boundingSphere = this.boundingBox = null, this.dynamic = this.hasTangents = !1
}, THREE.Geometry.prototype = {
    constructor: THREE.Geometry,
    applyMatrix: function(t) {
        var e = new THREE.Matrix4;
        e.extractRotation(t, new THREE.Vector3(1, 1, 1));
        for (var i = 0, n = this.vertices.length; n > i; i++) t.multiplyVector3(this.vertices[i].position);
        for (i = 0, n = this.faces.length; n > i; i++) {
            var r = this.faces[i];
            e.multiplyVector3(r.normal);
            for (var o = 0, s = r.vertexNormals.length; s > o; o++) e.multiplyVector3(r.vertexNormals[o]);
            t.multiplyVector3(r.centroid)
        }
    },
    computeCentroids: function() {
        var t, e, i;
        for (t = 0, e = this.faces.length; e > t; t++) i = this.faces[t], i.centroid.set(0, 0, 0), i instanceof THREE.Face3 ? (i.centroid.addSelf(this.vertices[i.a].position), i.centroid.addSelf(this.vertices[i.b].position), i.centroid.addSelf(this.vertices[i.c].position), i.centroid.divideScalar(3)) : i instanceof THREE.Face4 && (i.centroid.addSelf(this.vertices[i.a].position), i.centroid.addSelf(this.vertices[i.b].position), i.centroid.addSelf(this.vertices[i.c].position), i.centroid.addSelf(this.vertices[i.d].position), i.centroid.divideScalar(4))
    },
    computeFaceNormals: function() {
        var t, e, i, n, r, o, s = new THREE.Vector3,
            a = new THREE.Vector3;
        for (t = 0, e = this.faces.length; e > t; t++) i = this.faces[t], n = this.vertices[i.a], r = this.vertices[i.b], o = this.vertices[i.c], s.sub(o.position, r.position), a.sub(n.position, r.position), s.crossSelf(a), s.isZero() || s.normalize(), i.normal.copy(s)
    },
    computeVertexNormals: function() {
        var t, e, i, n;
        if (void 0 === this.__tmpVertices) {
            for (n = this.__tmpVertices = Array(this.vertices.length), t = 0, e = this.vertices.length; e > t; t++) n[t] = new THREE.Vector3;
            for (t = 0, e = this.faces.length; e > t; t++) i = this.faces[t], i instanceof THREE.Face3 ? i.vertexNormals = [new THREE.Vector3, new THREE.Vector3, new THREE.Vector3] : i instanceof THREE.Face4 && (i.vertexNormals = [new THREE.Vector3, new THREE.Vector3, new THREE.Vector3, new THREE.Vector3])
        } else
            for (n = this.__tmpVertices, t = 0, e = this.vertices.length; e > t; t++) n[t].set(0, 0, 0);
        for (t = 0, e = this.faces.length; e > t; t++) i = this.faces[t], i instanceof THREE.Face3 ? (n[i.a].addSelf(i.normal), n[i.b].addSelf(i.normal), n[i.c].addSelf(i.normal)) : i instanceof THREE.Face4 && (n[i.a].addSelf(i.normal), n[i.b].addSelf(i.normal), n[i.c].addSelf(i.normal), n[i.d].addSelf(i.normal));
        for (t = 0, e = this.vertices.length; e > t; t++) n[t].normalize();
        for (t = 0, e = this.faces.length; e > t; t++) i = this.faces[t], i instanceof THREE.Face3 ? (i.vertexNormals[0].copy(n[i.a]), i.vertexNormals[1].copy(n[i.b]), i.vertexNormals[2].copy(n[i.c])) : i instanceof THREE.Face4 && (i.vertexNormals[0].copy(n[i.a]), i.vertexNormals[1].copy(n[i.b]), i.vertexNormals[2].copy(n[i.c]), i.vertexNormals[3].copy(n[i.d]))
    },
    computeTangents: function() {
        function t(t, e, i, n, r, o, w) {
            a = t.vertices[e].position, h = t.vertices[i].position, c = t.vertices[n].position, l = s[r], u = s[o], p = s[w], d = h.x - a.x, m = c.x - a.x, f = h.y - a.y, g = c.y - a.y, E = h.z - a.z, v = c.z - a.z, R = u.u - l.u, y = p.u - l.u, x = u.v - l.v, T = p.v - l.v, b = 1 / (R * T - y * x), F.set((T * d - x * m) * b, (T * f - x * g) * b, (T * E - x * v) * b), S.set((R * m - y * d) * b, (R * g - y * f) * b, (R * v - y * E) * b), H[e].addSelf(F), H[i].addSelf(F), H[n].addSelf(F), M[e].addSelf(S), M[i].addSelf(S), M[n].addSelf(S)
        }
        var e, i, n, r, o, s, a, h, c, l, u, p, d, m, f, g, E, v, R, y, x, T, b, w, H = [],
            M = [],
            F = new THREE.Vector3,
            S = new THREE.Vector3,
            z = new THREE.Vector3,
            C = new THREE.Vector3,
            L = new THREE.Vector3;
        for (e = 0, i = this.vertices.length; i > e; e++) H[e] = new THREE.Vector3, M[e] = new THREE.Vector3;
        for (e = 0, i = this.faces.length; i > e; e++) o = this.faces[e], s = this.faceVertexUvs[0][e], o instanceof THREE.Face3 ? t(this, o.a, o.b, o.c, 0, 1, 2) : o instanceof THREE.Face4 && (t(this, o.a, o.b, o.c, 0, 1, 2), t(this, o.a, o.b, o.d, 0, 1, 3));
        var k = ["a", "b", "c", "d"];
        for (e = 0, i = this.faces.length; i > e; e++)
            for (o = this.faces[e], n = 0; n < o.vertexNormals.length; n++) L.copy(o.vertexNormals[n]), r = o[k[n]], w = H[r], z.copy(w), z.subSelf(L.multiplyScalar(L.dot(w))).normalize(), C.cross(o.vertexNormals[n], w), r = C.dot(M[r]), r = 0 > r ? -1 : 1, o.vertexTangents[n] = new THREE.Vector4(z.x, z.y, z.z, r);
        this.hasTangents = !0
    },
    computeBoundingBox: function() {
        var t;
        if (this.vertices.length > 0) {
            this.boundingBox = {
                x: [this.vertices[0].position.x, this.vertices[0].position.x],
                y: [this.vertices[0].position.y, this.vertices[0].position.y],
                z: [this.vertices[0].position.z, this.vertices[0].position.z]
            };
            for (var e = 1, i = this.vertices.length; i > e; e++) t = this.vertices[e], t.position.x < this.boundingBox.x[0] ? this.boundingBox.x[0] = t.position.x : t.position.x > this.boundingBox.x[1] && (this.boundingBox.x[1] = t.position.x), t.position.y < this.boundingBox.y[0] ? this.boundingBox.y[0] = t.position.y : t.position.y > this.boundingBox.y[1] && (this.boundingBox.y[1] = t.position.y), t.position.z < this.boundingBox.z[0] ? this.boundingBox.z[0] = t.position.z : t.position.z > this.boundingBox.z[1] && (this.boundingBox.z[1] = t.position.z)
        }
    },
    computeBoundingSphere: function() {
        for (var t = 0, e = 0, i = this.vertices.length; i > e; e++) t = Math.max(t, this.vertices[e].position.length());
        this.boundingSphere = {
            radius: t
        }
    },
    mergeVertices: function() {
        var t, e, i, n = {},
            r = [],
            o = [],
            s = Math.pow(10, 4);
        for (e = 0, i = this.vertices.length; i > e; e++) t = this.vertices[e].position, t = [Math.round(t.x * s), Math.round(t.y * s), Math.round(t.z * s)].join("_"), void 0 === n[t] ? (n[t] = e, r.push(this.vertices[e]), o[e] = r.length - 1) : o[e] = o[n[t]];
        for (e = 0, i = this.faces.length; i > e; e++) n = this.faces[e], n instanceof THREE.Face3 ? (n.a = o[n.a], n.b = o[n.b], n.c = o[n.c]) : n instanceof THREE.Face4 && (n.a = o[n.a], n.b = o[n.b], n.c = o[n.c], n.d = o[n.d]);
        this.vertices = r
    }
}, THREE.GeometryCount = 0, THREE.Camera = function() {
    return arguments.length ? (console.warn("DEPRECATED: Camera() is now PerspectiveCamera() or OrthographicCamera()."), new THREE.PerspectiveCamera(arguments[0], arguments[1], arguments[2], arguments[3])) : (THREE.Object3D.call(this), this.matrixWorldInverse = new THREE.Matrix4, this.projectionMatrix = new THREE.Matrix4, void(this.projectionMatrixInverse = new THREE.Matrix4))
}, THREE.Camera.prototype = new THREE.Object3D, THREE.Camera.prototype.constructor = THREE.Camera, THREE.Camera.prototype.lookAt = function(t) {
    this.matrix.lookAt(this.position, t, this.up), this.rotationAutoUpdate && this.rotation.setRotationFromMatrix(this.matrix)
}, THREE.OrthographicCamera = function(t, e, i, n, r, o) {
    THREE.Camera.call(this), this.left = t, this.right = e, this.top = i, this.bottom = n, this.near = void 0 !== r ? r : .1, this.far = void 0 !== o ? o : 2e3, this.updateProjectionMatrix()
}, THREE.OrthographicCamera.prototype = new THREE.Camera, THREE.OrthographicCamera.prototype.constructor = THREE.OrthographicCamera, THREE.OrthographicCamera.prototype.updateProjectionMatrix = function() {
    this.projectionMatrix = THREE.Matrix4.makeOrtho(this.left, this.right, this.top, this.bottom, this.near, this.far)
}, THREE.PerspectiveCamera = function(t, e, i, n) {
    THREE.Camera.call(this), this.fov = void 0 !== t ? t : 50, this.aspect = void 0 !== e ? e : 1, this.near = void 0 !== i ? i : .1, this.far = void 0 !== n ? n : 2e3, this.updateProjectionMatrix()
}, THREE.PerspectiveCamera.prototype = new THREE.Camera, THREE.PerspectiveCamera.prototype.constructor = THREE.PerspectiveCamera, THREE.PerspectiveCamera.prototype.setLens = function(t, e) {
    this.fov = 2 * Math.atan((void 0 !== e ? e : 43.25) / (2 * t)), this.fov *= 180 / Math.PI, this.updateProjectionMatrix()
}, THREE.PerspectiveCamera.prototype.setViewOffset = function(t, e, i, n, r, o) {
    this.fullWidth = t, this.fullHeight = e, this.x = i, this.y = n, this.width = r, this.height = o, this.updateProjectionMatrix()
}, THREE.PerspectiveCamera.prototype.updateProjectionMatrix = function() {
    if (this.fullWidth) {
        var t = this.fullWidth / this.fullHeight,
            e = Math.tan(this.fov * Math.PI / 360) * this.near,
            i = -e,
            n = t * i,
            t = Math.abs(t * e - n),
            i = Math.abs(e - i);
        this.projectionMatrix = THREE.Matrix4.makeFrustum(n + this.x * t / this.fullWidth, n + (this.x + this.width) * t / this.fullWidth, e - (this.y + this.height) * i / this.fullHeight, e - this.y * i / this.fullHeight, this.near, this.far)
    } else this.projectionMatrix = THREE.Matrix4.makePerspective(this.fov, this.aspect, this.near, this.far)
}, THREE.Light = function(t) {
    THREE.Object3D.call(this), this.color = new THREE.Color(t)
}, THREE.Light.prototype = new THREE.Object3D, THREE.Light.prototype.constructor = THREE.Light, THREE.Light.prototype.supr = THREE.Object3D.prototype, THREE.AmbientLight = function(t) {
    THREE.Light.call(this, t)
}, THREE.AmbientLight.prototype = new THREE.Light, THREE.AmbientLight.prototype.constructor = THREE.AmbientLight, THREE.DirectionalLight = function(t, e, i) {
    THREE.Light.call(this, t), this.position = new THREE.Vector3(0, 1, 0), this.intensity = void 0 !== e ? e : 1, this.distance = void 0 !== i ? i : 0
}, THREE.DirectionalLight.prototype = new THREE.Light, THREE.DirectionalLight.prototype.constructor = THREE.DirectionalLight, THREE.PointLight = function(t, e, i) {
    THREE.Light.call(this, t), this.position = new THREE.Vector3(0, 0, 0), this.intensity = void 0 !== e ? e : 1, this.distance = void 0 !== i ? i : 0
}, THREE.PointLight.prototype = new THREE.Light, THREE.PointLight.prototype.constructor = THREE.PointLight, THREE.Material = function(t) {
    this.name = "", this.id = THREE.MaterialCount++, t = t || {}, this.opacity = void 0 !== t.opacity ? t.opacity : 1, this.transparent = void 0 !== t.transparent ? t.transparent : !1, this.blending = void 0 !== t.blending ? t.blending : THREE.NormalBlending, this.depthTest = void 0 !== t.depthTest ? t.depthTest : !0, this.depthWrite = void 0 !== t.depthWrite ? t.depthWrite : !0, this.polygonOffset = void 0 !== t.polygonOffset ? t.polygonOffset : !1, this.polygonOffsetFactor = void 0 !== t.polygonOffsetFactor ? t.polygonOffsetFactor : 0, this.polygonOffsetUnits = void 0 !== t.polygonOffsetUnits ? t.polygonOffsetUnits : 0, this.alphaTest = void 0 !== t.alphaTest ? t.alphaTest : 0, this.overdraw = void 0 !== t.overdraw ? t.overdraw : !1
}, THREE.MaterialCount = 0, THREE.NoShading = 0, THREE.FlatShading = 1, THREE.SmoothShading = 2, THREE.NoColors = 0, THREE.FaceColors = 1, THREE.VertexColors = 2, THREE.NormalBlending = 0, THREE.AdditiveBlending = 1, THREE.SubtractiveBlending = 2, THREE.MultiplyBlending = 3, THREE.AdditiveAlphaBlending = 4, THREE.LineBasicMaterial = function(t) {
    THREE.Material.call(this, t), t = t || {}, this.color = new THREE.Color(void 0 !== t.color ? t.color : 16777215), this.linewidth = void 0 !== t.linewidth ? t.linewidth : 1, this.linecap = void 0 !== t.linecap ? t.linecap : "round", this.linejoin = void 0 !== t.linejoin ? t.linejoin : "round", this.vertexColors = t.vertexColors ? t.vertexColors : !1, this.fog = void 0 !== t.fog ? t.fog : !0
}, THREE.LineBasicMaterial.prototype = new THREE.Material, THREE.LineBasicMaterial.prototype.constructor = THREE.LineBasicMaterial, THREE.MeshBasicMaterial = function(t) {
    THREE.Material.call(this, t), t = t || {}, this.color = new THREE.Color(void 0 !== t.color ? t.color : 16777215), this.map = void 0 !== t.map ? t.map : null, this.lightMap = void 0 !== t.lightMap ? t.lightMap : null, this.envMap = void 0 !== t.envMap ? t.envMap : null, this.combine = void 0 !== t.combine ? t.combine : THREE.MultiplyOperation, this.reflectivity = void 0 !== t.reflectivity ? t.reflectivity : 1, this.refractionRatio = void 0 !== t.refractionRatio ? t.refractionRatio : .98, this.fog = void 0 !== t.fog ? t.fog : !0, this.shading = void 0 !== t.shading ? t.shading : THREE.SmoothShading, this.wireframe = void 0 !== t.wireframe ? t.wireframe : !1, this.wireframeLinewidth = void 0 !== t.wireframeLinewidth ? t.wireframeLinewidth : 1, this.wireframeLinecap = void 0 !== t.wireframeLinecap ? t.wireframeLinecap : "round", this.wireframeLinejoin = void 0 !== t.wireframeLinejoin ? t.wireframeLinejoin : "round", this.vertexColors = void 0 !== t.vertexColors ? t.vertexColors : !1, this.skinning = void 0 !== t.skinning ? t.skinning : !1, this.morphTargets = void 0 !== t.morphTargets ? t.morphTargets : !1
}, THREE.MeshBasicMaterial.prototype = new THREE.Material, THREE.MeshBasicMaterial.prototype.constructor = THREE.MeshBasicMaterial, THREE.MeshLambertMaterial = function(t) {
    THREE.Material.call(this, t), t = t || {}, this.color = new THREE.Color(void 0 !== t.color ? t.color : 16777215), this.ambient = new THREE.Color(void 0 !== t.ambient ? t.ambient : 328965), this.map = void 0 !== t.map ? t.map : null, this.lightMap = void 0 !== t.lightMap ? t.lightMap : null, this.envMap = void 0 !== t.envMap ? t.envMap : null, this.combine = void 0 !== t.combine ? t.combine : THREE.MultiplyOperation, this.reflectivity = void 0 !== t.reflectivity ? t.reflectivity : 1, this.refractionRatio = void 0 !== t.refractionRatio ? t.refractionRatio : .98, this.fog = void 0 !== t.fog ? t.fog : !0, this.shading = void 0 !== t.shading ? t.shading : THREE.SmoothShading, this.wireframe = void 0 !== t.wireframe ? t.wireframe : !1, this.wireframeLinewidth = void 0 !== t.wireframeLinewidth ? t.wireframeLinewidth : 1, this.wireframeLinecap = void 0 !== t.wireframeLinecap ? t.wireframeLinecap : "round", this.wireframeLinejoin = void 0 !== t.wireframeLinejoin ? t.wireframeLinejoin : "round", this.vertexColors = void 0 !== t.vertexColors ? t.vertexColors : !1, this.skinning = void 0 !== t.skinning ? t.skinning : !1, this.morphTargets = void 0 !== t.morphTargets ? t.morphTargets : !1
}, THREE.MeshLambertMaterial.prototype = new THREE.Material, THREE.MeshLambertMaterial.prototype.constructor = THREE.MeshLambertMaterial, THREE.MeshPhongMaterial = function(t) {
    THREE.Material.call(this, t), t = t || {}, this.color = new THREE.Color(void 0 !== t.color ? t.color : 16777215), this.ambient = new THREE.Color(void 0 !== t.ambient ? t.ambient : 328965), this.specular = new THREE.Color(void 0 !== t.specular ? t.specular : 1118481), this.shininess = void 0 !== t.shininess ? t.shininess : 30, this.metal = void 0 !== t.metal ? t.metal : !1, this.perPixel = void 0 !== t.perPixel ? t.perPixel : !1, this.map = void 0 !== t.map ? t.map : null, this.lightMap = void 0 !== t.lightMap ? t.lightMap : null, this.envMap = void 0 !== t.envMap ? t.envMap : null, this.combine = void 0 !== t.combine ? t.combine : THREE.MultiplyOperation, this.reflectivity = void 0 !== t.reflectivity ? t.reflectivity : 1, this.refractionRatio = void 0 !== t.refractionRatio ? t.refractionRatio : .98, this.fog = void 0 !== t.fog ? t.fog : !0, this.shading = void 0 !== t.shading ? t.shading : THREE.SmoothShading, this.wireframe = void 0 !== t.wireframe ? t.wireframe : !1, this.wireframeLinewidth = void 0 !== t.wireframeLinewidth ? t.wireframeLinewidth : 1, this.wireframeLinecap = void 0 !== t.wireframeLinecap ? t.wireframeLinecap : "round", this.wireframeLinejoin = void 0 !== t.wireframeLinejoin ? t.wireframeLinejoin : "round", this.vertexColors = void 0 !== t.vertexColors ? t.vertexColors : !1, this.skinning = void 0 !== t.skinning ? t.skinning : !1, this.morphTargets = void 0 !== t.morphTargets ? t.morphTargets : !1
}, THREE.MeshPhongMaterial.prototype = new THREE.Material, THREE.MeshPhongMaterial.prototype.constructor = THREE.MeshPhongMaterial, THREE.MeshDepthMaterial = function(t) {
    THREE.Material.call(this, t), t = t || {}, this.shading = void 0 !== t.shading ? t.shading : THREE.SmoothShading, this.wireframe = void 0 !== t.wireframe ? t.wireframe : !1, this.wireframeLinewidth = void 0 !== t.wireframeLinewidth ? t.wireframeLinewidth : 1
}, THREE.MeshDepthMaterial.prototype = new THREE.Material, THREE.MeshDepthMaterial.prototype.constructor = THREE.MeshDepthMaterial, THREE.MeshNormalMaterial = function(t) {
    THREE.Material.call(this, t), t = t || {}, this.shading = t.shading ? t.shading : THREE.FlatShading, this.wireframe = t.wireframe ? t.wireframe : !1, this.wireframeLinewidth = t.wireframeLinewidth ? t.wireframeLinewidth : 1
}, THREE.MeshNormalMaterial.prototype = new THREE.Material, THREE.MeshNormalMaterial.prototype.constructor = THREE.MeshNormalMaterial, THREE.MeshFaceMaterial = function() {}, THREE.ParticleBasicMaterial = function(t) {
    THREE.Material.call(this, t), t = t || {}, this.color = new THREE.Color(void 0 !== t.color ? t.color : 16777215), this.map = void 0 !== t.map ? t.map : null, this.size = void 0 !== t.size ? t.size : 1, this.sizeAttenuation = void 0 !== t.sizeAttenuation ? t.sizeAttenuation : !0, this.vertexColors = void 0 !== t.vertexColors ? t.vertexColors : !1, this.fog = void 0 !== t.fog ? t.fog : !0
}, THREE.ParticleBasicMaterial.prototype = new THREE.Material, THREE.ParticleBasicMaterial.prototype.constructor = THREE.ParticleBasicMaterial, THREE.ParticleCanvasMaterial = function(t) {
    THREE.Material.call(this, t), t = t || {}, this.color = new THREE.Color(void 0 !== t.color ? t.color : 16777215), this.program = void 0 !== t.program ? t.program : function() {}
}, THREE.ParticleCanvasMaterial.prototype = new THREE.Material, THREE.ParticleCanvasMaterial.prototype.constructor = THREE.ParticleCanvasMaterial, THREE.Texture = function(t, e, i, n, r, o) {
    this.id = THREE.TextureCount++, this.image = t, this.mapping = void 0 !== e ? e : new THREE.UVMapping, this.wrapS = void 0 !== i ? i : THREE.ClampToEdgeWrapping, this.wrapT = void 0 !== n ? n : THREE.ClampToEdgeWrapping, this.magFilter = void 0 !== r ? r : THREE.LinearFilter, this.minFilter = void 0 !== o ? o : THREE.LinearMipMapLinearFilter, this.offset = new THREE.Vector2(0, 0), this.repeat = new THREE.Vector2(1, 1), this.needsUpdate = !1, this.onUpdate = null
}, THREE.Texture.prototype = {
    constructor: THREE.Texture,
    clone: function() {
        var t = new THREE.Texture(this.image, this.mapping, this.wrapS, this.wrapT, this.magFilter, this.minFilter);
        return t.offset.copy(this.offset), t.repeat.copy(this.repeat), t
    }
}, THREE.TextureCount = 0, THREE.MultiplyOperation = 0, THREE.MixOperation = 1, THREE.CubeReflectionMapping = function() {}, THREE.CubeRefractionMapping = function() {}, THREE.LatitudeReflectionMapping = function() {}, THREE.LatitudeRefractionMapping = function() {}, THREE.SphericalReflectionMapping = function() {}, THREE.SphericalRefractionMapping = function() {}, THREE.UVMapping = function() {}, THREE.RepeatWrapping = 0, THREE.ClampToEdgeWrapping = 1, THREE.MirroredRepeatWrapping = 2, THREE.NearestFilter = 3, THREE.NearestMipMapNearestFilter = 4, THREE.NearestMipMapLinearFilter = 5, THREE.LinearFilter = 6, THREE.LinearMipMapNearestFilter = 7, THREE.LinearMipMapLinearFilter = 8, THREE.ByteType = 9, THREE.UnsignedByteType = 10, THREE.ShortType = 11, THREE.UnsignedShortType = 12, THREE.IntType = 13, THREE.UnsignedIntType = 14, THREE.FloatType = 15, THREE.AlphaFormat = 16, THREE.RGBFormat = 17, THREE.RGBAFormat = 18, THREE.LuminanceFormat = 19, THREE.LuminanceAlphaFormat = 20, THREE.Particle = function(t) {
    THREE.Object3D.call(this), this.material = t
}, THREE.Particle.prototype = new THREE.Object3D, THREE.Particle.prototype.constructor = THREE.Particle, THREE.Line = function(t, e, i) {
    THREE.Object3D.call(this), this.geometry = t, this.material = e, this.type = void 0 !== i ? i : THREE.LineStrip, this.geometry && (this.geometry.boundingSphere || this.geometry.computeBoundingSphere())
}, THREE.LineStrip = 0, THREE.LinePieces = 1, THREE.Line.prototype = new THREE.Object3D, THREE.Line.prototype.constructor = THREE.Line, THREE.Mesh = function(t, e) {
    if (THREE.Object3D.call(this), this.geometry = t, this.material = e, e instanceof Array && (console.warn("DEPRECATED: Mesh material can no longer be an Array. Using material at index 0..."), this.material = e[0]), this.geometry && (this.geometry.boundingSphere || this.geometry.computeBoundingSphere(), this.boundRadius = t.boundingSphere.radius, this.geometry.morphTargets.length)) {
        this.morphTargetBase = -1, this.morphTargetForcedOrder = [], this.morphTargetInfluences = [], this.morphTargetDictionary = {};
        for (var i = 0; i < this.geometry.morphTargets.length; i++) this.morphTargetInfluences.push(0), this.morphTargetDictionary[this.geometry.morphTargets[i].name] = i
    }
}, THREE.Mesh.prototype = new THREE.Object3D, THREE.Mesh.prototype.constructor = THREE.Mesh, THREE.Mesh.prototype.supr = THREE.Object3D.prototype, THREE.Mesh.prototype.getMorphTargetIndexByName = function(t) {
    return void 0 !== this.morphTargetDictionary[t] ? this.morphTargetDictionary[t] : (console.log("THREE.Mesh.getMorphTargetIndexByName: morph target " + t + " does not exist. Returning 0."), 0)
}, THREE.Bone = function(t) {
    THREE.Object3D.call(this), this.skin = t, this.skinMatrix = new THREE.Matrix4
}, THREE.Bone.prototype = new THREE.Object3D, THREE.Bone.prototype.constructor = THREE.Bone, THREE.Bone.prototype.supr = THREE.Object3D.prototype, THREE.Bone.prototype.update = function(t, e) {
    this.matrixAutoUpdate && (e |= this.updateMatrix()), (e || this.matrixWorldNeedsUpdate) && (t ? this.skinMatrix.multiply(t, this.matrix) : this.skinMatrix.copy(this.matrix), this.matrixWorldNeedsUpdate = !1, e = !0);
    var i, n = this.children.length;
    for (i = 0; n > i; i++) this.children[i].update(this.skinMatrix, e)
}, THREE.Sprite = function(t) {
    THREE.Object3D.call(this), this.color = new THREE.Color(void 0 !== t.color ? t.color : 16777215), this.map = t.map instanceof THREE.Texture ? t.map : THREE.ImageUtils.loadTexture(t.map), this.blending = void 0 !== t.blending ? t.blending : THREE.NormalBlending, this.useScreenCoordinates = void 0 !== t.useScreenCoordinates ? t.useScreenCoordinates : !0, this.mergeWith3D = void 0 !== t.mergeWith3D ? t.mergeWith3D : !this.useScreenCoordinates, this.affectedByDistance = void 0 !== t.affectedByDistance ? t.affectedByDistance : !this.useScreenCoordinates, this.scaleByViewport = void 0 !== t.scaleByViewport ? t.scaleByViewport : !this.affectedByDistance, this.alignment = t.alignment instanceof THREE.Vector2 ? t.alignment : THREE.SpriteAlignment.center, this.rotation3d = this.rotation, this.rotation = 0, this.opacity = 1, this.uvOffset = new THREE.Vector2(0, 0), this.uvScale = new THREE.Vector2(1, 1)
}, THREE.Sprite.prototype = new THREE.Object3D, THREE.Sprite.prototype.constructor = THREE.Sprite, THREE.Sprite.prototype.updateMatrix = function() {
    this.matrix.setPosition(this.position), this.rotation3d.set(0, 0, this.rotation), this.matrix.setRotationFromEuler(this.rotation3d), (1 !== this.scale.x || 1 !== this.scale.y) && (this.matrix.scale(this.scale), this.boundRadiusScale = Math.max(this.scale.x, this.scale.y)), this.matrixWorldNeedsUpdate = !0
}, THREE.SpriteAlignment = {}, THREE.SpriteAlignment.topLeft = new THREE.Vector2(1, -1), THREE.SpriteAlignment.topCenter = new THREE.Vector2(0, -1), THREE.SpriteAlignment.topRight = new THREE.Vector2(-1, -1), THREE.SpriteAlignment.centerLeft = new THREE.Vector2(1, 0), THREE.SpriteAlignment.center = new THREE.Vector2(0, 0), THREE.SpriteAlignment.centerRight = new THREE.Vector2(-1, 0), THREE.SpriteAlignment.bottomLeft = new THREE.Vector2(1, 1), THREE.SpriteAlignment.bottomCenter = new THREE.Vector2(0, 1), THREE.SpriteAlignment.bottomRight = new THREE.Vector2(-1, 1), THREE.Scene = function() {
    THREE.Object3D.call(this), this.overrideMaterial = this.fog = null, this.matrixAutoUpdate = !1, this.objects = [], this.lights = [], this.__objectsAdded = [], this.__objectsRemoved = []
}, THREE.Scene.prototype = new THREE.Object3D, THREE.Scene.prototype.constructor = THREE.Scene, THREE.Scene.prototype.addObject = function(t) {
    if (t instanceof THREE.Light) - 1 === this.lights.indexOf(t) && this.lights.push(t);
    else if (!(t instanceof THREE.Camera || t instanceof THREE.Bone) && -1 === this.objects.indexOf(t)) {
        this.objects.push(t), this.__objectsAdded.push(t);
        var e = this.__objectsRemoved.indexOf(t); - 1 !== e && this.__objectsRemoved.splice(e, 1)
    }
    for (e = 0; e < t.children.length; e++) this.addObject(t.children[e])
}, THREE.Scene.prototype.removeObject = function(t) {
    if (t instanceof THREE.Light) {
        var e = this.lights.indexOf(t); - 1 !== e && this.lights.splice(e, 1)
    } else t instanceof THREE.Camera || (e = this.objects.indexOf(t), -1 !== e && (this.objects.splice(e, 1), this.__objectsRemoved.push(t), e = this.__objectsAdded.indexOf(t), -1 !== e && this.__objectsAdded.splice(e, 1)));
    for (e = 0; e < t.children.length; e++) this.removeObject(t.children[e])
}, THREE.CanvasRenderer = function(t) {
    function e(t) {
        X != t && (Y.globalAlpha = X = t)
    }

    function i(t) {
        if (Z != t) {
            switch (t) {
                case THREE.NormalBlending:
                    Y.globalCompositeOperation = "source-over";
                    break;
                case THREE.AdditiveBlending:
                    Y.globalCompositeOperation = "lighter";
                    break;
                case THREE.SubtractiveBlending:
                    Y.globalCompositeOperation = "darker"
            }
            Z = t
        }
    }

    function n(t) {
        K != t && (Y.strokeStyle = K = t)
    }

    function r(t) {
        J != t && (Y.fillStyle = J = t)
    }
    var o, s, a, h, c, l, u, p, d, m, f, g, E, v, R, y, x, T, b, w, H, M, F, S, z, C, L, k, V, D, j, A, P, O, B, I, W, N, _, q = this,
        U = new THREE.Projector,
        t = t || {},
        Q = void 0 !== t.canvas ? t.canvas : document.createElement("canvas"),
        Y = Q.getContext("2d"),
        $ = new THREE.Color(0),
        G = 0,
        X = 1,
        Z = 0,
        K = null,
        J = null,
        te = null,
        ee = null,
        ie = null,
        ne = new THREE.RenderableVertex,
        re = new THREE.RenderableVertex,
        oe = new THREE.Color,
        se = new THREE.Color,
        ae = new THREE.Color,
        he = new THREE.Color,
        ce = new THREE.Color,
        le = [],
        ue = [],
        pe = new THREE.Rectangle,
        de = new THREE.Rectangle,
        me = new THREE.Rectangle,
        fe = !1,
        ge = new THREE.Color,
        Ee = new THREE.Color,
        ve = new THREE.Color,
        Re = new THREE.Vector3,
        t = 16;
    O = document.createElement("canvas"), O.width = O.height = 2, B = O.getContext("2d"), B.fillStyle = "rgba(0,0,0,1)", B.fillRect(0, 0, 2, 2), I = B.getImageData(0, 0, 2, 2), W = I.data, N = document.createElement("canvas"), N.width = N.height = t, _ = N.getContext("2d"), _.translate(-t / 2, -t / 2), _.scale(t, t), t--, this.domElement = Q, this.sortElements = this.sortObjects = this.autoClear = !0, this.info = {
        render: {
            vertices: 0,
            faces: 0
        }
    }, this.setSize = function(t, e) {
        h = t, c = e, l = Math.floor(h / 2), u = Math.floor(c / 2), Q.width = h, Q.height = c, pe.set(-l, -u, l, u), de.set(-l, -u, l, u), X = 1, Z = 0, ie = ee = te = J = K = null
    }, this.setClearColor = function(t, e) {
        $.copy(t), G = e, de.set(-l, -u, l, u)
    }, this.setClearColorHex = function(t, e) {
        $.setHex(t), G = e, de.set(-l, -u, l, u)
    }, this.clear = function() {
        Y.setTransform(1, 0, 0, -1, l, u), de.isEmpty() || (de.minSelf(pe), de.inflate(2), 1 > G && Y.clearRect(Math.floor(de.getX()), Math.floor(de.getY()), Math.floor(de.getWidth()), Math.floor(de.getHeight())), G > 0 && (i(THREE.NormalBlending), e(1), r("rgba(" + Math.floor(255 * $.r) + "," + Math.floor(255 * $.g) + "," + Math.floor(255 * $.b) + "," + G + ")"), Y.fillRect(Math.floor(de.getX()), Math.floor(de.getY()), Math.floor(de.getWidth()), Math.floor(de.getHeight()))), de.empty())
    }, this.render = function(t, h) {
        function c(t) {
            var e, i, n, r;
            for (ge.setRGB(0, 0, 0), Ee.setRGB(0, 0, 0), ve.setRGB(0, 0, 0), e = 0, i = t.length; i > e; e++) n = t[e], r = n.color, n instanceof THREE.AmbientLight ? (ge.r += r.r, ge.g += r.g, ge.b += r.b) : n instanceof THREE.DirectionalLight ? (Ee.r += r.r, Ee.g += r.g, Ee.b += r.b) : n instanceof THREE.PointLight && (ve.r += r.r, ve.g += r.g, ve.b += r.b)
        }

        function Q(t, e, i, n) {
            var r, o, s, a, h, c;
            for (r = 0, o = t.length; o > r; r++) s = t[r], a = s.color, s instanceof THREE.DirectionalLight ? (h = s.matrixWorld.getPosition(), c = i.dot(h), 0 >= c || (c *= s.intensity, n.r += a.r * c, n.g += a.g * c, n.b += a.b * c)) : s instanceof THREE.PointLight && (h = s.matrixWorld.getPosition(), c = i.dot(Re.sub(h, e).normalize()), 0 >= c || (c *= 0 == s.distance ? 1 : 1 - Math.min(e.distanceTo(h) / s.distance, 1), 0 != c && (c *= s.intensity, n.r += a.r * c, n.g += a.g * c, n.b += a.b * c)))
        }

        function $(t, o, s) {
            e(s.opacity), i(s.blending);
            var a, h, c, p, d, m;
            s instanceof THREE.ParticleBasicMaterial ? s.map && (p = s.map.image, d = p.width >> 1, m = p.height >> 1, s = o.scale.x * l, c = o.scale.y * u, a = s * d, h = c * m, me.set(t.x - a, t.y - h, t.x + a, t.y + h), pe.intersects(me) && (Y.save(), Y.translate(t.x, t.y), Y.rotate(-o.rotation), Y.scale(s, -c), Y.translate(-d, -m), Y.drawImage(p, 0, 0), Y.restore())) : s instanceof THREE.ParticleCanvasMaterial && (a = o.scale.x * l, h = o.scale.y * u, me.set(t.x - a, t.y - h, t.x + a, t.y + h), pe.intersects(me) && (n(s.color.getContextStyle()), r(s.color.getContextStyle()), Y.save(), Y.translate(t.x, t.y), Y.rotate(-o.rotation), Y.scale(a, h), s.program(Y), Y.restore()))
        }

        function G(t, r, o, s) {
            e(s.opacity), i(s.blending), Y.beginPath(), Y.moveTo(t.positionScreen.x, t.positionScreen.y), Y.lineTo(r.positionScreen.x, r.positionScreen.y), Y.closePath(), s instanceof THREE.LineBasicMaterial && (t = s.linewidth, te != t && (Y.lineWidth = te = t), t = s.linecap, ee != t && (Y.lineCap = ee = t), t = s.linejoin, ie != t && (Y.lineJoin = ie = t), n(s.color.getContextStyle()), Y.stroke(), me.inflate(2 * s.linewidth))
        }

        function X(t, n, r, o, s, c, l, u) {
            q.info.render.vertices += 3, q.info.render.faces++, e(u.opacity), i(u.blending), g = t.positionScreen.x, E = t.positionScreen.y, v = n.positionScreen.x, R = n.positionScreen.y, y = r.positionScreen.x, x = r.positionScreen.y, K(g, E, v, R, y, x), u instanceof THREE.MeshBasicMaterial ? u.map ? u.map.mapping instanceof THREE.UVMapping && (L = l.uvs[0], Te(g, E, v, R, y, x, L[o].u, L[o].v, L[s].u, L[s].v, L[c].u, L[c].v, u.map)) : u.envMap ? u.envMap.mapping instanceof THREE.SphericalReflectionMapping && (t = h.matrixWorldInverse, Re.copy(l.vertexNormalsWorld[o]), k = .5 * (Re.x * t.n11 + Re.y * t.n12 + Re.z * t.n13) + .5, V = .5 * -(Re.x * t.n21 + Re.y * t.n22 + Re.z * t.n23) + .5, Re.copy(l.vertexNormalsWorld[s]), D = .5 * (Re.x * t.n11 + Re.y * t.n12 + Re.z * t.n13) + .5, j = .5 * -(Re.x * t.n21 + Re.y * t.n22 + Re.z * t.n23) + .5, Re.copy(l.vertexNormalsWorld[c]), A = .5 * (Re.x * t.n11 + Re.y * t.n12 + Re.z * t.n13) + .5, P = .5 * -(Re.x * t.n21 + Re.y * t.n22 + Re.z * t.n23) + .5, Te(g, E, v, R, y, x, k, V, D, j, A, P, u.envMap)) : u.wireframe ? ye(u.color, u.wireframeLinewidth, u.wireframeLinecap, u.wireframeLinejoin) : xe(u.color) : u instanceof THREE.MeshLambertMaterial ? (u.map && !u.wireframe && (u.map.mapping instanceof THREE.UVMapping && (L = l.uvs[0], Te(g, E, v, R, y, x, L[o].u, L[o].v, L[s].u, L[s].v, L[c].u, L[c].v, u.map)), i(THREE.SubtractiveBlending)), fe ? u.wireframe || u.shading != THREE.SmoothShading || 3 != l.vertexNormalsWorld.length ? (oe.r = ge.r, oe.g = ge.g, oe.b = ge.b, Q(a, l.centroidWorld, l.normalWorld, oe), oe.r = Math.max(0, Math.min(u.color.r * oe.r, 1)), oe.g = Math.max(0, Math.min(u.color.g * oe.g, 1)), oe.b = Math.max(0, Math.min(u.color.b * oe.b, 1)), u.wireframe ? ye(oe, u.wireframeLinewidth, u.wireframeLinecap, u.wireframeLinejoin) : xe(oe)) : (se.r = ae.r = he.r = ge.r, se.g = ae.g = he.g = ge.g, se.b = ae.b = he.b = ge.b, Q(a, l.v1.positionWorld, l.vertexNormalsWorld[0], se), Q(a, l.v2.positionWorld, l.vertexNormalsWorld[1], ae), Q(a, l.v3.positionWorld, l.vertexNormalsWorld[2], he), se.r = Math.max(0, Math.min(u.color.r * se.r, 1)), se.g = Math.max(0, Math.min(u.color.g * se.g, 1)), se.b = Math.max(0, Math.min(u.color.b * se.b, 1)), ae.r = Math.max(0, Math.min(u.color.r * ae.r, 1)), ae.g = Math.max(0, Math.min(u.color.g * ae.g, 1)), ae.b = Math.max(0, Math.min(u.color.b * ae.b, 1)), he.r = Math.max(0, Math.min(u.color.r * he.r, 1)), he.g = Math.max(0, Math.min(u.color.g * he.g, 1)), he.b = Math.max(0, Math.min(u.color.b * he.b, 1)), ce.r = .5 * (ae.r + he.r), ce.g = .5 * (ae.g + he.g), ce.b = .5 * (ae.b + he.b), C = we(se, ae, he, ce), be(g, E, v, R, y, x, 0, 0, 1, 0, 0, 1, C)) : u.wireframe ? ye(u.color, u.wireframeLinewidth, u.wireframeLinecap, u.wireframeLinejoin) : xe(u.color)) : u instanceof THREE.MeshDepthMaterial ? (S = h.near, z = h.far, se.r = se.g = se.b = 1 - He(t.positionScreen.z, S, z), ae.r = ae.g = ae.b = 1 - He(n.positionScreen.z, S, z), he.r = he.g = he.b = 1 - He(r.positionScreen.z, S, z), ce.r = .5 * (ae.r + he.r), ce.g = .5 * (ae.g + he.g), ce.b = .5 * (ae.b + he.b), C = we(se, ae, he, ce), be(g, E, v, R, y, x, 0, 0, 1, 0, 0, 1, C)) : u instanceof THREE.MeshNormalMaterial && (oe.r = Me(l.normalWorld.x), oe.g = Me(l.normalWorld.y), oe.b = Me(l.normalWorld.z), u.wireframe ? ye(oe, u.wireframeLinewidth, u.wireframeLinecap, u.wireframeLinejoin) : xe(oe))
        }

        function Z(t, n, r, o, s, c, l, u, p) {
            q.info.render.vertices += 4, q.info.render.faces++, e(u.opacity), i(u.blending), u.map || u.envMap ? (X(t, n, o, 0, 1, 3, l, u, p), X(s, r, c, 1, 2, 3, l, u, p)) : (g = t.positionScreen.x, E = t.positionScreen.y, v = n.positionScreen.x, R = n.positionScreen.y, y = r.positionScreen.x, x = r.positionScreen.y, T = o.positionScreen.x, b = o.positionScreen.y, w = s.positionScreen.x, H = s.positionScreen.y, M = c.positionScreen.x, F = c.positionScreen.y, u instanceof THREE.MeshBasicMaterial ? (J(g, E, v, R, y, x, T, b), u.wireframe ? ye(u.color, u.wireframeLinewidth, u.wireframeLinecap, u.wireframeLinejoin) : xe(u.color)) : u instanceof THREE.MeshLambertMaterial ? fe ? u.wireframe || u.shading != THREE.SmoothShading || 4 != l.vertexNormalsWorld.length ? (oe.r = ge.r, oe.g = ge.g, oe.b = ge.b, Q(a, l.centroidWorld, l.normalWorld, oe), oe.r = Math.max(0, Math.min(u.color.r * oe.r, 1)), oe.g = Math.max(0, Math.min(u.color.g * oe.g, 1)), oe.b = Math.max(0, Math.min(u.color.b * oe.b, 1)), J(g, E, v, R, y, x, T, b), u.wireframe ? ye(oe, u.wireframeLinewidth, u.wireframeLinecap, u.wireframeLinejoin) : xe(oe)) : (se.r = ae.r = he.r = ce.r = ge.r, se.g = ae.g = he.g = ce.g = ge.g, se.b = ae.b = he.b = ce.b = ge.b, Q(a, l.v1.positionWorld, l.vertexNormalsWorld[0], se), Q(a, l.v2.positionWorld, l.vertexNormalsWorld[1], ae), Q(a, l.v4.positionWorld, l.vertexNormalsWorld[3], he), Q(a, l.v3.positionWorld, l.vertexNormalsWorld[2], ce), se.r = Math.max(0, Math.min(u.color.r * se.r, 1)), se.g = Math.max(0, Math.min(u.color.g * se.g, 1)), se.b = Math.max(0, Math.min(u.color.b * se.b, 1)), ae.r = Math.max(0, Math.min(u.color.r * ae.r, 1)), ae.g = Math.max(0, Math.min(u.color.g * ae.g, 1)), ae.b = Math.max(0, Math.min(u.color.b * ae.b, 1)), he.r = Math.max(0, Math.min(u.color.r * he.r, 1)), he.g = Math.max(0, Math.min(u.color.g * he.g, 1)), he.b = Math.max(0, Math.min(u.color.b * he.b, 1)), ce.r = Math.max(0, Math.min(u.color.r * ce.r, 1)), ce.g = Math.max(0, Math.min(u.color.g * ce.g, 1)), ce.b = Math.max(0, Math.min(u.color.b * ce.b, 1)), C = we(se, ae, he, ce), K(g, E, v, R, T, b), be(g, E, v, R, T, b, 0, 0, 1, 0, 0, 1, C), K(w, H, y, x, M, F), be(w, H, y, x, M, F, 1, 0, 1, 1, 0, 1, C)) : (J(g, E, v, R, y, x, T, b), u.wireframe ? ye(u.color, u.wireframeLinewidth, u.wireframeLinecap, u.wireframeLinejoin) : xe(u.color)) : u instanceof THREE.MeshNormalMaterial ? (oe.r = Me(l.normalWorld.x), oe.g = Me(l.normalWorld.y), oe.b = Me(l.normalWorld.z), J(g, E, v, R, y, x, T, b), u.wireframe ? ye(oe, u.wireframeLinewidth, u.wireframeLinecap, u.wireframeLinejoin) : xe(oe)) : u instanceof THREE.MeshDepthMaterial && (S = h.near, z = h.far, se.r = se.g = se.b = 1 - He(t.positionScreen.z, S, z), ae.r = ae.g = ae.b = 1 - He(n.positionScreen.z, S, z), he.r = he.g = he.b = 1 - He(o.positionScreen.z, S, z), ce.r = ce.g = ce.b = 1 - He(r.positionScreen.z, S, z), C = we(se, ae, he, ce), K(g, E, v, R, T, b), be(g, E, v, R, T, b, 0, 0, 1, 0, 0, 1, C), K(w, H, y, x, M, F), be(w, H, y, x, M, F, 1, 0, 1, 1, 0, 1, C)))
        }

        function K(t, e, i, n, r, o) {
            Y.beginPath(), Y.moveTo(t, e), Y.lineTo(i, n), Y.lineTo(r, o), Y.lineTo(t, e), Y.closePath()
        }

        function J(t, e, i, n, r, o, s, a) {
            Y.beginPath(), Y.moveTo(t, e), Y.lineTo(i, n), Y.lineTo(r, o), Y.lineTo(s, a), Y.lineTo(t, e), Y.closePath()
        }

        function ye(t, e, i, r) {
            te != e && (Y.lineWidth = te = e), ee != i && (Y.lineCap = ee = i), ie != r && (Y.lineJoin = ie = r), n(t.getContextStyle()), Y.stroke(), me.inflate(2 * e)
        }

        function xe(t) {
            r(t.getContextStyle()), Y.fill()
        }

        function Te(t, e, i, n, o, s, a, h, c, l, u, p, d) {
            if (0 != d.image.width) {
                if (1 == d.needsUpdate || void 0 == le[d.id]) {
                    var m = d.wrapS == THREE.RepeatWrapping,
                        f = d.wrapT == THREE.RepeatWrapping;
                    le[d.id] = Y.createPattern(d.image, m && f ? "repeat" : m && !f ? "repeat-x" : !m && f ? "repeat-y" : "no-repeat"), d.needsUpdate = !1
                }
                r(le[d.id]);
                var m = d.offset.x / d.repeat.x,
                    f = d.offset.y / d.repeat.y,
                    g = d.image.width * d.repeat.x,
                    E = d.image.height * d.repeat.y,
                    a = (a + m) * g,
                    h = (h + f) * E,
                    c = (c + m) * g,
                    l = (l + f) * E,
                    u = (u + m) * g,
                    p = (p + f) * E;
                i -= t, n -= e, o -= t, s -= e, c -= a, l -= h, u -= a, p -= h, m = c * p - u * l, 0 == m ? (void 0 == ue[d.id] && (e = document.createElement("canvas"), e.width = d.image.width, e.height = d.image.height, t = e.getContext("2d"), t.drawImage(d.image, 0, 0), ue[d.id] = t.getImageData(0, 0, d.image.width, d.image.height).data, delete e), e = ue[d.id], a = 4 * (Math.floor(a) + Math.floor(h) * d.image.width), oe.setRGB(e[a] / 255, e[a + 1] / 255, e[a + 2] / 255), xe(oe)) : (m = 1 / m, d = (p * i - l * o) * m, l = (p * n - l * s) * m, i = (c * o - u * i) * m, n = (c * s - u * n) * m, t = t - d * a - i * h, a = e - l * a - n * h, Y.save(), Y.transform(d, l, i, n, t, a), Y.fill(), Y.restore())
            }
        }

        function be(t, e, i, n, r, o, s, a, h, c, l, u, p) {
            var d, m;
            d = p.width - 1, m = p.height - 1, s *= d, a *= m, h *= d, c *= m, l *= d, u *= m, i -= t, n -= e, r -= t, o -= e, h -= s, c -= a, l -= s, u -= a, m = 1 / (h * u - l * c), d = (u * i - c * r) * m, c = (u * n - c * o) * m, i = (h * r - l * i) * m, n = (h * o - l * n) * m, t = t - d * s - i * a, e = e - c * s - n * a, Y.save(), Y.transform(d, c, i, n, t, e), Y.clip(), Y.drawImage(p, 0, 0), Y.restore()
        }

        function we(t, e, i, n) {
            var r = ~~(255 * t.r),
                o = ~~(255 * t.g),
                t = ~~(255 * t.b),
                s = ~~(255 * e.r),
                a = ~~(255 * e.g),
                e = ~~(255 * e.b),
                h = ~~(255 * i.r),
                c = ~~(255 * i.g),
                i = ~~(255 * i.b),
                l = ~~(255 * n.r),
                u = ~~(255 * n.g),
                n = ~~(255 * n.b);
            return W[0] = 0 > r ? 0 : r > 255 ? 255 : r, W[1] = 0 > o ? 0 : o > 255 ? 255 : o, W[2] = 0 > t ? 0 : t > 255 ? 255 : t, W[4] = 0 > s ? 0 : s > 255 ? 255 : s, W[5] = 0 > a ? 0 : a > 255 ? 255 : a, W[6] = 0 > e ? 0 : e > 255 ? 255 : e, W[8] = 0 > h ? 0 : h > 255 ? 255 : h, W[9] = 0 > c ? 0 : c > 255 ? 255 : c, W[10] = 0 > i ? 0 : i > 255 ? 255 : i, W[12] = 0 > l ? 0 : l > 255 ? 255 : l, W[13] = 0 > u ? 0 : u > 255 ? 255 : u, W[14] = 0 > n ? 0 : n > 255 ? 255 : n, B.putImageData(I, 0, 0), _.drawImage(O, 0, 0), N
        }

        function He(t, e, i) {
            return t = (t - e) / (i - e), t * t * (3 - 2 * t)
        }

        function Me(t) {
            return t = .5 * (t + 1), 0 > t ? 0 : t > 1 ? 1 : t
        }

        function Fe(t, e) {
            var i = e.x - t.x,
                n = e.y - t.y,
                r = i * i + n * n;
            0 != r && (r = 1 / Math.sqrt(r), i *= r, n *= r, e.x += i, e.y += n, t.x -= i, t.y -= n)
        }
        var Se, ze, Ce, Le;
        for (this.autoClear ? this.clear() : Y.setTransform(1, 0, 0, -1, l, u), q.info.render.vertices = 0, q.info.render.faces = 0, o = U.projectScene(t, h, this.sortElements), s = o.elements, a = o.lights, (fe = a.length > 0) && c(a), Se = 0, ze = s.length; ze > Se; Se++) Ce = s[Se], Le = Ce.material, Le = Le instanceof THREE.MeshFaceMaterial ? Ce.faceMaterial : Le, null == Le || 0 == Le.opacity || (me.empty(), Ce instanceof THREE.RenderableParticle ? (p = Ce, p.x *= l, p.y *= u, $(p, Ce, Le, t)) : Ce instanceof THREE.RenderableLine ? (p = Ce.v1, d = Ce.v2, p.positionScreen.x *= l, p.positionScreen.y *= u, d.positionScreen.x *= l, d.positionScreen.y *= u, me.addPoint(p.positionScreen.x, p.positionScreen.y), me.addPoint(d.positionScreen.x, d.positionScreen.y), pe.intersects(me) && G(p, d, Ce, Le, t)) : Ce instanceof THREE.RenderableFace3 ? (p = Ce.v1, d = Ce.v2, m = Ce.v3, p.positionScreen.x *= l, p.positionScreen.y *= u, d.positionScreen.x *= l, d.positionScreen.y *= u, m.positionScreen.x *= l, m.positionScreen.y *= u, Le.overdraw && (Fe(p.positionScreen, d.positionScreen), Fe(d.positionScreen, m.positionScreen), Fe(m.positionScreen, p.positionScreen)), me.add3Points(p.positionScreen.x, p.positionScreen.y, d.positionScreen.x, d.positionScreen.y, m.positionScreen.x, m.positionScreen.y), pe.intersects(me) && X(p, d, m, 0, 1, 2, Ce, Le, t)) : Ce instanceof THREE.RenderableFace4 && (p = Ce.v1, d = Ce.v2, m = Ce.v3, f = Ce.v4, p.positionScreen.x *= l, p.positionScreen.y *= u, d.positionScreen.x *= l, d.positionScreen.y *= u, m.positionScreen.x *= l, m.positionScreen.y *= u, f.positionScreen.x *= l, f.positionScreen.y *= u, ne.positionScreen.copy(d.positionScreen), re.positionScreen.copy(f.positionScreen), Le.overdraw && (Fe(p.positionScreen, d.positionScreen), Fe(d.positionScreen, f.positionScreen), Fe(f.positionScreen, p.positionScreen), Fe(m.positionScreen, ne.positionScreen), Fe(m.positionScreen, re.positionScreen)), me.addPoint(p.positionScreen.x, p.positionScreen.y), me.addPoint(d.positionScreen.x, d.positionScreen.y), me.addPoint(m.positionScreen.x, m.positionScreen.y), me.addPoint(f.positionScreen.x, f.positionScreen.y), pe.intersects(me) && Z(p, d, m, f, ne, re, Ce, Le, t)), de.addRectangle(me));
        Y.setTransform(1, 0, 0, 1, 0, 0)
    }
}, THREE.RenderableVertex = function() {
    this.positionWorld = new THREE.Vector3, this.positionScreen = new THREE.Vector4, this.visible = !0
}, THREE.RenderableVertex.prototype.copy = function(t) {
    this.positionWorld.copy(t.positionWorld), this.positionScreen.copy(t.positionScreen)
}, THREE.RenderableFace3 = function() {
    this.v1 = new THREE.RenderableVertex, this.v2 = new THREE.RenderableVertex, this.v3 = new THREE.RenderableVertex, this.centroidWorld = new THREE.Vector3, this.centroidScreen = new THREE.Vector3, this.normalWorld = new THREE.Vector3, this.vertexNormalsWorld = [new THREE.Vector3, new THREE.Vector3, new THREE.Vector3], this.faceMaterial = this.material = null, this.uvs = [
        []
    ], this.z = null
}, THREE.RenderableFace4 = function() {
    this.v1 = new THREE.RenderableVertex, this.v2 = new THREE.RenderableVertex, this.v3 = new THREE.RenderableVertex, this.v4 = new THREE.RenderableVertex, this.centroidWorld = new THREE.Vector3, this.centroidScreen = new THREE.Vector3, this.normalWorld = new THREE.Vector3, this.vertexNormalsWorld = [new THREE.Vector3, new THREE.Vector3, new THREE.Vector3, new THREE.Vector3], this.faceMaterial = this.material = null, this.uvs = [
        []
    ], this.z = null
}, THREE.RenderableObject = function() {
    this.z = this.object = null
}, THREE.RenderableParticle = function() {
    this.rotation = this.z = this.y = this.x = null, this.scale = new THREE.Vector2, this.material = null
}, THREE.RenderableLine = function() {
    this.z = null, this.v1 = new THREE.RenderableVertex, this.v2 = new THREE.RenderableVertex, this.material = null
}, Particle3D = function(t) {
    THREE.Particle.call(this, t), this.velocity = new THREE.Vector3(0, -4, 0), this.velocity.rotateX(randomRange(-45, 45)), this.velocity.rotateY(randomRange(0, 360)), this.gravity = new THREE.Vector3(0, 0, 0), this.drag = 1
}, Particle3D.prototype = new THREE.Particle, Particle3D.prototype.constructor = Particle3D, Particle3D.prototype.updatePhysics = function() {
    this.velocity.multiplyScalar(this.drag), this.velocity.addSelf(this.gravity), this.position.addSelf(this.velocity)
};
var TO_RADIANS = Math.PI / 180;
THREE.Vector3.prototype.rotateY = function(t) {
    cosRY = Math.cos(t * TO_RADIANS), sinRY = Math.sin(t * TO_RADIANS);
    var e = this.z,
        i = this.x;
    this.x = i * cosRY + e * sinRY, this.z = i * -sinRY + e * cosRY
}, THREE.Vector3.prototype.rotateX = function(t) {
    cosRY = Math.cos(t * TO_RADIANS), sinRY = Math.sin(t * TO_RADIANS);
    var e = this.z,
        i = this.y;
    this.y = i * cosRY + e * sinRY, this.z = i * -sinRY + e * cosRY
}, THREE.Vector3.prototype.rotateZ = function(t) {
    cosRY = Math.cos(t * TO_RADIANS), sinRY = Math.sin(t * TO_RADIANS);
    var e = this.x,
        i = this.y;
    this.y = i * cosRY + e * sinRY, this.x = i * -sinRY + e * cosRY
};
var PageTransitions = function() {
    function t() {
        $(".page").each(function() {
            var t = $(this);
            t.data("originalClassList", t.attr("class"))
        }), $("#main").each(function() {
            var t = $(this);
            t.data("current", 0), t.data("isAnimating", !1), t.children(".page").eq(r).addClass("page-current")
        }), $("#main").on("click", ".page-trigger", function() {
            $pageTrigger = $(this), e($pageTrigger)
        })
    }

    function e(t) {
        if (!t.attr("data-animation")) return alert("Transition.js : Invalid attribute configuration. \n\n 'data-animation' attribute not found"), !1;
        if (!t.attr("data-goto")) return alert("Transition.js : Invalid attribute configuration. \n\n 'data-goto' attribute not found"), !1;
        var e, n, r, o, h = t.data("animation").toString();
        if (-1 != h.indexOf("-")) {
            var c = h.split("-");
            o = parseInt(c[Math.floor(Math.random() * c.length)])
        } else o = parseInt(h);
        if (o > 67) return alert("Transition.js : Invalid 'data-animation' attribute configuration. Animation number should not be greater than 67"), !1;
        switch (o) {
            case 1:
                n = "page-moveFromRight", r = "page-moveToLeft";
                break;
            case 2:
                n = "page-moveFromLeft", r = "page-moveToRight";
                break;
            case 3:
                n = "page-moveFromBottom", r = "page-moveToTop";
                break;
            case 4:
                n = "page-moveFromTop", r = "page-moveToBottom";
                break;
            case 5:
                n = "page-moveFromRight page-ontop", r = "page-fade";
                break;
            case 6:
                n = "page-moveFromLeft page-ontop", r = "page-fade";
                break;
            case 7:
                n = "page-moveFromBottom page-ontop", r = "page-fade";
                break;
            case 8:
                n = "page-moveFromTop page-ontop", r = "page-fade";
                break;
            case 9:
                n = "page-moveFromRightFade", r = "page-moveToLeftFade";
                break;
            case 10:
                n = "page-moveFromLeftFade", r = "page-moveToRightFade";
                break;
            case 11:
                n = "page-moveFromBottomFade", r = "page-moveToTopFade";
                break;
            case 12:
                n = "page-moveFromTopFade", r = "page-moveToBottomFade";
                break;
            case 13:
                n = "page-moveFromRight", r = "page-moveToLeftEasing page-ontop";
                break;
            case 14:
                n = "page-moveFromLeft", r = "page-moveToRightEasing page-ontop";
                break;
            case 15:
                n = "page-moveFromBottom", r = "page-moveToTopEasing page-ontop";
                break;
            case 16:
                n = "page-moveFromTop", r = "page-moveToBottomEasing page-ontop";
                break;
            case 17:
                n = "page-moveFromRight page-ontop", r = "page-scaleDown";
                break;
            case 18:
                n = "page-moveFromLeft page-ontop", r = "page-scaleDown";
                break;
            case 19:
                n = "page-moveFromBottom page-ontop", r = "page-scaleDown";
                break;
            case 20:
                n = "page-moveFromTop page-ontop", r = "page-scaleDown";
                break;
            case 21:
                n = "page-scaleUpDown page-delay300", r = "page-scaleDown";
                break;
            case 22:
                n = "page-scaleUp page-delay300", r = "page-scaleDownUp";
                break;
            case 23:
                n = "page-scaleUp", r = "page-moveToLeft page-ontop";
                break;
            case 24:
                n = "page-scaleUp", r = "page-moveToRight page-ontop";
                break;
            case 25:
                n = "page-scaleUp", r = "page-moveToTop page-ontop";
                break;
            case 26:
                n = "page-scaleUp", r = "page-moveToBottom page-ontop";
                break;
            case 27:
                n = "page-scaleUpCenter page-delay400", r = "page-scaleDownCenter";
                break;
            case 28:
                n = "page-moveFromRight page-delay200 page-ontop", r = "page-rotateRightSideFirst";
                break;
            case 29:
                n = "page-moveFromLeft page-delay200 page-ontop", r = "page-rotateLeftSideFirst";
                break;
            case 30:
                n = "page-moveFromTop page-delay200 page-ontop", r = "page-rotateTopSideFirst";
                break;
            case 31:
                n = "page-moveFromBottom page-delay200 page-ontop", r = "page-rotateBottomSideFirst";
                break;
            case 32:
                n = "page-flipInLeft page-delay500", r = "page-flipOutRight";
                break;
            case 33:
                n = "page-flipInRight page-delay500", r = "page-flipOutLeft";
                break;
            case 34:
                n = "page-flipInBottom page-delay500", r = "page-flipOutTop";
                break;
            case 35:
                n = "page-flipInTop page-delay500", r = "page-flipOutBottom";
                break;
            case 36:
                n = "page-scaleUp", r = "page-rotateFall page-ontop";
                break;
            case 37:
                n = "page-rotateInNewspaper page-delay500", r = "page-rotateOutNewspaper";
                break;
            case 38:
                n = "page-moveFromRight", r = "page-rotatePushLeft";
                break;
            case 39:
                n = "page-moveFromLeft", r = "page-rotatePushRight";
                break;
            case 40:
                n = "page-moveFromBottom", r = "page-rotatePushTop";
                break;
            case 41:
                n = "page-moveFromTop", r = "page-rotatePushBottom";
                break;
            case 42:
                n = "page-rotatePullRight page-delay180", r = "page-rotatePushLeft";
                break;
            case 43:
                n = "page-rotatePullLeft page-delay180", r = "page-rotatePushRight";
                break;
            case 44:
                n = "page-rotatePullBottom page-delay180", r = "page-rotatePushTop";
                break;
            case 45:
                n = "page-rotatePullTop page-delay180", r = "page-rotatePushBottom";
                break;
            case 46:
                n = "page-moveFromRightFade", r = "page-rotateFoldLeft";
                break;
            case 47:
                n = "page-moveFromLeftFade", r = "page-rotateFoldRight";
                break;
            case 48:
                n = "page-moveFromBottomFade", r = "page-rotateFoldTop";
                break;
            case 49:
                n = "page-moveFromTopFade", r = "page-rotateFoldBottom";
                break;
            case 50:
                n = "page-rotateUnfoldLeft", r = "page-moveToRightFade";
                break;
            case 51:
                n = "page-rotateUnfoldRight", r = "page-moveToLeftFade";
                break;
            case 52:
                n = "page-rotateUnfoldTop", r = "page-moveToBottomFade";
                break;
            case 53:
                n = "page-rotateUnfoldBottom", r = "page-moveToTopFade";
                break;
            case 54:
                n = "page-rotateRoomLeftIn", r = "page-rotateRoomLeftOut page-ontop";
                break;
            case 55:
                n = "page-rotateRoomRightIn", r = "page-rotateRoomRightOut page-ontop";
                break;
            case 56:
                n = "page-rotateRoomTopIn", r = "page-rotateRoomTopOut page-ontop";
                break;
            case 57:
                n = "page-rotateRoomBottomIn", r = "page-rotateRoomBottomOut page-ontop";
                break;
            case 58:
                n = "page-rotateCubeLeftIn", r = "page-rotateCubeLeftOut page-ontop";
                break;
            case 59:
                n = "page-rotateCubeRightIn", r = "page-rotateCubeRightOut page-ontop";
                break;
            case 60:
                n = "page-rotateCubeTopIn", r = "page-rotateCubeTopOut page-ontop";
                break;
            case 61:
                n = "page-rotateCubeBottomIn", r = "page-rotateCubeBottomOut page-ontop";
                break;
            case 62:
                n = "page-rotateCarouselLeftIn", r = "page-rotateCarouselLeftOut page-ontop";
                break;
            case 63:
                n = "page-rotateCarouselRightIn", r = "page-rotateCarouselRightOut page-ontop";
                break;
            case 64:
                n = "page-rotateCarouselTopIn", r = "page-rotateCarouselTopOut page-ontop";
                break;
            case 65:
                n = "page-rotateCarouselBottomIn", r = "page-rotateCarouselBottomOut page-ontop";
                break;
            case 66:
                n = "page-rotateSidesIn page-delay200", r = "page-rotateSidesOut";
                break;
            case 67:
                n = "page-rotateSlideIn", r = "page-rotateSlideOut"
        }
        var l, u = $("#main"),
            p = u.data("current"),
            d = u.children("div.page"),
            m = d.length,
            f = !1,
            g = !1;
        if (e = parseInt(t.data("goto")), e > m) alert("Transition.js : Invalid 'data-goto' attribute configuration.");
        else {
            if (l = p, u.data("isAnimating")) return !1;
            u.data("isAnimating", !0);
            var E = d.eq(p);
            if (-1 == e ? m - 1 > p ? ++p : p = 0 : -2 == e ? 0 == p ? p = m - 1 : m - 1 >= p ? --p : p = 0 : p = e - 1, l != p) {
                u.data("current", p);
                var v = d.eq(p).addClass("page-current");
                E.addClass(r).on(s, function() {
                    E.off(s), f = !0, g && i(u, v, E)
                }), v.addClass(n).on(s, function() {
                    v.off(s), g = !0, f && i(u, v, E)
                })
            } else u.data("isAnimating", !1)
        }
        a || i(u, v, E)
    }

    function i(t, e, i) {
        n(e, i), t.data("isAnimating", !1)
    }

    function n(t, e) {
        console.log(t, e), t.attr("class", t.data("originalClassList") + " page-current"), e.attr("class", e.data("originalClassList")).html("")
    }
    var r = 0,
        o = {
            WebkitAnimation: "webkitAnimationEnd",
            OAnimation: "oAnimationEnd",
            msAnimation: "MSAnimationEnd",
            animation: "animationend"
        },
        s = o[Modernizr.prefixed("animation")],
        a = Modernizr.cssanimations;
    return {
        init: t
    }
}();
$(document).ready(function() {
    PageTransitions.init()
});