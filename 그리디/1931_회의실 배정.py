N = int(input())
lists = list(list(map(int, input().split())) for _ in range(N))
dicts = list(
    [lists[i][0], lists[i][1], lists[i][0] + lists[i][1], lists[i][1] - lists[i][0]] for i in range(len(lists)))
dicts.sort(key=lambda x: x[2])

answer = 1
eTime = dicts[0][1]
uTime = dicts[0][3]

if len(dicts) > 1:
    for i in range(1, len(dicts)):
        n_Time = dicts[i]
        if uTime <= N and eTime <= n_Time[0]:
            answer += 1
            eTime = n_Time[1]
            uTime += n_Time[3]
else:
    if uTime > N:
        answer = 0

print(answer)

# else:
#     if uTime > N:
#         answer = 0

# dicts=[[1, 4, 5, 3], [0, 6, 6, 6], [3, 5, 8, 2], [3, 8, 11, 5], [5, 7, 12, 2], [5, 9, 14, 4], [2, 13, 15, 11], [6, 10, 16, 4], [8, 11, 19, 3], [8, 12, 20, 4], [12, 14, 26, 2]]
# 11
# 1 4
# 3 5
# 0 6
# 5 7
# 3 8
# 5 9
# 6 10
# 8 11
# 8 12
# 2 13
# 12 14
