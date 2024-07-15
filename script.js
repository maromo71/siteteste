document.querySelector("form").addEventListener("submit", function(event) {
    event.preventDefault();

    // Coletar dados do formulário
    const form = event.target;
    const formData = new FormData(form);

    // Enviar os dados usando Fetch API
    fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(formData).toString()
    })
    .then(() => {
        alert("Mensagem enviada com sucesso!");
        form.reset();
    })
    .catch((error) => {
        console.error("Erro:", error);
        alert("Falha ao enviar a mensagem. Tente novamente.");
    });
});
