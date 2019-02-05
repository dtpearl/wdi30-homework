
class SimpleSums
  #before we add any methods to this class, we want to be able to give it some initial data
  #In this case, we want the class SimpleSums to know the number
  #we add a method called initialize to the class, and this method accepts a single argument num
  def initialize num
    #num is a local variable, it only exists within its scope (current block)
    #@num is an instance variable, and is available to all methods with the class
    @num = num
  end

  def s1
    #% is the modulo operator. The result of @num % 2 is the remainder of @num / 2
    #@num % 2 is often a good way of determining if a number @num is even or odd
    @num % 2
  end

  def s2
    #calculate sum from 1 to n => n*(n +1)/2
    # (@num*(@num +1))/2
    
    # Or use Ruby Ranges
    #two-dot operator - from the beginning to the end inclusively
    #use sum method to calculate sum
    (1..@num).sum
  end

end


#Whenever you call the method new on a class, as in SimpleSums.new, the class will create a new instance of itself. It will then, internally, call the method initialize on the new object. Doing so it will simply pass all the arguments that you passed to new on to the method initialize.

#create new object called sum
sum = SimpleSums.new(4)

#p vs puts
#p calls inspect method on the object and return it
#puts change the output to string(calls to_s method on the object) and reutnr nil
p sum.s1
p sum.s2
