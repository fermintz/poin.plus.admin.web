<template>
  <div class="sales-list">
    <div class="line" />
    <div class="search-opt">
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
                <label>매장전체</label>
                <v-icon>mdi-menu-down</v-icon>
              </v-btn>
            </template>
            <div class="selector-list">
              <span v-for="item in ['매장전체','A대학교 남자기숙사','B대학교 남자기숙사']" :key="item" v-ripple>
                {{item}}
              </span>
            </div>
          </v-menu>
        </dd>
      </dl>
      <dl class="date-selector">
        <dt>조회기간</dt>
        <dd>
          <v-dialog
            ref="dialog"
            v-model="modal"
            :return-value.sync="date"
            persistent
          >
            <template v-slot:activator="{ on, attrs }">
              <input
                type="text"
                v-model="dateRangeText"
                v-bind="attrs"
                v-on="on"
                readonly
              >
            </template>
            <v-date-picker
              v-model="dates"
              range
              lang="Kor"
            >
              <v-spacer></v-spacer>
              <v-btn
                text
                @click="modal = false"
              >
                취소
              </v-btn>
              <v-btn
                text
                @click="$refs.dialog.save(date)"
              >
                확인
              </v-btn>
            </v-date-picker>
          </v-dialog>

          <div class="date-btns">
            <v-btn text>7일</v-btn>
            <v-btn text>15일</v-btn>
            <v-btn text>30일</v-btn>
          </div>
        </dd>
      </dl>

      <v-btn text class="search-btn">검색하기</v-btn>
    </div>
    <div class="line" />

    <div class="no-data">
      <span>
        <v-icon size="16">mdi-file-outline</v-icon>조회된 자료가 없습니다.
      </span>
    </div>

    <div class="list">
      
      <div class="summary">
        <dl>
          <dt>조회기간 매출합계</dt>
          <dd>340,000 원</dd>
        </dl>
      </div>

      <div class="sales-eq-item" v-for="item in 10" :key="item">
        <span>A대학교 남자기숙사</span>
        <strong>세탁기 1번</strong>
        <dl>
          <dt>현금결제 <label>10회</label></dt>
          <dd>135,000 원</dd>
        </dl>
        <dl>
          <dt>카드결제 <label>10회</label></dt>
          <dd>248,000 원</dd>
        </dl>
        <div class="divider"/>
        <dl class="total">
          <dt>매출종합 </dt>
          <dd>383,000 원</dd>
        </dl>
      </div>

      <div class="more-loading">
        <v-progress-circular
          indeterminate
          color="#c2c2c2"
          width="2"
          size="20"
          
        ></v-progress-circular>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component} from 'vue-property-decorator';


@Component({
  name: 'sales-shop-list',
})

export default class extends Vue {
  modal = false
  dates = ['날짜를 선택해주세요',''];
  
  get dateRangeText(){
      return this.dates.join(' ~ ')
  }
}

</script>

<style lang="scss" src="./sales-eq.scss" scoped />



