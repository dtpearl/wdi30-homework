print "Enter a number: "
number = gets.to_f

message = ""

message += "Pling " if number % 3 == 0
message += "Plang " if number % 5 == 0
message += "Plong " if number % 7 == 0
message = number.to_s if number % 3 != 0 && number % 5 != 0 && number % 7 != 0

message = message + "\n"
print message
