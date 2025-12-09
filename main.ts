/**
 * @author Nicholas Sun
 * @version 1.0.0
 * @date 2025-12-08
 * @fileoverview Prints all numbers between the start and the end.
 */

let start: number = parseInt(
  prompt("Choose a starting value.") || "0",
);
let end: number = parseInt(
  prompt("Choose an ending value.") || "0",
);

if (end < start) {
  end = parseInt(
    prompt(
      "Sorry, your ending value must be greater than your starting value. Choose another ending value.",
    ) || "0",
  );
}

// This variable keeps track of the current string to print.
let output: string = "";

for (
  // Initialize the counter.
  let counter: number = start;
  // Check if the counter is less than or equal to the ending value.
  counter <= end;
  // Increase the counter.
  counter += 1
) {
  if (counter == end) {
    // Edge case if the counter reaches the ending value.
    output = output + `${counter}`;
  } else {
    output = output + `${counter} `;
  }
}

// Print the output
console.log(output);
