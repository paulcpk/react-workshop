import { useState } from 'react'
import useAsyncEffect from 'use-async-effect'
import axios from '../api/axios'
import { getModelTable } from '../utils/getModelTable'

const Profile = () => {
  const [profile, setProfile] = useState(null)

  useAsyncEffect(async () => {
    console.log('init')

    try {
      const response = await axios.get('/profile', {
        withCredentials: true,
      })

      console.log('response', response)
      const userData = response?.data?.data
      setProfile(userData)
    } catch (err) {
      console.log('err', err)
    }
  }, [])

  return (
    <>
      <header className="app-header">
        <h2>Profile</h2>
      </header>
      <div className="card">
        <div className="card-body">{getModelTable(profile)}</div>
      </div>
    </>
  )
}

export default Profile
