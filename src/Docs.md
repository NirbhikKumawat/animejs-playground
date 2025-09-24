### Targets

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