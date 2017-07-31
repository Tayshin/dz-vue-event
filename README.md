# vue-event

a event bus for [Vue](https://cn.vuejs.org/)
组件间通信的事件中转站。

## Installation
```
$ npm install dz-vue-event
```
When used with a module system, you must explicitly install the bus via Vue.use():
```
import Vue from 'vue';
import VueEvent from 'dz-vue-event';

Vue.use(VueEvent);
```
You don't need to do this when using global script tags.

## Usage
#### Listener
```
mounted() {
  this.$event.on('event1', this.function1);
  this.$event.once('event2', () => console.log('This listener only fire once'));
},
beforeDestroy() {
  this.$event.off('add-todo', this.addTodo);
},
methods: {
  function1() {
    doSomething();
  }
}
```
#### Trigger
```
// ...
methods: {
  trigger1() {
    this.$event.emit('event1');
  }
}
```

## License
[MIT](https://opensource.org/licenses/MIT)