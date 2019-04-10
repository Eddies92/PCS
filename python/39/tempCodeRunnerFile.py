months = ["January", "February", "March", "April", "May", "June",
          "July", "August", "September", "October", "Novermber", "December"]
days_in_months = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]

tuple_months = ("January", "February", "March", "April", "May", "June",
                "July", "August", "September", "October", "Novermber", "December")
tuple_days = (31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31)

for month, day in zip(months, days_in_months):
    print(month, day)