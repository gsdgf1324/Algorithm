# A-5분 B-1분 C-10초
N = int(input())

if N%10 ==0:
    print('{} {} {}'.format(N//300, N%300//60, N%60//10))
else:
    print(-1)
