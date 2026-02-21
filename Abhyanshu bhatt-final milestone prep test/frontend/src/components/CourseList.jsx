import { useEffect, useState } from "react";
import api from "../services/api";

const CourseList = () => {
  const [courses, setCourses] = useState([]);
  const [enrolledCourses, setEnrolledCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");

  const userId = "USER_001";

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const res = await api.get("/courses");
        setCourses(res.data.data);
      } catch {
        setError("Failed to load courses");
      } finally {
        setLoading(false);
      }
    };
    fetchCourses();
  }, []);

  const enroll = async (courseId) => {
    try {
      const res = await api.post("/enroll", { userId, courseId });
      setEnrolledCourses([...enrolledCourses, res.data.data]);
      setMessage("✅ Enrollment successful!");
    } catch (err) {
      if (err.response?.data?.message === "Duplicate enrollment") {
        setMessage("⚠️ You already enrolled in this course.");
      } else {
        setMessage("❌ Network error occurred.");
      }
    }
  };

  if (loading) return <h2 style={{ textAlign: "center" }}>Loading...</h2>;
  if (error) return <h2 style={{ textAlign: "center", color: "red" }}>{error}</h2>;

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>📚 Course Catalog</h2>

      {message && <div style={styles.message}>{message}</div>}

      <div style={styles.grid}>
        {courses.map((course) => (
          <div key={course._id} style={styles.card}>
            <h3>{course.title}</h3>
            <p><strong>Category:</strong> {course.category}</p>
            <p><strong>Price:</strong> ${course.price}</p>

            <button
              style={styles.button}
              onClick={() => enroll(course.courseId)}
            >
              Enroll Now 🚀
            </button>
          </div>
        ))}
      </div>

      <h2 style={styles.heading}>🎓 Enrolled Courses</h2>

      <div style={styles.enrolledBox}>
        {enrolledCourses.length === 0 ? (
          <p>No enrollments yet.</p>
        ) : (
          enrolledCourses.map((e, index) => (
            <div key={index} style={styles.enrolledItem}>
              {e.courseId}
            </div>
          ))
        )}
      </div>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: "1000px",
    margin: "auto",
    padding: "20px",
    textAlign: "center"
  },
  heading: {
    marginBottom: "20px",
    color: "#333"
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    gap: "20px",
    marginBottom: "40px"
  },
  card: {
    background: "#ffffff",
    padding: "20px",
    borderRadius: "12px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
    transition: "transform 0.2s ease-in-out"
  },
  button: {
    marginTop: "10px",
    padding: "10px 15px",
    background: "linear-gradient(45deg, #6a11cb, #2575fc)",
    border: "none",
    borderRadius: "8px",
    color: "#fff",
    cursor: "pointer",
    fontWeight: "bold",
    transition: "0.3s"
  },
  enrolledBox: {
    background: "#f8f9fa",
    padding: "20px",
    borderRadius: "12px",
    boxShadow: "0 2px 8px rgba(0,0,0,0.05)"
  },
  enrolledItem: {
    padding: "10px",
    background: "#e3f2fd",
    margin: "5px 0",
    borderRadius: "6px"
  },
  message: {
    marginBottom: "20px",
    padding: "10px",
    background: "#fff3cd",
    borderRadius: "8px"
  }
};

export default CourseList;
