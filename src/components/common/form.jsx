const Form = ({ formData }) => {
  return (
    <form className="flex flex-col laptop:mt-8 w-full gap-6">
      {formData.map((value) => {
        return (
          <label key={value.label}>
            {value.label}
            {value.labelSpan === "" ? (
              ""
            ) : (
              <span className="text-placeholder">{value.labelSpan}</span>
            )}
            {value.url ? (
              <div className="flex gap-4 border border-placeholder rounded w-full">
                <span className="text-gray bg-placeholder pt-3 laptop:py-2 px-2 text-xs laptop:text-base">
                  {value.url}
                </span>
                <input
                  type="text"
                  name="name"
                  placeholder={value.placeholder}
                  className="px-1 laptop:px-4 py-2"
                />
              </div>
            ) : (
              <input
                type="text"
                name="name"
                placeholder={value.placeholder}
                className="block border border-placeholder rounded px-4 py-2 w-full"
              />
            )}
          </label>
        );
      })}
    </form>
  );
};

export default Form;
