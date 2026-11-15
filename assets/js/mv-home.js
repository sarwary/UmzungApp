// Homepage / Final Cleaning page: links marked [data-mv-focus] scroll to the booking card (#exTab2)
// and focus a field in it. The attribute value names the field id; empty means the first text input.
// Links pointing at another page (e.g. "/#exTab2" from /Index2) navigate normally.
(function ($) {
    $(document).on('click', '[data-mv-focus]', function (e) {
        var card = document.getElementById('exTab2');
        if (!card) return;
        if (this.pathname && this.pathname.toLowerCase() !== window.location.pathname.toLowerCase()) return;

        e.preventDefault();
        var id = $(this).data('mv-focus');
        var field = id ? document.getElementById(id) : card.querySelector('form input[type="text"]');
        card.scrollIntoView({ behavior: 'smooth', block: 'start' });
        if (field) setTimeout(function () { field.focus({ preventScroll: true }); }, 450);
    });
})(jQuery);
