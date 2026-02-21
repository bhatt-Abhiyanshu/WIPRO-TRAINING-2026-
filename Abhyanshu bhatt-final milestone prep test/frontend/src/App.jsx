import CourseList from "./components/CourseList";

function App() {
  return (
    <div style={styles.app}>
      <h1 style={styles.title}>🎓 SmartLearn Portal</h1>
      <CourseList />
    </div>
  );
}

const styles = {
  app: {
    minHeight: "100vh",
    background: "linear-gradient(to right, #74ebd5, #acb6e5)",
    padding: "20px"
  },
  title: {
    textAlign: "center",
    marginBottom: "30px",
    color: "#222"
  }
};

export default App;
