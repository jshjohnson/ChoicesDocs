export default function({ React, Header, ContentSection, Footer }) {
  function ErrorPag() {
    return (
      <div>
        <Header />
        <ContentSection>
          <h1>404 - Page not found.</h1>
        </ContentSection>
        <Footer />
      </div>
    );
  }

  return ErrorPag;
}
