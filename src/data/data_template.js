export default {
  config: {
    title: {
      text: "The Chart."
    },
    type:"line",
    sets: [
      {
        slug:"hello",
        name:"Hello",
        color:"#560395",
        symbol:"circle",
      },
      {
        slug:"world",
        name:"World",
        color:"#729476",
        symbol:"square"
      },
      {
        slug:"yes",
        name:"Yes",
        color:"#0074FF",
        symbol:"triangleUp"
      },
    ],
    error: {
      enabled: true
    },
    xAxis: {
      title: {
        text: "The X Axis."
      },
      type: "continuous",
      range: {
        low: 0, // because custom ticks struggle to place properly at the edges
        high: undefined
      },
      majorTick: {
        enabled: true,
        interval: 1000,
      },
      minorTick: {
        enabled: false,
      },
      overrides: [
        {
          value: 0,
          replace: "0"
        },
        {
          default: true,
          replace: ""
        },
      ],
      /*
      constantLines: {
        style: {
          color: "black"
        },
        lines: [
          {
            value: 0.5,
            label: "HELLO"
          },
          {
            value: 1,
            label: "BEAUTIFUL"
          },
          {
            value: 2,
            label: "BEAUTIFUL"
          },
          {
            value: 3.14159,
            label: "WORLD",
          }
        ]
      },
      */
      customTicks: [
        {
          value: 0.5,
          label: "HELLO"
        },
        {
          value: 1,
          label: "THERE"
        },
        {
          value: 2,
          label: "BEAUTIFUL"
        },
        {
          value: 3.14159,
          label: "WORLD",
        }
      ]
    },
    yAxis: {
      title: {
        text: "The Y Axis."
      },
      range: {
        low: 0,
        high: 100
      },
      majorTick: {
        enabled: true,
        interval: 10
      },
      minorTick: {
        enabled: true,
        interval: 5
      },
    }
  },
  data: [
    { set: "hello", x: 0, y: 74, errorLow: 70, errorHigh: 79},
    { set: "hello", x: 1, y: 86, errorLow: 80, errorHigh: 89},
    { set: "hello", x: 2, y: 64, errorLow: 60, errorHigh: 69},
    { set: "hello", x: 3, y: 45, errorLow: 40, errorHigh: 49},
    { set: "hello", x: 4, y: 92, errorLow: 90, errorHigh: 99},
    { set: "world", x: 0, y: 64, errorLow: 60, errorHigh: 69},
    { set: "world", x: 1, y: 96, errorLow: 90, errorHigh: 99},
    { set: "world", x: 2, y: 34, errorLow: 30, errorHigh: 39},
    { set: "world", x: 3, y: 65, errorLow: 60, errorHigh: 69},
    { set: "world", x: 4, y: 22, errorLow: 20, errorHigh: 29},
    { set: "yes", x: 0, y: 83, errorLow: 80, errorHigh: 89},
    { set: "yes", x: 1, y: 56, errorLow: 50, errorHigh: 59},
    { set: "yes", x: 2, y: 90, errorLow: 90, errorHigh: 99},
    { set: "yes", x: 3, y: 24, errorLow: 20, errorHigh: 29},
    { set: "yes", x: 4, y: 56, errorLow: 50, errorHigh: 59},
  ]
};