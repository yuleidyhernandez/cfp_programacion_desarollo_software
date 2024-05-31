function countAndSay(n) {
    if (n === 1) return "1";
    let prevTerm = "1";

    for (let i = 2; i <= n; i++) {
        let count = 1;
        let currentTerm = "";

        for (let j = 0; j < prevTerm.length; j++) {
            if (prevTerm[j] === prevTerm[j + 1]) {
                count++;
            } else {
                currentTerm += count + prevTerm[j];
                count = 1;
            }
        }

        prevTerm = currentTerm;
    }

    return prevTerm;
}

console.log(countAndSay(5)); 