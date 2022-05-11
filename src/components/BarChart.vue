<script>
  import { Bar } from 'vue-chartjs'

  export default {
    extends: Bar,
    props: {
      player: {
        type: Object,
          default: function () {
            return {};
          },
      },
      average: {
        type: Object,
          default: function () {
            return {};
          },
      },
    },
    data () {
      return {
        chartData: {
          labels: [
             "Kills",
             "Deaths",
             "Wounds",
             "Revives"
          ],
          datasets: [
            {
              label: 'Your Stats',
              borderWidth: 1,
              backgroundColor: ['rgba(245, 78, 66, 0.4)', 'rgba(66, 81, 245, 0.4)', 'rgba(176, 2, 250, 0.4)', 'rgba(44, 255, 20, 0.4)'],
             
              data: [
                this.player.Kills, 
                this.player.Deaths, 
                this.player.Wounds,
                this.player.Revives
              ]
            },
            {
              label: 'Average Stats',
              borderWidth: 1,
              backgroundColor: ['rgba(200, 200, 200, 0.4)', 'rgba(200, 200, 200, 0.4)','rgba(200, 200, 200, 0.4)','rgba(200, 200, 200, 0.4)'],
             
              data: [
                this.average.Kills, 
                this.average.Deaths, 
                this.average.Wounds,
                this.average.Revives
              ]
            }
          ]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          tooltips: {
            callbacks: {
              label: function(item, data) {
                return data.datasets[item.datasetIndex].label+ ": "+ data.labels[item.index]+ ": "+ data.datasets[item.datasetIndex].data[item.index];
              }
            }
          },
          legend:{
            display: false
          }
        }
      }
    },
    mounted () {
      this.renderChart(this.chartData, this.options)
    }
  }
</script>