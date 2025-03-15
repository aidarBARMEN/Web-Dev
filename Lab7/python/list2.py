def count_evens(nums):
  return sum(1 for n in nums if n % 2 == 0)


def big_diff(nums):
  return max(nums) - min(nums)


def centered_average(nums):
    nums.sort()
    return sum(nums[1:-1]) // (len(nums) - 2)



def sum13(nums):
    s, skip = 0, False
    for n in nums:
        if n == 13:
            skip = True
        elif not skip:
            s += n
        else:
            skip = False
    return s



def sum67(nums):
    s, skip = 0, False
    for n in nums:
        if n == 6:
            skip = True
        elif n == 7 and skip:
            skip = False
        elif not skip:
            s += n
    return s


def has22(nums):
  for i in range(len(nums) - 1):
        if nums[i] == 2 and nums[i + 1] == 2:
            return True
  return False