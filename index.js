function splitFancyText() {
  // Get all the elements with id "fancy-text"
  const fancyTextElements = document.querySelectorAll('#fancy-text');

  // Split the content of each element into spans
  fancyTextElements.forEach((element) => {
    // Get the element's text content
    const text = element.textContent;

    // Split the text into individual characters
    const characters = text.split('');

    // Replace the element's content with the characters wrapped in spans
    element.innerHTML = characters
      .map(
        (char, idx) =>
          `<span style="--index: ${idx};" class="letter">${char}</span>`
      )
      .join('');
  });
}

splitFancyText();
