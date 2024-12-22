/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
// import * as React from "react";
// import Card from "@mui/material/Card";
// import CardContent from "@mui/material/CardContent";
// import CardMedia from "@mui/material/CardMedia";
// import Typography from "@mui/material/Typography";
// import CardActionArea from "@mui/material/CardActionArea";
// import Grid from "@mui/material/Grid2";

// export default function ActionAreaCard({ name, title, email, src }) {

//   return (
//     <Grid container spacing={3}>
//       {/* Card 1 */}
//       <Grid item xs={12} sm={6} md={4}>
//         <Card sx={{ maxWidth: 345 }}>
//           <CardActionArea>
//             <CardMedia component="img" height="140" image={src} alt={name} />
//             <CardContent>
//               <Typography gutterBottom variant="h5" component="div">
//                 {name}
//               </Typography>
//               <Typography variant="body2" sx={{ color: "text.secondary" }}>
//                 {title}
//               </Typography>
//               <Typography variant="body2" sx={{ color: "text.secondary" }}>
//                 {email}
//               </Typography>
//             </CardContent>
//           </CardActionArea>
//         </Card>
//       </Grid>
//       {/* Card 2 */}
//       <Grid item xs={12} sm={6} md={4}>
//         <Card sx={{ maxWidth: 345 }}>
//           <CardActionArea>
//             <CardMedia component="img" height="140" image={src} alt={name} />
//             <CardContent>
//               <Typography gutterBottom variant="h5" component="div">
//                 {name}
//               </Typography>
//               <Typography variant="body2" sx={{ color: "text.secondary" }}>
//                 {title}
//               </Typography>
//               <Typography variant="body2" sx={{ color: "text.secondary" }}>
//                 {email}
//               </Typography>
//             </CardContent>
//           </CardActionArea>
//         </Card>
//       </Grid>

//       {/* Card 3 */}
//       <Grid item xs={12} sm={6} md={4}>
//         <Card sx={{ maxWidth: 345 }}>
//           <CardActionArea>
//             <CardMedia component="img" height="140" image={src} alt={name} />
//             <CardContent>
//               <Typography gutterBottom variant="h5" component="div">
//                 {name}
//               </Typography>
//               <Typography variant="body2" sx={{ color: "text.secondary" }}>
//                 {title}
//               </Typography>
//               <Typography variant="body2" sx={{ color: "text.secondary" }}>
//                 {email}
//               </Typography>
//             </CardContent>
//           </CardActionArea>
//         </Card>
//       </Grid>
//     </Grid>
//   );
// }

import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";
import Grid from "@mui/material/Grid";
import { Link } from "react-router-dom";
import { Container } from "@mui/material";
export default function MainCards({ cards }) {
  return (
    <Container maxWidth="lg" style={{ textAlign: 'center' }}>
      <Grid container spacing={3}>
        {cards.map((card, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card sx={{ maxWidth: 345, minWidth: 200 }}>
              <Link
                to={card.link}
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="200"
                    image={card.src}
                    alt={card.name}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {card.name}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{ color: "text.secondary" }}
                    >
                      {card.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{ color: "text.secondary" }}
                    >
                      {card.email}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Link>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
