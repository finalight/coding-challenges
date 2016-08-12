var push_pop = function (initialArr, pushArr, numOfPop) {
    var finalArr;
    if (initialArr != 'undefined' && !(initialArr instanceof Array)) {
        initialArr = [];
    }

    if (pushArr != 'undefined'  && !(pushArr instanceof Array)) {
        pushArr = [];
    }

    if (numOfPop != 'undefined'  && !(numOfPop === parseInt(numOfPop))) {
        numOfPop = 0;
    } else {
        if (numOfPop < 0) {
            numOfPop = 0;
        }
    }

    finalArr = initialArr.concat(pushArr);
    for (var i = 0; i < numOfPop; i++) {
        finalArr.pop();

    }

    return finalArr;

}

 module.exports= push_pop;
