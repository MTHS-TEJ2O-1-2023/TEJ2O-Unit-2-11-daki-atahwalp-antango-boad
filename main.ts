/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Daki A.B
 * Created on: Oct 2023
 * This program compares two numbers
*/

// variables

let num1: number = randint(0, 99)
let num2: number = randint(0,99)

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
  if (num1 < num2) {
    basic.showString(num1 + '<' + num2)
  } else {
    basic.showString(num2 + '<' + num1)
  }
})