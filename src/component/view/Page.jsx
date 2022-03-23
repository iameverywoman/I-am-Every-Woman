import React, { useState, useEffect } from "react";
import Home from "../Page";
import "./style.css";

export default function Page() {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);
  return (
    <div>
      {loading ? (
        <div class="page-loader">
          <div class="spinner"></div>
          <div class="txt">
            I am <span style={{ color: "#f6037f" }}>Every Woman</span>
          </div>
        </div>
      ) : (
        <Home />
      )}
    </div>
  );
}
