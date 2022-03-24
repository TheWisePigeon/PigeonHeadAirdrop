import react from "react"
import { Link, Typography, withStyles } from '@mui/material'

function App() {

  return (
    <div >
      <header className=" header" >
        <div>
          <Typography variant="h4"  >
            Pigeon Head Airdrop
          </Typography>
        </div>

        <div className=" action-div">
          <Link underline="none" href="#" >
            <Typography variant="h6"  >
              Login
            </Typography>
          </Link><br />
          <Link underline="none" href="#"  >
            <Typography variant="h6">
              Register
            </Typography>
          </Link>
        </div>
        
      </header>
    </div>
  )
}

export default App
