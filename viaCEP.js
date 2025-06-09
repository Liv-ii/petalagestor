    // Evita que pressionar Enter em qualquer campo de input envie o formulário automaticamente
    document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");

        form.addEventListener("keydown", function (event) {
            // Se a tecla pressionada for Enter e o alvo for um input (menos do tipo submit), bloqueia
            if (event.key === "Enter" && event.target.tagName === "INPUT") {
                event.preventDefault();
            }
        });
    });
    
    // Função chamada quando o campo de CEP perde o foco (quando o usuário termina de digitar)
    window.onload = function () {
    const cepInput = document.getElementById('cep');

    if (cepInput) {
        cepInput.addEventListener('blur', function () {
            let cep = this.value.replace(/\D/g, ''); // Remove tudo que não for número

            if (cep.length !== 8) {
                alert("CEP inválido! Deve conter 8 dígitos.");
                return;
            }

            // URL da API ViaCEP
            let url = `https://viacep.com.br/ws/${cep}/json/`;

            // Requisição GET usando fetch()
            fetch(url)
                .then(response => {
                    if (!response.ok) {
                        throw new Error("Erro ao consultar o CEP");
                    }
                    return response.json();
                })
                .then(data => {
                    if (data.erro) {
                        alert("CEP não encontrado!");
                        return;
                    }

                   // Preenche os campos do formulário com os dados retornados
                    document.getElementById('rua').value = data.logradouro;
                    document.getElementById('bairro').value = data.bairro;
                    document.getElementById('cidade').value = data.localidade;
                    document.getElementById('estado').value = data.uf;
                })
                .catch(error => {
                    console.error("Erro na requisição:", error);
                    alert("Erro ao buscar o CEP. Tente novamente.");
                });
        });
    }
};