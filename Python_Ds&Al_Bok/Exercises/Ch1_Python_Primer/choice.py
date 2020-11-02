from random import randrange

def choice(iterable):
  try:
    
    if not isinstance(iterable, (str, list, tuple, set)):
      raise TypeError('Passed type is not iterable')
    
    random_number = randrange(0, len(iterable))
    
    return iterable[random_number]
  
  except TypeError as error:
    print(error)

print(choice(['a','b','c','d']))

