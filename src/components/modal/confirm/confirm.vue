<template>
  <v-dialog
    v-model="visible"
    max-width="360"
  >
    <div class="confirm">
      <div class="cont">
        <span>{{title}}</span>
        <strong>
          {{message}}
        </strong>
      </div>
      <div class="btns">
        <v-btn text @click="visible = false">취소</v-btn>
        <v-btn text class="finish" @click="visible = false">확인</v-btn>
      </div>
    </div>
  </v-dialog>
</template>

<script lang="ts">
import { Vue, Component, Prop} from 'vue-property-decorator';


@Component({
 
})
export default class extends Vue {
  @Prop() title!: string;
  @Prop() message!: string;

  visible = false

  handle(value:boolean){
    this.visible = value;
  }
}

</script>

<style lang="scss" src="./confirm.scss" scoped/> 