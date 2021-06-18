const changer = document.getElementById('theme-changer');
const changer2 = document.getElementById('theme-changer2');
const html = document.documentElement;

changer.addEventListener('change', function() {
    html.toggleAttribute('data-theme-dark');
    if (changer.checked) {
        changer2.checked = true;
    } else {
        changer2.checked = false;
    }
});


changer2.addEventListener('change', function() {
    html.toggleAttribute('data-theme-dark');
    if (changer2.checked) {
        changer.checked = true;
    } else {
        changer.checked = false;
    }
});
