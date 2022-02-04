<template>
  <div class="eq-add">
    <div class="line"></div>

    <div class="inner">
      <dl class="selector">
        <dt>매장선택</dt>
        <dd>
          <v-menu
            tile
            offset-y
            light
            class="no-shadow"
          >
            <template v-slot:activator="{on, attrs}">
              <v-btn
                text
                v-on="on"
                v-bind="attrs"
              >
                <label>A대학교 남자기숙사</label>
                <v-icon>mdi-menu-down</v-icon>
              </v-btn>
            </template>
            <div class="selector-list">
              <span v-for="item in ['A대학교 남자기숙사','B대학교 남자기숙사']" :key="item" v-ripple>
                {{item}}
              </span>
            </div>
          </v-menu>
        </dd>
      </dl>

      <div class="divider" />

      <dl>
        <dt>장비명</dt>
        <dd>
          <input type="text" placeholder="장비명을 입력해주세요"/>
        </dd>
      </dl>
      <dl>
        <dt>맥주소</dt>
        <dd>
          <input type="text" />
        </dd>
      </dl>
      <dl>
        <dt>장비타입</dt>
        <dd>
          <input type="text"  placeholder="장비타입을 입력해주세요"/>
        </dd>
      </dl>
      <dl>
        <dt>500원당 동작시간(초)</dt>
        <dd>
          <input type="text" />
        </dd>
      </dl>

      <div class="btns">
        <v-btn text>등록완료</v-btn>
      </div>
    </div>

    
  </div>
</template>

<script lang="ts">
import {Vue, Component} from 'vue-property-decorator'

@Component({

})

export default class extends Vue{
  
}
</script>

<style lang="scss" src="./eq-add.scss" scoped/>