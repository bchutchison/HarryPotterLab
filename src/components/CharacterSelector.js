import React from 'react';


const CharacterSelector = (props) => {
const options = props.characters.map((character, index) => {
  return <option value={index} key={index}>
      {character.name}
  </option>
})

function handleChange(event){
  props.onCharacterSelected(event.target.value)
}

return(
  <select id="character-selector" defaulValue="default" onChange={handleChange}>
    <option disabled value = "default">Selected Character</option>
    {options}
  </select>
)

}

export default CharacterSelector;
