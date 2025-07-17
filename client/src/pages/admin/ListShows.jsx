import React, { useState } from "react";

const ListShows = () => {
  const currency = import.meta.env.VITE_CURRENCY;

  const [shows, setShows] = useState([]);
  const [loading, setLoading] = useState(true);

  return <div>ListShows</div>;
};

export default ListShows;
