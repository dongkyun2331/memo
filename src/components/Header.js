import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <div className="header">
      <div className="head">
        <Link to={'/'}>
          <div className="logo">
            <img
              src="https://memo.naver.com/favicon.ico?762862db-170b-49fa-8ba2-5fbf123d34df"
              alt=""
            />
            <h1>메모</h1>
          </div>
        </Link>
      </div>
      <div className="left">
        <div className="writememo">
          <Link to={'/write'}>
            <a href="#">새 메모 쓰기</a>
          </Link>
        </div>
      </div>
    </div>
  )
}
