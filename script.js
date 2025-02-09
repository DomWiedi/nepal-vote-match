// Fetch questions data from JSON
fetch('questions.json')
    .then(response => response.json())
    .then(questions => {

        // Fetch parties data from JSON
        fetch('parties.json')
            .then(response => response.json())
            .then(parties => {

                let currentQuestion = 0;
                let answers = [];

                function startQuiz() {
                    document.getElementById("landingPage").style.display = "none";
                    document.getElementById("quizPage").style.display = "block";
                    showQuestion();
                }

                function showQuestion() {
                    if (currentQuestion >= questions.length) {
                        document.getElementById("quizPage").innerHTML = '<button onclick="showResults()">Take me to the result</button>';
                        return;
                    }
                    document.getElementById("questionNumber").innerText = `${currentQuestion + 1} / ${questions.length}`;
                    document.getElementById("questionSummary").innerText = questions[currentQuestion].summary;
                    document.getElementById("questionText").innerText = questions[currentQuestion].text;
                }

                function answer(response) {
                    answers.push(response);
                    currentQuestion++;
                    showQuestion();
                }

                function showResults() {
                    document.getElementById("quizPage").style.display = "none";
                    document.getElementById("resultPage").style.display = "block";
                    let resultList = document.getElementById("resultList");
                    resultList.innerHTML = "";

                    let results = {};
                    for (const partyName in parties) {
                        let matchCount = 0;
                        for (let i = 0; i < questions.length; i++) {
                            if (parties[partyName][questions[i].summary] === answers[i]) {
                                matchCount++;
                            }
                        }
                        results[partyName] = (matchCount / questions.length) * 100;
                    }

                    const sortedResults = Object.entries(results)
                        .sort(([, a], [, b]) => b - a)
                        .map(([name, match]) => ({ name, match }));

                    sortedResults.forEach(r => {
                        let li = document.createElement("li");
                        li.innerText = `${r.name}: ${r.match.toFixed(0)}% match`;
                        resultList.appendChild(li);
                    });
                }

                function restartQuiz() {
                    currentQuestion = 0;
                    answers = [];
                    document.getElementById("resultPage").style.display = "none";
                    document.getElementById("landingPage").style.display = "block";
                }

                // Event listeners after DOM is loaded
                document.addEventListener('DOMContentLoaded', (event) => {
                    document.getElementById("startQuizButton").addEventListener("click", startQuiz);
                    document.getElementById("agreeButton").addEventListener("click", () => answer("agree"));
                    document.getElementById("neutralButton").addEventListener("click", () => answer("neutral"));
                    document.getElementById("disagreeButton").addEventListener("click", () => answer("disagree"));
                    document.getElementById("restartButton").addEventListener("click", restartQuiz);
                });

            }); // End of parties fetch

    }); // End of questions fetch