const questions = [
    { "summary": "Constitution", "text": "Should the new constitution be amended to allow for a stronger central government?" },
    { "summary": "China Relations", "text": "Should Nepal cooperate more closely with China economically?" },
    { "summary": "India Relations", "text": "Should Nepal cooperate more closely with India economically?" },
    { "summary": "Federalism", "text": "Should federalism be maintained in Nepal?" },
    { "summary": "Monarchy", "text": "Should the idea of a monarchy be discussed again in Nepal?" },
    { "summary": "Army Size", "text": "Should the army be reduced in size?" },
    { "summary": "Local Elections", "text": "Should the local election process be simplified?" },
    { "summary": "Welfare System", "text": "Should there be a general social system with a minimum income?" },
    { "summary": "Tourism", "text": "Should tourism be more strongly promoted by the state?" },
    { "summary": "Media Regulation", "text": "Should access to private media be more strictly regulated?" },
    { "summary": "Religious Influence", "text": "Should the influence of religious groups on politics be reduced?" },
    { "summary": "Environmental Regulations", "text": "Should there be stricter environmental regulations for businesses?" },
    { "summary": "Renewable Energies", "text": "Should the use of renewable energies become mandatory?" },
    { "summary": "Infrastructure", "text": "Should there be more state investment in infrastructure?" },
    { "summary": "Free Education", "text": "Should education from primary school onwards be free?" },
    { "summary": "Subsidized Health", "text": "Should the health system be more strongly subsidized?" },
    { "summary": "Foreign NGO Influence", "text": "Should the influence of foreign NGOs be restricted?" },
    { "summary": "Voting Age", "text": "Should the minimum voting age be lowered?" },
    { "summary": "Corruption Punishment", "text": "Should corruption be punished more severely?" },
    { "summary": "Women in Politics", "text": "Should there be a quota for women in political offices?" }
];

const parties = {
    "Nepali Congress (NC)": { "Constitution": "disagree", "China Relations": "neutral", "India Relations": "agree", "Federalism": "agree", "Monarchy": "disagree", "Army Size": "neutral", "Local Elections": "agree", "Welfare System": "agree", "Tourism": "agree", "Media Regulation": "disagree", "Religious Influence": "agree", "Environmental Regulations": "agree", "Renewable Energies": "agree", "Infrastructure": "agree", "Free Education": "agree", "Subsidized Health": "agree", "Foreign NGO Influence": "neutral", "Voting Age": "neutral", "Corruption Punishment": "agree", "Women in Politics": "agree" },
    "CPN-UML": { "Constitution": "agree", "China Relations": "agree", "India Relations": "neutral", "Federalism": "disagree", "Monarchy": "disagree", "Army Size": "disagree", "Local Elections": "agree", "Welfare System": "neutral", "Tourism": "agree", "Media Regulation": "agree", "Religious Influence": "agree", "Environmental Regulations": "neutral", "Renewable Energies": "agree", "Infrastructure": "agree", "Free Education": "agree", "Subsidized Health": "neutral", "Foreign NGO Influence": "agree", "Voting Age": "disagree", "Corruption Punishment": "agree", "Women in Politics": "disagree" },
    "CPN-MC": { "Constitution": "agree", "China Relations": "agree", "India Relations": "disagree", "Federalism": "agree", "Monarchy": "disagree", "Army Size": "agree", "Local Elections": "agree", "Welfare System": "agree", "Tourism": "agree", "Media Regulation": "agree", "Religious Influence": "agree", "Environmental Regulations": "agree", "Renewable Energies": "agree", "Infrastructure": "agree", "Free Education": "agree", "Subsidized Health": "agree", "Foreign NGO Influence": "agree", "Voting Age": "agree", "Corruption Punishment": "agree", "Women in Politics": "agree" },
    "RSP": { "Constitution": "neutral", "China Relations": "disagree", "India Relations": "agree", "Federalism": "neutral", "Monarchy": "neutral", "Army Size": "agree", "Local Elections": "agree", "Welfare System": "disagree", "Tourism": "agree", "Media Regulation": "disagree", "Religious Influence": "neutral", "Environmental Regulations": "neutral", "Renewable Energies": "agree", "Infrastructure": "agree", "Free Education": "agree", "Subsidized Health": "neutral", "Foreign NGO Influence": "agree", "Voting Age": "agree", "Corruption Punishment": "agree", "Women in Politics": "neutral" },
    "RPP": { "Constitution": "agree", "China Relations": "disagree", "India Relations": "agree", "Federalism": "disagree", "Monarchy": "agree", "Army Size": "disagree", "Local Elections": "neutral", "Welfare System": "disagree", "Tourism": "agree", "Media Regulation": "agree", "Religious Influence": "disagree", "Environmental Regulations": "disagree", "Renewable Energies": "disagree", "Infrastructure": "agree", "Free Education": "agree", "Subsidized Health": "disagree", "Foreign NGO Influence": "agree", "Voting Age": "disagree", "Corruption Punishment": "agree", "Women in Politics": "disagree" }
};

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

document.addEventListener('DOMContentLoaded', (event) => {
    document.getElementById("startQuizButton").addEventListener("click", startQuiz);
    document.getElementById("agreeButton").addEventListener("click", () => answer("agree"));
    document.getElementById("neutralButton").addEventListener("click", () => answer("neutral"));
    document.getElementById("disagreeButton").addEventListener("click", () => answer("disagree"));
    document.getElementById("restartButton").addEventListener("click", restartQuiz);
});
