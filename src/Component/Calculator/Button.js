export const Button = ({ className, label, handleButton }) => {
  return (
    <div className={"btn btn-" + className} onClick={() => handleButton(label)}>
      {label}
    </div>
  );
};
