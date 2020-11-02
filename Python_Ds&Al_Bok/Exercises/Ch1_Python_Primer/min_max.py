# Write a short Python function, minmax(data), that takes a sequence of
# one or more numbers, and returns the smallest and largest numbers, in the
# form of a tuple of length two. Do not use the built-in functions min or
# max in implementing your solution.

def minmax(data):
  
  min_num, max_num = data[0], data[0]

  for el in data:
    if(el > max_num):
      max_num = el
    
    if(el < min_num):
      min_num = el
      
  return min_num, max_num
data = [1,23,4,6,7,9,1,8,78,81,14,91,48,5,9,4,92]

print(minmax(data))