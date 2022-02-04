<template>
  <v-bottom-sheet
    v-model="visible"
  >
    <div class="bottom-sheet">
      <div class="sheet-head">
        <h2>장비에 현금투입</h2>
      </div>

      <form>
        <div class="item">
          <label>선택된 장비</label>
          <div class="selector-info">
            <span>A대학교 남자기숙사</span>
            <strong>1번 세탁기</strong>
          </div>
        </div>
        <div class="item">
          <label>투입할 금액입력</label>
          <input type="text">
        </div>
      </form>

      <div class="divider" />

      <div class="btns">
        <v-btn text>취소</v-btn>
        <v-btn text class="finish">투입완료</v-btn>
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
  visible = true

  handle(value:boolean){
    this.visible = value
  }
}

</script>

<style lang="scss" src="./eq-remote-modal.scss" scoped/> 
