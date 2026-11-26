# Destructured Function

A small JavaScript example demonstrating object destructuring, default values, and shorthand property names in returned objects.

## Table of Contents

- [About](#about)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Architecture](#architecture)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Configuration](#configuration)
- [Security](#security)
- [How to Contribute?](#how-to-contribute)
- [What's Next?](#whats-next)
- [License](#license)
- [Acknowledgements](#acknowledgements)
- [Author](#author)

## About

This project is a minimal, standalone example of extracting values from a JavaScript object with destructuring assignment.

## Features

- Destructures `name`, `age`, and `city` from an object.
- Uses `"Unknown"` as the default `country` when that property is absent.
- Defines an `employee` function that returns `name` and `position` using object property shorthand.
- Prints the resulting values to the console.

## Tech Stack

- JavaScript
- Node.js to run the example

## Architecture

The project has one script. It defines a sample person object, destructures its properties, and logs the values. It also creates an employee object from function parameters using property shorthand and logs that object. No external packages or services are used.

## Project Structure

```text
.
└── script.js
```

## Getting Started

1. Install [Node.js](https://nodejs.org/).
2. From the project directory, run:

   ```sh
   node script.js
   ```

3. Check the console output, including the default value for `country` and the employee object returned by `employee`.

## Configuration

No configuration is required.

## Security

The example runs locally and does not make network requests or handle credentials. Review any changes before running scripts from untrusted sources.

## How to Contribute?

For changes, create a branch, make a focused update, and open a pull request with a description of the change.

## What's Next?

Possible extensions include trying destructuring with nested objects, arrays, or function parameters.

## License

No license information is currently provided.

## Acknowledgements

Thanks to the JavaScript community for its documentation and learning resources.

## Author

Jack Sawyer
