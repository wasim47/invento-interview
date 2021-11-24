var twoPairValues = [
    [1, 5],
    [9, -7],
    [0, 8],
    [6, 3],
    [4, 11],
    [14, 0],
    [8, 1],
    [4, 9],
    ];
    var targetValue = 9;

    //console.dir(twoPairValues);

    
    let arrayval = function (twoPairValues, targetValue){
        let sum = 0;
        for (let i = 0; i < twoPairValues[0].length; i++) {
            sum += twoPairValues[i][0];
        }
        console.log(sum);
        //console.log(twoPairValues[1].length);
    }
        var result = arrayval(twoPairValues, targetValue);
        //console.dir(result); //result will be shown 6