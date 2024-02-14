import React from 'react'

export const FormHP = () => {
  return (
    <form>
        <h2>HRs Picture:</h2>
  {/* Title */}
  <label htmlFor="title">Title:</label>
  <input type="text" id="title" name="title" />
  {/* Picture Small */}
  <label htmlFor="pictureSmall">Picture Small:</label>
  <input type="file" id="pictureSmall" name="pictureSmall" accept="image/*" />
  {/* Picture Large */}
  <label htmlFor="pictureLarge">Picture Large:</label>
  <input type="file" id="pictureLarge" name="pictureLarge" accept="image/*" />
  {/* Active */}
  <label htmlFor="active">Active:</label>
  <input type="checkbox" id="active" name="active" />
  {/* Pic Small */}
  <label htmlFor="picSmall">Pic Small:</label>
  <input type="text" id="picSmall" name="picSmall" />
  {/* Pic Large */}
  <label htmlFor="picLarge">Pic Large:</label>
  <input type="text" id="picLarge" name="picLarge" />
  {/* Main Picture */}
  <label htmlFor="mainPicture">Main Picture:</label>
  <input type="checkbox" id="mainPicture" name="mainPicture" />
  {/* Created By */}
  <label htmlFor="createdBy">Created By:</label>
  <input type="text" id="createdBy" name="createdBy" />
  {/* Created On */}
  <label htmlFor="createdOn">Created On:</label>
  <select id="createdOn" name="createdOn">
    {/* Add date options here */}
  </select>
  {/* Modified By */}
  <label htmlFor="modifiedBy">Modified By:</label>
  <input type="text" id="modifiedBy" name="modifiedBy" />
  {/* Modified On */}
  <label htmlFor="modifiedOn">Modified On:</label>
  <select id="modifiedOn" name="modifiedOn">
    {/* Add date options here */}
  </select>
    </form>
  )
}
