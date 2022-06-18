import {Button, Grid, Typography} from "@mui/material";
import LOGO from "../../img/logo.jpeg";
import * as React from "react";

const Footer = () => {
    return (
        <footer style={{backgroundColor: '#000', color: '#fff'}}>
            <Grid container
                  direction="row"
                  justifyContent="center"
                  alignItems="center">
                <Grid item md={2} sm={12} xs={12}>
                    <div style={{display: "flex", flexDirection: 'column',textAlign:'center',alignItems:'center',margin:10}}>

                        <img src={LOGO} style={{width: '80px'}} alt={'logo'}/>
                        <Typography component={'p'}>Great lesson ideas and lesson plans for ESL teachers! Educators can customize
                            lessons as best plans to knowledge.</Typography>
                    </div>
                </Grid>
                <Grid item md={4} sm={12} xs={12}>
                </Grid>
                <Grid item md={4} sm={12} xs={12}>
                    <div style={{display: "flex", flexDirection: 'column',alignItems:'flex-start'}}>
                        <Button
                            style={{
                                width: 'auto',
                                color: 'white',
                                fontFamily: '"Montserrat", sans-serif',
                                fontWeight: 700,
                                "&:hover": {
                                    color: 'rgb(255,0,0)',
                                },
                            }}
                            variant="text"
                        >
                            {'Browse Courses'}
                        </Button>
                        <Button
                            style={{
                                width: 'auto',
                                textAlign:'left',
                                color: 'white',
                                fontFamily: '"Montserrat", sans-serif',
                                fontWeight: 300,
                                "&:hover": {
                                    color: 'rgb(255,0,0)',
                                },
                            }}
                            variant="text"
                        >
                            {'Certificate in Hospitality Skills'}
                        </Button>
                        <Button
                            style={{
                                width: 'auto',
                                textAlign:'left',
                                color: 'white',
                                fontFamily: '"Montserrat", sans-serif',
                                fontWeight: 300,
                                "&:hover": {
                                    color: 'rgb(255,0,0)',
                                },
                            }}
                            variant="text"
                        >
                            {'Diploma in Hospitality Management'}
                        </Button>
                        <Button
                            style={{
                                width: 'auto',
                                textAlign:'left',
                                color: 'white',
                                fontFamily: '"Montserrat", sans-serif',
                                fontWeight: 300,
                                "&:hover": {
                                    color: 'rgb(255,0,0)',
                                },
                            }}
                            variant="text"
                        >
                            {'Advanced Diploma in Hospitality Management'}
                        </Button>
                        <Button
                            style={{
                                width: 'auto',
                                textAlign:'left',
                                color: 'white',
                                fontFamily: '"Montserrat", sans-serif',
                                fontWeight: 300,
                                "&:hover": {
                                    color: 'rgb(255,0,0)',
                                },
                            }}
                            variant="text"
                        >
                            {'Higher Diploma in Hospitality Management'}
                        </Button>
                    </div>
                </Grid>
                <Grid item md={2} sm={12} xs={12}>
                    <div style={{display: "flex", flexDirection: 'column',alignItems:'flex-start'}}>
                        <Button
                            style={{
                                width: 'auto',
                                textAlign:'left',
                                color: 'white',
                                fontFamily: '"Montserrat", sans-serif',
                                fontWeight: 300,
                                "&:hover": {
                                    color: 'rgb(255,0,0)',
                                },
                            }}
                            variant="text"
                        >
                            {'About'}
                        </Button>
                        <Button
                            style={{
                                width: 'auto',
                                textAlign:'left',
                                color: 'white',
                                fontFamily: '"Montserrat", sans-serif',
                                fontWeight: 300,
                                "&:hover": {
                                    color: 'rgb(255,0,0)',
                                },
                            }}
                            variant="text"
                        >
                            {'Hotel'}
                        </Button>
                        <Button
                            style={{
                                width: 'auto',
                                textAlign:'left',
                                color: 'white',
                                fontFamily: '"Montserrat", sans-serif',
                                fontWeight: 300,
                                "&:hover": {
                                    color: 'rgb(255,0,0)',
                                },
                            }}
                            variant="text"
                        >
                            {'Courses'}
                        </Button>
                        <Button
                            style={{
                                width: 'auto',
                                textAlign:'left',
                                color: 'white',
                                fontFamily: '"Montserrat", sans-serif',
                                fontWeight: 300,
                                "&:hover": {
                                    color: 'rgb(255,0,0)',
                                },
                            }}
                            variant="text"
                        >
                            {'Contact'}
                        </Button>
                    </div>
                </Grid>
            </Grid>
        </footer>
    )
}

export default Footer;