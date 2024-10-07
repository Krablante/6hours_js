let interval = undefined

const output = document.getElementById("output")
const full = document.getElementById("full")
const time = document.getElementById("time")
const date = document.getElementById("date")

let mode = "time"

function bindMode(name) {
  return function () {
    mode = name;
    update();
  }
}

function update() {
  output.textContent = render(mode)
}

time.onclick = bindMode("time")

date.onclick = bindMode("date")

full.onclick = bindMode("full")

setInterval(update, 100)

update()

function render(type = "time") {
  const now = new Date();
  if (type === "date") {
    return now.toLocaleDateString()
  } else if (type === "full") {
    return now.toLocaleDateString() + " " + now.toLocaleTimeString()
  } else if (type === "time"){
    return now.toLocaleTimeString().replace("AM", "").replace(" ", "").replace("PM", "") + "." + now.getMilliseconds()
  }
}