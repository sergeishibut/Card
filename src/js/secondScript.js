const words1 = [
    { german: 'die Tasse', russian: 'чашка' },
      { german: 'der Tisch', russian: 'стол' },
      
    // Добавьте здесь больше слов и переводов для массива words1
  ];
  
  //СУЩЕСТВИТЕЛЬНЫЕ 2
  const words2 = [
    { german: 'klettern', russian: 'взбираться' },
      { german: 'bummeln', russian: 'бродить, прогуливаться' },
      
    // Добавьте здесь больше слов и переводов для массива words2
  ];
  
  //ГЛАГОЛЫ
  const words3 = [
    
    { german: 'sagen', russian: 'сказать' },
      { german: 'träumen', russian: 'мечтать' },
      
    // Добавьте здесь больше слов и переводов для массива words3
  ];
  
  //ФРАЗЫ
  const words4 = [
    { german: 'Klavier spielen', russian: 'играть на пианино' },
      { german: 'normalerweise', russian: 'обычно' },
      
  ];
  
  //ПРИЛАГАТЕЛЬНЫЕ
  const words5 = [
    { german: 'gelb', russian: 'жёлтый' },
      { german: 'violett', russian: 'фиолетовый' },
      
  ];
  
  //ДОБАВЛЕННЫЕ НОВЫЕ СЛОВА
  const words6 = [
    { german: 'ab, Ab morgen muss ich arbeiten', russian: 'Я должен работать с завтрашнего для' },
    { german: 'дописать слова', russian: 'дописать слова' },
  ];
  
  const words7 = [
    { german: 'ab, Ab morgen muss ich arbeiten', russian: 'Я должен работать с завтрашнего для' },
    { german: 'дописать слова', russian: 'дописать слова' },
  ];

  const words8 = [
    { german: 'ab, Ab morgen muss ich arbeiten', russian: 'Я должен работать с завтрашнего для' },
    { german: 'дописать слова', russian: 'дописать слова' },
  ];

  const words9 = [
    { german: 'ab, Ab morgen muss ich arbeiten', russian: 'Я должен работать с завтрашнего для' },
    { german: 'дописать слова', russian: 'дописать слова' },
  ];

  const words10 = [
    { german: 'ab, Ab morgen muss ich arbeiten', russian: 'Я должен работать с завтрашнего для' },
    { german: 'дописать слова', russian: 'дописать слова' },
  ];

  const words11 = [
    { german: 'ab, Ab morgen muss ich arbeiten', russian: 'Я должен работать с завтрашнего для' },
    { german: 'дописать слова', russian: 'дописать слова' },
  ];

  const words12 = [
    { german: 'ab, Ab morgen muss ich arbeiten', russian: 'Я должен работать с завтрашнего для' },
    { german: 'дописать слова', russian: 'дописать слова' },
  ];
  
  const words13 = [
    { german: 'ab, Ab morgen muss ich arbeiten', russian: 'Я должен работать с завтрашнего для' },
    { german: 'дописать слова', russian: 'дописать слова' },
  ];

  const words14 = [
    { german: 'ab, Ab morgen muss ich arbeiten', russian: 'Я должен работать с завтрашнего для' },
    { german: 'дописать слова', russian: 'дописать слова' },
  ];

  const words15 = [
    { german: 'ab, Ab morgen muss ich arbeiten', russian: 'Я должен работать с завтрашнего для' },
    { german: 'дописать слова', russian: 'дописать слова' },
  ];

  const words16 = [
    { german: 'ab, Ab morgen muss ich arbeiten', russian: 'Я должен работать с завтрашнего для' },
    { german: 'дописать слова', russian: 'дописать слова' },
  ];

  const words17 = [
    { german: 'ab, Ab morgen muss ich arbeiten', russian: 'Я должен работать с завтрашнего для' },
    { german: 'дописать слова', russian: 'дописать слова' },
  ];

  const words18 = [
    { german: 'ab, Ab morgen muss ich arbeiten', russian: 'Я должен работать с завтрашнего для' },
    { german: 'дописать слова', russian: 'дописать слова' },
  ];

  const words19 = [
    { german: 'ab, Ab morgen muss ich arbeiten', russian: 'Я должен работать с завтрашнего для' },
    { german: 'дописать слова', russian: 'дописать слова' },
  ];

  const words20 = [
    { german: 'ab, Ab morgen muss ich arbeiten', russian: 'Я должен работать с завтрашнего для' },
    { german: 'дописать слова', russian: 'дописать слова' },
  ];

  const words21 = [
    { german: 'ab, Ab morgen muss ich arbeiten', russian: 'Я должен работать с завтрашнего для' },
    { german: 'дописать слова', russian: 'дописать слова' },
  ];

  const words22 = [
    { german: 'ab, Ab morgen muss ich arbeiten', russian: 'Я должен работать с завтрашнего для' },
    { german: 'дописать слова', russian: 'дописать слова' },
  ];

  const words23 = [
    { german: 'ab, Ab morgen muss ich arbeiten', russian: 'Я должен работать с завтрашнего для' },
    { german: 'дописать слова', russian: 'дописать слова' },
  ];

  // Объявляем переменную для отслеживания текущего массива слов
  let currentWords = words1;
  
  // Функция для обновления содержимого карточки по ID слова и перевода
  function updateCardContent(frontWordId, backTranslationId, wordsArray) {
    const frontWordElement = document.getElementById(frontWordId);
    const backTranslationElement = document.getElementById(backTranslationId);
  
    // Здесь вы можете использовать вашу логику для выбора случайного слова и перевода из массива
    const randomIndex = Math.floor(Math.random() * wordsArray.length);
    const randomWord = wordsArray[randomIndex];
  
    // Обновляем содержимое карточки с новым словом и переводом
    frontWordElement.innerText = randomWord.german;
    backTranslationElement.innerText = randomWord.russian;
  }
  
  // Вызываем функцию updateCardContent() для каждой карточки чтобы показать первое слово и перевод при загрузке страницы
  updateCardContent('frontWord1', 'backTranslation1', words1);
  updateCardContent('frontWord2', 'backTranslation2', words2);
  updateCardContent('frontWord3', 'backTranslation3', words3);
  updateCardContent('frontWord4', 'backTranslation4', words4);
  updateCardContent('frontWord5', 'backTranslation5', words5);
  updateCardContent('frontWord6', 'backTranslation6', words6);
  updateCardContent('frontWord7', 'backTranslation7', words7);
  updateCardContent('frontWord8', 'backTranslation8', words8);
  updateCardContent('frontWord9', 'backTranslation9', words9);
  updateCardContent('frontWord10', 'backTranslation10', words10);
  updateCardContent('frontWord11', 'backTranslation11', words11);
  updateCardContent('frontWord12', 'backTranslation12', words12);
  updateCardContent('frontWord13', 'backTranslation13', words13);
  updateCardContent('frontWord14', 'backTranslation14', words14);
  updateCardContent('frontWord15', 'backTranslation15', words15);
  updateCardContent('frontWord16', 'backTranslation16', words16);
  updateCardContent('frontWord17', 'backTranslation17', words17);
  updateCardContent('frontWord18', 'backTranslation18', words18);
  updateCardContent('frontWord19', 'backTranslation19', words19);
  updateCardContent('frontWord20', 'backTranslation20', words20);
  updateCardContent('frontWord21', 'backTranslation21', words21);
  updateCardContent('frontWord22', 'backTranslation22', words22);
  updateCardContent('frontWord23', 'backTranslation23', words23);
  
  let isFlipping = false; // Добавляем переменную для отслеживания состояния переворота
  
  // Функция переворота карточки
  function flipCard(frontWordId, backTranslationId, wordsArray) {
    if (isFlipping) return; // Если карточка в процессе переворота, просто выходим
  
    const card = document.getElementById(frontWordId).closest('.card');
    card.classList.toggle('flipped');
    isFlipping = true;
  
    // Добавляем обработчик события окончания анимации переворота
    card.addEventListener('transitionend', function handleTransitionEnd() {
        // После окончания анимации переворота
        if (card.classList.contains('flipped')) {
            updateCardContent(frontWordId, backTranslationId, wordsArray); // Обновляем слово и перевод только после второго клика и переворота в положение "flipped"
        }
        isFlipping = false;
        card.removeEventListener('transitionend', handleTransitionEnd); // Удаляем обработчик события после использования
    });
  }