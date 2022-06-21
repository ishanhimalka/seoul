import React from 'react';
import { Grid, CardActionArea} from "@mui/material";
import {styled} from '@mui/material/styles';
import Box from '@mui/material/Box';
import ButtonBase from '@mui/material/ButtonBase';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import PeopleIcon from '@mui/icons-material/People';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import StarIcon from '@mui/icons-material/Star';
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
const images = [
    {
        url: 'http://www.seoulhotelsrilanka.com/img/cat-1.jpg',
        title: 'Web Design',
        width: '40%',
    },
    {
        url: 'http://www.seoulhotelsrilanka.com/img/cat-2.jpg',
        title: 'Development',
        width: '30%',
    },
    {
        url: 'http://www.seoulhotelsrilanka.com/img/cat-6.jpg',
        title: 'Research',
        width: '30%',
    },
];

const ImageButton = styled(ButtonBase)(({theme}) => ({
    position: 'relative',
    height: 200,
    [theme.breakpoints.down('sm')]: {
        width: '100% !important', // Overrides inline-style
        height: 100,
    },
    '&:hover, &.Mui-focusVisible': {
        zIndex: 1,
        '& .MuiImageBackdrop-root': {
            opacity: 0.15,
        },
        '& .MuiImageMarked-root': {
            opacity: 0,
        },
        '& .MuiTypography-root': {
            border: '4px solid currentColor',
        },
    },
}));

const ImageSrc = styled('span')({
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundSize: 'cover',
    backgroundPosition: 'center 40%',
});

const Image = styled('span')(({theme}) => ({
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: theme.palette.common.white,
}));

const ImageBackdrop = styled('span')(({theme}) => ({
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: theme.palette.common.black,
    opacity: 0.4,
    transition: theme.transitions.create('opacity'),
}));

const ImageMarked = styled('span')(({theme}) => ({
    height: 3,
    width: 18,
    backgroundColor: theme.palette.common.white,
    position: 'absolute',
    bottom: -2,
    left: 'calc(50% - 9px)',
    transition: theme.transitions.create('opacity'),
}));


const CoursePage = () => {
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

            {/*start Subject*/}
            <Grid Style={{alignItem: 'center'}} container spacing={1}>
                <Grid item xs={12}>
                    <div style={{textAlign: 'center'}}>
                        <h2 style={{letterSpacing: '5px', color: '#ff0000'}}>SUBJECTS</h2>
                        <h1 style={{color: '#44425A'}}>Explore Top Subjects</h1>
                    </div>
                    <Box sx={{display: 'flex', flexWrap: 'wrap', minWidth: 300, width: '100%'}}>
                        {images.map((image) => (
                            <ImageButton
                                focusRipple
                                key={image.title}
                                style={{
                                    width: image.width,
                                }}
                            >
                                <ImageSrc style={{backgroundImage: `url(${image.url})`}}/>
                                <ImageBackdrop className="MuiImageBackdrop-root"/>
                                <Image>
                                    <Typography
                                        component="span"
                                        variant="subtitle1"
                                        color="inherit"
                                        sx={{
                                            position: 'relative',
                                            p: 4,
                                            pt: 2,
                                            pb: (theme) => `calc(${theme.spacing(1)} + 6px)`,
                                        }}
                                    >
                                        {image.title}
                                        <ImageMarked className="MuiImageMarked-root"/>
                                    </Typography>
                                </Image>
                            </ImageButton>
                        ))}
                    </Box>
                </Grid>
            </Grid>
            {/*End Subject*/}

            {/*Start Courses*/}
            <Grid Style={{alignItem: 'center'}} container spacing={1}>
                <Grid item xs={12}>
                    <div style={{textAlign: 'center'}}>
                        <h2 style={{letterSpacing: '5px', color: '#ff0000'}}>COURSES</h2>
                        <h1 style={{color: '#44425A'}}>Our Popular Courses</h1>
                    </div>
                </Grid>
                <Grid container spacing={1}>
                    <Grid item xs={12} sm={4}>
                        <Card style={{borderRadius: '8px'}} sx={{maxWidth: 345}}>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    height="140"
                                    image="http://www.seoulhotelsrilanka.com/img/course-1.jpg"
                                    alt="green iguana"
                                />
                                <CardContent>
                                    <small>
                                        <PeopleIcon color="error"/>
                                        25 Students</small>
                                    <small><AccessTimeIcon color="error"/>
                                        01h 30m</small>

                                    <Typography style={{color: '#44425A'}} gutterBottom variant="h5" component="div">
                                        Web design & development courses for beginner
                                    </Typography>
                                    <hr/>
                                    <StarIcon color="error"/>4.5 <small>(250)</small>
                                    <small className="m-0">$99</small>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <Card style={{borderRadius: '8px'}} sx={{maxWidth: 345}}>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    height="140"
                                    image="http://www.seoulhotelsrilanka.com/img/course-2.jpg"
                                    alt="green iguana"
                                />
                                <CardContent>
                                    <small>
                                        <PeopleIcon color="error"/>
                                        25 Students</small>
                                    <small><AccessTimeIcon color="error"/>
                                        01h 30m</small>

                                    <Typography style={{color: '#44425A'}} gutterBottom variant="h5" component="div">
                                        Web design & development courses for beginner
                                    </Typography>
                                    <hr/>
                                    <StarIcon color="error"/>4.5 <small>(250)</small>
                                    <small className="m-0">$99</small>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <Card style={{borderRadius: '8px'}} sx={{maxWidth: 345}}>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    height="140"
                                    // image="https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Palace_of_Fine_Arts_%2816794p%29.jpg/1200px-Palace_of_Fine_Arts_%2816794p%29.jpg"
                                    image="http://www.seoulhotelsrilanka.com/img/course-1.jpg"
                                    alt="green iguana"
                                />
                                <CardContent>
                                    <small>
                                        <PeopleIcon color="error"/>
                                        25 Students</small>
                                    <small><AccessTimeIcon color="error"/>
                                        01h 30m</small>

                                    <Typography style={{color: '#44425A'}} gutterBottom variant="h5" component="div">
                                        Web design & development courses for beginner
                                    </Typography>
                                    <hr/>
                                    <StarIcon color="error"/>4.5 <small>(250)</small>
                                    <small className="m-0">$99</small>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>
                </Grid>

            </Grid>
            {/*End Courses*/}

        </div>
    )
}

export default CoursePage;
