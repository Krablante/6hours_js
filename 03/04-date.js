let interval = undefined

const output = document.getElementById("output")
const full = document.getElementById("full")
const time = document.getElementById("time")
const date = document.getElementById("date")

let mode = "time"

setInterval(update, 1000)

update()

function update() {
  output.textContent = render(mode)
}

time.onclick = () => { 
  mode = "time"
  update()
}

date.onclick = () => {
  mode = "date"
  update()
}

full.onclick = () => {
  mode = "full"
  update()
}

function render(type = "time") {
  const now = new Date();
  if (type === "date") {
    return now.toLocaleDateString()
  } else if (type === "full") {
    return now.toLocaleDateString() + " " + now.toLocaleTimeString()
  } else if (type === "time"){
    return now.toLocaleTimeString()
  }
}