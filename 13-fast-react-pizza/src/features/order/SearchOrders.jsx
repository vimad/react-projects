import { useState } from "react";
import { useNavigate } from "react-router-dom";

function SearchOrders() {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    if (!query) return;
    navigate(`/order/${query}`);
    setQuery("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Search order #"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="tyext-sm rounded-full bg-yellow-100 px-4 py-2"
      />
    </form>
  );
}

export default SearchOrders;
