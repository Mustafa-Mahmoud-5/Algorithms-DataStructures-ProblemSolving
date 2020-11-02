# Write a short program that takes as input three integers, a, b, and c, from
# the console and determines if they can be used in a correct arithmetic
# formula (in the given order), like “a+b = c,” “a = b−c,” or “a ∗ b = c.”


a, b, c = None, None, None

while not (a and b and c):
  try:
    if not a:
      a = int(input('Enter a: '))
    if not b:
      b = int(input('Enter b: '))
    if not c:
      c = int(input('Enter c: '))
  except KeyboardInterrupt:
    print('Bye')
    break
  except:
    print('Enter Digits Only')

if(a and b and c):
  if a == b + c:
    print(f'a({a}) = b({b}) + c({c})')
  elif a == b * c:
    print(f'a({a}) = b({b}) * c({c})')
  elif a == b - c:
    print(f'a({a}) = b({b}) - c{c})')
  else:
    print('a, b and c have no relation')