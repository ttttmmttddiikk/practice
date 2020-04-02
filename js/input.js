
// 無効なフィールドがある場合にフォーム送信を無効にするスターターJavaScriptの例
(function() {
  'use strict';

  window.addEventListener('load', function() {
    // カスタムブートストラップ検証スタイルを適用するすべてのフォームを取得
    var forms = document.getElementsByClassName('needs-validation');
    // ループして帰順を防ぐ
    var validation = Array.prototype.filter.call(forms, function(form) {
      form.addEventListener('submit', function(event) {
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        }
        form.classList.add('was-validated');
      }, false);
    });
  }, false);
})();


