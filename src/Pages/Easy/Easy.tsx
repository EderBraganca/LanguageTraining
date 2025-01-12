import { ref } from "firebase/database";
import { db } from "../../App";
import { useState } from "react";
import { Footer } from '../../Components/Footer/Footer';
import { Menu } from "../../Components/Menu/Menu";
import { AudioControls } from "../../Components/AudioControls/AudioControls";
import { PhraseLabel } from "../../Components/PhraseLabel/PhraseLabel";
import { TextInput } from "../../Components/TextInput/TextInput";
import { getRandomPhrase } from "../../Components/Utils/Utils";

export const Easy = () => {
    const [portuguesePhrase, setPortuguesePhrase] = useState('');
    const [englishPhrase, setEnglishPhrase] = useState('');
    const [isHiddenPt, setIsHiddenPt] = useState(true);
    const [isHiddenEn, setIsHiddenEn] = useState(true);

    const dbRef = ref(db);

    return (<>
        <section className='mainSection'>
            <Menu />
            <h1>Easy</h1>
            <p>Click in this button to generate a random phrase in English: </p>
            <button onClick={
                () => { 
                    getRandomPhrase({ dificulty: 'Easy', setPortuguesePhrase, setEnglishPhrase, dbRef }); 
                    setIsHiddenPt(true);
                    setIsHiddenEn(true);
            }
            } className="generateButton">Generate Phrase</button><br />

            <section className="sectionInput">
                <AudioControls phrase={englishPhrase} hide={!englishPhrase} />
                <TextInput />
            </section>

            <PhraseLabel phrase={englishPhrase} isHidden={isHiddenEn} setIsHidden={setIsHiddenEn} label="English phrase" />
            <PhraseLabel phrase={portuguesePhrase} isHidden={isHiddenPt} setIsHidden={setIsHiddenPt} label="Portuguese phrase" />
        </section>
        <Footer />
    </>);
}
