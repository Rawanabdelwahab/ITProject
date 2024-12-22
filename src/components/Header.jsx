/* eslint-disable no-unused-vars */
// import React from "react";
// import "./header.css";
// export default function Header() {
//   return (
//     <div>
//       <section className="zgo-passless">
//         <div
//           className="content-wrap oneauth bottom-animated animated middle-animated
//       top-animated"
//         >
//           <div className="img-sec">
//             <div className="zgo-img">
//               <ul className="oneauth-feature zd-icon-onefea">
//                 <li>&nbsp;</li>
//                 <li>&nbsp;</li>
//                 <li>&nbsp;</li>
//                 <li>&nbsp;</li>
//               </ul>
//               <div className="oneauth">
//                 <div className="auth-img">
//                   <em className="zd-circle-1">&nbsp;</em>
//                   <em className="zd-circle-2">&nbsp;</em>
//                   <span className="oneauth-icon">&nbsp;</span>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }
import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";

export default function Header() {
  return (
    <AppBar position="static" style={{ width: "100vw" }} >
      <Toolbar
        sx={{ background: "linear-gradient(30deg, #795277 30%, #355192 85%)" }}
      >
        <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
        >
          <MenuIcon sx={{ fontSize: 40 }} />{" "}
          {/* Increase the font size as needed */}
        </IconButton>

        <Typography
          variant="h3"
          component="div"
          sx={{ flexGrow: 1, fontSize: "2rem" }} // Adjust the font size as needed
        >
          Hilton
        </Typography>
      </Toolbar>
    </AppBar>
  );
}
