Polymer({
  is: 'task-row',
  extends: 'div',
  change: function (event) {
    this.$.request.body = {
      task: {
        finished: event.target.checked,
      }
    };
    this.$.request.generateRequest();
  },
  handleResponse: function (data) {
    console.log(data);
  },
  properties: {
    data: Object,
  }
});
