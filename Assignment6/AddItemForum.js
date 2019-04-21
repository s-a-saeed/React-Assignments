import React from 'react';

const AddItemForum = (props) => {
    return (
        <form onSubmit={props.addNewItem}>
        <input
          id="textBox"
          type="text"
          placeholder="Enter New Item"
          value={props.value}
          onChange={props.handleChange}
        />
        <button disabled={props.inputIsEmpty()} >Add</button>
      </form>
    );
}

export default AddItemForum;