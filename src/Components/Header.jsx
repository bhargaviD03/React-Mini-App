import React from 'react'
import "./Header.css"


const navItems = [
  {
    id: 1,
    name: "Home",
    section: "home"
  },
  {
    id: 2,
    name: "About",
    section: "about"
  },
  {
    id: 3,
    name: "Work Process",
    section: "workprocess"
  },
  {
    id: 4,
    name: "Testimonials",
    section: "testimonials"
  },
  {
    id: 5,
    name: "Pricing Tables",
    section: "pricingtables"
  },
  {
    id: 6,
    name: "Blog Entries",
    section: "blogentries"
  },
  {
    id: 7,
    name: "Contact Us",
    section: "contactus"
  }
];
export default function Header() {

    const scrollToSection = (section) => {
    document.getElementById(section)?.scrollIntoView({
        behavior: "smooth"
    });
    };

  return (
    <div className='Navbar'>
       <div className="logo">
    <span className="logo-icon">
        <span></span>
    </span>

    <span><span className='log'>Sof</span><span>ty </span><span className='log'>Pin</span><b>ko</b></span>
    </div>
        <ul>
        {navItems.map((item)=>{
            return(
            <li key={item.id}>
                <button onClick={()=>scrollToSection(item.section)}> 
                    {item.name}
                </button>
            </li>
            );
        })}
        </ul>
    </div>
  )
}
