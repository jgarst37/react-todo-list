function App() {
  return (
    <>
      <header>To Do List</header>
      <div id="middle">
        <div id="to-do">
          <form>
            <div className="task-item">
              <input type="checkbox" id="1" />
              <label htmlFor="1">Clean living room</label>
            </div>
            <div className="task-item">
              <input type="checkbox" id="2" />
              <label htmlFor="2">Clean bathroom</label>
            </div>
            <div className="task-item">
              <input type="checkbox" id="3" />
              <label htmlFor="3">Make bed</label>
            </div>
            <div className="task-item">
              <input type="checkbox" id="4" />
              <label htmlFor="4">Do laundry</label>
            </div>
            <div className="task-item last-item">
              <input type="checkbox" id="5" />
              <label htmlFor="5">Make lunch</label>
            </div>
          </form>
          <div id="controls"></div>
        </div>
      </div>
      <footer>&copy;2020 | Jennifer Garst</footer>
    </>
  );
}

export default App;
