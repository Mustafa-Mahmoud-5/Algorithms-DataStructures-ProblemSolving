def reverse(number):
  number = str(number)
  reversed_number = ""
  for digit in reversed(number):
    reversed_number += digit
  return int(reversed_number)

def beautiful_days(i, j, k):
  b_days_counter = 0
  for day in range(i, j+1):
    if((day - reverse(day)) % k == 0):
      b_days_counter += 1
  print(b_days_counter)
beautiful_days(20, 23, 6)
