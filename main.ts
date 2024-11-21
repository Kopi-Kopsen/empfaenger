input.onButtonEvent(Button.A, input.buttonEventClick(), function () {
    radio.sendString("F")
})
radio.onReceivedString(function (receivedString) {
    if (receivedString == "F") {
        if (Forwärts == 0) {
            Forwärts += 1
            // Fahrzeug fährt vorwärts mit Geschwindigkeit 100
            MotionKit.forward()
            basic.showIcon(IconNames.Heart)
        } else if (Forwärts == 1) {
            Forwärts = 0
            // Fahrzeug stoppt
            MotionKit.stop()
            basic.clearScreen()
        }
    } else if (receivedString == "B") {
        // Fahrzeug fährt rückwärts mit Geschwindigkeit 100
        MotionKit.backward()
    } else if (receivedString == "L") {
        if (Kurvenstärke == 1) {
            // Fahrzeug dreht nach links mit Geschwindigkeit 50
            MotionKit.turnLeft(20)
        } else if (Kurvenstärke == 2) {
            // Fahrzeug dreht nach links mit Geschwindigkeit 50
            MotionKit.turnLeft(50)
        } else if (Kurvenstärke == 3) {
            // Fahrzeug dreht nach links mit Geschwindigkeit 50
            MotionKit.turnLeft(70)
        }
    } else if (receivedString == "R") {
        if (Kurvenstärke == 1) {
            // Fahrzeug dreht nach rechts mit Geschwindigkeit 50
            MotionKit.turnRight(20)
        } else if (Kurvenstärke == 2) {
            // Fahrzeug dreht nach rechts mit Geschwindigkeit 50
            MotionKit.turnRight(50)
        } else if (Kurvenstärke == 3) {
            // Fahrzeug dreht nach rechts mit Geschwindigkeit 50
            MotionKit.turnRight(70)
        }
    } else if (receivedString == "K") {
        if (Kurvenstärke == 1) {
            Kurvenstärke = 1
        } else if (Kurvenstärke == 2) {
            Kurvenstärke += 1
        } else if (Kurvenstärke == 3) {
            Kurvenstärke += 1
        }
    }
})
let Kurvenstärke = 0
let Forwärts = 0
radio.setGroup(2)
radio.setTransmitPower(7)
