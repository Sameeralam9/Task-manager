function Button({ text, color, pd, fn }) {
  return (
    <>
      <button
        onClick={fn}
        className={` rounded cursor-pointer ${pd} ${
          color === "blue"
            ? "text-white bg-blue-600"
            : "text-gray-700 bg-zinc-200"
        }`}
      >
        {text}
      </button>
    </>
  );
}

export default Button;
