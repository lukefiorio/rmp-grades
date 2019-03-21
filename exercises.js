//Create a Revealing Module Pattern that will have the following data and methods:

//data
//scores 65, 76, 100, 88, 17, 55

//methods
// 1. finds the sum of all scores
// 2. finds the avg of all scores
// 3. finds the highest score
// 4. finds the lowest score
// 5. generates a random score
// 6. finds the number of passing scores above 70
// 7. finds the first score in the list 
// 8. finds the last score in the list 
// 9. generates a new score list with a 5% increase for each score 
// 10.generates a list of scores that are odd numbered


var secretModule = (function() {

    var scores = [65,76,100,88,17,55];

    function add(a,b) { return a+b };
    function top(a,b) { return Math.max(a,b) };
    function low(a,b) { return Math.min(a,b) };

    function sumScores() {
        return scores.reduce(add);
    }

    function avgScore() {
        return scores.reduce(add) / scores.length;
    }

    function highScore() {
        return scores.reduce(top);
    }

    function lowScore() {
        return scores.reduce(low);
    }

    function randScore() {
        
    }

    return {
        sumTotal: sumScores,
        meanScore: avgScore,
        topScore: highScore,
        botScore: lowScore
    }


}())


console.log(secretModule.sumTotal());
console.log(secretModule.meanScore());
console.log(secretModule.topScore());
console.log(secretModule.botScore());