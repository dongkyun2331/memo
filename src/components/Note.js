import { useState } from 'react'
import { MdMode, MdDelete } from 'react-icon/md'
import { Link } from 'react-router-dom'
import moment from 'moment'
import 'moment/locale/ko'
import { db } from '../firebase'
import { doc, deleteDoc } from 'firebase/firestore'

export default function Note({ note }) {
  const date = moment(note.date.toDate()).format('YYYY-MM-D h:mm')

  async function onDelete() {
    if (window.confirm('정말 삭제하시겠습니까')) {
      await deleteDoc(doc(db, 'notes', note.id))
    }
  }

  return <li className="note"></li>
}
