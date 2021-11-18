<template>
  <div ref="view" class="studentscore"></div>
</template>

<script>
  // import axios, { setCookie } from '@utils'

  //   import header from '@static/img/header.png'

  import * as echarts from 'echarts'
  export default {
    name: 'Studentscore',
    data() {
      return {}
    },
    watch: {},
    mounted() {
      this.creatView()
    },
    methods: {
      creatView() {
        var myChart = echarts.init(this.$refs.view)
        let option = {
          legend: {
            data: ['我的得分', '班级均分', '年级均分'],

            itemWidth: 23,
            itemHeight: 11,
            itemGap: 50, // 图例的间距
            icon:
              'path://M442,165 L459,165 L459,165 L459,170 C459,173.313708 456.313708,176 453,176 L436,176 L436,176 L436,171 C436,167.686292 438.686292,165 442,165 Z',
            textStyle: {
              color: '#333'
            },
            bottom: '0'
          },

          textStyle: {
            color: '#999',
            fontSize: 14
          },

          radar: {
            // shape: 'circle',
            color: 'red',
            indicator: [
              { name: '政治', max: 120 },
              { name: '体育', max: 120 },
              { name: '生物', max: 100 },
              { name: '地理', max: 120 },
              { name: '历史', max: 100 }
            ]
          },
          series: [
            {
              name: '平均分 vs 班级分',
              type: 'radar',
              color: ['#5F8EEC', '#FF9F0A', '#FF6987'],
              data: [
                {
                  value: [120, 90, 60, 120, 0],
                  name: '我的得分'
                },
                {
                  value: [80, 40, 100, 0, 0],
                  name: '班级均分'
                },
                {
                  value: [0, 120, 60, 90, 90],
                  name: '年级均分'
                }
              ]
            }
          ]
        }

        myChart.setOption(option)
      }
    }
  }
</script>
<style lang="scss" scoped>
  .studentscore {
    width: 500px;
    height: 500px;
    border: 1px red solid;
    color: rgb(114, 113, 113);
  }
</style>
