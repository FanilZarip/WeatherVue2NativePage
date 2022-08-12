(function () {
  var t = {
      3972: function (t, e, a) {
        "use strict";
        var r = a(6369),
          s = function () {
            var t = this,
              e = t._self._c;
            return e("section", { staticClass: "container" }, [
              e(
                "div",
                { staticClass: "weather__wrapper" },
                [
                  e("TheSearch", { on: { getWeatherData: t.getWeatherData } }),
                  e("WeatherWrapper", {
                    attrs: {
                      currentCity: t.currentCity,
                      weatherNow: t.weatherNow,
                      weatherDetails: t.weatherDetails,
                      weatherForecast: t.weatherForecast,
                    },
                    on: { getWeatherData: t.getWeatherData },
                  }),
                ],
                1
              ),
            ]);
          },
          i = [],
          o = function () {
            var t = this,
              e = t._self._c;
            return e("div", { staticClass: "search" }, [
              e(
                "form",
                {
                  staticClass: "d-flex weather__form",
                  on: {
                    submit: function (e) {
                      e.preventDefault(),
                        t.getWeatherData(),
                        t.resetLastSelectedCity();
                    },
                  },
                },
                [
                  e("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: t.cityName,
                        expression: "cityName",
                      },
                    ],
                    staticClass: "inputCity",
                    attrs: { placeholder: "Enter city", type: "text" },
                    domProps: { value: t.cityName },
                    on: {
                      input: function (e) {
                        e.target.composing || (t.cityName = e.target.value);
                      },
                    },
                  }),
                  t._m(0),
                ]
              ),
            ]);
          },
          n = [
            function () {
              var t = this,
                e = t._self._c;
              return e(
                "button",
                {
                  staticClass: "button search__button",
                  attrs: { type: "submit" },
                },
                [e("img", { attrs: { src: a(8452), alt: "search" } })]
              );
            },
          ];
        const c = {
          getDataFromLocalStorage() {
            try {
              const t = localStorage.getItem("favoriteCitiesListStorage"),
                e = JSON.parse(t);
              return e;
            } catch (t) {
              alert(t.stack);
            }
          },
          getCitySet() {
            try {
              const t = localStorage.getItem("citiesSet"),
                e = JSON.parse(t);
              return e;
            } catch (t) {
              alert(t.stack);
            }
          },
          getLastSelectedCity() {
            try {
              const t = localStorage.getItem("lastSelectedCity");
              return t;
            } catch (t) {
              alert(t.stack);
            }
          },
          saveFavoriteCitiesListToLocalStorage(t) {
            localStorage.setItem(
              "favoriteCitiesListStorage",
              JSON.stringify(t)
            );
          },
          addLastSelectedCityToLocalStorage(t) {
            localStorage.setItem("lastSelectedCity", t);
          },
          removeLastSelectedCityStorage() {
            localStorage.removeItem("lastSelectedCity");
          },
        };
        var l = {
            data() {
              return { cityName: "" };
            },
            methods: {
              getWeatherData() {
                this.$emit("getWeatherData", this.cityName),
                  (this.cityName = "");
              },
              resetLastSelectedCity() {
                c.removeLastSelectedCityStorage();
              },
            },
          },
          u = l,
          d = a(1001),
          h = (0, d.Z)(u, o, n, !1, null, null, null),
          _ = h.exports,
          m = function () {
            var t = this,
              e = t._self._c;
            return e(
              "div",
              { staticClass: "weather__info d-flex" },
              [
                e("WeatherInfo", {
                  attrs: {
                    currentCity: t.currentCity,
                    favoriteCities: t.favoriteCities,
                    weatherNow: t.weatherNow,
                    weatherDetails: t.weatherDetails,
                    weatherForecast: t.weatherForecast,
                  },
                  on: { addToFavorite: t.addToFavorite },
                }),
                e("WeatherFavorite", {
                  attrs: {
                    favoriteCities: t.favoriteCities,
                    currentCity: t.currentCity,
                  },
                  on: {
                    deleteFromFavorite: t.deleteFromFavorite,
                    getWeatherData: t.getWeatherData,
                  },
                }),
              ],
              1
            );
          },
          p = [],
          v = function () {
            var t = this,
              e = t._self._c;
            return e(
              "div",
              { staticClass: "weather__details" },
              [
                t._l(t.tabs, function (a) {
                  return e(
                    "button",
                    {
                      key: a,
                      class: {
                        tab__Button_active:
                          t.currentTab === t.componentAddition + a,
                        tab__Button: t.currentTab !== t.componentAddition + a,
                      },
                      on: {
                        click: function (e) {
                          return t.setTabAdditionName(a);
                        },
                      },
                    },
                    [t._v(" " + t._s(a) + " ")]
                  );
                }),
                t.weatherNow.empty
                  ? e(
                      "div",
                      {
                        staticClass: "weather__now tabs__content",
                        attrs: { id: "Now" },
                      },
                      [
                        e("img", {
                          staticClass: "defaultIcon",
                          attrs: { src: a(8779), alt: "" },
                        }),
                      ]
                    )
                  : e(t.currentTab, {
                      tag: "component",
                      staticClass: "tab",
                      attrs: {
                        currentCity: t.currentCity,
                        favoriteCities: t.favoriteCities,
                        weatherNow: t.weatherNow,
                        weatherDetails: t.weatherDetails,
                        weatherForecast: t.weatherForecast,
                      },
                      on: { addToFavorite: t.addToFavorite },
                    }),
              ],
              2
            );
          },
          f = [],
          C = function () {
            var t = this,
              e = t._self._c;
            return e(
              "div",
              {
                staticClass: "weather__now tabs__content",
                attrs: { id: "Now" },
              },
              [
                e("div", { staticClass: "temperature" }, [
                  e("span", { staticClass: "temperature__value" }, [
                    t._v(t._s(t.weatherNow.temperature)),
                  ]),
                  e("span", { staticClass: "degree__symbol" }, [t._v("°")]),
                ]),
                e("img", {
                  staticClass: "weather_icon",
                  attrs: { src: t.weatherNow.imgIcon, alt: "" },
                }),
                e("div", { staticClass: "addToFavority d-flex" }, [
                  e("p", { staticClass: "cityName current__city" }, [
                    t._v(" " + t._s(t.weatherNow.cityName) + " "),
                  ]),
                  e("button", {
                    staticClass: "addToFavorityButton buttonImg",
                    class: { buttonImgAtFavorite: t.changeAddButtonImg },
                    on: { click: t.addToFavorite },
                  }),
                ]),
              ]
            );
          },
          w = [],
          y = {
            props: {
              weatherNow: Object,
              currentCity: String,
              favoriteCities: Array,
            },
            data() {
              return {};
            },
            methods: {
              addToFavorite() {
                this.$emit("addToFavorite");
              },
            },
            computed: {
              changeAddButtonImg() {
                const t = this.favoriteCities.find(
                  (t) => t === this.currentCity
                );
                return !!t;
              },
            },
          },
          g = y,
          T = (0, d.Z)(g, C, w, !1, null, null, null),
          S = T.exports,
          F = function () {
            var t = this,
              e = t._self._c;
            return e(
              "div",
              {
                staticClass: "weather__now tabs__content",
                attrs: { id: "Details" },
              },
              [
                e("p", { staticClass: "cityName" }, [
                  t._v(t._s(t.weatherDetails.cityName)),
                ]),
                e("div", { staticClass: "locationList" }, [
                  e(
                    "div",
                    { staticClass: "temperature d-flex temperature__Details" },
                    [
                      e("p", { staticClass: "location__name" }, [
                        t._v("Temperature:"),
                      ]),
                      e("span", { staticClass: "temperature__value" }, [
                        t._v(t._s(t.weatherDetails.temperature)),
                      ]),
                      e("span", {}, [t._v("°")]),
                    ]
                  ),
                  e(
                    "div",
                    { staticClass: "temperature d-flex temperature__Details" },
                    [
                      e("p", { staticClass: "location__name" }, [
                        t._v("Feels Like:"),
                      ]),
                      e("span", { staticClass: "feelsLike__value" }, [
                        t._v(t._s(t.weatherDetails.feelsLikeTemperature)),
                      ]),
                      e("span", {}, [t._v("°")]),
                    ]
                  ),
                  e(
                    "div",
                    { staticClass: "temperature d-flex temperature__Details" },
                    [
                      e("p", { staticClass: "location__name" }, [
                        t._v("Weather:"),
                      ]),
                      e("span", { staticClass: "weather__status" }, [
                        t._v(t._s(t.weatherDetails.weatherStatus)),
                      ]),
                    ]
                  ),
                  e(
                    "div",
                    { staticClass: "temperature d-flex temperature__Details" },
                    [
                      e("p", { staticClass: "location__name" }, [
                        t._v("Sunrise:"),
                      ]),
                      e("span", { staticClass: "sunrise__time" }, [
                        t._v(t._s(t.weatherDetails.sunriseTime)),
                      ]),
                    ]
                  ),
                  e(
                    "div",
                    { staticClass: "temperature d-flex temperature__Details" },
                    [
                      e("p", { staticClass: "location__name" }, [
                        t._v("Sunset:"),
                      ]),
                      e("span", { staticClass: "sunset__time" }, [
                        t._v(t._s(t.weatherDetails.sunsetTime)),
                      ]),
                    ]
                  ),
                ]),
              ]
            );
          },
          D = [],
          b = {
            props: ["weatherDetails"],
            data() {
              return {};
            },
          },
          N = b,
          L = (0, d.Z)(N, F, D, !1, null, null, null),
          W = L.exports,
          k = function () {
            var t = this,
              e = t._self._c;
            return e(
              "div",
              {
                staticClass: "weather__now tabs__content locationList",
                attrs: { id: "Forecast" },
              },
              [
                e("p", { staticClass: "cityName forecastCityName" }, [
                  t._v(t._s(t.weatherForecast[0].cityName)),
                ]),
                t._l(t.weatherForecast, function (a) {
                  return e(
                    "ul",
                    { key: a.day + a.time, staticClass: "forecast__list" },
                    [
                      e("li", { staticClass: "forecast__item" }, [
                        e("div", { staticClass: "forecast__day d-flex" }, [
                          e("p", { staticClass: "day" }, [t._v(t._s(a.day))]),
                          e("p", { staticClass: "time" }, [t._v(t._s(a.time))]),
                        ]),
                        e(
                          "div",
                          { staticClass: "forecast__temperature d-flex" },
                          [
                            e("div", { staticClass: "temperature__item" }, [
                              e(
                                "span",
                                { staticClass: "forecast__temperature_title" },
                                [t._v("Temperature:")]
                              ),
                              e(
                                "span",
                                { staticClass: "forecast__temperature_date" },
                                [t._v(t._s(a.currentTemperature) + "°")]
                              ),
                            ]),
                            e(
                              "p",
                              { staticClass: "forecast__temperature__state" },
                              [t._v(" " + t._s(a.currentWeatherStatus) + " ")]
                            ),
                          ]
                        ),
                        e(
                          "div",
                          { staticClass: "forecast__feels_like d-flex" },
                          [
                            e("div", { staticClass: "temperature__item" }, [
                              e(
                                "span",
                                { staticClass: "forecast__temperature_title" },
                                [t._v("Temperature:")]
                              ),
                              e(
                                "span",
                                { staticClass: "forecast__temperature_date" },
                                [t._v(t._s(a.feelsLikeTemperature) + "°")]
                              ),
                            ]),
                            e("img", {
                              staticClass: "forecast__temperature__state",
                              attrs: { src: a.icon },
                            }),
                          ]
                        ),
                      ]),
                    ]
                  );
                }),
              ],
              2
            );
          },
          A = [],
          x = {
            props: ["weatherForecast"],
            data() {
              return {};
            },
          },
          I = x,
          E = (0, d.Z)(I, k, A, !1, null, null, null),
          O = E.exports,
          Z = {
            components: {
              WeatherNow: S,
              WeatherDetails: W,
              WeatherForecast: O,
            },
            props: {
              weatherNow: Object,
              weatherDetails: Object,
              weatherForecast: Object,
              currentCity: String,
              favoriteCities: Array,
            },
            data() {
              return {
                componentAddition: "Weather",
                currentTab: "WeatherNow",
                tabs: ["Now", "Details", "Forecast"],
              };
            },
            methods: {
              setTabAdditionName(t) {
                (this.currentTab = this.componentAddition + t),
                  (this.currentProp = this.propAddition + t);
              },
              addToFavorite() {
                this.$emit("addToFavorite");
              },
            },
          },
          $ = Z,
          P = (0, d.Z)($, v, f, !1, null, null, null),
          j = P.exports,
          M = function () {
            var t = this,
              e = t._self._c;
            return e(
              "div",
              { staticClass: "added__locations" },
              [
                e("p", { staticClass: "added_Title" }, [
                  t._v("Added Locations:"),
                ]),
                t._l(t.favoriteCities, function (a) {
                  return e(
                    "div",
                    { key: a, staticClass: "locationList favorite__List" },
                    [
                      e(
                        "div",
                        {
                          staticClass: "d-flex favoriteCity",
                          class: {
                            favoriteCityChecked:
                              t.currentCity === a &&
                              t.currentCity === t.pickedCity,
                          },
                        },
                        [
                          e("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: t.pickedCity,
                                expression: "pickedCity",
                              },
                            ],
                            attrs: {
                              hidden: "",
                              type: "radio",
                              name: "favoriteCityRadioName",
                              id: a,
                            },
                            domProps: {
                              value: a,
                              checked: t._q(t.pickedCity, a),
                            },
                            on: {
                              change: function (e) {
                                t.pickedCity = a;
                              },
                            },
                          }),
                          e(
                            "label",
                            {
                              staticClass: "labelWidth",
                              attrs: { for: a },
                              on: {
                                click: function (e) {
                                  return t.getWeatherData(a);
                                },
                              },
                            },
                            [
                              e(
                                "p",
                                {
                                  staticClass: "location__name cityAtFavorite",
                                },
                                [t._v(" " + t._s(a) + " ")]
                              ),
                            ]
                          ),
                          e(
                            "span",
                            {
                              staticClass: "removeCity",
                              on: {
                                click: function (e) {
                                  t.deleteFromFavorite(a),
                                    t.saveLastDeletedCity(a);
                                },
                              },
                            },
                            [t._v(" X ")]
                          ),
                        ]
                      ),
                    ]
                  );
                }),
              ],
              2
            );
          },
          R = [],
          H = {
            data() {
              return { pickedCity: "", deletedCity: "" };
            },
            props: { favoriteCities: Array, currentCity: String },
            emits: ["deleteFromFavorite", "getWeatherData"],
            methods: {
              deleteFromFavorite(t) {
                this.$emit("deleteFromFavorite", t);
              },
              getWeatherData(t) {
                this.$emit("getWeatherData", t);
              },
              savePickedSiteToLocalStorage() {
                c.addLastSelectedCityToLocalStorage(this.pickedCity);
              },
              saveLastDeletedCity(t) {
                this.deletedCity = t;
              },
              resetLastSelectedCity() {
                const t = this.pickedCity === this.deletedCity,
                  e = this.deletedCity === this.currentCity;
                (t || e) && c.removeLastSelectedCityStorage();
              },
            },
            watch: {
              pickedCity: "savePickedSiteToLocalStorage",
              deletedCity: "resetLastSelectedCity",
            },
          },
          B = H,
          K = (0, d.Z)(B, M, R, !1, null, null, null),
          q = K.exports,
          J = {
            components: { WeatherInfo: j, WeatherFavorite: q },
            props: {
              currentCity: String,
              weatherNow: Object,
              weatherDetails: Object,
              weatherForecast: Object,
            },
            data() {
              return { favoriteCities: [] };
            },
            methods: {
              addToFavorite() {
                const t = new Set([...this.favoriteCities]);
                t.add(this.currentCity), (this.favoriteCities = [...t]);
              },
              saveFavoriteListToLocalStorage() {
                c.saveFavoriteCitiesListToLocalStorage(this.favoriteCities);
              },
              deleteFromFavorite(t) {
                const e = new Set([...this.favoriteCities]);
                e.delete(t), (this.favoriteCities = [...e]);
              },
              getWeatherData(t) {
                this.$emit("getWeatherData", t);
              },
            },
            watch: { favoriteCities: "saveFavoriteListToLocalStorage" },
            mounted() {
              const t = c.getDataFromLocalStorage();
              t && (this.favoriteCities = [...t]);
            },
          },
          Y = J,
          G = (0, d.Z)(Y, m, p, !1, null, null, null),
          U = G.exports;
        a(1703);
        function X(t) {
          try {
            if (404 === t.status) throw new Error("Enter correct city");
            if (401 === t.status) throw new Error("Check API Key");
          } catch (e) {
            alert(e);
          }
        }
        var z = a(7699),
          Q = a(5351);
        const V = {
          WeatherNow: "https://api.openweathermap.org/data/2.5/weather",
          Forecast: "https://api.openweathermap.org/data/2.5/forecast",
          IMG_URL: "https://openweathermap.org/img/wn/",
          forecastCount: "cnt=3",
          METRIC: "units=metric",
          API_KEY: "f660a2fb1e4bad108d6160b7f58c555f",
        };
        async function tt(t) {
          const e = `${V.WeatherNow}?q=${t}&appid=${V.API_KEY}&${V.METRIC}`,
            a = "HH:mm";
          try {
            const t = await fetch(e);
            X(t);
            const r = await t.json(),
              s = {
                temperature: Math.round(r.main.temp),
                cityName: r.name,
                imgIcon: V.IMG_URL + r.weather[0].icon + "@2x.png",
              },
              i = {
                time: "time",
                sunriseTime: (0, z.Z)((0, Q.Z)(r.sys.sunrise), a),
                sunsetTime: (0, z.Z)((0, Q.Z)(r.sys.sunset), a),
                temperature: Math.round(r.main.temp),
                feelsLikeTemperature: Math.round(r.main.feels_like),
                weatherStatus: r.weather[0].main,
                cityName: r.name,
              };
            return { WEATHER_NOW_DATA: s, WEATHER_DETAILS_DATA: i };
          } catch (r) {
            console.log("I have await Error", r.stack);
          }
        }
        async function et(t) {
          const e = "HH:mm",
            a = "dd LLL",
            r = `${V.Forecast}?q=${t}&appid=${V.API_KEY}&${V.METRIC}&${V.forecastCount}`;
          try {
            const t = await fetch(r);
            X(t);
            const s = await t.json(),
              i = s.list,
              o = [];
            return (
              i.forEach((t) => {
                o.push({
                  day: (0, z.Z)((0, Q.Z)(t.dt), a),
                  time: (0, z.Z)((0, Q.Z)(t.dt), e),
                  currentTemperature: Math.round(t.main.temp),
                  feelsLikeTemperature: Math.round(t.main.feels_like),
                  currentWeatherStatus: t.weather[0].main,
                  icon: `https://openweathermap.org/img/wn/${t.weather[0].icon}.png`,
                  cityName: s.city.name,
                });
              }),
              o
            );
          } catch (s) {
            alert(s.stack);
          }
        }
        var at = {
            components: { TheSearch: _, WeatherWrapper: U },
            data() {
              return {
                currentCity: "",
                weatherNow: { empty: !0 },
                weatherDetails: {},
                weatherForecast: {},
              };
            },
            methods: {
              async getWeatherData(t) {
                if (t) {
                  const e = await tt(t),
                    a = await et(t);
                  (this.weatherNow = { ...e.WEATHER_NOW_DATA }),
                    (this.weatherDetails = { ...e.WEATHER_DETAILS_DATA }),
                    (this.weatherForecast = { ...a }),
                    (this.currentCity = e.WEATHER_NOW_DATA.cityName);
                }
              },
            },
            mounted() {
              const t = c.getLastSelectedCity();
              this.getWeatherData(t);
            },
          },
          rt = at,
          st = (0, d.Z)(rt, s, i, !1, null, null, null),
          it = st.exports,
          ot = a(1120),
          nt = a.n(ot),
          ct = a(3822);
        r.ZP.use(ct.ZP);
        var lt = new ct.ZP.Store({
          state: {},
          getters: {},
          mutations: {},
          actions: {},
          modules: {},
        });
        (r.ZP.config.productionTip = !1),
          new r.ZP({ router: nt(), store: lt, render: (t) => t(it) }).$mount(
            "#app"
          );
      },
      1120: function () {},
      8452: function (t, e, a) {
        "use strict";
        t.exports = "./img/search.26667a34.svg";
      },
      8779: function (t, e, a) {
        "use strict";
        t.exports = "./img/weather-featured-3.61f44630.png";
      },
    },
    e = {};
  function a(r) {
    var s = e[r];
    if (void 0 !== s) return s.exports;
    var i = (e[r] = { exports: {} });
    return t[r](i, i.exports, a), i.exports;
  }
  (a.m = t),
    (function () {
      var t = [];
      a.O = function (e, r, s, i) {
        if (!r) {
          var o = 1 / 0;
          for (u = 0; u < t.length; u++) {
            (r = t[u][0]), (s = t[u][1]), (i = t[u][2]);
            for (var n = !0, c = 0; c < r.length; c++)
              (!1 & i || o >= i) &&
              Object.keys(a.O).every(function (t) {
                return a.O[t](r[c]);
              })
                ? r.splice(c--, 1)
                : ((n = !1), i < o && (o = i));
            if (n) {
              t.splice(u--, 1);
              var l = s();
              void 0 !== l && (e = l);
            }
          }
          return e;
        }
        i = i || 0;
        for (var u = t.length; u > 0 && t[u - 1][2] > i; u--) t[u] = t[u - 1];
        t[u] = [r, s, i];
      };
    })(),
    (function () {
      a.n = function (t) {
        var e =
          t && t.__esModule
            ? function () {
                return t["default"];
              }
            : function () {
                return t;
              };
        return a.d(e, { a: e }), e;
      };
    })(),
    (function () {
      a.d = function (t, e) {
        for (var r in e)
          a.o(e, r) &&
            !a.o(t, r) &&
            Object.defineProperty(t, r, { enumerable: !0, get: e[r] });
      };
    })(),
    (function () {
      a.g = (function () {
        if ("object" === typeof globalThis) return globalThis;
        try {
          return this || new Function("return this")();
        } catch (t) {
          if ("object" === typeof window) return window;
        }
      })();
    })(),
    (function () {
      a.o = function (t, e) {
        return Object.prototype.hasOwnProperty.call(t, e);
      };
    })(),
    (function () {
      a.p = "/";
    })(),
    (function () {
      var t = { 143: 0 };
      a.O.j = function (e) {
        return 0 === t[e];
      };
      var e = function (e, r) {
          var s,
            i,
            o = r[0],
            n = r[1],
            c = r[2],
            l = 0;
          if (
            o.some(function (e) {
              return 0 !== t[e];
            })
          ) {
            for (s in n) a.o(n, s) && (a.m[s] = n[s]);
            if (c) var u = c(a);
          }
          for (e && e(r); l < o.length; l++)
            (i = o[l]), a.o(t, i) && t[i] && t[i][0](), (t[i] = 0);
          return a.O(u);
        },
        r = (self["webpackChunkvue2_weather_app"] =
          self["webpackChunkvue2_weather_app"] || []);
      r.forEach(e.bind(null, 0)), (r.push = e.bind(null, r.push.bind(r)));
    })();
  var r = a.O(void 0, [998], function () {
    return a(3972);
  });
  r = a.O(r);
})();
//# sourceMappingURL=app.0f407c85.js.map
