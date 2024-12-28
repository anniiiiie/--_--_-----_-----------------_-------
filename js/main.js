// function toggleContent() {
//     var sidebar = document.getElementById("sidebar")
    
//     if (sidebar.style.display === "none" || sidebar.style.display === "") {
//         sidebar.style.display = "block"; // Показываем содержимое
//     } else {
//         sidebar.style.display = "none"; // Скрываем содержимое
//     }
// }
$(document).ready(function() {
    $('#toggle-button').on('click', function() {
        $('#sidebar').toggleClass('open'); // Переключаем класс для анимации
    });
});

$(document).ready(function() {
  // Показать кнопку, когда пользователь прокручивает вниз на 100px
  $(window).scroll(function() {
      if ($(this).scrollTop() > 100) {
          $('#scrollToTop').fadeIn();
      } else {
          $('#scrollToTop').fadeOut();
      }
  });

  // Плавная прокрутка к верху страницы при нажатии на кнопку
  $('#scrollToTop').click(function() {
      $('html, body').animate({ scrollTop: 0 }, 800);
      return false;
  });
});

function checkAnswers() {
    let score = 0;
    const ans12 =['c', 'd'];
    const ans13 =['a','b'];
    const ans14 =['a', 'b', 'c'];
    const incor12 = ['a', 'b', 'e'];
    const incor13=['c', 'd'];
    const incor14=['d'];
    const answers = {
        q1: 'b',
        q2: 'b',
        q3: 'c',
        q4: 'a',
        q5: 'b',
        q6: 'a',
        q7: 'b',
        q8: 'a',
        q9: 'c',
        q10: 'd',
        q11: 'a',
        q15: 'd',
    };
// Проверка ответов на вопросы 1-11 и 15
    for (let question in answers){
        const selected = document.querySelector(`input[name="${question}"]:checked`);
        if (selected && selected.value === answers[question]){
            score++
        }
    }
// Проверка ответа на 12 вопрос
    let selectedAnswersQ12 = Array.from(document.querySelectorAll('input[name="q12"]:checked')).map(input => input.value);
    let scoreQ12 = selectedAnswersQ12.filter(answer => ans12.includes(answer)).length;
    let countIncor12 = selectedAnswersQ12.filter(answer => incor12.includes(answer)).length;
    
    if(countIncor12 > 1){
        score +=0
    }
    else if (countIncor12 == 1){
        score+= (scoreQ12 - countIncor12)
    }
    else if(countIncor12 == 0){
        score += scoreQ12;
    };
// Проверка ответа на 13 вопрос
    let selectedAnswersQ13 = Array.from(document.querySelectorAll('input[name="q13"]:checked')).map(input => input.value);
    let scoreQ13 = selectedAnswersQ13.filter(answer => ans13.includes(answer)).length;
    let countIncor13 = selectedAnswersQ13.filter(answer => incor13.includes(answer)).length;
    
    if(countIncor13 > 1){
        score +=0
    }
    else if (countIncor13 == 1){
        score+= (scoreQ13 - countIncor13)
    }
    else if(countIncor13 == 0){
        score += scoreQ13;
    };

// Проверка ответа на 14 вопрос
    let selectedAnswersQ14 = Array.from(document.querySelectorAll('input[name="q14"]:checked')).map(input => input.value);
    let countIncor14 = selectedAnswersQ14.filter(answer => incor14.includes(answer)).length;
    let scoreQ14 = selectedAnswersQ14.filter(answer => ans14.includes(answer)).length;
    if (countIncor14==0){
        score+=scoreQ14
    }
    else if (countIncor14 == 1){
        score+=0
    }
    

    document.getElementById('result').innerText = `Вы набрали ${score} из 19 правильных ответов.`;
};
