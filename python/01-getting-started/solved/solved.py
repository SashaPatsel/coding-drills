# In python we don't need to use variable declaration key words, we just go ahead and declare the variable
first_name = input('Please enter the user\'s first name. ')
last_name = input('Please enter the user\'s last name. ')
middle_initial = input('Please enter the user\'s middle initial. ')

# Prompt user for user's contact information...
address = input('Please enter the user\'s address. ')
email = input('Please enter the user\'s email. ')
phone_number = input('Please enter the user\'s phone_number. ')

# Print a separator. This wasn't part of the assignment, so it's okay if you
# don't have this part. :)
print('-' * 18)

# Print everything to the console...
print('The user\'s first name is {0}'.format(first_name))
print('The user\'s last name is {0}'.format(last_name))
print('The user\'s middle initial is {0}'.format(middle_initial))

print('The user\'s address is {0}'.format(address))
print('The user\'s email is {0}'.format(email))
print('The user\'s phone number is {0}'.format(phone_number))

# Print a separator. 
print('-' * 18)

# Prompt for confirmation, and save what user entered.
confirmation = input('Is this information correct? (Y/n) ')