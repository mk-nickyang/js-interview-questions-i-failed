# Parentheses Check

Return true if a string is made with one or more valid parentheses, otherwise return false.

Time: 15 mins

// (()) true
// ()(()) true
// )( false
// (())( false

## Examples

```
// Example 1
const input = '()'
const expected_output = true;

// Example 2
const input = '()()'
const expected_output = true;

// Example 3
const input = '(())'
const expected_output = true;

// Example 4
const input = '()(())'
const expected_output = true;

// Example 5
const input = ')('
const expected_output = false;

// Example 6
const input = '(())('
const expected_output = false;

// Example 7
const input = '('
const expected_output = false;
```

## Why i failed

For some reason I decided to use `reduce` and not to mutate the input array (doable but a bit more complicated), which turned this simple question into a big mess when i was under pressure.
