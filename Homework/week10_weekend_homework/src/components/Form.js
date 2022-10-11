import { useState } from "react";


export default function Form (props) {

  const [formData, setFormData] = useState({
    searchTerm: "",
  });


  const handleChange = (event) => {
    
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  // const randomPoke = () => {
  //   setFormData(...formData, `${Math.floor(Math.random() * 900 )}`)
    
  // }

  const handleSubmit = (event) => {
    
    event.preventDefault();
    
    props.pokemonSearch(formData.searchTerm);
  };

  
  return (
    <div>
      <form className="pokemonSearch" onSubmit={handleSubmit}>
        <input
          type="text"
          name="searchTerm"
          onChange={handleChange}
          value={formData.searchTerm}
        />
        <input type="submit" value="submit" />
      </form>
      {/* <button onClick={randomPoke}>Surprise Me</button> */}
    </div>
  );
};