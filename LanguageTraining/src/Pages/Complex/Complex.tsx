import { ref, get, child } from "firebase/database";
import { db } from "../../App";
import { useState } from "react";
 
export const Complex = () => {
    const [phrase, setPhrase] = useState('');
    const dbRef = ref(db);
    
    const search = () =>{
        const id = Math.floor(Math.random() * 50);
    
        get(child(dbRef, `Complex/${id}` )).then((snapshot) => {
            if (snapshot.exists()) {
              console.log(snapshot.val());
                setPhrase(snapshot.val().phrase);
            } else {
              console.log("No data available");
            }
          }).catch((error) => {
            console.error(error);
          });
    }
    
    return ( <>
        <h1>Complex</h1>
        <p>Click in this button below to generate a random phrase in English: 
            <input type="submit" onClick={search}/>
        </p>
        
        <textarea rows={4} cols={50} placeholder="Type what you are hearing..."></textarea>
    </>);
}
    