type HangmanDrawingProps = {
  numberOfGuesses :number
}
const HangmanDrawing = ({numberOfGuesses}: HangmanDrawingProps) => {

  const head = (
    <div
      style={{
        width: "50px",
        height: "50px",
        borderRadius: "100%",
        border: "10px solid black",
        position: "absolute", 
        top:"50px", 
        right:"-30px"
      }}
    />
  );

  const body = (
    <div
      style={{
        width: "10px",
        height: "100px",
        backgroundColor: "black",
        position: "absolute",
        top: "120px",
        right:0
      }}
    />
  );
  const right_arm = (
    <div
      style={{
        width: "100px",
        height: "10px",
        backgroundColor: "black",
        position: "absolute",
        top: "150px",
        right:"-100px", 
        rotate:"-30deg",
        transformOrigin: "left bottom "
      }}
    />
  );

  const left_arm = (
    <div
      style={{
        width: "100px",
        height: "10px",
        backgroundColor: "black",
        position: "absolute",
        top: "150px",
        right:"10px", 
        rotate:"30deg",
        transformOrigin: "right bottom "
      }}
    />
  );
  const left_leg = (
    <div
      style={{
        width: "100px",
        height: "10px",
        backgroundColor: "black",
        position: "absolute",
        top: "210px",
        right: "-90px",
        rotate: "60deg",
        transformOrigin: "left bottom",
      }}
    />
  );

  const right_leg = (
    <div
      style={{
        width: "100px",
        height: "10px",
        backgroundColor: "black",
        position: "absolute",
        top: "210px",
        right: "0px",
        rotate: "-60deg",
        transformOrigin: "right bottom",
      }}
    />
  );

  const BodyParts = [head, body, right_arm, left_arm, right_leg, left_leg]
  return (
    <div style={{position:"relative"}}>
      {BodyParts.slice(0, numberOfGuesses)}
      <div style={{height:"50px", width: "10px", backgroundColor:"black", marginLeft: "120px", position:"absolute", right:0, top:0}}/>
       <div style={{height:"10px", width: "200px", backgroundColor:"black", marginLeft: "120px"}}/>
      <div style={{height:"400px", width:"10px", backgroundColor: "black", marginLeft:"120px"}}/>
      <div style={{height:"10px", width: "250px", backgroundColor:"black"}}/>
    </div>
  )
}

export default HangmanDrawing