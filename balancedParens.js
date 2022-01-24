// Sample Strings
let sample1 = "This ( is unbalanced."
let sample2 = "(This (is (a) balanced) string.)"
let sample3 = "This is () also ) unbalanced."
let sample4 = "Balanced."

// Write your solution below:

function checkBalancePerenthisis(str) {
    let open = 0
    let close = 0
    for (let i = 0; i < str.length; i++) {
        if (str[i] === "(") {
            open += 1
        } else if (str[i] === ")") {
            close += 1
        }
    };
    return open === close
};

console.log(checkBalancePerenthisis(sample1))
console.log(checkBalancePerenthisis(sample2))
console.log(checkBalancePerenthisis(sample3))
console.log(checkBalancePerenthisis(sample4))