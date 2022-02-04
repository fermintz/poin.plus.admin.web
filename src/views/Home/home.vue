<template>
  <div class="home">
    <div class="inner">
      <div class="top">
        <div class="left">
          <span>2022</span>

          <v-dialog ref="dialog" v-model="modal" :return-value.sync="date" persistent width="290px">
            <template v-slot:activator="{ on, attrs }">
              <v-btn text v-bind="attrs" v-on="on">
                <label>{{ date | moment('MM월') }}</label>
                <v-icon>mdi-chevron-down</v-icon>
              </v-btn>
            </template>
            <v-date-picker
              v-model="date"
              type="month"
              :month-format="monthFormatChange"
              @input="(date) => this.$refs.dialog.save(date)"
            >
            </v-date-picker>
          </v-dialog>
        </div>
        <div class="right">
          <dl class="total">
            <dt>총매출</dt>
            <dd>766,000 원</dd>
          </dl>
          <dl>
            <dt>현금매출</dt>
            <dd>218,000 원</dd>
          </dl>
          <dl>
            <dt>카드매출</dt>
            <dd>548,000 원</dd>
          </dl>
        </div>
      </div>
      <div class="divider" />

      <div class="calendar">
        <div class="week-text">
          <span v-for="item in ['일', '월', '화', '수', '목', '금', '토']" :key="item">
            {{ item }}
          </span>
        </div>
        <div class="days">
          <div class="week" v-for="week in totalWeeks" :key="week">
            <dl class="day" v-for="day in 7" :key="[week, day].join('')">
              <dt>{{ currentDate(week, day) | moment('DD') }}</dt>
              <dd>
                <span class="cash">17,500</span>
                <span class="card">1,118,000</span>
              </dd>
            </dl>
          </div>
        </div>

        <div class="legend">
          <div class="legend-item cash"><span></span><label>현금결제</label></div>
          <div class="legend-item card"><span></span><label>카드결제</label></div>
        </div>
      </div>
    </div>
    <!--inner -->

    <div class="line" />

    <div class="shop">
      <div class="item" v-for="item in 3" :key="item" @click="$router.push('shop-detail')">
        <div class="item-head">
          <h4>A대학교 남자기숙사</h4>
          <v-icon>mdi-chevron-right</v-icon>
        </div>
        <dl>
          <dt>
            <label>현금결제</label>
            <span>10회</span>
          </dt>
          <dd>135,500 원</dd>
        </dl>
        <dl>
          <dt>
            <label>카드결제</label>
            <span>32회</span>
          </dt>
          <dd>35,500 원</dd>
        </dl>
        <div class="divider" />
        <dl class="total">
          <dt>
            <label>총 매출</label>
          </dt>
          <dd>383,000 원</dd>
        </dl>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

@Component({
  name: 'Home',
})
export default class extends Vue {
  date = this.$moment().format('YYYY-MM');
  modal = false;

  monthFormatChange(e) {
    return e.substr(5, 2) + '월';
  }

  get totalWeeks(): number {
    const startWeekDay = this.$moment(this.date, 'YYYY-MM').startOf('month').weekday();
    const daysInMonth = this.$moment(this.date, 'YYYY-MM').daysInMonth();
    return Math.ceil((startWeekDay + daysInMonth) / 7);
  }

  currentDate(week: number, day: number) {
    const selectMonth = this.date;
    const addDate = ((week - 1) * 7) + day - 1;
    return this.$moment(selectMonth, 'YYYY-MM')
      .startOf('month')
      .startOf('week')
      .add(addDate, 'day')
      .toDate();
  }
}
</script>
<style lang="scss" src="./home.scss" scoped></style>
