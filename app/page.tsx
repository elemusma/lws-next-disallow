// import GoogleReviews from "./components/google_reviews";
import Image from "next/image";
import CalendlyWidget from "./components/calendly";
import Footer from "./components/footer";
import Main from "./js/main";
import "./styles/body.scss";

export default function Home() {
  const currentYear = new Date().getFullYear();
  return (
    <>
      <Main />
      <main>
        <section className="hero" style={{}}>
          <div className="container mx-auto px-4">
            <div className="flex justify-between -mx-4">
              <div className="lg:w-8/12 w-1/9 px-4">
                <h1 className="text-secondary animated-heading">
                  Full-Stack Web &amp; Software Engineering
                </h1>
                <h2>iOS, Android, &amp; Web Apps</h2>
                <div className="lg:w-9/12 w-1/9">
                  <p>
                    Position your startup for successful funding rounds and
                    expand your business reach with robust cross-platform app
                    development. Scale your business effectively in{" "}
                    {currentYear} and beyond.
                  </p>
                  {/* <Login /> */}
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
          <div className="container-fluid mx-auto px-4">
            <div className="flex flex-wrap justify-between -mx-4">
              <div className="lg:w-1/3 w-full lg:pt-8 lg:pb-8 pt-4 pb-4 px-4 lg:text-center text-white">
                <h2 className="h3" style={{}}>
                  Custom web &amp; software solutions.
                </h2>
              </div>
              <div
                className="lg:w-1/3 w-full lg:pt-8 lg:pb-8 pt-4 pb-4 px-4 lg:text-center text-white"
                style={{ backgroundColor: "var(--accent-quaternary)" }}
              >
                <h2 className="h3">Cross-platform apps for every device.</h2>
              </div>
              <div className="lg:w-1/3 w-full lg:pt-8 lg:pb-8 pt-4 pb-4 px-4 lg:text-center text-white">
                <h2 className="h3">
                  Streamline, fund, and scale effortlessly.
                </h2>
              </div>
            </div>
          </div>
        </section>

        <section style={{ paddingTop: 200, paddingBottom: 100 }}>
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap -mx-4">
              <div className="w-full pb-8 px-4 text-center">
                <h2>
                  Are you struggling to streamline your software processes?
                </h2>
              </div>
              <div className="lg:w-1/2 w-full px-4">
                <ul style={{ textShadow: "0px 0px 3px white" }}>
                  <li>
                    Are you trying to figure out the best tech stack for your
                    MVP?
                  </li>
                  <li>Do your apps lack cross-platform compatibility?</li>
                  <li>
                    Are you spending too much time on inefficient systems?
                  </li>
                  <li>Is scaling your startup a constant challenge?</li>
                </ul>
              </div>
              <div className="lg:w-1/2 w-full px-4">
                <ul style={{ textShadow: "0px 0px 3px white" }}>
                  <li>Are your tech operations holding back your growth?</li>
                  <li>
                    Do you need better infrastructure for funding success?
                  </li>
                  <li>
                    Are you missing out on software optimization opportunities?
                  </li>
                </ul>
              </div>
              <div className="w-full pb-8 px-4 text-center">
                <div style={{ marginTop: 15 }}>
                  <a href="#schedule" className="btn-main">
                    Schedule a Call
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* <section className={`light`}>
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
        </section> */}

        {/* <blockquote>
          <p>The best way out is always through - Robert Frost</p>
        </blockquote> */}

        <section className={``} style={{ paddingTop: 100, paddingBottom: 100 }}>
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap flex-row-reverse -mx-4 lg:justify-center justify-end">
              <div className="w-3/12 pt-8 pb-8 px-4">
                <Image
                  src="/assets/Headshot_1.png"
                  alt="Logo"
                  width={75}
                  height={75}
                  className=""
                  style={{
                    width: "100%",
                  }}
                />
              </div>
              <div className="lg:w-1/2 w-11/12 lg:pt-8 pb-8 px-4">
                <h2>What Makes Latino Web Studio Different?</h2>
                <p>
                  Struggling to scale your business and develop robust apps?
                  Specializing in cross-platform solutions, this approach
                  simplifies tech operations and supports your funding goals.
                  Years of experience and a proven track record in scalable,
                  efficient software back these solutions. Is your business
                  ready to unlock its true potential with innovative
                  engineering?
                </p>
                <div style={{ marginTop: 15 }}>
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
          style={{
            backgroundColor: "var(--accent-quaternary)",
            marginTop: 100,
            marginBottom: 100,
          }}
        >
          <div className="container-fluid mx-auto px-4">
            <div className="flex flex-wrap justify-between -mx-4">
              <div
                className="lg:w-1/3 w-full pt-8 pb-8 text-center"
                style={{ backgroundColor: "var(--accent-secondary)" }}
              >
                <h2
                  className="h3 flex items-center lg:justify-center px-4"
                  style={{}}
                >
                  <span
                    className="flex justify-center items-center"
                    style={{
                      borderRadius: "50%",
                      height: 35,
                      width: 35,
                      marginRight: 8,
                      backgroundColor: "var(--accent-primary)",
                    }}
                  >
                    1.
                  </span>
                  <span className="text-white">Schedule Free Consultation</span>
                </h2>
              </div>
              <div
                className="lg:w-1/3 w-full pt-8 pb-8 text-center px-4"
                style={{ backgroundColor: "var(--accent-tertiary)" }}
              >
                <h2
                  className="h3 flex items-center lg:justify-center"
                  style={{}}
                >
                  <span
                    className="text-white flex justify-center items-center"
                    style={{
                      borderRadius: "50%",
                      height: 35,
                      width: 35,
                      marginRight: 8,
                      backgroundColor: "var(--accent-secondary)",
                    }}
                  >
                    2.
                  </span>
                  <span>Understand Your Vision</span>
                </h2>
              </div>
              <div
                className="lg:w-1/3 w-full pt-8 pb-8 text-center px-4"
                style={{ backgroundColor: "var(--accent-primary)" }}
              >
                <h2
                  className="h3 flex items-center lg:justify-center"
                  style={{}}
                >
                  <span
                    className="flex justify-center items-center"
                    style={{
                      borderRadius: "50%",
                      height: 35,
                      width: 35,
                      marginRight: 8,
                      backgroundColor: "white",
                    }}
                  >
                    3.
                  </span>
                  <span>Launch Scalable Software</span>
                </h2>
              </div>
            </div>
          </div>
        </section>

        <section style={{ paddingTop: 100, paddingBottom: 100 }} id="schedule">
          <div className="container mx-auto px-4">
            <div
              className="flex justify-center -mx-4"
              style={{ flexWrap: "wrap" }}
            >
              <div className="px-4 text-center lg:w-1/2 pb-5">
                <h2>How to Get Started</h2>
                <p>
                  If you are a <strong>startup founder</strong> wanting to
                  create a cross-platform app or a{" "}
                  <strong>business owner</strong> looking to grow, schedule a
                  call using the calendar below.
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

        <section className="quote-section text-center">
          <p>
            <strong>
              If you are not willing to risk the unusual, you will have to
              settle for the ordinary.
            </strong>
            <br />
            <em>Jim Rohn</em>
          </p>
        </section>
      </main>
      <Footer />
    </>
  );
}
