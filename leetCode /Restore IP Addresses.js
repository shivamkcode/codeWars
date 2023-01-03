/*A valid IP address consists of exactly four integers separated by single dots. Each integer is between 0 and 255 (inclusive) and cannot have leading zeros.

For example, "0.1.2.201" and "192.168.1.1" are valid IP addresses, but "0.011.255.245", "192.168.1.312" and "192.168@1.1" are invalid IP addresses.
Given a string s containing only digits, return all possible valid IP addresses that can be formed by inserting dots into s. You are not allowed to reorder or remove any digits in s. You may return the valid IP addresses in any order.

Example 1:

Input: s = "25525511135"
Output: ["255.255.11.135","255.255.111.35"]
Example 2:

Input: s = "0000"
Output: ["0.0.0.0"]
Example 3:

Input: s = "101023"
Output: ["1.0.10.23","1.0.102.3","10.1.0.23","10.10.2.3","101.0.2.3"]*/

function restoreIP(s) {
    const valid = str => {
        if (str === '0') true
        if (str[0] === '0') false
        return parseInt(str) <= 255
    }
    let rVal = [];
    for (let i = 1; i < 4 && i < s.length - 2; i++) {
        const fir = s.substring(0, i);
        if (!valid(fir)) continue;

        for (let j = i + 1; j < i + 4 && j < s.length - 1; j++) {
            const sec = s.substring(i, j);
            if (!valid(sec)) continue;

            for (let k = j + 1; k < j + 4 && k < s.length; k++) {
                const thir = s.substring(j, k);
                if (!valid(thir)) continue;
                const forth = s.substring(k);
                if (forth.length > 3 || !valid(forth)) continue;

                rVal.push([fir, sec, thir, forth].join('.'))
            }
        }
    }
    return rVal;
}
console.log()