radio.onReceivedNumber(function (receivedNumber) {
    basic.showString("" + (receivedNumber))
})
input.onButtonPressed(Button.A, function () {
    basic.clearScreen()
    a += -1
    if (a < 0) {
        a += 26
    }
    basic.showString("" + a)
})
input.onButtonPressed(Button.AB, function () {
    radio.sendString("" + (a))
    basic.showIcon(IconNames.Yes)
    basic.pause(100)
    basic.showString("" + (a))
})
input.onButtonPressed(Button.B, function () {
    basic.clearScreen()
    a += 1
    if (a > 25) {
        a += -26
    }
    basic.showString("" + a)
})
let a = 0
radio.setGroup(95)
