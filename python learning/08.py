# Exception handling

a = int(input("Enter a number: "))

try: 
    print(10/a)

except ZeroDivisionError:
    print("You cannot divide by zero!")

print("Program continues after exception handling.")