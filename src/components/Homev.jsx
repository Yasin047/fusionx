import React from 'react'
import Stats from './Stats'
import Business from './Bussiness'
import Billing from './Billing'
import CardDeal from './CardDeal'
import Testimonials from './Testimonials'
import Clients from './Clients'
import CTA from './Cta'
import Footer from './Footer'
import Hero from './Hero'
import { Navbar } from '.'
import styles from "../style";

function Index() {
    return (
        <div className="bg-primary w-full overflow-hidden">
            <div className={`${styles.paddingX} ${styles.flexCenter}`}>
                <div className={`${styles.boxWidth}`}>
                    <Navbar />
                </div>
            </div>
            <div className={`bg-primary ${styles.flexStart}`}>
                <div className={`${styles.boxWidth}`}>
                    <Hero />
                </div>
            </div>

            <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
                <div className={`${styles.boxWidth}`}>
                    <Stats />
                    <Business />
                    <Billing />
                    <CardDeal />
                    <Testimonials />
                    <Clients />
                    <CTA />
                    <Footer />
                </div>
            </div>
        </div>
    )
}

export default Index