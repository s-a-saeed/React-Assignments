import React from 'react';

const DeleteButton = (props) => {
    return (
        <button onClick={props.removeLastItem} disabled={props.noItemsFound()}>
        Delete Last Item
      </button>
    );
}

export default DeleteButton;