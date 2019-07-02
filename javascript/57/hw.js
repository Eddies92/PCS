(function () {
    'use strict';

    function account() {
        return {
            balance: 0
        }
    }

    function transaction(amount) {
        this.balance += amount;
        console.log(this.balance);
    }

    let account1 = account();
    let account2 = account();

    transaction.call(account1, 50);
    transaction.call(account1, 75);
    transaction.call(account2, 4500);
}());