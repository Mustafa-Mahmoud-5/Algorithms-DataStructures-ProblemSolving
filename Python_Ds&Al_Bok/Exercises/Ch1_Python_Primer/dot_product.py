# Write a short Python program that takes two arrays a and b of length n
# storing int values, and returns the dot product of a and b. That is, it returns
# an array c of length n such that c[i] = a[i] · b[i], for i = 0,...,n−1.

def dot_product(a,b):
  if len(a) != len(b):
    return 'Two lists should be equal in length'

  dot_product_result = []

  for i in range(len(a)):
    product = a[i] * b[i]

    dot_product_result.append(product)
  
  return dot_product_result 
    

a = [5,2,0,7]
b = [1,2,3,4]

print(dot_product(a, b))