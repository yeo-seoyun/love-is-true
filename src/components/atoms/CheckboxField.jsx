function CheckboxField({ name, label, checked, onChange, description }) {
  const inputId = `${name}Checkbox`;

  return (
    <div className="w-full flex items-center gap-2 text-sm">
      <p className="min-w-32">{label}</p>
      <input
        type="checkbox"
        id={inputId}
        name={name}
        checked={checked}
        onChange={onChange}
        className="h-4 w-4 text-blue-600 border-gray-300 rounded"
      />
      <label htmlFor={inputId} className="">
        동의함
      </label>
      {description && (
        <span className="text-xs ml-2 sm:hidden">{description}</span>
      )}
    </div>
  );
}

export default CheckboxField;
