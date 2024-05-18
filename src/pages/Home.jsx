import { SectionsContainer, Section } from "react-fullpage";

function Home() {
  const options = {
    activeClass: "active",
    anchors: ["One", "Two"],
    arrowNavigation: true,
    delay: 900,
    navigation: true,
    scrollBar: false,
  };

  return (
    <SectionsContainer {...options}>
      <Section>
        <div className="w-full h-screen bg-home-1 bg-no-repeat bg-cover"></div>
      </Section>

      <Section>
        <div className="w-full h-screen bg-home-2 bg-no-repeat bg-cover"></div>
      </Section>
    </SectionsContainer>
  );
}

export default Home;
