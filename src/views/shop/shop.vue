<template>
  <div class="shop">
    <div class="line" />  
    <div class="search">
      <v-icon>mdi-magnify</v-icon>
      <input type="text" placeholder="매장명을 입력해주세요">
    </div>

    <div class="line"></div>

    <div class="no-data">
        <span>
          <v-icon size="16">mdi-file-outline</v-icon>등록된 매장이 없습니다.
        </span>
    </div>

    <div class="list">
      <div class="list-head">
        <h3>매장목록</h3>
      </div>

      <div class="shop-item" v-for="item in ['A','B','C']" :key="item">
        <div class="name">{{item}}대학교 남자기숙사</div>
        <div class="amount">
          <span>등록된 장비 수</span>
          <strong>4</strong>
        </div>
        <div class="inner">
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
          <v-btn text>매장정보 수정</v-btn>
          <v-btn text @click="$router.push('shop-detail')">장비/상품 수정</v-btn>
        </div>
      </div>
    </div>

    <ShopInfo ref="shopInfo"/>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import ShopInfo from '@/components/modal/shop-info/shop-info.vue'

@Component({
  name: 'shop-info-modal',

  components:{
    ShopInfo,
  },
})
export default class extends Vue {

}
</script>
<style lang="scss" src="./shop.scss" scoped />