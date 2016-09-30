import Vue from "vue";
import { Multiselect } from 'vue-multiselect';
import Tasks from './app/tasks/index';

new Vue({
components: { Multiselect, Tasks },
  el: 'body',
});
