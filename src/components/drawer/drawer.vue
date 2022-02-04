<template>
  <v-navigation-drawer
    v-model="visible"
    left
    fixed

  > 
    <div class="drawer">
      <div class="top">
        안녕!
      </div>

      <div class="inner">
        <div class="menu">
          <dl>
            <dt>매장관리</dt>
            <dd>
              <v-btn text @click.stop="$router.push('/shop')">매장관리</v-btn>
            </dd>
          </dl>
          <div class="divider" />
          <dl>
            <dt>장비관리</dt>
            <dd>
              <v-btn text @click="$router.push('eq-list')">장비관리</v-btn>
              <v-btn text @click="$router.push('eq-add')">장비등록</v-btn>
              <v-btn text @click="$router.push('eq-remote')">장비원격제어</v-btn>
            </dd>
          </dl>
          <div class="divider" />
          <dl>
            <dt>매출정보</dt>
            <dd>
              <v-btn text @click="$router.push('sales-shop')">매장별 매출조회</v-btn>
              <v-btn text @click="$router.push('sales-eq')">장비별 매출조회</v-btn>
              <v-btn text @click="$router.push('payment-list')">결제내역 조회</v-btn>
            </dd>
          </dl>
        </div>
        
      </div>
    </div>
    
  </v-navigation-drawer>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

@Component({
  name: 'drawer',
})
export default class extends Vue {
  visible = false;

  toggle(): void {
    this.visible = !this.visible;
  }
}

</script>
<style lang="scss" src="./drawer.scss" scoped/>