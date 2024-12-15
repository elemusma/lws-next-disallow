// import GoogleReviews from "./components/google_reviews";
import Image from "next/image";
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
          <div className="container-fluid mx-auto px-4">
            <div className="flex flex-wrap justify-between -mx-4">
              <div className="lg:w-1/3 w-full pt-8 pb-8 text-center text-white">
                <h2 className="h3" style={{}}>
                  Custom web &amp; software solutions.
                </h2>
              </div>
              <div
                className="lg:w-1/3 w-full pt-8 pb-8 text-center text-white"
                style={{ backgroundColor: "var(--accent-quaternary)" }}
              >
                <h2 className="h3">Cross-platform apps for every device.</h2>
              </div>
              <div className="lg:w-1/3 w-full pt-8 pb-8 text-center text-white">
                <h2 className="h3">
                  Streamline, fund, and scale effortlessly.
                </h2>
              </div>
            </div>
          </div>
        </section>

        <section style={{ paddingTop: 200, paddingBottom: 100 }}>
          <div className="container mx-auto px-4">
            <div className="flex -mx-4">
              <div className="lg:w-1/2 w-12/12 pt-8 pb-8 px-4">
                <h2>
                  Are you struggling to streamline your software processes?
                </h2>
                <ul>
                  <li>Do your apps lack cross-platform compatibility?</li>
                  <li>Are you spending too much on inefficient systems?</li>
                  <li>Is scaling your startup a constant challenge?</li>
                  <li>Are your tech operations holding back your growth?</li>
                  <li>
                    Do you need better infrastructure for funding success?
                  </li>
                  <li>
                    Are you missing out on software optimization opportunities?
                  </li>
                </ul>
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
                  src="/assets/Headshot.png"
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
                  engineering? Schedule a call today to explore how these
                  solutions can help.
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
                <h2 className="h3 flex items-center justify-center" style={{}}>
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
                className="lg:w-1/3 w-full pt-8 pb-8 text-center"
                style={{ backgroundColor: "var(--accent-tertiary)" }}
              >
                <h2 className="h3 flex items-center justify-center" style={{}}>
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
                className="lg:w-1/3 w-full pt-8 pb-8 text-center"
                style={{ backgroundColor: "var(--accent-primary)" }}
              >
                <h2 className="h3 flex items-center justify-center" style={{}}>
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
              <div className="px-4 text-center lg:w-1/2">
                <h2>How to Get Started</h2>
                <p>
                  If you are a <strong>startup founder</strong> or{" "}
                  <strong>business owner</strong> looking to scale operations
                  and build robust, cross-platform apps, schedule a call using
                  the calendar below.
                </p>
              </div>
              <div className="px-4 text-center w-9/12">
                {/* <!-- Calendly inline widget begin --> */}
                <CalendlyWidget />
                {/* <!-- Calendly inline widget end --> */}
              </div>
            </div>
          </div>
        </section>

        <blockquote
          className="text-center"
          style={{ paddingTop: 100, paddingBottom: 100 }}
        >
          <p className="px-4">Thanks for visiting!</p>
        </blockquote>
      </main>
    </>
  );
}
