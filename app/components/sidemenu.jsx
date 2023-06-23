'use client'
import React from 'react'
import {VscChromeClose} from 'react-icons/vsc'
import {useGlobalContext} from '@/../context/context'
import Link from 'next/link'


const Sidemenu = () => {
    const {sidemenu, hideSidemenu} = useGlobalContext()
    const sideSections = {
        categories: [
            {
                id: 1,
                name: 'sneakers'
            },
            {
                id: 2,
                name: 'oxfords'
            },
            {
                id: 3,
                name: 'loafers'
            },
            {
                id: 4,
                name: 'boots'
            },
        ],
        sections: [
            {
                id: 1,
                name: 'about us',
            },
            {
                id: 1,
                name: 'faq',
            },
            {
                id: 1,
                name: 'contact us',
            },
        ]
    }
  return (
    <div className={sidemenu ? 'show-menu' : 'show-menu -left-[100vw]'}>
        <span className="close-sidemenu" onClick={hideSidemenu}><VscChromeClose/></span>
        <div className="sidemenu-navlinks">
            <Link href='' className='after-sidemenu-link'>women</Link>
            <Link href='' className='after-sidemenu-link'>men</Link>
        </div>
        <div className='cards'>
            <div className="card">
                <div className="img"></div>
                <div className="card-info">
                <p className="item-info">plain tow derby</p>
                <a href="" className='text-xs text-white leading-[14.52px text-white]'>shop now</a>
                </div>  
            </div>
            <div className="card">
                <div className="img"></div>
                <div className="card-info">
                <p className="item-info">plain tow derby</p>
                <a href="" className='text-xs text-white leading-[14.52px text-white]'>shop now</a>
                </div>
            </div>
        </div>
        <div className=" sm:flex sm:justify-around">
            
        <div className="sidemenu-section">
            <p className='section-title'>shop categories</p>
            <div className="section-items">
                {
                    sideSections.categories.map((cat) => {
                        const {id, name} = cat;
                        return <p key={id} className='item-info'>{name}</p>
                    })
                }
                </div> 
        </div>
        <div className="sidemenu-section">
            <div className="section-items">
                {
                    sideSections.sections.map((sec) => {
                        const {id, name} = sec;
                        return <p key={id} className='section-title'>{name}</p>
                    })
                }
                </div> 
        </div>
        </div>
    </div>
  )
}

export default Sidemenu