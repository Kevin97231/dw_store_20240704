/* eslint-disable react/prop-types */
import { PaginationButton } from "./PaginationButton";

export const Pagination = ({ nbrButon = 5, handleClick }) => {
  // Comme j'utilise json server et que je n'ai possibilité de faire de requête 'count' qui me
  // renvoie le nombre total d'élément, je met une valeur par défaut aléatoire à 5.
  // Dans un appli. classique, le parent doit déterminer le nombre de boutons de pagination
  // à afficher en fonction du nombre total d'éléments et du nombre d'éléments affichés par page

  //   Dans une appli. classique, je peux déterminer le nombre de bouttons en fonctions du nombre total d'élément
  //  et du nombre de je souhaite afficher par page
  //

  const numbers = Array.from({ length: nbrButon }, (_, index) => index + 1);
  // renvoyer '[1,2,3,4,5]'

  return (
    <div className="bg-white join">
      {numbers.map((number) => (
        <PaginationButton
          key={number}
          number={number}
          handleClick={handleClick}
        />
      ))}
    </div>
  );
};
