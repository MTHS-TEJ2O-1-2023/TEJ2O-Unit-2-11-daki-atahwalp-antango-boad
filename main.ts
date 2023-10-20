/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Daki A.B
 * Created on: Oct 2023
 * This program compares two numbers
*/

// start up

basic.clearScreen()
basic.pause(1000)
basic.showIcon(IconNames.Happy)

// variables

let num1: number = randint(0, 99)
let num2: number = randint(0, 99)
num1 = randint(0, 99)
num2 = randint(0, 99)

// on button A (show num1)

input.onButtonPressed(Button.A, function () {
  basic.showString('#1')
  basic.showNumber(num1)
  basic.showIcon(IconNames.Happy)
  basic.clearScreen()
})

// on button B (show num2)

input.onButtonPressed(Button.B, function () {
  basic.showString('#2')
  basic.showNumber(num2)
  basic.showIcon(IconNames.Happy)
  basic.clearScreen()
})

// comparing numbers

input.onGesture(Gesture.Shake, function () {
  // clean up
  basic.clearScreen()

  if (num1 < num2) {
    basic.showNumber(num1)
    basic.showString('<')
    basic.showNumber(num2)
  } else {
    basic.showNumber(num2)
    basic.showString('<')
    basic.showNumber(num1)
  }
})
