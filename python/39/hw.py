months = ["January", "February", "March", "April", "May", "June",
          "July", "August", "September", "October", "Novermber", "December"]
days_in_months = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]

tuple_months = ("January", "February", "March", "April", "May", "June",
                "July", "August", "September", "October", "Novermber", "December")
tuple_days = (31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31)

for month, day in zip(months, days_in_months):
    print(month, day)

for month, day in zip(tuple_months, tuple_days):
    print(month, day)


month_dict = {
    'January': 31,
    'February': 28,
    'March': 31,
    'April': 30,
    'May': 31,
    'June': 30,
    'July': 31,
    'August': 31,
    'September': 30,
    'October': 31,
    'November': 30,
    'December': 31
}
for days in month_dict:
    print(days)


def amount_of_days(name_of_month):
    if name_of_month in ('January', 'March', 'May', 'July', 'August', 'October', 'December'):
        print(31)
    elif name_of_month in ('April', 'June', 'September', 'November'):
        print(30)
    elif name_of_month in ('February'):
        print(28)
    else:
        print("invalid entry")


amount_of_days('January')
amount_of_days('May')
amount_of_days('April')
amount_of_days('fish')
amount_of_days('February')
