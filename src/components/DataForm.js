const DataForm = props => {

  const handleTitleChange = evt => {
    const {value} = evt.target;
    props.onTitleChange(value);
  }

  const handleTimeChange = evt => {
    const {value} = evt.target;
    props.onTimeChange(value);
  }

  const handleSubmit = evt => {
    evt.preventDefault();
    props.addWatch();
  }

  return (
    <form className="DataForm" onSubmit={handleSubmit}>
      <div className="block">
        <div className="title">
          Название
        </div>
        <div className="input">
          <input value={props.titleValue} onChange={handleTitleChange} required />
        </div>
      </div>
      <div className="block">
        <div className="title">
          Временная зона
        </div>
        <div className="input">
          <input type="number" value={props.timeValue} onChange={handleTimeChange} required />
        </div>
      </div>
      <div className="block">
        <div className="submit">
          <button>
            Добавить
          </button>
        </div>
      </div>
    </form>
  )
}

export default DataForm;