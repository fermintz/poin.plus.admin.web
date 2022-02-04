<template>
  <div class="eq-card">
    <div class="card-top">
      <span>세탁기</span>
      <strong>A대학교 남자기숙사</strong>
    </div>

    <v-btn icon class="del-btn" @click="$refs.delConfirm.handle(true)" v-if="!$route.meta.remoteBtn">
      <v-icon color="#fff" size="18">mdi-close</v-icon>
    </v-btn>
  
    <div class="name">1번세탁기</div>
    <div class="time">
      500원당 동작시간(초) <b>70</b>
    </div>
    <div class="btns" v-if="!$route.meta.remoteBtn">
      <v-btn text @click="$refs.eqInfoModal.handle(true)">장비정보 변경</v-btn>
      <v-btn text @click="$router.push('eq-detail')">상품수정/등록</v-btn>
    </div>
    <div class="btns" v-else>
      <v-btn text @click="$refs.eqInfoModal.handle(true)">원격제어</v-btn>
    </div>
  </div>
</template>

<style lang="scss" src="./eq-card.scss" scoped/>