import { Box, Button, Typography } from "@mui/material"
import SelectField from "../components/SelectField"


const settings = () => {

    
      const handleSubmit= e => {
        e.preventDefault();
      }
    


  return (
    <form onSubmit={handleSubmit}>
    <Typography variant="h2" fontWeight='Bold'>
      Quiz App
    </Typography>
    <SelectField label='Categoty'/>
    <SelectField label='Difficulty'/>
    <SelectField label='Type'/>
    <Box mt={3} width='100%'>
    <Button fullWidth variant='contained' type="submit">
      Get Started
    </Button>
    
    </Box>

    </form>
  )
}

export default settings