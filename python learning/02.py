# guest_list = ["abhishek", "pankaj", "rahul", "kshitij"]

# user_name = input("Enter your name(or 'exit' to quit): ").lower()
# if user_name in guest_list: print("Welcome to the party!")
# else: print("Sorry, you are not invited.")


guest_list = ["abhishek", "pankaj", "rahul", "kshitij"]

while True:
    # Everything below this line is shifted right by 4 spaces
    user_name = input("Enter your name(or 'exit' to quit): ").lower()

    if user_name == 'exit':
        print("Exiting the program.")
        break
    elif user_name in guest_list:
        print("Welcome to the party!")
    else:
        print("Sorry, you are not invited.")
