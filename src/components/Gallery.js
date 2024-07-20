


// import React from 'react';
// import { useNavigate } from 'react-router-dom';
// import i1 from '../assets/Bathroom(1).jpg';
// import i2 from '../assets/Floor plan(1).jpg';
// import i3 from '../assets/Kitchen(1).jpg';
// import i4 from '../assets/Living room.jpg';
// import i5 from '../assets/On site laundry.jpg';
// import i6 from '../assets/Room 1 ($1120_month).jpg';
// import i7 from '../assets/Room 2 ($1150_month).jpg';
// import i8 from '../assets/Room 3 ($1150_month).jpg';
// import i9 from '../assets/Room 4 ($1180_month).jpg';
// import { Container } from 'react-bootstrap';

// const Gallery = () => {
//   const navigate = useNavigate();

//   const imagesData = [
//     {
//       src: i1,
//       text: 'Image 1',
     
//        beds: '4 Beds',
 
//       link: '/page1'
//     },
//     {
//       src: i2,
//       text: 'Image 2',
     
//       beds: '4 Beds',  
//       link: '/page2'
//     },
//     {
//       src: i3,
//       text: 'Image 3',
//        beds: '4 Beds',
      
//       link: '/page3'
//     },
//     {
//       src: i4,
//       text: 'Image 4',
//       beds: '4 Beds',
//       link: '/page4'
//     },
//     {
//       src: i5,
//       text: 'Image 5',
//        beds: '4 Beds',

//       link: '/page5'
//     },
//     {
//       src: i6,
//       text: 'Image 6',
//        beds: '4 Beds',
 
//       link: '/page6'
//     },
//     {
//       src: i7,
//       text: 'Image 7',
//       beds: '4 Beds',
//         link: '/page7'
//     },
//     {
//       src: i8,
//       text: 'Image 8',
//        beds: '4 Beds',
//         link: '/page8'
//     },
//     {
//       src: i9,
//       text: 'Image 9',
//       beds: '4 Beds',
//         link: '/page9'
//     }
//   ];

//   const handleImageClick = (link) => {
//     navigate(link);
//   };

//   const galleryStyle = {
//     display: 'flex',
//     flexWrap: 'wrap',
//     gap: '10px',
//     justifyContent: 'center'
//   };

//   const imageContainerStyle = {
//     position: 'relative',
//     cursor: 'pointer',
//     width: '400px',
//     height: '300px',
//     overflow: 'hidden'
//   };

//   const galleryImageStyle = {
//     display: 'block',
//     width: '100%',
//     height: '100%',
//     objectFit: 'cover'
//   };

//   const textOverlayStyle = {
//     position: 'absolute',
//     bottom: '0',
//     left: '0',
//     width: '100%',
//     backgroundColor: 'rgba(0, 0, 0, 0.7)',
//     color: 'white',
//     padding: '10px',
//     boxSizing: 'border-box'
//   };

//   const titleStyle = {
//     fontSize: '24px',
//     fontWeight: 'bold'
//   };

//   const detailsStyle = {
//     fontSize: '16px',
//     marginTop: '5px'
//   };

//   return (
//     <Container style={galleryStyle}>
//       {imagesData.map((image, index) => (
//         <div
//           key={index}
//           style={imageContainerStyle}
//           onClick={() => handleImageClick(image.link)}
//         >
//           <img src={image.src} alt={image.text} style={galleryImageStyle} />
//           <div style={textOverlayStyle}>
//             <div style={titleStyle}>{image.price}</div>
//             <div style={detailsStyle}>{image.address}</div>
//             <div style={detailsStyle}>{image.beds}  {image.baths}  {image.sqft}</div>
//           </div>
//         </div>
//       ))}
//     </Container>
//   );
// };

// export default Gallery;
