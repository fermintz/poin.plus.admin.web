<template>
  <v-bottom-sheet
    v-model="visible"
  >
    <div class="bottom-sheet">
      <div class="sheet-head">
        <h2>매장정보 수정</h2>
      </div>

      <form>
        <div class="item">
          <label>아이디</label>
          <input type="text" value="fermintz">
        </div>
        <div class="item">
          <label>카카오채널</label>
          <input type="text" value="http://pf.kakao.com/_uAqmK/chat">
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
  name: 'shop-info-modal',

  components:{

  },
})
export default class extends Vue {
  visible = false;

  handle(value:boolean){
    this.visible = false
  }
}

</script>

<style lang="scss" src="./shop-info.scss" scoped/> 
