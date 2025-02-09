import React, { useState } from "react"
import { motion } from "framer-motion"
import { Link,useLocation } from "react-router-dom"
import logo from "../assets/logo.png"

import "./styles2.scss"

const MOBILE_NAV_ITEMS = [
  {
    id: 0,
    navTitle: "Home",
    path: "/"
  },
  {
    id: 1,
    navTitle: "Services",
    path: "/Services"
  },
  {
    id: 2,
    navTitle: "Experience Lab",
    path: "/Experience"
  },
  {
    id: 3,
    navTitle: "Ethos",
    path: "/Ethos"
  },
  {
    id: 4,
    navTitle: "Careers",
    path: "/Careers"
  },
  {
    id: 5,
    navTitle: "Contact",
    path: "/Contact"
  }
]

 
const App = () => {
  const [mobileNavOpen, setMobileNavOpen] = useState(false)
  const location = useLocation()
  const hideNavItemsVariant = {
    opened: {
      opacity: 0,
      y: "-100%",
      transition: {
        duration: 0.5,
        ease: "easeInOut"
      }
    },
    closed: {
      opacity: 1,
      y: "0%",
      transition: {
        delay: 1.1,
        duration: 0.5,
        ease: "easeInOut"
      }
    }
  }

  const mobileMenuVariant = {
    opened: {
      y: "0%",
      transition: {
        delay: 0.15,
        duration: 1.1,
        ease: [0.74, 0, 0.19, 1.02]
      }
    },
    closed: {
      y: "-100%",
      transition: {
        delay: 0.35,
        duration: 0.63,
        ease: [0.74, 0, 0.19, 1.02]
      }
    }
  }

  const fadeInVariant = {
    opened: {
      opacity: 1,
      transition: {
        delay: 1.2
      }
    },
    closed: { opacity: 0 }
  }

  const ulVariant = {
    opened: {
      transition: {
        delayChildren: 1,
        staggerChildren: 0.18
      }
    },
    closed: {
      transition: {
        staggerChildren: 0.06,
        staggerDirection: -1
      }
    }
  }

  const liVariant = {
    opened: {
      opacity: 1,
      y: "0%",
      transition: {
        duration: 0.65,
        ease: "easeOut"
      }
    },
    closed: {
      opacity: 0,
      y: "100%",
      transition: {
        duration: 0.25,
        ease: "easeInOut"
      }
    }
  }

  const fadeInStart = { opacity: 0 }
  const fadeInEnd = { opacity: 1 }
  const fadeInTransition = { duration: 1 }

  return (
    <div className="container2">
      <motion.nav
        initial="closed"
        animate={mobileNavOpen ? "opened" : "closed"}
      >
       <div className="logo-container">
          <Link to={"/"}>
            <motion.img variants={hideNavItemsVariant} src={logo} className="w-[80px] md:w-[110px] transition-all duration-700" alt="logo" />
          </Link>
        </div>
        <div className="menu-container">
          <motion.div
            variants={hideNavItemsVariant}
            onClick={() => setMobileNavOpen(true)}
            className="hamburger-menu2"
          >
            <motion.span 
              animate={mobileNavOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
              className="hamburger-line2"
            />
            <motion.span 
              animate={mobileNavOpen ? { opacity: 0 } : { opacity: 1 }}
              className="hamburger-line2"
            />
            <motion.span 
              animate={mobileNavOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
              className="hamburger-line2"
            />
          </motion.div>
        </div>
        <motion.div variants={mobileMenuVariant} className="mobile-menu2">
          <motion.div
            variants={fadeInVariant}
            onClick={() => setMobileNavOpen(false)}
            className="hamburger-menu2 self-end open2 mr-[45px] mt-[35px]"
          >
            <motion.span 
              animate={mobileNavOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
              className="hamburger-line2"
            />
            <motion.span 
              animate={mobileNavOpen ? { opacity: 0 } : { opacity: 1 }}
              className="hamburger-line2"
            />
            <motion.span 
              animate={mobileNavOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
              className="hamburger-line2"
            />
          </motion.div>
          <motion.ul variants={ulVariant}>
        {MOBILE_NAV_ITEMS.map(navItem => (
          <motion.li 
            whileTap={{ scale: 0.95 }} 
            key={navItem.id}
            className={location.pathname === navItem.path ? 'active' : ''}
          >
            <Link to={navItem.path}>
              <motion.div 
                variants={liVariant}
                className={location.pathname === navItem.path ? 'nav-link active' : 'nav-link'}
              >
                {navItem.navTitle}
              </motion.div>
            </Link>
          </motion.li>
        ))}
      </motion.ul>
          <motion.div variants={fadeInVariant} className="contact">
            <h5>
            +91 9600931366
            </h5>
            <h5>explore@hausofchaos.co</h5>
          </motion.div>
        </motion.div>
      </motion.nav>

     
    </div>
  )
}

export default App
