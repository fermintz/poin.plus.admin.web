<template>
  <div class="wrap">
    <Header @drawer="onClickDrawerBtn"/>
    <Drawer ref="drawer"/>
    <v-main>
      <router-view />
    </v-main>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Ref} from 'vue-property-decorator';
import Header from '@/components/header/header.vue';
import Drawer from '@/components/drawer/drawer.vue'

@Component({
  name: 'baseLayout',
  components: {
    Header, Drawer
  },
})

export default class extends Vue {
  @Ref() readonly drawer!: Drawer
  onClickDrawerBtn(): void{
    this.drawer.toggle()
  }

}

</script>
<style lang="scss" src="./base.scss" scoped/>