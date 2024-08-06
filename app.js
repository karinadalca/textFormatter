document.addEventListener('DOMContentLoaded', () => {
    const inputText = document.getElementById('inputText');
    const outputText = document.getElementById('outputText');
    const removeSpaces = document.getElementById('removeSpaces');
    const removeLineBreaks = document.getElementById('removeLineBreaks');
    const formatButton = document.getElementById('formatButton');

    formatButton.addEventListener('click', () => {
        let formattedText = inputText.value;

        if (removeSpaces.checked) {
            formattedText = formattedText.replace(/\s+/g, '');
        }

        if (removeLineBreaks.checked) {
            formattedText = formattedText.replace(/(\r\n|\n|\r)/gm, '');
        }

        outputText.value = formattedText;
    });
});