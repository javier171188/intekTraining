import Box from '@mui/material/Box';

const Header = ({ fontSize, color, textAlign, border, borderColor, padding }) => {
    return <Box
        component={"h1"}
        color={color || "brown"}
        sx={{
            border: border,
            fontSize: fontSize || 58,
            textAlign: textAlign || 'center',
            borderColor: borderColor || color || 'black',
            padding
        }}
    >Gallery</Box>
}

export default Header;