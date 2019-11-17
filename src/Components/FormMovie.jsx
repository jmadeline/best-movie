import React from 'react';

class FormMovie extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movieName: '',
      movieUrl: '',
      movieComment: '',
    }
  }

  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  submitForm = (e) => {
    e.preventDefault();
  }

  render() {
    return (
      <div className="FormMovie">
        <h1>Saisi d'un film</h1>

        <form onSubmit={this.submitForm}>
          <fieldset>
            <legend>Informations</legend>
            <div className="form-data">
              <label htmlFor="lastname">Nom</label>
              <input
                type="text"
                id="lastname"
                name="lastname"
                onChange={this.onChange}
                value={this.state.lastname}
              />
            </div>

            <div className="form-data">
              <label htmlFor="firstname">Prénom</label>
              <input
                type="text"
                id="firstname"
                name="firstname"
                onChange={this.onChange}
                value={this.state.firstname}
              />
            </div>

            <div className="form-data">
              <label htmlFor="email">E-mail</label>
              <input
                type="email"
                id="email"
                name="email"
                onChange={this.onChange}
                value={this.state.email}
              />
            </div>
            <hr />
            <div className="form-data">
              <input type="submit" value="Envoyer" />
            </div>
          </fieldset>
        </form>
      </div>
    )
  }
}

export default FormMovie;
