# vue-event

a event bus for [Vue](https://cn.vuejs.org/)
组件间通信的事件中转站。

没有任何技术含量...只是省略了自己建一个vue模块作为中转站的步骤，把vue模块的on，once,off,emit方法再次封装一次...

## Installation 安装
```
$ npm install dz-vue-event
```

Install the bus via Vue.use(),if you want to use with module system;
如果要用模块引用，使用Vue.use();

```
import Vue from 'vue';
import VueEvent from 'dz-vue-event';
Vue.use(VueEvent);
```
You don't need to do this when using global script tags.
使用<scrpit>引用不需要此步骤～

## Usage 用法
#### Listener 监听事件（订阅）
```
mounted() {
    this.$event.on('event1', this.function1);
    this.$event.once('event2', this.function2);
},
beforeDestroy() {
    this.$event.off('event1');
},
methods: {
    function1() {
        doSomething1();
    },
    function2() {
        doSomething2();
    },
}
```
#### Trigger 触发事件（发布）
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