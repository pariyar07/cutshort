const Form = ({ formData }) => {
  return (
    <form className="flex flex-col laptop:mt-8 w-full gap-6">
      {formData.map((value) => {
        return (
          <label key={value.label}>
            {value.label}
            {value.labelSpan === "" ? "" : <span>{value.labelSpan}</span>}
            <input
              type="text"
              name="name"
              placeholder={value.placeholder}
              className="block border border-placeholder rounded px-4 py-2 w-full"
            />
          </label>
        );
      })}
    </form>
  );
};

export default Form;
