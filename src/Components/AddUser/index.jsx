import "./addUser.scss";

const AddUser = (props) => {
  const handleSubmit = (e) => {
    e.preventDefault();

		// add new item
		// axios.post(`/api/${slug}s` , )
  };

  return (
    <div className="addUser">
      <div className="modal">
        <span
          className="close"
          onClick={() => props.setOpen(false)}
        >
          X
        </span>
        <h1>Add new {props.slug}</h1>
        <form onSubmit={handleSubmit}>
          {props.columns
            .filter(
              (item) =>
                item.field !== "id" && item.field !== "img"
            )
            .map((column) => (
              <div className="item" key={column.headerName}>
                <label>{column.headerName}</label>
                <input
                  type={column.type}
                  placeholder={column.field}
                />
              </div>
            ))}
          <button>Send</button>
        </form>
      </div>
    </div>
  );
};

export default AddUser;
