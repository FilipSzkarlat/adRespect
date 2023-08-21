var elem = document.querySelector(".grid");
var msnry = new msnry(elem, {
  // options
  itemSelector: ".grid-item",
  columnWidth: 200,
});

// element argument can be a selector string
//   for an individual element
var msnry = new msnry(".grid", {
  itemSelector: ".grid-item",
  gutter: 10,
});
