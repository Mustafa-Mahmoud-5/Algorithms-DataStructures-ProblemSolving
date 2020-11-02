# Python allows negative integers to be used as indices into a sequence,
# such as a string. If string s has length n, and expression s[k] is used for index −n ≤ k < 0, what is the equivalent index j ≥ 0 such that s[j] references
# the same element?

demo = [1,2,3,4,5,6,7,8,9]

# let`s say we want the element 4

print(demo[3])

#Or

print(demo[-6])


# So we have a rule here, to acces the same element in the iterable, we have two ways

# 1- iterable[k] 'poitive' or iterable[j] 'negative' where j = k - len(iterable)



# What parameters should be sent to the range constructor, to produce a
# range with values 50, 60, 70, 80?

values = [i for i in range(50, 80+1, 10)]

print(values)


# What parameters should be sent to the range constructor, to produce a
# range with values 8, 6, 4, 2, 0, −2, −4, −6, −8?

# values2 = [i for i in range(8, -8)]

for i in range(8, -8 - 1, -2):
  print(i)


# Demonstrate how to use Python’s list comprehension syntax to produce
# the list [1, 2, 4, 8, 16, 32, 64, 128, 256].


result = [2**i for i in range (0, 9)] # the idea is the exponential growth

print(result)