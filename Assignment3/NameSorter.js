import React from 'react';

const NameSorter = (props) => {
    const {chart} = props
    const {books} = props
    const {peeps} = props
    const {bookEntry} = props
    const selected = chart.filter(s =>books[bookEntry].id == s.bookLikedID)//will make a selected arrray of only those objects{id,bookLiked,peepsID} from charts where this bookEntry is liked


    return (
                        (selected.length==0)//if book is not liked by anyone array length will be zero as no one will be picked using above condition
                        ?<li>"This book is not liked by anyone"</li>//if array lenght is zero print book is not liked by anyone
                        :selected.map(s=> <li>{peeps[s.peepsID].name}</li>)// otherwise one by one from the selected array(using map), pick peepsID from selected and print the names of all corresponding peepsID from peeps array.
        
    );
}

export default NameSorter;
         