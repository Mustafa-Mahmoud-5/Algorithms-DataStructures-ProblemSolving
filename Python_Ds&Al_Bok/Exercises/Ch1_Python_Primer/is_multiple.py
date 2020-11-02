# Write a short Python function, is multiple(n, m), that takes two integer
# values and returns True if n is a multiple of m, that is, n = mi for some
# integer i, and False otherwise.

def is_multiple(n, m):
  try:
    return True if n % m == 0 else False

  except TypeError:
    print('Error: This function accepts only ints and floats.')


n , m = 50, '3'

print(is_multiple(n,m))



