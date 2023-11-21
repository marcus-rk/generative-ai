const ageInputElement = document.querySelector('#age');
const categoryElement = document.querySelector('#category');
const keywordElement = document.querySelector('#keyword');
const button = document.querySelector('button');
const generatedContainerElement = document.querySelector('.generated-container');
const listElement = document.querySelector('ul');

button.addEventListener("click", () => {
    console.log("Button clicked!");

    listElement.innerHTML = '';

    const ageString = `Generate three christmas gift ideas. Gift receiver age: ${ageInputElement.value}. `;
    const giftTypeString = `The gift should be a ${categoryElement.value} gift.`;
    const keywordsString = `The gift should be about: ${keywordElement.value}`;

    const queryPrompt = ageString + giftTypeString + keywordsString;

    getGeneratedText(queryPrompt)
        .then(generatedText => {
            // Remove the queryPrompt from the generatedText
            const slicedGeneratedText = generatedText.slice(queryPrompt.length, generatedText.length);

            const giftIdeasStringArray = getGiftIdeas(slicedGeneratedText);

            giftIdeasStringArray.forEach(giftIdeaString => {
                const giftLiElement = getGiftLiElement(giftIdeaString);
                renderGift(giftLiElement);
            });

            generatedContainerElement.classList.remove('hidden');
        });

});

function getGiftLiElement(giftIdeaString) {
    const li = document.createElement('li');
    li.innerText = giftIdeaString;

    return li;
}

function renderGift(giftLiElement) {
    listElement.appendChild(giftLiElement);
}

function getGiftIdeas(generatedText) {
    const giftIdeas = [];
    let sliceStart = 0;

    const firstIndex = generatedText.indexOf('1'); // generatedText often has /n in front

    for (let i = firstIndex; i < generatedText.length; i++) {
        if (generatedText[i] === '2') {
            const firstGiftIdea = generatedText.slice(firstIndex + 2, i-1); // remove '1. ' in start
            giftIdeas.push(firstGiftIdea);
            sliceStart = i;
        }
        if (generatedText[i] === '3') {
            const secondGiftIdea = generatedText.slice(sliceStart + 2, i-1); // remove '2. ' in start
            giftIdeas.push(secondGiftIdea);

            const thirdGiftIdea = generatedText.slice(i+2, generatedText.length); // remove '3. ' in start
            giftIdeas.push(thirdGiftIdea);
            break;
        }
    }

    return giftIdeas;
}
