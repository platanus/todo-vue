export default {
  props: ['categories'],
  data() {
    return  {
      selected: null,
      options: ['hola1', 'chao1'],
    };
  },
  methods: {
    updateSelected (newSelected) {
      this.selected = newSelected;
    }
  }
};
