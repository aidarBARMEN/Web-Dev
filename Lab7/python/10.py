def mutate_string(s, pos, char):
    return s[:pos] + char + s[pos+1:]

s = input()
pos, char = input().split()
pos = int(pos)

print(mutate_string(s, pos, char))
