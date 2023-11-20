import useDataFetching from "../hooks/useDataFetching";
import useFormSubmit from "../hooks/useFormSubmit";

function Home() {
  const { data, goodDay, setData } = useDataFetching();
  const { name, setName, email, setEmail, handleSubmit } = useFormSubmit();

  function onSubmit(e) {
    e.preventDefault();
    handleSubmit(setData);
  }

  return (
    <div>
      <p>{`Greetings: ${goodDay.greet || "Loading..."}`}</p>
      Home town
      {data.map((user, i) => (
        <h1 key={i}>{user.name}</h1>
      ))}
      <form onSubmit={onSubmit}>
        <label>Name: </label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label>Email: </label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Home;
