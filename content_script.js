function hide(selector) {
  var list = document.querySelectorAll(selector);
  for (var i = 0; i < list.length; ++i) {
    // You have to reference the parentNode because what you select is a cell inside the row.
    //  There is no way to tell from the row if it is an addition or deletion.
    list[i].parentNode.style.display = 'none';
  }
}

function show(selector) {
  var list = document.querySelectorAll(selector);
  for (var i = 0; i < list.length; ++i) {
    list[i].parentNode.style.display = '';
  }
}

switch(document.body.dataset.visible_diff) {
  case 'i':
    hide('.diff-line-code-addition');
    show('.diff-line-code-deletion');
    document.body.dataset.visible_diff = 'd';
    break;
  case 'd':
    show('.diff-line-code-addition');
    show('.diff-line-code-deletion');
    document.body.dataset.visible_diff = 'off';
    break;
  default:
    show('.diff-line-code-addition');
    hide('.diff-line-code-deletion');
    document.body.dataset.visible_diff = 'i';
}
