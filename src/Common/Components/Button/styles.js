import {makeStyles} from '@mui/styles';

export default makeStyles(() => ({
    btn: {
        backgroundColor: '#FE5000',
        borderRadius: 27,
        width: 'auto',
        color: 'white',
        fontFamily: '"Montserrat", sans-serif',
        fontWeight: 700,
        "&:hover": {
            background: '#d74203',
        },


    },

    btnRound: {
        background: '#FE5000',
        borderRadius: 27,
        width: 'auto',
        color: 'white',
        "&:hover": {
            background: '#d74203',
        },
        fontFamily: '"Montserrat", sans-serif',
        fontWeight: 700,

    },


    btnAsh: {
        background: '#969BAB',
        borderRadius: 27,
        width: 'auto',
        color: 'white',
        fontFamily: '"Montserrat", sans-serif',
        fontWeight: 700,
    },
    btnOutlined: {
        background: 'white',
        borderRadius: 27,
        borderColor: '#FE5000',
        color: '#FE5000',
        "&:hover": {
            background: '#FE5000',
            color: '#ffffff',
            borderColor: '#FE5000',
        },
    },
    btnOutlinedAsh: {
        background: 'white',
        borderRadius: 27,
        borderColor: '#959BAB',
        color: '#959BAB',
        "&:hover": {
            background: '#959BAB',
            color: 'black',

        },
        fontFamily: '"Montserrat", sans-serif',
        fontWeight: 700,
    },

}));