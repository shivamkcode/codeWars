/*Your function takes two arguments:

current father's age (years)
current age of his son (years)
Сalculate how many years ago the father was twice as old as his son (or in how many years he will be twice as old). The answer is always greater or equal to 0, no matter if it was in the past or it is in the future.*/

function twiceAsOld(dad, son) {

    for (let i = 0; i <= dad; dad/2 > son ? i++: i--) {
        if (son + i == (dad + i)/2) {
            return i >= 0 ? i: -i
        }
    }
}

