def cigar_party(cigars, is_weekend):
  return cigars >= 40 if is_weekend else 40 <= cigars <= 60


def date_fashion(you, date):
    if you <= 2 or date <= 2:
        return 0
    if you >= 8 or date >= 8:
        return 2
    return 1


def squirrel_play(temp, is_summer):
    upper_limit = 100 if is_summer else 90
    return 60 <= temp <= upper_limit


def caught_speeding(speed, is_birthday):
    limit1, limit2 = (65, 85) if is_birthday else (60, 80)
    if speed <= limit1:
        return 0  
    elif speed <= limit2:
        return 1  
    else:
        return 2  


def sorta_sum(a, b):
    total = a + b
    return 20 if 10 <= total <= 19 else total

def alarm_clock(day, vacation):
    if vacation:
        return "10:00" if 1 <= day <= 5 else "off"
    else:
        return "7:00" if 1 <= day <= 5 else "10:00" 


def love6(a, b):
  return a == 6 or b == 6 or a + b == 6 or abs(a - b) == 6

def in1to10(n, outside_mode):
  if outside_mode:
    return n <= 1 or n >= 10
  return 1 <= n <= 10


def near_ten(num):
  return num % 10 <= 2 or num % 10 >= 8
