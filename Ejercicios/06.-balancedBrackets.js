function isBalancedBrackets(str) {
    const stack = [];
    const pairs = {
        '(': ')',
        '{': '}',
        '[': ']'
    }

    for (let char of str) {
        if (char === '(' || char === '{' || char === '[') {
            stack.push(char);
        }
        else if (char === ')' || char === '}' || char === ']') {
            if (stack.length === 0 || pairs[stack.pop()] !== char) {
                return false; // Unmatched closing bracket
            }
        }
    }
    return stack.length === 0; // If stack is empty, brackets are balanced
}

console.log(isBalancedBrackets("()({}[])")); // true