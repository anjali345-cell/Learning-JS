#1. Accept two numbers and print the greatest between them

# num1 = int(input("Enter a numbers A:"))
# num2 = int(input("Enter a numbers B:"))

# if num1 > num2:
#      print(f"{num1} is greater than {num2}")
# elif num2 > num1:
#      print(f"{num2} is greater than {num1}")
# else:
#      print("A and B are equal")


#2. Accept the gender from the user as char and print the respective greeting message
#Ex- Good morning sir, Good morning ma'am

# gender = input("Gender:")

# if gender == "male":
#     print("Hello sir")
# elif gender == "female":
#     print("Hello ma'am")
# else:
#     print("Unidentified gender")


#3. Accept an integer number from the user and check whether it is even or odd

num = int(input("Enter a number: "))
if num % 2 == 0:
    print(f"{num} is even")
else:
    print(f"{num} is odd")