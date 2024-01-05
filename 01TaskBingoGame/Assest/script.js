
function getRandomNumber(max) {
    return Math.floor(Math.random() * max) + 1;
  }
  

  function generateBingoCard() {
    const card = [];
    const maxNumbers = 75;
  
    while (card.length < 25) {
      const randomNumber = getRandomNumber(maxNumbers);
  

      if (!card.includes(randomNumber)) {
        card.push(randomNumber);
      }
    }
  
    return card;
  }

  function refreshCard() {
    const bingoCard = document.getElementById('bingoCard');
    const newCard = generateBingoCard();
  

    bingoCard.innerHTML = '';
  

    newCard.forEach((number, index) => {
      const cell = document.createElement('div');
      cell.className = 'cell';
      cell.textContent = number;
      bingoCard.appendChild(cell);
    });
  }

  refreshCard();
  