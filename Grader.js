/*Create a function that takes a number as an argument and returns a grade based on that number.

Score	Grade
Anything greater than 1 or less than 0.6	"F"
0.9 or greater	"A"
0.8 or greater	"B"
0.7 or greater	"C"
0.6 or greater	"D"
*/

function grader(score) {
    return score > 1 || score < 0.6 ? 'F':
    score >= 0.9 ? 'A':
    score >= 0.8 ? 'B':
    score >= 0.7 ? 'C': 'D'
}

const grader = s => {
    switch (true) {
        case (s > 1):
            return 'F'
            case (s >= 0.9):
                return 'A'
                case (s >= 0.8):
                    return 'B'
                    case (s >= 0.7):
                        return 'C'
                        case (s >= 0.6):
                            return 'D'
                            default:
                                return 'F'
                            }
                    }