import './styles/index.scss';
import Picture from './assets/smiley.jpg';

function component(text: string): HTMLDivElement {
  let element = document.createElement('div');

  element.innerHTML = text;
  element.classList.add('hello');

  let image = new Image();
  image.src = Picture;

  element.appendChild(image);

  return element;
}

document.body.appendChild(component('Webpack working'));

console.log(process.env.NODE_ENV);
