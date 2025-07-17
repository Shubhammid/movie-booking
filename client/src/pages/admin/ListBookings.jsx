import React from 'react'

const ListBookings = () => {

  const currency = import.meta.env.VITE_CURRENCY;
  
  const [bookings, setBookings] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div>ListBookings</div>
  )
}

export default ListBookings