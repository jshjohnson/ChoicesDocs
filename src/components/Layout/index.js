export default function({ React, Header, ContentSection, Footer, Code }) {
  function Layout() {
    return (
      <div>
        <Header />
        <ContentSection>
          <p>
            Choices.js is a lightweight, configurable select box/text input
            plugin.
          </p>
          <p>
            Similar to Select2 and Selectize but without the jQuery dependency.
          </p>
          <Code>npm install choices.js</Code>
        </ContentSection>
        <Footer />
      </div>
    );
  }

  return Layout;
}
