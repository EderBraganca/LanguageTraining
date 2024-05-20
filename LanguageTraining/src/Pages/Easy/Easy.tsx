import { ref, get, child } from "firebase/database";
import { db } from "../../App";
import { useState } from "react";
import { Footer }from '../../Components/Footer/Footer';
 
export const Easy = () => {
    const [portuguesePhrase, setPortuguesePhrase] = useState(''); 
    const [englishPhrase, setEnglishPhrase] = useState('');
    const [hidePortuguese, setHidePortuguese] = useState(true);
    const [hideEnglish, setHideEnglish] = useState(true);
    const [velocity, setVelocity] = useState(0.8);

    const dbRef = ref(db);
    
    const getRandomPhrase = () => {
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

    const phraseToSpeech = () => {
        const speech = new SpeechSynthesisUtterance();
        speech.lang = 'en-US';
        speech.text = englishPhrase;
        speech.rate = 0.6;
        window.speechSynthesis.speak(speech);
    }
    
    const increaseVelocity = () => {
        if (velocity < 3)
            setVelocity(velocity + 0.1);
    }

    const decreaseVelocity = () => {
        if (velocity > 0.1)
            setVelocity(velocity - 0.1);
    }
    
    
    return ( <>
        <h1>Easy</h1>
        <p>Click in this button to generate a random phrase in English:  
            <button onClick={getRandomPhrase}>Generate</button>
        </p>
        
        <textarea rows={4} cols={50} placeholder="Type what you are hearing..."></textarea><br/>
        <section>
            <button onClick={decreaseVelocity} hidden={!englishPhrase}>- Fast</button>
            <button onClick={increaseVelocity} hidden={!englishPhrase}>+ Fast</button>
            <p hidden={!englishPhrase}>Velocity: {velocity.toFixed(1)}</p>
            <button onClick={phraseToSpeech} hidden={!englishPhrase}>Play</button>
        </section>
        <br/>
        <p>
            <label>Portuguese phrase: </label>
            {!hidePortuguese && <p>{portuguesePhrase}</p>}
            <button
                onClick={() => {
                    if (!hidePortuguese) {
                        setHidePortuguese(true);
                    } else {
                        setHidePortuguese(false);
                    }
                }}
            >Show</button>
        </p>
        <p>
            <label>English phrase: </label>
            {!hideEnglish && <p>{englishPhrase}</p>}
            <button
                type="submit"
                onClick={() => {
                    if (!hideEnglish) {
                        setHideEnglish(true);
                    } else {
                        setHideEnglish(false);
                    }
                }}
            >Show</button>
        </p>
        <Footer />
    </>);
}
    