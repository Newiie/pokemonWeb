import Modal from '../Components/Modal';
import { usePokemon } from '../hooks/PokemonProvider';

const StartPage = () => {
  const { handleSetDifficulty } = usePokemon();

  return (
    <div className="frontImage">
      <Modal handleSetDifficulty={handleSetDifficulty} />
    </div>
  );
};

export default StartPage;