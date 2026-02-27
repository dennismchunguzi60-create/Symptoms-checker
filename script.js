function checkSymptoms() {
    let fever = document.getElementById("fever").checked;
    let headache = document.getElementById("headache").checked;
    let cough = document.getElementById("cough").checked;
    let fatigue = document.getElementById("fatigue").checked;

    let resultText = "";

    if (fever && cough && fatigue) {
        resultText = "You may have Flu.";
    }
    else if (headache && fever) {
        resultText = "You may be experiencing Migraine or infection.";
    }
    else if (fatigue && !fever) {
        resultText = "You may be stressed or dehydrated.";
    }
    else {
        resultText = "Symptoms unclear. Please consult a doctor.";
    }

    document.getElementById("result").innerText = resultText;
}
body {
    font-family: Arial;
    background-color: #f4f4f4;
}