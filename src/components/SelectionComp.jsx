const SelectionComp = (props) => {
  return (
    <>
      <div className="mx-[10%] mt-2">
        <h2>Select {props.type}: </h2>
        <select
          className=""
          onChange={(e) => props.handleSelection(e, e.target.value, props.type)}
        >
          <option value="" disabled selected hidden>
            Select
          </option>
          {props.data.map((data, index) => (
            <option key={index} value={data.name}>
              {data.name}
            </option>
          ))}
        </select>
      </div>
    </>
  );
};

export default SelectionComp;
