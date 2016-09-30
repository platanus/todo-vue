var Vue = require("vue");
var tasks = Vue.extend({
  props: ['params'],
  data: function() {
    return  {
      message: 'Hello Vue.js!'
    };
  },
});
Vue.component('tasks', tasks);
