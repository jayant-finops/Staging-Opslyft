import { Navbar, Footer } from "@/components/layout";

export const metadata = {
  title: "Terms of Use – Opslyft",
  description:
    "Terms of Use for OpsLyft. These Terms of Use constitute a legally binding agreement concerning your access to and use of the www.opslyft.com website.",
};

export default function TermsPage() {
  return (
    <>
      <Navbar />
      <main className="bg-white min-h-screen pt-18">
        <div className="max-w-[1152px] mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-24">
          {/* Main Title */}
          <h1
            className="text-[#343434] text-3xl lg:text-[32px] font-bold leading-[40px] tracking-[0.01em] mb-4"
            style={{ fontFamily: '"Funnel Display", sans-serif' }}
          >
            Terms of Use
          </h1>

          {/* Last Updated */}
          <p
            className="text-[#0E1821] text-lg leading-[23px] tracking-[0.01em] mb-12"
            style={{ fontFamily: '"IBM Plex Sans", sans-serif' }}
          >
            Last updated July 2023
          </p>

          {/* Agreement to Terms Section */}
          <section className="mb-12">
            <h2
              className="text-[#343434] text-2xl lg:text-[32px] font-medium leading-[40px] mb-6"
              style={{ fontFamily: '"Funnel Display", sans-serif' }}
            >
              Agreement to Terms
            </h2>
            <div
              className="text-[#0E1821] text-base lg:text-[18px] leading-[150%] space-y-4"
              style={{ fontFamily: '"IBM Plex Sans", sans-serif' }}
            >
              <p>
                These Terms of Use constitute a legally binding agreement made
                between you, whether personally or on behalf of an entity
                (&quot;you&quot;) and OpsLyft (&quot;we,&quot; &quot;us&quot; or
                &quot;our&quot;), concerning your access to and use of the
                www.opslyft.com website as well as any other media form, media
                channel, mobile website or mobile application related, linked,
                or otherwise connected to that.
              </p>
              <p>
                You agree that by accessing the OpsLyft website, you have read,
                understood, and agree to be bound by all of these Terms of Use.
                If you do not agree with all of these Terms of Use, you are
                expressly prohibited from using the OpsLyft website, and you
                must discontinue use immediately.
              </p>
              <p>
                Supplemental Terms of Use or documents posted on the OpsLyft
                website from time to time result from this expressly
                incorporated herein by reference. In our sole discretion, we
                reserve the right to make changes or modifications to these
                Terms of Use at any time and for any reason. We will alert you
                about any changes by updating the &quot;Last Updated&quot; date
                of these Terms of Use, and you waive any right to receive
                specific notice of each such change.
              </p>
              <p>
                It is your responsibility to periodically review these Terms of
                Use to stay informed of updates. You will be subject to and will
                be deemed to have been made aware of and accepted the changes in
                any revised Terms of Use by your continued use of the OpsLyft
                website after the date such revised Terms of Use are posted.
              </p>
              <p>
                The information provided on the OpsLyft website is not intended
                for distribution to or use by any person or entity in any
                jurisdiction or country where such distribution or use would be
                contrary to law or regulation or subject to any registration
                requirement within such jurisdiction or country. Accordingly,
                those persons who choose to access the OpsLyft website from
                other locations do so on their initiative and are solely
                responsible for compliance with local laws, if and to the extent
                local laws are applicable.
              </p>
            </div>
          </section>

          {/* User Registration Section */}
          <section className="mb-12">
            <h2
              className="text-[#343434] text-2xl lg:text-[32px] font-medium leading-[40px] mb-6"
              style={{ fontFamily: '"Funnel Display", sans-serif' }}
            >
              User Registration
            </h2>
            <p
              className="text-[#0E1821] text-base leading-[150%]"
              style={{ fontFamily: '"IBM Plex Sans", sans-serif' }}
            >
              You may be required to register with the OpsLyft website. You
              agree to keep your password confidential and responsible for all
              use of your account and password. We reserve the right to remove,
              reclaim, or change a username you select if we determine, in our
              sole discretion, that such username is inappropriate, obscene, or
              otherwise objectionable.
            </p>
          </section>

          {/* Intellectual Property Rights Section */}
          <section className="mb-12">
            <h2
              className="text-[#343434] text-2xl lg:text-[32px] font-medium leading-[40px] mb-6"
              style={{ fontFamily: '"Funnel Display", sans-serif' }}
            >
              Intellectual Property Rights
            </h2>
            <div
              className="text-[#0E1821] text-base leading-[150%] space-y-4"
              style={{ fontFamily: '"IBM Plex Sans", sans-serif' }}
            >
              <p>
                Unless otherwise indicated, the OpsLyft website is our
                proprietary property. All source code, databases, functionality,
                software, website designs, audio, video, text, photographs, and
                graphics on the OpsLyft website (collectively, the
                &quot;Content&quot;) and the trademarks, service marks, and
                logos contained therein (the &quot;Marks&quot;) are owned or
                controlled by us or licensed to us, and are protected by
                copyright and trademark laws and various other intellectual
                property rights and unfair competition laws of the United
                States, foreign jurisdictions, and international conventions.
              </p>
              <p>
                The Content and the Marks are provided on the OpsLyft website
                &quot;AS IS&quot; for your information and personal use only.
                Except as expressly provided in these Terms of Use, no part of
                the OpsLyft website and no Content or Marks may be copied,
                reproduced, aggregated, republished, uploaded, posted, publicly
                displayed, encoded, translated, transmitted, distributed, sold,
                licensed, or otherwise exploited for any commercial purpose
                whatsoever, without our express prior written permission.
              </p>
            </div>
          </section>

          {/* User Representations Section */}
          <section className="mb-12">
            <h2
              className="text-[#343434] text-2xl lg:text-[32px] font-medium leading-[40px] mb-6"
              style={{ fontFamily: '"Funnel Display", sans-serif' }}
            >
              User Representations
            </h2>
            <div
              className="text-[#0E1821] text-base leading-[150%] space-y-4"
              style={{ fontFamily: '"IBM Plex Sans", sans-serif' }}
            >
              <p>
                By using the OpsLyft website, you represent and warrant that:
              </p>
              <ol className="list-decimal space-y-3 pl-6">
                <li>
                  All registration information you submit will be true,
                  accurate, current, and complete.
                </li>
                <li>
                  You will maintain the accuracy of such information and
                  promptly update such registration information as necessary.
                </li>
                <li>
                  You have the legal capacity, and you agree to comply with
                  these Terms of Use.
                </li>
                <li>You are not under the age of 13.</li>
                <li>
                  Not a minor in the jurisdiction in which you reside, or if a
                  little, you have received parental permission to use the
                  OpsLyft website.
                </li>
                <li>
                  You will not access the Site through automated or non-human
                  means, whether through a bot, script, or otherwise.
                </li>
                <li>
                  You will not use the OpsLyft website for any illegal or
                  unauthorized purposes.
                </li>
                <li>
                  Your use of the OpsLyft website will not violate any
                  applicable law or regulation.
                </li>
                <li>
                  Suppose you provide any information that is untrue,
                  inaccurate, not current, or incomplete. In that case, we have
                  the right to suspend or terminate your account and refuse any
                  current or future use of the OpsLyft website (or any portion
                  thereof).
                </li>
              </ol>
            </div>
          </section>

          {/* Prohibited Activities Section */}
          <section className="mb-12">
            <h2
              className="text-[#343434] text-2xl lg:text-[32px] font-medium leading-[40px] mb-6"
              style={{ fontFamily: '"Funnel Display", sans-serif' }}
            >
              Prohibited Activities
            </h2>
            <div
              className="text-[#0E1821] text-base leading-[150%] space-y-4"
              style={{ fontFamily: '"IBM Plex Sans", sans-serif' }}
            >
              <p>
                You may not access or use the OpsLyft website for any purpose
                other than that for which we make the OpsLyft website available.
                The OpsLyft website may not be used in connection with any
                commercial endeavors except those specifically endorsed or
                approved by us. As a user of the OpsLyft website, you agree not
                to:
              </p>
              <ol className="list-decimal space-y-3 pl-6">
                <li>
                  Systematically retrieve data or other Content from the OpsLyft
                  website to create or compile, directly or indirectly, a
                  collection, compilation, database, or directory without
                  written permission from us.
                </li>
                <li>
                  Make any unauthorized use of the OpsLyft website, including
                  collecting usernames and email addresses of users by
                  electronic or other means to send unsolicited email or create
                  user accounts by automated means or under pretenses.
                </li>
                <li>
                  Use a buying agent or purchasing agent to make purchases on
                  the OpsLyft website.
                </li>
                <li>
                  Use the OpsLyft website for advertising or offering to sell
                  goods and services.
                </li>
                <li>
                  Circumvent, disable, or otherwise interfere with
                  security-related features of the OpsLyft website, including
                  features that prevent or restrict the use or copying of any
                  Content or enforce limitations on the use of the OpsLyft
                  website and the Content contained therein.
                </li>
                <li>
                  Engage in unauthorized framing of or linking to the OpsLyft
                  website.
                </li>
                <li>
                  The trick, defraud, or mislead other users and us, especially
                  in any attempt to learn sensitive account information such as
                  user passwords.
                </li>
                <li>
                  Make improper use of our support services or submit false
                  reports of abuse or misconduct.
                </li>
                <li>
                  Engage in any automated system use, such as scripts to send
                  comments or messages or using any data mining, robots, or
                  similar data gathering and extraction tools.
                </li>
                <li>
                  Interfere with, disrupt, or create an undue burden on the
                  OpsLyft website or the networks or services connected to the
                  OpsLyft website.
                </li>
                <li>
                  Attempt to impersonate another user or person or use the
                  username of another user.
                </li>
                <li>Sell or otherwise transfer your profile.</li>
                <li>
                  Use any information obtained from the OpsLyft website to
                  harass, abuse, or harm another person.
                </li>
                <li>
                  Use the OpsLyft website as part of any effort to compete with
                  us or otherwise use the OpsLyft website and the Content for
                  any revenue-generating endeavor or commercial enterprise.
                </li>
                <li>
                  Decipher, decompile, disassemble, or reverse engineer any of
                  the software comprising or in any way making up a part of the
                  OpsLyft website.
                </li>
                <li>
                  Attempt to bypass any Site measures designed to prevent or
                  restrict access to the OpsLyft website or any portion of the
                  OpsLyft website.
                </li>
                <li>
                  Harass, annoy, intimidate, or threaten any of our employees or
                  agents engaged in providing you with any portion of the
                  OpsLyft website.
                </li>
                <li>
                  Delete the copyright or other proprietary rights notice from
                  any Content.
                </li>
                <li>
                  Copy or adapt the OpsLyft website&apos;s software, including
                  but not limited to Flash, PHP, HTML, JavaScript, or other
                  code.
                </li>
                <li>
                  Upload or transmit (or attempt to upload or to transmit)
                  viruses, Trojan horses, or other material, including excessive
                  use of capital letters and spamming (continuous posting of
                  repetitive text), that interferes with any party&apos;s
                  uninterrupted use and enjoyment of the OpsLyft website or
                  modifies, impairs, disrupts, alters, or interferes with the
                  service, features, functions, operation, or maintenance of the
                  OpsLyft website.
                </li>
                <li>
                  Upload or transmit (or attempt to upload or to transmit) any
                  material that acts as a passive or active information
                  collection or transmission mechanism, including without
                  limitation, transparent graphics interchange formats
                  (&quot;gifs&quot;), 1×1 pixels, web bugs, cookies, or other
                  similar devices (sometimes referred to as &quot;spyware&quot;
                  or &quot;passive collection mechanisms&quot; or
                  &quot;PCM&quot;).
                </li>
                <li>
                  Except as may be the result of the standard search engine or
                  Internet browser usage, use, launch, develop, or distribute
                  any automated system, including without limitation, any
                  spider, robot, cheat utility, scraper, or offline reader that
                  accesses the OpsLyft website, or using or launching any
                  unauthorized script or other software.
                </li>
                <li>
                  Disparage, tarnish, or otherwise harm, in our opinion, us and
                  the OpsLyft website.
                </li>
                <li>
                  Use the OpsLyft website in a manner inconsistent with any
                  applicable laws or regulations.
                </li>
              </ol>
            </div>
          </section>

          {/* Third-party Websites & Content Section */}
          <section className="mb-12">
            <h2
              className="text-[#343434] text-2xl lg:text-[32px] font-medium leading-[40px] mb-6"
              style={{ fontFamily: '"Funnel Display", sans-serif' }}
            >
              Third-party Websites &amp; Content
            </h2>
            <div
              className="text-[#0E1821] text-base leading-[150%] space-y-4"
              style={{ fontFamily: '"IBM Plex Sans", sans-serif' }}
            >
              <p>
                The OpsLyft website may contain (or you may be sent via the
                OpsLyft website) links to other websites (&quot;Third-Party
                Websites&quot;) as well as articles, photographs, text,
                graphics, pictures, designs, music, sound, video, information,
                applications, software, and other content or items belonging to
                or originating from third parties (&quot;Third-Party
                Content&quot;).
              </p>
              <p>
                Such Third-Party Websites and Third-Party Content are not
                investigated, monitored, or checked for accuracy,
                appropriateness, or completeness by us. We are not responsible
                for any Third-Party Websites accessed through the OpsLyft
                website or any Third-Party Content posted on, available through,
                or installed from the Site, including the content, accuracy,
                offensiveness, opinions, reliability, privacy practices, or
                other policies of or contained in the Third-Party Websites or
                the Third-Party Content. Inclusion of, linking to, or permitting
                the use or installation of any Third-Party Websites or any
                Third-Party Content does not imply approval or endorsement
                thereof by us. Suppose you decide to leave the OpsLyft website
                and access the Third-Party Websites or to use or install any
                Third-Party Content. In that case, you do so at your own risk,
                and you should be aware that these Terms of Use no longer
                govern.
              </p>
              <p>
                You should review the applicable terms and policies, including
                privacy and data gathering practices, of any website to which
                you navigate from the OpsLyft website or relating to any
                applications you use or install from the OpsLyft website. Any
                purchases you make through Third-Party Websites will be through
                other websites and from other companies. We take no
                responsibility whatsoever for such purchases exclusively between
                you and the applicable third party. You agree and acknowledge
                that we do not endorse the products or services offered on
                Third-Party Websites. You shall hold us harmless from any harm
                caused by your purchase of such products or services.
                Additionally, you shall hold us harmless from any losses
                sustained by you or damage caused to you relating to or
                resulting in any way from any Third-Party Content or any contact
                with Third-Party Websites.
              </p>
            </div>
          </section>

          {/* Site Management Section */}
          <section className="mb-12">
            <h2
              className="text-[#343434] text-2xl lg:text-[32px] font-medium leading-[40px] mb-6"
              style={{ fontFamily: '"Funnel Display", sans-serif' }}
            >
              Site Management
            </h2>
            <div
              className="text-[#0E1821] text-base leading-[150%] space-y-4"
              style={{ fontFamily: '"IBM Plex Sans", sans-serif' }}
            >
              <p>We reserve the right, but not the obligation, to:</p>
              <ol className="list-decimal space-y-3 pl-6">
                <li>
                  Monitor the OpsLyft website for violations of these Terms of
                  Use.
                </li>
                <li>
                  Take appropriate legal action against anyone who, in our sole
                  discretion, violates the law or these Terms of Use, including
                  without limitation, reporting such user to law enforcement
                  authorities.
                </li>
                <li>
                  In our sole discretion and without limitation, refuse,
                  restrict access to, limit the availability of, or disable (to
                  the extent technologically feasible) any of your Contributions
                  or any portion thereof.
                </li>
                <li>
                  In our sole discretion and without limitation, notice, or
                  liability, to remove from the OpsLyft website or otherwise
                  disable all files and content that are excessive in size or
                  are in any way burdensome to our systems.
                </li>
                <li>
                  Otherwise, manage the OpsLyft website in a manner designed to
                  protect our rights and property and facilitate the Site&apos;s
                  proper functioning.
                </li>
              </ol>
            </div>
          </section>

          {/* Privacy Policy Section */}
          <section className="mb-12">
            <h2
              className="text-[#343434] text-2xl lg:text-[32px] font-medium leading-[40px] mb-6"
              style={{ fontFamily: '"Funnel Display", sans-serif' }}
            >
              Privacy Policy
            </h2>
            <div
              className="text-[#0E1821] text-base leading-[150%] space-y-4"
              style={{ fontFamily: '"IBM Plex Sans", sans-serif' }}
            >
              <p>
                We care about data privacy and security. Please review our
                Privacy Policy (posted on the OpsLyft website). By using the
                OpsLyft website, you agree to be bound by our Privacy Policy,
                incorporated into these Terms of Use. Suppose you access the
                OpsLyft website from the European Union, Asia, or any other
                region of the world with laws or other requirements governing
                personal data collection, use, or disclosure that differ from
                applicable laws in the United States, then through your
                continued use of the OpsLyft website. In that case, you are
                transferring your data to the United States.
              </p>
              <p>
                You expressly consent to have your data transferred to and
                processed in the United States. [Further, we do not knowingly
                accept, request, or solicit information from children or
                knowingly market to children. Therefore, following the U.S.
                Children&apos;s Online Privacy Protection Act, if we receive
                actual knowledge that anyone under the age of 13 has provided
                personal information to us without the requisite and verifiable
                parental consent, we will delete that information from the Site
                as quickly as is reasonably practical.]
              </p>
            </div>
          </section>

          {/* Copyright Infringements Section */}
          <section className="mb-12">
            <h2
              className="text-[#343434] text-2xl lg:text-[32px] font-medium leading-[40px] mb-6"
              style={{ fontFamily: '"Funnel Display", sans-serif' }}
            >
              Copyright Infringements
            </h2>
            <div
              className="text-[#0E1821] text-base leading-[150%] space-y-4"
              style={{ fontFamily: '"IBM Plex Sans", sans-serif' }}
            >
              <p>
                We respect the intellectual property rights of others. If you
                believe that any material available on or through the OpsLyft
                website infringes upon any copyright you own or control, please
                immediately notify us using the contact information provided
                below (a &quot;Notification&quot;). A copy of your Notification
                will be sent to the person who posted or stored the material
                addressed in the Notification. Under federal law, please be
                advised that you may be held liable for damages if you make
                material misrepresentations in a Notification. Thus, if you are
                not sure that material located on or linked to by the OpsLyft
                website infringes your copyright, you should consider first
                contacting an attorney.
              </p>
            </div>
          </section>

          {/* Term & Termination Section */}
          <section className="mb-12">
            <h2
              className="text-[#343434] text-2xl lg:text-[32px] font-medium leading-[40px] mb-6"
              style={{ fontFamily: '"Funnel Display", sans-serif' }}
            >
              Term &amp; Termination
            </h2>
            <div
              className="text-[#0E1821] text-base leading-[150%] space-y-4"
              style={{ fontFamily: '"IBM Plex Sans", sans-serif' }}
            >
              <p>
                These Terms of Use shall remain in full force and effect while
                you use the Site. WITHOUT LIMITING ANY OTHER PROVISION OF THESE
                TERMS OF USE, WE RESERVE THE RIGHT TO, IN OUR SOLE DISCRETION
                AND WITHOUT NOTICE OR LIABILITY, DENY ACCESS TO AND USE OF THE
                OPSLYFT WEBSITE (INCLUDING BLOCKING CERTAIN IP ADDRESSES) TO ANY
                PERSON FOR ANY REASON OR NO REASON, INCLUDING WITHOUT LIMITATION
                FOR BREACH OF ANY REPRESENTATION, WARRANTY, OR COVENANT
                CONTAINED IN THESE TERMS OF USE OR OF ANY APPLICABLE LAW OR
                REGULATION. WE MAY TERMINATE YOUR USE OR PARTICIPATION IN THE
                SITE OR DELETE [YOUR ACCOUNT AND] ANY CONTENT OR INFORMATION
                THAT YOU POSTED AT ANY TIME, WITHOUT WARNING, AT OUR SOLE
                DISCRETION. Suppose we terminate or suspend your account for any
                reason. In that case, you are prohibited from registering and
                creating a new account under your name, a fake or borrowed name,
                or the name of any third party, even if you may be acting on
                behalf of the third party.
              </p>
              <p>
                In addition to terminating or suspending your account, we
                reserve the right to take appropriate legal action, including,
                without limitation, pursuing civil, criminal, and injunctive
                redress.
              </p>
            </div>
          </section>

          {/* Modifications & Interruptions Section */}
          <section className="mb-12">
            <h2
              className="text-[#343434] text-2xl lg:text-[32px] font-medium leading-[40px] mb-6"
              style={{ fontFamily: '"Funnel Display", sans-serif' }}
            >
              Modifications &amp; Interruptions
            </h2>
            <div
              className="text-[#0E1821] text-base leading-[150%] space-y-4"
              style={{ fontFamily: '"IBM Plex Sans", sans-serif' }}
            >
              <p>
                We reserve the right to change, modify, or remove the contents
                of the OpsLyft website at any time or for any reason at our sole
                discretion without notice. However, we have no obligation to
                update any information on our OpsLyft website. We also reserve
                the right to modify or discontinue all or part of the OpsLyft
                website without notice at any time.
              </p>
              <p>
                We will not be liable to you or any third party for any
                modification, price change, suspension, or discontinuance of the
                OpsLyft website.
              </p>
              <p>
                We cannot guarantee the Site will be available at all times. We
                may experience hardware, software, or other problems or need to
                perform maintenance related to the OpsLyft website, resulting in
                interruptions, delays, or errors.
              </p>
              <p>
                We reserve the right to change, revise, update, suspend,
                discontinue, or otherwise modify the OpsLyft website at any time
                or for any reason without notice to you. You agree that we have
                no liability whatsoever for any loss, damage, or inconvenience
                caused by your inability to access or use the OpsLyft website
                during any downtime or discontinuance of the OpsLyft website.
              </p>
              <p>
                Nothing in these Terms of Use will be construed to obligate us
                to maintain and support the OpsLyft website or to supply any
                corrections, updates, or releases in connection therewith.
              </p>
            </div>
          </section>

          {/* Disclaimer Section */}
          <section className="mb-12">
            <h2
              className="text-[#343434] text-2xl lg:text-[32px] font-medium leading-[40px] mb-6"
              style={{ fontFamily: '"Funnel Display", sans-serif' }}
            >
              Disclaimer
            </h2>
            <p
              className="text-[#0E1821] text-base leading-[150%]"
              style={{ fontFamily: '"IBM Plex Sans", sans-serif' }}
            >
              THE OPSLYFT WEBSITE IS PROVIDED ON AN AS-IS AND AS-AVAILABLE
              BASIS. YOU AGREE THAT YOUR USE OF THE OPSLYFT WEBSITE AND OUR
              SERVICES WILL BE AT YOUR SOLE RISK. TO THE FULLEST EXTENT
              PERMITTED BY LAW, WE DISCLAIM ALL WARRANTIES, EXPRESS OR IMPLIED,
              IN CONNECTION WITH THE SITE AND YOUR USE THEREOF, INCLUDING,
              WITHOUT LIMITATION, THE IMPLIED WARRANTIES OF MERCHANTABILITY,
              FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT. WE MAKE NO
              WARRANTIES OR REPRESENTATIONS ABOUT THE ACCURACY OR COMPLETENESS
              OF THE OPSLYFT WEBSITE&apos;S CONTENT OR THE CONTENT OF ANY
              WEBSITES LINKED TO THE OPSLYFT WEBSITE. WE WILL ASSUME NO
              LIABILITY OR RESPONSIBILITY FOR ANY (1) ERRORS, MISTAKES, OR
              INACCURACIES OF CONTENT AND MATERIALS, (2) PERSONAL INJURY OR
              PROPERTY DAMAGE, OF ANY NATURE WHATSOEVER, RESULTING FROM YOUR
              ACCESS TO AND USE OF THE OPSLYFT WEBSITE, (3) ANY UNAUTHORIZED
              ACCESS TO OR USE OF OUR SECURE SERVERS AND ANY AND ALL PERSONAL
              INFORMATION AND FINANCIAL INFORMATION STORED THEREIN, (4) ANY
              INTERRUPTION OR CESSATION OF TRANSMISSION TO OR FROM THE OPSLYFT
              WEBSITE, (5) ANY BUGS, VIRUSES, TROJAN HORSES, OR THE LIKE WHICH
              MAY BE TRANSMITTED TO OR THROUGH THE OPSLYFT WEBSITE BY ANY THIRD
              PARTY, AND (6) ANY ERRORS OR OMISSIONS IN ANY CONTENT AND
              MATERIALS OR FOR ANY LOSS OR DAMAGE OF ANY KIND INCURRED AS A
              RESULT OF THE USE OF ANY CONTENT POSTED, TRANSMITTED, OR OTHERWISE
              MADE AVAILABLE VIA THE OPSLYFT WEBSITE. WE DO NOT WARRANT,
              ENDORSE, GUARANTEE, OR ASSUME RESPONSIBILITY FOR ANY PRODUCT OR
              SERVICE ADVERTISED OR OFFERED BY A THIRD PARTY THROUGH THE OPSLYFT
              WEBSITE, ANY HYPERLINKED WEBSITE, OR ANY WEBSITE OR MOBILE
              APPLICATION FEATURED IN ANY BANNER OR OTHER ADVERTISING, AND WE
              WILL NOT BE A PARTY TO OR IN ANY WAY BE RESPONSIBLE FOR MONITORING
              ANY TRANSACTION BETWEEN YOU AND ANY THIRD-PARTY PROVIDERS OF
              PRODUCTS OR SERVICES. AS WITH THE PURCHASE OF A PRODUCT OR SERVICE
              THROUGH ANY MEDIUM OR IN ANY ENVIRONMENT, YOU SHOULD USE YOUR BEST
              JUDGMENT AND EXERCISE CAUTION WHERE APPROPRIATE.
            </p>
          </section>

          {/* Limitations of Liability Section */}
          <section className="mb-12">
            <h2
              className="text-[#343434] text-2xl lg:text-[32px] font-medium leading-[40px] mb-6"
              style={{ fontFamily: '"Funnel Display", sans-serif' }}
            >
              Limitations of Liability
            </h2>
            <p
              className="text-[#0E1821] text-base leading-[150%]"
              style={{ fontFamily: '"IBM Plex Sans", sans-serif' }}
            >
              IN NO EVENT WILL WE OR OUR DIRECTORS, EMPLOYEES, OR AGENTS BE
              LIABLE TO YOU OR ANY THIRD PARTY FOR ANY DIRECT, INDIRECT,
              CONSEQUENTIAL, EXEMPLARY, INCIDENTAL, SPECIAL, OR PUNITIVE
              DAMAGES, INCLUDING LOST PROFIT, LOST REVENUE, LOSS OF DATA, OR
              OTHER DAMAGES ARISING FROM YOUR USE OF THE OPSLYFT WEBSITE, EVEN
              IF WE HAVE BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.
            </p>
          </section>

          {/* Indemnification Section */}
          <section className="mb-12">
            <h2
              className="text-[#343434] text-2xl lg:text-[32px] font-medium leading-[40px] mb-6"
              style={{ fontFamily: '"Funnel Display", sans-serif' }}
            >
              Indemnification
            </h2>
            <div
              className="text-[#0E1821] text-base leading-[150%] space-y-4"
              style={{ fontFamily: '"IBM Plex Sans", sans-serif' }}
            >
              <p>
                You agree to defend, indemnify, and hold us harmless, including
                our subsidiaries, affiliates, and all of our respective
                officers, agents, partners, and employees, from and against any
                loss, damage, liability, claim, or demand, including reasonable
                attorneys&apos; fees and expenses, made by any third party due
                to or arising out of:
              </p>
              <ol className="list-decimal space-y-3 pl-6">
                <li>Your Contributions.</li>
                <li>Use of the OpsLyft Website.</li>
                <li>Breach of these Terms of Use.</li>
                <li>
                  Any violation of your representations and warranties outlined
                  in these Terms of Use.
                </li>
                <li>
                  Your violation of the rights of a third party, including but
                  not limited to intellectual property rights.
                </li>
                <li>
                  Any overt harmful act toward any other site user with whom you
                  connected via the OpsLyft Website.
                </li>
              </ol>
              <p>
                Notwithstanding the preceding, we reserve the right, at your
                expense, to assume the exclusive defense and control of any
                matter for which you are required to indemnify us. You agree to
                cooperate, at your expense, with our defense of such claims. We
                will use reasonable efforts to notify you of any such claim,
                action, or proceeding subject to this indemnification upon
                becoming aware of it.
              </p>
            </div>
          </section>

          {/* User Data Section */}
          <section className="mb-12">
            <h2
              className="text-[#343434] text-2xl lg:text-[32px] font-medium leading-[40px] mb-6"
              style={{ fontFamily: '"Funnel Display", sans-serif' }}
            >
              User Data
            </h2>
            <p
              className="text-[#0E1821] text-base leading-[150%]"
              style={{ fontFamily: '"IBM Plex Sans", sans-serif' }}
            >
              We will maintain certain data that you transmit to the OpsLyft
              Website for the purpose of managing the OpsLyft Website, as well
              as data relating to your use of the OpsLyft Website. Although we
              perform regular routine backups of data, you are solely
              responsible for all data that you transmit or that relates to any
              activity you have undertaken using the OpsLyft Website. You agree
              that we shall have no liability to you for any loss or corruption
              of any such data, and you hereby waive any right of action against
              us arising from any such loss or corruption of such data.
            </p>
          </section>

          {/* Electronic Communications, Transactions & Signatures Section */}
          <section className="mb-12">
            <h2
              className="text-[#343434] text-2xl lg:text-[32px] font-medium leading-[40px] mb-6"
              style={{ fontFamily: '"Funnel Display", sans-serif' }}
            >
              Electronic Communications, Transactions &amp; Signatures
            </h2>
            <div
              className="text-[#0E1821] text-base leading-[150%] space-y-4"
              style={{ fontFamily: '"IBM Plex Sans", sans-serif' }}
            >
              <p>
                Visiting the OpsLyft Website, sending us emails, and completing
                online forms constitute electronic communications. You consent
                to receive electronic communications. You agree that all
                agreements, notices, disclosures, and other communications we
                provide to you electronically, via email, and on the OpsLyft
                Website satisfy any legal requirement that such communication is
                in writing.
              </p>
              <p>
                YOU AT THIS MOMENT AGREE TO THE USE OF ELECTRONIC SIGNATURES,
                CONTRACTS, ORDERS, AND OTHER RECORDS AND ELECTRONIC DELIVERY OF
                NOTICES, POLICIES, AND RECORDS OF TRANSACTIONS INITIATED OR
                COMPLETED BY US OR VIA THE OPSLYFT WEBSITE.
              </p>
              <p>
                You at this moment waive any rights or requirements under any
                statutes, regulations, rules, ordinances, or other laws in any
                jurisdiction that require an original signature or delivery or
                retention of non-electronic records, or payments or the granting
                of credits by any means other than electronic means.
              </p>
            </div>
          </section>

          {/* Miscellaneous Section */}
          <section className="mb-12">
            <h2
              className="text-[#343434] text-2xl lg:text-[32px] font-medium leading-[40px] mb-6"
              style={{ fontFamily: '"Funnel Display", sans-serif' }}
            >
              Miscellaneous
            </h2>
            <div
              className="text-[#0E1821] text-base leading-[150%] space-y-4"
              style={{ fontFamily: '"IBM Plex Sans", sans-serif' }}
            >
              <p>
                These Terms of Use and any policies or operating rules posted by
                us on the OpsLyft Website constitute the entire agreement and
                understanding between you and us. Our failure to exercise or
                enforce any right or provision of these Terms of use shall not
                operate as a waiver of such right or provision.
              </p>
              <p>
                These Terms of Use operate to the fullest extent permissible by
                law. We may assign any or all of our rights and obligations to
                others at any time. We shall not be responsible or liable for
                any loss, damage, delay, or failure to act caused by any cause
                beyond our reasonable control.
              </p>
              <p>
                Suppose any provision or part of a provision of these Terms of
                Use is determined to be unlawful, void, or unenforceable. In
                that case, that provision or portion of the condition is deemed
                severable from these Terms of Use. It does not affect the
                validity and enforceability of any remaining provisions.
              </p>
              <p>
                There is no joint venture, partnership, employment, or agency
                relationship created between you and us due to these Terms of
                Use or the use of the OpsLyft Website. You agree that these
                Terms of Use will not be construed against us after having
                drafted them.
              </p>
              <p>
                You at this moment waive any defenses you may have based on the
                electronic form of these Terms of Use and the lack of signing by
                the parties hereto to execute these Terms of Use.
              </p>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
