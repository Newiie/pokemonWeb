import Modal from '../Components/Modal';
import { usePokemon } from '../hooks/PokemonProvider';

const StartPage = () => {
  const { handleSetDifficulty, setScore } = usePokemon();
  setScore(0)
  return (
    <div className="frontImage">
      <Modal handleSetDifficulty={handleSetDifficulty} />
    </div>
  );
};

export default StartPage;