N,K=map(int,input().split())
values = list(int(input()) for _ in range(N))
values.reverse()
result = 0
for i in range(len((values))):
    result += K//values[i]
    K = K%values[i]
    if K == 0:
        break;
print(result)