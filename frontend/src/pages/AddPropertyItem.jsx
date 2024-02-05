import React, { useCallback, useState } from 'react';
import addNewPropertyItem from '../helpers/addNewPropertyHelper';
import "./components/NewProperty/LandLords.css"

const NewProperty = ({userData}) => {

  //Form to handle adding new property
  const submitForm = async (e) => {
    e.preventDefault();
    //Grabs the form id of propertyForm
    const formElement = document.getElementById('propertyForm');

    //variable FormData grabs all inputs from the form
    const formData = new FormData(formElement)

    //Payload turns those tinto key value pairs
    const payload = Object.fromEntries(formData)

    //Calls the afunction to add new property
    try {
      await addNewPropertyItem(payload)
      console.log('Yay')
      
    } catch (err) {
      console.log('NOOO', err.message)
    }
  }
  

  return (
    <div className='add-property-item'>
      <form id="propertyForm"className="property-form" action="POST" >
        <label htmlFor="address">Address</label>
        <input type="text" id="address" name="address"/>

        <label htmlFor="status">Status</label>
        <input type="text" id="status" name="status"/>

        {/* <label htmlFor="image">Image Url</label>
        <input type="text" id="image" name="imageUrl"/> */}

        <label htmlFor="unit_cost">Unit Cost</label>
        <input type="text" id="unit_cost" name="unitCost"/>

        <input type="hidden" name="landlord_id" defaultValue={userData} />

        <input type="hidden" name="image" defaultValue="photos/1.png" />

        <button className="add-prop" type="button" onClick={submitForm}>Add Property</button>

      </form>

    </div>
  );
};

export default NewProperty;