// helper function for generation of dummy text
function renderParagraphs(count) {
  let output = [];

  for (let i = 0; i < count; i++) {
    output.push(
      <p key={i}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </p>
    );
  }

  return output;
}

function Content(props) {
  return (
    <section className="app-content">
      <h2>Hello World</h2>
      {renderParagraphs(props.paragraphs)}
    </section>
  );
}

export default Content;
