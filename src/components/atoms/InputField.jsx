function InputField({ label, type, name, value, onChange, placeholder, info }) {
  return (
    <>
      <div className="w-full flex items-center gap-2">
        <label htmlFor={name} className="min-w-32">
          {label}
        </label>
        <input
          type={type}
          id={name}
          name={name}
          value={value}
          onChange={onChange}
          className="border p-2"
          placeholder={placeholder}
        />
        {info && <span className="text-xs sm:hidden">{info}</span>}
      </div>
    </>
  );
}

export default InputField;
