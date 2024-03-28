import './App.css';
import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Login from './Pages/Login';
import Register from './Pages/Register';
import { createClient } from "@supabase/supabase-js";

const supabase = createClient("https://njtszvcppxsouonixcqz.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5qdHN6dmNwcHhzb3Vvbml4Y3F6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTE1NjU3NjUsImV4cCI6MjAyNzE0MTc2NX0.INPNRb0nhhthon8kzSC4C5g0UBE2CNN9ataHYPxgGcw");

const App = () => {
   useEffect(() => {
      log();
   }, [])

   async function log()
   {
      console.log(await supabase.from('accounts').select())
   }
   return (
     <>
        <Routes>
          <Route path="/" element={<Home  supabase={supabase}/>} />
          <Route path="/login" element={<Login  supabase={supabase}/>} />
          <Route path="/register" element={<Register supabase={supabase}/>} />
        </Routes>
     </>
  );
 };
 
 export default App;