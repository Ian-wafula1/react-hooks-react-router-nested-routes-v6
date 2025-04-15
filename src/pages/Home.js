import UserCard from '../components/UserCard';
import { Outlet, useOutletContext } from 'react-router-dom';
// import NavBar from "../components/NavBar";

function Home() {
	const users = useOutletContext();
	const userList = users.map((user) => <UserCard key={user.id} user={user} />);

	return (
		<>
			<main>
				<h1>Home!</h1>
				<Outlet />
				{userList}
			</main>
		</>
	);
}

export default Home;
