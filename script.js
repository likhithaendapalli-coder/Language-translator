async function translateText() {

    const text = document.getElementById("inputText").value;
    const sourceLang = document.getElementById("sourceLang").value;
    const targetLang = document.getElementById("targetLang").value;

    if (text.trim() === "") {
        alert("Please enter text");
        return;
    }

    try {

        const url = `https://api.mymemory.translated.net/get?q=${encodeURIComponent(text)}&langpair=${sourceLang}|${targetLang}`;

        const response = await fetch(url);
        const data = await response.json();

        document.getElementById("outputText").value =
            data.responseData.translatedText;

    } catch (error) {
        console.log(error);
        alert("Translation failed");
    }
}

function copyText() {

    const output = document.getElementById("outputText");

    if (!output.value) {
        alert("Nothing to copy");
        return;
    }

    navigator.clipboard.writeText(output.value);

    alert("Copied Successfully!");
}