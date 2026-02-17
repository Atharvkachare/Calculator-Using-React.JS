function Display({ value, onChange }) {
  return (
    <div className="display">
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
}

export default Display;
