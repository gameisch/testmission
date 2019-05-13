$(document).ready(function () {
    let iText = $('.modal__field input[type="text"]');
    let iEmail = $('.modal__field input[type="email"]');
    let iTel = $('.modal__field input[type="tel"]');
    $(iText).inputmask({'placeholder': 'sidorov@yandex.ru'});
    // $(iTel).inputmask( {
    //     'mask': '+7 (999) 999-99-99',
    //     'placeholder': '+7 (   )    -  -  '
    // }, {
    //     'onComplete': function () {
    //         console.log('inputmask complete');
    //     }
    // });
    // if ($(iTel).inputmask('isComplete')) {
    //     console.log('isComplete');
    // }
    $(iTel).inputmask('+7 (999) 999-99-99', {
        'oncomplete': function () {
            console.log('inputmask complete!');
            $(this).removeClass('incomplete');
            $(this).addClass('complete');
        },
        'onincomplete': function () {
            console.log('inputmask INcomplete');
            $(this).addClass('incomplete');
            $(this).removeClass('complete');
        }
    });
    $(iEmail).inputmask({'mask': '9-a{1,3}9{1,3}', 'placeholder': 'sidorov@yandex.ru'});
});
// function defaultMask() {
//     this.ready = function ( ) {
//         $(':input').inputmask( {
//             oncomplete: function () {
//                 var eventIdenticators = $(this).next().next('.eventIndicator').children('span');
//                 $.each(eventIdenticators, function (ndx, lmnt) {
//                     var $lmnt = $(lmnt);
//                     if ($lmnt.hasClass('complete')) {
//                         $lmnt.addClass('fired');
//                     } else {
//                         $lmnt.removeClass('fired');
//                     }
//                 });
//             },
//             onincomplete: function () {
//                 var eventIdenticators = $(this).next().next('.eventIndicator').children('span');
//                 $.each(eventIdenticators, function (ndx, lmnt) {
//                     var $lmnt = $(lmnt);
//                     if ($lmnt.hasClass('incomplete')) {
//                         $lmnt.addClass('fired');
//                     } else {
//                         $lmnt.removeClass('fired');
//                     }
//                 });
//             },
//             oncleared: function () {
//                 var eventIdenticators = $(this).next().next('.eventIndicator').children('span');
//                 $.each(eventIdenticators, function (ndx, lmnt) {
//                     var $lmnt = $(lmnt);
//                     if ($lmnt.hasClass('cleared')) {
//                         $lmnt.addClass('fired');
//                     } else {
//                         $lmnt.removeClass('fired');
//                     }
//                 });
//             },
//             onKeyValidation: function (result, opts) {
//                 var eventIdenticators = $(this).next().next('.eventIndicator').children('span');
//                 $.each(eventIdenticators, function (ndx, lmnt) {
//                     var $lmnt = $(lmnt);
//                     if ($lmnt.hasClass('keyvalidation')) {
//                         if (result !== false) {
//                             $lmnt.addClass('fired');
//                         } else {
//                             $lmnt.removeClass('fired');
//                         }
//                     }
//                 });
//             },
//             disablePredictiveText: true
//         }).on('input', function () {
//             var eventIdenticators = $(this).next().next('.eventIndicator').children('span');
//             $.each(eventIdenticators, function (ndx, lmnt) {
//                 var $lmnt = $(lmnt);
//                 if ($lmnt.hasClass('input')) {
//                     $lmnt.addClass('fired');
//                     setTimeout(function () {
//                         $lmnt.removeClass('fired');
//                     }, 100);
//                 }
//             });
//         });
//     };
// }
// $(document).ready(function () {
//     defaultMask();
// });

