# Write a short Python function that takes a string s, representing a sentence,
# and returns a copy of the string with all punctuation removed. For example, if given the string "Let's try, Mike.", this function would return
# "Lets try Mike"


# my idea is to check if this char is a char from a-z or A-Z by checking its unicode, if not, remove it, taking in considration that we don`t need to include the white space in this check
def punctuation(string):
  for el in string:
    if not(97 <= ord(el) <= 122 or 90 >= ord(el) >= 65) and el != ' ':
      string = string.replace(el, '')
  return string

string = "Let's try, Mike."
print(punctuation(string))





