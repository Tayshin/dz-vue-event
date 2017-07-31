(function(global, factory) {
    //CommonJS/Node
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
    //AMD
    typeof define === 'function' && define.amd ? define(factory) :
    //No module loader
    (global.VueEvent = factory());
}(this, (function() { 
    function VueEvent(Vue){
        var event = new Vue();

        Object.defineProperty(event,"on",{
            get:function(){
                return this.$on;
            }
        });

        Object.defineProperty(event,"emit",{
            get:function(){
                return this.$emit;
            }
        });

        Object.defineProperty(event,"once",{
            get:function(){
                return this.$once;
            }
        });

        Object.defineProperty(event,"off",{
            get:function(){
                return this.$off;
            }
        });

        Vue.event = event;

        Object.defineProperty(Vue.prototype,"$event",{
            get:function(){
                return event;
            }
        });
    }
    // if the script is being run in a web-browser 
    if (typeof window !== 'undefined' && window.Vue) {
        window.Vue.use(VueEvent);
    }

    return VueEvent;
})));