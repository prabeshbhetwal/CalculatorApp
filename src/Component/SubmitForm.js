export const SubmitForm = ({
  textValue,
  onSubmitValue,
  handleChange,
  handleSubmit,
}) => {
  return (
    <form onSubmit={onSubmitValue}>
      <input type="text" value={textValue} onChange={handleChange} />
      <button type="submit" onClick={handleSubmit}>
        Submit
      </button>
    </form>
  );
};
