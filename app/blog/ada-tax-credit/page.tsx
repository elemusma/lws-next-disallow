import ContentBlock from "@/app/components/content-block";

import "@/app/styles/blog.scss";
import Link from "next/link";

export default function AdaTaxCredit() {
  return (
    <>
      {/* <div className="bg-gray-100 text-black"> */}
      {/* Hero Section */}
      <ContentBlock
        sectionClassName="bg-white text-black pt-[150px] pb-8"
        containerClassName="max-w-screen-lg mx-auto"
        rowClassName="flex flex-col items-center"
        columnClassName="lg:w-3/4 w-full px-4"
      >
        <h1 className="text-3xl font-bold">
          Unlock $5,000 in Tax Credits by Making Your Business Accessible
        </h1>
        <p className="text-lg text-gray-700 mt-4">
          Learn how small businesses can leverage the ADA Tax Credit to improve
          accessibility while saving money.
        </p>

        {/* Understanding the ADA Tax Credit */}

        <h2 className="text-2xl font-semibold">
          Understanding the ADA Tax Credit: A Hidden Financial Opportunity
        </h2>
        <p>
          The{" "}
          <a
            href="https://www.irs.gov/newsroom/tax-benefits-of-making-a-business-accessible-to-workers-and-customers-with-disabilities"
            target="_blank"
          >
            ADA Tax Credit
          </a>
          , found under <strong>Section 44 of the IRS code</strong>, is a
          powerful incentive designed to encourage businesses to invest in
          accessibility.
        </p>

        {/* Eligibility Criteria */}

        <h2 className="text-2xl font-semibold">
          Eligibility Criteria: Who Qualifies?
        </h2>
        <p>To be eligible, your business must meet specific requirements:</p>
        <ul className="list-disc ml-6">
          <li>
            <strong>Employ 30 or fewer full-time employees</strong>
          </li>
          <li>
            <strong>Generate less than $1 million in annual revenue</strong>
          </li>
        </ul>

        {/* Financial Benefits */}

        <h2 className="text-2xl font-semibold">
          How the Tax Credit Works: Breaking Down the Financial Benefits
        </h2>
        <p>
          The tax credit covers{" "}
          <strong>50% of your accessibility-related expenditures</strong>, with
          a maximum credit of
          <strong> $5,000</strong>. The first <strong>$250</strong> of expenses
          is not covered, meaning your business can claim a credit on up to{" "}
          <strong>$10,250</strong> in accessibility improvements.
        </p>

        {/* What Improvements Qualify? */}

        <h2 className="text-2xl font-semibold">What Improvements Qualify?</h2>
        <p>
          Accessibility improvements can include a wide range of modifications:
        </p>
        <ul className="list-disc ml-6">
          <li>
            <strong>Physical infrastructure upgrades</strong> (like wheelchair
            ramps)
          </li>
          <li>
            <strong>Website accessibility solutions</strong>
          </li>
          <li>
            <strong>Digital technology adaptations</strong>
          </li>
          <li>
            <strong>Consulting services for accessibility compliance</strong>
          </li>
          <li>
            <strong>Assistive technologies</strong> for customers and employees
          </li>
        </ul>

        {/* Accessibility Checklist */}

        <h2 className="text-2xl font-semibold">
          Navigating Compliance: A Strategic Approach
        </h2>
        <h3 className="text-xl font-medium mt-4">Accessibility Checklist</h3>
        <ul className="list-disc ml-6">
          <li>✅ Wheelchair-accessible entrances</li>
          <li>✅ Clear and appropriate signage</li>
          <li>✅ Accessible restroom facilities</li>
          <li>✅ Inclusive digital platforms</li>
          <li>✅ Parking lot compliance</li>
        </ul>

        {/* Claiming Your Tax Credit */}

        <h2 className="text-2xl font-semibold">
          Claiming Your Tax Credit: Step-by-Step Process
        </h2>
        <ol className="list-decimal ml-6">
          <li>
            <strong>Document</strong> your accessibility expenditures
          </li>
          <li>
            <strong>Complete</strong>
            <Link
              href="https://www.irs.gov/forms-pubs/about-form-8826"
              target="_blank"
              className="text-blue-600"
            >
              Form 8826
            </Link>{" "}
            from the IRS
          </li>
          <li>
            <strong>Attach</strong> the form to your annual tax return
          </li>
          <li>
            <strong>Consult</strong> with a tax professional
          </li>
        </ol>

        {/* Broader Impact */}

        <h2 className="text-2xl font-semibold">
          Beyond Financial Savings: The Broader Impact
        </h2>
        <h3 className="text-xl font-medium mt-4">
          Legal Protection and Risk Mitigation
        </h3>
        <p>Proactively addressing accessibility helps:</p>
        <ul className="list-disc ml-6">
          <li>
            Avoid potential <strong>lawsuits</strong>
          </li>
          <li>
            Demonstrate <strong>corporate social responsibility</strong>
          </li>
          <li>
            Reduce <strong>legal risks</strong>
          </li>
        </ul>

        <h3 className="text-xl font-medium mt-4">
          Expanding Your Customer Base
        </h3>
        <ul className="list-disc ml-6">
          <li>✅ Welcome a broader range of customers</li>
          <li>✅ Show commitment to inclusivity</li>
          <li>✅ Differentiate your business</li>
        </ul>

        {/* Next Steps */}

        <h2 className="text-2xl font-semibold">Next Steps</h2>
        <ul className="list-disc ml-6">
          <li>
            🔍 <strong>Conduct an accessibility audit</strong>
          </li>
          <li>
            🛠 <strong>Consult with an ADA compliance expert</strong>
          </li>
          <li>
            📈 <strong>Explore potential improvements</strong>
          </li>
          <li>
            📝{" "}
            <strong>Work with your tax professional to claim the credit</strong>
          </li>
        </ul>

        {/* Conclusion */}

        <h2 className="text-2xl font-semibold">
          Your Accessibility Journey Starts Now
        </h2>
        <p>
          <strong>
            Accessibility is an investment in your business's future.
          </strong>{" "}
          The <strong>ADA Tax Credit</strong> makes this investment more
          affordable, helping small businesses create environments that welcome
          everyone.
        </p>
        <p className="mt-4">
          <strong>Don't wait</strong> for a lawsuit or missed opportunity—take
          proactive steps to make your business more inclusive today.
        </p>
        <blockquote className="border-l-4 border-blue-500 pl-4 italic mt-4">
          "Every step towards accessibility is a step towards growth,
          innovation, and social responsibility."
        </blockquote>
      </ContentBlock>
      {/* </div> */}
    </>
  );
}
