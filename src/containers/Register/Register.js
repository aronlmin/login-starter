import React from 'react'
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import Box from '@material-ui/core/Box'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardActions from '@material-ui/core/CardActions'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import { makeStyles, withStyles, createMuiTheme } from '@material-ui/core/styles'
import { ThemeProvider } from '@material-ui/styles'
import { Link } from 'react-router-dom'
// import FormControlLabel from '@material-ui/core/FormControlLabel'
import deepOrange from '@material-ui/core/colors/deepOrange'
import CircularProgress from '@material-ui/core/CircularProgress'

const theme = createMuiTheme({
  palette: {
    primary: deepOrange
  },
  typography: {
    button: {
      textTransform: 'none'
    }
  }
})

const Register = (props) => {
  const classes = useStyles()
  const {
    isLoading,
    firstName,
    firstNameError,
    lastName,
    lastNameError,
    email,
    emailError,
    password,
    passwordError,
    passwordConfirmation,
    passwordConfirmationError,
    handleChange,
    handleSubmit
  } = props

  let disableSubmit = false
  if (!firstName) disableSubmit = true
  if (!lastName) disableSubmit = true
  if (!email) disableSubmit = true
  if (!password) disableSubmit = true
  if (!passwordConfirmation) disableSubmit = true
  if (firstNameError) disableSubmit = true
  if (lastNameError) disableSubmit = true
  if (emailError) disableSubmit = true
  if (passwordError) disableSubmit = true
  if (passwordConfirmationError) disableSubmit = true

  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth='sm'>
        <Grid container spacing={0} alignItems={'center'} justify={'center'}>
          <Box>
            <Card className={classes.card}>
              <CardContent>
                <form onSubmit={e => e.preventDefault()}>
                  <Typography component='h2' gutterBottom className={classes.title}>
                    {'Create an Account'}
                  </Typography>
                  <TextField
                    required
                    disabled={isLoading}
                    error={firstNameError !== null}
                    id='outlined-firstName'
                    type='text'
                    autoFocus
                    label='First Name'
                    className={classes.textField}
                    variant='outlined'
                    value={firstName || ''}
                    onChange={(e) => {
                      handleChange('firstName', e.target.value)
                    }}
                    margin='normal'
                  />
                  {firstNameError && <span style={{ color: 'red' }}>{firstNameError}</span>}
                  <TextField
                    required
                    disabled={isLoading}
                    error={lastNameError !== null}
                    id='outlined-lastName'
                    type='text'
                    label='Last Name'
                    className={classes.textField}
                    variant='outlined'
                    value={lastName || ''}
                    onChange={(e) => {
                      handleChange('lastName', e.target.value)
                    }}
                    margin='normal'
                  />
                  {lastNameError && <span style={{ color: 'red' }}>{lastNameError}</span>}
                  <TextField
                    required
                    disabled={isLoading}
                    error={emailError !== null}
                    id='outlined-email'
                    type='email'
                    label='Email'
                    className={classes.textField}
                    variant='outlined'
                    value={email || ''}
                    onChange={(e) => {
                      handleChange('email', e.target.value)
                    }}
                    margin='normal'
                  />
                  {emailError && <span style={{ color: 'red' }}>{emailError}</span>}
                  <TextField
                    required
                    disabled={isLoading}
                    error={passwordError !== null}
                    id='outlined-password'
                    // type='password'
                    label='Password'
                    className={classes.textField}
                    variant='outlined'
                    value={password || ''}
                    onChange={(e) => {
                      handleChange('password', e.target.value)
                    }}
                    maxLength={130}
                    margin='normal'
                  />
                  {passwordError && <span style={{ color: 'red' }}>{passwordError}</span>}
                  <TextField
                    required
                    disabled={isLoading}
                    error={passwordConfirmationError !== null}
                    id='outlined-password-confirmation'
                    type='password'
                    label='Password Confirmation'
                    className={classes.textField}
                    variant='outlined'
                    value={passwordConfirmation || ''}
                    onChange={(e) => {
                      handleChange('passwordConfirmation', e.target.value)
                    }}
                    maxLength={'130'}
                    margin='normal'
                  />
                  {passwordConfirmationError && <span style={{ color: 'red' }}>{passwordConfirmationError}</span>}
                  {!isLoading &&
                    <div style={{ width: '100%', marginTop: 25 }}>
                      <Button
                        size='large'
                        variant='contained'
                        type='submit'
                        style={{ width: '100%' }}
                        classes={{
                          root: props.classes.root,
                          label: props.classes.label
                        }}
                        disabled={disableSubmit}
                        onClick={() => handleSubmit()}
                      >
                        {'Create Account'}
                      </Button>
                    </div>
                  }
                  {isLoading &&
                    <div style={{ textAlign: 'center', marginTop: 25 }}>
                      <CircularProgress />
                    </div>
                  }
                </form>
              </CardContent>
              <CardActions style={{ display: 'block', width: '100%', textAlign: 'right' }}>
                <div style={{ width: '100%', float: 'left', textAlign: 'right' }}>
                  <Link to='/login' style={{ textDecoration: 'none' }}><Button size='small' style={{ marginTop: 10 }}>Have an Account? Sign In</Button></Link>
                </div>
                <div style={{ clear: 'both' }} />
              </CardActions>
            </Card>
          </Box>
        </Grid>
      </Container>
    </ThemeProvider>
  )
}

const useStyles = makeStyles(theme => ({
  card: {
    minWidth: 275,
    maxWidth: 380,
    marginTop: 20
  },
  title: {
    fontSize: 24,
    textAlign: 'center'
  },
  subheader: {
    textAlign: 'center'
  },
  textField: {
    width: '100%'
  },
  leftIcon: {
    marginRight: theme.spacing(25)
  }
}))

const styles = {
  root: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    borderRadius: 3,
    border: 0,
    color: 'white',
    height: 48,
    padding: '0 30px',
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)'
  },
  label: {
    textTransform: 'capitalize'
  }
}

export default withStyles(styles)(Register)
