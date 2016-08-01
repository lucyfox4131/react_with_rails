var NewSkill = React.createClass({
  handleClick(){
    var name = this.refs.name.value;
    var details = this.refs.details.value;

    $.ajax({
      url: '/api/v1/skills',
      type: 'POST',
      data: { skill: {name: name, details: details} },
      success: (response) => {
        console.log('it worked!', response);
      }
    });
  },

  render(){
    return(
      <div>
        <h1>Add a New Skill:</h1>
        <input ref='name' placeholder='Enter name of skill' />
        <input ref='details' placeholder='Details' />
        <button onClick={this.handleClick}>Submit</button>
      </div>
    )
  }
});