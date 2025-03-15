def string_times(str, n):
  res = ""
  for i in range(n):  
    res += str  
  return res


def front_times(str, n):
  fr_len = 3
  if fr_len > len(str):
    fr_len = len(str)
  fr = str[:fr_len] 
  res = ""
  for i in range(n):
    res+= fr
  return res

def string_bits(str):
  res = ""
  for i in range(len(str)):
    if i % 2 == 0:
      res += str[i]
  return res

def string_splosion(str):
  res = ""
  for i in range(len(str)):
    res += str[:i+1]
  return res

def last2(str):
  if len(str) < 2:
    return 0
  last2 = str[len(str)-2:]
  cnt = 0
  for i in range(len(str)-2):
    sub = str[i:i+2]
    if sub == last2:
      cnt += 1
  return cnt

def array_count9(nums):
  cnt = 0
  for n in nums:
    if n == 9:
      cnt+= 1
  return cnt

def array_front9(nums):
  end = len(nums)
  if end > 4:
    end = 4
  for i in range(end): 
    if nums[i] == 9:
      return True
  return False


def array123(nums):
  for i in range(len(nums)-2):
    if nums[i]==1 and nums[i+1]==2 and nums[i+2]==3:
      return True
  return False

def string_match(a, b):
  s = min(len(a), len(b))
  cnt = 0
  for i in range(s-1):
    a_sub = a[i:i+2]
    b_sub = b[i:i+2]
    if a_sub == b_sub:
      cnt += 1
  return cnt
