const xArray = [7, 4];
const yArray = ["Creeper", "Steve"];
const oldcolors = [
  "rgba(0, 255, 0, 0.69)",
  "rgba(0, 119, 255, 0.75)"
];

const olddata = [{
  labels: yArray,
  values: xArray,
  hole: .4,
  type: "pie",
  marker: {colors: oldcolors}
}];

const oldlayout = {title:"September Election"};

Plotly.newPlot("oldElec", olddata, oldlayout);