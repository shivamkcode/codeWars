/*Complete the function, which calculates how much you need to tip based on the total amount of the bill and the service.

You need to consider the following ratings:

Terrible: tip 0%
Poor: tip 5%
Good: tip 10%
Great: tip 15%
Excellent: tip 20%
The rating is case insensitive (so "great" = "GREAT"). If an unrecognised rating is received, then you need to return:

"Rating not recognised" in*/

function calculateTip(amount, rating) {
    rating = rating.toLowerCase()
    return rating === 'terrible' ? 0:
    rating === 'poor' ? Math.ceil(amount * 0.05):
    rating === 'good' ? Math.ceil(amount * 0.1):
    rating === 'great' ? Math.ceil(amount * 0.15):
    rating === 'excellent' ? Math.ceil(amount * 0.2): 'Rating not recognised'
}

const TIPS = {
    "terrible": 0.0,
    "poor": 0.05,
    "good": 0.1,
    "great": 0.15,
    "excellent": 0.2
};

const calculateTip = (amount, rating) => {
    rating = rating.toLowerCase();

    return rating in TIPS ? Math.ceil(TIPS[rating] * amount): "Rating not recognised";
};