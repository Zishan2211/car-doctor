import { useContext, useEffect, useState } from "react";
import { AuthContex } from "../../Provaider/AuthProvaider";


const Booking = () => {
    const { user } = useContext(AuthContex);
    const [booking, setBooking] = useState([]);
    const url = `http://localhost:5000/booking?email=${user?.email}`;

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setBooking(data))
    }, [url])

    return (
        <div>
            <h2 className="text-3xl">Booking item{booking.length}</h2>
        </div>
    );
};

export default Booking;