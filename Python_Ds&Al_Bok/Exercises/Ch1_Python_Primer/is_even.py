# Write a short Python function, is even(k), that takes an integer value and
# returns True if k is even, and False otherwise. However, your function
# cannot use the multiplication, modulo, or division operators.

def is_even(k):
  #  we need not to use % or * or / so we need to check if the last digit is one of these numbers
  
  evens = {'0', '2', '4', '6', '8'}

  if str(k)[-1] in evens:
    return True

  return False

  # Another code without using in keyword

  # for el in evens:
  #   if str(k)[-1] == el:
  #     return True
  # return False

number = 16

print(is_even(number))