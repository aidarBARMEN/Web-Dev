def make_bricks(small, big, goal):
    use_big = min(big, goal // 5)
    return goal - (use_big * 5) <= small


def lone_sum(a, b, c):
  return sum(x for x in (a, b, c) if (a, b, c).count(x) == 1)


def lucky_sum(a, b, c):
    if a == 13:
        return 0
    if b == 13:
        return a
    if c == 13:
        return a + b
    return a + b + c



def round10(num):
    return (num + 5) // 10 * 10

def round_sum(a, b, c):
    return round10(a) + round10(b) + round10(c)


def close_far(a, b, c):
    close = lambda x: abs(a - x) <= 1
    far = lambda x, y: abs(a - x) >= 2 and abs(b - x) >= 2
    return (close(b) and far(c, b)) or (close(c) and far(b, c))



def make_chocolate(small, big, goal):
    m = min(big, goal // 5)
    r = goal - m * 5
    return r if r <= small else -1
