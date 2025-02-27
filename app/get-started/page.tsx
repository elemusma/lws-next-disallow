import CalendlyWidget from "../components/calendly";
import Footer from "../components/footer";
import Main from "../js/main";

export default function GetStarted() {
  return (
    <>
      <Main />
      <section
        style={{ paddingTop: 150, paddingBottom: 100 }}
        className="relative"
        id="schedule"
      >
        <div className="container mx-auto px-4">
          <div
            className="flex justify-center -mx-4"
            style={{ flexWrap: "wrap" }}
          >
            <div className="px-4 text-center lg:w-1/2">
              <h2>How to Get Started</h2>
              <p>
                Schedule a time below to discuss ideas to help you save time
                while growing your business.
              </p>
            </div>
            <div className="px-4 text-center w-full" id="calendar">
              {/* <!-- Calendly inline widget begin --> */}
              <CalendlyWidget />
              {/* <!-- Calendly inline widget end --> */}
            </div>
          </div>
        </div>
      </section>

      <section className="quote-section text-center relative">
        <p>
          <strong>
            If you are not willing to risk the unusual, you will have to settle
            for the ordinary.
          </strong>
          <br />
          <em>Jim Rohn</em>
        </p>
      </section>
      <Footer />
    </>
  );
}
