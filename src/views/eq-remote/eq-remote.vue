<template>
  <div class="eq-list">
    <div class="line" />
    <div class="selector">
      <v-menu
        tile
        offset-y
        light
        class="no-shadow"
        min-width="100%"
      >
        <template v-slot:activator="{on, attrs}">
          <v-btn
            text
            v-on="on"
            v-bind="attrs"
          >
            <label>매장전체</label>
            <v-icon>mdi-menu-down</v-icon>
          </v-btn>
        </template>
        <div class="selector-list">
          <span v-for="item in ['매장전체','A대학교 남자기숙사','B대학교 남자기숙사']" :key="item" v-ripple>
            {{item}}
          </span>
        </div>
      </v-menu>
    </div>
    <div class="line" />

    <div class="no-data">
        <span>
          <v-icon size="16">mdi-file-outline</v-icon>등록된 장비가 없습니다.
        </span>
    </div>

    <div class="list">
      <div class="list-head">
        <h3>장비목록 <span>10</span></h3>
      </div>
      <div class="list-inner">
        <EqCard v-for="item in 10" :key="item" />
      </div>
    </div>

    <EqRemoteModal />
  </div>
</template>

<script lang="ts">
import {Vue, Component} from 'vue-property-decorator'
import EqCard from '@/components/eq-card/eq-card.vue'
import EqRemoteModal from '@/components/modal/eq-remote/eq-remote-modal.vue'

@Component({
  components:{
    EqCard, EqRemoteModal
  },
})

export default class extends Vue {

}
</script>

<style lang="scss" src="./eq-remote.scss" scoped />