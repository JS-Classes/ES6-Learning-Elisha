// Find matching numbers in a paragraph using regular expression

let message = '7H15 M3554G3 53RV35 7O PR0V3 H0W 0UR M1ND5 C4N D0 4M4Z1NG 7H1NG5! 1MPR3551V3 7H1NG5! 1N 7H3 B3G1NN1NG 17 WA5 H4RD BU7 N0W, 0N 7H15 LIN3 Y0UR M1ND 1S R34D1NG 17 4U70M471C4LLY W17H 0U7 3V3N 7H1NK1NG 4B0U7 17, B3 PROUD! 0NLY C3R741N P30PL3 C4N R3AD 7H15.';
let numbers = /[0-9]/g;
let matches = message.match (numbers);

console.log(matches);