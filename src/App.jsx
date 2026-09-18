function StatusBadge({ isAvailable }) {
  return (
    <span className={isAvailable ? "status-open" : "status-busy"}>
      {isAvailable ? "Open to work" : "Busy learning"}
    </span>
  );
}

function App() {
  const name = "Yoeun Seyha";

  return (
    <div className="profile">
      <h1>{name}</h1>

      <p>
        My goal is to build strong React fundamentals and become a better
        full-stack developer.
      </p>

      <StatusBadge isAvailable={true} />
    </div>
  );
}

export default App;
