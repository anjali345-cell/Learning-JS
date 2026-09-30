# Exception handling

a = int(input("Enter a number: "))

try: 
    print(10/a)

except Exception as err:
    print("sorry there is an error in your code: {err}")

print("Program continues after exception handling.")