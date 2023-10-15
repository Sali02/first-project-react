
import GeneralButton from "./GeneralButton";

function FruitButton () {
  const banana = 'banana';
  const apple = 'apple';
  const pear = 'pear';
  return(
    <div
      style = {{
        display : 'flex',
        justifyContent : 'center',
        alignItems : 'center',
        textAlign : 'center'
      }}
    >
      <GeneralButton fruit = {banana} />
      <GeneralButton fruit = {apple} />
      <GeneralButton fruit = {pear} />
    </div>
    
  );
}

export default FruitButton;