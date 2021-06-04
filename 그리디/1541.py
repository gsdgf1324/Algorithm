def cal(strs):
    result = 0
    splitP = strs.split('+')
    for i in range(len(splitP)):
        result += int(splitP[i])

    return result

N = input()
splitM = N.split('-')

answerM = cal(splitM[0])

if len(splitM) > 1:
    for i in range(1, len(splitM)):
        answerM -= cal(splitM[i])

print(answerM)
