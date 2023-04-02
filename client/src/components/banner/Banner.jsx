
import { styled, Box, Typography } from '@mui/material';

const Image = styled(Box)`
    width: 100%;
    background: rgb(17,8,102);
    background: linear-gradient(90deg, rgba(17,8,102,1) 0%, rgba(13,137,222,1) 35%, rgba(17,8,102,1) 100%);
    height: 50vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const Heading = styled(Typography)`
    font-size: 90px;
    color: #FFFFFF;
    line-height: 1
`;

const SubHeading = styled(Typography)`
    font-size: 20px;
    color:white;
`;

const Banner = () => {
    
    return (
        <Image>
            <Heading>MEDIshare</Heading>
            <SubHeading>Sharing Medicines.</SubHeading>
        </Image>
    )
}

export default Banner;  