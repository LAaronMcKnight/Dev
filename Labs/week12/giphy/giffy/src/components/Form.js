import { useState } from 'react'

export default function Form ({ getGifs }) {

  const [formData, setFormData] = useState({
    searchTerm: "",
  });

    //handleChange - updates formData when we type into form
    const handleChange = (event) => {
      //use the event object to detect key and value to update
      setFormData({ ...formData, [event.target.name]: event.target.value });
    };
  
    const handleSubmit = (event) => {
      event.preventDefault();
      getGifs(formData.searchTerm)
    };

  return (
    <div>
      <form className="gifSearch" onSubmit={handleSubmit}>
        <input
          type="text"
          name="searchTerm"
          onChange={handleChange}
          value={formData.searchTerm}
        />
        <input type="submit" value="submit" />
        </form>
    </div>
  )
}