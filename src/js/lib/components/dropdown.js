import $ from '../core';

$.prototype.dropdown = function() {
    for (let i = 0; i < this.length; i++) {
        const id = this[i].getAttribute('id');
        $(this[i]).click(() => {
            $(this[i]).toggleClass('dropdown-toggle');
            if ($('dropdown-toggle').length == 0) {
                $(this[i]).toggleClass('arrowdown');
            }
            $(`[data-toggle-id="${id}"]`).fadeToggle(300);

        });
    }
};

// $.prototype.dropdown = function() {
//     for (let i = 0; i < this.length; i++) {
//         const id = this[i].getAttribute('id');
//         $(this[i]).click((e) => {
//             $(`[data-toggle-id="${id}"]`).fadeToggle(300);
//         });
//     }
// };

$('.dropdown-toggle').dropdown();
console.log($('.dropdown-toggle'));
