import React from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <div>
      Home
      <br />
      <button
        onClick={() => {
          navigate("/details");
        }}
      >
        상세페이지로 이동
      </button>
    </div>
  );
}

export default Home;
