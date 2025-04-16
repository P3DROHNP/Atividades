document.getElementById('formulario').addEventListener('submit', function(e) {
    e.preventDefault();
  
    const nome = document.getElementById('nome').value;
    const metros = parseFloat(document.getElementById('metros').value);
    const servico = document.getElementById('servico').value;
  
    let precoPorMetro = 10;
  
    if (servico === 'jardinagem') {
      precoPorMetro *= 1.2;
    } else if (servico === 'completa') {
      precoPorMetro *= 1.7;
    }
  
    const total = (metros * precoPorMetro).toFixed(2);
  
    document.getElementById('resultado').innerHTML = `
      <p>Cliente: <strong>${nome}</strong></p>
      <p>Área: <strong>${metros} m²</strong></p>
      <p>Serviço: <strong>${servico === 'poda' ? 'Poda' : servico === 'jardinagem' ? 'Jardinagem' : 'Jardinagem Completa'}</strong></p>
      <p>Total: <strong>R$ ${total}</strong></p>
    `;
  }); 