function Guess() {

  const styling = {
    display : 'flex',
    justifyContent : 'center',
    alignItems : 'center',
    flexDirection : 'column'
  }

  return(
    <div style={styling}>
      <h1>Choose the fruit, that you would like to know the calories about</h1>
      <ul>
        <li>Banana</li>
        <li>Apple</li>
        <li>Pear</li>
      </ul>
      <h3>Press a Button</h3>
   </div>
  )
  
}

export default Guess;