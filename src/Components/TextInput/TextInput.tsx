
interface TextInputProps {
    inputText: string;
    setInputText: Function;
}

export const TextInput: React.FC<TextInputProps> = ({ 
    inputText, 
    setInputText
}) => {
    return (
        <textarea 
            className="textArea" 
            placeholder="Type what you are hearing..."
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            />
    );
}