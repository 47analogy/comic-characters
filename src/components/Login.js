import React from 'react'

export default function Login () {
  return (
    <div className='login-form'>
      <form>
        <label>
          Email:
          <input type='text' name='email' />
        </label>
        <label>
          Password:
          <input type='text' name='paswword' />
        </label>
        <button>Login</button>
      </form>
    </div>
  )
}
