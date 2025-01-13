import { get, child } from 'firebase/database';
import stringSimilarity from "string-similarity";

export { clearInput , getRandomPhrase, checkSimilarity };

const clearInput = () => {
    const textArea = document.querySelector('.textArea') as HTMLTextAreaElement;
    if (textArea) {
        textArea.value = '';
    }
}


const getRandomPhrase = ({dificulty, setPortuguesePhrase, setEnglishPhrase, dbRef}: {dificulty: string, setPortuguesePhrase: Function, setEnglishPhrase: Function, dbRef: any}) => {
    const id = Math.floor(Math.random() * 50);

    get(child(dbRef, `translations/${dificulty}/${id}`)).then((snapshot) => {
        if (snapshot.exists()) {
            setPortuguesePhrase(snapshot.val().portuguese_translation);
            setEnglishPhrase(snapshot.val().english_phrase);
        }
        else { throw new Error("No data available"); }
    }).catch((error) => {
        console.error(error);
    });

    clearInput();
}

const checkSimilarity = (phrase1: string, phrase2: string) => {
    const similarity = stringSimilarity.compareTwoStrings(
        phrase1.toLowerCase(),
        phrase2.toLowerCase()
    );
    return similarity; 
}