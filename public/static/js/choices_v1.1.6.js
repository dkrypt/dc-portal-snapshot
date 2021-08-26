/*! choices.js v1.1.5 | (c) 2016 Josh Johnson | https://github.com/jshjohnson/Choices#readme */
!(function (e) {
  function t(n) {
    if (i[n]) return i[n].exports;
    var s = (i[n] = { exports: {}, id: n, loaded: !1 });
    return e[n].call(s.exports, s, s.exports, t), (s.loaded = !0), s.exports;
  }
  var i = {};
  return (t.m = e), (t.c = i), (t.p = "/assets/scripts/dist/"), t(0);
})([
  function (e, t, i) {
    e.exports = i(1);
  },
  function (e, t, i) {
    "use strict";
    function n(e) {
      return e && e.__esModule ? e : { default: e };
    }
    function s(e) {
      if (Array.isArray(e)) {
        for (var t = 0, i = Array(e.length); t < e.length; t++) i[t] = e[t];
        return i;
      }
      return Array.from(e);
    }
    function o(e, t) {
      if (!(e instanceof t))
        throw new TypeError("Cannot call a class as a function");
    }
    Object.defineProperty(t, "__esModule", { value: !0 });
    var r = (function () {
        function e(e, t) {
          for (var i = 0; i < t.length; i++) {
            var n = t[i];
            (n.enumerable = n.enumerable || !1),
              (n.configurable = !0),
              "value" in n && (n.writable = !0),
              Object.defineProperty(e, n.key, n);
          }
        }
        return function (t, i, n) {
          return i && e(t.prototype, i), n && e(t, n), t;
        };
      })(),
      a = i(2),
      c = n(a),
      l = i(3),
      h = n(l),
      u = i(22),
      d = i(23);
    i(24);
    var p = (function () {
      function e() {
        var t = this,
          i =
            arguments.length <= 0 || void 0 === arguments[0]
              ? "[data-choice]"
              : arguments[0],
          n =
            arguments.length <= 1 || void 0 === arguments[1]
              ? {}
              : arguments[1];
        if ((o(this, e), (0, d.isType)("String", i))) {
          var s = document.querySelectorAll(i);
          if (s.length > 1)
            for (var r = 1; r < s.length; r++) {
              var a = s[r];
              new e(a, n);
            }
        }
        var c = {
          items: [],
          choices: [],
          maxItemCount: -1,
          addItems: !0,
          removeItems: !0,
          removeItemButton: !1,
          editItems: !1,
          duplicateItems: !0,
          delimiter: ",",
          paste: !0,
          search: !0,
          flip: !0,
          regexFilter: null,
          sortFilter: d.sortByAlpha,
          sortFields: ["label", "value"],
          placeholder: !0,
          placeholderValue: null,
          prependValue: null,
          appendValue: null,
          loadingText: "Loading...",
          noResultsText: "No results round",
          noChoicesText: "No choices to choose from",
          classNames: {
            containerOuter: "choices",
            containerInner: "choices__inner",
            input: "choices__input",
            inputCloned: "choices__input--cloned",
            list: "choices__list",
            listItems: "choices__list--multiple",
            listSingle: "choices__list--single",
            listDropdown: "choices__list--dropdown",
            item: "choices__item",
            itemSelectable: "choices__item--selectable",
            itemDisabled: "choices__item--disabled",
            itemChoice: "choices__item--choice",
            placeholder: "choices__placeholder",
            group: "choices__group",
            groupHeading: "choices__heading",
            button: "choices__button",
            activeState: "is-active",
            focusState: "is-focused",
            openState: "is-open",
            disabledState: "is-disabled",
            highlightedState: "is-highlighted",
            hiddenState: "is-hidden",
            flippedState: "is-flipped",
            loadingState: "is-loading",
          },
          callbackOnInit: function () {},
          callbackOnAddItem: function (e, t, i) {},
          callbackOnRemoveItem: function (e, t, i) {},
          callbackOnHighlightItem: function (e, t, i) {},
          callbackOnUnhighlightItem: function (e, t, i) {},
          callbackOnChange: function (e, t) {},
        };
        (this.config = (0, d.extend)(c, n)),
          (this.store = new h.default(this.render)),
          (this.initialised = !1),
          (this.currentState = {}),
          (this.prevState = {}),
          (this.currentValue = ""),
          (this.passedElement = (0, d.isType)("String", i)
            ? document.querySelector(i)
            : i),
          (this.highlightPosition = 0),
          (this.canSearch = this.config.search),
          (this.presetChoices = this.config.choices),
          (this.presetItems = this.config.items),
          this.passedElement.value &&
            (this.presetItems = this.presetItems.concat(
              this.passedElement.value.split(this.config.delimiter)
            )),
          (this.init = this.init.bind(this)),
          (this.render = this.render.bind(this)),
          (this.destroy = this.destroy.bind(this)),
          (this.disable = this.disable.bind(this)),
          (this._onFocus = this._onFocus.bind(this)),
          (this._onBlur = this._onBlur.bind(this)),
          (this._onKeyUp = this._onKeyUp.bind(this)),
          (this._onKeyDown = this._onKeyDown.bind(this)),
          (this._onClick = this._onClick.bind(this)),
          (this._onTouchMove = this._onTouchMove.bind(this)),
          (this._onTouchEnd = this._onTouchEnd.bind(this)),
          (this._onMouseDown = this._onMouseDown.bind(this)),
          (this._onMouseOver = this._onMouseOver.bind(this)),
          (this._onPaste = this._onPaste.bind(this)),
          (this._onInput = this._onInput.bind(this)),
          (this.focusAndHideDropdown = !1),
          (this.wasTap = !0);
        var l =
          "querySelector" in document &&
          "addEventListener" in document &&
          "classList" in document.createElement("div");
        l || console.error("Choices: Your browser doesn't support Choices");
        var u =
          this.passedElement &&
          (0, d.isElement)(this.passedElement) &&
          ["select-one", "select-multiple", "text"].some(function (e) {
            return e === t.passedElement.type;
          });
        if (u) {
          if ("active" === this.passedElement.getAttribute("data-choice"))
            return;
          this.init();
        } else console.error("Incompatible input passed");
      }
      return (
        r(e, [
          {
            key: "init",
            value: function () {
              var e =
                arguments.length <= 0 || void 0 === arguments[0]
                  ? this.config.callbackOnInit
                  : arguments[0];
              this.initialised !== !0 &&
                ((this.initialised = !0),
                this._createTemplates(),
                this._createInput(),
                this.store.subscribe(this.render),
                this.render(),
                this._addEventListeners(),
                e &&
                  ((0, d.isType)("Function", e)
                    ? e()
                    : console.error(
                        "callbackOnInit: Callback is not a function"
                      )));
            },
          },
          {
            key: "destroy",
            value: function () {
              this._removeEventListeners(),
                this.passedElement.classList.remove(
                  this.config.classNames.input,
                  this.config.classNames.hiddenState
                ),
                (this.passedElement.tabIndex = ""),
                this.passedElement.removeAttribute("style", "display:none;"),
                this.passedElement.removeAttribute("aria-hidden"),
                (this.containerOuter.outerHTML = this.passedElement.outerHTML),
                (this.passedElement = null),
                (this.userConfig = null),
                (this.config = null),
                (this.store = null);
            },
          },
          {
            key: "highlightItem",
            value: function (e) {
              if (e) {
                var t = e.id;
                if (
                  (this.store.dispatch((0, u.highlightItem)(t, !0)),
                  this.config.callbackOnHighlightItem)
                ) {
                  var i = this.config.callbackOnHighlightItem;
                  (0, d.isType)("Function", i)
                    ? i(t, e.value, this.passedElement)
                    : console.error(
                        "callbackOnHighlightItem: Callback is not a function"
                      );
                }
                return this;
              }
            },
          },
          {
            key: "unhighlightItem",
            value: function (e) {
              if (e) {
                var t = e.id;
                if (
                  (this.store.dispatch((0, u.highlightItem)(t, !1)),
                  this.config.callbackOnUnhighlightItem)
                ) {
                  var i = this.config.callbackOnUnhighlightItem;
                  (0, d.isType)("Function", i)
                    ? i(t, e.value, this.passedElement)
                    : console.error(
                        "callbackOnUnhighlightItem: Callback is not a function"
                      );
                }
                return this;
              }
            },
          },
          {
            key: "highlightAll",
            value: function () {
              var e = this,
                t = this.store.getItems();
              return (
                t.forEach(function (t) {
                  e.highlightItem(t);
                }),
                this
              );
            },
          },
          {
            key: "unhighlightAll",
            value: function () {
              var e = this,
                t = this.store.getItems();
              return (
                t.forEach(function (t) {
                  e.unhighlightItem(t);
                }),
                this
              );
            },
          },
          {
            key: "removeItemsByValue",
            value: function (e) {
              var t = this;
              if (!e || !(0, d.isType)("String", e))
                return void console.error(
                  "removeItemsByValue: No value was passed to be removed"
                );
              var i = this.store.getItemsFilteredByActive();
              return (
                i.forEach(function (i) {
                  i.value === e && t._removeItem(i);
                }),
                this
              );
            },
          },
          {
            key: "removeActiveItems",
            value: function (e) {
              var t = this,
                i = this.store.getItemsFilteredByActive();
              return (
                i.forEach(function (i) {
                  i.active && e !== i.id && t._removeItem(i);
                }),
                this
              );
            },
          },
          {
            key: "removeHighlightedItems",
            value: function () {
              var e = this,
                t = this.store.getItemsFilteredByActive();
              return (
                t.forEach(function (t) {
                  t.highlighted && t.active && e._removeItem(t);
                }),
                this
              );
            },
          },
          {
            key: "showDropdown",
            value: function () {
              var e =
                  !(arguments.length <= 0 || void 0 === arguments[0]) &&
                  arguments[0],
                t = document.body,
                i = document.documentElement,
                n = Math.max(
                  t.scrollHeight,
                  t.offsetHeight,
                  i.clientHeight,
                  i.scrollHeight,
                  i.offsetHeight
                );
              this.containerOuter.classList.add(
                this.config.classNames.openState
              ),
                this.containerOuter.setAttribute("aria-expanded", "true"),
                this.dropdown.classList.add(this.config.classNames.activeState);
              var s = this.dropdown.getBoundingClientRect(),
                o = Math.ceil(s.top + window.scrollY + s.height),
                r = !!this.config.flip && o >= n;
              return (
                r
                  ? this.containerOuter.classList.add(
                      this.config.classNames.flippedState
                    )
                  : this.containerOuter.classList.remove(
                      this.config.classNames.flippedState
                    ),
                e &&
                  this.canSearch &&
                  document.activeElement !== this.input &&
                  this.input.focus(),
                this
              );
            },
          },
          {
            key: "hideDropdown",
            value: function () {
              var e = this.containerOuter.classList.contains(
                this.config.classNames.flippedState
              );
              return (
                this.containerOuter.classList.remove(
                  this.config.classNames.openState
                ),
                this.containerOuter.setAttribute("aria-expanded", "false"),
                this.dropdown.classList.remove(
                  this.config.classNames.activeState
                ),
                e &&
                  this.containerOuter.classList.remove(
                    this.config.classNames.flippedState
                  ),
                this
              );
            },
          },
          {
            key: "toggleDropdown",
            value: function () {
              var e = this.dropdown.classList.contains(
                this.config.classNames.activeState
              );
              return e ? this.hideDropdown(!0) : this.showDropdown(!0), this;
            },
          },
          {
            key: "getValue",
            value: function () {
              var e = this,
                t =
                  !(arguments.length <= 0 || void 0 === arguments[0]) &&
                  arguments[0],
                i = this.store.getItemsFilteredByActive(),
                n = [];
              return (
                i.forEach(function (i) {
                  "text" === e.passedElement.type
                    ? n.push(t ? i.value : i)
                    : i.active && n.push(t ? i.value : i);
                }),
                "select-one" === this.passedElement.type ? n[0] : n
              );
            },
          },
          {
            key: "setValue",
            value: function (e) {
              var t = this;
              if (this.initialised === !0) {
                var i = [].concat(s(e));
                i.forEach(function (e) {
                  if ((0, d.isType)("Object", e)) {
                    if (!e.value) return;
                    "text" !== t.passedElement.type
                      ? t._addChoice(!0, !1, e.value, e.label, -1)
                      : t._addItem(e.value, e.label, e.id);
                  } else (0, d.isType)("String", e) && ("text" !== t.passedElement.type ? t._addChoice(!0, !1, e, e, -1) : t._addItem(e));
                });
              }
              return this;
            },
          },
          {
            key: "setValueByChoice",
            value: function (e) {
              var t = this;
              return (
                "text" !== this.passedElement.type &&
                  !(function () {
                    var i = t.store.getChoices(),
                      n = (0, d.isType)("Array", e) ? e : [e];
                    n.forEach(function (e) {
                      var n = i.find(function (t) {
                        return t.value === e;
                      });
                      n
                        ? n.selected
                          ? console.warn(
                              "Attempting to select choice already selected"
                            )
                          : t._addItem(n.value, n.label, n.id)
                        : console.warn(
                            "Attempting to select choice that does not exist"
                          );
                    });
                  })(),
                this
              );
            },
          },
          {
            key: "setChoices",
            value: function (e, t, i) {
              var n = this;
              if (
                this.initialised === !0 &&
                ("select-one" === this.passedElement.type ||
                  "select-multiple" === this.passedElement.type)
              ) {
                if (!(0, d.isType)("Array", e) || !t) return;
                e &&
                  e.length &&
                  (this.containerOuter.classList.remove(
                    this.config.classNames.loadingState
                  ),
                  e.forEach(function (e, s) {
                    e.choices
                      ? n._addGroup(e, s)
                      : n._addChoice(
                          !!e.selected && e.selected,
                          !!e.disabled && e.disabled,
                          e[t],
                          e[i]
                        );
                  }));
              }
              return this;
            },
          },
          {
            key: "clearStore",
            value: function () {
              return this.store.dispatch((0, u.clearAll)()), this;
            },
          },
          {
            key: "clearInput",
            value: function () {
              return (
                this.input.value && (this.input.value = ""),
                "select-one" !== this.passedElement.type &&
                  (this.input.style.width = (0, d.getWidthOfInput)(this.input)),
                this
              );
            },
          },
          {
            key: "disable",
            value: function () {
              return (
                (this.passedElement.disabled = !0),
                this.initialised &&
                  (this.containerOuter.classList.contains(
                    this.config.classNames.disabledState
                  ) ||
                    (this._removeEventListeners(),
                    this.passedElement.setAttribute("disabled", ""),
                    this.input.setAttribute("disabled", ""),
                    this.containerOuter.classList.add(
                      this.config.classNames.disabledState
                    ),
                    this.containerOuter.setAttribute("aria-disabled", "true"))),
                this
              );
            },
          },
          {
            key: "enable",
            value: function () {
              return (
                (this.passedElement.disabled = !1),
                this.initialised &&
                  this.containerOuter.classList.contains(
                    this.config.classNames.disabledState
                  ) &&
                  (this._addEventListeners(),
                  this.passedElement.removeAttribute("disabled"),
                  this.input.removeAttribute("disabled"),
                  this.containerOuter.classList.remove(
                    this.config.classNames.disabledState
                  ),
                  this.containerOuter.removeAttribute("aria-disabled")),
                this
              );
            },
          },
          {
            key: "ajax",
            value: function (e) {
              var t = this;
              if (
                this.initialised === !0 &&
                ("select-one" === this.passedElement.type ||
                  "select-multiple" === this.passedElement.type)
              ) {
                if (
                  (this.containerOuter.classList.add(
                    this.config.classNames.loadingState
                  ),
                  this.containerOuter.setAttribute("aria-busy", "true"),
                  "select-one" === this.passedElement.type)
                ) {
                  var i = this._getTemplate(
                    "placeholder",
                    this.config.loadingText
                  );
                  this.itemList.appendChild(i);
                } else this.input.placeholder = this.config.loadingText;
                var n = function (e, i, n) {
                  if ((0, d.isType)("Array", e) && i) {
                    if (e && e.length) {
                      if (
                        (t.containerOuter.classList.remove(
                          t.config.classNames.loadingState
                        ),
                        "select-multiple" === t.passedElement.type)
                      ) {
                        var s =
                          !!t.config.placeholder &&
                          (t.config.placeholderValue ||
                            t.passedElement.getAttribute("placeholder"));
                        s && (t.input.placeholder = s);
                      }
                      e.forEach(function (e, s) {
                        0 === s && "select-one" === t.passedElement.type
                          ? t._addChoice(!0, !1, e[i], e[n])
                          : t._addChoice(!1, !1, e[i], e[n]);
                      });
                    }
                    t.containerOuter.removeAttribute("aria-busy");
                  }
                };
                e(n);
              }
              return this;
            },
          },
          {
            key: "_triggerChange",
            value: function (e) {
              if (e) {
                if (this.config.callbackOnChange) {
                  var t = this.config.callbackOnChange;
                  (0, d.isType)("Function", t)
                    ? t(e, this.passedElement)
                    : console.error(
                        "callbackOnChange: Callback is not a function"
                      );
                }
                "select-one" === this.passedElement.type &&
                  ((this.focusAndHideDropdown = !0),
                  this.containerOuter.focus());
              }
            },
          },
          {
            key: "_handleButtonAction",
            value: function (e, t) {
              var i = this;
              e &&
                t &&
                this.config.removeItems &&
                this.config.removeItemButton &&
                !(function () {
                  var n = t.parentNode.getAttribute("data-id"),
                    s = e.find(function (e) {
                      return e.id === parseInt(n, 10);
                    });
                  if (
                    (i._removeItem(s),
                    i._triggerChange(s.value),
                    "select-one" === i.passedElement.type)
                  ) {
                    var o =
                      !!i.config.placeholder &&
                      (i.config.placeholderValue ||
                        i.passedElement.getAttribute("placeholder"));
                    if (o) {
                      var r = i._getTemplate("placeholder", o);
                      i.itemList.appendChild(r);
                    }
                  }
                })();
            },
          },
          {
            key: "_handleItemAction",
            value: function (e, t) {
              var i = this,
                n =
                  !(arguments.length <= 2 || void 0 === arguments[2]) &&
                  arguments[2];
              e &&
                t &&
                this.config.removeItems &&
                "select-one" !== this.passedElement.type &&
                !(function () {
                  var s = t.getAttribute("data-id");
                  e.forEach(function (e) {
                    e.id !== parseInt(s, 10) || e.highlighted
                      ? n || (e.highlighted && i.unhighlightItem(e))
                      : i.highlightItem(e);
                  }),
                    document.activeElement !== i.input && i.input.focus();
                })();
            },
          },
          {
            key: "_handleChoiceAction",
            value: function (e, t) {
              if (e && t) {
                var i = t.getAttribute("data-id"),
                  n = this.store.getChoiceById(i);
                if (n && !n.selected && !n.disabled) {
                  var s = this._canAddItem(e, n.value);
                  s.response &&
                    (this._addItem(n.value, n.label, n.id),
                    this._triggerChange(n.value),
                    this.clearInput(this.passedElement),
                    (this.isSearching = !1),
                    this.store.dispatch((0, u.activateChoices)(!0)),
                    "select-one" === this.passedElement.type &&
                      this.hideDropdown());
                }
              }
            },
          },
          {
            key: "_handleBackspace",
            value: function (e) {
              if (this.config.removeItems && e) {
                var t = e[e.length - 1],
                  i = e.some(function (e) {
                    return e.highlighted === !0;
                  });
                this.config.editItems && !i && t
                  ? ((this.input.value = t.value),
                    this._removeItem(t),
                    this._triggerChange(t.value))
                  : (i || this.highlightItem(t), this.removeHighlightedItems());
              }
            },
          },
          {
            key: "_canAddItem",
            value: function (e, t) {
              var i = !0,
                n = 'Press Enter to add "' + t + '"';
              if (
                (("select-multiple" !== this.passedElement.type &&
                  "text" !== this.passedElement.type) ||
                  (this.config.maxItemCount > 0 &&
                    this.config.maxItemCount <= this.itemList.children.length &&
                    ((i = !1),
                    (n =
                      "Only " +
                      this.config.maxItemCount +
                      " values can be added."))),
                "text" === this.passedElement.type && this.config.addItems)
              ) {
                var s = !e.some(function (e) {
                  return e.value === t;
                });
                this.config.regexFilter && (i = this._regexFilter(t)),
                  this.config.duplicateItems !== !1 ||
                    s ||
                    ((i = !1), (n = "Only unique values can be added."));
              }
              return { response: i, notice: n };
            },
          },
          {
            key: "_searchChoices",
            value: function (e) {
              var t = this;
              if (e && this.input === document.activeElement) {
                var i = this.store.getChoices(),
                  n = i.some(function (e) {
                    return e.active !== !0;
                  });
                if (e && e.length > 1) {
                  var s = function () {
                    var i = (0, d.isType)("String", e) ? e.trim() : e,
                      n = (0, d.isType)("String", t.currentValue)
                        ? t.currentValue.trim()
                        : t.currentValue;
                    if (i.length >= 1 && i !== n + " ") {
                      var s = t.store.getChoicesFilteredBySelectable(),
                        o = i,
                        r = (0, d.isType)("Array", t.config.sortFields)
                          ? t.config.sortFields
                          : [t.config.sortFields],
                        a = new c.default(s, {
                          keys: r,
                          shouldSort: !0,
                          include: "score",
                        }),
                        l = a.search(o);
                      (t.currentValue = i),
                        (t.highlightPosition = 0),
                        (t.isSearching = !0),
                        t.store.dispatch((0, u.filterChoices)(l));
                    }
                  };
                  s();
                } else
                  n &&
                    ((this.isSearching = !1),
                    this.store.dispatch((0, u.activateChoices)(!0)));
              }
            },
          },
          {
            key: "_addEventListeners",
            value: function () {
              document.addEventListener("keyup", this._onKeyUp),
                document.addEventListener("keydown", this._onKeyDown),
                document.addEventListener("click", this._onClick),
                document.addEventListener("touchmove", this._onTouchMove),
                document.addEventListener("touchend", this._onTouchEnd),
                document.addEventListener("mousedown", this._onMouseDown),
                document.addEventListener("mouseover", this._onMouseOver),
                this.passedElement.type &&
                  "select-one" === this.passedElement.type &&
                  (this.containerOuter.addEventListener("focus", this._onFocus),
                  this.containerOuter.addEventListener("blur", this._onBlur)),
                this.input.addEventListener("input", this._onInput),
                this.input.addEventListener("paste", this._onPaste),
                this.input.addEventListener("focus", this._onFocus),
                this.input.addEventListener("blur", this._onBlur);
            },
          },
          {
            key: "_removeEventListeners",
            value: function () {
              document.removeEventListener("keyup", this._onKeyUp),
                document.removeEventListener("keydown", this._onKeyDown),
                document.removeEventListener("click", this._onClick),
                document.removeEventListener("touchmove", this._onTouchMove),
                document.removeEventListener("touchend", this._onTouchEnd),
                document.removeEventListener("mousedown", this._onMouseDown),
                document.removeEventListener("mouseover", this._onMouseOver),
                this.passedElement.type &&
                  "select-one" === this.passedElement.type &&
                  (this.containerOuter.removeEventListener(
                    "focus",
                    this._onFocus
                  ),
                  this.containerOuter.removeEventListener(
                    "blur",
                    this._onBlur
                  )),
                this.input.removeEventListener("input", this._onInput),
                this.input.removeEventListener("paste", this._onPaste),
                this.input.removeEventListener("focus", this._onFocus),
                this.input.removeEventListener("blur", this._onBlur);
            },
          },
          {
            key: "_onKeyDown",
            value: function (e) {
              if (
                e.target === this.input ||
                this.containerOuter.contains(e.target)
              ) {
                var t = e.target,
                  i = e.ctrlKey || e.metaKey,
                  n = 46,
                  s = 8,
                  o = 13,
                  r = 65,
                  a = 27,
                  c = 38,
                  l = 40,
                  h = this.store.getItemsFilteredByActive(),
                  u = this.input === document.activeElement,
                  p = this.dropdown.classList.contains(
                    this.config.classNames.activeState
                  ),
                  f = this.itemList && this.itemList.children,
                  v = String.fromCharCode(e.keyCode);
                switch (
                  ("text" !== this.passedElement.type &&
                    /[a-zA-Z0-9-_ ]/.test(v) &&
                    !p &&
                    this.showDropdown(),
                  (this.canSearch = this.config.search),
                  e.keyCode)
                ) {
                  case r:
                    i &&
                      f &&
                      ((this.canSearch = !1),
                      this.config.removeItems &&
                        !this.input.value &&
                        this.input === document.activeElement &&
                        this.highlightAll(this.itemList.children));
                    break;
                  case o:
                    if ("text" === this.passedElement.type && t.value) {
                      var m = this.input.value,
                        g = this._canAddItem(h, m);
                      g.response &&
                        (this.toggleDropdown(),
                        this._addItem(m),
                        this._triggerChange(m),
                        this.clearInput(this.passedElement));
                    }
                    if (
                      (t.hasAttribute("data-button") &&
                        (e.preventDefault(), this._handleButtonAction(h, t)),
                      p)
                    ) {
                      var y = this.dropdown.querySelector(
                        "." + this.config.classNames.highlightedState
                      );
                      y && this._handleChoiceAction(h, y);
                    } else
                      "select-one" === this.passedElement.type &&
                        (e.preventDefault(), this.showDropdown(!0));
                    break;
                  case a:
                    p && this.toggleDropdown();
                    break;
                  case l:
                  case c:
                    if (p || "select-one" === this.passedElement.type) {
                      p || this.showDropdown(!0);
                      var b = this.dropdown.querySelector(
                          "." + this.config.classNames.highlightedState
                        ),
                        _ = e.keyCode === l ? 1 : -1,
                        E = void 0;
                      (this.canSearch = !1),
                        (E = b
                          ? (0, d.getAdjacentEl)(
                              b,
                              "[data-choice-selectable]",
                              _
                            )
                          : this.dropdown.querySelector(
                              "[data-choice-selectable]"
                            )),
                        E &&
                          ((0, d.isScrolledIntoView)(E, this.choiceList, _) ||
                            this._scrollToChoice(E, _),
                          this._highlightChoice(E)),
                        e.preventDefault();
                    }
                    break;
                  case n:
                  case s:
                    u &&
                      !e.target.value &&
                      "select-one" !== this.passedElement.type &&
                      (this._handleBackspace(h), e.preventDefault());
                }
              }
            },
          },
          {
            key: "_onKeyUp",
            value: function (e) {
              if (e.target === this.input)
                if ("text" === this.passedElement.type) {
                  var t = this.dropdown.classList.contains(
                      this.config.classNames.activeState
                    ),
                    i = this.input.value;
                  if (i) {
                    var n = this.store.getItemsFilteredByActive(),
                      s = this._canAddItem(n, i);
                    if (s.notice) {
                      var o = this._getTemplate("notice", s.notice);
                      this.dropdown.innerHTML = o.outerHTML;
                    }
                    s.response === !0
                      ? t || this.showDropdown()
                      : !s.notice && t && this.hideDropdown();
                  } else t && this.hideDropdown();
                } else {
                  var r = 46,
                    a = 8;
                  (e.keyCode !== r && e.keyCode !== a) || e.target.value
                    ? this.canSearch && this._searchChoices(this.input.value)
                    : "text" !== this.passedElement.type &&
                      this.isSearching &&
                      ((this.isSearching = !1),
                      this.store.dispatch((0, u.activateChoices)(!0)));
                }
            },
          },
          {
            key: "_onInput",
            value: function () {
              if ("select-one" !== this.passedElement.type)
                if (
                  this.config.placeholder &&
                  (this.config.placeholderValue ||
                    this.passedElement.getAttribute("placeholder"))
                ) {
                  var e =
                    !!this.config.placeholder &&
                    (this.config.placeholderValue ||
                      this.passedElement.getAttribute("placeholder"));
                  this.input.value &&
                    this.input.value.length >= e.length / 1.25 &&
                    (this.input.style.width = (0, d.getWidthOfInput)(
                      this.input
                    ));
                } else
                  this.input.style.width = (0, d.getWidthOfInput)(this.input);
            },
          },
          {
            key: "_onTouchMove",
            value: function () {
              this.wasTap === !0 && (this.wasTap = !1);
            },
          },
          {
            key: "_onTouchEnd",
            value: function (e) {
              var t = e.target || e.touches[0].target;
              this.wasTap === !0 &&
                this.containerOuter.contains(t) &&
                ((t !== this.containerOuter && t !== this.containerInner) ||
                  "select-one" === this.passedElement.type ||
                  ("text" === this.passedElement.type
                    ? document.activeElement !== this.input &&
                      this.input.focus()
                    : this.showDropdown(!0)),
                e.stopPropagation()),
                (this.wasTap = !0);
            },
          },
          {
            key: "_onMouseDown",
            value: function (e) {
              var t = e.target;
              if (this.containerOuter.contains(t) && t !== this.input) {
                var i = this.store.getItemsFilteredByActive(),
                  n = e.shiftKey;
                t.hasAttribute("data-item")
                  ? this._handleItemAction(i, t, n)
                  : t.hasAttribute("data-choice") &&
                    this._handleChoiceAction(i, t),
                  e.preventDefault();
              }
            },
          },
          {
            key: "_onClick",
            value: function (e) {
              var t = e.target,
                i = this.dropdown.classList.contains(
                  this.config.classNames.activeState
                ),
                n = this.store.getItemsFilteredByActive();
              if (this.containerOuter.contains(t))
                t.hasAttribute("data-button") && this._handleButtonAction(n, t),
                  i
                    ? "select-one" !== this.passedElement.type ||
                      t === this.input ||
                      this.dropdown.contains(t) ||
                      this.hideDropdown()
                    : "text" === this.passedElement.type
                    ? document.activeElement !== this.input &&
                      this.input.focus()
                    : this.canSearch
                    ? this.showDropdown(!0)
                    : this.showDropdown();
              else {
                var s = n.some(function (e) {
                  return e.highlighted === !0;
                });
                s && this.unhighlightAll(),
                  this.containerOuter.classList.remove(
                    this.config.classNames.focusState
                  ),
                  i && this.hideDropdown();
              }
            },
          },
          {
            key: "_onMouseOver",
            value: function (e) {
              (e.target === this.dropdown ||
                this.dropdown.contains(e.target)) &&
                e.target.hasAttribute("data-choice") &&
                this._highlightChoice(e.target);
            },
          },
          {
            key: "_onPaste",
            value: function (e) {
              e.target !== this.input ||
                this.config.paste ||
                e.preventDefault();
            },
          },
          {
            key: "_onFocus",
            value: function (e) {
              var t = e.target;
              if (this.containerOuter.contains(t)) {
                var i = this.dropdown.classList.contains(
                  this.config.classNames.activeState
                );
                if (!i)
                  switch (this.passedElement.type) {
                    case "text":
                      t === this.input &&
                        this.containerOuter.classList.add(
                          this.config.classNames.focusState
                        );
                      break;
                    case "select-one":
                      t === this.containerOuter &&
                        (this.containerOuter.classList.add(
                          this.config.classNames.focusState
                        ),
                        !this.focusAndHideDropdown &&
                        this.canSearch &&
                        document.activeElement !== this.input
                          ? this.showDropdown(!0)
                          : this.showDropdown(),
                        (this.focusAndHideDropdown = !1)),
                        t === this.input &&
                          (this.containerOuter.classList.add(
                            this.config.classNames.focusState
                          ),
                          this.showDropdown());
                      break;
                    case "select-multiple":
                      t === this.input &&
                        (this.containerOuter.classList.add(
                          this.config.classNames.focusState
                        ),
                        this.showDropdown(!0));
                  }
              }
            },
          },
          {
            key: "_onBlur",
            value: function (e) {
              var t = e.target;
              if (this.containerOuter.contains(t)) {
                var i = this.store.getItemsFilteredByActive(),
                  n = this.dropdown.classList.contains(
                    this.config.classNames.activeState
                  ),
                  s = i.some(function (e) {
                    return e.highlighted === !0;
                  });
                switch (this.passedElement.type) {
                  case "text":
                    t === this.input &&
                      (this.containerOuter.classList.remove(
                        this.config.classNames.focusState
                      ),
                      s && this.unhighlightAll(),
                      n && this.hideDropdown());
                    break;
                  case "select-one":
                    t === this.containerOuter &&
                      (this.containerOuter.classList.remove(
                        this.config.classNames.focusState
                      ),
                      n && !this.canSearch && this.hideDropdown()),
                      t === this.input &&
                        (this.containerOuter.classList.remove(
                          this.config.classNames.focusState
                        ),
                        n && this.hideDropdown());
                    break;
                  case "select-multiple":
                    t === this.input &&
                      (this.containerOuter.classList.remove(
                        this.config.classNames.focusState
                      ),
                      n && this.hideDropdown(),
                      s && this.unhighlightAll());
                }
              }
            },
          },
          {
            key: "_regexFilter",
            value: function (e) {
              if (e) {
                var t = this.config.regexFilter,
                  i = new RegExp(t.source, "i");
                return i.test(e);
              }
            },
          },
          {
            key: "_scrollToChoice",
            value: function (e, t) {
              var i = this;
              if (e) {
                var n = this.choiceList.offsetHeight,
                  s = e.offsetHeight,
                  o = e.offsetTop + s,
                  r = this.choiceList.scrollTop + n,
                  a = t > 0 ? this.choiceList.scrollTop + o - r : e.offsetTop,
                  c = function l() {
                    var e = 4,
                      n = !1,
                      s = void 0,
                      o = void 0;
                    t > 0
                      ? ((s = (a - i.choiceList.scrollTop) / e),
                        (o = s > 1 ? s : 1),
                        (i.choiceList.scrollTop = i.choiceList.scrollTop + o),
                        i.choiceList.scrollTop < a && (n = !0))
                      : ((s = (i.choiceList.scrollTop - a) / e),
                        (o = s > 1 ? s : 1),
                        (i.choiceList.scrollTop = i.choiceList.scrollTop - o),
                        i.choiceList.scrollTop > a && (n = !0)),
                      n &&
                        requestAnimationFrame(function (e) {
                          l(e, a, t);
                        });
                  };
                requestAnimationFrame(function (e) {
                  c(e, a, t);
                });
              }
            },
          },
          {
            key: "_highlightChoice",
            value: function (e) {
              var t = this,
                i = Array.from(
                  this.dropdown.querySelectorAll("[data-choice-selectable]")
                );
              if (i && i.length) {
                var n = Array.from(
                  this.dropdown.querySelectorAll(
                    "." + this.config.classNames.highlightedState
                  )
                );
                if (
                  (n.forEach(function (e) {
                    e.classList.remove(t.config.classNames.highlightedState),
                      e.setAttribute("aria-selected", "false");
                  }),
                  e)
                )
                  e.classList.add(this.config.classNames.highlightedState),
                    (this.highlightPosition = i.indexOf(e));
                else {
                  var s = void 0;
                  (s =
                    i.length > this.highlightPosition
                      ? i[this.highlightPosition]
                      : i[i.length - 1]),
                    s || (s = i[0]),
                    s.classList.add(this.config.classNames.highlightedState),
                    s.setAttribute("aria-selected", "true");
                }
              }
            },
          },
          {
            key: "_addItem",
            value: function (e, t) {
              var i =
                  arguments.length <= 2 || void 0 === arguments[2]
                    ? -1
                    : arguments[2],
                n = (0, d.isType)("String", e) ? e.trim() : e,
                s = this.store.getItems(),
                o = t || n,
                r = parseInt(i, 10) || -1;
              this.config.prependValue &&
                (n = this.config.prependValue + n.toString()),
                this.config.appendValue &&
                  (n += this.config.appendValue.toString());
              var a = s ? s.length + 1 : 1;
              if (
                (this.store.dispatch((0, u.addItem)(n, o, a, r)),
                "select-one" === this.passedElement.type &&
                  this.removeActiveItems(a),
                this.config.callbackOnAddItem)
              ) {
                var c = this.config.callbackOnAddItem;
                (0, d.isType)("Function", c)
                  ? c(a, n, this.passedElement)
                  : console.error(
                      "callbackOnAddItem: Callback is not a function"
                    );
              }
              return this;
            },
          },
          {
            key: "_removeItem",
            value: function (e) {
              var t =
                arguments.length <= 1 || void 0 === arguments[1]
                  ? this.config.callbackOnRemoveItem
                  : arguments[1];
              if (!e || !(0, d.isType)("Object", e))
                return void console.error(
                  "removeItem: No item object was passed to be removed"
                );
              var i = e.id,
                n = e.value,
                s = e.choiceId;
              if ((this.store.dispatch((0, u.removeItem)(i, s)), t)) {
                if (!(0, d.isType)("Function", t))
                  return void console.error(
                    "callbackOnRemoveItem: Callback is not a function"
                  );
                t(i, n, this.passedElement);
              }
              return this;
            },
          },
          {
            key: "_addChoice",
            value: function (e, t, i, n) {
              var s =
                arguments.length <= 4 || void 0 === arguments[4]
                  ? -1
                  : arguments[4];
              if (i) {
                var o = this.store.getChoices(),
                  r = n || i,
                  a = o ? o.length + 1 : 1;
                this.store.dispatch((0, u.addChoice)(i, r, a, s, t)),
                  e && !t && this._addItem(i, r, a);
              }
            },
          },
          {
            key: "_addGroup",
            value: function (e, t) {
              var i = this,
                n = (0, d.isType)("Object", e)
                  ? e.choices
                  : Array.from(e.getElementsByTagName("OPTION")),
                s = t,
                o = !!e.disabled && e.disabled;
              n
                ? (this.store.dispatch((0, u.addGroup)(e.label, s, !0, o)),
                  n.forEach(function (e) {
                    var t =
                        e.disabled ||
                        (e.parentNode && e.parentNode.disabled) ||
                        !1,
                      n = !!e.selected && e.selected,
                      o = void 0;
                    (o = (0, d.isType)("Object", e)
                      ? e.label || e.value
                      : e.innerHTML),
                      i._addChoice(n, t, e.value, o, s);
                  }))
                : this.store.dispatch(
                    (0, u.addGroup)(e.label, e.id, !1, e.disabled)
                  );
            },
          },
          {
            key: "_getTemplate",
            value: function (e) {
              if (e) {
                for (
                  var t = this.config.templates,
                    i = arguments.length,
                    n = Array(i > 1 ? i - 1 : 0),
                    s = 1;
                  s < i;
                  s++
                )
                  n[s - 1] = arguments[s];
                return t[e].apply(t, n);
              }
            },
          },
          {
            key: "_createTemplates",
            value: function () {
              var e = this,
                t = this.config.classNames,
                i = {
                  containerOuter: function () {
                    return (0, d.strToEl)(
                      '\n                    <div class="' +
                        t.containerOuter +
                        '" data-type="' +
                        e.passedElement.type +
                        '" ' +
                        ("select-one" === e.passedElement.type
                          ? 'tabindex="0"'
                          : "") +
                        ' aria-haspopup="true" aria-expanded="false"></div>\n                '
                    );
                  },
                  containerInner: function () {
                    return (0, d.strToEl)(
                      '\n                    <div class="' +
                        t.containerInner +
                        '"></div>\n                '
                    );
                  },
                  itemList: function () {
                    return (0, d.strToEl)(
                      '\n                    <div class="' +
                        t.list +
                        " " +
                        ("select-one" === e.passedElement.type
                          ? t.listSingle
                          : t.listItems) +
                        '"></div>\n                '
                    );
                  },
                  placeholder: function (e) {
                    return (0, d.strToEl)(
                      '\n                    <div class="' +
                        t.placeholder +
                        '">\n                        ' +
                        e +
                        "\n                    </div>\n                "
                    );
                  },
                  item: function (i) {
                    return e.config.removeItemButton
                      ? (0, d.strToEl)(
                          '\n                        <div class="' +
                            t.item +
                            " " +
                            (i.highlighted ? t.highlightedState : "") +
                            " " +
                            (i.disabled ? "" : t.itemSelectable) +
                            '" data-item data-id="' +
                            i.id +
                            '" data-value="' +
                            i.value +
                            '" ' +
                            (i.active ? 'aria-selected="true"' : "") +
                            " " +
                            (i.disabled ? 'aria-disabled="true"' : "") +
                            " data-deletable>\n                            " +
                            i.label +
                            '<button class="' +
                            t.button +
                            '" data-button>Remove item</button>\n                        </div>\n                    '
                        )
                      : (0, d.strToEl)(
                          '\n                    <div class="' +
                            t.item +
                            " " +
                            (i.highlighted
                              ? t.highlightedState
                              : t.itemSelectable) +
                            '"  data-item data-id="' +
                            i.id +
                            '" data-value="' +
                            i.value +
                            '" ' +
                            (i.active ? 'aria-selected="true"' : "") +
                            " " +
                            (i.disabled ? 'aria-disabled="true"' : "") +
                            ">\n                        " +
                            i.label +
                            "\n                    </div>\n                "
                        );
                  },
                  choiceList: function () {
                    return (0, d.strToEl)(
                      '\n                    <div class="' +
                        t.list +
                        '" dir="ltr" role="listbox" ' +
                        ("select-one" !== e.passedElement.type
                          ? 'aria-multiselectable="true"'
                          : "") +
                        "></div>\n                "
                    );
                  },
                  choiceGroup: function (e) {
                    return (0, d.strToEl)(
                      '\n                    <div class="' +
                        t.group +
                        " " +
                        (e.disabled ? t.itemDisabled : "") +
                        '" data-group data-id="' +
                        e.id +
                        '" data-value="' +
                        e.value +
                        '" role="group" ' +
                        (e.disabled ? 'aria-disabled="true"' : "") +
                        '>\n                        <div class="' +
                        t.groupHeading +
                        '">' +
                        e.value +
                        "</div>\n                    </div>\n                "
                    );
                  },
                  choice: function (e) {
                    return (0, d.strToEl)(
                      '\n                    <div class="' +
                        t.item +
                        " " +
                        t.itemChoice +
                        " " +
                        (e.disabled ? t.itemDisabled : t.itemSelectable) +
                        '" data-choice ' +
                        (e.disabled
                          ? 'data-choice-disabled aria-disabled="true"'
                          : "data-choice-selectable") +
                        ' data-id="' +
                        e.id +
                        '" data-value="' +
                        e.value +
                        '" ' +
                        (e.groupId > 0 ? 'role="treeitem"' : 'role="option"') +
                        ">\n                        " +
                        e.label +
                        "\n                    </div>\n                "
                    );
                  },
                  input: function () {
                    return (0, d.strToEl)(
                      '\n                    <input type="text" class="' +
                        t.input +
                        " " +
                        t.inputCloned +
                        '" autocomplete="off" autocapitalize="off" spellcheck="false" role="textbox" aria-autocomplete="list">\n                '
                    );
                  },
                  dropdown: function () {
                    return (0, d.strToEl)(
                      '\n                    <div class="' +
                        t.list +
                        " " +
                        t.listDropdown +
                        '" aria-expanded="false"></div>\n                '
                    );
                  },
                  notice: function (e) {
                    return (0, d.strToEl)(
                      '\n                    <div class="' +
                        t.item +
                        " " +
                        t.itemChoice +
                        '">' +
                        e +
                        "</div>\n                "
                    );
                  },
                  option: function (e) {
                    return (0, d.strToEl)(
                      '\n                    <option value="' +
                        e.value +
                        '" selected>' +
                        e.label +
                        "</option>\n                "
                    );
                  },
                };
              this.config.templates = i;
            },
          },
          {
            key: "_createInput",
            value: function () {
              var e = this,
                t = this._getTemplate("containerOuter"),
                i = this._getTemplate("containerInner"),
                n = this._getTemplate("itemList"),
                s = this._getTemplate("choiceList"),
                o = this._getTemplate("input"),
                r = this._getTemplate("dropdown");
              (this.containerOuter = t),
                (this.containerInner = i),
                (this.input = o),
                (this.choiceList = s),
                (this.itemList = n),
                (this.dropdown = r),
                this.passedElement.classList.add(
                  this.config.classNames.input,
                  this.config.classNames.hiddenState
                ),
                (this.passedElement.tabIndex = "-1"),
                this.passedElement.setAttribute("style", "display:none;"),
                this.passedElement.setAttribute("aria-hidden", "true"),
                this.passedElement.setAttribute("data-choice", "active"),
                (0, d.wrap)(this.passedElement, i),
                (0, d.wrap)(i, t);
              var a =
                !!this.config.placeholder &&
                (this.config.placeholderValue ||
                  this.passedElement.getAttribute("placeholder"));
              if (
                (a &&
                  ((o.placeholder = a),
                  "select-one" !== this.passedElement.type &&
                    (o.style.width = (0, d.getWidthOfInput)(o))),
                this.config.addItems || this.disable(),
                t.appendChild(i),
                t.appendChild(r),
                i.appendChild(n),
                "text" !== this.passedElement.type && r.appendChild(s),
                "select-multiple" === this.passedElement.type ||
                "text" === this.passedElement.type
                  ? i.appendChild(o)
                  : this.canSearch && r.insertBefore(o, r.firstChild),
                "select-multiple" === this.passedElement.type ||
                  "select-one" === this.passedElement.type)
              ) {
                var c = Array.from(
                  this.passedElement.getElementsByTagName("OPTGROUP")
                );
                (this.highlightPosition = 0),
                  (this.isSearching = !1),
                  c && c.length
                    ? c.forEach(function (t, i) {
                        e._addGroup(t, i);
                      })
                    : !(function () {
                        var t = Array.from(e.passedElement.options),
                          i = [];
                        t.forEach(function (e) {
                          i.push({
                            value: e.value,
                            label: e.innerHTML,
                            selected: e.selected,
                            disabled: e.disabled || e.parentNode.disabled,
                          });
                        }),
                          i.concat(e.presetChoices).forEach(function (t, i) {
                            0 === i
                              ? e._addChoice(
                                  !0,
                                  !!t.disabled && t.disabled,
                                  t.value,
                                  t.label
                                )
                              : e._addChoice(
                                  !!t.selected && t.selected,
                                  !!t.disabled && t.disabled,
                                  t.value,
                                  t.label
                                );
                          });
                      })();
              } else
                "text" === this.passedElement.type &&
                  this.presetItems.forEach(function (t) {
                    if ((0, d.isType)("Object", t)) {
                      if (!t.value) return;
                      e._addItem(t.value, t.label, t.id);
                    } else (0, d.isType)("String", t) && e._addItem(t);
                  });
            },
          },
          {
            key: "renderGroups",
            value: function (e, t, i) {
              var n = this,
                s = i || document.createDocumentFragment(),
                o = this.config.sortFilter;
              return (
                e.sort(o).forEach(function (e) {
                  var i = t.filter(function (t) {
                    return "select-one" === n.passedElement.type
                      ? t.groupId === e.id
                      : t.groupId === e.id && !t.selected;
                  });
                  if (i.length >= 1) {
                    var o = n._getTemplate("choiceGroup", e);
                    s.appendChild(o), n.renderChoices(i, s);
                  }
                }),
                s
              );
            },
          },
          {
            key: "renderChoices",
            value: function (e, t) {
              var i = this,
                n = t || document.createDocumentFragment(),
                s = this.isSearching ? d.sortByScore : this.config.sortFilter;
              return (
                e.sort(s).forEach(function (e) {
                  var t = i._getTemplate("choice", e);
                  "select-one" === i.passedElement.type
                    ? n.appendChild(t)
                    : e.selected || n.appendChild(t);
                }),
                n
              );
            },
          },
          {
            key: "renderItems",
            value: function (e, t) {
              var i = this,
                n = t || document.createDocumentFragment(),
                s = this.store.getItemsReducedToValues(e);
              return (
                "text" === this.passedElement.type
                  ? this.passedElement.setAttribute(
                      "value",
                      s.join(this.config.delimiter)
                    )
                  : !(function () {
                      var t = document.createDocumentFragment();
                      e.forEach(function (e) {
                        var n = i._getTemplate("option", e);
                        t.appendChild(n);
                      }),
                        (i.passedElement.innerHTML = ""),
                        i.passedElement.appendChild(t);
                    })(),
                e.forEach(function (e) {
                  var t = i._getTemplate("item", e);
                  n.appendChild(t);
                }),
                n
              );
            },
          },
          {
            key: "render",
            value: function () {
              if (
                ((this.currentState = this.store.getState()),
                this.currentState !== this.prevState)
              ) {
                if (
                  !(
                    (this.currentState.choices === this.prevState.choices &&
                      this.currentState.groups === this.prevState.groups) ||
                    ("select-multiple" !== this.passedElement.type &&
                      "select-one" !== this.passedElement.type)
                  )
                ) {
                  var e = this.store.getGroupsFilteredByActive(),
                    t = this.store.getChoicesFilteredByActive(),
                    i = document.createDocumentFragment();
                  if (
                    ((this.choiceList.innerHTML = ""),
                    (this.choiceList.scrollTop = 0),
                    e.length >= 1 && this.isSearching !== !0
                      ? (i = this.renderGroups(e, t, i))
                      : t.length >= 1 && (i = this.renderChoices(t, i)),
                    i.childNodes && i.childNodes.length > 0)
                  )
                    this.choiceList.appendChild(i), this._highlightChoice();
                  else {
                    var n = this.isSearching
                      ? this._getTemplate("notice", this.config.noResultsText)
                      : this._getTemplate("notice", this.config.noChoicesText);
                    this.choiceList.appendChild(n);
                  }
                }
                if (this.currentState.items !== this.prevState.items) {
                  var s = this.store.getItemsFilteredByActive();
                  if (s) {
                    var o = this.renderItems(s);
                    (this.itemList.innerHTML = ""),
                      o.childNodes && this.itemList.appendChild(o);
                  }
                }
                this.prevState = this.currentState;
              }
            },
          },
        ]),
        e
      );
    })();
    (t.default = p), (window.Choices = e.exports = p);
  },
  function (e, t, i) {
    !(function (t) {
      "use strict";
      function i() {
        console.log.apply(console, arguments);
      }
      function n(e, t) {
        var i, n, s, o;
        for (
          this.list = e,
            this.options = t = t || {},
            i = 0,
            o = ["sort", "shouldSort", "verbose", "tokenize"],
            n = o.length;
          i < n;
          i++
        )
          (s = o[i]), (this.options[s] = s in t ? t[s] : a[s]);
        for (
          i = 0,
            o = [
              "searchFn",
              "sortFn",
              "keys",
              "getFn",
              "include",
              "tokenSeparator",
            ],
            n = o.length;
          i < n;
          i++
        )
          (s = o[i]), (this.options[s] = t[s] || a[s]);
      }
      function s(e, t, i) {
        var n, r, a, c, l, h;
        if (t) {
          if (
            ((a = t.indexOf(".")),
            a !== -1 ? ((n = t.slice(0, a)), (r = t.slice(a + 1))) : (n = t),
            (c = e[n]),
            null !== c && void 0 !== c)
          )
            if (r || ("string" != typeof c && "number" != typeof c))
              if (o(c)) for (l = 0, h = c.length; l < h; l++) s(c[l], r, i);
              else r && s(c, r, i);
            else i.push(c);
        } else i.push(e);
        return i;
      }
      function o(e) {
        return "[object Array]" === Object.prototype.toString.call(e);
      }
      function r(e, t) {
        (t = t || {}),
          (this.options = t),
          (this.options.location = t.location || r.defaultOptions.location),
          (this.options.distance =
            "distance" in t ? t.distance : r.defaultOptions.distance),
          (this.options.threshold =
            "threshold" in t ? t.threshold : r.defaultOptions.threshold),
          (this.options.maxPatternLength =
            t.maxPatternLength || r.defaultOptions.maxPatternLength),
          (this.pattern = t.caseSensitive ? e : e.toLowerCase()),
          (this.patternLen = e.length),
          this.patternLen <= this.options.maxPatternLength &&
            ((this.matchmask = 1 << (this.patternLen - 1)),
            (this.patternAlphabet = this._calculatePatternAlphabet()));
      }
      var a = {
        id: null,
        caseSensitive: !1,
        include: [],
        shouldSort: !0,
        searchFn: r,
        sortFn: function (e, t) {
          return e.score - t.score;
        },
        getFn: s,
        keys: [],
        verbose: !1,
        tokenize: !1,
        tokenSeparator: / +/g,
      };
      (n.VERSION = "2.4.1"),
        (n.prototype.set = function (e) {
          return (this.list = e), e;
        }),
        (n.prototype.search = function (e) {
          this.options.verbose && i("\nSearch term:", e, "\n"),
            (this.pattern = e),
            (this.results = []),
            (this.resultMap = {}),
            (this._keyMap = null),
            this._prepareSearchers(),
            this._startSearch(),
            this._computeScore(),
            this._sort();
          var t = this._format();
          return t;
        }),
        (n.prototype._prepareSearchers = function () {
          var e = this.options,
            t = this.pattern,
            i = e.searchFn,
            n = t.split(e.tokenSeparator),
            s = 0,
            o = n.length;
          if (this.options.tokenize)
            for (this.tokenSearchers = []; s < o; s++)
              this.tokenSearchers.push(new i(n[s], e));
          this.fullSeacher = new i(t, e);
        }),
        (n.prototype._startSearch = function () {
          var e,
            t,
            i,
            n,
            s = this.options,
            o = s.getFn,
            r = this.list,
            a = r.length,
            c = this.options.keys,
            l = c.length,
            h = null;
          if ("string" == typeof r[0])
            for (i = 0; i < a; i++) this._analyze("", r[i], i, i);
          else
            for (this._keyMap = {}, i = 0; i < a; i++)
              for (h = r[i], n = 0; n < l; n++) {
                if (((e = c[n]), "string" != typeof e)) {
                  if (
                    ((t = 1 - e.weight || 1),
                    (this._keyMap[e.name] = { weight: t }),
                    e.weight <= 0 || e.weight > 1)
                  )
                    throw new Error("Key weight has to be > 0 and <= 1");
                  e = e.name;
                } else this._keyMap[e] = { weight: 1 };
                this._analyze(e, o(h, e, []), h, i);
              }
        }),
        (n.prototype._analyze = function (e, t, n, s) {
          var r,
            a,
            c,
            l,
            h,
            u,
            d,
            p,
            f,
            v,
            m,
            g,
            y,
            b = this.options,
            _ = !1;
          if (void 0 !== t && null !== t)
            if (((a = []), "string" == typeof t)) {
              if (
                ((r = t.split(b.tokenSeparator)),
                b.verbose && i("---------\nKey:", e),
                this.options.tokenize)
              ) {
                for (g = 0; g < this.tokenSearchers.length; g++) {
                  for (
                    p = this.tokenSearchers[g],
                      b.verbose && i("Pattern:", p.pattern),
                      f = [],
                      y = 0;
                    y < r.length;
                    y++
                  ) {
                    (v = r[y]), (m = p.search(v));
                    var E = {};
                    m.isMatch
                      ? ((E[v] = m.score), (_ = !0), a.push(m.score))
                      : ((E[v] = 1), a.push(1)),
                      f.push(E);
                  }
                  b.verbose && i("Token scores:", f);
                }
                for (l = a[0], u = a.length, g = 1; g < u; g++) l += a[g];
                (l /= u), b.verbose && i("Token score average:", l);
              }
              (d = this.fullSeacher.search(t)),
                b.verbose && i("Full text score:", d.score),
                (h = d.score),
                void 0 !== l && (h = (h + l) / 2),
                b.verbose && i("Score average:", h),
                (_ || d.isMatch) &&
                  ((c = this.resultMap[s]),
                  c
                    ? c.output.push({
                        key: e,
                        score: h,
                        matchedIndices: d.matchedIndices,
                      })
                    : ((this.resultMap[s] = {
                        item: n,
                        output: [
                          {
                            key: e,
                            score: h,
                            matchedIndices: d.matchedIndices,
                          },
                        ],
                      }),
                      this.results.push(this.resultMap[s])));
            } else if (o(t))
              for (g = 0; g < t.length; g++) this._analyze(e, t[g], n, s);
        }),
        (n.prototype._computeScore = function () {
          var e,
            t,
            n,
            s,
            o,
            r,
            a,
            c,
            l,
            h = this._keyMap,
            u = this.results;
          for (
            this.options.verbose && i("\n\nComputing score:\n"), e = 0;
            e < u.length;
            e++
          ) {
            for (n = 0, s = u[e].output, o = s.length, c = 1, t = 0; t < o; t++)
              (r = s[t].score),
                (a = h ? h[s[t].key].weight : 1),
                (l = r * a),
                1 !== a ? (c = Math.min(c, l)) : ((n += l), (s[t].nScore = l));
            1 === c ? (u[e].score = n / o) : (u[e].score = c),
              this.options.verbose && i(u[e]);
          }
        }),
        (n.prototype._sort = function () {
          var e = this.options;
          e.shouldSort &&
            (e.verbose && i("\n\nSorting...."), this.results.sort(e.sortFn));
        }),
        (n.prototype._format = function () {
          var e,
            t,
            n,
            s,
            o,
            r = this.options,
            a = r.getFn,
            c = [],
            l = this.results,
            h = r.include;
          for (
            r.verbose && i("\n\nOutput:\n\n", l),
              s = r.id
                ? function (e) {
                    l[e].item = a(l[e].item, r.id, [])[0];
                  }
                : function () {},
              o = function (e) {
                var t,
                  i,
                  n,
                  s,
                  o,
                  r = l[e];
                if (h.length > 0) {
                  if (((t = { item: r.item }), h.indexOf("matches") !== -1))
                    for (n = r.output, t.matches = [], i = 0; i < n.length; i++)
                      (s = n[i]),
                        (o = { indices: s.matchedIndices }),
                        s.key && (o.key = s.key),
                        t.matches.push(o);
                  h.indexOf("score") !== -1 && (t.score = l[e].score);
                } else t = r.item;
                return t;
              },
              t = 0,
              n = l.length;
            t < n;
            t++
          )
            s(t), (e = o(t)), c.push(e);
          return c;
        }),
        (r.defaultOptions = {
          location: 0,
          distance: 100,
          threshold: 0.6,
          maxPatternLength: 32,
        }),
        (r.prototype._calculatePatternAlphabet = function () {
          var e = {},
            t = 0;
          for (t = 0; t < this.patternLen; t++) e[this.pattern.charAt(t)] = 0;
          for (t = 0; t < this.patternLen; t++)
            e[this.pattern.charAt(t)] |= 1 << (this.pattern.length - t - 1);
          return e;
        }),
        (r.prototype._bitapScore = function (e, t) {
          var i = e / this.patternLen,
            n = Math.abs(this.options.location - t);
          return this.options.distance
            ? i + n / this.options.distance
            : n
            ? 1
            : i;
        }),
        (r.prototype.search = function (e) {
          var t,
            i,
            n,
            s,
            o,
            r,
            a,
            c,
            l,
            h,
            u,
            d,
            p,
            f,
            v,
            m,
            g,
            y,
            b,
            _,
            E,
            w,
            I = this.options;
          if (((e = I.caseSensitive ? e : e.toLowerCase()), this.pattern === e))
            return {
              isMatch: !0,
              score: 0,
              matchedIndices: [[0, e.length - 1]],
            };
          if (this.patternLen > I.maxPatternLength) {
            if (
              ((g = e.match(
                new RegExp(this.pattern.replace(I.tokenSeparator, "|"))
              )),
              (y = !!g))
            )
              for (_ = [], t = 0, E = g.length; t < E; t++)
                (w = g[t]), _.push([e.indexOf(w), w.length - 1]);
            return { isMatch: y, score: y ? 0.5 : 1, matchedIndices: _ };
          }
          for (
            s = I.location,
              n = e.length,
              o = I.threshold,
              r = e.indexOf(this.pattern, s),
              b = [],
              t = 0;
            t < n;
            t++
          )
            b[t] = 0;
          for (
            r != -1 &&
              ((o = Math.min(this._bitapScore(0, r), o)),
              (r = e.lastIndexOf(this.pattern, s + this.patternLen)),
              r != -1 && (o = Math.min(this._bitapScore(0, r), o))),
              r = -1,
              v = 1,
              m = [],
              l = this.patternLen + n,
              t = 0;
            t < this.patternLen;
            t++
          ) {
            for (a = 0, c = l; a < c; )
              this._bitapScore(t, s + c) <= o ? (a = c) : (l = c),
                (c = Math.floor((l - a) / 2 + a));
            for (
              l = c,
                h = Math.max(1, s - c + 1),
                u = Math.min(s + c, n) + this.patternLen,
                d = Array(u + 2),
                d[u + 1] = (1 << t) - 1,
                i = u;
              i >= h;
              i--
            )
              if (
                ((f = this.patternAlphabet[e.charAt(i - 1)]),
                f && (b[i - 1] = 1),
                0 === t
                  ? (d[i] = ((d[i + 1] << 1) | 1) & f)
                  : (d[i] =
                      (((d[i + 1] << 1) | 1) & f) |
                      (((p[i + 1] | p[i]) << 1) | 1) |
                      p[i + 1]),
                d[i] & this.matchmask &&
                  ((v = this._bitapScore(t, i - 1)), v <= o))
              ) {
                if (((o = v), (r = i - 1), m.push(r), !(r > s))) break;
                h = Math.max(1, 2 * s - r);
              }
            if (this._bitapScore(t + 1, s) > o) break;
            p = d;
          }
          return (
            (_ = this._getMatchedIndices(b)),
            { isMatch: r >= 0, score: 0 === v ? 0.001 : v, matchedIndices: _ }
          );
        }),
        (r.prototype._getMatchedIndices = function (e) {
          for (var t, i = [], n = -1, s = -1, o = 0, r = e.length; o < r; o++)
            (t = e[o]),
              t && n === -1
                ? (n = o)
                : t || n === -1 || ((s = o - 1), i.push([n, s]), (n = -1));
          return e[o - 1] && i.push([n, o - 1]), i;
        }),
        (e.exports = n);
    })(this);
  },
  function (e, t, i) {
    "use strict";
    function n(e) {
      return e && e.__esModule ? e : { default: e };
    }
    function s(e, t) {
      if (!(e instanceof t))
        throw new TypeError("Cannot call a class as a function");
    }
    Object.defineProperty(t, "__esModule", { value: !0 });
    var o = (function () {
        function e(e, t) {
          for (var i = 0; i < t.length; i++) {
            var n = t[i];
            (n.enumerable = n.enumerable || !1),
              (n.configurable = !0),
              "value" in n && (n.writable = !0),
              Object.defineProperty(e, n.key, n);
          }
        }
        return function (t, i, n) {
          return i && e(t.prototype, i), n && e(t, n), t;
        };
      })(),
      r = i(4),
      a = i(18),
      c = n(a),
      l = (function () {
        function e() {
          s(this, e),
            (this.store = (0, r.createStore)(
              c.default,
              window.devToolsExtension ? window.devToolsExtension() : void 0
            ));
        }
        return (
          o(e, [
            {
              key: "getState",
              value: function () {
                return this.store.getState();
              },
            },
            {
              key: "dispatch",
              value: function (e) {
                this.store.dispatch(e);
              },
            },
            {
              key: "subscribe",
              value: function (e) {
                this.store.subscribe(e);
              },
            },
            {
              key: "getItems",
              value: function () {
                var e = this.store.getState();
                return e.items;
              },
            },
            {
              key: "getItemsFilteredByActive",
              value: function () {
                var e = this.getItems(),
                  t = e.filter(function (e) {
                    return e.active === !0;
                  }, []);
                return t;
              },
            },
            {
              key: "getItemsReducedToValues",
              value: function () {
                var e =
                    arguments.length <= 0 || void 0 === arguments[0]
                      ? this.getItems()
                      : arguments[0],
                  t = e.reduce(function (e, t) {
                    return e.push(t.value), e;
                  }, []);
                return t;
              },
            },
            {
              key: "getChoices",
              value: function () {
                var e = this.store.getState();
                return e.choices;
              },
            },
            {
              key: "getChoicesFilteredByActive",
              value: function () {
                var e = this.getChoices(),
                  t = e.filter(function (e) {
                    return e.active === !0;
                  }, []);
                return t;
              },
            },
            {
              key: "getChoicesFilteredBySelectable",
              value: function () {
                var e = this.getChoices(),
                  t = e.filter(function (e) {
                    return e.disabled !== !0;
                  }, []);
                return t;
              },
            },
            {
              key: "getChoiceById",
              value: function (e) {
                if (e) {
                  var t = this.getChoicesFilteredByActive(),
                    i = t.find(function (t) {
                      return t.id === parseInt(e, 10);
                    });
                  return i;
                }
                return !1;
              },
            },
            {
              key: "getGroups",
              value: function () {
                var e = this.store.getState();
                return e.groups;
              },
            },
            {
              key: "getGroupsFilteredByActive",
              value: function () {
                var e = this.getGroups(),
                  t = this.getChoices(),
                  i = e.filter(function (e) {
                    var i = e.active === !0 && e.disabled === !1,
                      n = t.some(function (e) {
                        return e.active === !0 && e.disabled === !1;
                      });
                    return i && n;
                  }, []);
                return i;
              },
            },
          ]),
          e
        );
      })();
    (t.default = l), (e.exports = l);
  },
  function (e, t, i) {
    "use strict";
    function n(e) {
      return e && e.__esModule ? e : { default: e };
    }
    (t.__esModule = !0),
      (t.compose =
        t.applyMiddleware =
        t.bindActionCreators =
        t.combineReducers =
        t.createStore =
          void 0);
    var s = i(5),
      o = n(s),
      r = i(13),
      a = n(r),
      c = i(15),
      l = n(c),
      h = i(16),
      u = n(h),
      d = i(17),
      p = n(d),
      f = i(14);
    n(f);
    (t.createStore = o.default),
      (t.combineReducers = a.default),
      (t.bindActionCreators = l.default),
      (t.applyMiddleware = u.default),
      (t.compose = p.default);
  },
  function (e, t, i) {
    "use strict";
    function n(e) {
      return e && e.__esModule ? e : { default: e };
    }
    function s(e, t, i) {
      function n() {
        g === m && (g = m.slice());
      }
      function o() {
        return v;
      }
      function a(e) {
        if ("function" != typeof e)
          throw new Error("Expected listener to be a function.");
        var t = !0;
        return (
          n(),
          g.push(e),
          function () {
            if (t) {
              (t = !1), n();
              var i = g.indexOf(e);
              g.splice(i, 1);
            }
          }
        );
      }
      function h(e) {
        if (!(0, r.default)(e))
          throw new Error(
            "Actions must be plain objects. Use custom middleware for async actions."
          );
        if ("undefined" == typeof e.type)
          throw new Error(
            'Actions may not have an undefined "type" property. Have you misspelled a constant?'
          );
        if (y) throw new Error("Reducers may not dispatch actions.");
        try {
          (y = !0), (v = f(v, e));
        } finally {
          y = !1;
        }
        for (var t = (m = g), i = 0; i < t.length; i++) t[i]();
        return e;
      }
      function u(e) {
        if ("function" != typeof e)
          throw new Error("Expected the nextReducer to be a function.");
        (f = e), h({ type: l.INIT });
      }
      function d() {
        var e,
          t = a;
        return (
          (e = {
            subscribe: function (e) {
              function i() {
                e.next && e.next(o());
              }
              if ("object" != typeof e)
                throw new TypeError("Expected the observer to be an object.");
              i();
              var n = t(i);
              return { unsubscribe: n };
            },
          }),
          (e[c.default] = function () {
            return this;
          }),
          e
        );
      }
      var p;
      if (
        ("function" == typeof t &&
          "undefined" == typeof i &&
          ((i = t), (t = void 0)),
        "undefined" != typeof i)
      ) {
        if ("function" != typeof i)
          throw new Error("Expected the enhancer to be a function.");
        return i(s)(e, t);
      }
      if ("function" != typeof e)
        throw new Error("Expected the reducer to be a function.");
      var f = e,
        v = t,
        m = [],
        g = m,
        y = !1;
      return (
        h({ type: l.INIT }),
        (p = { dispatch: h, subscribe: a, getState: o, replaceReducer: u }),
        (p[c.default] = d),
        p
      );
    }
    (t.__esModule = !0), (t.ActionTypes = void 0), (t.default = s);
    var o = i(6),
      r = n(o),
      a = i(11),
      c = n(a),
      l = (t.ActionTypes = { INIT: "@@redux/INIT" });
  },
  function (e, t, i) {
    function n(e) {
      if (!r(e) || d.call(e) != a || o(e)) return !1;
      var t = s(e);
      if (null === t) return !0;
      var i = h.call(t, "constructor") && t.constructor;
      return "function" == typeof i && i instanceof i && l.call(i) == u;
    }
    var s = i(7),
      o = i(9),
      r = i(10),
      a = "[object Object]",
      c = Object.prototype,
      l = Function.prototype.toString,
      h = c.hasOwnProperty,
      u = l.call(Object),
      d = c.toString;
    e.exports = n;
  },
  function (e, t, i) {
    var n = i(8),
      s = Object.getPrototypeOf,
      o = n(s, Object);
    e.exports = o;
  },
  function (e, t) {
    function i(e, t) {
      return function (i) {
        return e(t(i));
      };
    }
    e.exports = i;
  },
  function (e, t) {
    function i(e) {
      var t = !1;
      if (null != e && "function" != typeof e.toString)
        try {
          t = !!(e + "");
        } catch (i) {}
      return t;
    }
    e.exports = i;
  },
  function (e, t) {
    function i(e) {
      return !!e && "object" == typeof e;
    }
    e.exports = i;
  },
  function (e, t, i) {
    (function (t) {
      "use strict";
      e.exports = i(12)(t || window || this);
    }.call(
      t,
      (function () {
        return this;
      })()
    ));
  },
  function (e, t) {
    "use strict";
    e.exports = function (e) {
      var t,
        i = e.Symbol;
      return (
        "function" == typeof i
          ? i.observable
            ? (t = i.observable)
            : ((t = i("observable")), (i.observable = t))
          : (t = "@@observable"),
        t
      );
    };
  },
  function (e, t, i) {
    "use strict";
    function n(e) {
      return e && e.__esModule ? e : { default: e };
    }
    function s(e, t) {
      var i = t && t.type,
        n = (i && '"' + i.toString() + '"') || "an action";
      return (
        "Given action " +
        n +
        ', reducer "' +
        e +
        '" returned undefined. To ignore an action, you must explicitly return the previous state.'
      );
    }
    function o(e) {
      Object.keys(e).forEach(function (t) {
        var i = e[t],
          n = i(void 0, { type: a.ActionTypes.INIT });
        if ("undefined" == typeof n)
          throw new Error(
            'Reducer "' +
              t +
              '" returned undefined during initialization. If the state passed to the reducer is undefined, you must explicitly return the initial state. The initial state may not be undefined.'
          );
        var s =
          "@@redux/PROBE_UNKNOWN_ACTION_" +
          Math.random().toString(36).substring(7).split("").join(".");
        if ("undefined" == typeof i(void 0, { type: s }))
          throw new Error(
            'Reducer "' +
              t +
              '" returned undefined when probed with a random type. ' +
              ("Don't try to handle " +
                a.ActionTypes.INIT +
                ' or other actions in "redux/*" ') +
              "namespace. They are considered private. Instead, you must return the current state for any unknown actions, unless it is undefined, in which case you must return the initial state, regardless of the action type. The initial state may not be undefined."
          );
      });
    }
    function r(e) {
      for (var t = Object.keys(e), i = {}, n = 0; n < t.length; n++) {
        var r = t[n];
        "function" == typeof e[r] && (i[r] = e[r]);
      }
      var a,
        c = Object.keys(i);
      try {
        o(i);
      } catch (l) {
        a = l;
      }
      return function () {
        var e =
            arguments.length <= 0 || void 0 === arguments[0]
              ? {}
              : arguments[0],
          t = arguments[1];
        if (a) throw a;
        for (var n = !1, o = {}, r = 0; r < c.length; r++) {
          var l = c[r],
            h = i[l],
            u = e[l],
            d = h(u, t);
          if ("undefined" == typeof d) {
            var p = s(l, t);
            throw new Error(p);
          }
          (o[l] = d), (n = n || d !== u);
        }
        return n ? o : e;
      };
    }
    (t.__esModule = !0), (t.default = r);
    var a = i(5),
      c = i(6),
      l = (n(c), i(14));
    n(l);
  },
  function (e, t) {
    "use strict";
    function i(e) {
      "undefined" != typeof console &&
        "function" == typeof console.error &&
        console.error(e);
      try {
        throw new Error(e);
      } catch (t) {}
    }
    (t.__esModule = !0), (t.default = i);
  },
  function (e, t) {
    "use strict";
    function i(e, t) {
      return function () {
        return t(e.apply(void 0, arguments));
      };
    }
    function n(e, t) {
      if ("function" == typeof e) return i(e, t);
      if ("object" != typeof e || null === e)
        throw new Error(
          "bindActionCreators expected an object or a function, instead received " +
            (null === e ? "null" : typeof e) +
            '. Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?'
        );
      for (var n = Object.keys(e), s = {}, o = 0; o < n.length; o++) {
        var r = n[o],
          a = e[r];
        "function" == typeof a && (s[r] = i(a, t));
      }
      return s;
    }
    (t.__esModule = !0), (t.default = n);
  },
  function (e, t, i) {
    "use strict";
    function n(e) {
      return e && e.__esModule ? e : { default: e };
    }
    function s() {
      for (var e = arguments.length, t = Array(e), i = 0; i < e; i++)
        t[i] = arguments[i];
      return function (e) {
        return function (i, n, s) {
          var r = e(i, n, s),
            c = r.dispatch,
            l = [],
            h = {
              getState: r.getState,
              dispatch: function (e) {
                return c(e);
              },
            };
          return (
            (l = t.map(function (e) {
              return e(h);
            })),
            (c = a.default.apply(void 0, l)(r.dispatch)),
            o({}, r, { dispatch: c })
          );
        };
      };
    }
    t.__esModule = !0;
    var o =
      Object.assign ||
      function (e) {
        for (var t = 1; t < arguments.length; t++) {
          var i = arguments[t];
          for (var n in i)
            Object.prototype.hasOwnProperty.call(i, n) && (e[n] = i[n]);
        }
        return e;
      };
    t.default = s;
    var r = i(17),
      a = n(r);
  },
  function (e, t) {
    "use strict";
    function i() {
      for (var e = arguments.length, t = Array(e), i = 0; i < e; i++)
        t[i] = arguments[i];
      if (0 === t.length)
        return function (e) {
          return e;
        };
      var n = (function () {
        var e = t[t.length - 1],
          i = t.slice(0, -1);
        return {
          v: function () {
            return i.reduceRight(function (e, t) {
              return t(e);
            }, e.apply(void 0, arguments));
          },
        };
      })();
      return "object" == typeof n ? n.v : void 0;
    }
    (t.__esModule = !0), (t.default = i);
  },
  function (e, t, i) {
    "use strict";
    function n(e) {
      return e && e.__esModule ? e : { default: e };
    }
    Object.defineProperty(t, "__esModule", { value: !0 });
    var s = i(4),
      o = i(19),
      r = n(o),
      a = i(20),
      c = n(a),
      l = i(21),
      h = n(l),
      u = (0, s.combineReducers)({
        items: r.default,
        groups: c.default,
        choices: h.default,
      }),
      d = function (e, t) {
        var i = e;
        return "CLEAR_ALL" === t.type && (i = void 0), u(i, t);
      };
    t.default = d;
  },
  function (e, t) {
    "use strict";
    function i(e) {
      if (Array.isArray(e)) {
        for (var t = 0, i = Array(e.length); t < e.length; t++) i[t] = e[t];
        return i;
      }
      return Array.from(e);
    }
    Object.defineProperty(t, "__esModule", { value: !0 });
    var n = function () {
      var e =
          arguments.length <= 0 || void 0 === arguments[0] ? [] : arguments[0],
        t = arguments[1];
      switch (t.type) {
        case "ADD_ITEM":
          var n = [].concat(i(e), [
            {
              id: t.id,
              choiceId: t.choiceId,
              value: t.value,
              label: t.label,
              active: !0,
              highlighted: !1,
            },
          ]);
          return n.map(function (e) {
            return e.highlighted && (e.highlighted = !1), e;
          });
        case "REMOVE_ITEM":
          return e.map(function (e) {
            return e.id === t.id && (e.active = !1), e;
          });
        case "HIGHLIGHT_ITEM":
          return e.map(function (e) {
            return e.id === t.id && (e.highlighted = t.highlighted), e;
          });
        default:
          return e;
      }
    };
    t.default = n;
  },
  function (e, t) {
    "use strict";
    function i(e) {
      if (Array.isArray(e)) {
        for (var t = 0, i = Array(e.length); t < e.length; t++) i[t] = e[t];
        return i;
      }
      return Array.from(e);
    }
    Object.defineProperty(t, "__esModule", { value: !0 });
    var n = function () {
      var e =
          arguments.length <= 0 || void 0 === arguments[0] ? [] : arguments[0],
        t = arguments[1];
      switch (t.type) {
        case "ADD_GROUP":
          return [].concat(i(e), [
            {
              id: t.id,
              value: t.value,
              active: t.active,
              disabled: t.disabled,
            },
          ]);
        default:
          return e;
      }
    };
    t.default = n;
  },
  function (e, t) {
    "use strict";
    function i(e) {
      if (Array.isArray(e)) {
        for (var t = 0, i = Array(e.length); t < e.length; t++) i[t] = e[t];
        return i;
      }
      return Array.from(e);
    }
    Object.defineProperty(t, "__esModule", { value: !0 });
    var n =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function (e) {
              return typeof e;
            }
          : function (e) {
              return e &&
                "function" == typeof Symbol &&
                e.constructor === Symbol
                ? "symbol"
                : typeof e;
            },
      s = function () {
        var e =
            arguments.length <= 0 || void 0 === arguments[0]
              ? []
              : arguments[0],
          t = arguments[1];
        switch (t.type) {
          case "ADD_CHOICE":
            return [].concat(i(e), [
              {
                id: t.id,
                groupId: t.groupId,
                value: t.value,
                label: t.label,
                disabled: t.disabled,
                selected: !1,
                active: !0,
                score: 9999,
              },
            ]);
          case "ADD_ITEM":
            var s = e;
            return (
              t.activateOptions &&
                (s = e.map(function (e) {
                  return (e.active = t.active), e;
                })),
              t.choiceId > -1 &&
                (s = e.map(function (e) {
                  return (
                    e.id === parseInt(t.choiceId, 10) && (e.selected = !0), e
                  );
                })),
              s
            );
          case "REMOVE_ITEM":
            return t.choiceId > -1
              ? e.map(function (e) {
                  return (
                    e.id === parseInt(t.choiceId, 10) && (e.selected = !1), e
                  );
                })
              : e;
          case "FILTER_CHOICES":
            var o = (function () {
              var i = t.results,
                n = e.map(function (e) {
                  return (
                    (e.active = i.some(function (t) {
                      return t.item.id === e.id && ((e.score = t.score), !0);
                    })),
                    e
                  );
                });
              return { v: n };
            })();
            if ("object" === ("undefined" == typeof o ? "undefined" : n(o)))
              return o.v;
          case "ACTIVATE_CHOICES":
            return e.map(function (e) {
              return (e.active = t.active), e;
            });
          default:
            return e;
        }
      };
    t.default = s;
  },
  function (e, t) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    (t.addItem = function (e, t, i, n, s) {
      return {
        type: "ADD_ITEM",
        value: e,
        label: t,
        id: i,
        choiceId: n,
        activateOptions: s,
      };
    }),
      (t.removeItem = function (e, t) {
        return { type: "REMOVE_ITEM", id: e, choiceId: t };
      }),
      (t.highlightItem = function (e, t) {
        return { type: "HIGHLIGHT_ITEM", id: e, highlighted: t };
      }),
      (t.addChoice = function (e, t, i, n, s) {
        return {
          type: "ADD_CHOICE",
          value: e,
          label: t,
          id: i,
          groupId: n,
          disabled: s,
        };
      }),
      (t.filterChoices = function (e) {
        return { type: "FILTER_CHOICES", results: e };
      }),
      (t.activateChoices = function () {
        var e =
          arguments.length <= 0 || void 0 === arguments[0] || arguments[0];
        return { type: "ACTIVATE_CHOICES", active: e };
      }),
      (t.addGroup = function (e, t, i, n) {
        return { type: "ADD_GROUP", value: e, id: t, active: i, disabled: n };
      }),
      (t.clearAll = function () {
        return { type: "CLEAR_ALL" };
      });
  },
  function (e, t) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var i =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function (e) {
              return typeof e;
            }
          : function (e) {
              return e &&
                "function" == typeof Symbol &&
                e.constructor === Symbol
                ? "symbol"
                : typeof e;
            },
      n =
        ((t.capitalise = function (e) {
          return e.replace(/\w\S*/g, function (e) {
            return e.charAt(0).toUpperCase() + e.substr(1).toLowerCase();
          });
        }),
        (t.isType = function (e, t) {
          var i = Object.prototype.toString.call(t).slice(8, -1);
          return void 0 !== t && null !== t && i === e;
        })),
      s =
        ((t.isNode = function (e) {
          return "object" ===
            ("undefined" == typeof Node ? "undefined" : i(Node))
            ? e instanceof Node
            : e &&
                "object" === ("undefined" == typeof e ? "undefined" : i(e)) &&
                "number" == typeof e.nodeType &&
                "string" == typeof e.nodeName;
        }),
        (t.isElement = function (e) {
          return "object" ===
            ("undefined" == typeof HTMLElement ? "undefined" : i(HTMLElement))
            ? e instanceof HTMLElement
            : e &&
                "object" === ("undefined" == typeof e ? "undefined" : i(e)) &&
                null !== e &&
                1 === e.nodeType &&
                "string" == typeof e.nodeName;
        }),
        (t.extend = function r() {
          for (
            var e = {},
              t = !1,
              i = arguments.length,
              s = function (i) {
                for (var s in i)
                  Object.prototype.hasOwnProperty.call(i, s) &&
                    (t && n("Object", i[s])
                      ? (e[s] = r(!0, e[s], i[s]))
                      : (e[s] = i[s]));
              },
              o = 0;
            o < i;
            o++
          ) {
            var a = arguments[o];
            n("Object", a)
              ? s(a)
              : console.error("Custom options must be an object");
          }
          return e;
        }),
        (t.whichTransitionEvent = function () {
          var e,
            t = document.createElement("fakeelement"),
            i = {
              transition: "transitionend",
              OTransition: "oTransitionEnd",
              MozTransition: "transitionend",
              WebkitTransition: "webkitTransitionEnd",
            };
          for (e in i) if (void 0 !== t.style[e]) return i[e];
        }),
        (t.whichAnimationEvent = function () {
          var e,
            t = document.createElement("fakeelement"),
            i = {
              animation: "animationend",
              OAnimation: "oAnimationEnd",
              MozAnimation: "animationend",
              WebkitAnimation: "webkitAnimationEnd",
            };
          for (e in i) if (void 0 !== t.style[e]) return i[e];
        })),
      o =
        ((t.getParentsUntil = function (e, t, i) {
          for (var n = []; e && e !== document; e = e.parentNode) {
            if (t) {
              var s = t.charAt(0);
              if ("." === s && e.classList.contains(t.substr(1))) break;
              if ("#" === s && e.id === t.substr(1)) break;
              if ("[" === s && e.hasAttribute(t.substr(1, t.length - 1))) break;
              if (e.tagName.toLowerCase() === t) break;
            }
            if (i) {
              var o = i.charAt(0);
              "." === o && e.classList.contains(i.substr(1)) && n.push(e),
                "#" === o && e.id === i.substr(1) && n.push(e),
                "[" === o &&
                  e.hasAttribute(i.substr(1, i.length - 1)) &&
                  n.push(e),
                e.tagName.toLowerCase() === i && n.push(e);
            } else n.push(e);
          }
          return 0 === n.length ? null : n;
        }),
        (t.wrap = function (e, t) {
          return (
            (t = t || document.createElement("div")),
            e.nextSibling
              ? e.parentNode.insertBefore(t, e.nextSibling)
              : e.parentNode.appendChild(t),
            t.appendChild(e)
          );
        }),
        (t.getSiblings = function (e) {
          for (var t = [], i = e.parentNode.firstChild; i; i = i.nextSibling)
            1 === i.nodeType && i !== e && t.push(i);
          return t;
        }),
        (t.findAncestor = function (e, t) {
          for (; (e = e.parentElement) && !e.classList.contains(t); );
          return e;
        }),
        (t.debounce = function (e, t, i) {
          var n;
          return function () {
            var s = this,
              o = arguments,
              r = function () {
                (n = null), i || e.apply(s, o);
              },
              a = i && !n;
            clearTimeout(n), (n = setTimeout(r, t)), a && e.apply(s, o);
          };
        }),
        (t.getElemDistance = function (e) {
          var t = 0;
          if (e.offsetParent)
            do (t += e.offsetTop), (e = e.offsetParent);
            while (e);
          return t >= 0 ? t : 0;
        }),
        (t.getElementOffset = function (e, t) {
          var i = t;
          return (
            i > 1 && (i = 1), i > 0 && (i = 0), Math.max(e.offsetHeight * i)
          );
        }),
        (t.getAdjacentEl = function (e, t) {
          var i =
            arguments.length <= 2 || void 0 === arguments[2] ? 1 : arguments[2];
          if (e && t) {
            var n = e.parentNode.parentNode,
              s = Array.from(n.querySelectorAll(t)),
              o = s.indexOf(e),
              r = i > 0 ? 1 : -1;
            return s[o + r];
          }
        }),
        (t.getScrollPosition = function (e) {
          return "bottom" === e
            ? Math.max(
                (window.scrollY || window.pageYOffset) +
                  (window.innerHeight || document.documentElement.clientHeight)
              )
            : window.scrollY || window.pageYOffset;
        }),
        (t.isInView = function (e, t, i) {
          return (
            this.getScrollPosition(t) >
            this.getElemDistance(e) + this.getElementOffset(e, i)
          );
        }),
        (t.isScrolledIntoView = function (e, t) {
          var i =
            arguments.length <= 2 || void 0 === arguments[2] ? 1 : arguments[2];
          if (e) {
            var n = void 0;
            return (n =
              i > 0
                ? t.scrollTop + t.offsetHeight >= e.offsetTop + e.offsetHeight
                : e.offsetTop >= t.scrollTop);
          }
        }),
        (t.stripHTML = function (e) {
          var t = document.createElement("DIV");
          return (t.innerHTML = e), t.textContent || t.innerText || "";
        }),
        (t.addAnimation = function (e, t) {
          var i = s(),
            n = function o() {
              e.classList.remove(t), e.removeEventListener(i, o, !1);
            };
          e.classList.add(t), e.addEventListener(i, n, !1);
        }),
        (t.getRandomNumber = function (e, t) {
          return Math.floor(Math.random() * (t - e) + e);
        }),
        (t.strToEl = (function () {
          var e = document.createElement("div");
          return function (t) {
            var i;
            for (e.innerHTML = t, i = e.children[0]; e.firstChild; )
              e.removeChild(e.firstChild);
            return i;
          };
        })()));
    (t.getWidthOfInput = function (e) {
      var t = e.value || e.placeholder,
        i = e.offsetWidth;
      if (t) {
        var n = o("<span>" + t + "</span>");
        (n.style.position = "absolute"),
          (n.style.padding = "0"),
          (n.style.top = "-9999px"),
          (n.style.left = "-9999px"),
          (n.style.width = "auto"),
          (n.style.whiteSpace = "pre"),
          document.body.appendChild(n),
          t && n.offsetWidth !== e.offsetWidth && (i = n.offsetWidth + 4),
          document.body.removeChild(n);
      }
      return i + "px";
    }),
      (t.sortByAlpha = function (e, t) {
        var i = (e.label || e.value).toLowerCase(),
          n = (t.label || t.value).toLowerCase();
        return i < n ? -1 : i > n ? 1 : 0;
      }),
      (t.sortByScore = function (e, t) {
        return e.score - t.score;
      });
  },
  function (e, t) {
    "use strict";
    Array.from ||
      (Array.from = (function () {
        var e = Object.prototype.toString,
          t = function (t) {
            return "function" == typeof t || "[object Function]" === e.call(t);
          },
          i = function (e) {
            var t = Number(e);
            return isNaN(t)
              ? 0
              : 0 !== t && isFinite(t)
              ? (t > 0 ? 1 : -1) * Math.floor(Math.abs(t))
              : t;
          },
          n = Math.pow(2, 53) - 1,
          s = function (e) {
            var t = i(e);
            return Math.min(Math.max(t, 0), n);
          };
        return function (e) {
          var i = this,
            n = Object(e);
          if (null == e)
            throw new TypeError(
              "Array.from requires an array-like object - not null or undefined"
            );
          var o,
            r = arguments.length > 1 ? arguments[1] : void 0;
          if ("undefined" != typeof r) {
            if (!t(r))
              throw new TypeError(
                "Array.from: when provided, the second argument must be a function"
              );
            arguments.length > 2 && (o = arguments[2]);
          }
          for (
            var a,
              c = s(n.length),
              l = t(i) ? Object(new i(c)) : new Array(c),
              h = 0;
            h < c;

          )
            (a = n[h]),
              r
                ? (l[h] = "undefined" == typeof o ? r(a, h) : r.call(o, a, h))
                : (l[h] = a),
              (h += 1);
          return (l.length = c), l;
        };
      })()),
      Array.prototype.find ||
        (Array.prototype.find = function (e) {
          if (null == this)
            throw new TypeError(
              "Array.prototype.find called on null or undefined"
            );
          if ("function" != typeof e)
            throw new TypeError("predicate must be a function");
          for (
            var t,
              i = Object(this),
              n = i.length >>> 0,
              s = arguments[1],
              o = 0;
            o < n;
            o++
          )
            if (((t = i[o]), e.call(s, t, o, i))) return t;
        }),
      (function () {
        var e,
          t = 0,
          i = ["ms", "moz", "webkit", "o"];
        for (e = 0; e < i.length && !window.requestAnimationFrame; ++e)
          (window.requestAnimationFrame =
            window[i[e] + "RequestAnimationFrame"]),
            (window.cancelAnimationFrame =
              window[i[e] + "CancelAnimationFrame"] ||
              window[i[e] + "CancelRequestAnimationFrame"]);
        window.requestAnimationFrame ||
          (window.requestAnimationFrame = function (e, i) {
            var n = new Date().getTime(),
              s = Math.max(0, 16 - (n - t)),
              o = window.setTimeout(function () {
                e(n + s);
              }, s);
            return (t = n + s), o;
          }),
          window.cancelAnimationFrame ||
            (window.cancelAnimationFrame = function (e) {
              window.clearTimeout(e);
            });
      })();
  },
]);
//# sourceMappingURL=choices.min.js.map
