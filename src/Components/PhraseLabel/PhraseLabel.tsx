import './PhraseLabel.css';

interface PhraseLabelProps {
    phrase: string;
    isHidden: boolean;
    label: string;
    setIsHidden: Function;
}

export const PhraseLabel: React.FC<PhraseLabelProps> = ({ phrase, isHidden, setIsHidden, label }) => {
    const symbols = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '_', '+', '=', '{', '}', '[', ']', '|', '\\', ':', ';', '"', "'", '<', '>', ',', '.', '?', '/', ' '];
    const encriptedPhrase = phrase.split('').map(
        lether => { 
        if (symbols.includes(lether)) {
            return lether;
        }
        return '*';    
    }).join('');

    return (<>
            <label> {label} </label>
            <p className='phraseLabel'>{
                (isHidden) ? encriptedPhrase : phrase
            }</p>
            <button className="phraseShowButton" onClick={() => setIsHidden(!isHidden)} disabled={!phrase}>
                Show
            </button>
    </>);
}