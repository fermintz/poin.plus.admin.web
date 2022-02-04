<template>
  <div class="payment-list">
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
      <dl class="selector">
        <dt>장비선택</dt>
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
                <label>장비전체</label>
                <v-icon>mdi-menu-down</v-icon>
              </v-btn>
            </template>
            <div class="selector-list">
              <span v-for="item in ['장비전체','1번세탁기','2번세탁기']" :key="item" v-ripple>
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
      <div class="list-head">
        <h3>목록 <span>10</span></h3>
      </div>

      <div class="payment-card" v-for="item in 10" :key="item">
        <strong>A대학교 남자기숙사</strong>
        <span>1번세탁기</span>
        <div class="divider"/>
        <dl>
          <dt>결제일시</dt>
          <dd>2022-01-13 13:40:21</dd>
        </dl>
        <dl>
          <dt>결제수단</dt>
          <dd>카드</dd>
        </dl>
        <dl class="price">
          <dt>결제금액</dt>
          <dd>5,000 원</dd>
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
  name: 'payment-list',

  components:{

  },
 
})
export default class extends Vue {
  modal = false
  dates = ['날짜를 선택해주세요',''];

  get dateRangeText(){
      return this.dates.join(' ~ ')
  }
}

</script>

<style lang="scss" src="./payment-list.scss" scoped/> 
