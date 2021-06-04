n = int(input())
L = list(map(int, input().split()))
L.sort()

result = 0
sumValue = 0
for i in range(n):
    sumValue += L[i]
    result+= sumValue

print(result)