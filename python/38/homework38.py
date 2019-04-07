import random
for row in range(1, 11,):
    for col in range(1, 11,):
        print(col*row, " ", end="")
    print()

num = random.randint(1, 101)
print(num)

while True:
    guess = int(input("Choose a number between 1 and 100"))
    if guess == num:
        print("You got it!")
        break
    elif guess < 1:
        print("You quit")
        break
    elif guess > num:
        print("Too high!")
    elif guess < num:
        print("Too low!")
