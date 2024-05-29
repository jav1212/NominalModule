import Avatar from '@mui/material/Avatar';
import { deepOrange } from '@mui/material/colors';

const Avatars = () => {
    return (
        <Avatar
            sx={{ bgcolor: deepOrange[500], width: 36, height: 36}}
            alt="Remy Sharp"
            src="/broken-image.jpg"
        />
    )
}

export default Avatars;