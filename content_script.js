function hide(selector) {
  var list = document.querySelectorAll(selector);
  for (var i = 0; i < list.length; ++i) {
    list[i].style.display = 'none';
  }
}

function show(selector) {
  var list = document.querySelectorAll(selector);
  for (var i = 0; i < list.length; ++i) {
    list[i].style.display = '';
  }
}

switch(document.body.dataset.visible_diff) {
  case 'i':
    hide('.file-diff-line.gi'); // Insertion
    show('.file-diff-line.gd'); // Deletion
    document.body.dataset.visible_diff = 'd';
    break;
  case 'd':
    show('.file-diff-line.gi'); // Insertion
    show('.file-diff-line.gd'); // Deletion
    document.body.dataset.visible_diff = 'off';
    break;
  default:
    show('.file-diff-line.gi'); // Insertion
    hide('.file-diff-line.gd'); // Deletion
    document.body.dataset.visible_diff = 'i';
}
