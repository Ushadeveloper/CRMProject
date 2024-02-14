import React from 'react'

export const FormHRR = () => {
  return (
    <form>
       
  {/* Effective Date */}
  <label htmlFor="effectiveDate">Effective Date:</label>
  <input type="date" id="effectiveDate" name="effectiveDate" />
  {/* Cease Date */}
  <label htmlFor="ceaseDate">Cease Date:</label>
  <input type="date" id="ceaseDate" name="ceaseDate" />
  {/* Customer Type */}
  <label htmlFor="customerType">Customer Type:</label>
  <select id="customerType" name="customerType">
    {/* Add customer type options here */}
  </select>
  {/* Customer */}
  <label htmlFor="customer">Customer:</label>
  <input type="text" id="customer" name="customer" />
  {/* Room Type */}
  <label htmlFor="roomType">Room Type:</label>
  <select id="roomType" name="roomType">
    {/* Add room type options here */}
  </select>
  {/* Room Class */}
  <label htmlFor="roomClass">Room Class:</label>
  <select id="roomClass" name="roomClass">
    {/* Add room class options here */}
  </select>
  {/* Meal Plan */}
  <label htmlFor="mealPlan">Meal Plan:</label>
  <select id="mealPlan" name="mealPlan">
    {/* Add meal plan options here */}
  </select>
  {/* View Type */}
  <label htmlFor="viewType">View Type:</label>
  <select id="viewType" name="viewType">
    {/* Add view type options here */}
  </select>
  {/* Price Weekdays */}
  <label htmlFor="priceWeekdays">Price Weekdays:</label>
  <input type="number" id="priceWeekdays" name="priceWeekdays" />
  {/* Price Weekend */}
  <label htmlFor="priceWeekend">Price Weekend:</label>
  <input type="number" id="priceWeekend" name="priceWeekend" />

<button>Save</button>
    </form>
  )
}
