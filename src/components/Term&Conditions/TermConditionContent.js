import React from 'react'
import { Container, Row, Col, Stack, Nav } from 'react-bootstrap'
import { BiLogoGmail } from "react-icons/bi";
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { Link } from 'react-router-dom';


export const TermConditionContent = () => {
    return (
        <>
            <div className='termCondition'>
                <Container>
                    <Row>
                        <Col className='text-left'>
                            <h4 className='my-5'>Welcome to Futurristic Business Solutions. These Terms and Conditions ("Terms") govern your use of our website and services (collectively, "Services"). By accessing or using our Services, you agree to comply with and be bound by these Terms. If you do not agree with these Terms, please contact our team to have a consultation.
                            </h4>
                            <div className='my-4'>
                                <Stack direction='row' gap={1}>
                                    <h1>1. Acceptance of Terms</h1>
                                    <h4>By accessing and using our Services, you confirm that you are at least 18 years old and have the legal capacity to enter into these Terms. If you are using our Services on behalf of an organization, you represent and warrant that you have the authority to bind that organization to these Terms.</h4>
                                </Stack>
                            </div>
                            <div className='my-4'>
                                <Stack direction='row' gap={0}>
                                    <h2>2. Changes to Terms</h2>
                                    <h4>We reserve the right to modify these Terms at any time. We will notify you of any changes by updating the "Last Updated" date of these Terms and posting the revised Terms on our website. Your continued use of our Services after such changes constitutes your acceptance of the new Terms.</h4>
                                </Stack>
                            </div>
                            <div className='my-4'>
                                <Stack direction='row' gap={0}>
                                    <h2>3. Services</h2>
                                    <h4>Futurristic Business Solutions provides immersive technology solutions, including but not limited to augmented reality (AR), virtual reality (VR), mixed reality (MR), extended reality (XR), game development, web-based AR (webAR), metaverse development, and blockchain solutions.</h4>
                                </Stack>
                            </div>
                            <div className='my-4'>
                                <Stack direction='row' gap={1}>
                                    <h1>4. User Conduct</h1>
                                    <h4>You agree to use our Services only for lawful purposes and in accordance with these Terms. You are prohibited from:</h4>
                                    <ul>
                                        <li>Using our Services in any way that violates any applicable federal, state, local, or international law or regulation.</li>
                                        <li>Engaging in any conduct that restricts or inhibits anyone's use or enjoyment of our Services, or which, as determined by us, may harm the Company or users of our Services or expose them to liability.</li>
                                        <li>Using any robot, spider, or other automatic device, process, or means to access our Services for any purpose, including monitoring or copying any of the material on our website.</li>
                                        <li>Introducing any viruses, Trojan horses, worms, logic bombs, or other material that is malicious or technologically harmful.</li>
                                    </ul>
                                </Stack>
                            </div>
                            <div className='my-4'>
                                <Stack direction='row' gap={1}>
                                    <h1>5. Intellectual Property</h1>
                                    <h4>All content, features, and functionality on our website, including but not limited to text, graphics, logos, images, and software, are the exclusive property of Futurristic Business Solutions and are protected by copyright, trademark, patent, trade secret, and other intellectual property or proprietary rights laws. You may not copy, modify, distribute, sell, or lease any part of our Services or included software, nor may you reverse engineer or attempt to extract the source code of that software, unless laws prohibit those restrictions or you have our written permission.</h4>
                                </Stack>
                            </div>
                            <div className='my-4'>
                                <Stack direction='row' gap={1}>
                                    <h1>6. Privacy</h1>
                                    <h4>Your use of our Services is also governed by our Privacy Policy, which describes how we collect, use, and disclose information about you. By using our Services, you consent to our collection and use of your information as described in our Privacy Policy.</h4>
                                </Stack>
                            </div>
                            <div className='my-4'>
                                <Stack direction='row' gap={1}>
                                    <h1>7. Third-Party Links</h1>
                                    <h4>Our Services may contain links to third-party websites or services that are not owned or controlled by Futurristic Business Solutions. We have no control over, and assume no responsibility for, the content, privacy policies, or practices of any third-party websites or services. You acknowledge and agree that we shall not be responsible or liable, directly or indirectly, for any damage or loss caused or alleged to be caused by or in connection with the use of or reliance on any such content, goods, or services available on or through any such websites or services.</h4>

                                </Stack>
                            </div>
                            <div className='my-4'>
                                <Stack direction='row' gap={1}>
                                    <h1>8. Limitation of Liability</h1>
                                    <h4>To the fullest extent permitted by applicable law, in no event shall Futurristic Business Solutions, its affiliates, directors, employees, or agents be liable for any indirect, incidental, special, consequential, or punitive damages, including but not limited to loss of profits, data, use, goodwill, or other intangible losses, resulting from -</h4>
                                    <ul>
                                        <li>Your use of or inability to use our Services</li>
                                        <li>Any unauthorized access to or use of our servers and/or any personal information stored therein.</li>
                                        <li>Any interruption or cessation of transmission to or from our Services. </li>
                                        <li>Any bugs, viruses, Trojan horses, or the like that may be transmitted to or through our Services by any third party.</li>
                                        <li>Any errors or omissions in any content or for any loss or damage incurred as a result of the use of any content posted, emailed, transmitted, or otherwise made available through our Services, whether based on warranty, contract, tort (including negligence), or any other legal theory, and whether or not we have been informed of the possibility of such damage.</li>
                                    </ul>
                                </Stack>
                            </div>
                            <div className='my-4'>
                                <Stack direction='row' gap={1}>
                                    <h1>9. Indemnification</h1>
                                    <h4>You agree to defend, indemnify, and hold harmless Futurristic Business Solutions, its affiliates, and their respective directors, officers, employees, and agents from and against any claims, liabilities, damages, judgments, awards, losses, costs, expenses, or fees (including reasonable attorneys' fees) arising out of or relating to your violation of these Terms or your use of our Services, including, but not limited to, any use of our Services' content, services, and products other than as expressly authorized in these Terms or your use of any information obtained from our Services.</h4>
                                </Stack>
                            </div>
                            <div className='my-4'>
                                <Stack direction='row' gap={1}>
                                    <h1>10. Termination</h1>
                                    <h4>We may terminate or suspend your access to all or part of our Services immediately, without prior notice or liability, for any reason whatsoever, including, without limitation, if you breach these Terms. Upon termination, your right to use our Services will immediately cease.</h4>
                                </Stack>
                            </div>
                            <div className='my-4'>
                                <Stack direction='row' gap={1}>
                                    <h1>11. Governing Law</h1>
                                    <h4>YThese Terms and your use of our Services are governed by and construed in accordance with the laws of [Your Country/State], without regard to its conflict of law principles. You agree to submit to the personal jurisdiction of the state and federal courts located in [Your Country/State] for the purpose of litigating all such claims or disputes.</h4>
                                </Stack>
                            </div>
                            <div className='my-4'>
                                <Stack direction='row' gap={1}>
                                    <h1>12. Miscellaneous</h1>
                                    <h4>If any provision of these Terms is found to be invalid or unenforceable by a court of competent jurisdiction, the remaining provisions of these Terms will remain in full force and effect. Our failure to enforce any right or provision of these Terms will not be considered a waiver of those rights. These Terms constitute the entire agreement between you and Futurristic Business Solutions regarding our Services and supersede and replace any prior agreements we might have had regarding the Services.</h4>
                                </Stack>
                            </div>
                            <div className='my-4'>
                                <Stack direction='row' gap={1}>
                                    <h1>Contact Us</h1>
                                    <h4>If you have any questions about these Terms, please contact us at:</h4>
                                </Stack>
                            </div>
                            <div className='my-4'>
                                <h1>Futurristic Business Solutions</h1>
                                <h4>100, Anurag Nagar Ln, Part II, Scheme No 114, Indore, Madhya Pradesh 452010</h4>
                                <Stack direction='horizontal' gap={1} className='mt-4'>
                                    <Nav.Link as={Link} to="mailto:futurristic@gmail.com" target='_blank' className="me-3 text-black TD-none">
                                    <BiLogoGmail className='me-3 fontSize-24' />
                                    </Nav.Link>
                                    <Nav.Link as={Link} to="https://www.facebook.com/futurristicbiz" target='_blank' className="me-3 text-black TD-none">
                                        <FaFacebook className="me-3 fontSize-24" />
                                    </Nav.Link>
                                    <Nav.Link as={Link} to="https://www.instagram.com/futurristicbiz" target='_blank' className="me-3 text-black TD-none">
                                        <FaInstagram className="me-3 fontSize-24" />
                                    </Nav.Link>
                                    <Nav.Link as={Link} to="https://www.linkedin.com/company/futurristicbusinesssolutions" target='_blank' className="me-3 text-black TD-none">
                                        <FaLinkedin className="me-3 fontSize-24" />
                                    </Nav.Link>
                                </Stack>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    )
}
