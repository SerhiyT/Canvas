import { chart } from './chart'
import { getChartData } from './data'
import './styles.scss'


// ==== CHART function call ===============================
const showChart = chart(document.getElementById('chart'), getChartData())
showChart.init()
