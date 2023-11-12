basic.clearScreen()
basic.showString("23")
basic.pause(2000)
basic.forever(function () {
    basic.showNumber(pins.analogReadPin(AnalogPin.P0))
    basic.pause(100)
    serial.writeNumber(pins.analogReadPin(AnalogPin.P0))
})
