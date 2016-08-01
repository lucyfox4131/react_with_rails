var AllSkills = React.createClass({
  getInitialState() {
    return { skills: [] }
  },

  componentDidMount() {
    console.log('Hello');
    $.getJSON('/api/v1/skills.json', (response) => { this.setState({ skills: response }) });
  },


  render() {
    var skills = this.state.skills.map((skill) => {
    return (
      <div key={skill.id}>
        <h3>{skill.name}</h3>
        <p><strong>Level:</strong>{skill.level}</p>
        <p>{skill.details}</p>
      </div>
      )
    });

    return(
      <div>
      {skills}
      </div>
    )
  }
});
