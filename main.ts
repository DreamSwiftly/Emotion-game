input.onButtonPressed(Button.A, function () {
    while (Math.randomBoolean()) {
        basic.showIcon(IconNames.Happy)
    }
    while (Math.randomBoolean()) {
        basic.showIcon(IconNames.Sad)
    }
    while (Math.randomBoolean()) {
        basic.showIcon(IconNames.Confused)
    }
})
input.onButtonPressed(Button.AB, function () {
    while (Math.randomBoolean()) {
        basic.showIcon(IconNames.Silly)
    }
})
input.onButtonPressed(Button.B, function () {
    while (Math.randomBoolean()) {
        basic.showIcon(IconNames.Angry)
    }
    while (Math.randomBoolean()) {
        basic.showIcon(IconNames.Asleep)
    }
    while (Math.randomBoolean()) {
        basic.showIcon(IconNames.Surprised)
    }
})
