export interface PrivacySection {
  title: string;
  content: string[];
  listItems?: string[]; // For bullet points
  contentAfterList?: string[]; // For content that appears after list items
  subsections?: {
    title: string;
    content: string[];
    listItems?: string[];
    contentAfterList?: string[];
  }[];
}

export interface PrivacyPolicyData {
  title: string;
  lastUpdated: string;
  sections: PrivacySection[];
}

export const privacyPolicyFallback: PrivacyPolicyData = {
  title: "PRIVACY POLICY",
  lastUpdated: "Last updated July 2023",
  sections: [
    {
      title: "Introduction",
      content: [
        'OpsLyft ("we" or "us" or "our") respects the privacy of our users ("user" or "you"). This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website, including any other media form, including but not limited to email, newsletters, etc. Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, please do not access the site.',
      ],
    },
    {
      title: "Changes To This Policy",
      content: [
        'We reserve the right to make changes to this Privacy Policy at any time and for any reason. We will alert you about any changes by updating the "Last Updated" date of this Privacy Policy. Any changes or modifications will be effective immediately upon posting the updated Privacy Policy on the Site, and you waive the right to receive specific notice of each such change or modification.',
        "You are encouraged to periodically review this Privacy Policy to stay informed of updates. You will be deemed to have been made aware of, will be subject to, and will be deemed to have accepted the changes in any revised Privacy Policy by your continued use of the Site after the date such revised Privacy Policy is posted.",
      ],
    },
    {
      title: "Collection of your information",
      content: [
        "We may collect information about you in a variety of ways. The information we may collect on the Site includes:",
      ],
      subsections: [
        {
          title: "Personally Identifiable Consumer Information",
          content: [
            "Personally identifiable information, such as your name, email address, organization details, and demographic information that you voluntarily give to us when we've asked to us through forms etc. or when you choose to participate in various activities related to the Site such as online chat and message boards. You are under no obligation to provide us with personal information of any kind, however your refusal to do so may prevent you from using certain features of the Site. If you provide personally identifiable data to us, you may later choose to have your information deleted from our database, or kept from being used for purposes other than for the services you asked for, by following the opt-out methods given further below.",
          ],
        },
        {
          title: "Non-Personally Identifiable Consumer Information",
          content: [
            "OpsLyft collects various types of information through internet tracking technology automatically collect when you access the Site, such as your IP address, your browser type, your operating system, your access times, and the pages you have viewed directly before and after accessing the Site. We may use third-party advertising companies to serve ads when you visit the Site. These companies may use your non-personally identifiable consumer information about your visits to the Site and other websites that are contained in web cookies in order to provide advertisements about goods and services of interest to you.",
          ],
        },
      ],
    },
    {
      title: "USE OF YOUR INFORMATION",
      content: [
        "OpsLyft gathers non-personally identifiable information for marketing and sales purposes in order to better target ads and other material in order to have a more personalized experience. The data is often used to predict how people will respond to advertising, as well as to figure out which ads work best and which material is most suitable for different individuals and organizations.",
        "If you decide to provide OpsLyft with personally identifiable information, we will use that information for marketing purposes, which may result in OpsLyft sending you additional communications. In addition, the information can be combined with data from other sources to help OpsLyft target advertisements based on your interests and habits, as well as for other sales and marketing purposes.",
        "We keep your details for as long as you have an Account with us, or as long as we need it to provide you with the Services, or in the case of any interaction you might have with our support team or for as long as we need it to provide support-related monitoring and trend analysis.",
        "We can retain any of your information as required by law, even after you have closed your account or it is no longer needed to provide the services to you, if it is reasonably necessary or required to satisfy legal or regulatory requirements, resolve disputes, prevent fraud and abuse, or enforce our terms and conditions.",
      ],
    },
    {
      title: "DISCLOSURE OF YOUR INFORMATION",
      content: [
        "We may share information we have collected about you in certain situations. Your information may be disclosed as follows:",
      ],
      subsections: [
        {
          title: "By Law or to Protect Rights",
          content: [
            "If we believe the release of information about you is necessary to respond to legal process, to investigate or remedy potential violations of our policies, or to protect the rights, property, and safety of others, we may share your information as permitted or required by any applicable law, rule, or regulation. This includes exchanging information with other entities for fraud protection and credit risk reduction.",
          ],
        },
        {
          title: "Third-Party Service Providers",
          content: [
            "We may share your information with third parties that perform services for us or on our behalf, including payment processing, data analysis, email delivery, hosting services, customer service, and marketing assistance.",
          ],
        },
        {
          title: "Marketing Communications",
          content: [
            "With your consent, or with an opportunity for you to withdraw consent, we may share your information with third parties for marketing purposes, as permitted by law.",
          ],
        },
        {
          title: "Affiliates",
          content: [
            "We may share your information with our affiliates, in which case we will require those affiliates to honor this Privacy Policy. Affiliates may include our parent company and any subsidiaries, joint venture partners or other companies that we control or that are under common control with us in the future.",
          ],
        },
        {
          title: "Business Partners",
          content: [
            "We may share your information with our business partners to offer you certain products, services or promotions.",
          ],
        },
        {
          title: "Other Third Parties",
          content: [
            "We may share your information with advertisers and investors for the purpose of conducting general business analysis. We may also share your information with such third parties for marketing purposes, as permitted by law.",
          ],
        },
        {
          title: "Sale or Bankruptcy",
          content: [
            "If we reorganize or sell all or a portion of our assets, undergo a merger, or are acquired by another entity, we may transfer your information to the successor entity. If we go out of business or enter bankruptcy, your information would be an asset transferred or acquired by a third party. You acknowledge that such transfers may occur and that the transferee may decline honor commitments we made in this Privacy Policy.",
            "We are not responsible for the actions of third parties with whom you share personal or sensitive data, and we have no authority to manage or control third-party solicitations. If you no longer wish to receive correspondence, emails or other communications from third parties, you are responsible for contacting the third party directly.",
          ],
        },
      ],
    },
    {
      title: "Tracking Technologies",
      content: [],
      subsections: [
        {
          title: "Cookies and Web Beacons",
          content: [
            "We may use cookies, web beacons, tracking pixels, and other tracking technologies on the Site [and our mobile application] to help customize the Site [and our mobile application] and improve your experience. When you access the Site [or our mobile application], your personal information is not collected through the use of tracking technology. Most browsers are set to accept cookies by default. You can remove or reject cookies, but be aware that such action could affect the availability and functionality of the Site [or our mobile application]. You may not decline web beacons. However, they can be rendered ineffective by declining all cookies or by modifying your web browser's settings to notify you each time a cookie is tendered, permitting you to accept or decline cookies on an individual basis.",
            "[We may use cookies, web beacons, tracking pixels, and other tracking technologies on the Site [and our mobile application] to help customize the Site [and our mobile application] and improve your experience. For more information on how we use cookies, please refer to our Cookie Policy posted on the Site, which is incorporated into this Privacy Policy. By using the Site, you agree to be bound by our Cookie Policy.]",
          ],
        },
        {
          title: "Website Analytics",
          content: [
            "We may also partner with selected third-party vendors such as Google Analytics, to allow tracking technologies and remarketing services on the Site through the use of first party cookies and third-party cookies, to, among other things, analyze and track users' use of the Site, determine the popularity of certain content and better understand online activity. By accessing the Site, you consent to the collection and use of your information by these third-party vendors. You are encouraged to review their privacy policy and contact them directly for responses to your questions. We do not transfer personal information to these third-party vendors.",
            "You should be aware that getting a new computer, installing a new browser, upgrading an existing browser, or erasing or otherwise altering your browser's cookies files may also clear certain opt-out cookies, plug-ins, or settings.",
          ],
        },
        {
          title: "THIRD-PARTY WEBSITES",
          content: [
            "The Site may contain links to third-party websites and applications of interest, including advertisements and external services, that are not affiliated with us. Once you have used these links to leave the Site, any information you provide to these third parties is not covered by this Privacy Policy, and we cannot guarantee the safety and privacy of your information. Before visiting and providing any information to any third-party websites, you should inform yourself of the privacy policies and practices (if any) of the third-party responsible for that website, and should take those steps necessary to, in your discretion, protect the privacy of your information. We are not responsible for the content or privacy and security practices and policies of any third parties, including other sites, services or applications that may be linked to or from the Site.",
          ],
        },
        {
          title: "SECURITY OF YOUR INFORMATION",
          content: [
            "OpsLyft uses administrative, technical, and physical security measures to help protect your personal information. While we have taken reasonable steps to secure the personal information you provide to us, please be aware that despite our efforts, no security measures are perfect or impenetrable, and no method of data transmission can be guaranteed against any interception or other type of misuse. Any information disclosed online is vulnerable to interception and misuse by unauthorized parties. Therefore, we cannot guarantee complete security if you provide personal information.",
          ],
        },
        {
          title: "POLICY FOR CHILDREN",
          content: [
            "We do not knowingly solicit information from or market to children under the age of 13. If you become aware of any data we have collected from children under age 13, please contact us using the contact information provided below.",
          ],
        },
        {
          title: "OPTIONS REGARDING YOUR INFORMATION",
          content: [
            "You may at any time review or change the information in your account or terminate your account by:",
          ],
          listItems: [
            "Logging into your account settings and updating your account",
            "Contacting us using the contact information provided below",
          ],
          contentAfterList: [
            "Upon your request to terminate your account, we will deactivate or delete your account and information from our active databases. However, some information may be retained in our files to prevent fraud, troubleshoot problems, assist with any investigations, enforce our Terms of Use and/or comply with legal requirements.",
          ],
        },
        {
          title: "Emails and Communications",
          content: [
            "If you no longer wish to receive correspondence, emails, or other communications from us, you may opt-out by:",
          ],
          listItems: [
            "Noting your preferences at the time you register your account with the Site.",
            "Logging into your account settings and updating your preferences.",
            "Contacting us using the contact information provided below.",
          ],
          contentAfterList: [
            "If you no longer wish to receive correspondence, emails, or other communications from third parties, you are responsible for contacting the third party directly.",
          ],
        },
      ],
    },
    {
      title: "GDPR Information",
      content: [
        "If you are a European Union data subject, you have rights under the General Data Protection Regulation to understand and request how we collect, use, and report Personal Data in our capacity as a data controller, to the degree permitted by applicable law. You have the following rights:",
      ],
      listItems: [
        "**Right to Access** You have the right to access your Personal data that you provided us",
        "**Right to Rectification** You have the right to rectify any inaccurate personal data or complete any incomplete data that you may have provided us for the purpose of processing.",
        "**Right to Erasure** You have the right to get the Personal Data erased that we might have of yours",
        "**Right to restriction of processing** You have the right to stop the processing of your personal data",
        "**Right to data portability** You have the right to transfer your personal data in a structured, common, and machine-readable format, when possible.",
        "**Right to object** You have the right to object to the processing of your personal data, on the grounds relating to your particular situation, such as direct marketing purposes.",
        "**Right not to be subjected to Automated Decision Making** You have the right not to be subject to a decision based solely on automated processing, including profiling, which produces legal effects.",
      ],
      contentAfterList: [
        "To exercise any of the given rights, you can contact us at contact@opslyft.com.",
      ],
    },
    {
      title: "California Privacy Rights",
      content: [
        "If you are a California citizen, you have rights under the California Consumer Privacy Act to understand and request how we collect, use, and report Personal Data, to the degree permitted by applicable law.",
      ],
    },
    {
      title: "Consent",
      content: [
        "You agree to the terms of our Privacy Policy and to OpsLyft's processing of personally identifiable information for the purposes mentioned above by using this Website. We aim to take appropriate measures to ensure that any improvements to this Privacy Policy are communicated to you by amending this Privacy Policy.",
      ],
    },
    {
      title: "Contact Us",
      content: [
        "contact@opslyft.com",
        "Suite-403, 550 Battery Street, San Francisco, CA, 94111",
        "© 2020 OpsLyft, Inc.",
        "All rights reserved.",
      ],
    },
  ],
};
