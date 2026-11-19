"""Division operator for the team calculator."""

def divide(a, b):
    """Return a / b, rejecting division by zero."""
    if b == 0:
        raise ValueError("Cannot divide by zero.")
    return a / b
