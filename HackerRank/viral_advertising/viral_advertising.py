# Day 1 start with 5 people, floor(half of them) like it, each one share it to 3 
# Day 2 people now know the ad, half like, each share with 3
# keep looping till nth day

from math import floor


def viral_advertising(n):
  shared = 5
  liked = 0
  for i in range(n):
    new_likes = floor(shared/2)
    liked += new_likes
    shared = new_likes * 3
  return liked
    


viral_advertising(5)