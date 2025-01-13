import './Footer.css';

export const Footer = () => {
    const alertEmail = (): void => {
        navigator.clipboard.writeText('ederbrape@gmail.scom')

        alert('Email copiado com sucesso!');
    }
    return (
        <>        
        {/* <footer className="footer">
            <section className="footerSection">
                <a href="https://ederbraganca.github.io/" target="_blank" rel="noreferrer">About me</a>
                <a href="/" onClick={alertEmail}>Do you need help? Send me an email</a>
            </section>
        </footer> */}
    </>
    )
}