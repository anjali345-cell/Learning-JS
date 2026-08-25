#Lists
list = [1, 2, 3, 4, 5]

largest = list[0]
second_largest = list[0]

for i in list:
    if i > largest:
         second_largest = largest
         largest = i
    elif i > second_largest:
         second_largest = i


print(second_largest, largest)
