import { Box } from "@mui/material"

const base_url = "https://postyourmind-backend.cyclic.app"
// "http://localhost:3001"

const UserImage = ({ image, size = "60px"}) => {
    return (
        <Box width={size} height={size}>
            <img
                style={{ objectFit: "cover", borderRadius: "50%"}}
                width={size}
                height={size}
                alt="user"
                src={`${base_url}/assets/${image}`}
            />
        </Box>
    )
}

export default UserImage