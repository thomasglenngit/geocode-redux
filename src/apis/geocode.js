import axios from 'axios'
import Form from '../Form'

const location = document.getElementById('location-input').value; // form.input.value

axios.get('https://maps.googleapis.com/maps/api/geocode/json',{
  params:{
    address:location,
    key: process.env.REACT_APP_GEO_KEY
  }
})
