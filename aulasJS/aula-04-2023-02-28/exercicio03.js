const io = require("../io")

let i = 0

while (i < 100) {
    io.write(i)
    i = i + 2
}