import { ref, get, child } from "firebase/database";
import { db } from "../../App";
import { useState } from "react";
import { Footer }from '../../Components/Footer/Footer';
import { Menu } from "../../Components/Menu/Menu";
import { AudioControls } from "../../Components/AudioControls/AudioControls";
import { PhraseLabel } from "../../Components/PhraseLabel/PhraseLabel";
 
export const Easy = () => {
    const [portuguesePhrase, setPortuguesePhrase] = useState(''); 
    const [englishPhrase, setEnglishPhrase] = useState('');

    const dbRef = ref(db);
    
    const getRandomPhrase = (): void  => {
        const id = Math.floor(Math.random() * 50);

        get(child(dbRef, `translations/Easy/${id}`)).then((snapshot) => {
            if (snapshot.exists()) {
                console.log(snapshot.val());
                setPortuguesePhrase(snapshot.val().portuguese_translation);
                setEnglishPhrase(snapshot.val().english_phrase); 
                console.log("No data available");
            }
        }).catch((error) => {
            console.error(error);
        });
    }
    
    return ( <>
        <Menu />
        <h1>Easy</h1>
        <p>Click in this button to generate a random phrase in English: </p>
        <button onClick={getRandomPhrase} className="generateButton">Generate Phrase</button><br/> 

        <section className="sectionInput">            
            <AudioControls phrase={englishPhrase} hide={!englishPhrase} />
            <textarea rows={4} cols={50} placeholder="Type what you are hearing..."/>
        </section>
        <br/>

        <PhraseLabel phrase={englishPhrase} hide={true} label="English phrase" />
        <PhraseLabel phrase={portuguesePhrase} hide={true} label="Portuguese phrase" />
        <Footer />
    </>);
}
    