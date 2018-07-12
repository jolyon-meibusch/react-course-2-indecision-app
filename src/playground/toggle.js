let visibility = false;

const toggleVisibility = () => {
  visibility = !visibility;
  render();
};

const render = () => {
  const jsx = (
    <div>
      <h1>Visability Toggle</h1>
      <button onClick={toggleVisibility}>
        {visibility ? 'Hide Details' : 'Show Details'}
      </button>
      {visibility && (
        <div>
          <p>Hey these are some details you can now see</p>
        </div>
      )}
    </div>
  );
  ReactDOM.render(jsx, document.getElementById('app'));
};

render();