import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const Stars = ({ rating, onChange }) => {
	const [hover, setHover] = useState(0);

	return (
		<div>
			{[1, 2, 3, 4, 5].map((value) => (
				<FontAwesomeIcon
					key={value}
					icon={faStar}
					size="lg"
					onClick={() => onChange(value)}
					onMouseEnter={() => onChange && setHover(value)}
					onMouseLeave={() => onChange && setHover(0)}
					style={{
						cursor: "pointer",
						color: value <= (hover || rating) ? "#FFD43B" : "CCCCCC",
						transition: "color 0.2s",
					}}
				/>
			))}
		</div>
	);
};

export default Stars;
