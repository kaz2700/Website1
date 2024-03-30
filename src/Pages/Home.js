import { useContext, useEffect, useState } from "react";
import { LogInContext } from "../Context/LogInContext";
import NavBar from "../Components/NavBar";
import { SupabaseContext } from "../Context/SupabaseContext";

const Home = () => {
  const [username, setUsername] = useState("Stranger");
  const { isLoggedIn } = useContext(LogInContext);
  const supabase = useContext(SupabaseContext);

  useEffect(() => {
    async function fetchUsername() {
      const { data } = await supabase
        .from("accounts")
        .select("username")
        .eq("id", isLoggedIn);
      setUsername(data[0].username);
    }
    if (isLoggedIn !== null) {
      fetchUsername();
    }
  }, [isLoggedIn, supabase]);

  return (
    <>
      <NavBar />
      {isLoggedIn !== null ? "Welcome " + username : "Not welcome"}
    </>
  );
};

export default Home;
