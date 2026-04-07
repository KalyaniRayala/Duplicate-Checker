// Load from localStorage or empty array
let references = JSON.parse(localStorage.getItem("refs")) || [];

function normalize(ref) {
    return ref.trim().toLowerCase()
        .replace(/^https?:\/\//, '')
        .replace(/www\./, '')
        .replace(/doi\.org\//, '')
        .replace(/\/$/, '');
}

function saveData() {
    localStorage.setItem("refs", JSON.stringify(references));
}

function updateList() {
    let list = document.getElementById("list");
    list.innerHTML = "";

    references.forEach(ref => {
        let li = document.createElement("li");
        li.innerText = ref;
        list.appendChild(li);
    });
}

function checkDuplicate() {
    let input = document.getElementById("inputRef").value;

    if (!input) {
        document.getElementById("result").innerText = "Enter a value!";
        return;
    }

    let normalizedInput = normalize(input);

    if (references.includes(normalizedInput)) {
        document.getElementById("result").innerHTML = "Duplicate Found!";
        document.getElementById("result").className = "error";
    } else {
        references.push(normalizedInput);
        saveData();
        updateList();

        document.getElementById("result").innerHTML = "New Reference Added";
        document.getElementById("result").className = "success";
    }

    document.getElementById("inputRef").value = "";
}

// Load existing data on page load
updateList();