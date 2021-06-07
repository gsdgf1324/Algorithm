N = int(input())
values = list(int(input()) for _ in range(N))
values.sort()

answer = 0
for i in range(len(values)):
    temp = values[i] * (len(values)-i)
    if temp > answer:
        answer = temp

print(answer)