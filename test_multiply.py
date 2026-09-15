import unittest

from multiply import multiply


class MultiplyTests(unittest.TestCase):
    def test_positive_numbers(self) -> None:
        self.assertEqual(multiply(6, 7), 42)

    def test_negative_number(self) -> None:
        self.assertEqual(multiply(-4, 5), -20)

    def test_decimal_numbers(self) -> None:
        self.assertAlmostEqual(multiply(2.5, 1.2), 3.0)

    def test_zero(self) -> None:
        self.assertEqual(multiply(99, 0), 0)


if __name__ == "__main__":
    unittest.main()
