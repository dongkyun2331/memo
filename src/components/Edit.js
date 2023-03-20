import { useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { db } from "../firebase";
import { doc, updateDoc } from "firebase/firestore";

export default function Edit() {
  const detailRef = useRef();
  const note = useLocation().state;
  const navigte = useNavigate();

  async function onEdit(e) {
    e.preventDefault();

    const noteRef = doc(db, "notes", note.id);
    await updateDoc(noteRef, {
      detail: detailRef.current.value,
    });

    navigte("/");
  }

  function goBack(e) {
    e.preventDefault();
    navigte(-1);
  }

  return (
    <div className="container">
      <div className="buttons">
        <button onClick={onEdit}>저장</button>
        <button onClick={goBack}>취소</button>
      </div>
      <form>
        <div>
          <textarea
            cols="30"
            rows="10"
            ref={detailRef}
            defaultValue={note.detail}
          ></textarea>
        </div>
      </form>
    </div>
  );
}
