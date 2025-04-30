import type { ChangeEvent, FormEvent } from "react";
import { useState } from "react";
import "./App.css";

type User = {
	firstname: string;
	lastname: string;
	age: number;
	favoriteFoods: Food[];
};
type Food = "Chicken" | "Beef" | "Vegetables" | "Dessert" | "Pork";

const App = () => {
	const [user, setUser] = useState<User>({
		firstname: "",
		lastname: "",
		age: 0,
		favoriteFoods: [],
	});

	const [message, setMessage] = useState<string>("");

	const resetForm = () => {
		setUser({
			firstname: "",
			lastname: "",
			age: 0,
			favoriteFoods: [],
		});
		setMessage("");
	};

	const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
		const { name, value, type, checked } = event.target;
		if (type === "checkbox") {
			setUser((prevUser) => ({
				...prevUser,
				favoriteFoods: checked
					? [...prevUser.favoriteFoods, value as Food]
					: prevUser.favoriteFoods.filter((food) => food !== value),
			}));
		} else {
			setUser((prevUser) => ({
				...prevUser,
				[name]: type === "number" ? Number(value) : value,
			}));
		}
	};

	const handleSubmit = (event: FormEvent) => {
		event.preventDefault();
		const greeting = `Hello ${user.firstname} ${user.lastname}, you are ${user.age} years old and your favorite foods are ${user.favoriteFoods.join(", ")}.`;
		setMessage(greeting);
		resetForm;
	};

	const handleClear = () => {
		resetForm();
	};

	return (
		<div className="form-container">
			<h1>User Form</h1>
			<form onSubmit={handleSubmit}>
				<div>
					<label htmlFor="firstname">First Name:</label>
					<input
						type="text"
						id="firstname"
						name="firstname"
						onChange={handleInputChange}
						value={user.firstname}
					/>
				</div>
				<div>
					<label htmlFor="lastname">Last Name:</label>
					<input
						type="text"
						id="lastname"
						name="lastname"
						onChange={handleInputChange}
						value={user.lastname}
					/>
				</div>
				<div>
					<label htmlFor="age">Age:</label>
					<input
						type="number"
						id="age"
						name="age"
						onChange={handleInputChange}
						value={user.age}
					/>
				</div>
				<div>
					<h2>Favorite Foods:</h2>
					{(["Chicken", "Beef", "Vegetables", "Dessert", "Pork"] as Food[]).map(
						(food) => (
							<div key={food}>
								<input
									type="checkbox"
									id={food.toLowerCase()}
									name="favoriteFoods"
									value={food}
									onChange={handleInputChange}
									checked={user.favoriteFoods.includes(food)}
								/>
								<label htmlFor={food.toLowerCase()}>{food}</label>
							</div>
						),
					)}
				</div>
			</form>

			<button type="button" onClick={handleSubmit}>
				Display User
			</button>
			<button type="button" onClick={handleClear}>
				Clear
			</button>

			{message && (
				<div className="output">
					<p>{message}</p>
				</div>
			)}
		</div>
	);
};

export default App;
