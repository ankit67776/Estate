"use client";

import { useState, useEffect } from 'react';

export default function PrivacyPolicyPage() {
  const [lastUpdatedDate, setLastUpdatedDate] = useState<string>('');

  useEffect(() => {
    setLastUpdatedDate(new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }));
  }, []);

  return (
    <div className="container-max section-padding pt-28 md:pt-32"> {/* Adjusted padding top for header */}
      <h1 className="text-3xl md:text-4xl font-bold mb-8 text-primary">Privacy Policy</h1>
      <div className="prose max-w-none space-y-6 text-foreground">
        <p>Last updated: {lastUpdatedDate || "Loading..."}</p>

        <h2 className="text-2xl font-semibold">Introduction</h2>
        <p>
          Welcome to SquareGroup. We are committed to protecting your personal information and your right to privacy. 
          If you have any questions or concerns about this privacy notice, or our practices with regards to your 
          personal information, please contact us at privacy@estateview.com.
        </p>

        <h2 className="text-2xl font-semibold">Information We Collect</h2>
        <p>
          We collect personal information that you voluntarily provide to us when you express an interest in 
          obtaining information about us or our products and services, when you participate in activities on 
          the Website or otherwise when you contact us.
        </p>
        <p>
          The personal information that we collect depends on the context of your interactions with us and the 
          Website, the choices you make and the products and features you use. The personal information we 
          collect may include the following:
        </p>
        <ul>
          <li><strong>Personal Information Provided by You:</strong> We collect names; phone numbers; email addresses; mailing addresses; job titles; contact preferences; contact or authentication data; and other similar information.</li>
        </ul>

        <h2 className="text-2xl font-semibold">How We Use Your Information</h2>
        <p>
          We use personal information collected via our Website for a variety of business purposes described below. 
          We process your personal information for these purposes in reliance on our legitimate business interests, 
          in order to enter into or perform a contract with you, with your consent, and/or for compliance with 
          our legal obligations.
        </p>
        <ul>
          <li>To send administrative information to you.</li>
          <li>To protect our Services.</li>
          <li>To enforce our terms, conditions and policies for business purposes, to comply with legal and regulatory requirements or in connection with our contract.</li>
          <li>To respond to legal requests and prevent harm.</li>
          <li>To manage user accounts.</li>
          <li>To deliver services to the user.</li>
          <li>To respond to user inquiries/offer support to users.</li>
        </ul>

        <h2 className="text-2xl font-semibold">Will Your Information Be Shared With Anyone?</h2>
        <p>
          We only share information with your consent, to comply with laws, to provide you with services, 
          to protect your rights, or to fulfill business obligations.
        </p>

        <h2 className="text-2xl font-semibold">Cookies and Similar Technologies</h2>
        <p>
          We may use cookies and similar tracking technologies (like web beacons and pixels) to access or store 
          information. Specific information about how we use such technologies and how you can refuse certain 
          cookies is set out in our Cookie Policy.
        </p>

        <h2 className="text-2xl font-semibold">How Long Do We Keep Your Information?</h2>
        <p>
          We keep your information for as long as necessary to fulfill the purposes outlined in this privacy 
          notice unless otherwise required by law.
        </p>

        <h2 className="text-2xl font-semibold">How Do We Keep Your Information Safe?</h2>
        <p>
          We aim to protect your personal information through a system of organizational and technical security measures.
        </p>
        
        <h2 className="text-2xl font-semibold">Your Privacy Rights</h2>
        <p>
          In some regions (like the European Economic Area and the United Kingdom), you have certain rights under 
          applicable data protection laws. These may include the right (i) to request access and obtain a copy 
          of your personal information, (ii) to request rectification or erasure; (iii) to restrict the processing 
          of your personal information; and (iv) if applicable, to data portability. In certain circumstances, 
          you may also have the right to object to the processing of your personal information. To make such a 
          request, please use the contact details provided below. We will consider and act upon any request in 
          accordance with applicable data protection laws.
        </p>

        <h2 className="text-2xl font-semibold">Updates to This Notice</h2>
        <p>
          We may update this privacy notice from time to time. The updated version will be indicated by an 
          updated "Revised" date and the updated version will be effective as soon as it is accessible.
        </p>

        <h2 className="text-2xl font-semibold">Contact Us</h2>
        <p>
          If you have questions or comments about this notice, you may email us at privacy@squaregruop.com or by post to:
        </p>
        <p>
          SquareGroup<br />
          123 Construction Ave<br />
          Buildtown, BT 45678<br />
          United States
        </p>
      </div>
    </div>
  );
}
