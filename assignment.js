// https://github.com/mhhakim/ph-basic-js

function kilometerToMeter(km) {
    if (km > 0) {
        var meter = km * 1000;
        return meter;
    } else {
        return `Distance can't be empty, negative or zero!`;
    }
}

function budgetCalculator(watch, phone, laptop) {
    if (watch >= 0 && phone >= 0 && laptop >= 0) {
        watchPrice = watch * 50;
        phonePrice = phone * 100;
        laptopPrice = laptop * 500;

        return watchPrice + phonePrice + laptopPrice;
    } else {
        return `You have to pass three (watch, phone & laptop) amount. Amount can be 0 but can't be empty or negative.`;
    }

}

function hotelCost(days) {
    if (days < 1) {
        return `Days can't be negative, empty or zero.`;
    } else {
        var costTotal = 0;
        if (days <= 10) {
            costTotal = days * 100;
        } else if (days <= 20) {
            costTotal = (days - 10) * 80 + 1000;
        } else {
            costTotal = (days - 20) * 50 + 1800;
        }
        return costTotal;
    }
}

function megaFriend(friends) {
    if (friends == undefined) {
        return `Friend list can't be empty.`;
    } else if (friends.length <= 0) {
        return `Friend list can't be empty.`;
    } else {
        var bigName = '';
        for (i = 0; i < friends.length; i++) {
            if (friends[i].length > bigName.length) {
                bigName = friends[i];
            }
        }
        return bigName;
    }
}