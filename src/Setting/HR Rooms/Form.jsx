import React from 'react'

export const FormHR = () => {
  return (
    <form action="#" method="post">
  <label htmlFor="floorNo">Floor No:</label>
  <input type="number" id="floorNo" name="floorNo" required="" />
  
  <label htmlFor="roomNo">Room No:</label>
  <input type="number" id="roomNo" name="roomNo" required="" />
  
  <label htmlFor="roomWithBed">Room No with Bed:</label>
  <input type="number" id="roomWithBed" name="roomWithBed" required="" />
  
  <label htmlFor="beds">Beds:</label>
  <input type="number" id="beds" name="beds" required="" />
  
  <label htmlFor="description">Description:</label>
  <textarea id="description" name="description" defaultValue={""} />
  
  <label htmlFor="paxType">Pax Type:</label>
  <select id="paxType" name="paxType">
    <option value="single">Single</option>
    <option value="double">Double</option>
    {/* Add more options as needed */}
  </select>
  
  <label htmlFor="active">Active:</label>
  <input type="checkbox" id="active" name="active" />
  
  <label htmlFor="effectiveDate">Effective Date:</label>
  <input type="date" id="effectiveDate" name="effectiveDate" required="" />
  
  <label htmlFor="ceaseDate">Cease Date:</label>
  <input type="date" id="ceaseDate" name="ceaseDate" required="" />
  
  <label htmlFor="allowCustomer">Allow Customer:</label>
  <input type="checkbox" id="allowCustomer" name="allowCustomer" />
  
  <label htmlFor="serviceProvider">Service Provider:</label>
  <select id="serviceProvider" name="serviceProvider">
    <option value="provider1">Provider 1</option>
    <option value="provider2">Provider 2</option>
    {/* Add more options as needed */}
  </select>
  
  <label htmlFor="bedName">Bed Name:</label>
  <input type="text" id="bedName" name="bedName" />
  
  <label htmlFor="sharing">Sharing:</label>
  <input type="checkbox" id="sharing" name="sharing" />
  
  <input type="submit" defaultValue="Save" />
</form>

  )
}
