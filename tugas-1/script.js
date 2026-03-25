const participants = [];

const form = document.getElementById("registration-form");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const levelSelect = document.getElementById("level");
const waCheckbox = document.getElementById("join-wa");
const participantsList = document.getElementById("participants-list");
const errorEl = document.getElementById("error-message");
const successEl = document.getElementById("success-message");

function renderParticipants() {
    participantsList.innerHTML = "";

    for (const p of participants) {
        const li = document.createElement("li");

        li.textContent = `${p.name} – ${p.level} ${p.joinWA ? "(Join WA group)" : ""}`;

        participantsList.appendChild(li);
    }
}

function addParticipant(participant) {
    participants.push(participant);
    renderParticipants();
}

form.addEventListener("submit", (event) => {
    event.preventDefault();

    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const level = levelSelect.value;
    const joinWA = waCheckbox.checked;

    if (!name || !email) {
        errorEl.textContent = "Name and email are required.";
        successEl.textContent = "";
    }

    if (!email.includes("@")) {
        errorEl.textContent = "Please enter a valid email address.";
        successEl.textContent = "";
        return;
    }

    errorEl.textContent = "";

    addParticipant({ name, email, level, joinWA });

    form.reset();

    successEl.textContent = "Registration submitted!";

    setTimeout(() => {
        successEl.textContent = "";
    }, 3000);
});

renderParticipants();