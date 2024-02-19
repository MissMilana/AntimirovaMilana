// const d = new Date(2024, 2, 12, 19, 20, 59, 61);
// alert(d)

// function getUserTime(dateTime) {
//     const year = dateTime.getFullYear()
//     const month = dateTime.getMonth()
//     const day = dateTime.getDay()
//     const hourse = dateTime.getHourse()
//     const minute = dateTime.getMinutes()
//     const seconds = dateTime.getSeconds()
//     alert(dateTime, year, month, day, hourse, minute, seconds)
// }

// getUserTime(d)

// const denNedeli = ['понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота', 'воскресенье',]
// const mesyaz = ['январь', 'февраль', 'март', 'апрель', 'май', 'июнь', 'июль', 'август', 'сентябрь', 'октябрь', 'ноябрь', 'декабрь']
// const currentDate = new Date()
// const dateUser = new Date('2024-04-04 16:00:00')
// const raznica = dateUser-currentDate

// const day = Math.floor(raznica /1000/60/60/24)
// const hours = Math.floor(raznica /1000/60/60) %24
// const sec = Math.floor(raznica /1000/60) %60
// const minutes = Math.floor(raznica /1000) %60

// alert(day, hours, sec, minutes)

document.addEventListener('DOMContentLoaded', function() {
    const deadline = new Date(2024, 02, 13);

    let timerId = null;

    function declensionNum(num, words) {
      return words[(num % 100 > 4 && num % 100 < 20) ? 2 : [2, 0, 1, 1, 1, 2][(num % 10 < 5) ? num % 10 : 5]];
    }
    
    function countdownTimer() {
      const diff = deadline - new Date();
      if (diff <= 0) {
        clearInterval(timerId);
      }
      const days = diff > 0 ? Math.floor(diff / 1000 / 60 / 60 / 24) : 0;
      const hours = diff > 0 ? Math.floor(diff / 1000 / 60 / 60) % 24 : 0;
      const minutes = diff > 0 ? Math.floor(diff / 1000 / 60) % 60 : 0;
      const seconds = diff > 0 ? Math.floor(diff / 1000) % 60 : 0;
      const ms = diff > 0 ? Math.floor(diff ) % 1000 : 0;
      $days.textContent = days < 10 ? '0' + days : days;
      $hours.textContent = hours < 10 ? '0' + hours : hours;
      $minutes.textContent = minutes < 10 ? '0' + minutes : minutes;
      $seconds.textContent = seconds < 10 ? '0' + seconds : seconds;
      $ms.textContent = ms < 10 ? '0' + ms : ms;
      $days.dataset.title = declensionNum(days, ['день', 'дня', 'дней']);
      $hours.dataset.title = declensionNum(hours, ['час', 'часа', 'часов']);
      $minutes.dataset.title = declensionNum(minutes, ['минута', 'минуты', 'минут']);
      $seconds.dataset.title = declensionNum(seconds, ['секунда', 'секунды', 'секунд']);
      $ms.dataset.title = declensionNum(ms, ['миллисекунда', 'миллисекунды', 'миллисекунд']);
    }
    const $days = document.querySelector('.timer__days');
    const $hours = document.querySelector('.timer__hours');
    const $minutes = document.querySelector('.timer__minutes');
    const $seconds = document.querySelector('.timer__seconds');
    const $ms = document.querySelector('.timer__ms');

    countdownTimer();

    timerId = setInterval(countdownTimer, 10);

  });
