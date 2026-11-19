# Team Calculator

A simple Python 3 calculator developed with separate Git branches for each operator, then merged into `main` using pull requests. No external packages are required.

## Run

```bash
git clone https://github.com/sonukumar24-bit/Calculator.git
cd Calculator
python3 main.py
```

On Windows, use `python main.py` if `python3` is unavailable.

Choose addition, subtraction, multiplication, or division; enter two numbers. Choose 5 to exit. Decimal and negative numbers are supported. Invalid choices, non-numeric input, and division by zero show an error and return to the menu.

## Files and branches

| Branch | File | Function | Merged pull request |
| --- | --- | --- | --- |
| addition | addition.py | add(a, b) | #2 |
| subtraction | subtraction.py | subtract(a, b) | #1 |
| multiplication | multiplication.py | multiply(a, b) | #3 |
| division | division.py | divide(a, b) | #4 |
| integration | main.py | Connects all four operators | #5 |

The operator branches are retained so the branch and merge workflow can be demonstrated. Existing repository history has been preserved.

## Suggested work split for three members

- Member 1: addition and the main menu.
- Member 2: subtraction.
- Member 3: multiplication and division, using separate branches.

This is a suggested work split. The current setup commits were made using the signed-in GitHub account; they do not represent separate commits by three different members.

## Manual checks

| Operation | First number | Second number | Expected result |
| --- | --- | --- | --- |
| Addition | 6 | 7 | 13 |
| Subtraction | 6 | 7 | -1 |
| Multiplication | 6 | 7 | 42 |
| Division | 7 | 2 | 3.5 |
| Division | 7 | 0 | Error: Cannot divide by zero. |

Also try an invalid menu choice and a non-numeric input, then choose 5 to exit.
