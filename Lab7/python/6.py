n = int(input())  
data = {}  
for i in range(n):
    d = input().split()  
    data[d[0]] = list(map(float, d[1:]))  

q = input()  
print(f"{sum(data[q]) / len(data[q]):.2f}")  
