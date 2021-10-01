import Button from './Button';
import CharacterInfo from './CharacterInfo';
import StatInfo from './StatInfo';

function Main(props) {
return (
    <main className="container content">
    <Button id="submit" className="btn" name="Roll?"/>

    <div className="container"> {/*results will hide these two components*/}
       <CharacterInfo />
       <StatInfo />
    </div>
</main>
)
}

export default Main;