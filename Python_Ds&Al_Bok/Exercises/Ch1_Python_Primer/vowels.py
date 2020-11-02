# Write a short Python function that counts the number of vowels in a given
# character string

def vowels(word):
  vowels = {'a', 'A', 'e', 'E', 'i', 'I' ,'u', 'U', 'y', 'Y', 'o', 'O' 'w', 'W'}

  counter = 0

  for char in word:
    for letter in vowels:
      if char == letter:
        counter += 1
        break
  return counter

print(vowels('Ahmed'))