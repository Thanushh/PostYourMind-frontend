import { Box } from "@mui/material"
import { styled } from "@mui/system"

const FlexBetween = styled(Box)({ //to reuse properties in MUI..use box
    display: "flex",
    justifyContent: " space-between",
    alignItems: "center",
})

export default FlexBetween;