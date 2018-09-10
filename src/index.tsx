import * as style from './index.css';

function component() {
  var element = document.createElement('div');

  element.innerHTML = 'Hello react experiment by Giancarlo';
  element.classList.add(style.hello);

  return element;
}

document.body.appendChild(component());
