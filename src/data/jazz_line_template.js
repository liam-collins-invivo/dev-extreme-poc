export default {
  "config": {
    "trial": "narcolepsy",
    "id": "cataplexyattacks-olottp-sdp",
    "type": "line",
    "title": "Median Weekly Cataplexy Attacks Prior to the Randomized-Withdrawal Period by Pre-randomization Subgroup<sup>10</sup><sup>,a</sup>",
    "xAxis": {
      "groups": [
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9,
        10,
        11,
        12,
        13,
        14
      ],
      "padding": 0.1,
      "label": {
        "text": "Week"
      },
      "overrides": {
        "1": "1<sup>b</sup>",
        "12": "12<sup>c</sup>",
        "14": "14<sup>d</sup>"
      },
      "shadedRegion": [
        {
          "id": "first",
          "x1": 1,
          "x2": 12,
          "backgroundColor": "rgba(0, 110, 138, 0.15)",
          "label": "OLOTTP",
          "alignment": "top"
        },
        {
          "id": "second",
          "x1": 12,
          "x2": 14,
          "backgroundColor": "rgba(29, 0, 255, 0.15)",
          "label": "SDP",
          "alignment": "top"
        }
      ],
      "scale": "scaleBand"
    },
    "yAxis": {
      "low": 0,
      "high": 6,
      "inc": 1,
      "label": {
        "text": [
          "Weekly number of cataplexy",
          "<no-break>attacks, median</no-break>"
        ]
      }
    },
    "legend": [
      {
        "entry": "sxbonly",
        "label": "SXB only",
        "color": "#73CAC3",
        "line": "solid",
        "shape": "dot",
        "tooltip": "SXB only"
      },
      {
        "entry": "sxbother",
        "label": "SXB + other anticataplectics",
        "color": "#006E8A",
        "line": "solid",
        "shape": "dot",
        "tooltip": "SXB + other anticataplectics"
      },
      {
        "entry": "otherantic",
        "label": "Other anticataplectics",
        "color": "#775CA7",
        "line": "solid",
        "shape": "dot",
        "tooltip": "Other anticataplectics"
      },
      {
        "entry": "anticnaive",
        "label": "Anticataplectic naïve",
        "color": "#E2B823",
        "line": "solid",
        "shape": "dot",
        "tooltip": "Anticataplectic naïve"
      }
    ],
    "footnotes": [
      "<sup>a</sup>Figure shows the efficacy population (all randomized participants who took ≥1 dose of double-blind study drug and had ≥1 post-randomization efficacy assessment).",
      "<sup>b</sup>Week 1 = start of OLOTTP.",
      "<sup>c</sup>Week 12 = end of OLOTTP.",
      "<sup>d</sup>Week 14 = end of SDP."
    ],
    "useFootnoteTooltip": true,
    "trendLines": [],
    "tooltipHeaders": [
      "Pre-randomization subgroup",
      "Median"
    ],
    "nValueTable": {
      "type": "regular",
      "rows": 1
    },
    "chartLegend": [
      {
        "active": true,
        "entries": [
          {
            "entry": "sxbonly",
            "label": "SXB only",
            "color": "#73CAC3",
            "line": "solid",
            "shape": "dot",
            "tooltip": "SXB only"
          }
        ]
      },
      {
        "active": true,
        "entries": [
          {
            "entry": "sxbother",
            "label": "SXB + other anticataplectics",
            "color": "#006E8A",
            "line": "solid",
            "shape": "dot",
            "tooltip": "SXB + other anticataplectics"
          }
        ]
      },
      {
        "active": true,
        "entries": [
          {
            "entry": "otherantic",
            "label": "Other anticataplectics",
            "color": "#775CA7",
            "line": "solid",
            "shape": "dot",
            "tooltip": "Other anticataplectics"
          }
        ]
      },
      {
        "active": true,
        "entries": [
          {
            "entry": "anticnaive",
            "label": "Anticataplectic naïve",
            "color": "#E2B823",
            "line": "solid",
            "shape": "dot",
            "tooltip": "Anticataplectic naïve"
          }
        ]
      }
    ]
  },
  "data": [
    {
      "name": "sxbonly",
      "color": "#73CAC3",
      "sets": [
        {
          "name": "sxbonly",
          "color": "#73CAC3",
          "line": "solid",
          "shape": "dot",
          "nValueLabel": "SXB only, n",
          "tooltipLabel": "SXB only",
          "points": [
            {
              "x": 1,
              "y": 2,
              "extreme": {
                "upper": null,
                "lower": null
              },
              "label": {
                "text": 2,
                "sup": null,
                "override": ""
              },
              "nvalue": 41
            },
            {
              "x": 2,
              "y": 1.17,
              "extreme": {
                "upper": null,
                "lower": null
              },
              "label": {
                "text": 1.17,
                "sup": null,
                "override": ""
              },
              "nvalue": 41
            },
            {
              "x": 3,
              "y": 1,
              "extreme": {
                "upper": null,
                "lower": null
              },
              "label": {
                "text": 1,
                "sup": null,
                "override": ""
              },
              "nvalue": 41
            },
            {
              "x": 4,
              "y": 2.33,
              "extreme": {
                "upper": null,
                "lower": null
              },
              "label": {
                "text": 2.33,
                "sup": null,
                "override": ""
              },
              "nvalue": 40
            },
            {
              "x": 5,
              "y": 1,
              "extreme": {
                "upper": null,
                "lower": null
              },
              "label": {
                "text": 1,
                "sup": null,
                "override": ""
              },
              "nvalue": 41
            },
            {
              "x": 6,
              "y": 1,
              "extreme": {
                "upper": null,
                "lower": null
              },
              "label": {
                "text": 1,
                "sup": null,
                "override": ""
              },
              "nvalue": 41
            },
            {
              "x": 7,
              "y": 0,
              "extreme": {
                "upper": null,
                "lower": null
              },
              "label": {
                "text": 0,
                "sup": null,
                "override": ""
              },
              "nvalue": 41
            },
            {
              "x": 8,
              "y": 1.17,
              "extreme": {
                "upper": null,
                "lower": null
              },
              "label": {
                "text": 1.17,
                "sup": null,
                "override": ""
              },
              "nvalue": 41
            },
            {
              "x": 9,
              "y": 1,
              "extreme": {
                "upper": null,
                "lower": null
              },
              "label": {
                "text": 1,
                "sup": null,
                "override": ""
              },
              "nvalue": 41
            },
            {
              "x": 10,
              "y": 1.17,
              "extreme": {
                "upper": null,
                "lower": null
              },
              "label": {
                "text": 1.17,
                "sup": null,
                "override": ""
              },
              "nvalue": 41
            },
            {
              "x": 11,
              "y": 0,
              "extreme": {
                "upper": null,
                "lower": null
              },
              "label": {
                "text": 0,
                "sup": null,
                "override": ""
              },
              "nvalue": 41
            },
            {
              "x": 12,
              "y": 1,
              "extreme": {
                "upper": null,
                "lower": null
              },
              "label": {
                "text": 1,
                "sup": null,
                "override": ""
              },
              "nvalue": 41
            },
            {
              "x": 13,
              "y": 0,
              "extreme": {
                "upper": null,
                "lower": null
              },
              "label": {
                "text": 0,
                "sup": null,
                "override": ""
              },
              "nvalue": 41
            },
            {
              "x": 14,
              "y": 1,
              "extreme": {
                "upper": null,
                "lower": null
              },
              "label": {
                "text": 1,
                "sup": null,
                "override": ""
              },
              "nvalue": 41
            }
          ]
        }
      ]
    },
    {
      "name": "sxbother",
      "color": "#006E8A",
      "sets": [
        {
          "name": "sxbother",
          "color": "#006E8A",
          "line": "solid",
          "shape": "dot",
          "nValueLabel": "SXB + other<br>anticataplectics, n",
          "tooltipLabel": "SXB + other anticataplectics",
          "points": [
            {
              "x": 1,
              "y": 0.58,
              "extreme": {
                "upper": null,
                "lower": null
              },
              "label": {
                "text": 0.58,
                "sup": null,
                "override": ""
              },
              "nvalue": 14
            },
            {
              "x": 2,
              "y": 0,
              "extreme": {
                "upper": null,
                "lower": null
              },
              "label": {
                "text": 0,
                "sup": null,
                "override": ""
              },
              "nvalue": 14
            },
            {
              "x": 3,
              "y": 0,
              "extreme": {
                "upper": null,
                "lower": null
              },
              "label": {
                "text": 0,
                "sup": null,
                "override": ""
              },
              "nvalue": 14
            },
            {
              "x": 4,
              "y": 1.2,
              "extreme": {
                "upper": null,
                "lower": null
              },
              "label": {
                "text": 1.2,
                "sup": null,
                "override": ""
              },
              "nvalue": 14
            },
            {
              "x": 5,
              "y": 1.38,
              "extreme": {
                "upper": null,
                "lower": null
              },
              "label": {
                "text": 1.38,
                "sup": null,
                "override": ""
              },
              "nvalue": 14
            },
            {
              "x": 6,
              "y": 1,
              "extreme": {
                "upper": null,
                "lower": null
              },
              "label": {
                "text": 1,
                "sup": null,
                "override": ""
              },
              "nvalue": 14
            },
            {
              "x": 7,
              "y": 0.5,
              "extreme": {
                "upper": null,
                "lower": null
              },
              "label": {
                "text": 0.5,
                "sup": null,
                "override": ""
              },
              "nvalue": 14
            },
            {
              "x": 8,
              "y": 1.7,
              "extreme": {
                "upper": null,
                "lower": null
              },
              "label": {
                "text": 1.7,
                "sup": null,
                "override": ""
              },
              "nvalue": 14
            },
            {
              "x": 9,
              "y": 0,
              "extreme": {
                "upper": null,
                "lower": null
              },
              "label": {
                "text": 0,
                "sup": null,
                "override": ""
              },
              "nvalue": 14
            },
            {
              "x": 10,
              "y": 1.75,
              "extreme": {
                "upper": null,
                "lower": null
              },
              "label": {
                "text": 1.75,
                "sup": null,
                "override": ""
              },
              "nvalue": 14
            },
            {
              "x": 11,
              "y": 1.5,
              "extreme": {
                "upper": null,
                "lower": null
              },
              "label": {
                "text": 1.5,
                "sup": null,
                "override": ""
              },
              "nvalue": 14
            },
            {
              "x": 12,
              "y": 2.2,
              "extreme": {
                "upper": null,
                "lower": null
              },
              "label": {
                "text": 2.2,
                "sup": null,
                "override": ""
              },
              "nvalue": 14
            },
            {
              "x": 13,
              "y": 1,
              "extreme": {
                "upper": null,
                "lower": null
              },
              "label": {
                "text": 1,
                "sup": null,
                "override": ""
              },
              "nvalue": 14
            },
            {
              "x": 14,
              "y": 2,
              "extreme": {
                "upper": null,
                "lower": null
              },
              "label": {
                "text": 2,
                "sup": null,
                "override": ""
              },
              "nvalue": 14
            }
          ]
        }
      ]
    },
    {
      "name": "otherantic",
      "color": "#775CA7",
      "sets": [
        {
          "name": "otherantic",
          "color": "#775CA7",
          "line": "solid",
          "shape": "dot",
          "nValueLabel": "Other<br>anticataplectics, n",
          "tooltipLabel": "Other anticataplectics",
          "points": [
            {
              "x": 1,
              "y": 3.5,
              "extreme": {
                "upper": null,
                "lower": null
              },
              "label": {
                "text": 3.5,
                "sup": null,
                "override": ""
              },
              "nvalue": 21
            },
            {
              "x": 2,
              "y": 2,
              "extreme": {
                "upper": null,
                "lower": null
              },
              "label": {
                "text": 2,
                "sup": null,
                "override": ""
              },
              "nvalue": 20
            },
            {
              "x": 3,
              "y": 1,
              "extreme": {
                "upper": null,
                "lower": null
              },
              "label": {
                "text": 1,
                "sup": null,
                "override": ""
              },
              "nvalue": 20
            },
            {
              "x": 4,
              "y": 2.8,
              "extreme": {
                "upper": null,
                "lower": null
              },
              "label": {
                "text": 2.8,
                "sup": null,
                "override": ""
              },
              "nvalue": 19
            },
            {
              "x": 5,
              "y": 3,
              "extreme": {
                "upper": null,
                "lower": null
              },
              "label": {
                "text": 3,
                "sup": null,
                "override": ""
              },
              "nvalue": 21
            },
            {
              "x": 6,
              "y": 2,
              "extreme": {
                "upper": null,
                "lower": null
              },
              "label": {
                "text": 2,
                "sup": null,
                "override": ""
              },
              "nvalue": 21
            },
            {
              "x": 7,
              "y": 2.33,
              "extreme": {
                "upper": null,
                "lower": null
              },
              "label": {
                "text": 2.33,
                "sup": null,
                "override": ""
              },
              "nvalue": 21
            },
            {
              "x": 8,
              "y": 4,
              "extreme": {
                "upper": null,
                "lower": null
              },
              "label": {
                "text": 4,
                "sup": null,
                "override": ""
              },
              "nvalue": 21
            },
            {
              "x": 9,
              "y": 5,
              "extreme": {
                "upper": null,
                "lower": null
              },
              "label": {
                "text": 5,
                "sup": null,
                "override": ""
              },
              "nvalue": 21
            },
            {
              "x": 10,
              "y": 3.5,
              "extreme": {
                "upper": null,
                "lower": null
              },
              "label": {
                "text": 3.5,
                "sup": null,
                "override": ""
              },
              "nvalue": 21
            },
            {
              "x": 11,
              "y": 4,
              "extreme": {
                "upper": null,
                "lower": null
              },
              "label": {
                "text": 4,
                "sup": null,
                "override": ""
              },
              "nvalue": 21
            },
            {
              "x": 12,
              "y": 2.33,
              "extreme": {
                "upper": null,
                "lower": null
              },
              "label": {
                "text": 2.33,
                "sup": null,
                "override": ""
              },
              "nvalue": 21
            },
            {
              "x": 13,
              "y": 3,
              "extreme": {
                "upper": null,
                "lower": null
              },
              "label": {
                "text": 3,
                "sup": null,
                "override": ""
              },
              "nvalue": 21
            },
            {
              "x": 14,
              "y": 2,
              "extreme": {
                "upper": null,
                "lower": null
              },
              "label": {
                "text": 2,
                "sup": null,
                "override": ""
              },
              "nvalue": 21
            }
          ]
        }
      ]
    },
    {
      "name": "anticnaive",
      "color": "#E2B823",
      "sets": [
        {
          "name": "anticnaive",
          "color": "#E2B823",
          "line": "solid",
          "shape": "dot",
          "nValueLabel": "Anticataplectic<br>naïve, n",
          "tooltipLabel": "Anticataplectic naïve",
          "points": [
            {
              "x": 1,
              "y": 5.83,
              "extreme": {
                "upper": null,
                "lower": null
              },
              "label": {
                "text": 5.83,
                "sup": null,
                "override": ""
              },
              "nvalue": 57
            },
            {
              "x": 2,
              "y": 3.5,
              "extreme": {
                "upper": null,
                "lower": null
              },
              "label": {
                "text": 3.5,
                "sup": null,
                "override": ""
              },
              "nvalue": 58
            },
            {
              "x": 3,
              "y": 3.5,
              "extreme": {
                "upper": null,
                "lower": null
              },
              "label": {
                "text": 3.5,
                "sup": null,
                "override": ""
              },
              "nvalue": 58
            },
            {
              "x": 4,
              "y": 2.4,
              "extreme": {
                "upper": null,
                "lower": null
              },
              "label": {
                "text": 2.4,
                "sup": null,
                "override": ""
              },
              "nvalue": 58
            },
            {
              "x": 5,
              "y": 2.67,
              "extreme": {
                "upper": null,
                "lower": null
              },
              "label": {
                "text": 2.67,
                "sup": null,
                "override": ""
              },
              "nvalue": 58
            },
            {
              "x": 6,
              "y": 2.57,
              "extreme": {
                "upper": null,
                "lower": null
              },
              "label": {
                "text": 2.57,
                "sup": null,
                "override": ""
              },
              "nvalue": 58
            },
            {
              "x": 7,
              "y": 2.33,
              "extreme": {
                "upper": null,
                "lower": null
              },
              "label": {
                "text": 2.33,
                "sup": null,
                "override": ""
              },
              "nvalue": 58
            },
            {
              "x": 8,
              "y": 1.17,
              "extreme": {
                "upper": null,
                "lower": null
              },
              "label": {
                "text": 1.17,
                "sup": null,
                "override": ""
              },
              "nvalue": 58
            },
            {
              "x": 9,
              "y": 1.4,
              "extreme": {
                "upper": null,
                "lower": null
              },
              "label": {
                "text": 1.4,
                "sup": null,
                "override": ""
              },
              "nvalue": 58
            },
            {
              "x": 10,
              "y": 1.4,
              "extreme": {
                "upper": null,
                "lower": null
              },
              "label": {
                "text": 1.4,
                "sup": null,
                "override": ""
              },
              "nvalue": 58
            },
            {
              "x": 11,
              "y": 1.08,
              "extreme": {
                "upper": null,
                "lower": null
              },
              "label": {
                "text": 1.08,
                "sup": null,
                "override": ""
              },
              "nvalue": 58
            },
            {
              "x": 12,
              "y": 2,
              "extreme": {
                "upper": null,
                "lower": null
              },
              "label": {
                "text": 2,
                "sup": null,
                "override": ""
              },
              "nvalue": 58
            },
            {
              "x": 13,
              "y": 1.08,
              "extreme": {
                "upper": null,
                "lower": null
              },
              "label": {
                "text": 1.08,
                "sup": null,
                "override": ""
              },
              "nvalue": 58
            },
            {
              "x": 14,
              "y": 0.94,
              "extreme": {
                "upper": null,
                "lower": null
              },
              "label": {
                "text": 0.94,
                "sup": null,
                "override": ""
              },
              "nvalue": 58
            }
          ]
        }
      ]
    }
  ]
};