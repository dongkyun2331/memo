import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <div className="header">
      <Link to={'/'}>
        <h1>
          <img
            src="https://memo.naver.com/favicon.ico?762862db-170b-49fa-8ba2-5fbf123d34df"
            alt=""
          />
          메모
        </h1>
      </Link>
    </div>
  )
}
