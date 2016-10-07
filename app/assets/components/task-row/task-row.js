Polymer({
  is: 'task-row',
  extends: 'div',
  hola: function (event) {
    console.log(event)
  },
  properties: {
    data: Object,
  }
});
