const questions = [
    { "summary": { "en": "Constitution", "ne": "संविधान" }, "text": { "en": "Should the new constitution be amended to allow for a stronger central government?", "ne": "के नयाँ संविधानलाई बलियो केन्द्र सरकारको लागि संशोधन गर्नुपर्छ?" } },
    { "summary": { "en": "China Relations", "ne": "चीन सम्बन्ध" }, "text": { "en": "Should Nepal cooperate more closely with China economically?", "ne": "के नेपालले चीनसँग आर्थिक रूपमा घनिष्ठ रूपमा सहकार्य गर्नुपर्छ?" } },
    { "summary": { "en": "India Relations", "ne": "भारत सम्बन्ध" }, "text": { "en": "Should Nepal cooperate more closely with India economically?", "ne": "के नेपालले भारतसँग आर्थिक रूपमा घनिष्ठ रूपमा सहकार्य गर्नुपर्छ?" } },
    { "summary": { "en": "Federalism", "ne": "संघीयता" }, "text": { "en": "Should federalism be maintained in Nepal?", "ne": "के नेपालमा संघीयता कायम राख्नुपर्छ?" } },
    { "summary": { "en": "Monarchy", "ne": "राजतन्त्र" }, "text": { "en": "Should the idea of a monarchy be discussed again in Nepal?", "ne": "के नेपालमा राजतन्त्रको विचारलाई फेरि छलफल गर्नुपर्छ?" } },
    { "summary": { "en": "Army Size", "ne": "सेनाको आकार" }, "text": { "en": "Should the army be reduced in size?", "ne": "के सेनाको आकार घटाउनुपर्छ?" } },
    { "summary": { "en": "Local Elections", "ne": "स्थानीय निर्वाचन" }, "text": { "en": "Should the local election process be simplified?", "ne": "के स्थानीय निर्वाचन प्रक्रियालाई सरलीकृत गर्नुपर्छ?" } },
    { "summary": { "en": "Welfare System", "ne": "कल्याणकारी प्रणाली" }, "text": { "en": "Should there be a general social system with a minimum income?", "ne": "के न्यूनतम आयसहितको सामान्य सामाजिक प्रणाली हुनुपर्छ?" } },
    { "summary": { "en": "Tourism", "ne": "पर्यटन" }, "text": { "en": "Should tourism be more strongly promoted by the state?", "ne": "के राज्यले पर्यटनलाई थप जोडदार रूपमा बढावा दिनुपर्छ?" } },
    { "summary": { "en": "Media Regulation", "ne": "सञ्चार नियमन" }, "text": { "en": "Should access to private media be more strictly regulated?", "ne": "के निजी मिडियामा पहुँचलाई थप कडाइका साथ नियमन गर्नुपर्छ?" } },
    { "summary": { "en": "Religious Influence", "ne": "धार्मिक प्रभाव" }, "text": { "en": "Should the influence of religious groups on politics be reduced?", "ne": "के राजनीतिमा धार्मिक समूहहरूको प्रभाव कम गर्नुपर्छ?" } },
    { "summary": { "en": "Environmental Regulations", "ne": "वातावरणीय नियमहरू" }, "text": { "en": "Should there be stricter environmental regulations for businesses?", "ne": "के व्यवसायका लागि थप कडा वातावरणीय नियमहरू हुनुपर्छ?" } },
    { "summary": { "en": "Renewable Energies", "ne": "नवीकरणीय उर्जाहरू" }, "text": { "en": "Should the use of renewable energies become mandatory?", "ne": "के नवीकरणीय उर्जाहरूको प्रयोग अनिवार्य गर्नुपर्छ?" } },
    { "summary": "Infrastructure", "text": "Should there be more state investment in infrastructure?" },
    { "summary": "Free Education", "text": "Should education from primary school onwards be free?" },
    { "summary": "Subsidized Health", "text": "Should the health system be more strongly subsidized?" },
    { "summary": "Foreign NGO Influence", "text": "Should the influence of foreign NGOs be restricted?" },
    { "summary": "Voting Age", "text": "Should the minimum voting age be lowered?" },
    { "summary": "Corruption Punishment", "text": "Should corruption be punished more severely?" },
    { "summary": "Women in Politics", "text": "Should there be a quota for women in political offices?" }
];

const parties = {
    "Nepali Congress (NC)": {
        "Constitution": {
            "en": "disagree",
            "ne": "असहमत"
        },
        "China Relations": {
            "en": "neutral",
            "ne": "तटस्थ"
        },
        "India Relations": {
            "en": "agree",
            "ne": "सहमत"
        },
        "Federalism": {
            "en": "agree",
            "ne": "सहमत"
        },
        "Monarchy": {
            "en": "disagree",
            "ne": "असहमत"
        },
        "Army Size": {
            "en": "neutral",
            "ne": "तटस्थ"
        },
        "Local Elections": {
            "en": "agree",
            "ne": "सहमत"
        },
        "Welfare System": {
            "en": "agree",
            "ne": "सहमत"
        },
        "Tourism": {
            "en": "agree",
            "ne": "सहमत"
        },
        "Media Regulation": {
            "en": "disagree",
            "ne": "असहमत"
        },
        "Religious Influence": {
            "en": "agree",
            "ne": "सहमत"
        },
        "Environmental Regulations": {
            "en": "agree",
            "ne": "सहमत"
        },
        "Renewable Energies": {
            "en": "agree",
            "ne": "सहमत"
