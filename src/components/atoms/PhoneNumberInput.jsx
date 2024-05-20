function PhoneNumberInput({ phoneNumber, onChange }) {
  return (
    <div className="w-full flex items-center gap-2 text-sm">
      <label className="min-w-32">휴대전화</label>
      <div className="flex space-x-2 sm:space-x-1">
        <select
          name="areaCode"
          value={phoneNumber.areaCode}
          onChange={onChange}
          className="border p-2 flex-grow"
        >
          <option value="010">010</option>
          <option value="011">011</option>
          <option value="016">016</option>
          <option value="017">017</option>
          <option value="018">018</option>
          <option value="019">019</option>
        </select>
        <input
          type="text"
          name="part1"
          value={phoneNumber.part1}
          onChange={onChange}
          className="border p-2 flex-grow w-24 sm:w-16"
          placeholder=""
        />
        <input
          type="text"
          name="part2"
          value={phoneNumber.part2}
          onChange={onChange}
          className="border p-2 flex-grow w-24 sm:w-16"
          placeholder=""
        />
      </div>
    </div>
  );
}

export default PhoneNumberInput;
