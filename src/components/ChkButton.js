import { Button } from "@mui/material"
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';



const ChkButton = () => {
return(

<>

<Button variant="contained" color="success" endIcon={<AddShoppingCartIcon />}>
  Checkout
</Button>

</>

)
}

export default ChkButton;