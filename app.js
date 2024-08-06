document.addEventListener('DOMContentLoaded', () => {
    const inputText = document.getElementById('inputText');
    const outputText = document.getElementById('outputText');
    const removeSpaces = document.getElementById('removeSpaces');
    const removeLineBreaks = document.getElementById('removeLineBreaks');
    const uppercaseAll = document.getElementById('uppercaseAll');
    const lowercaseAll = document.getElementById('lowercaseAll');
    const capitalizeSentences = document.getElementById('capitalizeSentences');
    const capitalizeWords = document.getElementById('capitalizeWords');
    const formatButton = document.getElementById('formatButton');

    formatButton.addEventListener('click', () => {
        let formattedText = inputText.value;

        if (removeSpaces.checked) {
            formattedText = formattedText.replace(/\s+/g, '');
        }

        if (removeLineBreaks.checked) {
            formattedText = formattedText.replace(/(\r\n|\n|\r)/gm, ' ');
        }

        if (uppercaseAll.checked) {
            formattedText = formattedText.toUpperCase();
        }

        if (lowercaseAll.checked) {
            formattedText = formattedText.toLowerCase();
        }

        if (capitalizeSentences.checked) {
            formattedText = formattedText.replace(/(?:^|[\.\!\?]\s+)([a-z])/g, (match, p1) => p1.toUpperCase());
        }

        if (capitalizeWords.checked) {
            formattedText = formattedText.replace(/\b\w/g, char => char.toUpperCase());
        }

        outputText.value = formattedText;
    });
});
