var canvas,
    ctx;

var i_max = 1.5,
    i_min = -1.5,
    r_min = -2.5,
    r_max = 1.5;

var max_iter = 1024,
    escape = 1025,
    palette = [];

function createTask(row) {
  var task = {
    row: row,
    width: rowData.width,
    generation: generation,
    r_min: r_min,
    r_max: r_max,
    i: i_max + (i_min - i_max) * row / canvas.height,
    max_iter: max_iter,
    escape: escape
  };
  return task;
}
