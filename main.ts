radio.setGroup(10)
basic.forever(function on_forever() {
    led.toggle(0, 0)
    radio.sendValue("X", input.acceleration(Dimension.X))
    radio.sendValue("Y", input.acceleration(Dimension.Y))
    radio.sendValue("Z", input.acceleration(Dimension.Z))
    radio.sendValue("Compass", input.compassHeading())
    basic.pause(50)
})
