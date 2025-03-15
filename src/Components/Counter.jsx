import React, { useState } from "react";
import "../App.css";

const Counter = () => {
  const [count, setCount] = useState(0);
  const [favNumbers, setFavNumbers] = useState({ juan: null, santiago: null });
  const [turn, setTurn] = useState("juan"); 
  const decreaseCount = () => {
    setCount((count) => (count > 0 ? count - 1 : 0));
  };

  const increaseCount = () => {
    setCount((count) => count + 1);
  };

  const selectFavoriteNumber = () => {
    setFavNumbers((prev) => ({
      ...prev,
      [turn]: count, 
    }));
    setTurn(turn === "juan" ? "santiago" : "juan"); 
  };

  const resetFavorites = () => {
    setFavNumbers({ juan: null, santiago: null });
    setCount(0)
    setTurn("juan");
  };

  return (
    <div className="card">
      <p><strong>{count}</strong></p>
      <div>
        <button onClick={increaseCount}>➕</button>
        <span style={{ margin: '0 20px' }}></span> {}
        <button onClick={decreaseCount}>➖</button>
      </div>
      <button onClick={selectFavoriteNumber}>Select</button>
      <button onClick={resetFavorites}>Reset</button>
      
      {favNumbers.juan !== null && <p>El numero favorito Juan David: {favNumbers.juan}</p>}
      {favNumbers.santiago !== null && <p>El numero favorito Santiago: {favNumbers.santiago}</p>}
    </div>
  );
};

export default Counter;
