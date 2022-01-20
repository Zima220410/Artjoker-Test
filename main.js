function calcSumOfBonus(num) {

    let mus = [];
    let digit = 10000000;

    let sumOddNumbers, sumEvenNumbers = 0;

    for (let i = 0; i < 8; i++) {
        mus.push(parseInt(num / digit));
        num %= digit;
        digit /= 10;
    }

    function pairOddNumbersTogether(i) {
        return (mus[i] % 2 == 1 && mus[i + 1] % 2 == 1);
    }

    for (let i = 0; i < 8; i++) {
        if (pairOddNumbersTogether(i) && mus[i + 2] % 2 == 0 && mus[i] < mus[i + 1]) {
            for (let j = i + 3; j < 8; j++) {
                if (pairOddNumbersTogether(j) && mus[j] < mus[j + 1]) {
                    return "2000";
                }
            }
        }
    }
    for (let i = 0; i < 8; i++) {
        if (pairOddNumbersTogether(i) && mus[i + 2] % 2 == 0) {
            for (let j = i + 3; j < 8; j++) {
                if (pairOddNumbersTogether(j)) {
                    return "1000";
                }
            }
        }
    }
    for (let i = 0; i < 8; i++) {
        if (mus[i] % 2 == 0) {
            sumOddNumbers++;
        } else {
            sumEvenNumbers++;
        }
    }
    if (sumOddNumbers > sumEvenNumbers) {
        return "100";
    } else {
        return "0"
    }
}
calcSumOfBonus(11435279);