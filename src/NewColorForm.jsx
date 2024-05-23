import './NewColorForm.css'
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function NewColorForm ({ addColor }){
  const INITIAL_STATE = { name: "black" , rgb: "#000000"};
  const [formData, setFormData] = useState(INITIAL_STATE);
    const navigate = useNavigate();
  /** Send { name } to parent
   *    & clear form. */

  const handleSubmit = evt => {
    evt.preventDefault();
    addColor(formData);
    setFormData(INITIAL_STATE);
    navigate('/colors');
  };

  /** Update local state w/curr state of input elem */

  const handleChange = evt => {
    const { name, value }= evt.target;
    setFormData(fData => ({
      ...fData,
      [name]: value
    }));
    
  };


    return (
        <>
        <form className="NewColorForm" onSubmit={ handleSubmit }>
            <div className='NewColorForm-inputset'>
            <label htmlFor="name-input">Color Name: </label>
            <input 
                className="NewColorForm-input" 
                id="name-input" 
                type='text' 
                name="name"
                value={formData.name} 
                onChange={ handleChange }>
            </input>
            </div>
            <div className='NewColorForm-inputset'>
            <label htmlFor="rgb-input">Find Color: </label>
            <input 
                className="NewColorForm-input" 
                id="rgb-input" 
                type='color' 
                name="rgb"
                value={formData.rgb} 
                onChange={ handleChange }>
            </input>
            </div>
            <button className="NewColorForm-btn" type='submit'>Add Color</button>
        </form>
       </> 
    )
}

export default NewColorForm;