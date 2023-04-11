import { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import Input from './components/Input';

function App() {

  const [formData, setFormData] = useState({
    name: "",
    email:"",
    number:"",
    password:"",
    repeat:"",
    select:"",
  })

  const [error, setError] = useState(null)

  
  const submitForm = (e) => {

    setFormData(true)

    e.preventDefault();
    if (formData.password === formData.repeat) {
      setError(false) 
    }
    else {
      setError(true)
    }
        
    
    console.log(error);
    
  }

  useEffect(() => {
    console.log("La page est chargé")
  }, [])


  useEffect(() => {
    console.log(formData.name)
  }, [formData.name])

  return (
    <div className="App">
      <h1>Create account {formData.name}</h1>
      <p>Get started with your free account</p>
      <form className='form' onSubmit={submitForm}>  

        <Input placeholder={"Full name"} className={`input`} onChange={(e) => setFormData({...formData, name : e.target.value})} name={"Name"} type={"text"}/>
        <Input placeholder={"Email address"} className={`input`} onChange={(e) => setFormData({...formData, email : e.target.value})} name={"Email"} type={"email"}/>
        <Input placeholder={"Phone number"} className={`input`} onChange={(e) => setFormData({...formData, number : e.target.value})} name={"Tel"} type={"tel"}/>
        
        <label>Select job type
          <select className='input' placeholder='Select job type' onChange={(e) => setFormData({...formData, select : e.target.value})}>
            <option>----</option>
            <option value="test">test</option>
            <option value="test2">test2</option>
            <option value="test3">test3</option>
          </select>
        </label>

        <Input placeholder={"Create password"} className={`input ${formData.password.length > 8 ? "valide" : "invalide"}`} onChange={(e) => setFormData({...formData, password : e.target.value})} name={"Create password"} type={"password"}/>
        <Input placeholder={"password"} name={"Repeat password"} type={"password"} className={`input ${formData.password === formData.repeat ? "valide" : "invalide"}`} onChange={(e) => setFormData({...formData, repeat : e.target.value})} />
   
        <button type="submit" className='button' >Create account</button>

        {
          error === true ? <p>ERROR</p> : error === false &&  <p>Tout est bon, MERCI</p>
        }
      
      </form>
    </div>
  );
}

export default App;