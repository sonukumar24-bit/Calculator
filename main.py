"""Run the calculator after merging all operator branches."""

from addition import add
from subtraction import subtract
from multiplication import multiply
from division import divide


def main():
    operations = {
        "1": ("Addition", add),
        "2": ("Subtraction", subtract),
        "3": ("Multiplication", multiply),
        "4": ("Division", divide),
    }
    while True:
        print("\n=== Team Calculator ===")
        for key, (name, _) in operations.items():
            print(f"{key}. {name}")
        print("5. Exit")
        choice = input("Choose an option (1-5): ").strip()
        if choice == "5":
            print("Goodbye!")
            break
        if choice not in operations:
            print("Invalid choice. Please select 1 to 5.")
            continue
        try:
            a = float(input("Enter first number: "))
            b = float(input("Enter second number: "))
        except ValueError:
            print("Invalid input. Please enter numbers.")
            continue
        try:
            result = operations[choice][1](a, b)
            print(f"Result: {result:g}")
        except ValueError as error:
            print(f"Error: {error}")


if __name__ == "__main__":
    try:
        main()
    except (EOFError, KeyboardInterrupt):
        print("\nGoodbye!")
