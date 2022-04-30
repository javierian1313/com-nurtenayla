import './App.css';
import catBirthday from './catbirthday2.jpeg';

function App() {
    return (
        <div className='App'>
            <header className='App-header'>
                <div>
                    <img src={catBirthday} alt='cat birthday' style={{ maxWidth: '95%' }} />
                </div>
                <p>{`<3 From BBB, i luvv uuuuuuu BBP <3`}</p>
            </header>
        </div>
    );
}

export default App;
