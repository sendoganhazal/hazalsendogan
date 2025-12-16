import Image from 'next/image'
import React from 'react'
import maarifa from "@/assets/maarifa.jpg"
import bkt from "@/assets/bkt_logo.jpg";
import akbank from "@/assets/akbank_logo.jpg"

export default function page() {
    return (
        <>
            <section className='page-header'>
                <div className='page-header-content'>
                    <h1>Education & Experiences</h1>
                </div>
            </section>
            <section className='container inner'>
                <section className='section'>
                    <h2 className='section-title'>Experiences</h2>
                    <ul className='experiences-list'>
                        <li className='experiences-list-item has-sublist'>
                            <div className='work'>
                                <div className='work-image'>
                                    <Image width={50} height={50} alt='image' src={maarifa} className='block rounded-lg' />
                                </div>
                                <h3>Maarifa | UX & Consultancy</h3>
                            </div>

                            <div className='experience-sublist'>
                                <p className='job-title'>Frontend Developer</p>
                                <p className='time'>02 Nov 2018 - 31 May 2025</p>
                                <p className='description'>Throughout the design and development processes, I created effective, modern, and visually appealing interfaces using HTML, CSS, JavaScript, React, and Next.js, significantly enhancing the user experience. I played an active role in developing websites and applications using appropriate frameworks, ensuring that projects were delivered on time and met high-quality standards. With my strong teamwork skills, I contributed to improving collaboration across projects and developed innovative solutions that increased customer satisfaction. Through my results-oriented approach and solid technical expertise, I successfully contributed to strengthening the company’s digital presence across various projects.</p>
                            </div>
                            <div className='experience-sublist'>
                                <p className='job-title'>Business Analyst</p>
                                <p className='time'>25 Apr 2017 - 01 Nov 2018</p>
                                <p className='description'>By gathering business requirements from stakeholders and thoroughly analyzing the existing application, key findings were compiled into a comprehensive analysis document, contributing to the clear definition of project requirements. Sharing this analysis with the UX Design team enabled the creation of designs based on the documented insights and their presentation to the business unit and the client. The process of efficiently communicating feedback on the designs to the UX team and delivering the revised versions back to the business unit/client was managed effectively, ensuring smooth project progression. Additionally, continuous communication with business units helped develop strategies aimed at creating solutions that best address customer needs.</p>
                            </div>
                        </li>
                        <li className='experiences-list-item has-sublist'>
                            <div className='work'>
                                <div className='work-image'>
                                    <Image width={50} height={50} alt='image' src={bkt} className='block rounded-lg' />
                                </div>
                                <h3>BKT - Banka Kombetare Tregtare</h3>
                            </div>

                            <div className='experience-sublist'>
                                <p className='job-title'>Software Development Consultant</p>
                                <p className='time'>02 Nov 2018 - 31 May 2025</p>
                                <p className='description'></p>
                            </div>

                        </li>
                        <li className='experiences-list-item has-sublist'>
                            <div className='work'>
                                <div className='work-image'>
                                    <Image width={50} height={50} alt='image' src={akbank} className='block rounded-lg' />
                                </div>
                                <h3>Akbank</h3>
                            </div>

                            <div className='experience-sublist'>
                                <p className='job-title'>Software Development Consultant</p>
                                <p className='time'>25 Apr 2017 - 01 Feb 2021</p>
                                <p className='description'></p>
                            </div>
                        </li>
                    </ul>

                </section>
            </section>


        </>
    )
}
