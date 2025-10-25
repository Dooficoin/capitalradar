document.getElementById('connectWallet').addEventListener('click', async () => {
  if (typeof window.ethereum !== 'undefined') {
    try {
      const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
      alert('Carteira conectada: ' + accounts[0]);
    } catch (error) {
      alert('Conexão recusada.');
    }
  } else {
    alert('MetaMask não detectada. Instale para continuar.');
  }
});

document.getElementById('startMine').addEventListener('click', () => {
  alert('Mineração iniciada (simulada). Aguarde o período e retorne para coletar.');
});
