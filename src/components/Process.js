import React from 'react'
import p1 from "../assets/p1.svg"
import p2 from "../assets/p2.svg"
import p3 from "../assets/p3.svg"
import p4 from "../assets/p4.svg"
import { Image } from 'react-bootstrap'

const Process = () => {
  return (
    <div className="container">
        <div>
            <h1 className="text-center fw-bold pt-5" style={{"fontSize": "1.375rem"}}>Prověřená cesta k získání práce snů?</h1>
            <div className="d-flex justify-content-between m-4 row" fluid="true">
                <div className='d-flex flex-column align-items-center col-md'>
                 <Image src={p1} className="image" fluid="true"/>
                 <h4 className="fs-6 fw-bold py-4">1. Založte si profil</h4>
                 <p /* style={{"textAlign":"justify"}} */>Protože se stanete talentem, a naše startupy vás budou moci oslovit samy. Navíc je s profilem prostě vše rychlejší a snazší.
Nevěříte? <span style={{"color":"#217edb", "marginLeft":"0.5em"}}>
 Přesvědčte se!
  </span> 
                 </p>
                </div>
                <div className='d-flex flex-column align-items-center col-md'>
                <Image src={p2} className="image" fluid="true"/>
                <h4 className="fs-6 fw-bold py-4">2. Vyplňte si profil</h4>
                <p /* style={{"textAlign":"justify"}} */>Jen s řádně vyplněným profilem vás najdou ty nejrelevantnější startupy. 
                <span style={{"color":"#217edb", "marginLeft":"0.5em"}}> 
 Vysvětlíme vám, jak na to.
                </span>
                 </p>
                </div>
                <div className='d-flex flex-column align-items-center col-md'>
                <Image src={p3} className="image" fluid="true"/>
                <h4 className="fs-6 fw-bold py-4">3. Hlaste se na nabídky</h4>
                <p /* style={{"textAlign":"justify"}} */>Nesázejte vše na jednu kartu a přihlašte se na všechny pracovní nabídky, které vás nejvíce oslovují.
                <span style={{"color":"#217edb", "marginLeft":"0.5em"}}>
 Jak to udělali úspěšní kandidáti?
</span>
                 </p></div>
                 <div className='d-flex flex-column align-items-center col-md'>
                 <Image src={p4} className="image" fluid="true"/>
                <h4 className="fs-6 fw-bold py-4">4. Oslovte firmy sami</h4>
                <p className='pb-5' /* style={{"textAlign":"justify"}} */>Všechny firmy aktivně nehledají, proto se jim musíte ukázat sami. <span style={{"color":"#217edb"}}> Mrkněte na startupy </span> a oslovte je přes tlačítko "Líbilo by se mi tu pracovat".
                 </p></div>
            </div>
        </div>
    </div>
  )
}

export default Process