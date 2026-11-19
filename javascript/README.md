# Question 2: JavaScript Team Calculator

A browser calculator built in the VS Code web editor with GitHub Repositories and Source Control. Each operation has a separate JavaScript file. The Python calculator at the repository root is Question 1.

## Show the output

1. On GitHub, select `main` and choose Code > Download ZIP.
2. Extract the ZIP and open the `javascript` folder.
3. Double-click `index.html` to open it in Chrome. No server, Node.js, or packages are required for the calculator.
4. Enter 10 and 20, select Addition, then click Calculate. Result: 30.

Open the extracted folder with File > Open Folder in desktop VS Code to edit it. Open `index.html` in your browser again, or refresh it after saving changes.

## Files

| File | Purpose |
| --- | --- |
| index.html | Calculator screen and CSS |
| app.js | Input validation, selected operation, result and clear |
| addition.js | add(a, b) |
| subtraction.js | subtract(a, b) |
| multiplication.js | multiply(a, b) |
| division.js | divide(a, b), including zero protection |
| tests.js | Optional Node.js operator checks |

Blank inputs, invalid numbers, division by zero and overflow display an error. Negative and decimal numbers work. Results are formatted to 12 significant digits for display; calculations use standard JavaScript floating-point arithmetic.

## Team workflow in VS Code and GitHub

| Intended owner | Work | Suggested feature branch |
| --- | --- | --- |
| Sonu | Addition | js-sonu-addition |
| Sonu | Subtraction | js-sonu-subtraction |
| Arjun | Multiplication | js-arjun-multiplication |
| Harsh | Division and integration | js-harsh-division |

These are planned roles, not claims of separate authorship. This initial working version is committed by the currently signed-in GitHub account. For individual contribution marks, each member must make and push their own genuine changes from their own account.

### Each member

1. Sign in to your own GitHub account and open this repository.
2. Press the period key on GitHub to open the VS Code web editor.
3. Click the repository/branch indicator at the bottom, choose Create new branch, give it your suggested branch name, then switch to it. Start from `main`.
4. Edit your operator file and add meaningful improvements or tests. Save it.
5. Open Source Control, enter a commit message, stage the intended files and commit/push.
6. Open GitHub and create a pull request with base `main` and your feature branch as compare.
7. Another team member reviews the changes, then merges the PR. Keep branches for the demonstration.

If the faculty requires each member to implement the operator from scratch, use an agreed starter version without those implementations before they begin. Adding comments alone does not demonstrate original implementation.

The VS Code web editor edits and commits files, but does not provide a local Node.js terminal or execute this HTML app. Use the downloaded HTML in Chrome to show the output.

## Optional tests in desktop VS Code

With Node.js installed, open the terminal in this folder and run:

```bash
node tests.js
```

Expected: `PASS: all 9 operator checks.`

## Demonstration

| Operation | Inputs | Expected output |
| --- | --- | --- |
| Addition | 10, 20 | 30 |
| Subtraction | 20, 10 | 10 |
| Multiplication | 6, 7 | 42 |
| Division | 7, 2 | 3.5 |
| Division | 7, 0 | Cannot divide by zero. |

Also show blank-input validation, Clear, the operator files in VS Code, the commit history, and the merged pull request in GitHub.
