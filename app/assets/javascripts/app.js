import Vue from "vue/dist/vue.js";
import Tasks from './app/tasks/tasks';
import TaskForm from './app/tasks/taskform';
import { Multiselect } from 'vue-multiselect';
import 'whatwg-fetch';

Vue.component('multiselect', Multiselect);
new Vue({
  components: {
    Tasks,
    TaskForm,
  },
  el: '#mainapp',
});
