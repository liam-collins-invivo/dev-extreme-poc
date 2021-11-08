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
      type: "discrete",
      majorTick: {
        enabled: true,
        interval: 1
      },
      minorTick: {
        enabled: true,
        interval: 0.25
      },
      overrides: [
        {
          value: 0,
          replace: "Week 0<br/>Hour 0"
        },
        {
          value: 1,
          replace: "Week 0<br/>Hour 2"
        },
        {
          value: 2,
          replace: "Week 2<br/>Hour 0"
        },
        {
          value: 3,
          replace: "Week 2<br/>Hour 2"
        },
        {
          value: 4,
          replace: "Week 4<br/>Hour 0"
        },
        {
          value: 5,
          replace: "Week 4<br/>Hour 2"
        },
        {
          default: true,
          replace: ""
        },
      ],
      constantLines: {
        style: {
          color: "black"
        },
      } 
    },
    yAxis: {
      title: {
        text: "The Y Axis."
      },
      range: {
        low: 0,
        high: undefined
      },
      majorTick: {
        enabled: true,
        interval: 20
      },
      minorTick: {
        enabled: true,
        interval: 10
      },
    }
  },
  data: [
    { set: "hello", x: 0, y: 74, errorLow: 70, errorHigh: 79},
    { set: "hello", x: 1, y: 86, errorLow: 80, errorHigh: 89},
    { set: "hello", x: 2, y: 64, errorLow: 60, errorHigh: 69},
    { set: "hello", x: 3, y: 45, errorLow: 40, errorHigh: 49},
    { set: "hello", x: 4, y: 92, errorLow: 90, errorHigh: 99},
    { set: "hello", x: 5, y: 82, errorLow: 80, errorHigh: 89},
    { set: "world", x: 0, y: 64, errorLow: 60, errorHigh: 69},
    { set: "world", x: 1, y: 96, errorLow: 90, errorHigh: 99},
    { set: "world", x: 2, y: 34, errorLow: 30, errorHigh: 39},
    { set: "world", x: 3, y: 65, errorLow: 60, errorHigh: 69},
    { set: "world", x: 4, y: 22, errorLow: 20, errorHigh: 29},
    { set: "world", x: 5, y: 32, errorLow: 30, errorHigh: 39},
    { set: "yes", x: 0, y: 83, errorLow: 80, errorHigh: 89},
    { set: "yes", x: 1, y: 56, errorLow: 50, errorHigh: 59},
    { set: "yes", x: 2, y: 90, errorLow: 90, errorHigh: 99},
    { set: "yes", x: 3, y: 24, errorLow: 20, errorHigh: 29},
    { set: "yes", x: 4, y: 56, errorLow: 50, errorHigh: 59},
    { set: "yes", x: 5, y: 46, errorLow: 40, errorHigh: 49},
  ]
};