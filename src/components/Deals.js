import React, { useState } from 'react'
import { Button } from 'bootstrap'

const Deals = () => {
    const [deals, setDeals] = useState([
        {
            id:1,
            name: "Junior IT Konzultant",
            company: "BCV solutions s.r.o.",
            location: "Praha",
            remote: false
        },
        {
            id:2,
            name: "🚗 Junior Specialista dopravy (Data Analyst/Project Manager)",
            company: "INTENS Corporation",
            location: "Praha",
            remote: false
        },
        {
            id:3,
            name: "Sales & Marketing Director for TELMA AI s.r.o",
            company: "The MAMA AI",
            location: "Praha",
            remote: true
        },
        {
            id:4,
            name: "🖥️ Front-end React UI vývojář | eHealth 💊 | (Type/Javascript)",
            company: "Bindworks s.r.o.",
            location: "Praha, Brno",
            remote: true
        },
        {
            id:5,
            name: "🔰 VUE / JavaScript Developer 🔰",
            company: "Easy Software",
            location: "Praha",
            remote: true
        },
        {
            id:6,
            name: "Product Manager for Frontend",
            company: "Ahowmax",
            location: "Praha",
            remote: true
        },
        {
            id:7,
            name: "Obchodní zástupce crowdfundingu",
            company: "Fingood s.r.o.",
            location: "Praha",
            remote: true
        },
        {
            id:8,
            name: "Software Test Engineer pro interní databázi",
            company: "Livesport",
            location: "Praha",
            remote: false
        },{
            id:9,
            name: "Junior IT Konzultant",
            company: "BCV solutions s.r.o.",
            location: "Praha",
            remote: false
        },
        {
            id:10,
            name: "🚗 Junior Specialista dopravy (Data Analyst/Project Manager)",
            company: "INTENS Corporation",
            location: "Praha",
            remote: false
        },
        {
            id:11,
            name: "Sales & Marketing Director for TELMA AI s.r.o",
            company: "The MAMA AI",
            location: "Praha",
            remote: true
        },
        {
            id:12,
            name: "🖥️ Front-end React UI vývojář | eHealth 💊 | (Type/Javascript)",
            company: "Bindworks s.r.o.",
            location: "Praha, Brno",
            remote: true
        },
        {
            id:13,
            name: "🔰 VUE / JavaScript Developer 🔰",
            company: "Easy Software",
            location: "Praha",
            remote: true
        },
    ])
  return (
    <div className='container'>
        <h1
         style={{"textAlign":"center", "fontSize":"1.325rem", "paddingTop":"20px"}}>
            Nejžhavější pracovní nabídky
         <span style={{"backgroundColor":"red", "color":"white"}}>HOT</span>
         </h1>
        <hr/>
        {deals.map((deal) => {
            return(<div style={{"cursor":"pointer"}}>
               <div style={{"fontSize":"1.125rem"}}>{`${deal.name}`}</div>
               <div className='d-flex'>
               <div className='text-lightsecondary'
                style={{"color":"grey",}}>
                {`${deal.company} `}
                </div>
               <div style={{"color":"grey"}}>
                <span style={{"color":"red", "paddingLeft":"10px"}}> ● </span>
                {` ${deal.location}`}
                </div>
               {deal.remote? 
               (<div style={{"color":"grey"}}>
                <span style={{"color":"red", "paddingLeft":"10px"}}> ● </span> remote 🌎</div>):("")}
               </div>
               <hr/>
               </div>
        )
        })}
        <div className='d-flex flex-column justify-content-center align-items-center'>
        <button className="btn btn-danger"
        style={{"borderRadius":"0", "margin":"20px 0"}}
        type="button"
        id="button-addon2">
        Více HOTjobs
        </button>
        
        <button className="btn btn-primary"
        style={{"borderRadius":"0"}}
        type="button"
        id="button-addon2">
        Zobrazit všechny nabídky
        </button>
        </div>
    </div>
  )
}

export default Deals