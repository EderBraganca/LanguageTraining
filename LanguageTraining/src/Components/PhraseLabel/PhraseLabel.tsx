import {useState} from 'react';
import './PhraseLabel.css';

interface PhraseLabelProps {
    phrase: string;
    hide: boolean;
    label: string;
}

export const PhraseLabel: React.FC<PhraseLabelProps> = ({ phrase, hide, label}) => {
    const [isHidden, setIsHidden] = useState(hide);

    return (
    <p>
        <label> {label} </label>
        {!isHidden && <p>{phrase}</p>}
        <button onClick={() => setIsHidden(!isHidden)}>
            Show
        </button>
    </p>
    );
}