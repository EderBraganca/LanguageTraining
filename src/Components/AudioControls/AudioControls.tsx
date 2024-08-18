import { useState } from 'react';
import './AudioControls.css';

interface AudioControlsProps {
    phrase: string;
    hide: boolean;
  }

  export const AudioControls: React.FC<AudioControlsProps> = ({ phrase, hide }) => {
    const [velocity, setVelocity] = useState(1);	

    const phraseToSpeech = (): void  => {
        const speech = new SpeechSynthesisUtterance();
        speech.lang = 'en-US';
        speech.text = phrase;
        speech.rate = velocity;
        window.speechSynthesis.speak(speech);
    }
    
    const increaseVelocity = (): void  => {
        if (velocity < 3)
            setVelocity(velocity + 0.1);
    }

    const decreaseVelocity = (): void  => {
        if (velocity > 0.1)
            setVelocity(velocity - 0.1);
    }

    return (
        <nav className="velocityButtons">
            <button onClick={decreaseVelocity} hidden={hide}>-</button>
            <p hidden={hide}>Velocity: {velocity.toFixed(1)}</p>
            <button onClick={increaseVelocity} hidden={hide}>+</button>
            <button onClick={phraseToSpeech} hidden={hide}>Play Audio</button>
        </nav>
    );
}