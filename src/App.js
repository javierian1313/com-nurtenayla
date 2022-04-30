import './App.css';
import catBirthday from './catbirthday2.jpeg';

function App() {
    return (
        <div className='App'>
            <header className='App-header'>
                <p style={{ marginBottom: 5, marginTop: 5 }}>{`<3 Happy Birthday BBP!!! <3`}</p>
                <img src={catBirthday} alt='cat birthday' style={{ maxWidth: '95%' }} />
                <p style={{ marginBottom: 5, marginTop: 5 }}>{`<3 Have an absolutely fabulous day!!! <3`}</p>
                <p style={{ marginBottom: 5, marginTop: 5 }}>{`<3 i luvv uuuuuuu <3`}</p>
            </header>
        </div>
    );
}

export default App;
