import { Download } from "lucide-react"
import Navbar from "../components/Nav"

export default function IcateeePage() {
  return (
    <>
      <Navbar></Navbar>
      <div className="min-h-screen" style={{ background: "var(--background)" }}>
        <div className="container mx-auto px-4 py-12 max-w-4xl mt-40" style={{ color: "var(--foreground)" }}>
          <h1 className="text-3xl md:text-4xl font-bold mb-6 text-center" style={{ color: "var(--primary-500)" }}>
            ICATEEE 2025
          </h1>
          <div className="shadow-md p-6 mb-8" style={{ background: "rgba(255, 255, 255, 0.5)" }}>
            <div className="mb-6 text-center">
              <h2 className="text-2xl font-bold mb-2" style={{ color: "var(--primary-500)" }}>
                SUBMISSION
              </h2>
              <p className="text-lg font-semibold" style={{ color: "var(--primary-500)" }}>
                Deadline is extended
              </p>
            </div>

            <div className="space-y-4" style={{ color: "#222222" }}>
              <p>
                All submitted papers to ICATEEE&apos;2025 should be prepared in English according to IEEE format using
                IEEE Conference Paper Template. All manuscripts are limited to six (6) pages and must not have been
                published before, not be under review or accepted for any other conference or publication. Submission of
                abstract or poster template are not accepted.
              </p>

              <p>
                Authors are invited to submit a full paper as PDF file through the Microsoft CMT system (link below):
              </p>

              <p className="font-medium">
                URL:{" "}
                <a
                  href="https://cmt3.research.microsoft.com/ICATEEE2025/Submission/Index"
                  className="hover:underline"
                  style={{ color: "var(--primary-500)" }}
                >
                  https://cmt3.research.microsoft.com/ICATEEE2025/Submission/Index
                </a>
              </p>

              <p>
                All manuscripts will be reviewed blindly by three members of the Technical Program Committee and judged
                on the basis of their clarity, relevance, originality, and contribution. Please read the author&apos;s
                instructions carefully before preparing and sending your papers.
              </p>

              <p>
                The ICATEEE&apos;2025 organizers regard plagiarism as a serious professional misconduct (Not more than
                20%). All submissions will be screened for plagiarism and when identified, the submissions by the same
                author will be rejected. A submission implies that the author intends to ultimately register the paper
                upon a favorable response from the conference organizers. ICATEEE&apos;2025 doesn&apos;t encourage
                withdrawals after the paper is accepted.
              </p>

              <p>
                An accepted paper to be published in the ICATEEE&apos;2025 Conference Proceedings which will be
                published and indexed later in IEEE Xplorer after getting approval from IEEE, an author is required to
                register for the conference following the requirements of the registration announced in the website of
                the conference. All accepted papers MUST be presented at the conference by one of the authors, or, if
                none of the authors are able to attend, it can be presented by a qualified substitute authorized
                presenter and arranged in advance by the chair of the conference, however for presenting the paper and
                answering the questions, this should be arranged in advance during the event with the chair of the
                session.
              </p>

              <div className="mt-6 text-center">
                <h3 className="text-xl font-semibold mb-4" style={{ color: "var(--primary-500)" }}>
                  ICATEEE&apos;2025 Paper templates
                </h3>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-4">
                  <a
                    href="#"
                    download
                    className="flex items-center justify-center gap-2 px-4 py-2  text-white hover:opacity-90 transition-opacity"
                    style={{ backgroundColor: "var(--primary-500)" }}
                  >
                    <Download size={16} />
                    Microsoft Word Template
                  </a>

                  <a
                    href="#"
                    download
                    className="flex items-center justify-center gap-2 px-4 py-2  text-white hover:opacity-90 transition-opacity"
                    style={{ backgroundColor: "var(--primary-500)" }}
                  >
                    <Download size={16} />
                    Latex Document Template
                  </a>

                  <a
                    href="#"
                    download
                    className="flex items-center justify-center gap-2 px-4 py-2  text-white hover:opacity-90 transition-opacity"
                    style={{ backgroundColor: "var(--primary-500)" }}
                  >
                    <Download size={16} />
                    Latex Bibliography Files
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

  