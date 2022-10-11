import React, { useState } from 'react'

const Main = () => {
const {ethereum} = window;
const [error, setError] = useState('');
const [notLogin, setNotLogin] = useState(true);


  const LoginWallet = async () => {
    try {
      await ethereum.request({method: "wallet_requestPermissions", params:[{eth_accounts: {}}]}) //Metamask syntax for requesting permission for MULTIPLE ACCOUNTS
      const accounts = await ethereum.request({method: "eth_requestAccounts"}) //Metamask syntax for requesting permission for ONE ACCOUNT
      setNotLogin(false);
    } catch (error) {
      setError(`"${error.message}"`)
    }
  }


  return (
    <div>{ notLogin ?
        <button onClick={LoginWallet} className='text-xl font-medium cursor-pointer m-20 border-2 p-2 rounded-md border-blue-700 bg-blue-600 text-white'>Connect Wallet</button> : 

        <div className='my-16 mx-96 p-4 border-2 border-black bg-blue-200'>
        <h1 className='text-6xl font-bold mb-8 ml-72'>Crud</h1>
          <form id="create">
            <h2 className='text-2xl font-medium'>Create user</h2>
            <div>
              <label>Name</label>
              <input type="text"  className='text-xl font-medium m-2 border-2 p-1 rounded-md border-blue-700'></input>
            </div>
            <button type="submit" className='text-xl font-medium cursor-pointer m-2 border-2 px-2 py-1 rounded-md border-blue-700 bg-blue-600 text-white ml-36 mb-4'>Submit</button>
            <p></p>
          </form>

          <form id="read">
            <h2 className='text-2xl font-medium'>Read user</h2>
            <div>
              <label className='mx-4'>Id</label>
              <input type="number" className='text-xl font-medium m-2 border-2 p-1 rounded-md border-blue-700'></input>
            </div>
            <button type="submit" className='text-xl font-medium cursor-pointer m-2 border-2 px-2 py-1 rounded-md border-blue-700 bg-blue-600 text-white ml-36 mb-4'>Submit</button>
            <p></p>
          </form>

    

          <form id="edit">
            <h2 className='text-2xl font-medium'>Edit user</h2>
            <div>
              <label className='mx-4'>Id</label>
              <input type="number" className='text-xl font-medium m-2 border-2 p-1 rounded-md border-blue-700'></input>
              <label>Name</label>
              <input type="text" className='text-xl font-medium m-2 border-2 p-1 rounded-md border-blue-700'></input>
            </div>
            <button type="submit" className='text-xl font-medium cursor-pointer m-2 border-2 px-2 py-1 rounded-md border-blue-700 bg-blue-600 text-white ml-36 mb-4'>Submit</button>
            <p></p>
          </form>

          <form id="delete">
            <h2  className='text-2xl font-medium'>Delete user</h2>
            <div>
              <label className='mx-4'>Id</label>
              <input type="number" className='text-xl font-medium m-2 border-2 p-1 rounded-md border-blue-700'></input>
            </div>
            <button type="submit" className='text-xl font-medium cursor-pointer m-2 border-2 px-2 py-1 rounded-md border-blue-700 bg-blue-600 text-white ml-36'>Submit</button>
            <p></p>
          </form>

        </div>
    }
    </div>
  )
}

export default Main;