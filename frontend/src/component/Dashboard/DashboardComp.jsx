import React from 'react';

function DashboardComp(props) {
    return (
        <div>
            
        </div>
    );
}

export default DashboardComp;





// import React from "react";
// import { Users, Package, ShoppingBag } from "lucide-react";
// import '../../assets/style.css';

// function DashboardComp() {
//   const cards = [
//     {
//       id: 1,
//       title: "Customers",
//       value: 9,
//       change: "+11.01%",
//       icon: <Users size={28} color="white" />,
//       bgColor: "#F5B800",
//     },
//     {
//       id: 2,
//       title: "Orders",
//       value: 2,
//       change: "-9.05%",
//       icon: <Package size={28} color="white" />,
//       bgColor: "#F5B800",
//     },
//     {
//       id: 3,
//       title: "Total Products",
//       value: 4,
//       change: "-9.05%",
//       icon: <ShoppingBag size={28} color="white" />,
//       bgColor: "#F5B800",
//     },
//   ];

//   return (
//     <div className="cards-container">
//       {cards.map((card) => (
//         <div key={card.id} className="card">
//           <div className="card-left">
//             <div
//               className="card-icon"
//               style={{ backgroundColor: card.bgColor }}
//             >
//               {card.icon}
//             </div>
//             <div>
//               <p className="card-title">{card.title}</p>
//               <h3 className="card-value">{card.value}</h3>
//             </div>
//           </div>
//           <div
//             className={`card-change ${
//               card.change.startsWith("+")
//                 ? "card-change-up"
//                 : "card-change-down"
//             }`}
//           >
//             {card.change}
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// }

// export default DashboardComp;
