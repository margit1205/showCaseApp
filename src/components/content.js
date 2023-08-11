import React, { useEffect } from 'react';

function generateParagraphs(jsonObjects) {
  let paragraphsHTML = '';

  for (const obj of jsonObjects) {
    paragraphsHTML += `
      <div class="integration-content">
        <h5><i class="fas fa-icons"></i>Wizard</h5>
        <p>${obj.dummy}</p>
      </div>
    `;
  }

  return paragraphsHTML;
}

function ParagraphGenerator({ jsonObjects }) {
  useEffect(() => {
    const paragraphsContainer = document.getElementById('paragraphs-container');
    paragraphsContainer.innerHTML = generateParagraphs(jsonObjects);
  }, [jsonObjects]);

  return <div id="paragraphs-container"></div>;
}

export default ParagraphGenerator;
