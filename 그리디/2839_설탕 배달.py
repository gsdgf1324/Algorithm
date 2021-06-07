def checkNum(num):
    for5 = num // 5 + 1
    for3 = num // 3 + 1

    result = 10000;

    for i in range(for5):
        if (num - 5 * i) % 3 == 0:
            temp = i + (num - 5 * i) // 3
            result = temp if result > temp else result

    for i in range(for3):
        if (num - 3 * i) % 5 == 0:
            temp = i + (num - 3 * i) // 5
            result = temp if result > temp else result

    return result


number = int(input())

if 3<=number and number<=5000:
    if number == 3:
        print(1)
    elif number == 5000:
        print(1000)
    else:
        result = checkNum(number)
        result = -1 if result == 10000 else result
        print(result)
else:
    print(-1)
