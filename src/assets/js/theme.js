const checkbox = document.getElementById('checkbox');

function mudarTema(){
    checkbox.addEventListener('change', () => {
        // Muda o tema do site
        document.body.classList.toggle('light');
    })
}