import React from 'react'
import { Container, Row, Col, Stack } from 'react-bootstrap'
import { FaRegCopyright } from 'react-icons/fa'

export const PrivacyContent = () => {
    return (
        <>
            <div className='privacyPolicy'>
                <Container>
                    <Row>
                        <Col className='text-left'>
                            <h4 className='my-5'>Welcome to Futuristic Business Solutions. This Privacy Policy is intended to inform you about how we collect, use, and protect the information you provide through our website and services. Protecting your privacy is of utmost importance to us, and we are committed to ensuring the confidentiality and security of your personal information.
                            </h4>
                            <div className='my-4'>
                                <Stack direction='row' gap={1}>
                                    <h1>1. Information We Collect</h1>
                                    <h4>We collect various types of information when you visit our website or use our services:</h4>
                                </Stack>
                            </div>
                            <div className='my-4'>
                                <Stack direction='row' gap={0}>
                                    <h2>Personal Information:</h2>
                                    <h4> When you interact with us, such as when you fill out forms, subscribe to our newsletter, or contact us, we may collect personal information such as your name, email address, phone number, and any other information you choose to provide.</h4>
                                    <h2>Usage Information:</h2>
                                    <h4> We collect information about how you use our website and services, including your IP address, browser type, operating system, and other usage details.</h4>
                                    <h2>Cookies and Similar Technologies:</h2>
                                    <h4> We may use cookies and similar technologies to collect information about your browsing behavior and preferences.</h4>
                                </Stack>
                            </div>
                            <div className='my-4'>
                                <Stack direction='row' gap={1}>
                                    <h1>2. How We Use Your Information</h1>
                                    <h4>We may use the information we collect for the following purposes:</h4>
                                    <ul>
                                        <li>To provide and improve our services, including customizing your experience and responding to your inquiries</li>
                                        <li>To communicate with you about our services, updates, and promotions.</li>
                                        <li>To analyze trends and statistics to enhance our website and services.</li>
                                        <li>To protect the security and integrity of our website and services.</li>
                                    </ul>
                                </Stack>
                            </div>
                            <div className='my-4'>
                                <Stack direction='row' gap={1}>
                                    <h1>3. Sharing Your Information</h1>
                                    <h4>We may share your information with third parties under the following circumstances:</h4>
                                    <ul>
                                        <li>With service providers who assist us in operating our website and providing our services.</li>
                                        <li>With our business partners and affiliates for marketing and promotional purposes, but only with your consent.</li>
                                        <li>When required by law or to protect our rights or the rights of others.</li>
                                    </ul>
                                </Stack>
                            </div>
                            <div className='my-4'>
                                <Stack direction='row' gap={1}>
                                    <h1>4. Data Security</h1>
                                    <h4>We employ industry-standard security measures to protect your personal information from unauthorized access, disclosure, alteration, or destruction. However, please be aware that no method of transmission over the internet or electronic storage is completely secure, and we cannot guarantee absolute security.</h4>
                                </Stack>
                            </div>
                            <div className='my-4'>
                                <Stack direction='row' gap={1}>
                                    <h1>5. Your Choices</h1>
                                    <h4>You have the right to access, update, or delete your personal information at any time. You may also opt-out of receiving promotional communications from us by following the instructions provided in such communications.</h4>
                                </Stack>
                            </div>
                            <div className='my-4'>
                                <Stack direction='row' gap={1}>
                                    <h1>6. Children’s Privacy</h1>
                                    <h4>Our website and services are not intended for children under the age of 16. We do not knowingly collect personal information from children under the age of 16 without parental consent. If you believe that we have inadvertently collected information from a child under 13, please contact us immediately.</h4>
                                </Stack>
                            </div>
                            <div className='my-4'>
                                <Stack direction='row' gap={1}>
                                    <h1>7. Changes to This Privacy Policy</h1>
                                    <h4>We reserve the right to update or modify this Privacy Policy at any time. Any changes will be effective immediately upon posting the revised Privacy Policy on our website.</h4>
                                </Stack>
                            </div>
                            <div className='my-4'>
                                <Stack direction='row' gap={1}>
                                    <h1>8. Contact Us</h1>
                                    <h4>If you have any questions or concerns about this Privacy Policy or our privacy practices, please contact us at futurristic@gmail.com.</h4>
                                    <h4>Thank you for trusting Futuristic Business Solutions with your information. We are committed to protecting your privacy and ensuring a safe and secure online experience.</h4>
                                </Stack>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={12}>
                            <p style={{
                                padding: '10px',
                                background: '#000',
                                color: '#fff',
                                marginTop: '20px'
                            }}>Copyright <FaRegCopyright /> 2024 | All Rights Reserved</p>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    )
}
