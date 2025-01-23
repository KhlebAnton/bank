document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('feedback-form');
    
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();
        const consent = document.getElementById('consent').checked;
        
        if (!name || !email) {
            alert('Пожалуйста, заполните обязательные поля');
            return;
        }
        
        if (!consent) {
            alert('Необходимо дать согласие на обработку персональных данных');
            return;
        }
        

        console.log('Форма отправлена:', { name, email, message });
        alert('Форма успешно отправлена!');
        
        form.reset();
    });
});