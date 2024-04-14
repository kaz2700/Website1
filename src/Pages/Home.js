import { useContext, useEffect, useState } from "react";
import { LogInContext } from "../Context/LogInContext";
import NavBar from "../Components/NavBar";
import { SupabaseContext } from "../Context/SupabaseContext";

const Home = () => {
  const [username, setUsername] = useState("Stranger");
  const { accountId } = useContext(LogInContext);
  const supabase = useContext(SupabaseContext);

  useEffect(() => {
    async function fetchUsername() {
      const { data } = await supabase
        .from("accounts")
        .select("username")
        .eq("id", accountId);
      setUsername(data[0].username);
    }
    if (accountId !== null) {
      fetchUsername();
    }
  }, [accountId, supabase]);

  return (
    <>
      <NavBar />
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 text-center leading-tight tracking-tight mb-4">
          {localStorage.getItem("loggedInUser") !== null ? "Welcome " + JSON.parse(localStorage.getItem("loggedInUser")).username : "Not welcome"}
        </h1>
    </>
  );
};

export default Home;
