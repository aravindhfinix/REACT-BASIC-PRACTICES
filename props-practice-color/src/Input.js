
const Input = ({ setColor, status, setStatus }) => {
  function handleSubmit(e) {
    e.preventDefault();
    if (status) {
      setStatus(false);
    } else {
      setStatus(true);
    }
  }
  return (
    <form onSubmit={handleSubmit}>
      <input placeholder='add color name' onChange={(e) => setColor(e.target.value)}></input><br></br>
      <button type='submit'>Toogle text color</button>
    </form>
  )
}

export default Input