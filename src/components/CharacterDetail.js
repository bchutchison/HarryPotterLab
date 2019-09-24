import React from 'react';

const CharacterDetail = (props) => {
if (!props.character) return null;
return(
  <div>
    <h3>{props.character.name}</h3>
    <h4>{props.character.species}</h4>
    <h5>{props.character.gender}</h5>


  </div>

)

}

export default CharacterDetail
