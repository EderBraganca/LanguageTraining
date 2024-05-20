import { ref, get, child } from "firebase/database";
import { db } from "../../App";
import { useState } from "react";
 
export const Complex = () => {
    const [portuguesePhrase, setPortuguesePhrase] = useState(''); 
    const [englishPhrase, setEnglishPhrase] = useState('');
    const [hidePortuguese, setHidePortuguese] = useState(true);
    const [hideEnglish, setHideEnglish] = useState(true);

    const dbRef = ref(db);
    
    const getRandomPhrase = () => {
        const id = Math.floor(Math.random() * 50);

        get(child(dbRef, `Complex/${id}`)).then((snapshot) => {
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


    const phraseToSpeech = () => {
        const speech = new SpeechSynthesisUtterance();
        speech.lang = 'en-US';
        speech.text = englishPhrase;
        speech.rate = 0.6;
        window.speechSynthesis.speak(speech);
    }
    
    
    
    return ( <>
        <h1>Complex</h1>
        <p>Click in this button below to generate a random phrase in English:  
            <input type="submit" onClick={getRandomPhrase}/>
        </p>
        
        <textarea rows={4} cols={50} placeholder="Type what you are hearing..."></textarea><br/>
        <input type="submit" value="Play" onClick={phraseToSpeech}/>
        
        <br/>
        <p>
            <label>Portuguese phrase: </label>
            {!hidePortuguese && <p>{portuguesePhrase}</p>}
            <input
                type="submit"
                value="Show"
                onClick={() => {
                    if (!hidePortuguese) {
                        setHidePortuguese(true);
                    } else {
                        setHidePortuguese(false);
                    }
                }}
            />
        </p>
        <p>
            <label>English phrase: </label>
            {!hideEnglish && <p>{englishPhrase}</p>}
            <input
                type="submit"
                value="Show"
                onClick={() => {
                    if (!hideEnglish) {
                        setHideEnglish(true);
                    } else {
                        setHideEnglish(false);
                    }
                }}
            />
        </p>
    </>);
}
    