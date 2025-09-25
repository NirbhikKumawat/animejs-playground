## Targets
Specify the elements to which property value changes are applied.
Animation targets are defined in the first argument of the `animate()` function.
```js
animate(
┌────────────┐
│ '.square', ├─ Targets
└────────────┘
{
    translateX: 100,
        scale: 2,
    opacity: .5,
    duration: 400,
    delay: 250,
    ease: 'out(3)',
    loop: 3,
    alternate: true,
    autoplay: false,
    onBegin: () => {},
    onLoop: () => {},
    onUpdate: () => {},
});
```

## CSS Selector
Targets one or multiple DOM Elements using a CSS selector.
```js
import { animate } from 'animejs';

animate('.square', { x: '17rem' });
animate('#css-selector-id', { rotate: '1turn' });
animate('.row:nth-child(3) .square', { scale: [1, .5, 1] });
```

## DOM Elements
Targets one or multiple DOM Elements.
```js
import { animate } from 'animejs';

const $demo = document.querySelector('#selector-demo');
const $squares = $demo.querySelectorAll('.square');

animate($demo, { scale: .75 });
animate($squares, { x: '23rem' });
```
## Js Objects
Targets one or multiple JavaScript Object.

Accepts
- Object
- Instance of Class
```js
import { animate, utils } from 'animejs';

const [ $log ] = utils.$('code');

const vector2D = { x: 0, y: 0 };

animate(vector2D, {
  x: 100,
  y: 150,
  modifier: utils.round(0),
  onUpdate: () => $log.textContent = JSON.stringify(vector2D),
});
```
## Array of targets
Targets multiple valid Targets simultaneously by grouping them inside an Array.
Any types of targets can be grouped together
```js
import { animate, utils } from 'animejs';

const [ $log ] = utils.$('.demo code');

const vector2D = { x: 0, y: 0 };

animate([vector2D, '.square'], {
  x: '17rem',
  modifier: utils.roundPad(2).padStart(5, '0'),
  onRender: () => $log.textContent = JSON.stringify(vector2D),
});
```