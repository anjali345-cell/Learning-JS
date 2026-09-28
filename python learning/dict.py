#dictionaries : disctionaries are used to store data in key value pairs ( looks like sets but sets are unordered and do not have key value pairs)
#formats , in dictionaries we key are unique and values can be duplicated
d = {1:"hello", 2:"world", 3:"mello"}
d[1] = 1000
d.update({4:"new value"})
print(d)

# to create a shallow copy of a dictionary we can use the copy() method
a = [1,2,3,4,5]
b = a.copy()
print(b)