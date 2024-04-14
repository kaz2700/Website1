import "./App.css";
import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import TicTacToe from "./Pages/TicTacToe"
import Todo from "./Pages/Todo"
import { createClient } from "@supabase/supabase-js";
import { LogInContext } from "./Context/LogInContext";
import { SupabaseContext } from "./Context/SupabaseContext";
import MyAccount from "./Pages/MyAccount";

const supabase = createClient(
  "https://njtszvcppxsouonixcqz.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5qdHN6dmNwcHhzb3Vvbml4Y3F6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTE1NjU3NjUsImV4cCI6MjAyNzE0MTc2NX0.INPNRb0nhhthon8kzSC4C5g0UBE2CNN9ataHYPxgGcw",
);

const App = () => {
  const [accountId, setAccountId] = useState(null);

  return (
    <>
      <SupabaseContext.Provider value={supabase}>
        <LogInContext.Provider value={{ accountId, setAccountId }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/tictactoe" element={<TicTacToe />} />
            <Route path="/to-do" element={<Todo />} />
            <Route path="/my-account" element={<MyAccount />} />
          </Routes>
        </LogInContext.Provider>
      </SupabaseContext.Provider>
    </>
  );
};

export default App;
