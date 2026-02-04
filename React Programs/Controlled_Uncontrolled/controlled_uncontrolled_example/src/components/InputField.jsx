const InputField = ({ type, placeholder, inputRef, error }) => {
  return (
    <div style={{ marginBottom: "10px" }}>
      <input
        type={type}
        placeholder={placeholder}
        ref={inputRef}
      />
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
};

export default InputField;
