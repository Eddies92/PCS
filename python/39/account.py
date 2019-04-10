class bank_account:
    amount_of_accounts = 0

    def __init__(self, name, account_num, balance):
        self.name = name
        self.account_num = account_num
        self.balance = balance
        amount_of_accounts += 1

    def get_name(self):
        print(self.name)

    def get_account_num(self):
        print(self.account_num)

    def get_balance(self):
        print(self.balance)

    def set_name(self, name):
        self.name = name

    def set_account_num(self, account_num):
        self.account_num = account_num

    def set_balance(self, name):
        self.balance = balance

    @classmethod
    def get_amount_of_accounts(cls):
        print(amount_of_account)
