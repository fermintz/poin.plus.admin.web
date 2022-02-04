<template>
  <div class="sales-list">
    <div class="line" />
    <div class="search-opt">
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
        <h3>목록 <span>3</span></h3>
      </div>

      <div class="sales-shop-item" v-for="item in 3" :key="item">
        <strong>A대학교 남자기숙사</strong>
        <dl>
          <dt>현금결제 <span>10회</span></dt>
          <dd>
            134,500 원
          </dd>
        </dl>
        <dl>
          <dt>카드결제 <span>10회</span></dt>
          <dd>
            248,000 원
          </dd>
        </dl>
        <div class="divider" />
        <dl class="total">
          <dt>총결제금액</dt>
          <dd>
            383,000 원
          </dd>
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
  name: 'sales-list',
})

export default class extends Vue {
  modal = false
  dates = ['날짜를 선택해주세요',''];
  
  get dateRangeText(){
      return this.dates.join(' ~ ')
  }
}

</script>

<style lang="scss" src="./sales-shop.scss" scoped/>
