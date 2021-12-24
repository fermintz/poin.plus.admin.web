import { Vue, Component } from 'vue-property-decorator';
import ListItem from '@/components/ListItem.vue';

@Component({
  name: 'Home',
  components: { ListItem },
})
export default class extends Vue {}
