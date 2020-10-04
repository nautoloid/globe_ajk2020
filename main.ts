input.onGesture(Gesture.Shake, function () {
    light.stopAllAnimations()
    shake = Math.abs(shake + -1)
    light.setBrightness(0)
})
let shake = 0
shake = 0
forever(function () {
    light.setBrightness(0)
    if (shake == 0 && input.acceleration(Dimension.Z) >= 2000) {
        light.setBrightness(255)
        light.showAnimation(light.rainbowAnimation, 20000)
        light.setBrightness(0)
    }
    if (shake > 0) {
        light.setBrightness(255)
        light.showAnimation(light.cometAnimation, 500)
    }
})
