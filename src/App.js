import "./App.css";

function App() {
  return (
    <div className="fluid-container d-flex vh-100 flex-column justify-content-between align-items-center">
      <div className="d-flex align-items-center" id="header">
        <header>To Do List</header>
      </div>
      <div className="d-flex justify-content-start" id="to-do">
        <form className="d-flex flex-column">
          <div className="form-group">
            <input type="checkbox" id="1" className="form-check-input" />
            <label htmlFor="1" className="form-check-label">
              Clean living room
            </label>
          </div>
          <div className="form-group">
            <input type="checkbox" id="2" className="form-check-input" />
            <label htmlFor="2" className="form-check-label">
              Clean bathroom
            </label>
          </div>
          <div className="form-group">
            <input type="checkbox" id="3" className="form-check-input" />
            <label htmlFor="3" className="form-check-label">
              Make bed
            </label>
          </div>
          <div className="form-group">
            <input type="checkbox" id="4" className="form-check-input" />
            <label htmlFor="4" className="form-check-label">
              Do laundry
            </label>
          </div>
          <div className="form-group">
            <input type="checkbox" id="5" className="form-check-input" />
            <label htmlFor="5" className="form-check-label">
              Make lunch
            </label>
          </div>
        </form>
      </div>
      <div className="d-flex align-items-center" id="footer">
        &copy;2020 | Jennifer Garst
      </div>
    </div>
  );
}

export default App;
