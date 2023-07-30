const words1 = [
  { german: 'klein', russian: 'маленький' },
  { german: 'groß', russian: 'большой' },
  { german: 'schlecht', russian: 'плохой' },
  { german: 'gut', russian: 'хороший' },
  { german: 'schrecklich', russian: 'ужасный' },
  { german: 'schön', russian: 'прекрасный' },
  { german: 'die Tasse', russian: 'чашка' },
  { german: 'das Schwein', russian: 'свинья' },
  { german: 'der Tisch', russian: 'стол' },
  { german: 'das Messer', russian: 'нож' },
  { german: 'die Straße', russian: 'улица' },
  { german: 'der Kühlschrank', russian: 'холодильник' },
  { german: 'sagen', russian: 'сказать' },
  { german: 'träumen', russian: 'мечтать' },
  { german: 'lesen', russian: 'читать' },
  { german: 'spielen', russian: 'играть' },
  { german: 'wohnen', russian: 'жить' },
  { german: 'treffen*', russian: 'встречать*' },
  { german: 'alle', russian: 'все' },
  { german: 'morgens', russian: 'по утрам' },
  { german: 'Klavier spielen', russian: 'играть на пианино' },
  { german: 'normalerweise', russian: 'обычно' },
  { german: 'zu Hause', russian: 'дома' },
  { german: 'aber', russian: 'но' }
  // Добавьте здесь больше слов и переводов для массива words1
];

const words2 = [
  { german: 'Bestellen', russian: 'заказывать' },
  { german: 'fragen', russian: 'спрашивать' },
  { german: 'denken', russian: 'думать' },
  { german: 'besuchen', russian: 'посещать' },
  { german: 'weinen', russian: 'плакать' },
  { german: 'gelb', russian: 'жёлтый' },
  { german: 'violett', russian: 'фиолетовый' },
  { german: 'blau', russian: 'синий, голубой' },
  { german: 'orange', russian: 'оранжевый' },
  { german: 'grün', russian: 'зелёный' },
  { german: 'die Flasche', russian: 'бутылка' },
  { german: 'der Teller', russian: 'тарелка' },
  { german: 'das Glas', russian: 'стакан' },
  { german: 'die Gabel', russian: 'вилка' },
  { german: 'der Löffel', russian: 'ложка' },
  { german: 'das Tablett', russian: 'поднос' },
  { german: 'die Suppe', russian: 'суп' },
  { german: 'der Zucker', russian: 'сахар' },
  { german: 'das Salz', russian: 'соль' },
  { german: 'der Saft', russian: 'сок' },
  { german: 'schreiben', russian: 'писать' },
  { german: 'buchstabieren', russian: 'по буквам' },
  { german: 'meinen', russian: 'иметь ввиду' },
  { german: 'reisen', russian: 'путешествовать' },
  { german: 'verstehen', russian: 'понимать' },
  { german: 'teuer', russian: 'дорого' },
  { german: 'billig', russian: 'дёшево' },
  { german: 'jetzt', russian: 'сейчас' },
  { german: 'richtig', russian: 'правильно' },
  { german: 'falsch', russian: 'неправильно' }
  // Добавьте здесь больше слов и переводов для массива words2
];

const words3 = [
  { german: 'Deutschland', russian: 'Германия' },
  { german: 'Frankreich', russian: 'Франция' },
  { german: 'Japan', russian: 'Япония' },
  { german: 'Schweden', russian: 'Швеция' },
  { german: 'Polen', russian: 'Польша' },
  { german: 'die Ukraine', russian: 'Украина' },
  { german: 'die Schweiz', russian: 'Швейцария' },
  { german: 'die USA', russian: 'США' },
  { german: 'Indien', russian: 'Индия' },
  { german: 'Russland', russian: 'Россия' },
  { german: 'das Bett', russian: 'кровать' },
  { german: 'der Arzt', russian: 'врач' },
  { german: 'die Ärztin', russian: 'врач (женщина)' },
  { german: 'schreiben', russian: 'писать' },
  { german: 'verschreiben', russian: 'прописывать' },
  { german: 'gesund', russian: 'здоровый' },
  { german: 'krank', russian: 'больной' },
  { german: 'gefährlich', russian: 'опасный' },
  { german: 'schwach', russian: 'слабый' },
  { german: 'stark', russian: 'сильный' }
  // Добавьте здесь больше слов и переводов для массива words3
];

const words4 = [
  { german: 'satt', russian: 'сытый' },
  { german: 'hungrig', russian: 'голодный' },
  { german: 'früh', russian: 'рано' },
  { german: 'spät', russian: 'поздно' },
  { german: 'neu', russian: 'новый' },
  { german: 'alt', russian: 'старый' },
  { german: 'klug', russian: 'умный' },
  { german: 'dumm', russian: 'глупый' },
  { german: 'hoch', russian: 'высокий' },
  { german: 'niedrig', russian: 'низкий' },
  { german: 'braten', russian: 'жарить' },
  { german: 'kochen', russian: 'варить' },
  { german: 'backen', russian: 'печь' },
  { german: 'salzen', russian: 'солить' },
  { german: 'schneiden', russian: 'резать' },
  { german: 'mischen', russian: 'смешивать' },
  { german: 'füttern', russian: 'кормить' },
  { german: 'rühren', russian: 'помешивать' },
  { german: 'servieren', russian: 'сервировать' },
  { german: 'frittieren', russian: 'жарить во фритюре' },
  { german: 'buchen', russian: 'бронировать' },
  { german: 'reservieren', russian: 'резервировать' },
  { german: 'stornieren', russian: 'аннулировать (заказ)' },
  { german: 'drucken', russian: 'распечатывать' },
  { german: 'leihen', russian: 'брать взаймы' },
  { german: 'bügeln', russian: 'гладить утюгом' },
  { german: 'staubsaugen', russian: 'пылесосить' },
  { german: 'aufräumen', russian: 'убираться' },
  { german: 'putzen', russian: 'чистить' },
  { german: 'waschen', russian: 'мыть, стирать' }
  // Добавьте здесь больше слов и переводов для массива words4
];

const words5 = [
  { german: 'sich rasieren', russian: 'бриться' },
  { german: 'sich waschen', russian: 'мыться' },
  { german: 'sich beeilen', russian: 'спешиться' },
  { german: 'sich kämmen', russian: 'чесаться' },
  { german: 'sich treffen', russian: 'встречаться' },
  { german: 'sich erinnern', russian: 'помнить' },
  { german: 'sich interessieren', russian: 'интересоваться' },
  { german: 'sich erholen', russian: 'отдыхать' },
  { german: 'sich verspäten', russian: 'опаздывать' },
  { german: 'sich freuen', russian: 'радоваться' },
  { german: 'der Fuchs', russian: 'лиса' },
  { german: 'das Krokodil', russian: 'крокодил' },
  { german: 'die Ratte', russian: 'крыса' },
  { german: 'der Elefant', russian: 'слон' },
  { german: 'das Pferd', russian: 'конь' },
  { german: 'der Hund', russian: 'собака' },
  { german: 'die Katze', russian: 'кошка' },
  { german: 'der Tiger', russian: 'тигр' },
  { german: 'die Maus', russian: 'мышь' },
  { german: 'der Löwe', russian: 'лев' },
  { german: 'der Kopf', russian: 'голова' },
  { german: 'die Hand', russian: 'кисть руки' },
  { german: 'das Bein', russian: 'нога' },
  { german: 'der Hals', russian: 'шея' },
  { german: 'der Zahn', russian: 'зуб' },
  { german: 'die Nase', russian: 'нос' },
  { german: 'der Bauch', russian: 'живот' },
  { german: 'das Auge', russian: 'глаз' },
  { german: 'die Brust', russian: 'грудь' },
  { german: 'der Fuß', russian: 'стопа' }
  // Добавьте здесь больше слов и переводов для массива words4
];

const words6 = [
  { german: 'der Vogel', russian: 'птица' },
  { german: 'das Huhn', russian: 'курица' },
  { german: 'die Ente', russian: 'утка' },
  { german: 'der Papagei', russian: 'папугай' },
  { german: 'die Krähe', russian: 'ворона' },
  { german: 'der Schwan', russian: 'лебедь' },
  { german: 'die Gans', russian: 'гусь' },
  { german: 'der Spatz', russian: 'воробей' },
  { german: 'die Eule', russian: 'сова' },
  { german: 'der Adler', russian: 'орёл' },
  { german: 'die Hose', russian: 'брюки' },
  { german: 'das Hemd', russian: 'рубашка' },
  { german: 'die Krawatte', russian: 'галстук' },
  { german: 'der Pullover', russian: 'пуловер' },
  { german: 'die Socke', russian: 'носок' },
  { german: 'der Hut', russian: 'шляпа' },
  { german: 'das Kleid', russian: 'платье' },
  { german: 'der Rock', russian: 'юбка' },
  { german: 'die Jacke', russian: 'куртка' },
  { german: 'der Knopf', russian: 'пуговица' },
  { german: 'die Mutter', russian: 'мать' },
  { german: 'der Vater', russian: 'отец' },
  { german: 'die Tante', russian: 'тётя' },
  { german: 'der Onkel', russian: 'дядя' },
  { german: 'die Tochter', russian: 'дочь' },
  { german: 'der Sohn', russian: 'сын' },
  { german: 'die Enkelin', russian: 'внучка' },
  { german: 'der Enkel', russian: 'внук' },
  { german: 'die Großmutter', russian: 'бабушка' },
  { german: 'der Großvater', russian: 'дедушка' }
  // Добавьте здесь больше слов и переводов для массива words4
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




