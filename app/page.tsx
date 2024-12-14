// import GoogleReviews from "./components/google_reviews";
import CalendlyWidget from "./components/calendly";
import Main from "./js/main";

export default function Home() {
  return (
    <>
      <Main />
      <main>
        <section style={{ paddingBottom: 100, minHeight: "61.6vh" }}>
          <div className="container mx-auto px-4">
            <div className="flex justify-between -mx-4">
              <div className="lg:w-8/12 w-1/9 px-4">
                <h1 className="text-secondary">
                  Full-Stack Web &amp; Software Engineering Solutions
                </h1>
                <h2>iOS, Android, &amp; Web Cross-Platform Apps</h2>
                <div className="lg:w-9/12 w-1/9">
                  <p>
                    Full-Stack Web & Software Engineering Solutions. Enhance
                    your software infrastructure, streamline operations,
                    position your startup for funding success, and scale your
                    business in 2025.
                  </p>
                </div>
                <div>
                  <a href="#schedule" className="btn-main">
                    Schedule a Call
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          className=""
          style={{ backgroundColor: "var(--accent-secondary)" }}
        >
          <div className="container mx-auto px-4">
            <div className="flex justify-between -mx-4">
              <div className="lg:w-1/3 w-1/9 pt-8 pb-8 text-center text-white">
                <h2 className="h3" style={{}}>
                  Custom web &amp; software solutions.
                </h2>
              </div>
              <div
                className="lg:w-1/3 w-1/9 pt-8 pb-8 text-center text-white"
                style={{ backgroundColor: "var(--accent-quaternary)" }}
              >
                <h2 className="h3">Cross-platform apps for every device.</h2>
              </div>
              <div className="lg:w-1/3 w-1/9 pt-8 pb-8 text-center text-white">
                <h2 className="h3">
                  Streamline, fund, and scale effortlessly.
                </h2>
              </div>
            </div>
          </div>
        </section>

        <section style={{}}>
          <div className="container mx-auto px-4">
            <div className="flex -mx-4">
              <div className="lg:w-1/2 w-1/9 pt-8 pb-8 px-4">
                <h2>Driving Innovation, Scaling Solutions</h2>
                <p>
                  Full-Stack Web & Software Engineering Solutions. Enhance your
                  software infrastructure, streamline operations, position your
                  startup for funding success, and scale your business in 2024.
                </p>
                <p>
                  Custom web & software solutions. Cross-platform apps for every
                  device. Streamline, fund, and scale effortlessly.
                </p>
                <p>
                  Are you struggling to streamline your software processes? Do
                  your apps lack cross-platform compatibility? Is scaling your
                  startup a constant challenge?
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className={`light`}>
          <h2>👩🏽‍🚀 Services Offered</h2>
          <p>
            Build apps that seamlessly work on iOS, Android, and Web, saving
            time and resources. Create systems that grow with your business to
            ensure future readiness. Automate and simplify workflows, reducing
            inefficiencies and operational costs.
          </p>

          <h2>🏆 What Makes Us Different?</h2>
          <p>
            Struggling to scale your business and develop robust apps?
            Specializing in cross-platform solutions, this approach simplifies
            tech operations and supports your funding goals. Years of experience
            and a proven track record in scalable, efficient software back these
            solutions.
          </p>
        </section>

        <blockquote>
          <p>The best way out is always through - Robert Frost</p>
        </blockquote>

        <section className={`left`}>
          <h2>🌮 Testimonials</h2>
          {/* <GoogleReviews /> */}
          <p>
            Tadeo is very professional and a great communicator! Highly
            recommended! - Orion Madsen
          </p>
          <p>
            Latino Web Studio & Tadeo have been amazing to work with! High
            quality work, a gold standard in what he provides. El Mejor de
            todos! - Johnny Oceguera
          </p>
          <p>
            I had the pleasure of working with Tadeo Martinez from Latino Web
            Studio, and the experience was nothing short of exceptional. -
            Mauricio Mendoza
          </p>
        </section>

        <section style={{ gridColumn: "2 / 12" }} id="schedule">
          <div className="container mx-auto px-4">
            <div className="flex justify-between -mx-4">
              <div className="px-4 text-center">
                <h2>How to Get Started</h2>
                <p>
                  If you are a startup founder or business owner looking to
                  scale operations and build robust, cross-platform apps,
                  schedule a call using the calendar below. The next steps will
                  assess your needs and ensure the TechFusion System is the
                  right fit for your business.
                </p>
                {/* <!-- Calendly inline widget begin --> */}
                <CalendlyWidget />
                {/* <!-- Calendly inline widget end --> */}
              </div>
            </div>
          </div>
        </section>

        <blockquote>
          <p>Thanks for visiting!</p>
        </blockquote>
      </main>
    </>
  );
}
