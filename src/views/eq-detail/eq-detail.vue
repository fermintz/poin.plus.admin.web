<template>
  <div class="eq-detail">
    <div class="sub-header">
      <v-btn icon @click="$router.go(-1)">
        <v-icon>
          mdi-chevron-left
        </v-icon>
      </v-btn>
      <h2>1번세탁기</h2>
    </div>

    <div class="eq-info">
      <dl>
        <dt>등록된장소</dt>
        <dd>A대학교 남자기숙사</dd>
      </dl>
      <dl class="type">
        <dt>장비종류</dt>
        <dd>
          <span>세탁기</span>
        </dd>
      </dl>
      <dl>
        <dt>맥주소</dt>
        <dd>48:3F:DA:86:43:57</dd>
      </dl>
      <dl>
        <dt>500원당 동작시간(초)</dt>
        <dd>70초</dd>
      </dl>

      <div class="btns">
        <v-btn text>
          장비정보 수정
        </v-btn>
        <v-btn text  @click="$refs.productInfoModal.handle(true)">
          새 상품 등록하기
        </v-btn>
      </div>
    </div>

    <div class="line" />

    <div class="no-data">
        <span>
          <v-icon size="16">mdi-file-outline</v-icon>등록된 상품이 없습니다.
        </span>
    </div>

    <div class="list">
      <div class="list-title">
        <h3>등록된 상품목록 <span>5</span></h3>
      </div>
      <div class="product-card" v-for="item in 5" :key="item">
        <div class="card-title">
          <strong>표준세탁</strong>
          <span>작동시간 38분</span>
        </div>

        <v-btn icon class="del" @click="$refs.delConfirm.handle(true)">
          <v-icon>mdi-close</v-icon>
        </v-btn>

        <div class="divider" />

        <div class="card-content">
          <dl>
            <dt>상품결제가격</dt>
            <dd>2,000 원</dd>
          </dl>
          <dl>
            <dt>상품투입가격</dt>
            <dd>2,000 원</dd>
          </dl>
          <dl>
            <dt>상품동작시간(초)</dt>
            <dd>2670</dd>
          </dl>
        </div>

        <div class="btns" @click="$refs.productInfoModal.handle(true)">
          <v-btn text>
            상품정보수정
          </v-btn>
        </div>
      </div>
    </div>
    <ProductInfoModal ref="productInfoModal" />
    <Confirm title="상품삭제" message="표준세탁 상품을 삭제할까요?" ref="delConfirm"/>
  </div>
</template>

<script lang="ts" >
import { Vue, Component } from 'vue-property-decorator';
import ProductInfoModal from '@/components/modal/product-info/product-info.vue'
import Confirm from '@/components/modal/confirm/confirm.vue'

@Component({
  name: 'eq-detail',
 components:{
   ProductInfoModal, Confirm
 },
})
export default class extends Vue {}

</script>
<style lang="scss" src="./eq-detail.scss" scoped></style>