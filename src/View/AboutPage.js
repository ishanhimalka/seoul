import React from 'react';
import about from "../img/about.jpg";
import teacher1 from "../img/team-1.jpg";
import {Button, Grid} from "@mui/material";
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import homeImage from "../img/home/homeImage.jpeg";
import {Carousel} from "react-carousel-minimal";

const data = [
    {
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/GoldenGateBridge-001.jpg/1200px-GoldenGateBridge-001.jpg",
        caption: `<div>
                  San Francisco
                  <br/>
                  Next line
                </div>`
    },
    {
        image: "https://cdn.britannica.com/s:800x450,c:crop/35/204435-138-2F2B745A/Time-lapse-hyper-lapse-Isle-Skye-Scotland.jpg",
        caption: "Scotland"
    },
    {
        image: "https://static2.tripoto.com/media/filter/tst/img/735873/TripDocument/1537686560_1537686557954.jpg",
        caption: "Darjeeling"
    },
    {
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Palace_of_Fine_Arts_%2816794p%29.jpg/1200px-Palace_of_Fine_Arts_%2816794p%29.jpg",
        caption: "San Francisco"
    },
    {
        image: "https://i.natgeofe.com/n/f7732389-a045-402c-bf39-cb4eda39e786/scotland_travel_4x3.jpg",
        caption: "Scotland"
    },
    {
        image: "https://www.tusktravel.com/blog/wp-content/uploads/2020/07/Best-Time-to-Visit-Darjeeling-for-Honeymoon.jpg",
        caption: "Darjeeling"
    },
    {
        image: "https://www.omm.com/~/media/images/site/locations/san_francisco_780x520px.ashx",
        caption: "San Francisco"
    },
    {
        image: "https://images.ctfassets.net/bth3mlrehms2/6Ypj2Qd3m3jQk6ygmpsNAM/61d2f8cb9f939beed918971b9bc59bcd/Scotland.jpg?w=750&h=422&fl=progressive&q=50&fm=jpg",
        caption: "Scotland"
    },
    {
        image: "https://www.oyorooms.com/travel-guide/wp-content/uploads/2019/02/summer-7.jpg",
        caption: "Darjeeling"
    }
];
const captionStyle = {
    fontSize: '2em',
    fontWeight: 'bold',
}
const slideNumberStyle = {
    fontSize: '20px',
    fontWeight: 'bold',
}

const AboutPage = () => {
    return (
        <div>
            <div className="App">
                <div style={{backgroundImage: `url(${homeImage})`}}>
                    <Grid>
                    </Grid>
                    <Carousel
                        data={data}
                        time={2000}
                        width="850px"
                        height="500px"
                        showNavBtn={false}
                        captionStyle={captionStyle}
                        radius="10px"
                        slideNumber={false}
                        slideNumberStyle={slideNumberStyle}
                        captionPosition="bottom"
                        automatic={true}
                        dots={true}
                        pauseIconColor="white"
                        pauseIconSize="40px"
                        slideBackgroundColor="darkgrey"
                        slideImageFit="cover"
                        thumbnails={false}
                        thumbnailWidth="100px"
                        style={{
                            textAlign: "center",
                            maxWidth: "850px",
                            maxHeight: "500px",
                            // margin: "40px auto",
                        }}
                    />
                </div>
            </div>

            {/*start about*/}
            <Grid Style={{alignItem: 'center'}} container spacing={1}>
                <Grid item xs={12} sm={5}>
                    <img style={{width: "80%", borderRadius: '8px'}} src={about} alt=""/>
                </Grid>
                <Grid item xs={12} sm={7}>
                    <div style={{textAlign: 'left'}}>
                        <h2 style={{letterSpacing: '5px', color: '#ff0000'}}>ABOUT US</h2>
                        <h1 style={{color: '#44425A'}}>Innovative Way To Learn</h1>
                    </div>
                    <p style={{textAlign: 'left'}}>Aliquyam accusam clita nonumy ipsum sit sea clita ipsum clita, ipsum
                        dolores amet
                        voluptua duo dolores et sit ipsum rebum, sadipscing et erat eirmod diam kasd labore
                        clita est. Diam sanctus gubergren sit rebum clita amet, sea est sea vero sed et.
                        Sadipscing labore tempor at sit dolor clita consetetur diam. Diam ut diam tempor no et,
                        lorem dolore invidunt no nonumy stet ea labore, dolor justo et sit gubergren diam sed
                        sed no ipsum. Sit tempor ut nonumy elitr dolores justo aliquyam ipsum stet</p>
                    <Button variant="contained" color="error">Learn More</Button>
                </Grid>
            </Grid>
            {/*end about*/}


            {/*Start Testimonial*/}
            <Grid Style={{alignItem: 'center'}} container spacing={1}>
                <Grid item xs={12}>
                    <div style={{textAlign: 'center'}}>
                        <h2 style={{letterSpacing: '5px', color: '#ff0000'}}>TESTIMONIAL</h2>
                        <h1 style={{color: '#44425A'}}>What Say Our Students</h1>
                    </div>
                </Grid>
                <Grid item xs={12} Style={{paddingLeft: '150'}}>
                    <FormatQuoteIcon sx={{fontSize: 70}} color="error"/>
                    <h2 style={{
                        fontWeight: "400", lineHeight: '1.2', padding: '0 100px 0 100px',
                        color: '#44425A'
                    }} className="font-weight-normal mb-4">Dolor eirmod diam stet kasd sed. Aliqu
                        rebum
                        est eos. Rebum elitr dolore et eos labore, stet justo sed est sed. Diam sed
                        sed
                        dolor stet amet eirmod eos labore diam</h2>
                    <img style={{width: '100px'}} src={teacher1} alt=""/>
                    <h2 style={{
                        fontWeight: "400", lineHeight: '1.2',
                        color: '#44425A'
                    }} className="m-0">Client Name</h2>
                    <h3 style={{fontWeight: "400", color: '#6C6A74'}}>Profession</h3>
                </Grid>
                <Grid item xs={12} Style={{paddingLeft: '150'}}>
                    <FormatQuoteIcon sx={{fontSize: 70}} color="error"/>
                    <h2 style={{
                        fontWeight: "400", lineHeight: '1.2', padding: '0 100px 0 100px',
                        color: '#44425A'
                    }} className="font-weight-normal mb-4">Dolor eirmod diam stet kasd sed. Aliqu
                        rebum
                        est eos. Rebum elitr dolore et eos labore, stet justo sed est sed. Diam sed
                        sed
                        dolor stet amet eirmod eos labore diam</h2>
                    <img style={{width: '100px'}} src={teacher1} alt=""/>
                    <h2 style={{
                        fontWeight: "400", lineHeight: '1.2',
                        color: '#44425A'
                    }} className="m-0">Client Name</h2>
                    <h3 style={{fontWeight: "400", color: '#6C6A74'}}>Profession</h3>
                </Grid>
                <Grid item xs={12} Style={{paddingLeft: '150'}}>
                    <FormatQuoteIcon sx={{fontSize: 70}} color="error"/>
                    <h2 style={{
                        fontWeight: "400", lineHeight: '1.2', padding: '0 100px 0 100px',
                        color: '#44425A'
                    }} className="font-weight-normal mb-4">Dolor eirmod diam stet kasd sed. Aliqu
                        rebum
                        est eos. Rebum elitr dolore et eos labore, stet justo sed est sed. Diam sed
                        sed
                        dolor stet amet eirmod eos labore diam</h2>
                    <img style={{width: '100px'}} src={teacher1} alt=""/>
                    <h2 style={{
                        fontWeight: "400", lineHeight: '1.2',
                        color: '#44425A'
                    }} className="m-0">Client Name</h2>
                    <h3 style={{fontWeight: "400", color: '#6C6A74'}}>Profession</h3>
                </Grid>
            </Grid>
            {/*End Testimonial*/}


        </div>
    )
}

export default AboutPage;
