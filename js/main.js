/* globals $ */
// PuppyとKittenにある写真をフェードインさせる
$('.pets_imgs_l').waypoint({  /* .pets_imgs_l の写真を左からフェードイン */
  handler: function(direction) {
    if (direction === 'down') {
      $(this.element).addClass('animate__fadeInLeft');
      this.destroy();
    }
  },

  offset: '60%',
});
$('.pets_imgs_r').waypoint({  /* .pets_imgs_r の写真を右からフェードイン */
  handler: function(direction) {
    if (direction === 'down') {
      $(this.element).addClass('animate__fadeInRight');
      this.destroy();
    }
  },

  offset: '60%',
});
/* globals Swiper */
// swiperの設定
var swiper = new Swiper('.swiper', {
  centeredSlides: true,
  slidesPerView: 1.6,
  pagination: {
    el: '.swiper-pagination',
    type: 'fraction',
    formatFractionCurrent: function(number) {
      return '0' + number;
    },
    formatFractionTotal: function(number) {
      return '0' + number;
    },
  },
  navigation: {
    prevEl: '.swiper-button-prev',
    nextEl: '.swiper-button-next',
  },
});
// フォームの入力値チェック
$('#submit_button').on('click', function(e) {
  var username = $('#username').val();  /* お名前 */
  var userkana = $('#userkana').val();  /* フリガナ */
  var telno    = $('#telno').val();     /* 電話番号 */
  var email    = $('#email').val();     /* メールアドレス */
  var inquiry  = $('#inquiry').val();   /* お問い合わせ内容 */

  var error_text = '';    /* エラーの説明が入る変数 */

  if (username.trim() === '') {
    error_text = 'お名前を入力してください';
  }
  else if (userkana.trim() === '') {
    error_text = 'フリガナを入力してください';
  }
  else if (!userkana.match(/^[ァ-ヴ　]+$/)) {
    error_text = 'フリガナには全角のカタカナとスペースのみを入力してください';
  }
  else if (telno.trim() === '') {
    error_text = '電話番号を入力してください';
  }
  else if (!telno.match(/^0[0-9]{1,4}-[0-9]{1,4}-[0-9]{4}$/)) {
    error_text = '電話番号を正しい書式で入力してください';
  }
  else if (email.trim() === '') {
    error_text = 'メールアドレスを入力してください';
  }
  else if (!email.match(/^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/)) {
    error_text = 'メールアドレスを正しい書式で入力してください';
  }
  else if (inquiry.trim() === '') {
    error_text = 'お問い合わせ内容を入力してください';
  }

  // エラー内容を表示する
  $('#form_has_error').text(error_text);

  // エラーがなければ送信する
  if (error_text === '') {
    //$('#contact_form').submit();
  }
});