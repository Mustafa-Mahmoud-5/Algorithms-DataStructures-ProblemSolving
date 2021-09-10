def angry_professor(k, a):
  on_time_students = 0
  for time in a:
    if(time <= 0):
      on_time_students = on_time_students + 1
  if(on_time_students >= k):
    return "NO"
  return "YES"

k = 3 # minimum number to make the class continue
a = [-2, -1, 0, 1, 2] #-ve means on time, +ve means late

angry_professor(k, a)