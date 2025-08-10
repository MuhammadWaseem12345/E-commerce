import React from "react";
import { Link, useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();

  return (
    <div style={{
      textAlign: "center",
      padding: "50px",
      fontFamily: "sans-serif"
    }}>
      <h1 style={{ fontSize: "3rem", color: "#ff4d4f" }}>404</h1>
      <h2>Oops! Page not found</h2>
      {error && (
        <p style={{ color: "gray" }}>
          {error.statusText || error.message}
        </p>
      )}
      <Link to="/" style={{
        display: "inline-block",
        marginTop: "20px",
        padding: "10px 20px",
        backgroundColor: "#1890ff",
        color: "white",
        borderRadius: "5px",
        textDecoration: "none"
      }}>
        Go Home
      </Link>
    </div>
  );
}
