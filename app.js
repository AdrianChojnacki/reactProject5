class Form extends React.Component {
  state = {
    city: "Londyn",
    text: "...",
    like: true,
    visits: "1",
  };

  handleChange = (e) => {
    if (e.target.type === "checkbox") {
      this.setState({
        [e.target.name]: e.target.checked,
      });
    } else {
      this.setState({
        [e.target.name]: e.target.value,
      });
    }
  };

  render() {
    return (
      <div>
        <label>
          Podaj miasto:
          <input name="city" value={this.state.city} onChange={this.handleChange} type="text" />
        </label>
        <br />
        <label>
          Napisz coś o tym mieście:
          <textarea name="text" value={this.state.text} onChange={this.handleChange}></textarea>
        </label>
        <br />
        <label>
          Czy lubisz to miasto?
          <input
            name="like"
            checked={this.state.like}
            onChange={this.handleChange}
            type="checkbox"
          />
        </label>
        <br />
        <label>
          Ile razy byłeś w tym mieście?
          <select name="visits" value={this.state.visits} onChange={this.handleChange}>
            <option value="0">0</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="more">więcej</option>
          </select>
        </label>
      </div>
    );
  }
}

ReactDOM.render(<Form />, document.querySelector(`#root`));
