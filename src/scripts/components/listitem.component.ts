import { Component, Vue } from 'vue-property-decorator';

@Component({
  name: 'ListItem',
  props: {
    title: String,
    message: String,
  },
})
export default class extends Vue {}
