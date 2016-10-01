export default {
  props: ['params'],
  data() {
    return  {
      message: 'Chau Vue.js!'
    };
  },
  methods: {
    taskChangeStatus: function (id, event) {
      fetch(`/tasks/${id}.json`, {
        method: 'put',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          finished: event.target.checked,
        })
      });
    }
  },
};
