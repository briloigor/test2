'use strict';

let money, time;

function start () {
    money = +prompt("Ваш бюджет на месяц?", " ");
    time = prompt("Введите дату в формате YYYY-MM-DD","YYYY-MM-DD");

    while (isNaN(money) || money == "" || money == null) {
        money = +prompt("Ваш бюджет на месяц?", " ");
    }
}
start();

let appData = {
badget: money,
timeData: time,
expenses: {},
optionalExpenses: {},
income: [],
savings: true,
chooseExpenses: function() {
    for (let i = 0; i<2; i++) {
        let a = prompt("Введите обязательную статью расходов в этом месяце",""),
            b = prompt("Во сколько обойдется?","");
    
            if (typeof(a) === 'string' && typeof(a) != null && typeof(b) != null
                && a != '' && b != '' && a.length < 50) {
                appData.expenses[a] = b;
            } else { 
                alert ("попробуйте снова.")
                i--;
            }
    };
},
detectDayBudget: function() {
    appData.moneyPerDay = (appData.badget / 30).toFixed(2);
    alert("Бюджет на день - " + appData.moneyPerDay);
},
detectLevel: function() {
    if (appDate.moneyPerDay < 100) {
        console.log ("Минимальній уровень достатка")
    } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
        console.log("средний уровень");
    } else if (appData.moneyPerDay > 2000) {
        console.log( "dohuia" )
    } else {
        console.log("error");
    }
},
checkSavings: function() {
    if (appData.savings == true) {
        let save = +prompt("Какова сумма накоплений?"),
            percent = +prompt("Какой процент?");

            appData.mothIncome = save/100/12*percent;
            alert("Доход в месяц с депозита: " + appData.mothIncome);
    }
},
chooseOptExpenses: function() {
   for (let i = 0; i<3; i++) {
    let opt = prompt("статья необязательных расходов?","");
    appData.optionalExpenses[i] = opt;}
},
chooseIncome: function(){
    for (let i = 0; i<1; i++) {
    let items = promt('Что принесет дополнительный доход? (Перечислите через запятую)','');
    if (typeof(items) === 'string' && typeof(items) != null
    && items != '') {
        appData.income = items.split(', ');
    } else { 
        alert ("попробуйте снова.");
        i--;
    };
    }
    appData.income.push(promt('Может что-то еще?',''));
    appData.income.sort(); 
    
    appData.income.forEach(function (item, i, arr) {
        alert ("Способ доп. заработка " + i+1 + ": " + item);
    });
}
};

for (const key in appData) {
    console.log("наша программа включает в себя: " + key);
}
