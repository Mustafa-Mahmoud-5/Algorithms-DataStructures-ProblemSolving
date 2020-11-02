# Write a short Python function that takes a positive integer n and returns
# the sum of the squares of all the odd positive integers smaller than n.

def odd_squares(n):
  summition = 0

  for i in range(n):
    if not i % 2 == 0:
      summition += i ** 2
  return summition

n = 20

print(odd_squares(n))


# Give a single command that computes the sum from Exercise R-1.6, relying on Python’s comprehension syntax and the built-in sum function.

def odd_squares_one_command(n):
  return sum( [ i**2 for i in range(n) if not i % 2 == 0 ] )

print(odd_squares_one_command(n))