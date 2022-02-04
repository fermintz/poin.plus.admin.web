<template>
  <div class="header">
    <v-btn icon @click="drawer">
      <v-icon>mdi-menu</v-icon>
    </v-btn>
    <h2 v-if="!$route.meta.homeBtn">포인<span>플러스</span></h2>
    <h2 v-else>{{ $route.meta.title }}</h2>
    <v-btn icon v-if="$route.meta.homeBtn" @click.stop="$router.push('/')">
      <v-icon>mdi-home</v-icon>
    </v-btn>

  </div>
</template>

<script lang="ts">
import { Vue, Component, Emit } from 'vue-property-decorator';


@Component({
  name: 'header',
})
export default class extends Vue {
  @Emit()
  drawer(){

  }
}

</script>

<style lang="scss" src="./header.scss" scoped />
