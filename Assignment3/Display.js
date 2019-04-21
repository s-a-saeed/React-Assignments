import React from 'react';
import NameSorter from './NameSorter'

const Display = (props) => {
    
      const {chart} = props
      const {books} = props
      const {peeps} = props
      const {bookEntry} = props
     return (
                 <div>
                   <h2>{books[bookEntry].name}</h2> {/*the variable bookEntry receives a single key i.e. 1 OR 2 OR 3 OR 4,5,6 one by one from the map in app.js. Each key alos has the information {id and name} in it.*/}
                   <p>Liked by:</p>
                   <ul>
                       {
                       <NameSorter chart={chart} books={books} peeps={peeps} bookEntry={bookEntry}/>
                       }
                   </ul>
                 </div>
       
     );
   
 }

 export default Display;