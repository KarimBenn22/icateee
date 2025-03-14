import { Download } from "lucide-react";

export default function IcateeePage() {
  return (
    <>
      <main className="min-h-screen bg-background">
        <div className="container mx-auto px-4 py-12 max-w-4xl pt-32 md:pt-40">
          <h1 className="text-3xl md:text-4xl font-bold mb-8 text-center text-primary">
            ICATEEE 2025
            <div className="w-24 h-1 mx-auto mt-4 rounded-full bg-primary"></div>
          </h1>

          <div className="bg-primary/5 rounded-lg shadow-md border border-primary/10 overflow-hidden mb-8">
            <div className="bg-primary p-6 border-b border-primary/10">
              <div className="text-center">
                <h2 className="text-2xl font-bold mb-2 text-white-500">
                  SUBMISSION
                </h2>
                <p className="text-lg font-semibold text-white-500">
                  Deadline is extended
                </p>
              </div>
            </div>

            <div className="p-6 md:p-8 space-y-4 text-gray-800">
              <p className="leading-relaxed">
                All submitted papers to ICATEEE&apos;2025 should be prepared in
                English according to IEEE format using IEEE Conference Paper
                Template. All manuscripts are limited to six (6) pages and must
                not have been published before, not be under review or accepted
                for any other conference or publication. Submission of abstract
                or poster template are not accepted.
              </p>

              <p className="leading-relaxed">
                Authors are invited to submit a full paper as PDF file through
                the Microsoft CMT system (link below):
              </p>

              <div className="bg-primary/5 p-4 rounded-md border border-primary/10 my-4">
                <p className="font-medium flex flex-wrap items-center gap-2">
                  <span className="text-gray-700">URL:</span>
                  <a
                    href="https://cmt3.research.microsoft.com/ICATEEE2025/Submission/Index"
                    className="text-primary hover:underline break-all"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    https://cmt3.research.microsoft.com/ICATEEE2025/Submission/Index
                  </a>
                </p>
              </div>

              <p className="leading-relaxed">
                All manuscripts will be reviewed blindly by three members of the
                Technical Program Committee and judged on the basis of their
                clarity, relevance, originality, and contribution. Please read
                the author&apos;s instructions carefully before preparing and
                sending your papers.
              </p>

              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 my-4">
                <p className="leading-relaxed">
                  The ICATEEE&apos;2025 organizers regard plagiarism as a
                  serious professional misconduct (
                  <span className="font-semibold">Not more than 20%</span>). All
                  submissions will be screened for plagiarism and when
                  identified, the submissions by the same author will be
                  rejected.
                </p>
              </div>

              <p className="leading-relaxed">
                A submission implies that the author intends to ultimately
                register the paper upon a favorable response from the conference
                organizers. ICATEEE&apos;2025 doesn&apos;t encourage withdrawals
                after the paper is accepted.
              </p>

              <p className="leading-relaxed">
                An accepted paper to be published in the ICATEEE&apos;2025
                Conference Proceedings which will be published and indexed later
                in IEEE Xplorer after getting approval from IEEE, an author is
                required to register for the conference following the
                requirements of the registration announced in the website of the
                conference. All accepted papers MUST be presented at the
                conference by one of the authors, or, if none of the authors are
                able to attend, it can be presented by a qualified substitute
                authorized presenter and arranged in advance by the chair of the
                conference, however for presenting the paper and answering the
                questions, this should be arranged in advance during the event
                with the chair of the session.
              </p>

              <div className="mt-8 pt-6 border-t border-primary">
                <h3 className="text-xl font-semibold mb-6 text-primary text-center">
                  ICATEEE&apos;2025 Paper Templates
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <a
                    href="#"
                    download
                    className="flex items-center justify-center gap-2 px-4 py-3 bg-primary text-foreground rounded-md hover:bg-primary/90 transition-colors shadow-sm"
                  >
                    <Download size={18} />
                    <span>Word Template</span>
                  </a>

                  <a
                    href="#"
                    download
                    className="flex items-center justify-center gap-2 px-4 py-3 bg-primary text-foreground rounded-md hover:bg-primary/90 transition-colors shadow-sm"
                  >
                    <Download size={18} />
                    <span>LaTeX Template</span>
                  </a>

                  <a
                    href="#"
                    download
                    className="flex items-center justify-center gap-2 px-4 py-3 bg-primary text-foreground rounded-md hover:bg-primary/90 transition-colors shadow-sm"
                  >
                    <Download size={18} />
                    <span>Bibliography Files</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
