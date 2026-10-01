import React from 'react';
import './Pricingtables.css';

        const Pricing = [
          {
            id: 1,
            title:"Starter",
            price:"$ 14.50",
            type:"monthly",
            info1:"60 GB space",
            info2:"600 GB transfer",
            info3:"Pro Design Panel",
            info4:"15-minute support",
            info5:"Unlimited Emails",
            info6:"24/7 Security",
            button:"PURCHASE NOW"
          },
           {
            id: 2,
            title:"Premium",
            price:"$ 21.50",
            type:"monthly",
            info1:"120 GB space",
            info2:"1200 GB transfer",
            info3:"Pro Design Panel",
            info4:"15-minute support",
            info5:"Unlimited Emails",
            info6:"24/7 Security",
            button:"PURCHASE NOW"
          },
           {
            id: 3,
            title:"Advanced",
            price:"$ 42.00",
            type:"monthly",
            info1:"250 GB space",
            info2:"5000 GB transfer",
            info3:"Pro Design Panel",
            info4:"15-minute support",
            info5:"Unlimited Emails",
            info6:"24/7 Security",
            button:"PURCHASE NOW"
          }
          
        ]
export default function Pricingtables() {
  return (
    <section id="pricingtables">
              <h1>Pricing Plans</h1>
        
              <p>Donec vulputate urna sed rutrum venenatis. Cras consequat magna quis arcu elementum, quis congue risus volutpat.</p>
              <div className="tables">
                {Pricing.map((item) => {
                  return (
                    <div key={item.id}>
                      <p><b>{item.title}</b></p>
                      <div>
                        <p><b>{item.price}</b></p>
                        <p>{item.type}</p>
                      </div>
                      <p>{item.info1}</p>
                      <p>{item.info2}</p>
                      <p>{item.info3}</p>
                      <p>{item.info4}</p>
                      <p>{item.info5}</p>
                      <p>{item.info6}</p>
                      <button>{item.button}</button>
                    </div>
                  )
                })}
              </div>
      </section>
  )
}
