function TextareaField({ label, value }) {
  return (
    <div className="flex flex-col gap-2">
      <label>{label}</label>
      <textarea
        readOnly
        className="w-full h-32 border p-2 mt-1 text-xs resize-none"
        value={value}
      />
    </div>
  );
}

export default TextareaField;
