import React from 'react';
import './Terms.css';

const Terms = () => {
    return (
        <div className="terms-page">
            {/* Page Title Section */}
            <section className="terms-page-title centred p_relative">
                <div 
                    className="terms-bg-layer" 
                    style={{ backgroundImage: 'url(/assets/images/background/page-title.webp)' }}
                ></div>
                <div 
                    className="terms-pattern-layer" 
                    style={{ backgroundImage: 'url(/assets/images/shape/shape-67.png)' }}
                ></div>
                <div className="auto-container">
                    <div className="terms-content-box">
                        <h1>Terms and Conditions</h1>
                    </div>
                </div>
            </section>

            {/* Terms Content Section */}
            <section className="terms-content-section p_relative">
                <div className="auto-container">
                    <div className="terms-wrapper">
                        <div className="terms-intro">
                            <h2>Coaching Program Agreement</h2>
                            <p className="terms-updated">Last Updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
                        </div>

                        <div className="terms-body">
                            <div className="terms-section">
                                <h3>THE AGREEMENT</h3>
                                <p>This Course Agreement (hereinafter, "Agreement") is made by <strong>ProVisa Coach Consulting</strong>, hereinafter referred to as "Course Provider," and you, further defined below, as a participant in the Course, also defined below.</p>
                                <p>All parts and sub-parts of this Agreement are specifically incorporated by reference here. This Agreement shall govern the use of all pages and screens in and on the Course (all collectively referred to as "Course") and any services provided by or on this Course Provider through the Course ("Services") and/or on the Course Provider's website ("Website").</p>
                            </div>

                            <div className="terms-section">
                                <h3>Article 1 - DEFINITIONS:</h3>
                                <p><strong>A) The parties referred to in this Agreement shall be defined as follows:</strong></p>
                                <ul>
                                    <li><strong>Course Provider, us, we:</strong> Course Provider, as the creator, operator, and publisher of the Course, is responsible for providing the Course publicly. Course Provider, us, we, our, ours and other first-person pronouns will refer to the Course Provider, as well as, if applicable, all employees and affiliates of the Course Provider.</li>
                                    <li><strong>You, the user, the participant:</strong> You, as the participant in the course and user of the Website, will be referred to throughout this Agreement with second-person pronouns such as you, your, yours, or as user or participant.</li>
                                    <li><strong>Parties:</strong> Collectively, the parties to this Agreement (Course Provider and You) will be referred to as Parties.</li>
                                </ul>
                                <p><strong>B) The Course details are as follows:</strong></p>
                                <ul>
                                    <li><strong>Course Name:</strong> Canadian Job Search Coaching Program</li>
                                    <li><strong>Total Course Fees ("Fees"):</strong> $1,497 USD</li>
                                    <li><strong>Course Access:</strong> 30 days</li>
                                    <li><strong>Website:</strong> ProVisa Coach Consulting</li>
                                </ul>
                            </div>

                            <div className="terms-section">
                                <h3>Article 2 - ASSENT TO TERMS:</h3>
                                <p>By purchasing and participating in the Course, you warrant that you have read and reviewed this Agreement and that you agree to be bound by it. If you do not agree to be bound by this Agreement, please cease your participation in the Course immediately. If you do so after purchase, you will not be entitled to any refund. Course Provider only agrees to provide the Course to you if you assent to this Agreement.</p>
                            </div>

                            <div className="terms-section">
                                <h3>Article 3 - AGE RESTRICTION:</h3>
                                <p>You must be at least 18 (eighteen) years of age to use this Website, participate in the Course or access any Services contained herein. By participating in the Course, you represent and warrant that you are at least 18 years of age and may legally agree to this Agreement. Course Provider assumes no responsibility or liability for any misrepresentation of your age.</p>
                            </div>

                            <div className="terms-section">
                                <h3>Article 4 - LICENSE TO USE WEBSITE & ACCESS COURSE MATERIALS:</h3>
                                <p>We may provide you with certain information as a result of your accessing of the Course through the Website. Such information may include, but is not limited to, documentation, data, or information developed by us and other materials which may assist you in the Course ("Materials"). Subject to this Agreement, we grant you a non-exclusive, limited, non-transferable and revocable license to use the Materials solely in connection with your participation in the Course and your use of the Website. The Materials may not be used for any other purpose, and this license terminates after 30 days from purchasing the Course.</p>
                            </div>

                            <div className="terms-section">
                                <h3>Article 5 - COURSE TERMS:</h3>
                                <p>After purchasing the Course, you must complete the Course within 30 days. Whether or not the Course has been completed by the specified Course End Date, it will expire after 30 days.</p>
                                <p>The Course and any of its accompanying Materials may not be shared with any party. If we suspect that the Course or Materials are being shared and/or that you have shared your log-in information with any party, we reserve the right to immediately terminate your access to the Course, in our sole and exclusive discretion.</p>
                                <p>We do not offer any promises or guarantees with regard to our Course or Course Materials. You hereby acknowledge and agree:</p>
                                <ul>
                                    <li>You are solely and exclusively responsible for the choices that you make with regard to this Course, the Materials contained within it, or any significant changes to your business or life;</li>
                                    <li>You are solely and exclusively responsible for your own mental health, physical health, business decisions, and any other actions or inaction you choose to take;</li>
                                    <li>We are not liable for any result or non-result or any consequences which may come about due to your participation in the Course.</li>
                                    <li><strong>Important:</strong> ProVisa Coach Consulting provides coaching and education services only. We do not find employers for you, match you with employers, or guarantee job placement. Our services are designed to teach you how to independently search for jobs, approach employers, and understand the Canadian hiring process.</li>
                                </ul>
                            </div>

                            <div className="terms-section">
                                <h3>Article 6 - INTELLECTUAL PROPERTY:</h3>
                                <p>You agree that the Materials, the Course, the Website, and any other Services provided by the Course Provider are the property of the Course Provider, including all copyrights, trademarks, trade secrets, patents, and other intellectual property ("Company IP"). You agree that the Company owns all right, title and interest in and to the Company IP and that you will not use the Company IP for any unlawful or infringing purpose. You agree not to reproduce or distribute the Company IP in any way, including electronically or via registration of any new trademarks, trade names, service marks or Uniform Resource Locators (URLs), without express written permission from the Company.</p>
                            </div>

                            <div className="terms-section">
                                <h3>Article 7 - YOUR OBLIGATIONS:</h3>
                                <p>As a participant in the Course, you will be asked to register with us. When you do so, we will choose a user identifier, which may be your email address or another term, as well as a password. You may also provide personal information, including, but not limited to, your name. You are responsible for ensuring the accuracy of this information. This identifying information will enable you to participate in the Course. You must not share such identifying information with any third party, and if you discover that your identifying information has been compromised, you agree to notify us immediately in writing. Email notification will suffice – info@provisa.com. You are responsible for maintaining the safety and security of your identifying information as well as keeping us apprised of any changes to your identifying information.</p>
                                <p>The billing information you provide us, including credit card, billing address and other payment information, is subject to the same confidentiality and accuracy requirements as the rest of your identifying information. Providing false or inaccurate information, or using the Course or the Website to further fraud or unlawful activity is grounds for immediate termination of this Agreement.</p>
                            </div>

                            <div className="terms-section">
                                <h3>Article 8 - PAYMENT & FEES:</h3>
                                <p>As noted above, the total Fees for the Course are as follows: <strong>$1,497 USD</strong>.</p>
                                <p><strong>All fees paid are non-refundable.</strong></p>
                            </div>

                            <div className="terms-section">
                                <h3>Article 9 - ACCEPTABLE USE:</h3>
                                <p>You agree not to use the Course or the Website for any unlawful purpose or any purpose prohibited under this clause. You agree not to use the Course or the Website in any way that could damage the Course, Website, Services, or general business of the Course Provider.</p>
                                <p>You further agree not to use the Course or the Website:</p>
                                <ul>
                                    <li>To harass, abuse, or threaten others or otherwise violate any person's legal rights;</li>
                                    <li>To violate any intellectual property rights of the Course Provider or any third party;</li>
                                    <li>To upload or otherwise disseminate any computer viruses or other software that may damage the property of another;</li>
                                    <li>To perpetrate any fraud;</li>
                                    <li>To engage in or create any unlawful gambling, sweepstakes, or pyramid scheme;</li>
                                    <li>To publish or distribute any obscene or defamatory material;</li>
                                    <li>To publish or distribute any material that incites violence, hate, or discrimination towards any group;</li>
                                    <li>To unlawfully gather information about others.</li>
                                </ul>
                            </div>

                            <div className="terms-section">
                                <h3>Article 10 - NO LIABILITY:</h3>
                                <p>The Course and Website are provided for informational and educational purposes only. You acknowledge and agree that any information posted in the Course, in the Materials, or on the Website is not intended to be legal advice or financial advice, and no fiduciary relationship has been created between you and us. You further agree that your participation in the Course is at your own risk. We do not assume responsibility or liability for any advice or other information given in the Course, in the Materials, or on the Website.</p>
                                <p><strong>ProVisa Coach Consulting provides coaching and educational services only. We do not guarantee job placement, employer matching, or employment outcomes. You are solely responsible for your job search efforts and results.</strong></p>
                            </div>

                            <div className="terms-section">
                                <h3>Article 11 - REVERSE ENGINEERING & SECURITY:</h3>
                                <p>You agree not to undertake any of the following actions:</p>
                                <ul>
                                    <li>Reverse engineer, or attempt to reverse engineer or disassemble any code or software from or on the Course or Website;</li>
                                    <li>Violate the security of the Course or Website through any unauthorized access, circumvention of encryption or other security tools, data mining or interference to any host, user or network.</li>
                                </ul>
                            </div>

                            <div className="terms-section">
                                <h3>Article 12 - DATA LOSS:</h3>
                                <p>We do not assume or accept responsibility for the security of your account or content. You agree that your participation in the Course or use of the Website is at your own risk.</p>
                            </div>

                            <div className="terms-section">
                                <h3>Article 13 - INDEMNIFICATION:</h3>
                                <p>You agree to defend and indemnify the Course Provider and any of our affiliates (if applicable) and hold us harmless against any and all legal claims and demands, including reasonable attorney's fees, which may arise from or relate to your participation in the Course, your use or misuse of the Website, your breach of this Agreement, or your conduct or actions. You agree that we shall be able to select our own legal counsel and may participate in our own defense, if we wish.</p>
                            </div>

                            <div className="terms-section">
                                <h3>Article 14 - SPAM POLICY:</h3>
                                <p>You are strictly prohibited from using Course for illegal spam activities, including gathering email addresses and personal information from others or sending any mass commercial emails.</p>
                            </div>

                            <div className="terms-section">
                                <h3>Article 15 - MODIFICATION & VARIATION:</h3>
                                <p>We may, from time to time and at any time without notice to you, modify this Agreement. You agree that we have the right to modify this Agreement or revise anything contained herein. You further agree that all modifications to this Agreement are in full force and effect immediately upon posting on the Website and that modifications or variations will replace any prior version of this Agreement, unless prior versions are specifically referred to or incorporated into the latest modification or variation of this Agreement.</p>
                                <p>To the extent any part or sub-part of this Agreement is held ineffective or invalid by any court of law, you agree that the prior, effective version of this Agreement shall be considered enforceable and valid to the fullest extent.</p>
                            </div>

                            <div className="terms-section">
                                <h3>Article 16 - ENTIRE AGREEMENT:</h3>
                                <p>This Agreement constitutes the entire understanding between the Parties with respect to the Course. This Agreement supersedes and replaces all prior or contemporaneous agreements or understandings, written or oral.</p>
                            </div>

                            <div className="terms-section">
                                <h3>Article 17 - SERVICE INTERRUPTIONS:</h3>
                                <p>We may need to interrupt your access to the Course to perform maintenance or emergency services on a scheduled or unscheduled basis. You agree that your access to the Course and/or Website may be affected by unanticipated or unscheduled downtime, for any reason, but that we shall have no liability for any damage or loss caused as a result of such downtime.</p>
                            </div>

                            <div className="terms-section">
                                <h3>Article 18 - COURSE MODIFICATION:</h3>
                                <p>We may, from time to time and at any time without notice to you, modify the Course. You agree that we have the right to modify the Course or revise anything contained herein.</p>
                            </div>

                            <div className="terms-section">
                                <h3>Article 19 - LIMITATION ON LIABILITY:</h3>
                                <p>We are not liable for any damages that may occur to you as a result of your participation in the Course or your use of the Website, to the fullest extent permitted by law, as noted above. The maximum liability of Course Provider arising from or relating to this Agreement is limited to the greater of one hundred ($100) US Dollars or the amount you paid to us in the last three (3) months. This section applies to any and all claims by you, including, but not limited to, lost profits or revenues, consequential or punitive damages, negligence, strict liability, fraud, or torts of any kind.</p>
                            </div>

                            <div className="terms-section">
                                <h3>Article 20 - GENERAL PROVISIONS:</h3>
                                <p><strong>A) LANGUAGE:</strong> All communications made or notices given pursuant to this Agreement shall be in the English language.</p>
                                <p><strong>B) JURISDICTION, VENUE & CHOICE OF LAW:</strong> Through your participation in the Course and your use of the Website, you agree that the laws of Ontario, Canada shall govern any matter or dispute relating to or arising out of this Agreement, as well as any dispute of any kind that may arise between you and us, with the exception of its conflict of law provisions. In case any litigation specifically permitted under this Agreement is initiated, the Parties agree to submit to the personal jurisdiction of the state and federal courts of the following county: Canada. The Parties agree that this choice of law, venue, and jurisdiction provision is not permissive, but rather mandatory in nature. You hereby waive the right to any objection of venue, including assertion of the doctrine of forum non conveniens or similar doctrine.</p>
                                <p><strong>C) ARBITRATION:</strong> In case of a dispute between the Parties relating to or arising out of this Agreement, the Parties shall first attempt to resolve the dispute personally and in good faith. If these personal resolution attempts fail, the Parties shall then submit the dispute to binding arbitration. The arbitration shall be conducted in the following county: Canada. The arbitration shall be conducted by a single arbitrator, and such arbitrator shall have no authority to add Parties, vary the provisions of this Agreement, award punitive damages, or certify a class. The arbitrator shall be bound by applicable and governing Federal law as well as the law of the following province: Ontario. You will be responsible to pay any cost and fees associated with such action for both yourself and the Course Provider. Claims necessitating arbitration under this section include, but are not limited to: contract claims, tort claims, claims based on Federal and state law, and claims based on local laws, ordinances, statutes or regulations. Intellectual property claims by us will not be subject to arbitration and may, as an exception to this sub-part, be litigated. The Parties, in agreement with this sub-part of this Agreement, waive any rights they may have to a jury trial in regard to arbitral claims.</p>
                                <p><strong>D) ASSIGNMENT:</strong> This Agreement, or the rights granted hereunder, may not be assigned, sold, leased or otherwise transferred in whole or part by you. Should this Agreement, or the rights granted hereunder, be assigned, sold, leased or otherwise transferred by Course Provider, the rights and liabilities of Course Provider will bind and inure to any assignees, administrators, successors, and executors.</p>
                                <p><strong>E) SEVERABILITY:</strong> If any part or sub-part of this Agreement is held invalid or unenforceable by a court of law or competent arbitrator, the remaining parts and sub-parts will be enforced to the maximum extent possible. In such condition, the remainder of this Agreement shall continue in full force.</p>
                                <p><strong>F) NO WAIVER:</strong> In the event that we fail to enforce any provision of this Agreement, this shall not constitute a waiver of any future enforcement of that provision or of any other provision. Waiver of any part or sub-part of this Agreement will not constitute a waiver of any other part or sub-part.</p>
                                <p><strong>G) HEADINGS FOR CONVENIENCE ONLY:</strong> Headings of parts and sub-parts under this Agreement are for convenience and organization, only. Headings shall not affect the meaning of any provisions of this Agreement.</p>
                                <p><strong>H) NO AGENCY, PARTNERSHIP OR JOINT VENTURE:</strong> No agency, partnership, or joint venture has been created between the Parties as a result of this Agreement. No Party has any authority to bind the other to third parties.</p>
                                <p><strong>I) FORCE MAJEURE:</strong> We are not liable for any failure to perform due to causes beyond our reasonable control including, but not limited to, acts of God, acts of civil authorities, acts of military authorities, riots, embargoes, acts of nature and natural disasters, and other acts which may be due to unforeseen circumstances.</p>
                                <p><strong>J) ELECTRONIC COMMUNICATIONS PERMITTED:</strong> Electronic communications are permitted to both Parties under this Agreement, including e-mail or fax. For any questions or concerns, please email us at the following address: <a href="mailto:info@provisa.com">info@provisa.com</a>.</p>
                            </div>

                            <div className="terms-footer">
                                <p><strong>ProVisa Coach Consulting</strong></p>
                                <p>Suite 500, 250 Yonge Street, Toronto, ON M5B 2L7, Canada</p>
                                <p>Email: <a href="mailto:info@provisa.com">info@provisa.com</a></p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Terms;
