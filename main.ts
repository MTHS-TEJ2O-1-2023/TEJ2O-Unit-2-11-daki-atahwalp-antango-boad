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
  basic.showNumber(num1)
})

// on button B (show num2)

input.onButtonPressed(Button.B, function () {
  basic.showNumber(num2)
})

// comparing numbers

input.onGesture(Gesture.Shake, function () {
  if (num1 > num2)
    basic.showNumber((num1 + basic.showString('>') (num2)

})

