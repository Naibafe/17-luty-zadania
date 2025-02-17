import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useParams,
} from "react-router-dom";

export default function Zadanie2() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/user/:id" element={<UserProfile />} />
      </Routes>
    </BrowserRouter>
  );
}

function Home() {
  const users = [
    { id: 1, name: "Jan Kowalski" },
    { id: 2, name: "Anna Nowak" },
    { id: 3, name: "Piotr Wiśniewski" },
  ];
  return (
    <div className="container">
      <h1>Lista użytkowników</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <Link to={`/user/${user.id}`}>{user.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

function UserProfile() {
  const users = [
    { id: 1, name: "Jan Kowalski", age: 30, bio: "Frontend Developer" },
    { id: 2, name: "Anna Nowak", age: 25, bio: "UI/UX Designer" },
    { id: 3, name: "Piotr Wiśniewski", age: 28, bio: "Full Stack Developer" },
  ];
  const { id } = useParams();
  const user = users.find((user) => user.id === parseInt(id));

  if (!user) {
    return <h2>Użytkownik nie znaleziony</h2>;
  }

  return (
    <div className="container">
      <h1>Profil użytkownika</h1>
      <p>
        <strong>Imię:</strong> {user.name}
      </p>
      <p>
        <strong>Wiek:</strong> {user.age}
      </p>
      <p>
        <strong>Bio:</strong> {user.bio}
      </p>
      <Link to="/">← Powrót do listy</Link>
    </div>
  );
}
