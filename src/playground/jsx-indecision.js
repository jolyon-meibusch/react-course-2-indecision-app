

const app = {
  title: 'Indecision App',
  subtitle: 'Help make decisions easy',
  options: []
};

const onFormSubmit = (e) => {
  e.preventDefault();

  const option = e.target.elements.option.value;

  if(option){
    app.options.push(option);
    e.target.elements.option.value = '';
    render();
  } else {

  }
};

const onRemoveAll = () => {
  app.options = [];
  render();
};
const onMakeDecision = () => {
  const randomNum = Math.floor(Math.random() * app.options.length);
  const option = app.options[randomNum];
  alert(option);
};

const appRoot = document.getElementById('app');

// const numbers = [55, 101, 1000];

const render = () => {
  // JSX - JavaScript XML
  const template = (
    <div>
      <h1>{app.title}</h1>
      {app.subtitle && <p>{app.subtitle}</p>}
      <p>{app.options.length > 0 ? 'Here are you options: ' : 'No options'}</p>
      <button disabled={app.options.length ===0} onClick={onMakeDecision}>What should I do?</button>
      <button onClick={onRemoveAll}>Remove All</button>
      {
        // numbers.map((number) => {
        //   return <p key={number}>Number: {number}</p>;
        // })
      }
      <ol>
        {
          app.options.map((option)=><li key={option}>{option}</li>)
        }
      </ol>
      <form onSubmit={onFormSubmit}>
        <input type="text" name="option"/>
        <button>Add Option</button>
      </form>
    </div>
  );

  ReactDOM.render(template, appRoot);
};

render();
