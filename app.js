const WIDTH = 900
const HEIGHT = 300
const DPI_WIDTH = WIDTH * 2
const DPI_HEIGHT = HEIGHT * 2

function chart(canvas, data) {
  const canvaContext = canvas.getContext('2d')
  canvas.style.width = WIDTH + 'px'
  canvas.style.height = HEIGHT + 'px'
  canvas.width = DPI_WIDTH
  canvas.height = DPI_HEIGHT

  
}

chart(document.getElementById('chart'))