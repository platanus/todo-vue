var Vue = require("vue");
var VueMultiselect = require("vue-multiselect")

var taskForm = Vue.extend({
  props: ['categories'],
  components: { VueMultiselect },
  data: function() {
    return  {
      message: 'Hello Vue.js!'
    };
  },
});
Vue.component('task-form', taskForm);
Vue.component("multiselect", VueMultiselect.default);
