# Code Review #3: Ping Pong

#### Code Review #3 for Epicodus, 03-10-2019

#### By **Alicia Toshima**

## Description

This project uses an HTML form and asks users to input a number; the output will count up to the inputed number. However, numbers divisble by 3 will output "ping", numbers divisible by 5 will output "pong", numbers divisible by 15 will output "pingpong", and all other numbers will return that number. Link to GitHub pages can be found here: https://aliciatoshima.github.io/ping_pong/. This project is an exercise in using HTML (and showcasing all of the elements learned), CSS, Bootstrap, JavaScript and jquery, branching, for and forEach loops, and demonstration of logic via the specifications.

## Specifications
* The program should count up to the number inputted. Numbers that are divisible by 3 should return "ping", numbers divisible by 5 should return "pong", numbers divisible by 15 (both 3 and 5) should return "pingpong", and all other numbers should return the number itself. Ideally, these would be put into an array once the number has been entered by the user so that it can be easily looped through.
**Input:** 15
**Output:** [1, 2, ping, 4, pong, ping, 7, 8, ping, pong, 11, ping, 13, 14, pingpong]

Logic:
* Since the logic will need to handle the division of 3 and 5, we will want to handle the "pingpong" case first, or numbers that are divisible by 15. This can be done by using the modulo operator and indeces satisfying x % 15 = 0 will return "pingpong"
* Then we can handle the indeces



## Setup/Installation Requirements

* Clone this repository onto your machine into the location of your choice.
`git clone https://github.com/aliciatoshima/ping_pong.git`
* Open the Buzzfeed folder in the text editor of your choice
* Open index.html file.

## Known Bugs

None at the moment...

## Support and contact details

You can contact me at fatloach7722@gmail.com.

## Technologies Used

- HTML
- CSS
- Bootstrap
- JavaScript
- jquery

### License

Copyright (c) 2019 Alicia Toshima
