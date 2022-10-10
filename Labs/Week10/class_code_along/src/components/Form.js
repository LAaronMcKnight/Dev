import {useState, useEffect} from "react";

// Define a function that is our component, always make sure to declare the props parameter so you can use props in your component
export default function Form (props) {
  //State to hold the data of our form
  const [formData, setFormData] = useState({
    searchTerm: "",
  });

  //handleChange - updates formData when we type into form
  const handleChange = (event) => {
    //use the event object to detect key and value to update
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    //prevent page from refreshing on form submission
    event.preventDefault();
    //pass the search term to moviesearch prop, which is apps getMovie function
    props.movieSearch(formData.searchTerm);
  };

  //The component must return some JSX
  return (
    <div>
      <form className="movieSearch" onSubmit={handleSubmit}>
        <input
          type="text"
          name="searchTerm"
          onChange={handleChange}
          value={formData.searchTerm}
        />
        <input type="submit" value="submit" />
      </form>
    </div>
  );
};

// import React from 'react'
// import {useState, useEffect} from "react";


// function Form(props) {

//   const [formData, setFormData] = useState({
//     searchTerm: "",
//   });

//   const handleChange = (event) => {
//     //use the event object to detect key and value to update
//     setFormData({ ...formData, [event.target.name]: event.target.value });
//   };

//   const handleSubmit = (event) => {
//     //prevent page from refreshing on form submission
//     event.preventDefault();
//     //pass the search term to moviesearch prop, which is apps getMovie function
//     props.movieSearch(formData.searchTerm);
//   };

//   return (
//     <>
//     <form onSubmit={handleSubmit}>
//       <input type="text" name="searchTerm" onChange={handleChange} value={formData.searchTerm} />
//       <input type='submit' value="Submit" />
//     </form>
//     </>
//   )
// }

// export default Form