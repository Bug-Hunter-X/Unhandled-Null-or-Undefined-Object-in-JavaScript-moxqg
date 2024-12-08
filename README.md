# Unhandled Null or Undefined Object in JavaScript

This repository demonstrates a common JavaScript error: attempting to access properties of an object that may be null or undefined.  The `bug.js` file shows the problematic code, and `bugSolution.js` provides a corrected version.

## The Problem

The original code doesn't handle the scenario where the input `x` is null or undefined.  Attempting to access `x.length` in this case throws a `TypeError`. 

## The Solution

The solution involves adding a check to ensure `x` is an object before accessing its `length` property.  This prevents the error and handles the null/undefined case gracefully.

## How to Run

1. Clone this repository.
2. Open `bug.js` and `bugSolution.js` in your preferred JavaScript environment.
3. Run the code to see the difference in behavior.