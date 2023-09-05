import "./Purchase.scss";
import { useNavigate } from 'react-router-dom';

export default function Purchase() {
  const navigate = useNavigate();
  return (
    <div>
      <h1>Thanks for your purchase</h1>
      <p className='back-btn'><span className="material-symbols-outlined back" onClick={() => navigate("/")}>
        arrow_back
      </span><span>Continue Shopping</span></p>
    </div>
  )
}
