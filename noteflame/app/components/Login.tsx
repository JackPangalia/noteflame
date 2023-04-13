'use client'
import { auth, googleProvider } from '../firebase-config'
import { signInWithPopup, signOut } from 'firebase/auth'

interface Props {
  isShown:boolean
}

const Login = ({isShown}:Props) => {
  // sign in with google function
  const signInWithGoogle = async () => {
    try {
      await signInWithPopup(auth, googleProvider)
    } catch (error:any) {
      console.log('error ', error)
    }
  }

  // logout function 
  const logOut = async () => {
    try {
      await signOut(auth)
    } catch (error:any) {
      console.log('error ', error)
    }
  }

  return (
    <div className = 'flex justify-around h-[88vh] items-center' style = {isShown ? {display: 'flex'} : {display: 'none'}}>
      <section className = 'flex flex-col items-center'>
        <h2 className = 'font-bold text-gray-100 mb-3'>Register</h2>

        <form className = 'flex flex-col space-y-3'>
          <input 
            className = 'p-3 rounded-lg bg-zinc-900 text-gray-100 placeholder-zinc-600 outline-none'
            placeholder = 'Username'
          />

          <input
            className = 'p-3 rounded-lg bg-zinc-900 text-gray-100 placeholder-zinc-600 outline-none'
            placeholder = 'Email'
          />

          <input 
            className = 'p-3 rounded-lg bg-zinc-900 text-gray-100 placeholder-zinc-600 outline-none'
            placeholder = 'Verify Email'
          />

          <input 
            className = 'p-3 rounded-lg bg-zinc-900 text-gray-100 placeholder-zinc-600 outline-none'
            placeholder = 'Password'
          />

          <input 
            className = 'p-3 rounded-lg bg-zinc-900 text-gray-100 placeholder-zinc-600 outline-none'
            placeholder = 'Verify Password'
          />

          <button
            className = 'text-teal-500 p-3 bg-zinc-900 rounded-lg hover:font-bold'
          >Sign up</button>
        </form>
      </section>

      <section className = 'flex flex-col items-center'>
        <h2 className = 'font-bold text-gray-100 mb-3'>Login</h2>

        <form className = 'flex flex-col space-y-3'>
          <input 
            placeholder = 'Email'
            className = 'p-3 rounded-lg bg-zinc-900 text-gray-100 placeholder-zinc-699 outline-none'
          /> 

          <input 
            placeholder = 'Password'
            className = 'p-3 rounded-lg bg-zinc-900 text-gray-100 placeholder-zinc-699 outline-none'            
          /> 
          
          <div>
            <input 
              className = 'ml-1'
              type = 'checkbox'
            />
            <label className = 'text-lg text-gray-100 ml-3'>Remeber me</label>
          </div>

          <button
            className = 'flex justify-center bg-zinc-900 p-3 rounded-lg text-teal-500 hover:font-bold'
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9" />
            </svg>
            Sign in
          </button>
        </form>
        
        <button
          className = 'bg-zinc-900 p-3 rounded-lg text-teal-500 hover:font-bold w-full mt-3'
          onClick={signInWithGoogle}
        >
          Sign in with Google
        </button>
      </section>
    </div>
  )
}

export default Login