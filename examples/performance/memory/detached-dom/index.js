(function () {

  let cache1 = [];
  const $content = document.querySelector('#content');
  const $add = document.querySelector('.js-add');
  const $remove = document.querySelector('.js-remove');
  const $fix = document.querySelector('.js-fix');

  const add = () => {
    for (var i = 0; i < 10000; i++) {
      const $node = document.createElement('div');
      $node.appendChild(document.createTextNode(`Element ${i}`));
      $content.appendChild($node);
      cache1.push($node);
    }
  }

  const remove = () => {
    for (var i = 0; i < cache1.length; i++) {
      cache1[i].remove();
    }
  }

  const fix = () => cache1 = [];

  $add.addEventListener('click', add);
  $remove.addEventListener('click', remove);
  $fix.addEventListener('click', fix);


}());
