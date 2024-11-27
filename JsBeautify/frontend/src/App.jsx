import { useState } from 'react';
import './App.css';

function App() {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const [loading, setLoading] = useState(false);

  const handleCommand = async () => {
    setLoading(true);
    setOutput(''); 

    try {
      const response = await fetch('http://localhost:5000/beautify', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ input }),
      });

     
      const result = await response.json();
      if(result.status === 'success') {
        setOutput(result.data);
      }else {
        setOutput(`Erro: ${result.message}`);
      }
    } catch (error) {
      setOutput(`Erro: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="app">
      <header className="app-header">
        <h1>Beautify Code</h1>
      </header>
      <div className="container">
        <div className="box">
          <h2>Input</h2>
          <textarea
            className="textarea"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Insira o seu código aqui:"
            aria-label="Input para o código"
          />
        </div>
        <div className="box">
          <h2>Output</h2>
          <textarea
            className="textarea"
            value={output}
            readOnly
            placeholder="Sua saída vai aparecer aqui:"
            aria-label="Saída do código processado"
          />
        </div>
      </div>
      <div className="buttons-container">
        {loading ? (
          <p>Processando...</p>
        ) : (
          <>
            <button onClick={() => handleCommand('beautify')}>Beautify JSON</button>
          </>
        )}
      </div>
    </div>
  );
}

export default App;
