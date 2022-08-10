const Form = ({ formData }) => {
  return (
    <form>
      {formData.map((value) => {
        return (
          <label>
            {value.label}
            {value.labelSpan === "" ? "" : <span>{value.labelSpan}</span>}
            <input type="text" name="name" placeholder={value.placeholder} />
          </label>
        );
      })}
    </form>
  );
};

export default Form;
