window.onload = function() { 
// Função para buscar o CEP
async function searchCEP(cep) {
    try {
      const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
      const data = await response.json();
      return data;
    } catch (error) {
      console.error(error);
      return null;
    }
  }
  // Função para exibir os resultados
  function displayResults(data) {
    const resultDiv = document.getElementById("result");
    if (!data) {
      resultDiv.innerHTML = "CEP não encontrado";
      return;
    }
    resultDiv.innerHTML = `
      <p><strong>CEP:</strong> ${data.cep}</p>
      <p><strong>Endereço:</strong> ${data.logradouro}</p>
      <p><strong>Bairro:</strong> ${data.bairro}</p>
      <p><strong>Cidade:</strong> ${data.localidade}</p>
      <p><strong>Estado:</strong> ${data.uf}</p>
    `;
  }
  
  const form = document.querySelector("form");
  form.addEventListener("submit", async (event) => {
    event.preventDefault();
    const cep = form.elements.cep.value;
    const results = await searchCEP(cep);
    displayResults(results);
  });
}
