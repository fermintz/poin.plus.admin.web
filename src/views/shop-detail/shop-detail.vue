<template>
  <div class="shop-detail">
    <div class="sub-header">
      <v-btn icon @click="$router.go(-1)">
        <v-icon>
          mdi-chevron-left
        </v-icon>
      </v-btn>
      <h2>A대학교 남자기숙사</h2>
    </div>

    <div class="shop-info">
      <div class="items">
        <dl>
          <dt>아이디</dt>
          <dd>fermintz</dd>
        </dl>
        <dl>
          <dt>카카오채널</dt>
          <dd>http://pf.kakao.com/_uAqmK/chat</dd>
        </dl>
      </div>
      <div class="btns">
        <v-btn text>
          매장정보 변경하기
        </v-btn>
        <v-btn text @click="$refs.eqInfoModal.handle(true)">
          장비 등록하기
        </v-btn>
      </div>
    </div>

    <div class="line" />

    <div class="no-data">
        <span>
          <v-icon size="16">mdi-file-outline</v-icon>등록된 장비가 없습니다.
        </span>
    </div>

    <div class="list">
      <div class="list-head">
        <h3>장비목록 <span>5</span></h3>
      </div>

      <EqCard />
      
    </div>
    <EqInfo ref="eqInfoModal"/>
    <Confirm ref="delConfirm" title="장비삭제" message="1번세탁기를 삭제할까요" />
  </div> 
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import EqInfo from '@/components/modal/eq-info/eq-info.vue'
import Confirm from '@/components/modal/confirm/confirm.vue'
import EqCard from '@/components/eq-card/eq-card.vue'

@Component({
  name: 'header',

  components:{
    EqInfo, Confirm, EqCard
  },
})
export default class extends Vue {

}
</script>
<style lang="scss" src="./shop-detail.scss" scoped/>