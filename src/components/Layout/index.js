export default function({ React, Header, ContentSection, Footer, Code }) {
  function Layout() {
    return (
      <div>
        <Header />
        <ContentSection>
          <h1>
            Choices.js is a lightweight, configurable select box/text input
            plugin.
          </h1>
          <p>
            Similar to Select2 and Selectize but without the jQuery dependency.
          </p>
          <Code>npm install choices.js</Code>
          <hr />
          <h3>Setup</h3>
          <Code>const choices = new Choices(elements);</Code>
        </ContentSection>
        <Footer />
      </div>
    );
  }

  return Layout;
}
