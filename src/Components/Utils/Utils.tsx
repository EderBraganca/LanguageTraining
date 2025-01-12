export { clearInput };

const clearInput = () => {
    const textArea = document.querySelector('.textArea') as HTMLTextAreaElement;
    if (textArea) {
        textArea.value = '';
    }
}
