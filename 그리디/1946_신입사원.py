T = int(input())
answer = 0
for i in range(T):
    N = int(input())
    lists = list(list(map(int, input().split())) for _ in range(N))
    answer = 0
    for j in range(len(lists)):
        temp = 0
        for k in range(len(lists)):
            if lists[j][0] > lists[k][0] and lists[j][1] > lists[k][1]:
                temp += 1
        if answer < temp:
            answer = temp

    print(answer)


# 2 2 0 0 4 1 0