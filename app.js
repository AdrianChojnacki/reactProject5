class Form extends React.Component {
  render() {
    return (
      <form>
        <label>
          Podaj imię:
          <input type="text" name="name" />
        </label>
        <br />
        <label>
          Podaj email:
          <input type="text" name="email" />
        </label>
        <br />
        <button>Zapisz się</button>
      </form>
    );
  }
}

ReactDOM.render(<Form />, document.querySelector(`#root`));
