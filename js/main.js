document.getElementById('submit-btn').addEventListener('click', function(e) {
    var form = document.getElementById('form');
    var emailInput = document.getElementById('email');
    e.preventDefault();
    if (emailInput.checkValidity()) {
        form.submit();
    }
});