function component() {
  var element = document.createElement('div');

  // Lodash, currently included via a script, is required for this line to work
  element.innerHTML = 'Hello react Max';

  return element;
}

document.body.appendChild(component());
