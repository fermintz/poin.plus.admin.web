<template>
  <v-bottom-sheet
    v-model="visible"
  >
    <div class="bottom-sheet">
      <div class="sheet-head">
        <h2>장비등록</h2>
      </div>

      <form>
        <div class="item">
          <label>장비명</label>
          <input type="text" placeholder="장비명을 입력해주세요">
        </div>
        <div class="item">
          <label>맥주소</label>
          <input type="text">
        </div>
        <div class="item">
          <label>장비타입</label>
          <input type="text" placeholder="예) 세탁기">
        </div>
        <div class="item">
          <label>500원당 동작시간(초)</label>
          <input type="text" placeholder="0">
        </div>
      </form>

      <div class="divider" />

      <div class="btns">
        <v-btn text>취소</v-btn>
        <v-btn text class="finish">수정완료</v-btn>
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
  visible = false

  handle(value:boolean){
    this.visible = value
  }
}

</script>

<style lang="scss" src="./eq-info.scss" scoped/> 
