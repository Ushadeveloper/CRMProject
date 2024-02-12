import React from 'react'

export const FormAduit = () => {
    return (
        <form>
            <label>Created On:</label>
            <select name="createdOnInput" >
                <option value=""></option>
                <option value=""></option>
            </select> 
            <label>Created By:</label>
            <input type="text" name="createdByInput" />
            <label>Modified On:</label>
            <select name="modifiedOnInput" >
                <option value=""></option>
                <option value=""></option>
            </select> 
            <label>Created By:</label>
            <input type="text" name="createdByInput" />
        </form>
    )
}
