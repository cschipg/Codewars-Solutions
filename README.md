Battleship Field Validator :

Write a method that takes a field for well-known board game "Battleship" as an argument and returns true if it has a valid disposition of ships, false otherwise. Argument is guaranteed to be 10*10 two-dimension array. Elements in the array are numbers, 0 if the cell is free and 1 if occupied by ship.

Battleship (also Battleships or Sea Battle) is a guessing game for two players. Each player has a 10x10 grid containing several "ships" and objective is to destroy enemy's forces by targetting individual cells on his field. The ship occupies one or more cells in the grid. Size and number of ships may differ from version to version. In this kata we will use Soviet/Russian version of the game.

Before the game begins, players set up the board and place the ships accordingly to the following rules: There must be single battleship (size of 4 cells), 2 cruisers (size 3), 3 destroyers (size 2) and 4 submarines (size 1). Any additional ships are not allowed, as well as missing ships. Each ship must be a straight line, except for submarines, which are just single cell.

The ship cannot overlap or be in contact with any other ship, neither by edge nor by corner.

This is all you need to solve this kata. If you're interested in more information about the game, visit this link.

Next Bigger Number With The Same Digits :

Create a function that takes a positive integer and returns the next bigger number that can be formed by rearranging its digits. For example:

12 ==> 21 513 ==> 531 2017 ==> 2071 nextBigger(num: 12) // returns 21 nextBigger(num: 513) // returns 531 nextBigger(num: 2017) // returns 2071 If the digits can't be rearranged to form a bigger number, return -1 (or nil in Swift):

9 ==> -1 111 ==> -1 531 ==> -1 nextBigger(num: 9) // returns nil nextBigger(num: 111) // returns nil nextBigger(num: 531) // returns nil

--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

RailFenceCipher :

Create two functions to encode and then decode a string using the Rail Fence Cipher. This cipher is used to encode a string by placing each character successively in a diagonal along a set of "rails". First start off moving diagonally and down. When you reach the bottom, reverse direction and move diagonally and up until you reach the top rail. Continue until you reach the end of the string. Each "rail" is then read left to right to derive the encoded string.

For example, the string "WEAREDISCOVEREDFLEEATONCE" could be represented in a three rail system as follows:

W E C R L T E E R D S O E E F E A O C
A I V D E N
The encoded string would be:

WECRLTEERDSOEEFEAOCAIVDEN Write a function/method that takes 2 arguments, a string and the number of rails, and returns the ENCODED string.

Write a second function/method that takes 2 arguments, an encoded string and the number of rails, and returns the DECODED string.

For both encoding and decoding, assume number of rails >= 2 and that passing an empty string will return an empty string.

Note that the example above excludes the punctuation and spaces just for simplicity. There are, however, tests that include punctuation. Don't filter out punctuation as they are a part of the string.

--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

The Observed Pin :

Alright, detective, one of our colleagues successfully observed our target person, Robby the robber. We followed him to a secret warehouse, where we assume to find all the stolen stuff. The door to this warehouse is secured by an electronic combination lock. Unfortunately our spy isn't sure about the PIN he saw, when Robby entered it.

The keypad has the following layout:

┌───┬───┬───┐ │ 1 │ 2 │ 3 │ ├───┼───┼───┤ │ 4 │ 5 │ 6 │ ├───┼───┼───┤ │ 7 │ 8 │ 9 │ └───┼───┼───┘ │ 0 │ └───┘ He noted the PIN 1357, but he also said, it is possible that each of the digits he saw could actually be another adjacent digit (horizontally or vertically, but not diagonally). E.g. instead of the 1 it could also be the 2 or 4. And instead of the 5 it could also be the 2, 4, 6 or 8.

He also mentioned, he knows this kind of locks. You can enter an unlimited amount of wrong PINs, they never finally lock the system or sound the alarm. That's why we can try out all possible (*) variations.

possible in sense of: the observed PIN itself and all variations considering the adjacent digits
Can you help us to find all those variations? It would be nice to have a function, that returns an array (or a list in Java and C#) of all variations for an observed PIN with a length of 1 to 8 digits. We could name the function getPINs (get_pins in python, GetPINs in C#). But please note that all PINs, the observed one and also the results, must be strings, because of potentially leading '0's. We already prepared some test cases for you.

Detective, we are counting on you!

--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

Twice Linear :

Consider a sequence u where u is defined as follows:

The number u(0) = 1 is the first one in u. For each x in u, then y = 2 * x + 1 and z = 3 * x + 1 must be in u too. There are no other numbers in u. Example: u = [1, 3, 4, 7, 9, 10, 13, 15, 19, 21, 22, 27, ...]

1 gives 3 and 4, then 3 gives 7 and 10, 4 gives 9 and 13, then 7 gives 15 and 22 and so on...

Task: Given parameter n the function dbl_linear (or dblLinear...) returns the element u(n) of the ordered sequence u (ordered with < so there are no duplicates) .

Example: dbl_linear(10) should return 22

Note: Focus attention on efficiency
