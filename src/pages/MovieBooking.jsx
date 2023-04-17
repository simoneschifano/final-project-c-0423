import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
const MovieBooking = () => {
	const { id } = useParams();
	return (
		<div>
			Prenota
			<Link to={`/ticket/${id}/payment`}>Vai al pagamento</Link>
		</div>
	);
};

export default MovieBooking;
