import { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate,useParams } from "react-router-dom";

function ViewRegistrazioneUtenteAdmin() {
  const [state, setState] = useState({
    nome: "",
    cognome: "",
    data: "",
    email: "",
  });

  const navigate = useNavigate();

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setState((prevProps) => ({
      ...prevProps,
      [name]: value
    }));
  };

  const handleClick = (destination) => {
    navigate(destination);
  };

  const handleSubmit = (e) => {
    console.log(state);
    e.preventDefault();
    axios.get(`http://localhost:3001/homeAdmin/homeGestioneUtenti`, {params:state})
    .then(res => { 
      if(res.status === 200){
          alert("Utente aggiunto con successo");
                navigate('/homeGestioneUtenti');
      }else{
          alert("Errore durante l'aggiunta dell'utente");
      }
    });
  };

  return (
    <div className="container">
      <h1>Aggiungi Utente</h1>
      <form className="form" onSubmit={e => handleSubmit(e)}>
          <div className="campoForm">
            <h4>Nome</h4>
            <input type="text" name="nome" onChange={handleInputChange} value={state.nome}/>
          </div>
          <div className="campoForm">
            <h4>Cognome</h4>
            <input type="text" name="cognome" onChange={handleInputChange} value={state.cognome}/>
          </div>
          <div className="campoForm">
            <h4>Data di nascita</h4>
            <input type="date" name="data" onChange={handleInputChange} value={state.data}/>
          </div>
          <div className="campoForm">
            <h4>Email</h4>
            <input type="text" name="email" onChange={handleInputChange} value={state.email}/>
          </div>
          <div className="divBottoni">
            <button type="submit" className="nuovoButton">Registra</button>
            <button onClick={() => handleClick("/homeGestioneUtenti")} className="annullaButton">Annulla</button>
          </div>
        </form>
    </div>
  );
}

export default ViewRegistrazioneUtenteAdmin;