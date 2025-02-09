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

function showQuestion()
