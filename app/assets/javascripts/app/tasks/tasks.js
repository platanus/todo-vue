Vue.config.debug = true;
new Vue({
  el: '#tasks',
  data: {
    message: 'Hello Vue.js!',
    params: null,
  },
  ready() {
    console.log(this);
    console.log(this.$el.dataset.params);
    this.$set('params', JSON.parse(
      this.$el.dataset.params
    ))
  }
})

console.log('hola');
