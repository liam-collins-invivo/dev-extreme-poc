export default {
  "config": {
    "trial": "narcolepsy",
    "id": "cataplexyfree-rwp",
    "type": "line",
    "title": "Median Cataplexy-Free Days Per Week During DBRWP as Post Hoc Analysis (Efficacy Population)<sup>9</sup><sup>,a</sup>",
    "xAxis": {
      "groups": [
        0,
        1,
        2
      ],
      "padding": 0.1,
      "label": {},
      "shadedRegion": [],
      "scale": "scaleBand"
    },
    "yAxis": {
      "low": 0,
      "high": 7,
      "inc": 1,
      "label": {
        "text": [
          "Cataplexy-free days per week, median"
        ]
      }
    },
    "legend": [
      {
        "entry": "xywavpbo",
        "label": "Placebo",
        "color": "#868686",
        "line": "solid",
        "shape": "dot",
        "tooltip": "Placebo"
      },
      {
        "entry": "lxb",
        "label": "LXB",
        "color": "#006E8A",
        "line": "solid",
        "shape": "dot",
        "tooltip": "LXB"
      }
    ],
    "footnotes": [
      "<sup>a</sup>Defined as participants who took ≥1 dose of double-blind study drug and had ≥1 post-randomization efficacy assessment."
    ],
    "useFootnoteTooltip": false,
    "trendLines": [],
    "tooltipHeaders": [
      "Treatment group",
      "Median"
    ],
    "nValueTable": {
      "type": "regular",
      "rows": 2
    },
    "chartLegend": [
      {
        "active": true,
        "entries": [
          {
            "entry": "xywavpbo",
            "label": "Placebo",
            "color": "#868686",
            "line": "solid",
            "shape": "dot",
            "tooltip": "Placebo"
          }
        ]
      },
      {
        "active": true,
        "entries": [
          {
            "entry": "lxb",
            "label": "LXB",
            "color": "#006E8A",
            "line": "solid",
            "shape": "dot",
            "tooltip": "LXB"
          }
        ]
      }
    ]
  },
  "data": [
    {
      "name": "xywavpbo",
      "color": "#868686",
      "sets": [
        {
          "name": "xywavpbo",
          "color": "#868686",
          "line": "solid",
          "shape": "dot",
          "nValueLabel": "Placebo, n",
          "tooltipLabel": "Placebo",
          "points": [
            {
              "x": 0,
              "y": 6,
              "extreme": {
                "upper": null,
                "lower": null
              },
              "label": {
                "text": 6,
                "sup": null,
                "override": ""
              },
              "nvalue": 65
            },
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
              "nvalue": 62
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
              "nvalue": 60
            }
          ]
        }
      ]
    },
    {
      "name": "lxb",
      "color": "#006E8A",
      "sets": [
        {
          "name": "lxb",
          "color": "#006E8A",
          "line": "solid",
          "shape": "dot",
          "nValueLabel": "LXB, n",
          "tooltipLabel": "LXB",
          "points": [
            {
              "x": 0,
              "y": 6,
              "extreme": {
                "upper": null,
                "lower": null
              },
              "label": {
                "text": 6,
                "sup": null,
                "override": ""
              },
              "nvalue": 69
            },
            {
              "x": 1,
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
              "nvalue": 69
            },
            {
              "x": 2,
              "y": 5.6,
              "extreme": {
                "upper": null,
                "lower": null
              },
              "label": {
                "text": 5.6,
                "sup": null,
                "override": ""
              },
              "nvalue": 69
            }
          ]
        }
      ]
    }
  ]
};