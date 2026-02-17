function Button({ value, onClick, className }) {
  return (
    <input
      type="button"
      value={value}
      className={className}
      onClick={() => onClick(value)}
    />
  );
}

export default Button;
