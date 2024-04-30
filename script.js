let layouts = document.getElementById("layouts");
let layout = document.getElementById("layout");
let layoutCaret = document.getElementById("layout_caret");

layouts.addEventListener("click", () => {
  layout.classList.toggle("hidden");
  layoutCaret.classList.toggle("-rotate-90");
});

let chart = document.getElementById("chart");
let Chartlist = document.getElementById("Chart-list");
let chartcaret = document.getElementById("chart-caret");
chart.addEventListener("click", () => {
  Chartlist.classList.toggle("hidden");
  chartcaret.classList.toggle("-rotate-90");
});
// components acess
let components = document.getElementById("Components");
let componentlist = document.getElementById("component-list");
let componentcaret = document.getElementById("component-caret");
// we use click function on components
components.addEventListener("click", () => {
  componentlist.classList.toggle("hidden");
  componentcaret.classList.toggle("-rotate-90");
});
// icons acess
let icons = document.getElementById("icons");
let iconlist = document.getElementById("icon-list");
let iconcaret = document.getElementById("icon-caret");
// use click function on icon
icons.addEventListener("click", () => {
  iconlist.classList.toggle("hidden");
  iconcaret.classList.toggle("-rotate-90");
});

// about acess
let About = document.getElementById("About");
let Aboutlist = document.getElementById("About-list");
let Aboutcaret = document.getElementById("About-caret");
// use click function
About.addEventListener("click", () => {
  Aboutlist.classList.toggle("hidden");
  Aboutcaret.classList.toggle("-rotate-90");
});

let sidebar = document.getElementById("sidebar");
let hamburger = document.getElementById("hamburger");

hamburger.addEventListener("click", () => {
  sidebar.classList.toggle("hidden");
});
let Sidebar = document.getElementById("sidebar");
let markx = document.getElementById("mark-x");
markx.addEventListener("click", () => {
  Sidebar.classList.toggle("hidden");
});

// window.onload = function () {
//   CanvasJS.addColorSet("greenShades", [
//     //colorSet Array

//     "#2F4F4F",
//     "#2F4F4F",
//     "#2F4F4F",
//     "#2F4F4F",
//     "#2F4F4F",
//   ]);

//   var chart = new CanvasJS.Chart("chartContainer", {
//     colorset: "greenShades",
//     theme: "light1", // "light2", "dark1", "dark2"
//     animationEnabled: false, // change to true
//     title: {
//       text: "",
//     },
//     data: [
//       {
//         // Change type to "bar", "area", "spline", "pie",etc.
//         type: "column",
//         dataPoints: [
//           { label: "Monday ", y: 18 },
//           { label: "Tuesday", y: 12 },
//           { label: "Wednesday", y: 8 },
//           { label: "Thrusday", y: 5 },
//           { label: "grape", y: 2 },
//           { label: "", y: 16 },
//           { label: "", y: 16 },
//         ],
//       },
//     ],
//   });
//   chart.render();
// };
window.onload = function () {
  CanvasJS.addColorSet("greenShades", [
    //colorSet Array

    "#3f84fc",
  ]);

  var chart = new CanvasJS.Chart("chartContainer", {
    colorSet: "greenShades",

    title: {
      text: "",
    },
    dataPointMaxWidth: 65,
    width: 500,

    data: [
      {
        type: "column",
        dataPoints: [
          { label: "Monday", y: 12 },
          { label: "Tuesday", y: 19 },
          { label: "Wednesday", y: 3 },
          { label: "Thrusday", y: 5 },
          { label: "Friday", y: 2 },
        ],
      },
    ],
  });

  chart.render();
};

let icon = document.getElementById("icon");
let list = document.getElementById("list");
icon.addEventListener("click", () => {
  list.classList.toggle("hidden");
});
