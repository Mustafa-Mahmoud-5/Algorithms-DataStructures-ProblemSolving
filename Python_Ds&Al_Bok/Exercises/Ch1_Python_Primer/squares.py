# Write a short Python function that takes a positive integer n and returns
# the sum of the squares of all the positive integers smaller than n.

def squares(n):
  result = 0

  for i in range(1, n): result += i ** 2
  
  return result

n = 10

print(squares(n))


# Give a single command that computes the sum from Exercise R-1.4, relying on Python’s comprehension syntax and the built-in sum function.

def squares_one_command(n):
  return sum( [i**2 for i in range(n)] )

print(squares_one_command(n))