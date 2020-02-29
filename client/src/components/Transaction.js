import React, { useContext } from 'react'

import {GlobalContext} from '../context/GlobalState'

const Transaction = ({ transaction }) => {
  const { deleteTransaction } = useContext(GlobalContext)

  const sign = transaction.amount < 0 ? '-' : '+'
  const borderColor = transaction.amount < 0 ? 'minus' : 'plus'

  return (
    <li className={borderColor}>
      {transaction.text}
      <span>
        {sign}${Math.abs(transaction.amount)}
      </span>
      <button onClick={() => deleteTransaction(transaction._id)} className="delete-btn">x</button>
    </li>
  )
}

export default Transaction
