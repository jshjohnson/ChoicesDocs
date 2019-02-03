export default function({ React, Header, ContentSection, Footer }) {
  function ExamplesPage() {
    return (
      <div>
        <Header />
        <ContentSection>
          <h1>Examples</h1>
          <h2>Text input</h2>
          <hr />
          <h2>Single select</h2>
          <hr />
          <h2>Multiple select</h2>
          <hr />
        </ContentSection>
        <Footer />
      </div>
    );
  }

  return ExamplesPage;
}
