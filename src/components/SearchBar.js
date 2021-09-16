import React from "react";

class SearchBar extends React.Component {
  state = { term: '' };

  onInputChange = (event) => {
    this.setState({ term: event.target.value });
    //prin modificarea state cu onInputChange pot extrage din lista
    //this.props.onFormSubmit(this.state.term);
  };
  onFormSubmit = (event) => {
    //prevent default impiedicam sa nu transmita browserul in mod automat
    // ceea ce se introduce
    // daca nu as pune event.preventDefault, dupa introducerea textului
    // in form si as apasa enter, pagina si-ar da refresh si ar disparea textul introdus in form
    event.preventDefault();
    //TODO Make sure we call
    //callback from parent component
    this.props.onFormSubmit(this.state.term);
  };
  render() {
    
      /*segment pune un dreptunghi */
    
    return (
      <div className="search-bar ui segment">
        <form className="ui form" onSubmit={this.onFormSubmit}>
          <div className="field">
            <label>Introduceti video</label>
            <input
              type="text"
              value={this.state.value}
              onChange={this.onInputChange}
            />
          </div>
        </form>
      </div>
    );
  }
}
export default SearchBar;
