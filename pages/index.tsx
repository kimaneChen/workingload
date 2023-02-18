import type { NextPage } from 'next'
import Head from 'next/head'
import { useDispatch, useSelector } from 'react-redux'
import { wrapper } from '../store/store'
import { selectAuthState, setAuthState } from '../store/authSlice'

const Home: NextPage = () => {
  const authState = useSelector(selectAuthState)
  const dispatch = useDispatch()
  return (
    <div>
      <Head>
        <title>Working Load</title>
      </Head>

      <main>
        <div>
          <div>{authState ? 'Logged in' : 'Not Logged In'}</div>
          <button
            onClick={() =>
              authState ? dispatch(setAuthState(false)) : dispatch(setAuthState(true))
            }
            type="button"
          >
            {authState ? 'Logout' : 'LogIn'}
          </button>
        </div>
      </main>
    </div>
  )
}

export const getServerSideProps = wrapper.getServerSideProps((store) => async ({ params }) => {
  await store.dispatch(setAuthState(false))
  console.log('State on server', store.getState())
  return {
    props: {
      setAuthState: false,
    },
  }
})

export default Home
