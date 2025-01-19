# Declare Global variables
num1 = int(input("Enter num1: "));
num2 = int(input("Enter num2"));

# Create functions here..

def addNumbers():
    sumOfNum = num1 + num2;
    print(sumOfNum);
    
def subNumbers():
    difference = num1 - num2;
    print(difference);
    
def multiplyNumbers():
    product = num1 * num2;
    print(product);

def divideNumbers():
    quotient = num1 / num2;
    print(quotient);
    

  
#ask for choice
print("Choices : ");
print("1 - for addition");
print("2 - for subtraction");
print("3 - for multiplication");
print("4 - for division");

choice = input("Enter Choice: ");
if(choice == "1"):
    addNumbers();
elif(choice == "2"):
    subNumbers();
elif(choice == "3"):
    multiplyNumbers();
elif(choice == "4"):
    divideNumbers();
else:
    print("Invalid Choice");

