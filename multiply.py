"""Multiply two numbers from the command line."""

import argparse


def multiply(first_number: float, second_number: float) -> float:
    """Return the product of two numbers."""
    return first_number * second_number


def main() -> None:
    parser = argparse.ArgumentParser(description="Multiply two numbers.")
    parser.add_argument("first_number", type=float)
    parser.add_argument("second_number", type=float)
    args = parser.parse_args()

    result = multiply(args.first_number, args.second_number)
    print(f"{result:g}")


if __name__ == "__main__":
    main()
