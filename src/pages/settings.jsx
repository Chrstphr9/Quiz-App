 import { Box, Button, CircularProgress, Typography } from "@mui/material"
import SelectField from "../components/SelectField"
import TextFieldComp from "../components/TextFieldComp";
import useAxios from "../hooks/useAxios"


const Settings = () => {
      const { response, error, loading} = useAxios({ url: "/api_category.php" })
      
      if(loading) {
        return (
          <Box mt={20}>
            <CircularProgress />
          </Box>
        )
      }
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
    <TextFieldComp />
    <Box mt={3} width='100%'>
    <Button fullWidth variant='contained' type="submit">
      Get Started
    </Button>
    
    </Box>

    </form>
  )
}

export default Settings