import { useState } from 'react';
import { checkSimilarity } from '../Utils/Utils';
import './CheckButton.css';

interface CheckButtonProps {
    englishPhrase: string;
    inputText: string;
}

export const CheckButton = ({ englishPhrase, inputText }: CheckButtonProps) => {
    const [isChecked, setIsChecked] = useState(false);
    const [similarity, setSimilarity] = useState(0);

    return (<>
            <button className='checkButton' onClick={() => {
                setSimilarity(checkSimilarity(englishPhrase, inputText));
                setIsChecked(true);
            }} disabled={(inputText) ? false : true}>Check</button>
            <p hidden={!isChecked}>Similarity: {(similarity * 100).toFixed(2)}%</p>    
    </>);
}

