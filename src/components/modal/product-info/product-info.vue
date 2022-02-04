<template>
  <v-bottom-sheet
    v-model="visible"
  >
    <div class="bottom-sheet">
      <div class="sheet-head">
        <h2>상품수정</h2>
      </div>

      <form>
        <div class="item">
          <label>상품명</label>
          <input type="text" value="표준세탁">
        </div>
        <div class="item">
          <label>상품부연설명</label>
          <input type="text" value="작동시간은 38분입니다">
        </div>
        <div class="item">
          <label>상품결제가격</label>
          <input type="number" value="2000">
        </div>
        <div class="item">
          <label>상품투입금액</label>
          <input type="number" value="2000">
        </div>
        <div class="item">
          <label>상품동작시간(초)</label>
          <input type="number" value="2570">
        </div>
      </form>

      <div class="divider" />

      <div class="btns">
        <v-btn text @click="visible = false">취소</v-btn>
        <v-btn text class="finish" @click="visible = false">수정완료</v-btn>
      </div>
    </div>
  </v-bottom-sheet>
</template>

<script lang="ts">
import { Vue, Component} from 'vue-property-decorator';


@Component({
  name: 'eq-info-modal',

  components:{

  },
})
export default class extends Vue {
  visible = false;

  handle(value : boolean){
    this.visible = value
  }
}

</script>

<style lang="scss" src="./product-info.scss" scoped /> 
